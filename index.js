const core = require('@actions/core');
const github = require('@actions/github');
const fs = require("fs");
import parser from 'doc-validator';

try {
  // `who-to-greet` input defined in action metadata file
  const markdown = core.getInput('markdown');
  const content = fs.readFileSync(markdown, "utf8");
  const result= parser(content)
  if (result === "") {
    core.setOutput("result", 'success');
  }
  else{
    core.setFailed(result);
  }
} catch (error) {
  core.setFailed(error.message);
}
