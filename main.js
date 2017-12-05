const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win = null;

app.on('ready', function(){
    win = new BrowserWindow({width:1000, height:600})
    win.loadURL('http://localhost:4200');
    // devtools
    win.webContents.openDevTools();
    win.on('closed', function(){
        win = null;
    });
});

app.on('activate', () => {
    if(win === null){
        createWindow();
    }
});

app.on('window-all-closed', function(){
    app.quit();
});