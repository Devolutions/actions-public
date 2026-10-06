# `setup-llvm` action

Installs a [prebuilt clang-llvm distribution](https://github.com/awakecoding/llvm-prebuilt).

## Usage

```yaml
- uses: Devolutions/actions/setup-llvm@v1
  with:
    # clang-llvm version
    #
    # Default: '22.1.4'
    version: ''

    # prebuilt distribution version
    #
    # Default: 'v2026.1.1'
    prebuilt_version: ''

    # Add LLVM binary directory to PATH
    #
    # Default: 'true'
    add_to_path: ''

    # Set LLVM_DIR environment variable
    #
    # Default: 'false'
    set_llvm_dir: ''

    # Skip checksum validation
    #
    # Default: 'false'
    skip_checksum_validation: ''
```

## Scenarios

```yaml
- name: Setup llvm
  uses: Devolutions/actions-public/setup-llvm@v1
```

```yaml
- name: Setup llvm
  uses: Devolutions/actions-public/setup-llvm@v1
  with:
    version: "22.1.4"
    prebuilt_version: "v2026.1.1"
    add_to_path: true
    set_llvm_dir: false
    skip_checksum_validation: false
```
