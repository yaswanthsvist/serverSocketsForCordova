package in.yaswanth.serverSocketsForCordova;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketException;
import java.util.Arrays;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class SocketPlugin extends CordovaPlugin {
	@Override
	public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
	    if (action.equals("open")) {
	            callbackContext.success();
	    }
	    return true;
	}
}
