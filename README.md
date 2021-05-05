# doc-validator javascript action

This action run doc-validator on a given markdown file and failes the action if validation fails

## Inputs

### `markdown`

**Required** The name of the markdown file to validate`.

## Outputs

### `result`

result can be only 'success' or the action will fail

## Example usage

uses: actions/doc-validator-action@v1.0.0
with:
  markdown: './README.md'
