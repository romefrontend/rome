/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {root, devFolder} = require('./_constants.cjs');
const child = require('child_process');
const path = require('path');
const fs = require('fs');

exports.unlink = function(loc, isFile, isDirectory) {
  if (!fs.existsSync(loc)) {
    return;
  }

  if (isFile) {
    fs.unlinkSync(loc);
  } else if (isDirectory) {
    for (const filename of fs.readdirSync(loc, {withFileTypes: true})) {
      exports.unlink(
        path.join(loc, filename.name),
        filename.isFile(),
        filename.isDirectory(),
      );
    }
    fs.rmdirSync(loc);
  }
};

exports.exec = function(cmd, args) {
  const res = child.spawnSync(cmd, args, {
    stdio: 'inherit',
  });
  if (res.status !== 0) {
    process.exit(1);
  }
};

exports.execNode = function(args) {
  exports.exec(process.execPath, [...process.execArgv, ...args]);
};

exports.write = function(loc, content) {
  console.log('Wrote', loc);
  fs.mkdirSync(path.dirname(loc), {recursive: true});
  fs.writeFileSync(loc, content);
};

exports.getBuilderName = function(name) {
  const [startingCapitals] = name.match(/^([A-Z]+)/);

  if (startingCapitals.length === 1) {
    // Only one capital
    return name[0].toLowerCase() + name.slice(1);
  } else {
    // Take all and capitalize the first lowercase
    const rest = name.slice(startingCapitals.length - 1);
    return startingCapitals.slice(0, -1).toLowerCase() + rest;
  }
};

exports.inverse = function(str) {
  return `\u001b[7m ${str} \u001b[27m`;
};

exports.execDev = function(argv) {
  exports.buildTrunk();
  process.env.ROME_CACHE = '0';
  console.log(exports.inverse('Executing trunk'));
  exports.execNode([path.join(devFolder, 'index.js'), ...argv]);
};

exports.buildTrunk = function() {
  exports.unlink(devFolder, false, true);
  fs.mkdirSync(devFolder);

  console.log(exports.inverse('Building trunk'));
  exports.execNode([
    path.join(__dirname, 'vendor/rome.cjs'),
    'bundle',
    path.join(root, 'packages/@romejs/cli/bin/rome.ts'),
    devFolder,
    '--quiet',
  ]);
};

const COMMENT_REGEX = /\/\/ EVERYTHING BELOW IS AUTOGENERATED\. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS([\s\S]+)$/;
const COMMENT_TEXT = `// EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS`;

exports.readGeneratedFile = function(loc) {
  let file = fs.readFileSync(loc, 'utf8');
  file = file.replace(COMMENT_REGEX, '');
  file = file.trim();
  file += '\n\n';
  file += COMMENT_TEXT;
  file += '\n\n';
  return file;
};
