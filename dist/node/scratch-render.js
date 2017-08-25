module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license twgl.js 3.3.0 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["twgl"] = factory();
	else
		root["twgl"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function (twgl, m4, v3, primitives) {

	  "use strict";

	  twgl.m4 = m4;
	  twgl.v3 = v3;
	  twgl.primitives = primitives;
	  return twgl;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(5), __webpack_require__(7), __webpack_require__(6), __webpack_require__(8), __webpack_require__(3), __webpack_require__(9), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (attributes, draw, framebuffers, programs, textures, typedArrays, vertexArrays, utils) {
	  "use strict";

	  /**
	   * The main TWGL module.
	   *
	   * For most use cases you shouldn't need anything outside this module.
	   * Exceptions between the stuff added to twgl-full (v3, m4, primitives)
	   *
	   * @module twgl
	   * @borrows module:twgl/attributes.setAttribInfoBufferFromArray as setAttribInfoBufferFromArray
	   * @borrows module:twgl/attributes.createBufferInfoFromArrays as createBufferInfoFromArrays
	   * @borrows module:twgl/attributes.createVertexArrayInfo as createVertexArrayInfo
	   * @borrows module:twgl/draw.drawBufferInfo as drawBufferInfo
	   * @borrows module:twgl/draw.drawObjectList as drawObjectList
	   * @borrows module:twgl/framebuffers.createFramebufferInfo as createFramebufferInfo
	   * @borrows module:twgl/framebuffers.resizeFramebufferInfo as resizeFramebufferInfo
	   * @borrows module:twgl/framebuffers.bindFramebufferInfo as bindFramebufferInfo
	   * @borrows module:twgl/programs.createProgramInfo as createProgramInfo
	   * @borrows module:twgl/programs.createUniformBlockInfo as createUniformBlockInfo
	   * @borrows module:twgl/programs.bindUniformBlock as bindUniformBlock
	   * @borrows module:twgl/programs.setUniformBlock as setUniformBlock
	   * @borrows module:twgl/programs.setBlockUniforms as setBlockUniforms
	   * @borrows module:twgl/programs.setUniforms as setUniforms
	   * @borrows module:twgl/programs.setBuffersAndAttributes as setBuffersAndAttributes
	   * @borrows module:twgl/textures.setTextureFromArray as setTextureFromArray
	   * @borrows module:twgl/textures.createTexture as createTexture
	   * @borrows module:twgl/textures.resizeTexture as resizeTexture
	   * @borrows module:twgl/textures.createTextures as createTextures
	   */

	  // make sure we don't see a global gl

	  var gl = undefined; // eslint-disable-line
	  var defaults = {
	    enableVertexArrayObjects: true
	  };

	  /**
	   * Various default settings for twgl.
	   *
	   * Note: You can call this any number of times. Example:
	   *
	   *     twgl.setDefaults({ textureColor: [1, 0, 0, 1] });
	   *     twgl.setDefaults({ attribPrefix: 'a_' });
	   *
	   * is equivalent to
	   *
	   *     twgl.setDefaults({
	   *       textureColor: [1, 0, 0, 1],
	   *       attribPrefix: 'a_',
	   *     });
	   *
	   * @typedef {Object} Defaults
	   * @property {string} attribPrefix The prefix to stick on attributes
	   *
	   *   When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
	   *   as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
	   *
	   *   In otherwords I'll create arrays of geometry like this
	   *
	   *       var arrays = {
	   *         position: ...
	   *         normal: ...
	   *         texcoord: ...
	   *       };
	   *
	   *   But need those mapped to attributes and my attributes start with `a_`.
	   *
	   *   Default: `""`
	   *
	   * @property {number[]} textureColor Array of 4 values in the range 0 to 1
	   *
	   *   The default texture color is used when loading textures from
	   *   urls. Because the URL will be loaded async we'd like to be
	   *   able to use the texture immediately. By putting a 1x1 pixel
	   *   color in the texture we can start using the texture before
	   *   the URL has loaded.
	   *
	   *   Default: `[0.5, 0.75, 1, 1]`
	   *
	   * @property {string} crossOrigin
	   *
	   *   If not undefined sets the crossOrigin attribute on images
	   *   that twgl creates when downloading images for textures.
	   *
	   *   Also see {@link module:twgl.TextureOptions}.
	   *
	   * @property {bool} enableVertexArrayObjects
	   *
	   *   If true then in WebGL 1.0 will attempt to get the `OES_vertex_array_object` extension.
	   *   If successful it will copy create/bind/delete/isVertexArrayOES from the extension to
	   *   the WebGLRenderingContext removing the OES at the end which is the standard entry point
	   *   for WebGL 2.
	   *
	   *   Note: According to webglstats.com 90% of devices support `OES_vertex_array_object`.
	   *   If you just want to count on support I suggest using [this polyfill](https://github.com/KhronosGroup/WebGL/blob/master/sdk/demos/google/resources/OESVertexArrayObject.js)
	   *   or ignoring devices that don't support them.
	   *
	   *   Default: `true`
	   *
	   * @memberOf module:twgl
	   */

	  /**
	   * Sets various defaults for twgl.
	   *
	   * In the interest of terseness which is kind of the point
	   * of twgl I've integrated a few of the older functions here
	   *
	   * @param {module:twgl.Defaults} newDefaults The default settings.
	   * @memberOf module:twgl
	   */
	  function setDefaults(newDefaults) {
	    utils.copyExistingProperties(newDefaults, defaults);
	    attributes.setDefaults_(newDefaults); // eslint-disable-line
	    textures.setDefaults_(newDefaults); // eslint-disable-line
	  }

	  /**
	   * Adds Vertex Array Objects to WebGL 1 GL contexts if available
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   */
	  function addVertexArrayObjectSupport(gl) {
	    if (!gl || !defaults.enableVertexArrayObjects) {
	      return;
	    }
	    if (utils.isWebGL1(gl)) {
	      var ext = gl.getExtension("OES_vertex_array_object");
	      if (ext) {
	        gl.createVertexArray = function () {
	          return ext.createVertexArrayOES();
	        };
	        gl.deleteVertexArray = function (v) {
	          ext.deleteVertexArrayOES(v);
	        };
	        gl.isVertexArray = function (v) {
	          return ext.isVertexArrayOES(v);
	        };
	        gl.bindVertexArray = function (v) {
	          ext.bindVertexArrayOES(v);
	        };
	        gl.VERTEX_ARRAY_BINDING = ext.VERTEX_ARRAY_BINDING_OES;
	      }
	    }
	  }

	  /**
	   * Creates a webgl context.
	   * @param {HTMLCanvasElement} canvas The canvas tag to get
	   *     context from. If one is not passed in one will be
	   *     created.
	   * @return {WebGLRenderingContext} The created context.
	   */
	  function create3DContext(canvas, opt_attribs) {
	    var names = ["webgl", "experimental-webgl"];
	    var context = null;
	    for (var ii = 0; ii < names.length; ++ii) {
	      context = canvas.getContext(names[ii], opt_attribs);
	      if (context) {
	        break;
	      }
	    }
	    return context;
	  }

	  /**
	   * Gets a WebGL context.
	   * @param {HTMLCanvasElement} canvas a canvas element.
	   * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
	   * @memberOf module:twgl
	   */
	  function getWebGLContext(canvas, opt_attribs) {
	    var gl = create3DContext(canvas, opt_attribs);
	    addVertexArrayObjectSupport(gl);
	    return gl;
	  }

	  /**
	   * Creates a webgl context.
	   *
	   * Will return a WebGL2 context if possible.
	   *
	   * You can check if it's WebGL2 with
	   *
	   *     twgl.isWebGL2(gl);
	   *
	   * @param {HTMLCanvasElement} canvas The canvas tag to get
	   *     context from. If one is not passed in one will be
	   *     created.
	   * @return {WebGLRenderingContext} The created context.
	   */
	  function createContext(canvas, opt_attribs) {
	    var names = ["webgl2", "webgl", "experimental-webgl"];
	    var context = null;
	    for (var ii = 0; ii < names.length; ++ii) {
	      context = canvas.getContext(names[ii], opt_attribs);
	      if (context) {
	        break;
	      }
	    }
	    return context;
	  }

	  /**
	   * Gets a WebGL context.  Will create a WebGL2 context if possible.
	   *
	   * You can check if it's WebGL2 with
	   *
	   *    function isWebGL2(gl) {
	   *      return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0 ") == 0;
	   *    }
	   *
	   * @param {HTMLCanvasElement} canvas a canvas element.
	   * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
	   * @return {WebGLRenderingContext} The created context.
	   * @memberOf module:twgl
	   */
	  function getContext(canvas, opt_attribs) {
	    var gl = createContext(canvas, opt_attribs);
	    addVertexArrayObjectSupport(gl);
	    return gl;
	  }

	  /**
	   * Resize a canvas to match the size it's displayed.
	   * @param {HTMLCanvasElement} canvas The canvas to resize.
	   * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` if you want to.
	   * @return {boolean} true if the canvas was resized.
	   * @memberOf module:twgl
	   */
	  function resizeCanvasToDisplaySize(canvas, multiplier) {
	    multiplier = multiplier || 1;
	    multiplier = Math.max(1, multiplier);
	    var width = canvas.clientWidth * multiplier | 0;
	    var height = canvas.clientHeight * multiplier | 0;
	    if (canvas.width !== width || canvas.height !== height) {
	      canvas.width = width;
	      canvas.height = height;
	      return true;
	    }
	    return false;
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  var api = {
	    "getContext": getContext,
	    "getWebGLContext": getWebGLContext,
	    "isWebGL1": utils.isWebGL1,
	    "isWebGL2": utils.isWebGL2,
	    "resizeCanvasToDisplaySize": resizeCanvasToDisplaySize,
	    "setDefaults": setDefaults
	  };

	  function notPrivate(name) {
	    return name[name.length - 1] !== '_';
	  }

	  function copyPublicProperties(src, dst) {
	    Object.keys(src).filter(notPrivate).forEach(function (key) {
	      dst[key] = src[key];
	    });
	    return dst;
	  }

	  var apis = {
	    attributes: attributes,
	    draw: draw,
	    framebuffers: framebuffers,
	    programs: programs,
	    textures: textures,
	    typedArrays: typedArrays,
	    vertexArrays: vertexArrays
	  };
	  Object.keys(apis).forEach(function (name) {
	    var srcApi = apis[name];
	    copyPublicProperties(srcApi, api);
	    api[name] = copyPublicProperties(srcApi, {});
	  });

	  return api;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (typedArrays, utils) {
	  "use strict";

	  /**
	   * Low level attribute and buffer related functions
	   *
	   * You should generally not need to use these functions. They are provided
	   * for those cases where you're doing something out of the ordinary
	   * and you need lower level access.
	   *
	   * For backward compatibily they are available at both `twgl.attributes` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/attributes
	   */

	  // make sure we don't see a global gl

	  var gl = undefined; // eslint-disable-line
	  var defaults = {
	    attribPrefix: ""
	  };

	  /**
	   * Sets the default attrib prefix
	   *
	   * When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
	   * as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
	   *
	   * In otherwords I'll create arrays of geometry like this
	   *
	   *     var arrays = {
	   *       position: ...
	   *       normal: ...
	   *       texcoord: ...
	   *     };
	   *
	   * But need those mapped to attributes and my attributes start with `a_`.
	   *
	   * @deprecated see {@link module:twgl.setDefaults}
	   * @param {string} prefix prefix for attribs
	   * @memberOf module:twgl/attributes
	   */
	  function setAttributePrefix(prefix) {
	    defaults.attribPrefix = prefix;
	  }

	  function setDefaults(newDefaults) {
	    utils.copyExistingProperties(newDefaults, defaults);
	  }

	  function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
	    gl.bindBuffer(type, buffer);
	    gl.bufferData(type, array, drawType || gl.STATIC_DRAW);
	  }

	  /**
	   * Given typed array creates a WebGLBuffer and copies the typed array
	   * into it.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {ArrayBuffer|ArrayBufferView|WebGLBuffer} typedArray the typed array. Note: If a WebGLBuffer is passed in it will just be returned. No action will be taken
	   * @param {number} [type] the GL bind type for the buffer. Default = `gl.ARRAY_BUFFER`.
	   * @param {number} [drawType] the GL draw type for the buffer. Default = 'gl.STATIC_DRAW`.
	   * @return {WebGLBuffer} the created WebGLBuffer
	   * @memberOf module:twgl/attributes
	   */
	  function createBufferFromTypedArray(gl, typedArray, type, drawType) {
	    if (typedArray instanceof WebGLBuffer) {
	      return typedArray;
	    }
	    type = type || gl.ARRAY_BUFFER;
	    var buffer = gl.createBuffer();
	    setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
	    return buffer;
	  }

	  function isIndices(name) {
	    return name === "indices";
	  }

	  // This is really just a guess. Though I can't really imagine using
	  // anything else? Maybe for some compression?
	  function getNormalizationForTypedArray(typedArray) {
	    if (typedArray instanceof Int8Array) {
	      return true;
	    } // eslint-disable-line
	    if (typedArray instanceof Uint8Array) {
	      return true;
	    } // eslint-disable-line
	    return false;
	  }

	  // This is really just a guess. Though I can't really imagine using
	  // anything else? Maybe for some compression?
	  function getNormalizationForTypedArrayType(typedArrayType) {
	    if (typedArrayType === Int8Array) {
	      return true;
	    } // eslint-disable-line
	    if (typedArrayType === Uint8Array) {
	      return true;
	    } // eslint-disable-line
	    return false;
	  }

	  function getArray(array) {
	    return array.length ? array : array.data;
	  }

	  var texcoordRE = /coord|texture/i;
	  var colorRE = /color|colour/i;

	  function guessNumComponentsFromName(name, length) {
	    var numComponents;
	    if (texcoordRE.test(name)) {
	      numComponents = 2;
	    } else if (colorRE.test(name)) {
	      numComponents = 4;
	    } else {
	      numComponents = 3; // position, normals, indices ...
	    }

	    if (length % numComponents > 0) {
	      throw "Can not guess numComponents for attribute '" + name + "'. Tried " + numComponents + " but " + length + " values is not evenly divisible by " + numComponents + ". You should specify it.";
	    }

	    return numComponents;
	  }

	  function getNumComponents(array, arrayName) {
	    return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
	  }

	  function makeTypedArray(array, name) {
	    if (typedArrays.isArrayBuffer(array)) {
	      return array;
	    }

	    if (typedArrays.isArrayBuffer(array.data)) {
	      return array.data;
	    }

	    if (Array.isArray(array)) {
	      array = {
	        data: array
	      };
	    }

	    var Type = array.type;
	    if (!Type) {
	      if (isIndices(name)) {
	        Type = Uint16Array;
	      } else {
	        Type = Float32Array;
	      }
	    }
	    return new Type(array.data);
	  }

	  /**
	   * The info for an attribute. This is effectively just the arguments to `gl.vertexAttribPointer` plus the WebGLBuffer
	   * for the attribute.
	   *
	   * @typedef {Object} AttribInfo
	   * @property {number} [numComponents] the number of components for this attribute.
	   * @property {number} [size] synonym for `numComponents`.
	   * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
	   * @property {boolean} [normalize] whether or not to normalize the data. Default = false
	   * @property {number} [offset] offset into buffer in bytes. Default = 0
	   * @property {number} [stride] the stride in bytes per element. Default = 0
	   * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
	   * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
	   * @memberOf module:twgl
	   */

	  /**
	   * Use this type of array spec when TWGL can't guess the type or number of compoments of an array
	   * @typedef {Object} FullArraySpec
	   * @property {(number|number[]|ArrayBuffer)} data The data of the array. A number alone becomes the number of elements of type.
	   * @property {number} [numComponents] number of components for `vertexAttribPointer`. Default is based on the name of the array.
	   *    If `coord` is in the name assumes `numComponents = 2`.
	   *    If `color` is in the name assumes `numComponents = 4`.
	   *    otherwise assumes `numComponents = 3`
	   * @property {constructor} type The type. This is only used if `data` is a JavaScript array. It is the constructor for the typedarray. (eg. `Uint8Array`).
	   * For example if you want colors in a `Uint8Array` you might have a `FullArraySpec` like `{ type: Uint8Array, data: [255,0,255,255, ...], }`.
	   * @property {number} [size] synonym for `numComponents`.
	   * @property {boolean} [normalize] normalize for `vertexAttribPointer`. Default is true if type is `Int8Array` or `Uint8Array` otherwise false.
	   * @property {number} [stride] stride for `vertexAttribPointer`. Default = 0
	   * @property {number} [offset] offset for `vertexAttribPointer`. Default = 0
	   * @property {string} [attrib] name of attribute this array maps to. Defaults to same name as array prefixed by the default attribPrefix.
	   * @property {string} [name] synonym for `attrib`.
	   * @property {string} [attribName] synonym for `attrib`.
	   * @memberOf module:twgl
	   */

	  /**
	   * An individual array in {@link module:twgl.Arrays}
	   *
	   * When passed to {@link module:twgl.createBufferInfoFromArrays} if an ArraySpec is `number[]` or `ArrayBuffer`
	   * the types will be guessed based on the name. `indices` will be `Uint16Array`, everything else will
	   * be `Float32Array`. If an ArraySpec is a number it's the number of floats for an empty (zeroed) buffer.
	   *
	   * @typedef {(number|number[]|ArrayBuffer|module:twgl.FullArraySpec)} ArraySpec
	   * @memberOf module:twgl
	   */

	  /**
	   * This is a JavaScript object of arrays by name. The names should match your shader's attributes. If your
	   * attributes have a common prefix you can specify it by calling {@link module:twgl.setAttributePrefix}.
	   *
	   *     Bare JavaScript Arrays
	   *
	   *         var arrays = {
	   *            position: [-1, 1, 0],
	   *            normal: [0, 1, 0],
	   *            ...
	   *         }
	   *
	   *     Bare TypedArrays
	   *
	   *         var arrays = {
	   *            position: new Float32Array([-1, 1, 0]),
	   *            color: new Uint8Array([255, 128, 64, 255]),
	   *            ...
	   *         }
	   *
	   * *   Will guess at `numComponents` if not specified based on name.
	   *
	   *     If `coord` is in the name assumes `numComponents = 2`
	   *
	   *     If `color` is in the name assumes `numComponents = 4`
	   *
	   *     otherwise assumes `numComponents = 3`
	   *
	   * Objects with various fields. See {@link module:twgl.FullArraySpec}.
	   *
	   *     var arrays = {
	   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
	   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
	   *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
	   *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
	   *     };
	   *
	   * @typedef {Object.<string, module:twgl.ArraySpec>} Arrays
	   * @memberOf module:twgl
	   */

	  /**
	   * Creates a set of attribute data and WebGLBuffers from set of arrays
	   *
	   * Given
	   *
	   *      var arrays = {
	   *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
	   *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
	   *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
	   *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
	   *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
	   *      };
	   *
	   * returns something like
	   *
	   *      var attribs = {
	   *        position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
	   *        texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
	   *        normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
	   *        color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
	   *      };
	   *
	   * notes:
	   *
	   * *   Arrays can take various forms
	   *
	   *     Bare JavaScript Arrays
	   *
	   *         var arrays = {
	   *            position: [-1, 1, 0],
	   *            normal: [0, 1, 0],
	   *            ...
	   *         }
	   *
	   *     Bare TypedArrays
	   *
	   *         var arrays = {
	   *            position: new Float32Array([-1, 1, 0]),
	   *            color: new Uint8Array([255, 128, 64, 255]),
	   *            ...
	   *         }
	   *
	   * *   Will guess at `numComponents` if not specified based on name.
	   *
	   *     If `coord` is in the name assumes `numComponents = 2`
	   *
	   *     If `color` is in the name assumes `numComponents = 4`
	   *
	   *     otherwise assumes `numComponents = 3`
	   *
	   * @param {WebGLRenderingContext} gl The webgl rendering context.
	   * @param {module:twgl.Arrays} arrays The arrays
	   * @return {Object.<string, module:twgl.AttribInfo>} the attribs
	   * @memberOf module:twgl/attributes
	   */
	  function createAttribsFromArrays(gl, arrays) {
	    var attribs = {};
	    Object.keys(arrays).forEach(function (arrayName) {
	      if (!isIndices(arrayName)) {
	        var array = arrays[arrayName];
	        var attribName = array.attrib || array.name || array.attribName || defaults.attribPrefix + arrayName;
	        var buffer;
	        var type;
	        var normalization;
	        var numComponents;
	        var numValues;
	        if (typeof array === "number" || typeof array.data === "number") {
	          numValues = array.data || array;
	          var arrayType = array.type || Float32Array;
	          var numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
	          type = typedArrays.getGLTypeForTypedArrayType(arrayType);
	          normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArrayType(arrayType);
	          numComponents = array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues);
	          buffer = gl.createBuffer();
	          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	          gl.bufferData(gl.ARRAY_BUFFER, numBytes, array.drawType || gl.STATIC_DRAW);
	        } else {
	          var typedArray = makeTypedArray(array, arrayName);
	          buffer = createBufferFromTypedArray(gl, typedArray, undefined, array.drawType);
	          type = typedArrays.getGLTypeForTypedArray(typedArray);
	          normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArray(typedArray);
	          numComponents = getNumComponents(array, arrayName);
	          numValues = typedArray.length;
	        }
	        attribs[attribName] = {
	          buffer: buffer,
	          numComponents: numComponents,
	          type: type,
	          normalize: normalization,
	          stride: array.stride || 0,
	          offset: array.offset || 0,
	          drawType: array.drawType
	        };
	      }
	    });
	    gl.bindBuffer(gl.ARRAY_BUFFER, null);
	    return attribs;
	  }

	  /**
	   * Sets the contents of a buffer attached to an attribInfo
	   *
	   * This is helper function to dynamically update a buffer.
	   *
	   * Let's say you make a bufferInfo
	   *
	   *     var arrays = {
	   *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
	   *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
	   *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
	   *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
	   *     };
	   *     var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
	   *
	   *  And you want to dynamically upate the positions. You could do this
	   *
	   *     // assuming arrays.position has already been updated with new data.
	   *     twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.position, arrays.position);
	   *
	   * @param {WebGLRenderingContext} gl
	   * @param {AttribInfo} attribInfo The attribInfo who's buffer contents to set. NOTE: If you have an attribute prefix
	   *   the name of the attribute will include the prefix.
	   * @param {ArraySpec} array Note: it is arguably ineffient to pass in anything but a typed array because anything
	   *    else will have to be converted to a typed array before it can be used by WebGL. During init time that
	   *    inefficiency is usually not important but if you're updating data dynamically best to be efficient.
	   * @param {number} [offset] an optional offset into the buffer. This is only an offset into the WebGL buffer
	   *    not the array. To pass in an offset into the array itself use a typed array and create an `ArrayBufferView`
	   *    for the portion of the array you want to use.
	   *
	   *        var someArray = new Float32Array(1000); // an array with 1000 floats
	   *        var someSubArray = new Float32Array(someArray.buffer, offsetInBytes, sizeInUnits); // a view into someArray
	   *
	   *    Now you can pass `someSubArray` into setAttribInfoBufferFromArray`
	   * @memberOf module:twgl/attributes
	   */
	  function setAttribInfoBufferFromArray(gl, attribInfo, array, offset) {
	    array = makeTypedArray(array);
	    if (offset !== undefined) {
	      gl.bindBuffer(gl.ARRAY_BUFFER, attribInfo.buffer);
	      gl.bufferSubData(gl.ARRAY_BUFFER, offset, array);
	    } else {
	      setBufferFromTypedArray(gl, gl.ARRAY_BUFFER, attribInfo.buffer, array, attribInfo.drawType);
	    }
	  }

	  function getBytesPerValueForGLType(gl, type) {
	    if (type === gl.BYTE) return 1; // eslint-disable-line
	    if (type === gl.UNSIGNED_BYTE) return 1; // eslint-disable-line
	    if (type === gl.SHORT) return 2; // eslint-disable-line
	    if (type === gl.UNSIGNED_SHORT) return 2; // eslint-disable-line
	    if (type === gl.INT) return 4; // eslint-disable-line
	    if (type === gl.UNSIGNED_INT) return 4; // eslint-disable-line
	    if (type === gl.FLOAT) return 4; // eslint-disable-line
	    return 0;
	  }

	  /**
	   * tries to get the number of elements from a set of arrays.
	   */
	  var positionKeys = ['position', 'positions', 'a_position'];
	  function getNumElementsFromNonIndexedArrays(arrays) {
	    var key;
	    for (var ii = 0; ii < positionKeys.length; ++ii) {
	      key = positionKeys[ii];
	      if (key in arrays) {
	        break;
	      }
	    }
	    if (ii === positionKeys.length) {
	      key = Object.keys(arrays)[0];
	    }
	    var array = arrays[key];
	    var length = getArray(array).length;
	    var numComponents = getNumComponents(array, key);
	    var numElements = length / numComponents;
	    if (length % numComponents > 0) {
	      throw "numComponents " + numComponents + " not correct for length " + length;
	    }
	    return numElements;
	  }

	  function getNumElementsFromAttributes(gl, attribs) {
	    var key;
	    for (var ii = 0; ii < positionKeys.length; ++ii) {
	      key = positionKeys[ii];
	      if (key in attribs) {
	        break;
	      }
	      key = defaults.attribPrefix + key;
	      if (key in attribs) {
	        break;
	      }
	    }
	    if (ii === positionKeys.length) {
	      key = Object.keys(attribs)[0];
	    }
	    var attrib = attribs[key];
	    gl.bindBuffer(gl.ARRAY_BUFFER, attrib.buffer);
	    var numBytes = gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
	    gl.bindBuffer(gl.ARRAY_BUFFER, null);

	    var bytesPerValue = getBytesPerValueForGLType(gl, attrib.type);
	    var totalElements = numBytes / bytesPerValue;
	    var numComponents = attrib.numComponents || attrib.size;
	    // TODO: check stride
	    var numElements = totalElements / numComponents;
	    if (numElements % 1 !== 0) {
	      throw "numComponents " + numComponents + " not correct for length " + length;
	    }
	    return numElements;
	  }

	  /**
	   * @typedef {Object} BufferInfo
	   * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
	   * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
	   * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
	   * @property {Object.<string, module:twgl.AttribInfo>} [attribs] The attribs approriate to call `setAttributes`
	   * @memberOf module:twgl
	   */

	  /**
	   * Creates a BufferInfo from an object of arrays.
	   *
	   * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
	   * {@link module:twgl:drawBufferInfo}.
	   *
	   * Given an object like
	   *
	   *     var arrays = {
	   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
	   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
	   *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
	   *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
	   *     };
	   *
	   *  Creates an BufferInfo like this
	   *
	   *     bufferInfo = {
	   *       numElements: 4,        // or whatever the number of elements is
	   *       indices: WebGLBuffer,  // this property will not exist if there are no indices
	   *       attribs: {
	   *         a_position: { buffer: WebGLBuffer, numComponents: 3, },
	   *         a_normal:   { buffer: WebGLBuffer, numComponents: 3, },
	   *         a_texcoord: { buffer: WebGLBuffer, numComponents: 2, },
	   *       },
	   *     };
	   *
	   *  The properties of arrays can be JavaScript arrays in which case the number of components
	   *  will be guessed.
	   *
	   *     var arrays = {
	   *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
	   *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
	   *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
	   *        indices:  [0, 1, 2, 1, 2, 3],
	   *     };
	   *
	   *  They can also by TypedArrays
	   *
	   *     var arrays = {
	   *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
	   *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
	   *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
	   *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
	   *     };
	   *
	   *  Or augmentedTypedArrays
	   *
	   *     var positions = createAugmentedTypedArray(3, 4);
	   *     var texcoords = createAugmentedTypedArray(2, 4);
	   *     var normals   = createAugmentedTypedArray(3, 4);
	   *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
	   *
	   *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
	   *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
	   *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
	   *     indices.push([0, 1, 2, 1, 2, 3]);
	   *
	   *     var arrays = {
	   *        position: positions,
	   *        texcoord: texcoords,
	   *        normal:   normals,
	   *        indices:  indices,
	   *     };
	   *
	   * For the last example it is equivalent to
	   *
	   *     var bufferInfo = {
	   *       attribs: {
	   *         a_position: { numComponents: 3, buffer: gl.createBuffer(), },
	   *         a_texcoods: { numComponents: 2, buffer: gl.createBuffer(), },
	   *         a_normals: { numComponents: 3, buffer: gl.createBuffer(), },
	   *       },
	   *       indices: gl.createBuffer(),
	   *       numElements: 6,
	   *     };
	   *
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_position.buffer);
	   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_texcoord.buffer);
	   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_normal.buffer);
	   *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
	   *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
	   *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {module:twgl.Arrays} arrays Your data
	   * @return {module:twgl.BufferInfo} A BufferInfo
	   * @memberOf module:twgl/attributes
	   */
	  function createBufferInfoFromArrays(gl, arrays) {
	    var bufferInfo = {
	      attribs: createAttribsFromArrays(gl, arrays)
	    };
	    var indices = arrays.indices;
	    if (indices) {
	      indices = makeTypedArray(indices, "indices");
	      bufferInfo.indices = createBufferFromTypedArray(gl, indices, gl.ELEMENT_ARRAY_BUFFER);
	      bufferInfo.numElements = indices.length;
	      bufferInfo.elementType = typedArrays.getGLTypeForTypedArray(indices);
	    } else {
	      bufferInfo.numElements = getNumElementsFromAttributes(gl, bufferInfo.attribs);
	    }

	    return bufferInfo;
	  }

	  /**
	   * Creates a buffer from an array, typed array, or array spec
	   *
	   * Given something like this
	   *
	   *     [1, 2, 3],
	   *
	   * or
	   *
	   *     new Uint16Array([1,2,3]);
	   *
	   * or
	   *
	   *     {
	   *        data: [1, 2, 3],
	   *        type: Uint8Array,
	   *     }
	   *
	   * returns a WebGLBuffer that constains the given data.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
	   * @param {module:twgl.ArraySpec} array an array, typed array, or array spec.
	   * @param {string} arrayName name of array. Used to guess the type if type can not be dervied other wise.
	   * @return {WebGLBuffer} a WebGLBuffer containing the data in array.
	   * @memberOf module:twgl/attributes
	   */
	  function createBufferFromArray(gl, array, arrayName) {
	    var type = arrayName === "indices" ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
	    var typedArray = makeTypedArray(array, arrayName);
	    return createBufferFromTypedArray(gl, typedArray, type);
	  }

	  /**
	   * Creates buffers from arrays or typed arrays
	   *
	   * Given something like this
	   *
	   *     var arrays = {
	   *        positions: [1, 2, 3],
	   *        normals: [0, 0, 1],
	   *     }
	   *
	   * returns something like
	   *
	   *     buffers = {
	   *       positions: WebGLBuffer,
	   *       normals: WebGLBuffer,
	   *     }
	   *
	   * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
	   * @param {module:twgl.Arrays} arrays
	   * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
	   * @memberOf module:twgl/attributes
	   */
	  function createBuffersFromArrays(gl, arrays) {
	    var buffers = {};
	    Object.keys(arrays).forEach(function (key) {
	      buffers[key] = createBufferFromArray(gl, arrays[key], key);
	    });

	    // Ugh!
	    if (arrays.indices) {
	      buffers.numElements = arrays.indices.length;
	      buffers.elementType = typedArrays.getGLTypeForTypedArray(makeTypedArray(arrays.indices), 'indices');
	    } else {
	      buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
	    }

	    return buffers;
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "createAttribsFromArrays": createAttribsFromArrays,
	    "createBuffersFromArrays": createBuffersFromArrays,
	    "createBufferFromArray": createBufferFromArray,
	    "createBufferFromTypedArray": createBufferFromTypedArray,
	    "createBufferInfoFromArrays": createBufferInfoFromArrays,
	    "setAttribInfoBufferFromArray": setAttribInfoBufferFromArray,

	    "setAttributePrefix": setAttributePrefix,

	    "setDefaults_": setDefaults,
	    "getNumComponents_": getNumComponents,
	    "getArray_": getArray
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  "use strict";

	  /**
	   * Low level shader typed array related functions
	   *
	   * You should generally not need to use these functions. They are provided
	   * for those cases where you're doing something out of the ordinary
	   * and you need lower level access.
	   *
	   * For backward compatibily they are available at both `twgl.typedArray` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/typedArray
	   */

	  // make sure we don't see a global gl

	  var gl = undefined; // eslint-disable-line

	  /* DataType */
	  var BYTE = 0x1400;
	  var UNSIGNED_BYTE = 0x1401;
	  var SHORT = 0x1402;
	  var UNSIGNED_SHORT = 0x1403;
	  var INT = 0x1404;
	  var UNSIGNED_INT = 0x1405;
	  var FLOAT = 0x1406;
	  var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
	  var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
	  var UNSIGNED_SHORT_5_6_5 = 0x8363;
	  var HALF_FLOAT = 0x140B;
	  var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
	  var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
	  var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
	  var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
	  var UNSIGNED_INT_24_8 = 0x84FA;

	  var glTypeToTypedArray = {};
	  {
	    var tt = glTypeToTypedArray;
	    tt[BYTE] = Int8Array;
	    tt[UNSIGNED_BYTE] = Uint8Array;
	    tt[SHORT] = Int16Array;
	    tt[UNSIGNED_SHORT] = Uint16Array;
	    tt[INT] = Int32Array;
	    tt[UNSIGNED_INT] = Uint32Array;
	    tt[FLOAT] = Float32Array;
	    tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
	    tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
	    tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
	    tt[HALF_FLOAT] = Uint16Array;
	    tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
	    tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
	    tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
	    tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
	    tt[UNSIGNED_INT_24_8] = Uint32Array;
	  }

	  /**
	   * Get the GL type for a typedArray
	   * @param {ArrayBuffer|ArrayBufferView} typedArray a typedArray
	   * @return {number} the GL type for array. For example pass in an `Int8Array` and `gl.BYTE` will
	   *   be returned. Pass in a `Uint32Array` and `gl.UNSIGNED_INT` will be returned
	   * @memberOf module:twgl/typedArray
	   */
	  function getGLTypeForTypedArray(typedArray) {
	    if (typedArray instanceof Int8Array) {
	      return BYTE;
	    } // eslint-disable-line
	    if (typedArray instanceof Uint8Array) {
	      return UNSIGNED_BYTE;
	    } // eslint-disable-line
	    if (typedArray instanceof Uint8ClampedArray) {
	      return UNSIGNED_BYTE;
	    } // eslint-disable-line
	    if (typedArray instanceof Int16Array) {
	      return SHORT;
	    } // eslint-disable-line
	    if (typedArray instanceof Uint16Array) {
	      return UNSIGNED_SHORT;
	    } // eslint-disable-line
	    if (typedArray instanceof Int32Array) {
	      return INT;
	    } // eslint-disable-line
	    if (typedArray instanceof Uint32Array) {
	      return UNSIGNED_INT;
	    } // eslint-disable-line
	    if (typedArray instanceof Float32Array) {
	      return FLOAT;
	    } // eslint-disable-line
	    throw "unsupported typed array type";
	  }

	  /**
	   * Get the GL type for a typedArray type
	   * @param {ArrayBufferViewType} typedArrayType a typedArray constructor
	   * @return {number} the GL type for type. For example pass in `Int8Array` and `gl.BYTE` will
	   *   be returned. Pass in `Uint32Array` and `gl.UNSIGNED_INT` will be returned
	   * @memberOf module:twgl/typedArray
	   */
	  function getGLTypeForTypedArrayType(typedArrayType) {
	    if (typedArrayType === Int8Array) {
	      return BYTE;
	    } // eslint-disable-line
	    if (typedArrayType === Uint8Array) {
	      return UNSIGNED_BYTE;
	    } // eslint-disable-line
	    if (typedArrayType === Uint8ClampedArray) {
	      return UNSIGNED_BYTE;
	    } // eslint-disable-line
	    if (typedArrayType === Int16Array) {
	      return SHORT;
	    } // eslint-disable-line
	    if (typedArrayType === Uint16Array) {
	      return UNSIGNED_SHORT;
	    } // eslint-disable-line
	    if (typedArrayType === Int32Array) {
	      return INT;
	    } // eslint-disable-line
	    if (typedArrayType === Uint32Array) {
	      return UNSIGNED_INT;
	    } // eslint-disable-line
	    if (typedArrayType === Float32Array) {
	      return FLOAT;
	    } // eslint-disable-line
	    throw "unsupported typed array type";
	  }

	  /**
	   * Get the typed array constructor for a given GL type
	   * @param {number} type the GL type. (eg: `gl.UNSIGNED_INT`)
	   * @return {function} the constructor for a the corresponding typed array. (eg. `Uint32Array`).
	   * @memberOf module:twgl/typedArray
	   */
	  function getTypedArrayTypeForGLType(type) {
	    var CTOR = glTypeToTypedArray[type];
	    if (!CTOR) {
	      throw "unknown gl type";
	    }
	    return CTOR;
	  }

	  function isArrayBuffer(a) {
	    return a && a.buffer && a.buffer instanceof ArrayBuffer;
	  }

	  // Using quotes prevents Uglify from changing the names.
	  return {
	    "getGLTypeForTypedArray": getGLTypeForTypedArray,
	    "getGLTypeForTypedArrayType": getGLTypeForTypedArrayType,
	    "getTypedArrayTypeForGLType": getTypedArrayTypeForGLType,
	    "isArrayBuffer": isArrayBuffer
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  "use strict";

	  /**
	   * Copy an object 1 level deep
	   * @param {object} src object to copy
	   * @return {object} the copy
	   */

	  function shallowCopy(src) {
	    var dst = {};
	    Object.keys(src).forEach(function (key) {
	      dst[key] = src[key];
	    });
	    return dst;
	  }

	  /**
	   * Copy named properties
	   *
	   * @param {string[]} names names of properties to copy
	   * @param {object} src object to copy properties from
	   * @param {object} dst object to copy properties to
	   */
	  function copyNamedProperties(names, src, dst) {
	    names.forEach(function (name) {
	      var value = src[name];
	      if (value !== undefined) {
	        dst[name] = value;
	      }
	    });
	  }

	  /**
	   * Copies properties from source to dest only if a matching key is in dest
	   *
	   * @param {Object.<string, ?>} src the source
	   * @param {Object.<string, ?>} dst the dest
	   */
	  function copyExistingProperties(src, dst) {
	    Object.keys(dst).forEach(function (key) {
	      if (dst.hasOwnProperty(key) && src.hasOwnProperty(key)) {
	        dst[key] = src[key];
	      }
	    });
	  }

	  /**
	   * Gets the gl version as a number
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @return {number} version of gl
	   */
	  //function getVersionAsNumber(gl) {
	  //  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
	  //}

	  /**
	   * Check if context is WebGL 2.0
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @return {bool} true if it's WebGL 2.0
	   * @memberOf module:twgl
	   */
	  function isWebGL2(gl) {
	    // This is the correct check but it's slow
	    //return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
	    // This might also be the correct check but I'm assuming it's slow-ish
	    // return gl instanceof WebGL2RenderingContext;
	    return !!gl.texStorage2D;
	  }

	  /**
	   * Check if context is WebGL 1.0
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @return {bool} true if it's WebGL 1.0
	   * @memberOf module:twgl
	   */
	  function isWebGL1(gl) {
	    // This is the correct check but it's slow
	    //var version = getVersionAsNumber(gl);
	    //return version <= 1.0 && version > 0.0;  // because as of 2016/5 Edge returns 0.96
	    // This might also be the correct check but I'm assuming it's slow-ish
	    // return gl instanceof WebGLRenderingContext;
	    return !gl.texStorage2D;
	  }

	  var error = window.console && window.console.error && typeof window.console.error === "function" ? window.console.error.bind(window.console) : function () {};

	  var warn = window.console && window.console.warn && typeof window.console.warn === "function" ? window.console.warn.bind(window.console) : function () {};

	  return {
	    copyExistingProperties: copyExistingProperties,
	    copyNamedProperties: copyNamedProperties,
	    shallowCopy: shallowCopy,
	    isWebGL1: isWebGL1,
	    isWebGL2: isWebGL2,
	    error: error,
	    warn: warn
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (programs) {
	  "use strict";

	  /**
	   * Drawing related functions
	   *
	   * For backward compatibily they are available at both `twgl.draw` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/draw
	   */

	  /**
	   * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
	   *
	   * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
	   * but calling this means if you switch from indexed data to non-indexed
	   * data you don't have to remember to update your draw call.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} bufferInfo A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays} or
	   *   a VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
	   * @param {enum} [type] eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...). Defaults to `gl.TRIANGLES`
	   * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
	   * @param {number} [offset] An optional offset. Defaults to 0.
	   * @memberOf module:twgl/draw
	   */

	  function drawBufferInfo(gl, bufferInfo, type, count, offset) {
	    type = type === undefined ? gl.TRIANGLES : type;
	    var indices = bufferInfo.indices;
	    var elementType = bufferInfo.elementType;
	    var numElements = count === undefined ? bufferInfo.numElements : count;
	    offset = offset === undefined ? 0 : offset;
	    if (elementType || indices) {
	      gl.drawElements(type, numElements, elementType === undefined ? gl.UNSIGNED_SHORT : bufferInfo.elementType, offset);
	    } else {
	      gl.drawArrays(type, offset, numElements);
	    }
	  }

	  /**
	   * A DrawObject is useful for putting objects in to an array and passing them to {@link module:twgl.drawObjectList}.
	   *
	   * You need either a `BufferInfo` or a `VertexArrayInfo`.
	   *
	   * @typedef {Object} DrawObject
	   * @property {boolean} [active] whether or not to draw. Default = `true` (must be `false` to be not true). In otherwords `undefined` = `true`
	   * @property {number} [type] type to draw eg. `gl.TRIANGLES`, `gl.LINES`, etc...
	   * @property {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
	   * @property {module:twgl.BufferInfo} [bufferInfo] A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays}
	   * @property {module:twgl.VertexArrayInfo} [vertexArrayInfo] A VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
	   * @property {Object<string, ?>} uniforms The values for the uniforms.
	   *   You can pass multiple objects by putting them in an array. For example
	   *
	   *     var sharedUniforms = {
	   *       u_fogNear: 10,
	   *       u_projection: ...
	   *       ...
	   *     };
	   *
	   *     var localUniforms = {
	   *       u_world: ...
	   *       u_diffuseColor: ...
	   *     };
	   *
	   *     var drawObj = {
	   *       ...
	   *       uniforms: [sharedUniforms, localUniforms],
	   *     };
	   *
	   * @property {number} [offset] the offset to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to 0.
	   * @property {number} [count] the count to pass to `gl.drawArrays` or `gl.drawElemnts`. Defaults to bufferInfo.numElements.
	   * @memberOf module:twgl
	   */

	  /**
	   * Draws a list of objects
	   * @param {DrawObject[]} objectsToDraw an array of objects to draw.
	   * @memberOf module:twgl/draw
	   */
	  function drawObjectList(gl, objectsToDraw) {
	    var lastUsedProgramInfo = null;
	    var lastUsedBufferInfo = null;

	    objectsToDraw.forEach(function (object) {
	      if (object.active === false) {
	        return;
	      }

	      var programInfo = object.programInfo;
	      var bufferInfo = object.vertexArrayInfo || object.bufferInfo;
	      var bindBuffers = false;
	      var type = object.type === undefined ? gl.TRIANGLES : object.type;

	      if (programInfo !== lastUsedProgramInfo) {
	        lastUsedProgramInfo = programInfo;
	        gl.useProgram(programInfo.program);

	        // We have to rebind buffers when changing programs because we
	        // only bind buffers the program uses. So if 2 programs use the same
	        // bufferInfo but the 1st one uses only positions the when the
	        // we switch to the 2nd one some of the attributes will not be on.
	        bindBuffers = true;
	      }

	      // Setup all the needed attributes.
	      if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
	        if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject && !bufferInfo.vertexArrayObject) {
	          gl.bindVertexArray(null);
	        }
	        lastUsedBufferInfo = bufferInfo;
	        programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
	      }

	      // Set the uniforms.
	      programs.setUniforms(programInfo, object.uniforms);

	      // Draw
	      drawBufferInfo(gl, bufferInfo, type, object.count, object.offset);
	    });

	    if (lastUsedBufferInfo.vertexArrayObject) {
	      gl.bindVertexArray(null);
	    }
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "drawBufferInfo": drawBufferInfo,
	    "drawObjectList": drawObjectList
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (utils) {
	  "use strict";

	  /**
	   * Low level shader program related functions
	   *
	   * You should generally not need to use these functions. They are provided
	   * for those cases where you're doing something out of the ordinary
	   * and you need lower level access.
	   *
	   * For backward compatibily they are available at both `twgl.programs` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/programs
	   */

	  var error = utils.error;
	  var warn = utils.warn;

	  var FLOAT = 0x1406;
	  var FLOAT_VEC2 = 0x8B50;
	  var FLOAT_VEC3 = 0x8B51;
	  var FLOAT_VEC4 = 0x8B52;
	  var INT = 0x1404;
	  var INT_VEC2 = 0x8B53;
	  var INT_VEC3 = 0x8B54;
	  var INT_VEC4 = 0x8B55;
	  var BOOL = 0x8B56;
	  var BOOL_VEC2 = 0x8B57;
	  var BOOL_VEC3 = 0x8B58;
	  var BOOL_VEC4 = 0x8B59;
	  var FLOAT_MAT2 = 0x8B5A;
	  var FLOAT_MAT3 = 0x8B5B;
	  var FLOAT_MAT4 = 0x8B5C;
	  var SAMPLER_2D = 0x8B5E;
	  var SAMPLER_CUBE = 0x8B60;
	  var SAMPLER_3D = 0x8B5F;
	  var SAMPLER_2D_SHADOW = 0x8B62;
	  var FLOAT_MAT2x3 = 0x8B65;
	  var FLOAT_MAT2x4 = 0x8B66;
	  var FLOAT_MAT3x2 = 0x8B67;
	  var FLOAT_MAT3x4 = 0x8B68;
	  var FLOAT_MAT4x2 = 0x8B69;
	  var FLOAT_MAT4x3 = 0x8B6A;
	  var SAMPLER_2D_ARRAY = 0x8DC1;
	  var SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
	  var SAMPLER_CUBE_SHADOW = 0x8DC5;
	  var UNSIGNED_INT = 0x1405;
	  var UNSIGNED_INT_VEC2 = 0x8DC6;
	  var UNSIGNED_INT_VEC3 = 0x8DC7;
	  var UNSIGNED_INT_VEC4 = 0x8DC8;
	  var INT_SAMPLER_2D = 0x8DCA;
	  var INT_SAMPLER_3D = 0x8DCB;
	  var INT_SAMPLER_CUBE = 0x8DCC;
	  var INT_SAMPLER_2D_ARRAY = 0x8DCF;
	  var UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
	  var UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
	  var UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
	  var UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;

	  var TEXTURE_2D = 0x0DE1;
	  var TEXTURE_CUBE_MAP = 0x8513;
	  var TEXTURE_3D = 0x806F;
	  var TEXTURE_2D_ARRAY = 0x8C1A;

	  var typeMap = {};

	  /**
	   * Returns the corresponding bind point for a given sampler type
	   */
	  function getBindPointForSamplerType(gl, type) {
	    return typeMap[type].bindPoint;
	  }

	  // This kind of sucks! If you could compose functions as in `var fn = gl[name];`
	  // this code could be a lot smaller but that is sadly really slow (T_T)

	  function floatSetter(gl, location) {
	    return function (v) {
	      gl.uniform1f(location, v);
	    };
	  }

	  function floatArraySetter(gl, location) {
	    return function (v) {
	      gl.uniform1fv(location, v);
	    };
	  }

	  function floatVec2Setter(gl, location) {
	    return function (v) {
	      gl.uniform2fv(location, v);
	    };
	  }

	  function floatVec3Setter(gl, location) {
	    return function (v) {
	      gl.uniform3fv(location, v);
	    };
	  }

	  function floatVec4Setter(gl, location) {
	    return function (v) {
	      gl.uniform4fv(location, v);
	    };
	  }

	  function intSetter(gl, location) {
	    return function (v) {
	      gl.uniform1i(location, v);
	    };
	  }

	  function intArraySetter(gl, location) {
	    return function (v) {
	      gl.uniform1iv(location, v);
	    };
	  }

	  function intVec2Setter(gl, location) {
	    return function (v) {
	      gl.uniform2iv(location, v);
	    };
	  }

	  function intVec3Setter(gl, location) {
	    return function (v) {
	      gl.uniform3iv(location, v);
	    };
	  }

	  function intVec4Setter(gl, location) {
	    return function (v) {
	      gl.uniform4iv(location, v);
	    };
	  }

	  function uintSetter(gl, location) {
	    return function (v) {
	      gl.uniform1ui(location, v);
	    };
	  }

	  function uintArraySetter(gl, location) {
	    return function (v) {
	      gl.uniform1uiv(location, v);
	    };
	  }

	  function uintVec2Setter(gl, location) {
	    return function (v) {
	      gl.uniform2uiv(location, v);
	    };
	  }

	  function uintVec3Setter(gl, location) {
	    return function (v) {
	      gl.uniform3uiv(location, v);
	    };
	  }

	  function uintVec4Setter(gl, location) {
	    return function (v) {
	      gl.uniform4uiv(location, v);
	    };
	  }

	  function floatMat2Setter(gl, location) {
	    return function (v) {
	      gl.uniformMatrix2fv(location, false, v);
	    };
	  }

	  function floatMat3Setter(gl, location) {
	    return function (v) {
	      gl.uniformMatrix3fv(location, false, v);
	    };
	  }

	  function floatMat4Setter(gl, location) {
	    return function (v) {
	      gl.uniformMatrix4fv(location, false, v);
	    };
	  }

	  function floatMat23Setter(gl, location) {
	    return function (v) {
	      gl.uniformMatrix2x3fv(location, false, v);
	    };
	  }

	  function floatMat32Setter(gl, location) {
	    return function (v) {
	      gl.uniformMatrix3x2fv(location, false, v);
	    };
	  }

	  function floatMat24Setter(gl, location) {
	    return function (v) {
	      gl.uniformMatrix2x4fv(location, false, v);
	    };
	  }

	  function floatMat42Setter(gl, location) {
	    return function (v) {
	      gl.uniformMatrix4x2fv(location, false, v);
	    };
	  }

	  function floatMat34Setter(gl, location) {
	    return function (v) {
	      gl.uniformMatrix3x4fv(location, false, v);
	    };
	  }

	  function floatMat43Setter(gl, location) {
	    return function (v) {
	      gl.uniformMatrix4x3fv(location, false, v);
	    };
	  }

	  function samplerSetter(gl, type, unit, location) {
	    var bindPoint = getBindPointForSamplerType(gl, type);
	    return utils.isWebGL2(gl) ? function (textureOrPair) {
	      var texture = void 0;
	      var sampler = void 0;
	      if (textureOrPair instanceof WebGLTexture) {
	        texture = textureOrPair;
	        sampler = null;
	      } else {
	        texture = textureOrPair.texture;
	        sampler = textureOrPair.sampler;
	      }
	      gl.uniform1i(location, unit);
	      gl.activeTexture(gl.TEXTURE0 + unit);
	      gl.bindTexture(bindPoint, texture);
	      gl.bindSampler(unit, sampler);
	    } : function (texture) {
	      gl.uniform1i(location, unit);
	      gl.activeTexture(gl.TEXTURE0 + unit);
	      gl.bindTexture(bindPoint, texture);
	    };
	  }

	  function samplerArraySetter(gl, type, unit, location, size) {
	    var bindPoint = getBindPointForSamplerType(gl, type);
	    var units = new Int32Array(size);
	    for (var ii = 0; ii < size; ++ii) {
	      units[ii] = unit + ii;
	    }

	    return utils.isWebGL2(gl) ? function (textures) {
	      gl.uniform1iv(location, units);
	      textures.forEach(function (textureOrPair, index) {
	        gl.activeTexture(gl.TEXTURE0 + units[index]);
	        var texture = void 0;
	        var sampler = void 0;
	        if (textureOrPair instanceof WebGLTexture) {
	          texture = textureOrPair;
	          sampler = null;
	        } else {
	          texture = textureOrPair.texture;
	          sampler = textureOrPair.sampler;
	        }
	        gl.bindSampler(unit, sampler);
	        gl.bindTexture(bindPoint, texture);
	      });
	    } : function (textures) {
	      gl.uniform1iv(location, units);
	      textures.forEach(function (texture, index) {
	        gl.activeTexture(gl.TEXTURE0 + units[index]);
	        gl.bindTexture(bindPoint, texture);
	      });
	    };
	  }

	  typeMap[FLOAT] = { Type: Float32Array, size: 4, setter: floatSetter, arraySetter: floatArraySetter };
	  typeMap[FLOAT_VEC2] = { Type: Float32Array, size: 8, setter: floatVec2Setter };
	  typeMap[FLOAT_VEC3] = { Type: Float32Array, size: 12, setter: floatVec3Setter };
	  typeMap[FLOAT_VEC4] = { Type: Float32Array, size: 16, setter: floatVec4Setter };
	  typeMap[INT] = { Type: Int32Array, size: 4, setter: intSetter, arraySetter: intArraySetter };
	  typeMap[INT_VEC2] = { Type: Int32Array, size: 8, setter: intVec2Setter };
	  typeMap[INT_VEC3] = { Type: Int32Array, size: 12, setter: intVec3Setter };
	  typeMap[INT_VEC4] = { Type: Int32Array, size: 16, setter: intVec4Setter };
	  typeMap[UNSIGNED_INT] = { Type: Uint32Array, size: 4, setter: uintSetter, arraySetter: uintArraySetter };
	  typeMap[UNSIGNED_INT_VEC2] = { Type: Uint32Array, size: 8, setter: uintVec2Setter };
	  typeMap[UNSIGNED_INT_VEC3] = { Type: Uint32Array, size: 12, setter: uintVec3Setter };
	  typeMap[UNSIGNED_INT_VEC4] = { Type: Uint32Array, size: 16, setter: uintVec4Setter };
	  typeMap[BOOL] = { Type: Uint32Array, size: 4, setter: intSetter, arraySetter: intArraySetter };
	  typeMap[BOOL_VEC2] = { Type: Uint32Array, size: 8, setter: intVec2Setter };
	  typeMap[BOOL_VEC3] = { Type: Uint32Array, size: 12, setter: intVec3Setter };
	  typeMap[BOOL_VEC4] = { Type: Uint32Array, size: 16, setter: intVec4Setter };
	  typeMap[FLOAT_MAT2] = { Type: Float32Array, size: 16, setter: floatMat2Setter };
	  typeMap[FLOAT_MAT3] = { Type: Float32Array, size: 36, setter: floatMat3Setter };
	  typeMap[FLOAT_MAT4] = { Type: Float32Array, size: 64, setter: floatMat4Setter };
	  typeMap[FLOAT_MAT2x3] = { Type: Float32Array, size: 24, setter: floatMat23Setter };
	  typeMap[FLOAT_MAT2x4] = { Type: Float32Array, size: 32, setter: floatMat24Setter };
	  typeMap[FLOAT_MAT3x2] = { Type: Float32Array, size: 24, setter: floatMat32Setter };
	  typeMap[FLOAT_MAT3x4] = { Type: Float32Array, size: 48, setter: floatMat34Setter };
	  typeMap[FLOAT_MAT4x2] = { Type: Float32Array, size: 32, setter: floatMat42Setter };
	  typeMap[FLOAT_MAT4x3] = { Type: Float32Array, size: 48, setter: floatMat43Setter };
	  typeMap[SAMPLER_2D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D };
	  typeMap[SAMPLER_CUBE] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
	  typeMap[SAMPLER_3D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D };
	  typeMap[SAMPLER_2D_SHADOW] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D };
	  typeMap[SAMPLER_2D_ARRAY] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
	  typeMap[SAMPLER_2D_ARRAY_SHADOW] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
	  typeMap[SAMPLER_CUBE_SHADOW] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
	  typeMap[INT_SAMPLER_2D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D };
	  typeMap[INT_SAMPLER_3D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D };
	  typeMap[INT_SAMPLER_CUBE] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
	  typeMap[INT_SAMPLER_2D_ARRAY] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
	  typeMap[UNSIGNED_INT_SAMPLER_2D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D };
	  typeMap[UNSIGNED_INT_SAMPLER_3D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D };
	  typeMap[UNSIGNED_INT_SAMPLER_CUBE] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
	  typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };

	  function floatAttribSetter(gl, index) {
	    return function (b) {
	      gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
	      gl.enableVertexAttribArray(index);
	      gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);
	    };
	  }

	  function intAttribSetter(gl, index) {
	    return function (b) {
	      gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
	      gl.enableVertexAttribArray(index);
	      gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || gl.INT, b.stride || 0, b.offset || 0);
	    };
	  }

	  function matAttribSetter(gl, index, typeInfo) {
	    var defaultSize = typeInfo.size;
	    var count = typeInfo.count;

	    return function (b) {
	      gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
	      var numComponents = b.size || b.numComponents || defaultSize;
	      var size = numComponents / count;
	      var type = b.type || gl.FLOAT;
	      var typeInfo = typeMap[type];
	      var stride = typeInfo.size * numComponents;
	      var normalize = b.normalize || false;
	      var offset = b.offset || 0;
	      var rowOffset = stride / count;
	      for (var i = 0; i < count; ++i) {
	        gl.enableVertexAttribArray(index + i);
	        gl.vertexAttribPointer(index + i, size, type, normalize, stride, offset + rowOffset * i);
	      }
	    };
	  }

	  var attrTypeMap = {};
	  attrTypeMap[FLOAT] = { size: 4, setter: floatAttribSetter };
	  attrTypeMap[FLOAT_VEC2] = { size: 8, setter: floatAttribSetter };
	  attrTypeMap[FLOAT_VEC3] = { size: 12, setter: floatAttribSetter };
	  attrTypeMap[FLOAT_VEC4] = { size: 16, setter: floatAttribSetter };
	  attrTypeMap[INT] = { size: 4, setter: intAttribSetter };
	  attrTypeMap[INT_VEC2] = { size: 8, setter: intAttribSetter };
	  attrTypeMap[INT_VEC3] = { size: 12, setter: intAttribSetter };
	  attrTypeMap[INT_VEC4] = { size: 16, setter: intAttribSetter };
	  attrTypeMap[UNSIGNED_INT] = { size: 4, setter: intAttribSetter };
	  attrTypeMap[UNSIGNED_INT_VEC2] = { size: 8, setter: intAttribSetter };
	  attrTypeMap[UNSIGNED_INT_VEC3] = { size: 12, setter: intAttribSetter };
	  attrTypeMap[UNSIGNED_INT_VEC4] = { size: 16, setter: intAttribSetter };
	  attrTypeMap[BOOL] = { size: 4, setter: intAttribSetter };
	  attrTypeMap[BOOL_VEC2] = { size: 8, setter: intAttribSetter };
	  attrTypeMap[BOOL_VEC3] = { size: 12, setter: intAttribSetter };
	  attrTypeMap[BOOL_VEC4] = { size: 16, setter: intAttribSetter };
	  attrTypeMap[FLOAT_MAT2] = { size: 4, setter: matAttribSetter, count: 2 };
	  attrTypeMap[FLOAT_MAT3] = { size: 9, setter: matAttribSetter, count: 3 };
	  attrTypeMap[FLOAT_MAT4] = { size: 16, setter: matAttribSetter, count: 4 };

	  // make sure we don't see a global gl
	  var gl = undefined; // eslint-disable-line

	  /**
	   * Error Callback
	   * @callback ErrorCallback
	   * @param {string} msg error message.
	   * @param {number} [lineOffset] amount to add to line number
	   * @memberOf module:twgl
	   */

	  function addLineNumbers(src, lineOffset) {
	    lineOffset = lineOffset || 0;
	    ++lineOffset;

	    return src.split("\n").map(function (line, ndx) {
	      return ndx + lineOffset + ": " + line;
	    }).join("\n");
	  }

	  var spaceRE = /^[ \t]*\n/;

	  /**
	   * Loads a shader.
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
	   * @param {string} shaderSource The shader source.
	   * @param {number} shaderType The type of shader.
	   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors.
	   * @return {WebGLShader} The created shader.
	   */
	  function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
	    var errFn = opt_errorCallback || error;
	    // Create the shader object
	    var shader = gl.createShader(shaderType);

	    // Remove the first end of line because WebGL 2.0 requires
	    // #version 300 es
	    // as the first line. No whitespace allowed before that line
	    // so
	    //
	    // <script>
	    // #version 300 es
	    // </script>
	    //
	    // Has one line before it which is invalid according to GLSL ES 3.00
	    //
	    var lineOffset = 0;
	    if (spaceRE.test(shaderSource)) {
	      lineOffset = 1;
	      shaderSource = shaderSource.replace(spaceRE, '');
	    }

	    // Load the shader source
	    gl.shaderSource(shader, shaderSource);

	    // Compile the shader
	    gl.compileShader(shader);

	    // Check the compile status
	    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	    if (!compiled) {
	      // Something went wrong during compilation; get the error
	      var lastError = gl.getShaderInfoLog(shader);
	      errFn(addLineNumbers(shaderSource, lineOffset) + "\n*** Error compiling shader: " + lastError);
	      gl.deleteShader(shader);
	      return null;
	    }

	    return shader;
	  }

	  /**
	   * @typedef {Object} ProgramOptions
	   * @property {function(string)} [errorCallback] callback for errors
	   * @property {Object.<string,number>} [attribLocations] a attribute name to location map
	   * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
	   *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
	   *   you can pass an array of names.
	   * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
	   * @memberOf module:twgl
	   */

	  /**
	   * Gets the program options based on all these optional arguments
	   * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
	   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
	   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
	   *        on error. If you want something else pass an callback. It's passed an error message.
	   * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments pased on
	   */
	  function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
	    if (typeof opt_locations === 'function') {
	      opt_errorCallback = opt_locations;
	      opt_locations = undefined;
	    }
	    if (typeof opt_attribs === 'function') {
	      opt_errorCallback = opt_attribs;
	      opt_attribs = undefined;
	    } else if (opt_attribs && !Array.isArray(opt_attribs)) {
	      // If we have an errorCallback we can just return this object
	      // Otherwise we need to construct one with default errorCallback
	      if (opt_attribs.errorCallback) {
	        return opt_attribs;
	      }
	      var opt = opt_attribs;
	      opt_errorCallback = opt.errorCallback;
	      opt_attribs = opt.attribLocations;
	      var transformFeedbackVaryings = opt.transformFeedbackVaryings;
	    }

	    var options = {
	      errorCallback: opt_errorCallback || error,
	      transformFeedbackVaryings: transformFeedbackVaryings
	    };

	    if (opt_attribs) {
	      var attribLocations = {};
	      if (Array.isArray(opt_attribs)) {
	        opt_attribs.forEach(function (attrib, ndx) {
	          attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
	        });
	      } else {
	        attribLocations = opt_attribs;
	      }
	      options.attribLocations = attribLocations;
	    }

	    return options;
	  }

	  var defaultShaderType = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

	  function getShaderTypeFromScriptType(scriptType) {
	    if (scriptType.indexOf("frag") >= 0) {
	      return gl.FRAGMENT_SHADER;
	    } else if (scriptType.indexOf("vert") >= 0) {
	      return gl.VERTEX_SHADER;
	    }
	    return undefined;
	  }

	  /**
	   * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
	   * program and calls useProgram.
	   *
	   * NOTE: There are 4 signatures for this function
	   *
	   *     twgl.createProgram(gl, [vs, fs], options);
	   *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
	   *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
	   *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
	   *
	   * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
	   * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
	   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
	   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
	   *        on error. If you want something else pass an callback. It's passed an error message.
	   * @return {WebGLProgram?} the created program or null if error.
	   * @memberOf module:twgl/programs
	   */
	  function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
	    var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
	    var program = gl.createProgram();
	    shaders.forEach(function (shader, ndx) {
	      if (typeof shader === 'string') {
	        var elem = document.getElementById(shader);
	        var src = elem ? elem.text : shader;
	        var type = defaultShaderType[ndx];
	        if (elem && elem.type) {
	          type = getShaderTypeFromScriptType(elem.type);
	        }
	        shader = loadShader(gl, src, type, progOptions.errorCallback);
	      }
	      gl.attachShader(program, shader);
	    });
	    if (progOptions.attribLocations) {
	      Object.keys(progOptions.attribLocations).forEach(function (attrib) {
	        gl.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
	      });
	    }
	    var varyings = progOptions.transformFeedbackVaryings;
	    if (varyings) {
	      if (varyings.attribs) {
	        varyings = varyings.attribs;
	      }
	      if (!Array.isArray(varyings)) {
	        varyings = Object.keys(varyings);
	      }
	      gl.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || gl.SEPARATE_ATTRIBS);
	    }
	    gl.linkProgram(program);

	    // Check the link status
	    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
	    if (!linked) {
	      // something went wrong with the link
	      var lastError = gl.getProgramInfoLog(program);
	      progOptions.errorCallback("Error in program linking:" + lastError);

	      gl.deleteProgram(program);
	      return null;
	    }
	    return program;
	  }

	  /**
	   * Loads a shader from a script tag.
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
	   * @param {string} scriptId The id of the script tag.
	   * @param {number} [opt_shaderType] The type of shader. If not passed in it will
	   *     be derived from the type of the script tag.
	   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors.
	   * @return {WebGLShader?} The created shader or null if error.
	   */
	  function createShaderFromScript(gl, scriptId, opt_shaderType, opt_errorCallback) {
	    var shaderSource = "";
	    var shaderScript = document.getElementById(scriptId);
	    if (!shaderScript) {
	      throw "*** Error: unknown script element" + scriptId;
	    }
	    shaderSource = shaderScript.text;

	    var shaderType = opt_shaderType || getShaderTypeFromScriptType(shaderScript.type);
	    if (!shaderType) {
	      throw "*** Error: unknown shader type";
	    }

	    return loadShader(gl, shaderSource, shaderType, opt_errorCallback);
	  }

	  /**
	   * Creates a program from 2 script tags.
	   *
	   * NOTE: There are 4 signatures for this function
	   *
	   *     twgl.createProgramFromScripts(gl, [vs, fs], opt_options);
	   *     twgl.createProgramFromScripts(gl, [vs, fs], opt_errFunc);
	   *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_errFunc);
	   *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
	   *        to use.
	   * @param {string[]} shaderScriptIds Array of ids of the script
	   *        tags for the shaders. The first is assumed to be the
	   *        vertex shader, the second the fragment shader.
	   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
	   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
	   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
	   *        on error. If you want something else pass an callback. It's passed an error message.
	   * @return {WebGLProgram} The created program.
	   * @memberOf module:twgl/programs
	   */
	  function createProgramFromScripts(gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
	    var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
	    var shaders = [];
	    for (var ii = 0; ii < shaderScriptIds.length; ++ii) {
	      var shader = createShaderFromScript(gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);
	      if (!shader) {
	        return null;
	      }
	      shaders.push(shader);
	    }
	    return createProgram(gl, shaders, progOptions);
	  }

	  /**
	   * Creates a program from 2 sources.
	   *
	   * NOTE: There are 4 signatures for this function
	   *
	   *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
	   *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
	   *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
	   *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
	   *        to use.
	   * @param {string[]} shaderSources Array of sources for the
	   *        shaders. The first is assumed to be the vertex shader,
	   *        the second the fragment shader.
	   * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
	   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
	   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
	   *        on error. If you want something else pass an callback. It's passed an error message.
	   * @return {WebGLProgram} The created program.
	   * @memberOf module:twgl/programs
	   */
	  function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
	    var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
	    var shaders = [];
	    for (var ii = 0; ii < shaderSources.length; ++ii) {
	      var shader = loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);
	      if (!shader) {
	        return null;
	      }
	      shaders.push(shader);
	    }
	    return createProgram(gl, shaders, progOptions);
	  }

	  /**
	   * Creates setter functions for all uniforms of a shader
	   * program.
	   *
	   * @see {@link module:twgl.setUniforms}
	   *
	   * @param {WebGLProgram} program the program to create setters for.
	   * @returns {Object.<string, function>} an object with a setter by name for each uniform
	   * @memberOf module:twgl/programs
	   */
	  function createUniformSetters(gl, program) {
	    var textureUnit = 0;

	    /**
	     * Creates a setter for a uniform of the given program with it's
	     * location embedded in the setter.
	     * @param {WebGLProgram} program
	     * @param {WebGLUniformInfo} uniformInfo
	     * @returns {function} the created setter.
	     */
	    function createUniformSetter(program, uniformInfo) {
	      var location = gl.getUniformLocation(program, uniformInfo.name);
	      var isArray = uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]";
	      var type = uniformInfo.type;
	      var typeInfo = typeMap[type];
	      if (!typeInfo) {
	        throw "unknown type: 0x" + type.toString(16); // we should never get here.
	      }
	      if (typeInfo.bindPoint) {
	        // it's a sampler
	        var unit = textureUnit;
	        textureUnit += uniformInfo.size;

	        if (isArray) {
	          return typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
	        } else {
	          return typeInfo.setter(gl, type, unit, location, uniformInfo.size);
	        }
	      } else {
	        if (typeInfo.arraySetter && isArray) {
	          return typeInfo.arraySetter(gl, location);
	        } else {
	          return typeInfo.setter(gl, location);
	        }
	      }
	    }

	    var uniformSetters = {};
	    var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

	    for (var ii = 0; ii < numUniforms; ++ii) {
	      var uniformInfo = gl.getActiveUniform(program, ii);
	      if (!uniformInfo) {
	        break;
	      }
	      var name = uniformInfo.name;
	      // remove the array suffix.
	      if (name.substr(-3) === "[0]") {
	        name = name.substr(0, name.length - 3);
	      }
	      var setter = createUniformSetter(program, uniformInfo);
	      uniformSetters[name] = setter;
	    }
	    return uniformSetters;
	  }

	  /**
	   * @typedef {Object} TransformFeedbackInfo
	   * @property {number} index index of transform feedback
	   * @property {number} type GL type
	   * @property {number} size 1 - 4
	   * @memberOf module:twgl
	   */

	  /**
	   * Create TransformFeedbackInfo for passing to bind/unbindTransformFeedbackInfo.
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
	   * @param {WebGLProgram} program an existing WebGLProgram.
	   * @return {Object<string, module:twgl.TransformFeedbackInfo>}
	   * @memberOf module:twgl
	   */
	  function createTransformFeedbackInfo(gl, program) {
	    var info = {};
	    var numVaryings = gl.getProgramParameter(program, gl.TRANSFORM_FEEDBACK_VARYINGS);
	    for (var ii = 0; ii < numVaryings; ++ii) {
	      var varying = gl.getTransformFeedbackVarying(program, ii);
	      info[varying.name] = {
	        index: ii,
	        type: varying.type,
	        size: varying.size
	      };
	    }
	    return info;
	  }

	  /**
	   * Binds buffers for transform feedback.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
	   * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
	   * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
	   * @memberOf module:twgl
	   */
	  function bindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
	    if (transformFeedbackInfo.transformFeedbackInfo) {
	      transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
	    }
	    if (bufferInfo.attribs) {
	      bufferInfo = bufferInfo.attribs;
	    }
	    for (var name in bufferInfo) {
	      var varying = transformFeedbackInfo[name];
	      if (varying) {
	        var buf = bufferInfo[name];
	        if (buf.offset) {
	          gl.bindBufferRange(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer, buf.offset, buf.size);
	        } else {
	          gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer);
	        }
	      }
	    }
	  }

	  /**
	   * Unbinds buffers afetr transform feedback.
	   *
	   * Buffers can not be bound to 2 bind points so if you try to bind a buffer used
	   * in a transform feedback as an ARRAY_BUFFER for an attribute it will fail.
	   *
	   * This function unbinds all buffers that were bound with {@link module:twgl.bindTransformFeedbackInfo}.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
	   * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
	   * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
	   */
	  function unbindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
	    if (transformFeedbackInfo.transformFeedbackInfo) {
	      transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
	    }
	    if (bufferInfo.attribs) {
	      bufferInfo = bufferInfo.attribs;
	    }
	    for (var name in bufferInfo) {
	      var varying = transformFeedbackInfo[name];
	      if (varying) {
	        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, null);
	      }
	    }
	  }

	  /**
	   * Creates a transform feedback and sets the buffers
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
	   * @param {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
	   * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
	   * @return {WebGLTransformFeedback} the created transform feedback
	   * @memberOf module:twgl
	   */
	  function createTransformFeedback(gl, programInfo, bufferInfo) {
	    var tf = gl.createTransformFeedback();
	    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
	    gl.useProgram(programInfo.program);
	    bindTransformFeedbackInfo(gl, programInfo, bufferInfo);
	    gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
	    // This is only needed because of a bug in Chrome 56. Will remove
	    // when chrome fixes it.
	    unbindTransformFeedbackInfo(gl, programInfo, bufferInfo);
	    return tf;
	  }

	  /**
	   * @typedef {Object} UniformData
	   * @property {number} type The WebGL type enum for this uniform
	   * @property {number} size The number of elements for this uniform
	   * @property {number} blockNdx The block index this uniform appears in
	   * @property {number} offset The byte offset in the block for this uniform's value
	   * @memberOf module:twgl
	   */

	  /**
	   * The specification for one UniformBlockObject
	   *
	   * @typedef {Object} BlockSpec
	   * @property {number} index The index of the block.
	   * @property {number} size The size in bytes needed for the block
	   * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
	   *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
	   * @property {bool} usedByVertexShader Self explanitory
	   * @property {bool} usedByFragmentShader Self explanitory
	   * @property {bool} used Self explanitory
	   * @memberOf module:twgl
	   */

	  /**
	   * A `UniformBlockSpec` represents the data needed to create and bind
	   * UniformBlockObjects for a given program
	   *
	   * @typedef {Object} UniformBlockSpec
	   * @property {Object.<string, module:twgl.BlockSpec> blockSpecs The BlockSpec for each block by block name
	   * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
	   * @memberOf module:twgl
	   */

	  /**
	   * Creates a UniformBlockSpec for the given program.
	   *
	   * A UniformBlockSpec represents the data needed to create and bind
	   * UniformBlockObjects
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
	   * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
	   * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
	   * @memberOf module:twgl/programs
	   */
	  function createUniformBlockSpecFromProgram(gl, program) {
	    var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	    var uniformData = [];
	    var uniformIndices = [];

	    for (var ii = 0; ii < numUniforms; ++ii) {
	      uniformIndices.push(ii);
	      uniformData.push({});
	      var uniformInfo = gl.getActiveUniform(program, ii);
	      if (!uniformInfo) {
	        break;
	      }
	      // REMOVE [0]?
	      uniformData[ii].name = uniformInfo.name;
	    }

	    [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], // num elements
	    ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach(function (pair) {
	      var pname = pair[0];
	      var key = pair[1];
	      gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function (value, ndx) {
	        uniformData[ndx][key] = value;
	      });
	    });

	    var blockSpecs = {};

	    var numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);
	    for (ii = 0; ii < numUniformBlocks; ++ii) {
	      var name = gl.getActiveUniformBlockName(program, ii);
	      var blockSpec = {
	        index: ii,
	        usedByVertexShader: gl.getActiveUniformBlockParameter(program, ii, gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
	        usedByFragmentShader: gl.getActiveUniformBlockParameter(program, ii, gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
	        size: gl.getActiveUniformBlockParameter(program, ii, gl.UNIFORM_BLOCK_DATA_SIZE),
	        uniformIndices: gl.getActiveUniformBlockParameter(program, ii, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
	      };
	      blockSpec.used = blockSpec.usedByVertexSahder || blockSpec.usedByFragmentShader;
	      blockSpecs[name] = blockSpec;
	    }

	    return {
	      blockSpecs: blockSpecs,
	      uniformData: uniformData
	    };
	  }

	  var arraySuffixRE = /\[\d+\]\.$/; // better way to check?

	  /**
	   * Represents a UniformBlockObject including an ArrayBuffer with all the uniform values
	   * and a corresponding WebGLBuffer to hold those values on the GPU
	   *
	   * @typedef {Object} UniformBlockInfo
	   * @property {string} name The name of the block
	   * @property {ArrayBuffer} array The array buffer that contains the uniform values
	   * @property {Float32Array} asFloat A float view on the array buffer. This is useful
	   *    inspecting the contents of the buffer in the debugger.
	   * @property {WebGLBuffer} buffer A WebGL buffer that will hold a copy of the uniform values for rendering.
	   * @property {number} [offset] offset into buffer
	   * @property {Object.<string, ArrayBufferView>} uniforms A uniform name to ArrayBufferView map.
	   *   each Uniform has a correctly typed `ArrayBufferView` into array at the correct offset
	   *   and length of that uniform. So for example a float uniform would have a 1 float `Float32Array`
	   *   view. A single mat4 would have a 16 element `Float32Array` view. An ivec2 would have an
	   *   `Int32Array` view, etc.
	   * @memberOf module:twgl
	   */

	  /**
	   * Creates a `UniformBlockInfo` for the specified block
	   *
	   * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
	   * `UniformBlockInfo` is returned**. This is because when debugging GLSL
	   * it is common to comment out large portions of a shader or for example set
	   * the final output to a constant. When that happens blocks get optimized out.
	   * If this function did not create dummy blocks your code would crash when debugging.
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
	   * @param {WebGLProgram} program A WebGLProgram
	   * @param {module:twgl.UniformBlockSpec} uinformBlockSpec. A UniformBlockSpec as returned
	   *     from {@link module:twgl.createUniformBlockSpecFromProgram}.
	   * @param {string} blockName The name of the block.
	   * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
	   * @memberOf module:twgl/programs
	   */
	  function createUniformBlockInfoFromProgram(gl, program, uniformBlockSpec, blockName) {
	    var blockSpecs = uniformBlockSpec.blockSpecs;
	    var uniformData = uniformBlockSpec.uniformData;
	    var blockSpec = blockSpecs[blockName];
	    if (!blockSpec) {
	      warn("no uniform block object named:", blockName);
	      return {
	        name: blockName,
	        uniforms: {}
	      };
	    }
	    var array = new ArrayBuffer(blockSpec.size);
	    var buffer = gl.createBuffer();
	    var uniformBufferIndex = blockSpec.index;
	    gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
	    gl.uniformBlockBinding(program, blockSpec.index, uniformBufferIndex);

	    var prefix = blockName + ".";
	    if (arraySuffixRE.test(prefix)) {
	      prefix = prefix.replace(arraySuffixRE, ".");
	    }
	    var uniforms = {};
	    blockSpec.uniformIndices.forEach(function (uniformNdx) {
	      var data = uniformData[uniformNdx];
	      var typeInfo = typeMap[data.type];
	      var Type = typeInfo.Type;
	      var length = data.size * typeInfo.size;
	      var name = data.name;
	      if (name.substr(0, prefix.length) === prefix) {
	        name = name.substr(prefix.length);
	      }
	      uniforms[name] = new Type(array, data.offset, length / Type.BYTES_PER_ELEMENT);
	    });
	    return {
	      name: blockName,
	      array: array,
	      asFloat: new Float32Array(array), // for debugging
	      buffer: buffer,
	      uniforms: uniforms
	    };
	  }

	  /**
	   * Creates a `UniformBlockInfo` for the specified block
	   *
	   * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
	   * `UniformBlockInfo` is returned**. This is because when debugging GLSL
	   * it is common to comment out large portions of a shader or for example set
	   * the final output to a constant. When that happens blocks get optimized out.
	   * If this function did not create dummy blocks your code would crash when debugging.
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
	   * @param {module:twgl.ProgramInfo} programInfo a `ProgramInfo`
	   *     as returned from {@link module:twgl.createProgramInfo}
	   * @param {string} blockName The name of the block.
	   * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
	   * @memberOf module:twgl/programs
	   */
	  function createUniformBlockInfo(gl, programInfo, blockName) {
	    return createUniformBlockInfoFromProgram(gl, programInfo.program, programInfo.uniformBlockSpec, blockName);
	  }

	  /**
	   * Binds a unform block to the matching uniform block point.
	   * Matches by blocks by name so blocks must have the same name not just the same
	   * structure.
	   *
	   * If you have changed any values and you upload the valus into the corresponding WebGLBuffer
	   * call {@link module:twgl.setUniformBlock} instead.
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
	   * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
	   *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
	   *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
	   * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
	   *     {@link module:twgl.createUniformBlockInfo}.
	   * @return {bool} true if buffer was bound. If the programInfo has no block with the same block name
	   *     no buffer is bound.
	   * @memberOf module:twgl/programs
	   */
	  function bindUniformBlock(gl, programInfo, uniformBlockInfo) {
	    var uniformBlockSpec = programInfo.uniformBlockSpec || programInfo;
	    var blockSpec = uniformBlockSpec.blockSpecs[uniformBlockInfo.name];
	    if (blockSpec) {
	      var bufferBindIndex = blockSpec.index;
	      gl.bindBufferRange(gl.UNIFORM_BUFFER, bufferBindIndex, uniformBlockInfo.buffer, uniformBlockInfo.offset || 0, uniformBlockInfo.array.byteLength);
	      return true;
	    }
	    return false;
	  }

	  /**
	   * Uploads the current uniform values to the corresponding WebGLBuffer
	   * and binds that buffer to the program's corresponding bind point for the uniform block object.
	   *
	   * If you haven't changed any values and you only need to bind the uniform block object
	   * call {@link module:twgl.bindUniformBlock} instead.
	   *
	   * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
	   * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
	   *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
	   *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
	   * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
	   *     {@link module:twgl.createUniformBlockInfo}.
	   * @memberOf module:twgl/programs
	   */
	  function setUniformBlock(gl, programInfo, uniformBlockInfo) {
	    if (bindUniformBlock(gl, programInfo, uniformBlockInfo)) {
	      gl.bufferData(gl.UNIFORM_BUFFER, uniformBlockInfo.array, gl.DYNAMIC_DRAW);
	    }
	  }

	  /**
	   * Sets values of a uniform block object
	   *
	   * @param {module:twgl.UniformBlockInfo} uniformBlockInfo A UniformBlockInfo as returned by {@link module:twgl.createUniformBlockInfo}.
	   * @param {Object.<string, ?>} values A uniform name to value map where the value is correct for the given
	   *    type of uniform. So for example given a block like
	   *
	   *       uniform SomeBlock {
	   *         float someFloat;
	   *         vec2 someVec2;
	   *         vec3 someVec3Array[2];
	   *         int someInt;
	   *       }
	   *
	   *  You can set the values of the uniform block with
	   *
	   *       twgl.setBlockUniforms(someBlockInfo, {
	   *          someFloat: 12.3,
	   *          someVec2: [1, 2],
	   *          someVec3Array: [1, 2, 3, 4, 5, 6],
	   *          someInt: 5,
	   *       }
	   *
	   *  Arrays can be JavaScript arrays or typed arrays
	   *
	   *  Any name that doesn't match will be ignored
	   * @memberOf module:twgl/programs
	   */
	  function setBlockUniforms(uniformBlockInfo, values) {
	    var uniforms = uniformBlockInfo.uniforms;
	    for (var name in values) {
	      var array = uniforms[name];
	      if (array) {
	        var value = values[name];
	        if (value.length) {
	          array.set(value);
	        } else {
	          array[0] = value;
	        }
	      }
	    }
	  }

	  /**
	   * Set uniforms and binds related textures.
	   *
	   * example:
	   *
	   *     var programInfo = createProgramInfo(
	   *         gl, ["some-vs", "some-fs"]);
	   *
	   *     var tex1 = gl.createTexture();
	   *     var tex2 = gl.createTexture();
	   *
	   *     ... assume we setup the textures with data ...
	   *
	   *     var uniforms = {
	   *       u_someSampler: tex1,
	   *       u_someOtherSampler: tex2,
	   *       u_someColor: [1,0,0,1],
	   *       u_somePosition: [0,1,1],
	   *       u_someMatrix: [
	   *         1,0,0,0,
	   *         0,1,0,0,
	   *         0,0,1,0,
	   *         0,0,0,0,
	   *       ],
	   *     };
	   *
	   *     gl.useProgram(program);
	   *
	   * This will automatically bind the textures AND set the
	   * uniforms.
	   *
	   *     twgl.setUniforms(programInfo, uniforms);
	   *
	   * For the example above it is equivalent to
	   *
	   *     var texUnit = 0;
	   *     gl.activeTexture(gl.TEXTURE0 + texUnit);
	   *     gl.bindTexture(gl.TEXTURE_2D, tex1);
	   *     gl.uniform1i(u_someSamplerLocation, texUnit++);
	   *     gl.activeTexture(gl.TEXTURE0 + texUnit);
	   *     gl.bindTexture(gl.TEXTURE_2D, tex2);
	   *     gl.uniform1i(u_someSamplerLocation, texUnit++);
	   *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
	   *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
	   *     gl.uniformMatrix4fv(u_someMatrix, false, [
	   *         1,0,0,0,
	   *         0,1,0,0,
	   *         0,0,1,0,
	   *         0,0,0,0,
	   *       ]);
	   *
	   * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
	   *
	   *     var uniforms = {
	   *       u_someSampler: tex1,
	   *       u_someOtherSampler: tex2,
	   *     };
	   *
	   *     var moreUniforms {
	   *       u_someColor: [1,0,0,1],
	   *       u_somePosition: [0,1,1],
	   *       u_someMatrix: [
	   *         1,0,0,0,
	   *         0,1,0,0,
	   *         0,0,1,0,
	   *         0,0,0,0,
	   *       ],
	   *     };
	   *
	   *     twgl.setUniforms(programInfo, uniforms);
	   *     twgl.setUniforms(programInfo, moreUniforms);
	   *
	   * You can also add WebGLSamplers to uniform samplers as in
	   *
	   *     var uniforms = {
	   *       u_someSampler: {
	   *         texture: someWebGLTexture,
	   *         sampler: someWebGLSampler,
	   *       },
	   *     };
	   *
	   * In which case both the sampler and texture will be bound to the
	   * same unit.
	   *
	   * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
	   *        `createUniformSetters`.
	   * @param {Object.<string, ?>} values an object with values for the
	   *        uniforms.
	   *   You can pass multiple objects by putting them in an array or by calling with more arguments.For example
	   *
	   *     var sharedUniforms = {
	   *       u_fogNear: 10,
	   *       u_projection: ...
	   *       ...
	   *     };
	   *
	   *     var localUniforms = {
	   *       u_world: ...
	   *       u_diffuseColor: ...
	   *     };
	   *
	   *     twgl.setUniforms(programInfo, sharedUniforms, localUniforms);
	   *
	   *     // is the same as
	   *
	   *     twgl.setUniforms(programInfo, [sharedUniforms, localUniforms]);
	   *
	   *     // is the same as
	   *
	   *     twgl.setUniforms(programInfo, sharedUniforms);
	   *     twgl.setUniforms(programInfo, localUniforms};
	   *
	   * @memberOf module:twgl/programs
	   */
	  function setUniforms(setters, values) {
	    // eslint-disable-line
	    var actualSetters = setters.uniformSetters || setters;
	    var numArgs = arguments.length;
	    for (var andx = 1; andx < numArgs; ++andx) {
	      var vals = arguments[andx];
	      if (Array.isArray(vals)) {
	        var numValues = vals.length;
	        for (var ii = 0; ii < numValues; ++ii) {
	          setUniforms(actualSetters, vals[ii]);
	        }
	      } else {
	        for (var name in vals) {
	          var setter = actualSetters[name];
	          if (setter) {
	            setter(vals[name]);
	          }
	        }
	      }
	    }
	  }

	  /**
	   * Creates setter functions for all attributes of a shader
	   * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
	   *
	   * @see {@link module:twgl.setAttributes} for example
	   * @param {WebGLProgram} program the program to create setters for.
	   * @return {Object.<string, function>} an object with a setter for each attribute by name.
	   * @memberOf module:twgl/programs
	   */
	  function createAttributeSetters(gl, program) {
	    var attribSetters = {};

	    var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
	    for (var ii = 0; ii < numAttribs; ++ii) {
	      var attribInfo = gl.getActiveAttrib(program, ii);
	      if (!attribInfo) {
	        break;
	      }
	      var index = gl.getAttribLocation(program, attribInfo.name);
	      var typeInfo = attrTypeMap[attribInfo.type];
	      attribSetters[attribInfo.name] = typeInfo.setter(gl, index, typeInfo);
	    }

	    return attribSetters;
	  }

	  /**
	   * Sets attributes and binds buffers (deprecated... use {@link module:twgl.setBuffersAndAttributes})
	   *
	   * Example:
	   *
	   *     var program = createProgramFromScripts(
	   *         gl, ["some-vs", "some-fs");
	   *
	   *     var attribSetters = createAttributeSetters(program);
	   *
	   *     var positionBuffer = gl.createBuffer();
	   *     var texcoordBuffer = gl.createBuffer();
	   *
	   *     var attribs = {
	   *       a_position: {buffer: positionBuffer, numComponents: 3},
	   *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
	   *     };
	   *
	   *     gl.useProgram(program);
	   *
	   * This will automatically bind the buffers AND set the
	   * attributes.
	   *
	   *     setAttributes(attribSetters, attribs);
	   *
	   * Properties of attribs. For each attrib you can add
	   * properties:
	   *
	   * *   type: the type of data in the buffer. Default = gl.FLOAT
	   * *   normalize: whether or not to normalize the data. Default = false
	   * *   stride: the stride. Default = 0
	   * *   offset: offset into the buffer. Default = 0
	   *
	   * For example if you had 3 value float positions, 2 value
	   * float texcoord and 4 value uint8 colors you'd setup your
	   * attribs like this
	   *
	   *     var attribs = {
	   *       a_position: {buffer: positionBuffer, numComponents: 3},
	   *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
	   *       a_color: {
	   *         buffer: colorBuffer,
	   *         numComponents: 4,
	   *         type: gl.UNSIGNED_BYTE,
	   *         normalize: true,
	   *       },
	   *     };
	   *
	   * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
	   * @param {Object.<string, module:twgl.AttribInfo>} buffers AttribInfos mapped by attribute name.
	   * @memberOf module:twgl/programs
	   * @deprecated use {@link module:twgl.setBuffersAndAttributes}
	   */
	  function setAttributes(setters, buffers) {
	    for (var name in buffers) {
	      var setter = setters[name];
	      if (setter) {
	        setter(buffers[name]);
	      }
	    }
	  }

	  /**
	   * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
	   *
	   * Example:
	   *
	   *     var programInfo = createProgramInfo(
	   *         gl, ["some-vs", "some-fs");
	   *
	   *     var arrays = {
	   *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
	   *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
	   *     };
	   *
	   *     var bufferInfo = createBufferInfoFromArrays(gl, arrays);
	   *
	   *     gl.useProgram(programInfo.program);
	   *
	   * This will automatically bind the buffers AND set the
	   * attributes.
	   *
	   *     setBuffersAndAttributes(gl, programInfo, bufferInfo);
	   *
	   * For the example above it is equivilent to
	   *
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	   *     gl.enableVertexAttribArray(a_positionLocation);
	   *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
	   *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
	   *     gl.enableVertexAttribArray(a_texcoordLocation);
	   *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
	   * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters A `ProgramInfo` as returned from {@link module:twgl.createProgrmaInfo} or Attribute setters as returned from {@link module:twgl.createAttributeSetters}
	   * @param {(module:twgl.BufferInfo|module:twgl.vertexArrayInfo)} buffers a `BufferInfo` as returned from {@link module:twgl.createBufferInfoFromArrays}.
	   *   or a `VertexArrayInfo` as returned from {@link module:twgl.createVertexArrayInfo}
	   * @memberOf module:twgl/programs
	   */
	  function setBuffersAndAttributes(gl, programInfo, buffers) {
	    if (buffers.vertexArrayObject) {
	      gl.bindVertexArray(buffers.vertexArrayObject);
	    } else {
	      setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);
	      if (buffers.indices) {
	        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
	      }
	    }
	  }

	  /**
	   * @typedef {Object} ProgramInfo
	   * @property {WebGLProgram} program A shader program
	   * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
	   * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
	   * @propetty {module:twgl.UniformBlockSpec} [uniformBlockSpace] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
	   * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
	   * @memberOf module:twgl
	   */

	  /**
	   * Creates a ProgramInfo from an existing program.
	   *
	   * A ProgramInfo contains
	   *
	   *     programInfo = {
	   *        program: WebGLProgram,
	   *        uniformSetters: object of setters as returned from createUniformSetters,
	   *        attribSetters: object of setters as returned from createAttribSetters,
	   *     }
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
	   *        to use.
	   * @param {WebGLProgram} program an existing WebGLProgram.
	   * @return {module:twgl.ProgramInfo} The created ProgramInfo.
	   * @memberOf module:twgl/programs
	   */
	  function createProgramInfoFromProgram(gl, program) {
	    var uniformSetters = createUniformSetters(gl, program);
	    var attribSetters = createAttributeSetters(gl, program);
	    var programInfo = {
	      program: program,
	      uniformSetters: uniformSetters,
	      attribSetters: attribSetters
	    };

	    if (utils.isWebGL2(gl)) {
	      programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
	      programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
	    }

	    return programInfo;
	  }

	  /**
	   * Creates a ProgramInfo from 2 sources.
	   *
	   * A ProgramInfo contains
	   *
	   *     programInfo = {
	   *        program: WebGLProgram,
	   *        uniformSetters: object of setters as returned from createUniformSetters,
	   *        attribSetters: object of setters as returned from createAttribSetters,
	   *     }
	   *
	   * NOTE: There are 4 signatures for this function
	   *
	   *     twgl.createProgramInfo(gl, [vs, fs], options);
	   *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
	   *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
	   *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
	   *        to use.
	   * @param {string[]} shaderSources Array of sources for the
	   *        shaders or ids. The first is assumed to be the vertex shader,
	   *        the second the fragment shader.
	   * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
	   * @param {number[]} [opt_locations] The locations for the attributes. A parallel array to opt_attribs letting you assign locations.
	   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
	   *        on error. If you want something else pass an callback. It's passed an error message.
	   * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
	   * @memberOf module:twgl/programs
	   */
	  function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
	    var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
	    var good = true;
	    shaderSources = shaderSources.map(function (source) {
	      // Lets assume if there is no \n it's an id
	      if (source.indexOf("\n") < 0) {
	        var script = document.getElementById(source);
	        if (!script) {
	          progOptions.errorCallback("no element with id: " + source);
	          good = false;
	        } else {
	          source = script.text;
	        }
	      }
	      return source;
	    });
	    if (!good) {
	      return null;
	    }
	    var program = createProgramFromSources(gl, shaderSources, progOptions);
	    if (!program) {
	      return null;
	    }
	    return createProgramInfoFromProgram(gl, program);
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "createAttributeSetters": createAttributeSetters,

	    "createProgram": createProgram,
	    "createProgramFromScripts": createProgramFromScripts,
	    "createProgramFromSources": createProgramFromSources,
	    "createProgramInfo": createProgramInfo,
	    "createProgramInfoFromProgram": createProgramInfoFromProgram,
	    "createUniformSetters": createUniformSetters,
	    "createUniformBlockSpecFromProgram": createUniformBlockSpecFromProgram,
	    "createUniformBlockInfoFromProgram": createUniformBlockInfoFromProgram,
	    "createUniformBlockInfo": createUniformBlockInfo,

	    "createTransformFeedback": createTransformFeedback,
	    "createTransformFeedbackInfo": createTransformFeedbackInfo,
	    "bindTransformFeedbackInfo": bindTransformFeedbackInfo,

	    "setAttributes": setAttributes,
	    "setBuffersAndAttributes": setBuffersAndAttributes,
	    "setUniforms": setUniforms,
	    "setUniformBlock": setUniformBlock,
	    "setBlockUniforms": setBlockUniforms,
	    "bindUniformBlock": bindUniformBlock
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (textures, utils) {
	  "use strict";

	  /**
	   * Framebuffer related functions
	   *
	   * For backward compatibily they are available at both `twgl.framebuffer` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/framebuffers
	   */

	  // make sure we don't see a global gl

	  var gl = undefined; // eslint-disable-line

	  var UNSIGNED_BYTE = 0x1401;

	  /* PixelFormat */
	  var DEPTH_COMPONENT = 0x1902;
	  var RGBA = 0x1908;

	  /* Framebuffer Object. */
	  var RGBA4 = 0x8056;
	  var RGB5_A1 = 0x8057;
	  var RGB565 = 0x8D62;
	  var DEPTH_COMPONENT16 = 0x81A5;
	  var STENCIL_INDEX = 0x1901;
	  var STENCIL_INDEX8 = 0x8D48;
	  var DEPTH_STENCIL = 0x84F9;
	  var COLOR_ATTACHMENT0 = 0x8CE0;
	  var DEPTH_ATTACHMENT = 0x8D00;
	  var STENCIL_ATTACHMENT = 0x8D20;
	  var DEPTH_STENCIL_ATTACHMENT = 0x821A;

	  /* TextureWrapMode */
	  var REPEAT = 0x2901; // eslint-disable-line
	  var CLAMP_TO_EDGE = 0x812F;
	  var MIRRORED_REPEAT = 0x8370; // eslint-disable-line

	  /* TextureMagFilter */
	  var NEAREST = 0x2600; // eslint-disable-line
	  var LINEAR = 0x2601;

	  /* TextureMinFilter */
	  var NEAREST_MIPMAP_NEAREST = 0x2700; // eslint-disable-line
	  var LINEAR_MIPMAP_NEAREST = 0x2701; // eslint-disable-line
	  var NEAREST_MIPMAP_LINEAR = 0x2702; // eslint-disable-line
	  var LINEAR_MIPMAP_LINEAR = 0x2703; // eslint-disable-line

	  /**
	   * The options for a framebuffer attachment.
	   *
	   * Note: For a `format` that is a texture include all the texture
	   * options from {@link module:twgl.TextureOptions} for example
	   * `min`, `mag`, `clamp`, etc... Note that unlike {@link module:twgl.TextureOptions}
	   * `auto` defaults to `false` for attachment textures but `min` and `mag` default
	   * to `gl.LINEAR` and `wrap` defaults to `CLAMP_TO_EDGE`
	   *
	   * @typedef {Object} AttachmentOptions
	   * @property {number} [attach] The attachment point. Defaults
	   *   to `gl.COLOR_ATTACTMENT0 + ndx` unless type is a depth or stencil type
	   *   then it's gl.DEPTH_ATTACHMENT or `gl.DEPTH_STENCIL_ATTACHMENT` depending
	   *   on the format or attachment type.
	   * @property {number} [format] The format. If one of `gl.RGBA4`,
	   *   `gl.RGB565`, `gl.RGB5_A1`, `gl.DEPTH_COMPONENT16`,
	   *   `gl.STENCIL_INDEX8` or `gl.DEPTH_STENCIL` then will create a
	   *   renderbuffer. Otherwise will create a texture. Default = `gl.RGBA`
	   * @property {number} [type] The type. Used for texture. Default = `gl.UNSIGNED_BYTE`.
	   * @property {number} [target] The texture target for `gl.framebufferTexture2D`.
	   *   Defaults to `gl.TEXTURE_2D`. Set to appropriate face for cube maps.
	   * @property {number} [level] level for `gl.framebufferTexture2D`. Defaults to 0.
	   * @property {WebGLObject} [attachment] An existing renderbuffer or texture.
	   *    If provided will attach this Object. This allows you to share
	   *    attachemnts across framebuffers.
	   * @memberOf module:twgl
	   */

	  var defaultAttachments = [{ format: RGBA, type: UNSIGNED_BYTE, min: LINEAR, wrap: CLAMP_TO_EDGE }, { format: DEPTH_STENCIL }];

	  var attachmentsByFormat = {};
	  attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
	  attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
	  attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
	  attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
	  attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;

	  function getAttachmentPointForFormat(format) {
	    return attachmentsByFormat[format];
	  }

	  var renderbufferFormats = {};
	  renderbufferFormats[RGBA4] = true;
	  renderbufferFormats[RGB5_A1] = true;
	  renderbufferFormats[RGB565] = true;
	  renderbufferFormats[DEPTH_STENCIL] = true;
	  renderbufferFormats[DEPTH_COMPONENT16] = true;
	  renderbufferFormats[STENCIL_INDEX] = true;
	  renderbufferFormats[STENCIL_INDEX8] = true;

	  function isRenderbufferFormat(format) {
	    return renderbufferFormats[format];
	  }

	  /**
	   * @typedef {Object} FramebufferInfo
	   * @property {WebGLFramebuffer} framebuffer The WebGLFramebuffer for this framebufferInfo
	   * @property {WebGLObject[]} attachments The created attachments in the same order as passed in to {@link module:twgl.createFramebufferInfo}.
	   * @memberOf module:twgl
	   */

	  /**
	   * Creates a framebuffer and attachments.
	   *
	   * This returns a {@link module:twgl.FramebufferInfo} because it needs to return the attachments as well as the framebuffer.
	   *
	   * The simplest usage
	   *
	   *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
	   *     var fbi = twgl.createFramebufferInfo(gl);
	   *
	   * More complex usage
	   *
	   *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
	   *     var attachments = [
	   *       { format: RGB565, mag: NEAREST },
	   *       { format: STENCIL_INDEX8 },
	   *     ]
	   *     var fbi = twgl.createFramebufferInfo(gl, attachments);
	   *
	   * Passing in a specific size
	   *
	   *     var width = 256;
	   *     var height = 256;
	   *     var fbi = twgl.createFramebufferInfo(gl, attachments, width, height);
	   *
	   * **Note!!** It is up to you to check if the framebuffer is renderable by calling `gl.checkFramebufferStatus`.
	   * [WebGL only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.AttachmentOptions[]} [attachments] which attachments to create. If not provided the default is a framebuffer with an
	   *    `RGBA`, `UNSIGNED_BYTE` texture `COLOR_ATTACHMENT0` and a `DEPTH_STENCIL` renderbuffer `DEPTH_STENCIL_ATTACHMENT`.
	   * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
	   * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
	   * @return {module:twgl.FramebufferInfo} the framebuffer and attachments.
	   * @memberOf module:twgl/framebuffers
	   */
	  function createFramebufferInfo(gl, attachments, width, height) {
	    var target = gl.FRAMEBUFFER;
	    var fb = gl.createFramebuffer();
	    gl.bindFramebuffer(target, fb);
	    width = width || gl.drawingBufferWidth;
	    height = height || gl.drawingBufferHeight;
	    attachments = attachments || defaultAttachments;
	    var colorAttachmentCount = 0;
	    var framebufferInfo = {
	      framebuffer: fb,
	      attachments: [],
	      width: width,
	      height: height
	    };
	    attachments.forEach(function (attachmentOptions) {
	      var attachment = attachmentOptions.attachment;
	      var format = attachmentOptions.format;
	      var attachmentPoint = getAttachmentPointForFormat(format);
	      if (!attachmentPoint) {
	        attachmentPoint = COLOR_ATTACHMENT0 + colorAttachmentCount++;
	      }
	      if (!attachment) {
	        if (isRenderbufferFormat(format)) {
	          attachment = gl.createRenderbuffer();
	          gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
	          gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
	        } else {
	          var textureOptions = utils.shallowCopy(attachmentOptions);
	          textureOptions.width = width;
	          textureOptions.height = height;
	          if (textureOptions.auto === undefined) {
	            textureOptions.auto = false;
	            textureOptions.min = textureOptions.min || gl.LINEAR;
	            textureOptions.mag = textureOptions.mag || gl.LINEAR;
	            textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || gl.CLAMP_TO_EDGE;
	            textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || gl.CLAMP_TO_EDGE;
	          }
	          attachment = textures.createTexture(gl, textureOptions);
	        }
	      }
	      if (attachment instanceof WebGLRenderbuffer) {
	        gl.framebufferRenderbuffer(target, attachmentPoint, gl.RENDERBUFFER, attachment);
	      } else if (attachment instanceof WebGLTexture) {
	        gl.framebufferTexture2D(target, attachmentPoint, attachmentOptions.texTarget || gl.TEXTURE_2D, attachment, attachmentOptions.level || 0);
	      } else {
	        throw "unknown attachment type";
	      }
	      framebufferInfo.attachments.push(attachment);
	    });
	    return framebufferInfo;
	  }

	  /**
	   * Resizes the attachments of a framebuffer.
	   *
	   * You need to pass in the same `attachments` as you passed in {@link module:twgl.createFramebufferInfo}
	   * because TWGL has no idea the format/type of each attachment.
	   *
	   * The simplest usage
	   *
	   *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
	   *     var fbi = twgl.createFramebufferInfo(gl);
	   *
	   *     ...
	   *
	   *     function render() {
	   *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
	   *         // resize the attachments
	   *         twgl.resizeFramebufferInfo(gl, fbi);
	   *       }
	   *
	   * More complex usage
	   *
	   *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
	   *     var attachments = [
	   *       { format: RGB565, mag: NEAREST },
	   *       { format: STENCIL_INDEX8 },
	   *     ]
	   *     var fbi = twgl.createFramebufferInfo(gl, attachments);
	   *
	   *     ...
	   *
	   *     function render() {
	   *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
	   *         // resize the attachments to match
	   *         twgl.resizeFramebufferInfo(gl, fbi, attachments);
	   *       }
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.FramebufferInfo} framebufferInfo a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
	   * @param {module:twgl.AttachmentOptions[]} [attachments] the same attachments options as passed to {@link module:twgl.createFramebufferInfo}.
	   * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
	   * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
	   * @memberOf module:twgl/framebuffers
	   */
	  function resizeFramebufferInfo(gl, framebufferInfo, attachments, width, height) {
	    width = width || gl.drawingBufferWidth;
	    height = height || gl.drawingBufferHeight;
	    framebufferInfo.width = width;
	    framebufferInfo.height = height;
	    attachments = attachments || defaultAttachments;
	    attachments.forEach(function (attachmentOptions, ndx) {
	      var attachment = framebufferInfo.attachments[ndx];
	      var format = attachmentOptions.format;
	      if (attachment instanceof WebGLRenderbuffer) {
	        gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
	        gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
	      } else if (attachment instanceof WebGLTexture) {
	        textures.resizeTexture(gl, attachment, attachmentOptions, width, height);
	      } else {
	        throw "unknown attachment type";
	      }
	    });
	  }

	  /**
	   * Binds a framebuffer
	   *
	   * This function pretty much soley exists because I spent hours
	   * trying to figure out why something I wrote wasn't working only
	   * to realize I forget to set the viewport dimensions.
	   * My hope is this function will fix that.
	   *
	   * It is effectively the same as
	   *
	   *     gl.bindFramebuffer(gl.FRAMEBUFFER, someFramebufferInfo.framebuffer);
	   *     gl.viewport(0, 0, someFramebufferInfo.width, someFramebufferInfo.height);
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.FramebufferInfo} [framebufferInfo] a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
	   *   If not passed will bind the canvas.
	   * @param {number} [target] The target. If not passed `gl.FRAMEBUFFER` will be used.
	   * @memberOf module:twgl/framebuffers
	   */

	  function bindFramebufferInfo(gl, framebufferInfo, target) {
	    target = target || gl.FRAMEBUFFER;
	    if (framebufferInfo) {
	      gl.bindFramebuffer(target, framebufferInfo.framebuffer);
	      gl.viewport(0, 0, framebufferInfo.width, framebufferInfo.height);
	    } else {
	      gl.bindFramebuffer(target, null);
	      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	    }
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "bindFramebufferInfo": bindFramebufferInfo,
	    "createFramebufferInfo": createFramebufferInfo,
	    "resizeFramebufferInfo": resizeFramebufferInfo
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (typedArrays, utils) {
	  "use strict";

	  /**
	   * Low level texture related functions
	   *
	   * You should generally not need to use these functions. They are provided
	   * for those cases where you're doing something out of the ordinary
	   * and you need lower level access.
	   *
	   * For backward compatibily they are available at both `twgl.textures` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/textures
	   */

	  // make sure we don't see a global gl

	  var gl = undefined; // eslint-disable-line
	  var defaults = {
	    textureColor: new Uint8Array([128, 192, 255, 255]),
	    textureOptions: {},
	    crossOrigin: undefined
	  };
	  var isArrayBuffer = typedArrays.isArrayBuffer;

	  // Should we make this on demand?
	  var ctx = document.createElement("canvas").getContext("2d");

	  /* PixelFormat */
	  var ALPHA = 0x1906;
	  var RGB = 0x1907;
	  var RGBA = 0x1908;
	  var LUMINANCE = 0x1909;
	  var LUMINANCE_ALPHA = 0x190A;
	  var DEPTH_COMPONENT = 0x1902;
	  var DEPTH_STENCIL = 0x84F9;

	  /* TextureWrapMode */
	  var REPEAT = 0x2901; // eslint-disable-line
	  var MIRRORED_REPEAT = 0x8370; // eslint-disable-line

	  /* TextureMagFilter */
	  var NEAREST = 0x2600; // eslint-disable-line

	  /* TextureMinFilter */
	  var NEAREST_MIPMAP_NEAREST = 0x2700; // eslint-disable-line
	  var LINEAR_MIPMAP_NEAREST = 0x2701; // eslint-disable-line
	  var NEAREST_MIPMAP_LINEAR = 0x2702; // eslint-disable-line
	  var LINEAR_MIPMAP_LINEAR = 0x2703; // eslint-disable-line

	  var R8 = 0x8229;
	  var R8_SNORM = 0x8F94;
	  var R16F = 0x822D;
	  var R32F = 0x822E;
	  var R8UI = 0x8232;
	  var R8I = 0x8231;
	  var RG16UI = 0x823A;
	  var RG16I = 0x8239;
	  var RG32UI = 0x823C;
	  var RG32I = 0x823B;
	  var RG8 = 0x822B;
	  var RG8_SNORM = 0x8F95;
	  var RG16F = 0x822F;
	  var RG32F = 0x8230;
	  var RG8UI = 0x8238;
	  var RG8I = 0x8237;
	  var R16UI = 0x8234;
	  var R16I = 0x8233;
	  var R32UI = 0x8236;
	  var R32I = 0x8235;
	  var RGB8 = 0x8051;
	  var SRGB8 = 0x8C41;
	  var RGB565 = 0x8D62;
	  var RGB8_SNORM = 0x8F96;
	  var R11F_G11F_B10F = 0x8C3A;
	  var RGB9_E5 = 0x8C3D;
	  var RGB16F = 0x881B;
	  var RGB32F = 0x8815;
	  var RGB8UI = 0x8D7D;
	  var RGB8I = 0x8D8F;
	  var RGB16UI = 0x8D77;
	  var RGB16I = 0x8D89;
	  var RGB32UI = 0x8D71;
	  var RGB32I = 0x8D83;
	  var RGBA8 = 0x8058;
	  var SRGB8_ALPHA8 = 0x8C43;
	  var RGBA8_SNORM = 0x8F97;
	  var RGB5_A1 = 0x8057;
	  var RGBA4 = 0x8056;
	  var RGB10_A2 = 0x8059;
	  var RGBA16F = 0x881A;
	  var RGBA32F = 0x8814;
	  var RGBA8UI = 0x8D7C;
	  var RGBA8I = 0x8D8E;
	  var RGB10_A2UI = 0x906F;
	  var RGBA16UI = 0x8D76;
	  var RGBA16I = 0x8D88;
	  var RGBA32I = 0x8D82;
	  var RGBA32UI = 0x8D70;

	  var DEPTH_COMPONENT16 = 0x81A5;
	  var DEPTH_COMPONENT24 = 0x81A6;
	  var DEPTH_COMPONENT32F = 0x8CAC;
	  var DEPTH32F_STENCIL8 = 0x8CAD;
	  var DEPTH24_STENCIL8 = 0x88F0;

	  /* DataType */
	  var BYTE = 0x1400;
	  var UNSIGNED_BYTE = 0x1401;
	  var SHORT = 0x1402;
	  var UNSIGNED_SHORT = 0x1403;
	  var INT = 0x1404;
	  var UNSIGNED_INT = 0x1405;
	  var FLOAT = 0x1406;
	  var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
	  var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
	  var UNSIGNED_SHORT_5_6_5 = 0x8363;
	  var HALF_FLOAT = 0x140B;
	  var HALF_FLOAT_OES = 0x8D61; // Thanks Khronos for making this different >:(
	  var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
	  var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
	  var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
	  var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
	  var UNSIGNED_INT_24_8 = 0x84FA;

	  var RG = 0x8227;
	  var RG_INTEGER = 0x8228;
	  var RED = 0x1903;
	  var RED_INTEGER = 0x8D94;
	  var RGB_INTEGER = 0x8D98;
	  var RGBA_INTEGER = 0x8D99;

	  var formatInfo = {};
	  {
	    // NOTE: this is named `numColorComponents` vs `numComponents` so we can let Uglify mangle
	    // the name.
	    var f = formatInfo;
	    f[ALPHA] = { numColorComponents: 1 };
	    f[LUMINANCE] = { numColorComponents: 1 };
	    f[LUMINANCE_ALPHA] = { numColorComponents: 2 };
	    f[RGB] = { numColorComponents: 3 };
	    f[RGBA] = { numColorComponents: 4 };
	    f[RED] = { numColorComponents: 1 };
	    f[RED_INTEGER] = { numColorComponents: 1 };
	    f[RG] = { numColorComponents: 2 };
	    f[RG_INTEGER] = { numColorComponents: 2 };
	    f[RGB] = { numColorComponents: 3 };
	    f[RGB_INTEGER] = { numColorComponents: 3 };
	    f[RGBA] = { numColorComponents: 4 };
	    f[RGBA_INTEGER] = { numColorComponents: 4 };
	    f[DEPTH_COMPONENT] = { numColorComponents: 1 };
	    f[DEPTH_STENCIL] = { numColorComponents: 2 };
	  }

	  var textureInternalFormatInfo = {};
	  {
	    (function () {
	      // NOTE: these properties need unique names so we can let Uglify mangle the name.
	      var t = textureInternalFormatInfo;
	      // unsized formats
	      t[ALPHA] = { textureFormat: ALPHA, colorRenderable: true, textureFilterable: true, bytesPerElement: [1, 2, 2, 4], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT] };
	      t[LUMINANCE] = { textureFormat: LUMINANCE, colorRenderable: true, textureFilterable: true, bytesPerElement: [1, 2, 2, 4], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT] };
	      t[LUMINANCE_ALPHA] = { textureFormat: LUMINANCE_ALPHA, colorRenderable: true, textureFilterable: true, bytesPerElement: [2, 4, 4, 8], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT] };
	      t[RGB] = { textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: [3, 6, 6, 12, 2], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_5_6_5] };
	      t[RGBA] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: [4, 8, 8, 16, 2, 2], type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1] };

	      // sized formats
	      t[R8] = { textureFormat: RED, colorRenderable: true, textureFilterable: true, bytesPerElement: 1, type: UNSIGNED_BYTE };
	      t[R8_SNORM] = { textureFormat: RED, colorRenderable: false, textureFilterable: true, bytesPerElement: 1, type: BYTE };
	      t[R16F] = { textureFormat: RED, colorRenderable: false, textureFilterable: true, bytesPerElement: [4, 2], type: [FLOAT, HALF_FLOAT] };
	      t[R32F] = { textureFormat: RED, colorRenderable: false, textureFilterable: false, bytesPerElement: 4, type: FLOAT };
	      t[R8UI] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 1, type: UNSIGNED_BYTE };
	      t[R8I] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 1, type: BYTE };
	      t[R16UI] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: UNSIGNED_SHORT };
	      t[R16I] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: SHORT };
	      t[R32UI] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT };
	      t[R32I] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: INT };
	      t[RG8] = { textureFormat: RG, colorRenderable: true, textureFilterable: true, bytesPerElement: 2, type: UNSIGNED_BYTE };
	      t[RG8_SNORM] = { textureFormat: RG, colorRenderable: false, textureFilterable: true, bytesPerElement: 2, type: BYTE };
	      t[RG16F] = { textureFormat: RG, colorRenderable: false, textureFilterable: true, bytesPerElement: [8, 4], type: [FLOAT, HALF_FLOAT] };
	      t[RG32F] = { textureFormat: RG, colorRenderable: false, textureFilterable: false, bytesPerElement: 8, type: FLOAT };
	      t[RG8UI] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: UNSIGNED_BYTE };
	      t[RG8I] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 2, type: BYTE };
	      t[RG16UI] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_SHORT };
	      t[RG16I] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: SHORT };
	      t[RG32UI] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: UNSIGNED_INT };
	      t[RG32I] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: INT };
	      t[RGB8] = { textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: 3, type: UNSIGNED_BYTE };
	      t[SRGB8] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: 3, type: UNSIGNED_BYTE };
	      t[RGB565] = { textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: [3, 2], type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5] };
	      t[RGB8_SNORM] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: 3, type: BYTE };
	      t[R11F_G11F_B10F] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [12, 6, 4], type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_10F_11F_11F_REV] };
	      t[RGB9_E5] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [12, 6, 4], type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_5_9_9_9_REV] };
	      t[RGB16F] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [12, 6], type: [FLOAT, HALF_FLOAT] };
	      t[RGB32F] = { textureFormat: RGB, colorRenderable: false, textureFilterable: false, bytesPerElement: 12, type: FLOAT };
	      t[RGB8UI] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 3, type: UNSIGNED_BYTE };
	      t[RGB8I] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 3, type: BYTE };
	      t[RGB16UI] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 6, type: UNSIGNED_SHORT };
	      t[RGB16I] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 6, type: SHORT };
	      t[RGB32UI] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 12, type: UNSIGNED_INT };
	      t[RGB32I] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: 12, type: INT };
	      t[RGBA8] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: 4, type: UNSIGNED_BYTE };
	      t[SRGB8_ALPHA8] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: 4, type: UNSIGNED_BYTE };
	      t[RGBA8_SNORM] = { textureFormat: RGBA, colorRenderable: false, textureFilterable: true, bytesPerElement: 4, type: BYTE };
	      t[RGB5_A1] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: [4, 2, 4], type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_5_5_1, UNSIGNED_INT_2_10_10_10_REV] };
	      t[RGBA4] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: [4, 2], type: [UNSIGNED_BYTE, UNSIGNED_SHORT_4_4_4_4] };
	      t[RGB10_A2] = { textureFormat: RGBA, colorRenderable: true, textureFilterable: true, bytesPerElement: 4, type: UNSIGNED_INT_2_10_10_10_REV };
	      t[RGBA16F] = { textureFormat: RGBA, colorRenderable: false, textureFilterable: true, bytesPerElement: [16, 8], type: [FLOAT, HALF_FLOAT] };
	      t[RGBA32F] = { textureFormat: RGBA, colorRenderable: false, textureFilterable: false, bytesPerElement: 16, type: FLOAT };
	      t[RGBA8UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_BYTE };
	      t[RGBA8I] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: BYTE };
	      t[RGB10_A2UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT_2_10_10_10_REV };
	      t[RGBA16UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: UNSIGNED_SHORT };
	      t[RGBA16I] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 8, type: SHORT };
	      t[RGBA32I] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 16, type: INT };
	      t[RGBA32UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: 16, type: UNSIGNED_INT };
	      // Sized Internal
	      t[DEPTH_COMPONENT16] = { textureFormat: DEPTH_COMPONENT, colorRenderable: true, textureFilterable: false, bytesPerElement: [2, 4], type: [UNSIGNED_SHORT, UNSIGNED_INT] };
	      t[DEPTH_COMPONENT24] = { textureFormat: DEPTH_COMPONENT, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT };
	      t[DEPTH_COMPONENT32F] = { textureFormat: DEPTH_COMPONENT, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: FLOAT };
	      t[DEPTH24_STENCIL8] = { textureFormat: DEPTH_STENCIL, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: UNSIGNED_INT_24_8 };
	      t[DEPTH32F_STENCIL8] = { textureFormat: DEPTH_STENCIL, colorRenderable: true, textureFilterable: false, bytesPerElement: 4, type: FLOAT_32_UNSIGNED_INT_24_8_REV };

	      Object.keys(t).forEach(function (internalFormat) {
	        var info = t[internalFormat];
	        info.bytesPerElementMap = {};
	        if (Array.isArray(info.bytesPerElement)) {
	          info.bytesPerElement.forEach(function (bytesPerElement, ndx) {
	            var type = info.type[ndx];
	            info.bytesPerElementMap[type] = bytesPerElement;
	          });
	        } else {
	          var type = info.type;
	          info.bytesPerElementMap[type] = info.bytesPerElement;
	        }
	      });
	    })();
	  }

	  /**
	   * Gets the number of bytes per element for a given internalFormat / type
	   * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
	   * @param {number} type The type parameter for texImage2D etc..
	   * @return {number} the number of bytes per element for the given internalFormat, type combo
	   * @memberOf module:twgl/textures
	   */
	  function getBytesPerElementForInternalFormat(internalFormat, type) {
	    var info = textureInternalFormatInfo[internalFormat];
	    if (!info) {
	      throw "unknown internal format";
	    }
	    var bytesPerElement = info.bytesPerElementMap[type];
	    if (bytesPerElement === undefined) {
	      throw "unknown internal format";
	    }
	    return bytesPerElement;
	  }

	  /**
	   * Gets the format for a given internalFormat
	   *
	   * @param {number} internalFormat The internal format
	   * @return {{format:number, type:number}} the corresponding format and type
	   */
	  function getFormatAndTypeForInternalFormat(internalFormat) {
	    var info = textureInternalFormatInfo[internalFormat];
	    if (!info) {
	      throw "unknown internal format";
	    }
	    return {
	      format: info.textureFormat,
	      type: Array.isArray(info.type) ? info.type[0] : info.type
	    };
	  }

	  /**
	   * Returns true if value is power of 2
	   * @param {number} value number to check.
	   * @return true if value is power of 2
	   */
	  function isPowerOf2(value) {
	    return (value & value - 1) === 0;
	  }

	  /**
	   * Gets whether or not we can generate mips for the given format
	   * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
	   * @param {number} type The type parameter for texImage2D etc..
	   * @return {boolean} true if we can generate mips
	   */
	  function canGenerateMipmap(gl, width, height, internalFormat /*, type */) {
	    if (!utils.isWebGL2(gl)) {
	      return isPowerOf2(width) && isPowerOf2(height);
	    }
	    var info = textureInternalFormatInfo[internalFormat];
	    if (!info) {
	      throw "unknown internal format";
	    }
	    return info.colorRenderable && info.textureFilterable;
	  }

	  /**
	   * Gets whether or not we can generate mips for the given format
	   * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
	   * @param {number} type The type parameter for texImage2D etc..
	   * @return {boolean} true if we can generate mips
	   */
	  function canFilter(internalFormat /*, type */) {
	    var info = textureInternalFormatInfo[internalFormat];
	    if (!info) {
	      throw "unknown internal format";
	    }
	    return info.textureFilterable;
	  }

	  /**
	   * Gets the number of compontents for a given image format.
	   * @param {number} format the format.
	   * @return {number} the number of components for the format.
	   * @memberOf module:twgl/textures
	   */
	  function getNumComponentsForFormat(format) {
	    var info = formatInfo[format];
	    if (!info) {
	      throw "unknown format: " + format;
	    }
	    return info.numColorComponents;
	  }

	  /**
	   * Gets the texture type for a given array type.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @return {number} the gl texture type
	   */
	  function getTextureTypeForArrayType(gl, src, defaultType) {
	    if (isArrayBuffer(src)) {
	      return typedArrays.getGLTypeForTypedArray(src);
	    }
	    return defaultType || gl.UNSIGNED_BYTE;
	  }

	  function guessDimensions(gl, target, width, height, numElements) {
	    if (numElements % 1 !== 0) {
	      throw "can't guess dimensions";
	    }
	    if (!width && !height) {
	      var size = Math.sqrt(numElements / (target === gl.TEXTURE_CUBE_MAP ? 6 : 1));
	      if (size % 1 === 0) {
	        width = size;
	        height = size;
	      } else {
	        width = numElements;
	        height = 1;
	      }
	    } else if (!height) {
	      height = numElements / width;
	      if (height % 1) {
	        throw "can't guess dimensions";
	      }
	    } else if (!width) {
	      width = numElements / height;
	      if (width % 1) {
	        throw "can't guess dimensions";
	      }
	    }
	    return {
	      width: width,
	      height: height
	    };
	  }

	  /**
	   * Sets the default texture color.
	   *
	   * The default texture color is used when loading textures from
	   * urls. Because the URL will be loaded async we'd like to be
	   * able to use the texture immediately. By putting a 1x1 pixel
	   * color in the texture we can start using the texture before
	   * the URL has loaded.
	   *
	   * @param {number[]} color Array of 4 values in the range 0 to 1
	   * @deprecated see {@link module:twgl.setDefaults}
	   * @memberOf module:twgl/textures
	   */
	  function setDefaultTextureColor(color) {
	    defaults.textureColor = new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
	  }

	  function setDefaults(newDefaults) {
	    utils.copyExistingProperties(newDefaults, defaults);
	    if (newDefaults.textureColor) {
	      setDefaultTextureColor(newDefaults.textureColor);
	    }
	  }

	  /**
	   * Gets a string for gl enum
	   *
	   * Note: Several enums are the same. Without more
	   * context (which function) it's impossible to always
	   * give the correct enum.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {number} value the value of the enum you want to look up.
	   */
	  var glEnumToString = function () {
	    var enums;

	    function init(gl) {
	      if (!enums) {
	        enums = {};
	        for (var key in gl) {
	          if (typeof gl[key] === 'number') {
	            enums[gl[key]] = key;
	          }
	        }
	      }
	    }

	    return function glEnumToString(gl, value) {
	      init(gl);
	      return enums[value] || "0x" + value.toString(16);
	    };
	  }();

	  /**
	   * A function to generate the source for a texture.
	   * @callback TextureFunc
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {module:twgl.TextureOptions} options the texture options
	   * @return {*} Returns any of the things documentented for `src` for {@link module:twgl.TextureOptions}.
	   * @memberOf module:twgl
	   */

	  /**
	   * Texture options passed to most texture functions. Each function will use whatever options
	   * are appropriate for its needs. This lets you pass the same options to all functions.
	   *
	   * @typedef {Object} TextureOptions
	   * @property {number} [target] the type of texture `gl.TEXTURE_2D` or `gl.TEXTURE_CUBE_MAP`. Defaults to `gl.TEXTURE_2D`.
	   * @property {number} [width] the width of the texture. Only used if src is an array or typed array or null.
	   * @property {number} [height] the height of a texture. Only used if src is an array or typed array or null.
	   * @property {number} [depth] the depth of a texture. Only used if src is an array or type array or null and target is `TEXTURE_3D` .
	   * @property {number} [min] the min filter setting (eg. `gl.LINEAR`). Defaults to `gl.NEAREST_MIPMAP_LINEAR`
	   *     or if texture is not a power of 2 on both dimensions then defaults to `gl.LINEAR`.
	   * @property {number} [mag] the mag filter setting (eg. `gl.LINEAR`). Defaults to `gl.LINEAR`
	   * @property {number} [minMag] both the min and mag filter settings.
	   * @property {number} [internalFormat] internal format for texture. Defaults to `gl.RGBA`
	   * @property {number} [format] format for texture. Defaults to `gl.RGBA`.
	   * @property {number} [type] type for texture. Defaults to `gl.UNSIGNED_BYTE` unless `src` is ArrayBuffer. If `src`
	   *     is ArrayBuffer defaults to type that matches ArrayBuffer type.
	   * @property {number} [wrap] Texture wrapping for both S and T (and R if TEXTURE_3D or WebGLSampler). Defaults to `gl.REPEAT` for 2D unless src is WebGL1 and src not npot and `gl.CLAMP_TO_EDGE` for cube
	   * @property {number} [wrapS] Texture wrapping for S. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
	   * @property {number} [wrapT] Texture wrapping for T. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
	   * @property {number} [wrapR] Texture wrapping for R. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
	   * @property {number} [minLod] TEXTURE_MIN_LOD setting
	   * @property {number} [maxLod] TEXTURE_MAX_LOD setting
	   * @property {number} [baseLevel] TEXTURE_BASE_LEVEL setting
	   * @property {number} [maxLevel] TEXTURE_MAX_LEVEL setting
	   * @property {number} [unpackAlignment] The `gl.UNPACK_ALIGNMENT` used when uploading an array. Defaults to 1.
	   * @property {number} [premultiplyAlpha] Whether or not to premultiply alpha. Defaults to whatever the current setting is.
	   *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
	   *     the current setting for specific textures.
	   * @property {number} [flipY] Whether or not to flip the texture vertically on upload. Defaults to whatever the current setting is.
	   *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
	   *     the current setting for specific textures.
	   * @property {number} [colorspaceConversion] Whether or not to let the browser do colorspace conversion of the texture on upload. Defaults to whatever the current setting is.
	   *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
	   *     the current setting for specific textures.
	   * @property {(number[]|ArrayBuffer)} color color used as temporary 1x1 pixel color for textures loaded async when src is a string.
	   *    If it's a JavaScript array assumes color is 0 to 1 like most GL colors as in `[1, 0, 0, 1] = red=1, green=0, blue=0, alpha=0`.
	   *    Defaults to `[0.5, 0.75, 1, 1]`. See {@link module:twgl.setDefaultTextureColor}. If `false` texture is set. Can be used to re-load a texture
	   * @property {boolean} [auto] If not `false` then texture working filtering is set automatically for non-power of 2 images and
	   *    mips are generated for power of 2 images.
	   * @property {number[]} [cubeFaceOrder] The order that cube faces are pulled out of an img or set of images. The default is
	   *
	   *     [gl.TEXTURE_CUBE_MAP_POSITIVE_X,
	   *      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
	   *      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
	   *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
	   *      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
	   *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]
	   *
	   * @property {(number[]|ArrayBuffer|HTMLCanvasElement|HTMLImageElement|HTMLVideoElement|string|string[]|module:twgl.TextureFunc)} [src] source for texture
	   *
	   *    If `string` then it's assumed to be a URL to an image. The image will be downloaded async. A usable
	   *    1x1 pixel texture will be returned immediatley. The texture will be updated once the image has downloaded.
	   *    If `target` is `gl.TEXTURE_CUBE_MAP` will attempt to divide image into 6 square pieces. 1x6, 6x1, 3x2, 2x3.
	   *    The pieces will be uploaded in `cubeFaceOrder`
	   *
	   *    If `string[]` then it must have 6 entries, one for each face of a cube map. Target must be `gl.TEXTURE_CUBE_MAP`.
	   *
	   *    If `HTMLElement` then it wil be used immediately to create the contents of the texture. Examples `HTMLImageElement`,
	   *    `HTMLCanvasElement`, `HTMLVideoElement`.
	   *
	   *    If `number[]` or `ArrayBuffer` it's assumed to be data for a texture. If `width` or `height` is
	   *    not specified it is guessed as follows. First the number of elements is computed by `src.length / numComponets`
	   *    where `numComponents` is derived from `format`. If `target` is `gl.TEXTURE_CUBE_MAP` then `numElements` is divided
	   *    by 6. Then
	   *
	   *    *   If neither `width` nor `height` are specified and `sqrt(numElements)` is an integer then width and height
	   *        are set to `sqrt(numElements)`. Otherwise `width = numElements` and `height = 1`.
	   *
	   *    *   If only one of `width` or `height` is specified then the other equals `numElements / specifiedDimension`.
	   *
	   * If `number[]` will be converted to `type`.
	   *
	   * If `src` is a function it will be called with a `WebGLRenderingContext` and these options.
	   * Whatever it returns is subject to these rules. So it can return a string url, an `HTMLElement`
	   * an array etc...
	   *
	   * If `src` is undefined then an empty texture will be created of size `width` by `height`.
	   *
	   * @property {string} [crossOrigin] What to set the crossOrigin property of images when they are downloaded.
	   *    default: undefined. Also see {@link module:twgl.setDefaults}.
	   *
	   * @memberOf module:twgl
	   */

	  // NOTE: While querying GL is considered slow it's not remotely as slow
	  // as uploading a texture. On top of that you're unlikely to call this in
	  // a perf critical loop. Even if upload a texture every frame that's unlikely
	  // to be more than 1 or 2 textures a frame. In other words, the benefits of
	  // making the API easy to use outweigh any supposed perf benefits
	  var lastPackState = {};

	  /**
	   * Saves any packing state that will be set based on the options.
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   */
	  function savePackState(gl, options) {
	    if (options.colorspaceConversion !== undefined) {
	      lastPackState.colorspaceConversion = gl.getParameter(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL);
	      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
	    }
	    if (options.premultiplyAlpha !== undefined) {
	      lastPackState.premultiplyAlpha = gl.getParameter(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
	      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
	    }
	    if (options.flipY !== undefined) {
	      lastPackState.flipY = gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL);
	      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, options.flipY);
	    }
	  }

	  /**
	   * Restores any packing state that was set based on the options.
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   */
	  function restorePackState(gl, options) {
	    if (options.colorspaceConversion !== undefined) {
	      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, lastPackState.colorspaceConversion);
	    }
	    if (options.premultiplyAlpha !== undefined) {
	      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, lastPackState.premultiplyAlpha);
	    }
	    if (options.flipY !== undefined) {
	      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, lastPackState.flipY);
	    }
	  }

	  var WebGLSamplerCtor = window.WebGLSampler || function NotWebGLSampler() {};

	  /**
	   * Sets the parameters of a texture or sampler
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {number|WebGLSampler} target texture target or sampler
	   * @param {function()} parameteriFn texParamteri or samplerParameteri fn
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   */
	  function setTextureSamplerParameters(gl, target, parameteriFn, options) {
	    if (options.minMag) {
	      parameteriFn.call(gl, target, gl.TEXTURE_MIN_FILTER, options.minMag);
	      parameteriFn.call(gl, target, gl.TEXTURE_MAG_FILTER, options.minMag);
	    }
	    if (options.min) {
	      parameteriFn.call(gl, target, gl.TEXTURE_MIN_FILTER, options.min);
	    }
	    if (options.mag) {
	      parameteriFn.call(gl, target, gl.TEXTURE_MAG_FILTER, options.mag);
	    }
	    if (options.wrap) {
	      parameteriFn.call(gl, target, gl.TEXTURE_WRAP_S, options.wrap);
	      parameteriFn.call(gl, target, gl.TEXTURE_WRAP_T, options.wrap);
	      if (target === gl.TEXTURE_3D || target instanceof WebGLSamplerCtor) {
	        parameteriFn.call(gl, target, gl.TEXTURE_WRAP_R, options.wrap);
	      }
	    }
	    if (options.wrapR) {
	      parameteriFn.call(gl, target, gl.TEXTURE_WRAP_R, options.wrapR);
	    }
	    if (options.wrapS) {
	      parameteriFn.call(gl, target, gl.TEXTURE_WRAP_S, options.wrapS);
	    }
	    if (options.wrapT) {
	      parameteriFn.call(gl, target, gl.TEXTURE_WRAP_T, options.wrapT);
	    }
	    if (options.minLod) {
	      parameteriFn.call(gl, target, gl.TEXTURE_MIN_LOD, options.minLod);
	    }
	    if (options.maxLod) {
	      parameteriFn.call(gl, target, gl.TEXTURE_MAX_LOD, options.maxLod);
	    }
	    if (options.baseLevel) {
	      parameteriFn.call(gl, target, gl.TEXTURE_BASE_LEVEL, options.baseLevel);
	    }
	    if (options.maxLevel) {
	      parameteriFn.call(gl, target, gl.TEXTURE_MAX_LEVEL, options.maxLevel);
	    }
	  }

	  /**
	   * Sets the texture parameters of a texture.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @memberOf module:twgl/textures
	   */
	  function setTextureParameters(gl, tex, options) {
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    setTextureSamplerParameters(gl, target, gl.texParameteri, options);
	  }

	  /**
	   * Sets the sampler parameters of a sampler.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLSampler} sampler the WebGLSampler to set parameters for
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @memberOf module:twgl/textures
	   */
	  function setSamplerParameters(gl, sampler, options) {
	    setTextureSamplerParameters(gl, sampler, gl.samplerParameteri, options);
	  }

	  /**
	   * Creates a new sampler object and sets parameters.
	   *
	   * Example:
	   *
	   *      const sampler = twgl.createSampler(gl, {
	   *        minMag: gl.NEAREST,         // sets both TEXTURE_MIN_FILTER and TEXTURE_MAG_FILTER
	   *        wrap: gl.CLAMP_TO_NEAREST,  // sets both TEXTURE_WRAP_S and TEXTURE_WRAP_T and TEXTURE_WRAP_R
	   *      });
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per sampler.
	   * @return {Object.<string,WebGLSampler>} the created samplers by name
	   */
	  function createSampler(gl, options) {
	    var sampler = gl.createSampler();
	    setSamplerParameters(gl, sampler, options);
	    return sampler;
	  }

	  /**
	   * Creates a multiple sampler objects and sets parameters on each.
	   *
	   * Example:
	   *
	   *      const samplers = twgl.createSamplers(gl, {
	   *        nearest: {
	   *          minMag: gl.NEAREST,
	   *        },
	   *        nearestClampS: {
	   *          minMag: gl.NEAREST,
	   *          wrapS: gl.CLAMP_TO_NEAREST,
	   *        },
	   *        linear: {
	   *          minMag: gl.LINEAR,
	   *        },
	   *        nearestClamp: {
	   *          minMag: gl.NEAREST,
	   *          wrap: gl.CLAMP_TO_EDGE,
	   *        },
	   *        linearClamp: {
	   *          minMag: gl.LINEAR,
	   *          wrap: gl.CLAMP_TO_EDGE,
	   *        },
	   *        linearClampT: {
	   *          minMag: gl.LINEAR,
	   *          wrapT: gl.CLAMP_TO_EDGE,
	   *        },
	   *      });
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set on the sampler
	   */
	  function createSamplers(gl, samplerOptions) {
	    var samplers = {};
	    Object.keys(samplerOptions).forEach(function (name) {
	      samplers[name] = createSampler(gl, samplerOptions[name]);
	    });
	    return samplers;
	  }

	  /**
	   * Makes a 1x1 pixel
	   * If no color is passed in uses the default color which can be set by calling `setDefaultTextureColor`.
	   * @param {(number[]|ArrayBuffer)} [color] The color using 0-1 values
	   * @return {Uint8Array} Unit8Array with color.
	   */
	  function make1Pixel(color) {
	    color = color || defaults.textureColor;
	    if (isArrayBuffer(color)) {
	      return color;
	    }
	    return new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
	  }

	  /**
	   * Sets filtering or generates mips for texture based on width or height
	   * If width or height is not passed in uses `options.width` and//or `options.height`
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @param {number} [width] width of texture
	   * @param {number} [height] height of texture
	   * @param {number} [internalFormat] The internalFormat parameter from texImage2D etc..
	   * @param {number} [type] The type parameter for texImage2D etc..
	   * @memberOf module:twgl/textures
	   */
	  function setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type) {
	    options = options || defaults.textureOptions;
	    internalFormat = internalFormat || gl.RGBA;
	    type = type || gl.UNSIGNED_BYTE;
	    var target = options.target || gl.TEXTURE_2D;
	    width = width || options.width;
	    height = height || options.height;
	    gl.bindTexture(target, tex);
	    if (canGenerateMipmap(gl, width, height, internalFormat, type)) {
	      gl.generateMipmap(target);
	    } else {
	      var filtering = canFilter(internalFormat, type) ? gl.LINEAR : gl.NEAREST;
	      gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, filtering);
	      gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, filtering);
	      gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	      gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	    }
	  }

	  /**
	   * Gets an array of cubemap face enums
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @return {number[]} cubemap face enums
	   */
	  function getCubeFaceOrder(gl, options) {
	    options = options || {};
	    return options.cubeFaceOrder || [gl.TEXTURE_CUBE_MAP_POSITIVE_X, gl.TEXTURE_CUBE_MAP_NEGATIVE_X, gl.TEXTURE_CUBE_MAP_POSITIVE_Y, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, gl.TEXTURE_CUBE_MAP_POSITIVE_Z, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];
	  }

	  /**
	   * @typedef {Object} FaceInfo
	   * @property {number} face gl enum for texImage2D
	   * @property {number} ndx face index (0 - 5) into source data
	   * @ignore
	   */

	  /**
	   * Gets an array of FaceInfos
	   * There's a bug in some NVidia drivers that will crash the driver if
	   * `gl.TEXTURE_CUBE_MAP_POSITIVE_X` is not uploaded first. So, we take
	   * the user's desired order from his faces to WebGL and make sure we
	   * do the faces in WebGL order
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @return {FaceInfo[]} cubemap face infos. Arguably the `face` property of each element is redundent but
	   *    it's needed internally to sort the array of `ndx` properties by `face`.
	   */
	  function getCubeFacesWithNdx(gl, options) {
	    var faces = getCubeFaceOrder(gl, options);
	    // work around bug in NVidia drivers. We have to upload the first face first else the driver crashes :(
	    var facesWithNdx = faces.map(function (face, ndx) {
	      return { face: face, ndx: ndx };
	    });
	    facesWithNdx.sort(function (a, b) {
	      return a.face - b.face;
	    });
	    return facesWithNdx;
	  }

	  /**
	   * Set a texture from the contents of an element. Will also set
	   * texture filtering or generate mips based on the dimensions of the element
	   * unless `options.auto === false`. If `target === gl.TEXTURE_CUBE_MAP` will
	   * attempt to slice image into 1x6, 2x3, 3x2, or 6x1 images, one for each face.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {HTMLElement} element a canvas, img, or video element.
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @memberOf module:twgl/textures
	   * @kind function
	   */
	  function setTextureFromElement(gl, tex, element, options) {
	    options = options || defaults.textureOptions;
	    var target = options.target || gl.TEXTURE_2D;
	    var width = element.width;
	    var height = element.height;
	    var internalFormat = options.internalFormat || options.format || gl.RGBA;
	    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
	    var format = options.format || formatType.format;
	    var type = options.type || formatType.type;
	    savePackState(gl, options);
	    gl.bindTexture(target, tex);
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      // guess the parts
	      var imgWidth = element.width;
	      var imgHeight = element.height;
	      var size;
	      var slices;
	      if (imgWidth / 6 === imgHeight) {
	        // It's 6x1
	        size = imgHeight;
	        slices = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
	      } else if (imgHeight / 6 === imgWidth) {
	        // It's 1x6
	        size = imgWidth;
	        slices = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
	      } else if (imgWidth / 3 === imgHeight / 2) {
	        // It's 3x2
	        size = imgWidth / 3;
	        slices = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
	      } else if (imgWidth / 2 === imgHeight / 3) {
	        // It's 2x3
	        size = imgWidth / 2;
	        slices = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2];
	      } else {
	        throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
	      }
	      ctx.canvas.width = size;
	      ctx.canvas.height = size;
	      width = size;
	      height = size;
	      getCubeFacesWithNdx(gl, options).forEach(function (f) {
	        var xOffset = slices[f.ndx * 2 + 0] * size;
	        var yOffset = slices[f.ndx * 2 + 1] * size;
	        ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
	        gl.texImage2D(f.face, 0, internalFormat, format, type, ctx.canvas);
	      });
	      // Free up the canvas memory
	      ctx.canvas.width = 1;
	      ctx.canvas.height = 1;
	    } else if (target === gl.TEXTURE_3D) {
	      var smallest = Math.min(element.width, element.height);
	      var largest = Math.max(element.width, element.height);
	      var depth = largest / smallest;
	      if (depth % 1 !== 0) {
	        throw "can not compute 3D dimensions of element";
	      }
	      var xMult = element.width === largest ? 1 : 0;
	      var yMult = element.height === largest ? 1 : 0;
	      gl.texImage3D(target, 0, internalFormat, smallest, smallest, smallest, 0, format, type, null);
	      // remove this is texSubImage3D gets width and height arguments
	      ctx.canvas.width = smallest;
	      ctx.canvas.height = smallest;
	      for (var d = 0; d < depth; ++d) {
	        //        gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, d * smallest);
	        //        gl.texSubImage3D(target, 0, 0, 0, d, format, type, element);
	        var srcX = d * smallest * xMult;
	        var srcY = d * smallest * yMult;
	        var srcW = smallest;
	        var srcH = smallest;
	        var dstX = 0;
	        var dstY = 0;
	        var dstW = smallest;
	        var dstH = smallest;
	        ctx.drawImage(element, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH);
	        gl.texSubImage3D(target, 0, 0, 0, d, smallest, smallest, 1, format, type, ctx.canvas);
	      }
	      ctx.canvas.width = 0;
	      ctx.canvas.height = 0;
	      // FIX (save state)
	      //      gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, 0);
	    } else {
	      gl.texImage2D(target, 0, internalFormat, format, type, element);
	    }
	    restorePackState(gl, options);
	    if (options.auto !== false) {
	      setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
	    }
	    setTextureParameters(gl, tex, options);
	  }

	  function noop() {}

	  /**
	   * Loads an image
	   * @param {string} url url to image
	   * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
	   *     if there was an error
	   * @return {HTMLImageElement} the image being loaded.
	   */
	  function loadImage(url, crossOrigin, callback) {
	    callback = callback || noop;
	    var img = new Image();
	    crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults.crossOrigin;
	    if (crossOrigin !== undefined) {
	      img.crossOrigin = crossOrigin;
	    }

	    function clearEventHandlers() {
	      img.removeEventListener('error', onError); // eslint-disable-line
	      img.removeEventListener('load', onLoad); // eslint-disable-line
	      img = null;
	    }

	    function onError() {
	      var msg = "couldn't load image: " + url;
	      utils.error(msg);
	      callback(msg, img);
	      clearEventHandlers();
	    }

	    function onLoad() {
	      callback(null, img);
	      clearEventHandlers();
	    }

	    img.addEventListener('error', onError);
	    img.addEventListener('load', onLoad);
	    img.src = url;
	    return img;
	  }

	  /**
	   * Sets a texture to a 1x1 pixel color. If `options.color === false` is nothing happens. If it's not set
	   * the default texture color is used which can be set by calling `setDefaultTextureColor`.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @memberOf module:twgl/textures
	   */
	  function setTextureTo1PixelColor(gl, tex, options) {
	    options = options || defaults.textureOptions;
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    if (options.color === false) {
	      return;
	    }
	    // Assume it's a URL
	    // Put 1x1 pixels in texture. That makes it renderable immediately regardless of filtering.
	    var color = make1Pixel(options.color);
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      for (var ii = 0; ii < 6; ++ii) {
	        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
	      }
	    } else if (target === gl.TEXTURE_3D || target === gl.TEXTURE_2D_ARRAY) {
	      gl.texImage3D(target, 0, gl.RGBA, 1, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
	    } else {
	      gl.texImage2D(target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
	    }
	  }

	  /**
	   * The src image(s) used to create a texture.
	   *
	   * When you call {@link module:twgl.createTexture} or {@link module:twgl.createTextures}
	   * you can pass in urls for images to load into the textures. If it's a single url
	   * then this will be a single HTMLImageElement. If it's an array of urls used for a cubemap
	   * this will be a corresponding array of images for the cubemap.
	   *
	   * @typedef {HTMLImageElement|HTMLImageElement[]} TextureSrc
	   * @memberOf module:twgl
	   */

	  /**
	   * A callback for when an image finished downloading and been uploaded into a texture
	   * @callback TextureReadyCallback
	   * @param {*} err If truthy there was an error.
	   * @param {WebGLTexture} texture the texture.
	   * @param {module:twgl.TextureSrc} souce image(s) used to as the src for the texture
	   * @memberOf module:twgl
	   */

	  /**
	   * A callback for when all images have finished downloading and been uploaded into their respective textures
	   * @callback TexturesReadyCallback
	   * @param {*} err If truthy there was an error.
	   * @param {Object.<string, WebGLTexture>} textures the created textures by name. Same as returned by {@link module:twgl.createTextures}.
	   * @param {Object.<string, module:twgl.TextureSrc>} sources the image(s) used for the texture by name.
	   * @memberOf module:twgl
	   */

	  /**
	   * A callback for when an image finished downloading and been uploaded into a texture
	   * @callback CubemapReadyCallback
	   * @param {*} err If truthy there was an error.
	   * @param {WebGLTexture} tex the texture.
	   * @param {HTMLImageElement[]} imgs the images for each face.
	   * @memberOf module:twgl
	   */

	  /**
	   * A callback for when an image finished downloading and been uploaded into a texture
	   * @callback ThreeDReadyCallback
	   * @param {*} err If truthy there was an error.
	   * @param {WebGLTexture} tex the texture.
	   * @param {HTMLImageElement[]} imgs the images for each slice.
	   * @memberOf module:twgl
	   */

	  /**
	   * Loads a texture from an image from a Url as specified in `options.src`
	   * If `options.color !== false` will set the texture to a 1x1 pixel color so that the texture is
	   * immediately useable. It will be updated with the contents of the image once the image has finished
	   * downloading. Filtering options will be set as approriate for image unless `options.auto === false`.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   * @param {module:twgl.TextureReadyCallback} [callback] A function to be called when the image has finished loading. err will
	   *    be non null if there was an error.
	   * @return {HTMLImageElement} the image being downloaded.
	   * @memberOf module:twgl/textures
	   */
	  function loadTextureFromUrl(gl, tex, options, callback) {
	    callback = callback || noop;
	    options = options || defaults.textureOptions;
	    setTextureTo1PixelColor(gl, tex, options);
	    // Because it's async we need to copy the options.
	    options = utils.shallowCopy(options);
	    var img = loadImage(options.src, options.crossOrigin, function (err, img) {
	      if (err) {
	        callback(err, tex, img);
	      } else {
	        setTextureFromElement(gl, tex, img, options);
	        callback(null, tex, img);
	      }
	    });
	    return img;
	  }

	  /**
	   * Loads a cubemap from 6 urls as specified in `options.src`. Will set the cubemap to a 1x1 pixel color
	   * so that it is usable immediately unless `option.color === false`.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @param {module:twgl.CubemapReadyCallback} [callback] A function to be called when all the images have finished loading. err will
	   *    be non null if there was an error.
	   * @memberOf module:twgl/textures
	   */
	  function loadCubemapFromUrls(gl, tex, options, callback) {
	    callback = callback || noop;
	    var urls = options.src;
	    if (urls.length !== 6) {
	      throw "there must be 6 urls for a cubemap";
	    }
	    var internalFormat = options.internalFormat || options.format || gl.RGBA;
	    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
	    var format = options.format || formatType.format;
	    var type = options.type || gl.UNSIGNED_BYTE;
	    var target = options.target || gl.TEXTURE_2D;
	    if (target !== gl.TEXTURE_CUBE_MAP) {
	      throw "target must be TEXTURE_CUBE_MAP";
	    }
	    setTextureTo1PixelColor(gl, tex, options);
	    // Because it's async we need to copy the options.
	    options = utils.shallowCopy(options);
	    var numToLoad = 6;
	    var errors = [];
	    var imgs;
	    var faces = getCubeFaceOrder(gl, options);

	    function uploadImg(faceTarget) {
	      return function (err, img) {
	        --numToLoad;
	        if (err) {
	          errors.push(err);
	        } else {
	          if (img.width !== img.height) {
	            errors.push("cubemap face img is not a square: " + img.src);
	          } else {
	            savePackState(gl, options);
	            gl.bindTexture(target, tex);

	            // So assuming this is the first image we now have one face that's img sized
	            // and 5 faces that are 1x1 pixel so size the other faces
	            if (numToLoad === 5) {
	              // use the default order
	              getCubeFaceOrder(gl).forEach(function (otherTarget) {
	                // Should we re-use the same face or a color?
	                gl.texImage2D(otherTarget, 0, internalFormat, format, type, img);
	              });
	            } else {
	              gl.texImage2D(faceTarget, 0, internalFormat, format, type, img);
	            }

	            restorePackState(gl, options);
	            gl.generateMipmap(target);
	          }
	        }

	        if (numToLoad === 0) {
	          callback(errors.length ? errors : undefined, imgs, tex);
	        }
	      };
	    }

	    imgs = urls.map(function (url, ndx) {
	      return loadImage(url, options.crossOrigin, uploadImg(faces[ndx]));
	    });
	  }

	  /**
	   * Loads a 2d array or 3d texture from urls as specified in `options.src`.
	   * Will set the texture to a 1x1 pixel color
	   * so that it is usable immediately unless `option.color === false`.
	   *
	   * If the width and height is not specified the width and height of the first
	   * image loaded will be used. Note that since images are loaded async
	   * which image downloads first is unknown.
	   *
	   * If an image is not the same size as the width and height it will be scaled
	   * to that width and height.
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @param {module:twgl.ThreeDReadyCallback} [callback] A function to be called when all the images have finished loading. err will
	   *    be non null if there was an error.
	   * @memberOf module:twgl/textures
	   */
	  function loadSlicesFromUrls(gl, tex, options, callback) {
	    callback = callback || noop;
	    var urls = options.src;
	    var internalFormat = options.internalFormat || options.format || gl.RGBA;
	    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
	    var format = options.format || formatType.format;
	    var type = options.type || gl.UNSIGNED_BYTE;
	    var target = options.target || gl.TEXTURE_2D_ARRAY;
	    if (target !== gl.TEXTURE_3D && target !== gl.TEXTURE_2D_ARRAY) {
	      throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
	    }
	    setTextureTo1PixelColor(gl, tex, options);
	    // Because it's async we need to copy the options.
	    options = utils.shallowCopy(options);
	    var numToLoad = urls.length;
	    var errors = [];
	    var imgs;
	    var width = options.width;
	    var height = options.height;
	    var depth = urls.length;
	    var firstImage = true;

	    function uploadImg(slice) {
	      return function (err, img) {
	        --numToLoad;
	        if (err) {
	          errors.push(err);
	        } else {
	          savePackState(gl, options);
	          gl.bindTexture(target, tex);

	          if (firstImage) {
	            firstImage = false;
	            width = options.width || img.width;
	            height = options.height || img.height;
	            gl.texImage3D(target, 0, internalFormat, width, height, depth, 0, format, type, null);

	            // put it in every slice otherwise some slices will be 0,0,0,0
	            for (var s = 0; s < depth; ++s) {
	              gl.texSubImage3D(target, 0, 0, 0, s, width, height, 1, format, type, img);
	            }
	          } else {
	            var src = img;
	            if (img.width !== width || img.height !== height) {
	              // Size the image to fix
	              src = ctx.canvas;
	              ctx.canvas.width = width;
	              ctx.canvas.height = height;
	              ctx.drawImage(img, 0, 0, width, height);
	            }

	            gl.texSubImage3D(target, 0, 0, 0, slice, width, height, 1, format, type, src);

	            // free the canvas memory
	            if (src === ctx.canvas) {
	              ctx.canvas.width = 0;
	              ctx.canvas.height = 0;
	            }
	          }

	          restorePackState(gl, options);
	          gl.generateMipmap(target);
	        }

	        if (numToLoad === 0) {
	          callback(errors.length ? errors : undefined, imgs, tex);
	        }
	      };
	    }

	    imgs = urls.map(function (url, ndx) {
	      return loadImage(url, options.crossOrigin, uploadImg(ndx));
	    });
	  }

	  /**
	   * Sets a texture from an array or typed array. If the width or height is not provided will attempt to
	   * guess the size. See {@link module:twgl.TextureOptions}.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {(number[]|ArrayBuffer)} src An array or typed arry with texture data.
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   *   This is often the same options you passed in when you created the texture.
	   * @memberOf module:twgl/textures
	   */
	  function setTextureFromArray(gl, tex, src, options) {
	    options = options || defaults.textureOptions;
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    var width = options.width;
	    var height = options.height;
	    var depth = options.depth;
	    var internalFormat = options.internalFormat || options.format || gl.RGBA;
	    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
	    var format = options.format || formatType.format;
	    var type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
	    if (!isArrayBuffer(src)) {
	      var Type = typedArrays.getTypedArrayTypeForGLType(type);
	      src = new Type(src);
	    } else {
	      if (src instanceof Uint8ClampedArray) {
	        src = new Uint8Array(src.buffer);
	      }
	    }
	    var bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
	    var numElements = src.byteLength / bytesPerElement; // TODO: check UNPACK_ALIGNMENT?
	    if (numElements % 1) {
	      throw "length wrong size for format: " + glEnumToString(gl, format);
	    }
	    var dimensions;
	    if (target === gl.TEXTURE_3D) {
	      if (!width && !height && !depth) {
	        var size = Math.cbrt(numElements);
	        if (size % 1 !== 0) {
	          throw "can't guess cube size of array of numElements: " + numElements;
	        }
	        width = size;
	        height = size;
	        depth = size;
	      } else if (width && (!height || !depth)) {
	        dimensions = guessDimensions(gl, target, height, depth, numElements / width);
	        height = dimensions.width;
	        depth = dimensions.height;
	      } else if (height && (!width || !depth)) {
	        dimensions = guessDimensions(gl, target, width, depth, numElements / height);
	        width = dimensions.width;
	        depth = dimensions.height;
	      } else {
	        dimensions = guessDimensions(gl, target, width, height, numElements / depth);
	        width = dimensions.width;
	        height = dimensions.height;
	      }
	    } else {
	      dimensions = guessDimensions(gl, target, width, height, numElements);
	      width = dimensions.width;
	      height = dimensions.height;
	    }
	    gl.pixelStorei(gl.UNPACK_ALIGNMENT, options.unpackAlignment || 1);
	    savePackState(gl, options);
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      (function () {
	        var elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
	        var faceSize = numElements / 6 * elementsPerElement;

	        getCubeFacesWithNdx(gl, options).forEach(function (f) {
	          var offset = faceSize * f.ndx;
	          var data = src.subarray(offset, offset + faceSize);
	          gl.texImage2D(f.face, 0, internalFormat, width, height, 0, format, type, data);
	        });
	      })();
	    } else if (target === gl.TEXTURE_3D) {
	      gl.texImage3D(target, 0, internalFormat, width, height, depth, 0, format, type, src);
	    } else {
	      gl.texImage2D(target, 0, internalFormat, width, height, 0, format, type, src);
	    }
	    restorePackState(gl, options);
	    return {
	      width: width,
	      height: height,
	      depth: depth,
	      type: type
	    };
	  }

	  /**
	   * Sets a texture with no contents of a certain size. In other words calls `gl.texImage2D` with `null`.
	   * You must set `options.width` and `options.height`.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the WebGLTexture to set parameters for
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @memberOf module:twgl/textures
	   */
	  function setEmptyTexture(gl, tex, options) {
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    var internalFormat = options.internalFormat || options.format || gl.RGBA;
	    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
	    var format = options.format || formatType.format;
	    var type = options.type || formatType.type;
	    savePackState(gl, options);
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      for (var ii = 0; ii < 6; ++ii) {
	        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, internalFormat, options.width, options.height, 0, format, type, null);
	      }
	    } else if (target === gl.TEXTURE_3D) {
	      gl.texImage3D(target, 0, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
	    } else {
	      gl.texImage2D(target, 0, internalFormat, options.width, options.height, 0, format, type, null);
	    }
	    restorePackState(gl, options);
	  }

	  /**
	   * Creates a texture based on the options passed in.
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
	   * @param {module:twgl.TextureReadyCallback} [callback] A callback called when an image has been downloaded and uploaded to the texture.
	   * @return {WebGLTexture} the created texture.
	   * @memberOf module:twgl/textures
	   */
	  function createTexture(gl, options, callback) {
	    callback = callback || noop;
	    options = options || defaults.textureOptions;
	    var tex = gl.createTexture();
	    var target = options.target || gl.TEXTURE_2D;
	    var width = options.width || 1;
	    var height = options.height || 1;
	    var internalFormat = options.internalFormat || gl.RGBA;
	    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
	    var type = options.type || formatType.type;
	    gl.bindTexture(target, tex);
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      // this should have been the default for CUBEMAPS :(
	      gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	      gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	    }
	    var src = options.src;
	    if (src) {
	      if (typeof src === "function") {
	        src = src(gl, options);
	      }
	      if (typeof src === "string") {
	        loadTextureFromUrl(gl, tex, options, callback);
	      } else if (isArrayBuffer(src) || Array.isArray(src) && (typeof src[0] === 'number' || Array.isArray(src[0]) || isArrayBuffer(src[0]))) {
	        var dimensions = setTextureFromArray(gl, tex, src, options);
	        width = dimensions.width;
	        height = dimensions.height;
	        type = dimensions.type;
	      } else if (Array.isArray(src) && typeof src[0] === 'string') {
	        if (target === gl.TEXTURE_CUBE_MAP) {
	          loadCubemapFromUrls(gl, tex, options, callback);
	        } else {
	          loadSlicesFromUrls(gl, tex, options, callback);
	        }
	      } else if (src instanceof HTMLElement) {
	        setTextureFromElement(gl, tex, src, options);
	        width = src.width;
	        height = src.height;
	      } else {
	        throw "unsupported src type";
	      }
	    } else {
	      setEmptyTexture(gl, tex, options);
	    }
	    if (options.auto !== false) {
	      setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
	    }
	    setTextureParameters(gl, tex, options);
	    return tex;
	  }

	  /**
	   * Resizes a texture based on the options passed in.
	   *
	   * Note: This is not a generic resize anything function.
	   * It's mostly used by {@link module:twgl.resizeFramebufferInfo}
	   * It will use `options.src` if it exists to try to determine a `type`
	   * otherwise it will assume `gl.UNSIGNED_BYTE`. No data is provided
	   * for the texture. Texture parameters will be set accordingly
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {WebGLTexture} tex the texture to resize
	   * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
	   * @param {number} [width] the new width. If not passed in will use `options.width`
	   * @param {number} [height] the new height. If not passed in will use `options.height`
	   * @memberOf module:twgl/textures
	   */
	  function resizeTexture(gl, tex, options, width, height) {
	    width = width || options.width;
	    height = height || options.height;
	    var target = options.target || gl.TEXTURE_2D;
	    gl.bindTexture(target, tex);
	    var internalFormat = options.internalFormat || options.format || gl.RGBA;
	    var formatType = getFormatAndTypeForInternalFormat(internalFormat);
	    var format = options.format || formatType.format;
	    var type;
	    var src = options.src;
	    if (!src) {
	      type = options.type || formatType.type;
	    } else if (isArrayBuffer(src) || Array.isArray(src) && typeof src[0] === 'number') {
	      type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
	    } else {
	      type = options.type || formatType.type;
	    }
	    if (target === gl.TEXTURE_CUBE_MAP) {
	      for (var ii = 0; ii < 6; ++ii) {
	        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, format, width, height, 0, format, type, null);
	      }
	    } else {
	      gl.texImage2D(target, 0, format, width, height, 0, format, type, null);
	    }
	  }

	  /**
	   * Check if a src is an async request.
	   * if src is a string we're going to download an image
	   * if src is an array of strings we're going to download cubemap images
	   * @param {*} src The src from a TextureOptions
	   * @returns {bool} true if src is async.
	   */
	  function isAsyncSrc(src) {
	    return typeof src === 'string' || Array.isArray(src) && typeof src[0] === 'string';
	  }

	  /**
	   * Creates a bunch of textures based on the passed in options.
	   *
	   * Example:
	   *
	   *     var textures = twgl.createTextures(gl, {
	   *       // a power of 2 image
	   *       hftIcon: { src: "images/hft-icon-16.png", mag: gl.NEAREST },
	   *       // a non-power of 2 image
	   *       clover: { src: "images/clover.jpg" },
	   *       // From a canvas
	   *       fromCanvas: { src: ctx.canvas },
	   *       // A cubemap from 6 images
	   *       yokohama: {
	   *         target: gl.TEXTURE_CUBE_MAP,
	   *         src: [
	   *           'images/yokohama/posx.jpg',
	   *           'images/yokohama/negx.jpg',
	   *           'images/yokohama/posy.jpg',
	   *           'images/yokohama/negy.jpg',
	   *           'images/yokohama/posz.jpg',
	   *           'images/yokohama/negz.jpg',
	   *         ],
	   *       },
	   *       // A cubemap from 1 image (can be 1x6, 2x3, 3x2, 6x1)
	   *       goldengate: {
	   *         target: gl.TEXTURE_CUBE_MAP,
	   *         src: 'images/goldengate.jpg',
	   *       },
	   *       // A 2x2 pixel texture from a JavaScript array
	   *       checker: {
	   *         mag: gl.NEAREST,
	   *         min: gl.LINEAR,
	   *         src: [
	   *           255,255,255,255,
	   *           192,192,192,255,
	   *           192,192,192,255,
	   *           255,255,255,255,
	   *         ],
	   *       },
	   *       // a 1x2 pixel texture from a typed array.
	   *       stripe: {
	   *         mag: gl.NEAREST,
	   *         min: gl.LINEAR,
	   *         format: gl.LUMINANCE,
	   *         src: new Uint8Array([
	   *           255,
	   *           128,
	   *           255,
	   *           128,
	   *           255,
	   *           128,
	   *           255,
	   *           128,
	   *         ]),
	   *         width: 1,
	   *       },
	   *     });
	   *
	   * Now
	   *
	   * *   `textures.hftIcon` will be a 2d texture
	   * *   `textures.clover` will be a 2d texture
	   * *   `textures.fromCanvas` will be a 2d texture
	   * *   `textures.yohohama` will be a cubemap texture
	   * *   `textures.goldengate` will be a cubemap texture
	   * *   `textures.checker` will be a 2d texture
	   * *   `textures.stripe` will be a 2d texture
	   *
	   * @param {WebGLRenderingContext} gl the WebGLRenderingContext
	   * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per texture.
	   * @param {module:twgl.TexturesReadyCallback} [callback] A callback called when all textures have been downloaded.
	   * @return {Object.<string,WebGLTexture>} the created textures by name
	   * @memberOf module:twgl/textures
	   */
	  function createTextures(gl, textureOptions, callback) {
	    callback = callback || noop;
	    var numDownloading = 0;
	    var errors = [];
	    var textures = {};
	    var images = {};

	    function callCallbackIfReady() {
	      if (numDownloading === 0) {
	        setTimeout(function () {
	          callback(errors.length ? errors : undefined, textures, images);
	        }, 0);
	      }
	    }

	    Object.keys(textureOptions).forEach(function (name) {
	      var options = textureOptions[name];
	      var onLoadFn;
	      if (isAsyncSrc(options.src)) {
	        onLoadFn = function onLoadFn(err, tex, img) {
	          images[name] = img;
	          --numDownloading;
	          if (err) {
	            errors.push(err);
	          }
	          callCallbackIfReady();
	        };
	        ++numDownloading;
	      }
	      textures[name] = createTexture(gl, options, onLoadFn);
	    });

	    // queue the callback if there are no images to download.
	    // We do this because if your code is structured to wait for
	    // images to download but then you comment out all the async
	    // images your code would break.
	    callCallbackIfReady();

	    return textures;
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "setDefaults_": setDefaults,

	    "createSampler": createSampler,
	    "createSamplers": createSamplers,
	    "setSamplerParameters": setSamplerParameters,

	    "createTexture": createTexture,
	    "setEmptyTexture": setEmptyTexture,
	    "setTextureFromArray": setTextureFromArray,
	    "loadTextureFromUrl": loadTextureFromUrl,
	    "setTextureFromElement": setTextureFromElement,
	    "setTextureFilteringForSize": setTextureFilteringForSize,
	    "setTextureParameters": setTextureParameters,
	    "setDefaultTextureColor": setDefaultTextureColor,
	    "createTextures": createTextures,
	    "resizeTexture": resizeTexture,
	    "getNumComponentsForFormat": getNumComponentsForFormat,
	    "getBytesPerElementForInternalFormat": getBytesPerElementForInternalFormat
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (programs) {
	  "use strict";

	  /**
	   * vertex array object related functions
	   *
	   * You should generally not need to use these functions. They are provided
	   * for those cases where you're doing something out of the ordinary
	   * and you need lower level access.
	   *
	   * For backward compatibily they are available at both `twgl.attributes` and `twgl`
	   * itself
	   *
	   * See {@link module:twgl} for core functions
	   *
	   * @module twgl/vertexArrays
	   */

	  /**
	   * @typedef {Object} VertexArrayInfo
	   * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
	   * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
	   * @property {WebGLVertexArrayObject} [vertexArrayObject] a vertex array object
	   * @memberOf module:twgl
	   */

	  /**
	   * Creates a VertexArrayInfo from a BufferInfo and one or more ProgramInfos
	   *
	   * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
	   * {@link module:twgl:drawBufferInfo}.
	   *
	   * > **IMPORTANT:** Vertex Array Objects are **not** a direct analog for a BufferInfo. Vertex Array Objects
	   *   assign buffers to specific attributes at creation time. That means they can only be used with programs
	   *   who's attributes use the same attribute locations for the same purposes.
	   *
	   * > Bind your attribute locations by passing an array of attribute names to {@link module:twgl.createProgramInfo}
	   *   or use WebGL 2's GLSL ES 3's `layout(location = <num>)` to make sure locations match.
	   *
	   * also
	   *
	   * > **IMPORTANT:** After calling twgl.setBuffersAndAttribute with a BufferInfo that uses a Vertex Array Object
	   *   that Vertex Array Object will be bound. That means **ANY MANIPULATION OF ELEMENT_ARRAY_BUFFER or ATTRIBUTES**
	   *   will affect the Vertex Array Object state.
	   *
	   * > Call `gl.bindVertexArray(null)` to get back manipulating the global attributes and ELEMENT_ARRAY_BUFFER.
	   *
	   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
	   * @param {module:twgl.ProgramInfo|module:twgl.ProgramInfo[]} programInfo a programInfo or array of programInfos
	   * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
	   *
	   *    You need to make sure every attribute that will be used is bound. So for example assume shader 1
	   *    uses attributes A, B, C and shader 2 uses attributes A, B, D. If you only pass in the programInfo
	   *    for shader 1 then only attributes A, B, and C will have their attributes set because TWGL doesn't
	   *    now attribute D's location.
	   *
	   *    So, you can pass in both shader 1 and shader 2's programInfo
	   *
	   * @return {module:twgl.VertexArrayInfo} The created VertexArrayInfo
	   *
	   * @memberOf module:twgl/vertexArrays
	   */

	  function createVertexArrayInfo(gl, programInfos, bufferInfo) {
	    var vao = gl.createVertexArray();
	    gl.bindVertexArray(vao);
	    if (!programInfos.length) {
	      programInfos = [programInfos];
	    }
	    programInfos.forEach(function (programInfo) {
	      programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
	    });
	    gl.bindVertexArray(null);
	    return {
	      numElements: bufferInfo.numElements,
	      elementType: bufferInfo.elementType,
	      vertexArrayObject: vao
	    };
	  }

	  /**
	   * Creates a vertex array object and then sets the attributes on it
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
	   * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
	   * @param {Object.<string, module:twgl.AttribInfo>} attribs AttribInfos mapped by attribute name.
	   * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
	   * @memberOf module:twgl/vertexArrays
	   */
	  function createVAOAndSetAttributes(gl, setters, attribs, indices) {
	    var vao = gl.createVertexArray();
	    gl.bindVertexArray(vao);
	    programs.setAttributes(setters, attribs);
	    if (indices) {
	      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
	    }
	    // We unbind this because otherwise any change to ELEMENT_ARRAY_BUFFER
	    // like when creating buffers for other stuff will mess up this VAO's binding
	    gl.bindVertexArray(null);
	    return vao;
	  }

	  /**
	   * Creates a vertex array object and then sets the attributes
	   * on it
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
	   *        to use.
	   * @param {Object.<string, function>| module:twgl.ProgramInfo} programInfo as returned from createProgramInfo or Attribute setters as returned from createAttributeSetters
	   * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
	   * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
	   * @memberOf module:twgl/vertexArrays
	   */
	  function createVAOFromBufferInfo(gl, programInfo, bufferInfo) {
	    return createVAOAndSetAttributes(gl, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "createVertexArrayInfo": createVertexArrayInfo,
	    "createVAOAndSetAttributes": createVAOAndSetAttributes,
	    "createVAOFromBufferInfo": createVAOFromBufferInfo
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (v3) {
	  "use strict";

	  /**
	   * 4x4 Matrix math math functions.
	   *
	   * Almost all functions take an optional `dst` argument. If it is not passed in the
	   * functions will create a new matrix. In other words you can do this
	   *
	   *     var mat = m4.translation([1, 2, 3]);  // Creates a new translation matrix
	   *
	   * or
	   *
	   *     var mat = m4.create();
	   *     m4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
	   *
	   * The first style is often easier but depending on where it's used it generates garbage where
	   * as there is almost never allocation with the second style.
	   *
	   * It is always save to pass any matrix as the destination. So for example
	   *
	   *     var mat = m4.identity();
	   *     var trans = m4.translation([1, 2, 3]);
	   *     m4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
	   *
	   * @module twgl/m4
	   */

	  var MatType = Float32Array;

	  var tempV3a = v3.create();
	  var tempV3b = v3.create();
	  var tempV3c = v3.create();

	  /**
	   * A JavaScript array with 16 values or a Float32Array with 16 values.
	   * When created by the library will create the default type which is `Float32Array`
	   * but can be set by calling {@link module:twgl/m4.setDefaultType}.
	   * @typedef {(number[]|Float32Array)} Mat4
	   * @memberOf module:twgl/m4
	   */

	  /**
	   * Sets the type this library creates for a Mat4
	   * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
	   * @return {constructor} previous constructor for Mat4
	   */
	  function setDefaultType(ctor) {
	    var oldType = MatType;
	    MatType = ctor;
	    return oldType;
	  }

	  /**
	   * Negates a matrix.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} -m.
	   * @memberOf module:twgl/m4
	   */
	  function negate(m, dst) {
	    dst = dst || new MatType(16);

	    dst[0] = -m[0];
	    dst[1] = -m[1];
	    dst[2] = -m[2];
	    dst[3] = -m[3];
	    dst[4] = -m[4];
	    dst[5] = -m[5];
	    dst[6] = -m[6];
	    dst[7] = -m[7];
	    dst[8] = -m[8];
	    dst[9] = -m[9];
	    dst[10] = -m[10];
	    dst[11] = -m[11];
	    dst[12] = -m[12];
	    dst[13] = -m[13];
	    dst[14] = -m[14];
	    dst[15] = -m[15];

	    return dst;
	  }

	  /**
	   * Copies a matrix.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {module:twgl/m4.Mat4} [dst] The matrix.
	   * @return {module:twgl/m4.Mat4} A copy of m.
	   * @memberOf module:twgl/m4
	   */
	  function copy(m, dst) {
	    dst = dst || new MatType(16);

	    dst[0] = m[0];
	    dst[1] = m[1];
	    dst[2] = m[2];
	    dst[3] = m[3];
	    dst[4] = m[4];
	    dst[5] = m[5];
	    dst[6] = m[6];
	    dst[7] = m[7];
	    dst[8] = m[8];
	    dst[9] = m[9];
	    dst[10] = m[10];
	    dst[11] = m[11];
	    dst[12] = m[12];
	    dst[13] = m[13];
	    dst[14] = m[14];
	    dst[15] = m[15];

	    return dst;
	  }

	  /**
	   * Creates an n-by-n identity matrix.
	   *
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} An n-by-n identity matrix.
	   * @memberOf module:twgl/m4
	   */
	  function identity(dst) {
	    dst = dst || new MatType(16);

	    dst[0] = 1;
	    dst[1] = 0;
	    dst[2] = 0;
	    dst[3] = 0;
	    dst[4] = 0;
	    dst[5] = 1;
	    dst[6] = 0;
	    dst[7] = 0;
	    dst[8] = 0;
	    dst[9] = 0;
	    dst[10] = 1;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;

	    return dst;
	  }

	  /**
	   * Takes the transpose of a matrix.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The transpose of m.
	   * @memberOf module:twgl/m4
	   */
	  function transpose(m, dst) {
	    dst = dst || new MatType(16);
	    if (dst === m) {
	      var t;

	      t = m[1];
	      m[1] = m[4];
	      m[4] = t;

	      t = m[2];
	      m[2] = m[8];
	      m[8] = t;

	      t = m[3];
	      m[3] = m[12];
	      m[12] = t;

	      t = m[6];
	      m[6] = m[9];
	      m[9] = t;

	      t = m[7];
	      m[7] = m[13];
	      m[13] = t;

	      t = m[11];
	      m[11] = m[14];
	      m[14] = t;
	      return dst;
	    }

	    var m00 = m[0 * 4 + 0];
	    var m01 = m[0 * 4 + 1];
	    var m02 = m[0 * 4 + 2];
	    var m03 = m[0 * 4 + 3];
	    var m10 = m[1 * 4 + 0];
	    var m11 = m[1 * 4 + 1];
	    var m12 = m[1 * 4 + 2];
	    var m13 = m[1 * 4 + 3];
	    var m20 = m[2 * 4 + 0];
	    var m21 = m[2 * 4 + 1];
	    var m22 = m[2 * 4 + 2];
	    var m23 = m[2 * 4 + 3];
	    var m30 = m[3 * 4 + 0];
	    var m31 = m[3 * 4 + 1];
	    var m32 = m[3 * 4 + 2];
	    var m33 = m[3 * 4 + 3];

	    dst[0] = m00;
	    dst[1] = m10;
	    dst[2] = m20;
	    dst[3] = m30;
	    dst[4] = m01;
	    dst[5] = m11;
	    dst[6] = m21;
	    dst[7] = m31;
	    dst[8] = m02;
	    dst[9] = m12;
	    dst[10] = m22;
	    dst[11] = m32;
	    dst[12] = m03;
	    dst[13] = m13;
	    dst[14] = m23;
	    dst[15] = m33;

	    return dst;
	  }

	  /**
	   * Computes the inverse of a 4-by-4 matrix.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The inverse of m.
	   * @memberOf module:twgl/m4
	   */
	  function inverse(m, dst) {
	    dst = dst || new MatType(16);

	    var m00 = m[0 * 4 + 0];
	    var m01 = m[0 * 4 + 1];
	    var m02 = m[0 * 4 + 2];
	    var m03 = m[0 * 4 + 3];
	    var m10 = m[1 * 4 + 0];
	    var m11 = m[1 * 4 + 1];
	    var m12 = m[1 * 4 + 2];
	    var m13 = m[1 * 4 + 3];
	    var m20 = m[2 * 4 + 0];
	    var m21 = m[2 * 4 + 1];
	    var m22 = m[2 * 4 + 2];
	    var m23 = m[2 * 4 + 3];
	    var m30 = m[3 * 4 + 0];
	    var m31 = m[3 * 4 + 1];
	    var m32 = m[3 * 4 + 2];
	    var m33 = m[3 * 4 + 3];
	    var tmp_0 = m22 * m33;
	    var tmp_1 = m32 * m23;
	    var tmp_2 = m12 * m33;
	    var tmp_3 = m32 * m13;
	    var tmp_4 = m12 * m23;
	    var tmp_5 = m22 * m13;
	    var tmp_6 = m02 * m33;
	    var tmp_7 = m32 * m03;
	    var tmp_8 = m02 * m23;
	    var tmp_9 = m22 * m03;
	    var tmp_10 = m02 * m13;
	    var tmp_11 = m12 * m03;
	    var tmp_12 = m20 * m31;
	    var tmp_13 = m30 * m21;
	    var tmp_14 = m10 * m31;
	    var tmp_15 = m30 * m11;
	    var tmp_16 = m10 * m21;
	    var tmp_17 = m20 * m11;
	    var tmp_18 = m00 * m31;
	    var tmp_19 = m30 * m01;
	    var tmp_20 = m00 * m21;
	    var tmp_21 = m20 * m01;
	    var tmp_22 = m00 * m11;
	    var tmp_23 = m10 * m01;

	    var t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
	    var t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
	    var t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
	    var t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

	    var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);

	    dst[0] = d * t0;
	    dst[1] = d * t1;
	    dst[2] = d * t2;
	    dst[3] = d * t3;
	    dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
	    dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
	    dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
	    dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
	    dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
	    dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
	    dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
	    dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
	    dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
	    dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
	    dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
	    dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));

	    return dst;
	  }

	  /**
	   * Multiplies two 4-by-4 matrices with a on the left and b on the right
	   * @param {module:twgl/m4.Mat4} a The matrix on the left.
	   * @param {module:twgl/m4.Mat4} b The matrix on the right.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The matrix product of a and b.
	   * @memberOf module:twgl/m4
	   */
	  function multiply(a, b, dst) {
	    dst = dst || new MatType(16);

	    var a00 = a[0];
	    var a01 = a[1];
	    var a02 = a[2];
	    var a03 = a[3];
	    var a10 = a[4 + 0];
	    var a11 = a[4 + 1];
	    var a12 = a[4 + 2];
	    var a13 = a[4 + 3];
	    var a20 = a[8 + 0];
	    var a21 = a[8 + 1];
	    var a22 = a[8 + 2];
	    var a23 = a[8 + 3];
	    var a30 = a[12 + 0];
	    var a31 = a[12 + 1];
	    var a32 = a[12 + 2];
	    var a33 = a[12 + 3];
	    var b00 = b[0];
	    var b01 = b[1];
	    var b02 = b[2];
	    var b03 = b[3];
	    var b10 = b[4 + 0];
	    var b11 = b[4 + 1];
	    var b12 = b[4 + 2];
	    var b13 = b[4 + 3];
	    var b20 = b[8 + 0];
	    var b21 = b[8 + 1];
	    var b22 = b[8 + 2];
	    var b23 = b[8 + 3];
	    var b30 = b[12 + 0];
	    var b31 = b[12 + 1];
	    var b32 = b[12 + 2];
	    var b33 = b[12 + 3];

	    dst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
	    dst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
	    dst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
	    dst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
	    dst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
	    dst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
	    dst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
	    dst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
	    dst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
	    dst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
	    dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
	    dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
	    dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
	    dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
	    dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
	    dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;

	    return dst;
	  }

	  /**
	   * Sets the translation component of a 4-by-4 matrix to the given
	   * vector.
	   * @param {module:twgl/m4.Mat4} a The matrix.
	   * @param {Vec3} v The vector.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} a once modified.
	   * @memberOf module:twgl/m4
	   */
	  function setTranslation(a, v, dst) {
	    dst = dst || identity();
	    if (a !== dst) {
	      dst[0] = a[0];
	      dst[1] = a[1];
	      dst[2] = a[2];
	      dst[3] = a[3];
	      dst[4] = a[4];
	      dst[5] = a[5];
	      dst[6] = a[6];
	      dst[7] = a[7];
	      dst[8] = a[8];
	      dst[9] = a[9];
	      dst[10] = a[10];
	      dst[11] = a[11];
	    }
	    dst[12] = v[0];
	    dst[13] = v[1];
	    dst[14] = v[2];
	    dst[15] = 1;
	    return dst;
	  }

	  /**
	   * Returns the translation component of a 4-by-4 matrix as a vector with 3
	   * entries.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} [dst] vector..
	   * @return {Vec3} The translation component of m.
	   * @memberOf module:twgl/m4
	   */
	  function getTranslation(m, dst) {
	    dst = dst || v3.create();
	    dst[0] = m[12];
	    dst[1] = m[13];
	    dst[2] = m[14];
	    return dst;
	  }

	  /**
	   * Returns an axis of a 4x4 matrix as a vector with 3 entries
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {number} axis The axis 0 = x, 1 = y, 2 = z;
	   * @return {Vec3} [dst] vector.
	   * @return {Vec3} The axis component of m.
	   * @memberOf module:twgl/m4
	   */
	  function getAxis(m, axis, dst) {
	    dst = dst || v3.create();
	    var off = axis * 4;
	    dst[0] = m[off + 0];
	    dst[1] = m[off + 1];
	    dst[2] = m[off + 2];
	    return dst;
	  }

	  /**
	   * Sets an axis of a 4x4 matrix as a vector with 3 entries
	   * @param {Vec3} v the axis vector
	   * @param {number} axis The axis  0 = x, 1 = y, 2 = z;
	   * @param {module:twgl/m4.Mat4} [dst] The matrix to set. If none a new one is created
	   * @return {module:twgl/m4.Mat4} dst
	   * @memberOf module:twgl/m4
	   */
	  function setAxis(a, v, axis, dst) {
	    if (dst !== a) {
	      dst = copy(a, dst);
	    }
	    var off = axis * 4;
	    dst[off + 0] = v[0];
	    dst[off + 1] = v[1];
	    dst[off + 2] = v[2];
	    return dst;
	  }

	  /**
	   * Computes a 4-by-4 perspective transformation matrix given the angular height
	   * of the frustum, the aspect ratio, and the near and far clipping planes.  The
	   * arguments define a frustum extending in the negative z direction.  The given
	   * angle is the vertical angle of the frustum, and the horizontal angle is
	   * determined to produce the given aspect ratio.  The arguments near and far are
	   * the distances to the near and far clipping planes.  Note that near and far
	   * are not z coordinates, but rather they are distances along the negative
	   * z-axis.  The matrix generated sends the viewing frustum to the unit box.
	   * We assume a unit box extending from -1 to 1 in the x and y dimensions and
	   * from 0 to 1 in the z dimension.
	   * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
	   * @param {number} aspect The aspect ratio width / height.
	   * @param {number} zNear The depth (negative z coordinate)
	   *     of the near clipping plane.
	   * @param {number} zFar The depth (negative z coordinate)
	   *     of the far clipping plane.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The perspective matrix.
	   * @memberOf module:twgl/m4
	   */
	  function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
	    dst = dst || new MatType(16);

	    var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
	    var rangeInv = 1.0 / (zNear - zFar);

	    dst[0] = f / aspect;
	    dst[1] = 0;
	    dst[2] = 0;
	    dst[3] = 0;

	    dst[4] = 0;
	    dst[5] = f;
	    dst[6] = 0;
	    dst[7] = 0;

	    dst[8] = 0;
	    dst[9] = 0;
	    dst[10] = (zNear + zFar) * rangeInv;
	    dst[11] = -1;

	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = zNear * zFar * rangeInv * 2;
	    dst[15] = 0;

	    return dst;
	  }

	  /**
	   * Computes a 4-by-4 othogonal transformation matrix given the left, right,
	   * bottom, and top dimensions of the near clipping plane as well as the
	   * near and far clipping plane distances.
	   * @param {number} left Left side of the near clipping plane viewport.
	   * @param {number} right Right side of the near clipping plane viewport.
	   * @param {number} top Top of the near clipping plane viewport.
	   * @param {number} bottom Bottom of the near clipping plane viewport.
	   * @param {number} near The depth (negative z coordinate)
	   *     of the near clipping plane.
	   * @param {number} far The depth (negative z coordinate)
	   *     of the far clipping plane.
	   * @param {module:twgl/m4.Mat4} [dst] Output matrix.
	   * @return {module:twgl/m4.Mat4} The perspective matrix.
	   * @memberOf module:twgl/m4
	   */
	  function ortho(left, right, bottom, top, near, far, dst) {
	    dst = dst || new MatType(16);

	    dst[0] = 2 / (right - left);
	    dst[1] = 0;
	    dst[2] = 0;
	    dst[3] = 0;

	    dst[4] = 0;
	    dst[5] = 2 / (top - bottom);
	    dst[6] = 0;
	    dst[7] = 0;

	    dst[8] = 0;
	    dst[9] = 0;
	    dst[10] = -1 / (far - near);
	    dst[11] = 0;

	    dst[12] = (right + left) / (left - right);
	    dst[13] = (top + bottom) / (bottom - top);
	    dst[14] = -near / (near - far);
	    dst[15] = 1;

	    return dst;
	  }

	  /**
	   * Computes a 4-by-4 perspective transformation matrix given the left, right,
	   * top, bottom, near and far clipping planes. The arguments define a frustum
	   * extending in the negative z direction. The arguments near and far are the
	   * distances to the near and far clipping planes. Note that near and far are not
	   * z coordinates, but rather they are distances along the negative z-axis. The
	   * matrix generated sends the viewing frustum to the unit box. We assume a unit
	   * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
	   * dimension.
	   * @param {number} left The x coordinate of the left plane of the box.
	   * @param {number} right The x coordinate of the right plane of the box.
	   * @param {number} bottom The y coordinate of the bottom plane of the box.
	   * @param {number} top The y coordinate of the right plane of the box.
	   * @param {number} near The negative z coordinate of the near plane of the box.
	   * @param {number} far The negative z coordinate of the far plane of the box.
	   * @param {module:twgl/m4.Mat4} [dst] Output matrix.
	   * @return {module:twgl/m4.Mat4} The perspective projection matrix.
	   * @memberOf module:twgl/m4
	   */
	  function frustum(left, right, bottom, top, near, far, dst) {
	    dst = dst || new MatType(16);

	    var dx = right - left;
	    var dy = top - bottom;
	    var dz = near - far;

	    dst[0] = 2 * near / dx;
	    dst[1] = 0;
	    dst[2] = 0;
	    dst[3] = 0;
	    dst[4] = 0;
	    dst[5] = 2 * near / dy;
	    dst[6] = 0;
	    dst[7] = 0;
	    dst[8] = (left + right) / dx;
	    dst[9] = (top + bottom) / dy;
	    dst[10] = far / dz;
	    dst[11] = -1;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = near * far / dz;
	    dst[15] = 0;

	    return dst;
	  }

	  /**
	   * Computes a 4-by-4 look-at transformation.
	   *
	   * This is a matrix which positions the camera itself. If you want
	   * a view matrix (a matrix which moves things in front of the camera)
	   * take the inverse of this.
	   *
	   * @param {Vec3} eye The position of the eye.
	   * @param {Vec3} target The position meant to be viewed.
	   * @param {Vec3} up A vector pointing up.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The look-at matrix.
	   * @memberOf module:twgl/m4
	   */
	  function lookAt(eye, target, up, dst) {
	    dst = dst || new MatType(16);

	    var xAxis = tempV3a;
	    var yAxis = tempV3b;
	    var zAxis = tempV3c;

	    v3.normalize(v3.subtract(eye, target, zAxis), zAxis);
	    v3.normalize(v3.cross(up, zAxis, xAxis), xAxis);
	    v3.normalize(v3.cross(zAxis, xAxis, yAxis), yAxis);

	    dst[0] = xAxis[0];
	    dst[1] = xAxis[1];
	    dst[2] = xAxis[2];
	    dst[3] = 0;
	    dst[4] = yAxis[0];
	    dst[5] = yAxis[1];
	    dst[6] = yAxis[2];
	    dst[7] = 0;
	    dst[8] = zAxis[0];
	    dst[9] = zAxis[1];
	    dst[10] = zAxis[2];
	    dst[11] = 0;
	    dst[12] = eye[0];
	    dst[13] = eye[1];
	    dst[14] = eye[2];
	    dst[15] = 1;

	    return dst;
	  }

	  /**
	   * Creates a 4-by-4 matrix which translates by the given vector v.
	   * @param {Vec3} v The vector by
	   *     which to translate.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The translation matrix.
	   * @memberOf module:twgl/m4
	   */
	  function translation(v, dst) {
	    dst = dst || new MatType(16);

	    dst[0] = 1;
	    dst[1] = 0;
	    dst[2] = 0;
	    dst[3] = 0;
	    dst[4] = 0;
	    dst[5] = 1;
	    dst[6] = 0;
	    dst[7] = 0;
	    dst[8] = 0;
	    dst[9] = 0;
	    dst[10] = 1;
	    dst[11] = 0;
	    dst[12] = v[0];
	    dst[13] = v[1];
	    dst[14] = v[2];
	    dst[15] = 1;
	    return dst;
	  }

	  /**
	   * Modifies the given 4-by-4 matrix by translation by the given vector v.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} v The vector by
	   *     which to translate.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function translate(m, v, dst) {
	    dst = dst || new MatType(16);

	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];
	    var m00 = m[0];
	    var m01 = m[1];
	    var m02 = m[2];
	    var m03 = m[3];
	    var m10 = m[1 * 4 + 0];
	    var m11 = m[1 * 4 + 1];
	    var m12 = m[1 * 4 + 2];
	    var m13 = m[1 * 4 + 3];
	    var m20 = m[2 * 4 + 0];
	    var m21 = m[2 * 4 + 1];
	    var m22 = m[2 * 4 + 2];
	    var m23 = m[2 * 4 + 3];
	    var m30 = m[3 * 4 + 0];
	    var m31 = m[3 * 4 + 1];
	    var m32 = m[3 * 4 + 2];
	    var m33 = m[3 * 4 + 3];

	    if (m !== dst) {
	      dst[0] = m00;
	      dst[1] = m01;
	      dst[2] = m02;
	      dst[3] = m03;
	      dst[4] = m10;
	      dst[5] = m11;
	      dst[6] = m12;
	      dst[7] = m13;
	      dst[8] = m20;
	      dst[9] = m21;
	      dst[10] = m22;
	      dst[11] = m23;
	    }

	    dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
	    dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
	    dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
	    dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;

	    return dst;
	  }

	  /**
	   * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The rotation matrix.
	   * @memberOf module:twgl/m4
	   */
	  function rotationX(angleInRadians, dst) {
	    dst = dst || new MatType(16);

	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);

	    dst[0] = 1;
	    dst[1] = 0;
	    dst[2] = 0;
	    dst[3] = 0;
	    dst[4] = 0;
	    dst[5] = c;
	    dst[6] = s;
	    dst[7] = 0;
	    dst[8] = 0;
	    dst[9] = -s;
	    dst[10] = c;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;

	    return dst;
	  }

	  /**
	   * Modifies the given 4-by-4 matrix by a rotation around the x-axis by the given
	   * angle.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function rotateX(m, angleInRadians, dst) {
	    dst = dst || new MatType(16);

	    var m10 = m[4];
	    var m11 = m[5];
	    var m12 = m[6];
	    var m13 = m[7];
	    var m20 = m[8];
	    var m21 = m[9];
	    var m22 = m[10];
	    var m23 = m[11];
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);

	    dst[4] = c * m10 + s * m20;
	    dst[5] = c * m11 + s * m21;
	    dst[6] = c * m12 + s * m22;
	    dst[7] = c * m13 + s * m23;
	    dst[8] = c * m20 - s * m10;
	    dst[9] = c * m21 - s * m11;
	    dst[10] = c * m22 - s * m12;
	    dst[11] = c * m23 - s * m13;

	    if (m !== dst) {
	      dst[0] = m[0];
	      dst[1] = m[1];
	      dst[2] = m[2];
	      dst[3] = m[3];
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }

	    return dst;
	  }

	  /**
	   * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The rotation matrix.
	   * @memberOf module:twgl/m4
	   */
	  function rotationY(angleInRadians, dst) {
	    dst = dst || new MatType(16);

	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);

	    dst[0] = c;
	    dst[1] = 0;
	    dst[2] = -s;
	    dst[3] = 0;
	    dst[4] = 0;
	    dst[5] = 1;
	    dst[6] = 0;
	    dst[7] = 0;
	    dst[8] = s;
	    dst[9] = 0;
	    dst[10] = c;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;

	    return dst;
	  }

	  /**
	   * Modifies the given 4-by-4 matrix by a rotation around the y-axis by the given
	   * angle.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function rotateY(m, angleInRadians, dst) {
	    dst = dst || new MatType(16);

	    var m00 = m[0 * 4 + 0];
	    var m01 = m[0 * 4 + 1];
	    var m02 = m[0 * 4 + 2];
	    var m03 = m[0 * 4 + 3];
	    var m20 = m[2 * 4 + 0];
	    var m21 = m[2 * 4 + 1];
	    var m22 = m[2 * 4 + 2];
	    var m23 = m[2 * 4 + 3];
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);

	    dst[0] = c * m00 - s * m20;
	    dst[1] = c * m01 - s * m21;
	    dst[2] = c * m02 - s * m22;
	    dst[3] = c * m03 - s * m23;
	    dst[8] = c * m20 + s * m00;
	    dst[9] = c * m21 + s * m01;
	    dst[10] = c * m22 + s * m02;
	    dst[11] = c * m23 + s * m03;

	    if (m !== dst) {
	      dst[4] = m[4];
	      dst[5] = m[5];
	      dst[6] = m[6];
	      dst[7] = m[7];
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }

	    return dst;
	  }

	  /**
	   * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The rotation matrix.
	   * @memberOf module:twgl/m4
	   */
	  function rotationZ(angleInRadians, dst) {
	    dst = dst || new MatType(16);

	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);

	    dst[0] = c;
	    dst[1] = s;
	    dst[2] = 0;
	    dst[3] = 0;
	    dst[4] = -s;
	    dst[5] = c;
	    dst[6] = 0;
	    dst[7] = 0;
	    dst[8] = 0;
	    dst[9] = 0;
	    dst[10] = 1;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;

	    return dst;
	  }

	  /**
	   * Modifies the given 4-by-4 matrix by a rotation around the z-axis by the given
	   * angle.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function rotateZ(m, angleInRadians, dst) {
	    dst = dst || new MatType(16);

	    var m00 = m[0 * 4 + 0];
	    var m01 = m[0 * 4 + 1];
	    var m02 = m[0 * 4 + 2];
	    var m03 = m[0 * 4 + 3];
	    var m10 = m[1 * 4 + 0];
	    var m11 = m[1 * 4 + 1];
	    var m12 = m[1 * 4 + 2];
	    var m13 = m[1 * 4 + 3];
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);

	    dst[0] = c * m00 + s * m10;
	    dst[1] = c * m01 + s * m11;
	    dst[2] = c * m02 + s * m12;
	    dst[3] = c * m03 + s * m13;
	    dst[4] = c * m10 - s * m00;
	    dst[5] = c * m11 - s * m01;
	    dst[6] = c * m12 - s * m02;
	    dst[7] = c * m13 - s * m03;

	    if (m !== dst) {
	      dst[8] = m[8];
	      dst[9] = m[9];
	      dst[10] = m[10];
	      dst[11] = m[11];
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }

	    return dst;
	  }

	  /**
	   * Creates a 4-by-4 matrix which rotates around the given axis by the given
	   * angle.
	   * @param {Vec3} axis The axis
	   *     about which to rotate.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} A matrix which rotates angle radians
	   *     around the axis.
	   * @memberOf module:twgl/m4
	   */
	  function axisRotation(axis, angleInRadians, dst) {
	    dst = dst || new MatType(16);

	    var x = axis[0];
	    var y = axis[1];
	    var z = axis[2];
	    var n = Math.sqrt(x * x + y * y + z * z);
	    x /= n;
	    y /= n;
	    z /= n;
	    var xx = x * x;
	    var yy = y * y;
	    var zz = z * z;
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	    var oneMinusCosine = 1 - c;

	    dst[0] = xx + (1 - xx) * c;
	    dst[1] = x * y * oneMinusCosine + z * s;
	    dst[2] = x * z * oneMinusCosine - y * s;
	    dst[3] = 0;
	    dst[4] = x * y * oneMinusCosine - z * s;
	    dst[5] = yy + (1 - yy) * c;
	    dst[6] = y * z * oneMinusCosine + x * s;
	    dst[7] = 0;
	    dst[8] = x * z * oneMinusCosine + y * s;
	    dst[9] = y * z * oneMinusCosine - x * s;
	    dst[10] = zz + (1 - zz) * c;
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;

	    return dst;
	  }

	  /**
	   * Modifies the given 4-by-4 matrix by rotation around the given axis by the
	   * given angle.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} axis The axis
	   *     about which to rotate.
	   * @param {number} angleInRadians The angle by which to rotate (in radians).
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function axisRotate(m, axis, angleInRadians, dst) {
	    dst = dst || new MatType(16);

	    var x = axis[0];
	    var y = axis[1];
	    var z = axis[2];
	    var n = Math.sqrt(x * x + y * y + z * z);
	    x /= n;
	    y /= n;
	    z /= n;
	    var xx = x * x;
	    var yy = y * y;
	    var zz = z * z;
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	    var oneMinusCosine = 1 - c;

	    var r00 = xx + (1 - xx) * c;
	    var r01 = x * y * oneMinusCosine + z * s;
	    var r02 = x * z * oneMinusCosine - y * s;
	    var r10 = x * y * oneMinusCosine - z * s;
	    var r11 = yy + (1 - yy) * c;
	    var r12 = y * z * oneMinusCosine + x * s;
	    var r20 = x * z * oneMinusCosine + y * s;
	    var r21 = y * z * oneMinusCosine - x * s;
	    var r22 = zz + (1 - zz) * c;

	    var m00 = m[0];
	    var m01 = m[1];
	    var m02 = m[2];
	    var m03 = m[3];
	    var m10 = m[4];
	    var m11 = m[5];
	    var m12 = m[6];
	    var m13 = m[7];
	    var m20 = m[8];
	    var m21 = m[9];
	    var m22 = m[10];
	    var m23 = m[11];

	    dst[0] = r00 * m00 + r01 * m10 + r02 * m20;
	    dst[1] = r00 * m01 + r01 * m11 + r02 * m21;
	    dst[2] = r00 * m02 + r01 * m12 + r02 * m22;
	    dst[3] = r00 * m03 + r01 * m13 + r02 * m23;
	    dst[4] = r10 * m00 + r11 * m10 + r12 * m20;
	    dst[5] = r10 * m01 + r11 * m11 + r12 * m21;
	    dst[6] = r10 * m02 + r11 * m12 + r12 * m22;
	    dst[7] = r10 * m03 + r11 * m13 + r12 * m23;
	    dst[8] = r20 * m00 + r21 * m10 + r22 * m20;
	    dst[9] = r20 * m01 + r21 * m11 + r22 * m21;
	    dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
	    dst[11] = r20 * m03 + r21 * m13 + r22 * m23;

	    if (m !== dst) {
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }

	    return dst;
	  }

	  /**
	   * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
	   * the corresponding entry in the given vector; assumes the vector has three
	   * entries.
	   * @param {Vec3} v A vector of
	   *     three entries specifying the factor by which to scale in each dimension.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} The scaling matrix.
	   * @memberOf module:twgl/m4
	   */
	  function scaling(v, dst) {
	    dst = dst || new MatType(16);

	    dst[0] = v[0];
	    dst[1] = 0;
	    dst[2] = 0;
	    dst[3] = 0;
	    dst[4] = 0;
	    dst[5] = v[1];
	    dst[6] = 0;
	    dst[7] = 0;
	    dst[8] = 0;
	    dst[9] = 0;
	    dst[10] = v[2];
	    dst[11] = 0;
	    dst[12] = 0;
	    dst[13] = 0;
	    dst[14] = 0;
	    dst[15] = 1;

	    return dst;
	  }

	  /**
	   * Modifies the given 4-by-4 matrix, scaling in each dimension by an amount
	   * given by the corresponding entry in the given vector; assumes the vector has
	   * three entries.
	   * @param {module:twgl/m4.Mat4} m The matrix to be modified.
	   * @param {Vec3} v A vector of three entries specifying the
	   *     factor by which to scale in each dimension.
	   * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
	   * @return {module:twgl/m4.Mat4} m once modified.
	   * @memberOf module:twgl/m4
	   */
	  function scale(m, v, dst) {
	    dst = dst || new MatType(16);

	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];

	    dst[0] = v0 * m[0 * 4 + 0];
	    dst[1] = v0 * m[0 * 4 + 1];
	    dst[2] = v0 * m[0 * 4 + 2];
	    dst[3] = v0 * m[0 * 4 + 3];
	    dst[4] = v1 * m[1 * 4 + 0];
	    dst[5] = v1 * m[1 * 4 + 1];
	    dst[6] = v1 * m[1 * 4 + 2];
	    dst[7] = v1 * m[1 * 4 + 3];
	    dst[8] = v2 * m[2 * 4 + 0];
	    dst[9] = v2 * m[2 * 4 + 1];
	    dst[10] = v2 * m[2 * 4 + 2];
	    dst[11] = v2 * m[2 * 4 + 3];

	    if (m !== dst) {
	      dst[12] = m[12];
	      dst[13] = m[13];
	      dst[14] = m[14];
	      dst[15] = m[15];
	    }

	    return dst;
	  }

	  /**
	   * Takes a 4-by-4 matrix and a vector with 3 entries,
	   * interprets the vector as a point, transforms that point by the matrix, and
	   * returns the result as a vector with 3 entries.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} v The point.
	   * @param {Vec3} dst optional vec3 to store result
	   * @return {Vec3} dst or new vec3 if not provided
	   * @memberOf module:twgl/m4
	   */
	  function transformPoint(m, v, dst) {
	    dst = dst || v3.create();
	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];
	    var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];

	    dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
	    dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
	    dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;

	    return dst;
	  }

	  /**
	   * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
	   * direction, transforms that direction by the matrix, and returns the result;
	   * assumes the transformation of 3-dimensional space represented by the matrix
	   * is parallel-preserving, i.e. any combination of rotation, scaling and
	   * translation, but not a perspective distortion. Returns a vector with 3
	   * entries.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} v The direction.
	   * @param {Vec3} dst optional Vec3 to store result
	   * @return {Vec3} dst or new Vec3 if not provided
	   * @memberOf module:twgl/m4
	   */
	  function transformDirection(m, v, dst) {
	    dst = dst || v3.create();

	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];

	    dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
	    dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
	    dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];

	    return dst;
	  }

	  /**
	   * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
	   * as a normal to a surface, and computes a vector which is normal upon
	   * transforming that surface by the matrix. The effect of this function is the
	   * same as transforming v (as a direction) by the inverse-transpose of m.  This
	   * function assumes the transformation of 3-dimensional space represented by the
	   * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
	   * translation, but not a perspective distortion.  Returns a vector with 3
	   * entries.
	   * @param {module:twgl/m4.Mat4} m The matrix.
	   * @param {Vec3} v The normal.
	   * @param {Vec3} [dst] The direction.
	   * @return {Vec3} The transformed direction.
	   * @memberOf module:twgl/m4
	   */
	  function transformNormal(m, v, dst) {
	    dst = dst || v3.create();
	    var mi = inverse(m);
	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];

	    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
	    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
	    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];

	    return dst;
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "axisRotate": axisRotate,
	    "axisRotation": axisRotation,
	    "create": identity,
	    "copy": copy,
	    "frustum": frustum,
	    "getAxis": getAxis,
	    "getTranslation": getTranslation,
	    "identity": identity,
	    "inverse": inverse,
	    "lookAt": lookAt,
	    "multiply": multiply,
	    "negate": negate,
	    "ortho": ortho,
	    "perspective": perspective,
	    "rotateX": rotateX,
	    "rotateY": rotateY,
	    "rotateZ": rotateZ,
	    "rotateAxis": axisRotate,
	    "rotationX": rotationX,
	    "rotationY": rotationY,
	    "rotationZ": rotationZ,
	    "scale": scale,
	    "scaling": scaling,
	    "setAxis": setAxis,
	    "setDefaultType": setDefaultType,
	    "setTranslation": setTranslation,
	    "transformDirection": transformDirection,
	    "transformNormal": transformNormal,
	    "transformPoint": transformPoint,
	    "translate": translate,
	    "translation": translation,
	    "transpose": transpose
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  "use strict";

	  /**
	   *
	   * Vec3 math math functions.
	   *
	   * Almost all functions take an optional `dst` argument. If it is not passed in the
	   * functions will create a new Vec3. In other words you can do this
	   *
	   *     var v = v3.cross(v1, v2);  // Creates a new Vec3 with the cross product of v1 x v2.
	   *
	   * or
	   *
	   *     var v3 = v3.create();
	   *     v3.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
	   *
	   * The first style is often easier but depending on where it's used it generates garbage where
	   * as there is almost never allocation with the second style.
	   *
	   * It is always save to pass any vector as the destination. So for example
	   *
	   *     v3.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
	   *
	   * @module twgl/v3
	   */

	  var VecType = Float32Array;

	  /**
	   * A JavaScript array with 3 values or a Float32Array with 3 values.
	   * When created by the library will create the default type which is `Float32Array`
	   * but can be set by calling {@link module:twgl/v3.setDefaultType}.
	   * @typedef {(number[]|Float32Array)} Vec3
	   * @memberOf module:twgl/v3
	   */

	  /**
	   * Sets the type this library creates for a Vec3
	   * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
	   * @return {constructor} previous constructor for Vec3
	   */
	  function setDefaultType(ctor) {
	    var oldType = VecType;
	    VecType = ctor;
	    return oldType;
	  }

	  /**
	   * Creates a vec3; may be called with x, y, z to set initial values.
	   * @return {Vec3} the created vector
	   * @memberOf module:twgl/v3
	   */
	  function create(x, y, z) {
	    var dst = new VecType(3);
	    if (x) {
	      dst[0] = x;
	    }
	    if (y) {
	      dst[1] = y;
	    }
	    if (z) {
	      dst[2] = z;
	    }
	    return dst;
	  }

	  /**
	   * Adds two vectors; assumes a and b have the same dimension.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @memberOf module:twgl/v3
	   */
	  function add(a, b, dst) {
	    dst = dst || new VecType(3);

	    dst[0] = a[0] + b[0];
	    dst[1] = a[1] + b[1];
	    dst[2] = a[2] + b[2];

	    return dst;
	  }

	  /**
	   * Subtracts two vectors.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @memberOf module:twgl/v3
	   */
	  function subtract(a, b, dst) {
	    dst = dst || new VecType(3);

	    dst[0] = a[0] - b[0];
	    dst[1] = a[1] - b[1];
	    dst[2] = a[2] - b[2];

	    return dst;
	  }

	  /**
	   * Performs linear interpolation on two vectors.
	   * Given vectors a and b and interpolation coefficient t, returns
	   * (1 - t) * a + t * b.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {number} t Interpolation coefficient.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @memberOf module:twgl/v3
	   */
	  function lerp(a, b, t, dst) {
	    dst = dst || new VecType(3);

	    dst[0] = (1 - t) * a[0] + t * b[0];
	    dst[1] = (1 - t) * a[1] + t * b[1];
	    dst[2] = (1 - t) * a[2] + t * b[2];

	    return dst;
	  }

	  /**
	   * Mutiplies a vector by a scalar.
	   * @param {module:twgl/v3.Vec3} v The vector.
	   * @param {number} k The scalar.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} dst.
	   * @memberOf module:twgl/v3
	   */
	  function mulScalar(v, k, dst) {
	    dst = dst || new VecType(3);

	    dst[0] = v[0] * k;
	    dst[1] = v[1] * k;
	    dst[2] = v[2] * k;

	    return dst;
	  }

	  /**
	   * Divides a vector by a scalar.
	   * @param {module:twgl/v3.Vec3} v The vector.
	   * @param {number} k The scalar.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} dst.
	   * @memberOf module:twgl/v3
	   */
	  function divScalar(v, k, dst) {
	    dst = dst || new VecType(3);

	    dst[0] = v[0] / k;
	    dst[1] = v[1] / k;
	    dst[2] = v[2] / k;

	    return dst;
	  }

	  /**
	   * Computes the cross product of two vectors; assumes both vectors have
	   * three entries.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} The vector a cross b.
	   * @memberOf module:twgl/v3
	   */
	  function cross(a, b, dst) {
	    dst = dst || new VecType(3);

	    var t1 = a[2] * b[0] - a[0] * b[2];
	    var t2 = a[0] * b[1] - a[1] * b[0];
	    dst[0] = a[1] * b[2] - a[2] * b[1];
	    dst[1] = t1;
	    dst[2] = t2;

	    return dst;
	  }

	  /**
	   * Computes the dot product of two vectors; assumes both vectors have
	   * three entries.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @return {number} dot product
	   * @memberOf module:twgl/v3
	   */
	  function dot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }

	  /**
	   * Computes the length of vector
	   * @param {module:twgl/v3.Vec3} v vector.
	   * @return {number} length of vector.
	   * @memberOf module:twgl/v3
	   */
	  function length(v) {
	    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
	  }

	  /**
	   * Computes the square of the length of vector
	   * @param {module:twgl/v3.Vec3} v vector.
	   * @return {number} square of the length of vector.
	   * @memberOf module:twgl/v3
	   */
	  function lengthSq(v) {
	    return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
	  }

	  /**
	   * Computes the distance between 2 points
	   * @param {module:twgl/v3.Vec3} a vector.
	   * @param {module:twgl/v3.Vec3} b vector.
	   * @return {number} distance between a and b
	   * @memberOf module:twgl/v3
	   */
	  function distance(a, b) {
	    var dx = a[0] - b[0];
	    var dy = a[1] - b[1];
	    var dz = a[2] - b[2];
	    return Math.sqrt(dx * dx + dy * dy + dz * dz);
	  }

	  /**
	   * Computes the square of the distance between 2 points
	   * @param {module:twgl/v3.Vec3} a vector.
	   * @param {module:twgl/v3.Vec3} b vector.
	   * @return {number} square of the distance between a and b
	   * @memberOf module:twgl/v3
	   */
	  function distanceSq(a, b) {
	    var dx = a[0] - b[0];
	    var dy = a[1] - b[1];
	    var dz = a[2] - b[2];
	    return dx * dx + dy * dy + dz * dz;
	  }

	  /**
	   * Divides a vector by its Euclidean length and returns the quotient.
	   * @param {module:twgl/v3.Vec3} a The vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} The normalized vector.
	   * @memberOf module:twgl/v3
	   */
	  function normalize(a, dst) {
	    dst = dst || new VecType(3);

	    var lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
	    var len = Math.sqrt(lenSq);
	    if (len > 0.00001) {
	      dst[0] = a[0] / len;
	      dst[1] = a[1] / len;
	      dst[2] = a[2] / len;
	    } else {
	      dst[0] = 0;
	      dst[1] = 0;
	      dst[2] = 0;
	    }

	    return dst;
	  }

	  /**
	   * Negates a vector.
	   * @param {module:twgl/v3.Vec3} v The vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} -v.
	   * @memberOf module:twgl/v3
	   */
	  function negate(v, dst) {
	    dst = dst || new VecType(3);

	    dst[0] = -v[0];
	    dst[1] = -v[1];
	    dst[2] = -v[2];

	    return dst;
	  }

	  /**
	   * Copies a vector.
	   * @param {module:twgl/v3.Vec3} v The vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} A copy of v.
	   * @memberOf module:twgl/v3
	   */
	  function copy(v, dst) {
	    dst = dst || new VecType(3);

	    dst[0] = v[0];
	    dst[1] = v[1];
	    dst[2] = v[2];

	    return dst;
	  }

	  /**
	   * Multiplies a vector by another vector (component-wise); assumes a and
	   * b have the same length.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} The vector of products of entries of a and
	   *     b.
	   * @memberOf module:twgl/v3
	   */
	  function multiply(a, b, dst) {
	    dst = dst || new VecType(3);

	    dst[0] = a[0] * b[0];
	    dst[1] = a[1] * b[1];
	    dst[2] = a[2] * b[2];

	    return dst;
	  }

	  /**
	   * Divides a vector by another vector (component-wise); assumes a and
	   * b have the same length.
	   * @param {module:twgl/v3.Vec3} a Operand vector.
	   * @param {module:twgl/v3.Vec3} b Operand vector.
	   * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
	   * @return {module:twgl/v3.Vec3} The vector of quotients of entries of a and
	   *     b.
	   * @memberOf module:twgl/v3
	   */
	  function divide(a, b, dst) {
	    dst = dst || new VecType(3);

	    dst[0] = a[0] / b[0];
	    dst[1] = a[1] / b[1];
	    dst[2] = a[2] / b[2];

	    return dst;
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "add": add,
	    "copy": copy,
	    "create": create,
	    "cross": cross,
	    "distance": distance,
	    "distanceSq": distanceSq,
	    "divide": divide,
	    "divScalar": divScalar,
	    "dot": dot,
	    "lerp": lerp,
	    "length": length,
	    "lengthSq": lengthSq,
	    "mulScalar": mulScalar,
	    "multiply": multiply,
	    "negate": negate,
	    "normalize": normalize,
	    "setDefaultType": setDefaultType,
	    "subtract": subtract
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*
	 * Copyright 2015, Gregg Tavares.
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are
	 * met:
	 *
	 *     * Redistributions of source code must retain the above copyright
	 * notice, this list of conditions and the following disclaimer.
	 *     * Redistributions in binary form must reproduce the above
	 * copyright notice, this list of conditions and the following disclaimer
	 * in the documentation and/or other materials provided with the
	 * distribution.
	 *     * Neither the name of Gregg Tavares. nor the names of his
	 * contributors may be used to endorse or promote products derived from
	 * this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	/**
	 * Various functions to make simple primitives
	 *
	 * note: Most primitive functions come in 3 styles
	 *
	 * *  `createSomeShapeBufferInfo`
	 *
	 *    These functions are almost always the functions you want to call. They
	 *    create vertices then make WebGLBuffers and create {@link module:twgl.AttribInfo}s
	 *    returing a {@link module:twgl.BufferInfo} you can pass to {@link module:twgl.setBuffersAndAttributes}
	 *    and {@link module:twgl.drawBufferInfo} etc...
	 *
	 * *  `createSomeShapeBuffers`
	 *
	 *    These create WebGLBuffers and put your data in them but nothing else.
	 *    It's a shortcut to doing it yourself if you don't want to use
	 *    the higher level functions.
	 *
	 * *  `createSomeShapeVertices`
	 *
	 *    These just create vertices, no buffers. This allows you to manipulate the vertices
	 *    or add more data before generating a {@link module:twgl.BufferInfo}. Once you're finished
	 *    manipulating the vertices call {@link module:twgl.createBufferInfoFromArrays}.
	 *
	 *    example:
	 *
	 *        var arrays = twgl.primitives.createPlaneArrays(1);
	 *        twgl.primitives.reorientVertices(arrays, m4.rotationX(Math.PI * 0.5));
	 *        var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
	 *
	 * @module twgl/primitives
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(4), __webpack_require__(10), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (attributes, utils, m4, v3) {
	  "use strict";

	  var getArray = attributes.getArray_; // eslint-disable-line
	  var getNumComponents = attributes.getNumComponents_; // eslint-disable-line

	  /**
	   * Add `push` to a typed array. It just keeps a 'cursor'
	   * and allows use to `push` values into the array so we
	   * don't have to manually compute offsets
	   * @param {TypedArray} typedArray TypedArray to augment
	   * @param {number} numComponents number of components.
	   */
	  function augmentTypedArray(typedArray, numComponents) {
	    var cursor = 0;
	    typedArray.push = function () {
	      for (var ii = 0; ii < arguments.length; ++ii) {
	        var value = arguments[ii];
	        if (value instanceof Array || value.buffer && value.buffer instanceof ArrayBuffer) {
	          for (var jj = 0; jj < value.length; ++jj) {
	            typedArray[cursor++] = value[jj];
	          }
	        } else {
	          typedArray[cursor++] = value;
	        }
	      }
	    };
	    typedArray.reset = function (opt_index) {
	      cursor = opt_index || 0;
	    };
	    typedArray.numComponents = numComponents;
	    Object.defineProperty(typedArray, 'numElements', {
	      get: function get() {
	        return this.length / this.numComponents | 0;
	      }
	    });
	    return typedArray;
	  }

	  /**
	   * creates a typed array with a `push` function attached
	   * so that you can easily *push* values.
	   *
	   * `push` can take multiple arguments. If an argument is an array each element
	   * of the array will be added to the typed array.
	   *
	   * Example:
	   *
	   *     var array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
	   *     array.push(1, 2, 3);
	   *     array.push([4, 5, 6]);
	   *     // array now contains [1, 2, 3, 4, 5, 6]
	   *
	   * Also has `numComponents` and `numElements` properties.
	   *
	   * @param {number} numComponents number of components
	   * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
	   * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
	   * @return {ArrayBuffer} A typed array.
	   * @memberOf module:twgl/primitives
	   */
	  function createAugmentedTypedArray(numComponents, numElements, opt_type) {
	    var Type = opt_type || Float32Array;
	    return augmentTypedArray(new Type(numComponents * numElements), numComponents);
	  }

	  function allButIndices(name) {
	    return name !== "indices";
	  }

	  /**
	   * Given indexed vertices creates a new set of vertices unindexed by expanding the indexed vertices.
	   * @param {Object.<string, TypedArray>} vertices The indexed vertices to deindex
	   * @return {Object.<string, TypedArray>} The deindexed vertices
	   * @memberOf module:twgl/primitives
	   */
	  function deindexVertices(vertices) {
	    var indices = vertices.indices;
	    var newVertices = {};
	    var numElements = indices.length;

	    function expandToUnindexed(channel) {
	      var srcBuffer = vertices[channel];
	      var numComponents = srcBuffer.numComponents;
	      var dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);
	      for (var ii = 0; ii < numElements; ++ii) {
	        var ndx = indices[ii];
	        var offset = ndx * numComponents;
	        for (var jj = 0; jj < numComponents; ++jj) {
	          dstBuffer.push(srcBuffer[offset + jj]);
	        }
	      }
	      newVertices[channel] = dstBuffer;
	    }

	    Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);

	    return newVertices;
	  }

	  /**
	   * flattens the normals of deindexed vertices in place.
	   * @param {Object.<string, TypedArray>} vertices The deindexed vertices who's normals to flatten
	   * @return {Object.<string, TypedArray>} The flattened vertices (same as was passed in)
	   * @memberOf module:twgl/primitives
	   */
	  function flattenNormals(vertices) {
	    if (vertices.indices) {
	      throw "can't flatten normals of indexed vertices. deindex them first";
	    }

	    var normals = vertices.normal;
	    var numNormals = normals.length;
	    for (var ii = 0; ii < numNormals; ii += 9) {
	      // pull out the 3 normals for this triangle
	      var nax = normals[ii + 0];
	      var nay = normals[ii + 1];
	      var naz = normals[ii + 2];

	      var nbx = normals[ii + 3];
	      var nby = normals[ii + 4];
	      var nbz = normals[ii + 5];

	      var ncx = normals[ii + 6];
	      var ncy = normals[ii + 7];
	      var ncz = normals[ii + 8];

	      // add them
	      var nx = nax + nbx + ncx;
	      var ny = nay + nby + ncy;
	      var nz = naz + nbz + ncz;

	      // normalize them
	      var length = Math.sqrt(nx * nx + ny * ny + nz * nz);

	      nx /= length;
	      ny /= length;
	      nz /= length;

	      // copy them back in
	      normals[ii + 0] = nx;
	      normals[ii + 1] = ny;
	      normals[ii + 2] = nz;

	      normals[ii + 3] = nx;
	      normals[ii + 4] = ny;
	      normals[ii + 5] = nz;

	      normals[ii + 6] = nx;
	      normals[ii + 7] = ny;
	      normals[ii + 8] = nz;
	    }

	    return vertices;
	  }

	  function applyFuncToV3Array(array, matrix, fn) {
	    var len = array.length;
	    var tmp = new Float32Array(3);
	    for (var ii = 0; ii < len; ii += 3) {
	      fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
	      array[ii] = tmp[0];
	      array[ii + 1] = tmp[1];
	      array[ii + 2] = tmp[2];
	    }
	  }

	  function transformNormal(mi, v, dst) {
	    dst = dst || v3.create();
	    var v0 = v[0];
	    var v1 = v[1];
	    var v2 = v[2];

	    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
	    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
	    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];

	    return dst;
	  }

	  /**
	   * Reorients directions by the given matrix..
	   * @param {number[]|TypedArray} array The array. Assumes value floats per element.
	   * @param {Matrix} matrix A matrix to multiply by.
	   * @return {number[]|TypedArray} the same array that was passed in
	   * @memberOf module:twgl/primitives
	   */
	  function reorientDirections(array, matrix) {
	    applyFuncToV3Array(array, matrix, m4.transformDirection);
	    return array;
	  }

	  /**
	   * Reorients normals by the inverse-transpose of the given
	   * matrix..
	   * @param {number[]|TypedArray} array The array. Assumes value floats per element.
	   * @param {Matrix} matrix A matrix to multiply by.
	   * @return {number[]|TypedArray} the same array that was passed in
	   * @memberOf module:twgl/primitives
	   */
	  function reorientNormals(array, matrix) {
	    applyFuncToV3Array(array, m4.inverse(matrix), transformNormal);
	    return array;
	  }

	  /**
	   * Reorients positions by the given matrix. In other words, it
	   * multiplies each vertex by the given matrix.
	   * @param {number[]|TypedArray} array The array. Assumes value floats per element.
	   * @param {Matrix} matrix A matrix to multiply by.
	   * @return {number[]|TypedArray} the same array that was passed in
	   * @memberOf module:twgl/primitives
	   */
	  function reorientPositions(array, matrix) {
	    applyFuncToV3Array(array, matrix, m4.transformPoint);
	    return array;
	  }

	  /**
	   * Reorients arrays by the given matrix. Assumes arrays have
	   * names that contains 'pos' could be reoriented as positions,
	   * 'binorm' or 'tan' as directions, and 'norm' as normals.
	   *
	   * @param {Object.<string, (number[]|TypedArray)>} arrays The vertices to reorient
	   * @param {Matrix} matrix matrix to reorient by.
	   * @return {Object.<string, (number[]|TypedArray)>} same arrays that were passed in.
	   * @memberOf module:twgl/primitives
	   */
	  function reorientVertices(arrays, matrix) {
	    Object.keys(arrays).forEach(function (name) {
	      var array = arrays[name];
	      if (name.indexOf("pos") >= 0) {
	        reorientPositions(array, matrix);
	      } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
	        reorientDirections(array, matrix);
	      } else if (name.indexOf("norm") >= 0) {
	        reorientNormals(array, matrix);
	      }
	    });
	    return arrays;
	  }

	  /**
	   * Creates XY quad BufferInfo
	   *
	   * The default with no parameters will return a 2x2 quad with values from -1 to +1.
	   * If you want a unit quad with that goes from 0 to 1 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
	   *
	   * If you want a unit quad centered above 0,0 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
	   * @param {number} [xOffset] the amount to offset the quad in X
	   * @param {number} [yOffset] the amount to offset the quad in Y
	   * @return {Object.<string, WebGLBuffer>} the created XY Quad BufferInfo
	   * @memberOf module:twgl/primitives
	   * @function createXYQuadBufferInfo
	   */

	  /**
	   * Creates XY quad Buffers
	   *
	   * The default with no parameters will return a 2x2 quad with values from -1 to +1.
	   * If you want a unit quad with that goes from 0 to 1 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
	   *
	   * If you want a unit quad centered above 0,0 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
	   * @param {number} [xOffset] the amount to offset the quad in X
	   * @param {number} [yOffset] the amount to offset the quad in Y
	   * @return {module:twgl.BufferInfo} the created XY Quad buffers
	   * @memberOf module:twgl/primitives
	   * @function createXYQuadBuffers
	   */

	  /**
	   * Creates XY quad vertices
	   *
	   * The default with no parameters will return a 2x2 quad with values from -1 to +1.
	   * If you want a unit quad with that goes from 0 to 1 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadVertices(1, 0.5, 0.5);
	   *
	   * If you want a unit quad centered above 0,0 you'd call it with
	   *
	   *     twgl.primitives.createXYQuadVertices(1, 0, 0.5);
	   *
	   * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
	   * @param {number} [xOffset] the amount to offset the quad in X
	   * @param {number} [yOffset] the amount to offset the quad in Y
	   * @return {Object.<string, TypedArray> the created XY Quad vertices
	   * @memberOf module:twgl/primitives
	   */
	  function createXYQuadVertices(size, xOffset, yOffset) {
	    size = size || 2;
	    xOffset = xOffset || 0;
	    yOffset = yOffset || 0;
	    size *= 0.5;
	    return {
	      position: {
	        numComponents: 2,
	        data: [xOffset + -1 * size, yOffset + -1 * size, xOffset + 1 * size, yOffset + -1 * size, xOffset + -1 * size, yOffset + 1 * size, xOffset + 1 * size, yOffset + 1 * size]
	      },
	      normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
	      texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
	      indices: [0, 1, 2, 2, 1, 3]
	    };
	  }

	  /**
	   * Creates XZ plane BufferInfo.
	   *
	   * The created plane has position, normal, and texcoord data
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [width] Width of the plane. Default = 1
	   * @param {number} [depth] Depth of the plane. Default = 1
	   * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
	   * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
	   * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
	   * @return {@module:twgl.BufferInfo} The created plane BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createPlaneBufferInfo
	   */

	  /**
	   * Creates XZ plane buffers.
	   *
	   * The created plane has position, normal, and texcoord data
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [width] Width of the plane. Default = 1
	   * @param {number} [depth] Depth of the plane. Default = 1
	   * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
	   * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
	   * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
	   * @return {Object.<string, WebGLBuffer>} The created plane buffers.
	   * @memberOf module:twgl/primitives
	   * @function createPlaneBuffers
	   */

	  /**
	   * Creates XZ plane vertices.
	   *
	   * The created plane has position, normal, and texcoord data
	   *
	   * @param {number} [width] Width of the plane. Default = 1
	   * @param {number} [depth] Depth of the plane. Default = 1
	   * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
	   * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
	   * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
	   * @return {Object.<string, TypedArray>} The created plane vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
	    width = width || 1;
	    depth = depth || 1;
	    subdivisionsWidth = subdivisionsWidth || 1;
	    subdivisionsDepth = subdivisionsDepth || 1;
	    matrix = matrix || m4.identity();

	    var numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);

	    for (var z = 0; z <= subdivisionsDepth; z++) {
	      for (var x = 0; x <= subdivisionsWidth; x++) {
	        var u = x / subdivisionsWidth;
	        var v = z / subdivisionsDepth;
	        positions.push(width * u - width * 0.5, 0, depth * v - depth * 0.5);
	        normals.push(0, 1, 0);
	        texcoords.push(u, v);
	      }
	    }

	    var numVertsAcross = subdivisionsWidth + 1;
	    var indices = createAugmentedTypedArray(3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);

	    for (var z = 0; z < subdivisionsDepth; z++) {
	      // eslint-disable-line
	      for (var x = 0; x < subdivisionsWidth; x++) {
	        // eslint-disable-line
	        // Make triangle 1 of quad.
	        indices.push((z + 0) * numVertsAcross + x, (z + 1) * numVertsAcross + x, (z + 0) * numVertsAcross + x + 1);

	        // Make triangle 2 of quad.
	        indices.push((z + 1) * numVertsAcross + x, (z + 1) * numVertsAcross + x + 1, (z + 0) * numVertsAcross + x + 1);
	      }
	    }

	    var arrays = reorientVertices({
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices
	    }, matrix);
	    return arrays;
	  }

	  /**
	   * Creates sphere BufferInfo.
	   *
	   * The created sphere has position, normal, and texcoord data
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius radius of the sphere.
	   * @param {number} subdivisionsAxis number of steps around the sphere.
	   * @param {number} subdivisionsHeight number of vertically on the sphere.
	   * @param {number} [opt_startLatitudeInRadians] where to start the
	   *     top of the sphere. Default = 0.
	   * @param {number} [opt_endLatitudeInRadians] Where to end the
	   *     bottom of the sphere. Default = Math.PI.
	   * @param {number} [opt_startLongitudeInRadians] where to start
	   *     wrapping the sphere. Default = 0.
	   * @param {number} [opt_endLongitudeInRadians] where to end
	   *     wrapping the sphere. Default = 2 * Math.PI.
	   * @return {module:twgl.BufferInfo} The created sphere BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createSphereBufferInfo
	   */

	  /**
	   * Creates sphere buffers.
	   *
	   * The created sphere has position, normal, and texcoord data
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius radius of the sphere.
	   * @param {number} subdivisionsAxis number of steps around the sphere.
	   * @param {number} subdivisionsHeight number of vertically on the sphere.
	   * @param {number} [opt_startLatitudeInRadians] where to start the
	   *     top of the sphere. Default = 0.
	   * @param {number} [opt_endLatitudeInRadians] Where to end the
	   *     bottom of the sphere. Default = Math.PI.
	   * @param {number} [opt_startLongitudeInRadians] where to start
	   *     wrapping the sphere. Default = 0.
	   * @param {number} [opt_endLongitudeInRadians] where to end
	   *     wrapping the sphere. Default = 2 * Math.PI.
	   * @return {Object.<string, WebGLBuffer>} The created sphere buffers.
	   * @memberOf module:twgl/primitives
	   * @function createSphereBuffers
	   */

	  /**
	   * Creates sphere vertices.
	   *
	   * The created sphere has position, normal, and texcoord data
	   *
	   * @param {number} radius radius of the sphere.
	   * @param {number} subdivisionsAxis number of steps around the sphere.
	   * @param {number} subdivisionsHeight number of vertically on the sphere.
	   * @param {number} [opt_startLatitudeInRadians] where to start the
	   *     top of the sphere. Default = 0.
	   * @param {number} [opt_endLatitudeInRadians] Where to end the
	   *     bottom of the sphere. Default = Math.PI.
	   * @param {number} [opt_startLongitudeInRadians] where to start
	   *     wrapping the sphere. Default = 0.
	   * @param {number} [opt_endLongitudeInRadians] where to end
	   *     wrapping the sphere. Default = 2 * Math.PI.
	   * @return {Object.<string, TypedArray>} The created sphere vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
	    if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
	      throw Error('subdivisionAxis and subdivisionHeight must be > 0');
	    }

	    opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
	    opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
	    opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
	    opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;

	    var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
	    var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;

	    // We are going to generate our sphere by iterating through its
	    // spherical coordinates and generating 2 triangles for each quad on a
	    // ring of the sphere.
	    var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);

	    // Generate the individual vertices in our vertex buffer.
	    for (var y = 0; y <= subdivisionsHeight; y++) {
	      for (var x = 0; x <= subdivisionsAxis; x++) {
	        // Generate a vertex based on its spherical coordinates
	        var u = x / subdivisionsAxis;
	        var v = y / subdivisionsHeight;
	        var theta = longRange * u;
	        var phi = latRange * v;
	        var sinTheta = Math.sin(theta);
	        var cosTheta = Math.cos(theta);
	        var sinPhi = Math.sin(phi);
	        var cosPhi = Math.cos(phi);
	        var ux = cosTheta * sinPhi;
	        var uy = cosPhi;
	        var uz = sinTheta * sinPhi;
	        positions.push(radius * ux, radius * uy, radius * uz);
	        normals.push(ux, uy, uz);
	        texcoords.push(1 - u, v);
	      }
	    }

	    var numVertsAround = subdivisionsAxis + 1;
	    var indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
	    for (var x = 0; x < subdivisionsAxis; x++) {
	      // eslint-disable-line
	      for (var y = 0; y < subdivisionsHeight; y++) {
	        // eslint-disable-line
	        // Make triangle 1 of quad.
	        indices.push((y + 0) * numVertsAround + x, (y + 0) * numVertsAround + x + 1, (y + 1) * numVertsAround + x);

	        // Make triangle 2 of quad.
	        indices.push((y + 1) * numVertsAround + x, (y + 0) * numVertsAround + x + 1, (y + 1) * numVertsAround + x + 1);
	      }
	    }

	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices
	    };
	  }

	  /**
	   * Array of the indices of corners of each face of a cube.
	   * @type {Array.<number[]>}
	   */
	  var CUBE_FACE_INDICES = [[3, 7, 5, 1], // right
	  [6, 2, 0, 4], // left
	  [6, 7, 3, 2], // ??
	  [0, 1, 5, 4], // ??
	  [7, 6, 4, 5], // front
	  [2, 3, 1, 0]];

	  /**
	   * Creates a BufferInfo for a cube.
	   *
	   * The cube is created around the origin. (-size / 2, size / 2).
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [size] width, height and depth of the cube.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createCubeBufferInfo
	   */

	  /**
	   * Creates the buffers and indices for a cube.
	   *
	   * The cube is created around the origin. (-size / 2, size / 2).
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} [size] width, height and depth of the cube.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function createCubeBuffers
	   */

	  /**
	   * Creates the vertices and indices for a cube.
	   *
	   * The cube is created around the origin. (-size / 2, size / 2).
	   *
	   * @param {number} [size] width, height and depth of the cube.
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createCubeVertices(size) {
	    size = size || 1;
	    var k = size / 2;

	    var cornerVertices = [[-k, -k, -k], [+k, -k, -k], [-k, +k, -k], [+k, +k, -k], [-k, -k, +k], [+k, -k, +k], [-k, +k, +k], [+k, +k, +k]];

	    var faceNormals = [[+1, +0, +0], [-1, +0, +0], [+0, +1, +0], [+0, -1, +0], [+0, +0, +1], [+0, +0, -1]];

	    var uvCoords = [[1, 0], [0, 0], [0, 1], [1, 1]];

	    var numVertices = 6 * 4;
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);
	    var indices = createAugmentedTypedArray(3, 6 * 2, Uint16Array);

	    for (var f = 0; f < 6; ++f) {
	      var faceIndices = CUBE_FACE_INDICES[f];
	      for (var v = 0; v < 4; ++v) {
	        var position = cornerVertices[faceIndices[v]];
	        var normal = faceNormals[f];
	        var uv = uvCoords[v];

	        // Each face needs all four vertices because the normals and texture
	        // coordinates are not all the same.
	        positions.push(position);
	        normals.push(normal);
	        texcoords.push(uv);
	      }
	      // Two triangles make a square face.
	      var offset = 4 * f;
	      indices.push(offset + 0, offset + 1, offset + 2);
	      indices.push(offset + 0, offset + 2, offset + 3);
	    }

	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices
	    };
	  }

	  /**
	   * Creates a BufferInfo for a truncated cone, which is like a cylinder
	   * except that it has different top and bottom radii. A truncated cone
	   * can also be used to create cylinders and regular cones. The
	   * truncated cone will be created centered about the origin, with the
	   * y axis as its vertical axis.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} bottomRadius Bottom radius of truncated cone.
	   * @param {number} topRadius Top radius of truncated cone.
	   * @param {number} height Height of truncated cone.
	   * @param {number} radialSubdivisions The number of subdivisions around the
	   *     truncated cone.
	   * @param {number} verticalSubdivisions The number of subdivisions down the
	   *     truncated cone.
	   * @param {boolean} [opt_topCap] Create top cap. Default = true.
	   * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
	   * @return {module:twgl.BufferInfo} The created cone BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createTruncatedConeBufferInfo
	   */

	  /**
	   * Creates buffers for a truncated cone, which is like a cylinder
	   * except that it has different top and bottom radii. A truncated cone
	   * can also be used to create cylinders and regular cones. The
	   * truncated cone will be created centered about the origin, with the
	   * y axis as its vertical axis.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} bottomRadius Bottom radius of truncated cone.
	   * @param {number} topRadius Top radius of truncated cone.
	   * @param {number} height Height of truncated cone.
	   * @param {number} radialSubdivisions The number of subdivisions around the
	   *     truncated cone.
	   * @param {number} verticalSubdivisions The number of subdivisions down the
	   *     truncated cone.
	   * @param {boolean} [opt_topCap] Create top cap. Default = true.
	   * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
	   * @return {Object.<string, WebGLBuffer>} The created cone buffers.
	   * @memberOf module:twgl/primitives
	   * @function createTruncatedConeBuffers
	   */

	  /**
	   * Creates vertices for a truncated cone, which is like a cylinder
	   * except that it has different top and bottom radii. A truncated cone
	   * can also be used to create cylinders and regular cones. The
	   * truncated cone will be created centered about the origin, with the
	   * y axis as its vertical axis. .
	   *
	   * @param {number} bottomRadius Bottom radius of truncated cone.
	   * @param {number} topRadius Top radius of truncated cone.
	   * @param {number} height Height of truncated cone.
	   * @param {number} radialSubdivisions The number of subdivisions around the
	   *     truncated cone.
	   * @param {number} verticalSubdivisions The number of subdivisions down the
	   *     truncated cone.
	   * @param {boolean} [opt_topCap] Create top cap. Default = true.
	   * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
	   * @return {Object.<string, TypedArray>} The created cone vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
	    if (radialSubdivisions < 3) {
	      throw Error('radialSubdivisions must be 3 or greater');
	    }

	    if (verticalSubdivisions < 1) {
	      throw Error('verticalSubdivisions must be 1 or greater');
	    }

	    var topCap = opt_topCap === undefined ? true : opt_topCap;
	    var bottomCap = opt_bottomCap === undefined ? true : opt_bottomCap;

	    var extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);

	    var numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);
	    var indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra) * 2, Uint16Array);

	    var vertsAroundEdge = radialSubdivisions + 1;

	    // The slant of the cone is constant across its surface
	    var slant = Math.atan2(bottomRadius - topRadius, height);
	    var cosSlant = Math.cos(slant);
	    var sinSlant = Math.sin(slant);

	    var start = topCap ? -2 : 0;
	    var end = verticalSubdivisions + (bottomCap ? 2 : 0);

	    for (var yy = start; yy <= end; ++yy) {
	      var v = yy / verticalSubdivisions;
	      var y = height * v;
	      var ringRadius;
	      if (yy < 0) {
	        y = 0;
	        v = 1;
	        ringRadius = bottomRadius;
	      } else if (yy > verticalSubdivisions) {
	        y = height;
	        v = 1;
	        ringRadius = topRadius;
	      } else {
	        ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
	      }
	      if (yy === -2 || yy === verticalSubdivisions + 2) {
	        ringRadius = 0;
	        v = 0;
	      }
	      y -= height / 2;
	      for (var ii = 0; ii < vertsAroundEdge; ++ii) {
	        var sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
	        var cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
	        positions.push(sin * ringRadius, y, cos * ringRadius);
	        normals.push(yy < 0 || yy > verticalSubdivisions ? 0 : sin * cosSlant, yy < 0 ? -1 : yy > verticalSubdivisions ? 1 : sinSlant, yy < 0 || yy > verticalSubdivisions ? 0 : cos * cosSlant);
	        texcoords.push(ii / radialSubdivisions, 1 - v);
	      }
	    }

	    for (var yy = 0; yy < verticalSubdivisions + extra; ++yy) {
	      // eslint-disable-line
	      for (var ii = 0; ii < radialSubdivisions; ++ii) {
	        // eslint-disable-line
	        indices.push(vertsAroundEdge * (yy + 0) + 0 + ii, vertsAroundEdge * (yy + 0) + 1 + ii, vertsAroundEdge * (yy + 1) + 1 + ii);
	        indices.push(vertsAroundEdge * (yy + 0) + 0 + ii, vertsAroundEdge * (yy + 1) + 1 + ii, vertsAroundEdge * (yy + 1) + 0 + ii);
	      }
	    }

	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices
	    };
	  }

	  /**
	   * Expands RLE data
	   * @param {number[]} rleData data in format of run-length, x, y, z, run-length, x, y, z
	   * @param {number[]} [padding] value to add each entry with.
	   * @return {number[]} the expanded rleData
	   */
	  function expandRLEData(rleData, padding) {
	    padding = padding || [];
	    var data = [];
	    for (var ii = 0; ii < rleData.length; ii += 4) {
	      var runLength = rleData[ii];
	      var element = rleData.slice(ii + 1, ii + 4);
	      element.push.apply(element, padding);
	      for (var jj = 0; jj < runLength; ++jj) {
	        data.push.apply(data, element);
	      }
	    }
	    return data;
	  }

	  /**
	   * Creates 3D 'F' BufferInfo.
	   * An 'F' is useful because you can easily tell which way it is oriented.
	   * The created 'F' has position, normal, texcoord, and color buffers.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function create3DFBufferInfo
	   */

	  /**
	   * Creates 3D 'F' buffers.
	   * An 'F' is useful because you can easily tell which way it is oriented.
	   * The created 'F' has position, normal, texcoord, and color buffers.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function create3DFBuffers
	   */

	  /**
	   * Creates 3D 'F' vertices.
	   * An 'F' is useful because you can easily tell which way it is oriented.
	   * The created 'F' has position, normal, texcoord, and color arrays.
	   *
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function create3DFVertices() {

	    var positions = [
	    // left column front
	    0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0,

	    // top rung front
	    30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0,

	    // middle rung front
	    30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0,

	    // left column back
	    0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30,

	    // top rung back
	    30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30,

	    // middle rung back
	    30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30,

	    // top
	    0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30,

	    // top rung front
	    100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30,

	    // under top rung
	    30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0,

	    // between top rung and middle
	    30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30,

	    // top of middle rung
	    30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30,

	    // front of middle rung
	    67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30,

	    // bottom of middle rung.
	    30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0,

	    // front of bottom
	    30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30,

	    // bottom
	    0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0,

	    // left side
	    0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0];

	    var texcoords = [
	    // left column front
	    0.22, 0.19, 0.22, 0.79, 0.34, 0.19, 0.22, 0.79, 0.34, 0.79, 0.34, 0.19,

	    // top rung front
	    0.34, 0.19, 0.34, 0.31, 0.62, 0.19, 0.34, 0.31, 0.62, 0.31, 0.62, 0.19,

	    // middle rung front
	    0.34, 0.43, 0.34, 0.55, 0.49, 0.43, 0.34, 0.55, 0.49, 0.55, 0.49, 0.43,

	    // left column back
	    0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,

	    // top rung back
	    0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,

	    // middle rung back
	    0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,

	    // top
	    0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1,

	    // top rung front
	    0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1,

	    // under top rung
	    0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0,

	    // between top rung and middle
	    0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,

	    // top of middle rung
	    0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,

	    // front of middle rung
	    0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,

	    // bottom of middle rung.
	    0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0,

	    // front of bottom
	    0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1,

	    // bottom
	    0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0,

	    // left side
	    0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0];

	    var normals = expandRLEData([
	    // left column front
	    // top rung front
	    // middle rung front
	    18, 0, 0, 1,

	    // left column back
	    // top rung back
	    // middle rung back
	    18, 0, 0, -1,

	    // top
	    6, 0, 1, 0,

	    // top rung front
	    6, 1, 0, 0,

	    // under top rung
	    6, 0, -1, 0,

	    // between top rung and middle
	    6, 1, 0, 0,

	    // top of middle rung
	    6, 0, 1, 0,

	    // front of middle rung
	    6, 1, 0, 0,

	    // bottom of middle rung.
	    6, 0, -1, 0,

	    // front of bottom
	    6, 1, 0, 0,

	    // bottom
	    6, 0, -1, 0,

	    // left side
	    6, -1, 0, 0]);

	    var colors = expandRLEData([
	    // left column front
	    // top rung front
	    // middle rung front
	    18, 200, 70, 120,

	    // left column back
	    // top rung back
	    // middle rung back
	    18, 80, 70, 200,

	    // top
	    6, 70, 200, 210,

	    // top rung front
	    6, 200, 200, 70,

	    // under top rung
	    6, 210, 100, 70,

	    // between top rung and middle
	    6, 210, 160, 70,

	    // top of middle rung
	    6, 70, 180, 210,

	    // front of middle rung
	    6, 100, 70, 210,

	    // bottom of middle rung.
	    6, 76, 210, 100,

	    // front of bottom
	    6, 140, 210, 80,

	    // bottom
	    6, 90, 130, 110,

	    // left side
	    6, 160, 160, 220], [255]);

	    var numVerts = positions.length / 3;

	    var arrays = {
	      position: createAugmentedTypedArray(3, numVerts),
	      texcoord: createAugmentedTypedArray(2, numVerts),
	      normal: createAugmentedTypedArray(3, numVerts),
	      color: createAugmentedTypedArray(4, numVerts, Uint8Array),
	      indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
	    };

	    arrays.position.push(positions);
	    arrays.texcoord.push(texcoords);
	    arrays.normal.push(normals);
	    arrays.color.push(colors);

	    for (var ii = 0; ii < numVerts; ++ii) {
	      arrays.indices.push(ii);
	    }

	    return arrays;
	  }

	  /**
	   * Creates cresent BufferInfo.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} verticalRadius The vertical radius of the cresent.
	   * @param {number} outerRadius The outer radius of the cresent.
	   * @param {number} innerRadius The inner radius of the cresent.
	   * @param {number} thickness The thickness of the cresent.
	   * @param {number} subdivisionsDown number of steps around the cresent.
	   * @param {number} subdivisionsThick number of vertically on the cresent.
	   * @param {number} [startOffset] Where to start arc. Default 0.
	   * @param {number} [endOffset] Where to end arg. Default 1.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createCresentBufferInfo
	   */

	  /**
	   * Creates cresent buffers.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} verticalRadius The vertical radius of the cresent.
	   * @param {number} outerRadius The outer radius of the cresent.
	   * @param {number} innerRadius The inner radius of the cresent.
	   * @param {number} thickness The thickness of the cresent.
	   * @param {number} subdivisionsDown number of steps around the cresent.
	   * @param {number} subdivisionsThick number of vertically on the cresent.
	   * @param {number} [startOffset] Where to start arc. Default 0.
	   * @param {number} [endOffset] Where to end arg. Default 1.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function createCresentBuffers
	   */

	  /**
	   * Creates cresent vertices.
	   *
	   * @param {number} verticalRadius The vertical radius of the cresent.
	   * @param {number} outerRadius The outer radius of the cresent.
	   * @param {number} innerRadius The inner radius of the cresent.
	   * @param {number} thickness The thickness of the cresent.
	   * @param {number} subdivisionsDown number of steps around the cresent.
	   * @param {number} subdivisionsThick number of vertically on the cresent.
	   * @param {number} [startOffset] Where to start arc. Default 0.
	   * @param {number} [endOffset] Where to end arg. Default 1.
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createCresentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
	    if (subdivisionsDown <= 0) {
	      throw Error('subdivisionDown must be > 0');
	    }

	    startOffset = startOffset || 0;
	    endOffset = endOffset || 1;

	    var subdivisionsThick = 2;

	    var offsetRange = endOffset - startOffset;
	    var numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);

	    function lerp(a, b, s) {
	      return a + (b - a) * s;
	    }

	    function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
	      for (var z = 0; z <= subdivisionsDown; z++) {
	        var uBack = x / (subdivisionsThick - 1);
	        var v = z / subdivisionsDown;
	        var xBack = (uBack - 0.5) * 2;
	        var angle = (startOffset + v * offsetRange) * Math.PI;
	        var s = Math.sin(angle);
	        var c = Math.cos(angle);
	        var radius = lerp(verticalRadius, arcRadius, s);
	        var px = xBack * thickness;
	        var py = c * verticalRadius;
	        var pz = s * radius;
	        positions.push(px, py, pz);
	        var n = v3.add(v3.multiply([0, s, c], normalMult), normalAdd);
	        normals.push(n);
	        texcoords.push(uBack * uMult + uAdd, v);
	      }
	    }

	    // Generate the individual vertices in our vertex buffer.
	    for (var x = 0; x < subdivisionsThick; x++) {
	      var uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
	      createArc(outerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
	      createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
	      createArc(innerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
	      createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
	    }

	    // Do outer surface.
	    var indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);

	    function createSurface(leftArcOffset, rightArcOffset) {
	      for (var z = 0; z < subdivisionsDown; ++z) {
	        // Make triangle 1 of quad.
	        indices.push(leftArcOffset + z + 0, leftArcOffset + z + 1, rightArcOffset + z + 0);

	        // Make triangle 2 of quad.
	        indices.push(leftArcOffset + z + 1, rightArcOffset + z + 1, rightArcOffset + z + 0);
	      }
	    }

	    var numVerticesDown = subdivisionsDown + 1;
	    // front
	    createSurface(numVerticesDown * 0, numVerticesDown * 4);
	    // right
	    createSurface(numVerticesDown * 5, numVerticesDown * 7);
	    // back
	    createSurface(numVerticesDown * 6, numVerticesDown * 2);
	    // left
	    createSurface(numVerticesDown * 3, numVerticesDown * 1);

	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices
	    };
	  }

	  /**
	   * Creates cylinder BufferInfo. The cylinder will be created around the origin
	   * along the y-axis.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius Radius of cylinder.
	   * @param {number} height Height of cylinder.
	   * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
	   * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
	   * @param {boolean} [topCap] Create top cap. Default = true.
	   * @param {boolean} [bottomCap] Create bottom cap. Default = true.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createCylinderBufferInfo
	   */

	  /**
	   * Creates cylinder buffers. The cylinder will be created around the origin
	   * along the y-axis.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius Radius of cylinder.
	   * @param {number} height Height of cylinder.
	   * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
	   * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
	   * @param {boolean} [topCap] Create top cap. Default = true.
	   * @param {boolean} [bottomCap] Create bottom cap. Default = true.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function createCylinderBuffers
	   */

	  /**
	   * Creates cylinder vertices. The cylinder will be created around the origin
	   * along the y-axis.
	   *
	   * @param {number} radius Radius of cylinder.
	   * @param {number} height Height of cylinder.
	   * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
	   * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
	   * @param {boolean} [topCap] Create top cap. Default = true.
	   * @param {boolean} [bottomCap] Create bottom cap. Default = true.
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
	    return createTruncatedConeVertices(radius, radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap);
	  }

	  /**
	   * Creates BufferInfo for a torus
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius radius of center of torus circle.
	   * @param {number} thickness radius of torus ring.
	   * @param {number} radialSubdivisions The number of subdivisions around the torus.
	   * @param {number} bodySubdivisions The number of subdivisions around the body torus.
	   * @param {boolean} [startAngle] start angle in radians. Default = 0.
	   * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createTorusBufferInfo
	   */

	  /**
	   * Creates buffers for a torus
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius radius of center of torus circle.
	   * @param {number} thickness radius of torus ring.
	   * @param {number} radialSubdivisions The number of subdivisions around the torus.
	   * @param {number} bodySubdivisions The number of subdivisions around the body torus.
	   * @param {boolean} [startAngle] start angle in radians. Default = 0.
	   * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function createTorusBuffers
	   */

	  /**
	   * Creates vertices for a torus
	   *
	   * @param {number} radius radius of center of torus circle.
	   * @param {number} thickness radius of torus ring.
	   * @param {number} radialSubdivisions The number of subdivisions around the torus.
	   * @param {number} bodySubdivisions The number of subdivisions around the body torus.
	   * @param {boolean} [startAngle] start angle in radians. Default = 0.
	   * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
	    if (radialSubdivisions < 3) {
	      throw Error('radialSubdivisions must be 3 or greater');
	    }

	    if (bodySubdivisions < 3) {
	      throw Error('verticalSubdivisions must be 3 or greater');
	    }

	    startAngle = startAngle || 0;
	    endAngle = endAngle || Math.PI * 2;
	    var range = endAngle - startAngle;

	    var radialParts = radialSubdivisions + 1;
	    var bodyParts = bodySubdivisions + 1;
	    var numVertices = radialParts * bodyParts;
	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);
	    var indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);

	    for (var slice = 0; slice < bodyParts; ++slice) {
	      var v = slice / bodySubdivisions;
	      var sliceAngle = v * Math.PI * 2;
	      var sliceSin = Math.sin(sliceAngle);
	      var ringRadius = radius + sliceSin * thickness;
	      var ny = Math.cos(sliceAngle);
	      var y = ny * thickness;
	      for (var ring = 0; ring < radialParts; ++ring) {
	        var u = ring / radialSubdivisions;
	        var ringAngle = startAngle + u * range;
	        var xSin = Math.sin(ringAngle);
	        var zCos = Math.cos(ringAngle);
	        var x = xSin * ringRadius;
	        var z = zCos * ringRadius;
	        var nx = xSin * sliceSin;
	        var nz = zCos * sliceSin;
	        positions.push(x, y, z);
	        normals.push(nx, ny, nz);
	        texcoords.push(u, 1 - v);
	      }
	    }

	    for (var slice = 0; slice < bodySubdivisions; ++slice) {
	      // eslint-disable-line
	      for (var ring = 0; ring < radialSubdivisions; ++ring) {
	        // eslint-disable-line
	        var nextRingIndex = 1 + ring;
	        var nextSliceIndex = 1 + slice;
	        indices.push(radialParts * slice + ring, radialParts * nextSliceIndex + ring, radialParts * slice + nextRingIndex);
	        indices.push(radialParts * nextSliceIndex + ring, radialParts * nextSliceIndex + nextRingIndex, radialParts * slice + nextRingIndex);
	      }
	    }

	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices
	    };
	  }

	  /**
	   * Creates a disc BufferInfo. The disc will be in the xz plane, centered at
	   * the origin. When creating, at least 3 divisions, or pie
	   * pieces, need to be specified, otherwise the triangles making
	   * up the disc will be degenerate. You can also specify the
	   * number of radial pieces `stacks`. A value of 1 for
	   * stacks will give you a simple disc of pie pieces.  If you
	   * want to create an annulus you can set `innerRadius` to a
	   * value > 0. Finally, `stackPower` allows you to have the widths
	   * increase or decrease as you move away from the center. This
	   * is particularly useful when using the disc as a ground plane
	   * with a fixed camera such that you don't need the resolution
	   * of small triangles near the perimeter. For example, a value
	   * of 2 will produce stacks whose ouside radius increases with
	   * the square of the stack index. A value of 1 will give uniform
	   * stacks.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius Radius of the ground plane.
	   * @param {number} divisions Number of triangles in the ground plane (at least 3).
	   * @param {number} [stacks] Number of radial divisions (default=1).
	   * @param {number} [innerRadius] Default 0.
	   * @param {number} [stackPower] Power to raise stack size to for decreasing width.
	   * @return {module:twgl.BufferInfo} The created BufferInfo.
	   * @memberOf module:twgl/primitives
	   * @function createDiscBufferInfo
	   */

	  /**
	   * Creates disc buffers. The disc will be in the xz plane, centered at
	   * the origin. When creating, at least 3 divisions, or pie
	   * pieces, need to be specified, otherwise the triangles making
	   * up the disc will be degenerate. You can also specify the
	   * number of radial pieces `stacks`. A value of 1 for
	   * stacks will give you a simple disc of pie pieces.  If you
	   * want to create an annulus you can set `innerRadius` to a
	   * value > 0. Finally, `stackPower` allows you to have the widths
	   * increase or decrease as you move away from the center. This
	   * is particularly useful when using the disc as a ground plane
	   * with a fixed camera such that you don't need the resolution
	   * of small triangles near the perimeter. For example, a value
	   * of 2 will produce stacks whose ouside radius increases with
	   * the square of the stack index. A value of 1 will give uniform
	   * stacks.
	   *
	   * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
	   * @param {number} radius Radius of the ground plane.
	   * @param {number} divisions Number of triangles in the ground plane (at least 3).
	   * @param {number} [stacks] Number of radial divisions (default=1).
	   * @param {number} [innerRadius] Default 0.
	   * @param {number} [stackPower] Power to raise stack size to for decreasing width.
	   * @return {Object.<string, WebGLBuffer>} The created buffers.
	   * @memberOf module:twgl/primitives
	   * @function createDiscBuffers
	   */

	  /**
	   * Creates disc vertices. The disc will be in the xz plane, centered at
	   * the origin. When creating, at least 3 divisions, or pie
	   * pieces, need to be specified, otherwise the triangles making
	   * up the disc will be degenerate. You can also specify the
	   * number of radial pieces `stacks`. A value of 1 for
	   * stacks will give you a simple disc of pie pieces.  If you
	   * want to create an annulus you can set `innerRadius` to a
	   * value > 0. Finally, `stackPower` allows you to have the widths
	   * increase or decrease as you move away from the center. This
	   * is particularly useful when using the disc as a ground plane
	   * with a fixed camera such that you don't need the resolution
	   * of small triangles near the perimeter. For example, a value
	   * of 2 will produce stacks whose ouside radius increases with
	   * the square of the stack index. A value of 1 will give uniform
	   * stacks.
	   *
	   * @param {number} radius Radius of the ground plane.
	   * @param {number} divisions Number of triangles in the ground plane (at least 3).
	   * @param {number} [stacks] Number of radial divisions (default=1).
	   * @param {number} [innerRadius] Default 0.
	   * @param {number} [stackPower] Power to raise stack size to for decreasing width.
	   * @return {Object.<string, TypedArray>} The created vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
	    if (divisions < 3) {
	      throw Error('divisions must be at least 3');
	    }

	    stacks = stacks ? stacks : 1;
	    stackPower = stackPower ? stackPower : 1;
	    innerRadius = innerRadius ? innerRadius : 0;

	    // Note: We don't share the center vertex because that would
	    // mess up texture coordinates.
	    var numVertices = (divisions + 1) * (stacks + 1);

	    var positions = createAugmentedTypedArray(3, numVertices);
	    var normals = createAugmentedTypedArray(3, numVertices);
	    var texcoords = createAugmentedTypedArray(2, numVertices);
	    var indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);

	    var firstIndex = 0;
	    var radiusSpan = radius - innerRadius;
	    var pointsPerStack = divisions + 1;

	    // Build the disk one stack at a time.
	    for (var stack = 0; stack <= stacks; ++stack) {
	      var stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);

	      for (var i = 0; i <= divisions; ++i) {
	        var theta = 2.0 * Math.PI * i / divisions;
	        var x = stackRadius * Math.cos(theta);
	        var z = stackRadius * Math.sin(theta);

	        positions.push(x, 0, z);
	        normals.push(0, 1, 0);
	        texcoords.push(1 - i / divisions, stack / stacks);
	        if (stack > 0 && i !== divisions) {
	          // a, b, c and d are the indices of the vertices of a quad.  unless
	          // the current stack is the one closest to the center, in which case
	          // the vertices a and b connect to the center vertex.
	          var a = firstIndex + (i + 1);
	          var b = firstIndex + i;
	          var c = firstIndex + i - pointsPerStack;
	          var d = firstIndex + (i + 1) - pointsPerStack;

	          // Make a quad of the vertices a, b, c, d.
	          indices.push(a, b, c);
	          indices.push(a, c, d);
	        }
	      }

	      firstIndex += divisions + 1;
	    }

	    return {
	      position: positions,
	      normal: normals,
	      texcoord: texcoords,
	      indices: indices
	    };
	  }

	  /**
	   * creates a random integer between 0 and range - 1 inclusive.
	   * @param {number} range
	   * @return {number} random value between 0 and range - 1 inclusive.
	   */
	  function randInt(range) {
	    return Math.random() * range | 0;
	  }

	  /**
	   * Used to supply random colors
	   * @callback RandomColorFunc
	   * @param {number} ndx index of triangle/quad if unindexed or index of vertex if indexed
	   * @param {number} channel 0 = red, 1 = green, 2 = blue, 3 = alpha
	   * @return {number} a number from 0 to 255
	   * @memberOf module:twgl/primitives
	   */

	  /**
	   * @typedef {Object} RandomVerticesOptions
	   * @property {number} [vertsPerColor] Defaults to 3 for non-indexed vertices
	   * @property {module:twgl/primitives.RandomColorFunc} [rand] A function to generate random numbers
	   * @memberOf module:twgl/primitives
	   */

	  /**
	   * Creates an augmentedTypedArray of random vertex colors.
	   * If the vertices are indexed (have an indices array) then will
	   * just make random colors. Otherwise assumes they are triangles
	   * and makes one random color for every 3 vertices.
	   * @param {Object.<string, augmentedTypedArray>} vertices Vertices as returned from one of the createXXXVertices functions.
	   * @param {module:twgl/primitives.RandomVerticesOptions} [options] options.
	   * @return {Object.<string, augmentedTypedArray>} same vertices as passed in with `color` added.
	   * @memberOf module:twgl/primitives
	   */
	  function makeRandomVertexColors(vertices, options) {
	    options = options || {};
	    var numElements = vertices.position.numElements;
	    var vcolors = createAugmentedTypedArray(4, numElements, Uint8Array);
	    var rand = options.rand || function (ndx, channel) {
	      return channel < 3 ? randInt(256) : 255;
	    };
	    vertices.color = vcolors;
	    if (vertices.indices) {
	      // just make random colors if index
	      for (var ii = 0; ii < numElements; ++ii) {
	        vcolors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
	      }
	    } else {
	      // make random colors per triangle
	      var numVertsPerColor = options.vertsPerColor || 3;
	      var numSets = numElements / numVertsPerColor;
	      for (var ii = 0; ii < numSets; ++ii) {
	        // eslint-disable-line
	        var color = [rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3)];
	        for (var jj = 0; jj < numVertsPerColor; ++jj) {
	          vcolors.push(color);
	        }
	      }
	    }
	    return vertices;
	  }

	  /**
	   * creates a function that calls fn to create vertices and then
	   * creates a buffers for them
	   */
	  function createBufferFunc(fn) {
	    return function (gl) {
	      var arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
	      return attributes.createBuffersFromArrays(gl, arrays);
	    };
	  }

	  /**
	   * creates a function that calls fn to create vertices and then
	   * creates a bufferInfo object for them
	   */
	  function createBufferInfoFunc(fn) {
	    return function (gl) {
	      var arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
	      return attributes.createBufferInfoFromArrays(gl, arrays);
	    };
	  }

	  var arraySpecPropertyNames = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];

	  /**
	   * Copy elements from one array to another
	   *
	   * @param {Array|TypedArray} src source array
	   * @param {Array|TypedArray} dst dest array
	   * @param {number} dstNdx index in dest to copy src
	   * @param {number} [offset] offset to add to copied values
	   */
	  function copyElements(src, dst, dstNdx, offset) {
	    offset = offset || 0;
	    var length = src.length;
	    for (var ii = 0; ii < length; ++ii) {
	      dst[dstNdx + ii] = src[ii] + offset;
	    }
	  }

	  /**
	   * Creates an array of the same time
	   *
	   * @param {(number[]|ArrayBuffer|module:twgl.FullArraySpec)} srcArray array who's type to copy
	   * @param {number} length size of new array
	   * @return {(number[]|ArrayBuffer|module:twgl.FullArraySpec)} array with same type as srcArray
	   */
	  function createArrayOfSameType(srcArray, length) {
	    var arraySrc = getArray(srcArray);
	    var newArray = new arraySrc.constructor(length);
	    var newArraySpec = newArray;
	    // If it appears to have been augmented make new one augemented
	    if (arraySrc.numComponents && arraySrc.numElements) {
	      augmentTypedArray(newArray, arraySrc.numComponents);
	    }
	    // If it was a fullspec make new one a fullspec
	    if (srcArray.data) {
	      newArraySpec = {
	        data: newArray
	      };
	      utils.copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
	    }
	    return newArraySpec;
	  }

	  /**
	   * Concatinates sets of vertices
	   *
	   * Assumes the vertices match in composition. For example
	   * if one set of vertices has positions, normals, and indices
	   * all sets of vertices must have positions, normals, and indices
	   * and of the same type.
	   *
	   * Example:
	   *
	   *      var cubeVertices = twgl.primtiives.createCubeVertices(2);
	   *      var sphereVertices = twgl.primitives.createSphereVertices(1, 10, 10);
	   *      // move the sphere 2 units up
	   *      twgl.primitives.reorientVertices(
	   *          sphereVertices, twgl.m4.translation([0, 2, 0]));
	   *      // merge the sphere with the cube
	   *      var cubeSphereVertices = twgl.primitives.concatVertices(
	   *          [cubeVertices, sphereVertices]);
	   *      // turn them into WebGL buffers and attrib data
	   *      var bufferInfo = twgl.createBufferInfoFromArrays(gl, cubeSphereVertices);
	   *
	   * @param {module:twgl.Arrays[]} arrays Array of arrays of vertices
	   * @return {module:twgl.Arrays} The concatinated vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function concatVertices(arrayOfArrays) {
	    var names = {};
	    var baseName;
	    // get names of all arrays.
	    // and numElements for each set of vertices
	    for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
	      var arrays = arrayOfArrays[ii];
	      Object.keys(arrays).forEach(function (name) {
	        // eslint-disable-line
	        if (!names[name]) {
	          names[name] = [];
	        }
	        if (!baseName && name !== 'indices') {
	          baseName = name;
	        }
	        var arrayInfo = arrays[name];
	        var numComponents = getNumComponents(arrayInfo, name);
	        var array = getArray(arrayInfo);
	        var numElements = array.length / numComponents;
	        names[name].push(numElements);
	      });
	    }

	    // compute length of combined array
	    // and return one for reference
	    function getLengthOfCombinedArrays(name) {
	      var length = 0;
	      var arraySpec;
	      for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
	        var arrays = arrayOfArrays[ii];
	        var arrayInfo = arrays[name];
	        var array = getArray(arrayInfo);
	        length += array.length;
	        if (!arraySpec || arrayInfo.data) {
	          arraySpec = arrayInfo;
	        }
	      }
	      return {
	        length: length,
	        spec: arraySpec
	      };
	    }

	    function copyArraysToNewArray(name, base, newArray) {
	      var baseIndex = 0;
	      var offset = 0;
	      for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
	        var arrays = arrayOfArrays[ii];
	        var arrayInfo = arrays[name];
	        var array = getArray(arrayInfo);
	        if (name === 'indices') {
	          copyElements(array, newArray, offset, baseIndex);
	          baseIndex += base[ii];
	        } else {
	          copyElements(array, newArray, offset);
	        }
	        offset += array.length;
	      }
	    }

	    var base = names[baseName];

	    var newArrays = {};
	    Object.keys(names).forEach(function (name) {
	      var info = getLengthOfCombinedArrays(name);
	      var newArraySpec = createArrayOfSameType(info.spec, info.length);
	      copyArraysToNewArray(name, base, getArray(newArraySpec));
	      newArrays[name] = newArraySpec;
	    });
	    return newArrays;
	  }

	  /**
	   * Creates a duplicate set of vertices
	   *
	   * This is useful for calling reorientVertices when you
	   * also want to keep the original available
	   *
	   * @param {module:twgl.Arrays} arrays of vertices
	   * @return {module:twgl.Arrays} The dupilicated vertices.
	   * @memberOf module:twgl/primitives
	   */
	  function duplicateVertices(arrays) {
	    var newArrays = {};
	    Object.keys(arrays).forEach(function (name) {
	      var arraySpec = arrays[name];
	      var srcArray = getArray(arraySpec);
	      var newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
	      copyElements(srcArray, getArray(newArraySpec), 0);
	      newArrays[name] = newArraySpec;
	    });
	    return newArrays;
	  }

	  // Using quotes prevents Uglify from changing the names.
	  // No speed diff AFAICT.
	  return {
	    "create3DFBufferInfo": createBufferInfoFunc(create3DFVertices),
	    "create3DFBuffers": createBufferFunc(create3DFVertices),
	    "create3DFVertices": create3DFVertices,
	    "createAugmentedTypedArray": createAugmentedTypedArray,
	    "createCubeBufferInfo": createBufferInfoFunc(createCubeVertices),
	    "createCubeBuffers": createBufferFunc(createCubeVertices),
	    "createCubeVertices": createCubeVertices,
	    "createPlaneBufferInfo": createBufferInfoFunc(createPlaneVertices),
	    "createPlaneBuffers": createBufferFunc(createPlaneVertices),
	    "createPlaneVertices": createPlaneVertices,
	    "createSphereBufferInfo": createBufferInfoFunc(createSphereVertices),
	    "createSphereBuffers": createBufferFunc(createSphereVertices),
	    "createSphereVertices": createSphereVertices,
	    "createTruncatedConeBufferInfo": createBufferInfoFunc(createTruncatedConeVertices),
	    "createTruncatedConeBuffers": createBufferFunc(createTruncatedConeVertices),
	    "createTruncatedConeVertices": createTruncatedConeVertices,
	    "createXYQuadBufferInfo": createBufferInfoFunc(createXYQuadVertices),
	    "createXYQuadBuffers": createBufferFunc(createXYQuadVertices),
	    "createXYQuadVertices": createXYQuadVertices,
	    "createCresentBufferInfo": createBufferInfoFunc(createCresentVertices),
	    "createCresentBuffers": createBufferFunc(createCresentVertices),
	    "createCresentVertices": createCresentVertices,
	    "createCylinderBufferInfo": createBufferInfoFunc(createCylinderVertices),
	    "createCylinderBuffers": createBufferFunc(createCylinderVertices),
	    "createCylinderVertices": createCylinderVertices,
	    "createTorusBufferInfo": createBufferInfoFunc(createTorusVertices),
	    "createTorusBuffers": createBufferFunc(createTorusVertices),
	    "createTorusVertices": createTorusVertices,
	    "createDiscBufferInfo": createBufferInfoFunc(createDiscVertices),
	    "createDiscBuffers": createBufferFunc(createDiscVertices),
	    "createDiscVertices": createDiscVertices,
	    "deindexVertices": deindexVertices,
	    "flattenNormals": flattenNormals,
	    "makeRandomVertexColors": makeRandomVertexColors,
	    "reorientDirections": reorientDirections,
	    "reorientNormals": reorientNormals,
	    "reorientPositions": reorientPositions,
	    "reorientVertices": reorientVertices,
	    "concatVertices": concatVertices,
	    "duplicateVertices": duplicateVertices
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ])
});
;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** @module RenderConstants */

/**
 * Various constants meant for use throughout the renderer.
 * @enum
 */
module.exports = {
  /**
   * The ID value to use for "no item" or when an object has been disposed.
   * @const {int}
   */
  ID_NONE: -1,

  /**
   * Optimize for fewer than this number of Drawables sharing the same Skin.
   * Going above this may cause middleware warnings or a performance penalty but should otherwise behave correctly.
   * @const {int}
   */
  SKIN_SHARE_SOFT_LIMIT: 301,

  /**
   * @enum {string}
   */
  Events: {
    /**
    * NativeSizeChanged event
    *
    * @event RenderWebGL#event:NativeSizeChanged
    * @type {object}
    * @property {Array<int>} newSize - the new size of the renderer
    */
    NativeSizeChanged: 'NativeSizeChanged'
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(5);

var twgl = __webpack_require__(0);

var RenderConstants = __webpack_require__(1);

var Skin = function (_EventEmitter) {
  _inherits(Skin, _EventEmitter);

  /**
   * Create a Skin, which stores and/or generates textures for use in rendering.
   * @param {int} id - The unique ID for this Skin.
   * @constructor
   */
  function Skin(id) {
    _classCallCheck(this, Skin);

    /** @type {int} */
    var _this = _possibleConstructorReturn(this, (Skin.__proto__ || Object.getPrototypeOf(Skin)).call(this));

    _this._id = id;

    /** @type {Vec3} */
    _this._rotationCenter = twgl.v3.create(0, 0);

    /**
     * The uniforms to be used by the vertex and pixel shaders.
     * Some of these are used by other parts of the renderer as well.
     * @type {Object.<string,*>}
     * @private
     */
    _this._uniforms = {
      /**
       * The nominal (not necessarily current) size of the current skin.
       * @type {Array<number>}
       */
      u_skinSize: [0, 0],

      /**
       * The actual WebGL texture object for the skin.
       * @type {WebGLTexture}
       */
      u_skin: null
    };

    _this.setMaxListeners(RenderConstants.SKIN_SHARE_SOFT_LIMIT);
    return _this;
  }

  /**
   * Dispose of this object. Do not use it after calling this method.
   */


  _createClass(Skin, [{
    key: 'dispose',
    value: function dispose() {
      this._id = RenderConstants.ID_NONE;
    }

    /**
     * @return {int} the unique ID for this Skin.
     */

  }, {
    key: 'setRotationCenter',


    /**
     * Set the origin, in object space, about which this Skin should rotate.
     * @param {number} x - The x coordinate of the new rotation center.
     * @param {number} y - The y coordinate of the new rotation center.
     * @fires Skin.event:WasAltered
     */
    value: function setRotationCenter(x, y) {
      if (x !== this._rotationCenter[0] || y !== this._rotationCenter[1]) {
        this._rotationCenter[0] = x;
        this._rotationCenter[1] = y;
        this.emit(Skin.Events.WasAltered);
      }
    }

    /**
     * Get the center of the current bounding box
     * @return {Array<number>} the center of the current bounding box
     */

  }, {
    key: 'calculateRotationCenter',
    value: function calculateRotationCenter() {
      return [this.size[0] / 2, this.size[1] / 2];
    }

    /**
     * @abstract
     * @param {Array<number>} scale - The scaling factors to be used.
     * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given size.
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'getTexture',
    value: function getTexture(scale) {
      return null;
    }

    /**
     * Update and returns the uniforms for this skin.
     * @param {Array<number>} scale - The scaling factors to be used.
     * @returns {object.<string, *>} the shader uniforms to be used when rendering with this Skin.
     */

  }, {
    key: 'getUniforms',
    value: function getUniforms(scale) {
      this._uniforms.u_skin = this.getTexture(scale);
      this._uniforms.u_skinSize = this.size;
      return this._uniforms;
    }
  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }

    /**
     * @returns {Vec3} the origin, in object space, about which this Skin should rotate.
     */

  }, {
    key: 'rotationCenter',
    get: function get() {
      return this._rotationCenter;
    }

    /**
     * @abstract
     * @return {Array<number>} the "native" size, in texels, of this skin.
     */

  }, {
    key: 'size',
    get: function get() {
      return [0, 0];
    }
  }]);

  return Skin;
}(EventEmitter);

/**
 * These are the events which can be emitted by instances of this class.
 * @enum {string}
 */


Skin.Events = {
  /**
   * Emitted when anything about the Skin has been altered, such as the appearance or rotation center.
   * @event Skin.event:WasAltered
   */
  WasAltered: 'WasAltered'
};

module.exports = Skin;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(0);

var RenderConstants = __webpack_require__(1);
var Skin = __webpack_require__(2);

/**
 * Attributes to use when drawing with the pen
 * @typedef {object} PenSkin#PenAttributes
 * @property {number} [diameter] - The size (diameter) of the pen.
 * @property {Array<number>} [color4f] - The pen color as an array of [r,g,b,a], each component in the range [0,1].
 */

/**
 * The pen attributes to use when unspecified.
 * @type {PenSkin#PenAttributes}
 * @memberof PenSkin
 * @private
 * @const
 */
var DefaultPenAttributes = {
    color4f: [0, 0, 1, 1],
    diameter: 1
};

var PenSkin = function (_Skin) {
    _inherits(PenSkin, _Skin);

    /**
     * Create a Skin which implements a Scratch pen layer.
     * @param {int} id - The unique ID for this Skin.
     * @param {RenderWebGL} renderer - The renderer which will use this Skin.
     * @extends Skin
     * @listens RenderWebGL#event:NativeSizeChanged
     */
    function PenSkin(id, renderer) {
        _classCallCheck(this, PenSkin);

        /**
         * @private
         * @type {RenderWebGL}
         */
        var _this = _possibleConstructorReturn(this, (PenSkin.__proto__ || Object.getPrototypeOf(PenSkin)).call(this, id));

        _this._renderer = renderer;

        /** @type {HTMLCanvasElement} */
        _this._canvas = document.createElement('canvas');

        /** @type {boolean} */
        _this._canvasDirty = false;

        /** @type {WebGLTexture} */
        _this._texture = null;

        _this.onNativeSizeChanged = _this.onNativeSizeChanged.bind(_this);
        _this._renderer.on(RenderConstants.Events.NativeSizeChanged, _this.onNativeSizeChanged);

        _this._setCanvasSize(renderer.getNativeSize());
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(PenSkin, [{
        key: 'dispose',
        value: function dispose() {
            this._renderer.removeListener(RenderConstants.Events.NativeSizeChanged, this.onNativeSizeChanged);
            this._renderer.gl.deleteTexture(this._texture);
            this._texture = null;
            _get(PenSkin.prototype.__proto__ || Object.getPrototypeOf(PenSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @return {Array<number>} the "native" size, in texels, of this skin. [width, height]
         */

    }, {
        key: 'getTexture',


        /**
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given size.
         * @param {int} pixelsWide - The width that the skin will be rendered at, in GPU pixels.
         * @param {int} pixelsTall - The height that the skin will be rendered at, in GPU pixels.
         */
        // eslint-disable-next-line no-unused-vars
        value: function getTexture(pixelsWide, pixelsTall) {
            if (this._canvasDirty) {
                this._canvasDirty = false;

                var gl = this._renderer.gl;
                gl.bindTexture(gl.TEXTURE_2D, this._texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._canvas);
            }

            return this._texture;
        }

        /**
         * Clear the pen layer.
         */

    }, {
        key: 'clear',
        value: function clear() {
            var ctx = this._canvas.getContext('2d');
            ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this._canvasDirty = true;
        }

        /**
         * Draw a point on the pen layer.
         * @param {PenAttributes} penAttributes - how the point should be drawn.
         * @param {number} x - the X coordinate of the point to draw.
         * @param {number} y - the Y coordinate of the point to draw.
         */

    }, {
        key: 'drawPoint',
        value: function drawPoint(penAttributes, x, y) {
            // Canvas renders a zero-length line as two end-caps back-to-back, which is what we want.
            this.drawLine(penAttributes, x, y, x, y);
        }

        /**
         * Draw a line on the pen layer.
         * @param {PenAttributes} penAttributes - how the line should be drawn.
         * @param {number} x0 - the X coordinate of the beginning of the line.
         * @param {number} y0 - the Y coordinate of the beginning of the line.
         * @param {number} x1 - the X coordinate of the end of the line.
         * @param {number} y1 - the Y coordinate of the end of the line.
         */

    }, {
        key: 'drawLine',
        value: function drawLine(penAttributes, x0, y0, x1, y1) {
            var ctx = this._canvas.getContext('2d');
            this._setAttributes(ctx, penAttributes);
            ctx.beginPath();
            ctx.moveTo(this._rotationCenter[0] + x0, this._rotationCenter[1] - y0);
            ctx.lineTo(this._rotationCenter[0] + x1, this._rotationCenter[1] - y1);
            ctx.stroke();
            this._canvasDirty = true;
        }

        /**
         * Stamp an image onto the pen layer.
         * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} stampElement - the element to use as the stamp.
         * @param {number} x - the X coordinate of the stamp to draw.
         * @param {number} y - the Y coordinate of the stamp to draw.
         */

    }, {
        key: 'drawStamp',
        value: function drawStamp(stampElement, x, y) {
            var ctx = this._canvas.getContext('2d');
            ctx.drawImage(stampElement, this._rotationCenter[0] + x, this._rotationCenter[1] - y);
            this._canvasDirty = true;
        }

        /**
         * React to a change in the renderer's native size.
         * @param {object} event - The change event.
         */

    }, {
        key: 'onNativeSizeChanged',
        value: function onNativeSizeChanged(event) {
            this._setCanvasSize(event.newSize);
        }

        /**
         * Set the size of the pen canvas.
         * @param {Array<int>} canvasSize - the new width and height for the canvas.
         * @private
         */

    }, {
        key: '_setCanvasSize',
        value: function _setCanvasSize(canvasSize) {
            var _canvasSize = _slicedToArray(canvasSize, 2),
                width = _canvasSize[0],
                height = _canvasSize[1];

            var gl = this._renderer.gl;
            this._canvas.width = width;
            this._canvas.height = height;
            this._rotationCenter[0] = width / 2;
            this._rotationCenter[1] = height / 2;
            this._texture = twgl.createTexture(gl, {
                auto: true,
                mag: gl.NEAREST,
                min: gl.NEAREST,
                wrap: gl.CLAMP_TO_EDGE,
                src: this._canvas
            });
            this._canvasDirty = true;
        }

        /**
         * Set context state to match provided pen attributes.
         * @param {CanvasRenderingContext2D} context - the canvas rendering context to be modified.
         * @param {PenAttributes} penAttributes - the pen attributes to be used.
         * @private
         */

    }, {
        key: '_setAttributes',
        value: function _setAttributes(context, penAttributes) {
            penAttributes = penAttributes || DefaultPenAttributes;
            var color4f = penAttributes.color4f || DefaultPenAttributes.color4f;
            var diameter = penAttributes.diameter || DefaultPenAttributes.diameter;

            var r = Math.round(color4f[0] * 255);
            var g = Math.round(color4f[1] * 255);
            var b = Math.round(color4f[2] * 255);
            var a = color4f[3]; // Alpha is 0 to 1 (not 0 to 255 like r,g,b)

            context.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
            context.lineCap = 'round';
            context.lineWidth = diameter;
        }
    }, {
        key: 'size',
        get: function get() {
            return [this._canvas.width, this._canvas.height];
        }
    }]);

    return PenSkin;
}(Skin);

module.exports = PenSkin;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var twgl = __webpack_require__(0);

var vertexShaderText = __webpack_require__(26);
var fragmentShaderText = __webpack_require__(25);

var ShaderManager = function () {
    /**
     * @param {WebGLRenderingContext} gl WebGL rendering context to create shaders for
     * @constructor
     */
    function ShaderManager(gl) {
        _classCallCheck(this, ShaderManager);

        this._gl = gl;

        /**
         * The cache of all shaders compiled so far, filled on demand.
         * @type {Object<ShaderManager.DRAW_MODE, Array<ProgramInfo>>}
         * @private
         */
        this._shaderCache = {};
        for (var modeName in ShaderManager.DRAW_MODE) {
            if (ShaderManager.DRAW_MODE.hasOwnProperty(modeName)) {
                this._shaderCache[modeName] = [];
            }
        }
    }

    /**
     * Fetch the shader for a particular set of active effects.
     * Build the shader if necessary.
     * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
     * @param {int} effectBits Bitmask representing the enabled effects.
     * @returns {ProgramInfo} The shader's program info.
     */


    _createClass(ShaderManager, [{
        key: 'getShader',
        value: function getShader(drawMode, effectBits) {
            var cache = this._shaderCache[drawMode];

            if (drawMode === ShaderManager.DRAW_MODE.silhouette) {
                // Silhouette mode isn't affected by these effects.
                effectBits &= ~(ShaderManager.EFFECT_INFO.color.mask | ShaderManager.EFFECT_INFO.brightness.mask);
            }
            var shader = cache[effectBits];
            if (!shader) {
                shader = cache[effectBits] = this._buildShader(drawMode, effectBits);
            }
            return shader;
        }

        /**
         * Build the shader for a particular set of active effects.
         * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
         * @param {int} effectBits Bitmask representing the enabled effects.
         * @returns {ProgramInfo} The new shader's program info.
         * @private
         */

    }, {
        key: '_buildShader',
        value: function _buildShader(drawMode, effectBits) {
            var numEffects = ShaderManager.EFFECTS.length;

            var defines = ['#define DRAW_MODE_' + drawMode];
            for (var index = 0; index < numEffects; ++index) {
                if ((effectBits & 1 << index) !== 0) {
                    defines.push('#define ENABLE_' + ShaderManager.EFFECTS[index]);
                }
            }

            var definesText = defines.join('\n') + '\n';
            var vsFullText = definesText + vertexShaderText;
            var fsFullText = definesText + fragmentShaderText;

            return twgl.createProgramInfo(this._gl, [vsFullText, fsFullText]);
        }
    }]);

    return ShaderManager;
}();

/**
 * @typedef {object} ShaderManager.Effect
 * @prop {int} mask - The bit in 'effectBits' representing the effect.
 * @prop {function} converter - A conversion function which takes a Scratch value (generally in the range
 *   0..100 or -100..100) and maps it to a value useful to the shader. This
 *   mapping may not be reversible.
 * @prop {boolean} shapeChanges - Whether the effect could change the drawn shape.
 */

/**
 * Mapping of each effect name to info about that effect.
 * @enum {ShaderManager.Effect}
 */


ShaderManager.EFFECT_INFO = {
    /** Color effect */
    color: {
        mask: 1 << 0,
        converter: function converter(x) {
            return x / 200 % 1;
        },
        shapeChanges: false
    },
    /** Fisheye effect */
    fisheye: {
        mask: 1 << 1,
        converter: function converter(x) {
            return Math.max(0, (x + 100) / 100);
        },
        shapeChanges: true
    },
    /** Whirl effect */
    whirl: {
        mask: 1 << 2,
        converter: function converter(x) {
            return -x * Math.PI / 180;
        },
        shapeChanges: true
    },
    /** Pixelate effect */
    pixelate: {
        mask: 1 << 3,
        converter: function converter(x) {
            return Math.abs(x) / 10;
        },
        shapeChanges: true
    },
    /** Mosaic effect */
    mosaic: {
        mask: 1 << 4,
        converter: function converter(x) {
            x = Math.round((Math.abs(x) + 10) / 10);
            /** @todo cap by Math.min(srcWidth, srcHeight) */
            return Math.max(1, Math.min(x, 512));
        },
        shapeChanges: true
    },
    /** Brightness effect */
    brightness: {
        mask: 1 << 5,
        converter: function converter(x) {
            return Math.max(-100, Math.min(x, 100)) / 100;
        },
        shapeChanges: false
    },
    /** Ghost effect */
    ghost: {
        mask: 1 << 6,
        converter: function converter(x) {
            return 1 - Math.max(0, Math.min(x, 100)) / 100;
        },
        shapeChanges: false
    }
};

/**
 * The name of each supported effect.
 * @type {Array}
 */
ShaderManager.EFFECTS = Object.keys(ShaderManager.EFFECT_INFO);

/**
 * The available draw modes.
 * @readonly
 * @enum {string}
 */
ShaderManager.DRAW_MODE = {
    /**
     * Draw normally.
     */
    default: 'default',

    /**
     * Draw a silhouette using a solid color.
     */
    silhouette: 'silhouette',

    /**
     * Draw only the parts of the drawable which match a particular color.
     */
    colorMask: 'colorMask'
};

module.exports = ShaderManager;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(5);

var hull = __webpack_require__(23);
var twgl = __webpack_require__(0);

var BitmapSkin = __webpack_require__(7);
var Drawable = __webpack_require__(9);
var PenSkin = __webpack_require__(3);
var CheckerSkin = __webpack_require__(8);
var EditTargetBoxSkin = __webpack_require__(10);
var RenderConstants = __webpack_require__(1);
var ShaderManager = __webpack_require__(4);
var SVGSkin = __webpack_require__(12);

/**
 * @callback RenderWebGL#idFilterFunc
 * @param {int} drawableID The ID to filter.
 * @return {bool} True if the ID passes the filter, otherwise false.
 */

/**
 * Maximum touch size for a picking check.
 * @todo Figure out a reasonable max size. Maybe this should be configurable?
 * @type {Array<int>}
 * @memberof RenderWebGL
 */
var MAX_TOUCH_SIZE = [3, 3];

/**
 * "touching {color}?" or "{color} touching {color}?" tests will be true if the
 * target is touching a color whose components are each within this tolerance of
 * the corresponding component of the query color.
 * between 0 (exact matches only) and 255 (match anything).
 * @type {int}
 * @memberof RenderWebGL
 */
var TOLERANCE_TOUCHING_COLOR = 2;

/**
 * Sprite Fencing - The number of pixels a sprite is required to leave remaining
 * onscreen around the edge of the staging area.
 * @type {number}
 */
var FENCE_WIDTH = 15;

var RenderWebGL = function (_EventEmitter) {
    _inherits(RenderWebGL, _EventEmitter);

    /**
     * Create a renderer for drawing Scratch sprites to a canvas using WebGL.
     * Coordinates will default to Scratch 2.0 values if unspecified.
     * The stage's "native" size will be calculated from the these coordinates.
     * For example, the defaults result in a native size of 480x360.
     * Queries such as "touching color?" will always execute at the native size.
     * @see RenderWebGL#setStageSize
     * @see RenderWebGL#resize
     * @param {canvas} canvas The canvas to draw onto.
     * @param {int} [xLeft=-240] The x-coordinate of the left edge.
     * @param {int} [xRight=240] The x-coordinate of the right edge.
     * @param {int} [yBottom=-180] The y-coordinate of the bottom edge.
     * @param {int} [yTop=180] The y-coordinate of the top edge.
     * @constructor
     * @listens RenderWebGL#event:NativeSizeChanged
     */
    function RenderWebGL(canvas, xLeft, xRight, yBottom, yTop) {
        _classCallCheck(this, RenderWebGL);

        /** @type {Drawable[]} */
        var _this = _possibleConstructorReturn(this, (RenderWebGL.__proto__ || Object.getPrototypeOf(RenderWebGL)).call(this));

        _this._allDrawables = [];

        /** @type {Skin[]} */
        _this._allSkins = [];

        /** @type {Array<int>} */
        _this._drawList = [];

        /** @type {int} */
        _this._CheckerDrawableId = null;

        /** @type {int} */
        _this._CheckerSkinId = null;

        /** @type {int} */
        _this._EditTargetBoxSkinId = null;
        /** @type {int} */
        _this._EditTargetBoxDrawableId = null;

        /** @type {WebGLRenderingContext} */
        var gl = _this._gl = twgl.getWebGLContext(canvas, { alpha: false, stencil: true });

        /** @type {int} */
        _this._nextDrawableId = RenderConstants.ID_NONE + 1;

        /** @type {int} */
        _this._nextSkinId = RenderConstants.ID_NONE + 1;

        /** @type {module:twgl/m4.Mat4} */
        _this._projection = twgl.m4.identity();

        /** @type {ShaderManager} */
        _this._shaderManager = new ShaderManager(gl);

        /** @type {HTMLCanvasElement} */
        _this._tempCanvas = document.createElement('canvas');

        _this._createGeometry();

        _this.on(RenderConstants.Events.NativeSizeChanged, _this.onNativeSizeChanged);

        _this.setBackgroundColor(1, 1, 1);
        _this.setStageSize(xLeft || -240, xRight || 240, yBottom || -180, yTop || 180);
        _this.resize(_this._nativeSize[0], _this._nativeSize[1]);
        _this.createChecker();

        gl.disable(gl.DEPTH_TEST);
        /** @todo disable when no partial transparency? */
        gl.enable(gl.BLEND);
        gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE);
        return _this;
    }

    /**
     * @returns {WebGLRenderingContext} the WebGL rendering context associated with this renderer.
     */


    _createClass(RenderWebGL, [{
        key: 'resize',


        /**
         * Set the physical size of the stage in device-independent pixels.
         * This will be multiplied by the device's pixel ratio on high-DPI displays.
         * @param {int} pixelsWide The desired width in device-independent pixels.
         * @param {int} pixelsTall The desired height in device-independent pixels.
         */
        value: function resize(pixelsWide, pixelsTall) {
            var pixelRatio = window.devicePixelRatio || 1;
            this._gl.canvas.width = pixelsWide * pixelRatio;
            this._gl.canvas.height = pixelsTall * pixelRatio;
        }

        /**
         * Set the background color for the stage. The stage will be cleared with this
         * color each frame.
         * @param {number} red The red component for the background.
         * @param {number} green The green component for the background.
         * @param {number} blue The blue component for the background.
         */

    }, {
        key: 'setBackgroundColor',
        value: function setBackgroundColor(red, green, blue) {
            this._backgroundColor = [red, green, blue, 1];
        }

        /**
         * Tell the renderer to draw various debug information to the provided canvas
         * during certain operations.
         * @param {canvas} canvas The canvas to use for debug output.
         */

    }, {
        key: 'setDebugCanvas',
        value: function setDebugCanvas(canvas) {
            this._debugCanvas = canvas;
        }

        /**
         * Set logical size of the stage in Scratch units.
         * @param {int} xLeft The left edge's x-coordinate. Scratch 2 uses -240.
         * @param {int} xRight The right edge's x-coordinate. Scratch 2 uses 240.
         * @param {int} yBottom The bottom edge's y-coordinate. Scratch 2 uses -180.
         * @param {int} yTop The top edge's y-coordinate. Scratch 2 uses 180.
         */

    }, {
        key: 'setStageSize',
        value: function setStageSize(xLeft, xRight, yBottom, yTop) {
            this._xLeft = xLeft;
            this._xRight = xRight;
            this._yBottom = yBottom;
            this._yTop = yTop;

            // swap yBottom & yTop to fit Scratch convention of +y=up
            this._projection = twgl.m4.ortho(xLeft, xRight, yBottom, yTop, -1, 1);

            this._setNativeSize(Math.abs(xRight - xLeft), Math.abs(yBottom - yTop));
        }

        /**
         * @return {Array<int>} the "native" size of the stage, which is used for pen, query renders, etc.
         */

    }, {
        key: 'getNativeSize',
        value: function getNativeSize() {
            return [this._nativeSize[0], this._nativeSize[1]];
        }

        /**
         * Set the "native" size of the stage, which is used for pen, query renders, etc.
         * @param {int} width - the new width to set.
         * @param {int} height - the new height to set.
         * @private
         * @fires RenderWebGL#event:NativeSizeChanged
         */

    }, {
        key: '_setNativeSize',
        value: function _setNativeSize(width, height) {
            this._nativeSize = [width, height];
            this.emit(RenderConstants.Events.NativeSizeChanged, { newSize: this._nativeSize });
        }

        /**
         * Create a new bitmap skin from a snapshot of the provided bitmap data.
         * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} bitmapData - new contents for this skin.
         * @param {!int} [costumeResolution=1] - The resolution to use for this bitmap.
         * @param {?Array<number>} rotationCenter Optional: rotation center of the skin. If not supplied, the center of the
         * skin will be used
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createBitmapSkin',
        value: function createBitmapSkin(bitmapData, costumeResolution, rotationCenter) {
            var skinId = this._nextSkinId++;
            var newSkin = new BitmapSkin(skinId, this);
            newSkin.setBitmap(bitmapData, costumeResolution, rotationCenter);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }

        /**
         * Create a new SVG skin.
         * @param {!string} svgData - new SVG to use.
         * @param {?Array<number>} rotationCenter Optional: rotation center of the skin. If not supplied, the center of the
         * skin will be used
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createSVGSkin',
        value: function createSVGSkin(svgData, rotationCenter) {
            var skinId = this._nextSkinId++;
            var newSkin = new SVGSkin(skinId, this);
            newSkin.setSVG(svgData, rotationCenter);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }

        /**
         * Create a new PenSkin - a skin which implements a Scratch pen layer.
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createPenSkin',
        value: function createPenSkin() {
            var skinId = this._nextSkinId++;
            var newSkin = new PenSkin(skinId, this);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }
        /**
         * Create a new Checker
         * @returns {!int} the ID for the checker.
         */

    }, {
        key: 'createChecker',
        value: function createChecker() {
            this._CheckerSkinId = this.createCheckerSkin();
            this._CheckerDrawableId = this.createDrawable();
            this.setDrawableOrder(this._CheckerDrawableId, this._nextDrawableId);
            this.updateDrawableProperties(this._CheckerDrawableId, { skinId: this._CheckerSkinId });
            this.setCheckerVisible(false);
        }

        /**
         * Create a new Checker
         * @returns {!int} the ID for the checker.
         */

    }, {
        key: 'createEditTargetBox',
        value: function createEditTargetBox(editTarget, targetDrawable) {
            this._EditTargetBoxSkinId = this.createEditTargetBoxSkin(editTarget, targetDrawable);
            this._EditTargetBoxDrawableId = this.createDrawable();
            this.setDrawableOrder(this._EditTargetBoxDrawableId, this._nextDrawableId);
            this.updateDrawableProperties(this._EditTargetBoxDrawableId, { skinId: this._EditTargetBoxSkinId });
            this.setCheckerVisible(false);
        }
    }, {
        key: 'updateEditTargetBoxSkin',
        value: function updateEditTargetBoxSkin(editTarget) {
            if (this._EditTargetBoxDrawableId !== null) {
                this.destroyDrawable(this._EditTargetBoxDrawableId);
            }
            if (this._EditTargetBoxSkinId !== null) {
                this.destroySkin(this._EditTargetBoxSkinId);
            }
            if (!editTarget.isStage) {
                var _drawable = this._allDrawables[editTarget.drawableID];
                this.createEditTargetBox(editTarget, _drawable);
            }

            var costumeSize = this.getSkinSize(editTarget.drawableID);
            var origW = costumeSize[0];
            var origH = costumeSize[1];

            console.log("updateEditTargetBoxSkin's  drawable", drawable);
            this._EditTargetBoxSkinId = this.createEditTargetBoxSkin();
            this._EditTargetBoxDrawableId = this.createDrawable();

            this.setDrawableOrder(this._EditTargetBoxDrawableId, editTarget.drawableID + 1);
            this.updateDrawableProperties(this._CheckerDrawableId, { skinId: this._CheckerSkinId });
        }
        /**
         * @returns {boolean} whether this Checker is visible.
         */

    }, {
        key: 'setEditTargetBoxVisible',
        value: function setEditTargetBoxVisible(visible) {
            var id = this._CheckerDrawableId;
            if (id !== null) {
                var checker = this._allDrawables[id];
                checker.setVisible(visible);
            }
        }
        /**
         * @returns {boolean} whether this Checker is visible.
         */

    }, {
        key: 'setCheckerVisible',
        value: function setCheckerVisible(visible) {
            var id = this._CheckerDrawableId;
            if (id !== null) {
                var checker = this._allDrawables[id];
                checker.setVisible(visible);
            }
        }
        /**
         * @returns {boolean} whether this Checker is visible.
         */

    }, {
        key: 'getCheckerVisible',
        value: function getCheckerVisible() {
            var id = this._CheckerDrawableId;
            if (id !== null) {
                var checker = this._allDrawables[id];
                return checker.getVisible();
            }
        }
        /**
         * Create a new CheckerSkin - a skin which implements a Scratch checker layer.
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createCheckerSkin',
        value: function createCheckerSkin() {
            var skinId = this._nextSkinId++;
            var newSkin = new CheckerSkin(skinId, this, this._xLeft, this._xRight, this._yBottom, this._yTop);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }
        /**
         * Create a new CheckerSkin - a skin which implements a Scratch checker layer.
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createEditTargetBoxSkin',
        value: function createEditTargetBoxSkin(editTarget, targetDrawable) {
            var skinId = this._nextSkinId++;
            var newSkin = new EditTargetBoxSkin(skinId, this, editTarget, targetDrawable);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }
        /**
         * Destroy an existing skin. Do not use the skin or its ID after calling this.
         * @param {!int} skinId - The ID of the skin to destroy.
         */

    }, {
        key: 'destroySkin',
        value: function destroySkin(skinId) {
            var oldSkin = this._allSkins[skinId];
            oldSkin.dispose();
            delete this._allSkins[skinId];
        }

        /**
         * Create a new Drawable and add it to the scene.
         * @returns {int} The ID of the new Drawable.
         */

    }, {
        key: 'createDrawable',
        value: function createDrawable() {
            var drawableID = this._nextDrawableId++;
            var drawable = new Drawable(drawableID);
            this._allDrawables[drawableID] = drawable;
            this._drawList.push(drawableID);

            drawable.skin = null;

            return drawableID;
        }

        /**
         * Destroy a Drawable, removing it from the scene.
         * @param {int} drawableID The ID of the Drawable to remove.
         */

    }, {
        key: 'destroyDrawable',
        value: function destroyDrawable(drawableID) {
            var drawable = this._allDrawables[drawableID];
            drawable.dispose();
            delete this._allDrawables[drawableID];

            var index = void 0;
            while ((index = this._drawList.indexOf(drawableID)) >= 0) {
                this._drawList.splice(index, 1);
            }
        }

        /**
         * Set a drawable's order in the drawable list (effectively, z/layer).
         * Can be used to move drawables to absolute positions in the list,
         * or relative to their current positions.
         * "go back N layers": setDrawableOrder(id, -N, true, 1); (assuming stage at 0).
         * "go to back": setDrawableOrder(id, 1); (assuming stage at 0).
         * "go to front": setDrawableOrder(id, Infinity);
         * @param {int} drawableID ID of Drawable to reorder.
         * @param {number} order New absolute order or relative order adjusment.
         * @param {boolean=} optIsRelative If set, `order` refers to a relative change.
         * @param {number=} optMin If set, order constrained to be at least `optMin`.
         * @return {?number} New order if changed, or null.
         */

    }, {
        key: 'setDrawableOrder',
        value: function setDrawableOrder(drawableID, order, optIsRelative, optMin) {
            var oldIndex = this._drawList.indexOf(drawableID);
            if (oldIndex >= 0) {
                // Remove drawable from the list.
                var _drawable2 = this._drawList.splice(oldIndex, 1)[0];
                // Determine new index.
                var newIndex = order;
                if (optIsRelative) {
                    newIndex += oldIndex;
                }
                if (optMin) {
                    newIndex = Math.max(newIndex, optMin);
                }
                newIndex = Math.max(newIndex, 0);
                // Insert at new index.
                this._drawList.splice(newIndex, 0, _drawable2);
                return this._drawList.indexOf(_drawable2);
            }
            return null;
        }

        /**
         * Draw all current drawables and present the frame on the canvas.
         */

    }, {
        key: 'draw',
        value: function draw() {
            var gl = this._gl;

            twgl.bindFramebufferInfo(gl, null);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.clearColor.apply(gl, this._backgroundColor);
            gl.clear(gl.COLOR_BUFFER_BIT);

            this._drawThese(this._drawList, ShaderManager.DRAW_MODE.default, this._projection);
            //this.thumbnail = gl.canvas.toDataURL('image/png');
        }

        /**
         * Get the precise bounds for a Drawable.
         * @param {int} drawableID ID of Drawable to get bounds for.
         * @return {object} Bounds for a tight box around the Drawable.
         */

    }, {
        key: 'getBounds',
        value: function getBounds(drawableID) {
            var drawable = this._allDrawables[drawableID];
            // Tell the Drawable about its updated convex hull, if necessary.
            if (drawable.needsConvexHullPoints()) {
                var points = this._getConvexHullPointsForDrawable(drawableID);
                drawable.setConvexHullPoints(points);
            }
            var bounds = drawable.getFastBounds();
            // In debug mode, draw the bounds.
            if (this._debugCanvas) {
                var gl = this._gl;
                this._debugCanvas.width = gl.canvas.width;
                this._debugCanvas.height = gl.canvas.height;
                var context = this._debugCanvas.getContext('2d');
                context.drawImage(gl.canvas, 0, 0);
                context.strokeStyle = '#FF0000';
                var pr = window.devicePixelRatio;
                context.strokeRect(pr * (bounds.left + this._nativeSize[0] / 2), pr * (-bounds.top + this._nativeSize[1] / 2), pr * (bounds.right - bounds.left), pr * (-bounds.bottom + bounds.top));
            }
            return bounds;
        }

        /**
         * Get the current skin (costume) size of a Drawable.
         * @param {int} drawableID The ID of the Drawable to measure.
         * @return {Array<number>} Skin size, width and height.
         */

    }, {
        key: 'getSkinSize',
        value: function getSkinSize(drawableID) {
            var drawable = this._allDrawables[drawableID];
            return drawable.skin.size;
        }

        /**
         * Check if a particular Drawable is touching a particular color.
         * @param {int} drawableID The ID of the Drawable to check.
         * @param {Array<int>} color3b Test if the Drawable is touching this color.
         * @param {Array<int>} [mask3b] Optionally mask the check to this part of Drawable.
         * @returns {boolean} True iff the Drawable is touching the color.
         */

    }, {
        key: 'isTouchingColor',
        value: function isTouchingColor(drawableID, color3b, mask3b) {
            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            var bounds = this._touchingBounds(drawableID);
            if (!bounds) {
                return;
            }
            var candidateIDs = this._filterCandidatesTouching(drawableID, this._drawList, bounds);
            if (!candidateIDs) {
                return;
            }

            // Limit size of viewport to the bounds around the target Drawable,
            // and create the projection matrix for the draw.
            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            gl.clearColor.apply(gl, this._backgroundColor);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

            var extraUniforms = void 0;
            if (mask3b) {
                extraUniforms = {
                    u_colorMask: [mask3b[0] / 255, mask3b[1] / 255, mask3b[2] / 255],
                    u_colorMaskTolerance: TOLERANCE_TOUCHING_COLOR / 255
                };
            }

            try {
                gl.enable(gl.STENCIL_TEST);
                gl.stencilFunc(gl.ALWAYS, 1, 1);
                gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
                gl.colorMask(false, false, false, false);
                this._drawThese([drawableID], mask3b ? ShaderManager.DRAW_MODE.colorMask : ShaderManager.DRAW_MODE.silhouette, projection, { extraUniforms: extraUniforms });

                gl.stencilFunc(gl.EQUAL, 1, 1);
                gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
                gl.colorMask(true, true, true, true);

                this._drawThese(candidateIDs, ShaderManager.DRAW_MODE.default, projection, { idFilterFunc: function idFilterFunc(testID) {
                        return testID !== drawableID;
                    } });
            } finally {
                gl.colorMask(true, true, true, true);
                gl.disable(gl.STENCIL_TEST);
            }

            var pixels = new Uint8Array(Math.floor(bounds.width * bounds.height * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

            if (this._debugCanvas) {
                this._debugCanvas.width = bounds.width;
                this._debugCanvas.height = bounds.height;
                var context = this._debugCanvas.getContext('2d');
                var imageData = context.getImageData(0, 0, bounds.width, bounds.height);
                imageData.data.set(pixels);
                context.putImageData(imageData, 0, 0);
            }

            for (var pixelBase = 0; pixelBase < pixels.length; pixelBase += 4) {
                var pixelDistanceR = Math.abs(pixels[pixelBase] - color3b[0]);
                var pixelDistanceG = Math.abs(pixels[pixelBase + 1] - color3b[1]);
                var pixelDistanceB = Math.abs(pixels[pixelBase + 2] - color3b[2]);

                if (pixelDistanceR <= TOLERANCE_TOUCHING_COLOR && pixelDistanceG <= TOLERANCE_TOUCHING_COLOR && pixelDistanceB <= TOLERANCE_TOUCHING_COLOR) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Check if a particular Drawable is touching any in a set of Drawables.
         * @param {int} drawableID The ID of the Drawable to check.
         * @param {Array<int>} candidateIDs The Drawable IDs to check, otherwise all.
         * @returns {boolean} True iff the Drawable is touching one of candidateIDs.
         */

    }, {
        key: 'isTouchingDrawables',
        value: function isTouchingDrawables(drawableID, candidateIDs) {
            candidateIDs = candidateIDs || this._drawList;

            var gl = this._gl;

            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            var bounds = this._touchingBounds(drawableID);
            if (!bounds) {
                return;
            }
            candidateIDs = this._filterCandidatesTouching(drawableID, candidateIDs, bounds);
            if (!candidateIDs) {
                return;
            }

            // Limit size of viewport to the bounds around the target Drawable,
            // and create the projection matrix for the draw.
            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            var noneColor = Drawable.color4fFromID(RenderConstants.ID_NONE);
            gl.clearColor.apply(gl, noneColor);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

            try {
                gl.enable(gl.STENCIL_TEST);
                gl.stencilFunc(gl.ALWAYS, 1, 1);
                gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
                gl.colorMask(false, false, false, false);
                this._drawThese([drawableID], ShaderManager.DRAW_MODE.silhouette, projection);

                gl.stencilFunc(gl.EQUAL, 1, 1);
                gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
                gl.colorMask(true, true, true, true);

                this._drawThese(candidateIDs, ShaderManager.DRAW_MODE.silhouette, projection, { idFilterFunc: function idFilterFunc(testID) {
                        return testID !== drawableID;
                    } });
            } finally {
                gl.colorMask(true, true, true, true);
                gl.disable(gl.STENCIL_TEST);
            }

            var pixels = new Uint8Array(Math.floor(bounds.width * bounds.height * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

            if (this._debugCanvas) {
                this._debugCanvas.width = bounds.width;
                this._debugCanvas.height = bounds.height;
                var context = this._debugCanvas.getContext('2d');
                var imageData = context.getImageData(0, 0, bounds.width, bounds.height);
                imageData.data.set(pixels);
                context.putImageData(imageData, 0, 0);
            }

            for (var pixelBase = 0; pixelBase < pixels.length; pixelBase += 4) {
                var pixelID = Drawable.color3bToID(pixels[pixelBase], pixels[pixelBase + 1], pixels[pixelBase + 2]);
                if (pixelID > RenderConstants.ID_NONE) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Detect which sprite, if any, is at the given location.
         * @param {int} centerX The client x coordinate of the picking location.
         * @param {int} centerY The client y coordinate of the picking location.
         * @param {int} touchWidth The client width of the touch event (optional).
         * @param {int} touchHeight The client height of the touch event (optional).
         * @param {Array<int>} candidateIDs The Drawable IDs to pick from, otherwise all.
         * @returns {int} The ID of the topmost Drawable under the picking location, or
         * RenderConstants.ID_NONE if there is no Drawable at that location.
         */

    }, {
        key: 'pick',
        value: function pick(centerX, centerY, touchWidth, touchHeight, candidateIDs) {
            var gl = this._gl;

            touchWidth = touchWidth || 1;
            touchHeight = touchHeight || 1;
            candidateIDs = candidateIDs || this._drawList;

            var clientToGLX = gl.canvas.width / gl.canvas.clientWidth;
            var clientToGLY = gl.canvas.height / gl.canvas.clientHeight;

            centerX *= clientToGLX;
            centerY *= clientToGLY;
            touchWidth *= clientToGLX;
            touchHeight *= clientToGLY;

            touchWidth = Math.max(1, Math.min(touchWidth, MAX_TOUCH_SIZE[0]));
            touchHeight = Math.max(1, Math.min(touchHeight, MAX_TOUCH_SIZE[1]));

            var pixelLeft = Math.floor(centerX - Math.floor(touchWidth / 2) + 0.5);
            var pixelRight = Math.floor(centerX + Math.ceil(touchWidth / 2) + 0.5);
            var pixelTop = Math.floor(centerY - Math.floor(touchHeight / 2) + 0.5);
            var pixelBottom = Math.floor(centerY + Math.ceil(touchHeight / 2) + 0.5);

            twgl.bindFramebufferInfo(gl, this._pickBufferInfo);
            gl.viewport(0, 0, touchWidth, touchHeight);

            var noneColor = Drawable.color4fFromID(RenderConstants.ID_NONE);
            gl.clearColor.apply(gl, noneColor);
            gl.clear(gl.COLOR_BUFFER_BIT);

            var widthPerPixel = (this._xRight - this._xLeft) / this._gl.canvas.width;
            var heightPerPixel = (this._yBottom - this._yTop) / this._gl.canvas.height;

            var pickLeft = this._xLeft + pixelLeft * widthPerPixel;
            var pickRight = this._xLeft + pixelRight * widthPerPixel;
            var pickTop = this._yTop + pixelTop * heightPerPixel;
            var pickBottom = this._yTop + pixelBottom * heightPerPixel;

            var projection = twgl.m4.ortho(pickLeft, pickRight, pickTop, pickBottom, -1, 1);

            this._drawThese(candidateIDs, ShaderManager.DRAW_MODE.silhouette, projection);

            var pixels = new Uint8Array(Math.floor(touchWidth * touchHeight * 4));
            gl.readPixels(0, 0, touchWidth, touchHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

            if (this._debugCanvas) {
                this._debugCanvas.width = touchWidth;
                this._debugCanvas.height = touchHeight;
                var context = this._debugCanvas.getContext('2d');
                var imageData = context.getImageData(0, 0, touchWidth, touchHeight);
                imageData.data.set(pixels);
                context.putImageData(imageData, 0, 0);
            }

            var hits = {};
            for (var pixelBase = 0; pixelBase < pixels.length; pixelBase += 4) {
                var pixelID = Drawable.color3bToID(pixels[pixelBase], pixels[pixelBase + 1], pixels[pixelBase + 2]);
                hits[pixelID] = (hits[pixelID] || 0) + 1;
            }

            // Bias toward selecting anything over nothing
            hits[RenderConstants.ID_NONE] = 0;

            var hit = RenderConstants.ID_NONE;
            for (var hitID in hits) {
                if (hits.hasOwnProperty(hitID) && hits[hitID] > hits[hit]) {
                    hit = hitID;
                }
            }

            return hit | 0;
        }

        /**
         * @typedef DrawableExtraction
         * @property {Uint8Array} data Raw pixel data for the drawable
         * @property {int} width Drawable bounding box width
         * @property {int} height Drawable bounding box height
         * @property {Array<number>} scratchOffset [x, y] offset in Scratch coordinates
         * from the drawable position to the client x, y coordinate
         * @property {int} x The x coordinate relative to drawable bounding box
         * @property {int} y The y coordinate relative to drawable bounding box
         */

        /**
         * Return drawable pixel data and picking coordinates relative to the drawable bounds
         * @param {int} drawableID The ID of the drawable to get pixel data for
         * @param {int} x The client x coordinate of the picking location.
         * @param {int} y The client y coordinate of the picking location.
         * @return {?DrawableExtraction} Data about the picked drawable
         */

    }, {
        key: 'extractDrawable',
        value: function extractDrawable(drawableID, x, y) {
            var drawable = this._allDrawables[drawableID];
            if (!drawable) return null;

            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            var bounds = drawable.getFastBounds();
            bounds.snapToInt();

            // Translate input x and y to coordinates relative to the drawable
            var pickX = x - (this._nativeSize[0] / 2 + bounds.left);
            var pickY = y - (this._nativeSize[1] / 2 - bounds.top);

            // Limit size of viewport to the bounds around the target Drawable,
            // and create the projection matrix for the draw.
            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            try {
                gl.disable(gl.BLEND);
                this._drawThese([drawableID], ShaderManager.DRAW_MODE.default, projection, { effectMask: ~ShaderManager.EFFECT_INFO.ghost.mask });
            } finally {
                gl.enable(gl.BLEND);
            }

            var data = new Uint8Array(Math.floor(bounds.width * bounds.height * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height, gl.RGBA, gl.UNSIGNED_BYTE, data);

            if (this._debugCanvas) {
                this._debugCanvas.width = bounds.width;
                this._debugCanvas.height = bounds.height;
                var ctx = this._debugCanvas.getContext('2d');
                var imageData = ctx.createImageData(bounds.width, bounds.height);
                imageData.data.set(data);
                ctx.putImageData(imageData, 0, 0);
                ctx.beginPath();
                ctx.arc(pickX, pickY, 3, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }

            return {
                data: data,
                width: bounds.width,
                height: bounds.height,
                scratchOffset: [this._nativeSize[0] / 2 - x + drawable._position[0], this._nativeSize[1] / 2 - y - drawable._position[1]],
                x: pickX,
                y: pickY
            };
        }

        /**
         * Get the candidate bounding box for a touching query.
         * @param {int} drawableID ID for drawable of query.
         * @return {?Rectangle} Rectangle bounds for touching query, or null.
         */

    }, {
        key: '_touchingBounds',
        value: function _touchingBounds(drawableID) {
            var drawable = this._allDrawables[drawableID];

            /** @todo remove this once URL-based skin setting is removed. */
            if (!drawable.skin || !drawable.skin.getTexture([100, 100])) return null;

            var bounds = drawable.getFastBounds();

            // Limit queries to the stage size.
            bounds.clamp(this._xLeft, this._xRight, this._yBottom, this._yTop);

            // Use integer coordinates for queries - weird things happen
            // when you provide float width/heights to gl.viewport and projection.
            bounds.snapToInt();

            if (bounds.width === 0 || bounds.height === 0) {
                // No space to query.
                return null;
            }
            return bounds;
        }

        /**
         * Filter a list of candidates for a touching query into only those that
         * could possibly intersect the given bounds.
         * @param {int} drawableID - ID for drawable of query.
         * @param {Array<int>} candidateIDs - Candidates for touching query.
         * @param {Rectangle} bounds - Bounds to limit candidates to.
         * @return {?Array<int>} Filtered candidateIDs, or null if none.
         */

    }, {
        key: '_filterCandidatesTouching',
        value: function _filterCandidatesTouching(drawableID, candidateIDs, bounds) {
            var _this2 = this;

            // Filter candidates by rough bounding box intersection.
            // Do this before _drawThese, so we can prevent any GL operations
            // and readback by returning early.
            candidateIDs = candidateIDs.filter(function (testID) {
                if (testID === drawableID) return false;
                // Only draw items which could possibly overlap target Drawable.
                var candidate = _this2._allDrawables[testID];
                var candidateBounds = candidate.getFastBounds();
                return bounds.intersects(candidateBounds);
            });
            if (candidateIDs.length === 0) {
                // No possible intersections based on bounding boxes.
                return null;
            }
            return candidateIDs;
        }

        /**
         * Update the position, direction, scale, or effect properties of this Drawable.
         * @param {int} drawableID The ID of the Drawable to update.
         * @param {object.<string,*>} properties The new property values to set.
         */

    }, {
        key: 'updateDrawableProperties',
        value: function updateDrawableProperties(drawableID, properties) {
            var drawable = this._allDrawables[drawableID];
            if (!drawable) {
                /**
                 * @todo fix whatever's wrong in the VM which causes this, then add a warning or throw here.
                 * Right now this happens so much on some projects that a warning or exception here can hang the browser.
                 */
                return;
            }
            if ('skinId' in properties) {
                drawable.skin = this._allSkins[properties.skinId];
            }
            if ('rotationCenter' in properties) {
                var newRotationCenter = properties.rotationCenter;
                drawable.skin.setRotationCenter(newRotationCenter[0], newRotationCenter[1]);
            }
            drawable.updateProperties(properties);
        }

        /**
         * Update the position object's x & y members to keep the drawable fenced in view.
         * @param {int} drawableID - The ID of the Drawable to update.
         * @param {Array.<number, number>} position to be fenced - An array of type [x, y]
         * @return {Array.<number, number>} The fenced position as an array [x, y]
         */

    }, {
        key: 'getFencedPositionOfDrawable',
        value: function getFencedPositionOfDrawable(drawableID, position) {

            var x = position[0];
            var y = position[1];

            var drawable = this._allDrawables[drawableID];
            if (!drawable) {
                // TODO: fix whatever's wrong in the VM which causes this, then add a warning or throw here.
                // Right now this happens so much on some projects that a warning or exception here can hang the browser.
                return [x, y];
            }

            var dx = x - drawable._position[0];
            var dy = y - drawable._position[1];

            var aabb = drawable.getFastBounds();

            var sx = this._xRight - Math.min(FENCE_WIDTH, Math.floor((aabb.right - aabb.left) / 2));
            if (aabb.right + dx < -sx) {
                x = drawable._position[0] - (sx + aabb.right);
            } else if (aabb.left + dx > sx) {
                x = drawable._position[0] + (sx - aabb.left);
            }
            var sy = this._yTop - Math.min(FENCE_WIDTH, Math.floor((aabb.top - aabb.bottom) / 2));
            if (aabb.top + dy < -sy) {
                y = drawable._position[1] - (sy + aabb.top);
            } else if (aabb.bottom + dy > sy) {
                y = drawable._position[1] + (sy - aabb.bottom);
            }
            return [x, y];
        }

        /**
         * Clear a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         */

    }, {
        key: 'penClear',
        value: function penClear(penSkinID) {
            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];
            skin.clear();
        }

        /**
         * Draw a point on a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         * @param {PenAttributes} penAttributes - how the point should be drawn.
         * @param {number} x - the X coordinate of the point to draw.
         * @param {number} y - the Y coordinate of the point to draw.
         */

    }, {
        key: 'penPoint',
        value: function penPoint(penSkinID, penAttributes, x, y) {
            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];
            skin.drawPoint(penAttributes, x, y);
        }

        /**
         * Draw a line on a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         * @param {PenAttributes} penAttributes - how the line should be drawn.
         * @param {number} x0 - the X coordinate of the beginning of the line.
         * @param {number} y0 - the Y coordinate of the beginning of the line.
         * @param {number} x1 - the X coordinate of the end of the line.
         * @param {number} y1 - the Y coordinate of the end of the line.
         */

    }, {
        key: 'penLine',
        value: function penLine(penSkinID, penAttributes, x0, y0, x1, y1) {
            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];
            skin.drawLine(penAttributes, x0, y0, x1, y1);
        }

        /**
         * Stamp a Drawable onto a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         * @param {int} stampID - the unique ID of the Drawable to use as the stamp.
         */

    }, {
        key: 'penStamp',
        value: function penStamp(penSkinID, stampID) {
            var stampDrawable = this._allDrawables[stampID];
            if (!stampDrawable) {
                return;
            }

            var bounds = this._touchingBounds(stampID);
            if (!bounds) {
                return;
            }

            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];

            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            // Limit size of viewport to the bounds around the stamp Drawable and create the projection matrix for the draw.
            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            try {
                gl.disable(gl.BLEND);
                this._drawThese([stampID], ShaderManager.DRAW_MODE.default, projection, { isStamping: true });
            } finally {
                gl.enable(gl.BLEND);
            }

            var stampPixels = new Uint8Array(Math.floor(bounds.width * bounds.height * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height, gl.RGBA, gl.UNSIGNED_BYTE, stampPixels);

            var stampCanvas = this._tempCanvas;
            stampCanvas.width = bounds.width;
            stampCanvas.height = bounds.height;

            var stampContext = stampCanvas.getContext('2d');
            var stampImageData = stampContext.createImageData(bounds.width, bounds.height);
            stampImageData.data.set(stampPixels);
            stampContext.putImageData(stampImageData, 0, 0);

            skin.drawStamp(stampCanvas, bounds.left, bounds.top);
        }

        /* ******
         * Truly internal functions: these support the functions above.
         ********/

        /**
         * Build geometry (vertex and index) buffers.
         * @private
         */

    }, {
        key: '_createGeometry',
        value: function _createGeometry() {
            var quad = {
                a_position: {
                    numComponents: 2,
                    data: [-0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5]
                },
                a_texCoord: {
                    numComponents: 2,
                    data: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]
                }
            };
            this._bufferInfo = twgl.createBufferInfoFromArrays(this._gl, quad);
        }

        /**
         * Respond to a change in the "native" rendering size. The native size is used by buffers which are fixed in size
         * regardless of the size of the main render target. This includes the buffers used for queries such as picking and
         * color-touching. The fixed size allows (more) consistent behavior across devices and presentation modes.
         * @param {object} event - The change event.
         * @private
         */

    }, {
        key: 'onNativeSizeChanged',
        value: function onNativeSizeChanged(event) {
            var _event$newSize = _slicedToArray(event.newSize, 2),
                width = _event$newSize[0],
                height = _event$newSize[1];

            var gl = this._gl;
            var attachments = [{ format: gl.RGBA }, { format: gl.DEPTH_STENCIL }];

            if (!this._pickBufferInfo) {
                this._pickBufferInfo = twgl.createFramebufferInfo(gl, attachments, MAX_TOUCH_SIZE[0], MAX_TOUCH_SIZE[1]);
            }

            /** @todo should we create this on demand to save memory? */
            // A 480x360 32-bpp buffer is 675 KiB.
            if (this._queryBufferInfo) {
                twgl.resizeFramebufferInfo(gl, this._queryBufferInfo, attachments, width, height);
            } else {
                this._queryBufferInfo = twgl.createFramebufferInfo(gl, attachments, width, height);
            }
        }

        /**
         * Draw a set of Drawables, by drawable ID
         * @param {Array<int>} drawables The Drawable IDs to draw, possibly this._drawList.
         * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
         * @param {module:twgl/m4.Mat4} projection The projection matrix to use.
         * @param {object} [opts] Options for drawing
         * @param {idFilterFunc} opts.filter An optional filter function.
         * @param {object.<string,*>} opts.extraUniforms Extra uniforms for the shaders.
         * @param {int} opts.effectMask Bitmask for effects to allow
         * @param {boolean} opts.isStamping Stamp mode ignores sprite visibility, always drawing.
         * @private
         */

    }, {
        key: '_drawThese',
        value: function _drawThese(drawables, drawMode, projection) {
            var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            // console.log(this._allDrawables);
            var gl = this._gl;
            var currentShader = null;
            this.setDrawableOrder(this._CheckerDrawableId, this._nextDrawableId);
            var numDrawables = drawables.length;
            for (var drawableIndex = 0; drawableIndex < numDrawables; ++drawableIndex) {
                var drawableID = drawables[drawableIndex];

                // If we have a filter, check whether the ID fails
                if (opts.filter && !opts.filter(drawableID)) continue;

                var _drawable3 = this._allDrawables[drawableID];
                /** @todo check if drawable is inside the viewport before anything else */

                // Hidden drawables (e.g., by a "hide" block) are not drawn unless stamping
                if (!_drawable3.getVisible() && !opts.isStamping) continue;

                var drawableScale = _drawable3.scale;

                // If the skin or texture isn't ready yet, skip it.
                if (!_drawable3.skin || !_drawable3.skin.getTexture(drawableScale)) continue;

                var effectBits = _drawable3.getEnabledEffects();
                effectBits &= opts.hasOwnProperty('effectMask') ? opts.effectMask : effectBits;
                var newShader = this._shaderManager.getShader(drawMode, effectBits);
                if (currentShader !== newShader) {
                    currentShader = newShader;
                    gl.useProgram(currentShader.program);
                    twgl.setBuffersAndAttributes(gl, currentShader, this._bufferInfo);
                    twgl.setUniforms(currentShader, { u_projectionMatrix: projection });
                    twgl.setUniforms(currentShader, { u_fudge: window.fudge || 0 });
                }

                twgl.setUniforms(currentShader, _drawable3.skin.getUniforms(drawableScale));
                twgl.setUniforms(currentShader, _drawable3.getUniforms());

                // Apply extra uniforms after the Drawable's, to allow overwriting.
                if (opts.extraUniforms) {
                    twgl.setUniforms(currentShader, opts.extraUniforms);
                }
                twgl.drawBufferInfo(gl, this._bufferInfo, gl.TRIANGLES);
            }
        }

        /**
         * Get the convex hull points for a particular Drawable.
         * To do this, draw the Drawable unrotated, unscaled, and untranslated.
         * Read back the pixels and find all boundary points.
         * Finally, apply a convex hull algorithm to simplify the set.
         * @param {int} drawableID The Drawable IDs calculate convex hull for.
         * @return {Array<Array<number>>} points Convex hull points, as [[x, y], ...]
         */

    }, {
        key: '_getConvexHullPointsForDrawable',
        value: function _getConvexHullPointsForDrawable(drawableID) {
            var drawable = this._allDrawables[drawableID];

            var _drawable$skin$size = _slicedToArray(drawable.skin.size, 2),
                width = _drawable$skin$size[0],
                height = _drawable$skin$size[1];
            // No points in the hull if invisible or size is 0.


            if (!drawable.getVisible() || width === 0 || height === 0) {
                return [];
            }

            // Only draw to the size of the untransformed drawable.
            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);
            gl.viewport(0, 0, width, height);

            // Clear the canvas with RenderConstants.ID_NONE.
            var noneColor = Drawable.color4fFromID(RenderConstants.ID_NONE);
            gl.clearColor.apply(gl, noneColor);
            gl.clear(gl.COLOR_BUFFER_BIT);

            // Overwrite the model matrix to be unrotated, unscaled, untranslated.
            var modelMatrix = twgl.m4.identity();
            twgl.m4.rotateZ(modelMatrix, Math.PI, modelMatrix);
            twgl.m4.scale(modelMatrix, [width, height], modelMatrix);

            var projection = twgl.m4.ortho(-0.5 * width, 0.5 * width, -0.5 * height, 0.5 * height, -1, 1);

            this._drawThese([drawableID], ShaderManager.DRAW_MODE.silhouette, projection, { extraUniforms: { u_modelMatrix: modelMatrix } });

            var pixels = new Uint8Array(Math.floor(width * height * 4));
            gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

            // Known boundary points on left/right edges of pixels.
            var boundaryPoints = [];

            /**
             * Helper method to look up a pixel.
             * @param {int} x X coordinate of the pixel in `pixels`.
             * @param {int} y Y coordinate of the pixel in `pixels`.
             * @return {int} Known ID at that pixel, or RenderConstants.ID_NONE.
             */
            var _getPixel = function _getPixel(x, y) {
                var pixelBase = Math.round((width * y + x) * 4); // Sometimes SVGs don't have int width and height
                return Drawable.color3bToID(pixels[pixelBase], pixels[pixelBase + 1], pixels[pixelBase + 2]);
            };
            for (var y = 0; y <= height; y++) {
                // Scan from left.
                for (var x = 0; x < width; x++) {
                    if (_getPixel(x, y) > RenderConstants.ID_NONE) {
                        boundaryPoints.push([x, y]);
                        break;
                    }
                }
                // Scan from right.
                for (var _x2 = width - 1; _x2 >= 0; _x2--) {
                    if (_getPixel(_x2, y) > RenderConstants.ID_NONE) {
                        boundaryPoints.push([_x2, y]);
                        break;
                    }
                }
            }
            // Simplify boundary points using convex hull.
            return hull(boundaryPoints, Infinity);
        }
    }, {
        key: 'gl',
        get: function get() {
            return this._gl;
        }
    }]);

    return RenderWebGL;
}(EventEmitter);

// :3


RenderWebGL.prototype.canHazPixels = RenderWebGL.prototype.extractDrawable;

module.exports = RenderWebGL;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(0);

var Skin = __webpack_require__(2);

var BitmapSkin = function (_Skin) {
    _inherits(BitmapSkin, _Skin);

    /**
     * Create a new Bitmap Skin.
     * @extends Skin
     * @param {!int} id - The ID for this Skin.
     * @param {!RenderWebGL} renderer - The renderer which will use this skin.
     */
    function BitmapSkin(id, renderer) {
        _classCallCheck(this, BitmapSkin);

        /** @type {!int} */
        var _this = _possibleConstructorReturn(this, (BitmapSkin.__proto__ || Object.getPrototypeOf(BitmapSkin)).call(this, id));

        _this._costumeResolution = 1;

        /** @type {!RenderWebGL} */
        _this._renderer = renderer;

        /** @type {WebGLTexture} */
        _this._texture = null;

        /** @type {Array<int>} */
        _this._textureSize = [0, 0];
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(BitmapSkin, [{
        key: 'dispose',
        value: function dispose() {
            if (this._texture) {
                this._renderer.gl.deleteTexture(this._texture);
                this._texture = null;
            }
            _get(BitmapSkin.prototype.__proto__ || Object.getPrototypeOf(BitmapSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @return {Array<number>} the "native" size, in texels, of this skin.
         */

    }, {
        key: 'getTexture',


        /**
         * @param {Array<number>} scale - The scaling factors to be used.
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given scale.
         */
        // eslint-disable-next-line no-unused-vars
        value: function getTexture(scale) {
            return this._texture;
        }

        /**
         * Set the contents of this skin to a snapshot of the provided bitmap data.
         * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} bitmapData - new contents for this skin.
         * @param {int} [costumeResolution=1] - The resolution to use for this bitmap.
         * @param {Array<number>} [rotationCenter] - Optional rotation center for the bitmap. If not supplied, it will be
         * calculated from the bounding box
         * @fires Skin.event:WasAltered
         */

    }, {
        key: 'setBitmap',
        value: function setBitmap(bitmapData, costumeResolution, rotationCenter) {
            var gl = this._renderer.gl;

            if (this._texture) {
                gl.bindTexture(gl.TEXTURE_2D, this._texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
            } else {
                var textureOptions = {
                    auto: true,
                    mag: gl.NEAREST,
                    /** @todo mipmaps, linear (except pixelate) */
                    min: gl.NEAREST,
                    wrap: gl.CLAMP_TO_EDGE,
                    src: bitmapData
                };

                this._texture = twgl.createTexture(gl, textureOptions);
            }

            // Do these last in case any of the above throws an exception
            this._costumeResolution = costumeResolution || 1;
            this._textureSize = BitmapSkin._getBitmapSize(bitmapData);

            if (typeof rotationCenter === 'undefined') rotationCenter = this.calculateRotationCenter();
            this.setRotationCenter.apply(this, rotationCenter);

            this.emit(Skin.Events.WasAltered);
        }

        /**
         * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} bitmapData - bitmap data to inspect.
         * @returns {Array<int>} the width and height of the bitmap data, in pixels.
         * @private
         */

    }, {
        key: 'size',
        get: function get() {
            return [this._textureSize[0] / this._costumeResolution, this._textureSize[1] / this._costumeResolution];
        }
    }], [{
        key: '_getBitmapSize',
        value: function _getBitmapSize(bitmapData) {
            if (bitmapData instanceof HTMLImageElement) {
                return [bitmapData.naturalWidth || bitmapData.width, bitmapData.naturalHeight || bitmapData.height];
            }

            if (bitmapData instanceof HTMLVideoElement) {
                return [bitmapData.videoWidth || bitmapData.width, bitmapData.videoHeight || bitmapData.height];
            }

            // ImageData or HTMLCanvasElement
            return [bitmapData.width, bitmapData.height];
        }
    }]);

    return BitmapSkin;
}(Skin);

module.exports = BitmapSkin;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Wyp on 2017/7/17.
 */
var twgl = __webpack_require__(0);

var RenderConstants = __webpack_require__(1);
var PenSkin = __webpack_require__(3);

var CheckerSkin = function (_PenSkin) {
    _inherits(CheckerSkin, _PenSkin);

    /**
     * Create a Skin which implements a Scratch pen layer.
     * @param {int} id - The unique ID for this Skin.
     * @param {RenderWebGL} renderer - The renderer which will use this Skin.
     * @extends PenSkin
     */
    function CheckerSkin(id, renderer, xLeft, xRight, yBottom, yTop) {
        _classCallCheck(this, CheckerSkin);

        var _this = _possibleConstructorReturn(this, (CheckerSkin.__proto__ || Object.getPrototypeOf(CheckerSkin)).call(this, id, renderer));

        _this._xLeft = xLeft;
        _this._xRight = xRight;
        _this._yBottom = yBottom;
        _this._yTop = yTop;
        _this.drawChecker();
        return _this;
    }

    _createClass(CheckerSkin, [{
        key: 'drawChecker',
        value: function drawChecker() {
            var xLeft = this._xLeft;
            var xRight = this._xRight;
            var yBottom = this._yBottom;
            var yTop = this._yTop;

            var mainAxis = {
                coordinates: [{ x0: xLeft, y0: 0, x1: xRight, y1: 0 }, { x0: 0, y0: yBottom, x1: 0, y1: yTop }],
                penAttributes: {
                    diameter: 2,
                    color4f: [0.2, 0.6, 0.6, 0.8]
                }
            };
            this.drawText({ text: 0, y: 0, x: 0 });
            var unitAxis = {
                coordinates: [],
                penAttributes: {
                    diameter: 1,
                    color4f: [0.2, 0.6, 0.6, 0.6]
                }
            };
            var baseCoord = 100;
            while (baseCoord < xRight) {
                unitAxis.coordinates.push({ x0: baseCoord, y0: yBottom, x1: baseCoord, y1: yTop });
                unitAxis.coordinates.push({ x0: -baseCoord, y0: yBottom, x1: -baseCoord, y1: yTop });
                this.drawText({ text: baseCoord, y: 0, x: baseCoord });
                this.drawText({ text: -baseCoord, y: 0, x: -baseCoord });
                baseCoord += 100;
            }
            baseCoord = 100;
            while (baseCoord < yTop) {
                unitAxis.coordinates.push({ x0: xLeft, y0: baseCoord, x1: xRight, y1: baseCoord });
                unitAxis.coordinates.push({ x0: xLeft, y0: -baseCoord, x1: xRight, y1: -baseCoord });
                this.drawText({ text: -baseCoord, x: 0, y: baseCoord });
                this.drawText({ text: baseCoord, x: 0, y: -baseCoord });
                baseCoord += 100;
            }

            var detailAxis = {
                coordinates: [],
                penAttributes: {
                    diameter: 0.5,
                    color4f: [0.2, 0.6, 0.6, 0.5]
                }
            };
            baseCoord = 0;
            while (baseCoord < xRight) {
                baseCoord += 20;
                if (baseCoord % 100 === 0) continue;
                detailAxis.coordinates.push({ x0: baseCoord, y0: yBottom, x1: baseCoord, y1: yTop });
                detailAxis.coordinates.push({ x0: -baseCoord, y0: yBottom, x1: -baseCoord, y1: yTop });
            }
            baseCoord = 0;
            while (baseCoord < yTop) {
                baseCoord += 20;
                if (baseCoord % 100 === 0) continue;
                detailAxis.coordinates.push({ x0: xLeft, y0: baseCoord, x1: xRight, y1: baseCoord });
                detailAxis.coordinates.push({ x0: xLeft, y0: -baseCoord, x1: xRight, y1: -baseCoord });
            }

            this.drawAxis(mainAxis);
            this.drawAxis(unitAxis);
            this.drawAxis(detailAxis);
        }
    }, {
        key: 'drawAxis',
        value: function drawAxis(axisData) {
            var i;
            for (i = 0; i < axisData.coordinates.length; i++) {
                var c = axisData.coordinates[i];
                this.drawLine(axisData.penAttributes, c.x0, c.y0, c.x1, c.y1);
            }
        }
    }, {
        key: 'drawText',
        value: function drawText(textAttr) {
            var ctx = this._canvas.getContext('2d');
            ctx.font = '14px consolas';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'Middle';
            var r, g, b, a;
            r = 0.2;g = 0.6;b = 0.6;

            a = 0.8;
            ctx.fillStyle = "#00ffff"; //`rgba(${r},${g},${b},${a})`;
            ctx.strokeStyle = "#00ffff"; //`rgba(${r},${g},${b},${a})`;
            ctx.strokeText(textAttr.text, this._rotationCenter[0] + textAttr.x, this._rotationCenter[1] + textAttr.y);
            // ctx.font = 'bold 144px arial';
            // ctx.fillStyle = 'red';
            // ctx.fillText('World', 300,300);
        }
    }]);

    return CheckerSkin;
}(PenSkin);

module.exports = CheckerSkin;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var twgl = __webpack_require__(0);

var Rectangle = __webpack_require__(11);
var RenderConstants = __webpack_require__(1);
var ShaderManager = __webpack_require__(4);
var Skin = __webpack_require__(2);

var Drawable = function () {
    /**
     * An object which can be drawn by the renderer.
     * @todo double-buffer all rendering state (position, skin, effects, etc.)
     * @param {!int} id - This Drawable's unique ID.
     * @constructor
     */
    function Drawable(id) {
        _classCallCheck(this, Drawable);

        /** @type {!int} */
        this._id = id;

        /**
         * The uniforms to be used by the vertex and pixel shaders.
         * Some of these are used by other parts of the renderer as well.
         * @type {Object.<string,*>}
         * @private
         */
        this._uniforms = {
            /**
             * The model matrix, to concat with projection at draw time.
             * @type {module:twgl/m4.Mat4}
             */
            u_modelMatrix: twgl.m4.identity(),

            /**
             * The color to use in the silhouette draw mode.
             * @type {Array<number>}
             */
            u_silhouetteColor: Drawable.color4fFromID(this._id)
        };

        // Effect values are uniforms too
        var numEffects = ShaderManager.EFFECTS.length;
        for (var index = 0; index < numEffects; ++index) {
            var effectName = ShaderManager.EFFECTS[index];
            var converter = ShaderManager.EFFECT_INFO[effectName].converter;
            this._uniforms['u_' + effectName] = converter(0);
        }

        this._position = twgl.v3.create(0, 0);
        this._scale = twgl.v3.create(100, 100);
        this._direction = 90;
        this._transformDirty = true;
        this._visible = true;
        this._effectBits = 0;

        /** @todo move convex hull functionality, maybe bounds functionality overall, to Skin classes */
        this._convexHullPoints = null;
        this._convexHullDirty = true;

        this._skinWasAltered = this._skinWasAltered.bind(this);
    }

    /**
     * Dispose of this Drawable. Do not use it after calling this method.
     */


    _createClass(Drawable, [{
        key: 'dispose',
        value: function dispose() {
            // Use the setter: disconnect events
            this.skin = null;
        }

        /**
         * Mark this Drawable's transform as dirty.
         * It will be recalculated next time it's needed.
         */

    }, {
        key: 'setTransformDirty',
        value: function setTransformDirty() {
            this._transformDirty = true;
        }

        /**
         * @returns {number} The ID for this Drawable.
         */

    }, {
        key: 'getEnabledEffects',


        /**
         * @returns {int} A bitmask identifying which effects are currently in use.
         */
        value: function getEnabledEffects() {
            return this._effectBits;
        }

        /**
         * @returns {object.<string, *>} the shader uniforms to be used when rendering this Drawable.
         */

    }, {
        key: 'getUniforms',
        value: function getUniforms() {
            if (this._transformDirty) {
                this._calculateTransform();
            }
            return this._uniforms;
        }

        /**
         * @returns {boolean} whether this Drawable is visible.
         */

    }, {
        key: 'getVisible',
        value: function getVisible() {
            return this._visible;
        }

        /**
         * @returns {boolean} whether this Drawable is visible.
         */

    }, {
        key: 'setVisible',
        value: function setVisible(visible) {
            this._visible = visible;
            return this._visible;
        }

        /**
         * Update the position, direction, scale, or effect properties of this Drawable.
         * @param {object.<string,*>} properties The new property values to set.
         */

    }, {
        key: 'updateProperties',
        value: function updateProperties(properties) {
            var dirty = false;
            if ('position' in properties && (this._position[0] !== properties.position[0] || this._position[1] !== properties.position[1])) {
                this._position[0] = properties.position[0];
                this._position[1] = properties.position[1];
                dirty = true;
            }
            if ('direction' in properties && this._direction !== properties.direction) {
                this._direction = properties.direction;
                dirty = true;
            }
            if ('scale' in properties && (this._scale[0] !== properties.scale[0] || this._scale[1] !== properties.scale[1])) {
                this._scale[0] = properties.scale[0];
                this._scale[1] = properties.scale[1];
                dirty = true;
            }
            if ('visible' in properties) {
                this._visible = properties.visible;
                this.setConvexHullDirty();
            }
            if (dirty) {
                this.setTransformDirty();
            }
            var numEffects = ShaderManager.EFFECTS.length;
            for (var index = 0; index < numEffects; ++index) {
                var effectName = ShaderManager.EFFECTS[index];
                if (effectName in properties) {
                    var rawValue = properties[effectName];
                    var effectInfo = ShaderManager.EFFECT_INFO[effectName];
                    if (rawValue) {
                        this._effectBits |= effectInfo.mask;
                    } else {
                        this._effectBits &= ~effectInfo.mask;
                    }
                    var converter = effectInfo.converter;
                    this._uniforms['u_' + effectName] = converter(rawValue);
                    if (effectInfo.shapeChanges) {
                        this.setConvexHullDirty();
                    }
                }
            }
        }

        /**
         * Calculate the transform to use when rendering this Drawable.
         * @private
         */

    }, {
        key: '_calculateTransform',
        value: function _calculateTransform() {
            var modelMatrix = this._uniforms.u_modelMatrix;

            twgl.m4.identity(modelMatrix);
            twgl.m4.translate(modelMatrix, this._position, modelMatrix);

            var rotation = (270 - this._direction) * Math.PI / 180;
            twgl.m4.rotateZ(modelMatrix, rotation, modelMatrix);

            // Adjust rotation center relative to the skin.
            var rotationAdjusted = twgl.v3.subtract(this.skin.rotationCenter, twgl.v3.divScalar(this.skin.size, 2));
            rotationAdjusted[1] *= -1; // Y flipped to Scratch coordinate.
            rotationAdjusted[2] = 0; // Z coordinate is 0.

            twgl.m4.translate(modelMatrix, rotationAdjusted, modelMatrix);

            var scaledSize = twgl.v3.divScalar(twgl.v3.multiply(this.skin.size, this._scale), 100);
            scaledSize[2] = 0; // was NaN because the vectors have only 2 components.
            twgl.m4.scale(modelMatrix, scaledSize, modelMatrix);

            this._transformDirty = false;
        }

        /**
         * Whether the Drawable needs convex hull points provided by the renderer.
         * @return {boolean} True when no convex hull known, or it's dirty.
         */

    }, {
        key: 'needsConvexHullPoints',
        value: function needsConvexHullPoints() {
            return !this._convexHullPoints || this._convexHullDirty || this._convexHullPoints.length === 0;
        }

        /**
         * Set the convex hull to be dirty.
         * Do this whenever the Drawable's shape has possibly changed.
         */

    }, {
        key: 'setConvexHullDirty',
        value: function setConvexHullDirty() {
            this._convexHullDirty = true;
        }

        /**
         * Set the convex hull points for the Drawable.
         * @param {Array<Array<number>>} points Convex hull points, as [[x, y], ...]
         */

    }, {
        key: 'setConvexHullPoints',
        value: function setConvexHullPoints(points) {
            this._convexHullPoints = points;
            this._convexHullDirty = false;
        }

        /**
         * Get the precise bounds for a Drawable.
         * This function applies the transform matrix to the known convex hull,
         * and then finds the minimum box along the axes.
         * Before calling this, ensure the renderer has updated convex hull points.
         * @return {!Rectangle} Bounds for a tight box around the Drawable.
         */

    }, {
        key: 'getBounds',
        value: function getBounds() {
            if (this.needsConvexHullPoints()) {
                throw new Error('Needs updated convex hull points before bounds calculation.');
            }
            if (this._transformDirty) {
                this._calculateTransform();
            }
            // First, transform all the convex hull points by the current Drawable's
            // transform. This allows us to skip recalculating the convex hull
            // for many Drawable updates, including translation, rotation, scaling.
            var projection = twgl.m4.ortho(-1, 1, -1, 1, -1, 1);
            var skinSize = this.skin.size;
            var tm = twgl.m4.multiply(this._uniforms.u_modelMatrix, projection);
            var transformedHullPoints = [];
            for (var i = 0; i < this._convexHullPoints.length; i++) {
                var point = this._convexHullPoints[i];
                var glPoint = twgl.v3.create(0.5 + -point[0] / skinSize[0], 0.5 + -point[1] / skinSize[1], 0);
                twgl.m4.transformPoint(tm, glPoint, glPoint);
                transformedHullPoints.push(glPoint);
            }
            // Search through transformed points to generate box on axes.
            var bounds = new Rectangle();
            bounds.initFromPointsAABB(transformedHullPoints);
            return bounds;
        }

        /**
         * Get the rough axis-aligned bounding box for the Drawable.
         * Calculated by transforming the skin's bounds.
         * Note that this is less precise than the box returned by `getBounds`,
         * which is tightly snapped to account for a Drawable's transparent regions.
         * `getAABB` returns a much less accurate bounding box, but will be much
         * faster to calculate so may be desired for quick checks/optimizations.
         * @return {!Rectangle} Rough axis-aligned bounding box for Drawable.
         */

    }, {
        key: 'getAABB',
        value: function getAABB() {
            if (this._transformDirty) {
                this._calculateTransform();
            }
            var tm = this._uniforms.u_modelMatrix;
            var bounds = new Rectangle();
            bounds.initFromPointsAABB([twgl.m4.transformPoint(tm, [-0.5, -0.5, 0]), twgl.m4.transformPoint(tm, [0.5, -0.5, 0]), twgl.m4.transformPoint(tm, [-0.5, 0.5, 0]), twgl.m4.transformPoint(tm, [0.5, 0.5, 0])]);
            return bounds;
        }

        /**
         * Return the best Drawable bounds possible without performing graphics queries.
         * I.e., returns the tight bounding box when the convex hull points are already
         * known, but otherwise return the rough AABB of the Drawable.
         * @return {!Rectangle} Bounds for the Drawable.
         */

    }, {
        key: 'getFastBounds',
        value: function getFastBounds() {
            if (!this.needsConvexHullPoints()) {
                return this.getBounds();
            }
            return this.getAABB();
        }

        /**
         * Respond to an internal change in the current Skin.
         * @private
         */

    }, {
        key: '_skinWasAltered',
        value: function _skinWasAltered() {
            this.setConvexHullDirty();
            this.setTransformDirty();
        }

        /**
         * Calculate a color to represent the given ID number. At least one component of
         * the resulting color will be non-zero if the ID is not RenderConstants.ID_NONE.
         * @param {int} id The ID to convert.
         * @returns {Array<number>} An array of [r,g,b,a], each component in the range [0,1].
         */

    }, {
        key: 'id',
        get: function get() {
            return this._id;
        }

        /**
         * @returns {Skin} the current skin for this Drawable.
         */

    }, {
        key: 'skin',
        get: function get() {
            return this._skin;
        }

        /**
         * @param {Skin} newSkin - A new Skin for this Drawable.
         */
        ,
        set: function set(newSkin) {
            if (this._skin !== newSkin) {
                if (this._skin) {
                    this._skin.removeListener(Skin.Events.WasAltered, this._skinWasAltered);
                }
                this._skin = newSkin;
                if (this._skin) {
                    this._skin.addListener(Skin.Events.WasAltered, this._skinWasAltered);
                }
                this._skinWasAltered();
            }
        }

        /**
         * @returns {Array<number>} the current scaling percentages applied to this Drawable. [100,100] is normal size.
         */

    }, {
        key: 'scale',
        get: function get() {
            return [this._scale[0], this._scale[1]];
        }
    }], [{
        key: 'color4fFromID',
        value: function color4fFromID(id) {
            id -= RenderConstants.ID_NONE;
            var r = (id >> 0 & 255) / 255.0;
            var g = (id >> 8 & 255) / 255.0;
            var b = (id >> 16 & 255) / 255.0;
            return [r, g, b, 1.0];
        }

        /**
         * Calculate the ID number represented by the given color. If all components of
         * the color are zero, the result will be RenderConstants.ID_NONE; otherwise the result
         * will be a valid ID.
         * @param {int} r The red value of the color, in the range [0,255].
         * @param {int} g The green value of the color, in the range [0,255].
         * @param {int} b The blue value of the color, in the range [0,255].
         * @returns {int} The ID represented by that color.
         */

    }, {
        key: 'color3bToID',
        value: function color3bToID(r, g, b) {
            var id = void 0;
            id = (r & 255) << 0;
            id |= (g & 255) << 8;
            id |= (b & 255) << 16;
            return id + RenderConstants.ID_NONE;
        }
    }]);

    return Drawable;
}();

module.exports = Drawable;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Wyp on 2017/7/24.
 */
var twgl = __webpack_require__(0);

var RenderConstants = __webpack_require__(1);
var PenSkin = __webpack_require__(3);

var EditTargetBoxSkin = function (_PenSkin) {
    _inherits(EditTargetBoxSkin, _PenSkin);

    /**
     * Create a Skin which implements a Scratch pen layer.
     * @param {int} id - The unique ID for this Skin.
     * @param {RenderWebGL} renderer - The renderer which will use this Skin.
     * @extends PenSkin
     */
    function EditTargetBoxSkin(id, renderer, editTarget, targetDrawable) {
        _classCallCheck(this, EditTargetBoxSkin);

        var _this = _possibleConstructorReturn(this, (EditTargetBoxSkin.__proto__ || Object.getPrototypeOf(EditTargetBoxSkin)).call(this, id, renderer));

        _this.target = editTarget;
        _this.points = _this.drawChecker();
        return _this;
    }

    _createClass(EditTargetBoxSkin, [{
        key: 'drawBox',
        value: function drawBox() {
            // var xLeft = this._xLeft;
            // var  xRight = this._xRight;
            // var yBottom = this._yBottom ;
            // var  yTop = this._yTop;
            //
            // var mainAxis = {
            //     coordinates: [{ x0: xLeft, y0: 0, x1: xRight, y1: 0 }, { x0: 0, y0: yBottom, x1: 0, y1: yTop }],
            //     penAttributes: {
            //         diameter: 2,
            //         color4f: [0.6, 0.6, 0.6, 0.3]
            //     }
            // };

        }
    }, {
        key: 'drawAxis',
        value: function drawAxis(axisData) {
            var i;
            for (i = 0; i < axisData.coordinates.length; i++) {
                var c = axisData.coordinates[i];
                this.drawLine(axisData.penAttributes, c.x0, c.y0, c.x1, c.y1);
            }
        }
    }, {
        key: 'drawText',
        value: function drawText(textAttr) {
            var ctx = this._canvas.getContext('2d');
            ctx.font = '14px consolas';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'Middle';
            var r, g, b, a;
            r = g = b = 0;
            a = 0.3;
            ctx.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
            ctx.strokeText(textAttr.text, this._rotationCenter[0] + textAttr.x, this._rotationCenter[1] + textAttr.y);
            // ctx.font = 'bold 144px arial';
            // ctx.fillStyle = 'red';
            // ctx.fillText('World', 300,300);
        }
    }]);

    return EditTargetBoxSkin;
}(PenSkin);

module.exports = EditTargetBoxSkin;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
    /**
     * A utility for creating and comparing axis-aligned rectangles.
     * Rectangles are always initialized to the "largest possible rectangle";
     * use one of the init* methods below to set up a particular rectangle.
     * @constructor
     */
    function Rectangle() {
        _classCallCheck(this, Rectangle);

        this.left = -Infinity;
        this.right = Infinity;
        this.bottom = -Infinity;
        this.top = Infinity;
    }

    /**
     * Initialize a Rectangle from given Scratch-coordinate bounds.
     * @param {number} left Left bound of the rectangle.
     * @param {number} right Right bound of the rectangle.
     * @param {number} bottom Bottom bound of the rectangle.
     * @param {number} top Top bound of the rectangle.
     */


    _createClass(Rectangle, [{
        key: "initFromBounds",
        value: function initFromBounds(left, right, bottom, top) {
            this.left = left;
            this.right = right;
            this.bottom = bottom;
            this.top = top;
        }

        /**
         * Initialize a Rectangle to the minimum AABB around a set of points.
         * @param {Array<Array<number>>} points Array of [x, y] points.
         */

    }, {
        key: "initFromPointsAABB",
        value: function initFromPointsAABB(points) {
            this.left = Infinity;
            this.right = -Infinity;
            this.top = -Infinity;
            this.bottom = Infinity;
            for (var i = 0; i < points.length; i++) {
                var x = points[i][0];
                var y = points[i][1];
                if (x < this.left) {
                    this.left = x;
                }
                if (x > this.right) {
                    this.right = x;
                }
                if (y > this.top) {
                    this.top = y;
                }
                if (y < this.bottom) {
                    this.bottom = y;
                }
            }
        }

        /**
         * Determine if this Rectangle intersects some other.
         * Note that this is a comparison assuming the Rectangle was
         * initialized with Scratch-space bounds or points.
         * @param {!Rectangle} other Rectangle to check if intersecting.
         * @return {boolean} True if this Rectangle intersects other.
         */

    }, {
        key: "intersects",
        value: function intersects(other) {
            return this.left <= other.right && other.left <= this.right && this.top >= other.bottom && other.top >= this.bottom;
        }

        /**
         * Determine if this Rectangle fully contains some other.
         * Note that this is a comparison assuming the Rectangle was
         * initialized with Scratch-space bounds or points.
         * @param {!Rectangle} other Rectangle to check if fully contained.
         * @return {boolean} True if this Rectangle fully contains other.
         */

    }, {
        key: "contains",
        value: function contains(other) {
            return other.left > this.left && other.right < this.right && other.top < this.top && other.bottom > this.bottom;
        }

        /**
         * Clamp a Rectangle to bounds.
         * @param {number} left Left clamp.
         * @param {number} right Right clamp.
         * @param {number} bottom Bottom clamp.
         * @param {number} top Top clamp.
         */

    }, {
        key: "clamp",
        value: function clamp(left, right, bottom, top) {
            this.left = Math.max(this.left, left);
            this.right = Math.min(this.right, right);
            this.bottom = Math.max(this.bottom, bottom);
            this.top = Math.min(this.top, top);
            // Ensure rectangle coordinates in order.
            this.left = Math.min(this.left, this.right);
            this.right = Math.max(this.right, this.left);
            this.bottom = Math.min(this.bottom, this.top);
            this.top = Math.max(this.top, this.bottom);
        }

        /**
         * Push out the Rectangle to integer bounds.
         */

    }, {
        key: "snapToInt",
        value: function snapToInt() {
            this.left = Math.floor(this.left);
            this.right = Math.ceil(this.right);
            this.bottom = Math.floor(this.bottom);
            this.top = Math.ceil(this.top);
        }

        /**
         * Width of the Rectangle.
         * @return {number} Width of rectangle.
         */

    }, {
        key: "width",
        get: function get() {
            return Math.abs(this.left - this.right);
        }

        /**
         * Height of the Rectangle.
         * @return {number} Height of rectangle.
         */

    }, {
        key: "height",
        get: function get() {
            return Math.abs(this.top - this.bottom);
        }
    }]);

    return Rectangle;
}();

module.exports = Rectangle;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(0);

var Skin = __webpack_require__(2);
var SvgRenderer = __webpack_require__(14);

var SVGSkin = function (_Skin) {
    _inherits(SVGSkin, _Skin);

    /**
     * Create a new SVG skin.
     * @param {!int} id - The ID for this Skin.
     * @param {!RenderWebGL} renderer - The renderer which will use this skin.
     * @constructor
     * @extends Skin
     */
    function SVGSkin(id, renderer) {
        _classCallCheck(this, SVGSkin);

        /** @type {RenderWebGL} */
        var _this = _possibleConstructorReturn(this, (SVGSkin.__proto__ || Object.getPrototypeOf(SVGSkin)).call(this, id));

        _this._renderer = renderer;

        /** @type {SvgRenderer} */
        _this._svgRenderer = new SvgRenderer();

        /** @type {WebGLTexture} */
        _this._texture = null;
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(SVGSkin, [{
        key: 'dispose',
        value: function dispose() {
            if (this._texture) {
                this._renderer.gl.deleteTexture(this._texture);
                this._texture = null;
            }
            _get(SVGSkin.prototype.__proto__ || Object.getPrototypeOf(SVGSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @return {Array<number>} the natural size, in Scratch units, of this skin.
         */

    }, {
        key: 'setRotationCenter',


        /**
         * Set the origin, in object space, about which this Skin should rotate.
         * @param {number} x - The x coordinate of the new rotation center.
         * @param {number} y - The y coordinate of the new rotation center.
         */
        value: function setRotationCenter(x, y) {
            var viewOffset = this._svgRenderer.viewOffset;
            _get(SVGSkin.prototype.__proto__ || Object.getPrototypeOf(SVGSkin.prototype), 'setRotationCenter', this).call(this, x - viewOffset[0], y - viewOffset[1]);
        }

        /**
         * @param {Array<number>} scale - The scaling factors to be used.
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given scale.
         */
        // eslint-disable-next-line no-unused-vars

    }, {
        key: 'getTexture',
        value: function getTexture(scale) {
            /** @todo re-render a scaled version if the requested scale is significantly larger than the current render */
            return this._texture;
        }

        /**
         * Set the contents of this skin to a snapshot of the provided SVG data.
         * @param {string} svgData - new SVG to use.
         * @param {Array<number>} [rotationCenter] - Optional rotation center for the SVG. If not supplied, it will be
         * calculated from the bounding box
         * @fires Skin.event:WasAltered
         */

    }, {
        key: 'setSVG',
        value: function setSVG(svgData, rotationCenter) {
            var _this2 = this;

            this._svgRenderer.fromString(svgData, function () {
                var gl = _this2._renderer.gl;
                if (_this2._texture) {
                    gl.bindTexture(gl.TEXTURE_2D, _this2._texture);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this2._svgRenderer.canvas);
                } else {
                    var textureOptions = {
                        auto: true,
                        mag: gl.NEAREST,
                        min: gl.NEAREST, /** @todo mipmaps, linear (except pixelate) */
                        wrap: gl.CLAMP_TO_EDGE,
                        src: _this2._svgRenderer.canvas
                    };

                    _this2._texture = twgl.createTexture(gl, textureOptions);
                }
                if (typeof rotationCenter === 'undefined') rotationCenter = _this2.calculateRotationCenter();
                _this2.setRotationCenter.apply(_this2, rotationCenter);
                _this2.emit(Skin.Events.WasAltered);
            });
        }
    }, {
        key: 'size',
        get: function get() {
            return this._svgRenderer.size;
        }
    }]);

    return SVGSkin;
}(Skin);

module.exports = SVGSkin;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RenderWebGL = __webpack_require__(6);

/**
 * Export for NPM & Node.js
 * @type {RenderWebGL}
 */
module.exports = RenderWebGL;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Synchronously load TTF fonts.
// First, have Webpack load their data as Base 64 strings.
/* eslint-disable global-require */
var FONTS = {
    Donegal: __webpack_require__(15),
    Gloria: __webpack_require__(16),
    Mystery: __webpack_require__(17),
    Marker: __webpack_require__(18),
    Scratch: __webpack_require__(19)
};
/* eslint-enable global-require */

// For each Base 64 string,
// 1. Replace each with a usable @font-face tag that points to a Data URI.
// 2. Inject the font into a style on `document.body`, so measurements
//    can be accurately taken in SvgRenderer._transformMeasurements.
var documentStyleTag = document.createElement('style');
documentStyleTag.id = 'scratch-font-styles';
for (var fontName in FONTS) {
    var fontData = FONTS[fontName];
    FONTS[fontName] = '@font-face {' + ('font-family: "' + fontName + '";src: url("data:application/x-font-ttf;charset=utf-8;base64,' + fontData + '");}');
    documentStyleTag.textContent += FONTS[fontName];
}
document.body.insertBefore(documentStyleTag, document.body.firstChild);

/**
 * Main quirks-mode SVG rendering code.
 */

var SvgRenderer = function () {
    /**
     * Create a quirks-mode SVG renderer for a particular canvas.
     * @param {HTMLCanvasElement} [canvas] An optional canvas element to draw to. If this is not provided, the renderer
     * will create a new canvas.
     * @constructor
     */
    function SvgRenderer(canvas) {
        _classCallCheck(this, SvgRenderer);

        this._canvas = canvas || document.createElement('canvas');
        this._context = this._canvas.getContext('2d');
        this._measurements = { x: 0, y: 0, width: 0, height: 0 };
    }

    /**
     * @returns {!HTMLCanvasElement} this renderer's target canvas.
     */


    _createClass(SvgRenderer, [{
        key: 'fromString',


        /**
         * Load an SVG from a string and draw it.
         * This will be parsed and transformed, and finally drawn.
         * When drawing is finished, the `onFinish` callback is called.
         * @param {string} svgString String of SVG data to draw in quirks-mode.
         * @param {Function} [onFinish] Optional callback for when drawing finished.
         */
        value: function fromString(svgString, onFinish) {
            // Store the callback for later.
            this._onFinish = onFinish;
            // Parse string into SVG XML.
            var parser = new DOMParser();
            this._svgDom = parser.parseFromString(svgString, 'text/xml');
            if (this._svgDom.childNodes.length < 1 || this._svgDom.documentElement.localName !== 'svg') {
                throw new Error('Document does not appear to be SVG.');
            }
            this._svgTag = this._svgDom.documentElement;
            // Transform all text elements.
            this._transformText();
            // Transform measurements.
            this._transformMeasurements();
            // Draw to a canvas.
            this._draw();
        }

        /**
         * @return {Array<number>} the natural size, in Scratch units, of this SVG.
         */

    }, {
        key: '_transformText',


        /**
         * Transforms an SVG's text elements for Scratch 2.0 quirks.
         * These quirks include:
         * 1. `x` and `y` properties are removed/ignored.
         * 2. Alignment is set to `text-before-edge`.
         * 3. Line-breaks are converted to explicit <tspan> elements.
         * 4. Any required fonts are injected.
         */
        value: function _transformText() {
            // Collect all text elements into a list.
            var textElements = [];
            var collectText = function collectText(domElement) {
                if (domElement.localName === 'text') {
                    textElements.push(domElement);
                }
                for (var i = 0; i < domElement.childNodes.length; i++) {
                    collectText(domElement.childNodes[i]);
                }
            };
            collectText(this._svgTag);
            // For each text element, apply quirks.
            var fontsNeeded = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = textElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var textElement = _step.value;

                    // Remove x and y attributes - they are not used in Scratch.
                    textElement.removeAttribute('x');
                    textElement.removeAttribute('y');
                    // Set text-before-edge alignment:
                    // Scratch renders all text like this.
                    textElement.setAttribute('alignment-baseline', 'text-before-edge');
                    // If there's no font size provided, provide one.
                    if (!textElement.getAttribute('font-size')) {
                        textElement.setAttribute('font-size', '18');
                    }
                    // If there's no font-family provided, provide one.
                    if (!textElement.getAttribute('font-family')) {
                        textElement.setAttribute('font-family', 'Helvetica');
                    }
                    // Collect fonts that need injection.
                    var font = textElement.getAttribute('font-family');
                    fontsNeeded[font] = true;
                    // Fix line breaks in text, which are not natively supported by SVG.
                    var text = textElement.textContent;
                    if (text) {
                        textElement.textContent = '';
                        var lines = text.split('\n');
                        text = '';
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = lines[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var line = _step3.value;

                                var tspanNode = this._createSVGElement('tspan');
                                tspanNode.setAttribute('x', '0');
                                tspanNode.setAttribute('dy', '1em');
                                tspanNode.textContent = line;
                                textElement.appendChild(tspanNode);
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                    }
                }
                // Inject fonts that are needed.
                // It would be nice if there were another way to get the SVG-in-canvas
                // to render the correct font family, but I couldn't find any other way.
                // Other things I tried:
                // Just injecting the font-family into the document: no effect.
                // External stylesheet linked to by SVG: no effect.
                // Using a <link> or <style>@import</style> to link to font-family
                // injected into the document: no effect.
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var newDefs = this._createSVGElement('defs');
            var newStyle = this._createSVGElement('style');
            var allFonts = Object.keys(fontsNeeded);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = allFonts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _font = _step2.value;

                    if (FONTS.hasOwnProperty(_font)) {
                        newStyle.textContent += FONTS[_font];
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            newDefs.appendChild(newStyle);
            this._svgTag.insertBefore(newDefs, this._svgTag.childNodes[0]);
        }

        /**
         * Transform the measurements of the SVG.
         * In Scratch 2.0, SVGs are drawn without respect to the width,
         * height, and viewBox attribute on the tag. The exporter
         * does output these properties - but they appear to be incorrect often.
         * To address the incorrect measurements, we append the DOM to the
         * document, and then use SVG's native `getBBox` to find the real
         * drawn dimensions. This ensures things drawn in negative dimensions,
         * outside the given viewBox, etc., are all eventually drawn to the canvas.
         * I tried to do this several other ways: stripping the width/height/viewBox
         * attributes and then drawing (Firefox won't draw anything),
         * or inflating them and then measuring a canvas. But this seems to be
         * a natural and performant way.
         */

    }, {
        key: '_transformMeasurements',
        value: function _transformMeasurements() {
            // Save `svgText` for later re-parsing.
            var svgText = this._toString();

            // Append the SVG dom to the document.
            // This allows us to use `getBBox` on the page,
            // which returns the full bounding-box of all drawn SVG
            // elements, similar to how Scratch 2.0 did measurement.
            var svgSpot = document.createElement('span');
            var bbox = void 0;
            try {
                document.body.appendChild(svgSpot);
                svgSpot.appendChild(this._svgTag);
                // Take the bounding box.
                bbox = this._svgTag.getBBox();
            } finally {
                // Always destroy the element, even if, for example, getBBox throws.
                document.body.removeChild(svgSpot);
            }

            // Re-parse the SVG from `svgText`. The above DOM becomes
            // unusable/undrawable in browsers once it's appended to the page,
            // perhaps for security reasons?
            var parser = new DOMParser();
            this._svgDom = parser.parseFromString(svgText, 'text/xml');
            this._svgTag = this._svgDom.documentElement;

            // Set the correct measurements on the SVG tag, and save them.
            this._svgTag.setAttribute('width', bbox.width);
            this._svgTag.setAttribute('height', bbox.height);
            this._svgTag.setAttribute('viewBox', bbox.x + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height);
            this._measurements = bbox;
        }

        /**
         * Serialize the active SVG DOM to a string.
         * @returns {string} String representing current SVG data.
         */

    }, {
        key: '_toString',
        value: function _toString() {
            var serializer = new XMLSerializer();
            return serializer.serializeToString(this._svgDom);
        }

        /**
         * Get the drawing ratio, adjusted for HiDPI screens.
         * @return {number} Scale ratio to draw to canvases with.
         */

    }, {
        key: 'getDrawRatio',
        value: function getDrawRatio() {
            var devicePixelRatio = window.devicePixelRatio || 1;
            var backingStoreRatio = this._context.webkitBackingStorePixelRatio || this._context.mozBackingStorePixelRatio || this._context.msBackingStorePixelRatio || this._context.oBackingStorePixelRatio || this._context.backingStorePixelRatio || 1;
            return devicePixelRatio / backingStoreRatio;
        }

        /**
         * Draw the SVG to a canvas.
         */

    }, {
        key: '_draw',
        value: function _draw() {
            var _this = this;

            var ratio = this.getDrawRatio();
            var bbox = this._measurements;

            // Set up the canvas for drawing.
            this._canvas.width = bbox.width * ratio;
            this._canvas.height = bbox.height * ratio;
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this._context.scale(ratio, ratio);

            // Convert the SVG text to an Image, and then draw it to the canvas.
            var img = new Image();
            img.onload = function () {
                _this._context.drawImage(img, 0, 0);
                // Reset the canvas transform after drawing.
                _this._context.setTransform(1, 0, 0, 1, 0, 0);
                // Set the CSS style of the canvas to the actual measurements.
                _this._canvas.style.width = bbox.width;
                _this._canvas.style.height = bbox.height;
                // All finished - call the callback if provided.
                if (_this._onFinish) {
                    _this._onFinish();
                }
            };
            var svgText = this._toString();
            img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgText);
        }

        /**
         * Helper to create an SVG element with the correct NS.
         * @param {string} tagName Tag name for the element.
         * @return {!DOMElement} Element created.
         */

    }, {
        key: '_createSVGElement',
        value: function _createSVGElement(tagName) {
            return document.createElementNS('http://www.w3.org/2000/svg', tagName);
        }
    }, {
        key: 'canvas',
        get: function get() {
            return this._canvas;
        }
    }, {
        key: 'size',
        get: function get() {
            return [this._measurements.width, this._measurements.height];
        }

        /**
         * @return {Array<number>} the offset (upper left corner) of the SVG's view box.
         */

    }, {
        key: 'viewOffset',
        get: function get() {
            return [this._measurements.x, this._measurements.y];
        }
    }]);

    return SvgRenderer;
}();

module.exports = SvgRenderer;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "AAEAAAAPAIAAAwBwR1NVQrF7s6AAANxsAAACBE9TLzKWu362AAABeAAAAGBjbWFwAGmpXwAACKwAAAYiY3Z0IAToGrUAABjIAAAALmZwZ23kLgKEAAAO0AAACWJnYXNwAAAAEAAA3GQAAAAIZ2x5Zt+xS8sAABxkAACrpGhlYWQDL3pgAAAA/AAAADZoaGVhEiUJ3QAAATQAAAAkaG10eNNple8AAAHYAAAG1GxvY2HXngI0AAAY+AAAA2xtYXhwAs4KyAAAAVgAAAAgbmFtZUejscAAAMgIAAAKenBvc3Rt/EG5AADShAAACd1wcmVw/Jci1gAAGDQAAACTAAEAAAABAQau7ek+Xw889QALCAAAAAAAzNYlZAAAAADM6AlB/8T95wqOB9AAAAAJAAIAAAAAAAAAAQAAB9D90AAACwb/xP9RCo4AAQAAAAAAAAAAAAAAAAAAAbUAAQAAAbUAngAHAJUABAACACIAMABqAAAAfQliAAQAAQADBNkBkAAFAAAFmgUzAAABHwWaBTMAAAPRAGYCAAAAAgIGAgYDAAYHBKAAAK9QACBKAAAAAAAAAABTVEMgAEAAAPsCB9D90AAAB9ACMCAAAJMAAAAAA/wF+gAAACAABAKjAAAAAAAAAqUAAAKsAAAFQwBnBMMADQVSACkHuwB8B1AAfAKrAHcHUABoA1UAiwNRAFYCAQC3BKkAvwSsANQCqABGAqsAoQP9ANsFVAAyBTAAlQfGAHgGpgCCAqsA2wNVAOEDVQBQBRcAwASpAKsCQABuA/8AvwJAAIwDUQB2BVIAhQNzAIMEqQB2BBYAfwSlADYEEwB8BKkAeQQTAF4EqgCYBKkAeQJAAIwCQABuBVIAlwSrAJ4FUgCmBGYAnAcmAHsF///WBV4AbgXnAGQGpQBmBVYAbgVLAG4GJQBkBqoAZgLUAGgCwAAmBdwAZwVNAGcH+wALBqoAUQaqAGQFYwBnBqoAZAW2AG4FNgCfBVQAJQaBAEMF///XCKb/9gX8ACoFwgAMBVYATgKrAKoDUQB3AqsAqgSpAIgFL//2AtMAcgRKAGcEwwANBAIAWgSfAFoEDwBYAykAXgSVAGUFOAA2AqMAVgKaAAUEswA3AqQAWgfXAFsFSQBdBJ8AWgTlAD8EtwBaA8cAWwPoAIwDNwBEBTEAXgSLAAMGrgANBIwAIQSZAAQEFABfA1UANQIBALcDVQBLBKkArwQPAFgEDwBYBA8AWAKj/+MFIgCgA/8AkAQbAF0FUgCeBBsAoQP/ARMFKwCeBU8ANQcaAHMHEQBzCDMAUALTAHIDqgBxBKsAngfn/8QHVACvBRcAqwUvANgFGgDYBfwAKASsAK4ErABrBdUAvwYAAG4FUgA9A/8ABAP/AKUD/wB/BlsAaAaDAGcEnwBaAqsAqwVWAMYFrwA/BeIAaQSpAK8GDABNBVIAqgVSANgGwACMAqwAAAivAGQHSwBaBVYAvwf6AL8EfAC3BHwAvQKrALcCqwC9BJAAqQSpAIAD///oA1UAqgNVANgFIgCgAmgAoAKrAL0LBgB4AqMAVgOyAHID1gByAzoAcgOLAGoCFQByAt0AcgLfAHIEZgByApIAbAOyAHIGqgBFBS8AaQSdAFoEfAC9BGYAcgK/AHICvwByA9YAcgOyAHICGAByBEoAZwX//9YFVABsAfMAcgUeAHIDZQBcBU0AZwOVAEQCowBWAqwAVAUxAF4GgQBDBqoARQSfAFoCqABcAzcARAVUACUGqgBFAzoAcgRIAHIDiwBqBTgANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAarAAAF/ABtAo7/+gNaAFwAAAAAA7IAcgLdAHICmgAFAhUAcgQPAFgESgBnBEoAZwRKAGcESgBnBAIAWgQPAFgFVABGAqP/0gU9AFYCo//hBLMANwTYAF0FSQBdBUkAXQSfAFoEnwBaBJ8AWgSfAFoEnwBaA8cAWwPHAFsFMQBeBTEAXgUxAF4FMQBeBJkABASZAAQF///WBf//1gX//9YF///WBf//1gX//9YF5wBkBVYAbgVWAG4FVgBuBVYAbgLUAE0C1ABoAtT/4gLUAAMC1AAHAsAADQaqAFEGqgBRBqoAZAaqAGQGqgBkBqoAZAaqAGQGqgBkBbYAbgW2AG4FtgBuBoEAQwaBAEMGgQBDBoEAQwXCAAwGqgBRBUkAXQX//9YF///WBecAZAXnAGQF5wBkBecAZAalAGYFVgBuBVYAbgVWAG4FVgBuBiUAZAYlAGQGJQBkBiUAZAaqAGYC1AA/AtQADwLUAGgF3ABnBU0AZwaqAFEGqgBRBqoAZAaqAGQFNgCfBTYAnwU2AJ8FNgCfBTYAnwVUACUFVAAlBoEAQwaBAEMGgQBDBoEAQwaBAEMGqgBkCKb/9gim//YIpv/2CKb/9gXCAAwFwgAMBcIADAVWAE4FVgBOBVYATgRKAGcESgBnBAIAWgQCAFoEAgBaBAIAWgaDAGcEDwBYBA8AWAQPAFgEDwBYBJUAZQSVAGUElQBlBJUAZQKjAB0Co//vBJkABASZAAQGrgANBq4ADQauAA0GrgANBTEAXgUxAF4FMQBeBTEAXgM3AEQD6ACMA+gAjAPoAIwD6ACMA+gAjAPHAFsEFABfBBQAXwQUAF8EnwBaBJ8AWgVJAF0FSQBdAqgAXAPoAIwFNgCfBOUAPwVjAGcH1wBbB/sACwVLAG4EnwBaBqUAZgTDABMFXgBuAykAXgVUACUEnwBaBTEAXgWGAGwDqQByBZQAaARKAGcESgBnAqP/xgKjAFYFTQBnCCMAAAYMAE0ErACuBlsAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNwBEAzcARAarACUEwwChBlIAXgXMAF4FzQBeAqsAvAKrAMgD/QDIAAAAAwAAAAMAAAAcAAEAAAAABBgAAwABAAAAHAAEA/wAAABuAEAABQAuAAoADQAUABkAIAB+AH8BSAF+AZIB/QIZAhsCNwLHAt0DlAOpA7wDwB4DHgseHx5BHlceYR5rHoUe8yAUIB4gIiAmIDAgMyA6IDwgRCCsISIhJiICIgYiDyISIhoiHiIrIkgiYCJlJcr2w/sC//8AAAAAAA0AEAAVAB4AIQB/AKABSgGSAfwCGAIbAjcCxgLYA5QDqQO8A8AeAh4KHh4eQB5WHmAeah6AHvIgEyAYICAgJiAwIDIgOSA8IEQgrCEiISYiAiIGIg8iESIaIh4iKyJIImAiZCXK9sP7AP//AAD/9QGTAMoAAP/wASsAAAAA/wMAAAAA/1z+tAAAAAD+Cv33/eP8ywAAAAAAAAAAAAAAAAAAAAAAAOCLAAAAAOB04HzhgeBu4XLgYuA531vfad6G3pHeewAA3nreZN5h3k7eIN4g2tsJ/gavAAEAbgAAAAAAAAB8AAAAAAB8AcwAAAIyAjQAAAAAAjICNAAAAAAAAAAAAjYCOAI6AjwCPgJAAkICRAJOAAACTgJaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkYAAAAAAAAAAAAAAAAAAAAAAAAAAAABAOgA2ADZANoA2wDcAN0A3gGiAaEBqAGpAAMAmwCSAHUAdgC5AIYADQB3AH8AfACNAJgAkwDkAHsAsAB0AIMADAALAH4AhwB5AKoAtAAJAI4AmQAIAAcACgC8AQkBCgELAQwBDQEOAIEBDwEQAREBEgETARQBFQEXARgAuAEbARwBHQEeAR8BIAAPASEBJQEmAScBKAEpAAQAegGYAZkA7gDwAO8A8QCQAPIA8wBvAHAAcQGaAZsA9wByALoA+wD8AP0A/gD/AQAApACRAQMBBAEFAQYBBwAFAQgBLAFcAS0BXQDDAMIBLgFeAS8BXwExAWEBMAFgATIAxgDOAM8BNAFkATUBZQE2AWYAxADtATMBYwE3AWcBOAFoAToBaQE5AWoBOwDXANMA9AEWAPUBPAFrAT0BbADLAMoBPgCtAZcA9gEZAOYBPwD4APkBnADQAUABhQDIAMcBlQDnAAYAEAEaAPoBQgGEAUEBgwEqASsBQwGBAUQBggFRAZMAnACdASIBfQEkAQIBIwEBAUUBegFGAXsBSAF5AUcBfAGtAawBSgDJANIA0QFMAXMBTQF0AU4BdQFPAXYBUAGUAM0AzAFUAXEBVwFuAVgBWQF+AVsBgAFaAX8BnQFiAUkBeACuALcAsQCyALMAtgCvALUBkAGPAY4BjQGMAZEBiwGKAYkBiAGHAYYBkgGrAVIBbwFTAXABVQFyAVYBbQCiAKMAqwGyAKAAoQC7AHMAqQB4AIkADgAGAgoAAAAAAQAAAQAAAAAA2QDaANsA3ADdAAEAAgGhAAAAAAACAAAAAAGjAaQBpQGmAacA3wDgAOEA4gDjAAAAAAAAAAEBqAGpAAMAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAB8AIAAhACIAIwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgA/AEAAQQBCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AXwBgAGEAYgBjAGQAZQBmAGcAaABpAGoAawBsAG0AbgAAAQ0BDgEPAREBGwEgASgBmQGYAO4A7wDwAPEA8gBvAPMAcABxAZsBmgD3AHIA+wD9APwA/gEAAP8BBAEDAQUBBgBz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sDsssAAVIEewACNCsgABARUUEy6wKCotsDwssAAVIEewACNCsgABARUUEy6wKCotsD0ssQABFBOwKSotsD4ssCsqLbA1LLAsKyMgLkawAiVGUlggPFkusSIBFCstsEkssgAANSstsEossgABNSstsEsssgEANSstsEwssgEBNSstsDYssC0riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSIBFCuwBEMusCIrLbBVLLIAADYrLbBWLLIAATYrLbBXLLIBADYrLbBYLLIBATYrLbA3LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEiARQrLbBNLLIAADcrLbBOLLIAATcrLbBPLLIBADcrLbBQLLIBATcrLbA4LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEiARQrLbBBLLIAADgrLbBCLLIAATgrLbBDLLIBADgrLbBELLIBATgrLbBALLAJI0KwPystsDkssCwrLrEiARQrLbBFLLIAADkrLbBGLLIAATkrLbBHLLIBADkrLbBILLIBATkrLbA6LLAtKyEjICA8sAQjQiM4sSIBFCuwBEMusCIrLbBRLLIAADorLbBSLLIAATorLbBTLLIBADorLbBULLIBATorLbA/LLAAFkUjIC4gRoojYTixIgEUKy2wWSywLisusSIBFCstsFossC4rsDIrLbBbLLAuK7AzKy2wXCywABawLiuwNCstsF0ssC8rLrEiARQrLbBeLLAvK7AyKy2wXyywLyuwMystsGAssC8rsDQrLbBhLLAwKy6xIgEUKy2wYiywMCuwMistsGMssDArsDMrLbBkLLAwK7A0Ky2wZSywMSsusSIBFCstsGYssDErsDIrLbBnLLAxK7AzKy2waCywMSuwNCstsGksK7AIZbADJFB4sAEVMC0AAEuwyFJYsQEBjlm5CAAIAGMgsAEjRCCwAyNwsBRFICBLsA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbABRWMjYrACI0SzCgoFBCuzCxAFBCuzERYFBCtZsgQoCEVSRLMLEAYEK7EGAUSxJAGIUViwQIhYsQYBRLEmAYhRWLgEAIhYsQYDRFlZWVm4Af+FsASNsQUARAAAAAAAAAAAAAAAAAAAAADqAG0A6gBtBg3/7gZtA/wAAP4aBg7/7AZtBBL/7P4LAAAAAAAAAAAAAAAAAHoBCAFWAWwB8gIuAuwDYgPSA/YEBgQkBHIExATQBTAF6AaYB2QHjAe6B8oIGghCCIAImgjECNwJQAl6Ce4Kdgq8CyQLkgvgDGoM3AzuDQANGA08DUgNxA6eDwIPohAEEHAQyhEWEZAR6hIaElISuhL4E14TrhQMFH4VCBWgFiwWdhbiFxgXahfOGBYYYBiEGJAYnBi+GNoY9Bl0GfAaVBrkG1QbwhyiHSIdLh06HbQd7h60HzYfgCAEIIAg6CFiIbAiKiJsItojQiOkI/IkViRwJHwkxiTSJOIk8iUEJUIlkiYSJsYnaieYJ/QomClsKhAqnCq2KvgrICusLCAsVix2LJYs/i2KLfQuLi5iLvQvRi/SMCYwijFWMcAx0DH0MhAyojK6MtYy4jL4MwgzCDOcNEQ0XjR4NIQ0njTcNOw1SjVsNX41sjW+Nig2WDZoN1g3kDe4OAI4HDhQOH44zjkeOUo5ijmyOjI6rDs8O1Y7ZjuCO5470jvqPB48yj1iPew+ID4sPjg+TD5YPug/Sj/yQI5AlkE2QUJBoEH8QnJCgkKuQtZC4kLiQuJC4kLiQuJC4kLiQuJC4kLiQuJC4kLiQ2pDekOGQ4ZDnkPcRBJEOETYROhE+EUIRRRFuEXERlRGZkZ6RoxGmEcORxpHLEc4R0RHVkdiR25HfkeKR5ZHoke0R8ZH0kfkR/BH/EgISBRIIEi4SVZJYkluSXpJhkmSSZ5Jqkm2ScJJzknaSeZJ8kn+SgpKFkoiSqBKrEq4SsRK0ErcSuhK9EsAS15L3kvqS/ZMAkwOTBpMJkwyTD5MSkxWTGJMbkx6TIZMkkyeTKpMtkzCTM5M2kzmTPJM/k0KTRZNIk0uTfpOBk4STh5OKk42TkJOTk5aTmZOck5+TopOlk6iTq5Ouk7GTtJO3k7qTvZPAk8STyJPLk86T0pPVk9iT25Pfk+KT5ZQrFC8UMhQ1FDmUPJQ/lEQUSJRNFFGUVJRXlFqUXZSKlI2UkZSVlJiUm5SflKKUpZSolK0UsBSzFLYUuRS8FL8UwhTFFMgUyxTOFNEU1BTYlNuU3pThlOSU9BT3FPoU/RUAFQMVBhUJFQsVDRUPFQ8VDxUPFQ8VDxUPFQ8VDxUPFQ8VExU1FViVW5VelWKVZZVqFXGVdIAAgBnAAAFDgX4ACkAPgBAQD0LCAcDAQARAQUBKgEEBSUBAgQnJgADAwIFPgABAAUEAQVXAAQAAgMEAlgAAAALPwADAw8DQCsTFjg6GQYSKzc+AzURAyc1IRUOAxcVPgMzMh4CFRQOAiMiLgInFRcVIQEeAjY3PgM1NC4CIyIOAhVnNEMnDgGQAgUxPiINAStPU146b6dxOF2cymwYP0RAGdX9pwGEKmt3fDweMSMSKleEWjlXOx5SDg8ePTwDWgEOOFJSCRgsRjUlBgoIBUBxmllrs4FIAwcLB943UgH4EBUGCxEYMD9XP0mBYDcXKTUeAAAAAAIADf4aBGkGbQA7AE4AREBBFwEEAE48AgMEMAEBAzUyMQMCAQQ+DQYFAwA8AAQEAE8AAAAUPwADAwFPAAEBEj8AAgIQAkBKSEA+NDMuLB0bBQwrEzQuAic1PgU3Fw4HBz4DMzIeAhceAxUUDgQjIiYnERcVITU+Azc1NxYWMzI+AjU0LgIjIg4CB7UcLj0hLUY6MDI1IiUBAgMCAgECAQEcTlhaKRJOXmMoEB4WDjpcc3BjHjN5POH9ti05IA0C1jyDSUdjPRshO1EwJFlUSBQFBjY7IA4JSAsRDw8TGREVC0RkeX57ZkgNEzUwIggmSkIaPUdVMoC7gVAsDwoH/qc4UlILFydANe2RHyM+ao1OUY9rPRcfIgwAAAAAAQAp/+4E/gX4AB4ANUAyFxYVFA4LCgkIBwYLAgAAAQMBAj4AAgABAAIBZAAAAAs/AAEBA04AAwMPA0ASERscBBArNz4DNREHJzcRJzUhFQ4DFRElFwURJRMzAychcTRAIwu+LOqsAkU1SS4VAXYt/l0CRF5xKo38KlIOGCpGPAFRYGd2Anw4UlINGCpHPP6MvmbV/Y0fAUP+HBL//wB8/7AHVQYWACYACQUAACcADAQY/UgBBwCmAZcAAAAJsQEBuP1IsCcrAAAEAHz/rwbgBhYAEgAZADMANwBRQE4xMBoGBQUFBBQMAgAFAAEBAAM+NSwrJgQEPDcQDwMBOwAEBQRmAAUABWYGAwIAAQEASwYDAgAAAU0CAQEAAUETEzMyJSQTGRMZExUXBw8rAT4DNxcRPgM3ByMVBxMFJREOAwcBPgM1EzQuAiM1Njc2NjcXBgYXExcVIQEXAScDnD2Jjo5CVxc3ODIRC77BAf6BAX4eTE5LHvxVLzohDAIMI0E2JjAqckY+ChcCA4L+MgRuaPyPcAELTKuuqUoo/a4BBAYKB3/5HgEXA2cBbB1XY2cuAcUHHS5ALAFMFxwQBVMIEg4zJyMogVH+LTdIAxM4+i4wAAAAAQB3AqcCUwYWABkAHkAbFxYAAwEAAT4SEQwDADwAAAEAZgABAV0dGgIOKxM+AzUTNC4CIzU2NzY2NxcGBhcTFxUhhS86IQwCDCNBNiYwKnJGPgoXAgOC/jIC7wcdLkAsAUwXHBAFUwgSDjMnIyiBUf4tN0gAAAAABABo/68G4AYRABIAGQBZAF0AaEBlPAEGCFsBBwZMSwIFBycGBQMEBVkUDAMABAABAQAGPl0QDwMBOwAHBgUGBwVkAAUEBgUEYgAEAAYEAGIJAwIAAgEBAAFRAAYGCE8ACAgRBkATE0JAOzo0MSUjGxoTGRMZExUXCg8rAT4DNxcRPgM3ByMVBxMFJREOAwcBFj4CNTQuAiMiBgc3PgM1NC4CIyIOAgcGBgcjNT4DMzIeAhUUDgIHFR4DFRQOAicmJicBFwEnA5w9iY6OQlcXNzgyEQu+wQH+gQF+HkxOSx78UWyZYS0bM0owEjcUDitYRy0VIScTFCAeIBQQHBRbG0dSWSwyZE8xIjU+Gz1WNhlYmtB4CxQKBHJo/I9wAQtMq66pSij9rgEEBgoHf/keARcDZwFsHVdjZy4BgQQbM0YoM0UrEwcDZAckOE0wGCAVCQIGCQcHNjnGChINBxYtQi0rTkAuDA0JMUBGH0l9VigLAQQBA204+i4wAAABAIsCPAMMBhEAPwA7QDgiAQIEMjECAQMNAQABAz4/AQA7AAMCAQIDAWQAAQACAQBiAAAAZQACAgRPAAQEEQJAJRY8KBAFESsTFj4CNTQuAiMiBgc3PgM1NC4CIyIOAgcGBgcjNT4DMzIeAhUUDgIHFR4DFRQOAicmJiepbJlhLRszSjASNxQOK1hHLRUhJxMUIB4gFBAcFFsbR1JZLDJkTzEiNT4bPVY2GVia0HgLFAoCqwQbM0YoM0UrEwcDZAckOE0wGCAVCQIGCQcHNjnGChINBxYtQi0rTkAuDA0JMUBGH0l9VigLAQQBAAEAVgKWAz0GGwA1AEBAPR0BAAIFAQUDAj4zAQU7AAEABAABBGQABAMABANiAAMABQMFUQAAAAJPAAICCwBANTQyMSwrIB8cGxQSBgwrEyYnJiY1PgU1NCYnJicmBwYGBw4DByMnPgIeAhUUDgQHJT4DNzcDJyFrBgQEByVhaGRPMRoQEhccHRk7GwcSFBQJYwY4iYyDZj0yUGRkWh4BVgEJFB0UbQuP/cgCphAODBkIIFJdZWdlMC01DhAFAwEBBwsDHy45HfEWHQgUOF9IO3BoXk8+FAsBBxozLgH+8RAAAgC3/pgBSQbMAAMABwAhQB4AAAABAgABVQACAwMCSQACAgNNAAMCA0EREREQBBArEzcRIxE3ESO3kpKSkgbECPyH/qQI/JkAAQC/AhsD6QK+AAMABrMCAAEkKxMhFSG/Ayr81gK+owABANQA5QO5A8kACwAGswkDASQrEzcnNxc3FwcXBycH1P//dP7/dP//dP/+AVj//3P//3P//3P+/gAAAAABAEYAAwKgBnAAKQAfQBwnJiEgHx4YFxAPCQgHBgAPADwAAAAPAEApKAEMKzc+AzURByc3ETQuAic1PgU3Fw4CFhUVNxcHFAYUFBcXFSFiNEAiC4U4vRwuPCEtRDUuMDglJQcGAgGXNc0BAq394VUOGCpGPAFmS2RqAfo2OyAOCEkJDg4PFBsTFUavv8RcAVZnc1qimZVMN1IAAAACAKH/4gH3BmQAEwAnACdAJAwLBgUEADwDAQABAGYAAQECTwACAhICQAAAJCIaGAATABMEDCsBJgImJic1PgM3FxQOBAcDND4CMzIeAhUUDgIjIi4CAScLExsqIydNTk0nBAkNEA8NAsgWKDYgITYnFhYnNyAgNigWAgbAAS70yFoRDBAOEQ4EUp6irMHbgP5tHTUpGBkpNRwdNCgYGCg0AAAA//8A2wPyA1sGYwAmABcAAAAHABcBjAAAAAIAMgAABSIGLgAbAB8ARkBDBwUCAw4IAgIBAwJWEA8JAwEMCgIACwEAVQYBBAQLPw0BCwsPC0AcHBwfHB8eHRsaGRgXFhUUExIRERERERERERARFSsBITUhEyE1IRMzAyETMwMhFSEDIRUhAyMTIQMjARMhAwFv/sMBTSz+uwFTRIRFASdHfkQBPv62LgFA/rFKgEr+1UuCAgop/tQtAhGAASyCAe/+EQHv/hGC/tSA/e8CEf3vApEBLP7UAAAAAAMAlf8lBL4G6ABDAFEAXwBfQFwhGQIGAisBAwZfUSwNBAADDAEHAEM7OAMFBwU+AAYCAwIGA2QAAwACAwBiAAAHAgAHYgAHBQIHBWIAAQAEAQRRAAICET8ABQUSBUBTUkVEPzw6OSMiHRwbGhAIDSsTFxceAxceAxcTLgU1ND4CNzUzFTIeAhcDIycuAycmJwMeBRUUDgIHFSM1BgYjIi4CJwEGBgcOAxUUHgIXEz4DNzY2NTQuAifBcioGDA0MBREzQEkmBDlyaVxDJ1GFrV1tOlpUWjkdaygFDRIWDjZNBDdwZlhBJUd9qmNtDh4OM3FxbDAB9TljIQsdGhIqSWI4ZyhGOi0QDRUoR142AfMC+BYbEAkDCRAPDAQCKhQrNkVcdk1gkWU7C9XOCQ8SCP50sBcfFw8HFQj93hMoMkBWcEhrm2s+Dc7FAQEUIi0ZBS0BFRQOGSY3Kj5cRTQV/N8BFyEmERE2NTlXQjMVAAAABQB4/1oHTgYoAAMAFwAzAEcAYQBOQEsAAQcBZwADAAUGAwVXAAYACQQGCVcLAQQKAQIIBAJXAAAACz8ACAgHTwAHBxIHQBkYBQRaV05MREI6OCckGDMZMw8NBBcFFxEQDA4rATMBIwMiLgI1ND4CMzIeAhUUDgInMjY3PgM1NC4CIyIOAgcOAxUUHgIBND4CMzIeAhUUDgIjIi4CNxQeAjMyNjc2NjU0LgIjIg4CBw4DBLmV/b2Pl2WLVictXpBiYItZKi1dkTsOPBsTGQ4GES9SQQMgJygMFBgNBRY2WgKaLV6QYmCLWSotXZFjZYtWJ6sWNlpEDjwbJiQUMlZBAyAnKAwUGA0FBij5MgLpR3KPSU2cfk9IdJFJTZp8TmIOERw/QkIeRIFkPAIHDQocPkFBHkSCZD3+2E2cfk9IdJFJTZp8Tkdyj4FEgmQ9DhE5hz1EgWQ8AgcNChw+QUEAAAMAgv/aBlMGCwBRAGUAeQBHQER1blI/NyUFBwMBSkACBAMCPgAGBgBPAAAACz8AAQECTwACAg4/BwEDAwRPBQEEBBIEQGxqXVtOTEZEPTswLi0sFBIIDCsTND4CNyYnLgM3PgUzMh4CFRQOAgcwFx4DFxc2Njc2NiYmJyczMhYVFA4CBx4DMzI2NxcGBwYGIyIuAicGBiMiLgIBPgM1NC4CIyIOAgcGHgIBFB4CMzI2Ny4FJw4DgkFqh0cOCh8yIxICARUpQFl1SUuBYDc9Y31AAStWXWc8F0ZdCwQCFTQxAaZQSilMbUMpPjUzHxk6KQEbIx5YOShRS0EZYNh2fMaLSwI+ME85ICA0QSA1STAXAQIbLjz+wk96kUI/gDwTPElUVlUlJ04/JwGHWYRlSyEPDyhUWmE1IEtJRDUfKktnPFyCX0cgATZpcHtHHFvPZCdCMB0DXl1MPZWfoEktNh0KBQNHGRMRGxwsMhdFVER0nAJnHUVPWTE5UjUaITdGJTJZU0798Vt8SyAyLRdJWGVoZi4bQk1ZAAEA2wPyAc8GYwAMABlAFgYDAgEAAT4AAQEATQAAAA0BQBYUAg4rASYCJzczFw4DByMBHBUfDQTsBAgPEBEKcQPywAEvXiQkL3yWrV8AAAAAAQDh/nYDBQcOABkABrMVBwEkKxM0PgQ3Fw4FFRQSFhYXByYmAgLhK0lgaW0xSSNRUkw7Iz5lfkB9SJJ1SQKxgvDZwKGCLz03g5euxNx5v/7T7LJDdkK+AQcBWP//AFD+dgJ0Bw4BDwAYA1UFhMABAAmxAAG4BYSwJysAAAMAwAI/BGMGAAAPABMAFwA8QDkHBgEABAEAEQ8MCAQCARMQCgkEAwIDPgUCAgESCwICAj0AAgADAgNRAAEBAE0AAAALAUARFhkTBBArEzcFAzMDJRcFBQclNycjBwUlFwUlMxMjwl4BPCi9KwE+X/6ZAWZf/sM2Nmo1/pkBZzX+wgE+aim8BL6i5QGF/nvlo56go+dcXFyfn1zm5v58AAABAKsArQP9BCEACwAgQB0DAQEEAQAFAQBVAAUFAk0AAgIOBUARERERERAGEisBITUhETMRIRUhESMCA/6oAVijAVf+qaMCG6MBY/6do/6SAAEAbv5BAcgA0gAiABFADhkYBwAEADsAAABdKwENKxcmJy4DNT4DMzIeAhUUDgIHBgcnPgM1NCYnJpQFBAIDAgEBGSw8IyQ7KhcXJi8ZOkpREzYxIiUWGhovJhAfGA8BARQYExouPSQ3ZVlNIEs7Qxg9RlArJiEFBQAAAAABAL8CGwNAAr4AAwAXQBQAAAEBAEkAAAABTQABAAFBERACDisTIRUhvwKB/X8CvqMAAAAAAQCM/+IBtAEGABMAEkAPAAAAAU8AAQESAUAoJAIOKzc0PgIzMh4CFRQOAiMiLgKMFig2ICE2JxYWJzcgIDYoFnMdNSkYGSk1HB00KBgYKDQAAAAAAQB2/1oC2gaIAAMAEkAPAAEAAWcAAAANAEAREAIOKwEzASMCT4v+IYUGiPjSAAAAAgCF/+wEzQVlABsAOwAjQCAAAAADAgADVwQBAgIBTwABARIBQB0cLywcOx07LCYFDisTND4EMzIeBBUUDgQjIi4EATI+Ajc+AzU0LgQjIg4CBw4DFRQeAoUcOlp9n2Nhm3dWNhocOlp9oGRlnndSNBcCUwsmLjEXHS8iEhAjOFFrRQYyQUEUHS4fESxglwKKWrKijGc6NV6Al6dVWrGgimU5NFx+lab+SgYMFA4wbnJyNE6XiXNVLwMLFRIwbXFwNHXerGkAAAABAIMAAAMjBXUAFwAgQB0VFAADAQABPhIRDAMAPAAAAQBmAAEBDwFAGykCDis3PgM1EzQmJgYjNTY3NjY3FwMRFxUhlzdWOx8CLEdbL0pLQJVCMhDS/XRSERkpRDsC2zUwDwVIGR8aRicV/uT8RTdSAAAAAAEAdv/oBDoFZQA7ADpANx0BAAIxAQQDAj45AQQ7AAEAAwABA2QAAwQAAwRiAAIAAAECAFcABAQPBEA7Ojg3IyEcGxQTBQwrMyYnJiYnPgU1NC4CJyYmBgYHDgMHIwM+AzMyHgIVFA4CBw4DByU+Azc3AychhwQEAwUBNYuUj3FFGyguExpBSEwnCxQUFg54Ci1ob3M5VZ12RyVBWjUzc3BlJQIRAQUSIh9qEZ38+xMSECEMMXyPnqaqUzdZPyUEBgYEEBAFN1FhLgFrEyEXDCRRhWJKgnl0OzpwZlsmNQILJ01FAv5nGAABAH//iAOzBWUASABRQE4kAQIENQEFAw8BAAFHAQYABD5IAQABPQADAgUCAwVkAAUBAgUBYgABAAIBAGIABAACAwQCVwAABgYASwAAAAZPAAYABkM8HCUXLigQBxMrMzI+AjU0LgIjIg4CBzc+AzU0LgIjIgYHDgMHIxE+AzMyHgIVFA4EBxU2HgQVFA4EIyIiJzV/e9SdWjBXekoNIyQjDRVCjHRKIjQ9GypQKQsVFRgOZCFYZm43SIhqQSE1RUdDGkhuUTYhDjVii6nEaw8dDjBdiFhOaD0aAwUFA4sKNVl/Uyc2IQ8QFgYrQ1UuAUYSHRUMIUVrSStMQzkuJAwUAhowQEdKIFCQemFFJQJ2AAIANv/DBF8FjAAQABcANUAyAAEBAAE+EgoGBQQAPA4NAgE7BAMCAAEBAEsEAwIAAAFNAgEBAAFBERERFxEXExMXBQ8rEz4DNxcRNjY3ByMRBxMhJREOAwc2VLvGzWZFP20wD8vUAf2EAns3cm9oLAG9ePf29HYg/GwDFRWr/pgvAZeBAk5GlJaWSAAAAQB8/5EDywX6ADMAMEAtAAUEAQQFAWQAAQAEAQBiAAIABAUCBFUAAAAGAAZUAAMDCwNAFicRFycdEAcTKzM+BTU0LgInLgMnJiY3ExYWNjY3PgM3FwMhDgMHBhYzIAQVFAYGBAcngT2EgHRXNCVEYz0xZVU7BwgHCIc+iYZ8MhgiGhcNTUr9+Q4ZFA4DBBcfARsBHV/C/tzFDQMaMUljfE00XEs2DwwKBgYGCCcfAhoGBAQKCAgaHyYUA/7DKlVJOA0REdHbZsilbwxvAAAAAAEAef/iBEgFxgA9AC1AKhYBAQIVAQABAj40MwICPAACAQJmAAEAAWYAAAADTwADAxIDQCopKyIEECslFhY3PgM1NC4CJyYmIyIOAgc1PgMzMh4CFRQOBCMiLgQ1NBI2JDcXDgICFRQeAgGiJGVQRF88GwwWHhEWTzEePjQnCRlFTU8kUIFaMR87VGt/SFWMblE1GmzLASW6I37cpV8IEh7JNkECATNZfUwiWVlMFRQYCg0QBm8KGxgQTHubUD5+c2RJKi5PaXV8O6YBLv3EPWg1ptb+/5EpW1pTAAABAF4AAAQEBWAAJAArQCgcBwIAAwABBAICPgACAAQAAlwAAwEBAAIDAFcABAQPBEAYYRQRSQURKyU+BTcOAyIGByIOAgcnEyEyPgI3Fw4FByMBRRM8TFtlbDcPRFlpa2UpGSQeGA1XOgLEEx8dHRErQXRkVEMyD84sSrHCz9DMYAkJBAEDBB8uNhcBAV4BAQIBRmbs+Pbfu0AAAAADAJj/4gQ9BWUAJwA+AFMAKEAlTygZBQQDAgE+AAAAAgMAAlcAAwMBTwABARIBQEVDMzEkIi4EDSsTND4CNy4DNTQ+AjMyHgIVFA4CBx4DFRQOAiMiLgIBPgM1NC4CIyIOAgcGBhUUHgIDFB4CMzI2NzY2NTQuAicOA5g5W3A3OWJIKE9+mktOlHRHMVNuPjx6Yj5TiK5bWaJ8SgH2MEozGhw5WD0aKCEcDyMxKUdf/CtOcEVCayAOFkJjdDIgSz8qAS5FbVdCGh9HV2hBUYZgNR9IdVdGaVJFIhlEWG9DWo9jNShSfQIsF0NQVioqSjYgBQkLBhlPOjliTjr+L0BbOxwpIxhDHkBhTToZEyw+WAAAAAABAHn/hARIBWUAPAAzQDAfAQEAIAECAQI+OwECOwABAAIAAQJkAAICZQADAAADSwADAwBPAAADAEMoKSssBBArBT4CEjU0LgInJiYHDgMVFB4CFxYWMzI+AjcVDgMjIi4CNTQ+AjMyHgQVFAICBAcnAS1+05lWCBIeFiRlUERfPBsMFh4RGVIsHz00JgkeRktMI1CBWjFFfrFsVYxuUTUaYsD+5LojFDWr3QEGkShVU00hNkABAitSd0woXFZIExcVDBITB28NHhsSRXaeWV6zjFUrSmRxejqn/s3+/ck9aAAAAP//AIz/4gG0A8YCJgAeAAABBwAeAAACwAAJsQEBuALAsCcrAP//AG7+QQHIA8YCJwAeAAACwAEGABwAAAAJsQABuALAsCcrAAABAJcAJQSsBEoABgAGswUBASQrEwEVAQEVAZcEFfxwA5D76wJ6AdCF/nP+c4YB0QACAJ4BVQQNA4MAAwAHACFAHgAAAAECAAFVAAIDAwJJAAICA00AAwIDQRERERAEECsTIRUhESEVIZ4Db/yRA2/8kQODev7He///AKYAJQS7BEoARwAsBVIAAMABQAAAAAACAJz/4gP0BscANwBLACVAIjc2GhkABQEAAT4AAAEAZgABAQJQAAICEgJASEY+PCMhAwwrAS4DNTQ2Nz4FNTQuAgcOAwcnPgM3NjYzMh4CFRQOAgcOAxUUHgI3FwE0PgIzMh4CFRQOAiMiLgICbjFUPyQYFBhHUE5AJy5PaDopUUpAGT4WOUBDIEV9MEaFaUA0TFckHkE3IxAtUEEf/pQWKDYgITYnFhYnNyAgNigWAeAPIjJHMx4/ICJVYGVjXScsUzoWERQsLCkSXhIyNTMUGhswWH5PMW1qXiIcR0lEGRMmGgcNUP4vHTUpGBkpNRwdNCgYGCg0AAIAe/9QBw8F2QBmAIEAVEBROAEDBXg5Nx4ECANcAQYBAz4ACAMEAwgEZAAEAQMEAWIAAAAFAwAFVwADAgEBBgMBVwAGBwcGSwAGBgdQAAcGB0Rta2FfWlhOTERCKi1aJgkQKxM0PgQzMgQWFhcWDgIHDgIiIyImJyY+AjcOBSMiLgI1PgUzMhYXFhYXNxcOAwcGHgIzMj4CNTQuAiMiDgQVFBYWBDMyNjcXBgYjIi4EJRQeAjMyPgI3PgU3JiYnJg4Ee0V9sNb1hZEBBMZ1AQFSksp4FSAdIBYjIQIDAgcLBhQ/S1BIOg8pPSgUASlKZnqMSxMuGA8hEDxcFy4oIQsCDhYbC1+IWCldoNV3dNK0kWY3aLsBBJ1o0WEGc/yAbMmtjmY3AkgKGCkfGEpNQw8JDw0LDA0IFicXNF1QQS0ZAi6K9tGndD9FlOumg+eycAwCAQIcFBYmJicXEC0xLyUXMEtcLVqqln5bMgwKBxAFPw5lsKyxZRMXDQVakbZcgcuLSTtrlLLLa676oUsfIlI2LidQeaPOXiAuHg4dKi4QLEAzLTRALRgkDyYPSXR9eAAAAAAC/9YAAAYgBioAJgArADVAMiQjHhkWFRQACAABAT4LBgUEBAM8BAEDAAEAAwFVAgEAAA8AQCcnJysnKyYlIiEYFwUMKyc2NjcBJyc+AzceBRISFwcXFSE1PgM3JiYnIQMXFSEBAQYHAyozUR0B/1cBKzs4QjMNFxwmOE9wlWILpv2sIzotIgsRPjP9qIrL/ewD/P73DA3bUg4WFAUGIDIKDg8SDyM2P1WCvP7w/pHzBDdSUgkQFBsULaGC/oMvUgJ3ApoXJ/2kAAMAbv/iBQ4GBgAsAEAAWABOQEsHAQQAQAYCAwQzLRoDBgNYQQIFBgABAgUFPgADAAYFAwZXAAQEAE8AAAALPwACAg8/AAUFAU8AAQESAUBXVEdEPjwyLiwqJyV4Bw0rNz4DNREnNTMyPgIzMh4EFRQOAgceAxUUDgQjIi4CIyMBNjYzMhYXPgM1NC4CIyIGBxEeAzMyPgI3PgM1NC4CIyIGB24yQCUOpcsqYmBYITx5cGJIKixBTCFDe1w3L09qdXk4IWh2eDDrAX0bWTwnVSwULCQYMld2RClLHTdCNDQqIUM/NRMRHRYNLVyMXldhHE4OFyhDOQReNk8EBAQLGy9IZENUg2VHFhM/X4NWU4JjRSwUCQwJA0UDBgUHEzhKWzhadUMbBwT67QsMBgEFCw8KFSw5SjNCfWE6BAMAAAAAAQBk/+sFewYNADIAMkAvDAECACcmAgMBAj4AAQIDAgEDZAACAgBPAAAACz8AAwMETwAEBAwEQDgrJRUmBRErEzQ+BDMyFhcWFwMjJy4DIyIGBw4DFRQeAjMyPgI3Fw4DIyIuBGQsVoCq0X1qv0pWSzBxLydcZm45V6U/KDsmE0md+K8PWnV9MSeIw4FIDYDTqX1UKQLhZce1mnFAHhEUGv6I2h4mFwkwKy9yen06k/u5aRwqMBRSWV4qBTtokKi7AAAAAAIAZv/tBjMGBgAeADsAL0AsBwEEAB8GAgMEAAEBAwM+AAQEAE8AAAALPwADAwFPAgEBAQwBQD0lEip4BRErNz4DNREnNSEyPgIzMgQWFhUUDgQjIiYnISUeAzMyPgI3PgM1NC4CIyIGBw4DFWY0RCYPrQEWPGllaTy/ASLEYy9dibTegi+TTf5rAYUQOExcNChfYFcgI1FFLlem85wPVDYSGREIUg4YKkY8BEw4UgQEBGm3+ZB238OjdEELCLEIExIMChIaER5eiLl5pvqmVAMFBxUhMiQAAAEAbv/uBPgGDQAdAE1ASgcGAgIAAAEHBQI+CgEAPBsBBzsAAQIDAgEDZAAGBAUEBgVkAAMABAYDBFUAAgIATQAAAAs/AAUFB00ABwcPB0ASEREREVESGAgUKzc+AzURJzUhNxEHJyYmJyYHESUVJRElEzMDJyFzMj8jDKUDf45oSJS5Nj4fAbr+RgJFXGwTjfwbUA4XKEM5BFs2UBP+ZAL5BgYCAgH9yx2+H/23GAEf/kASAAEAbgAABPsGDQAYADxAOQcGAgIAFhUAAwUEAj4KAQA8AAECAwIBA2QAAwAEBQMEVQACAgBNAAAACz8ABQUPBUATERExEhgGEis3PgM1ESc1JTcDByclJicRJQclEQUVIXs0PR8IpQP/jhRpRv5HVj4COgH9xwFI/UhSDhgqRjwEUDZOART+eALdEgQB/csdvh/9yTBZAAAAAQBk/+wFzAYOAEEAQEA9DAECAC8sKyoEAwQ2AQUDAz4AAQIEAgEEZAAEAwIEA2IAAgIATwAAAAs/AAMDBU8ABQUSBUA7Fj80FSYGEisTND4EMzIWFxYXAyMnLgMjIg4CBw4DFRQeBDMyPgI3ESc1IRUOAxUVFw4DIyIuBGQwXIeu0npqu0hURyZnMilkb3Q3KVhUSBkhOSoYID9gfp1eNE0/OSC7AfUXJhsQCGXBnWsNdsafeFEpAuBkx7WbckEdERQa/obZISgWBxEfKRgrZXWDSFuumoNeNQQJEAwBkzdTUwYPFh8W0cg5ORgBO2iPqLoAAAEAZgAABlwF+gArADRAMRYTEgoHBgYBACkoIB0cAAYDBAI+AAEABAMBBFYCAQAACz8FAQMDDwNAExcZExcYBhIrNz4DNREnNSEVDgMVESERJzUhFQ4DFREXFSE1PgM1ESERFxUhZjREJg+tAj00RysSAtStAj41RiwSxf22NEQmD/0sxP23Ug4YKkY8BEw4UlIOGCpGPP57Ah84UlIOGCpGPPuzN1JSDhgqRjwBtf2wN1IAAAEAaAAAAnIF+AATAB1AGhEQCgcGAAYBAAE+AAAACz8AAQEPAUAZGAIOKzc+AzURJzUhFQ4DFREXFSFoNDweB5ACBTU+IAqd/fZSDhgqRjwESjhSUg4YKkY8+7U3UgAAAAEAJv4KAoQF+gAcABRAERcWBAEABQA7AAAACwBAEgENKwEnNSEVDgMVERQOBAcOAwcnPgM1AQmiAh0xPyUOAQYLEhwUM1hLPRk7NVQ7HwVuOFRUDhgqRjz8/ILElGlNOBg/TjAcDTcxbH6XXQAAAAACAGf/6gW+BfoAIgA2AChAJTQzLSopIxoIBQQKAQABPgIBAAALPwMBAQESAUA2NSwrHRsWBA0rASYmJwEnNSEVDgMHAR4DFx4FFwciJicuAwE+AzURJzUhFQ4DFREXFSECVREdBQHWmAIxJDc0NCH+JwsiPWBIIU5VV1NMHgFLlEdVkomI/cg0QycOrAIxNUMmD639zwKuGjQPAmkyVFQKDwsIA/3ADzBPeFgoWFdRQjAJTAQYLYiv0P4YDhgqRjwESjhUVA4YKkY8+7U3UgAAAQBn/+4E/gX6ABYALUAqCgcGAwIAAAEDAQI+AAIAAQACAWQAAAALPwABAQNOAAMDDwNAEhEXGAQQKzc+AzURJzUhFQ4DFRElEzMDJyFxNEAjC6wCRTVJLhUCRV1xKo38KlIOGCpGPARKOFRUDRgqRzz7nB8BQ/4cEgAAAAEAC//2B+8F+gAyACxAKTAvLi0oJyQjHhsZFBAPDAAQAgABPgEBAAALPwMBAgIPAkAyMRkUHQQPKzc+Azc3Ey4DJzUhFQEBJyEVDgMVExcVITU+AzUDNCY1ARQGBwcBAwcXFSELNDgeEw8NhQUUJTgpAZIBxQGrAwGVNUMmD6e3/cU0QCMLgwH+RQQFXP4VbwWt/gtSDhoqRTs0A9MeJxoTC1In+5AEfRpUDhUmQjz7qzdTUw4YKkY8A68CBQL7WQgQBSME7Pye9zdSAAEAUQAABmUF+gAkACdAJCIgHx0VEhEPDAcGAAwCAAE+AQEAAAs/AwECAg8CQBcXFR0EECs3PgM3NxEuAyc1IQEDAyc1IRUOAxURIycHARMXFxUhUTRCKBQHBwUWKDwqAT8DmAcJrAHiNUMmD3QBA/xdDgLB/eNSDhgqRjw9A8IhKRwTDFL7dQHzAgw4VFQOGCpGPPssDQ0EsPvcAzdSAAACAGT/7AZHBg4AGwA5AB5AGwADAwBPAAAACz8AAgIBTwABARIBQC0sLCYEECsTND4EMzIeBBUUDgQjIi4ENxQeBDMyNjc+AzU0LgQjIgYHDgNkLFeBq9V+fM+jelEoLFeCq9V+fM6kelAo3x8/YYSqaFebPyg8JxQfP2GFqmhXmz8oPCcTAtxlyLacckE6aI6oumBlyLWccUE6Z46nushYrp6IYzguJTd5fXw7WK6fh2Q4MSg3d3t8AAAAAAIAZwAABQ4GEgAlADoAPUA6BwEFACYGAgQFIQECBCMiAAMDAgQ+CAEAPAAEAAIDBAJYAAUFAE8BAQAACz8AAwMPA0ArExY6MUkGEis3PgM1ESc1FhYzMj4CMzIeAhUUDgQjIi4CJxEXFSEBHgI2Nz4DNTQuAiMiDgIVZzRDJw6sUX40SXBrdE1vp3E4K0xpfItIGD9EQBnV/acBhCprd3w8HjEjEipXhFo5VzseUg4YKkY8BEpCUgcBBwkIRXilYE+Nd19DJAMHCwf+NjdSAuQQFQYLERw4SmdKUIxnPA8sUUMAAAIAZP6jB1kGDgAzAFEAM0AwKhMCAgMcAQECAj4AAQIBZwAEBABPAAAACz8AAwMCTwACAhICQEtJPDouLCIgJgUNKxM0PgQzMh4EFRQOAgcWFhceAxcXBgYHBgYnLgMnJiYnBgYjIi4ENxQeBDMyNjc+AzU0LgQjIgYHDgNkLFeBq9V+fM+jelEoKVJ6UBs6IEGAeW8wCSNVIyNFIjhoYFcnHDEXPYZLfM6kelAo3x8/YYSqaFebPyg8JxQfP2GFqmhXmz8oPCcTAtxlyLacckE6aI6oumBiwrGZOhw1GjVfSzMJMwQKAwUCAgQqQlQuIUAhFhc6Z46nushYrp6IYzguJTd5fXw7WK6fh2Q4MSg3d3t8AAIAbv/5BcgGDgA8AFEASEBFPQYCBQY4GgIDBTo5JAAEAgMDPgcBBgE9AAMFAgUDAmQABgYATwEBAAALPwAFBQJQBAECAg8CQE1LPz48OzY1KSVCOAcOKzc+AzURJzUhMj4EMzIeAhUUDgIHHgMXHgMXByIiJyImJy4DJy4DJyYmJxEXFSEBFhY2Njc+AzU0LgIjIg4CFW4yQCUOpQEUIjg2OUpfQV2dcUA2X4BLDCUwOyIwZmRjLQEjViMjRiE2VUc/IhsvLCwYJGBFvP3HAX01dHFnKBcqIBM1XoJNQkslCVANFyhDOQRcNVEDBAYEAy9ej2BNmoJdEBxMVlkqPG1YQA4zAQUHCjhQYTQrWV1hMgEICf3RNE8DGwoHCRgWFjZGWTlMeFMsEzJXQwAAAAABAJ//6ATIBg4AUQA9QDorAQQCUQEFAQI+AAMEAAQDAGQAAAEEAAFiAAQEAk8AAgILPwABAQVPAAUFEgVATUs3NS0sJyUqEAYOKxMXFx4DFx4DMzI+Ajc+AzU0LgY1ND4EMzIeAhcDIycuAycmJiMiBgcOAxUUHgYVFA4CIyIuAifLcioGDA0MBRZOYGgyK0Y4KxEFDAsISHeXnpd3SDBUcYOORzpaVFo5HWsoBQ0SFg4qdUg8YyMLHxsTSHaWnZZ2SGau5X8zcXFsMAHzAuYWGxAJAwsbGBAUHiURCR0jKBNOaUo3OEVmkWpKdlxCKhQJDxII/nSnFx8XDwcRGg8UDhwoOSpSbUs0ND9eimWAr2ouFCItGQAAAQAlAAAFIQYNABwAMkAvGhkAAwUBAT4PDAICPAMBAQAFAAEFZAQBAAACTQACAgs/AAUFDwVAFjESEhE2BhIrJT4DNREGBgcHIxMXITcDIycmJicGBhURFxUhAWI4VTgcMquHXF4UhAPghBpeLnmiNAoH6f1eUgoXLEk8BFICBgb4AZ0TE/5j+AUGAg4yLPuAN1IAAAEAQ//sBhMF+gA9AC5AKy8aFxYVAQAHAQAoAQMBAj4CAQAACz8AAQEDTwQBAwMPA0A3NSopFywSBQ8rEyc1IQ4EFBUVFB4CMzI+AjcRJzUhFQ4DFREeBRcXFSEmJyYmJw4FIyIuBDXalwGHBwkGAgEZQHFZQ3htZzJxAeIaNywcAQIBAwMGBJL+mAIBAgEBEjtNXWduNzFpZVtFKAVuOFQaOUtkjLp7/WqXYS0VK0EsBBY4VFQLDiA/PP3+YpJvVUdCJjdSJichSyAUMzQzJxgIHjxnmW0AAAH/1//oBh0F+gAWABdAFBEODQwGAwYAOwEBAAALAEAaFAIOKxMvAjUhFQ4DBwEBJzUhFQYGBwEHvAJAowJSJzcnGggBoQGOuQIlNFsl/gzBBNUBojBSUgsRGCEa+6IEoC1SUg4SEfqnNgAAAAH/9v/eCNsF+gAlACBAHSMiHRoZGBcWEQ4KBAENADsCAQIAAAsAQBscEgMPKxMnNSEVDgMHAQEvAjUhFQ4DFQEBNSc1IRUGBgcBBwEBB5qkAj8qOSYVBwFrASghOJkCZDNPNBwBYgFWrQINMFom/kSz/q3+1KsFcTdSUgwTHCgh+7cDqV+ON1JSDhQbKCL7yARvGTdSUg0RDvqYNgPa/Fw2AAAAAQAqAAAF2QX6ACoAMkAvKCIhIB0ZDg0DAAoDAQE+Eg8GAwEBPQABAQBNAgEAAAs/BAEDAw8DQBodFhEXBRErPwIBAScnNSEVIgYXAQEnNSEVDgMHBwEBFhYXFSE1NwEBBgYWFhcVISqRVgF8/kIJmgJFXT4VASsBW5UB9jBLQTwgBf6sAc0lUjT+FU/+nP7yFQshU0j9w1I3WwICAoALN1JSOzP+QwH3NFJSBRcqQC0E/h/9ewsgDlJSFgIP/oElNygaCFIAAAABAAwAAQW3BfoAHQAkQCEbGhkVEhEQDAkGAAsCAAE+AQEAAAs/AAICDwJAGBgaAw8rJT4DNREBJyc1IRUGBhcBASc1IRUGBgcBERcVIQGXQFs7HP4bFYMCNWBMDAFtAXqlAdQnQRr+LPP9Q1MKFyxJPAEwAwUXN1JSCy40/YsCsy9SUgsSC/zV/jU3UgAAAAABAE7/7gUGBg0AFwA9QDoBAQACAT4JAQI8FQEFOwABAAQAAQRkAAQDAAQDYgAAAAJNAAICCz8AAwMFTQAFBQ8FQBIRUhIRJAYSKzcBDgMHBycRFyEXAT4DNxMzAychTgOST5OcrGlIXoQDuxT8bGfVwZ8ycGIdg/v+VwU2BwwMCwTwAgGcE1b60gcODQkCAQH+ShIAAQCq/p0CAwcGAAcAIEAdBQQDAgQBAAE+AAABAQBJAAAAAU0AAQABQRUQAg4rEyEVBxEXFSGqAVm+vv6nBwZ4Jvi0DnEAAAD//wB3/1oC2waIAEcAHwNRAADAAUAAAAD//wCq/p0CAwcGAEcASwKtAADAAUAAAAAAAQCIAf4EIQX6AAYAGkAXBAEBAAE+AgEBAAFnAAAACwBAEhEQAw8rATMBIwEBIwH2wQFqlv7J/tSgBfr8BAMh/N8AAAAB//b+rAU5/08AAwAeQBsCAQEAAAFJAgEBAQBNAAABAEEAAAADAAMRAw0rBRUhNQU5+r2xo6MAAAEAcgSMAmEGbQAJAAazCQUBJCsTPgM3FhYXB3ISMTQ0FU2TT1oF7xMpJBoEatJkQQAAAAACAGf/7AQxBBIAOABIADpAN0JBLwcEAwEnAQQDAj4AAQADAAEDZAYBAwQAAwRiAAAAAk8AAgIUPwUBBAQSBEAoJiYYJxQsBxMrNzQ+BDc1NC4CJyIOAgcjNz4FMzIeAhURFBYWMhUVDgMjIiY1DgMjIi4CNxQeAjMyNjcRDgVnDy1Th8KHByRLQzBALSERoBUhTlFQRTYPWn1QJDA5MBQ1PD0cRzwwSUVONDRqVTbcHTJFJzZoKiRWVlA+Jf4qRj03NjggmRwzJxkBGzhTN84OIB4bFQwcQ29S/cEbGAgCUwgTEAxKTCg5JBEgQ2hgKDklETkoASkNFRceLUEAAAAAAgAN/+wEaQZ+ADEARAA6QDcXAQQARDICAwQCPg0GBQMAPAAEBABPAAAAFD8AAgIPPwADAwFPAAEBEgFAQD42NDEvLCodGwUMKxM0LgInNT4FNxcOBwc+AzMyHgIXFhYVFA4EIyIuAiMjNxYWMzI+AjU0LgIjIg4CB7UcLj0hLUY6MDI1IiUBAgMCAgECAQEcTlhaKRJOXmMoIDI6XHNwYx46kIRhCwLWPINJR2M9GyE7UTAkWVRIFAUXNjsgDglICxEPDxMZERULRWZ8gX1nSg0SNDAhCSVIPjaXaH63gE4rDw0RDZEfIzxoiE1Rkm5BFiAhCgAAAAABAFr/7AO0BBIANgAxQC4sAQMBLQEEAwI+AAECAwIBA2QAAgIATwAAABQ/AAMDBE8ABAQSBEApLScoJAURKxM0PgIzMhYXDgUjIy4DJyYmIyIGBw4FFRQeAjMyPgI3Fw4DIyIuAlpcm8tuRppGAQYICQgFAV4NEQwJBjFgNCFKIxQiHBUPByVRgl4PRFNUICE4c2JFCGy7ik8BzYvZlE0cHAcxQ0o/KTZGKhICCw0LCg0wOkA9NBBQlHJEDRMXC1QiOCkXPXm0AAIAWv/tBJAGbQA5AEwAQEA9CwEEAEA/MAMDBCkBAQMDPhsaFRQEADwABAQATwAAABQ/BQEDAwFPAgEBAQ8BQDs6REI6TDtMNDIrKicGDSsTNDY3PgMzMhYXNTQ0JiYnJiYnNT4DNxcOAwcRFBYXHgMXFSEmJyYmNQYGIyIuBAEyPgI3ESYmJyYOAhUUHgJaODUmY210NzltLA4hIhQrHkJhUUssJgUGAwIBBgUGGyEmEf65AwICAm2pNUl3W0IqFAGzHE9UUB4ui08yXUgrJDxQAdBzuUU0TjQbEQjKIz00KxELCgZJDxkbHxQVNk5HTTb7rAgYCAcREA8FUhUZFDUcWE4qR2Brcf70FB8mEgJZGiUCASdZkWlXkmk6AAAAAAIAWP/jA8AEEgAmADgANkAzCgEBBB0cAgIBAj4AAgEDAQIDZAAEAAECBAFVAAUFAE8AAAAUPwADAxIDQBg0GxYZJAYSKxM+AzMyHgIHBgYHBgchBh4EMzY3NjY3Fw4DByIuAjc+Azc2NjU0LgIHDgNbAkmFvHZgh1YmAgEBAQEC/XMCHzVGSUgeLDAqZjUiN2BZUyqAu3s602OMXTYMERMuUGs8DC0uJAHwbsaWWDttmV4OJRETFVZ7VjQcCQsNCyAUVh8zKR8LSIfD+gEGBgUCAjAaRF4yAxYEIkRrAAAAAQBeAAADmQZoADMARkBDFAEDAQgBAAQxMAADBgADPgkBBAE9AAMBAgEDAmQAAgQBAgRiAAEBDT8FAQAABE0ABAQOPwAGBg8GQBoRGhQVJxYHEys3PgM1EyM1NzU0PgIzMhYXFhcDIycuAg4CBw4EFBUhFSEUFAYUFRQWFxcVIV4/SSUKAqCgUYu7aREuFBgXJFceBSY1PTcqCAQGBAIBARn+5wEEBNX9mVIOGCpGPAJRcxS+ZKBvOwYDBAX+6HUOEAYCCA0HDD9WYVtMFIdZi3ZsOztzPTdSAAAAAAMAZf4LBJAEEgBWAGoAfgBaQFcUEQIGACcGAgIFAAEIAzgBBwgEPgABBgUGAQVkCQEFAAIDBQJXAAYGAE8AAAAUPwADAwhPAAgIDz8ABwcETwAEBBYEQFhXe3lxb2JgV2pYaik7JiwtChErNyY2NzY2NyYmNTQ+AjMyFhc2NjcWFhUUBgcGBicWFRQOAiMiJicOAxceAxceBRcWDgIjIi4CJyY3NjY3NjY3NiYnLgMnLgMBPgM1NC4CBw4DFRQeAgMGBhYWMzI+AicuAycmDgKUAgYJKVExWm1EdZ1ZZKE6Q3lAEg8LCSxUKhpEdZxZI0MgDR0YDgIDMENNIDp9eGxTNAQEQ5r3rmmRXS4HBAMDNDAaORoIBQgLEA0QCw4hHBQBzTZEJw8aP2dNLkAnEhc7ZVVSMid0VV2SZDEDAhxUnYITHBUQnAwjCy1fMSWOaVWEWy8nKAonGxErECAyDwwFAjlHVohdMQcFDh8fIA0aHhEGAgMHER40TDdCloFVIzxPKyAUFk8rFyYdCAoDAwcGBwUGFRshAUMDKT9LJTZgRycEAig9SyU2YUko/hI4dmE+FTRZRCIxIBEEAQYKDAABADYAAAUUBm0ARwA4QDUZAQIARURDMzArAAcBAgI+FBMMCwQAPAACAAEAAgFkAAAAFD8DAQEBDwFAR0Y/PTIxJCIEDCs3PgM1ETQuAic1PgU3Fw4CFBU2NzY2Nz4DMzIeBBcTFhcWFhcVITU+AzURNC4CIyIOAgcRFxUhPDRBIgwcLz0hLkQ2LzE4JSUHBgIiJiBPJwkoNj8gSWM/IQ4BAQIiHxo2EP3gNkMlDiM3RSIvWk5BFrD921IOGCpGPAPjNjsgDghJCQ4ODxQbExVGl7HVhBQVEi0WAgwMCR01SlhjNf4DDwsKEgNQUg4YKkc9AcUoMhsKEBgeDv1zN1L//wBWAAACjAYJAiYArQAAAAYAsmQAAAD//wAF/gEB9QYJACYAslIAAAYA6wAAAAAAAgA3/+oExwZtAB0ARAAtQCpBNy0qHhsaAAgAAQE+FBMMCwQBPENCAgA7AAEBDj8AAAAPAEAsKx0cAgwrNz4DNRE0LgInNT4FNxcOAhYVERcVIQE+BTU0LgInNSEVDgMHDgMHFhceAxcWFhcVBSc9NEAjCxwvPCEtRDcuMTglJQcHAgGg/ewBrRc+Q0EzIBciKhICCTVELB0NH0VJSyRPTSBGQz8ZFD4Z/ueBUg4YKkY8A+M2OyAOCEkJDg4PFBsTFUavv8Rc/QU3UgIPDzdESUI0DA8XEQsEUlIJDxEVDR9SVlMgW1EjR0I4Eg4bCFIWkQAAAAEAWgAAAn8GbQAdABdAFBsaFBMMCwAHADwAAAAPAEAdHAEMKzc+AzURNC4CJzU+BTcXDgIWFREXFSFgNEAiCxwuPCEtRDYuMDglJQcGAgGs/eFSDhgqRjwD4zY7IA4ISQkODg8UGxMVRq+/xFz9BTdSAAAAAQBbAAAHxwQmAHYARkBDIhMSDAQDAHRzcl1aVVE8OTQLAAwCAwI+EQEAPAUBAwACAAMCZAEBAAAUPwYEAgICDwJAdnVubFxbTUs7Oi0rHhwHDCs3PgM1ETQuAic1PgM3Fwc2NzY2Nz4DMzIeAhc+Azc+AzMyHgMUFxMWFxYWFxUhNT4FNRE0JicuAyMiDgIHFhYVExYXFhYXFSE1PgU1ETQmJy4DIyIOAgcRFxUhYTdBIgodMD0gRVZHSjgoDSIkH00nCiMtNhxBWz0jCQYwRE4kCiQuNR1JYj0fDAEBKCMeOxD93yY1IhMJAQoJCxomNSUoUEk/FwIBASgjHjsQ/d4nNSITCQELCAsZJDMlKlFJPhat/d1SERkpRDsBfTVBJRQISA0YHiccFaATFRIsFgMMDAoXLD0nAxolLBQDDAwKHjVKVmEy/f0OCwoRA1JSDRARFic7LgHVFCYJCxAKBRAZHQ0jSyX+Bw4LChEDUlINEBEWJzsuAdUUJgkLEAoFEBkeDv12N1IAAAAAAQBdAAAFMAQmAEgAOEA1FRQMCwQCAEZFRC8sJwAHAQICPhMBADwAAgABAAIBZAAAABQ/AwEBAQ8BQEhHQD4uLSAeBAwrNz4DNRE0LgInNT4FNxcHNjc2Njc+AzMyHgMUFRMWFxYWFxUhNT4FNRE0JicuAyMiDgIHERcVIWM3QSEJHS88IC5DNi4wOCUoDSIlIE0nCiYxORxMZT4fCwEmIR04D/3jKTgjEwcBCwgMGyg4JypSSj4Wrf3fUhEZKUQ7AZE1QSUUCEgJDQ0PExoTFaATFRIsFgMMDAoeNUpWYTL9/Q4LChEDUlIMDxEXJzwuAdcUJgkLEAoFERkfDv12N1IAAAACAFr/6gRFBBIAEwAnAB5AGwADAwBPAAAAFD8AAgIBTwABARIBQCgoKCQEECsTND4CMzIeAhUUDgIjIi4CNxQeAjc+AzU0LgIHDgNaVpG+aHGye0BQirhpaLWGTeodSHpeQVUxEx1Iel1CVDITAdyC0ZNQOni1e4XXmFI9e7uwXaV5QgYES3SOR12kd0EFBEZwjwAAAgA//hoEiwQmADAAQwBJQEYGAQQAQzEFAwMEJgEBAysoJwMCAQQ+DwEEAT0MCwIAPAAEBABPAAAAFD8AAwMBTwABARI/AAICEAJAPz01MyopJCIVEwUMKxM0LgInNT4DNxcGBgc+AzMyHgIXFhYVFA4EIyImJxEXFSE1PgM1ExYWMzI+AjU0LgIjIg4CB9QWKDYhMVRPTCkmAwMCHFBZXCkSTl5jKCAyPWF3dWYeK3M54P3UJzAaCdI5i0lHYz0bITtRMCRaV0kUAsc2PCAOCEgIFRsiFRQmTi0TODIkCSVLQjaVaIC5gE0qDQ8K/qQ4UlILFydANQGCHSk5ZYhOU5RvQRkiJAsAAgBa/hsEigQVACoAPQBBQD4xMCESEQUEBRsYEwMCAwI+AAEBDj8ABQUATwAAABQ/BgEEBANPAAMDDD8AAgIQAkAsKzUzKz0sPSkZJScHECsTNDY3PgMzMhYXHgMXFQcRFhcWFhcVITU+AzURBgYjIi4EATI+AjcRJiYnJg4CFRQeAlo4NSZjbXQ3OW0sJDdFYk5+FRQRKBD9+DdLLhRtozVJd1tCKhQBsxxPVFAeLotPMl1IKyQ8UAHdcLNENE40GxcKBAgGBQFILvtADAsKEwVSUg4VIjgxAXhYTitKYm50/ugUHyYSAlcbKQIBJleNZlmWbT0AAAABAFsAAAOjBCYALgBBQD4dExIMBAIAKgEBAiwrAAMDAQM+CwECAT0RAQA8AAIAAQACAWQAAQEATwAAABQ/AAMDDwNALi0mJB8eHBoEDCs3PgM1ETQuAic1PgM3Fwc2NzY2NzY2FxYXAyMnLgMjDgMHERcVIWA3QSMKHjA9H0RXR0o4KA0eIBtDIipeKC8sGnAVAgYLDwokS0Q6FOz9nVIRGSlEOwGFNUElFAhIDRYbJBwVrBkaFjIVFQ0BAQn+nJADDg0LARIbHw39gjdSAAAAAQCM/+8DigQQAEEAPUA6IAEEAkEBBQECPgADBAAEAwBkAAABBAABYgAEBAJPAAICFD8AAQEFTwAFBQwFQD07KigiIR4cNxAGDisTFxcWFhceAzMyPgI1NC4GNTQ+AjMyFhcDIycmJicmJiMiDgIVFB4GFRQOAiMiLgInrmgmCxIIIUBCRiYXJhoOMVBnamdQMTNjkV5TmlIaYh4LFhUqcTgYKBsPMVBmamZQMUFwl1UmXmBaIwFFAm0eEgUPEgsDEyEpFzRELiAeJjlVQE59WC8PC/7zSx0hCRIXGikxGDFAKx0eJTtXQV6DUyYOFx8RAAAAAAEARP/lAzMFAAAgADdANAIBAAIVAQQAFgEFBAM+AAECAWYABAAFAAQFZAMBAAACTQACAg4/AAUFEgVAKSMRERYQBhIrEyM1NzY2NzczAyEVIREUFjMyPgI3Fw4DIyIuAjXinmIdKQZNfAcBP/7BNTAbQkI+FyYkX2ZnLUxVKgkDdWUlCycPwP78h/17MCkMExcLYBc0LBwnT3hRAAEAXv/eBOwEEgBFADBALR8ZBQMBADQtLAMDAQI+MgEDOwABAAMAAQNkAgEAAA4/AAMDEgNAPz0bLBYEDysTLgMnNSUOBBQVERQeAjMyPgI3ETQuAic1JQ4CFBURFB4CFxUOAwcnJwYHBgYHDgMjIi4DNDXtAR8rMRMBbwMEBAECESdBMChSTEAXHDJFKQGUAgMBFyg2IDVIPj0qKBkgJB9NKAkkLjccSWM+Hw0DGzI4GwkETBkcND1IX3pP/vcqMRkGDhccDgIuKTkkFARMGTWAh4Y7/vQ1NhgGBEgLDxEYExWOFhYTKQ4DDg4KHzhMWWIyAAABAAP/1ASqA/wAGwAhQB4RDg0CBAIAAT4ZAQI7AAIAAmcBAQAADgBAFxsTAw8rEycnNSEHBgYHExYWFwEnNSEVDgMHASMHJyeREX0B9gYwPRHlCxUKAQWCAaMvNiMbEv63ASRjOwNnDTZSUQ8XEP3GGhgCAnsoUlEPExsqJv0UXhGeAAABAA3/4gbGA/wANwAlQCIxIB8VBgUBAAE+NSoCATsAAQABZwMCAgAADgBAGhYXFwQQKyUuAy8CIQcGBgcTFhYzEyYmLwIhBwYGBxMWFxMnJyEHDgMHAQcnJy4DJwMGBgcnJwHPI1FUUSODAwIABjpBEMcHEAnLCxUKewMB6gYvQBbQCg7aogMBxAYkMSQbDv7WHV49FDA0OBvTDB4WXjGRS7rExFU2U1ISGxb96hQQAe0aNBgpU1IOGRD91RsFAlEwU1IIDhgkHv0DWxGeNHZ/g0H+CSBNOBGeAAAAAgAhAAAEhAP8ACYAKQA7QDgoDg0LCAUGBAAkHh0cGRcMAwAJAgQCPgUBBAACAARcAQEAAA4/AwECAg8CQCcnJyknKRoaGBYGECs/AhMBJychFQYGBxMTJychBw4DBwEBFxUhNTcDAx4DFxchAScHJphc0v7aogMCASY8FtHAbQEBrgYfLyYfD/72ATqB/h123MsJHCg0IgH+DwNUCAxSNlQBFAGGNFJRBw0K/ukBESNSUQoNCAUC/pf+Yi1RUjEBFP71Cg4MDglRA3QCAgAAAAEABP3/BMQD/AAwAC5AKx8eDwMBAAkIAgMBAj4AAQADAAEDZAIBAAAOPwADAxADQC8uISAcGxEQBAwrEz4FNzcHLgMvAiEHDgMHEx4CMjcTJychBwYGBwYCDgUHISfKQm1WQS0ZAwVENW9pYCWBAwItBik3JBMFyA0YFhcMz7MDAfYGPFMRSXBVQDIoJyob/tgY/mQHPVViV0AKDAyE++XLVCdSUQ0UGCEZ/g0kKRMGAoo1UlEOIyLG/tTjpn5iXWI/ZQABAF8AAAPRA/wAHwAvQCwAAQAEAAEEZAAEAwAEA2IAAAACTQACAg4/AAMDBU4ABQUPBUARGCMRGCIGEis3ATcOAwcOAwcjEyEXAQc+Azc+AzczAyFfAi9APX1pSQkLFBkiGVoLAwYi/dI8PoFwVhMEDh0vJmAZ/MxjAu9IAwgJCQQFDyZEOgE7X/0NQgIHCQ0JAgkpWVL+kQAAAAABADX+ogMKBwkAQwAGsz8UASQrJTQ2LgMnNT4EJjU0PgI3FQYGBw4CFBUUFAYGBwYGBw4DBxUeAxcWFhcWFhUUFBYWFxYWFxUuAwFUBQYbQG1WVm1AGwYFMWmmdjZmNg4OBQECAQMNDg4nQWJJSWJBJw4ODQMDAQUODjZmNnamaTF2S4h1YUctCHUHOFRrdXk5d6lvOwphDDEqOFtVWjYdLCYjFCpAFxo7Ny4NBQ4vOT0aF0AqKGI6NlBLUTgqMQxhCjtvqQAAAAEAt/6YAUkGzgADABdAFAAAAQEASQAAAAFNAAEAAUEREAIOKxM3ESO3kpIGxgj3ygAAAP//AEv+ogMgBwkARwBrA1UAAMABQAAAAAABAK8BvgP5AvEAIgAsQCkQDwIBAAE+IQECOwABAwIBSwAAAAMCAANXAAEBAk8AAgECQyUpIyQEECsTPgMzMh4CMzI+AjcXDgMjIi4EJyYOAgcnrwwwRVcyN2NXSx8YKiMaCV0MLUBSMSdDOzUyMBgmMCEXC2EB4DFiTjAtNi0eKy4RIi9eSzAUHiQeFQEBHiwwEiL//wBY/+MDwAZtAiYAVQAAAAcAfgFbAAD//wBY/+MDwAZtAiYAVQAAAQYArmEoAAixAgGwKLAnK///AFj/4wPABhQCJgBVAAABBgB/ZBQACLECArAUsCcr////4wAAAqwGFAImAK0AAAEHAH//cgAUAAixAQKwFLAnKwAAAAMAoP7RBIMGcQAHAAsAEQAxQC4JAAIBAAoHAgMCAj4IAQIBCwYCAgI9AAIAAwIDUQABAQBNAAAADQFAEhcREgQQKxMFAzMDIxUFJSUVJSMzExUjNaABuS3OLXT+RwItAbb+SnR0LM0EzyoBzP40dC6iKswu+qUFBQAAAAACAJADRANuBiEAEwAnAClAJgUBAgQBAAIAUwADAwFPAAEBEQNAFRQBAB8dFCcVJwsJABMBEwYMKwEiLgI1ND4CMzIeAhUUDgInMj4CNTQuAiMiDgIVFB4CAf9Sh2E1NWGHUlKHYTU1YYdSNFE3HBw3UTQ0UTccHDdRA0Q7ZIVKSoVlOztkhUpKhWU7hChCVC0tVEIoKEJVLS1UQSgAAAAAAgBd/wkDtwUEADQAQgBCQD8pAQMCKgACBAMCPgAAAQBmAAcBAgEHAmQAAgMBAgNiAAYEBmcAAQEUPwADAwRQBQEEBBIEQBERESk6KBEbCBQrBS4DNTQ+Ajc3MwcWFhcOBSMjLgMnJiYnAxYyMzI+AjcXDgMjIiYjByMTIgYHDgMVFB4CFwHPUYhiN0yDrWEachk/fj8BBggJCAUBVA0RDAkGFysXTAsVCw9EU1QgIThzYkUICA4IF3J2IUoiHi0fDxUtRzMFEk95omV+xY1UDPjzAxsZBzFDSj8pNkYqEgIFCQP9IgINExcLVCI4KRcB5AR2CwoUU11YGT51ZE8YAAEAnv/iBPgGOABlAFZAUxwBAwRSUQIIAGQBCgsDPgADBAEEAwFkCQEHCAsIBwtkBQEBBgEACAEAVQAIAAsKCAtXAAQEAk8AAgIRPwAKChIKQGJgXVtKSBEYERwmGysRGAwVKzc+AzU0JichNzMuAzU0PgQzMh4CFw4DBwYHIzY1NC4CIyIOAgcGBhUUHgIXIQchFhUUDgQzNjYWFjMyNjU0LgInNx4DFRQOAiMiLgIjIgYHJ543dWI/Cwr+9h6tGjUtHC1OanqFQmeIVCoKBQkLCgQLCXIDDz58bCpJOioLDQYuP0QWAYYe/q8DJDY/NCMCWayYfisnKwYKDghyEyEYDQwiPTEtc5fCezuHP0l7GGSAjEEeNxp4J09UXTZEdmBKMhocKjIWES4zNhk8QB4bRmRAHQ0TFgkaMhc7anB9TnghIkx9Y0gvFxwGDxYdHgggIyILHxQ7QkEbJEIyHiAnICYqggAAAAIAof/qA58GGQBPAGEAPEA5JgEDAl9VQCcZBQADTwEEAQM+AAADAQMAAWQAAwMCTwACAgs/AAEBBE8ABAQSBEBLSTAuJCImEAUOKxMXFxYWFxYWMzI+AjU0LgY1NDY3LgM1ND4CMzIWFwMnJyYmJyYmIyIOAhUUHgYVFAYHHgMVFA4CIyIuAicTFB4CFz4DNTQuAicGBsNoJgsSCEKATRcmGg4xUGdqZ1AxUE4iOysZM2ORXlOaUhpiHgsWFSpxOBgoGw8xUGZqZlAxTEIfNScWQXCXVSZeYFojvDlbczoSHxYMN1pwOTAqAUQChB4SBR4VHCoyFzRELh8fJjxaQmKSKg8oNkcuTn1YLw8L/u0MTR0hCRIbHCwzGDE/KhweJj5dRmeMKhApNkctXoZVKA4XHxEC5zVBKh0RChchLB83RS8fERlEAAABARMCDgLrA+oAEwAZQBYCAQAAAU8AAQEOAEABAAsJABMBEwMMKwEiLgI1ND4CMzIeAhUUDgIB/jJVQCQkQFUyMldAJCRAVwIOJ0FWLy9XQicnQlcvL1ZBJwAAAAEAnv9nBSoFsQApADtAOAYBAQMBPikBAAE9AAEDAAMBAGQAAgUBAwECA1cAAAQEAEsAAAAETQcGAgQABEERFRQVESgmEAgUKwUyPgI1EQYjIi4CNTQ+AjMhByIOAhURIwM2NjcjERQOAiM1BzUB+UBOKg1RR2aUYC5PovWlAgEPLDchDIoBARIQzRw4VDh9MwkoVUsBXhlUiKtWWrGOWHUOLFJF+vwFYiY4FfscQ105GAEBZgAAAAABADX/7wU7BkoAYABLQEgLCgIABR0BAwBdAQQDXjAAAwIEBD4AAAUDBQADZAADBAUDBGIABQUBTwABAQ0/AAQEAk8GAQICDAJAYF9QTzk2MjEsKicYBw4rNz4FNRMjNTc1PgMzMh4CFRQOBAcUHgYVFA4CIyIuAicTMxceAzMyPgI1NC4GNTQ+BDU0JyIOAgcOAxQeAhcXFSE1KjwoGA0EAqCgB0CAxo5plF0rLkdUTTsJLUldYV1JLUBtk1MmTEU6FRpwMQouODwZFSUbECtHWl9aRyssQU1BLPgnRjwyEwUGAwECAwMBa/3/UgkRExspOSgCUXMUM3HFkVQuUnFEUXBOMigjGC5AMCgrNEhkRmiMVCMOFx8RAQOrDhAJAxgnMxo0SzksKzA+VDo9VUM7SWFHpB4cKTEVCV6TucnLtJIrN1IAAAAAAwBz/98GqQYzABsAbAB8AF1AWm0jIgMKC2g0AggKamk5HAQGCAM+AAgKBgoIBmQDAQIACwoCC1cACgkHAgYFCgZYAAQEAE8AAAALPwAFBQFPAAEBDAFAeHZvbmxrZGNaWVhWUlBEQkEuLCYMECsTND4EMzIeBBUUDgQjIi4EBT4DNREnNTMyPgIzMh4CFRQOAgceAxc2NjU0LgQjIg4EFRQeBDMyPgI3IiInIicuAycmJiciLgInERcVIQEWFjY2NTQuAiMiDgIVczlnkbDMbm7MsJFnOTlnkbDMbm7MsJFnOQGOJC4aCnbFJTZAV0UvWkYrIDxVNR5ecX0+MTUsUnWSrGBgrJJ1UiwsUnWSrGBSl4RvLA4aDDMwJzszLRgnWiQMFBcgGYf+agEPQnhcNx82SSkvNhsGAwhvzrSVajs4ZpK00nNvzrSVajs4ZpK00fsHDhYnIQJKHkwEBAQbNlE3LFhKNQknaGVUFFXDZ2G2n4ReMzZihp+zXWK1oINeNClJZz8BBgYgLTgdMmk6AgIDA/7VHkEB3wcBH0hEKzwkEAscMSYAAAMAc//fBqkGMwAbADcAYQBEQEFCAQUEWFcCBgUCPgAEAwUDBAVkAAUGAwUGYgAGAAcCBgdYAAMDAE8AAAALPwACAgFPAAEBDAFAKS0VKiwsLCYIFCsTND4EMzIeBBUUDgQjIi4ENxQeBDMyPgQ1NC4EIyIOBBc0PgIzMhYXFhcDIycuAgYHBgYVFB4CMzI+AjcXDgMjIi4CczlnkbDMbm7MsJFnOTlnkbDMbm7MsJFnOYosUnWSrGBgrJJ1UiwsUnWSrGBgrJJ1UizLO3Wuc0J2LjYuG0chJFhiaTQ8OTljh04JKjc/HiZTakAfB3i1eT0DCG/OtJVqOzhmkrTSc2/OtJVqOzhmkrTRdGK1oINeNDdhhqCzXWG2n4ReMzZihp+zcl60jFUSCw0Q/vWnEBUICQ46l1lbjmIzDxcbDEs4OxoETYCmAAACAFACiAfqBecAHABcAAi1VS0bCgIkKwE+AzURBwcjExchNwMjJy4DIwYUFREXFSElPgM3ND4ENyYmJzUhFRMTNCY1IRUHDgMVHgMXFhYXFSE1PgM1JiYnAxQOAgcDBgYHFxUhAQUfLx8PpzNXDlsCJ2EOVR4wOCAOBwKC/mICYBwgEgsGAgUJERkSBScuAQjs4gIBChoUGxEHCRQUFAkZOhb+lR0lFggOGwzgBBEjH/wMGgxe/sIC3wYLFB8aAjEHggECDQ3+/oICAwEBBhIO/bUfTUwHDRQeGQIIIUJ3tYMWFAtNJP3aAiwFFQROBgUKERoWQpGUkkIHDwdNTQcNEx4ZZ9Zq/dgEBwoRDQJbfex/HkwAAAAAAQByBIwCYQZtAAkABrMJAwEkKxM2NjceAxcBck+TTRU0NDES/msEzWTSagQaJCkT/p0AAAIAcQTcAzoGAAARACMACLUdEwsBAiQrAQYuAicmPgI3NhYXFg4CBQYuAicmPgI3NhYXFg4CAtAfNisdBgYGGCwgPVkNBgcYLP4rHzYrHQYGBhgsID1ZDQYHGCwE5QkHGyoaGzYvJAkRNTkZNjAlCQkHGyoaGzYvJAkRNTkZNjAlAAAAAAEAngB4BA0EjAATAAazEggBJCsBIzUhEyE1IRMzAyEVIQMhFSEHIwGJ6wEbev5rAcRomWgBEv6/egG7/hVWmQFVewE5egEJ/vd6/sd73QAAAv/E/+4HiQYNACoAMgBrQGgXFgILBCgnHwAEBwUCPgsBATwcAQc7CgEDAAIAA1wAAgQAAgRiAAQLAAQLYgAGCAUIBgVkDAELAAgGCwhVAAAAAU0AAQELPwAFBQdOCQEHBw8HQCsrKzIrMi4sKikXEhETEVESIRYNFSsnPgM3ASU1IQU3EQcnJiYnJgcDJRUlESUTMwMnITU+AzURIQMXFSEBESIOAgcDPBw5NjAUAiL+1QI/AqqZaEmTujU+HgEBuv5GAkVcbBON/BsyPyMM/k2sxf26A+AOJSkoEfFSCA0PEQwE8BRjART+ZAL5BgYCAgH9yB20I/2vFQEf/kASTw4XKUM5ARj+SilSAqMC0QETLSv9mwAAAAMArwB/BqUD2QArAD0ATwAKt0c+ODAJAAMkKyUiLgI1ND4CMzIeAhcXPgMzMh4CFRQOBCMiLgInJw4DAR4DMzI2NTQuAiMiDgIBMj4CNy4DIyIGFRQeAgIKWoNVKUFvk1FEcmBOIQYoSlZrSVqDVSkeNkpaZjZEcmBOIQYoSlZrAa0RQlptPGFqJT1QKi1cVkr98y1cVUscEUJabTxhaiU9UH8+bZRVVqR/TSdFXjcOMmFNLz5tlFU6b2VWPyMnRV43DjJiTC8B7j1tUzB1bThbQCMbLz7+sBsuPyM9bVMwdW04W0AjAAACAKv/4QP9BCEACwAPACxAKQIBAAUBAwQAA1UABAQBTQABAQ4/AAYGB00ABwcMB0AREREREREREAgUKxMhETMRIRUhESMRIREhFSGrAVijAVf+qaP+qANS/K4CvgFj/p2j/tgBKP5powAAAAACANgAKwRQBBgABgAKAAi1CQcFAQIkKxMBFQUFFQEDIRUh2wN1/QADAPyLAwN4/IsC5AE0kPn+jQE1/mVzAAAAAgDYACsEUAQYAAYACgAItQkHBgMCJCsTJSU1ARUBFSEHIdgDAP0AA3X8iwN4A/yLAZH++ZD+zKv+y2ZzAAAAAAEAKAABBdMF+gArAERAQRQREA8OCwgHAgMkISADCQgCPgUBAgYBAQACAVYHAQAKAQgJAAhVBAEDAws/AAkJDwlAKyojIhERERUYFBEREAsVKxMhNSE1IQEnJzUhFQYGFwEBJzUhFQYGBwEhFSEVIRUhFRcVITU+AzU1IfoBpP5cAZb+Wj+DAjVWTwIBWwFwmgHoMEsd/jsBv/5BAb/+Qd/9a0BVMxb+XAHS1WYCIUM3UlIKJSn+EwIdKFJSDhUR/Zlm1WbiN1JSChcsSTxHAAABAK7+FgTDBBsAUgAyQC8/NQICAEkBAwICPi4tIBoQCgYAPAEBAAACTwACAhI/AAMDEANAT007OSsqFxQEDCsTNCYQEDU0PgIXDgMVFR4DMzI+AjcRND4CFw4DFBQVFRQWFjY3Fw4DJiYnDgMjIi4CJxQeAhcWFhcWNxYOAiMiLgKvAQosWU4EBAIBBx8zRi4jOTU4Ig4tVUcBAgEBGicsEjoQNkRLRjwTGj9GTCYaQUNCGgEDBgYRORwgIwMGHjsyJ0k4Iv7cSOIBIgFYvEhcMgkKI3KWtGThEyMbEAQLEQwChEhcMgkKHl1veXFiIdcsJQIZEikqRC0REjo1HDAkFQcYKyQjYF1MDzAvCAoEFzMrHRcwSwAAAgBr/+oETwYFAC4ARQAItUIzKRsCJCsTPgMzMhYXLgMjIg4CByYnJiY3PgMXHgQSBw4FIyIuAjcGHgI3PgM3NjYnLgMnJg4CbQNYkL1oTnYtEEFuonAeQTwxDRINCxICG09ZVyJgr5R1TiMIBCA6VG6JUnG0fEDiBBpHe142UjsnCwUGAg4xSF87QmNEJgHDgbx5OykjY8KaXwkOEAcaFBEdAhIeFQoCBUN4qdj+/pRBiYByVTFGfq1qQYlsQAcEP2aHSyNhOyM+MSEGBj9ukQAAAAABAL//QwUrBg0AHAAGsxkLASQrFz4DNwEBJzUhNxEHJyYmJyYHAQElEzMDJyE1xBwjHyYeAR/+o2kDf45oSJTJP0osAUn+ewJ3cHYTjfw5WwobLEIyAikC4TZQE/5kAvkGBgICAf1G/R8GASH+QBJQAAAAAAEAbv9VBccF+gAgAAazEggBJCsXPgM1ESc1IRUOAxURFxUhNT4DNREhERcVITVuNEQmD60FTTVGLBLF/bsvQScR/cmV/eZZDhgqRjwE9zhSUg4YKkY8+wg3UlYNGCpFOgT8+mkcbVIAAQA9//cFJgSSAE4ASkBHKAEGAjsBAAZOAQcAAz4ABAMEZgACAQYBAgZkAAYAAQYAYggFAgEBA08AAwMUPwAAAAdPCQEHBwwHQExIGyQfJBQ0FCYRChUrNxYWPgM3EyMiDgIHIz4DMyEyPgI3Mw4DIyMOBQcGHgI3NjY3Mw4DIyIuAjc+BTchAw4DIyIuAidSGTAsKSUhDlNaKjQhFApZBx46WkMC7ig1Jx4PRAYhRGxSFQMICAgHBAEFBxswIzA4CF8DN1RmMylOOiAEAwoOEA8OBv7OLQscNVZDIkI3JwdfAwEQJ0pzVQHODRsoGjFmVDYLGSgdRmxJJSVZXlxOOw1Oa0EYBgdTN01zTCYXNFM8Kmx5f3puK/40aKFuOAIDAwEAAAEABP4MA/oGSgAzAAazLBIBJCsXFx4CPgI3PgImNRE0PgIzMhYXFhcDIycuAg4CBw4CFhURFA4CIyImJyYnE38eBSIvNTEmCAYGAgFIgbJpES4UGBckVx4FIi81MSYIBgYCAUiBsmkSLRQYFyTKdQ4QBgIIDQcSTW2HTARCZKBvOwYDBAX+6HUOEAYCCA0HElBvhkj7vmWfbzsFBAQFARgAAAAAAgClAm4DewV6ADYARgBYQFU7OgwDBgIyAQQGKgEABAM+AAIBBgECBmQIAQYEAQYEYgAEAAEEAGIFBwIAAGUAAwEBA0sAAwMBTwABAwFDODcBADdGOEYwLignHx0YFxMRADYBNgkMKwEiLgI1ND4ENzU0LgInIg4CByM3PgMzMh4CFREUFhYyFRUOAyMiJjUOAzcyNjc1DgUVFB4CAYkmUUIrCyA7YYxiCRwzKyItIBcMiw8kVlJDEUJsTCoiKiIPKS0uFTI/IjEtNCknPx0EKjtCOCUQITICbhkzTzYfNC0pKCkYNSI1JRQBDiA0Jo4PIRsSEy5MOf5DEhEGATkFDQwIMzUcJxkMeiQc4wMLExsmMR8iLBkKAAIAfwKZA38FhAATACcAMEAtAAEAAwIBA1cFAQIAAAJLBQECAgBPBAEAAgBDFRQBAB8dFCcVJwsJABMBEwYMKwEiLgI1ND4CFzIeAhUUDgInPgM1NC4CBw4DFRQeAgHuT4diN0FtjEtPimc7Qm6SGDJCJg8XOF5IMkImDxc4XgKZL1qDVFqSZzgBLlqCVFqSZzljAytHXTU5bVQwBAMtSmA0OWtRLgAAAAEAaAAABgYGDgBHAAazJxEBJCsTNx4DMzM1LgM1ND4CMzIeBBUUDgQHBzMyNjczAyERPgU1NC4EIyIOBBUUHgQXAyFoWwgXLUw+xFyddUJNpP2weL+SZ0EeJT9WY2s0Aq5gegVdK/3SP2NLMyAOECdBYYdYWYhjQicQCBksSWpJBf3ZAYQEOVU5HG4ijbjWa3LWp2QuUnCFk0tPlYl5Y0oVbm5x/nwBYRFMZnyCgjspYmJbRyoqR1tiYik6enlzZ1cg/p8AAAAAAwBn/+MGNAQSAEsAXwBzAFFATh4BAQBsJgcDBAhoQTgDBQQ5AQYFBD4AAQAIAAEIZAAIAAQFCARVCQEAAAJPAwECAhQ/CgEFBQZPBwEGBhIGQGRiWlk0JxsWGSQnFCwLFSs3ND4ENzU0LgInIg4CByM3PgUzMhYXNjYzMh4CBwYGBwYHIQYeBDM2NzY2NxcOAwciJicHDgMnLgMBPgM3PgM1NC4CBw4DARQWMzI+AjcmJjc1DgMHBgZnEzFXh72ABh5CPDpKMSERnxUhTlFQRTYPfZMgQappYIdWJgIBAQEBAv1zAR41RklIHiwwKmY1IjdgWVMqls07LxxFWXJIMGJQMgM4Y4xdNgwIDgkFLlBrPAwtLiT9omdUIENAOhcUEQIVQk5VKC48/i9KPjQzNR+ZFzIqHAEbOFM3zg4gHhsVDDpHPEU7bZleDiURExVYfFMwGAcICwocFFYfMykfC2VeLRs0KBgCASNFZQG1AgUGBQIBDxUaDUReMgMWBCJEa/5cUEcZJS0VN4BIDAUSFhwPF0oAAAAAAwBa/z8ERQS/ABwAJwAyADxAORABBAAyKCcdBAUEGgACAgUDPgABAAFmAAMCA2cABAQATwAAABQ/AAUFAk8AAgISAkApIhIoEjkGEislLgM1ND4CMzIWFzczBxYWFRQOAiMiJwcjASYHDgMVFBYXFxY3PgM1NCYnAW4+ZkgoVpG+aBgtFjx7RIONUIq4aTgzPHsBcjVGQlQyEyg0ZTZGQVUxEyk0ERlScpNbgtGTUAMCsswt3riF15hSCbQEVBIDBEZwj0xuuz1DEgQES3SOR264PP//AKv+/gIBBYABDwARAqIFYsABAAmxAAK4BWKwJysAAAEAxgDEBI8CvgAHACBAHQACAwJnAQEAAwMASQEBAAADTQADAANBEREREAQQKxMhBzMRIxEhxgPJAQGd/NQCvgL+CAFXAAAAAAEAP/4NBa4G5AAIAAazBQMBJCsTJQEBFwEjAQc/AWIBEgIU5/1Lhf6WmwGmkfyeCA9K93MDYTsAAQBp/hEFQwVnAE0ARUBCIwEEAkwBBwgCPgACBAJmAAQDBGYAAwEDZgkBCAAHAAgHZAUBAQYBAAgBAFUABwcWB0AAAABNAE0pERUZHSkRHwoUKxceAxcWFjY2Nz4DNyM3MzY2Nz4FMzIeBBUwDgIHBgcnNjc0JicuAwYGBwYCByEHIwYCBw4FIyImJyYnE/ICBQ0XExE5PjsTGCEYEgnGGLoLHRcYRE5SSToQCCs3PDEgBAcJBAsNagMBBQsKKjc8NywKGR0MAQAY8g8oJhE/TlVPQRMoUCAmIyVsFT8/Nw8NBwgYEky90+BxgHTXXkhnRSkVBgYJCwsIAh0wPiBMYQMdHBg3FRMfFQoCDw6D/uiRgLL+q5tFZ0wxHgwUDQ4TAUEA//8ArwDJA/kEBgInAG4AAAEVAQcAbgAA/wsAErEAAbgBFbAnK7EBAbj/C7AnKwAAAAIATQAABboGKQADAAYACLUFBAIAAiQrATMBISUBAQLoUQKB+pMEcv4j/jUGKfnXawSC+34AAAD//wCqABcEegPZACYApwAAAAcApwH9AAD//wDYABcEqAPZAGcApwNVAADAAUAAAQ8ApwVSA/DAAQAJsQEBuAPwsCcrAP//AIz/4gY0AQYAJgAeAAAAJwAeAkAAAAAHAB4EgAAAAAIAZP/oCFEGDgAlADsAZ0BkCQELABgBCAYdAQkIAz4AAgMEAwIEZAAHBQYFBwZkAAQABQcEBVUACwsATwEBAAALPwADAwBPAQEAAAs/CgEGBghNAAgIDz8KAQYGCU8ACQkSCUA4NiwqIiASERQRFRESESQMFSsTNBI2JDMyFyE3EQcnJR4DFyUVJQYCBxclEzMDJyEGIyIkJgI3FB4CNz4EJjU0LgIjIgYGAmRgwgEjw2FQAymPaUj92S08JRECAWD+nwZPV0sCTVxsE5f8eFpuqv7qxm35Q4bKhl56SSILAxtMiW2eynMsAt6zASzYeRQT/mQC+RIwe5CiWBe0Gb3+3l8JFQEf/kAUGmnEARmqgeKnXQMCNVyAnLNhedqlYWO2/v8AAAAAAwBa/+MG/AQSADQASABaAEtASAgBCAcSAQIILSQCAwIlAQYDBD4AAwIGAgMGZAAIAAIDCAJVCQEHBwBPAQEAABQ/AAYGBE8FAQQEEgRAVVQ0KCgkGxYZJiQKFSsTND4CMzIWFz4DMzIeAgcGBgcGByEGHgQzNjc2NjcXDgMHIiYnBgYjIi4CNxQeAjc+AzU0LgIHDgMlPgM3NjY1NC4CBw4DWlaRvmiT0TohVWZ2QmCHViYCAQEBAQL9cwEeNUZJSB4sMCpmNSI3YFlTKp/UOUbPeWi1hk3qHUh6XkFVMRMdSHpdQlQyEwMjY4xdNgwREy5QazwMLS4kAdWC05ZSZGcuSzUdO22ZXg4lERMVVnpTMRoICAsKHBRWHzMpHwtyamZvPHq5rVuieEEGBEpyjEVdpnpDBQRIc5EdAQYGBQICMBpEXjIDFgQiRGsAAAAAAQC/AhsElwK+AAMAF0AUAAABAQBJAAAAAU0AAQABQREQAg4rEyEVIb8D2PwoAr6jAAAAAAEAvwIbBzsCvgADABdAFAAAAQEASQAAAAFNAAEAAUEREAIOKxMhFSG/Bnz5hAK+owAAAP//ALcENwO/BmMAJgCiAAAABwCiAdEAAP//AL0ENwPFBmMALwCiAqsKmsABAQ8AogR8CprAAQASsQABuAqasCcrsQEBuAqasCcrAAAAAQC3BDcB7gZjAB4AF0AUGhULCgQAPAEBAABdAQAAHgEeAgwrASImNTQ+BDcXBgcGBhUUFhcWNxYXFhYHDgMBWUpYHzA5NSkIPiYeGikoGBwkBQQDBgEBEyQ3BDdcVzxiUD0tGwZNEx0ZTjgmHgMECScfGi0BARQYEwAA//8AvQQ3AfQGYwEPAKICqwqawAEACbEAAbgKmrAnKwAAAwCpAFID5wSDABMAFwArADZAMwABBgEAAgEAVwACAAMEAgNVAAQFBQRLAAQEBU8ABQQFQwEAKCYeHBcWFRQLCQATARMHDCsBIi4CNTQ+AjMyHgIVFA4CBSEVIQE0PgIzMh4CFRQOAiMiLgICRRotIRISIC0bGy8iFBQiL/5JAz78wgEiEiEtGhwvIhMTIi8cGy0gEgNqGCgzGhsyJxgYJzIbGzMnGKyj/sQbNCkYGCk0GxszJxgYJzMAAAACAID/7AQpBmUABQAJAAi1CQcEAQIkKxMBMwEBIwkDgAF8sQF8/oSyAYn+z/7UASwDMwMy/M78uQNHAq79Uv1OAAAAAAH/6P+wA8kFugADAAazAgABJCsBFwEnA2Fo/I9wBbo4+i4wAAEAqgAXAn0D2QAeAAazCgABJCslLgMnPgM3FwYGBw4DFRQeAhceAxcHAfMoUVNTKipWVlQnghZAHhAdFw0NFx0QDyAeGgqHFzd+gH02NXh7ejhAJmo6HTo2MBMUMjg8HR04NS8SRgD//wDYABcCqwPZAEcApwNVAADAAUAAAAAABQCg/m8EgwZxAAcACwAXABsAHwBUQFEJAAIBABgTERANDAoHCAMCGxQCBAUDPggBAgELBgICGRICAxoVAgUEPQACAAMFAgNVBgEFAAQFBFEAAQEATQAAAA0BQBwcHB8cHxYXGRESBxErEwUDMwMjFQUlJRUlAzUTMxMVAyUVJTUjJQUVBSUTIxOgAbktzi10/kcCLQG2/kqhLXQsLAG2/kp0/kcBuf5HAi0tzi0EzyMBxf47dDWpI8w1/jUFAcb+OgX+QCPMNXQjI3Q1Nf42AcoAAAABAKACeQHIA50AEwAeQBsAAQAAAUsAAQEATwIBAAEAQwEACwkAEwETAwwrASIuAjU0PgIzMh4CFRQOAgE0IDYoFhYoNiAhNicWFic3AnkYKDQdHTUpGBkpNRwdNCgYAP//AL3+bwH0AJsBDwCiAqsE0sABAAmxAAG4BNKwJysAAAcAeP9aCo4GKAATAC0AMQBFAGEAdQCPAFZAUwAFAQVnAAcACQAHCVcKAQANAQMIAANXDwEIDgEGAggGVwAEBAs/DAECAgFPCwEBARIBQEdGMzKIhXx6cnBoZlVSRmFHYT07MkUzRREYOSgoJBASKwE0PgIzMh4CFRQOAiMiLgI3FB4CMzI2NzY2NTQuAiMiDgIHDgMBMwEjAyIuAjU0PgIzMh4CFRQOAicyNjc+AzU0LgIjIg4CBw4DFRQeAgE0PgIzMh4CFRQOAiMiLgI3FB4CMzI2NzY2NTQuAiMiDgIHDgMHoy1ekGJgi1kqLV2RY2WLVierFjZaRA48GyYkFDJWQQMgJygMFBgNBfxrlf29j5dli1YnLV6QYmCLWSotXZE7DjwbExkOBhEvUkEDICcoDBQYDQUWNloCmi1ekGJgi1kqLV2RY2WLVierFjZaRA48GyYkFDJWQQMgJygMFBgNBQF9TZx+T0h0kUlNmnxOR3KPgUSCZD0OETmHPUSBZDwCBw0KHD5BQQRV+TIC6Udyj0lNnH5PSHSRSU2afE5iDhEcP0JCHkSBZDwCBw0KHD5BQR5EgmQ9/thNnH5PSHSRSU2afE5Hco+BRIJkPQ4ROYc9RIFkPAIHDQocPkFBAAEAVgAAAowEJgAbABdAFBkYEhEMCwAHADwAAAAPAEAbGgEMKzc+AzURNC4CJzU+AzcXDgMVERcVIVY1QycPHC48IERoVEckJQcJBgK2/cpSDhgqRjwBnTVDKRYISA0TExkSEylOUVcx/cY3UgAAAAABAHIEpQNABkUADgAUQBEODQwLAAUAOwAAAA0AQBUBDSsTPgM3Mx4DFwclBXInTEtLJnAmS0tMJ1j+8f7xBOYwUlFXNTVXUVIwQc7OAAAAAAEAcgToA2QGCAAfADBALRsaAgMCCwoCAAECPgADBAEAAwBTAAEBAk8AAgILAUABABYUEQ8GBAAfAR8FDCsBIi4CIyIOAgcnPgMzMh4CMzI+AjcXDgMCjTNRSEMkFyUhHQ1hDi06QyQuVk5CGhUoIhsKZA4pNkME6CQqJBQeJRE7HkxDLiYuJhciJxA6G0xFMAAAAAABAHIE8wLIBYQAAwAXQBQAAAEBAEkAAAABTQABAAFBERACDisTIRUhcgJW/aoFhJEAAAAAAQBqBKMDIQYhABUAIEAdAAIEAQACAFMDAQEBCwFAAQAREAwKBgUAFQEVBQwrASIuAjczFB4CMzI+AjUzFg4CAcNNhV0qD20kPVAsLFI+Jm0PK1+HBKM0Y45ZM083HR03TzNZjmM0AAABAHIE8wGjBgkAEwAZQBYCAQAAAU8AAQELAEABAAsJABMBEwMMKxMiLgI1ND4CMzIeAhUUDgL+IDQkFBQqPyocMyUWGy48BPMWJTEcGTMoGhMiMR4hNScVAAAAAAIAcgSQAmsGdwATACcAKUAmBQECBAEAAgBTAAMDAU8AAQENA0AVFAEAHx0UJxUnCwkAEwETBgwrASIuAjU0PgIzMh4CFRQOAicyPgI1NC4CIyIOAhUUHgIBbzJcRikpRlwyM1tFKSpFXDQcNSkYEiM2JCM2JBMYJzMEkCRBWDU2WkEkJEFaNjRYQSVcFSc4Ihs3LR0dLTcbITgnFgAAAAABAHL+EAJtABQAKwAeQBsVAQABAT4rFgADATwAAQEATwAAABYAQCkvAg4rIQYHBgcGHgQVFA4CIyImJyYnNxYXFhYzMjYnLgU1ND4CNzcBxQMEBwgIFSs2LyEzXH5LNkARFAg0GxwYOx0+MQUDHSowKBsaISEGMQkJERITHRoaISocOFg/IQoHBwqXDAoIDisbChcZGx4hEw8kIhsGFAAAAgByBJYD9AZtAAkAEwAItRMNCQMCJCsBNjY3HgMXASU2NjceAxcBAhdPk00VLi4rEv5z/gtIkE0VLi4rEv59BM1k0moEExwjE/6SN2TSagQTHCMT/pIAAAEAbP4OAiAAPAAeAB5AGw8BAQABPg4BAAMAPAAAAAFPAAEBFgFAKDgCDislFwYGBwYeAjMyPgI3Fw4DIyIuAjc+AzcByVFtdhAKDBkfCQ0hIiUSLwsqN0IkN1o7Fg4KN0hUKTwZO303JjEeDAEGDAuECRYTDSZEXTguUUU2EgAAAQByBKADQAZFAA8AEkAPCQgHBgUFADwAAABdHgENKwEuAyc3BSUXDgMHIwGhJktLTCdYAQ8BD1gnTEtLJnAEoDNWVFUyQdPTQTJVVFYzAAACAEX/7QY4BgYAIgBDAEBAPQsBBgIKAQEGIwEFAAABAwUEPgcBAQgBAAUBAFUABgYCTwACAgs/AAUFA08EAQMDDANAERc9JRIqcxEWCRUrNz4DNREjNzMRJzUhMj4CMzIEFhYVFA4EIyImJyElHgMzMj4CNz4DNTQuAiMiBgcOAxURIQchazREJg/TFL+tARY8aWVpPL8BIsRjL12JtN6CL5NN/msBhRA4TFw0KF9gVyAjUUUuV6bznA9UNhIZEQgB+BT+HFIOGCpGPAHFaQIeOFIEBARpt/mQdt/Do3RBCwixCBMSDAoSGhEeXoi5eab6plQDBQcVITIk/l5pAAAAAgBpAIoExgUbACMANwBLQEgSEAoIBAMAGRMHAQQCAyIcGgAEAQIDPhEJAgA8IxsCATsAAAADAgADVwQBAgEBAksEAQICAU8AAQIBQyUkLy0kNyU3IB4sBQ0rNzcmJjU0NjcnNxc2NjMyFhc3FwcWFhUUBgcXBycGBiMiJicHJTI+AjU0LgIjIg4CFRQeAmmvLTAxLa9pszqJTU6KOrZosS0xMCyvaLQ7i05Oizq0AcdGelo0NFp6RkZ6WjQ0Wnr4tz6TUVGTP7hvuiovMCq7b7o+k1BRkT65brkrMDAquO83Xn1GRnxeNzdefEZGfV43AAAAAAIAWv/qBEUGXgA2AEwAQUA+ISAeFhEQDw4IAAEIAQQAKwEDBAM+HwEBPAABAQ0/AAQEAE8AAAAUPwADAwJPAAICEgJASUc/PTMxGxokBQ0rEzQ+AjMyFhcmJicmJicHJzcmJicmJzY3NjYzFhYXNxcHFhYXHgUVFhUUDgIjIi4CNxQeBDc+AzU0LgIHDgNaVpG+aDFZKBg2HSJIJbFOli9QHyQeCAcGCgJMmU7MTKkoTyg7VTskFAcDUIq4aWi1hk3nDR0wR2A/QVk2FyFNfl1CVTMUAeSCz5BNFBIyWiAlQx2AX24gLxETDxsVEh4YQC2XX4AdQyc6fn96bVsgFRKF2ZtVP36+sDdvZlc/IQQETnaRR3ioZyoFBERtjAAA//8Avf5wA8UAnAAvAKICqwTTwAEBDwCiBHwE08ABABKxAAG4BNOwJyuxAQG4BNOwJysAAP//AHL+mAPKBX0BDwAvBGYFX8ABAAmxAAK4BV+wJysAAAEAcgZnAk0H0AALAAazCwUBJCsTPgM3HgMXBXInTEtLJhUtLSsS/n8GsiVFREgoBCArMBPXAAAAAQByBmcCTQfQAAsABrMLBQEkKxM+AzceAxcHchIqLS4VJktLTCdaBz4TMCsgBChIREUlSwAAAAABAHIGjANkB6wAHwAGsw8AASQrASIuAiMiDgIHJz4DMzIeAjMyPgI3Fw4DAo0zUUhDJBclIR0NYQ4tOkMkLlZOQhoVKCIbCmQOKTZDBowkKiQUHiUROx5MQy4mLiYXIicQOhtMRTAAAAEAcgaEA0AH0AAGAAazBAEBJCsTATMBByUFcgE7cAEjRP7p/tEGxQEL/vVBiYkAAAEAcv3nAab/bQAdAAazCgABJCsFMhYVFA4CBwYHJzY3NjY1NCYnJgcnJiY3PgMBBklXFB8pFTI/PR0XFCAlFhogBAICAQESJTaTSDwkPDIoDyQVNhIWEjEcGxUCAgY2FCMBAQ4QDgAAAgBn/g4EMQQSAFEAYQBPQExbWkgHBAMBRScCBgM1AQQGNgEFBAQ+AAEAAwABA2QHAQMGAAMGYgAAAAJPAAICFD8ABgYSPwAEBAVPAAUFFgVAWFZOTCg6GCcULAgSKzc0PgQ3NTQuAiciDgIHIzc+BTMyHgIVERQWFjIVFQcGBgcGHgIzMj4CNxcOAyMiLgI3PgM3JiY1DgMjIi4CNxQeAjMyNjcRDgVnDy1Th8KHByRLQzBALSERoBUhTlFQRTYPWn1QJDA5MBNncA8KDBkfCQ0hIiUSLwsqN0IkN1o7Fg4IIzA6HzwzMElFTjQ0alU23B0yRSc2aCokVlZQPiX+KkY9NzY4IJkcMycZARs4UzfODiAeGxUMHENvUv3BGxgIAlMIOXg2JjEeDAEGDAuECRYTDSZEXTgiQDkxFAVJRyg5JBEgQ2hgKDklETkoASkNFRceLUEAAAAC/9b+DgYgBioARABJAE5AS0JBPDcWFRQACAAEJQEBACYBAgEDPgsGBQQEBjwHAQYABAAGBFUFAwIAAA8/AAEBAk8AAgIWAkBFRUVJRUlEQ0A/NjUsKiIfGBcIDCsnNjY3AScnPgM3HgUSEhcHFxUjBgYHBh4CMzI+AjcXDgMjIi4CNz4DNyE1PgM3JiYnIQMXFSEBAQYHAyozUR0B/1cBKzs4QjMNFxwmOE9wlWILpoFJUwwLEyQrDg0hIiUSLwsqN0IkP2hFGhAIIi85H/7RIzotIgsRPjP9qIrL/ewD/P73DA3bUg4WFAUGIDIKDg8SDyM2P1WCvP7w/pHzBDdSLmgsKTUgDQEGDAuECRYTDSpJZDojQjowElIJEBQbFC2hgv6DL1ICdwKaFyf9pAAAAQBs/g4E9gYNADoAYEBdBwYCAgAAAQkFKRwbAwcJKgEIBwQ+CgEAPAABAgMCAQNkAAYEBQQGBWQAAwAEBgMEVQACAgBNAAAACz8ABQUJTQAJCQ8/AAcHCE8ACAgWCEA6OSg5EREREVESGAoVKzc+AzURJzUhNxEHJyYmJyYHESUVJRElEzMDJwYGBwYeAjMyPgI3Fw4DIyIuAjc+AzchcTI/IwylA3+OaEiUuTY+HwG6/kYCRVxsE1xLUw0NDyEoDA0hIiUSLwsqN0IkPGNAGA8JJDE8IfyHUA4XKEM5BFs2UBP+ZAL5BgYCAgH9yx2+H/26FQEf/kAMMGAsKTUgDQEGDAuECRYTDSdGYDojRT00EgAAAQByBD4BgQZgAB4ABrMeEwEkKxM2NzY2NTQmJyYHJicmJjc+AzMyHgIVFA4CB6URDQsUHhEVGgUEBAUBARMkNyUlLxsLJjExDAR3FR0ZSjAmHgMECS0jHjICARQYEyM1PxxOf186Cf//AHL/7QWRBm0AJgBUGAAABwDFBBAAAP//AFwAAAOMBm0AJgBcAgAABwDFAgsAAP//AGf/7gT+BfoCJgA8AAABDwCiBRQKJcABAAmxAQG4CiWwJysAAAD//wBE/+UDVwZgACYAZAAAAAcAxQHWAAAAAgBW/g4CjAYJABMATQBFQEItLCYlIB8UBwIAPAEDAj0BBAMDPgYBAAABTwABAQs/BQECAg8/AAMDBE8ABAQWBEABAE1MQ0E5Ni8uCwkAEwETBwwrASIuAjU0PgIzMh4CFRQOAgE+AzURNC4CJzU+AzcXDgMVERcVIwYGBwYeAjMyPgI3Fw4DIyIuAjc+AzcjAWIgNCQUFCo/KhwzJRYbLjz+1DVDJw8cLjwgRGhURyQlBwkGAra4Rk4MCgwZHwkNISIlEi8LKjdCJDdZOhYMCSUzPB/tBPMWJTEcGTMoGhMiMR4hNScV+18OGCpGPAGdNUMpFghIDRMTGRITKU5RVzH9xjdSM2ovJjEeDAEGDAuECRYTDSZDXjgnRz00FAAAAQBU/g4CXgX4ADEAM0AwERAKBwYABgEAIAECASEBAwIDPgAAAAs/BAEBAQ8/AAICA08AAwMWA0AZKDcZGAURKzc+AzURJzUhFQ4DFREXFSMGBgcGHgIzMj4CNxcOAyMiLgI3PgM3I1Q0PB4HkAIFNT4gCp2kRk4MCgwZHwkNISIlEi8LKjdCJDdZOhYMCSUzPB/VUg4YKkY8BEo4UlIOGCpGPPu1N1Izai8mMR4MAQYMC4QJFhMNJkNeOCdHPTQUAAAAAAEAXv4OBOwEEgBhAENAQB8ZBQMBAFBPLSwEBQFBAQMFQgEEAwQ+AAEABQABBWQCAQAADj8ABQUSPwADAwRQAAQEFgRAW1lIRj47GywWBg8rEy4DJzUlDgQUFREUHgIzMj4CNxE0LgInNSUOAhQVERQeAhcVDgMHDgMHBh4CMzI+AjcXDgMjIi4CNzY2NycGBwYGBw4DIyIuAzQ17QEfKzETAW8DBAQBAhEnQTAoUkxAFxwyRSkBlAIDARcoNiAhNS0nExQbEQoDCA0YHQkNISIlEi8LKjhCIzdYORcLCjwmGCAkH00oCSQuNxxJYz4fDQMbMjgbCQRMGRw0PUhfek/+9yoxGQYOFxwOAi4pOSQUBEwZNYCHhjv+9DU2GAYESAcLCgsGIDo2LxQmMh0MAQYMC4QJFhMNJ0dhOjp3MIkWFhMpDgMODgofOExZYjIAAAEAQ/4OBhMF+gBaAEVAQkwaFxYVAQAHAQBHKAIDATcBBAM4AQUEBD4CAQAACz8AAQEDTwYBAwMPPwAEBAVPAAUFFgVAVFI+PDQxKikXLBIHDysTJzUhDgQUFRUUHgIzMj4CNxEnNSEVDgMVER4FFxcVIwYGBwYeAjMyPgI3Fw4DIyIuAjc+AzcuAzUOBSMiLgQ12pcBhwcJBgIBGUBxWUN4bWcycQHiGjcsHAECAQMDBgSS9SsfBQUWIikPDSEiJRIvCyo4QiNBZEEcBgMZJi4YAQIBAhI7TV1nbjcxaWVbRSgFbjhUGjlLZIy6e/1ql2EtFStBLAQWOFRUCw4gPzz9/mKSb1VHQiY3Uj5oJigyHQoBBgwLhAkWEw0nRmE7IEVFQBsQLTM1GBQzNDMnGAgePGeZbQAA//8ARf/tBjgGBgIGALgAAAACAFr/7QSRBm0AQABTAFBATQsBCABHRjcDBwgwAQUHAz4eHRgXBAI8AwECBAEBAAIBVQAICABPAAAAFD8JAQcHBU8GAQUFDwVAQkFLSUFTQlM7OTIxJyYlJBETJwoPKxM0Njc+AzMyFhc1ITUhLgMnJiYnNT4DNxcOAwcVMxUjERQWFx4DFxUhJicmJjUGBiMiLgQBMj4CNxEmJicmDgIVFB4CWjg1JmNtdDc5bSz+4wEdAQcRHxkUKx5CYVFLLCYFBgMCAYWFBgUGGyEmEf65AwICAm2pNUl3W0IqFAGzHE9UUB4ui08yXUgrJDxQAdBzuUU0TjQbEQiRfRYoIx4NCwoGSQ8ZGx8UFTZOR002A338LAgYCAcREA8FUhUZFDUcWE4qR2Brcf70FB8mEgJZGiUCASdZkWlXkmk6AAAA//8AXAAAAo4H0AAmAFwCAAAGAL1BAAAAAAEARP/lAzMFAAAoAEZAQwYBAgQdAQgAHgEJCAM+AAMEA2YACAAJAAgJZAYBAQcBAAgBAFYFAQICBE0ABAQOPwAJCRIJQCQiIxEREREWEREQChUrEyM1MxEjNTc2Njc3MwMhFSERMxUjFRQWMzI+AjcXDgMjIi4CNeKTk55iHSkGTXwHAT/+wfHxNTAbQkI+FyYkX2ZnLUxVKgkBtpEBLmUlCycPwP78h/7SkcYwKQwTFwtgFzQsHCdPeFEAAQAlAAAFIQYNACQAQUA+IiEAAwkAAT4TEAIEPAUBAwIBAgMBZAcBAQgBAAkBAFUGAQICBE0ABAQLPwAJCQ8JQCQjERQxEhIRMREWChUrJT4DNREjNzMRBgYHByMTFyE3AyMnJiYnBgYVETMHIxEXFSEBYjhVOBz/CfYyq4dcXhSEA+CEGl4ueaI0CgfsCePp/V5SChcsSTwBtXgCJQIGBvgBnRMT/mP4BQYCDjIs/kh4/bA3UgAAAAIARQAABmMF+gAzADcATkBLGhcWDgsKBgECMTAoJSQABgcIAj4FAwIBCgYCAAsBAFYMAQsACAcLCFUEAQICCz8JAQcHDwdANDQ0NzQ3NjUzMhcTERcTFxMRFg0VKzc+AzURIzczNSc1IRUOAxUVITUnNSEVDgMVFTMHIxEXFSE1PgM1ESERFxUhATUhFWY0RCYPzhS6rQI9NEcrEgLUrQI+NUYsEswUuMX9tjREJg/9LMT9twRZ/SxSDhgqRjwDDWnWOFJSDhgqRjw81jhSUg4YKkY8PGn8WDdSUg4YKkY8AbX9sDdSA1Hg4AAAAQByBzcCyAe+AAMABrMCAAEkKxMhFSFyAlb9qge+hwACAHIGQAPWB9AACQATAAi1Ew0JAwIkKwE2NjceAxcBJTY2Nx4DFwECF0iDRhUuLisS/pH+C0GBRRUuLisS/psGd1SrWgQTGyMT/tg3VKtaBBMbIxP+2AAAAQBqBnMDIQfQABUABrMFAAEkKwEiLgI3MxQeAjMyPgI1MxYOAgHDUYZbJw9tIjpRMDBSPSNtDyhdiAZzNl5/SiZFMx4eM0UmSn9eNgAAAP//ADYAAAUUB9ACJgBYAAAABwDAAPQAAAABAG3/6wVwBhcAQQBUQFERAQUDNjUCCgkCPgAEBQIFBAJkCAEADAEJCgAJVQAFBQNPAAMDCz8HAQEBAk0GAQICDj8ACgoLTwALCwwLQEFAPDkvLSkoFBEVJRUkERMQDRUrEzM1NDcjNzM+AzMyFhcWFwMjJy4DIyIGBwYGByEHIRUUFhchByEeAzMyPgQ3Fw4DIyIuAicji3gJhB59HW+l2YhXnz5IPzBdMR5PV1sqRYYyOz4NAjEe/eIDBQIZHv4cGVh9oGEIKzxHSUQcInaxekYKgtOdZROiAsUcR0d4csyZWSATFxz+0KQaIxUJMCVGqFZ4JiJCIHhfonZCChIWGRgKTk5SJARjp917AAAA////+v4BAsgGbQAmAOsAAAEGAK6IKAAIsQEBsCiwJyv//wBcAAADpAZtACYAXAIAAAcAqgHcAAAAAQByBkkDQAfQAAYABrMFAQEkKxM3BSUXASNyWAEPAQ9Y/tFwB49BurpB/roAAAAAAgByBbQCawebABMAJwAItR0UCQACJCsBIi4CNTQ+AjMyHgIVFA4CJzI+AjU0LgIjIg4CFRQeAgFvMlxGKSlGXDIzW0UpKkVcNBw1KRgSIzYkIzYkExgnMwW0JEFYNTZaQSQkQVo2NFhBJVwVJzgiGzctHR0tNxshOCcWAAEABf4BAeUEJgAfAAazFwsBJCsBNC4CJzU+AzcXBgYVAxYOBAcnNjc+AzUBBhwvPSBFZVBEJCULAgECECY9V3JIUEg4GC4lFgLBNUMpFghIDRMTGRITjq8X/Sk1TUA8SV5CSD1JH0pUXDEAAAEAcga4AaMHzgAVAAazCQABJCsTIi4CNTQ+AjMyHgIVFA4CBwb+IDQkFBQqPyocMyUWDh0sHhoGuBYlMRwZMygaEyIxHhYsJR4HBgACAFj+DgPRBBIAQQBTAE5ASwoBAQYcAQIBOh0CBQIqAQMFKwEEAwU+AAIBBQECBWQABgABAgYBVQAHBwBPAAAAFD8ABQUSPwADAwRPAAQEFgRAGDQcKD0WGSQIFCsTPgMzMh4CBwYGBwYHIQYeBDM2NzY2NxcGBgcGHgIzMj4CNxcOAyMiLgI3PgM3BgYHIi4CNz4DNzY2NTQuAgcOA1sCSYW8dmCHViYCAQEBAQL9cwIfNUZJSB4sMCpmNSJkbgsIDRgdCQ0hIiUSLwsqN0IkN1g5FwsGHCcvGR45HYC7ezrTY4xdNgwREy5QazwMLS4kAfBuxpZYO22ZXg4lERMVVnpTMRoICAsKHBRWZ7I7JjIdDAEGDAuECRYTDSdHYTofQj86GQwTCEiHw/oBBgYFAgIwGkReMgMWBCJEawAA//8AZ//sBDEGbQImAFEAAAEGAK4uKAAIsQIBsCiwJyv//wBn/+wEMQYUAiYAUQAAAQYAfzEUAAixAgKwFLAnK///AGf/7AQxBhwCJgBRAAABBgCvHxQACLECAbAUsCcr//8AZ//sBDEGdwImAFEAAAAHALMAmQAAAAEAWv4QA7QEEgBgAEZAQzYBAwE3BQIEA1IBBgRRAQUGBD4AAQIDAgEDZAACAgBPAAAAFD8AAwMETwAEBBI/AAYGBU8ABQUWBUApLTktJyguBxMrBTQ+AjcuAzU0PgIzMhYXDgUjIy4DJyYmIyIGBw4FFRQeAjMyPgI3Fw4DIyIiJwcGHgQVFA4CIyImJyYnNxYXFhYzMjYnLgUBdxUdHgpTiWQ3XJvLbkaaRgEGCAkIBQFeDREMCQYxYDQhSiMUIhwVDwclUYJeD0RTVCAhOHNiRQgIEAgOCBUrNi8hM1x+SzZAERQINBscGDsdPjEFAh4qMCgbdg0hHxsIEEx1nmSL2ZRNHBwHMUNKPyk2RioSAgsNCwoNMDpAPTQQUJRyRA0TFwtUIjgpFwEiEx0aGiEqHDhYPyEKBwcKlwwKCA4rGwoXGRseIf//AFj/4wPABm0CJgBVAAAABgBQRgAAAAABAEYAAAUkBm0ATQBIQEUfAQYES0pJOTYxAAcFBgI+GBcQDwQBPAAGBAUEBgVkAgEBAwEABAEAVQAEBBQ/BwEFBQ8FQE1MRUM4NyooHh0cGxEWCA4rNz4DNREjNTM1NC4CJzU+BTcXBgYHMxUjETY3NjY3PgMzMh4EFxMWFxYWFxUhNT4DNRE0LgIjIg4CBxEXFSFMNEEiDJycHC89IS5ENi8xOCUlCAYB6OgiJiBPJwkoNj8gSWM/IQ4BAQIiHxo2EP3gNkMlDiM3RSIvWk5BFrD921IOGCpGPANNhw82OyAOCEkJDg4PFBsTFU+qZ4f/ABQVEi0WAgwMCR01SlhjNf4DDwsKEgNQUg4YKkc9AcUoMhsKEBgeDv1zN1IAAP///9IAAALEBhwCJgCtAAABBwCv/2AAFAAIsQEBsBSwJysAAP//AFb+AQSYBgkAJgCtAAAAJgCyZAAAJwCyAvUAAAAHAOsCowAAAAD////hAAACrwZtAiYArQAAAQcArv9vACgACLEBAbAosCcrAAD//wA3/ecExwZtAiYAWwAAAAcAwQGCAAAAAgBdAAAE7QQjABsAQgArQCg/NSsoHBkYDAsACgABAT4SEQIBPAABAQ4/AgEAAA8AQEFAKikbGgMMKzc+AzURNC4CJzU+AzcXDgMVExcVIQE+BTU0LgInNSEVDgMHDgMHFhceAxcWFhcVISdjNEAjCx0vPCBEaFVHJCUHCQYCAp/97AGuFz5DQDMgFyIqEgIJNUQsHQ0fRUlLJE9NIEZDPxkUPhn+021SDhgqRjwBmjVDKRYISA0TExkSEylOUVcx/ck3UgHxDztLUUg5DA8XEQsEUlIJDxEVDR9bYlwgUksgQj41Eg4bCFJ7AP//AF0AAAUwBm0CJgBeAAAABwB+AgQAAP//AF0AAAUwBhwCJgBeAAABBwCvAPsAFAAIsQEBsBSwJysAAP//AFr/6gRFBm0CJgBfAAAABgBQZQAAAP//AFr/6gRFBm0CJgBfAAAABwB+AXoAAP//AFr/6gRFBm0CJgBfAAABBwCuAIAAKAAIsQIBsCiwJysAAP//AFr/6gRFBggCJgBfAAAABgCvcQAAAP//AFr/6gRFBgACJgBfAAAABwB/AIMAAP//AFsAAAOjBm0CJgBiAAABBgC3NigACLEBAbAosCcr//8AW/3nA6MEJgImAGIAAAAGAMF1AAAA//8AXv/eBOwGbQImAGUAAAAHAFAAlgAA//8AXv/eBOwGbQImAGUAAAAHAH4BqwAA//8AXv/eBOwGbQImAGUAAAEHAK4AsQAoAAixAQGwKLAnKwAA//8AXv/eBOwGFAImAGUAAAEHAH8AtAAUAAixAQKwFLAnKwAA//8ABP3/BMQGbQImAGkAAAAHAH4BgwAA//8ABP3/BMQGFAImAGkAAAEHAH8AjAAUAAixAQKwFLAnKwAA////1gAABiAH0AImADEAAAAHAL4BUAAA////1gAABiAH0AImADEAAAAHAL0BwwAA////1gAABiAH0AImADEAAAAHAMABBgAA////1gAABiAHrAImADEAAAAHAL8A5QAA////1gAABiAH0AImADEAAAAHAZYBCgAAAAP/1gAABiAHmwAwAEQASQBNQEoXBwYFBAUGBC4tKCMgHx4ACAECAj4AAAAFBAAFVwgBBgACAQYCVgcBBAQLPwMBAQEPAUBFRTIxRUlFSTw6MUQyRDAvLCsiIS4JDSsnNjY3AScnNyYmNTQ+AjMyHgIVFAYHHgMSEhMHFxUhNT4DNyYmJyEDFxUhATI+AjU0LgIjIg4CFRQeAgEBBgcDKjNRHQH/VwEhKjMpRlwyM1tFKUs7DiI2TnOeawum/awjOi0iCxE+M/2oisv97AMGHDUpGBIjNiQjNiQTGCczARH+9wwN21IOFhQFBiAyCCBgPDZaQSQkQVo2R3AeIEx7uf7p/nz+9wQ3UlIJEBQbFC2hgv6DL1IGEBUnOCIbNy0dHS03GyE4Jxb8ZwKaFyf9pAABAGT+EAV7Bg0AWABDQEAlAQQCQD8CBQNXAQYAAz4AAwQFBAMFZAAEBAJPAAICCz8ABQUBTwABAQw/AAAABk8ABgYWBkBTUSslFSoeJAcSKwEWFxYWMzI2Jy4FNTQ+AjcmJCYCNTQ+BDMyFhcWFwMjJy4DIyIGBw4DFRQeAjMyPgI3Fw4DBwcGHgQVFA4CIyImJyYnNwKKGxwYOx0+MQUDHSowKBsPFhoLs/72sFcsVoCq0X1qv0pWSzBxLydcZm45V6U/KDsmE0md+K8PWnV9MSdclHRWHhAIFSs2LyEzXH5LNkARFAg0/skMCggOKxsKFxkbHiETCxsaGQoJhdIBCIxlx7WacUAeERQa/ojaHiYXCTArL3J6fTqT+7lpHCowFFI8UTMaBScTHRoaISocOFg/IQoHBwqXAAD//wBu/+4E+AfQAiYANQAAAAcAvgEkAAD//wBu/+4E+AfQAiYANQAAAAcAvQGXAAD//wBu/+4E+AfQAiYANQAAAAcAwADaAAD//wBu/+4E+AfQAiYANQAAAAcBlgDeAAD//wBNAAACcgfQAiYAOQAAAAYAvtsAAAD//wBoAAACmgfQAiYAOQAAAAYAvU0AAAD////iAAAC1AesAiYAOQAAAAcAv/9wAAD//wADAAAC0QfQAiYAOQAAAAYAwJEAAAD//wAHAAACzAfQAiYAOQAAAAYBlpUAAAD//wAN/goC2wfQAiYAOgAAAAYAwJsAAAD//wBRAAAGZQfQAiYAPgAAAAcAvQJMAAD//wBRAAAGZQesAiYAPgAAAAcAvwFuAAD//wBk/+wGRwfQAiYAPwAAAAcAvgHGAAD//wBk/+wGRwfQAiYAPwAAAAcAvQI5AAD//wBk/+wGRwfQAiYAPwAAAAcAwAF8AAD//wBk/+wGRwesAiYAPwAAAAcAvwFbAAD//wBk/+wGRwfQAiYAPwAAAAcBlgGAAAAAAwBk/1oGRwaIACMAMwBEADhANRIBBAAkAQUEAAECBQM+AAMCA2cAAQENPwAEBABPAAAACz8ABQUCTwACAhICQC8iEywSOwYSKyUuAzU0PgQzMhYXNzMHHgMVFA4EIyImJwcjASYjIgYHDgMVFB4CFxcWFjMyNjc+AzU0LgInAj54snY6LFeBq9V+GTEXIYsogL9+PyxXgqvVfiREICiFAZBCS1ebPyg8JxMjSXFNeSlYMVebPyg8JxQnUn1VEyeSvt50Zci2nHJBAwJ/mCSRwuV4Zci1nHFBBQWcBhMPMSg3d3t8Ol+7posuNQwNLiU3eX18O2PErIwsAAD//wBu//kFyAfQAiYAQgAAAAcAvQG3AAD//wBu//kFyAfQAiYAQgAAAAcA6QD6AAD//wBu/ecFyAYOAiYAQgAAAAcAwQI9AAD//wBD/+wGEwfQAiYARQAAAAcAvgF0AAD//wBD/+wGEwfQAiYARQAAAAcAvQHnAAD//wBD/+wGEwfQAiYARQAAAAcAwAEqAAD//wBD/+wGEwfQAiYARQAAAAcBlgEuAAD//wAMAAEFtwfQAiYASQAAAAcAvQHpAAAAAQBR/gYGZQX6AC0AK0AoKykoJhUSEQ8MBwYADAIAAT4hIAICOwEBAAALPwACAg8CQC0sFR0DDis3PgM3NxEuAyc1IQEDAyc1IRUOAxURFA4CByc+AycnARMXFxUhUTRCKBQHBwUWKDwqAT8DmAcJrAHiNUMmDzhZcTk7NU0uEQcB/KIOAsH941IOGCpGPD0DwiEpHBMMUvt1AfMCDDhUVA4YKkY8+yp7o25KIjcqX3ugawwEWPvcAzdSAAABAF3+AQSEBCYARgA3QDQVFAwLBAEARENCAAQCAQI+EwEAPC8uAgI7AAEAAgABAmQAAAAUPwACAg8CQEZFPjwgHgMMKzc+AzUTNC4CJzU+BTcXBzY3NjY3PgMzMh4DFBUDFA4EByc2Nz4DNRE0JicmJiMiDgIHERcVIWM3QCEJAR0vPCAuQzYuMDglKA0iJSBNJwopNTwcSWI8HQsBECU6VXBIUEY3GC0jFgsIFk5KKlJKPhat/d9SERkpRDsBkTVBJRQISAkNDQ8TGhMVoBMVEiwWAwwMCh41SlZhMv2ON1VMSFNkQkg9SR9KVFwxAuIUKAkWFBEZHw79djdSAAD////WAAAGIAe+AiYAMQAAAAcA1AFCAAD////WAAAGIAfQAiYAMQAAAAcA1gEaAAD//wBk/+sFewfQAiYAMwAAAAcAvQJMAAD//wBk/+sFewfQAiYAMwAAAAcAwAGPAAD//wBk/+sFewfQAiYAMwAAAAcA6QGPAAD//wBk/+sFewfOAiYAMwAAAAcA7AJeAAD//wBm/+0GMwfQAiYANAAAAAcA6QF4AAD//wBu/+4E+AfQAiYANQAAAAcA6QDaAAD//wBu/+4E+Ae+AiYANQAAAAcA1AEWAAD//wBu/+4E+AfQAiYANQAAAAcA1gDuAAD//wBu/+4E+AfOAiYANQAAAAcA7AGpAAD//wBk/+wFzAfQAiYANwAAAAcAwAGbAAD//wBk/+wFzAfQAiYANwAAAAcA1gGvAAD//wBk/ecFzAYOAiYANwAAAAcAwQIZAAD//wBk/+wFzAfOAiYANwAAAAcA7AJqAAD//wBmAAAGXAfQAiYAOAAAAAcAwAGIAAD//wA/AAAClQe+AiYAOQAAAAYA1M0AAAD//wAPAAACxgfQAiYAOQAAAAYA1qUAAAD//wBoAAACcgfOAiYAOQAAAAYA7F8AAAD//wBn/ecFvgX6AiYAOwAAAAcAwQISAAD//wBn/ecE/gX6AiYAPAAAAAcAwQGmAAD//wBRAAAGZQfQAiYAPgAAAAcA6QGPAAD//wBR/ecGZQX6AiYAPgAAAAcAwQJhAAD//wBk/+wGRwe+AiYAPwAAAAcA1AG4AAD//wBk/+wGRwfQAiYAPwAAAAcA1gGQAAD//wCf/+gEyAfQAiYAQwAAAAcAvQGkAAD//wCf/+gEyAfQAiYAQwAAAAcAwADnAAD//wCf/+gEyAfQAiYAQwAAAAcA6QDnAAAAAQCf/hAEyAYOAHkAVUBSKwEEAnkBBwFfAQYHXgEFBgQ+AAMEAAQDAGQAAAEEAAFiAAEHBAEHYgAEBAJPAAICCz8ABwcSPwAGBgVPAAUFFgVAdXNlY1pYNzUtLCclKhAIDisTFxceAxceAzMyPgI3PgM1NC4GNTQ+BDMyHgIXAyMnLgMnJiYjIgYHDgMVFB4GFRQOAgcHBh4EFRQOAiMiJicmJzcWFxYWMzI2Jy4FNTQ+AjcjIi4CJ8tyKgYMDQwFFk5gaDIrRjgrEQUMCwhId5eel3dIMFRxg45HOlpUWjkdaygFDRIWDip1SDxjIwsfGxNIdpadlnZIS4KxZg8IFSs2LyEzXH5LNkARFAg0GxwYOx0+MQUDHSowKBsNFRkLFjNxcWwwAfMC5hYbEAkDCxsYEBQeJREJHSMoE05pSjc4RWaRakp2XEIqFAkPEgj+dKcXHxcPBxEaDxQOHCg5KlJtSzQ0P16KZW2ebDwMJRMdGhohKhw4WD8hCgcHCpcMCggOKxsKFxkbHiETCxkZFwoUIi0ZAAD//wCf/ecEyAYOAiYAQwAAAAcAwQGVAAD//wAlAAAFIQfQAiYARAAAAAcA6QDRAAD//wAl/ecFIQYNAiYARAAAAAcAwQGsAAD//wBD/+wGEwesAiYARQAAAAcAvwEJAAD//wBD/+wGEwe+AiYARQAAAAcA1AFmAAD//wBD/+wGEwfQAiYARQAAAAcA1gE+AAD//wBD/+wGEwebAiYARQAAAAcA6gGUAAD//wBD/+wGEwfQAiYARQAAAAcA1QGAAAD//wBk/+wGSgfQAiYAPwAAAAcA1QJ0AAD////2/94I2wfQAiYARwAAAAcAvgLNAAD////2/94I2wfQAiYARwAAAAcAvQNAAAD////2/94I2wfQAiYARwAAAAcAwAKDAAD////2/94I2wfQAiYARwAAAAcBlgKHAAD//wAMAAEFtwfQAiYASQAAAAcAvgF2AAD//wAMAAEFtwfQAiYASQAAAAcAwAEjAAD//wAMAAEFtwfQAiYASQAAAAcBlgEwAAD//wBO/+4FBgfQAiYASgAAAAcAvQGOAAD//wBO/+4FBgfQAiYASgAAAAcA6QDRAAD//wBO/+4FBgfOAiYASgAAAAcA7AGgAAD//wBn/+wEMQWEAiYAUQAAAAYAsGoAAAD//wBn/+wEMQYhAiYAUQAAAAYAsUIAAAD//wBa/+wD0AZtAiYAUwAAAAcAfgFvAAD//wBa/+wDtQZtAiYAUwAAAQYArnUoAAixAQGwKLAnK///AFr/7AO1Bm0CJgBTAAABBgC3dSgACLEBAbAosCcr//8AWv/sA7QGCQImAFMAAAAHALIBQwAA//8AZ//jBjQGbQImAJAAAAAHAH4CtQAA//8AWP/jA8AGbQImAFUAAAEGALdhKAAIsQIBsCiwJyv//wBY/+MDwAWEAiYAVQAAAAcAsACdAAD//wBY/+MDwAYhAiYAVQAAAAYAsXcAAAD//wBY/+MDwAYJAiYAVQAAAAcAsgEvAAD//wBl/gsEkAZtAiYAVwAAAQYArmAoAAixAwGwKLAnK///AGX+CwSQBiECJgBXAAAABgCxdgAAAP//AGX+CwSQBgkCJgBXAAAABwCyAS4AAAAEAGX+CwSQBhwAHgB1AIkAnQBsQGkaEA8ABAUAZWICBwVwTwIDBh8BCAI+AQkIBT4AAAUAZgAEBwYHBAZkCgEGAAMCBgNXAAcHBU8ABQUUPwACAghPAAgIDz8ACQkBTwABARYBQHd2mpiQjoF/dol3iWlnW1lTUUZDOjgkCw0rAT4DMzIWFRQOBAcnNjc2NjU0JicmByYnJiYBHgMXHgMXFhYHBgYHBgYHBhceAzMyPgInLgUnLgMnJj4CNxYWMzI+AjU0JxY2NzY2NTQmJwYGByYmIyIOAhUUFhcGBgcGBgEGLgI1ND4CNzYeAhUUDgIDPgMXHgMXFg4CIyImJjYByQESJDckSVgfLzk0KQg9JR0ZKigXHCMFBAQF/swBFBwhDgsQDRALCAUIGjkaMDQDAwQHLl2Raa73mkMEBDRTbHh9OiBNQzADAg4YHQ0gQyNZnHVEGipULAkLDxJAeUM6oWRZnXVEbVoxUSkJBgHQTWU7FxInQC5NZz8aDydE2AgQFRwTgp1UHAIDMWSSXVV0JzIF7wEOEA5BPCtIOi0gFQQ2DRUROCcaFgIDBx4YFCL6rhIhGxUGBQcGBwMDCggdJhcrTxYUICtPPCNVgZZCN0w0HhEHAwIGER4aDSAfHw4FBzFdiFZHOQIFDA8yIBArERsnCignL1uEVWmOJTFfLQsjASUEKElhNiVLPSgCBCdHYDYlSz8p/gsGDAoGAQQRIDEiRFk0FT5hdgD//wAdAAACjAWYAiYArQAAAQYAsKsUAAixAQGwFLAnK////+8AAAKmBiECJgCtAAAABgCxhQAAAP//AAT9/wTEBm0CJgBpAAAABgBQbgAAAP//AAT9/wTEBm0CJgBpAAABBwCuAIkAKAAIsQEBsCiwJysAAP//AA3/4gbGBm0CJgBnAAAABwBQAWoAAP//AA3/4gbGBm0CJgBnAAAABwB+An8AAP//AA3/4gbGBm0CJgBnAAABBwCuAYUAKAAIsQEBsCiwJysAAP//AA3/4gbGBhQCJgBnAAABBwB/AYgAFAAIsQECsBSwJysAAP//AF7/3gTsBhwCJgBlAAABBwCvAKIAFAAIsQEBsBSwJysAAP//AF7/3gTsBZgCJgBlAAABBwCwAO0AFAAIsQEBsBSwJysAAP//AF7/3gTsBiECJgBlAAAABwCxAMcAAP//AF7/3gTsBncCJgBlAAAABwCzARwAAP//AET95wMzBQACJgBkAAAABwDBAJEAAP//AIz95wOKBBACJgBjAAAABwDBARIAAAABAIz+EAOKBBAAaABMQEkgAQQCaGNPAwYBTgEFBgM+AAMEAAQDAGQAAAEEAAFiAAEGBAEGYgAEBAJPAAICFD8ABgYFTwAFBRYFQFVTSkgqKCIhHhw3EAcOKxMXFxYWFx4DMzI+AjU0LgY1ND4CMzIWFwMjJyYmJyYmIyIOAhUUHgYVFA4CBwcGHgQVFA4CIyImJyYnNxYXFhYzMjYnLgU1ND4CNy4DJ65oJgsSCCFAQkYmFyYaDjFQZ2pnUDEzY5FeU5pSGmIeCxYVKnE4GCgbDzFQZmpmUDEyV3dFEQgVKzYvITNcfks2QBEUCDQbHBg7HT4xBQMdKjAoGxAYHAsmVlZRHwFFAm0eEgUPEgsDEyEpFzRELiAeJjlVQE59WC8PC/7zSx0hCRIXGikxGDFAKx0eJTtXQVF5Uy8JKRMdGhohKhw4WD8hCgcHCpcMCggOKxsKFxkbHiETDBwbGgkDDxYcEAAAAP//AIz/7wORBm0CJgBjAAAABwB+ATAAAP//AIz/7wOKBm0CJgBjAAABBgCuNigACLEBAbAosCcr//8AjP/vA4oGbQImAGMAAAEGALc2KAAIsQEBsCiwJyv//wBbAAADowZtAiYAYgAAAAcAfgEwAAD//wBfAAAD0QZtAiYAagAAAAcAfgE5AAD//wBfAAAD0QZtAiYAagAAAQYAt0AoAAixAQGwKLAnK///AF8AAAPRBgkCJgBqAAAABwCyAQ0AAP//AFr/6gRFBYQCJgBfAAAABwCwALwAAP//AFr/6gRFBiECJgBfAAAABwCxAJQAAP//AF0AAAUwBm0CJgBeAAABBwC3AQoAKAAIsQEBsCiwJysAAP//AF395wUwBCYCJgBeAAAABwDBAcoAAP//AFz95wKBBm0AJgBcAgAABgDBcAAAAP//AIz/7wOKBgkCJgBjAAAABwCyAQQAAP//AJ//6ATIB84CJgBDAAAABwDsAbYAAP//AD/+GgSLBgkCJgBgAAAABwCyAawAAP//AGcAAAUOB84CJgBAAAAABwDsAbAAAP//AFsAAAfHBgkCJgBdAAAABwCyAvkAAP//AAv/9gfvB84CJgA9AAAABwDsAwEAAP//AG4AAAT7B84CJgA2AAAABwDsAZcAAP//AFr/7QSQBm0CJgBUAAAABgCyMQAAAP//AGb/7QYzB84CJgA0AAAABwDsAkcAAP//ABP/7ARvBn4CJgBSBgAABwCyAecAAP//AG7/4gUOB84CJgAyAAAABwDsAawAAP//AF4AAAOZB3cCJgBWAAABBwCyAIEBbgAJsQEBuAFusCcrAP//ACUAAAUhB84CJgBEAAAABwDsAaAAAP//AFr/6gSsBm0CJgBfAAAABwC1ALgAAP//AF7/3gTsBm0CJgBlAAAABwC1AOkAAP//AGz/7gWFBfoAJgA8BQAABwCqA70AAAACAHIGugM3B9AAEwAnAAi1HRQJAAIkKwEiLgI1ND4CMzIeAhUUDgIhIi4CNTQ+AjMyHgIVFA4CAqUcLiESEiQ4JhktIRQWJzb+KxwuIRISJDgmGS0hFBYnNga6FSUxHBk0KBoSIzEeHjUoFxUlMRwZNCgaEiMxHh41KBf//wBo/goFWAX6ACYAOQAAAAcAOgLUAAD//wBn/+wEMQZtAiYAUQAAAAYAUBMAAAD//wBn/+wEMQZtAiYAUQAAAAcAfgEoAAD////GAAACjAZtAiYArQAAAAcAUP9UAAD//wBWAAACyQZtAiYArQAAAAYAfmgAAAD//wBn/+4E/gfQAiYAPAAAAAcAvQCzAAD//wAA/+4HxQfQACYAgTwAAAcAvQOcAAD//wBNAAAFugYpAgYAlwAA//8Arv4WBMMEGwIGAIcAAP//AGgAAAYGBg4CBgCPAAD//wBE/+UDMwZwAiYAZAAAAQYAsnlnAAixAQGwZ7AnKwABAET+EAMzBQAARwBFQEINAQACIAEEADkhBQMGBDgBBQYEPgABAgFmAAQABgAEBmQDAQAAAk0AAgIOPwAGBgVQAAUFFgVAPz00MiMRERYbBxErBTQ+AjcuAzURIzU3NjY3NzMDIRUhERQWMzI+AjcXDgMHBwYeBBUUDgIjIiYnJic3FhcWFjMyNicuBQE7DRUYCzk/HweeYh0pBk18BwE//sE1MBtCQj4XJh1KUVQoDwgVKzYvITNcfks2QBEUCDQbHBg7HT4xBQMdKjAoG3YKGRkYCgctTnBKAlFlJQsnD8D+/If9ezApDBMXC2ATKScfCCMTHRoaISocOFg/IQoHBwqXDAoIDisbChcZGx4hAAEAJf4QBSEGDQBHAEhARRoZAAMFATIBBwUxAQYHAz4PDAICPAMBAQAFAAEFZAQBAAACTQACAgs/CAEFBQ8/AAcHBk8ABgYWBkAeKS8WMRISETYJFSslPgM1EQYGBwcjExchNwMjJyYmJwYGFREXFSEGBwYHBh4EFRQOAiMiJicmJzcWFxYWMzI2Jy4FNTQ+AjchAWI4VTgcMquHXF4UhAPghBpeLnmiNAoH6f7XAwQHCAgVKzYvITNcfks2QBEUCDQbHBg7HT4xBQMdKjAoGxohIQb+8FIKFyxJPARSAgYG+AGdExP+Y/gFBgIOMiz7gDdSCQkREhMdGhohKhw4WD8hCgcHCpcMCggOKxsKFxkbHiETDyQiGwYAAAD//wCh/+IEDwZkACYAEQAAAAcAEQIYAAD//wBeAAAGwgZoACYAVgAAAAcAVgMpAAD//wBeAAAFtQZoACYAVgAAACcArQMpAAAABwCyA40AAP//AF4AAAWoBm0AJgBWAAAABwBcAykAAP//ALwENwHzBmMBRwCiAAUKmkAAwAEACbEAAbgKmrAnKwAAAAABAMgD8gIMBmMACQASQA8AAQABZwAAAA0AQBYRAg4rATczBw4DByMBJw3YBRItNDohcQY/JCQvfJatX///AMgD8gOtBmMAJgGzAAAABwGzAaEAAAAAAB8BegABAAAAAAAAAFkAAAABAAAAAAABAAsAWQABAAAAAAACAAcAZAABAAAAAAADACAAawABAAAAAAAEAAsAWQABAAAAAAAFAA0AiwABAAAAAAAGABIAmAABAAAAAAAHACkAqgABAAAAAAAIAA8A0wABAAAAAAAJAA0A4gABAAAAAAAKAVUA7wABAAAAAAALABICRAABAAAAAAAMABICRAABAAAAAAANAJACVgABAAAAAAAOABoC5gABAAAAAAASAAsAWQADAAEECQAAALIDAAADAAEECQABABYDsgADAAEECQACAA4DyAADAAEECQADAEAD1gADAAEECQAEABYDsgADAAEECQAFABoEFgADAAEECQAGACQEMAADAAEECQAHAFIEVAADAAEECQAIAB4EpgADAAEECQAJABoExAADAAEECQAKAqoE3gADAAEECQALACQHiAADAAEECQAMACQHiAADAAEECQANASAHrAADAAEECQAOADQIzENvcHlyaWdodCAoYykgMjAxMiwgU29ya2luIFR5cGUgQ28gKHd3dy5zb3JraW50eXBlLmNvbSkgd2l0aCBSZXNlcnZlZCBGb250IE5hbWUgJ0RvbmVnYWwnRG9uZWdhbCBPbmVSZWd1bGFyU29ya2luVHlwZUNvLjogRG9uZWdhbCBPbmU6IDIwMTJWZXJzaW9uIDEuMDA0RG9uZWdhbE9uZS1SZWd1bGFyRG9uZWdhbCBpcyBhIHRyYWRlbWFyayBvZiBTb3JraW4gVHlwZSBDby5Tb3JraW4gVHlwZSBDby5HYXJ5IExvbmVyZ2FuRG9uZWdhbCBpcyBhIHRleHQgdHlwZWZhY2UgZGVzaWduZWQgdG8gYmUgaGlnaGx5IGxlZ2libGUgYW5kIGNvbWZvcnRhYmxlIHdoZW4gcmVhZGluZyBzY3JlZW5zLiBEb25lZ2FsJ3MgdXRpbGl0eSBhbmQgcGVyc29uYWxpdHkgY29uc2lzdGVudGx5IHNob3dzIGZyb20gc21hbGwgdGV4dCBzaXplcyB0byBkaXNwbGF5LiBEb25lZ2FsIHVzZXMgdGhlIGN1dCBpbnRlcmlvciBjdXJ2ZSBhc3NvY2lhdGVkIHdpdGggVy5BLiBEd2lnZ2lucy4gVGhpcyBmZWF0dXJlIGlzIG9uZSBvZiBtYW55IHRoYXQgY29udHJpYnV0ZSB0byBEb25lZ2FsJ3MgZGlzdGluY3RpdmUgYW5kIHBsZWFzaW5nIGNoYXJhY3Rlci53d3cuc29ya2ludHlwZS5jb21UaGlzIEZvbnQgU29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFNJTCBPcGVuIEZvbnQgTGljZW5zZSwgVmVyc2lvbiAxLjEuIFRoaXMgbGljZW5zZSBpcyBhdmFpbGFibGUgd2l0aCBhIEZBUSBhdDogaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxodHRwOi8vc2NyaXB0cy5zaWwub3JnL09GTABDAG8AcAB5AHIAaQBnAGgAdAAgACgAYwApACAAMgAwADEAMgAsACAAUwBvAHIAawBpAG4AIABUAHkAcABlACAAQwBvACAAKAB3AHcAdwAuAHMAbwByAGsAaQBuAHQAeQBwAGUALgBjAG8AbQApACAAdwBpAHQAaAAgAFIAZQBzAGUAcgB2AGUAZAAgAEYAbwBuAHQAIABOAGEAbQBlACAAJwBEAG8AbgBlAGcAYQBsACcARABvAG4AZQBnAGEAbAAgAE8AbgBlAFIAZQBnAHUAbABhAHIAUwBvAHIAawBpAG4AVAB5AHAAZQBDAG8ALgA6ACAARABvAG4AZQBnAGEAbAAgAE8AbgBlADoAIAAyADAAMQAyAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwADQARABvAG4AZQBnAGEAbABPAG4AZQAtAFIAZQBnAHUAbABhAHIARABvAG4AZQBnAGEAbAAgAGkAcwAgAGEAIAB0AHIAYQBkAGUAbQBhAHIAawAgAG8AZgAgAFMAbwByAGsAaQBuACAAVAB5AHAAZQAgAEMAbwAuAFMAbwByAGsAaQBuACAAVAB5AHAAZQAgAEMAbwAuAEcAYQByAHkAIABMAG8AbgBlAHIAZwBhAG4ARABvAG4AZQBnAGEAbAAgAGkAcwAgAGEAIAB0AGUAeAB0ACAAdAB5AHAAZQBmAGEAYwBlACAAZABlAHMAaQBnAG4AZQBkACAAdABvACAAYgBlACAAaABpAGcAaABsAHkAIABsAGUAZwBpAGIAbABlACAAYQBuAGQAIABjAG8AbQBmAG8AcgB0AGEAYgBsAGUAIAB3AGgAZQBuACAAcgBlAGEAZABpAG4AZwAgAHMAYwByAGUAZQBuAHMALgAgAEQAbwBuAGUAZwBhAGwAJwBzACAAdQB0AGkAbABpAHQAeQAgAGEAbgBkACAAcABlAHIAcwBvAG4AYQBsAGkAdAB5ACAAYwBvAG4AcwBpAHMAdABlAG4AdABsAHkAIABzAGgAbwB3AHMAIABmAHIAbwBtACAAcwBtAGEAbABsACAAdABlAHgAdAAgAHMAaQB6AGUAcwAgAHQAbwAgAGQAaQBzAHAAbABhAHkALgAgAEQAbwBuAGUAZwBhAGwAIAB1AHMAZQBzACAAdABoAGUAIABjAHUAdAAgAGkAbgB0AGUAcgBpAG8AcgAgAGMAdQByAHYAZQAgAGEAcwBzAG8AYwBpAGEAdABlAGQAIAB3AGkAdABoACAAVwAuAEEALgAgAEQAdwBpAGcAZwBpAG4AcwAuACAAVABoAGkAcwAgAGYAZQBhAHQAdQByAGUAIABpAHMAIABvAG4AZQAgAG8AZgAgAG0AYQBuAHkAIAB0AGgAYQB0ACAAYwBvAG4AdAByAGkAYgB1AHQAZQAgAHQAbwAgAEQAbwBuAGUAZwBhAGwAJwBzACAAZABpAHMAdABpAG4AYwB0AGkAdgBlACAAYQBuAGQAIABwAGwAZQBhAHMAaQBuAGcAIABjAGgAYQByAGEAYwB0AGUAcgAuAHcAdwB3AC4AcwBvAHIAawBpAG4AdAB5AHAAZQAuAGMAbwBtAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAbABpAGMAZQBuAHMAZQBkACAAdQBuAGQAZQByACAAdABoAGUAIABTAEkATAAgAE8AcABlAG4AIABGAG8AbgB0ACAATABpAGMAZQBuAHMAZQAsACAAVgBlAHIAcwBpAG8AbgAgADEALgAxAC4AIABUAGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGkAcwAgAGEAdgBhAGkAbABhAGIAbABlACAAdwBpAHQAaAAgAGEAIABGAEEAUQAgAGEAdAA6ACAAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATAAAAAIAAAAAAAD++wApAAAAAAAAAAAAAAAAAAAAAAAAAAABtQAAAQIAAgADAO0A7gDiAPQA9QDxAPYA8wDyAOgA7wDwAOMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQBwAHIAcwB3AIIAgwCEAIUAhgCHAIgAiQCKAIsAjACNAI4AjwCQAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAowCkAKUApgCnAQMAqQCqAKsArACwALEAsgCzALQAtQC2ALcAuAC5ALwAvgC/AMIBBADEAMYA1wDYANkBBQDbANwA3QDeAN8A4ADhAOkAvQDqAMUAogEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2AGsAbABtAG4AbwBxATcBOAE5AHYBOgE7ATwAeAB6AHkAewB9AHwBPQE+AH8AfgCAAIEA7AC6AK0AyQDHAK4AYgBjAGQAywBlAMgAygDPAMwBPwDNAM4BQAFBAGYA0wDQANEArwBnAJEBQgFDAUQA1gDUANUAaADrAUUBRgFHAUgA/QFJAP8BSgFLAUwBTQFOAU8BUAD4AVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgDkAPsBXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0AuwFuAOYBbwFwAXEA/gFyAQABcwF0AXUBdgF3AXgBeQD5AXoBewF8AX0BfgF/AYABgQGCAYMBhAGFAYYBhwGIAYkA/AGKAYsA5QGMAY0A5wGOAY8BkAGRAZIBkwGUAZUBlgGXAZgBmQGaAZsBnAGdAZ4BnwGgAaEBogGjAaQBpQBqAGkAdQB0AaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4FLm51bGwFRGVsdGEOcGVyaW9kY2VudGVyZWQGbWFjcm9uCWFjdXRlLmNhcAlncmF2ZS5jYXAJdGlsZGUuY2FwDmNpcmN1bWZsZXguY2FwC2NvbW1hYWNjZW50B2FvZ29uZWsHQW9nb25lawdFb2dvbmVrDWNhcm9udmVydGljYWwGZGNhcm9uBmxjYXJvbgZMY2Fyb24GdGNhcm9uB2lvZ29uZWsHSW9nb25lawd1b2dvbmVrB1VvZ29uZWsGRGNyb2F0BmRjcm9hdAZsYWN1dGUEdGJhcgRUYmFyBEhiYXIKbWFjcm9uLmNhcBBodW5nYXJ1bWxhdXQuY2FwCWJyZXZlLmNhcAtoY2lyY3VtZmxleAd1bmkwMDAyB3VuaTAwMDMHdW5pMDAwNAd1bmkwMDA1B3VuaTAwMDYHdW5pMDAwNwd1bmkwMDA4B3VuaTAwMTUHdW5pMDAxNgd1bmkwMDE3B3VuaTAwMTgHdW5pMDAxOQd1bmkwMEFEBEV1cm8LamNpcmN1bWZsZXgEbGRvdAd1bmkwMDAxCWNhcm9uLmNhcAhyaW5nLmNhcAhkb3RsZXNzag1kb3RhY2NlbnQuY2FwB2VvZ29uZWsEaGJhcgZpdGlsZGUCaWoMa2NvbW1hYWNjZW50DGtncmVlbmxhbmRpYwZuYWN1dGUGcmNhcm9uDHJjb21tYWFjY2VudAZJdGlsZGULSmNpcmN1bWZsZXgGTmFjdXRlBlJhY3V0ZQZSY2Fyb24MUmNvbW1hYWNjZW50A0VuZwNlbmcHQW1hY3JvbgZBYnJldmULQ2NpcmN1bWZsZXgKQ2RvdGFjY2VudAZEY2Fyb24GRWNhcm9uB0VtYWNyb24GRWJyZXZlCkVkb3RhY2NlbnQLR2NpcmN1bWZsZXgMR2NvbW1hYWNjZW50Ckdkb3RhY2NlbnQLSGNpcmN1bWZsZXgHSW1hY3JvbgZJYnJldmUKSWRvdGFjY2VudAxLY29tbWFhY2NlbnQMTGNvbW1hYWNjZW50Bk5jYXJvbgxOY29tbWFhY2NlbnQHT21hY3JvbgZPYnJldmUGU2FjdXRlC1NjaXJjdW1mbGV4DFNjb21tYWFjY2VudAZUY2Fyb24MVGNvbW1hYWNjZW50BlV0aWxkZQdVbWFjcm9uBlVicmV2ZQVVcmluZw1VaHVuZ2FydW1sYXV0DU9odW5nYXJ1bWxhdXQGV2dyYXZlBldhY3V0ZQtXY2lyY3VtZmxleAlXZGllcmVzaXMGWWdyYXZlC1ljaXJjdW1mbGV4BlphY3V0ZQpaZG90YWNjZW50B2FtYWNyb24GYWJyZXZlC2NjaXJjdW1mbGV4CmNkb3RhY2NlbnQHYWVhY3V0ZQZlY2Fyb24HZW1hY3JvbgZlYnJldmUKZWRvdGFjY2VudAtnY2lyY3VtZmxleApnZG90YWNjZW50DGdjb21tYWFjY2VudAdpbWFjcm9uBmlicmV2ZQZ5Z3JhdmULeWNpcmN1bWZsZXgGd2dyYXZlBndhY3V0ZQt3Y2lyY3VtZmxleAl3ZGllcmVzaXMGdXRpbGRlB3VtYWNyb24GdWJyZXZlBXVyaW5nDHRjb21tYWFjY2VudAxzY29tbWFhY2NlbnQGc2FjdXRlC3NjaXJjdW1mbGV4BnJhY3V0ZQZ6YWN1dGUKemRvdGFjY2VudAdvbWFjcm9uBm9icmV2ZQZuY2Fyb24MbmNvbW1hYWNjZW50DGxjb21tYWFjY2VudAd1bmkxRTYxB3VuaTFFNjAHdW5pMUU1Nwd1bmkxRTU2B3VuaTFFNDEHdW5pMUU0MAd1bmkxRTFFB3VuaTFFMEIHdW5pMUUwQQd1bmkxRTAzB3VuaTFFMDIHdW5pMUUxRgd1bmkxRTZBDW9odW5nYXJ1bWxhdXQNdWh1bmdhcnVtbGF1dARMZG90DGRpZXJlc2lzLmNhcAJJSgZMYWN1dGUHQUVhY3V0ZQd1bmkwMzk0B3VuaTAzQkMHdW5pMDNBOQJMRgJIVANETEUDREMxA0RDMgNEQzMDREM0AlJTAlVTA0RFTAd1bmkxRTZCCHRjZWRpbGxhCFRjZWRpbGxhCWV4Y2xhbWRibANmX2YDZl9pA2ZfbA1xdW90ZXJldmVyc2VkBm1pbnV0ZQZzZWNvbmQAAAAAAQAB//8ADwABAAAACgByAPIAAkRGTFQADmxhdG4AGgAEAAAAAP//AAEAAAAWAANNT0wgACRST00gADJUUksgAEAAAP//AAQAAQAFAAkADQAA//8ABAACAAYACgAOAAD//wAEAAMABwALAA8AAP//AAQABAAIAAwAEAARYWFsdABoYWFsdABoYWFsdABoYWFsdABoYWFsdABoZnJhYwBuZnJhYwBuZnJhYwBuZnJhYwBub3JkbgB0b3JkbgB0b3JkbgB0b3JkbgB0c3VwcwB6c3VwcwB6c3VwcwB6c3VwcwB6AAAAAQAAAAAAAQADAAAAAQABAAAAAQACAAUA+AAMAIIAoAD4AAYAAAAEAA4AIAAyAEwAAwABAFgAAQA4AAAAAQAAAAQAAwABAEYAAQBQAAAAAQAAAAQAAwACAC4ANAABABQAAAABAAAABAABAAEAUQADAAIAFAAaAAEAJAAAAAEAAAAEAAEAAQAeAAIAAQAgACkAAAABAAEAXwABAAAAAQAIAAIADAADAAkADAALAAEAAwAhACIAIwAEAAAAAQAIAAEARgADAAwAJAA6AAIABgAQAKwABAAfACAAIAAVAAMAHwAgAAIABgAOAAcAAwAfACIACAADAB8AJAABAAQACgADAB8AJAABAAMAIAAhACMAAQAAAAEACAACAAoAAgCNAI4AAQACAFEAXw=="

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "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A24AAALv//4DbgAAAu///gKDABQB7QADAaQATAJrAEwAlgAWAJYAFgCWABcBbAASAYL//gFsADEBxgAhAc3/+gFAAEcCqABVAawAFAHCABABkAApAsUALwYZABQBpABMAu8AFALZABYBzQB3AygAEgNhABIAAAABAAEBAQEBAAwA+Aj/AAgADP/7AAkADf/6AAoAD//6AAsAEP/5AAwAEf/5AA0AE//4AA4AFP/3AA8AFv/3ABAAF//2ABEAGP/2ABIAGv/1ABMAG//1ABQAHf/0ABUAHv/zABYAH//zABcAIf/yABgAIv/yABkAJP/xABoAJf/wABsAJv/wABwAKP/vAB0AKf/vAB4AK//uAB8ALP/uACAALf/tACEAL//sACIAMP/sACMAMv/rACQAM//rACUANP/qACYANv/qACcAN//pACgAOf/oACkAOv/oACoAPP/nACsAPf/nACwAPv/mAC0AQP/mAC4AQf/lAC8AQ//kADAARP/kADEARf/jADIAR//jADMASP/iADQASv/hADUAS//hADYATP/gADcATv/gADgAT//fADkAUf/fADoAUv/eADsAU//dADwAVf/dAD0AVv/cAD4AWP/cAD8AWf/bAEAAWv/bAEEAXP/aAEIAXf/ZAEMAX//ZAEQAYP/YAEUAYf/YAEYAY//XAEcAZP/XAEgAZv/WAEkAZ//VAEoAaP/VAEsAav/UAEwAa//UAE0Abf/TAE4Abv/SAE8AcP/SAFAAcf/RAFEAcv/RAFIAdP/QAFMAdf/QAFQAd//PAFUAeP/OAFYAef/OAFcAe//NAFgAfP/NAFkAfv/MAFoAf//MAFsAgP/LAFwAgv/KAF0Ag//KAF4Ahf/JAF8Ahv/JAGAAh//IAGEAif/IAGIAiv/HAGMAjP/GAGQAjf/GAGUAjv/FAGYAkP/FAGcAkf/EAGgAk//DAGkAlP/DAGoAlf/CAGsAl//CAGwAmP/BAG0Amv/BAG4Am//AAG8AnP+/AHAAnv+/AHEAn/++AHIAof++AHMAov+9AHQApP+9AHUApf+8AHYApv+7AHcAqP+7AHgAqf+6AHkAq/+6AHoArP+5AHsArf+5AHwAr/+4AH0AsP+3AH4Asv+3AH8As/+2AIAAtP+2AIEAtv+1AIIAt/+0AIMAuf+0AIQAuv+zAIUAu/+zAIYAvf+yAIcAvv+yAIgAwP+xAIkAwf+wAIoAwv+wAIsAxP+vAIwAxf+vAI0Ax/+uAI4AyP+uAI8Ayf+tAJAAy/+sAJEAzP+sAJIAzv+rAJMAz/+rAJQA0P+qAJUA0v+qAJYA0/+pAJcA1f+oAJgA1v+oAJkA2P+nAJoA2f+nAJsA2v+mAJwA3P+lAJ0A3f+lAJ4A3/+kAJ8A4P+kAKAA4f+jAKEA4/+jAKIA5P+iAKMA5v+hAKQA5/+hAKUA6P+gAKYA6v+gAKcA6/+fAKgA7f+fAKkA7v+eAKoA7/+dAKsA8f+dAKwA8v+cAK0A9P+cAK4A9f+bAK8A9v+aALAA+P+aALEA+f+ZALIA+/+ZALMA/P+YALQA/f+YALUA//+XALYBAP+WALcBAv+WALgBA/+VALkBBP+VALoBBv+UALsBB/+UALwBCf+TAL0BCv+SAL4BDP+SAL8BDf+RAMABDv+RAMEBEP+QAMIBEf+QAMMBE/+PAMQBFP+OAMUBFf+OAMYBF/+NAMcBGP+NAMgBGv+MAMkBG/+LAMoBHP+LAMsBHv+KAMwBH/+KAM0BIf+JAM4BIv+JAM8BI/+IANABJf+HANEBJv+HANIBKP+GANMBKf+GANQBKv+FANUBLP+FANYBLf+EANcBL/+DANgBMP+DANkBMf+CANoBM/+CANsBNP+BANwBNv+BAN0BN/+AAN4BOP9/AN8BOv9/AOABO/9+AOEBPf9+AOIBPv99AOMBP/98AOQBQf98AOUBQv97AOYBRP97AOcBRf96AOgBR/96AOkBSP95AOoBSf94AOsBS/94AOwBTP93AO0BTv93AO4BT/92AO8BUP92APABUv91APEBU/90APIBVf90APMBVv9zAPQBV/9zAPUBWf9yAPYBWv9yAPcBXP9xAPgBXf9wAPkBXv9wAPoBYP9vAPsBYf9vAPwBY/9uAP0BZP9tAP4BZf9tAP8BZ/9sAAAAAwAAAAMAAALWAAEAAAAAABwAAwABAAAB5gAGAcoECQAgAOAAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADsAPAA9AD4APwBAAEEAQgBDAEQARQBGAEcASABJ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EtEAAwABBAkABAAiEwcAAwABBAkABQAkEykAAwABBAkABgAgE00AAwABBAkACAAgE20AAwABBAkACQAgE40AAwABBAkADAA0E60AAwABBAkADSJwE+EAAwABBAkADgA2NlFDb3B5cmlnaHQgKGMpIDIwMTAsIEtpbWJlcmx5IEdlc3dlaW4gKGtpbWJlcmx5Z2Vzd2Vpbi5jb20pR2xvcmlhIEhhbGxlbHVqYWhSZWd1bGFyMS4wMDQ7cHlycztHbG9yaWFIYWxsZWx1amFoR2xvcmlhIEhhbGxlbHVqYWhWZXJzaW9uIDEuMDA0IDIwMTBHbG9yaWFIYWxsZWx1amFoS2ltYmVybHkgR2Vzd2VpbktpbWJlcmx5IEdlc3dlaW5odHRwOi8va2ltYmVybHlnZXN3ZWluLmNvbUNvcHlyaWdodCAoYykgMjAxMCwgS2ltYmVybHkgR2Vzd2VpbiAoa2ltYmVybHlnZXN3ZWluLmNvbSkNCg0KVGhpcyBGb250IFNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBTSUwgT3BlbiBGb250IExpY2Vuc2UsIFZlcnNpb24gMS4xLiAgVGhpcyBsaWNlbnNlIGlzIGNvcGllZCBiZWxvdywgYW5kIGlzIGFsc28gYXZhaWxhYmxlIHdpdGggYSBGQVEgYXQ6ICBodHRwOi8vc2NyaXB0cy5zaWwub3JnL09GTA0KDQoNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDQpTSUwgT1BFTiBGT05UIExJQ0VOU0UgVmVyc2lvbiAxLjEgLSAyNiBGZWJydWFyeSAyMDA3DQotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQ0KDQpQUkVBTUJMRQ0KVGhlIGdvYWxzIG9mIHRoZSBPcGVuIEZvbnQgTGljZW5zZSAoT0ZMKSBhcmUgdG8gc3RpbXVsYXRlIHdvcmxkd2lkZSBkZXZlbG9wbWVudCBvZiBjb2xsYWJvcmF0aXZlIGZvbnQgcHJvamVjdHMsIHRvIHN1cHBvcnQgdGhlIGZvbnQgY3JlYXRpb24gZWZmb3J0cyBvZiBhY2FkZW1pYyBhbmQgbGluZ3Vpc3RpYyBjb21tdW5pdGllcywgYW5kIHRvIHByb3ZpZGUgYSBmcmVlIGFuZCBvcGVuIGZyYW1ld29yayBpbiB3aGljaCBmb250cyBtYXkgYmUgc2hhcmVkIGFuZCBpbXByb3ZlZCBpbiBwYXJ0bmVyc2hpcA0Kd2l0aCBvdGhlcnMuDQoNClRoZSBPRkwgYWxsb3dzIHRoZSBsaWNlbnNlZCBmb250cyB0byBiZSB1c2VkLCBzdHVkaWVkLCBtb2RpZmllZCBhbmQgcmVkaXN0cmlidXRlZCBmcmVlbHkgYXMgbG9uZyBhcyB0aGV5IGFyZSBub3Qgc29sZCBieSB0aGVtc2VsdmVzLiBUaGUgZm9udHMsIGluY2x1ZGluZyBhbnkgZGVyaXZhdGl2ZSB3b3JrcywgY2FuIGJlIGJ1bmRsZWQsIGVtYmVkZGVkLCByZWRpc3RyaWJ1dGVkIGFuZC9vciBzb2xkIHdpdGggYW55IHNvZnR3YXJlIHByb3ZpZGVkIHRoYXQgYW55IHJlc2VydmVkIG5hbWVzIGFyZSBub3QgdXNlZCBieSBkZXJpdmF0aXZlIHdvcmtzLiBUaGUgZm9udHMgYW5kIGRlcml2YXRpdmVzLCBob3dldmVyLCBjYW5ub3QgYmUgcmVsZWFzZWQgdW5kZXIgYW55IG90aGVyIHR5cGUgb2YgbGljZW5zZS4gVGhlIHJlcXVpcmVtZW50IGZvciBmb250cyB0byByZW1haW4gdW5kZXIgdGhpcyBsaWNlbnNlIGRvZXMgbm90IGFwcGx5IHRvIGFueSBkb2N1bWVudCBjcmVhdGVkIHVzaW5nIHRoZSBmb250cyBvciB0aGVpciBkZXJpdmF0aXZlcy4NCg0KREVGSU5JVElPTlMNCiJGb250IFNvZnR3YXJlIiByZWZlcnMgdG8gdGhlIHNldCBvZiBmaWxlcyByZWxlYXNlZCBieSB0aGUgQ29weXJpZ2h0IEhvbGRlcihzKSB1bmRlciB0aGlzIGxpY2Vuc2UgYW5kIGNsZWFybHkgbWFya2VkIGFzIHN1Y2guIFRoaXMgbWF5IGluY2x1ZGUgc291cmNlIGZpbGVzLCBidWlsZCBzY3JpcHRzIGFuZCBkb2N1bWVudGF0aW9uLg0KDQoiUmVzZXJ2ZWQgRm9udCBOYW1lIiByZWZlcnMgdG8gYW55IG5hbWVzIHNwZWNpZmllZCBhcyBzdWNoIGFmdGVyIHRoZSBjb3B5cmlnaHQgc3RhdGVtZW50KHMpLg0KDQoiT3JpZ2luYWwgVmVyc2lvbiIgcmVmZXJzIHRvIHRoZSBjb2xsZWN0aW9uIG9mIEZvbnQgU29mdHdhcmUgY29tcG9uZW50cyBhcyBkaXN0cmlidXRlZCBieSB0aGUgQ29weXJpZ2h0IEhvbGRlcihzKS4NCg0KIk1vZGlmaWVkIFZlcnNpb24iIHJlZmVycyB0byBhbnkgZGVyaXZhdGl2ZSBtYWRlIGJ5IGFkZGluZyB0bywgZGVsZXRpbmcsIG9yIHN1YnN0aXR1dGluZyAtLSBpbiBwYXJ0IG9yIGluIHdob2xlIC0tIGFueSBvZiB0aGUgY29tcG9uZW50cyBvZiB0aGUgT3JpZ2luYWwgVmVyc2lvbiwgYnkgY2hhbmdpbmcgZm9ybWF0cyBvciBieSBwb3J0aW5nIHRoZSBGb250IFNvZnR3YXJlIHRvIGEgbmV3IGVudmlyb25tZW50Lg0KDQoiQXV0aG9yIiByZWZlcnMgdG8gYW55IGRlc2lnbmVyLCBlbmdpbmVlciwgcHJvZ3JhbW1lciwgdGVjaG5pY2FsIHdyaXRlciBvciBvdGhlciBwZXJzb24gd2hvIGNvbnRyaWJ1dGVkIHRvIHRoZSBGb250IFNvZnR3YXJlLg0KDQpQRVJNSVNTSU9OICYgQ09ORElUSU9OUw0KUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGUgRm9udCBTb2Z0d2FyZSwgdG8gdXNlLCBzdHVkeSwgY29weSwgbWVyZ2UsIGVtYmVkLCBtb2RpZnksIHJlZGlzdHJpYnV0ZSwgYW5kIHNlbGwgbW9kaWZpZWQgYW5kIHVubW9kaWZpZWQgY29waWVzIG9mIHRoZSBGb250IFNvZnR3YXJlLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczoNCg0KMSkgTmVpdGhlciB0aGUgRm9udCBTb2Z0d2FyZSBub3IgYW55IG9mIGl0cyBpbmRpdmlkdWFsIGNvbXBvbmVudHMsIGluIE9yaWdpbmFsIG9yIE1vZGlmaWVkIFZlcnNpb25zLCBtYXkgYmUgc29sZCBieSBpdHNlbGYuDQoNCjIpIE9yaWdpbmFsIG9yIE1vZGlmaWVkIFZlcnNpb25zIG9mIHRoZSBGb250IFNvZnR3YXJlIG1heSBiZSBidW5kbGVkLCByZWRpc3RyaWJ1dGVkIGFuZC9vciBzb2xkIHdpdGggYW55IHNvZnR3YXJlLCBwcm92aWRlZCB0aGF0IGVhY2ggY29weSBjb250YWlucyB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBsaWNlbnNlLiBUaGVzZSBjYW4gYmUgaW5jbHVkZWQgZWl0aGVyIGFzIHN0YW5kLWFsb25lIHRleHQgZmlsZXMsIGh1bWFuLXJlYWRhYmxlIGhlYWRlcnMgb3IgaW4gdGhlIGFwcHJvcHJpYXRlIG1hY2hpbmUtcmVhZGFibGUgbWV0YWRhdGEgZmllbGRzIHdpdGhpbiB0ZXh0IG9yIGJpbmFyeSBmaWxlcyBhcyBsb25nIGFzIHRob3NlIGZpZWxkcyBjYW4gYmUgZWFzaWx5IHZpZXdlZCBieSB0aGUgdXNlci4NCg0KMykgTm8gTW9kaWZpZWQgVmVyc2lvbiBvZiB0aGUgRm9udCBTb2Z0d2FyZSBtYXkgdXNlIHRoZSBSZXNlcnZlZCBGb250IE5hbWUocykgdW5sZXNzIGV4cGxpY2l0IHdyaXR0ZW4gcGVybWlzc2lvbiBpcyBncmFudGVkIGJ5IHRoZSBjb3JyZXNwb25kaW5nIENvcHlyaWdodCBIb2xkZXIuIFRoaXMgcmVzdHJpY3Rpb24gb25seSBhcHBsaWVzIHRvIHRoZSBwcmltYXJ5IGZvbnQgbmFtZSBhcw0KcHJlc2VudGVkIHRvIHRoZSB1c2Vycy4NCg0KNCkgVGhlIG5hbWUocykgb2YgdGhlIENvcHlyaWdodCBIb2xkZXIocykgb3IgdGhlIEF1dGhvcihzKSBvZiB0aGUgRm9udCBTb2Z0d2FyZSBzaGFsbCBub3QgYmUgdXNlZCB0byBwcm9tb3RlLCBlbmRvcnNlIG9yIGFkdmVydGlzZSBhbnkgTW9kaWZpZWQgVmVyc2lvbiwgZXhjZXB0IHRvIGFja25vd2xlZGdlIHRoZSBjb250cmlidXRpb24ocykgb2YgdGhlIENvcHlyaWdodCBIb2xkZXIocykgYW5kIHRoZSBBdXRob3Iocykgb3Igd2l0aCB0aGVpciBleHBsaWNpdCB3cml0dGVuDQpwZXJtaXNzaW9uLg0KDQo1KSBUaGUgRm9udCBTb2Z0d2FyZSwgbW9kaWZpZWQgb3IgdW5tb2RpZmllZCwgaW4gcGFydCBvciBpbiB3aG9sZSwgbXVzdCBiZSBkaXN0cmlidXRlZCBlbnRpcmVseSB1bmRlciB0aGlzIGxpY2Vuc2UsIGFuZCBtdXN0IG5vdCBiZSBkaXN0cmlidXRlZCB1bmRlciBhbnkgb3RoZXIgbGljZW5zZS4gVGhlIHJlcXVpcmVtZW50IGZvciBmb250cyB0byByZW1haW4gdW5kZXIgdGhpcyBsaWNlbnNlIGRvZXMgbm90IGFwcGx5IHRvIGFueSBkb2N1bWVudCBjcmVhdGVkIHVzaW5nIHRoZSBGb250IFNvZnR3YXJlLg0KDQpURVJNSU5BVElPTg0KVGhpcyBsaWNlbnNlIGJlY29tZXMgbnVsbCBhbmQgdm9pZCBpZiBhbnkgb2YgdGhlIGFib3ZlIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQuDQoNCkRJU0NMQUlNRVINClRIRSBGT05UIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBBTlkgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQgT0YgQ09QWVJJR0hULCBQQVRFTlQsIFRSQURFTUFSSywgT1IgT1RIRVIgUklHSFQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRQ0KQ09QWVJJR0hUIEhPTERFUiBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIElOQ0xVRElORyBBTlkgR0VORVJBTCwgU1BFQ0lBTCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBUSEUgVVNFIE9SIElOQUJJTElUWSBUTyBVU0UgVEhFIEZPTlQgU09GVFdBUkUgT1IgRlJPTSBPVEhFUiBERUFMSU5HUyBJTiBUSEUgRk9OVCBTT0ZUV0FSRS4gaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAQwBvAHAAeQByAGkAZwBoAHQAIAAoAGMAKQAgADIAMAAxADAALAAgAEsAaQBtAGIAZQByAGwAeQAgAEcAZQBzAHcAZQBpAG4AIAAoAGsAaQBtAGIAZQByAGwAeQBnAGUAcwB3AGUAaQBuAC4AYwBvAG0AKQBHAGwAbwByAGkAYQAgAEgAYQBsAGwAZQBsAHUAagBhAGgAUgBlAGcAdQBsAGEAcgAxAC4AMAAwADQAOwBwAHkAcgBzADsARwBsAG8AcgBpAGEASABhAGwAbABlAGwAdQBqAGEAaABHAGwAbwByAGkAYQAgAEgAYQBsAGwAZQBsAHUAagBhAGgAVgBlAHIAcwBpAG8AbgAgADEALgAwADAANAAgADIAMAAxADAARwBsAG8AcgBpAGEASABhAGwAbABlAGwAdQBqAGEAaABLAGkAbQBiAGUAcgBsAHkAIABHAGUAcwB3AGUAaQBuAEsAaQBtAGIAZQByAGwAeQAgAEcAZQBzAHcAZQBpAG4AaAB0AHQAcAA6AC8ALwBrAGkAbQBiAGUAcgBsAHkAZwBlAHMAdwBlAGkAbgAuAGMAbwBtAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMQAwACwAIABLAGkAbQBiAGUAcgBsAHkAIABHAGUAcwB3AGUAaQBuACAAKABrAGkAbQBiAGUAcgBsAHkAZwBlAHMAdwBlAGkAbgAuAGMAbwBtACkADQAKAA0ACgBUAGgAaQBzACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAGkAcwAgAGwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALAAgAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAuACAAIABUAGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGkAcwAgAGMAbwBwAGkAZQBkACAAYgBlAGwAbwB3ACwAIABhAG4AZAAgAGkAcwAgAGEAbABzAG8AIABhAHYAYQBpAGwAYQBiAGwAZQAgAHcAaQB0AGgAIABhACAARgBBAFEAIABhAHQAOgAgACAAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAA0ACgANAAoADQAKAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQANAAoAUwBJAEwAIABPAFAARQBOACAARgBPAE4AVAAgAEwASQBDAEUATgBTAEUAIABWAGUAcgBzAGkAbwBuACAAMQAuADEAIAAtACAAMgA2ACAARgBlAGIAcgB1AGEAcgB5ACAAMgAwADAANwANAAoALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAA0ACgANAAoAUABSAEUAQQBNAEIATABFAA0ACgBUAGgAZQAgAGcAbwBhAGwAcwAgAG8AZgAgAHQAaABlACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACAAKABPAEYATAApACAAYQByAGUAIAB0AG8AIABzAHQAaQBtAHUAbABhAHQAZQAgAHcAbwByAGwAZAB3AGkAZABlACAAZABlAHYAZQBsAG8AcABtAGUAbgB0ACAAbwBmACAAYwBvAGwAbABhAGIAbwByAGEAdABpAHYAZQAgAGYAbwBuAHQAIABwAHIAbwBqAGUAYwB0AHMALAAgAHQAbwAgAHMAdQBwAHAAbwByAHQAIAB0AGgAZQAgAGYAbwBuAHQAIABjAHIAZQBhAHQAaQBvAG4AIABlAGYAZgBvAHIAdABzACAAbwBmACAAYQBjAGEAZABlAG0AaQBjACAAYQBuAGQAIABsAGkAbgBnAHUAaQBzAHQAaQBjACAAYwBvAG0AbQB1AG4AaQB0AGkAZQBzACwAIABhAG4AZAAgAHQAbwAgAHAAcgBvAHYAaQBkAGUAIABhACAAZgByAGUAZQAgAGEAbgBkACAAbwBwAGUAbgAgAGYAcgBhAG0AZQB3AG8AcgBrACAAaQBuACAAdwBoAGkAYwBoACAAZgBvAG4AdABzACAAbQBhAHkAIABiAGUAIABzAGgAYQByAGUAZAAgAGEAbgBkACAAaQBtAHAAcgBvAHYAZQBkACAAaQBuACAAcABhAHIAdABuAGUAcgBzAGgAaQBwAA0ACgB3AGkAdABoACAAbwB0AGgAZQByAHMALgANAAoADQAKAFQAaABlACAATwBGAEwAIABhAGwAbABvAHcAcwAgAHQAaABlACAAbABpAGMAZQBuAHMAZQBkACAAZgBvAG4AdABzACAAdABvACAAYgBlACAAdQBzAGUAZAAsACAAcwB0AHUAZABpAGUAZAAsACAAbQBvAGQAaQBmAGkAZQBkACAAYQBuAGQAIAByAGUAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAZgByAGUAZQBsAHkAIABhAHMAIABsAG8AbgBnACAAYQBzACAAdABoAGUAeQAgAGEAcgBlACAAbgBvAHQAIABzAG8AbABkACAAYgB5ACAAdABoAGUAbQBzAGUAbAB2AGUAcwAuACAAVABoAGUAIABmAG8AbgB0AHMALAAgAGkAbgBjAGwAdQBkAGkAbgBnACAAYQBuAHkAIABkAGUAcgBpAHYAYQB0AGkAdgBlACAAdwBvAHIAawBzACwAIABjAGEAbgAgAGIAZQAgAGIAdQBuAGQAbABlAGQALAAgAGUAbQBiAGUAZABkAGUAZAAsACAAcgBlAGQAaQBzAHQAcgBpAGIAdQB0AGUAZAAgAGEAbgBkAC8AbwByACAAcwBvAGwAZAAgAHcAaQB0AGgAIABhAG4AeQAgAHMAbwBmAHQAdwBhAHIAZQAgAHAAcgBvAHYAaQBkAGUAZAAgAHQAaABhAHQAIABhAG4AeQAgAHIAZQBzAGUAcgB2AGUAZAAgAG4AYQBtAGUAcwAgAGEAcgBlACAAbgBvAHQAIAB1AHMAZQBkACAAYgB5ACAAZABlAHIAaQB2AGEAdABpAHYAZQAgAHcAbwByAGsAcwAuACAAVABoAGUAIABmAG8AbgB0AHMAIABhAG4AZAAgAGQAZQByAGkAdgBhAHQAaQB2AGUAcwAsACAAaABvAHcAZQB2AGUAcgAsACAAYwBhAG4AbgBvAHQAIABiAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIABhAG4AeQAgAG8AdABoAGUAcgAgAHQAeQBwAGUAIABvAGYAIABsAGkAYwBlAG4AcwBlAC4AIABUAGgAZQAgAHIAZQBxAHUAaQByAGUAbQBlAG4AdAAgAGYAbwByACAAZgBvAG4AdABzACAAdABvACAAcgBlAG0AYQBpAG4AIAB1AG4AZABlAHIAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGQAbwBlAHMAIABuAG8AdAAgAGEAcABwAGwAeQAgAHQAbwAgAGEAbgB5ACAAZABvAGMAdQBtAGUAbgB0ACAAYwByAGUAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAHQAaABlACAAZgBvAG4AdABzACAAbwByACAAdABoAGUAaQByACAAZABlAHIAaQB2AGEAdABpAHYAZQBzAC4ADQAKAA0ACgBEAEUARgBJAE4ASQBUAEkATwBOAFMADQAKACIARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAiACAAcgBlAGYAZQByAHMAIAB0AG8AIAB0AGgAZQAgAHMAZQB0ACAAbwBmACAAZgBpAGwAZQBzACAAcgBlAGwAZQBhAHMAZQBkACAAYgB5ACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByACgAcwApACAAdQBuAGQAZQByACAAdABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABhAG4AZAAgAGMAbABlAGEAcgBsAHkAIABtAGEAcgBrAGUAZAAgAGEAcwAgAHMAdQBjAGgALgAgAFQAaABpAHMAIABtAGEAeQAgAGkAbgBjAGwAdQBkAGUAIABzAG8AdQByAGMAZQAgAGYAaQBsAGUAcwAsACAAYgB1AGkAbABkACAAcwBjAHIAaQBwAHQAcwAgAGEAbgBkACAAZABvAGMAdQBtAGUAbgB0AGEAdABpAG8AbgAuAA0ACgANAAoAIgBSAGUAcwBlAHIAdgBlAGQAIABGAG8AbgB0ACAATgBhAG0AZQAiACAAcgBlAGYAZQByAHMAIAB0AG8AIABhAG4AeQAgAG4AYQBtAGUAcwAgAHMAcABlAGMAaQBmAGkAZQBkACAAYQBzACAAcwB1AGMAaAAgAGEAZgB0AGUAcgAgAHQAaABlACAAYwBvAHAAeQByAGkAZwBoAHQAIABzAHQAYQB0AGUAbQBlAG4AdAAoAHMAKQAuAA0ACgANAAoAIgBPAHIAaQBnAGkAbgBhAGwAIABWAGUAcgBzAGkAbwBuACIAIAByAGUAZgBlAHIAcwAgAHQAbwAgAHQAaABlACAAYwBvAGwAbABlAGMAdABpAG8AbgAgAG8AZgAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABjAG8AbQBwAG8AbgBlAG4AdABzACAAYQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAYgB5ACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByACgAcwApAC4ADQAKAA0ACgAiAE0AbwBkAGkAZgBpAGUAZAAgAFYAZQByAHMAaQBvAG4AIgAgAHIAZQBmAGUAcgBzACAAdABvACAAYQBuAHkAIABkAGUAcgBpAHYAYQB0AGkAdgBlACAAbQBhAGQAZQAgAGIAeQAgAGEAZABkAGkAbgBnACAAdABvACwAIABkAGUAbABlAHQAaQBuAGcALAAgAG8AcgAgAHMAdQBiAHMAdABpAHQAdQB0AGkAbgBnACAALQAtACAAaQBuACAAcABhAHIAdAAgAG8AcgAgAGkAbgAgAHcAaABvAGwAZQAgAC0ALQAgAGEAbgB5ACAAbwBmACAAdABoAGUAIABjAG8AbQBwAG8AbgBlAG4AdABzACAAbwBmACAAdABoAGUAIABPAHIAaQBnAGkAbgBhAGwAIABWAGUAcgBzAGkAbwBuACwAIABiAHkAIABjAGgAYQBuAGcAaQBuAGcAIABmAG8AcgBtAGEAdABzACAAbwByACAAYgB5ACAAcABvAHIAdABpAG4AZwAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAHQAbwAgAGEAIABuAGUAdwAgAGUAbgB2AGkAcgBvAG4AbQBlAG4AdAAuAA0ACgANAAoAIgBBAHUAdABoAG8AcgAiACAAcgBlAGYAZQByAHMAIAB0AG8AIABhAG4AeQAgAGQAZQBzAGkAZwBuAGUAcgAsACAAZQBuAGcAaQBuAGUAZQByACwAIABwAHIAbwBnAHIAYQBtAG0AZQByACwAIAB0AGUAYwBoAG4AaQBjAGEAbAAgAHcAcgBpAHQAZQByACAAbwByACAAbwB0AGgAZQByACAAcABlAHIAcwBvAG4AIAB3AGgAbwAgAGMAbwBuAHQAcgBpAGIAdQB0AGUAZAAgAHQAbwAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAuAA0ACgANAAoAUABFAFIATQBJAFMAUwBJAE8ATgAgACYAIABDAE8ATgBEAEkAVABJAE8ATgBTAA0ACgBQAGUAcgBtAGkAcwBzAGkAbwBuACAAaQBzACAAaABlAHIAZQBiAHkAIABnAHIAYQBuAHQAZQBkACwAIABmAHIAZQBlACAAbwBmACAAYwBoAGEAcgBnAGUALAAgAHQAbwAgAGEAbgB5ACAAcABlAHIAcwBvAG4AIABvAGIAdABhAGkAbgBpAG4AZwAgAGEAIABjAG8AcAB5ACAAbwBmACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACwAIAB0AG8AIAB1AHMAZQAsACAAcwB0AHUAZAB5ACwAIABjAG8AcAB5ACwAIABtAGUAcgBnAGUALAAgAGUAbQBiAGUAZAAsACAAbQBvAGQAaQBmAHkALAAgAHIAZQBkAGkAcwB0AHIAaQBiAHUAdABlACwAIABhAG4AZAAgAHMAZQBsAGwAIABtAG8AZABpAGYAaQBlAGQAIABhAG4AZAAgAHUAbgBtAG8AZABpAGYAaQBlAGQAIABjAG8AcABpAGUAcwAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAsACAAcwB1AGIAagBlAGMAdAAgAHQAbwAgAHQAaABlACAAZgBvAGwAbABvAHcAaQBuAGcAIABjAG8AbgBkAGkAdABpAG8AbgBzADoADQAKAA0ACgAxACkAIABOAGUAaQB0AGgAZQByACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAbgBvAHIAIABhAG4AeQAgAG8AZgAgAGkAdABzACAAaQBuAGQAaQB2AGkAZAB1AGEAbAAgAGMAbwBtAHAAbwBuAGUAbgB0AHMALAAgAGkAbgAgAE8AcgBpAGcAaQBuAGEAbAAgAG8AcgAgAE0AbwBkAGkAZgBpAGUAZAAgAFYAZQByAHMAaQBvAG4AcwAsACAAbQBhAHkAIABiAGUAIABzAG8AbABkACAAYgB5ACAAaQB0AHMAZQBsAGYALgANAAoADQAKADIAKQAgAE8AcgBpAGcAaQBuAGEAbAAgAG8AcgAgAE0AbwBkAGkAZgBpAGUAZAAgAFYAZQByAHMAaQBvAG4AcwAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAG0AYQB5ACAAYgBlACAAYgB1AG4AZABsAGUAZAAsACAAcgBlAGQAaQBzAHQAcgBpAGIAdQB0AGUAZAAgAGEAbgBkAC8AbwByACAAcwBvAGwAZAAgAHcAaQB0AGgAIABhAG4AeQAgAHMAbwBmAHQAdwBhAHIAZQAsACAAcAByAG8AdgBpAGQAZQBkACAAdABoAGEAdAAgAGUAYQBjAGgAIABjAG8AcAB5ACAAYwBvAG4AdABhAGkAbgBzACAAdABoAGUAIABhAGIAbwB2AGUAIABjAG8AcAB5AHIAaQBnAGgAdAAgAG4AbwB0AGkAYwBlACAAYQBuAGQAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAuACAAVABoAGUAcwBlACAAYwBhAG4AIABiAGUAIABpAG4AYwBsAHUAZABlAGQAIABlAGkAdABoAGUAcgAgAGEAcwAgAHMAdABhAG4AZAAtAGEAbABvAG4AZQAgAHQAZQB4AHQAIABmAGkAbABlAHMALAAgAGgAdQBtAGEAbgAtAHIAZQBhAGQAYQBiAGwAZQAgAGgAZQBhAGQAZQByAHMAIABvAHIAIABpAG4AIAB0AGgAZQAgAGEAcABwAHIAbwBwAHIAaQBhAHQAZQAgAG0AYQBjAGgAaQBuAGUALQByAGUAYQBkAGEAYgBsAGUAIABtAGUAdABhAGQAYQB0AGEAIABmAGkAZQBsAGQAcwAgAHcAaQB0AGgAaQBuACAAdABlAHgAdAAgAG8AcgAgAGIAaQBuAGEAcgB5ACAAZgBpAGwAZQBzACAAYQBzACAAbABvAG4AZwAgAGEAcwAgAHQAaABvAHMAZQAgAGYAaQBlAGwAZABzACAAYwBhAG4AIABiAGUAIABlAGEAcwBpAGwAeQAgAHYAaQBlAHcAZQBkACAAYgB5ACAAdABoAGUAIAB1AHMAZQByAC4ADQAKAA0ACgAzACkAIABOAG8AIABNAG8AZABpAGYAaQBlAGQAIABWAGUAcgBzAGkAbwBuACAAbwBmACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAbQBhAHkAIAB1AHMAZQAgAHQAaABlACAAUgBlAHMAZQByAHYAZQBkACAARgBvAG4AdAAgAE4AYQBtAGUAKABzACkAIAB1AG4AbABlAHMAcwAgAGUAeABwAGwAaQBjAGkAdAAgAHcAcgBpAHQAdABlAG4AIABwAGUAcgBtAGkAcwBzAGkAbwBuACAAaQBzACAAZwByAGEAbgB0AGUAZAAgAGIAeQAgAHQAaABlACAAYwBvAHIAcgBlAHMAcABvAG4AZABpAG4AZwAgAEMAbwBwAHkAcgBpAGcAaAB0ACAASABvAGwAZABlAHIALgAgAFQAaABpAHMAIAByAGUAcwB0AHIAaQBjAHQAaQBvAG4AIABvAG4AbAB5ACAAYQBwAHAAbABpAGUAcwAgAHQAbwAgAHQAaABlACAAcAByAGkAbQBhAHIAeQAgAGYAbwBuAHQAIABuAGEAbQBlACAAYQBzAA0ACgBwAHIAZQBzAGUAbgB0AGUAZAAgAHQAbwAgAHQAaABlACAAdQBzAGUAcgBzAC4ADQAKAA0ACgA0ACkAIABUAGgAZQAgAG4AYQBtAGUAKABzACkAIABvAGYAIAB0AGgAZQAgAEMAbwBwAHkAcgBpAGcAaAB0ACAASABvAGwAZABlAHIAKABzACkAIABvAHIAIAB0AGgAZQAgAEEAdQB0AGgAbwByACgAcwApACAAbwBmACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAcwBoAGEAbABsACAAbgBvAHQAIABiAGUAIAB1AHMAZQBkACAAdABvACAAcAByAG8AbQBvAHQAZQAsACAAZQBuAGQAbwByAHMAZQAgAG8AcgAgAGEAZAB2AGUAcgB0AGkAcwBlACAAYQBuAHkAIABNAG8AZABpAGYAaQBlAGQAIABWAGUAcgBzAGkAbwBuACwAIABlAHgAYwBlAHAAdAAgAHQAbwAgAGEAYwBrAG4AbwB3AGwAZQBkAGcAZQAgAHQAaABlACAAYwBvAG4AdAByAGkAYgB1AHQAaQBvAG4AKABzACkAIABvAGYAIAB0AGgAZQAgAEMAbwBwAHkAcgBpAGcAaAB0ACAASABvAGwAZABlAHIAKABzACkAIABhAG4AZAAgAHQAaABlACAAQQB1AHQAaABvAHIAKABzACkAIABvAHIAIAB3AGkAdABoACAAdABoAGUAaQByACAAZQB4AHAAbABpAGMAaQB0ACAAdwByAGkAdAB0AGUAbgANAAoAcABlAHIAbQBpAHMAcwBpAG8AbgAuAA0ACgANAAoANQApACAAVABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACwAIABtAG8AZABpAGYAaQBlAGQAIABvAHIAIAB1AG4AbQBvAGQAaQBmAGkAZQBkACwAIABpAG4AIABwAGEAcgB0ACAAbwByACAAaQBuACAAdwBoAG8AbABlACwAIABtAHUAcwB0ACAAYgBlACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAZQBuAHQAaQByAGUAbAB5ACAAdQBuAGQAZQByACAAdABoAGkAcwAgAGwAaQBjAGUAbgBzAGUALAAgAGEAbgBkACAAbQB1AHMAdAAgAG4AbwB0ACAAYgBlACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAdQBuAGQAZQByACAAYQBuAHkAIABvAHQAaABlAHIAIABsAGkAYwBlAG4AcwBlAC4AIABUAGgAZQAgAHIAZQBxAHUAaQByAGUAbQBlAG4AdAAgAGYAbwByACAAZgBvAG4AdABzACAAdABvACAAcgBlAG0AYQBpAG4AIAB1AG4AZABlAHIAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGQAbwBlAHMAIABuAG8AdAAgAGEAcABwAGwAeQAgAHQAbwAgAGEAbgB5ACAAZABvAGMAdQBtAGUAbgB0ACAAYwByAGUAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAuAA0ACgANAAoAVABFAFIATQBJAE4AQQBUAEkATwBOAA0ACgBUAGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGIAZQBjAG8AbQBlAHMAIABuAHUAbABsACAAYQBuAGQAIAB2AG8AaQBkACAAaQBmACAAYQBuAHkAIABvAGYAIAB0AGgAZQAgAGEAYgBvAHYAZQAgAGMAbwBuAGQAaQB0AGkAbwBuAHMAIABhAHIAZQAgAG4AbwB0ACAAbQBlAHQALgANAAoADQAKAEQASQBTAEMATABBAEkATQBFAFIADQAKAFQASABFACAARgBPAE4AVAAgAFMATwBGAFQAVwBBAFIARQAgAEkAUwAgAFAAUgBPAFYASQBEAEUARAAgACIAQQBTACAASQBTACIALAAgAFcASQBUAEgATwBVAFQAIABXAEEAUgBSAEEATgBUAFkAIABPAEYAIABBAE4AWQAgAEsASQBOAEQALAAgAEUAWABQAFIARQBTAFMAIABPAFIAIABJAE0AUABMAEkARQBEACwAIABJAE4AQwBMAFUARABJAE4ARwAgAEIAVQBUACAATgBPAFQAIABMAEkATQBJAFQARQBEACAAVABPACAAQQBOAFkAIABXAEEAUgBSAEEATgBUAEkARQBTACAATwBGACAATQBFAFIAQwBIAEEATgBUAEEAQgBJAEwASQBUAFkALAAgAEYASQBUAE4ARQBTAFMAIABGAE8AUgAgAEEAIABQAEEAUgBUAEkAQwBVAEwAQQBSACAAUABVAFIAUABPAFMARQAgAEEATgBEACAATgBPAE4ASQBOAEYAUgBJAE4ARwBFAE0ARQBOAFQAIABPAEYAIABDAE8AUABZAFIASQBHAEgAVAAsACAAUABBAFQARQBOAFQALAAgAFQAUgBBAEQARQBNAEEAUgBLACwAIABPAFIAIABPAFQASABFAFIAIABSAEkARwBIAFQALgAgAEkATgAgAE4ATwAgAEUAVgBFAE4AVAAgAFMASABBAEwATAAgAFQASABFAA0ACgBDAE8AUABZAFIASQBHAEgAVAAgAEgATwBMAEQARQBSACAAQgBFACAATABJAEEAQgBMAEUAIABGAE8AUgAgAEEATgBZACAAQwBMAEEASQBNACwAIABEAEEATQBBAEcARQBTACAATwBSACAATwBUAEgARQBSACAATABJAEEAQgBJAEwASQBUAFkALAAgAEkATgBDAEwAVQBEAEkATgBHACAAQQBOAFkAIABHAEUATgBFAFIAQQBMACwAIABTAFAARQBDAEkAQQBMACwAIABJAE4ARABJAFIARQBDAFQALAAgAEkATgBDAEkARABFAE4AVABBAEwALAAgAE8AUgAgAEMATwBOAFMARQBRAFUARQBOAFQASQBBAEwAIABEAEEATQBBAEcARQBTACwAIABXAEgARQBUAEgARQBSACAASQBOACAAQQBOACAAQQBDAFQASQBPAE4AIABPAEYAIABDAE8ATgBUAFIAQQBDAFQALAAgAFQATwBSAFQAIABPAFIAIABPAFQASABFAFIAVwBJAFMARQAsACAAQQBSAEkAUwBJAE4ARwAgAEYAUgBPAE0ALAAgAE8AVQBUACAATwBGACAAVABIAEUAIABVAFMARQAgAE8AUgAgAEkATgBBAEIASQBMAEkAVABZACAAVABPACAAVQBTAEUAIABUAEgARQAgAEYATwBOAFQAIABTAE8ARgBUAFcAQQBSAEUAIABPAFIAIABGAFIATwBNACAATwBUAEgARQBSACAARABFAEEATABJAE4ARwBTACAASQBOACAAVABIAEUAIABGAE8ATgBUACAAUwBPAEYAVABXAEEAUgBFAC4AIABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAAAgAAAAAAAP+zADMAAAAAAAAAAAAAAAAAAAAAAAAAAAFpAAABAgACAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQCsAKMAhACFAL0AlgDoAIYAjgCLAJ0AqQCkAQMAigEEAIMAkwDyAPMAjQCXAIgBBQDeAPEAngCqAPUA9AD2AKIArQDJAMcArgBiAGMAkABkAMsAZQDIAMoAzwDMAM0AzgDpAGYA0wDQANEArwBnAPAAkQDWANQA1QBoAOsA7QCJAGoAaQBrAG0AbABuAKAAbwBxAHAAcgBzAHUAdAB2AHcA6gB4AHoAeQB7AH0AfAC4AKEAfwB+AIAAgQDsAO4AugEGAQcBCAEJAQoBCwD9AP4BDAENAQ4BDwD/AQABEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwD4APkBIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwDXATABMQEyATMBNAE1ATYBNwE4ATkBOgE7AOIA4wE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIALAAsQFJAUoBSwFMAU0BTgFPAVABUQFSAPsA/ADkAOUBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAC7AWkBagFrAWwA5gDnAKYBbQFuAW8BcAFxAXIA2ADhANsA3ADdAOAA2QDfAXMBdAF1AXYBdwF4AXkBegCyALMAtgC3AMQAtAC1AMUAggDCAIcAqwC+AL8AvAF7AIwA7wF8AX0BfgDAAMEFLm51bGwHaHlwaGVuXwZtYWNyb24OcGVyaW9kY2VudGVyZWQHQW1hY3JvbgdhbWFjcm9uBkFicmV2ZQZhYnJldmUHQW9nb25lawdhb2dvbmVrC0NjaXJjdW1mbGV4C2NjaXJjdW1mbGV4CkNkb3RhY2NlbnQKY2RvdGFjY2VudAZEY2Fyb24GZGNhcm9uBkRjcm9hdAZkY3JvYXQHRW1hY3JvbgdlbWFjcm9uBkVicmV2ZQZlYnJldmUKRWRvdGFjY2VudAplZG90YWNjZW50B0VvZ29uZWsHZW9nb25lawZFY2Fyb24GZWNhcm9uC0djaXJjdW1mbGV4C2djaXJjdW1mbGV4Ckdkb3RhY2NlbnQKZ2RvdGFjY2VudAxHY29tbWFhY2NlbnQMZ2NvbW1hYWNjZW50C0hjaXJjdW1mbGV4C2hjaXJjdW1mbGV4BEhiYXIEaGJhcgZJdGlsZGUGaXRpbGRlB0ltYWNyb24HaW1hY3JvbgZJYnJldmUHSW9nb25lawdpb2dvbmVrCklkb3RhY2NlbnQLSmNpcmN1bWZsZXgLamNpcmN1bWZsZXgMS2NvbW1hYWNjZW50DGtjb21tYWFjY2VudAZMYWN1dGUGbGFjdXRlDExjb21tYWFjY2VudAxsY29tbWFhY2NlbnQGTGNhcm9uBmxjYXJvbgRMZG90BGxkb3QGTmFjdXRlBm5hY3V0ZQxOY29tbWFhY2NlbnQMbmNvbW1hYWNjZW50Bk5jYXJvbgZuY2Fyb24LbmFwb3N0cm9waGUHT21hY3JvbgdvbWFjcm9uBk9icmV2ZQZvYnJldmUNT2h1bmdhcnVtbGF1dA1vaHVuZ2FydW1sYXV0BlJhY3V0ZQZyYWN1dGUMUmNvbW1hYWNjZW50DHJjb21tYWFjY2VudAZSY2Fyb24GcmNhcm9uBlNhY3V0ZQZzYWN1dGULU2NpcmN1bWZsZXgLc2NpcmN1bWZsZXgMVGNvbW1hYWNjZW50DHRjb21tYWFjY2VudAZUY2Fyb24GdGNhcm9uBFRiYXIEdGJhcgZVdGlsZGUGdXRpbGRlB1VtYWNyb24HdW1hY3JvbgZVYnJldmUGdWJyZXZlBVVyaW5nBXVyaW5nDVVodW5nYXJ1bWxhdXQNdWh1bmdhcnVtbGF1dAdVb2dvbmVrB3VvZ29uZWsLV2NpcmN1bWZsZXgLd2NpcmN1bWZsZXgLWWNpcmN1bWZsZXgLeWNpcmN1bWZsZXgGWmFjdXRlBnphY3V0ZQpaZG90YWNjZW50Cnpkb3RhY2NlbnQHQUVhY3V0ZQdhZWFjdXRlC09zbGFzaGFjdXRlC29zbGFzaGFjdXRlDFNjb21tYWFjY2VudAxzY29tbWFhY2NlbnQGV2dyYXZlBndncmF2ZQZXYWN1dGUGd2FjdXRlCVdkaWVyZXNpcwl3ZGllcmVzaXMGWWdyYXZlBnlncmF2ZQRFdXJvA2EzNQVoZWFydAtjb21tYWFjY2VudAAAAAAB//8AAw=="

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "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Oi8vc2NyaXB0cy5zaWwub3JnL09GTABDAG8AcAB5AHIAaQBnAGgAdAAgACgAYwApACAAMgAwADEAMgAgAGIAeQAgAEYAbwBuAHQAIABEAGkAbgBlAHIALAAgAEkAbgBjACAARABCAEEAIABTAGkAZABlAHMAaABvAHcAIAAoAGQAaQBuAGUAcgBAAGYAbwBuAHQAZABpAG4AZQByAC4AYwBvAG0AKQAgAHcAaQB0AGgAIABSAGUAcwBlAHYAZQBkACAARgBvAG4AdAAgAE4AYQBtAGUAIAAiAE0AeQBzAHQAZQByAHkAIABRAHUAZQBzAHQAIgBNAHkAcwB0AGUAcgB5ACAAUQB1AGUAcwB0AFIAZQBnAHUAbABhAHIARgBvAG4AdABEAGkAbgBlAHIALABJAG4AYwBEAEIAQQBTAGkAZABlAHMAaABvAHcAOgAgAE0AeQBzAHQAZQByAHkAIABRAHUAZQBzAHQAOgAgADIAMAAxADIAVgBlAHIAcwBpAG8AbgAgADEALgAwADAAMABNAHkAcwB0AGUAcgB5AFEAdQBlAHMAdABNAHkAcwB0AGUAcgB5ACAAUQB1AGUAcwB0ACAAaQBzACAAYQAgAHQAcgBhAGQAZQBtAGEAcgBrACAAbwBmACAARgBvAG4AdAAgAEQAaQBuAGUAcgAsACAASQBuAGMAIABEAEIAQQAgAFMAaQBkAGUAcwBoAG8AdwAuAEYAbwBuAHQAIABEAGkAbgBlAHIALAAgAEkAbgBjACAARABCAEEAIABTAGkAZABlAHMAaABvAHcAUwBxAHUAaQBkAGgAdAB0AHAAOgAvAC8AdwB3AHcALgBmAG8AbgB0AGIAcgBvAHMALgBjAG8AbQAvAHMAaQBkAGUAcwBoAG8AdwAuAHAAaABwAGgAdAB0AHAAOgAvAC8AdwB3AHcALgBzAHEAdQBpAGQAYQByAHQALgBjAG8AbQBUAGgAaQBzACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAGkAcwAgAGwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALAANAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAuACAAVABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABpAHMAIABhAHYAYQBpAGwAYQBiAGwAZQAgAHcAaQB0AGgAIABhACAARgBBAFEAIABhAHQAOgANAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAACAAAAAAAA/7MAMwAAAAAAAAAAAAAAAAAAAAAAAAAAAOUAAADpAOoA4gDjAOQA5QDrAOwA7QDuAOYA5wD0APUA8QD2APMA8gDoAO8A8AADAAQABQAGAAcACAAJAAoACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAB8AIAAhACIAIwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0APgA/AEAAQQBCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AXwBgAGEBAgBiAGMAZABlAGYAZwBoAGkAagBrAGwAbQBuAG8AcABxAHIAcwB0AHUAdgB3AHgAeQB6AHsAfAB9AH4AfwCAAIEAgwCEAIUAhgCHAIgAiQCKAIsAjQCOAJAAkQCTAJYAlwCdAJ4AoAChAKIAowCkAKkAqgCrAQMArQCuAK8AsACxALIAswC0ALUAtgC3ALgAugC7ALwBBAC+AL8AwADBAQUAxADFAMYAxwDIAMkAygDLAMwAzQDOAM8A0ADRANMA1ADVANYA1wDYANkBBgDbANwA3QDeAN8A4ADhAL0BBwNERUwHdW5pMDBBMARFdXJvDnBlcmlvZGNlbnRlcmVkBm1hY3JvbglzZnRoeXBoZW4AAAAAAQAB//8ADw=="

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "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DQkEDAYMGxcSBAsKAwERNyAECw0UFRcPBA0FGTErIgsIFxkXBxAYFhkRGioBWQQPEA8EAhgGBQQDBggBAgE3NAsLBAkSIxcSIg4UOQ4fPUleQAYICAoJP1ZCNx8HIS02HQ0SEBcuFwgOBgEOFRvhBC8pAQIJFBQCDBEWChMSBCo0AQgKCAEICQUKFhwkGQ8VFRcPAg0NDAEOCwAAAAAAAQAALDYAAQdcGAAAChQoADYAN//sADYASP/sADYASf/NADYASv/hADYAS//XADYATv/hADYAV//sADYAaP/sADYAaf/NADYAav/hADYAa//XADYAbv/hADYAkP/hADYAkf/hADYAkv/hADYAk//hADYAvf/hADYAvv/hADYA1f/hADYA1v/hADYA1//hADcAPv/NADcARf/sADcASP/hADcASv/sADcAS//XADcATP/2ADcATv/XADcAZf/sADcAaP/hADcAav/sADcAa//XADcAbP/2ADcAbv/XADcAhv/NADcAh//NADcAiP/NADcAif/NADcAkP/sADcAkf/sADcAkv/sADcAk//sADcAvf/XADcAvv/XADcAzv/NADcAz//NADcA0P/NADcA0f/NADcA1f/sADcA1v/sADcA1//sADcA2P/NADgAOP/sADgAOv/2ADgAPP/sADgAPv/hADgARf/hADgASP/2ADgASv/hADgAS//2ADgATP/2ADgAWP/sADgAWv/2ADgAXP/sADgAZf/hADgAaP/2ADgAav/hADgAa//2ADgAbP/2ADgAdv/sADgAd//2ADgAgf/sADgAgv/2ADgAg//2ADgAhP/2ADgAhf/2ADgAhv/hADgAh//hADgAiP/hADgAif/hADgAkP/hADgAkf/hADgAkv/hADgAk//hADgAyv/2ADgAzP/2ADgAzf/2ADgAzv/hADgAz//hADgA0P/hADgA0f/hADgA1f/hADgA1v/hADgA1//hADgA2P/hADkAN//sADkAOf/2ADkAOv/2ADkAPv+kADkAP/+uADkASP/2ADkASf+kADkASv/2ADkAS//hADkATf/hADkATv/XADkAV//sADkAWf/2ADkAWv/2ADkAXv+kADkAX/+uADkAaP/2ADkAaf+kADkAav/2ADkAa//hADkAbf/hADkAbv/XADkAd//2ADkAgv/2ADkAg//2ADkAhP/2ADkAhf/2ADkAhv+kADkAh/+kADkAiP+kADkAif+kADkAkP/2ADkAkf/2ADkAkv/2ADkAk//2ADkAvf/XADkAvv/XADkAyv/2ADkAzP/2ADkAzf/2ADkAzv+kADkAz/+kADkA0P+kADkA0f+kADkA1f/2ADkA1v/2ADkA1//2ADkA2P+kADoAOP/2ADoARP/2ADoAR//2ADoASv/2ADoAWP/2ADoAZP/2ADoAZ//2ADoAav/2ADoAdv/2ADoAef/2ADoAgf/2ADoAi//2ADoAjP/2ADoAjf/2ADoAjv/2ADoAj//2ADoAkP/2ADoAkf/2ADoAkv/2ADoAk//2ADoAs//2ADoAtP/2ADoAtf/2ADoA0v/2ADoA0//2ADoA1P/2ADoA1f/2ADoA1v/2ADoA1//2ADsANv/2ADsAPP/sADsAVv/2ADsAXP/sADsAZP/sADsAdP/2ADsAdf/2ADsAef/sADsAe//2ADsAfP/2ADsAff/2ADsAfv/2ADsAf//2ADsAgP/2ADsAi//sADsAjP/sADsAjf/sADsAjv/sADsAj//sADsAn//2ADsApv/2ADsAsf/2ADsAsv/2ADsAs//sADsAtP/sADsAtf/sADsAyf/2ADsAy//2ADsA0v/sADsA0//sADsA1P/sADwAN//sADwAO//XADwAPv/NADwAP//sADwASP/hADwASf/NADwAS//XADwATv/sADwAV//sADwAW//XADwAXv/NADwAX//sADwAaP/hADwAaf/NADwAa//XADwAbv/sADwAhv/NADwAh//NADwAiP/NADwAif/NADwAvf/sADwAvv/sADwAzv/NADwAz//NADwA0P/NADwA0f/NADwA2P/NAD4ARP/sAD4AZP/sAD4Aef/sAD4Ai//sAD4AjP/sAD4Ajf/sAD4Ajv/sAD4Aj//sAD4As//sAD4AtP/sAD4Atf/sAD4A0v/sAD4A0//sAD4A1P/sAD8ARv/sAD8AZv/sAEAARP/sAEAAZP/sAEAAef/sAEAAi//sAEAAjP/sAEAAjf/sAEAAjv/sAEAAj//sAEAAs//sAEAAtP/sAEAAtf/sAEAA0v/sAEAA0//sAEAA1P/sAEEAN//sAEEAOP/sAEEAPP/sAEEARf/sAEEASP/hAEEASf+uAEEASv/XAEEAS//NAEEATv/hAEEAV//sAEEAWP/sAEEAXP/sAEEAZf/sAEEAaP/hAEEAaf+uAEEAav/XAEEAa//NAEEAbv/hAEEAdv/sAEEAgf/sAEEAkP/XAEEAkf/XAEEAkv/XAEEAk//XAEEAvf/hAEEAvv/hAEEA1f/XAEEA1v/XAEEA1//XAEIAPv/sAEIAhv/sAEIAh//sAEIAiP/sAEIAif/sAEIAzv/sAEIAz//sAEIA0P/sAEIA0f/sAEIA2P/sAEMAPv/sAEMAhv/sAEMAh//sAEMAiP/sAEMAif/sAEMAzv/sAEMAz//sAEMA0P/sAEMA0f/sAEMA2P/sAEQAN//sAEQAPv/XAEQARf/sAEQASP/sAEQASf/NAEQASv/sAEQAS//hAEQATf/sAEQATv/XAEQAT//2AEQAV//sAEQAXv/XAEQAZf/sAEQAaP/sAEQAaf/NAEQAav/sAEQAa//hAEQAbf/sAEQAbv/XAEQAb//2AEQAhv/XAEQAh//XAEQAiP/XAEQAif/XAEQAkP/sAEQAkf/sAEQAkv/sAEQAk//sAEQAvf/XAEQAvv/XAEQAzv/XAEQAz//XAEQA0P/XAEQA0f/XAEQA1f/sAEQA1v/sAEQA1//sAEQA2P/XAEUAIf/XAEUAI//XAEUANv/sAEUAPv/sAEUAT//hAEUAVv/sAEUAZP/sAEUAb//hAEUAdP/sAEUAdf/sAEUAef/sAEUAe//sAEUAfP/sAEUAff/sAEUAfv/sAEUAf//sAEUAgP/sAEUAhv/sAEUAh//sAEUAiP/sAEUAif/sAEUAi//sAEUAjP/sAEUAjf/sAEUAjv/sAEUAj//sAEUAn//sAEUApv/sAEUAsf/sAEUAsv/sAEUAs//sAEUAtP/sAEUAtf/sAEUAyf/sAEUAy//sAEUAzv/sAEUAz//sAEUA0P/sAEUA0f/sAEUA0v/sAEUA0//sAEUA1P/sAEUA2P/sAEYAN//2AEYAPv/sAEYASf/hAEYASv/2AEYATv/sAEYAV//2AEYAaf/hAEYAav/2AEYAbv/sAEYAhv/sAEYAh//sAEYAiP/sAEYAif/sAEYAkP/2AEYAkf/2AEYAkv/2AEYAk//2AEYAvf/sAEYAvv/sAEYAzv/sAEYAz//sAEYA0P/sAEYA0f/sAEYA1f/2AEYA1v/2AEYA1//2AEYA2P/sAEcAPv/hAEcASf/hAEcASv/sAEcAS//hAEcATv/sAEcAaf/hAEcAav/sAEcAa//hAEcAbv/sAEcAhv/hAEcAh//hAEcAiP/hAEcAif/hAEcAkP/sAEcAkf/sAEcAkv/sAEcAk//sAEcAvf/sAEcAvv/sAEcAzv/hAEcAz//hAEcA0P/hAEcA0f/hAEcA1f/sAEcA1v/sAEcA1//sAEcA2P/hAEgAQv/2AEgARP/sAEgARf/2AEgARv/sAEgAYv/2AEgAZP/sAEgAZf/2AEgAZv/sAEgAef/sAEgAi//sAEgAjP/sAEgAjf/sAEgAjv/sAEgAj//sAEgAs//sAEgAtP/sAEgAtf/sAEgA0v/sAEgA0//sAEgA1P/sAEkANv/NAEkAPP/hAEkARP/hAEkARv/XAEkAVv/NAEkAWP/hAEkAXP/hAEkAZP/hAEkAZv/XAEkAdP/NAEkAdf/NAEkAdv/hAEkAef/hAEkAe//NAEkAfP/NAEkAff/NAEkAfv/NAEkAf//NAEkAgP/NAEkAgf/hAEkAi//hAEkAjP/hAEkAjf/hAEkAjv/hAEkAj//hAEkAn//NAEkApv/NAEkAsf/NAEkAsv/NAEkAs//hAEkAtP/hAEkAtf/hAEkAyf/NAEkAy//NAEkA0v/hAEkA0//hAEkA1P/hAEoANv/hAEoAPv/XAEoAVv/hAEoAdP/hAEoAdf/hAEoAe//hAEoAfP/hAEoAff/hAEoAfv/hAEoAf//hAEoAgP/hAEoAhv/XAEoAh//XAEoAiP/XAEoAif/XAEoAn//hAEoApv/hAEoAsf/hAEoAsv/hAEoAyf/hAEoAy//hAEoAzv/XAEoAz//XAEoA0P/XAEoA0f/XAEoA2P/XAEsAIf/XAEsAI//XAEsANv/hAEsAPP/hAEsAQv/sAEsAQ//2AEsARP/hAEsARf/2AEsARv/XAEsAR//2AEsAVv/hAEsAXP/hAEsAYv/sAEsAY//2AEsAZP/hAEsAZf/2AEsAZv/XAEsAZ//2AEsAdP/hAEsAdf/hAEsAeP/2AEsAef/hAEsAe//hAEsAfP/hAEsAff/hAEsAfv/hAEsAf//hAEsAgP/hAEsAiv/2AEsAi//hAEsAjP/hAEsAjf/hAEsAjv/hAEsAj//hAEsAn//hAEsApv/hAEsAsf/hAEsAsv/hAEsAs//hAEsAtP/hAEsAtf/hAEsAyf/hAEsAy//hAEsA0v/hAEsA0//hAEsA1P/hAEwAI//XAEwANv/2AEwAPv/sAEwAVv/2AEwAdP/2AEwAdf/2AEwAe//2AEwAfP/2AEwAff/2AEwAfv/2AEwAf//2AEwAgP/2AEwAhv/sAEwAh//sAEwAiP/sAEwAif/sAEwAn//2AEwApv/2AEwAsf/2AEwAsv/2AEwAyf/2AEwAy//2AEwAzv/sAEwAz//sAEwA0P/sAEwA0f/sAEwA2P/sAE0APP/sAE0APv/2AE0ARP/sAE0AXP/sAE0AZP/sAE0Aef/sAE0Ahv/2AE0Ah//2AE0AiP/2AE0Aif/2AE0Ai//sAE0AjP/sAE0Ajf/sAE0Ajv/sAE0Aj//sAE0As//sAE0AtP/sAE0Atf/sAE0Azv/2AE0Az//2AE0A0P/2AE0A0f/2AE0A0v/sAE0A0//sAE0A1P/sAE0A2P/2AE4AIf/sAE4AI//sAE4ANv/sAE4APP/hAE4ARP/hAE4ARv/hAE4AVv/sAE4AXP/hAE4AZP/hAE4AZv/hAE4AdP/sAE4Adf/sAE4Aef/hAE4Ae//sAE4AfP/sAE4Aff/sAE4Afv/sAE4Af//sAE4AgP/sAE4Ai//hAE4AjP/hAE4Ajf/hAE4Ajv/hAE4Aj//hAE4An//sAE4Apv/sAE4Asf/sAE4Asv/sAE4As//hAE4AtP/hAE4Atf/hAE4Ayf/sAE4Ay//sAE4A0v/hAE4A0//hAE4A1P/hAE8AOP/2AE8APP/sAE8ARv/sAE8AWP/2AE8AXP/sAE8AZv/sAE8Adv/2AE8Agf/2AFYAN//sAFYASP/sAFYASf/NAFYASv/hAFYAS//XAFYATv/hAFYAV//sAFYAaP/sAFYAaf/NAFYAav/hAFYAa//XAFYAbv/hAFYAkP/hAFYAkf/hAFYAkv/hAFYAk//hAFYAvf/hAFYAvv/hAFYA1f/hAFYA1v/hAFYA1//hAFcAPv/NAFcARf/sAFcASP/hAFcASv/sAFcAS//XAFcATP/2AFcATv/XAFcAZf/sAFcAaP/hAFcAav/sAFcAa//XAFcAbP/2AFcAbv/XAFcAhv/NAFcAh//NAFcAiP/NAFcAif/NAFcAkP/sAFcAkf/sAFcAkv/sAFcAk//sAFcAvf/XAFcAvv/XAFcAzv/NAFcAz//NAFcA0P/NAFcA0f/NAFcA1f/sAFcA1v/sAFcA1//sAFcA2P/NAFgAOP/sAFgAOv/2AFgAPP/sAFgAPv/hAFgARf/hAFgASP/2AFgASv/hAFgAS//2AFgATP/2AFgAWP/sAFgAWv/2AFgAXP/sAFgAZf/hAFgAaP/2AFgAav/hAFgAa//2AFgAbP/2AFgAdv/sAFgAd//2AFgAgf/sAFgAgv/2AFgAg//2AFgAhP/2AFgAhf/2AFgAhv/hAFgAh//hAFgAiP/hAFgAif/hAFgAkP/hAFgAkf/hAFgAkv/hAFgAk//hAFgAyv/2AFgAzP/2AFgAzf/2AFgAzv/hAFgAz//hAFgA0P/hAFgA0f/hAFgA1f/hAFgA1v/hAFgA1//hAFgA2P/hAFkAN//sAFkAOf/2AFkAOv/2AFkAPv+kAFkAP/+uAFkASP/2AFkASf+kAFkASv/2AFkAS//hAFkATf/hAFkATv/XAFkAV//sAFkAWf/2AFkAWv/2AFkAX/+uAFkAaP/2AFkAaf+kAFkAav/2AFkAa//hAFkAbf/hAFkAbv/XAFkAd//2AFkAgv/2AFkAg//2AFkAhP/2AFkAhf/2AFkAhv+kAFkAh/+kAFkAiP+kAFkAif+kAFkAkP/2AFkAkf/2AFkAkv/2AFkAk//2AFkAvf/XAFkAvv/XAFkAyv/2AFkAzP/2AFkAzf/2AFkAzv+kAFkAz/+kAFkA0P+kAFkA0f+kAFkA1f/2AFkA1v/2AFkA1//2AFkA2P+kAFoAOP/2AFoARP/2AFoAR//2AFoASv/2AFoAWP/2AFoAZP/2AFoAZ//2AFoAav/2AFoAdv/2AFoAef/2AFoAgf/2AFoAi//2AFoAjP/2AFoAjf/2AFoAjv/2AFoAj//2AFoAkP/2AFoAkf/2AFoAkv/2AFoAk//2AFoAs//2AFoAtP/2AFoAtf/2AFoA0v/2AFoA0//2AFoA1P/2AFoA1f/2AFoA1v/2AFoA1//2AFsANv/2AFsAPP/sAFsAVv/2AFsAXP/sAFsAdP/2AFsAdf/2AFsAe//2AFsAfP/2AFsAff/2AFsAfv/2AFsAf//2AFsAgP/2AFsAn//2AFsApv/2AFsAsf/2AFsAsv/2AFsAyf/2AFsAy//2AFwAN//sAFwAO//XAFwAPv/NAFwAP//sAFwASP/hAFwASf/NAFwAS//XAFwATv/sAFwAV//sAFwAW//XAFwAXv/NAFwAX//sAFwAaP/hAFwAaf/NAFwAa//XAFwAbv/sAFwAhv/NAFwAh//NAFwAiP/NAFwAif/NAFwAvf/sAFwAvv/sAFwAzv/NAFwAz//NAFwA0P/NAFwA0f/NAFwA2P/NAF4ARP/sAF4AZP/sAF4Aef/sAF4Ai//sAF4AjP/sAF4Ajf/sAF4Ajv/sAF4Aj//sAF4As//sAF4AtP/sAF4Atf/sAF4A0v/sAF4A0//sAF4A1P/sAF8ARv/sAF8AZv/sAGAARP/sAGAAZP/sAGAAef/sAGAAi//sAGAAjP/sAGAAjf/sAGAAjv/sAGAAj//sAGAAs//sAGAAtP/sAGAAtf/sAGAA0v/sAGAA0//sAGAA1P/sAGEAN//sAGEAOP/sAGEAPP/sAGEARf/sAGEASP/hAGEASf+uAGEASv/XAGEAS//NAGEATv/hAGEAV//sAGEAWP/sAGEAXP/sAGEAZf/sAGEAaP/hAGEAaf+uAGEAav/XAGEAa//NAGEAbv/hAGEAdv/sAGEAgf/sAGEAkP/XAGEAkf/XAGEAkv/XAGEAk//XAGEAvf/hAGEAvv/hAGEA1f/XAGEA1v/XAGEA1//XAGIAPv/sAGIAhv/sAGIAh//sAGIAiP/sAGIAif/sAGIAzv/sAGIAz//sAGIA0P/sAGIA0f/sAGIA2P/sAGMAPv/sAGMAhv/sAGMAh//sAGMAiP/sAGMAif/sAGMAzv/sAGMAz//sAGMA0P/sAGMA0f/sAGMA2P/sAGQAN//sAGQAPv/XAGQARf/sAGQASP/sAGQASf/NAGQASv/sAGQAS//hAGQATf/sAGQATv/XAGQAT//2AGQAV//sAGQAXv/XAGQAZf/sAGQAaP/sAGQAaf/NAGQAav/sAGQAa//hAGQAbf/sAGQAbv/XAGQAb//2AGQAhv/XAGQAh//XAGQAiP/XAGQAif/XAGQAkP/sAGQAkf/sAGQAkv/sAGQAk//sAGQAvf/XAGQAvv/XAGQAzv/XAGQAz//XAGQA0P/XAGQA0f/XAGQA1f/sAGQA1v/sAGQA1//sAGQA2P/XAGUAIf/XAGUAI//XAGUANv/sAGUAPv/sAGUAT//hAGUAVv/sAGUAb//hAGUAdP/sAGUAdf/sAGUAe//sAGUAfP/sAGUAff/sAGUAfv/sAGUAf//sAGUAgP/sAGUAhv/sAGUAh//sAGUAiP/sAGUAif/sAGUAn//sAGUApv/sAGUAsf/sAGUAsv/sAGUAyf/sAGUAy//sAGUAzv/sAGUAz//sAGUA0P/sAGUA0f/sAGUA2P/sAGYAN//2AGYAPv/sAGYASf/hAGYASv/2AGYATv/sAGYAV//2AGYAaf/hAGYAav/2AGYAbv/sAGYAhv/sAGYAh//sAGYAiP/sAGYAif/sAGYAkP/2AGYAkf/2AGYAkv/2AGYAk//2AGYAvf/sAGYAvv/sAGYAzv/sAGYAz//sAGYA0P/sAGYA0f/sAGYA1f/2AGYA1v/2AGYA1//2AGYA2P/sAGcAPv/hAGcASf/hAGcASv/sAGcAS//hAGcATv/sAGcAaf/hAGcAav/sAGcAa//hAGcAbv/sAGcAhv/hAGcAh//hAGcAiP/hAGcAif/hAGcAkP/sAGcAkf/sAGcAkv/sAGcAk//sAGcAvf/sAGcAvv/sAGcAzv/hAGcAz//hAGcA0P/hAGcA0f/hAGcA1f/sAGcA1v/sAGcA1//sAGcA2P/hAGgAQv/2AGgARP/sAGgARf/2AGgARv/sAGgAYv/2AGgAZP/sAGgAZf/2AGgAZv/sAGgAef/sAGgAi//sAGgAjP/sAGgAjf/sAGgAjv/sAGgAj//sAGgAs//sAGgAtP/sAGgAtf/sAGgA0v/sAGgA0//sAGgA1P/sAGkANv/NAGkAPP/hAGkARP/hAGkARv/XAGkAVv/NAGkAXP/hAGkAZP/hAGkAZv/XAGkAdP/NAGkAdf/NAGkAef/hAGkAe//NAGkAfP/NAGkAff/NAGkAfv/NAGkAf//NAGkAgP/NAGkAi//hAGkAjP/hAGkAjf/hAGkAjv/hAGkAj//hAGkAn//NAGkApv/NAGkAsf/NAGkAsv/NAGkAs//hAGkAtP/hAGkAtf/hAGkAyf/NAGkAy//NAGkA0v/hAGkA0//hAGkA1P/hAGoANv/hAGoAPv/XAGoAVv/hAGoAdP/hAGoAdf/hAGoAe//hAGoAfP/hAGoAff/hAGoAfv/hAGoAf//hAGoAgP/hAGoAhv/XAGoAh//XAGoAiP/XAGoAif/XAGoAn//hAGoApv/hAGoAsf/hAGoAsv/hAGoAyf/hAGoAy//hAGoAzv/XAGoAz//XAGoA0P/XAGoA0f/XAGoA2P/XAGsAIf/XAGsAI//XAGsANv/hAGsAPP/hAGsAQv/sAGsAQ//2AGsARP/hAGsARf/2AGsARv/XAGsAR//2AGsAVv/hAGsAXP/hAGsAYv/sAGsAY//2AGsAZP/hAGsAZf/2AGsAZv/XAGsAZ//2AGsAdP/hAGsAdf/hAGsAeP/2AGsAef/hAGsAe//hAGsAfP/hAGsAff/hAGsAfv/hAGsAf//hAGsAgP/hAGsAiv/2AGsAi//hAGsAjP/hAGsAjf/hAGsAjv/hAGsAj//hAGsAn//hAGsApv/hAGsAsf/hAGsAsv/hAGsAs//hAGsAtP/hAGsAtf/hAGsAyf/hAGsAy//hAGsA0v/hAGsA0//hAGsA1P/hAGwAI//XAGwANv/2AGwAPv/sAGwAVv/2AGwAdP/2AGwAdf/2AGwAe//2AGwAfP/2AGwAff/2AGwAfv/2AGwAf//2AGwAgP/2AGwAhv/sAGwAh//sAGwAiP/sAGwAif/sAGwAn//2AGwApv/2AGwAsf/2AGwAsv/2AGwAyf/2AGwAy//2AGwAzv/sAGwAz//sAGwA0P/sAGwA0f/sAGwA2P/sAG0APP/sAG0APv/2AG0ARP/sAG0AXP/sAG0AZP/sAG0Aef/sAG0Ahv/2AG0Ah//2AG0AiP/2AG0Aif/2AG0Ai//sAG0AjP/sAG0Ajf/sAG0Ajv/sAG0Aj//sAG0As//sAG0AtP/sAG0Atf/sAG0Azv/2AG0Az//2AG0A0P/2AG0A0f/2AG0A0v/sAG0A0//sAG0A1P/sAG0A2P/2AG4AIf/sAG4AI//sAG4ANv/sAG4APP/hAG4ARP/hAG4ARv/hAG4AVv/sAG4AXP/hAG4AZP/hAG4AZv/hAG4AdP/sAG4Adf/sAG4Aef/hAG4Ae//sAG4AfP/sAG4Aff/sAG4Afv/sAG4Af//sAG4AgP/sAG4Ai//hAG4AjP/hAG4Ajf/hAG4Ajv/hAG4Aj//hAG4An//sAG4Apv/sAG4Asf/sAG4Asv/sAG4As//hAG4AtP/hAG4Atf/hAG4Ayf/sAG4Ay//sAG4A0v/hAG4A0//hAG4A1P/hAG8AOP/2AG8APP/sAG8ARv/sAG8AWP/2AG8AXP/sAG8AZv/sAG8Adv/2AG8Agf/2AHQAN//sAHQASP/sAHQASf/NAHQASv/hAHQAS//XAHQATv/hAHQAV//sAHQAaP/sAHQAaf/NAHQAav/hAHQAa//XAHQAbv/hAHUAN//sAHUASP/sAHUASf/NAHUASv/hAHUAS//XAHUATv/hAHUAV//sAHUAaP/sAHUAaf/NAHUAav/hAHUAa//XAHUAbv/hAHYAOP/sAHYAOv/2AHYAPP/sAHYAPv/hAHYARf/hAHYASP/2AHYASv/hAHYAS//2AHYATP/2AHYAWP/sAHYAWv/2AHYAXP/sAHYAXv/hAHYAZf/hAHYAaP/2AHYAav/hAHYAa//2AHYAbP/2AHcAOP/2AHcARP/2AHcAR//2AHcASv/2AHcAWP/2AHcAZP/2AHcAZ//2AHcAav/2AHgAPv/sAHgAXv/sAHkAN//sAHkAPv/XAHkARf/sAHkASP/sAHkASf/NAHkASv/sAHkAS//hAHkATf/sAHkATv/XAHkAT//2AHkAV//sAHkAXv/XAHkAZf/sAHkAaP/sAHkAaf/NAHkAav/sAHkAa//hAHkAbf/sAHkAbv/XAHkAb//2AHsAN//sAHsASP/sAHsASf/NAHsASv/hAHsAS//XAHsATv/hAHsAV//sAHsAaP/sAHsAaf/NAHsAav/hAHsAa//XAHsAbv/hAHwAN//sAHwASP/sAHwASf/NAHwASv/hAHwAS//XAHwATv/hAHwAV//sAHwAaP/sAHwAaf/NAHwAav/hAHwAa//XAHwAbv/hAH0AN//sAH0ASP/sAH0ASf/NAH0ASv/hAH0AS//XAH0ATv/hAH0AV//sAH0AaP/sAH0Aaf/NAH0Aav/hAH0Aa//XAH0Abv/hAH4AN//sAH4ASP/sAH4ASf/NAH4ASv/hAH4AS//XAH4ATv/hAH4AV//sAH4AaP/sAH4Aaf/NAH4Aav/hAH4Aa//XAH4Abv/hAH8AN//sAH8ASP/sAH8ASf/NAH8ASv/hAH8AS//XAH8ATv/hAH8AV//sAH8AaP/sAH8Aaf/NAH8Aav/hAH8Aa//XAH8Abv/hAIAAN//sAIAASP/sAIAASf/NAIAASv/hAIAAS//XAIAATv/hAIAAV//sAIAAaP/sAIAAaf/NAIAAav/hAIAAa//XAIAAbv/hAIEAOP/sAIEAOv/2AIEAPP/sAIEAPv/hAIEARf/hAIEASP/2AIEASv/hAIEAS//2AIEATP/2AIEAWP/sAIEAWv/2AIEAXP/sAIEAXv/hAIEAZf/hAIEAaP/2AIEAav/hAIEAa//2AIEAbP/2AIIAOP/2AIIARP/2AIIAR//2AIIASv/2AIIAWP/2AIIAZP/2AIIAZ//2AIIAav/2AIMAOP/2AIMARP/2AIMAR//2AIMASv/2AIMAWP/2AIMAZP/2AIMAZ//2AIMAav/2AIQAOP/2AIQARP/2AIQAR//2AIQASv/2AIQAWP/2AIQAZP/2AIQAZ//2AIQAav/2AIUAOP/2AIUARP/2AIUAR//2AIUASv/2AIUAWP/2AIUAZP/2AIUAZ//2AIUAav/2AIYARP/sAIYAZP/sAIcARP/sAIcAZP/sAIgARP/sAIgAZP/sAIkARP/sAIkAZP/sAIoAPv/sAIoAXv/sAIsAN//sAIsAPv/XAIsARf/sAIsASP/sAIsASf/NAIsASv/sAIsAS//hAIsATf/sAIsATv/XAIsAT//2AIsAV//sAIsAXv/XAIsAZf/sAIsAaP/sAIsAaf/NAIsAav/sAIsAa//hAIsAbf/sAIsAbv/XAIsAb//2AIwAN//sAIwAPv/XAIwARf/sAIwASP/sAIwASf/NAIwASv/sAIwAS//hAIwATf/sAIwATv/XAIwAT//2AIwAV//sAIwAXv/XAIwAZf/sAIwAaP/sAIwAaf/NAIwAav/sAIwAa//hAIwAbf/sAIwAbv/XAIwAb//2AI0AN//sAI0APv/XAI0ARf/sAI0ASP/sAI0ASf/NAI0ASv/sAI0AS//hAI0ATf/sAI0ATv/XAI0AT//2AI0AV//sAI0AXv/XAI0AZf/sAI0AaP/sAI0Aaf/NAI0Aav/sAI0Aa//hAI0Abf/sAI0Abv/XAI0Ab//2AI4AN//sAI4APv/XAI4ARf/sAI4ASP/sAI4ASf/NAI4ASv/sAI4AS//hAI4ATf/sAI4ATv/XAI4AT//2AI4AV//sAI4AXv/XAI4AZf/sAI4AaP/sAI4Aaf/NAI4Aav/sAI4Aa//hAI4Abf/sAI4Abv/XAI4Ab//2AI8AN//sAI8APv/XAI8ARf/sAI8ASP/sAI8ASf/NAI8ASv/sAI8AS//hAI8ATf/sAI8ATv/XAI8AT//2AI8AV//sAI8AXv/XAI8AZf/sAI8AaP/sAI8Aaf/NAI8Aav/sAI8Aa//hAI8Abf/sAI8Abv/XAI8Ab//2AJAANv/hAJAAPv/XAJAAVv/hAJAAXv/XAJEANv/hAJEAPv/XAJEAVv/hAJEAXv/XAJIANv/hAJIAPv/XAJIAVv/hAJIAXv/XAJMANv/hAJMAPv/XAJMAVv/hAJMAXv/XAJ8AN//sAJ8ASP/sAJ8ASf/NAJ8ASv/hAJ8AS//XAJ8ATv/hAJ8AV//sAJ8AaP/sAJ8Aaf/NAJ8Aav/hAJ8Aa//XAJ8Abv/hAKYAN//sAKYASP/sAKYASf/NAKYASv/hAKYAS//XAKYATv/hAKYAV//sAKYAaP/sAKYAaf/NAKYAav/hAKYAa//XAKYAbv/hALEAN//sALEASP/sALEASf/NALEASv/hALEAS//XALEATv/hALEAV//sALEAaP/sALEAaf/NALEAav/hALEAa//XALEAbv/hALIAN//sALIASP/sALIASf/NALIASv/hALIAS//XALIATv/hALIAV//sALIAaP/sALIAaf/NALIAav/hALIAa//XALIAbv/hALMAN//sALMAPv/XALMARf/sALMASP/sALMASf/NALMASv/sALMAS//hALMATf/sALMATv/XALMAT//2ALMAV//sALMAXv/XALMAZf/sALMAaP/sALMAaf/NALMAav/sALMAa//hALMAbf/sALMAbv/XALMAb//2ALQAN//sALQAPv/XALQARf/sALQASP/sALQASf/NALQASv/sALQAS//hALQATf/sALQATv/XALQAT//2ALQAV//sALQAXv/XALQAZf/sALQAaP/sALQAaf/NALQAav/sALQAa//hALQAbf/sALQAbv/XALQAb//2ALUAN//sALUAPv/XALUARf/sALUASP/sALUASf/NALUASv/sALUAS//hALUATf/sALUATv/XALUAT//2ALUAV//sALUAXv/XALUAZf/sALUAaP/sALUAaf/NALUAav/sALUAa//hALUAbf/sALUAbv/XALUAb//2AL0ANv/sAL0APP/hAL0ARP/hAL0ARv/hAL0AVv/sAL0AXP/hAL0AZP/hAL0AZv/hAL4ANv/sAL4APP/hAL4ARP/hAL4ARv/hAL4AVv/sAL4AXP/hAL4AZP/hAL4AZv/hAMkAN//sAMkASP/sAMkASf/NAMkASv/hAMkAS//XAMkATv/hAMkAV//sAMkAaP/sAMkAaf/NAMkAav/hAMkAa//XAMkAbv/hAMoAOP/2AMoARP/2AMoAR//2AMoASv/2AMoAWP/2AMoAZP/2AMoAZ//2AMoAav/2AMsAN//sAMsASP/sAMsASf/NAMsASv/hAMsAS//XAMsATv/hAMsAV//sAMsAaP/sAMsAaf/NAMsAav/hAMsAa//XAMsAbv/hAMwAOP/2AMwARP/2AMwAR//2AMwASv/2AMwAWP/2AMwAZP/2AMwAZ//2AMwAav/2AM0AOP/2AM0ARP/2AM0AR//2AM0ASv/2AM0AWP/2AM0AZP/2AM0AZ//2AM0Aav/2AM4ARP/sAM4AZP/sAM8ARP/sAM8AZP/sANAARP/sANAAZP/sANEARP/sANEAZP/sANIAN//sANIAPv/XANIARf/sANIASP/sANIASf/NANIASv/sANIAS//hANIATf/sANIATv/XANIAT//2ANIAV//sANIAXv/XANIAZf/sANIAaP/sANIAaf/NANIAav/sANIAa//hANIAbf/sANIAbv/XANIAb//2ANMAN//sANMAPv/XANMARf/sANMASP/sANMASf/NANMASv/sANMAS//hANMATf/sANMATv/XANMAT//2ANMAV//sANMAXv/XANMAZf/sANMAaP/sANMAaf/NANMAav/sANMAa//hANMAbf/sANMAbv/XANMAb//2ANQAN//sANQAPv/XANQARf/sANQASP/sANQASf/NANQASv/sANQAS//hANQATf/sANQATv/XANQAT//2ANQAV//sANQAXv/XANQAZf/sANQAaP/sANQAaf/NANQAav/sANQAa//hANQAbf/sANQAbv/XANQAb//2ANUANv/hANUAPv/XANUAVv/hANUAXv/XANYANv/hANYAPv/XANYAVv/hANYAXv/XANcANv/hANcAPv/XANcAVv/hANcAXv/XANgARP/sANgAZP/sAAAAAAAjAaoAAQAAAAAAAAA7AAAAAQAAAAAAAQAQADsAAQAAAAAAAgAHAEsAAQAAAAAAAwAlAFIAAQAAAAAABAAQADsAAQAAAAAABQANAHcAAQAAAAAABgAPAIQAAQAAAAAABwAzAJMAAQAAAAAACAAPAMYAAQAAAAAACQAPAMYAAQAAAAAACgA7AAAAAQAAAAAACwAYANUAAQAAAAAADAAYANUAAQAAAAAADQAuAO0AAQAAAAAADgAqARsAAQAAAAAAEAAQADsAAQAAAAAAEQAHAEsAAQAAAAAAEgAQADsAAwABBAkAAAB2AUUAAwABBAkAAQAgAbsAAwABBAkAAgAOAdsAAwABBAkAAwBKAekAAwABBAkABAAgAbsAAwABBAkABQAaAjMAAwABBAkABgAeAk0AAwABBAkABwBmAmsAAwABBAkACAAeAtEAAwABBAkACQAeAtEAAwABBAkACgB2AUUAAwABBAkACwAwAu8AAwABBAkADAAwAu8AAwABBAkADQBcAx8AAwABBAkADgBUA3sAAwABBAkAEAAgAbsAAwABBAkAEQAOAdtDb3B5cmlnaHQgKGMpIDIwMTAgYnkgRm9udCBEaW5lciwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlBlcm1hbmVudCBNYXJrZXJSZWd1bGFyRm9udERpbmVyLEluYzogUGVybWFuZW50IE1hcmtlcjogMjAxMFZlcnNpb24gMS4wMDBQZXJtYW5lbnRNYXJrZXJQZXJtYW5lbnQgTWFya2VyIGlzIGEgdHJhZGVtYXJrIG9mIEZvbnQgRGluZXIsIEluYy5Gb250IERpbmVyLCBJbmNodHRwOi8vd3d3LmZvbnRkaW5lci5jb21MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4waHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABjACkAIAAyADAAMQAwACAAYgB5ACAARgBvAG4AdAAgAEQAaQBuAGUAcgAsACAASQBuAGMALgAgAEEAbABsACAAcgBpAGcAaAB0AHMAIAByAGUAcwBlAHIAdgBlAGQALgBQAGUAcgBtAGEAbgBlAG4AdAAgAE0AYQByAGsAZQByAFIAZQBnAHUAbABhAHIARgBvAG4AdABEAGkAbgBlAHIALABJAG4AYwA6ACAAUABlAHIAbQBhAG4AZQBuAHQAIABNAGEAcgBrAGUAcgA6ACAAMgAwADEAMABWAGUAcgBzAGkAbwBuACAAMQAuADAAMAAwAFAAZQByAG0AYQBuAGUAbgB0AE0AYQByAGsAZQByAFAAZQByAG0AYQBuAGUAbgB0ACAATQBhAHIAawBlAHIAIABpAHMAIABhACAAdAByAGEAZABlAG0AYQByAGsAIABvAGYAIABGAG8AbgB0ACAARABpAG4AZQByACwAIABJAG4AYwAuAEYAbwBuAHQAIABEAGkAbgBlAHIALAAgAEkAbgBjAGgAdAB0AHAAOgAvAC8AdwB3AHcALgBmAG8AbgB0AGQAaQBuAGUAcgAuAGMAbwBtAEwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAQQBwAGEAYwBoAGUAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMgAuADAAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAGEAcABhAGMAaABlAC4AbwByAGcALwBsAGkAYwBlAG4AcwBlAHMALwBMAEkAQwBFAE4AUwBFAC0AMgAuADAAAAAAAgAAAAAAAP+zADMAAAAAAAAAAAAAAAAAAAAAAAAAAADmAAAA6gDiAOMA5ADlAOsA7ADtAO4A5gDnAPQA9QDxAPYA8wDyAOgA7wDwAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQBiAGMAZABlAGYAZwBoAGkAagBrAGwAbQBuAG8AcABxAHIAcwB0AHUAdgB3AHgAeQB6AHsAfAB9AH4AfwCAAIEAgwCEAIUAhgCHAIgAiQCKAIsAjQCOAJAAkQCTAJYAlwCdAJ4AoAChAKIAowCkAKcBAgCpAKoAqwEDAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALoAuwC8AQQAvgC/AMAAwQEFAMQAxQDGAMcAyADJAMoAywDMAM0AzgDPANAA0QDTANQA1QDWANcA2ADZAQYA2wDcAN0A3gDfAOAA4QEHAL0A6QVEZWx0YQd1bmkwMEEwBEV1cm8OcGVyaW9kY2VudGVyZWQGbWFjcm9uCXNmdGh5cGhlbgAAAADqAOIA4wDkAOUA6wDsAO0A7gDmAOcA9AD1APEA9gDzAPIA6ADvAPAAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKg=="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "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BgYCAgQDAwYBAwMEBAIEAgMFBAUFBQUFBQUFAgIDBAMEBQYFBAYGBgUGAwUHBQgGBQUFBgQGBgYIBwcFAgMCBAQDBQQEBQYDAwYDCQUEBQQEBAQGBQcGBQQAAAAMCgYABgYCAwUDBAYBAwMEBQMEAgMFBAUGBQUFBgUFAgIDBAQEBQcGBQYGBgYGAwUHBgkHBgYGBwUGBwcJCAcFAgMDBAUEBQQEBgcDBAYDCgYEBQQFBQQGBQgGBgQAAAANCwcABwcCAwUDBAcBAwMFBQMEAgQGBAUGBgYGBgYFAgIDBAQEBQcGBQcHBwYHAwYIBgkIBgYGBwUHBwcKCAgGAwMDBAUEBQQEBgcEBAcDCwYFBQQFBQQHBggHBgUAAAAOCwcABwcCAwUEBAcCBAQFBQMFAwQGBQYHBgYGBgYGAgIEBQQEBggHBQgHBwcHAwYJBwoIBwYHCAUHCAgKCQgGAwQDBQYEBgUFBwgEBAcDCwcFBgUGBQUHBgkHBwUAAAAPDAgACAgCAwYEBAgCBAQFBgMFAwQGBQYHBwcGBwcGAgIEBQUFBgkHBggICAcIBAYJBwsJBwcHCAYICAgLCgkHAwQDBQYEBgUFBwgEBQgEDAcFBgUGBgUIBwoIBwUAAAAQDQgACAgCBAYEBQgCBAQGBgMFAwQHBQcIBwcHBwcHAgMEBgUFBwkIBgkICAgIBAcKCAwJCAcICQYICQkMCgoHAwQEBQYFBwUFBwkEBQgEDQgGBwYGBgUIBwoICAYAAAARDgkACQkDBAYFBQkCBAQGBgQGAwUHBgcICAcHCAgHAwMEBgUFBwoIBgkJCQgJBAcKCAwKCAgICQYJCgkNCwoIBAQEBgcFBwYGCAkFBQkEDggGBwYHBwYJCAsJCAYAAAASDwkACQkDBAcFBQkCBQUGBwQGAwUIBgcJCAgICAgHAwMFBgUGBwoJBwoKCQkKBAgLCQ0LCQgJCgcJCgoNDAsIBAUEBgcFCAYGCAoFBQkEDwkHCAYHBwYJCAwJCAYAAAATEAoACgoDBAcFBgoCBQUHBwQGAwUIBggJCQgICQgIAwMFBwYGCAsJBwoKCgkKBQgMCQ4LCQkJCgcKCwoODAsIBAUEBggGCAYGCQoFBgoFEAkHCAcIBwYKCQwKCQcAAAAUEAoACgoDBAgFBgoCBQUHCAQHBAYJBggKCQkICQkIAwMFBwYGCAsKCAsLCgkLBQkMCg4MCgkKCwgKCwsPDQwJBAUEBwgGCAcHCQsGBgoFEAoHCAcICAcKCQ0KCQcAAAAVEQsACwsDBQgGBgsCBQUHCAQHBAYJBwkKCgkJCgkJAwMFBwYHCQwKCAsLCwoLBQkNCg8MCgoKCwgLDAwQDgwJBAUFBwgGCQcHCgsGBgsFEQoICQcICAcLCQ4LCgcAAAAWEgsACwsDBQgGBwsCBgYICAUHBAYKBwkLCgoJCgoJAwMGCAcHCQ0LCAwMDAoMBQkNCxANCwoLDAgLDAwQDg0KBQYFBwkHCQcHCgwGBwsFEgsICQgJCAcLCg4LCggAAAAXEwwADAwDBQkGBwwCBgYICQUIBAYKBwkLCgoKCwoJAwQGCAcHCQ0LCQwMDAsMBgoOCxENCwsLDQkMDQ0RDw4KBQYFCAkHCggICwwGBwwFEwsICggJCQgMCg8MCwgAAAAYFAwADAwEBQkGBwwDBgYICQUIBAcKCAoMCwoKCwsKBAQGCAcICg4MCQ0NDQsNBgoPDBEODAsMDQkMDg0SEA4LBQYFCAoHCggICw0HBwwGFAwJCggKCQgMCxAMCwgAAAAAAQAAAZAABQACArwCigAAAI8CvAKKAAABxQAyAQMAAAAABAAAAAAAAAAAAAADAAAAAAAAAAAAAAAATUFDUgBAACAAegKz/zsAAAKzAMUAAAABAAAAAAAAAAEAAIAAAAAB9AGKAABgAAKzAnVCbGFjayBib3lzIG8gICAg/////zf///5CTEFSMDAAAAAAAAAAAQAAAAEAABIO2bBfDzz1AAAD6AAAAAC0STWnAAAAALRJNaf/mf87A2oDIAAAAAMAAgABAAAAAAABAAADIP84AAADMP+Z/7gDagABAAAAAAAAAAAAAAAAAAAAWwABAAAAWwChAAMAAAAAAAIACABAAAoAAABeALsAAQABAAAAEADGAAEAAAAAAAAAMgAAAAEAAAAAAAEACwAyAAEAAAAAAAIABwA9AAEAAAAAAAMACwBEAAEAAAAAAAQACwBPAAEAAAAAAAUAIABaAAEAAAAAAAYACwB6AAEAAAAAAAcAGgCFAAMAAQQJAAAAZACfAAMAAQQJAAEAFgEDAAMAAQQJAAIADgEZAAMAAQQJAAMAFgEnAAMAAQQJAAQAFgE9AAMAAQQJAAUAQAFTAAMAAQQJAAYAFgGTAAMAAQQJAAcANAGpQnkgSmFrb2IgRmlzY2hlciBha2EgUGl6emFEdWRlICpEaXN0cmlidXRlIGZyZWVseSpTY3JhdGNoRm9udFJlZ3VsYXJTY3JhdGNoRm9udFNjcmF0Y2hGb250aHR0cDovL2hqZW0uZ2V0Mm5ldC5kay9qZmlzY2hlci9TY3JhdGNoRm9udCoqKiBObyBUcmFkZU1hcmsgRm91bmQgKioqAEIAeQAgAEoAYQBrAG8AYgAgAEYAaQBzAGMAaABlAHIAIABhAGsAYQAgAFAAaQB6AHoAYQBEAHUAZABlACAAKgBEAGkAcwB0AHIAaQBiAHUAdABlACAAZgByAGUAZQBsAHkAKgBTAGMAcgBhAHQAYwBoAEYAbwBuAHQAUgBlAGcAdQBsAGEAcgBTAGMAcgBhAHQAYwBoAEYAbwBuAHQAUwBjAHIAYQB0AGMAaABGAG8AbgB0AGgAdAB0AHAAOgAvAC8AaABqAGUAbQAuAGcAZQB0ADIAbgBlAHQALgBkAGsALwBqAGYAaQBzAGMAaABlAHIALwBTAGMAcgBhAHQAYwBoAEYAbwBuAHQAKgAqACoAIABOAG8AIABUAHIAYQBkAGUATQBhAHIAawAgAEYAbwB1AG4AZAAgACoAKgAqAAAAAABUAGgAaQBzACAARgBvAG4AdAAgAFIAZQBuAGEAbQBlAGQAAAAAAAAA/AAAAxg="

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _cross(o, a, b) {
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}

function _upperTangent(pointset) {
    var lower = [];
    for (var l = 0; l < pointset.length; l++) {
        while (lower.length >= 2 && (_cross(lower[lower.length - 2], lower[lower.length - 1], pointset[l]) <= 0)) {
            lower.pop();
        }
        lower.push(pointset[l]);
    }
    lower.pop();
    return lower;
}

function _lowerTangent(pointset) {
    var reversed = pointset.reverse(),
        upper = [];
    for (var u = 0; u < reversed.length; u++) {
        while (upper.length >= 2 && (_cross(upper[upper.length - 2], upper[upper.length - 1], reversed[u]) <= 0)) {
            upper.pop();
        }
        upper.push(reversed[u]);
    }
    upper.pop();
    return upper;
}

// pointset has to be sorted by X
function convex(pointset) {
    var convex,
        upper = _upperTangent(pointset),
        lower = _lowerTangent(pointset);
    convex = lower.concat(upper);
    convex.push(pointset[0]);
    return convex;
}

module.exports = convex;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {

    toXy: function(pointset, format) {
        if (format === undefined) {
            return pointset.slice();
        }
        return pointset.map(function(pt) {
            /*jslint evil: true */
            var _getXY = new Function('pt', 'return [pt' + format[0] + ',' + 'pt' + format[1] + '];');
            return _getXY(pt);
        });
    },

    fromXy: function(pointset, format) {
        if (format === undefined) {
            return pointset.slice();
        }
        return pointset.map(function(pt) {
            /*jslint evil: true */
            var _getObj = new Function('pt', 'var o = {}; o' + format[0] + '= pt[0]; o' + format[1] + '= pt[1]; return o;');
            return _getObj(pt);
        });
    }

}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function Grid(points, cellSize) {
    this._cells = [];
    this._cellSize = cellSize;

    points.forEach(function(point) {
        var cellXY = this.point2CellXY(point),
            x = cellXY[0],
            y = cellXY[1];
        if (this._cells[x] === undefined) {
            this._cells[x] = [];
        }
        if (this._cells[x][y] === undefined) {
            this._cells[x][y] = [];
        }
        this._cells[x][y].push(point);
    }, this);
}

Grid.prototype = {
    cellPoints: function(x, y) { // (Number, Number) -> Array
        return (this._cells[x] !== undefined && this._cells[x][y] !== undefined) ? this._cells[x][y] : [];
    },

    rangePoints: function(bbox) { // (Array) -> Array
        var tlCellXY = this.point2CellXY([bbox[0], bbox[1]]),
            brCellXY = this.point2CellXY([bbox[2], bbox[3]]),
            points = [];

        for (var x = tlCellXY[0]; x <= brCellXY[0]; x++) {
            for (var y = tlCellXY[1]; y <= brCellXY[1]; y++) {
                points = points.concat(this.cellPoints(x, y));
            }
        }

        return points;
    },

    removePoint: function(point) { // (Array) -> Array
        var cellXY = this.point2CellXY(point),
            cell = this._cells[cellXY[0]][cellXY[1]],
            pointIdxInCell;

        for (var i = 0; i < cell.length; i++) {
            if (cell[i][0] === point[0] && cell[i][1] === point[1]) {
                pointIdxInCell = i;
                break;
            }
        }

        cell.splice(pointIdxInCell, 1);

        return cell;
    },

    point2CellXY: function(point) { // (Array) -> Array
        var x = parseInt(point[0] / this._cellSize),
            y = parseInt(point[1] / this._cellSize);
        return [x, y];
    },

    extendBbox: function(bbox, scaleFactor) { // (Array, Number) -> Array
        return [
            bbox[0] - (scaleFactor * this._cellSize),
            bbox[1] - (scaleFactor * this._cellSize),
            bbox[2] + (scaleFactor * this._cellSize),
            bbox[3] + (scaleFactor * this._cellSize)
        ];
    }
};

function grid(points, cellSize) {
    return new Grid(points, cellSize);
}

module.exports = grid;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 (c) 2014-2016, Andrii Heonia
 Hull.js, a JavaScript library for concave hull generation by set of points.
 https://github.com/AndriiHeonia/hull
*/



var intersect = __webpack_require__(24);
var grid = __webpack_require__(22);
var formatUtil = __webpack_require__(21);
var convexHull = __webpack_require__(20);

function _filterDuplicates(pointset) {
    return pointset.filter(function(el, idx, arr) {
        var prevEl = arr[idx - 1];
        return idx === 0 || !(prevEl[0] === el[0] && prevEl[1] === el[1]);
    });
}

function _sortByX(pointset) {
    return pointset.sort(function(a, b) {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
}

function _sqLength(a, b) {
    return Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2);
}

function _cos(o, a, b) {
    var aShifted = [a[0] - o[0], a[1] - o[1]],
        bShifted = [b[0] - o[0], b[1] - o[1]],
        sqALen = _sqLength(o, a),
        sqBLen = _sqLength(o, b),
        dot = aShifted[0] * bShifted[0] + aShifted[1] * bShifted[1];

    return dot / Math.sqrt(sqALen * sqBLen);
}

function _intersect(segment, pointset) {
    for (var i = 0; i < pointset.length - 1; i++) {
        var seg = [pointset[i], pointset[i + 1]];
        if (segment[0][0] === seg[0][0] && segment[0][1] === seg[0][1] ||
            segment[0][0] === seg[1][0] && segment[0][1] === seg[1][1]) {
            continue;
        }
        if (intersect(segment, seg)) {
            return true;
        }
    }
    return false;
}

function _occupiedArea(pointset) {
    var minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;

    for (var i = pointset.length - 1; i >= 0; i--) {
        if (pointset[i][0] < minX) {
            minX = pointset[i][0];
        }
        if (pointset[i][1] < minY) {
            minY = pointset[i][1];
        }
        if (pointset[i][0] > maxX) {
            maxX = pointset[i][0];
        }
        if (pointset[i][1] > maxY) {
            maxY = pointset[i][1];
        }
    }

    return [
        maxX - minX, // width
        maxY - minY  // height
    ];
}

function _bBoxAround(edge) {
    return [
        Math.min(edge[0][0], edge[1][0]), // left
        Math.min(edge[0][1], edge[1][1]), // top
        Math.max(edge[0][0], edge[1][0]), // right
        Math.max(edge[0][1], edge[1][1])  // bottom
    ];
}

function _midPoint(edge, innerPoints, convex) {
    var point = null,
        angle1Cos = MAX_CONCAVE_ANGLE_COS,
        angle2Cos = MAX_CONCAVE_ANGLE_COS,
        a1Cos, a2Cos;

    for (var i = 0; i < innerPoints.length; i++) {
        a1Cos = _cos(edge[0], edge[1], innerPoints[i]);
        a2Cos = _cos(edge[1], edge[0], innerPoints[i]);

        if (a1Cos > angle1Cos && a2Cos > angle2Cos &&
            !_intersect([edge[0], innerPoints[i]], convex) &&
            !_intersect([edge[1], innerPoints[i]], convex)) {

            angle1Cos = a1Cos;
            angle2Cos = a2Cos;
            point = innerPoints[i];
        }
    }

    return point;
}

function _concave(convex, maxSqEdgeLen, maxSearchArea, grid, edgeSkipList) {
    var edge,
        keyInSkipList,
        scaleFactor,
        midPoint,
        bBoxAround,
        bBoxWidth,
        bBoxHeight,
        midPointInserted = false;

    for (var i = 0; i < convex.length - 1; i++) {
        edge = [convex[i], convex[i + 1]];
        keyInSkipList = edge[0].join() + ',' + edge[1].join();

        if (_sqLength(edge[0], edge[1]) < maxSqEdgeLen ||
            edgeSkipList[keyInSkipList] === true) { continue; }

        scaleFactor = 0;
        bBoxAround = _bBoxAround(edge);
        do {
            bBoxAround = grid.extendBbox(bBoxAround, scaleFactor);
            bBoxWidth = bBoxAround[2] - bBoxAround[0];
            bBoxHeight = bBoxAround[3] - bBoxAround[1];

            midPoint = _midPoint(edge, grid.rangePoints(bBoxAround), convex);
            scaleFactor++;
        }  while (midPoint === null && (maxSearchArea[0] > bBoxWidth || maxSearchArea[1] > bBoxHeight));

        if (bBoxWidth >= maxSearchArea[0] && bBoxHeight >= maxSearchArea[1]) {
            edgeSkipList[keyInSkipList] = true;
        }

        if (midPoint !== null) {
            convex.splice(i + 1, 0, midPoint);
            grid.removePoint(midPoint);
            midPointInserted = true;
        }
    }

    if (midPointInserted) {
        return _concave(convex, maxSqEdgeLen, maxSearchArea, grid, edgeSkipList);
    }

    return convex;
}

function hull(pointset, concavity, format) {
    var convex,
        concave,
        innerPoints,
        occupiedArea,
        maxSearchArea,
        cellSize,
        points,
        maxEdgeLen = concavity || 20;

    if (pointset.length < 4) {
        return pointset.slice();
    }

    points = _filterDuplicates(_sortByX(formatUtil.toXy(pointset, format)));

    occupiedArea = _occupiedArea(points);
    maxSearchArea = [
        occupiedArea[0] * MAX_SEARCH_BBOX_SIZE_PERCENT,
        occupiedArea[1] * MAX_SEARCH_BBOX_SIZE_PERCENT
    ];

    convex = convexHull(points);
    innerPoints = points.filter(function(pt) {
        return convex.indexOf(pt) < 0;
    });

    cellSize = Math.ceil(1 / (points.length / (occupiedArea[0] * occupiedArea[1])));

    concave = _concave(
        convex, Math.pow(maxEdgeLen, 2),
        maxSearchArea, grid(innerPoints, cellSize), {});

    return formatUtil.fromXy(concave, format);
}

var MAX_CONCAVE_ANGLE_COS = Math.cos(90 / (180 / Math.PI)); // angle = 90 deg
var MAX_SEARCH_BBOX_SIZE_PERCENT = 0.6;

module.exports = hull;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function ccw(x1, y1, x2, y2, x3, y3) {
    var cw = ((y3 - y1) * (x2 - x1)) - ((y2 - y1) * (x3 - x1));
    return cw > 0 ? true : cw < 0 ? false : true; // colinear
}

function intersect(seg1, seg2) {
  var x1 = seg1[0][0], y1 = seg1[0][1],
      x2 = seg1[1][0], y2 = seg1[1][1],
      x3 = seg2[0][0], y3 = seg2[0][1],
      x4 = seg2[1][0], y4 = seg2[1][1];

    return ccw(x1, y1, x3, y3, x4, y4) !== ccw(x2, y2, x3, y3, x4, y4) && ccw(x1, y1, x2, y2, x3, y3) !== ccw(x1, y1, x2, y2, x4, y4);
}

module.exports = intersect;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nuniform float u_fudge;\n\n#ifdef DRAW_MODE_silhouette\nuniform vec4 u_silhouetteColor;\n#else // DRAW_MODE_silhouette\n# ifdef ENABLE_color\nuniform float u_color;\n# endif // ENABLE_color\n# ifdef ENABLE_brightness\nuniform float u_brightness;\n# endif // ENABLE_brightness\n#endif // DRAW_MODE_silhouette\n\n#ifdef DRAW_MODE_colorMask\nuniform vec3 u_colorMask;\nuniform float u_colorMaskTolerance;\n#endif // DRAW_MODE_colorMask\n\n#ifdef ENABLE_fisheye\nuniform float u_fisheye;\n#endif // ENABLE_fisheye\n#ifdef ENABLE_whirl\nuniform float u_whirl;\n#endif // ENABLE_whirl\n#ifdef ENABLE_pixelate\nuniform float u_pixelate;\nuniform vec2 u_skinSize;\n#endif // ENABLE_pixelate\n#ifdef ENABLE_mosaic\nuniform float u_mosaic;\n#endif // ENABLE_mosaic\n#ifdef ENABLE_ghost\nuniform float u_ghost;\n#endif // ENABLE_ghost\n\nuniform sampler2D u_skin;\n\nvarying vec2 v_texCoord;\n\n#if !defined(DRAW_MODE_silhouette) && (defined(ENABLE_color) || defined(ENABLE_brightness))\n// Branchless color conversions based on code from:\n// http://www.chilliant.com/rgb2hsv.html by Ian Taylor\n// Based in part on work by Sam Hocevar and Emil Persson\n\nconst float kEpsilon = 1e-6;\n\nvec3 convertRGB2HCV(vec3 rgb)\n{\n\tvec4 p = (rgb.g < rgb.b) ? vec4(rgb.bg, -1, 2.0/3.0) : vec4(rgb.gb, 0, -1.0/3.0);\n\tvec4 q = (rgb.r < p.x) ? vec4(p.xyw, rgb.r) : vec4(rgb.r, p.yzx);\n\tfloat c = q.x - min(q.w, q.y);\n\tfloat h = abs((q.w - q.y) / (6.0 * c + kEpsilon) + q.z);\n\treturn vec3(h, c, q.x);\n}\n\nvec3 convertRGB2HSL(vec3 rgb)\n{\n\tvec3 hcv = convertRGB2HCV(rgb);\n\tfloat l = hcv.z - hcv.y * 0.5;\n\tfloat s = hcv.y / (1.0 - abs(l * 2.0 - 1.0) + kEpsilon);\n\treturn vec3(hcv.x, s, l);\n}\n\nvec3 convertHue2RGB(float hue)\n{\n\tfloat r = abs(hue * 6.0 - 3.0) - 1.0;\n\tfloat g = 2.0 - abs(hue * 6.0 - 2.0);\n\tfloat b = 2.0 - abs(hue * 6.0 - 4.0);\n\treturn clamp(vec3(r, g, b), 0.0, 1.0);\n}\n\nvec3 convertHSL2RGB(vec3 hsl)\n{\n\tvec3 rgb = convertHue2RGB(hsl.x);\n\tfloat c = (1.0 - abs(2.0 * hsl.z - 1.0)) * hsl.y;\n\treturn (rgb - 0.5) * c + hsl.z;\n}\n#endif // !defined(DRAW_MODE_silhouette) && (defined(ENABLE_color) || defined(ENABLE_brightness))\n\nconst vec2 kCenter = vec2(0.5, 0.5);\n\nvoid main()\n{\n\tvec2 texcoord0 = v_texCoord;\n\n\t#ifdef ENABLE_mosaic\n\ttexcoord0 = fract(u_mosaic * texcoord0);\n\t#endif // ENABLE_mosaic\n\n\t#ifdef ENABLE_pixelate\n\t{\n\t\t// TODO: clean up \"pixel\" edges\n\t\tvec2 pixelTexelSize = u_skinSize / u_pixelate;\n\t\ttexcoord0 = (floor(texcoord0 * pixelTexelSize) + kCenter) / pixelTexelSize;\n\t}\n\t#endif // ENABLE_pixelate\n\n\t#ifdef ENABLE_whirl\n\t{\n\t\tconst float kRadius = 0.5;\n\t\tvec2 offset = texcoord0 - kCenter;\n\t\tfloat offsetMagnitude = length(offset);\n\t\tfloat whirlFactor = 1.0 - (offsetMagnitude / kRadius);\n\t\tfloat whirlActual = u_whirl * whirlFactor * whirlFactor;\n\t\tfloat sinWhirl = sin(whirlActual);\n\t\tfloat cosWhirl = cos(whirlActual);\n\t\tmat2 rotationMatrix = mat2(\n\t\t\tcosWhirl, -sinWhirl,\n\t\t\tsinWhirl, cosWhirl\n\t\t);\n\n\t\t// TODO: tweak this algorithm such that texture coordinates don't depend on conditionals.\n\t\t// see: https://www.opengl.org/wiki/Sampler_%28GLSL%29#Non-uniform_flow_control\n\t\tif (offsetMagnitude <= kRadius)\n\t\t{\n\t\t\ttexcoord0 = rotationMatrix * offset + kCenter;\n\t\t}\n\t}\n\t#endif // ENABLE_whirl\n\n\t#ifdef ENABLE_fisheye\n\t{\n\t\tvec2 vec = (texcoord0 - kCenter) / kCenter;\n\t\tfloat r = pow(length(vec), u_fisheye);\n\t\tfloat angle = atan(vec.y, vec.x);\n\t\t// TODO: tweak this algorithm such that texture coordinates don't depend on conditionals.\n\t\t// see: https://www.opengl.org/wiki/Sampler_%28GLSL%29#Non-uniform_flow_control\n\t\tif (r <= 1.0)\n\t\t{\n\t\t\ttexcoord0 = kCenter + r * vec2(cos(angle), sin(angle)) * kCenter;\n\t\t}\n\t}\n\t#endif // ENABLE_fisheye\n\n\tgl_FragColor = texture2D(u_skin, texcoord0);\n\n\n\tif (gl_FragColor.a == 0.0)\n\t{\n\t\tdiscard;\n\t}\n\n    #ifdef ENABLE_ghost\n    gl_FragColor.a *= u_ghost;\n    #endif // ENABLE_ghost\n\n\t#ifdef DRAW_MODE_silhouette\n\t// switch to u_silhouetteColor only AFTER the alpha test\n\tgl_FragColor = u_silhouetteColor;\n\t#else // DRAW_MODE_silhouette\n\n\t#if defined(ENABLE_color) || defined(ENABLE_brightness)\n\t{\n\t\tvec3 hsl = convertRGB2HSL(gl_FragColor.xyz);\n\n\t\t#ifdef ENABLE_color\n\t\t{\n\t\t\t// this code forces grayscale values to be slightly saturated\n\t\t\t// so that some slight change of hue will be visible\n\t\t\tconst float minLightness = 0.11 / 2.0;\n\t\t\tconst float minSaturation = 0.09;\n\t\t\tif (hsl.z < minLightness) hsl = vec3(0.0, 1.0, minLightness);\n\t\t\telse if (hsl.y < minSaturation) hsl = vec3(0.0, minSaturation, hsl.z);\n\n\t\t\thsl.x = mod(hsl.x + u_color, 1.0);\n\t\t\tif (hsl.x < 0.0) hsl.x += 1.0;\n\t\t}\n\t\t#endif // ENABLE_color\n\n\t\t#ifdef ENABLE_brightness\n\t\thsl.z = clamp(hsl.z + u_brightness, 0.0, 1.0);\n\t\t#endif // ENABLE_brightness\n\n\t\tgl_FragColor.rgb = convertHSL2RGB(hsl);\n\t}\n\t#endif // defined(ENABLE_color) || defined(ENABLE_brightness)\n\n\t#ifdef DRAW_MODE_colorMask\n\tvec3 maskDistance = abs(gl_FragColor.rgb - u_colorMask);\n\tvec3 colorMaskTolerance = vec3(u_colorMaskTolerance, u_colorMaskTolerance, u_colorMaskTolerance);\n\tif (any(greaterThan(maskDistance, colorMaskTolerance)))\n\t{\n\t\tdiscard;\n\t}\n\t#endif // DRAW_MODE_colorMask\n\n\t// WebGL defaults to premultiplied alpha\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n\t#endif // DRAW_MODE_silhouette\n}\n"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "uniform mat4 u_projectionMatrix;\nuniform mat4 u_modelMatrix;\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n    gl_Position = u_projectionMatrix * u_modelMatrix * vec4(a_position, 0, 1);\n    v_texCoord = a_texCoord;\n}\n"

/***/ })
/******/ ]);
//# sourceMappingURL=scratch-render.js.map
