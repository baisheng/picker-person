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
/******/ 	return __webpack_require__(__webpack_require__.s = 464);
/******/ })
/************************************************************************/
/******/ ({

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 获取光标位置
function getCursortPosition(textDom) {
    var cursorPos = 0;
    if (document.selection) {
        // IE Support
        textDom.focus();
        var selectRange = document.selection.createRange();
        selectRange.moveStart('character', -textDom.value.length);
        cursorPos = selectRange.text.length;
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
        // Firefox support
        cursorPos = textDom.selectionStart;
    }
    return cursorPos;
}

// 设置光标位置
function setCaretPosition(textDom, pos) {
    if (textDom.setSelectionRange) {
        // IE Support
        textDom.focus();
        textDom.setSelectionRange(pos, pos);
    } else if (textDom.createTextRange) {
        // Firefox support
        var range = textDom.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
// 获取选中文字
function getSelectText() {
    var userSelection, text;
    if (window.getSelection) {
        // Firefox support
        userSelection = window.getSelection();
    } else if (document.selection) {
        // IE Support
        userSelection = document.selection.createRange();
    }
    if (!(text = userSelection.text)) {
        text = userSelection;
    }
    return text;
}

/**
 * 选中特定范围的文本
 * 参数：
 *     textDom  [JavaScript DOM String] 当前对象
 *     startPos  [Int]  起始位置
 *     endPos  [Int]  终点位置
 */
function setSelectText(textDom, startPos, endPos) {
    var startPos = parseInt(startPos),
        endPos = parseInt(endPos),
        textLength = textDom.value.length;
    if (textLength) {
        if (!startPos) {
            startPos = 0;
        }
        if (!endPos) {
            endPos = textLength;
        }
        if (startPos > textLength) {
            startPos = textLength;
        }
        if (endPos > textLength) {
            endPos = textLength;
        }
        if (startPos < 0) {
            startPos = textLength + startPos;
        }
        if (endPos < 0) {
            endPos = textLength + endPos;
        }
        if (textDom.createTextRange) {
            // IE Support
            var range = textDom.createTextRange();
            range.moveStart("character", -textLength);
            range.moveEnd("character", -textLength);
            range.moveStart("character", startPos);
            range.moveEnd("character", endPos);
            range.select();
        } else {
            // Firefox support
            textDom.setSelectionRange(startPos, endPos);
            textDom.focus();
        }
    }
}

/**
 * 在光标后插入文本
 * 参数：
 *     textDom  [JavaScript DOM String] 当前对象
 *     value  [String]  要插入的文本
 */
function insertAfterText(textDom, value) {
    var selectRange;
    if (document.selection) {
        // IE Support
        textDom.focus();
        selectRange = document.selection.createRange();
        selectRange.text = value;
        textDom.focus();
    } else if (textDom.selectionStart || textDom.selectionStart == '0') {
        // Firefox support
        var startPos = textDom.selectionStart;
        var endPos = textDom.selectionEnd;
        var scrollTop = textDom.scrollTop;
        textDom.value = textDom.value.substring(0, startPos) + value + textDom.value.substring(endPos, textDom.value.length);
        textDom.focus();
        textDom.selectionStart = startPos + value.length;
        textDom.selectionEnd = startPos + value.length;
        textDom.scrollTop = scrollTop;
    } else {
        textDom.value += value;
        textDom.focus();
    }
}

module.exports = {
    getCursortPosition: getCursortPosition,
    setCaretPosition: setCaretPosition,
    getSelectText: getSelectText,
    setSelectText: setSelectText,
    insertAfterText: insertAfterText
};

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);


/***/ })

/******/ });