var exec = require('cordova/exec');
var CORDOVA_SERVICE_NAME = "serverSocketsForCordova";
function serverSocket(){
	this.onClose = null;
};
serverSocket.prototype.open=function(succ,fail){
  succ = succ|| function() { };
    fail = fail || function() { };
  exec(succ,fail,CORDOVA_SERVICE_NAME,"open",[]);
}
module.exports = serverSocket;
