'use strict';


/**
 * Gets languages supported by the client generator
 * 
 *
 * returns array
 **/
exports.clientOptions = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns options for a client library
 * 
 *
 * language string The target language for the client library
 * returns object
 **/
exports.getClientOptions = function(language) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Generates a client library
 * Accepts a `GeneratorInput` options map for spec location and generation options
 *
 * language string The target language for the client library
 * body object Configuration for building the client library
 * returns ResponseCode
 **/
exports.generateClient = function(language,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Downloads a pre-generated file
 * A valid `fileId` is generated by the `/clients/{language}` or `/servers/{language}` POST operations.  The fileId code can be used just once, after which a new `fileId` will need to be requested.
 *
 * fileId string 
 * returns string
 **/
exports.downloadFile = function(fileId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

