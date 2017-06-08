# IDM examples

This folder contains a couple of examples showing the use of the agile api to create entities, users, and add them to groups.
Also it includes a basic example for the authentication step, in case a non-interactive service needs to get a TOKEN.

You can run the .js files in this folder from the terminal using node.js.

To run the html site you can use a simple web server, i.e. http-server from node.js. You need to run it in localhost port 8080, to comply with the default CORS domain policy of IDM (see sections below). Also, if you want to run the examples from node.js you should update the token_conf.js with a valid IDM token. An easy way to get one, is to log in using OS.js and then check the URL for the token.


#CORS in Browsers
Due to CORS, you should add the domain from which you are serving the JS code, i.e. localhost:8080 that is accessing IDM through the SDK. This applies only if you run the SDK  from the browser... node.js doesn't have an issue with this).

Typical errors related to CORS look like the following in Firefox:
```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://resin.local:3000/oauth2/api/userinfo. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).  (unknown)
```

And in Chrome:

```
OPTIONS http://agilegw.local:3000/oauth2/api/userinfo 500 (Internal Server Error)
(anonymous) @ bundle.js:1
e.exports @ bundle.js:1
e.exports @ bundle.js:1
entities.html:1 XMLHttpRequest cannot load http://agilegw.local:3000/oauth2/api/userinfo. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access. The response had HTTP status code 500.
```

#Checking examples in Browsers

Once you have solved the CORS issue by adding the domain in the config, an easy way to run the browser examples ( in the browser )is:

 * update the token in the html files (with a valide one)
 * go to the root of this repo:
 * do: npm install -g http-server
 * run http-server ./
 * open http://localhost:8080/examples/idm/entities.html or users.html or client-authentication.html and watch the JavaScript console in the developer tools of your browser.
