Agile SDK
=========

> The official JavaScript [Agile IoT](https://github.com/Agile-IoT) SDK.

[![Build Status](https://travis-ci.org/resin-io/resin-sdk.svg?branch=master)](https://travis-ci.org/Agile-IoT/agile-sdk)
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/Agile-IoT)

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

The module exports a single factory function that takes a your Agile API hostname as a single argument.

```
var agile = require('agile-sdk')('http://agile.local:8080')
```

Here a example of reading data from a device:

``` js
import agileSDK from './src';

const agile = agileSDK('http://agile.local:8080');
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

Support
-------

If you're having any problem, please [raise an issue](https://github.com/Agile-IoT/agile-sdk/issues/new) on GitHub and the team will be happy to help.

Tests
-----

```
npm run test
```
