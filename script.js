const {win, ipcRenderer} = require('electron');
const electronDL = require('electron-dl');
const electron = require('electron');
const bytes = require('bytes');

document.getElementById('btnMount').addEventListener("click", () => {
  ipcRenderer.send('button-mount');
});

window.addEventListener('load', () => {
  ipcRenderer.send('path');
});

ipcRenderer.on('path-status', (event, msg) => {
  document.getElementById("mount").innerHTML = msg
});

ipcRenderer.on('onProgress', (event, obj) => {
  let percentVal =  Math.floor(obj.percent*100)

  document.getElementById("bar1").innerHTML = `${percentVal}%`;
  document.getElementById("bar2").innerHTML = `${bytes(obj.transferredBytes, {unitSeparator: ' ', decimalPlaces: 0})}/${bytes(obj.totalBytes, {unitSeparator: ' ', decimalPlaces: 0})}`;
});