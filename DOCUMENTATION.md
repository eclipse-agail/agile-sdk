<a name="agile"></a>

## agile ⇒ <code>Object</code>
Welcome to the Agile SDK documentation.

This document aims to describe all the functions supported by the SDK, as well as showing examples of their expected usage.

If you feel something is missing, not clear or could be improved, please don't hesitate to open an [issue in GitHub](https://github.com/agile-iot/agile-sdk/issues/new), we'll be happy to help.

**Kind**: global namespace  

| Type | Description |
| --- | --- |
| <code>Object</code> | including the api base url, idm base url (if not provided defaults to the same api host but default idm port), and a token. |

**Example**  
```js
var agile = require('agile-sdk')({
      api:'http://agile-core:8080',
      idm: 'http://agile-core:3000',
      data: 'http://agile-data:1338',
      token: 'zIOycOqbEQh4ayw7lGAm9ILBIr'
    })
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
    * [.idm](#agile.idm) : <code>object</code>
        * [.group](#agile.idm.group) : <code>object</code>
            * [.get([owner], [groupName])](#agile.idm.group.get) ⇒ <code>Promise</code>
            * [.create(groupName)](#agile.idm.group.create) ⇒ <code>Promise</code>
            * [.delete(owner, groupName)](#agile.idm.group.delete) ⇒ <code>Promise</code>
            * [.addEntity(containing)](#agile.idm.group.addEntity) ⇒ <code>Promise</code>
            * [.removeEntity(containing)](#agile.idm.group.removeEntity) ⇒ <code>Promise</code>
        * [.user](#agile.idm.user) : <code>object</code>
            * [.getCurrentUserInfo()](#agile.idm.user.getCurrentUserInfo) ⇒ <code>Promise</code>
            * [.get(userName, authType)](#agile.idm.user.get) ⇒ <code>Promise</code>
            * [.create(including, authType, [options])](#agile.idm.user.create) ⇒ <code>Promise</code>
            * [.delete(userName, authType)](#agile.idm.user.delete) ⇒ <code>Promise</code>
        * [.entity](#agile.idm.entity) : <code>object</code>
            * [.getByType(entityType)](#agile.idm.entity.getByType) ⇒ <code>Promise</code>
            * [.getByAttributeValue(constraints)](#agile.idm.entity.getByAttributeValue) ⇒ <code>Promise</code>
            * [.get(entityId, entityType)](#agile.idm.entity.get) ⇒ <code>Promise</code>
            * [.create(entityId, entityType, entity)](#agile.idm.entity.create) ⇒ <code>Promise</code>
            * [.delete(entityId, entityType)](#agile.idm.entity.delete) ⇒ <code>Promise</code>
            * [.setAttribute(with)](#agile.idm.entity.setAttribute) ⇒ <code>Promise</code>
            * [.deleteAttribute(entityId, entityType, attributeName-)](#agile.idm.entity.deleteAttribute) ⇒ <code>Promise</code>
        * [.authentication](#agile.idm.authentication) : <code>object</code>
            * [.authenticateClient(client, secret)](#agile.idm.authentication.authenticateClient) ⇒ <code>Promise</code>
    * [.data](#agile.data) : <code>object</code>
        * [.subscription](#agile.data.subscription) : <code>object</code>
            * [.create(deviceID, componentID, [interval])](#agile.data.subscription.create) ⇒ <code>Promise</code>
            * [.delete(deviceID, componentID)](#agile.data.subscription.delete) ⇒ <code>Promise</code>
            * [.update(deviceID, componentID, [interval])](#agile.data.subscription.update) ⇒ <code>Promise</code>
            * [.get([deviceID], [componentID])](#agile.data.subscription.get) ⇒ <code>Promise</code>
        * [.record](#agile.data.record) : <code>object</code>
            * [.get([query])](#agile.data.record.get) ⇒ <code>Promise</code>
        * [.retention](#agile.data.retention) : <code>object</code>
            * [.get()](#agile.data.retention.get) ⇒ <code>Promise</code>
            * [.update(retentionInterval)](#agile.data.retention.update) ⇒ <code>Promise</code>

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
<a name="agile.idm"></a>

### agile.idm : <code>object</code>
**Kind**: static namespace of <code>[agile](#agile)</code>  

* [.idm](#agile.idm) : <code>object</code>
    * [.group](#agile.idm.group) : <code>object</code>
        * [.get([owner], [groupName])](#agile.idm.group.get) ⇒ <code>Promise</code>
        * [.create(groupName)](#agile.idm.group.create) ⇒ <code>Promise</code>
        * [.delete(owner, groupName)](#agile.idm.group.delete) ⇒ <code>Promise</code>
        * [.addEntity(containing)](#agile.idm.group.addEntity) ⇒ <code>Promise</code>
        * [.removeEntity(containing)](#agile.idm.group.removeEntity) ⇒ <code>Promise</code>
    * [.user](#agile.idm.user) : <code>object</code>
        * [.getCurrentUserInfo()](#agile.idm.user.getCurrentUserInfo) ⇒ <code>Promise</code>
        * [.get(userName, authType)](#agile.idm.user.get) ⇒ <code>Promise</code>
        * [.create(including, authType, [options])](#agile.idm.user.create) ⇒ <code>Promise</code>
        * [.delete(userName, authType)](#agile.idm.user.delete) ⇒ <code>Promise</code>
    * [.entity](#agile.idm.entity) : <code>object</code>
        * [.getByType(entityType)](#agile.idm.entity.getByType) ⇒ <code>Promise</code>
        * [.getByAttributeValue(constraints)](#agile.idm.entity.getByAttributeValue) ⇒ <code>Promise</code>
        * [.get(entityId, entityType)](#agile.idm.entity.get) ⇒ <code>Promise</code>
        * [.create(entityId, entityType, entity)](#agile.idm.entity.create) ⇒ <code>Promise</code>
        * [.delete(entityId, entityType)](#agile.idm.entity.delete) ⇒ <code>Promise</code>
        * [.setAttribute(with)](#agile.idm.entity.setAttribute) ⇒ <code>Promise</code>
        * [.deleteAttribute(entityId, entityType, attributeName-)](#agile.idm.entity.deleteAttribute) ⇒ <code>Promise</code>
    * [.authentication](#agile.idm.authentication) : <code>object</code>
        * [.authenticateClient(client, secret)](#agile.idm.authentication.authenticateClient) ⇒ <code>Promise</code>

<a name="agile.idm.group"></a>

#### idm.group : <code>object</code>
**Kind**: static namespace of <code>[idm](#agile.idm)</code>  

* [.group](#agile.idm.group) : <code>object</code>
    * [.get([owner], [groupName])](#agile.idm.group.get) ⇒ <code>Promise</code>
    * [.create(groupName)](#agile.idm.group.create) ⇒ <code>Promise</code>
    * [.delete(owner, groupName)](#agile.idm.group.delete) ⇒ <code>Promise</code>
    * [.addEntity(containing)](#agile.idm.group.addEntity) ⇒ <code>Promise</code>
    * [.removeEntity(containing)](#agile.idm.group.removeEntity) ⇒ <code>Promise</code>

<a name="agile.idm.group.get"></a>

##### group.get([owner], [groupName]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[group](#agile.idm.group)</code>  
**Summary**: Get a particular group by name and owner  
**Access:** public  
**Fulfil**: <code>Array</code> all groups if no arguments are provided, otherwise the group with given name and owner.  

| Param | Type | Description |
| --- | --- | --- |
| [owner] | <code>String</code> | Owner of the group |
| [groupName] | <code>String</code> | Name of the group |

**Example**  
```js
agile.idm.group.get('agile!@!agile-local','my-group').then(function(group) {
  console.log('this is my group '+JSON.stringify(group));
});
agile.idm.group.get().then(function(groups) {
  console.log('these are all groups '+JSON.stringify(groups));
});
```
<a name="agile.idm.group.create"></a>

##### group.create(groupName) ⇒ <code>Promise</code>
**Kind**: static method of <code>[group](#agile.idm.group)</code>  
**Summary**: Create a group onwned by the authenticated user  
**Access:** public  
**Fulfil**: <code>Object</code> group created  

| Param | Type | Description |
| --- | --- | --- |
| groupName | <code>String</code> | Name of the group |

**Example**  
```js
agile.idm.group.create('ble-devices').then(function(group) {
  console.log('group created!'+group);
});
```
<a name="agile.idm.group.delete"></a>

##### group.delete(owner, groupName) ⇒ <code>Promise</code>
**Kind**: static method of <code>[group](#agile.idm.group)</code>  
**Summary**: Delete a group  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| owner | <code>String</code> | Owner of the group |
| groupName | <code>String</code> | Name of the group |

**Example**  
```js
agile.idm.group.delete('agile!@!agile-local','my-group').then(function() {
  console.log('group removed!');
});
```
<a name="agile.idm.group.addEntity"></a>

##### group.addEntity(containing) ⇒ <code>Promise</code>
**Kind**: static method of <code>[group](#agile.idm.group)</code>  
**Summary**: Add entity to a group  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| containing | <code>Object</code> | the owner of the group,       the name of the group,       the id of the entity to be added to the group,       and the Type of the entity |

**Example**  
```js
agile.idm.group.addEntity({
          owner: 'agile!@!agile-local',
          name: 'my-group',
          entityId: '1',
          entityType: 'device'
        }).then(function(updated) {
  console.log('entity updated !'+updated);
});
```
<a name="agile.idm.group.removeEntity"></a>

##### group.removeEntity(containing) ⇒ <code>Promise</code>
**Kind**: static method of <code>[group](#agile.idm.group)</code>  
**Summary**: Remove entity from a group  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| containing | <code>Object</code> | the owner of the group,       the name of the group,       the id of the entity to be removed to the group,       and the Type of the entity |

**Example**  
```js
agile.idm.group.removeEntity({
          owner: 'agile!@!agile-local',
          name: 'my-group',
        entityId: '1',
          entityType: 'device'
        }).then(function(updated) {
  console.log('entity updated !'+updated);
});
```
<a name="agile.idm.user"></a>

#### idm.user : <code>object</code>
**Kind**: static namespace of <code>[idm](#agile.idm)</code>  

* [.user](#agile.idm.user) : <code>object</code>
    * [.getCurrentUserInfo()](#agile.idm.user.getCurrentUserInfo) ⇒ <code>Promise</code>
    * [.get(userName, authType)](#agile.idm.user.get) ⇒ <code>Promise</code>
    * [.create(including, authType, [options])](#agile.idm.user.create) ⇒ <code>Promise</code>
    * [.delete(userName, authType)](#agile.idm.user.delete) ⇒ <code>Promise</code>

<a name="agile.idm.user.getCurrentUserInfo"></a>

##### user.getCurrentUserInfo() ⇒ <code>Promise</code>
**Kind**: static method of <code>[user](#agile.idm.user)</code>  
**Summary**: Get the user information for the user currently logged in, i.e. token provided when agileSDK was created  
**Access:** public  
**Fulfil**: <code>Object</code> userInfo - object with user information  
**Example**  
```js
agile.idm.user.getCurrentUserInfo().then(function(info) {
 console.log(info);
});
```
<a name="agile.idm.user.get"></a>

##### user.get(userName, authType) ⇒ <code>Promise</code>
**Kind**: static method of <code>[user](#agile.idm.user)</code>  
**Summary**: Show information for a particular user by username and authentication type  
**Access:** public  
**Fulfil**: <code>Object</code> user found  

| Param | Type | Description |
| --- | --- | --- |
| userName | <code>String</code> | user name |
| authType | <code>String</code> | authentication type |

**Example**  
```js
agile.idm.user.get('alice','agile-local').then(function(user) {
  console.log(user);
});
```
<a name="agile.idm.user.create"></a>

##### user.create(including, authType, [options]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[user](#agile.idm.user)</code>  
**Summary**: Create user  
**Access:** public  
**Fulfil**: <code>Object</code> user created  

| Param | Type | Description |
| --- | --- | --- |
| including | <code>object</code> | userName user name |
| authType | <code>String</code> | authentication type |
| [options] | <code>Object</code> | continaing  role  of the user as 'role' and password as 'password' |

**Example**  
```js
agile.idm.user.create('bob','agile-local',{'role':'admin', 'password':'secret'}).then(function(user) {
  console.log('user created!'+user);
});
```
<a name="agile.idm.user.delete"></a>

##### user.delete(userName, authType) ⇒ <code>Promise</code>
**Kind**: static method of <code>[user](#agile.idm.user)</code>  
**Summary**: Delete a user  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| userName | <code>String</code> | user name |
| authType | <code>String</code> | authentication type |

**Example**  
```js
agile.idm.user.delete('bob','agile-local').then(function() {
  console.log('user removed!');
});
```
<a name="agile.idm.entity"></a>

#### idm.entity : <code>object</code>
**Kind**: static namespace of <code>[idm](#agile.idm)</code>  

* [.entity](#agile.idm.entity) : <code>object</code>
    * [.getByType(entityType)](#agile.idm.entity.getByType) ⇒ <code>Promise</code>
    * [.getByAttributeValue(constraints)](#agile.idm.entity.getByAttributeValue) ⇒ <code>Promise</code>
    * [.get(entityId, entityType)](#agile.idm.entity.get) ⇒ <code>Promise</code>
    * [.create(entityId, entityType, entity)](#agile.idm.entity.create) ⇒ <code>Promise</code>
    * [.delete(entityId, entityType)](#agile.idm.entity.delete) ⇒ <code>Promise</code>
    * [.setAttribute(with)](#agile.idm.entity.setAttribute) ⇒ <code>Promise</code>
    * [.deleteAttribute(entityId, entityType, attributeName-)](#agile.idm.entity.deleteAttribute) ⇒ <code>Promise</code>

<a name="agile.idm.entity.getByType"></a>

##### entity.getByType(entityType) ⇒ <code>Promise</code>
**Kind**: static method of <code>[entity](#agile.idm.entity)</code>  
**Summary**: List all entities by type  
**Access:** public  
**Fulfil**: <code>Array</code> all entities with a given type  

| Param | Type | Description |
| --- | --- | --- |
| entityType | <code>String</code> | type of entity |

**Example**  
```js
agile.idm.entity.getByType('device').then(function(entities) {
  console.log(entities);
});
```
<a name="agile.idm.entity.getByAttributeValue"></a>

##### entity.getByAttributeValue(constraints) ⇒ <code>Promise</code>
**Kind**: static method of <code>[entity](#agile.idm.entity)</code>  
**Summary**: List all entities which have a particular attribute value  
**Access:** public  
**Fulfil**: <code>Array</code> all entities with a given type  

| Param | Type | Description |
| --- | --- | --- |
| constraints | <code>Array</code> | contains objects containing objects with the property  'attributeType' to specify the attribute type and with the property 'attributeValue' to specify the expected attribute value |

**Example**  
```js
agile.idm.entity.getByAttributeValue([{attributeType:'credentials.dropbox','attributeValue':'expected attribute value for dropbox credentials'}]).then(function(entities) {
  console.log(entities);
});
```
<a name="agile.idm.entity.get"></a>

##### entity.get(entityId, entityType) ⇒ <code>Promise</code>
**Kind**: static method of <code>[entity](#agile.idm.entity)</code>  
**Summary**: get Entity by entity id and type  
**Access:** public  
**Fulfil**: <code>Object</code> entity entity  

| Param | Type | Description |
| --- | --- | --- |
| entityId | <code>String</code> | id of entity |
| entityType | <code>String</code> | type of entity |

**Example**  
```js
agile.idm.entity.get('1','device').then(function(result) {
  console.log('entity created!'+result);
});
```
<a name="agile.idm.entity.create"></a>

##### entity.create(entityId, entityType, entity) ⇒ <code>Promise</code>
**Kind**: static method of <code>[entity](#agile.idm.entity)</code>  
**Summary**: Create a group onwned by the authenticated user  
**Access:** public  
**Fulfil**: <code>Object</code> entity created  

| Param | Type | Description |
| --- | --- | --- |
| entityId | <code>String</code> | id of entity |
| entityType | <code>String</code> | type of entity |
| entity | <code>object</code> | An object containing the entity |

**Example**  
```js
agile.idm.entity.create('1','device',{'name':'entity name'}).then(function(result) {
  console.log('entity created!'+result);
});
```
<a name="agile.idm.entity.delete"></a>

##### entity.delete(entityId, entityType) ⇒ <code>Promise</code>
**Kind**: static method of <code>[entity](#agile.idm.entity)</code>  
**Summary**: Delete entity  
**Access:** public  
**Fulfil**: <code>Undefined</code>  

| Param | Type | Description |
| --- | --- | --- |
| entityId | <code>String</code> | id of entity |
| entityType | <code>String</code> | type of entity |

**Example**  
```js
agile.idm.entity.delete('1','device').then(function() {
  console.log('group removed!');
});
```
<a name="agile.idm.entity.setAttribute"></a>

##### entity.setAttribute(with) ⇒ <code>Promise</code>
**Kind**: static method of <code>[entity](#agile.idm.entity)</code>  
**Summary**: Set Entity's attribute  
**Access:** public  
**Fulfil**: <code>Object</code> entity updated  

| Param | Type | Description |
| --- | --- | --- |
| with | <code>Object</code> | entityId - id of entity,       entityType - type of entity,       attributeName- name of the attribute,       attribute - An object or a String containing the entity's attribute value |

**Example**  
```js
agile.idm.entity.setAttribute({
          entityId: '1',,
          entityType: 'device',
          attributeType: 'credentials',
          attributeValue: {'dropbox':'entity credentials for drop'}
        }).then(function(result) {
  console.log('entity created!'+result);
});
```
<a name="agile.idm.entity.deleteAttribute"></a>

##### entity.deleteAttribute(entityId, entityType, attributeName-) ⇒ <code>Promise</code>
**Kind**: static method of <code>[entity](#agile.idm.entity)</code>  
**Summary**: Delete Entity's attribute  
**Access:** public  
**Fulfil**: <code>Object</code> entity updated entity  

| Param | Type | Description |
| --- | --- | --- |
| entityId | <code>String</code> | id of entity |
| entityType | <code>String</code> | type of entity |
| attributeName- | <code>String</code> | name of the attribute |

**Example**  
```js
agile.idm.entity.deleteAttribute('1','device','credentials').then(function(result) {
  console.log('entity updated!'+result);
});
```
<a name="agile.idm.authentication"></a>

#### idm.authentication : <code>object</code>
**Kind**: static namespace of <code>[idm](#agile.idm)</code>  
<a name="agile.idm.authentication.authenticateClient"></a>

##### authentication.authenticateClient(client, secret) ⇒ <code>Promise</code>
**Kind**: static method of <code>[authentication](#agile.idm.authentication)</code>  
**Summary**: Authenticate a client with client secret and client name.  
**Access:** public  
**Fulfil**: <code>Object</code> Authentication information including token_type and access_token  

| Param | Type | Description |
| --- | --- | --- |
| client | <code>String</code> | client name. This is the client name provided to the create Entity when you register an Oauth2 client in AGILE-IDM. For more info: https://github.com/Agile-IoT/agile-idm-oauth2-client-example |
| secret | <code>String</code> | client secret. This is the client name provided to the create Entity when you register an Oauth2 client in AGILE-IDM. For more info: https://github.com/Agile-IoT/agile-idm-oauth2-client-example |

**Example**  
```js
agile.idm.authentication.authenticateClient('MyAgileClient2','WLnhhc3LnesbYj0GspNA13zgJEroN8V').then(function(result) {
  console.log(credentials.access_token);
  console.log(credentials.token_type);
});
```
<a name="agile.data"></a>

### agile.data : <code>object</code>
**Kind**: static namespace of <code>[agile](#agile)</code>  

* [.data](#agile.data) : <code>object</code>
    * [.subscription](#agile.data.subscription) : <code>object</code>
        * [.create(deviceID, componentID, [interval])](#agile.data.subscription.create) ⇒ <code>Promise</code>
        * [.delete(deviceID, componentID)](#agile.data.subscription.delete) ⇒ <code>Promise</code>
        * [.update(deviceID, componentID, [interval])](#agile.data.subscription.update) ⇒ <code>Promise</code>
        * [.get([deviceID], [componentID])](#agile.data.subscription.get) ⇒ <code>Promise</code>
    * [.record](#agile.data.record) : <code>object</code>
        * [.get([query])](#agile.data.record.get) ⇒ <code>Promise</code>
    * [.retention](#agile.data.retention) : <code>object</code>
        * [.get()](#agile.data.retention.get) ⇒ <code>Promise</code>
        * [.update(retentionInterval)](#agile.data.retention.update) ⇒ <code>Promise</code>

<a name="agile.data.subscription"></a>

#### data.subscription : <code>object</code>
**Kind**: static namespace of <code>[data](#agile.data)</code>  

* [.subscription](#agile.data.subscription) : <code>object</code>
    * [.create(deviceID, componentID, [interval])](#agile.data.subscription.create) ⇒ <code>Promise</code>
    * [.delete(deviceID, componentID)](#agile.data.subscription.delete) ⇒ <code>Promise</code>
    * [.update(deviceID, componentID, [interval])](#agile.data.subscription.update) ⇒ <code>Promise</code>
    * [.get([deviceID], [componentID])](#agile.data.subscription.get) ⇒ <code>Promise</code>

<a name="agile.data.subscription.create"></a>

##### subscription.create(deviceID, componentID, [interval]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[subscription](#agile.data.subscription)</code>  
**Summary**: Create subscription for device component  
**Access:** public  
**Fulfil**: <code>Object</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| deviceID | <code>String</code> |  | Agile deviceID |
| componentID | <code>String</code> |  | Agile componentID |
| [interval] | <code>Integer</code> | <code>3000</code> | Subscription interval |

**Example**  
```js
agile.data.subscription.create('mySensor', 'temperature', 3000)
.then(function(subscription) {
  console.log(subscription);
});
```
<a name="agile.data.subscription.delete"></a>

##### subscription.delete(deviceID, componentID) ⇒ <code>Promise</code>
**Kind**: static method of <code>[subscription](#agile.data.subscription)</code>  
**Summary**: Delete subscription for device component  
**Access:** public  
**Fulfil**: <code>null</code>  

| Param | Type | Description |
| --- | --- | --- |
| deviceID | <code>String</code> | Agile deviceID |
| componentID | <code>String</code> | Agile componentID |

**Example**  
```js
agile.data.subscription.delete('mySensor', 'temperature')
.then(function(subscription) {
  console.log('Subscription deleted!');
});
```
<a name="agile.data.subscription.update"></a>

##### subscription.update(deviceID, componentID, [interval]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[subscription](#agile.data.subscription)</code>  
**Summary**: Update subscription for device component  
**Access:** public  
**Fulfil**: <code>Object</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| deviceID | <code>String</code> |  | Agile deviceID |
| componentID | <code>String</code> |  | Agile componentID |
| [interval] | <code>Integer</code> | <code>3000</code> | Subscription interval |

**Example**  
```js
agile.data.subscription.update('mySensor', 'temperature')
.then(function(subscription) {
  console.log(subscription);
});
```
<a name="agile.data.subscription.get"></a>

##### subscription.get([deviceID], [componentID]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[subscription](#agile.data.subscription)</code>  
**Summary**: Get subscription for device component or get all subscriptions on gateway  
**Access:** public  
**Fulfil**: <code>Object\|Array</code>  

| Param | Type | Description |
| --- | --- | --- |
| [deviceID] | <code>String</code> | Agile deviceID |
| [componentID] | <code>String</code> | Agile componentID |

**Example**  
```js
agile.data.subscription.get('mySensor', 'temperature')
.then(function(subscription) {
  console.log(subscription);
});
agile.data.subscription.get()
.then(function(subscriptions) {
  console.log(subscriptions);
});
```
<a name="agile.data.record"></a>

#### data.record : <code>object</code>
**Kind**: static namespace of <code>[data](#agile.data)</code>  
<a name="agile.data.record.get"></a>

##### record.get([query]) ⇒ <code>Promise</code>
**Kind**: static method of <code>[record](#agile.data.record)</code>  
**Summary**: Get records from gateway  
**Access:** public  
**Fulfil**: <code>Array</code>  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>String</code> | Basic query that is transformed to influx sql |

**Example**  
```js
agile.data.record.get()
.then(function(subscription) {
  console.log(subscription);
});

