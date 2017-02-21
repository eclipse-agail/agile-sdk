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
var agile = require('agile-sdk')('http://agile-core:8080')
```

* [agile](#agile) ⇒ <code>Object</code>
    * [.protocolManager](#agile.protocolManager) : <code>object</code>
        * [.discovery](#agile.protocolManager.discovery) : <code>object</code>
            * [.start([protocolId])](#agile.protocolManager.discovery.start) ⇒ <code>Promise</code>
            * [.stop([protocolId])](#agile.protocolManager.discovery.stop) ⇒ <code>Promise</code>
            * [.status([protocolId])](#agile.protocolManager.discovery.status) ⇒ <code>Promise</code>
        * [.get()](#agile.protocolManager.get) ⇒ <code>Promise</code>
        * [.delete(protocolId)](#agile.protocolManager.delete) ⇒ <code>Promise</code>
        * [.create(protocolId)](#agile.protocolManager.create) ⇒ <code>Promise</code>
        * [.devices()](#agile.protocolManager.devices) ⇒ <code>Promise</code>
    * [.deviceManager](#agile.deviceManager) : <code>object</code>
        * [.get([deviceId])](#agile.deviceManager.get) ⇒ <code>Promise</code>
        * [.delete(deviceId)](#agile.deviceManager.delete) ⇒ <code>Promise</code>
        * [.create(deviceOverview, type)](#agile.deviceManager.create) ⇒ <code>Promise</code>
        * [.typeof(deviceOverview)](#agile.deviceManager.typeof) ⇒ <code>Promise</code>
    * [.device](#agile.device) : <code>object</code>
        * [.status(deviceId)](#agile.device.status) ⇒ <code>Promise</code>
        * [.get(deviceId, [componentId])](#agile.device.get) ⇒ <code>Promise</code>
        * [.connect(deviceId)](#agile.device.connect) ⇒ <code>Promise</code>
        * [.disconnect(deviceId)](#agile.device.disconnect) ⇒ <code>Promise</code>
        * [.execute(deviceId, command)](#agile.device.execute) ⇒ <code>Promise</code>
        * [.lastUpdate(deviceId, [componentId])](#agile.device.lastUpdate) ⇒ <code>Promise</code>
        * [.subscribe(deviceId, componentId)](#agile.device.subscribe) ⇒ <code>Promise</code>
        * [.unsubscribe(deviceId, componentId)](#agile.device.unsubscribe) ⇒ <code>Promise</code>
    * [.protocol](#agile.protocol) : <code>object</code>
        * [.disconnect(protocolId, deviceId)](#agile.protocol.disconnect) ⇒ <code>Promise</code>
        * [.connect(protocolId, deviceId)](#agile.protocol.connect) ⇒ <code>Promise</code>
        * [.read(protocolId, deviceId)](#agile.protocol.read) ⇒ <code>Promise</code>
        * [.write(protocolId, deviceId, data)](#agile.protocol.write) ⇒ <code>Promise</code>

<a name="agile.protocolManager"></a>

### agile.protocolManager : <code>object</code>
**Kind**: static namespace of <code>[agile](#agile)</code>  

* [.protocolManager](#agile.protocolManager) : <code>object</code>
    * [.discovery](#agile.protocolManager.discovery) : <code>object</code>
        * [.start([protocolId])](#agile.protocolManager.discovery.start) ⇒ <code>Promise</code>
        * [.stop([protocolId])](#agile.protocolManager.discovery.stop) ⇒ <code>Promise</code>
        * [.status([protocolId])](#agile.protocolManager.discovery.status) ⇒ <code>Promise</code>
    * [.get()](#agile.protocolManager.get) ⇒ <code>Promise</code>
    * [.delete(protocolId)](#agile.protocolManager.delete) ⇒ <code>Promise</code>
    * [.create(protocolId)](#agile.protocolManager.create) ⇒ <code>Promise</code>
    * [.devices()](#agile.protocolManager.devices) ⇒ <code>Promise</code>

<a name="agile.protocolManager.discovery"></a>

#### protocolManager.discovery : <code>object</code>
**Kind**: static namespace of <code>[protocolManager](#agile.protocolManager)</code>  

* [.discovery](#agile.protocolManager.discovery) : <code>object</code>
    * [.start([protocolId])](#agile.protocolManager.discovery.start) ⇒ <code>Promise</code>
    * [.stop([protocolId])](#agile.protocolManager.discovery.stop) ⇒ <code>Promise</code>
    * [.status([protocolId])](#agile.protocolManager.discovery.status) ⇒ <code>Promise</code>

<a name="agile.protocolManager.discovery.start"></a>

##### discovery.start([protocolId]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[discovery](#agile.protocolManager.discovery)</code>  
**Summary**: Start device discovery on all or single protocol  
**Access:** public  
**Fulfil**: <code>null</code>  

| Param | Description |
| --- | --- |
| [protocolId] | Agile protocol Id |

**Example**  
```js
agile.protocolManager.discovery.start().then(function() {
  console.log('All protocols discovery is on');
});
agile.protocolManager.discovery.start('Bluetooth LE').then(function() {
  console.log('Bluetooth LE protocols discovery is on');
});
```
<a name="agile.protocolManager.discovery.stop"></a>

##### discovery.stop([protocolId]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[discovery](#agile.protocolManager.discovery)</code>  
**Summary**: Stop device discovery on all or single protocol  
**Access:** public  
**Fulfil**: <code>null</code>  

| Param | Description |
| --- | --- |
| [protocolId] | Agile protocol Id |

**Example**  
```js
agile.protocolManager.discovery.stop().then(function() {
  console.log('All protocols discovery is off');
});
agile.protocolManager.discovery.stop('Bluetooth LE').then(function() {
  console.log('Bluetooth LE discovery is off');
});
```
<a name="agile.protocolManager.discovery.status"></a>

##### discovery.status([protocolId]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[discovery](#agile.protocolManager.discovery)</code>  
**Summary**: Return the status of discovery on the all or single protocol  
**Access:** public  
**Fulfil**: <code>Object</code>  

| Param | Description |
| --- | --- |
| [protocolId] | Agile protocol Id |

**Example**  
```js
agile.protocolManager.discovery.status().then(function(status) {
  console.log(status);
});
agile.protocolManager.discovery.status('Bluetooth LE').then(function(status) {
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

#### protocolManager.delete(protocolId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocolManager](#agile.protocolManager)</code>  
**Summary**: Unregister a Dbus Protocol object reference  
**Access:** public  
**Fulfil**: <code>null</code>  

| Param | Type | Description |
| --- | --- | --- |
| protocolId | <code>String</code> | Agile protocol Id |

**Example**  
```js
agile.protocolManager.protocols.delete(protocolId).then(function() {
  console.log('protocol has been unregistered');
});
```
<a name="agile.protocolManager.create"></a>

#### protocolManager.create(protocolId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocolManager](#agile.protocolManager)</code>  
**Summary**: Register a new Dbus object implementing the protocol API  
**Access:** public  
**Fulfil**: <code>null</code>  

| Param | Type | Description |
| --- | --- | --- |
| protocolId | <code>String</code> | Agile protocol Id |

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
**Fulfil**: <code>Array</code> - devices  
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
    * [.get([deviceId])](#agile.deviceManager.get) ⇒ <code>Promise</code>
    * [.delete(deviceId)](#agile.deviceManager.delete) ⇒ <code>Promise</code>
    * [.create(deviceOverview, type)](#agile.deviceManager.create) ⇒ <code>Promise</code>
    * [.typeof(deviceOverview)](#agile.deviceManager.typeof) ⇒ <code>Promise</code>

<a name="agile.deviceManager.get"></a>

#### deviceManager.get([deviceId]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[deviceManager](#agile.deviceManager)</code>  
**Summary**: Get all or single device definition  
**Access:** public  
**Fulfil**: <code>Array</code> - devices  

| Param | Type | Description |
| --- | --- | --- |
| [deviceId] | <code>String</code> | Agile device Id |

**Example**  
```js
agile.deviceManager.get('bleB0B448BE5084').then(function(device) {
  console.log(device);
});
```
<a name="agile.deviceManager.delete"></a>

#### deviceManager.delete(deviceId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[deviceManager](#agile.deviceManager)</code>  
**Summary**: Delete a device definition and unregister it  
**Access:** public  
**Fulfil**: <code>undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |

**Example**  
```js
agile.deviceManager.delete('bleB0B448BE5084').then(function() {
  console.log('Device bleB0B448BD1085 deleted');
});
```
<a name="agile.deviceManager.create"></a>

#### deviceManager.create(deviceOverview, type) ⇒ <code>Promise</code>
**Kind**: static method of <code>[deviceManager](#agile.deviceManager)</code>  
**Summary**: Register a new device based on information from ProtocolManager and device type  
**Access:** public  
**Fulfil**: <code>Object</code> - device  

| Param | Type |
| --- | --- |
| deviceOverview | <code>Object</code> | 
| type | <code>string</code> | 

**Example**  
```js
const deviceOverview = {
  "name": "CC2650 SensorTag",
  "protocol": "iot.agile.protocol.BLE",
  "id": "B0:B4:48:BD:10:85",
  "status": "CONNECTED"
};
const type = "TI SensorTag";

agile.deviceManager.create(deviceOverview, type).then(function(newDevice) {
 console.log(newDevice);
});
```
<a name="agile.deviceManager.typeof"></a>

#### deviceManager.typeof(deviceOverview) ⇒ <code>Promise</code>
**Kind**: static method of <code>[deviceManager](#agile.deviceManager)</code>  
**Summary**: Get matching types for a device overview  
**Access:** public  
**Fulfil**: <code>Array</code> - deviceTypes  

| Param | Type |
| --- | --- |
| deviceOverview | <code>Object</code> | 

**Example**  
```js
const deviceOverview = {
  "name": "CC2650 SensorTag",
  "protocol": "iot.agile.protocol.BLE",
  "id": "B0:B4:48:BD:10:85",
  "status": "CONNECTED"
};

agile.deviceManager.typeof(deviceOverview).then(function(deviceTypes) {
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
    * [.execute(deviceId, command)](#agile.device.execute) ⇒ <code>Promise</code>
    * [.lastUpdate(deviceId, [componentId])](#agile.device.lastUpdate) ⇒ <code>Promise</code>
    * [.subscribe(deviceId, componentId)](#agile.device.subscribe) ⇒ <code>Promise</code>
    * [.unsubscribe(deviceId, componentId)](#agile.device.unsubscribe) ⇒ <code>Promise</code>

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
agile.device.status('bleB0B448BE5084').then(function(status) {
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
agile.device.get('bleB0B448BE5084').then(function(deviceComponents) {
  console.log(deviceComponents);
});
```
**Example**  
```js
agile.device.get('bleB0B448BE5084', 'Temperature').then(function(deviceComponent) {
  console.log(deviceComponent);
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
agile.device.connect('bleB0B448BE5084').then(function() {
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
agile.device.disconnect('bleB0B448BE5084').then(function() {
  console.log('Disconnected!');
});
```
<a name="agile.device.execute"></a>

#### device.execute(deviceId, command) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Perform an action on the device  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |
| command | <code>String</code> | Operation name to be performed |

**Example**  
```js
agile.device.execute('bleB0B448BE5084', command).then(function() {
  console.log(`executed ${command}!``);
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
agile.device.lastUpdate('bleB0B448BE5084', 'Temperature').then(function(temperatureReading) {
 console.log(temperatureReading);
});
```
**Example**  
```js
agile.device.lastUpdate('bleB0B448BE5084').then(function(componentsReading) {
 console.log(componentsReading);
});
```
<a name="agile.device.subscribe"></a>

#### device.subscribe(deviceId, componentId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Enable a subscription to a data stream. Asynchronous data updates will be delivered via websocket.  
**Access:** public  
**Fulfil**: <code>Object</code> - websocket instance - https://www.w3.org/TR/websockets/  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |
| componentId | <code>String</code> | Operation name to be performed |

**Example**  
```js
agile.device.subscribe('bleB0B448BE5084', 'Temperature').then(function(stream) {
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
<a name="agile.device.unsubscribe"></a>

#### device.unsubscribe(deviceId, componentId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[device](#agile.device)</code>  
**Summary**: Unsubscribe from a data stream  
**Access:** public  
**Fulfil**: <code>undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| deviceId | <code>String</code> | Agile device Id |
| componentId | <code>String</code> | Agile component name, like a sensor |

**Example**  
```js
agile.device.get('bleB0B448BE5084', 'Temperature').then(function() {
 console.log('Unsubscribed!');
});
```
<a name="agile.protocol"></a>

### agile.protocol : <code>object</code>
**Kind**: static namespace of <code>[agile](#agile)</code>  

* [.protocol](#agile.protocol) : <code>object</code>
    * [.disconnect(protocolId, deviceId)](#agile.protocol.disconnect) ⇒ <code>Promise</code>
    * [.connect(protocolId, deviceId)](#agile.protocol.connect) ⇒ <code>Promise</code>
    * [.read(protocolId, deviceId)](#agile.protocol.read) ⇒ <code>Promise</code>
    * [.write(protocolId, deviceId, data)](#agile.protocol.write) ⇒ <code>Promise</code>

<a name="agile.protocol.disconnect"></a>

#### protocol.disconnect(protocolId, deviceId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocol](#agile.protocol)</code>  
**Summary**: Disconnect from the device  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| protocolId | <code>String</code> | Agile Id of the protocol |
| deviceId | <code>String</code> | Agile internal Id of the protocol |

**Example**  
```js
agile.protocol.disconnect('Bluetooth LE', 'bleB0B448BE5084').then(function() {
 console.log('Disconnected!');
});
```
<a name="agile.protocol.connect"></a>

#### protocol.connect(protocolId, deviceId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocol](#agile.protocol)</code>  
**Summary**: Connect to the device  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| protocolId | <code>String</code> | Agile Id of the protocol |
| deviceId | <code>String</code> | Agile internal Id of the protocol |

**Example**  
```js
agile.protocol.connect('Bluetooth LE', 'bleB0B448BE5084').then(function() {
 console.log('Connected!');
});
```
<a name="agile.protocol.read"></a>

#### protocol.read(protocolId, deviceId) ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocol](#agile.protocol)</code>  
**Summary**: Call a read via protocol  
**Access:** public  
**Fulfil**: <code>Object</code>  

| Param | Type | Description |
| --- | --- | --- |
| protocolId | <code>String</code> | Agile Id of the protocol |
| deviceId | <code>String</code> | Agile internal Id of the protocol |

**Example**  
```js
agile.protocol.read('Bluetooth LE', 'bleB0B448BE5084').then(function(data) {
 console.log(data);
});
```
<a name="agile.protocol.write"></a>

#### protocol.write(protocolId, deviceId, data) ⇒ <code>Promise</code>
**Kind**: static method of <code>[protocol](#agile.protocol)</code>  
**Summary**: Call a write via protocol  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| protocolId | <code>String</code> | Agile Id of the protocol |
| deviceId | <code>String</code> | Agile internal Id of the protocol |
| data | <code>object</code> | An object containing the content to write |

**Example**  
```js
agile.protocol.write('Bluetooth LE', 'bleB0B448BE5084', data).then(function() {
 console.log('wrote data!');
});
```
