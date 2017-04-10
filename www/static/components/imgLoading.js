/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../static";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 381);
/******/ })
/************************************************************************/
/******/ ({

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var imgloading = exports.imgloading = {
    Imagess: function Imagess(url, imgid, callback) {
        //判断浏览器
        var Browser = new Object();
        Browser.userAgent = window.navigator.userAgent.toLowerCase();
        Browser.ie = /msie/.test(Browser.userAgent);
        Browser.Moz = /gecko/.test(Browser.userAgent);
        var val = url;
        var img = new Image();
        if (Browser.ie) {
            img.onreadystatechange = function () {
                if (img.readyState == "complete" || img.readyState == "loaded") {
                    callback(img, imgid);
                }
            };
        } else if (Browser.Moz) {
            img.onload = function () {
                if (img.complete == true) {
                    callback(img, imgid);
                }
            };
        }
        //如果因为网络或图片的原因发生异常，则显示该图片
        img.onerror = function () {
            img.src = '//meme-ap-cdn.meme.chat/web-project/static/img/viewer.svg';
        };
        img.src = val;
    },
    checkimg: function checkimg(obj, imgid) {
        document.getElementById(imgid).src = obj.src;
    }
};

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(198);


/***/ })

/******/ });