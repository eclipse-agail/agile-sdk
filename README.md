Agile SDK
=========

> The official JavaScript [Agile IoT](https://github.com/Agile-IoT) SDK.

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![Build Status](https://travis-ci.org/resin-io/resin-sdk.svg?branch=master)](https://travis-ci.org/Agile-IoT/agile-sdk)

Role
----

The intention of this module is to provide developers a nice API to integrate their JavaScript applications with Agile IoT Gateway.

Installation
------------

Install the Agile SDK by running:

```sh
$ npm install --save agile-sdk
```

Documentation
-------------

The module exports a single factory function that takes an object including your Agile API hostname as the api property. Additionally, it can receive the idm url and a token.

It's available in node.js and the browser.

``` js
var agile = require('agile-sdk')({
  api: 'http://agile.local:8080',
  idm: 'http://agile.local:3000',
  token: "LQCL7C14y84Ayqedjmbm1LuIes1TsSyn5Cv"
})
```

For convenience it's shipped with a browser bundle too with agileSDK expose as a global constant eg.

``` html
<script src="node_modules/agile-sdk/dist/bundle.js"></script>
<script>
var agile = agileSDK({
  api: 'http://agile.local:8080',
  idm: 'http://agile.local:3000',
  token: "LQCL7C14y84Ayqedjmbm1LuIes1TsSyn5Cv"
});

agile.protocolManager.discovery.start()
.then(function() {
  console.log('started!')
})
.catch(function(err) {
  console.log(err)
});
</script>
```

Here a example of reading data from a device:

``` js
import agileSDK from 'agile-sdk';

const agile = agileSDK({
  api: 'http://agile.local:8080',
  idm: 'http://agile.local:3000',
  token: "LQCL7C14y84Ayqedjmbm1LuIes1TsSyn5Cv"
});
const deviceId = 'bleB0B448BE5084';
const componentID = 'Temperature';

agile.device.subscribe(deviceId, componentID).then(stream => {
  stream.onerror = () => {
    console.log('Connection Error');
  };

  stream.onopen = () => {
    console.log('Connected');
  };

  stream.onclose = () => {
    console.log('Closed');
  };

  stream.onmessage = (e) => {
    if (typeof e.data === 'string') {
        console.log("Received: '" + e.data + "'");
    }
  };
}).catch(err => {
  console.log(err);
});
```

[Read full documentation](DOCUMENTATION.md).

Change Log
---------

The change log is automatically managed by [versionist](https://github.com/resin-io/versionist). [View full change log](CHANGELOG.md).

Support
-------

If you're having any problem, please [raise an issue](https://github.com/Agile-IoT/agile-sdk/issues/new) on GitHub and the team will be happy to help.

Tests
-----

```
npm run test
```
