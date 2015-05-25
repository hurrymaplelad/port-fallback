port-fallback
==============

Start a server on an available port.
Tries a random higher port if the requested port is taken.

[![NPM version](http://img.shields.io/npm/v/port-fallback.svg?style=flat-square)](https://www.npmjs.org/package/port-fallback)
[![Build Status](http://img.shields.io/travis/hurrymaplelad/port-fallback/master.svg?style=flat-square)](https://travis-ci.org/hurrymaplelad/port-fallback)

Getting Started
---------------

```js
var portFallback = require('port-fallback'),
    http = require('http'),
    defaultPort = 4000,
    server = http.createServer()

portFallback.listen(server,
  {defaultPort: defaultPort},
  function(err, port) {
    console.log("Listening on "+port)
    // ...
  }
)
```
