# `setup-cctools` action

Installs prebuilt [Apple cctools port for Linux](https://github.com/tpoechtrager/cctools-port).

## Usage

```yaml
- uses: Devolutions/actions/setup-cctools@v1
  with:
    # prebuilt distribution version
    #
    # Default: 'v2025.2.0'
    prebuilt_version: ''

    # Skip checksum validation
    #
    # Default: 'false'
    skip_checksum_validation: ''
```

## Scenarios

```yaml
- name: Setup CCTools
  uses: Devolutions/actions-public/setup-cctools@v1
```

```yaml
- name: Setup CCTools
  uses: Devolutions/actions-public/setup-cctools@v1
  if: runner.os == 'Linux'
  with:
    prebuilt_version: "v2025.2.0"
    skip_checksum_validation: false
```
