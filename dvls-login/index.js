const core = require('@actions/core');
const axios = require('axios');
const https = require('https');

let axiosInstance = axios.create();

async function getAuthToken(serverUrl, appKey, appSecret) {
  core.debug('Attempting to get auth token...');
  const response = await axiosInstance.post(`${serverUrl}/api/v1/login`, {
    appKey: appKey,
    appSecret: appSecret
  });
  core.debug('Successfully obtained auth token');
  return response.data.tokenId;
}

async function makeRequest(description, requestFn) {
  try {
    core.debug(`Starting request: ${description}`);
    const result = await requestFn();
    core.debug(`Successfully completed request: ${description}`);
    return result;
  } catch (error) {
    core.debug('Full error object:');
    core.debug(JSON.stringify({
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      headers: error.response?.headers,
      url: error.config?.url,
      method: error.config?.method,
      queryParams: error.config?.params
    }, null, 2));

    const apiMessage = error.response?.data?.message;
    throw new Error(`${description} failed: ${apiMessage || error.message} (Status: ${error.response?.status})`);
  }
}

async function run() {
  try {
    core.debug('Starting action execution');
    
    const serverUrl = core.getInput('server_url');
    const appKey = core.getInput('app_key');
    const appSecret = core.getInput('app_secret');
    const outputVariable = core.getInput('output_variable');
    const skipTlsVerify = core.getBooleanInput('skip_tls_verify');

    if (skipTlsVerify) {
      core.warning('TLS certificate verification is disabled (skip_tls_verify: true). The connection to Devolutions Server is vulnerable to interception. Prefer trusting your CA with NODE_EXTRA_CA_CERTS.');
      axiosInstance = axios.create({
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
      });
    }

    core.debug(`Server URL: ${serverUrl}`);
    
    const token = await makeRequest('Authentication', () => 
      getAuthToken(serverUrl, appKey, appSecret)
    );

    core.setSecret(token);
    core.exportVariable(outputVariable, token);
    core.setOutput('token', token);
    core.debug('Action completed successfully');
  } catch (error) {
    core.debug(`Action failed: ${error.message}`);
    core.setFailed(error.message);
  }
}

run();