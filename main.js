// modules / dependencies
const {app, BrowserWindow} = require('electron');
const WebSocket = require('ws');
const fs = require('fs');
const { timeStamp } = require('console');
require('dotenv').config();

// better way to console.log
const log = console.log.bind(console);

// create window object
var win;
(async () => {
	await app.whenReady();
	win = new BrowserWindow({
        // BrowserWindow options
        height: 800,
        width: 600,
        webPreferences: {
            // allow for modules to be used in client side JS
            nodeIntegration: true,
            // allow for the IPC framework to be used in
            // client side JS
            enableRemoteModule: true,
            // isolate contexts for security standards
            contextIsolation: true
        }
    });
})();

// connect to websocket via hostname and socket
// "http" is replaced with "ws" in the url
// this is because it uses its own protocol
const ws = new WebSocket(`ws://${process.env.HOST}:${process.env.PORT || 4644}`);

// when message from server is recieved event
ws.on('message', incoming = (data) => {
    // check for data
    if (data) {
        // parse function parameter into a JSON format
        // assign to variable
        var json = JSON.parse(data);
        log(json)
        // push variable to temp.json file
        // OR
        // use reference of variable 
    }
});

// currently working on
ws.on('close', close = () => {
    log('server is offline or not reachable')
});