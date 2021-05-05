const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
const parse = require('doc-validator');

try {
  const markdown = core.getInput('markdown');
  const content = fs.readFileSync(markdown, "utf8");
  const result= parse(content)
  if (result === "") {
    core.setOutput("result", 'success');
  }
  else{
    core.setFailed(result);
  }
} catch (error) {
  core.setFailed(error.message);
}
