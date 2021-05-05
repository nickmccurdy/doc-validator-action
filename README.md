# doc-validator javascript action

This action run doc-validator on a given markdown file and failes the action if validation fails

## Inputs

### `markdown`

**Required** The name of the markdown file to validate`.

## Outputs

### `result`

result can be only 'success' or the action will fail

## Example usage

uses: amitmiran137/doc-validator-action@v1
with:
  markdown: './README.md'
