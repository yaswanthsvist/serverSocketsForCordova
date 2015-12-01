var exec = require('cordova/exec');
var CORDOVA_SERVICE_NAME = "serverSocketsForCordova";
var socket=function(){};
socket.prototype.open=function(succ,fail){
  exec(succ,fial,CORDOVA_SERVICE_NAME,"action",["firstArgument", "secondArgument", 42, false]);
}
                 
