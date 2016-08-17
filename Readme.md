metalsmith-rework
===============

<!---
Excluded for now
[![Build Status](https://travis-ci.org/esundahl/metalsmith-rework.svg?branch=master)](https://travis-ci.org/esundahl/metalsmith-rework)
![Dependencies](https://david-dm.org/esundahl/metalsmith-rework.png)
-->

An [rework](https://github.com/reworkcss/rework) plugin for Metalsmith.

## Installation

```sh
npm install --save metalsmith-rework
```

## Getting Started

If you haven't checked out [Metalsmith](http://metalsmith.io/) before, head over to their website and check out the
documentation.

In order to use this plugin, you need to include the `rework` module in your `package.json` file:
```json
{
  ...
  "dependencies": {
    ...
    "rework": "*"
  }
  
}
```

## CLI Usage

If you are using the command-line version of Metalsmith, you can install via npm, and then add the
`metalsmith-rework` key to your `metalsmith.json` file:

```json
{
  "plugins": {
    "metalsmith-rework": {}
  }
}
```

## JavaScript API

If you are using the JS Api for Metalsmith, then you can require the module and add it to your
`.use()` directives:

```js
var reworkPlugin = require('metalsmith-rework');

metalsmith.use(reworkPlugin({
    configure: (rework, filePath) => { 
      var directory =  path.dirname(filePath)
     
      return rework.use(reworkPlugin())}
    )}))
```

## Options

None yet