const query = 'where={"deviceID":"mySensor"}&order={"by":"time","direction":"ASC"}'
agile.data.record.get(query)
.then(function(records) {
  console.log(records);
});
```
<a name="agile.data.retention"></a>

#### data.retention : <code>object</code>
**Kind**: static namespace of <code>[data](#agile.data)</code>  

* [.retention](#agile.data.retention) : <code>object</code>
    * [.get()](#agile.data.retention.get) ⇒ <code>Promise</code>
    * [.update(retentionInterval)](#agile.data.retention.update) ⇒ <code>Promise</code>

<a name="agile.data.retention.get"></a>

##### retention.get() ⇒ <code>Promise</code>
**Kind**: static method of <code>[retention](#agile.data.retention)</code>  
**Summary**: Get retention policy from gateway  
**Access:** public  
**Fulfil**: <code>Array</code>  
**Example**  
```js
agile.data.retention.get()
.then(function(retentionPolicy) {
  console.log(retentionPolicy);
});
```
<a name="agile.data.retention.update"></a>

##### retention.update(retentionInterval) ⇒ <code>Promise</code>
**Kind**: static method of <code>[retention](#agile.data.retention)</code>  
**Summary**: Update retention policy from gateway  
**Access:** public  
**Fulfil**: <code>Array</code>  

| Param | Type | Description |
| --- | --- | --- |
| retentionInterval | <code>Integer</code> | retentionInterval |

**Example**  
```js
agile.data.retention.update(9000)
.then(function(retentionPolicy) {
  console.log(retentionPolicy);
});
```
