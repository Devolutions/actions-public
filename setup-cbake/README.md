# `setup-cbake` action

Installs [CBake](https://github.com/Devolutions/cbake) with optional prebuilt sysroots and CMake toolchain files for cross-compilation.

## Usage

```yaml
- uses: Devolutions/actions/setup-cbake@v1
  with:
    # cbake version
    #
    # Default: 'v2025.2.0'
    version: ''

    # List of sysroots to download
    #
    # Default: |
    #  - ubuntu-20.04-amd64
    #  - ubuntu-20.04-arm64
    sysroots: ''

    # Make sure Ninja is installed
    #
    # Default: 'true'
    install_ninja: ''

    # Generate environment scripts for cargo
    #
    # Default: 'false'
    cargo_env_scripts: ''

    # Skip checksum validation
    #
    # Default: 'false'
    skip_checksum_validation: ''
```

## Scenarios

```yaml
- name: Setup CBake
  uses: Devolutions/actions-public/setup-cbake@v1
```

```yaml
- name: Setup CBake
  uses: Devolutions/actions-public/setup-cbake@v1
  with:
    version: "v2025.2.0"
    sysroots: |
      - ubuntu-20.04-amd64
      - ubuntu-20.04-arm64
    cargo_env_scripts: true
    skip_checksum_validation: false
```
