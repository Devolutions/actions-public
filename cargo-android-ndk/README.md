# `cargo-android-ndk` action

Configures cargo to use the Android NDK for cross-compilation.

## Usage

```yaml
- uses: Devolutions/actions/cargo-android-ndk@v1
  with:
    # Android API level
    #
    # Default: '21'
    android_api_level: ''
```

## Scenarios

```yaml
- name: Setup CBake
  uses: Devolutions/actions-public/cargo-android-ndk@v1
```

```yaml
- name: Setup CBake
  uses: Devolutions/actions-public/cargo-android-ndk@v1
  with:
    android_api_level: "21"
```
