const electron = require('electron')
const{app} = electron
var BrowserWindow = require('browser-window')
app.on ('ready', function(){
    var mainWindow = new BrowserWindow({
    	width:800,
    	height: 600
    })

    mainWindow.loadUrl("file://" + __dirname + "/index.html")
    mainWindow.openDevTools() 
})
