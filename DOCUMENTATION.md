<a name="agile"></a>

## agile ⇒ <code>Object</code>
Welcome to the Agile SDK documentation.

This document aims to describe all the functions supported by the SDK, as well as showing examples of their expected usage.

If you feel something is missing, not clear or could be improved, please don't hesitate to open an [issue in GitHub](https://github.com/agile-iot/agile-sdk/issues/new), we'll be happy to help.

**Kind**: global namespace  

| Type | Description |
| --- | --- |
| <code>string</code> | agile-core REST API endpoint |

**Example**  
```js
agile('http://agile-core:8080')
```

* [agile](#agile) ⇒ <code>Object</code>
    * [.protocolManager](#agile.protocolManager) : <code>object</code>
        * [.discovery](#agile.protocolManager.discovery) : <code>object</code>
            * [.start()](#agile.protocolManager.discovery.start) ⇒ <code>Promise</code>
            * [.stop()](#agile.protocolManager.discovery.stop) ⇒ <code>Promise</code>
            * [.status(id)](#agile.protocolManager.discovery.status) ⇒ <code>Promise</code>
        * [.get()](#agile.protocolManager.get) ⇒ <code>Promise</code>
        * [.delete(uuid)](#agile.protocolManager.delete) ⇒ <code>Promise</code>
        * [.create(uuid)](#agile.protocolManager.create) ⇒ <code>Promise</code>
        * [.devices()](#agile.protocolManager.devices) ⇒ <code>Promise</code>
    * [.deviceManager](#agile.deviceManager) : <code>object</code>
        * [.getAll()](#agile.deviceManager.getAll) ⇒ <code>Promise</code>
        * [.get(id)](#agile.deviceManager.get) ⇒ <code>Promise</code>
        * [.create(device, string)](#agile.deviceManager.create) ⇒ <code>Promise</code>
        * [.typeof()](#agile.deviceManager.typeof) ⇒ <code>Promise</code>
    * [.device](#agile.device) : <code>object</code>
        * [.status(deviceId)](#agile.device.status) ⇒ <code>Promise</code>
        * [.get(deviceId, [componentId])](#agile.device.get) ⇒ <code>Promise</code>
        * [.connect(deviceId)](#agile.device.connect) ⇒ <code>Promise</code>
        * [.disconnect(deviceId)](#agile.device.disconnect) ⇒ <code>Promise</code>
        * [.execute(id, command)](#agile.device.execute) ⇒ <code>Promise</code>
        * [.execute(id, command)](#agile.device.execute) ⇒ <code>Promise</code>
        * [.lastUpdate(deviceId, [componentId])](#agile.device.lastUpdate) ⇒ <code>Promise</code>
        * [.subscribe(deviceId, componentId)](#agile.device.subscribe) ⇒ <code>Promise</code>
        * [.get(deviceId, [componentId])](#agile.device.get) ⇒ <code>Promise</code>

<a name="agile.protocolManager"></a>

### agile.protocolManager : <code>object</code>
**Kind**: static namespace of <code>[agile](#agile)</code>  

* [.protocolManager](#agile.protocolManager) : <code>object</code>
    * [.discovery](#agile.protocolManager.discovery) : <code>object</code>
        * [.start()](#agile.protocolManager.discovery.start) ⇒ <code>Promise</code>
        * [.stop()](#agile.protocolManager.discovery.stop) ⇒ <code>Promise</code>
        * [.status(id)](#agile.protocolManager.discovery.status) ⇒ <code>Promise</code>
    * [.get()](#agile.protocolManager.get) ⇒ <code>Promise</code>
    * [.delete(uuid)](#agile.protocolManager.delete) ⇒ <code>Promise</code>
    * [.create(uuid)](#agile.protocolManager.create) ⇒ <code>Promise</code>
    * [.devices()](#agile.protocolManager.devices) ⇒ <code>Promise</code>

<a name="agile.protocolManager.discovery"></a>

#### protocolManager.discovery : <code>object</code>
**Kind**: static namespace of <code>[protocolManager](#agile.protocolManager)</code>  

* [.discovery](#agile.protocolManager.discovery) : <code>object</code>
    * [.start()](#agile.protocolManager.discovery.start) ⇒ <code>Promise</code>
    * [.stop()](#agile.protocolManager.discovery.stop) ⇒ <code>Promise</code>
    * [.status(id)](#agile.protocolManager.discovery.status) ⇒ <code>Promise</code>

<a name="agile.protocolManager.discovery.start"></a>

##### discovery.start() ⇒ <code>Promise</code>
**Kind**: static method of <code>[discovery](#agile.protocolManager.discovery)</code>  
**Summary**: Start a device discovery on all available protocols  
**Access:** public  
**Fulfil**: <code>null</code>  
**Example**  
```js
agile.protocolManager.discovery.start().then(function() {
 console.log('protocolManager discover is on');
});
```
<a name="agile.protocolManager.discovery.stop"></a>

##### discovery.stop() ⇒ <code>Promise</code>
**Kind**: static method of <code>[discovery](#agile.protocolManager.discovery)</code>  
**Summary**: Stop a device discovery on all available protocols  
**Access:** public  
**Fulfil**: <code>null</code>  
**Example**  
```js
agile.protocolManager.discovery.stop().then(function() {
      console.log('protocolManager discover is off');
    });
```
<a name="agile.protocolManager.discovery.status"></a>

##### discovery.status(id) ⇒ <code>Promise</code>
**Kind**: static method of <code>[discovery](#agile.protocolManager.discovery)</code>  
**Summary**: Return the status of discovery on the available protocols  
**Access:** public  
**Fulfil**: <code>bool</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | deviceId |

**Example**  
```js
agile.protocolManager.discovery.status().then(function(status) {
      console.log(status);
    });
```
<a name="agile.protocolManager.get"></a>

#### protocolManager.get() ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocolManager](#agile.protocolManager)</code>  
**Summary**: Get the list of registered protocols  
**Access:** public  
**Fulfil**: <code>Array</code> - protocols  
**Example**  
```js
agile.protocolManager.protocols.get().then(function(protocols) {
      console.log(protocols);
    });
```
<a name="agile.protocolManager.delete"></a>

#### protocolManager.delete(uuid) ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocolManager](#agile.protocolManager)</code>  
**Summary**: Unregister a Dbus Protocol object reference  
**Access:** public  
**Fulfil**: <code>null</code>  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | protocolId |

**Example**  
```js
agile.protocolManager.protocols.delete(protocolId).then(function() {
      console.log('protocol has been unregistered');
    });
```
<a name="agile.protocolManager.create"></a>

#### protocolManager.create(uuid) ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocolManager](#agile.protocolManager)</code>  
**Summary**: Register a new Dbus object implementing the protocol API  
**Access:** public  
**Fulfil**: <code>null</code>  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | protocolId |

**Example**  
```js
agile.protocolManager.protocols.create(protocolId).then(function() {
      console.log('protocol has been registered');
    });
```
<a name="agile.protocolManager.devices"></a>

#### protocolManager.devices() ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocolManager](#agile.protocolManager)</code>  
**Summary**: List all discovered devices on all available protocols  
**Access:** public  
**Fulfil**: <code>Object[]</code> - devices  
**Example**  
```js
agile.protocolManager.devices().then(function(devices) {
  		console.log(devices);
  	});
```
<a name="agile.deviceManager"></a>

### agile.deviceManager : <code>object</code>
**Kind**: static namespace of <code>[agile](#agile)</code>  

* [.deviceManager](#agile.deviceManager) : <code>object</code>
    * [.getAll()](#agile.deviceManager.getAll) ⇒ <code>Promise</code>
    * [.get(id)](#agile.deviceManager.get) ⇒ <code>Promise</code>
    * [.create(device, string)](#agile.deviceManager.create) ⇒ <code>Promise</code>
    * [.typeof()](#agile.deviceManager.typeof) ⇒ <code>Promise</code>

<a name="agile.deviceManager.getAll"></a>

#### deviceManager.getAll() ⇒ <code>Promise</code>
**Kind**: static method of <code>[deviceManager](#agile.deviceManager)</code>  
**Summary**: Get the List all registered devices  
**Access:** public  
**Fulfil**: <code>Array</code> - devices  
**Example**  
```js
agile.deviceManager.getAll().then(function(devices) {
 console.log(devices);
});
```
<a name="agile.deviceManager.get"></a>

#### deviceManager.get(id) ⇒ <code>Promise</code>
**Kind**: static method of <code>[deviceManager](#agile.deviceManager)</code>  
**Summary**: Get a device definition  
**Access:** public  
**Fulfil**: <code>Array</code> - devices  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | deviceId |

**Example**  
```js
agile.deviceManager.get(id).then(function(device) {
 console.log(device);
});
```
<a name="agile.deviceManager.create"></a>

#### deviceManager.create(device, string) ⇒ <code>Promise</code>
**Kind**: static method of <code>[deviceManager](#agile.deviceManager)</code>  
**Summary**: Register a new device based on information from ProtocolManager and device type  
**Access:** public  
**Fulfil**: <code>Object</code> - device  

| Param | Type |
| --- | --- |
| device | <code>Object</code> | 
| string | <code>type</code> | 

**Example**  
```js
agile.deviceManager.create(deviceObj).then(function(newDevice) {
 console.log(newDevice);
});
```
<a name="agile.deviceManager.typeof"></a>

#### deviceManager.typeof() ⇒ <code>Promise</code>
**Kind**: static method of <code>[deviceManager](#agile.deviceManager)</code>  
**Summary**: Get matching types for a device overview  
**Access:** public  
**Fulfil**: <code>Array</code> - deviceTypes  
**Example**  
```js
agile.deviceManager.typeof().then(function(deviceTypes) {
 console.log(deviceTypes);
});
```
<a name="agile.device"></a>

### agile.device : <code>object</code>
**Kind**: static namespace of <code>[agile](#agile)</code>  

* [.device](#agile.device) : <code>object</code>
    * [.status(deviceId)](#agile.device.status) ⇒ <code>Promise</code>
    * [.get(deviceId, [componentId])](#agile.device.get) ⇒ <code>Promise</code>
    * [.connect(deviceId)](#agile.device.connect) ⇒ <code>Promise</code>
    * [.disconnect(deviceId)](#agile.device.disconnect) ⇒ <code>Promise</code>
    * [.execute(id, command)](#agile.device.execute) ⇒ <code>Promise</code>
    * [.execute(id, command)](#agile.device.execute) ⇒ <code>Promise</code>
    * [.lastUpdate(deviceId, [componentId])](#agile.device.lastUpdate) ⇒ <code>Promise</code>
    * [.subscribe(deviceId, componentId)](#agile.device.subscribe) ⇒ <code>Promise</code>
    * [.get(deviceId, [componentId])](#agile.device.get) ⇒ <code>Promise</code>

<a name="agile.device.status"></a>

#### device.status(deviceId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Get the device status  
**Access:** public  
**Fulfil**: <code>String</code> - status  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |

**Example**  
```js
agile.device.status(deviceId).then(function(status) {
      console.log(status);
    });
```
<a name="agile.device.get"></a>

#### device.get(deviceId, [componentId]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Read values of all components from the device  
**Access:** public  
**Fulfil**: <code>Object\|Array</code> Single Component readings returned as object, Device readings returned as Array of Objects.  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |
| [componentId] | <code>String</code> | Agile component name, like a sensor |

**Example**  
```js
agile.device.get(deviceId).then(function(deviceComponents) {
      console.log(deviceComponents);
    });
```
**Example**  
```js
agile.device.get(deviceId, componentId).then(function(deviceComponents) {
      console.log(deviceComponents);
    });
```
<a name="agile.device.connect"></a>

#### device.connect(deviceId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Connect the device at protocol level  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |

**Example**  
```js
agile.device.connect(deviceId).then(function() {
      console.log('Connected!');
    });
```
<a name="agile.device.disconnect"></a>

#### device.disconnect(deviceId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Disconnect device at protocol level  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |

**Example**  
```js
agile.device.disconnect(deviceId).then(function() {
      console.log('Disconnected!');
    });
```
<a name="agile.device.execute"></a>

#### device.execute(id, command) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Perform an action on the device  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Agile device Id |
| command | <code>String</code> | Operation name to be performed |

**Example**  
```js
agile.device.connect(id, command).then(function() {
      console.log('Connected!');
    });
```
<a name="agile.device.execute"></a>

#### device.execute(id, command) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Perform an action on the device  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Agile device Id |
| command | <code>String</code> | Operation name to be performed |

**Example**  
```js
agile.device.execute(id, command).then(function() {
      console.log('Connected!');
    });
```
<a name="agile.device.lastUpdate"></a>

#### device.lastUpdate(deviceId, [componentId]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Get the last record fetched from the device or component  
**Access:** public  
**Fulfil**: <code>Object\|Array</code> Single Component readings returned as object, Device readings returned as Array of Objects.  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |
| [componentId] | <code>String</code> | Agile component name, like a sensor |

**Example**  
```js
agile.device.lastUpdate('123', 'Temperature').then(function(temperatureReading) {
 console.log(temperatureReading);
});
```
**Example**  
```js
agile.device.lastUpdate(deviceId).then(function(componentsReading) {
 console.log(componentsReading);
});
```
<a name="agile.device.subscribe"></a>

#### device.subscribe(deviceId, componentId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Enable a subscription to a data stream. Asynchronous data updates will be delivered via websocket.  
**Access:** public  
**Fulfil**: <code>Object</code> - stream - https://www.w3.org/TR/websockets/  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |
| componentId | <code>String</code> | Operation name to be performed |

**Example**  
```js
agile.device.execute(deviceId, componentId).then(function(stream) {
  stream.onerror = () => {
   console.log('Connection Error');
 };

 stream.onopen = () => {
   console.log('WebSocket Client Connected');
 };

 stream.onclose = () => {
   console.log('echo-protocol Client Closed');
 };

 stream.onmessage = (e) => {
   if (typeof e.data === 'string') {
     console.log("Received: '" + e.data + "'");
   }
 };
});
```
<a name="agile.device.get"></a>

#### device.get(deviceId, [componentId]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Read values of all components from the device  
**Access:** public  
**Fulfil**: <code>Object\|Array</code> Single Component readings returned as object, Device readings returned as Array of Objects.  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |
| [componentId] | <code>String</code> | Agile component name, like a sensor |

**Example**  
```js
agile.device.get(deviceId).then(function(deviceComponents) {
 console.log(deviceComponents);
});
```
