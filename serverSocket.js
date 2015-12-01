var exec = require('cordova/exec');
var CORDOVA_SERVICE_NAME = "serverSocketsForCordova";
var socket=function(){};
socket.prototype.open=function(succ,fail){
  succ = success || function() { };
    fail = fail || function() { };
  exec(succ,fial,CORDOVA_SERVICE_NAME,"open");
}
                 
