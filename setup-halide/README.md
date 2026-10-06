# `setup-halide` action

Installs a [prebuilt Halide distribution](https://github.com/awakecoding/llvm-prebuilt).

## Usage

```yaml
- uses: Devolutions/actions/setup-halide@v1
  with:
    # Halide version
    #
    # Default: '21.0.0'
    version: ''

    # prebuilt distribution version
    #
    # Default: 'v2026.1.1'
    prebuilt_version: ''

    # Set HALIDE_ROOT_DIR environment variable
    #
    # Default: 'true'
    set_halide_root_dir: ''

    # Skip checksum validation
    #
    # Default: 'false'
    skip_checksum_validation: ''
```

## Scenarios

```yaml
- name: Setup Halide
  uses: Devolutions/actions-public/setup-halide@v1
```

```yaml
- name: Setup Halide
  uses: Devolutions/actions-public/setup-halide@v1
  with:
    version: "21.0.0"
    prebuilt_version: "v2026.1.1"
    set_halide_root_dir: true
    skip_checksum_validation: false
```
