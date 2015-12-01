var exec = require('cordova/exec');
var CORDOVA_SERVICE_NAME = "serverSocketsForCordova";
var serverSocket=function(){};
socket.prototype.open=function(succ,fail){
  succ = success || function() { };
    fail = fail || function() { };
  exec(succ,fial,CORDOVA_SERVICE_NAME,"open");
}
module.exports = serverSocket;
