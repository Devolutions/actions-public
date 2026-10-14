# Devolutions Server Get SecretEntry Action

This GitHub Action allows you to authenticate and retrieve a secret entry from Devolutions Server.

## Prerequisites

Before using this action, you must first obtain a token using the `dvls-login` action:

```yaml
steps:
  - name: Login to Devolutions Server
    uses: devolutions/actions-public/dvls-login@main
    with:
      server_url: 'https://your-server.devolutions.app'
      app_key: ${{ secrets.DVLS_APP_KEY }}
      app_secret: ${{ secrets.DVLS_APP_SECRET }}
      # The token will be stored in DVLS_TOKEN by default
```

## Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `server_url` | URL of the Devolutions Server | Yes | - |
| `token` | Token for authentication | Yes | - |
| `vault_name` | Name of the vault containing the secret entry | Yes | - |
| `entry_name` | Name of the secret entry to retrieve | Yes | - |
| `output_variable` | Name of the environment variable to store the retrieved secret | No | `DVLS_ENTRY_SECRET` |
| `skip_tls_verify` | Disable TLS certificate verification (insecure, see [TLS certificate verification](#tls-certificate-verification)) | No | `false` |

## Usage

```yaml
steps:
  - name: Get Secret from Devolutions Server
    uses: devolutions/actions-public/dvls-get-secret-entry@main
    with:
      server_url: 'https://your-server.devolutions.app'
      token: ${{ secrets.DVLS_TOKEN }}
      vault_name: 'MyVault'
      entry_name: 'MySecret'
      output_variable: 'MY_SECRET' # Optional, defaults to DVLS_ENTRY_SECRET
```

## Example Workflow

Here's a complete example of how to use this action in your workflow:

```yaml
name: Example Workflow
on: [push]

jobs:
  example:
    runs-on: ubuntu-latest
    steps:
      - name: Login to Devolutions Server
        uses: devolutions/actions-public/dvls-login@main
        with:
          server_url: 'https://your-server.devolutions.app'
          app_key: ${{ secrets.DVLS_APP_KEY }}
          app_secret: ${{ secrets.DVLS_APP_SECRET }}

      - name: Get Secret
        uses: devolutions/actions-public/dvls-get-secret-entry@main
        with:
          server_url: 'https://your-server.devolutions.app'
          token: ${{ env.DVLS_TOKEN }}  # Uses the token from the login step
          vault_name: 'MyVault'
          entry_name: 'MySecret'

      - name: Use Secret
        run: |
          echo "Secret is stored in ${{ env.DVLS_ENTRY_SECRET }}"
          # Your code that uses the secret
```

## TLS Certificate Verification

The action verifies the Devolutions Server TLS certificate. If your server uses a certificate issued by a private CA, make the CA trusted instead of disabling verification:

```yaml
env:
  NODE_EXTRA_CA_CERTS: ${{ github.workspace }}/certs/my-ca.pem
```

`skip_tls_verify: true` disables certificate verification entirely. Anyone able to intercept the traffic between the runner and the server can then read the credentials and secrets exchanged. Only use it for testing with self-signed certificates.

## Security Notes

- Store your Devolutions Server token as a GitHub Secret
- Never print secrets in logs or expose them in any way
- The secret will be stored in an environment variable that is accessible to subsequent steps in your workflow

## License

This GitHub Action is available under the [MIT License](LICENSE).
