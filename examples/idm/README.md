# IDM examples

This folder contains a couple of examples showing the use of the agile api to create entities, users, and add them to groups.
Also it includes a basic example for the authentication step, in case a non-interactive service needs to get a TOKEN.

To run the html site you can use a simple web server, i.e. http-server from node.js. You need to run it in localhost port 8080, to comply with the default CORS domain policy of IDM. Also, if you want to run the examples from node.js you should update the token_conf.js with a valid IDM token. An easy way to get one, is to log in using OS.js and then check the URL for the token.
