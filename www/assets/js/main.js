(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/coffee/main":[function(require,module,exports){
var ease, elem, init, lib, onAnimComplete, ready;

lib = require('browser.lib');

ready = lib.dom.ready;

elem = lib.dom.element;

ease = lib.util.ease;

init = (function(_this) {
  return function() {
    _this.h = elem('h1');
    return _this.h.animate().to({
      'translate': [200, 500],
      'background-color': 'rgb(123,200,44)'
    }, 2000, ease.sine.inOutSine).onComplete(onAnimComplete);
  };
})(this);

onAnimComplete = (function(_this) {
  return function() {
    _this.h.setStyle('translate', [0, 0]);
    return _this.h.clearStyle();
  };
})(this);

ready(init);



},{"browser.lib":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/index.js":[function(require,module,exports){
exports.dom = {
	classlist: require('dom.classlist'),
	style: require('dom.style'),
	element: require('dom.element'),
	ready: require('dom.ready'),
	select: require('dom.select'),
	text: require('dom.text')
};

exports.env = {
	capabilities: require('env.capabilities'),
	platform: require('env.platform'),
	viewport: require('env.viewport')
};

exports.events = {
	event: require('events.event')
};

exports.util = {
	polyfill: require('util.polyfill'),
	animate: require('util.animate'),
	colour: require('util.colour'),
	ease: require('util.ease'),
	log: require('util.log'),
	number: require('util.number'),
	identify: require('util.identify'),
	object: require('util.object'),
	svg: require('util.svg')
};

},{"dom.classlist":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.classlist/index.js","dom.element":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/index.js","dom.ready":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.ready/index.js","dom.select":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.select/index.js","dom.style":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.style/index.js","dom.text":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.text/index.js","env.capabilities":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/env.capabilities/index.js","env.platform":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/env.platform/index.js","env.viewport":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/env.viewport/index.js","events.event":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/events.event/index.js","util.animate":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/index.js","util.colour":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.colour/index.js","util.ease":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/index.js","util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.identify/index.js","util.log":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.log/index.js","util.number":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.number/index.js","util.object":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.object/index.js","util.polyfill":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.polyfill/index.js","util.svg":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.svg/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.classlist/index.js":[function(require,module,exports){
require('util.polyfill');

var RE_TRIM = /^\s+|\s+$/g;

/**
 * Check if 'element' has class 'clas'
 * @param {Element} element
 * @param {String} clas
 * @return {Boolean}
 */
exports.hasClass = function(element, clas) {
	if (element.classList != null) {
		return element.classList.contains(clas);
	} else {
		var classes = element.className.replace(RE_TRIM, '').split(' ');
		return classes.indexOf(clas) >= 0;
	}
};

/**
 * Check if 'element' has a class matching 'pattern'
 * @param {Element} element
 * @param {String} pattern
 * @return {String}
 */
exports.matchClass = function(element, pattern) {
	var classes = element.className.replace(RE_TRIM, '').split(' ')
		, clas;
	for (var i = 0, n = classes.length; i < n; i++) {
		clas = classes[i];
		if (clas.indexOf(pattern) !== -1) {
			return clas;
		}
	}
	return '';
};

/**
 * Add class 'clas' to 'element'
 * @param {Element} element
 * @param {String} clas
 */
exports.addClass = function(element, clas) {
	if (element.classList != null) {
		element.classList.add(clas);
	} else {
		element.className += ' ' + clas;
	}
};

/**
 * Remove class 'clas' from 'element'
 * @param {Element} element
 * @param {String} clas
 */
exports.removeClass = function(element, clas) {
	var c, classes;
	if (clas) {
		if (element.classList != null) {
			element.classList.remove(clas);
		} else {
			var classes = element.className.replace(RE_TRIM, '').split(' ')
				, results = [];
			for (var i = 0, n = classes.length; i < n; i++) {
				if (classes[i] !== clas) results.push(classes[i]);
			}
			element.className = results.join(' ');
		}
	}
};

/**
 * Toggle class 'clas' on 'element'
 * @param {Element} element
 * @param {String} clas
 */
exports.toggleClass = function(element, clas) {
	if (exports.hasClass(element, clas)) {
		exports.removeClass(element, clas);
	} else {
		exports.addClass(element, clas);
	}
};

/**
 * Replace class 'clasOld' with 'clasNew' on 'element'
 * @param {Element} element
 * @param {String} clas
 */
exports.replaceClass = function(element, clasOld, clasNew) {
	if (clasOld) {
		if (clasNew) {
			element.className = element.className.replace(clasOld, clasNew);
		} else {
			exports.removeClass(element, clasOld);
		}
	} else if (clasNew) {
		exports.addClass(element, clasNew);
	}
};

/**
 * Add class 'clas' to 'element', and remove after 'duration' milliseconds
 * @param {Element} element
 * @param {String} clas
 * @param {Number} duration
 */
exports.addTemporaryClass = function(element, clas, duration) {
	exports.addClass(element, clas);
	setTimeout((function() {
		exports.removeClass(element, clas);
	}), duration);
};

},{"util.polyfill":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.classlist/node_modules/util.polyfill/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.classlist/node_modules/util.polyfill/index.js":[function(require,module,exports){
/**
 * Array.indexOf()
 */
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(item) {
		for (var i = i = 0, n = this.length; i < n; i++) {
			if (item === this[i]) {
				return i;
			}
		}
		return -1;
	};
}

/**
 * window.requestAnimationFrame()
 */
var vendors = ['ms', 'moz', 'webkit', 'o']
	, lastFrameTime = null;

for (var i = 0, n = vendors.length; i < n; i++) {
	vendor = vendors[i];
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = window[vendor + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendor + 'CancelAnimationFrame'] || window[vendor + 'CancelRequestAnimationFrame'];
	}
}

if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = function(callback, element) {
		var currFrameTime = +(new Date())
			, id, interval, lastTime;
		if (lastFrameTime == null) {
			lastFrameTime = currFrameTime;
		}
		interval = Math.max(0, 16 - (currFrameTime - lastFrameTime));
		id = window.setTimeout((function() {
			// Call with elapsed frame time
			callback(currFrameTime + interval);
		}), interval);
		lastTime = currFrameTime + interval;
		return id;
	};
}

if (!window.cancelAnimationFrame) {
	window.cancelAnimationFrame = function(id) {
		clearTimeout(id);
	};
}


/**
 * Function.bind()
 * --https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind--
 */
if (!Function.prototype.bind) {
	Function.prototype.bind = function(context) {
		if (typeof this !== 'function') {
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}
		var args = Array.prototype.slice.call(arguments, 1)
			, toBind = this
			, noop = function() {}
			, bound = function() {
				return toBind.apply(this instanceof noop ? this : context || window,
					args.concat(Array.prototype.slice.call(arguments)));
			};
		noop.prototype = this.prototype;
		bound.prototype = new noop();
		return bound;
	}
}

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/index.js":[function(require,module,exports){
var classList = require('dom.classlist')
	, select = require('dom.select')
	, text = require('dom.text')
	, css = require('dom.style')
	, event = require('events.event')
	, identify = require('util.identify')
	, numberUtils = require('util.number')
	, animate = require('util.animate')
	, win = window
	, doc = win.document
	, elements = []
	, id = 0;

/**
 * Element instance factory
 * @param {DOMElement} domElement
 * @returns {Element}
 */
function elementFactory(domElement) {
	var el, item;
	// Retrieve from cache
	for (var i = 0, n = elements.length; i < n; i++) {
		item = elements[i];
		if (item.domElement === domElement) {
			return item;
		}
	}
	el = new Element(domElement);
	elements.push(el);
	return el;
};

/**
 * Create new Element instances based on 'selector'
 * @param {String} selector
 * @param {Object} context
 * @param {String} tag
 * @returns {Array}
 */
module.exports = function(selector, context, tag) {
	var element, results;
	if (context == null) context = doc;
	// Retrieve dom element(s) if passed a selector string
	if (identify.isString(selector)) {
		selector = select(selector, context, tag);
	// Error if not passed dom element or array
	} else if (!(identify.isElement(selector) || identify.isArray(selector))) {
		return null;
	}

	// Return array of Elements
	if (identify.isArray(selector)) {
		results = [];
		for (var i = 0, n = selector.length; i < n; i++) {
			element = selector[i];
			if (identify.isElement(element)) {
				results.push(elementFactory(element));
			}
		}
		return results;
	// Return a single Element if passed a DOM Element
	} else if (selector != null) {
		return elementFactory(selector);
	} else {
		return null;
	}
};

/**
 * Element class
 * @param {DOMElement} domElement
 */
function Element(domElement) {
	this.domElement = domElement;
	this.anim = null;
	this.id = this.domElement.id;
	this._id = id++;
	this.tagName = this.domElement.tagName;
}

/**
 * Retrieve width
 * @returns {Number}
 */
Element.prototype.getWidth = function() {
	return this.domElement.offsetWidth;
};

/**
 * Set width
 * @param {Number} value
 */
Element.prototype.setWidth = function(value) {
	if (value != null) {
		this.setStyle('width', value);
		if (this.domElement.width != null) {
			this.domElement.width = value;
		}
	}
	// Chain
	return this;
};

/**
 * Retrieve height
 * @returns {Number}
 */
Element.prototype.getHeight = function() {
	return this.domElement.offsetHeight;
};

/**
 * Set height
 * @param {Number} value
 */
Element.prototype.setHeight = function(value) {
	if (value != null) {
		this.setStyle('height', value);
		if (this.domElement.height != null) {
			this.domElement.height = value;
		}
	}
	return this;
};

/**
 * Retrieve opacity
 * @returns {Number}
 */
Element.prototype.getOpacity = function() {
	return this.getStyle('opacity');
};

/**
 * Set opacity
 * @param {Number} value
 */
Element.prototype.setOpacity = function(value) {
	if (value != null) {
		this.setStyle('opacity', numberUtils.limit(parseFloat(value), 0, 1));
	}
	return this;
};

/**
 * Retrieve offset from parent
 * @returns {Object}
 */
Element.prototype.getOffset = function() {
	return {
		top: this.domElement.offsetTop,
		left: this.domElement.offsetLeft
	};
};

/**
 * Retrieve global position
 * @returns {Object}
 */
Element.prototype.getPosition = function() {
	var top = this.domElement.offsetTop
		, left = this.domElement.offsetLeft
		, el;
	if ((el = this.domElement).offsetParent) {
		while ((el = el.offsetParent)) {
			top += el.offsetTop;
			left += el.offsetLeft;
		}
	}
	return {
		top: top,
		left: left
	};
};

/**
 * @see classList.hasClass
 */
Element.prototype.hasClass = function(clas) {
	return classList.hasClass(this.domElement, clas);
};

/**
 * @see classList.matchClass
 */
Element.prototype.matchClass = function(clas) {
	return classList.matchClass(this.domElement, clas);
};

/**
 * @see classList.addClass
 */
Element.prototype.addClass = function(clas) {
	classList.addClass(this.domElement, clas);
	return this;
};

/**
 * @see classList.removeClass
 */
Element.prototype.removeClass = function(clas) {
	classList.removeClass(this.domElement, clas);
	return this;
};

/**
 * @see classList.toggleClass
 */
Element.prototype.toggleClass = function(clas) {
	classList.toggleClass(this.domElement, clas);
	return this;
};

/**
 * @see classList.replaceClass
 */
Element.prototype.replaceClass = function(clasOld, clasNew) {
	classList.replaceClass(this.domElement, clasOld, clasNew);
	return this;
};

/**
 * @see classList.addTemporaryClass
 */
Element.prototype.addTemporaryClass = function(clas, duration) {
	classList.addTemporaryClass(this.domElement, clas, duration);
	return this;
};

/**
 * @see text.getText
 */
Element.prototype.getText = function() {
	return text.getText(this.domElement);
};

/**
 * @see text.setText
 */
Element.prototype.setText = function(value) {
	text.setText(this.domElement, value);
	return this;
};

/**
 * Retrieve innerHTML
 * @returns {String}
 */
Element.prototype.getHTML = function() {
	return this.domElement.innerHTML;
};

/**
 * Set innerHTML
 * @param {String} value
 */
Element.prototype.setHTML = function(value) {
	this.domElement.innerHTML = value;
	return this;
};

/**
 * @see css.getStyle
 */
Element.prototype.getStyle = function(property) {
	return css.getStyle(this.domElement, property);
};

/**
 * @see css.getNumericStyle
 */
Element.prototype.getNumericStyle = function(property) {
	return css.getNumericStyle(this.domElement, property);
};

/**
 * @see css.setStyle
 */
Element.prototype.setStyle = function(property, value) {
	css.setStyle(this.domElement, property, value);
	return this;
};

/**
 * @see css.clearStyle
 */
Element.prototype.clearStyle = function(property) {
	css.clearStyle(this.domElement, property);
	return this;
};

/**
 * @see event.on
 */
Element.prototype.on = function(type, callback, data) {
	event.on(this.domElement, type, callback, data);
	return this;
};

/**
 * @see event.off
 */
Element.prototype.off = function(type, callback) {
	event.off(this.domElement, type, callback);
	return this;
};

/**
 * @see event.one
 */
Element.prototype.one = function(type, callback, data) {
	event.one(this.domElement, type, callback, data);
	return this;
};

/**
 * @see animate
 */
Element.prototype.animate = function() {
	if (!this.anim) this.anim = animate(this.domElement, true);
	return this.anim
};

/**
 * Retrieve attribute
 * @param {String} type
 * @returns {String}
 */
Element.prototype.getAttribute = function(type) {
	return this.domElement.getAttribute(type);
};

/**
 * Set attribute
 * @param {String} or {Object} type
 * @param {String} value
 */
Element.prototype.setAttribute = function(type, value) {
	if(identify.isObject(type)){
		for(var key in type) {
    	this.domElement.setAttribute(key, type[key]);
  	}
	}else if(identify.isString(type)){
		this.domElement.setAttribute(type, value);
	}
	return this;
};

/**
 * Retrieve child elements matching 'selector'
 * @param {String} selector
 * @returns {Array}
 */
Element.prototype.find = function(selector) {
	return module.exports(selector, this);
};

/**
 * Retrieve parent element
 * @param {Boolean} asElement
 * @returns {DOMElement or Element}
 */
Element.prototype.parent = function(asElement) {
	if (asElement == null) asElement = true;
	return asElement ? new Element(this.domElement.parentNode) : this.domElement.parentNode;
};

/**
 * Retrieve children
 * @param {Boolean} asElement
 * @returns {Array}
 */
Element.prototype.children = function(asElement) {
	var nodes = this.domElement.childNodes
		, results = []
		, child;
	if (asElement == null) asElement = true;
	for (var i = 0, n = nodes.length; i < n; i++) {
		child = nodes[i];
		if (child && child.nodeType === 1) {
			results.push(asElement ? new Element(child) : child);
		}
	}
	return results;
};

/**
 * Retrieve first child
 * @param {Boolean} asElement
 * @returns {DOMElement or Element}
 */
Element.prototype.firstChild = function(asElement) {
	if (asElement == null) asElement = true;
	return asElement ? new Element(this.domElement.firstChild) : this.domElement.firstChild;
};

/**
 * Retrieve last child
 * @param {Boolean} asElement
 * @returns {DOMElement or Element}
 */
Element.prototype.lastChild = function(asElement) {
	if (asElement == null) asElement = true;
	return asElement ? new Element(this.domElement.lastChild) : this.domElement.lastChild;
};

/**
 * Append child
 * @param {DOMElement or Element} element
 */
Element.prototype.appendChild = function(element) {
	return this.domElement.appendChild(element.domElement || element);
};

/**
 * Remove child
 * @param {DOMElement or Element} element
 */
Element.prototype.removeChild = function(element) {
	return this.domElement.removeChild(element.domElement || element);
};

/**
 * Replace child
 * @param {DOMElement or Element} newElement
 * @param {DOMElement or Element} oldElement
 */
Element.prototype.replaceChild = function(newElement, oldElement) {
	this.domElement.replaceChild(newElement.domElement || newElement, oldElement.domElement || oldElement);
	return oldElement;
};

/**
 * Remove from parent
 */
Element.prototype.remove = function() {
	return this.parent().removeChild(this.domElement);
};

/**
 * Insert 'element' before 'referenceElement'
 * @param {DOMElement or Element} element
 * @param {DOMElement or Element} referenceElement
 */
Element.prototype.insertBefore = function(element, referenceElement) {
	return this.domElement.insertBefore(element.domElement || element, referenceElement.domElement || referenceElement);
};

/**
 * Clone element
 * @param {Boolean} deep
 * @param {Boolean} asElement
 */
Element.prototype.clone = function(deep, asElement) {
	if (asElement == null) asElement = true;
	return asElement ? new Element(this.domElement.clone(deep)) : this.domElement.clone(deep);
};

/**
 * Insert HTML before the element itself
 * @param {String} value
 */
Element.prototype.before = function(value) {
	return this.domElement.insertAdjacentHTML('beforebegin', value);
};

/**
 * Insert HTML after the element itself
 * @param {String} value
 */
Element.prototype.after = function(value) {
	return this.domElement.insertAdjacentHTML('afterend', value);
};

/**
 * Insert HTML just inside the element, before its first child
 * @param {String} value
 */
Element.prototype.prepend = function(value) {
	return this.domElement.insertAdjacentHTML('afterbegin', value);
};

/**
 * Insert HTML just inside the element, after its last child
 * @param {String} value
 */
Element.prototype.append = function(value) {
	return this.domElement.insertAdjacentHTML('beforeend', value);
};

/**
 * Wrap 'element'
 * @param {DOMElement or Element} element
 */
Element.prototype.wrap = function(element) {
  if (!element.length) element = [element];
  for (var i = element.length - 1; i >= 0; i--) {
    var child = (i > 0) ? this.domElement.cloneNode(true) : this.domElement;
    var el = element[i];
    var parent  = (el.domElement) ? el.domElement.parentNode : el.parentNode
    var sibling = (el.domElement) ? el.domElement.nextSibling : el.nextSibling

    child.appendChild(el.domElement || el);

    if(sibling) {
    	parent.insertBefore(child, sibling);
    }else{
    	parent.appendChild(child);
    }
  }
};

/**
 * Wrap all 'elements'
 * @param {DOMElement or Element} element
 */
Element.prototype.wrapAll = function(element) {
  var el = element.length ? element[0] : element;
  var parent  = (el.domElement) ? el.domElement.parentNode : el.parentNode
  var sibling = (el.domElement) ? el.domElement.nextSibling : el.nextSibling
  this.appendChild(el.domElement || el);

  while (element.length) {
  	this.domElement.appendChild(elms[0]);
  }

  if(sibling) {
  	parent.insertBefore(this.domElement, sibling);
  }else{
  	parent.appendChild(this.domElement);
  }
};

/**
 * Destroy element and optionally remove from parent
 * @param {Boolean} remove
 */
Element.prototype.destroy = function(remove) {
	if (remove == null) remove = false;
	event.offAll(this);
	// Setting keep to false will trigger destroy automatically
	if (this.anim != null) {
		if (this.anim.isRunning) {
			this.anim.keep = false;
		} else {
			this.anim.destroy();
		}
		this.anim = null;
	}
	if (remove) {
		this.domElement.parentNode.removeChild(this.domElement);
	}
	// Remove from DOM
	this.domElement = null;
	// Remove from cache
	for (var i = 0, n = elements.length; i < n; i++) {
		if (elements[idx] === this) {
			elements.splice(i, 1);
		}
		break;
	}
};

},{"dom.classlist":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.classlist/index.js","dom.select":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/index.js","dom.style":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.style/index.js","dom.text":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.text/index.js","events.event":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/events.event/index.js","util.animate":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/index.js","util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.identify/index.js","util.number":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.number/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.classlist/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.classlist/index.js"][0].apply(exports,arguments)
},{"util.polyfill":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.classlist/node_modules/util.polyfill/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.classlist/node_modules/util.polyfill/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.classlist/node_modules/util.polyfill/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/index.js":[function(require,module,exports){
// TODO: add support for live lists?
// TODO: add support for multiple selectors?

var id = require('util.identify')
	, win = window
	, doc = win.document;

/**
 * getElementsByClassName() polyfill
 * @param {String} clas
 * @param {String} tag
 * @returns {Array}
 */
if (!doc.getElementsByClassName) {
	doc.getElementsByClassName = function(clas, tag) {
		var elements = doc.getElementsByTagName(tag || '*')
			, re = new RegExp("(?:^|\\s)" + clas + "(?:\\s|$)")
			, results = []
			, element;

		// Abort if no matches
		if (!elements.length) { return false; }
		for (var i = 0, n = elements.length; i < n; i++) {
			element = elements[i];
			if (element.className.match(re)) {
				results.push(element);
			}
		}
		return results;
	}
}

/**
 * Retrieve all elements matching 'selector'
 * @params {String} selector
 * @params {Element} context
 * @params {String} tag
 * @returns {Array}
 */
module.exports = function(selector, context, tag) {
	var elements, item, sel;
	if (!id.isElement(context)) {
		// Retrieve domElement if passed Element instance, otherwise document
		context = (context != null ? context.domElement : null) || doc;
	}

	if (context.querySelectorAll != null) {
		elements = context.querySelectorAll(selector);
	} else {
		switch (selector.charAt(0)) {
			// ID
			case '#':
				elements = doc.getElementById(selector.slice(1));
				break;
			// Class
			case '.':
				elements = doc.getElementsByClassName(selector.slice(1), tag);
				break;
			default:
				// Tag with class (eg. dev.foo)
				if (selector.indexOf('.') !== -1) {
					sel = selector.split('.');
					elements = doc.getElementsByClassName(sel[1], sel[0]);
				// Tag
				} else {
					elements = context.getElementsByTagName(selector);
				}
		}
	}

	if (elements.length === 1) {
		return elements[0]
	}else if (elements.length > 1) {
		var results = [];
		// Convert NodeList to Array
		for (var i = 0, n = elements.length; i < n; i++) {
			results.push(elements[i]);
		}
		return results;
	} else {
		return null;
	}
};

},{"util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js":[function(require,module,exports){
/**
 * Test if 'obj' is an Array
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isArray = function(obj) {
	if (Array.isArray) {
		return Array.isArray(obj);
	} else {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}
};

/**
 * Test if 'obj' is an Object
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isObject = function(obj) {
	return obj === Object(obj) && obj.nodeType == undefined;
};

/**
 * Test if 'obj' is a String
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isString = function(obj) {
	return Object.prototype.toString.call(obj) === '[object String]';
};

/**
 * Test if 'obj' is a Number
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isNumber = function(obj) {
	return Object.prototype.toString.call(obj) === '[object Number]';
};

/**
 * Test if 'obj' is a Function
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isFunction = function(obj) {
	return Object.prototype.toString.call(obj) === '[object Function]';
};

/**
 * Test if 'obj' is NaN
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isNaN = function(obj) {
	return obj !== obj;
};

/**
 * Test if 'obj' is an Element
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isElement = function(obj) {
	return !!((obj != null ? obj.nodeType : null) === 1);
};

/**
 * Test if 'obj' is a Boolean
 * -- from underscore.js --
 * @param {Object} obj
 * @returns {Boolean}
 */
exports.isBoolean = function(obj) {
	return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.style/index.js":[function(require,module,exports){
// TODO: handle setting special shortcut transform properties with arrays (translate, scale)?
// TODO: bulk transform properties

var identify = require('util.identify')
	, win = window
	, doc = window.document
	, el = doc.createElement('div')

		// Hash of unit values
	, numeric = {
			'top': 'px',
			'bottom': 'px',
			'left': 'px',
			'right': 'px',
			'width': 'px',
			'height': 'px',
			'margin-top': 'px',
			'margin-bottom': 'px',
			'margin-left': 'px',
			'margin-right': 'px',
			'padding-top': 'px',
			'padding-bottom': 'px',
			'padding-left': 'px',
			'padding-right': 'px',
			'border-bottom-left-radius': 'px',
			'border-bottom-right-radius': 'px',
			'border-top-left-radius': 'px',
			'border-top-right-radius': 'px',
 			'transition-duration': 'ms',
 			'opacity': '',
			'font-size': 'px',
			'translateX': 'px',
			'translateY': 'px',
			'translateZ': 'px',
			'scaleX': '',
			'scaleY': '',
			'scaleZ': '',
			'rotate': 'deg',
			'rotateX': 'deg',
			'rotateY': 'deg',
			'rotateZ': 'deg',
			'skewX': 'deg',
			'skewY': 'deg'
		}
	, colour = {
			'background-color': true,
			'color': true,
			'border-color': true
		}
		// Hash of shorthand properties
	, shorthand = {
			'border-radius': ['border-bottom-left-radius', 'border-bottom-right-radius', 'border-top-left-radius', 'border-top-right-radius'],
			'border-color': ['border-bottom-color', 'border-left-color', 'border-top-color', 'border-right-color'],
			'margin': ['margin-top', 'margin-right', 'margin-left', 'margin-bottom'],
			'padding': ['padding-top', 'padding-right', 'padding-left', 'padding-bottom']
		}
		// Hash of transform properties
	, transform = {
			'transform': true,
			'translate': true,
			'translateX': true,
			'translateY': true,
			'translate3d': true,
			'translateZ': true,
			'rotate': true,
			'rotate3d': true,
			'rotateX': true,
			'rotateY': true,
			'rotateZ': true,
			'scale': true,
			'scaleX': true,
			'scaleY': true,
			'scale3d': true,
			'scaleZ': true,
			'skew': true,
			'skewX': true,
			'skewY': true,
			'perspective': true,
			'matrix': true,
			'matrix3d': true
		}

	, platformStyles = {}
	, platformPrefix = ''

	, RE_UNITS = /(px|%|em|ms|s|deg)$/
	, RE_IE_OPACITY = /opacity=(\d+)/i
	, RE_RGB = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/
	, RE_MATRIX = /^matrix(?:3d)?\(([^\)]+)/
	, VENDOR_PREFIXES = ['-webkit-', '-moz-', '-ms-', '-o-']
	, MATRIX_IDENTITY = [[1, 0, 0, 1, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]]
	, MATRIX_PROPERTY_INDEX = {
		translateX: [4,12],
		translateY: [5,13],
		translateZ: [null,14],
		scaleX: [0,0],
		scaleY: [3,5],
		scaleZ: [null,10],
		rotate: [0,0],
		rotateX: [null,5],
		rotateY: [null,0],
		rotateZ: [null,0],
		skewY: [1,1],
		skewX: [2,2]
	};

// Store all possible styles this platform supports
var s = current(doc.documentElement)
	, add = function (prop) {
			platformStyles[prop] = true;
			// Grab the prefix style
			if (!platformPrefix && prop.charAt(0) == '-') {
				platformPrefix = /^-\w+-/.exec(prop)[0];
			}
		};

if (s.length) {
	for (var i = 0, n = s.length; i < n; i++) {
		add(s[i]);
	}
} else {
	for (var prop in s) {
		add(prop);
	}
}

// Store opacity property name (normalize IE opacity/filter)
var opacity = !platformStyles['opacity'] && platformStyles['filter'] ? 'filter' : 'opacity';

// API
exports.isSupported = isSupported;
exports.getPrefixed = getPrefixed;
exports.getShorthand = getShorthand;
exports.getAll = getAll;
exports.expandShorthand = expandShorthand;
exports.parseOpacity = parseOpacity;
exports.getOpacityValue = getOpacityValue;
exports.parseNumber = parseNumber;
exports.parseTransform = parseTransform;
exports.getStyle = getStyle;
exports.getNumericStyle = getNumericStyle;
exports.getDocumentStyle = getDocumentStyle;
exports.setStyle = setStyle;
exports.clearStyle = clearStyle;
exports.platformStyles = platformStyles;
exports.platformPrefix = platformPrefix;
// CSS3 feature tests (also forces cache inclusion)
exports.hasTransitions = isSupported('transition');
exports.hasTransforms = isSupported('transform');
exports.has3DTransforms = (function () {
	if (exports.hasTransforms) {
		var prop = camelCase(getPrefixed('transform'));
		el.style[prop] = 'translateZ(10px)';
		return el.style[prop] != '';
	}
	return false;
})();

/**
 * Determine if 'property' is supported on this platform
 * @returns {Boolean}
 */
function isSupported (property) {
	var props = [property, platformPrefix + property]
		, support = false
		, prop;

	for (var i = 0, n = props.length; i < n; i++) {
		prop = props[i];
		// Use cached
		if (exports.platformStyles[prop]) return true;
		if (typeof el.style[prop] === 'string'
			|| typeof el.style[camelCase(prop)] === 'string') {
				support = true;
				exports.platformStyles[prop] = true;
				break;
		}
	}

	return support;
}

/**
 * Retrieve the vendor prefixed version of the property
 * @param {String} property
 * @returns {String}
 */
function getPrefixed (property) {
	if (typeof property === 'string') {
		// Handle transform pseudo-properties
		if (transform[property]) {
			property = 'transform';
		}

		if (exports.platformStyles[property]) return property;

		if (isSupported(property)) {
			if (exports.platformStyles[platformPrefix + property]) {
				property = platformPrefix + property;
			}
		}
	}

	return property;
}

/**
 * Retrieve a proxy property to use for shorthand properties
 * @param {String} property
 * @returns {String}
 */
function getShorthand (property) {
	if (shorthand[property] != null) {
		return shorthand[property][0];
	} else {
		return property;
	}
}

/**
 * Retrieve all possible variations of the property
 * @param {String} property
 * @returns {Array}
 */
function getAll (property) {
	var all = [];

	// Handle transform pseudo-properties
	if (transform[property]) {
		property = 'transform';
	}

	all.push(property);
	// Handle shorthands
	if (shorthand[property]) {
		all = all.concat(shorthand[property]);
	}
	// Automatically add vendor prefix
	for (var i = 0, n = all.length; i < n; i++) {
		all.push(platformPrefix + all[i]);
	}

	return all;
}

/**
 * Expand shorthand properties
 * @param {String} property
 * @param {Object} value
 * @returns {Object|String}
 */
function expandShorthand (property, value) {
	if (shorthand[property] != null) {
		var props = {};
		for (var i = 0, n = shorthand[property].length; i < n; i++) {
			props[shorthand[property][i]] = value;
		}
		return props;
	} else {
		return property;
	}
}

/**
 * Parse current opacity value
 * @param {String} value
 * @returns {Number}
 */
function parseOpacity (value) {
	var match;
	if (value === '') {
		return null;
	// IE case
	} else if (opacity === 'filter') {
		match = value.match(RE_IE_OPACITY);
		if (match != null) {
			return parseInt(match[1], 10) / 100;
		}
	} else {
		return parseFloat(value);
	}
}

/**
 * Convert opacity to IE filter syntax
 * @param {String} value
 * @returns {String}
 */
function getOpacityValue (value) {
	var val = parseFloat(value);
	if (opacity === 'filter') {
		val = "alpha(opacity=" + (val * 100) + ")";
	}
	return val;
}

/**
 * Split a value into a number and unit
 * @param {String} value
 * @param {String} property
 * @returns {Array}
 */
function parseNumber (value, property) {
	var channels, num, unit, unitTest;

	if (value == null || value == 'none') {
		value = 0;
	}

	// Handle arrays of values (translate, scale)
	if (identify.isArray(value)) {
		return value.map(function (val) {
			return parseNumber(val, property);
		});
	}

	// Handle colours
	if (colour[property]) {
		// rgb()
		if (value != null && value.charAt(0) !== '#') {
			channels = RE_RGB.exec(value);
			if (channels) {
				return ["#" + ((1 << 24) | (channels[1] << 16) | (channels[2] << 8) | channels[3]).toString(16).slice(1), 'hex'];
			} else {
				return ['#ffffff', 'hex'];
			}
		} else {
			return [value || '#ffffff', 'hex'];
		}

	// Handle numbers
	} else {
		num = parseFloat(value);
		if (identify.isNaN(num)) {
			return [value, ''];
		} else {
			unitTest = RE_UNITS.exec(value);
			// Set unit or default
			unit = (unitTest != null)
				? unitTest[1]
				: ((numeric[property] != null)
						? numeric[property]
						: 'px');
			return [num, unit];
		}
	}
}

/**
 * Retrieve a 'property' from a transform 2d or 3d 'matrix'
 * @param {String|Array} matrix
 * @param {String} property
 * @returns {String|Number|Array}
 */
function parseTransform (matrix, property) {
	var m = matrixStringToArray(matrix)
		, is3D = (m && m.length > 6) ? 1 : 0;

	if (m) {
		switch (property) {
			case 'matrix':
			case 'matrix3d':
				return m;
			case 'translateX':
			case 'translateY':
				return ''
					+ m[MATRIX_PROPERTY_INDEX[property][is3D]]
					+ 'px';
			case 'translateZ':
				return ''
					+ (is3D ? m[MATRIX_PROPERTY_INDEX[property][is3D]] : '0')
					+ 'px';
			case 'translate':
				return [parseTransform(matrix, 'translateX'), parseTransform(matrix, 'translateY')];
			case 'translate3d':
				return [parseTransform(matrix, 'translateX'), parseTransform(matrix, 'translateY'), parseTransform(matrix, 'translateZ')];
			case 'scaleX':
			case 'scaleY':
				return m[MATRIX_PROPERTY_INDEX[property][is3D]];
			case 'scaleZ':
				return is3D ? m[10] : 1;
			case 'scale':
				return [parseTransform(matrix, 'scaleX'), parseTransform(matrix, 'scaleY')];
			case 'scale3d':
				return [parseTransform(matrix, 'scaleX'), parseTransform(matrix, 'scaleY'), parseTransform(matrix, 'scaleZ')];
			case 'rotate':
			case 'rotateY':
			case 'rotateZ':
				return ''
					+ (Math.acos(m[0]) * 180) / Math.PI
					+ 'deg';
			case 'rotateX':
				return ''
					+ (Math.acos(m[5]) * 180) / Math.PI
					+ 'deg';
			case 'skewX':
				return ''
					+ (Math.atan(m[2]) * 180) / Math.PI
					+ 'deg';
			case 'skewY':
				return ''
					+ (Math.atan(m[1]) * 180) / Math.PI
					+ 'deg';
		}
	}

	return matrix;
}

/**
 * Convert a matrix property to a transform style string
 * Handles existing transforms and special grouped properties
 * @param {Element} element
 * @param {String} property
 * @param {String|Array} value
 * @returns {String}
 */
function generateTransform (element, property, value) {
	var matrix = current(element, getPrefixed(property))
		, m, m1, is3D, idx, len;

	if (matrix == 'none') matrix = '';

	// Reset existing matrix, preserving translations
	if (matrix) {
		if (m = matrixStringToArray(matrix)) {
			is3D = m.length > 6 ? 1 : 0;
			len = is3D ? 3 : 2;
			idx = is3D ? 12 : 4;
			// Preserve translations
			if (!(~property.indexOf('translate'))) {
				m1 = MATRIX_IDENTITY[is3D].slice(0, idx)
					.concat(m.slice(idx, idx + len));
				if (is3D) m1.push(MATRIX_IDENTITY[is3D].slice(-1));
				m = m1;
			// Preserve translations and nullify changed
			} else {
				if (property == 'translate' || property == 'translate3d') {
					m1 = m.slice(0, idx)
						.concat(MATRIX_IDENTITY[is3D].slice(idx, idx + len));
					if (is3D) m1.push(m.slice(-1));
					m = m1;
				} else if (property == 'translateX' || property == 'translateY' || property == 'translateZ') {
					idx = MATRIX_PROPERTY_INDEX[property][is3D];
					if (idx) m[idx] = MATRIX_IDENTITY[is3D][idx];
				}
			}

			matrix = is3D ? 'matrix3d' : 'matrix'
				+ '('
				+ m.join(', ')
				+ ') ';
		}
	}

	if (numeric[property] != null) {
		return ''
			+ matrix
			+ property
			+ '('
			+ value
			+ ')';
	// Grouped properties
	} else {
		switch (property) {
			case 'transform':
			case 'transform3d':
				return value;
			case 'matrix':
			case 'matrix3d':
				return ''
					+ property
					+ '('
					+ value
					+ ')';
			case 'translate':
			case 'translate3d':
				if (identify.isArray(value)) {
					// Add default unit
					value = value.map(function(item) {
						return !identify.isString(item) ? item + 'px': item;
					})
					.join(', ');
				}
				return ''
					+ matrix
					+ property
					+ '('
					+ value
					+ ')';
			case 'scale':
			case 'scale3d':
				if (identify.isArray(value)) {
					value = value.join(', ');
				}
				return ''
					+ matrix
					+ property
					+ '('
					+ value
					+ ')';
		}
	}
}

/**
 * Retrieve the style for 'property'
 * @param {Element} element
 * @param {String} property
 * @returns {Object}
 */
function getStyle (element, property) {
	var prop, value;

	// Special case for opacity
	if (property === 'opacity') {
		return parseOpacity(current(element, opacity));
	}

	// Retrieve longhand and prefixed version
	prop = getPrefixed(getShorthand(property));
	value = current(element, prop);

	// Special case for transform
	if (transform[property]) {
		return parseTransform(value, property);
	}

	switch (value) {
		case '':
			return null;
		case 'auto':
			return 0;
		default:
			return value;
	}
}

/**
 * Retrieve the numeric value for 'property'
 * @param {Element} element
 * @param {String} property
 * @returns {Number}
 */
function getNumericStyle (element, property) {
	return parseNumber(getStyle(element, property), property);
}

/**
 * Retrieve the 'property' for matching 'selector' rule in all document stylesheets
 * @param {String} selector
 * @param {String} property
 * @returns {String}
 */
function getDocumentStyle (selector, property) {
	var styleSheets = document.styleSheets
		, sheet, rules, rule;

	if (styleSheets) {
		for (var i = 0, n = styleSheets.length; i < n; i++) {
			sheet = styleSheets[i];
			if (rules = sheet.rules || sheet.cssRules) {
				for (var j = 0, m = rules.length; j < m; j++) {
					rule = rules[j];
					if (selector === rule.selectorText) {
						return rule.style.getPropertyValue(property);
					}
				}
			}
		}
	}

	return '';
}

/**
 * Set the style for 'property'
 * @param {Element} element
 * @param {String|Object} property
 * @param {Object} value
 */
function setStyle (element, property, value) {
	var prop, matrix;

	// Expand shorthands
	prop = expandShorthand(property, value);
	
	// Handle property hash returned from expandShorthand
	if (identify.isObject(prop)) {
		for (var p in prop) {
			setStyle(element, p, prop[p]);
		}
		return;
	}

	// Handle opacity
	if (prop === 'opacity') {
		prop = opacity;
		value = getOpacityValue(value);
	}

	// Look up default numeric unit if none provided
	if (value !== 'auto'
		&& value !== 'inherit'
		&& numeric[prop]
		&& !RE_UNITS.test(value)) {
			value += numeric[prop];
	}

	// Look up prefixed property
	prop = getPrefixed(prop);

	// Handle special transform properties
	if (transform[property]) {
		value = generateTransform(element, property, value);
	}
	element.style[camelCase(prop)] = value;
}

/**
 * Remove the style for 'property'
 * @param {Element} element
 * @param {String} property
 */
function clearStyle (element, property) {
	var style = element.getAttribute('style') || ''
		, re;

	if (style) {
		property = getAll(property).join('[\\w-]*|') + '[\\w-]*';

		re = new RegExp('(?:^|\\s)(?:' + property + '):\\s?[^;]+;', 'ig');
		element.setAttribute('style', style.replace(re, ''));
	}
}

/**
 * Retrieve current computed style
 * @param {Element} element
 * @param {String} property
 * @returns {String}
 */
function current (element, property) {
	var value;

	if (win.getComputedStyle) {
		if (property) {
			value = win.getComputedStyle(element).getPropertyValue(property);
			// Try with camel casing
			if (value == null) win.getComputedStyle(element).getPropertyValue(camelCase(property));
			return value;
		} else {
			return win.getComputedStyle(element);
		}
	// IE
	} else {
		if (property) {
			value = element.currentStyle[property];
			// Try with camel casing
			if (value == null) element.currentStyle[camelCase(property)];
			return value;
		} else {
			return element.currentStyle;
		}
	}
}

/**
 * CamelCase 'str, removing '-'
 * @param {String} str
 * @returns {String}
 */
function camelCase (str) {
	// IE requires vendor prefixed values to start with lowercase
	if (str.indexOf('-ms-') == 0) str = str.slice(1);
	return str.replace(/-([a-z]|[0-9])/ig, function(all, letter) {
		return (letter + '').toUpperCase();
	});
}

/**
 * Convert 'matrix' to Array
 * @param {String|Array} matrix
 * @returns {Array}
 */
function matrixStringToArray (matrix) {
	if (identify.isArray(matrix)) {
		return matrix;
	} else if (re = matrix.match(RE_MATRIX)) {
		// Convert string to array
		return re[1].split(', ')
			.map(function (item) {
				return parseFloat(item);
			});
	}
}

},{"util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.style/node_modules/util.identify/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.style/node_modules/util.identify/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.text/index.js":[function(require,module,exports){
var textProp = document.documentElement.textContent
	? 'textContent'
	: 'innerText';

exports.getText = function (element) {
	return element[textProp];
};

exports.setText = function (element, text) {
	element[textProp] = text;
};
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/events.event/index.js":[function(require,module,exports){
var HTML_EVENTS = 'click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete'
	, EVENT_PROPS = 'altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement timeStamp view which propertyName button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ char charCode key keyCode keyIdentifier keyLocation location touches targetTouches changedTouches scale rotation data origin source state'

	, domHandlers = {}
	, uid = 1
	, htmlEvents = {}
	, eventProps = {};

// Convert to hash
for (var i = 0, events = HTML_EVENTS.split(' '), n = events.length; i < n; i++) {
	htmlEvents[events[i]] = true;
}
for (i = 0, events = EVENT_PROPS.split(' '), n = events.length; i < n; i++) {
	eventProps[events[i]] = true;
}

/**
 * Register for event notification
 * @param {Object} [target]
 * @param {String} type
 * @param {Function} callback
 * @returns {Object}
 */
exports.on = function (target, type, callback) {
	if (typeof target == 'string') {
		callback = type;
		type = target;
		// Assign 'target' to this
		// if not mixed into an object the target becomes this module
		target = this;
	}

	if (!target || !callback) return target;

	if (isElement(target)) {
		var id = target.getAttribute('data-event-id')
			, cb = createDOMHandler(callback);

		// Store id on target and create hash
		if (!id) {
			id = uid++;
			target.setAttribute('data-event-id', id);
			domHandlers[id] = {};
		}
		// Create cache by event type
		if (!(type in domHandlers[id])) domHandlers[id][type] = [];
		// Skip if already registered
		if (!findInStore(domHandlers[id][type], callback)) {
			domHandlers[id][type].push({
				callback: callback,
				cb: cb
			});
			target.addEventListener(type, cb, false);
		}

	} else {
		// Store and register
		if (target._handlers == null) target._handlers = {};
		if (!(type in target._handlers)) target._handlers[type] = [];
		// Skip if already registered
		if (!findInStore(target._handlers[type], callback)) {
			target._handlers[type].push({callback: callback});
		}
	}

	// Chain
	return target;
};

/**
 * Register for one time event notification
 * @param {Object} [target]
 * @param {String} type
 * @param {Function} callback
 * @returns {Object}
 */
exports.once = function (target, type, callback) {
	if (typeof target == 'string') {
		callback = type;
		type = target;
		// Assign 'target' to this
		// if not mixed into an object the target becomes this module
		target = this;
	}

	if (!target || !callback) return target;

	var cb;

	// Wrap callback
	exports.on(target, type, cb = function() {
		exports.off(target, type, cb);
		callback.apply(target, arguments);
	});

	// Chain
	return target;
};

/**
 * Unregister for event notification
 * @param {Object} [target]
 * @param {String} type
 * @param {Function} callback
 * @returns {Object}
 */
exports.off = function (target, type, callback) {
	// TODO: remove all handlers by type if no callback?
	if (typeof target == 'string') {
		callback = type;
		type = target;
		// Assign 'target' to this
		// if not mixed into an object the target becomes this module
		target = this;
	}

	if (!target || !callback) return target;

	if (isElement(target)) {
		var id = target.getAttribute('data-event-id')
			, item;

		// Retrieve from cache
		if (id && domHandlers[id] && domHandlers[id][type]) {
			// Remove
			if (item = findInStore(domHandlers[id][type], callback, true)) {
				target.removeEventListener(type, item.cb, false);
			}
		}

	} else {
		if (target._handlers && target._handlers[type]) {
			// Remove
			findInStore(target._handlers[type], callback, true);
		}
	}

	// Chain
	return target;
};

/**
 * Unregister all events
 * @param {Object} [target]
 * @returns {Object}
 */
exports.offAll = function (target) {
	if (!target) {
		// Assign 'target' to this
		// if not mixed into an object the target becomes this module
		target = this;
	}

	if (isElement(target)) {
		var id = target.getAttribute('data-event-id');

		if (id && domHandlers[id]) {
			// Unregister all events
			for (var type in domHandlers[id]) {
				for (var i = 0, n = domHandlers[id][type].length; i < n; i++) {
					target.removeEventListener(type, domHandlers[id][type][i].cb, false);
				}
			}
			// Clear cache
			domHandlers[id] = {};
		}
	} else {
		// Clear cache
		target._handlers = {};
	}

	// Chain
	return target;
};

/**
 * Dispatch an event to registered listeners
 * @param {Object} [target]
 * @param {String|Object} type
 * @param {Object} [data]
 * @returns {Object}
 */
exports.trigger = function (target, type, data) {
	if (typeof target == 'string') {
		data = type;
		type = target;
		// Assign 'target' to this
		// if not mixed into an object the target becomes this module
		target = this;
	}

	if (!target) return null;

	var evt, list;

	if (isElement(target)) {
		// Create DOM event based on type
		var isHtmlEvent = type in htmlEvents;
		evt = document.createEvent(isHtmlEvent ? 'HTMLEvents' : 'UIEvents');
		evt[isHtmlEvent ? 'initEvent' : 'initUIEvent'](type, true, true, window, 1);
		evt.data = data;
		return target.dispatchEvent(evt);
	} else {
		// Re-trigger: handle passed in event object
		if ('object' == typeof type) {
				evt = type;
				evt.relatedTarget = evt.target;
				evt.target = target;
				type = evt.type;
		}

		if (target._handlers && type in target._handlers) {
			evt = evt || new Event({target:target, type:type, data:data});
			// copy the callback hash to avoid mutation errors
			list = target._handlers[type].slice();
			// skip loop if only a single listener
			if (list.length == 1) {
				list[0].callback.call(target, evt);
			} else {
				for (var i = 0, n = list.length; i < n; i++) {
					// Exit if event has been stopped
					if (evt.isStopped) break;
					list[i].callback.call(target, evt);
				}
			}
			return true;
		}
	}
	return false;
};

exports._handlers = null;

/**
 * Find 'callback' in 'store' and optionally 'remove'
 * @param {Array} store
 * @param {Function} callback
 * @param {Boolean} [remove]
 * @returns {Object}
 */
function findInStore (store, callback, remove) {
	var item;

	for (var i = 0, n = store.length; i < n; i++) {
		item = store[i];
		if (item.callback === callback) {
			if (remove) store.splice(i, 1);
			return item;
		}
	}

	return null;
}

/**
 * Wrap 'callback' handler
 * @param {Function} callback
 * @returns {Function}
 */
function createDOMHandler (callback) {
	return function (evt) {
		callback(new Event(evt));
	}
}

/**
 * Determine if 'element' is a DOMElement
 * @param {Object} element
 * @returns {Boolean}
 */
function isElement (element) {
	return !!(element
		&& (element === window
		|| element.nodeType === 9
		|| element.nodeType === 1));
}

/**
 * Constructor
 * @param {Object} event
 */
function Event (event) {
	var target = event.target || event.srcElement;

	this.isStopped = false;
	this.originalEvent = event;
	this.type = event.type;
	this.target = target;

	// Fix targets
	if (target) {
		// Avoid text nodes
		if (target.nodeType === 3) this.target = target.parentNode;
		// SVG element
		if (target.correspondingUseElement || target.correspondingElement) this.target = target.correspondingUseElement || target.correspondingElement;
	}

	// Copy properties
	for (var prop in eventProps) {
		if (eventProps.hasOwnProperty(prop)) this[prop] = event[prop];
	}

	// Fix properties
	this.keyCode = event.keyCode || event.which;
	this.rightClick = event.which === 3 || event.button === 2;
	if (event.pageX || event.pageY) {
		this.clientX = event.pageX;
		this.clientY = event.pageY;
	} else if (event.clientX || event.clientY) {
		this.clientX = event.clientX + document.body.scrollLeft + doc.documentElement.scrollLeft;
		this.clientY = event.clientY + document.body.scrollTop + doc.documentElement.scrollTop;
	}
}

Event.prototype.preventDefault = function () {
	if (this.originalEvent.preventDefault) this.originalEvent.preventDefault();
};

Event.prototype.stopPropagation = function () {
	if (this.originalEvent.stopPropagation) this.originalEvent.stopPropagation();
};

Event.prototype.stopImmediatePropagation = function () {
	if (this.originalEvent.stopImmediatePropagation) this.originalEvent.stopImmediatePropagation();
	this.isStopped = true;
};

Event.prototype.stop = function () {
	this.preventDefault();
	this.stopImmediatePropagation();
}

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/index.js":[function(require,module,exports){
require('requestAnimationFrame')
var style = require('dom.style')
	, identify = require('util.identify')
	, isFunction = identify.isFunction
	, isString = identify.isString
	, isArray = identify.isArray
	, isObject = identify.isObject
	, colourUtil = require('util.colour')
	, win = window
	, doc = window.document

	, anims = {}
	, length = 0
	, pool = []
	, uid = 1
	, last = 0
	, running = false

	, FRAME_RATE = 60
	, DEFAULT_DURATION = 500
	, DEFAULT_EASING = require('util.ease/lib/cubic').outCubic
	, POOL_SIZE = 10;

module.exports = animate;

// Populate object pool
for (var i = 0, n = POOL_SIZE; i < n; i++) {
	pool.push(new Anim());
}

/**
 * Retrieve an Anim instance bound to 'target'
 * Set 'keep' to true to prevent cleanup
 * @param {Object} target
 * @param {Boolean} [keep]
 * @returns {Anim}
 */
function animate (target, keep) {
	if (!target) return;

	// reuse from the object pool
	var anim = pool.length ? pool.pop() : new Anim();
	anim.id = uid++;
	anim.target = target;
	anim.keep = (keep != null) ? keep : false;
	return anim;
}

/**
 * Add 'anim' to render loop
 * @param {Anim} anim
 */
function add (anim) {
	if (!anims[anim.id]) {
		anims[anim.id] = anim;
		anim.isRunning = true;
		length++;
		// Start if not running
		if (!running) {
			running = true;
			last = Date.now();
			onTick();
		}
	}
}

/**
 * Remove 'anim' from render loop
 * @param {Anim} anim
 */
function remove (anim) {
	if (anim.isRunning) {
		anim.isRunning = false;
		anim.isComplete = false;
		anim.duration = 0;
		anim.elapsed = 0;
		anim.delayBefore = 0;
		anim.delayAfter = 0;
		anim.tickCallbacks = [];
		anim.completeCallbacks = [];
		anim.properties = {};
		anim.ease = DEFAULT_EASING;
		anim.usingCssTransitions = false;
		delete anims[anim.id];
		length--;
		// Stop if none active
		if (!length) running = false;
	}
}

/**
 * Destroy 'anim'
 * @param {Anim} anim
 */
function destroy (anim) {
	// Check that this is eligible for destruction
	if (anim.id) {
		remove(anim);
		// Reset
		anim.id = null;
		anim.target = null;
		anim.keep = false;
		pool.push(anim);
	}
}

/**
 * Tick handler
 * @param {Number} time
 */
function onTick (time) {
	var now = Date.now()
		, tick = now - last;

	// Store
	last = now;
	for (var id in anims) {
		render(anims[id], tick);
	}
	// Loop
	if (running) win.requestAnimationFrame(onTick);
}


/**
 * Render
 * @param {Anim} anim
 * @param {Number} time
 */
function render (anim, time) {
	var props = anim.properties
		, s, e, callback, callbacks, dur, propObj, value;

	anim.elapsed += time;
	// Make sure total time does not exceed duration
	dur = (anim.elapsed < anim.duration)
		? anim.elapsed
		: anim.duration;

	// Handle delay before
	if (anim.delayBefore > 0) {
		anim.delayBefore -= time;
		// Round down if under 1 frame
		if (anim.delayBefore < 16) {
			anim.delayBefore = 0;
		}
	}

	// Update properties
	if (!anim.isComplete && anim.delayBefore <= 0) {
		for (var prop in props) {
			propObj = props[prop];
			// All types except css transitions
			if (propObj.type < 4) {
				s = propObj.start;
				//Handle arrays for transforms like translate and scale
				if (isArray(propObj.end)){
					var values = [];
					for (var i = 0; i < propObj.end.length; i++) {
						e = propObj.end[i] - s;
						value = propObj.current = anim.ease.js(dur, s, e, anim.duration);
						values.push(value);
					}
				//Handle objects for rgb colours
				}else if(isObject(propObj.end)){
					var r,g,b;
					for (var key in propObj.end){
						if (propObj.end.hasOwnProperty(key)) {
         			s = propObj.start[key];
         			e = Math.abs(propObj.end[key] - s);
         			if (key === 'r'){
         				r = propObj.current = anim.ease.js(dur, s, e, anim.duration);
         			}else if( key === 'g'){
         				g = propObj.current = anim.ease.js(dur, s, e, anim.duration);
         			}else if (key == 'b'){
         				b = propObj.current = anim.ease.js(dur, s, e, anim.duration);
         			}
    				}
					}
				}else{
					e = propObj.end - s;
					value = propObj.current = anim.ease.js(dur, s, e, anim.duration);
				}
				switch (propObj.type) {
					case 1:
						anim.target[prop](value);
						break;
					case 2:
						anim.target[prop] = value;
						break;
					case 3:
						//Handle arrays for transforms like translate and scale
						if (isArray(propObj.end)){
							style.setStyle(anim.target, prop, values);
						//Handle rgb colors
						}else if(isObject(propObj.end)){
							style.setStyle(anim.target, prop, 'rgb('+Math.ceil(r)+','+Math.ceil(g)+','+Math.ceil(b)+')');
						}else{
							style.setStyle(anim.target, prop, "" + value + propObj.unit);
						}
				}
			}
		}
	}

	// Call tick callbacks
	executeCallbacks(anim.tickCallbacks);

	// On complete...
	if (anim.elapsed >= anim.duration) {
		anim.isComplete = true;

		// Handle delay after
		if (anim.delayAfter) {
			anim.duration += anim.delayAfter;
			anim.delayAfter = 0;
		} else {
			// Remove css transition syntax
			if (anim.usingCssTransitions) {
				style.clearStyle(anim.target, 'transition');
				anim.usingCssTransitions = false;
			}

			// Reset
			callbacks = anim.completeCallbacks.slice();
			(anim.keep) ? remove(anim) : destroy(anim);

			// Trigger callbacks
			// Delay to allow for GC and cleanup
			setTimeout(function() {
				executeCallbacks(callbacks);
				callbacks = null;
			}, 0);
		}
	}
};

/**
 * Execute one or more 'callbacks'
 * @param {Array}
 */
function executeCallbacks (callbacks) {
	if (callbacks.length) {
		// Don't loop if only 1
		if (callbacks.length == 1) {
			callback = callbacks[0];
			callback.args
				?	callback.func.apply(null, callback.args)
				: callback.func();
		} else {
			for (var i = 0, n = callbacks.length; i < n; i++) {
				callback = callbacks[i];
				callback.args
					? callback.func.apply(null, callback.args)
					: callback.func();
			}
		}
	}
};

/**
 * Anim class
 */
function Anim () {
	this.id = null;
	this.target = null;
	this.duration = 0;
	this.delayBefore = 0;
	this.delayAfter = 0;
	this.elapsed = 0;
	this.properties = {};
	this.ease = DEFAULT_EASING;
	this.tickCallbacks = [];
	this.completeCallbacks = [];
	this.keep = false;
	this.isRunning = false;
	this.isComplete = false;
	this.usingCssTransitions = false;
}

/**
 * Animate from existing values to target values
 * @param {Object} properties
 * @param {Number} [duration] (miliseconds)
 * @param {Object} [ease]
 * @returns {Anim}
 */
Anim.prototype.to = function (properties, duration, ease) {
	var current, end, p, val, tStyle;

	if (ease) this.ease = ease;
	if (duration == null) duration = DEFAULT_DURATION;
	this.duration += duration;
	this.elapsed = 0;
	this.properties = {};
	this.usingCssTransitions = false;

	for (var prop in properties) {
		val = properties[prop];
		p = {
			start: 0,
			current: 0,
			end: val,
			type: 0
		};

		// Property is a Function
		if (isFunction(this.target[prop])) {
			p.start = this.target[prop]();
			p.type = 1;

		//Property is a property
		} else if (prop in this.target && !isArray(p.end)) {
			p.start = this.target[prop];
			p.type = 2;

		// Property is css
		} else {
			current = style.getNumericStyle(this.target, prop);
			p.start = current[0];
			// Use ending unit if a string is passed
			if (isString(val)) {
				end = style.parseNumber(val, prop);
				p.unit = end[1];
				p.end = end[0];
				if (!style.hasTransitions){
					// Need to handle colours diffrently with no transitions
					// TODO: Handle rgba colours
					if (end[1] === 'hex' || end[1] ===  'rgb'){
						//Convert colours to component and hex to rgb
						p.start = colourUtil.toComponent(current[0]);
						p.end = colourUtil.toComponent(end[0]);
					}
				}

			// Use the current unit if none specified
			} else {
				p.unit = current[1];
				p.end = val;
			}

			// Use css transitions if available
			if (style.hasTransitions) {
				// First set up transition
				if (!this.usingCssTransitions) {
					tStyle = 'all ' + this.duration + 'ms';
					if (ease) tStyle += ' ' + (this.ease.css || DEFAULT_EASING.css);
					if (this.delayBefore) tStyle += ' ' + this.delayBefore + 'ms';
					style.setStyle(this.target, {transition: tStyle});
					this.usingCssTransitions = true;
				}
				p.type = 4;
				style.setStyle(this.target, prop, p.end);
			} else {
				p.type = 3;
			}
		}
		this.properties[prop] = p;
	}

	add(this);

	// Chain
	return this;
};

/**
 * Delay the start or completion of an animation
 * @param {Number} duration
 */
Anim.prototype.delay = function (duration) {
	if (duration != null) {
		if (!this.isRunning) {
			this.duration += duration;
			this.delayBefore = duration;
			add(this);
		} else {
			this.delayAfter = duration;
		}
	}

	// Chain
	return this;
};

/**
 * Retrieve the value for 'property'
 * @param {String} property
 * @returns {Object}
 */
Anim.prototype.getProperty = function (property) {
	if (this.isRunning) {
		var prop = this.properties[property];
		return prop != null ? prop.current : null;
	}
};

/**
 * Set the 'value' for 'property'
 * @param {String} property
 * @param {Object} value
 */
Anim.prototype.setProperty = function (property, value) {
	if (this.isRunning) {
		var prop = this.properties[property];
		if (prop != null) prop.end = value;
		// Set new end target for css transitions
		if (prop.type == 4) style.setStyle(this.target, property, value);
	}
};

/**
 * Register tick callback handler with optional arguments
 * @param {Function} callback
 * @param {...}
 * @returns {Anim}
 */
Anim.prototype.onTick = function (callback) {
	var args = (2 <= arguments.length)
		? Array.prototype.slice.call(arguments, 1)
		: null;
	this.tickCallbacks.push({
		func: callback,
		args: args
	});

	// Chain
	return this;
};

/**
 * Register complete callback handler with optional arguments
 * @param {Function} callback
 * @param {...}
 * @returns {Anim}
 */
Anim.prototype.onComplete = function (callback) {
	var args = (2 <= arguments.length)
		? Array.prototype.slice.call(arguments, 1)
		: null;
	this.completeCallbacks.push({
		func: callback,
		args: args
	});

	// Chain
	return this;
};

/**
 * Stop running Anim
 */
Anim.prototype.stop = function () {
	if (this.keep) {
		remove(this)
		return this;
	} else {
		return destroy(this);
	}
};

/**
 * Destroy Anim
 */
Anim.prototype.destroy = function () {
	destroy(this);
	return null;
};

},{"dom.style":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/dom.style/index.js","requestAnimationFrame":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/requestAnimationFrame/index.js","util.colour":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.colour/index.js","util.ease/lib/cubic":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.ease/lib/cubic.js","util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.identify/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/dom.style/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.style/index.js"][0].apply(exports,arguments)
},{"util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/dom.style/node_modules/util.identify/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/dom.style/node_modules/util.identify/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/requestAnimationFrame/index.js":[function(require,module,exports){
var vendors = ['ms', 'moz', 'webkit', 'o']
	, lastFrameTime = null;

for (var i = 0, n = vendors.length; i < n; i++) {
	vendor = vendors[i];
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = window[vendor + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendor + 'CancelAnimationFrame'] || window[vendor + 'CancelRequestAnimationFrame'];
	}
}

if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = function(callback, element) {
		var currFrameTime = +(new Date())
			, id, interval, lastTime;
		if (lastFrameTime == null) {
			lastFrameTime = currFrameTime;
		}
		interval = Math.max(0, 16 - (currFrameTime - lastFrameTime));
		id = window.setTimeout((function() {
			// Call with elapsed frame time
			callback(currFrameTime + interval);
		}), interval);
		lastTime = currFrameTime + interval;
		return id;
	};
}

if (!window.cancelAnimationFrame) {
	window.cancelAnimationFrame = function(id) {
		clearTimeout(id);
	};
}

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.colour/index.js":[function(require,module,exports){
/**
 * Extract colour channels from a colour string (rgb(r,g,b), rrggbb, rgb)
 * @param {String} colour
 */
exports.toComponent = function(colour) {
	// Remove hash and spaces
	colour = colour.replace(/[#\s]/g, '');

	// rgb(r, g, b)
	if (/^rgb/.test(colour)) {
		var re = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
		var channels = re.exec(colour);
		return {
			r: parseInt(channels[1], 10),
			g: parseInt(channels[2], 10),
			b: parseInt(channels[3], 10)
		};
	// #rrggbb
	} else if (colour.length === 6) {
		re = /^(\w{2})(\w{2})(\w{2})$/;
		channels = re.exec(colour);
		return {
			r: parseInt(channels[1], 16),
			g: parseInt(channels[2], 16),
			b: parseInt(channels[3], 16)
		};
	// #rgb
	} else if (colour.length === 3) {
		re = /^(\w{1})(\w{1})(\w{1})$/;
		channels = re.exec(colour);
		return {
			r: parseInt(channels[1] + channels[1], 16),
			g: parseInt(channels[2] + channels[2], 16),
			b: parseInt(channels[3] + channels[3], 16)
		};
	}
};

/**
 * Generate rgba(r,g,b,a) colour string
 * @param {String} colour
 * @param {Number} alpha
 */
exports.rgba = function(colour, alpha) {
	var c;
	c = exports.toComponent(colour);
	return "rgba(" + c.r + "," + c.g + "," + c.b + "," + alpha + ")";
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.ease/lib/cubic.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inCubic = {
	js: function(t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
	css: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
};

exports.outCubic = {
	js: function(t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
	css: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
};

exports.inOutCubic = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t * t + b;
			}
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		}
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.identify/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.identify/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.number/index.js":[function(require,module,exports){
exports.TWO_PI = (function() {
	return Math.PI * 2;
})();

exports.HALF_PI = (function() {
	return Math.PI * 0.5;
})();

/**
 * Converts a given value in degrees to radians
 * @param {Number} deg
 * @returns {Number}
 */
exports.degreesToRadians = function(deg) {
	return (deg * Math.PI) / 180;
};

/**
 * Converts a given value in radians to degrees
 * @param {Number} rad
 * @returns {Number}
 */
exports.radiansToDegrees = function(rad) {
	return (180 * rad) / Math.PI;
};

/**
 * Takes a 'value' within a given range and converts it to a number between 0 and 1.
 * @param {Number} value
 * @param {Number} minimum
 * @param {Number} maximum
 * @returns {Number}
 */
var normalize = exports.normalize = function(value, min, max){
	if(min === max || value >= max){
		return 1
	}else if (value <= min){
		return 0
	}else{
		return (value-min) / (max-min)
	}	
}

/**
 * Takes a normalized value and a range and returns the actual value in that range.
 * @param {Number} normValue
 * @param {Number} minimum
 * @param {Number} maximum
 * @returns {Number}
 */
var interplate = exports.interpolate = function(normValue, min, max) {
	return min + (max - min) * normValue;
};

/**
 * Takes a value in a given range (min1, max1) and finds the corresonding value in the next range (min2, max2).
 * @param {Number} value
 * @param {Number} min1
 * @param {Number} max1
 * @param {Number} min2
 * @param {Number} max2
 * @returns {Number}
 */
var map = exports.map = function(value, min1, max1, min2, max2) {
	return interplate(normalize(value, min1, max1), min2, max2);
};

/**
 * Takes a value and limits it to fall within a given range.
 * @param {Number} value
 * @param {Number} minimum
 * @param {Number} maximum
 * @returns {Number}
 */
var limit = exports.limit = function(value, min, max) {
	return Math.min(Math.max(min, value), max);
};

/**
 * Generates a random number between a given range.
 * @param {Number} low
 * @param {Number} high
 * @returns {Number}
 */
var rangedRandom = exports.rangedRandom = function(low, high) {
	return map(Math.random(), 0, 1, low, high);
};

/**
 * Rounds a value to the number of specified decimal places
 * @param {Number} value
 * @param {Number} decimalPlaces
 * @returns {Number}
 */
exports.round = function (value, decimalPlaces) {
	var parts = value.toString().split('.')
		, pre = parts[0] + parts[1].substr(0, decimalPlaces)
		, post = parts[1].slice(decimalPlaces)
		, postRound = Math.round(post/Math.pow(10, (post.length)))
		, places = Math.pow(10, (decimalPlaces || 0));

	return (parts[1].length <= decimalPlaces) ? value : (+pre + postRound) / places;
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.ready/index.js":[function(require,module,exports){
/*
 * Register for DOM ready events
 */
var win = window
	, doc = win.document
	, scrollHackTimer = null
	, isReady = false
	, initialized = false
	, readyCallbacks = [];

function whenReady() {
	if (!isReady) {
		isReady = true;
		// Execute callbacks
		for (var i = 0, n = readyCallbacks.length; i < n; i++) {
			readyCallbacks[i]();
		}
		readyCallbacks = null;
		if (scrollHackTimer) {
			clearTimeout(scrollHackTimer);
		}
		// Remove listeners
		if (doc.addEventListener) {
			doc.removeEventListener('DOMContentLoaded', whenReady, false);
			win.removeEventListener('load', whenReady, false);
		} else {
			doc.detachEvent('onreadystatechange', whenReady);
			win.detachEvent('onload', whenReady);
		}
	}
};

// IE scroll hack
function scrollCheck() {
	if (isReady) return;
	try {
		doc.documentElement.doScroll('left');
	} catch (error) {
		scrollHackTimer = setTimeout(scrollCheck, 11);
		return;
	}
	whenReady();
};

/**
 * Register a function to be called when the DOM is ready
 * param {Function} callback
 */
module.exports = function(callback) {
	readyCallbacks.push(callback);

	// Initialize
	if (!initialized) {
		// Already loaded
		if (doc.readyState === 'complete' || doc.readyState === 'loaded') {
			whenReady();
		// Initialize watchers
		} else if (doc.addEventListener) {
			doc.addEventListener('DOMContentLoaded', whenReady, false);
			// Just in case previoius doesn't fire
			win.addEventListener('load', whenReady, false);
		// IE fallbacks
		} else if (doc.attachEvent) {
			doc.attachEvent('onreadystatechange', whenReady);
			win.attachEvent('onload', whenReady);
			// Test if already loaded
			if (doc.documentElement.doScroll) {
				scrollCheck();
			}
		}
		initialized = true;
	}
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.select/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/index.js"][0].apply(exports,arguments)
},{"util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.select/node_modules/util.identify/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.select/node_modules/util.identify/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.style/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.style/index.js"][0].apply(exports,arguments)
},{"util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.style/node_modules/util.identify/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.style/node_modules/util.identify/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.text/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.text/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/env.capabilities/index.js":[function(require,module,exports){
var win = window
	, doc = win.document
	, nav = navigator;

/**
 * Does platform support native video
 * @returns {Boolean}
 */
exports.hasVideo = function() {
	var hasVideo = !!doc.createElement('video').canPlayType;
	exports.hasVideo = function() { return hasVideo; };
	return hasVideo;
};

/**
 * Does platform support Flash plugin
 * @returns {Boolean}
 */
exports.hasFlash = function() {
	var desc, testObject, version;
	if (nav.plugins != null && nav.plugins['Shockwave Flash'] === 'object') {
		desc = nav.plugins['Shockwave Flash'].description;
		if (desc && !((nav.mimeTypes != null && nav.mimeTypes['application/x-shockwave-flash']) && !nav.mimeTypes['application/x-shockwave-flash'].enabledPlugin)) {
			version = parseInt(desc.match(/^.*\s+([^\s]+)\.[^\s]+\s+[^\s]+$/)[1], 10);
		}
	} else if (win.ActiveXObject != null) {
		try {
			testObject = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if (testObject) {
				version = parseInt(testObject.GetVariable('$version').match(/^[^\s]+\s(\d+)/)[1], 10);
			}
		} catch (e) { }
	}

	exports.flashVersion = version;
	exports.hasFlash = function() { return exports.flashVersion > 0; };
	return version > 0;
};

/**
 * Flash plugin version number
 */
exports.flashVersion = 0;

/**
 * Does platform support native full screen
 * @returns {Boolean}
 */
exports.hasNativeFullscreen = function() {
	var hasNativeFullscreen = typeof doc.createElement('video').webkitEnterFullScreen === 'function';
	exports.hasNativeFullscreen = function() { return hasNativeFullscreen; };
	return hasNativeFullscreen;
};

/**
 * Does platform support Canvas element
 * @returns {Boolean}
 */
exports.hasCanvas = function() {
	var elem = doc.createElement('canvas')
		, hasCanvas = !!(elem.getContext && elem.getContext('2d'));
	exports.hasCanvas = function() { return hasCanvas; };
	return hasCanvas;
};

/**
 * Does platform support Touch events
 * @returns {Boolean}
 */
exports.hasTouch = function() {
	var hasTouch = 'ontouchstart' in win || (win.DocumentTouch && doc instanceof DocumentTouch);
	exports.hasTouch = function() { return hasTouch; };
	return hasTouch;
};

/**
 * Does platform support inline svg
 * @returns {Boolean}
 */
exports.hasSVG = function(){
	var test = document.createElement('div');
	test.innerHTML = '<svg/>';
	var hasSVG = (test.firstChild && test.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
	exports.hasSVG = function(){ return hasSVG; };
	return hasSVG;
}

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/env.platform/index.js":[function(require,module,exports){
var ua = navigator.userAgent;

/**
 * Is Internet Explorer
 */
exports.isIE = (function() {
	return !+"\v1";
})();

/**
 * Is iPad
 */
exports.isIPad = (function() {
	return /ipad/i.test(ua);
})();

/**
 * Is iPhone
 */
exports.isIPhone = (function() {
	return /iphone/i.test(ua);
})();

/**
 * Is iOS
 */
exports.isIOS = (function() {
	return exports.isIPhone || exports.isIPad || false;
})();

/**
 * Is iPhone MobileSafari
 */
exports.isMobileSafari = (function() {
	return exports.isIPhone && /safari/i.test(ua);
})();

/**
 * iOS version number
 */
exports.iOSVersion = (function() {
	var match;
	match = navigator.userAgent.match(/os (\d+)_/i);
	if (match != null ? match[1] : void 0) {
		return match[1];
	}
})();

/**
 * Is Android
 */
exports.isAndroid = (function() {
	return /android/i.test(ua);
})();

/**
 * Android version number
 */
exports.androidVersion = (function() {
	var match;
	match = navigator.userAgent.match(/android (\d+)\./i);
	if (match != null ? match[1] : void 0) {
		return match[1];
	}
})();

/**
 * Is mobile
 */
exports.isMobile = (function() {
	return /mobile/i.test(ua) && !exports.isIPad;
})();

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/env.viewport/index.js":[function(require,module,exports){
/**
 * Retrieve the viewport width
 * @returns {Number}
 */
exports.getWidth = function() {
	return document.documentElement.clientWidth;
};

/**
 * Retrieve the viewport height
 * @returns {Number}
 */
exports.getHeight = function() {
	return document.documentElement.clientHeight;
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/events.event/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/events.event/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/index.js"][0].apply(exports,arguments)
},{"dom.style":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/dom.style/index.js","requestAnimationFrame":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/requestAnimationFrame/index.js","util.colour":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/util.colour/index.js","util.ease/lib/cubic":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/util.ease/lib/cubic.js","util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/util.identify/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/dom.style/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.style/index.js"][0].apply(exports,arguments)
},{"util.identify":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/dom.style/node_modules/util.identify/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/dom.style/node_modules/util.identify/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/requestAnimationFrame/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/requestAnimationFrame/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/util.colour/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.colour/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/util.ease/lib/cubic.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.ease/lib/cubic.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.animate/node_modules/util.identify/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.colour/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.colour/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/index.js":[function(require,module,exports){
// Based on the infamous Penner easing equations, with css equivalents where possible
exports.linear = require('./lib/linear');
exports.back = require('./lib/back');
exports.bounce = require('./lib/bounce');
exports.circ = require('./lib/circ');
exports.cubic = require('./lib/cubic');
exports.elastic = require('./lib/elastic');
exports.expo = require('./lib/expo');
exports.quad = require('./lib/quad');
exports.quart = require('./lib/quart');
exports.quint = require('./lib/quint');
exports.sine = require('./lib/sine');
},{"./lib/back":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/back.js","./lib/bounce":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/bounce.js","./lib/circ":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/circ.js","./lib/cubic":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/cubic.js","./lib/elastic":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/elastic.js","./lib/expo":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/expo.js","./lib/linear":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/linear.js","./lib/quad":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/quad.js","./lib/quart":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/quart.js","./lib/quint":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/quint.js","./lib/sine":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/sine.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/back.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inBack = {
	js: function(t, b, c, d) {
			if (s != null) {
				s = 1.70158;
			}
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
	css: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)'
};

exports.outBack = {
	js: function(t, b, c, d) {
			if (s != null) {
				s = 1.70158;
			}
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
	css: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
};

exports.inOutBack = {
	js: function(t, b, c, d) {
			if (s != null) {
				s = 1.70158;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
			}
			return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
		},
	css: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/bounce.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inBounce = {
	js: function(t, b, c, d) {
			return c - exports.outBounce(x, d - t, 0, c, d) + b;
		}
};

exports.outBounce = {
	js: function(t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
			} else {
				return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
			}
		}
};

exports.inOutBounce = {
	js: function(t, b, c, d) {
			if (t < d / 2) {
				return exports.inBounce(x, t * 2, 0, c, d) * 0.5 + b;
			}
			return exports.outBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
		}
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/circ.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inCirc = {
	js: function(t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
	css: 'cubic-bezier(0.600, 0.040, 0.980, 0.335)'
};

exports.outCirc = {
	js: function(t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
	css: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)'
};

exports.inOutCirc = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			}
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
	css: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)'
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/cubic.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.animate/node_modules/util.ease/lib/cubic.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/elastic.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inElastic = {
	js: function(t, b, c, d) {
			var a, p, s;
			if (t === 0) {
				return b;
			}
			if ((t /= d) === 1) {
				return b + c;
			}
			if (!p) {
				p = d * 0.3;
			}
			if (!a || a < Math.abs(c)) {
				a = c;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(c / a);
			}
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		}
};

exports.outElastic = {
	js: function(t, b, c, d) {
			var a, p, s;
			if (t === 0) {
				return b;
			}
			if ((t /= d) === 1) {
				return b + c;
			}
			if (!p) {
				p = d * 0.3;
			}
			if (!a || a < Math.abs(c)) {
				a = c;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(c / a);
			}
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		}
};

exports.inOutElastic = {
	js: function(t, b, c, d) {
			var a, p, s;
			if (t === 0) {
				return b;
			}
			if ((t /= d / 2) === 2) {
				return b + c;
			}
			if (!p) {
				p = d * (0.3 * 1.5);
			}
			if (!a || a < Math.abs(c)) {
				a = c;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(c / a);
			}
			if (t < 1) {
				return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			}
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
		}
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/expo.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inExpo = {
	js: function(t, b, c, d) {
			if (t === 0) {
				return b;
			} else {
				return c * Math.pow(2, 10 * (t / d - 1)) + b;
			}
		},
	css: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)'
};

exports.outExpo = {
	js: function(t, b, c, d) {
			if (t === d) {
				return b + c;
			} else {
				return c * (-Math.pow(2, -10 * t / d) + 1) + b;
			}
		},
	css: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)'
};

exports.inOutExpo = {
	js: function(t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
	css: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)'
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/linear.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.linear = {
	js: function(t, b, c, d) {
			return c * t / d + b;
		},
	css: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)'
}
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/quad.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inQuad = {
	js: function(t, b, c, d) {
			return c * (t /= d) * t + b;
		},
	css: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)'
};

exports.outQuad = {
	js: function(t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
	css: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
};

exports.inOutQuad = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t + b;
			}
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		}
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/quart.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inQuart = {
	js: function(t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
	css: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)'
};

exports.outQuart = {
	js: function(t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
	css: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)'
};

exports.inOutQuart = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t * t * t + b;
			}
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
	css: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)'
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/quint.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inQuint = {
	js: function(t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
	css: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)'
};

exports.outQuint = {
	js: function(t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
	css: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)'
};

exports.inOutQuint = {
	js: function(t, b, c, d) {
			if ((t /= d / 2) < 1) {
				return c / 2 * t * t * t * t * t + b;
			}
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
	css: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)'
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.ease/lib/sine.js":[function(require,module,exports){
// t: current time, b: beginning value, c: change in value, d: duration

exports.inSine = {
	js: function(t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
	css: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)'
};

exports.outSine = {
	js: function(t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
	css: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)'
};

exports.inOutSine = {
	js: function(t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
	css: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.identify/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/dom.select/node_modules/util.identify/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.log/index.js":[function(require,module,exports){
/**
 * Sets debug environment and enables console.log when true
 */
var initialized = false
	, timestamp = true
	, locations = '^http(|s):\/\/dev|^http(|s):\/\/localhost';

/**
 * Configure log behaviour
 * Add whitelist locations, enable/disable timestamp
 * @param {Object} config
 */
exports.init = function(config) {
	if (config != null) {
		timestamp = config.timestamp || timestamp;
		locations = config.locations && new RegExp(locations + '|' + config.locations.join('|'), 'i');
		window.debug = !!(document.location.href.match(locations)) || !!(document.location.hash.match(/debug/));
		window.log = window.debug ? exports.log : (function() {});
	}
	return initialized = true;
};

/**
 * Log messages to the console
 * @param {*} arguments...
 */
exports.log = function() {
	var args = (1 <= arguments.length) ? Array.prototype.slice.call(arguments, 0) : [];
	if (!initialized) {
		exports.init();
	}
	if (window.debug) {
		try {
			var d = new Date();
			var t = timestamp ? "" + (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds()) + ":" + (d.getMilliseconds()) : '';
			if (window.console) {
				console.log(t, args);
			}
		} catch (error) { }
	}
};

},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.number/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.element/node_modules/util.number/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.object/index.js":[function(require,module,exports){
/**
 * Allow 'Child' Constructor to inherit from 'Parent', including 'own' properties
 * --from CoffeeScript boilerplate--
 * @param {Function} Child
 * @param {Function} Parent
 * @returns {Function}
 */
exports.inherit = function (Child, Parent) {
	// Copy 'own' properties from Parent to Child
	for (var key in Parent) {
		if (Parent.hasOwnProperty(key)) {
			Child[key] = Parent[key];
		}
	}
	// Proxy constructor function
	function Ctor() {
		// Set constructor property to point to Child
		this.constructor = Child;
		// Store reference to Child's 'super'
		this.super = Parent.prototype;
	}
	// Proxy inherits from Parent's prototype (avoid Parent instance)
	Ctor.prototype = Parent.prototype;
	// Child inherits from proxy (requires an object, not function)
	Child.prototype = new Ctor();
	// Store reference to Child's 'super'
	Child.super = Parent.prototype;
	// Return extended constructor function
	return Child;
};

/**
 * Determine if 'Child' Constructor inherits from 'Parent'
 * @param {Function} Child
 * @param {Function} Parent
 * @returns {Boolean}
 */
exports.inheritsFrom = function (Child, Parent) {
	if (typeof Child == 'function' && typeof Parent == 'function') {
		if (Child === Parent) return true;
		var descendant = Child.super;
		while (descendant) {
			if (descendant.constructor) {
				if (descendant.constructor === Parent) return true;
			}
			descendant = descendant.constructor.super;
		}
	}
	return false;
};

/**
 * Bind a function 'fn' to a specific 'context'
 * --from CoffeeScript boilerplate--
 * @param {Function} fn
 * @param {Object} context
 */
exports.bind = function (fn, context) {
	return function() {
		return fn.apply(context, arguments);
	};
};
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.polyfill/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/dom.classlist/node_modules/util.polyfill/index.js"][0].apply(exports,arguments)
},{}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.svg/index.js":[function(require,module,exports){
var capabilities = require('env.capabilities');

exports.NS = 'http://www.w3.org/2000/svg';
exports.LINK = 'http://www.w3.org/1999/xlink';

/**
 * Inject svg symbol definitions into the DOM
 * @param {String} id
 * @param {String} defs
 */
exports.injectDefs = function (id, defs) {
	if (capabilities.hasSVG() && !document.getElementById(id)) {
		var el = document.createElement('div')
			, svg = '<svg id="'
					+ id
					+ '" style="display:none;">'
					+ defs
					+ '</svg>';

		el.innerHTML = svg;
		document.body.insertBefore(el.firstChild, document.body.firstChild);
	}
};

/**
 * Append svg element of 'type' to 'parent', setting 'attrs'
 * @parama {DOMElement} parent
 * @parama {String} type
 * @parama {Object} attrs
 */
exports.appendChild = function (parent, type, attrs) {
	var el = document.createElementNS(exports.NS, type);

	if (attrs) {
		for (var attr in attrs) {
			if (attr.indexOf('xlink:') == 0) {
				el.setAttributeNS(exports.LINK, attr.substring(6), attrs[attr]);
			} else {
				el.setAttribute(attr, attrs[attr]);
			}
		}
	}

	parent.appendChild(el);
};
},{"env.capabilities":"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.svg/node_modules/env.capabilities/index.js"}],"/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/util.svg/node_modules/env.capabilities/index.js":[function(require,module,exports){
arguments[4]["/Users/thomasl/Sites/github/browserlib-test/node_modules/browser.lib/node_modules/env.capabilities/index.js"][0].apply(exports,arguments)
},{}]},{},["./src/coffee/main"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGhvbWFzbC9TaXRlcy9naXRodWIvYnJvd3NlcmxpYi10ZXN0L3NyYy9jb2ZmZWUvbWFpbi5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5jbGFzc2xpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5jbGFzc2xpc3Qvbm9kZV9tb2R1bGVzL3V0aWwucG9seWZpbGwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5lbGVtZW50L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy9kb20uZWxlbWVudC9ub2RlX21vZHVsZXMvZG9tLnNlbGVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL2RvbS5zZWxlY3Qvbm9kZV9tb2R1bGVzL3V0aWwuaWRlbnRpZnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5lbGVtZW50L25vZGVfbW9kdWxlcy9kb20uc3R5bGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5lbGVtZW50L25vZGVfbW9kdWxlcy9kb20udGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL2V2ZW50cy5ldmVudC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL3V0aWwuYW5pbWF0ZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL3V0aWwuYW5pbWF0ZS9ub2RlX21vZHVsZXMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy9kb20uZWxlbWVudC9ub2RlX21vZHVsZXMvdXRpbC5hbmltYXRlL25vZGVfbW9kdWxlcy91dGlsLmNvbG91ci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL3V0aWwuYW5pbWF0ZS9ub2RlX21vZHVsZXMvdXRpbC5lYXNlL2xpYi9jdWJpYy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL3V0aWwubnVtYmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy9kb20ucmVhZHkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2Vudi5jYXBhYmlsaXRpZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2Vudi5wbGF0Zm9ybS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZW52LnZpZXdwb3J0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy91dGlsLmVhc2UvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvYmFjay5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvdXRpbC5lYXNlL2xpYi9ib3VuY2UuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvY2lyYy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvdXRpbC5lYXNlL2xpYi9lbGFzdGljLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy91dGlsLmVhc2UvbGliL2V4cG8uanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy91dGlsLmVhc2UvbGliL3F1YWQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvcXVhcnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvcXVpbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvc2luZS5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvdXRpbC5sb2cvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwub2JqZWN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy91dGlsLnN2Zy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsNENBQUE7O0FBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxhQUFSLENBQU4sQ0FBQTs7QUFBQSxLQUNBLEdBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQURoQixDQUFBOztBQUFBLElBRUEsR0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BRmYsQ0FBQTs7QUFBQSxJQUdBLEdBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUhoQixDQUFBOztBQUFBLElBS0EsR0FBTyxDQUFBLFNBQUEsS0FBQSxHQUFBO1NBQUEsU0FBQSxHQUFBO0FBQ0wsSUFBQSxLQUFDLENBQUEsQ0FBRCxHQUFLLElBQUEsQ0FBSyxJQUFMLENBQUwsQ0FBQTtXQUNBLEtBQUMsQ0FBQSxDQUFDLENBQUMsT0FBSCxDQUFBLENBQVksQ0FBQyxFQUFiLENBQWdCO0FBQUEsTUFBQyxXQUFBLEVBQVksQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFiO0FBQUEsTUFBd0Isa0JBQUEsRUFBbUIsaUJBQTNDO0tBQWhCLEVBQStFLElBQS9FLEVBQXFGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBL0YsQ0FBeUcsQ0FBQyxVQUExRyxDQUFxSCxjQUFySCxFQUZLO0VBQUEsRUFBQTtBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FMUCxDQUFBOztBQUFBLGNBVUEsR0FBaUIsQ0FBQSxTQUFBLEtBQUEsR0FBQTtTQUFBLFNBQUEsR0FBQTtBQUNmLElBQUEsS0FBQyxDQUFBLENBQUMsQ0FBQyxRQUFILENBQVksV0FBWixFQUF5QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXpCLENBQUEsQ0FBQTtXQUNBLEtBQUMsQ0FBQSxDQUFDLENBQUMsVUFBSCxDQUFBLEVBRmU7RUFBQSxFQUFBO0FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQVZqQixDQUFBOztBQUFBLEtBY0EsQ0FBTSxJQUFOLENBZEEsQ0FBQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4ckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGliID0gcmVxdWlyZSgnYnJvd3Nlci5saWInKVxucmVhZHkgPSBsaWIuZG9tLnJlYWR5XG5lbGVtID0gbGliLmRvbS5lbGVtZW50XG5lYXNlID0gbGliLnV0aWwuZWFzZVxuXG5pbml0ID0gPT5cbiAgQGggPSBlbGVtKCdoMScpXG4gIEBoLmFuaW1hdGUoKS50byh7J3RyYW5zbGF0ZSc6WzIwMCw1MDBdLCAnYmFja2dyb3VuZC1jb2xvcic6J3JnYigxMjMsMjAwLDQ0KSd9LCAyMDAwLCBlYXNlLnNpbmUuaW5PdXRTaW5lKS5vbkNvbXBsZXRlKG9uQW5pbUNvbXBsZXRlKVxuXG5cbm9uQW5pbUNvbXBsZXRlID0gPT5cbiAgQGguc2V0U3R5bGUoJ3RyYW5zbGF0ZScsIFswLCAwXSlcbiAgQGguY2xlYXJTdHlsZSgpXG5cbnJlYWR5KGluaXQpIiwiZXhwb3J0cy5kb20gPSB7XG5cdGNsYXNzbGlzdDogcmVxdWlyZSgnZG9tLmNsYXNzbGlzdCcpLFxuXHRzdHlsZTogcmVxdWlyZSgnZG9tLnN0eWxlJyksXG5cdGVsZW1lbnQ6IHJlcXVpcmUoJ2RvbS5lbGVtZW50JyksXG5cdHJlYWR5OiByZXF1aXJlKCdkb20ucmVhZHknKSxcblx0c2VsZWN0OiByZXF1aXJlKCdkb20uc2VsZWN0JyksXG5cdHRleHQ6IHJlcXVpcmUoJ2RvbS50ZXh0Jylcbn07XG5cbmV4cG9ydHMuZW52ID0ge1xuXHRjYXBhYmlsaXRpZXM6IHJlcXVpcmUoJ2Vudi5jYXBhYmlsaXRpZXMnKSxcblx0cGxhdGZvcm06IHJlcXVpcmUoJ2Vudi5wbGF0Zm9ybScpLFxuXHR2aWV3cG9ydDogcmVxdWlyZSgnZW52LnZpZXdwb3J0Jylcbn07XG5cbmV4cG9ydHMuZXZlbnRzID0ge1xuXHRldmVudDogcmVxdWlyZSgnZXZlbnRzLmV2ZW50Jylcbn07XG5cbmV4cG9ydHMudXRpbCA9IHtcblx0cG9seWZpbGw6IHJlcXVpcmUoJ3V0aWwucG9seWZpbGwnKSxcblx0YW5pbWF0ZTogcmVxdWlyZSgndXRpbC5hbmltYXRlJyksXG5cdGNvbG91cjogcmVxdWlyZSgndXRpbC5jb2xvdXInKSxcblx0ZWFzZTogcmVxdWlyZSgndXRpbC5lYXNlJyksXG5cdGxvZzogcmVxdWlyZSgndXRpbC5sb2cnKSxcblx0bnVtYmVyOiByZXF1aXJlKCd1dGlsLm51bWJlcicpLFxuXHRpZGVudGlmeTogcmVxdWlyZSgndXRpbC5pZGVudGlmeScpLFxuXHRvYmplY3Q6IHJlcXVpcmUoJ3V0aWwub2JqZWN0JyksXG5cdHN2ZzogcmVxdWlyZSgndXRpbC5zdmcnKVxufTtcbiIsInJlcXVpcmUoJ3V0aWwucG9seWZpbGwnKTtcblxudmFyIFJFX1RSSU0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqXG4gKiBDaGVjayBpZiAnZWxlbWVudCcgaGFzIGNsYXNzICdjbGFzJ1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5oYXNDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXMpIHtcblx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0ICE9IG51bGwpIHtcblx0XHRyZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFJFX1RSSU0sICcnKS5zcGxpdCgnICcpO1xuXHRcdHJldHVybiBjbGFzc2VzLmluZGV4T2YoY2xhcykgPj0gMDtcblx0fVxufTtcblxuLyoqXG4gKiBDaGVjayBpZiAnZWxlbWVudCcgaGFzIGEgY2xhc3MgbWF0Y2hpbmcgJ3BhdHRlcm4nXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMubWF0Y2hDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHBhdHRlcm4pIHtcblx0dmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFJFX1RSSU0sICcnKS5zcGxpdCgnICcpXG5cdFx0LCBjbGFzO1xuXHRmb3IgKHZhciBpID0gMCwgbiA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0Y2xhcyA9IGNsYXNzZXNbaV07XG5cdFx0aWYgKGNsYXMuaW5kZXhPZihwYXR0ZXJuKSAhPT0gLTEpIHtcblx0XHRcdHJldHVybiBjbGFzO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gJyc7XG59O1xuXG4vKipcbiAqIEFkZCBjbGFzcyAnY2xhcycgdG8gJ2VsZW1lbnQnXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzXG4gKi9cbmV4cG9ydHMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzKSB7XG5cdGlmIChlbGVtZW50LmNsYXNzTGlzdCAhPSBudWxsKSB7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXMpO1xuXHR9IGVsc2Uge1xuXHRcdGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXM7XG5cdH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGNsYXNzICdjbGFzJyBmcm9tICdlbGVtZW50J1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc1xuICovXG5leHBvcnRzLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhcykge1xuXHR2YXIgYywgY2xhc3Nlcztcblx0aWYgKGNsYXMpIHtcblx0XHRpZiAoZWxlbWVudC5jbGFzc0xpc3QgIT0gbnVsbCkge1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgY2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoUkVfVFJJTSwgJycpLnNwbGl0KCcgJylcblx0XHRcdFx0LCByZXN1bHRzID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbiA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdGlmIChjbGFzc2VzW2ldICE9PSBjbGFzKSByZXN1bHRzLnB1c2goY2xhc3Nlc1tpXSk7XG5cdFx0XHR9XG5cdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IHJlc3VsdHMuam9pbignICcpO1xuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBUb2dnbGUgY2xhc3MgJ2NsYXMnIG9uICdlbGVtZW50J1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc1xuICovXG5leHBvcnRzLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhcykge1xuXHRpZiAoZXhwb3J0cy5oYXNDbGFzcyhlbGVtZW50LCBjbGFzKSkge1xuXHRcdGV4cG9ydHMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhcyk7XG5cdH0gZWxzZSB7XG5cdFx0ZXhwb3J0cy5hZGRDbGFzcyhlbGVtZW50LCBjbGFzKTtcblx0fVxufTtcblxuLyoqXG4gKiBSZXBsYWNlIGNsYXNzICdjbGFzT2xkJyB3aXRoICdjbGFzTmV3JyBvbiAnZWxlbWVudCdcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNcbiAqL1xuZXhwb3J0cy5yZXBsYWNlQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzT2xkLCBjbGFzTmV3KSB7XG5cdGlmIChjbGFzT2xkKSB7XG5cdFx0aWYgKGNsYXNOZXcpIHtcblx0XHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShjbGFzT2xkLCBjbGFzTmV3KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5yZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzT2xkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoY2xhc05ldykge1xuXHRcdGV4cG9ydHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc05ldyk7XG5cdH1cbn07XG5cbi8qKlxuICogQWRkIGNsYXNzICdjbGFzJyB0byAnZWxlbWVudCcsIGFuZCByZW1vdmUgYWZ0ZXIgJ2R1cmF0aW9uJyBtaWxsaXNlY29uZHNcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNcbiAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvblxuICovXG5leHBvcnRzLmFkZFRlbXBvcmFyeUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhcywgZHVyYXRpb24pIHtcblx0ZXhwb3J0cy5hZGRDbGFzcyhlbGVtZW50LCBjbGFzKTtcblx0c2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG5cdFx0ZXhwb3J0cy5yZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzKTtcblx0fSksIGR1cmF0aW9uKTtcbn07XG4iLCIvKipcbiAqIEFycmF5LmluZGV4T2YoKVxuICovXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG5cdEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdGZvciAodmFyIGkgPSBpID0gMCwgbiA9IHRoaXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRpZiAoaXRlbSA9PT0gdGhpc1tpXSkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9O1xufVxuXG4vKipcbiAqIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuICovXG52YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ11cblx0LCBsYXN0RnJhbWVUaW1lID0gbnVsbDtcblxuZm9yICh2YXIgaSA9IDAsIG4gPSB2ZW5kb3JzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHR2ZW5kb3IgPSB2ZW5kb3JzW2ldO1xuXHRpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvciArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZlbmRvciArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcblx0fVxufVxuXG5pZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG5cdFx0dmFyIGN1cnJGcmFtZVRpbWUgPSArKG5ldyBEYXRlKCkpXG5cdFx0XHQsIGlkLCBpbnRlcnZhbCwgbGFzdFRpbWU7XG5cdFx0aWYgKGxhc3RGcmFtZVRpbWUgPT0gbnVsbCkge1xuXHRcdFx0bGFzdEZyYW1lVGltZSA9IGN1cnJGcmFtZVRpbWU7XG5cdFx0fVxuXHRcdGludGVydmFsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyckZyYW1lVGltZSAtIGxhc3RGcmFtZVRpbWUpKTtcblx0XHRpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcblx0XHRcdC8vIENhbGwgd2l0aCBlbGFwc2VkIGZyYW1lIHRpbWVcblx0XHRcdGNhbGxiYWNrKGN1cnJGcmFtZVRpbWUgKyBpbnRlcnZhbCk7XG5cdFx0fSksIGludGVydmFsKTtcblx0XHRsYXN0VGltZSA9IGN1cnJGcmFtZVRpbWUgKyBpbnRlcnZhbDtcblx0XHRyZXR1cm4gaWQ7XG5cdH07XG59XG5cbmlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG5cdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KGlkKTtcblx0fTtcbn1cblxuXG4vKipcbiAqIEZ1bmN0aW9uLmJpbmQoKVxuICogLS1odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Z1bmN0aW9uL2JpbmQtLVxuICovXG5pZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XG5cdEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oY29udGV4dCkge1xuXHRcdGlmICh0eXBlb2YgdGhpcyAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIC0gd2hhdCBpcyB0cnlpbmcgdG8gYmUgYm91bmQgaXMgbm90IGNhbGxhYmxlXCIpO1xuXHRcdH1cblx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblx0XHRcdCwgdG9CaW5kID0gdGhpc1xuXHRcdFx0LCBub29wID0gZnVuY3Rpb24oKSB7fVxuXHRcdFx0LCBib3VuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdG9CaW5kLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBub29wID8gdGhpcyA6IGNvbnRleHQgfHwgd2luZG93LFxuXHRcdFx0XHRcdGFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcblx0XHRcdH07XG5cdFx0bm9vcC5wcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZTtcblx0XHRib3VuZC5wcm90b3R5cGUgPSBuZXcgbm9vcCgpO1xuXHRcdHJldHVybiBib3VuZDtcblx0fVxufVxuIiwidmFyIGNsYXNzTGlzdCA9IHJlcXVpcmUoJ2RvbS5jbGFzc2xpc3QnKVxuXHQsIHNlbGVjdCA9IHJlcXVpcmUoJ2RvbS5zZWxlY3QnKVxuXHQsIHRleHQgPSByZXF1aXJlKCdkb20udGV4dCcpXG5cdCwgY3NzID0gcmVxdWlyZSgnZG9tLnN0eWxlJylcblx0LCBldmVudCA9IHJlcXVpcmUoJ2V2ZW50cy5ldmVudCcpXG5cdCwgaWRlbnRpZnkgPSByZXF1aXJlKCd1dGlsLmlkZW50aWZ5Jylcblx0LCBudW1iZXJVdGlscyA9IHJlcXVpcmUoJ3V0aWwubnVtYmVyJylcblx0LCBhbmltYXRlID0gcmVxdWlyZSgndXRpbC5hbmltYXRlJylcblx0LCB3aW4gPSB3aW5kb3dcblx0LCBkb2MgPSB3aW4uZG9jdW1lbnRcblx0LCBlbGVtZW50cyA9IFtdXG5cdCwgaWQgPSAwO1xuXG4vKipcbiAqIEVsZW1lbnQgaW5zdGFuY2UgZmFjdG9yeVxuICogQHBhcmFtIHtET01FbGVtZW50fSBkb21FbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZWxlbWVudEZhY3RvcnkoZG9tRWxlbWVudCkge1xuXHR2YXIgZWwsIGl0ZW07XG5cdC8vIFJldHJpZXZlIGZyb20gY2FjaGVcblx0Zm9yICh2YXIgaSA9IDAsIG4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRpdGVtID0gZWxlbWVudHNbaV07XG5cdFx0aWYgKGl0ZW0uZG9tRWxlbWVudCA9PT0gZG9tRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fVxuXHR9XG5cdGVsID0gbmV3IEVsZW1lbnQoZG9tRWxlbWVudCk7XG5cdGVsZW1lbnRzLnB1c2goZWwpO1xuXHRyZXR1cm4gZWw7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBuZXcgRWxlbWVudCBpbnN0YW5jZXMgYmFzZWQgb24gJ3NlbGVjdG9yJ1xuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0LCB0YWcpIHtcblx0dmFyIGVsZW1lbnQsIHJlc3VsdHM7XG5cdGlmIChjb250ZXh0ID09IG51bGwpIGNvbnRleHQgPSBkb2M7XG5cdC8vIFJldHJpZXZlIGRvbSBlbGVtZW50KHMpIGlmIHBhc3NlZCBhIHNlbGVjdG9yIHN0cmluZ1xuXHRpZiAoaWRlbnRpZnkuaXNTdHJpbmcoc2VsZWN0b3IpKSB7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3Qoc2VsZWN0b3IsIGNvbnRleHQsIHRhZyk7XG5cdC8vIEVycm9yIGlmIG5vdCBwYXNzZWQgZG9tIGVsZW1lbnQgb3IgYXJyYXlcblx0fSBlbHNlIGlmICghKGlkZW50aWZ5LmlzRWxlbWVudChzZWxlY3RvcikgfHwgaWRlbnRpZnkuaXNBcnJheShzZWxlY3RvcikpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBSZXR1cm4gYXJyYXkgb2YgRWxlbWVudHNcblx0aWYgKGlkZW50aWZ5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG5cdFx0cmVzdWx0cyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwLCBuID0gc2VsZWN0b3IubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRlbGVtZW50ID0gc2VsZWN0b3JbaV07XG5cdFx0XHRpZiAoaWRlbnRpZnkuaXNFbGVtZW50KGVsZW1lbnQpKSB7XG5cdFx0XHRcdHJlc3VsdHMucHVzaChlbGVtZW50RmFjdG9yeShlbGVtZW50KSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHRzO1xuXHQvLyBSZXR1cm4gYSBzaW5nbGUgRWxlbWVudCBpZiBwYXNzZWQgYSBET00gRWxlbWVudFxuXHR9IGVsc2UgaWYgKHNlbGVjdG9yICE9IG51bGwpIHtcblx0XHRyZXR1cm4gZWxlbWVudEZhY3Rvcnkoc2VsZWN0b3IpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xuXG4vKipcbiAqIEVsZW1lbnQgY2xhc3NcbiAqIEBwYXJhbSB7RE9NRWxlbWVudH0gZG9tRWxlbWVudFxuICovXG5mdW5jdGlvbiBFbGVtZW50KGRvbUVsZW1lbnQpIHtcblx0dGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblx0dGhpcy5hbmltID0gbnVsbDtcblx0dGhpcy5pZCA9IHRoaXMuZG9tRWxlbWVudC5pZDtcblx0dGhpcy5faWQgPSBpZCsrO1xuXHR0aGlzLnRhZ05hbWUgPSB0aGlzLmRvbUVsZW1lbnQudGFnTmFtZTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB3aWR0aFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aDtcbn07XG5cbi8qKlxuICogU2V0IHdpZHRoXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRpZiAodmFsdWUgIT0gbnVsbCkge1xuXHRcdHRoaXMuc2V0U3R5bGUoJ3dpZHRoJywgdmFsdWUpO1xuXHRcdGlmICh0aGlzLmRvbUVsZW1lbnQud2lkdGggIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kb21FbGVtZW50LndpZHRoID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdC8vIENoYWluXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBoZWlnaHRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodDtcbn07XG5cbi8qKlxuICogU2V0IGhlaWdodFxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0dGhpcy5zZXRTdHlsZSgnaGVpZ2h0JywgdmFsdWUpO1xuXHRcdGlmICh0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0ICE9IG51bGwpIHtcblx0XHRcdHRoaXMuZG9tRWxlbWVudC5oZWlnaHQgPSB2YWx1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIG9wYWNpdHlcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmdldE9wYWNpdHkgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0U3R5bGUoJ29wYWNpdHknKTtcbn07XG5cbi8qKlxuICogU2V0IG9wYWNpdHlcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5zZXRPcGFjaXR5ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0aWYgKHZhbHVlICE9IG51bGwpIHtcblx0XHR0aGlzLnNldFN0eWxlKCdvcGFjaXR5JywgbnVtYmVyVXRpbHMubGltaXQocGFyc2VGbG9hdCh2YWx1ZSksIDAsIDEpKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0cmlldmUgb2Zmc2V0IGZyb20gcGFyZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5nZXRPZmZzZXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHtcblx0XHR0b3A6IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsXG5cdFx0bGVmdDogdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnRcblx0fTtcbn07XG5cbi8qKlxuICogUmV0cmlldmUgZ2xvYmFsIHBvc2l0aW9uXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcFxuXHRcdCwgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0XG5cdFx0LCBlbDtcblx0aWYgKChlbCA9IHRoaXMuZG9tRWxlbWVudCkub2Zmc2V0UGFyZW50KSB7XG5cdFx0d2hpbGUgKChlbCA9IGVsLm9mZnNldFBhcmVudCkpIHtcblx0XHRcdHRvcCArPSBlbC5vZmZzZXRUb3A7XG5cdFx0XHRsZWZ0ICs9IGVsLm9mZnNldExlZnQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7XG5cdFx0dG9wOiB0b3AsXG5cdFx0bGVmdDogbGVmdFxuXHR9O1xufTtcblxuLyoqXG4gKiBAc2VlIGNsYXNzTGlzdC5oYXNDbGFzc1xuICovXG5FbGVtZW50LnByb3RvdHlwZS5oYXNDbGFzcyA9IGZ1bmN0aW9uKGNsYXMpIHtcblx0cmV0dXJuIGNsYXNzTGlzdC5oYXNDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIGNsYXMpO1xufTtcblxuLyoqXG4gKiBAc2VlIGNsYXNzTGlzdC5tYXRjaENsYXNzXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLm1hdGNoQ2xhc3MgPSBmdW5jdGlvbihjbGFzKSB7XG5cdHJldHVybiBjbGFzc0xpc3QubWF0Y2hDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIGNsYXMpO1xufTtcblxuLyoqXG4gKiBAc2VlIGNsYXNzTGlzdC5hZGRDbGFzc1xuICovXG5FbGVtZW50LnByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uKGNsYXMpIHtcblx0Y2xhc3NMaXN0LmFkZENsYXNzKHRoaXMuZG9tRWxlbWVudCwgY2xhcyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIGNsYXNzTGlzdC5yZW1vdmVDbGFzc1xuICovXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGNsYXMpIHtcblx0Y2xhc3NMaXN0LnJlbW92ZUNsYXNzKHRoaXMuZG9tRWxlbWVudCwgY2xhcyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIGNsYXNzTGlzdC50b2dnbGVDbGFzc1xuICovXG5FbGVtZW50LnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKGNsYXMpIHtcblx0Y2xhc3NMaXN0LnRvZ2dsZUNsYXNzKHRoaXMuZG9tRWxlbWVudCwgY2xhcyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIGNsYXNzTGlzdC5yZXBsYWNlQ2xhc3NcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZUNsYXNzID0gZnVuY3Rpb24oY2xhc09sZCwgY2xhc05ldykge1xuXHRjbGFzc0xpc3QucmVwbGFjZUNsYXNzKHRoaXMuZG9tRWxlbWVudCwgY2xhc09sZCwgY2xhc05ldyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIGNsYXNzTGlzdC5hZGRUZW1wb3JhcnlDbGFzc1xuICovXG5FbGVtZW50LnByb3RvdHlwZS5hZGRUZW1wb3JhcnlDbGFzcyA9IGZ1bmN0aW9uKGNsYXMsIGR1cmF0aW9uKSB7XG5cdGNsYXNzTGlzdC5hZGRUZW1wb3JhcnlDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIGNsYXMsIGR1cmF0aW9uKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEBzZWUgdGV4dC5nZXRUZXh0XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmdldFRleHQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRleHQuZ2V0VGV4dCh0aGlzLmRvbUVsZW1lbnQpO1xufTtcblxuLyoqXG4gKiBAc2VlIHRleHQuc2V0VGV4dFxuICovXG5FbGVtZW50LnByb3RvdHlwZS5zZXRUZXh0ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0dGV4dC5zZXRUZXh0KHRoaXMuZG9tRWxlbWVudCwgdmFsdWUpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0cmlldmUgaW5uZXJIVE1MXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5nZXRIVE1MID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBTZXQgaW5uZXJIVE1MXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuc2V0SFRNTCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEBzZWUgY3NzLmdldFN0eWxlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmdldFN0eWxlID0gZnVuY3Rpb24ocHJvcGVydHkpIHtcblx0cmV0dXJuIGNzcy5nZXRTdHlsZSh0aGlzLmRvbUVsZW1lbnQsIHByb3BlcnR5KTtcbn07XG5cbi8qKlxuICogQHNlZSBjc3MuZ2V0TnVtZXJpY1N0eWxlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmdldE51bWVyaWNTdHlsZSA9IGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cdHJldHVybiBjc3MuZ2V0TnVtZXJpY1N0eWxlKHRoaXMuZG9tRWxlbWVudCwgcHJvcGVydHkpO1xufTtcblxuLyoqXG4gKiBAc2VlIGNzcy5zZXRTdHlsZVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uKHByb3BlcnR5LCB2YWx1ZSkge1xuXHRjc3Muc2V0U3R5bGUodGhpcy5kb21FbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQHNlZSBjc3MuY2xlYXJTdHlsZVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5jbGVhclN0eWxlID0gZnVuY3Rpb24ocHJvcGVydHkpIHtcblx0Y3NzLmNsZWFyU3R5bGUodGhpcy5kb21FbGVtZW50LCBwcm9wZXJ0eSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIGV2ZW50Lm9uXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGRhdGEpIHtcblx0ZXZlbnQub24odGhpcy5kb21FbGVtZW50LCB0eXBlLCBjYWxsYmFjaywgZGF0YSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIGV2ZW50Lm9mZlxuICovXG5FbGVtZW50LnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaykge1xuXHRldmVudC5vZmYodGhpcy5kb21FbGVtZW50LCB0eXBlLCBjYWxsYmFjayk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIGV2ZW50Lm9uZVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5vbmUgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgZGF0YSkge1xuXHRldmVudC5vbmUodGhpcy5kb21FbGVtZW50LCB0eXBlLCBjYWxsYmFjaywgZGF0YSk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIGFuaW1hdGVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIXRoaXMuYW5pbSkgdGhpcy5hbmltID0gYW5pbWF0ZSh0aGlzLmRvbUVsZW1lbnQsIHRydWUpO1xuXHRyZXR1cm4gdGhpcy5hbmltXG59O1xuXG4vKipcbiAqIFJldHJpZXZlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0cmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUodHlwZSk7XG59O1xuXG4vKipcbiAqIFNldCBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBvciB7T2JqZWN0fSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24odHlwZSwgdmFsdWUpIHtcblx0aWYoaWRlbnRpZnkuaXNPYmplY3QodHlwZSkpe1xuXHRcdGZvcih2YXIga2V5IGluIHR5cGUpIHtcbiAgICBcdHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB0eXBlW2tleV0pO1xuICBcdH1cblx0fWVsc2UgaWYoaWRlbnRpZnkuaXNTdHJpbmcodHlwZSkpe1xuXHRcdHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUodHlwZSwgdmFsdWUpO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBjaGlsZCBlbGVtZW50cyBtYXRjaGluZyAnc2VsZWN0b3InXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cyhzZWxlY3RvciwgdGhpcyk7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIHBhcmVudCBlbGVtZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFzRWxlbWVudFxuICogQHJldHVybnMge0RPTUVsZW1lbnQgb3IgRWxlbWVudH1cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUucGFyZW50ID0gZnVuY3Rpb24oYXNFbGVtZW50KSB7XG5cdGlmIChhc0VsZW1lbnQgPT0gbnVsbCkgYXNFbGVtZW50ID0gdHJ1ZTtcblx0cmV0dXJuIGFzRWxlbWVudCA/IG5ldyBFbGVtZW50KHRoaXMuZG9tRWxlbWVudC5wYXJlbnROb2RlKSA6IHRoaXMuZG9tRWxlbWVudC5wYXJlbnROb2RlO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBjaGlsZHJlblxuICogQHBhcmFtIHtCb29sZWFufSBhc0VsZW1lbnRcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuY2hpbGRyZW4gPSBmdW5jdGlvbihhc0VsZW1lbnQpIHtcblx0dmFyIG5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXNcblx0XHQsIHJlc3VsdHMgPSBbXVxuXHRcdCwgY2hpbGQ7XG5cdGlmIChhc0VsZW1lbnQgPT0gbnVsbCkgYXNFbGVtZW50ID0gdHJ1ZTtcblx0Zm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRjaGlsZCA9IG5vZGVzW2ldO1xuXHRcdGlmIChjaGlsZCAmJiBjaGlsZC5ub2RlVHlwZSA9PT0gMSkge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGFzRWxlbWVudCA/IG5ldyBFbGVtZW50KGNoaWxkKSA6IGNoaWxkKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIGZpcnN0IGNoaWxkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFzRWxlbWVudFxuICogQHJldHVybnMge0RPTUVsZW1lbnQgb3IgRWxlbWVudH1cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuZmlyc3RDaGlsZCA9IGZ1bmN0aW9uKGFzRWxlbWVudCkge1xuXHRpZiAoYXNFbGVtZW50ID09IG51bGwpIGFzRWxlbWVudCA9IHRydWU7XG5cdHJldHVybiBhc0VsZW1lbnQgPyBuZXcgRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZCkgOiB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcbn07XG5cbi8qKlxuICogUmV0cmlldmUgbGFzdCBjaGlsZFxuICogQHBhcmFtIHtCb29sZWFufSBhc0VsZW1lbnRcbiAqIEByZXR1cm5zIHtET01FbGVtZW50IG9yIEVsZW1lbnR9XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmxhc3RDaGlsZCA9IGZ1bmN0aW9uKGFzRWxlbWVudCkge1xuXHRpZiAoYXNFbGVtZW50ID09IG51bGwpIGFzRWxlbWVudCA9IHRydWU7XG5cdHJldHVybiBhc0VsZW1lbnQgPyBuZXcgRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQubGFzdENoaWxkKSA6IHRoaXMuZG9tRWxlbWVudC5sYXN0Q2hpbGQ7XG59O1xuXG4vKipcbiAqIEFwcGVuZCBjaGlsZFxuICogQHBhcmFtIHtET01FbGVtZW50IG9yIEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cdHJldHVybiB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudC5kb21FbGVtZW50IHx8IGVsZW1lbnQpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgY2hpbGRcbiAqIEBwYXJhbSB7RE9NRWxlbWVudCBvciBFbGVtZW50fSBlbGVtZW50XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXHRyZXR1cm4gdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZG9tRWxlbWVudCB8fCBlbGVtZW50KTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSBjaGlsZFxuICogQHBhcmFtIHtET01FbGVtZW50IG9yIEVsZW1lbnR9IG5ld0VsZW1lbnRcbiAqIEBwYXJhbSB7RE9NRWxlbWVudCBvciBFbGVtZW50fSBvbGRFbGVtZW50XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VDaGlsZCA9IGZ1bmN0aW9uKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpIHtcblx0dGhpcy5kb21FbGVtZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LmRvbUVsZW1lbnQgfHwgbmV3RWxlbWVudCwgb2xkRWxlbWVudC5kb21FbGVtZW50IHx8IG9sZEVsZW1lbnQpO1xuXHRyZXR1cm4gb2xkRWxlbWVudDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGZyb20gcGFyZW50XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5wYXJlbnQoKS5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xufTtcblxuLyoqXG4gKiBJbnNlcnQgJ2VsZW1lbnQnIGJlZm9yZSAncmVmZXJlbmNlRWxlbWVudCdcbiAqIEBwYXJhbSB7RE9NRWxlbWVudCBvciBFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge0RPTUVsZW1lbnQgb3IgRWxlbWVudH0gcmVmZXJlbmNlRWxlbWVudFxuICovXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbihlbGVtZW50LCByZWZlcmVuY2VFbGVtZW50KSB7XG5cdHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQuZG9tRWxlbWVudCB8fCBlbGVtZW50LCByZWZlcmVuY2VFbGVtZW50LmRvbUVsZW1lbnQgfHwgcmVmZXJlbmNlRWxlbWVudCk7XG59O1xuXG4vKipcbiAqIENsb25lIGVsZW1lbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVlcFxuICogQHBhcmFtIHtCb29sZWFufSBhc0VsZW1lbnRcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbihkZWVwLCBhc0VsZW1lbnQpIHtcblx0aWYgKGFzRWxlbWVudCA9PSBudWxsKSBhc0VsZW1lbnQgPSB0cnVlO1xuXHRyZXR1cm4gYXNFbGVtZW50ID8gbmV3IEVsZW1lbnQodGhpcy5kb21FbGVtZW50LmNsb25lKGRlZXApKSA6IHRoaXMuZG9tRWxlbWVudC5jbG9uZShkZWVwKTtcbn07XG5cbi8qKlxuICogSW5zZXJ0IEhUTUwgYmVmb3JlIHRoZSBlbGVtZW50IGl0c2VsZlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHZhbHVlKTtcbn07XG5cbi8qKlxuICogSW5zZXJ0IEhUTUwgYWZ0ZXIgdGhlIGVsZW1lbnQgaXRzZWxmXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gdGhpcy5kb21FbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIEluc2VydCBIVE1MIGp1c3QgaW5zaWRlIHRoZSBlbGVtZW50LCBiZWZvcmUgaXRzIGZpcnN0IGNoaWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdmFsdWUpO1xufTtcblxuLyoqXG4gKiBJbnNlcnQgSFRNTCBqdXN0IGluc2lkZSB0aGUgZWxlbWVudCwgYWZ0ZXIgaXRzIGxhc3QgY2hpbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gdGhpcy5kb21FbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdmFsdWUpO1xufTtcblxuLyoqXG4gKiBXcmFwICdlbGVtZW50J1xuICogQHBhcmFtIHtET01FbGVtZW50IG9yIEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50Lmxlbmd0aCkgZWxlbWVudCA9IFtlbGVtZW50XTtcbiAgZm9yICh2YXIgaSA9IGVsZW1lbnQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgY2hpbGQgPSAoaSA+IDApID8gdGhpcy5kb21FbGVtZW50LmNsb25lTm9kZSh0cnVlKSA6IHRoaXMuZG9tRWxlbWVudDtcbiAgICB2YXIgZWwgPSBlbGVtZW50W2ldO1xuICAgIHZhciBwYXJlbnQgID0gKGVsLmRvbUVsZW1lbnQpID8gZWwuZG9tRWxlbWVudC5wYXJlbnROb2RlIDogZWwucGFyZW50Tm9kZVxuICAgIHZhciBzaWJsaW5nID0gKGVsLmRvbUVsZW1lbnQpID8gZWwuZG9tRWxlbWVudC5uZXh0U2libGluZyA6IGVsLm5leHRTaWJsaW5nXG5cbiAgICBjaGlsZC5hcHBlbmRDaGlsZChlbC5kb21FbGVtZW50IHx8IGVsKTtcblxuICAgIGlmKHNpYmxpbmcpIHtcbiAgICBcdHBhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHNpYmxpbmcpO1xuICAgIH1lbHNle1xuICAgIFx0cGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogV3JhcCBhbGwgJ2VsZW1lbnRzJ1xuICogQHBhcmFtIHtET01FbGVtZW50IG9yIEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUud3JhcEFsbCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgdmFyIGVsID0gZWxlbWVudC5sZW5ndGggPyBlbGVtZW50WzBdIDogZWxlbWVudDtcbiAgdmFyIHBhcmVudCAgPSAoZWwuZG9tRWxlbWVudCkgPyBlbC5kb21FbGVtZW50LnBhcmVudE5vZGUgOiBlbC5wYXJlbnROb2RlXG4gIHZhciBzaWJsaW5nID0gKGVsLmRvbUVsZW1lbnQpID8gZWwuZG9tRWxlbWVudC5uZXh0U2libGluZyA6IGVsLm5leHRTaWJsaW5nXG4gIHRoaXMuYXBwZW5kQ2hpbGQoZWwuZG9tRWxlbWVudCB8fCBlbCk7XG5cbiAgd2hpbGUgKGVsZW1lbnQubGVuZ3RoKSB7XG4gIFx0dGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKGVsbXNbMF0pO1xuICB9XG5cbiAgaWYoc2libGluZykge1xuICBcdHBhcmVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nKTtcbiAgfWVsc2V7XG4gIFx0cGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gIH1cbn07XG5cbi8qKlxuICogRGVzdHJveSBlbGVtZW50IGFuZCBvcHRpb25hbGx5IHJlbW92ZSBmcm9tIHBhcmVudFxuICogQHBhcmFtIHtCb29sZWFufSByZW1vdmVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlbW92ZSkge1xuXHRpZiAocmVtb3ZlID09IG51bGwpIHJlbW92ZSA9IGZhbHNlO1xuXHRldmVudC5vZmZBbGwodGhpcyk7XG5cdC8vIFNldHRpbmcga2VlcCB0byBmYWxzZSB3aWxsIHRyaWdnZXIgZGVzdHJveSBhdXRvbWF0aWNhbGx5XG5cdGlmICh0aGlzLmFuaW0gIT0gbnVsbCkge1xuXHRcdGlmICh0aGlzLmFuaW0uaXNSdW5uaW5nKSB7XG5cdFx0XHR0aGlzLmFuaW0ua2VlcCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFuaW0uZGVzdHJveSgpO1xuXHRcdH1cblx0XHR0aGlzLmFuaW0gPSBudWxsO1xuXHR9XG5cdGlmIChyZW1vdmUpIHtcblx0XHR0aGlzLmRvbUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuXHR9XG5cdC8vIFJlbW92ZSBmcm9tIERPTVxuXHR0aGlzLmRvbUVsZW1lbnQgPSBudWxsO1xuXHQvLyBSZW1vdmUgZnJvbSBjYWNoZVxuXHRmb3IgKHZhciBpID0gMCwgbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdGlmIChlbGVtZW50c1tpZHhdID09PSB0aGlzKSB7XG5cdFx0XHRlbGVtZW50cy5zcGxpY2UoaSwgMSk7XG5cdFx0fVxuXHRcdGJyZWFrO1xuXHR9XG59O1xuIiwiLy8gVE9ETzogYWRkIHN1cHBvcnQgZm9yIGxpdmUgbGlzdHM/XG4vLyBUT0RPOiBhZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc2VsZWN0b3JzP1xuXG52YXIgaWQgPSByZXF1aXJlKCd1dGlsLmlkZW50aWZ5Jylcblx0LCB3aW4gPSB3aW5kb3dcblx0LCBkb2MgPSB3aW4uZG9jdW1lbnQ7XG5cbi8qKlxuICogZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgpIHBvbHlmaWxsXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc1xuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5pZiAoIWRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSB7XG5cdGRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gZnVuY3Rpb24oY2xhcywgdGFnKSB7XG5cdFx0dmFyIGVsZW1lbnRzID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyB8fCAnKicpXG5cdFx0XHQsIHJlID0gbmV3IFJlZ0V4cChcIig/Ol58XFxcXHMpXCIgKyBjbGFzICsgXCIoPzpcXFxcc3wkKVwiKVxuXHRcdFx0LCByZXN1bHRzID0gW11cblx0XHRcdCwgZWxlbWVudDtcblxuXHRcdC8vIEFib3J0IGlmIG5vIG1hdGNoZXNcblx0XHRpZiAoIWVsZW1lbnRzLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmb3IgKHZhciBpID0gMCwgbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0ZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXHRcdFx0aWYgKGVsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKHJlKSkge1xuXHRcdFx0XHRyZXN1bHRzLnB1c2goZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9XG59XG5cbi8qKlxuICogUmV0cmlldmUgYWxsIGVsZW1lbnRzIG1hdGNoaW5nICdzZWxlY3RvcidcbiAqIEBwYXJhbXMge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbXMge0VsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbXMge1N0cmluZ30gdGFnXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQsIHRhZykge1xuXHR2YXIgZWxlbWVudHMsIGl0ZW0sIHNlbDtcblx0aWYgKCFpZC5pc0VsZW1lbnQoY29udGV4dCkpIHtcblx0XHQvLyBSZXRyaWV2ZSBkb21FbGVtZW50IGlmIHBhc3NlZCBFbGVtZW50IGluc3RhbmNlLCBvdGhlcndpc2UgZG9jdW1lbnRcblx0XHRjb250ZXh0ID0gKGNvbnRleHQgIT0gbnVsbCA/IGNvbnRleHQuZG9tRWxlbWVudCA6IG51bGwpIHx8IGRvYztcblx0fVxuXG5cdGlmIChjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwgIT0gbnVsbCkge1xuXHRcdGVsZW1lbnRzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0fSBlbHNlIHtcblx0XHRzd2l0Y2ggKHNlbGVjdG9yLmNoYXJBdCgwKSkge1xuXHRcdFx0Ly8gSURcblx0XHRcdGNhc2UgJyMnOlxuXHRcdFx0XHRlbGVtZW50cyA9IGRvYy5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci5zbGljZSgxKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly8gQ2xhc3Ncblx0XHRcdGNhc2UgJy4nOlxuXHRcdFx0XHRlbGVtZW50cyA9IGRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnNsaWNlKDEpLCB0YWcpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdC8vIFRhZyB3aXRoIGNsYXNzIChlZy4gZGV2LmZvbylcblx0XHRcdFx0aWYgKHNlbGVjdG9yLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRzZWwgPSBzZWxlY3Rvci5zcGxpdCgnLicpO1xuXHRcdFx0XHRcdGVsZW1lbnRzID0gZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsWzFdLCBzZWxbMF0pO1xuXHRcdFx0XHQvLyBUYWdcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50cyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpO1xuXHRcdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBlbGVtZW50c1swXVxuXHR9ZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID4gMSkge1xuXHRcdHZhciByZXN1bHRzID0gW107XG5cdFx0Ly8gQ29udmVydCBOb2RlTGlzdCB0byBBcnJheVxuXHRcdGZvciAodmFyIGkgPSAwLCBuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goZWxlbWVudHNbaV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcbiIsIi8qKlxuICogVGVzdCBpZiAnb2JqJyBpcyBhbiBBcnJheVxuICogLS0gZnJvbSB1bmRlcnNjb3JlLmpzIC0tXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG5cdGlmIChBcnJheS5pc0FycmF5KSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH1cbn07XG5cbi8qKlxuICogVGVzdCBpZiAnb2JqJyBpcyBhbiBPYmplY3RcbiAqIC0tIGZyb20gdW5kZXJzY29yZS5qcyAtLVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaXNPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcblx0cmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaikgJiYgb2JqLm5vZGVUeXBlID09IHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogVGVzdCBpZiAnb2JqJyBpcyBhIFN0cmluZ1xuICogLS0gZnJvbSB1bmRlcnNjb3JlLmpzIC0tXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxuLyoqXG4gKiBUZXN0IGlmICdvYmonIGlzIGEgTnVtYmVyXG4gKiAtLSBmcm9tIHVuZGVyc2NvcmUuanMgLS1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmlzTnVtYmVyID0gZnVuY3Rpb24ob2JqKSB7XG5cdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgaWYgJ29iaicgaXMgYSBGdW5jdGlvblxuICogLS0gZnJvbSB1bmRlcnNjb3JlLmpzIC0tXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG5cdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbi8qKlxuICogVGVzdCBpZiAnb2JqJyBpcyBOYU5cbiAqIC0tIGZyb20gdW5kZXJzY29yZS5qcyAtLVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcblx0cmV0dXJuIG9iaiAhPT0gb2JqO1xufTtcblxuLyoqXG4gKiBUZXN0IGlmICdvYmonIGlzIGFuIEVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuXHRyZXR1cm4gISEoKG9iaiAhPSBudWxsID8gb2JqLm5vZGVUeXBlIDogbnVsbCkgPT09IDEpO1xufTtcblxuLyoqXG4gKiBUZXN0IGlmICdvYmonIGlzIGEgQm9vbGVhblxuICogLS0gZnJvbSB1bmRlcnNjb3JlLmpzIC0tXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc0Jvb2xlYW4gPSBmdW5jdGlvbihvYmopIHtcblx0cmV0dXJuIG9iaiA9PT0gdHJ1ZSB8fCBvYmogPT09IGZhbHNlIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBCb29sZWFuXSc7XG59O1xuIiwiLy8gVE9ETzogaGFuZGxlIHNldHRpbmcgc3BlY2lhbCBzaG9ydGN1dCB0cmFuc2Zvcm0gcHJvcGVydGllcyB3aXRoIGFycmF5cyAodHJhbnNsYXRlLCBzY2FsZSk/XG4vLyBUT0RPOiBidWxrIHRyYW5zZm9ybSBwcm9wZXJ0aWVzXG5cbnZhciBpZGVudGlmeSA9IHJlcXVpcmUoJ3V0aWwuaWRlbnRpZnknKVxuXHQsIHdpbiA9IHdpbmRvd1xuXHQsIGRvYyA9IHdpbmRvdy5kb2N1bWVudFxuXHQsIGVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cblx0XHQvLyBIYXNoIG9mIHVuaXQgdmFsdWVzXG5cdCwgbnVtZXJpYyA9IHtcblx0XHRcdCd0b3AnOiAncHgnLFxuXHRcdFx0J2JvdHRvbSc6ICdweCcsXG5cdFx0XHQnbGVmdCc6ICdweCcsXG5cdFx0XHQncmlnaHQnOiAncHgnLFxuXHRcdFx0J3dpZHRoJzogJ3B4Jyxcblx0XHRcdCdoZWlnaHQnOiAncHgnLFxuXHRcdFx0J21hcmdpbi10b3AnOiAncHgnLFxuXHRcdFx0J21hcmdpbi1ib3R0b20nOiAncHgnLFxuXHRcdFx0J21hcmdpbi1sZWZ0JzogJ3B4Jyxcblx0XHRcdCdtYXJnaW4tcmlnaHQnOiAncHgnLFxuXHRcdFx0J3BhZGRpbmctdG9wJzogJ3B4Jyxcblx0XHRcdCdwYWRkaW5nLWJvdHRvbSc6ICdweCcsXG5cdFx0XHQncGFkZGluZy1sZWZ0JzogJ3B4Jyxcblx0XHRcdCdwYWRkaW5nLXJpZ2h0JzogJ3B4Jyxcblx0XHRcdCdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJzogJ3B4Jyxcblx0XHRcdCdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyc6ICdweCcsXG5cdFx0XHQnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyc6ICdweCcsXG5cdFx0XHQnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnOiAncHgnLFxuIFx0XHRcdCd0cmFuc2l0aW9uLWR1cmF0aW9uJzogJ21zJyxcbiBcdFx0XHQnb3BhY2l0eSc6ICcnLFxuXHRcdFx0J2ZvbnQtc2l6ZSc6ICdweCcsXG5cdFx0XHQndHJhbnNsYXRlWCc6ICdweCcsXG5cdFx0XHQndHJhbnNsYXRlWSc6ICdweCcsXG5cdFx0XHQndHJhbnNsYXRlWic6ICdweCcsXG5cdFx0XHQnc2NhbGVYJzogJycsXG5cdFx0XHQnc2NhbGVZJzogJycsXG5cdFx0XHQnc2NhbGVaJzogJycsXG5cdFx0XHQncm90YXRlJzogJ2RlZycsXG5cdFx0XHQncm90YXRlWCc6ICdkZWcnLFxuXHRcdFx0J3JvdGF0ZVknOiAnZGVnJyxcblx0XHRcdCdyb3RhdGVaJzogJ2RlZycsXG5cdFx0XHQnc2tld1gnOiAnZGVnJyxcblx0XHRcdCdza2V3WSc6ICdkZWcnXG5cdFx0fVxuXHQsIGNvbG91ciA9IHtcblx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogdHJ1ZSxcblx0XHRcdCdjb2xvcic6IHRydWUsXG5cdFx0XHQnYm9yZGVyLWNvbG9yJzogdHJ1ZVxuXHRcdH1cblx0XHQvLyBIYXNoIG9mIHNob3J0aGFuZCBwcm9wZXJ0aWVzXG5cdCwgc2hvcnRoYW5kID0ge1xuXHRcdFx0J2JvcmRlci1yYWRpdXMnOiBbJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLCAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLCAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyddLFxuXHRcdFx0J2JvcmRlci1jb2xvcic6IFsnYm9yZGVyLWJvdHRvbS1jb2xvcicsICdib3JkZXItbGVmdC1jb2xvcicsICdib3JkZXItdG9wLWNvbG9yJywgJ2JvcmRlci1yaWdodC1jb2xvciddLFxuXHRcdFx0J21hcmdpbic6IFsnbWFyZ2luLXRvcCcsICdtYXJnaW4tcmlnaHQnLCAnbWFyZ2luLWxlZnQnLCAnbWFyZ2luLWJvdHRvbSddLFxuXHRcdFx0J3BhZGRpbmcnOiBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctcmlnaHQnLCAncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctYm90dG9tJ11cblx0XHR9XG5cdFx0Ly8gSGFzaCBvZiB0cmFuc2Zvcm0gcHJvcGVydGllc1xuXHQsIHRyYW5zZm9ybSA9IHtcblx0XHRcdCd0cmFuc2Zvcm0nOiB0cnVlLFxuXHRcdFx0J3RyYW5zbGF0ZSc6IHRydWUsXG5cdFx0XHQndHJhbnNsYXRlWCc6IHRydWUsXG5cdFx0XHQndHJhbnNsYXRlWSc6IHRydWUsXG5cdFx0XHQndHJhbnNsYXRlM2QnOiB0cnVlLFxuXHRcdFx0J3RyYW5zbGF0ZVonOiB0cnVlLFxuXHRcdFx0J3JvdGF0ZSc6IHRydWUsXG5cdFx0XHQncm90YXRlM2QnOiB0cnVlLFxuXHRcdFx0J3JvdGF0ZVgnOiB0cnVlLFxuXHRcdFx0J3JvdGF0ZVknOiB0cnVlLFxuXHRcdFx0J3JvdGF0ZVonOiB0cnVlLFxuXHRcdFx0J3NjYWxlJzogdHJ1ZSxcblx0XHRcdCdzY2FsZVgnOiB0cnVlLFxuXHRcdFx0J3NjYWxlWSc6IHRydWUsXG5cdFx0XHQnc2NhbGUzZCc6IHRydWUsXG5cdFx0XHQnc2NhbGVaJzogdHJ1ZSxcblx0XHRcdCdza2V3JzogdHJ1ZSxcblx0XHRcdCdza2V3WCc6IHRydWUsXG5cdFx0XHQnc2tld1knOiB0cnVlLFxuXHRcdFx0J3BlcnNwZWN0aXZlJzogdHJ1ZSxcblx0XHRcdCdtYXRyaXgnOiB0cnVlLFxuXHRcdFx0J21hdHJpeDNkJzogdHJ1ZVxuXHRcdH1cblxuXHQsIHBsYXRmb3JtU3R5bGVzID0ge31cblx0LCBwbGF0Zm9ybVByZWZpeCA9ICcnXG5cblx0LCBSRV9VTklUUyA9IC8ocHh8JXxlbXxtc3xzfGRlZykkL1xuXHQsIFJFX0lFX09QQUNJVFkgPSAvb3BhY2l0eT0oXFxkKykvaVxuXHQsIFJFX1JHQiA9IC9yZ2JcXCgoXFxkKyksXFxzPyhcXGQrKSxcXHM/KFxcZCspXFwpL1xuXHQsIFJFX01BVFJJWCA9IC9ebWF0cml4KD86M2QpP1xcKChbXlxcKV0rKS9cblx0LCBWRU5ET1JfUFJFRklYRVMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1tcy0nLCAnLW8tJ11cblx0LCBNQVRSSVhfSURFTlRJVFkgPSBbWzEsIDAsIDAsIDEsIDAsIDBdLCBbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMV1dXG5cdCwgTUFUUklYX1BST1BFUlRZX0lOREVYID0ge1xuXHRcdHRyYW5zbGF0ZVg6IFs0LDEyXSxcblx0XHR0cmFuc2xhdGVZOiBbNSwxM10sXG5cdFx0dHJhbnNsYXRlWjogW251bGwsMTRdLFxuXHRcdHNjYWxlWDogWzAsMF0sXG5cdFx0c2NhbGVZOiBbMyw1XSxcblx0XHRzY2FsZVo6IFtudWxsLDEwXSxcblx0XHRyb3RhdGU6IFswLDBdLFxuXHRcdHJvdGF0ZVg6IFtudWxsLDVdLFxuXHRcdHJvdGF0ZVk6IFtudWxsLDBdLFxuXHRcdHJvdGF0ZVo6IFtudWxsLDBdLFxuXHRcdHNrZXdZOiBbMSwxXSxcblx0XHRza2V3WDogWzIsMl1cblx0fTtcblxuLy8gU3RvcmUgYWxsIHBvc3NpYmxlIHN0eWxlcyB0aGlzIHBsYXRmb3JtIHN1cHBvcnRzXG52YXIgcyA9IGN1cnJlbnQoZG9jLmRvY3VtZW50RWxlbWVudClcblx0LCBhZGQgPSBmdW5jdGlvbiAocHJvcCkge1xuXHRcdFx0cGxhdGZvcm1TdHlsZXNbcHJvcF0gPSB0cnVlO1xuXHRcdFx0Ly8gR3JhYiB0aGUgcHJlZml4IHN0eWxlXG5cdFx0XHRpZiAoIXBsYXRmb3JtUHJlZml4ICYmIHByb3AuY2hhckF0KDApID09ICctJykge1xuXHRcdFx0XHRwbGF0Zm9ybVByZWZpeCA9IC9eLVxcdystLy5leGVjKHByb3ApWzBdO1xuXHRcdFx0fVxuXHRcdH07XG5cbmlmIChzLmxlbmd0aCkge1xuXHRmb3IgKHZhciBpID0gMCwgbiA9IHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0YWRkKHNbaV0pO1xuXHR9XG59IGVsc2Uge1xuXHRmb3IgKHZhciBwcm9wIGluIHMpIHtcblx0XHRhZGQocHJvcCk7XG5cdH1cbn1cblxuLy8gU3RvcmUgb3BhY2l0eSBwcm9wZXJ0eSBuYW1lIChub3JtYWxpemUgSUUgb3BhY2l0eS9maWx0ZXIpXG52YXIgb3BhY2l0eSA9ICFwbGF0Zm9ybVN0eWxlc1snb3BhY2l0eSddICYmIHBsYXRmb3JtU3R5bGVzWydmaWx0ZXInXSA/ICdmaWx0ZXInIDogJ29wYWNpdHknO1xuXG4vLyBBUElcbmV4cG9ydHMuaXNTdXBwb3J0ZWQgPSBpc1N1cHBvcnRlZDtcbmV4cG9ydHMuZ2V0UHJlZml4ZWQgPSBnZXRQcmVmaXhlZDtcbmV4cG9ydHMuZ2V0U2hvcnRoYW5kID0gZ2V0U2hvcnRoYW5kO1xuZXhwb3J0cy5nZXRBbGwgPSBnZXRBbGw7XG5leHBvcnRzLmV4cGFuZFNob3J0aGFuZCA9IGV4cGFuZFNob3J0aGFuZDtcbmV4cG9ydHMucGFyc2VPcGFjaXR5ID0gcGFyc2VPcGFjaXR5O1xuZXhwb3J0cy5nZXRPcGFjaXR5VmFsdWUgPSBnZXRPcGFjaXR5VmFsdWU7XG5leHBvcnRzLnBhcnNlTnVtYmVyID0gcGFyc2VOdW1iZXI7XG5leHBvcnRzLnBhcnNlVHJhbnNmb3JtID0gcGFyc2VUcmFuc2Zvcm07XG5leHBvcnRzLmdldFN0eWxlID0gZ2V0U3R5bGU7XG5leHBvcnRzLmdldE51bWVyaWNTdHlsZSA9IGdldE51bWVyaWNTdHlsZTtcbmV4cG9ydHMuZ2V0RG9jdW1lbnRTdHlsZSA9IGdldERvY3VtZW50U3R5bGU7XG5leHBvcnRzLnNldFN0eWxlID0gc2V0U3R5bGU7XG5leHBvcnRzLmNsZWFyU3R5bGUgPSBjbGVhclN0eWxlO1xuZXhwb3J0cy5wbGF0Zm9ybVN0eWxlcyA9IHBsYXRmb3JtU3R5bGVzO1xuZXhwb3J0cy5wbGF0Zm9ybVByZWZpeCA9IHBsYXRmb3JtUHJlZml4O1xuLy8gQ1NTMyBmZWF0dXJlIHRlc3RzIChhbHNvIGZvcmNlcyBjYWNoZSBpbmNsdXNpb24pXG5leHBvcnRzLmhhc1RyYW5zaXRpb25zID0gaXNTdXBwb3J0ZWQoJ3RyYW5zaXRpb24nKTtcbmV4cG9ydHMuaGFzVHJhbnNmb3JtcyA9IGlzU3VwcG9ydGVkKCd0cmFuc2Zvcm0nKTtcbmV4cG9ydHMuaGFzM0RUcmFuc2Zvcm1zID0gKGZ1bmN0aW9uICgpIHtcblx0aWYgKGV4cG9ydHMuaGFzVHJhbnNmb3Jtcykge1xuXHRcdHZhciBwcm9wID0gY2FtZWxDYXNlKGdldFByZWZpeGVkKCd0cmFuc2Zvcm0nKSk7XG5cdFx0ZWwuc3R5bGVbcHJvcF0gPSAndHJhbnNsYXRlWigxMHB4KSc7XG5cdFx0cmV0dXJuIGVsLnN0eWxlW3Byb3BdICE9ICcnO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0pKCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmICdwcm9wZXJ0eScgaXMgc3VwcG9ydGVkIG9uIHRoaXMgcGxhdGZvcm1cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc1N1cHBvcnRlZCAocHJvcGVydHkpIHtcblx0dmFyIHByb3BzID0gW3Byb3BlcnR5LCBwbGF0Zm9ybVByZWZpeCArIHByb3BlcnR5XVxuXHRcdCwgc3VwcG9ydCA9IGZhbHNlXG5cdFx0LCBwcm9wO1xuXG5cdGZvciAodmFyIGkgPSAwLCBuID0gcHJvcHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0cHJvcCA9IHByb3BzW2ldO1xuXHRcdC8vIFVzZSBjYWNoZWRcblx0XHRpZiAoZXhwb3J0cy5wbGF0Zm9ybVN0eWxlc1twcm9wXSkgcmV0dXJuIHRydWU7XG5cdFx0aWYgKHR5cGVvZiBlbC5zdHlsZVtwcm9wXSA9PT0gJ3N0cmluZydcblx0XHRcdHx8IHR5cGVvZiBlbC5zdHlsZVtjYW1lbENhc2UocHJvcCldID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRzdXBwb3J0ID0gdHJ1ZTtcblx0XHRcdFx0ZXhwb3J0cy5wbGF0Zm9ybVN0eWxlc1twcm9wXSA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdXBwb3J0O1xufVxuXG4vKipcbiAqIFJldHJpZXZlIHRoZSB2ZW5kb3IgcHJlZml4ZWQgdmVyc2lvbiBvZiB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0UHJlZml4ZWQgKHByb3BlcnR5KSB7XG5cdGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdzdHJpbmcnKSB7XG5cdFx0Ly8gSGFuZGxlIHRyYW5zZm9ybSBwc2V1ZG8tcHJvcGVydGllc1xuXHRcdGlmICh0cmFuc2Zvcm1bcHJvcGVydHldKSB7XG5cdFx0XHRwcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nO1xuXHRcdH1cblxuXHRcdGlmIChleHBvcnRzLnBsYXRmb3JtU3R5bGVzW3Byb3BlcnR5XSkgcmV0dXJuIHByb3BlcnR5O1xuXG5cdFx0aWYgKGlzU3VwcG9ydGVkKHByb3BlcnR5KSkge1xuXHRcdFx0aWYgKGV4cG9ydHMucGxhdGZvcm1TdHlsZXNbcGxhdGZvcm1QcmVmaXggKyBwcm9wZXJ0eV0pIHtcblx0XHRcdFx0cHJvcGVydHkgPSBwbGF0Zm9ybVByZWZpeCArIHByb3BlcnR5O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwcm9wZXJ0eTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIHByb3h5IHByb3BlcnR5IHRvIHVzZSBmb3Igc2hvcnRoYW5kIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0U2hvcnRoYW5kIChwcm9wZXJ0eSkge1xuXHRpZiAoc2hvcnRoYW5kW3Byb3BlcnR5XSAhPSBudWxsKSB7XG5cdFx0cmV0dXJuIHNob3J0aGFuZFtwcm9wZXJ0eV1bMF07XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHByb3BlcnR5O1xuXHR9XG59XG5cbi8qKlxuICogUmV0cmlldmUgYWxsIHBvc3NpYmxlIHZhcmlhdGlvbnMgb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsIChwcm9wZXJ0eSkge1xuXHR2YXIgYWxsID0gW107XG5cblx0Ly8gSGFuZGxlIHRyYW5zZm9ybSBwc2V1ZG8tcHJvcGVydGllc1xuXHRpZiAodHJhbnNmb3JtW3Byb3BlcnR5XSkge1xuXHRcdHByb3BlcnR5ID0gJ3RyYW5zZm9ybSc7XG5cdH1cblxuXHRhbGwucHVzaChwcm9wZXJ0eSk7XG5cdC8vIEhhbmRsZSBzaG9ydGhhbmRzXG5cdGlmIChzaG9ydGhhbmRbcHJvcGVydHldKSB7XG5cdFx0YWxsID0gYWxsLmNvbmNhdChzaG9ydGhhbmRbcHJvcGVydHldKTtcblx0fVxuXHQvLyBBdXRvbWF0aWNhbGx5IGFkZCB2ZW5kb3IgcHJlZml4XG5cdGZvciAodmFyIGkgPSAwLCBuID0gYWxsLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdGFsbC5wdXNoKHBsYXRmb3JtUHJlZml4ICsgYWxsW2ldKTtcblx0fVxuXG5cdHJldHVybiBhbGw7XG59XG5cbi8qKlxuICogRXhwYW5kIHNob3J0aGFuZCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybnMge09iamVjdHxTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGV4cGFuZFNob3J0aGFuZCAocHJvcGVydHksIHZhbHVlKSB7XG5cdGlmIChzaG9ydGhhbmRbcHJvcGVydHldICE9IG51bGwpIHtcblx0XHR2YXIgcHJvcHMgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMCwgbiA9IHNob3J0aGFuZFtwcm9wZXJ0eV0ubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRwcm9wc1tzaG9ydGhhbmRbcHJvcGVydHldW2ldXSA9IHZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcHM7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHByb3BlcnR5O1xuXHR9XG59XG5cbi8qKlxuICogUGFyc2UgY3VycmVudCBvcGFjaXR5IHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlT3BhY2l0eSAodmFsdWUpIHtcblx0dmFyIG1hdGNoO1xuXHRpZiAodmFsdWUgPT09ICcnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdC8vIElFIGNhc2Vcblx0fSBlbHNlIGlmIChvcGFjaXR5ID09PSAnZmlsdGVyJykge1xuXHRcdG1hdGNoID0gdmFsdWUubWF0Y2goUkVfSUVfT1BBQ0lUWSk7XG5cdFx0aWYgKG1hdGNoICE9IG51bGwpIHtcblx0XHRcdHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApIC8gMTAwO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9wYWNpdHkgdG8gSUUgZmlsdGVyIHN5bnRheFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRPcGFjaXR5VmFsdWUgKHZhbHVlKSB7XG5cdHZhciB2YWwgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblx0aWYgKG9wYWNpdHkgPT09ICdmaWx0ZXInKSB7XG5cdFx0dmFsID0gXCJhbHBoYShvcGFjaXR5PVwiICsgKHZhbCAqIDEwMCkgKyBcIilcIjtcblx0fVxuXHRyZXR1cm4gdmFsO1xufVxuXG4vKipcbiAqIFNwbGl0IGEgdmFsdWUgaW50byBhIG51bWJlciBhbmQgdW5pdFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2VOdW1iZXIgKHZhbHVlLCBwcm9wZXJ0eSkge1xuXHR2YXIgY2hhbm5lbHMsIG51bSwgdW5pdCwgdW5pdFRlc3Q7XG5cblx0aWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gJ25vbmUnKSB7XG5cdFx0dmFsdWUgPSAwO1xuXHR9XG5cblx0Ly8gSGFuZGxlIGFycmF5cyBvZiB2YWx1ZXMgKHRyYW5zbGF0ZSwgc2NhbGUpXG5cdGlmIChpZGVudGlmeS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0cmV0dXJuIHBhcnNlTnVtYmVyKHZhbCwgcHJvcGVydHkpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gSGFuZGxlIGNvbG91cnNcblx0aWYgKGNvbG91cltwcm9wZXJ0eV0pIHtcblx0XHQvLyByZ2IoKVxuXHRcdGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLmNoYXJBdCgwKSAhPT0gJyMnKSB7XG5cdFx0XHRjaGFubmVscyA9IFJFX1JHQi5leGVjKHZhbHVlKTtcblx0XHRcdGlmIChjaGFubmVscykge1xuXHRcdFx0XHRyZXR1cm4gW1wiI1wiICsgKCgxIDw8IDI0KSB8IChjaGFubmVsc1sxXSA8PCAxNikgfCAoY2hhbm5lbHNbMl0gPDwgOCkgfCBjaGFubmVsc1szXSkudG9TdHJpbmcoMTYpLnNsaWNlKDEpLCAnaGV4J107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gWycjZmZmZmZmJywgJ2hleCddO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW3ZhbHVlIHx8ICcjZmZmZmZmJywgJ2hleCddO1xuXHRcdH1cblxuXHQvLyBIYW5kbGUgbnVtYmVyc1xuXHR9IGVsc2Uge1xuXHRcdG51bSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXHRcdGlmIChpZGVudGlmeS5pc05hTihudW0pKSB7XG5cdFx0XHRyZXR1cm4gW3ZhbHVlLCAnJ107XG5cdFx0fSBlbHNlIHtcblx0XHRcdHVuaXRUZXN0ID0gUkVfVU5JVFMuZXhlYyh2YWx1ZSk7XG5cdFx0XHQvLyBTZXQgdW5pdCBvciBkZWZhdWx0XG5cdFx0XHR1bml0ID0gKHVuaXRUZXN0ICE9IG51bGwpXG5cdFx0XHRcdD8gdW5pdFRlc3RbMV1cblx0XHRcdFx0OiAoKG51bWVyaWNbcHJvcGVydHldICE9IG51bGwpXG5cdFx0XHRcdFx0XHQ/IG51bWVyaWNbcHJvcGVydHldXG5cdFx0XHRcdFx0XHQ6ICdweCcpO1xuXHRcdFx0cmV0dXJuIFtudW0sIHVuaXRdO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFJldHJpZXZlIGEgJ3Byb3BlcnR5JyBmcm9tIGEgdHJhbnNmb3JtIDJkIG9yIDNkICdtYXRyaXgnXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gbWF0cml4XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtTdHJpbmd8TnVtYmVyfEFycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZVRyYW5zZm9ybSAobWF0cml4LCBwcm9wZXJ0eSkge1xuXHR2YXIgbSA9IG1hdHJpeFN0cmluZ1RvQXJyYXkobWF0cml4KVxuXHRcdCwgaXMzRCA9IChtICYmIG0ubGVuZ3RoID4gNikgPyAxIDogMDtcblxuXHRpZiAobSkge1xuXHRcdHN3aXRjaCAocHJvcGVydHkpIHtcblx0XHRcdGNhc2UgJ21hdHJpeCc6XG5cdFx0XHRjYXNlICdtYXRyaXgzZCc6XG5cdFx0XHRcdHJldHVybiBtO1xuXHRcdFx0Y2FzZSAndHJhbnNsYXRlWCc6XG5cdFx0XHRjYXNlICd0cmFuc2xhdGVZJzpcblx0XHRcdFx0cmV0dXJuICcnXG5cdFx0XHRcdFx0KyBtW01BVFJJWF9QUk9QRVJUWV9JTkRFWFtwcm9wZXJ0eV1baXMzRF1dXG5cdFx0XHRcdFx0KyAncHgnO1xuXHRcdFx0Y2FzZSAndHJhbnNsYXRlWic6XG5cdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdCsgKGlzM0QgPyBtW01BVFJJWF9QUk9QRVJUWV9JTkRFWFtwcm9wZXJ0eV1baXMzRF1dIDogJzAnKVxuXHRcdFx0XHRcdCsgJ3B4Jztcblx0XHRcdGNhc2UgJ3RyYW5zbGF0ZSc6XG5cdFx0XHRcdHJldHVybiBbcGFyc2VUcmFuc2Zvcm0obWF0cml4LCAndHJhbnNsYXRlWCcpLCBwYXJzZVRyYW5zZm9ybShtYXRyaXgsICd0cmFuc2xhdGVZJyldO1xuXHRcdFx0Y2FzZSAndHJhbnNsYXRlM2QnOlxuXHRcdFx0XHRyZXR1cm4gW3BhcnNlVHJhbnNmb3JtKG1hdHJpeCwgJ3RyYW5zbGF0ZVgnKSwgcGFyc2VUcmFuc2Zvcm0obWF0cml4LCAndHJhbnNsYXRlWScpLCBwYXJzZVRyYW5zZm9ybShtYXRyaXgsICd0cmFuc2xhdGVaJyldO1xuXHRcdFx0Y2FzZSAnc2NhbGVYJzpcblx0XHRcdGNhc2UgJ3NjYWxlWSc6XG5cdFx0XHRcdHJldHVybiBtW01BVFJJWF9QUk9QRVJUWV9JTkRFWFtwcm9wZXJ0eV1baXMzRF1dO1xuXHRcdFx0Y2FzZSAnc2NhbGVaJzpcblx0XHRcdFx0cmV0dXJuIGlzM0QgPyBtWzEwXSA6IDE7XG5cdFx0XHRjYXNlICdzY2FsZSc6XG5cdFx0XHRcdHJldHVybiBbcGFyc2VUcmFuc2Zvcm0obWF0cml4LCAnc2NhbGVYJyksIHBhcnNlVHJhbnNmb3JtKG1hdHJpeCwgJ3NjYWxlWScpXTtcblx0XHRcdGNhc2UgJ3NjYWxlM2QnOlxuXHRcdFx0XHRyZXR1cm4gW3BhcnNlVHJhbnNmb3JtKG1hdHJpeCwgJ3NjYWxlWCcpLCBwYXJzZVRyYW5zZm9ybShtYXRyaXgsICdzY2FsZVknKSwgcGFyc2VUcmFuc2Zvcm0obWF0cml4LCAnc2NhbGVaJyldO1xuXHRcdFx0Y2FzZSAncm90YXRlJzpcblx0XHRcdGNhc2UgJ3JvdGF0ZVknOlxuXHRcdFx0Y2FzZSAncm90YXRlWic6XG5cdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdCsgKE1hdGguYWNvcyhtWzBdKSAqIDE4MCkgLyBNYXRoLlBJXG5cdFx0XHRcdFx0KyAnZGVnJztcblx0XHRcdGNhc2UgJ3JvdGF0ZVgnOlxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHRcdFx0XHQrIChNYXRoLmFjb3MobVs1XSkgKiAxODApIC8gTWF0aC5QSVxuXHRcdFx0XHRcdCsgJ2RlZyc7XG5cdFx0XHRjYXNlICdza2V3WCc6XG5cdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdCsgKE1hdGguYXRhbihtWzJdKSAqIDE4MCkgLyBNYXRoLlBJXG5cdFx0XHRcdFx0KyAnZGVnJztcblx0XHRcdGNhc2UgJ3NrZXdZJzpcblx0XHRcdFx0cmV0dXJuICcnXG5cdFx0XHRcdFx0KyAoTWF0aC5hdGFuKG1bMV0pICogMTgwKSAvIE1hdGguUElcblx0XHRcdFx0XHQrICdkZWcnO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtYXRyaXg7XG59XG5cbi8qKlxuICogQ29udmVydCBhIG1hdHJpeCBwcm9wZXJ0eSB0byBhIHRyYW5zZm9ybSBzdHlsZSBzdHJpbmdcbiAqIEhhbmRsZXMgZXhpc3RpbmcgdHJhbnNmb3JtcyBhbmQgc3BlY2lhbCBncm91cGVkIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gdmFsdWVcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlVHJhbnNmb3JtIChlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcblx0dmFyIG1hdHJpeCA9IGN1cnJlbnQoZWxlbWVudCwgZ2V0UHJlZml4ZWQocHJvcGVydHkpKVxuXHRcdCwgbSwgbTEsIGlzM0QsIGlkeCwgbGVuO1xuXG5cdGlmIChtYXRyaXggPT0gJ25vbmUnKSBtYXRyaXggPSAnJztcblxuXHQvLyBSZXNldCBleGlzdGluZyBtYXRyaXgsIHByZXNlcnZpbmcgdHJhbnNsYXRpb25zXG5cdGlmIChtYXRyaXgpIHtcblx0XHRpZiAobSA9IG1hdHJpeFN0cmluZ1RvQXJyYXkobWF0cml4KSkge1xuXHRcdFx0aXMzRCA9IG0ubGVuZ3RoID4gNiA/IDEgOiAwO1xuXHRcdFx0bGVuID0gaXMzRCA/IDMgOiAyO1xuXHRcdFx0aWR4ID0gaXMzRCA/IDEyIDogNDtcblx0XHRcdC8vIFByZXNlcnZlIHRyYW5zbGF0aW9uc1xuXHRcdFx0aWYgKCEofnByb3BlcnR5LmluZGV4T2YoJ3RyYW5zbGF0ZScpKSkge1xuXHRcdFx0XHRtMSA9IE1BVFJJWF9JREVOVElUWVtpczNEXS5zbGljZSgwLCBpZHgpXG5cdFx0XHRcdFx0LmNvbmNhdChtLnNsaWNlKGlkeCwgaWR4ICsgbGVuKSk7XG5cdFx0XHRcdGlmIChpczNEKSBtMS5wdXNoKE1BVFJJWF9JREVOVElUWVtpczNEXS5zbGljZSgtMSkpO1xuXHRcdFx0XHRtID0gbTE7XG5cdFx0XHQvLyBQcmVzZXJ2ZSB0cmFuc2xhdGlvbnMgYW5kIG51bGxpZnkgY2hhbmdlZFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHByb3BlcnR5ID09ICd0cmFuc2xhdGUnIHx8IHByb3BlcnR5ID09ICd0cmFuc2xhdGUzZCcpIHtcblx0XHRcdFx0XHRtMSA9IG0uc2xpY2UoMCwgaWR4KVxuXHRcdFx0XHRcdFx0LmNvbmNhdChNQVRSSVhfSURFTlRJVFlbaXMzRF0uc2xpY2UoaWR4LCBpZHggKyBsZW4pKTtcblx0XHRcdFx0XHRpZiAoaXMzRCkgbTEucHVzaChtLnNsaWNlKC0xKSk7XG5cdFx0XHRcdFx0bSA9IG0xO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHByb3BlcnR5ID09ICd0cmFuc2xhdGVYJyB8fCBwcm9wZXJ0eSA9PSAndHJhbnNsYXRlWScgfHwgcHJvcGVydHkgPT0gJ3RyYW5zbGF0ZVonKSB7XG5cdFx0XHRcdFx0aWR4ID0gTUFUUklYX1BST1BFUlRZX0lOREVYW3Byb3BlcnR5XVtpczNEXTtcblx0XHRcdFx0XHRpZiAoaWR4KSBtW2lkeF0gPSBNQVRSSVhfSURFTlRJVFlbaXMzRF1baWR4XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtYXRyaXggPSBpczNEID8gJ21hdHJpeDNkJyA6ICdtYXRyaXgnXG5cdFx0XHRcdCsgJygnXG5cdFx0XHRcdCsgbS5qb2luKCcsICcpXG5cdFx0XHRcdCsgJykgJztcblx0XHR9XG5cdH1cblxuXHRpZiAobnVtZXJpY1twcm9wZXJ0eV0gIT0gbnVsbCkge1xuXHRcdHJldHVybiAnJ1xuXHRcdFx0KyBtYXRyaXhcblx0XHRcdCsgcHJvcGVydHlcblx0XHRcdCsgJygnXG5cdFx0XHQrIHZhbHVlXG5cdFx0XHQrICcpJztcblx0Ly8gR3JvdXBlZCBwcm9wZXJ0aWVzXG5cdH0gZWxzZSB7XG5cdFx0c3dpdGNoIChwcm9wZXJ0eSkge1xuXHRcdFx0Y2FzZSAndHJhbnNmb3JtJzpcblx0XHRcdGNhc2UgJ3RyYW5zZm9ybTNkJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0Y2FzZSAnbWF0cml4Jzpcblx0XHRcdGNhc2UgJ21hdHJpeDNkJzpcblx0XHRcdFx0cmV0dXJuICcnXG5cdFx0XHRcdFx0KyBwcm9wZXJ0eVxuXHRcdFx0XHRcdCsgJygnXG5cdFx0XHRcdFx0KyB2YWx1ZVxuXHRcdFx0XHRcdCsgJyknO1xuXHRcdFx0Y2FzZSAndHJhbnNsYXRlJzpcblx0XHRcdGNhc2UgJ3RyYW5zbGF0ZTNkJzpcblx0XHRcdFx0aWYgKGlkZW50aWZ5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRcdFx0Ly8gQWRkIGRlZmF1bHQgdW5pdFxuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiAhaWRlbnRpZnkuaXNTdHJpbmcoaXRlbSkgPyBpdGVtICsgJ3B4JzogaXRlbTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5qb2luKCcsICcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdCsgbWF0cml4XG5cdFx0XHRcdFx0KyBwcm9wZXJ0eVxuXHRcdFx0XHRcdCsgJygnXG5cdFx0XHRcdFx0KyB2YWx1ZVxuXHRcdFx0XHRcdCsgJyknO1xuXHRcdFx0Y2FzZSAnc2NhbGUnOlxuXHRcdFx0Y2FzZSAnc2NhbGUzZCc6XG5cdFx0XHRcdGlmIChpZGVudGlmeS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuam9pbignLCAnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHRcdFx0XHQrIG1hdHJpeFxuXHRcdFx0XHRcdCsgcHJvcGVydHlcblx0XHRcdFx0XHQrICcoJ1xuXHRcdFx0XHRcdCsgdmFsdWVcblx0XHRcdFx0XHQrICcpJztcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgc3R5bGUgZm9yICdwcm9wZXJ0eSdcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBnZXRTdHlsZSAoZWxlbWVudCwgcHJvcGVydHkpIHtcblx0dmFyIHByb3AsIHZhbHVlO1xuXG5cdC8vIFNwZWNpYWwgY2FzZSBmb3Igb3BhY2l0eVxuXHRpZiAocHJvcGVydHkgPT09ICdvcGFjaXR5Jykge1xuXHRcdHJldHVybiBwYXJzZU9wYWNpdHkoY3VycmVudChlbGVtZW50LCBvcGFjaXR5KSk7XG5cdH1cblxuXHQvLyBSZXRyaWV2ZSBsb25naGFuZCBhbmQgcHJlZml4ZWQgdmVyc2lvblxuXHRwcm9wID0gZ2V0UHJlZml4ZWQoZ2V0U2hvcnRoYW5kKHByb3BlcnR5KSk7XG5cdHZhbHVlID0gY3VycmVudChlbGVtZW50LCBwcm9wKTtcblxuXHQvLyBTcGVjaWFsIGNhc2UgZm9yIHRyYW5zZm9ybVxuXHRpZiAodHJhbnNmb3JtW3Byb3BlcnR5XSkge1xuXHRcdHJldHVybiBwYXJzZVRyYW5zZm9ybSh2YWx1ZSwgcHJvcGVydHkpO1xuXHR9XG5cblx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdGNhc2UgJyc6XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRjYXNlICdhdXRvJzpcblx0XHRcdHJldHVybiAwO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgbnVtZXJpYyB2YWx1ZSBmb3IgJ3Byb3BlcnR5J1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldE51bWVyaWNTdHlsZSAoZWxlbWVudCwgcHJvcGVydHkpIHtcblx0cmV0dXJuIHBhcnNlTnVtYmVyKGdldFN0eWxlKGVsZW1lbnQsIHByb3BlcnR5KSwgcHJvcGVydHkpO1xufVxuXG4vKipcbiAqIFJldHJpZXZlIHRoZSAncHJvcGVydHknIGZvciBtYXRjaGluZyAnc2VsZWN0b3InIHJ1bGUgaW4gYWxsIGRvY3VtZW50IHN0eWxlc2hlZXRzXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnRTdHlsZSAoc2VsZWN0b3IsIHByb3BlcnR5KSB7XG5cdHZhciBzdHlsZVNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzXG5cdFx0LCBzaGVldCwgcnVsZXMsIHJ1bGU7XG5cblx0aWYgKHN0eWxlU2hlZXRzKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIG4gPSBzdHlsZVNoZWV0cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdHNoZWV0ID0gc3R5bGVTaGVldHNbaV07XG5cdFx0XHRpZiAocnVsZXMgPSBzaGVldC5ydWxlcyB8fCBzaGVldC5jc3NSdWxlcykge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMCwgbSA9IHJ1bGVzLmxlbmd0aDsgaiA8IG07IGorKykge1xuXHRcdFx0XHRcdHJ1bGUgPSBydWxlc1tqXTtcblx0XHRcdFx0XHRpZiAoc2VsZWN0b3IgPT09IHJ1bGUuc2VsZWN0b3JUZXh0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gJyc7XG59XG5cbi8qKlxuICogU2V0IHRoZSBzdHlsZSBmb3IgJ3Byb3BlcnR5J1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGUgKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSkge1xuXHR2YXIgcHJvcCwgbWF0cml4O1xuXG5cdC8vIEV4cGFuZCBzaG9ydGhhbmRzXG5cdHByb3AgPSBleHBhbmRTaG9ydGhhbmQocHJvcGVydHksIHZhbHVlKTtcblx0XG5cdC8vIEhhbmRsZSBwcm9wZXJ0eSBoYXNoIHJldHVybmVkIGZyb20gZXhwYW5kU2hvcnRoYW5kXG5cdGlmIChpZGVudGlmeS5pc09iamVjdChwcm9wKSkge1xuXHRcdGZvciAodmFyIHAgaW4gcHJvcCkge1xuXHRcdFx0c2V0U3R5bGUoZWxlbWVudCwgcCwgcHJvcFtwXSk7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEhhbmRsZSBvcGFjaXR5XG5cdGlmIChwcm9wID09PSAnb3BhY2l0eScpIHtcblx0XHRwcm9wID0gb3BhY2l0eTtcblx0XHR2YWx1ZSA9IGdldE9wYWNpdHlWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHQvLyBMb29rIHVwIGRlZmF1bHQgbnVtZXJpYyB1bml0IGlmIG5vbmUgcHJvdmlkZWRcblx0aWYgKHZhbHVlICE9PSAnYXV0bydcblx0XHQmJiB2YWx1ZSAhPT0gJ2luaGVyaXQnXG5cdFx0JiYgbnVtZXJpY1twcm9wXVxuXHRcdCYmICFSRV9VTklUUy50ZXN0KHZhbHVlKSkge1xuXHRcdFx0dmFsdWUgKz0gbnVtZXJpY1twcm9wXTtcblx0fVxuXG5cdC8vIExvb2sgdXAgcHJlZml4ZWQgcHJvcGVydHlcblx0cHJvcCA9IGdldFByZWZpeGVkKHByb3ApO1xuXG5cdC8vIEhhbmRsZSBzcGVjaWFsIHRyYW5zZm9ybSBwcm9wZXJ0aWVzXG5cdGlmICh0cmFuc2Zvcm1bcHJvcGVydHldKSB7XG5cdFx0dmFsdWUgPSBnZW5lcmF0ZVRyYW5zZm9ybShlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpO1xuXHR9XG5cdGVsZW1lbnQuc3R5bGVbY2FtZWxDYXNlKHByb3ApXSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgc3R5bGUgZm9yICdwcm9wZXJ0eSdcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGNsZWFyU3R5bGUgKGVsZW1lbnQsIHByb3BlcnR5KSB7XG5cdHZhciBzdHlsZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnXG5cdFx0LCByZTtcblxuXHRpZiAoc3R5bGUpIHtcblx0XHRwcm9wZXJ0eSA9IGdldEFsbChwcm9wZXJ0eSkuam9pbignW1xcXFx3LV0qfCcpICsgJ1tcXFxcdy1dKic7XG5cblx0XHRyZSA9IG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMpKD86JyArIHByb3BlcnR5ICsgJyk6XFxcXHM/W147XSs7JywgJ2lnJyk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUucmVwbGFjZShyZSwgJycpKTtcblx0fVxufVxuXG4vKipcbiAqIFJldHJpZXZlIGN1cnJlbnQgY29tcHV0ZWQgc3R5bGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBjdXJyZW50IChlbGVtZW50LCBwcm9wZXJ0eSkge1xuXHR2YXIgdmFsdWU7XG5cblx0aWYgKHdpbi5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0aWYgKHByb3BlcnR5KSB7XG5cdFx0XHR2YWx1ZSA9IHdpbi5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpO1xuXHRcdFx0Ly8gVHJ5IHdpdGggY2FtZWwgY2FzaW5nXG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbCkgd2luLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjYW1lbENhc2UocHJvcGVydHkpKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHdpbi5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXHRcdH1cblx0Ly8gSUVcblx0fSBlbHNlIHtcblx0XHRpZiAocHJvcGVydHkpIHtcblx0XHRcdHZhbHVlID0gZWxlbWVudC5jdXJyZW50U3R5bGVbcHJvcGVydHldO1xuXHRcdFx0Ly8gVHJ5IHdpdGggY2FtZWwgY2FzaW5nXG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbCkgZWxlbWVudC5jdXJyZW50U3R5bGVbY2FtZWxDYXNlKHByb3BlcnR5KV07XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBlbGVtZW50LmN1cnJlbnRTdHlsZTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBDYW1lbENhc2UgJ3N0ciwgcmVtb3ZpbmcgJy0nXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYW1lbENhc2UgKHN0cikge1xuXHQvLyBJRSByZXF1aXJlcyB2ZW5kb3IgcHJlZml4ZWQgdmFsdWVzIHRvIHN0YXJ0IHdpdGggbG93ZXJjYXNlXG5cdGlmIChzdHIuaW5kZXhPZignLW1zLScpID09IDApIHN0ciA9IHN0ci5zbGljZSgxKTtcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC8tKFthLXpdfFswLTldKS9pZywgZnVuY3Rpb24oYWxsLCBsZXR0ZXIpIHtcblx0XHRyZXR1cm4gKGxldHRlciArICcnKS50b1VwcGVyQ2FzZSgpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0ICdtYXRyaXgnIHRvIEFycmF5XG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gbWF0cml4XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIG1hdHJpeFN0cmluZ1RvQXJyYXkgKG1hdHJpeCkge1xuXHRpZiAoaWRlbnRpZnkuaXNBcnJheShtYXRyaXgpKSB7XG5cdFx0cmV0dXJuIG1hdHJpeDtcblx0fSBlbHNlIGlmIChyZSA9IG1hdHJpeC5tYXRjaChSRV9NQVRSSVgpKSB7XG5cdFx0Ly8gQ29udmVydCBzdHJpbmcgdG8gYXJyYXlcblx0XHRyZXR1cm4gcmVbMV0uc3BsaXQoJywgJylcblx0XHRcdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQoaXRlbSk7XG5cdFx0XHR9KTtcblx0fVxufVxuIiwidmFyIHRleHRQcm9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnRleHRDb250ZW50XG5cdD8gJ3RleHRDb250ZW50J1xuXHQ6ICdpbm5lclRleHQnO1xuXG5leHBvcnRzLmdldFRleHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRyZXR1cm4gZWxlbWVudFt0ZXh0UHJvcF07XG59O1xuXG5leHBvcnRzLnNldFRleHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdGV4dCkge1xuXHRlbGVtZW50W3RleHRQcm9wXSA9IHRleHQ7XG59OyIsInZhciBIVE1MX0VWRU5UUyA9ICdjbGljayBkYmxjbGljayBtb3VzZXVwIG1vdXNlZG93biBjb250ZXh0bWVudSBtb3VzZXdoZWVsIG1vdXNlbXVsdGl3aGVlbCBET01Nb3VzZVNjcm9sbCBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIHNlbGVjdHN0YXJ0IHNlbGVjdGVuZCBrZXlkb3duIGtleXByZXNzIGtleXVwIG9yaWVudGF0aW9uY2hhbmdlIGZvY3VzIGJsdXIgY2hhbmdlIHJlc2V0IHNlbGVjdCBzdWJtaXQgbG9hZCB1bmxvYWQgYmVmb3JldW5sb2FkIHJlc2l6ZSBtb3ZlIERPTUNvbnRlbnRMb2FkZWQgcmVhZHlzdGF0ZWNoYW5nZSBtZXNzYWdlIGVycm9yIGFib3J0IHNjcm9sbCBzaG93IGlucHV0IGludmFsaWQgdG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwgZ2VzdHVyZXN0YXJ0IGdlc3R1cmVjaGFuZ2UgZ2VzdHVyZWVuZCB0ZXh0aW5wdXQgcmVhZHlzdGF0ZWNoYW5nZSBwYWdlc2hvdyBwYWdlaGlkZSBwb3BzdGF0ZSBoYXNoY2hhbmdlIG9mZmxpbmUgb25saW5lIGFmdGVycHJpbnQgYmVmb3JlcHJpbnQgZHJhZ3N0YXJ0IGRyYWdlbnRlciBkcmFnb3ZlciBkcmFnbGVhdmUgZHJhZyBkcm9wIGRyYWdlbmQgbG9hZHN0YXJ0IHByb2dyZXNzIHN1c3BlbmQgZW1wdGllZCBzdGFsbGVkIGxvYWRtZXRhZGF0YSBsb2FkZWRkYXRhIGNhbnBsYXkgY2FucGxheXRocm91Z2ggcGxheWluZyB3YWl0aW5nIHNlZWtpbmcgc2Vla2VkIGVuZGVkIGR1cmF0aW9uY2hhbmdlIHRpbWV1cGRhdGUgcGxheSBwYXVzZSByYXRlY2hhbmdlIHZvbHVtZWNoYW5nZSBjdWVjaGFuZ2UgY2hlY2tpbmcgbm91cGRhdGUgZG93bmxvYWRpbmcgY2FjaGVkIHVwZGF0ZXJlYWR5IG9ic29sZXRlJ1xuXHQsIEVWRU5UX1BST1BTID0gJ2FsdEtleSBhdHRyQ2hhbmdlIGF0dHJOYW1lIGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZGV0YWlsIGV2ZW50UGhhc2UgZ2V0TW9kaWZpZXJTdGF0ZSBpc1RydXN0ZWQgbWV0YUtleSByZWxhdGVkTm9kZSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHNyY0VsZW1lbnQgdGltZVN0YW1wIHZpZXcgd2hpY2ggcHJvcGVydHlOYW1lIGJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBkYXRhVHJhbnNmZXIgZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnQgd2hlZWxEZWx0YSB3aGVlbERlbHRhWCB3aGVlbERlbHRhWSB3aGVlbERlbHRhWiBjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlIGtleUlkZW50aWZpZXIga2V5TG9jYXRpb24gbG9jYXRpb24gdG91Y2hlcyB0YXJnZXRUb3VjaGVzIGNoYW5nZWRUb3VjaGVzIHNjYWxlIHJvdGF0aW9uIGRhdGEgb3JpZ2luIHNvdXJjZSBzdGF0ZSdcblxuXHQsIGRvbUhhbmRsZXJzID0ge31cblx0LCB1aWQgPSAxXG5cdCwgaHRtbEV2ZW50cyA9IHt9XG5cdCwgZXZlbnRQcm9wcyA9IHt9O1xuXG4vLyBDb252ZXJ0IHRvIGhhc2hcbmZvciAodmFyIGkgPSAwLCBldmVudHMgPSBIVE1MX0VWRU5UUy5zcGxpdCgnICcpLCBuID0gZXZlbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRodG1sRXZlbnRzW2V2ZW50c1tpXV0gPSB0cnVlO1xufVxuZm9yIChpID0gMCwgZXZlbnRzID0gRVZFTlRfUFJPUFMuc3BsaXQoJyAnKSwgbiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0ZXZlbnRQcm9wc1tldmVudHNbaV1dID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBmb3IgZXZlbnQgbm90aWZpY2F0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldF1cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0cy5vbiA9IGZ1bmN0aW9uICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSB7XG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09ICdzdHJpbmcnKSB7XG5cdFx0Y2FsbGJhY2sgPSB0eXBlO1xuXHRcdHR5cGUgPSB0YXJnZXQ7XG5cdFx0Ly8gQXNzaWduICd0YXJnZXQnIHRvIHRoaXNcblx0XHQvLyBpZiBub3QgbWl4ZWQgaW50byBhbiBvYmplY3QgdGhlIHRhcmdldCBiZWNvbWVzIHRoaXMgbW9kdWxlXG5cdFx0dGFyZ2V0ID0gdGhpcztcblx0fVxuXG5cdGlmICghdGFyZ2V0IHx8ICFjYWxsYmFjaykgcmV0dXJuIHRhcmdldDtcblxuXHRpZiAoaXNFbGVtZW50KHRhcmdldCkpIHtcblx0XHR2YXIgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWlkJylcblx0XHRcdCwgY2IgPSBjcmVhdGVET01IYW5kbGVyKGNhbGxiYWNrKTtcblxuXHRcdC8vIFN0b3JlIGlkIG9uIHRhcmdldCBhbmQgY3JlYXRlIGhhc2hcblx0XHRpZiAoIWlkKSB7XG5cdFx0XHRpZCA9IHVpZCsrO1xuXHRcdFx0dGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1pZCcsIGlkKTtcblx0XHRcdGRvbUhhbmRsZXJzW2lkXSA9IHt9O1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgY2FjaGUgYnkgZXZlbnQgdHlwZVxuXHRcdGlmICghKHR5cGUgaW4gZG9tSGFuZGxlcnNbaWRdKSkgZG9tSGFuZGxlcnNbaWRdW3R5cGVdID0gW107XG5cdFx0Ly8gU2tpcCBpZiBhbHJlYWR5IHJlZ2lzdGVyZWRcblx0XHRpZiAoIWZpbmRJblN0b3JlKGRvbUhhbmRsZXJzW2lkXVt0eXBlXSwgY2FsbGJhY2spKSB7XG5cdFx0XHRkb21IYW5kbGVyc1tpZF1bdHlwZV0ucHVzaCh7XG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcblx0XHRcdFx0Y2I6IGNiXG5cdFx0XHR9KTtcblx0XHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNiLCBmYWxzZSk7XG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cdFx0Ly8gU3RvcmUgYW5kIHJlZ2lzdGVyXG5cdFx0aWYgKHRhcmdldC5faGFuZGxlcnMgPT0gbnVsbCkgdGFyZ2V0Ll9oYW5kbGVycyA9IHt9O1xuXHRcdGlmICghKHR5cGUgaW4gdGFyZ2V0Ll9oYW5kbGVycykpIHRhcmdldC5faGFuZGxlcnNbdHlwZV0gPSBbXTtcblx0XHQvLyBTa2lwIGlmIGFscmVhZHkgcmVnaXN0ZXJlZFxuXHRcdGlmICghZmluZEluU3RvcmUodGFyZ2V0Ll9oYW5kbGVyc1t0eXBlXSwgY2FsbGJhY2spKSB7XG5cdFx0XHR0YXJnZXQuX2hhbmRsZXJzW3R5cGVdLnB1c2goe2NhbGxiYWNrOiBjYWxsYmFja30pO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoYWluXG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGZvciBvbmUgdGltZSBldmVudCBub3RpZmljYXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0XVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnRzLm9uY2UgPSBmdW5jdGlvbiAodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuXHRpZiAodHlwZW9mIHRhcmdldCA9PSAnc3RyaW5nJykge1xuXHRcdGNhbGxiYWNrID0gdHlwZTtcblx0XHR0eXBlID0gdGFyZ2V0O1xuXHRcdC8vIEFzc2lnbiAndGFyZ2V0JyB0byB0aGlzXG5cdFx0Ly8gaWYgbm90IG1peGVkIGludG8gYW4gb2JqZWN0IHRoZSB0YXJnZXQgYmVjb21lcyB0aGlzIG1vZHVsZVxuXHRcdHRhcmdldCA9IHRoaXM7XG5cdH1cblxuXHRpZiAoIXRhcmdldCB8fCAhY2FsbGJhY2spIHJldHVybiB0YXJnZXQ7XG5cblx0dmFyIGNiO1xuXG5cdC8vIFdyYXAgY2FsbGJhY2tcblx0ZXhwb3J0cy5vbih0YXJnZXQsIHR5cGUsIGNiID0gZnVuY3Rpb24oKSB7XG5cdFx0ZXhwb3J0cy5vZmYodGFyZ2V0LCB0eXBlLCBjYik7XG5cdFx0Y2FsbGJhY2suYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpO1xuXHR9KTtcblxuXHQvLyBDaGFpblxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIGZvciBldmVudCBub3RpZmljYXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0XVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnRzLm9mZiA9IGZ1bmN0aW9uICh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSB7XG5cdC8vIFRPRE86IHJlbW92ZSBhbGwgaGFuZGxlcnMgYnkgdHlwZSBpZiBubyBjYWxsYmFjaz9cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT0gJ3N0cmluZycpIHtcblx0XHRjYWxsYmFjayA9IHR5cGU7XG5cdFx0dHlwZSA9IHRhcmdldDtcblx0XHQvLyBBc3NpZ24gJ3RhcmdldCcgdG8gdGhpc1xuXHRcdC8vIGlmIG5vdCBtaXhlZCBpbnRvIGFuIG9iamVjdCB0aGUgdGFyZ2V0IGJlY29tZXMgdGhpcyBtb2R1bGVcblx0XHR0YXJnZXQgPSB0aGlzO1xuXHR9XG5cblx0aWYgKCF0YXJnZXQgfHwgIWNhbGxiYWNrKSByZXR1cm4gdGFyZ2V0O1xuXG5cdGlmIChpc0VsZW1lbnQodGFyZ2V0KSkge1xuXHRcdHZhciBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtaWQnKVxuXHRcdFx0LCBpdGVtO1xuXG5cdFx0Ly8gUmV0cmlldmUgZnJvbSBjYWNoZVxuXHRcdGlmIChpZCAmJiBkb21IYW5kbGVyc1tpZF0gJiYgZG9tSGFuZGxlcnNbaWRdW3R5cGVdKSB7XG5cdFx0XHQvLyBSZW1vdmVcblx0XHRcdGlmIChpdGVtID0gZmluZEluU3RvcmUoZG9tSGFuZGxlcnNbaWRdW3R5cGVdLCBjYWxsYmFjaywgdHJ1ZSkpIHtcblx0XHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaXRlbS5jYiwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9IGVsc2Uge1xuXHRcdGlmICh0YXJnZXQuX2hhbmRsZXJzICYmIHRhcmdldC5faGFuZGxlcnNbdHlwZV0pIHtcblx0XHRcdC8vIFJlbW92ZVxuXHRcdFx0ZmluZEluU3RvcmUodGFyZ2V0Ll9oYW5kbGVyc1t0eXBlXSwgY2FsbGJhY2ssIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoYWluXG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgYWxsIGV2ZW50c1xuICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRdXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnRzLm9mZkFsbCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0aWYgKCF0YXJnZXQpIHtcblx0XHQvLyBBc3NpZ24gJ3RhcmdldCcgdG8gdGhpc1xuXHRcdC8vIGlmIG5vdCBtaXhlZCBpbnRvIGFuIG9iamVjdCB0aGUgdGFyZ2V0IGJlY29tZXMgdGhpcyBtb2R1bGVcblx0XHR0YXJnZXQgPSB0aGlzO1xuXHR9XG5cblx0aWYgKGlzRWxlbWVudCh0YXJnZXQpKSB7XG5cdFx0dmFyIGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1pZCcpO1xuXG5cdFx0aWYgKGlkICYmIGRvbUhhbmRsZXJzW2lkXSkge1xuXHRcdFx0Ly8gVW5yZWdpc3RlciBhbGwgZXZlbnRzXG5cdFx0XHRmb3IgKHZhciB0eXBlIGluIGRvbUhhbmRsZXJzW2lkXSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbiA9IGRvbUhhbmRsZXJzW2lkXVt0eXBlXS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBkb21IYW5kbGVyc1tpZF1bdHlwZV1baV0uY2IsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQ2xlYXIgY2FjaGVcblx0XHRcdGRvbUhhbmRsZXJzW2lkXSA9IHt9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBDbGVhciBjYWNoZVxuXHRcdHRhcmdldC5faGFuZGxlcnMgPSB7fTtcblx0fVxuXG5cdC8vIENoYWluXG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIERpc3BhdGNoIGFuIGV2ZW50IHRvIHJlZ2lzdGVyZWQgbGlzdGVuZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldF1cbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0cy50cmlnZ2VyID0gZnVuY3Rpb24gKHRhcmdldCwgdHlwZSwgZGF0YSkge1xuXHRpZiAodHlwZW9mIHRhcmdldCA9PSAnc3RyaW5nJykge1xuXHRcdGRhdGEgPSB0eXBlO1xuXHRcdHR5cGUgPSB0YXJnZXQ7XG5cdFx0Ly8gQXNzaWduICd0YXJnZXQnIHRvIHRoaXNcblx0XHQvLyBpZiBub3QgbWl4ZWQgaW50byBhbiBvYmplY3QgdGhlIHRhcmdldCBiZWNvbWVzIHRoaXMgbW9kdWxlXG5cdFx0dGFyZ2V0ID0gdGhpcztcblx0fVxuXG5cdGlmICghdGFyZ2V0KSByZXR1cm4gbnVsbDtcblxuXHR2YXIgZXZ0LCBsaXN0O1xuXG5cdGlmIChpc0VsZW1lbnQodGFyZ2V0KSkge1xuXHRcdC8vIENyZWF0ZSBET00gZXZlbnQgYmFzZWQgb24gdHlwZVxuXHRcdHZhciBpc0h0bWxFdmVudCA9IHR5cGUgaW4gaHRtbEV2ZW50cztcblx0XHRldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChpc0h0bWxFdmVudCA/ICdIVE1MRXZlbnRzJyA6ICdVSUV2ZW50cycpO1xuXHRcdGV2dFtpc0h0bWxFdmVudCA/ICdpbml0RXZlbnQnIDogJ2luaXRVSUV2ZW50J10odHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxKTtcblx0XHRldnQuZGF0YSA9IGRhdGE7XG5cdFx0cmV0dXJuIHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2dCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUmUtdHJpZ2dlcjogaGFuZGxlIHBhc3NlZCBpbiBldmVudCBvYmplY3Rcblx0XHRpZiAoJ29iamVjdCcgPT0gdHlwZW9mIHR5cGUpIHtcblx0XHRcdFx0ZXZ0ID0gdHlwZTtcblx0XHRcdFx0ZXZ0LnJlbGF0ZWRUYXJnZXQgPSBldnQudGFyZ2V0O1xuXHRcdFx0XHRldnQudGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdFx0XHR0eXBlID0gZXZ0LnR5cGU7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldC5faGFuZGxlcnMgJiYgdHlwZSBpbiB0YXJnZXQuX2hhbmRsZXJzKSB7XG5cdFx0XHRldnQgPSBldnQgfHwgbmV3IEV2ZW50KHt0YXJnZXQ6dGFyZ2V0LCB0eXBlOnR5cGUsIGRhdGE6ZGF0YX0pO1xuXHRcdFx0Ly8gY29weSB0aGUgY2FsbGJhY2sgaGFzaCB0byBhdm9pZCBtdXRhdGlvbiBlcnJvcnNcblx0XHRcdGxpc3QgPSB0YXJnZXQuX2hhbmRsZXJzW3R5cGVdLnNsaWNlKCk7XG5cdFx0XHQvLyBza2lwIGxvb3AgaWYgb25seSBhIHNpbmdsZSBsaXN0ZW5lclxuXHRcdFx0aWYgKGxpc3QubGVuZ3RoID09IDEpIHtcblx0XHRcdFx0bGlzdFswXS5jYWxsYmFjay5jYWxsKHRhcmdldCwgZXZ0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBuID0gbGlzdC5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0XHQvLyBFeGl0IGlmIGV2ZW50IGhhcyBiZWVuIHN0b3BwZWRcblx0XHRcdFx0XHRpZiAoZXZ0LmlzU3RvcHBlZCkgYnJlYWs7XG5cdFx0XHRcdFx0bGlzdFtpXS5jYWxsYmFjay5jYWxsKHRhcmdldCwgZXZ0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydHMuX2hhbmRsZXJzID0gbnVsbDtcblxuLyoqXG4gKiBGaW5kICdjYWxsYmFjaycgaW4gJ3N0b3JlJyBhbmQgb3B0aW9uYWxseSAncmVtb3ZlJ1xuICogQHBhcmFtIHtBcnJheX0gc3RvcmVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtyZW1vdmVdXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBmaW5kSW5TdG9yZSAoc3RvcmUsIGNhbGxiYWNrLCByZW1vdmUpIHtcblx0dmFyIGl0ZW07XG5cblx0Zm9yICh2YXIgaSA9IDAsIG4gPSBzdG9yZS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRpdGVtID0gc3RvcmVbaV07XG5cdFx0aWYgKGl0ZW0uY2FsbGJhY2sgPT09IGNhbGxiYWNrKSB7XG5cdFx0XHRpZiAocmVtb3ZlKSBzdG9yZS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRyZXR1cm4gaXRlbTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBXcmFwICdjYWxsYmFjaycgaGFuZGxlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRE9NSGFuZGxlciAoY2FsbGJhY2spIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcblx0XHRjYWxsYmFjayhuZXcgRXZlbnQoZXZ0KSk7XG5cdH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgJ2VsZW1lbnQnIGlzIGEgRE9NRWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0VsZW1lbnQgKGVsZW1lbnQpIHtcblx0cmV0dXJuICEhKGVsZW1lbnRcblx0XHQmJiAoZWxlbWVudCA9PT0gd2luZG93XG5cdFx0fHwgZWxlbWVudC5ub2RlVHlwZSA9PT0gOVxuXHRcdHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDEpKTtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIEV2ZW50IChldmVudCkge1xuXHR2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XG5cblx0dGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcblx0dGhpcy5vcmlnaW5hbEV2ZW50ID0gZXZlbnQ7XG5cdHRoaXMudHlwZSA9IGV2ZW50LnR5cGU7XG5cdHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXG5cdC8vIEZpeCB0YXJnZXRzXG5cdGlmICh0YXJnZXQpIHtcblx0XHQvLyBBdm9pZCB0ZXh0IG5vZGVzXG5cdFx0aWYgKHRhcmdldC5ub2RlVHlwZSA9PT0gMykgdGhpcy50YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblx0XHQvLyBTVkcgZWxlbWVudFxuXHRcdGlmICh0YXJnZXQuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQgfHwgdGFyZ2V0LmNvcnJlc3BvbmRpbmdFbGVtZW50KSB0aGlzLnRhcmdldCA9IHRhcmdldC5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCB8fCB0YXJnZXQuY29ycmVzcG9uZGluZ0VsZW1lbnQ7XG5cdH1cblxuXHQvLyBDb3B5IHByb3BlcnRpZXNcblx0Zm9yICh2YXIgcHJvcCBpbiBldmVudFByb3BzKSB7XG5cdFx0aWYgKGV2ZW50UHJvcHMuaGFzT3duUHJvcGVydHkocHJvcCkpIHRoaXNbcHJvcF0gPSBldmVudFtwcm9wXTtcblx0fVxuXG5cdC8vIEZpeCBwcm9wZXJ0aWVzXG5cdHRoaXMua2V5Q29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG5cdHRoaXMucmlnaHRDbGljayA9IGV2ZW50LndoaWNoID09PSAzIHx8IGV2ZW50LmJ1dHRvbiA9PT0gMjtcblx0aWYgKGV2ZW50LnBhZ2VYIHx8IGV2ZW50LnBhZ2VZKSB7XG5cdFx0dGhpcy5jbGllbnRYID0gZXZlbnQucGFnZVg7XG5cdFx0dGhpcy5jbGllbnRZID0gZXZlbnQucGFnZVk7XG5cdH0gZWxzZSBpZiAoZXZlbnQuY2xpZW50WCB8fCBldmVudC5jbGllbnRZKSB7XG5cdFx0dGhpcy5jbGllbnRYID0gZXZlbnQuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcblx0XHR0aGlzLmNsaWVudFkgPSBldmVudC5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblx0fVxufVxuXG5FdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQpIHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cbkV2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbn07XG5cbkV2ZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnByZXZlbnREZWZhdWx0KCk7XG5cdHRoaXMuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG59XG4iLCJyZXF1aXJlKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKVxudmFyIHN0eWxlID0gcmVxdWlyZSgnZG9tLnN0eWxlJylcblx0LCBpZGVudGlmeSA9IHJlcXVpcmUoJ3V0aWwuaWRlbnRpZnknKVxuXHQsIGlzRnVuY3Rpb24gPSBpZGVudGlmeS5pc0Z1bmN0aW9uXG5cdCwgaXNTdHJpbmcgPSBpZGVudGlmeS5pc1N0cmluZ1xuXHQsIGlzQXJyYXkgPSBpZGVudGlmeS5pc0FycmF5XG5cdCwgaXNPYmplY3QgPSBpZGVudGlmeS5pc09iamVjdFxuXHQsIGNvbG91clV0aWwgPSByZXF1aXJlKCd1dGlsLmNvbG91cicpXG5cdCwgd2luID0gd2luZG93XG5cdCwgZG9jID0gd2luZG93LmRvY3VtZW50XG5cblx0LCBhbmltcyA9IHt9XG5cdCwgbGVuZ3RoID0gMFxuXHQsIHBvb2wgPSBbXVxuXHQsIHVpZCA9IDFcblx0LCBsYXN0ID0gMFxuXHQsIHJ1bm5pbmcgPSBmYWxzZVxuXG5cdCwgRlJBTUVfUkFURSA9IDYwXG5cdCwgREVGQVVMVF9EVVJBVElPTiA9IDUwMFxuXHQsIERFRkFVTFRfRUFTSU5HID0gcmVxdWlyZSgndXRpbC5lYXNlL2xpYi9jdWJpYycpLm91dEN1YmljXG5cdCwgUE9PTF9TSVpFID0gMTA7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5pbWF0ZTtcblxuLy8gUG9wdWxhdGUgb2JqZWN0IHBvb2xcbmZvciAodmFyIGkgPSAwLCBuID0gUE9PTF9TSVpFOyBpIDwgbjsgaSsrKSB7XG5cdHBvb2wucHVzaChuZXcgQW5pbSgpKTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSBhbiBBbmltIGluc3RhbmNlIGJvdW5kIHRvICd0YXJnZXQnXG4gKiBTZXQgJ2tlZXAnIHRvIHRydWUgdG8gcHJldmVudCBjbGVhbnVwXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtrZWVwXVxuICogQHJldHVybnMge0FuaW19XG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGUgKHRhcmdldCwga2VlcCkge1xuXHRpZiAoIXRhcmdldCkgcmV0dXJuO1xuXG5cdC8vIHJldXNlIGZyb20gdGhlIG9iamVjdCBwb29sXG5cdHZhciBhbmltID0gcG9vbC5sZW5ndGggPyBwb29sLnBvcCgpIDogbmV3IEFuaW0oKTtcblx0YW5pbS5pZCA9IHVpZCsrO1xuXHRhbmltLnRhcmdldCA9IHRhcmdldDtcblx0YW5pbS5rZWVwID0gKGtlZXAgIT0gbnVsbCkgPyBrZWVwIDogZmFsc2U7XG5cdHJldHVybiBhbmltO1xufVxuXG4vKipcbiAqIEFkZCAnYW5pbScgdG8gcmVuZGVyIGxvb3BcbiAqIEBwYXJhbSB7QW5pbX0gYW5pbVxuICovXG5mdW5jdGlvbiBhZGQgKGFuaW0pIHtcblx0aWYgKCFhbmltc1thbmltLmlkXSkge1xuXHRcdGFuaW1zW2FuaW0uaWRdID0gYW5pbTtcblx0XHRhbmltLmlzUnVubmluZyA9IHRydWU7XG5cdFx0bGVuZ3RoKys7XG5cdFx0Ly8gU3RhcnQgaWYgbm90IHJ1bm5pbmdcblx0XHRpZiAoIXJ1bm5pbmcpIHtcblx0XHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0bGFzdCA9IERhdGUubm93KCk7XG5cdFx0XHRvblRpY2soKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgJ2FuaW0nIGZyb20gcmVuZGVyIGxvb3BcbiAqIEBwYXJhbSB7QW5pbX0gYW5pbVxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFuaW0pIHtcblx0aWYgKGFuaW0uaXNSdW5uaW5nKSB7XG5cdFx0YW5pbS5pc1J1bm5pbmcgPSBmYWxzZTtcblx0XHRhbmltLmlzQ29tcGxldGUgPSBmYWxzZTtcblx0XHRhbmltLmR1cmF0aW9uID0gMDtcblx0XHRhbmltLmVsYXBzZWQgPSAwO1xuXHRcdGFuaW0uZGVsYXlCZWZvcmUgPSAwO1xuXHRcdGFuaW0uZGVsYXlBZnRlciA9IDA7XG5cdFx0YW5pbS50aWNrQ2FsbGJhY2tzID0gW107XG5cdFx0YW5pbS5jb21wbGV0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdGFuaW0ucHJvcGVydGllcyA9IHt9O1xuXHRcdGFuaW0uZWFzZSA9IERFRkFVTFRfRUFTSU5HO1xuXHRcdGFuaW0udXNpbmdDc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuXHRcdGRlbGV0ZSBhbmltc1thbmltLmlkXTtcblx0XHRsZW5ndGgtLTtcblx0XHQvLyBTdG9wIGlmIG5vbmUgYWN0aXZlXG5cdFx0aWYgKCFsZW5ndGgpIHJ1bm5pbmcgPSBmYWxzZTtcblx0fVxufVxuXG4vKipcbiAqIERlc3Ryb3kgJ2FuaW0nXG4gKiBAcGFyYW0ge0FuaW19IGFuaW1cbiAqL1xuZnVuY3Rpb24gZGVzdHJveSAoYW5pbSkge1xuXHQvLyBDaGVjayB0aGF0IHRoaXMgaXMgZWxpZ2libGUgZm9yIGRlc3RydWN0aW9uXG5cdGlmIChhbmltLmlkKSB7XG5cdFx0cmVtb3ZlKGFuaW0pO1xuXHRcdC8vIFJlc2V0XG5cdFx0YW5pbS5pZCA9IG51bGw7XG5cdFx0YW5pbS50YXJnZXQgPSBudWxsO1xuXHRcdGFuaW0ua2VlcCA9IGZhbHNlO1xuXHRcdHBvb2wucHVzaChhbmltKTtcblx0fVxufVxuXG4vKipcbiAqIFRpY2sgaGFuZGxlclxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVcbiAqL1xuZnVuY3Rpb24gb25UaWNrICh0aW1lKSB7XG5cdHZhciBub3cgPSBEYXRlLm5vdygpXG5cdFx0LCB0aWNrID0gbm93IC0gbGFzdDtcblxuXHQvLyBTdG9yZVxuXHRsYXN0ID0gbm93O1xuXHRmb3IgKHZhciBpZCBpbiBhbmltcykge1xuXHRcdHJlbmRlcihhbmltc1tpZF0sIHRpY2spO1xuXHR9XG5cdC8vIExvb3Bcblx0aWYgKHJ1bm5pbmcpIHdpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25UaWNrKTtcbn1cblxuXG4vKipcbiAqIFJlbmRlclxuICogQHBhcmFtIHtBbmltfSBhbmltXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZVxuICovXG5mdW5jdGlvbiByZW5kZXIgKGFuaW0sIHRpbWUpIHtcblx0dmFyIHByb3BzID0gYW5pbS5wcm9wZXJ0aWVzXG5cdFx0LCBzLCBlLCBjYWxsYmFjaywgY2FsbGJhY2tzLCBkdXIsIHByb3BPYmosIHZhbHVlO1xuXG5cdGFuaW0uZWxhcHNlZCArPSB0aW1lO1xuXHQvLyBNYWtlIHN1cmUgdG90YWwgdGltZSBkb2VzIG5vdCBleGNlZWQgZHVyYXRpb25cblx0ZHVyID0gKGFuaW0uZWxhcHNlZCA8IGFuaW0uZHVyYXRpb24pXG5cdFx0PyBhbmltLmVsYXBzZWRcblx0XHQ6IGFuaW0uZHVyYXRpb247XG5cblx0Ly8gSGFuZGxlIGRlbGF5IGJlZm9yZVxuXHRpZiAoYW5pbS5kZWxheUJlZm9yZSA+IDApIHtcblx0XHRhbmltLmRlbGF5QmVmb3JlIC09IHRpbWU7XG5cdFx0Ly8gUm91bmQgZG93biBpZiB1bmRlciAxIGZyYW1lXG5cdFx0aWYgKGFuaW0uZGVsYXlCZWZvcmUgPCAxNikge1xuXHRcdFx0YW5pbS5kZWxheUJlZm9yZSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0Ly8gVXBkYXRlIHByb3BlcnRpZXNcblx0aWYgKCFhbmltLmlzQ29tcGxldGUgJiYgYW5pbS5kZWxheUJlZm9yZSA8PSAwKSB7XG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuXHRcdFx0cHJvcE9iaiA9IHByb3BzW3Byb3BdO1xuXHRcdFx0Ly8gQWxsIHR5cGVzIGV4Y2VwdCBjc3MgdHJhbnNpdGlvbnNcblx0XHRcdGlmIChwcm9wT2JqLnR5cGUgPCA0KSB7XG5cdFx0XHRcdHMgPSBwcm9wT2JqLnN0YXJ0O1xuXHRcdFx0XHQvL0hhbmRsZSBhcnJheXMgZm9yIHRyYW5zZm9ybXMgbGlrZSB0cmFuc2xhdGUgYW5kIHNjYWxlXG5cdFx0XHRcdGlmIChpc0FycmF5KHByb3BPYmouZW5kKSl7XG5cdFx0XHRcdFx0dmFyIHZhbHVlcyA9IFtdO1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcE9iai5lbmQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGUgPSBwcm9wT2JqLmVuZFtpXSAtIHM7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHByb3BPYmouY3VycmVudCA9IGFuaW0uZWFzZS5qcyhkdXIsIHMsIGUsIGFuaW0uZHVyYXRpb24pO1xuXHRcdFx0XHRcdFx0dmFsdWVzLnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Ly9IYW5kbGUgb2JqZWN0cyBmb3IgcmdiIGNvbG91cnNcblx0XHRcdFx0fWVsc2UgaWYoaXNPYmplY3QocHJvcE9iai5lbmQpKXtcblx0XHRcdFx0XHR2YXIgcixnLGI7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHByb3BPYmouZW5kKXtcblx0XHRcdFx0XHRcdGlmIChwcm9wT2JqLmVuZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICBcdFx0XHRzID0gcHJvcE9iai5zdGFydFtrZXldO1xuICAgICAgICAgXHRcdFx0ZSA9IE1hdGguYWJzKHByb3BPYmouZW5kW2tleV0gLSBzKTtcbiAgICAgICAgIFx0XHRcdGlmIChrZXkgPT09ICdyJyl7XG4gICAgICAgICBcdFx0XHRcdHIgPSBwcm9wT2JqLmN1cnJlbnQgPSBhbmltLmVhc2UuanMoZHVyLCBzLCBlLCBhbmltLmR1cmF0aW9uKTtcbiAgICAgICAgIFx0XHRcdH1lbHNlIGlmKCBrZXkgPT09ICdnJyl7XG4gICAgICAgICBcdFx0XHRcdGcgPSBwcm9wT2JqLmN1cnJlbnQgPSBhbmltLmVhc2UuanMoZHVyLCBzLCBlLCBhbmltLmR1cmF0aW9uKTtcbiAgICAgICAgIFx0XHRcdH1lbHNlIGlmIChrZXkgPT0gJ2InKXtcbiAgICAgICAgIFx0XHRcdFx0YiA9IHByb3BPYmouY3VycmVudCA9IGFuaW0uZWFzZS5qcyhkdXIsIHMsIGUsIGFuaW0uZHVyYXRpb24pO1xuICAgICAgICAgXHRcdFx0fVxuICAgIFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0ZSA9IHByb3BPYmouZW5kIC0gcztcblx0XHRcdFx0XHR2YWx1ZSA9IHByb3BPYmouY3VycmVudCA9IGFuaW0uZWFzZS5qcyhkdXIsIHMsIGUsIGFuaW0uZHVyYXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN3aXRjaCAocHJvcE9iai50eXBlKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0YW5pbS50YXJnZXRbcHJvcF0odmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0YW5pbS50YXJnZXRbcHJvcF0gPSB2YWx1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRcdC8vSGFuZGxlIGFycmF5cyBmb3IgdHJhbnNmb3JtcyBsaWtlIHRyYW5zbGF0ZSBhbmQgc2NhbGVcblx0XHRcdFx0XHRcdGlmIChpc0FycmF5KHByb3BPYmouZW5kKSl7XG5cdFx0XHRcdFx0XHRcdHN0eWxlLnNldFN0eWxlKGFuaW0udGFyZ2V0LCBwcm9wLCB2YWx1ZXMpO1xuXHRcdFx0XHRcdFx0Ly9IYW5kbGUgcmdiIGNvbG9yc1xuXHRcdFx0XHRcdFx0fWVsc2UgaWYoaXNPYmplY3QocHJvcE9iai5lbmQpKXtcblx0XHRcdFx0XHRcdFx0c3R5bGUuc2V0U3R5bGUoYW5pbS50YXJnZXQsIHByb3AsICdyZ2IoJytNYXRoLmNlaWwocikrJywnK01hdGguY2VpbChnKSsnLCcrTWF0aC5jZWlsKGIpKycpJyk7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0c3R5bGUuc2V0U3R5bGUoYW5pbS50YXJnZXQsIHByb3AsIFwiXCIgKyB2YWx1ZSArIHByb3BPYmoudW5pdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDYWxsIHRpY2sgY2FsbGJhY2tzXG5cdGV4ZWN1dGVDYWxsYmFja3MoYW5pbS50aWNrQ2FsbGJhY2tzKTtcblxuXHQvLyBPbiBjb21wbGV0ZS4uLlxuXHRpZiAoYW5pbS5lbGFwc2VkID49IGFuaW0uZHVyYXRpb24pIHtcblx0XHRhbmltLmlzQ29tcGxldGUgPSB0cnVlO1xuXG5cdFx0Ly8gSGFuZGxlIGRlbGF5IGFmdGVyXG5cdFx0aWYgKGFuaW0uZGVsYXlBZnRlcikge1xuXHRcdFx0YW5pbS5kdXJhdGlvbiArPSBhbmltLmRlbGF5QWZ0ZXI7XG5cdFx0XHRhbmltLmRlbGF5QWZ0ZXIgPSAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBSZW1vdmUgY3NzIHRyYW5zaXRpb24gc3ludGF4XG5cdFx0XHRpZiAoYW5pbS51c2luZ0Nzc1RyYW5zaXRpb25zKSB7XG5cdFx0XHRcdHN0eWxlLmNsZWFyU3R5bGUoYW5pbS50YXJnZXQsICd0cmFuc2l0aW9uJyk7XG5cdFx0XHRcdGFuaW0udXNpbmdDc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXNldFxuXHRcdFx0Y2FsbGJhY2tzID0gYW5pbS5jb21wbGV0ZUNhbGxiYWNrcy5zbGljZSgpO1xuXHRcdFx0KGFuaW0ua2VlcCkgPyByZW1vdmUoYW5pbSkgOiBkZXN0cm95KGFuaW0pO1xuXG5cdFx0XHQvLyBUcmlnZ2VyIGNhbGxiYWNrc1xuXHRcdFx0Ly8gRGVsYXkgdG8gYWxsb3cgZm9yIEdDIGFuZCBjbGVhbnVwXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRleGVjdXRlQ2FsbGJhY2tzKGNhbGxiYWNrcyk7XG5cdFx0XHRcdGNhbGxiYWNrcyA9IG51bGw7XG5cdFx0XHR9LCAwKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogRXhlY3V0ZSBvbmUgb3IgbW9yZSAnY2FsbGJhY2tzJ1xuICogQHBhcmFtIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrcyAoY2FsbGJhY2tzKSB7XG5cdGlmIChjYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0Ly8gRG9uJ3QgbG9vcCBpZiBvbmx5IDFcblx0XHRpZiAoY2FsbGJhY2tzLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRjYWxsYmFjayA9IGNhbGxiYWNrc1swXTtcblx0XHRcdGNhbGxiYWNrLmFyZ3Ncblx0XHRcdFx0P1x0Y2FsbGJhY2suZnVuYy5hcHBseShudWxsLCBjYWxsYmFjay5hcmdzKVxuXHRcdFx0XHQ6IGNhbGxiYWNrLmZ1bmMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIG4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldO1xuXHRcdFx0XHRjYWxsYmFjay5hcmdzXG5cdFx0XHRcdFx0PyBjYWxsYmFjay5mdW5jLmFwcGx5KG51bGwsIGNhbGxiYWNrLmFyZ3MpXG5cdFx0XHRcdFx0OiBjYWxsYmFjay5mdW5jKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIEFuaW0gY2xhc3NcbiAqL1xuZnVuY3Rpb24gQW5pbSAoKSB7XG5cdHRoaXMuaWQgPSBudWxsO1xuXHR0aGlzLnRhcmdldCA9IG51bGw7XG5cdHRoaXMuZHVyYXRpb24gPSAwO1xuXHR0aGlzLmRlbGF5QmVmb3JlID0gMDtcblx0dGhpcy5kZWxheUFmdGVyID0gMDtcblx0dGhpcy5lbGFwc2VkID0gMDtcblx0dGhpcy5wcm9wZXJ0aWVzID0ge307XG5cdHRoaXMuZWFzZSA9IERFRkFVTFRfRUFTSU5HO1xuXHR0aGlzLnRpY2tDYWxsYmFja3MgPSBbXTtcblx0dGhpcy5jb21wbGV0ZUNhbGxiYWNrcyA9IFtdO1xuXHR0aGlzLmtlZXAgPSBmYWxzZTtcblx0dGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcblx0dGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG5cdHRoaXMudXNpbmdDc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xufVxuXG4vKipcbiAqIEFuaW1hdGUgZnJvbSBleGlzdGluZyB2YWx1ZXMgdG8gdGFyZ2V0IHZhbHVlc1xuICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbZHVyYXRpb25dIChtaWxpc2Vjb25kcylcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZWFzZV1cbiAqIEByZXR1cm5zIHtBbmltfVxuICovXG5BbmltLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCBkdXJhdGlvbiwgZWFzZSkge1xuXHR2YXIgY3VycmVudCwgZW5kLCBwLCB2YWwsIHRTdHlsZTtcblxuXHRpZiAoZWFzZSkgdGhpcy5lYXNlID0gZWFzZTtcblx0aWYgKGR1cmF0aW9uID09IG51bGwpIGR1cmF0aW9uID0gREVGQVVMVF9EVVJBVElPTjtcblx0dGhpcy5kdXJhdGlvbiArPSBkdXJhdGlvbjtcblx0dGhpcy5lbGFwc2VkID0gMDtcblx0dGhpcy5wcm9wZXJ0aWVzID0ge307XG5cdHRoaXMudXNpbmdDc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuXG5cdGZvciAodmFyIHByb3AgaW4gcHJvcGVydGllcykge1xuXHRcdHZhbCA9IHByb3BlcnRpZXNbcHJvcF07XG5cdFx0cCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdGVuZDogdmFsLFxuXHRcdFx0dHlwZTogMFxuXHRcdH07XG5cblx0XHQvLyBQcm9wZXJ0eSBpcyBhIEZ1bmN0aW9uXG5cdFx0aWYgKGlzRnVuY3Rpb24odGhpcy50YXJnZXRbcHJvcF0pKSB7XG5cdFx0XHRwLnN0YXJ0ID0gdGhpcy50YXJnZXRbcHJvcF0oKTtcblx0XHRcdHAudHlwZSA9IDE7XG5cblx0XHQvL1Byb3BlcnR5IGlzIGEgcHJvcGVydHlcblx0XHR9IGVsc2UgaWYgKHByb3AgaW4gdGhpcy50YXJnZXQgJiYgIWlzQXJyYXkocC5lbmQpKSB7XG5cdFx0XHRwLnN0YXJ0ID0gdGhpcy50YXJnZXRbcHJvcF07XG5cdFx0XHRwLnR5cGUgPSAyO1xuXG5cdFx0Ly8gUHJvcGVydHkgaXMgY3NzXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnQgPSBzdHlsZS5nZXROdW1lcmljU3R5bGUodGhpcy50YXJnZXQsIHByb3ApO1xuXHRcdFx0cC5zdGFydCA9IGN1cnJlbnRbMF07XG5cdFx0XHQvLyBVc2UgZW5kaW5nIHVuaXQgaWYgYSBzdHJpbmcgaXMgcGFzc2VkXG5cdFx0XHRpZiAoaXNTdHJpbmcodmFsKSkge1xuXHRcdFx0XHRlbmQgPSBzdHlsZS5wYXJzZU51bWJlcih2YWwsIHByb3ApO1xuXHRcdFx0XHRwLnVuaXQgPSBlbmRbMV07XG5cdFx0XHRcdHAuZW5kID0gZW5kWzBdO1xuXHRcdFx0XHRpZiAoIXN0eWxlLmhhc1RyYW5zaXRpb25zKXtcblx0XHRcdFx0XHQvLyBOZWVkIHRvIGhhbmRsZSBjb2xvdXJzIGRpZmZyZW50bHkgd2l0aCBubyB0cmFuc2l0aW9uc1xuXHRcdFx0XHRcdC8vIFRPRE86IEhhbmRsZSByZ2JhIGNvbG91cnNcblx0XHRcdFx0XHRpZiAoZW5kWzFdID09PSAnaGV4JyB8fCBlbmRbMV0gPT09ICAncmdiJyl7XG5cdFx0XHRcdFx0XHQvL0NvbnZlcnQgY29sb3VycyB0byBjb21wb25lbnQgYW5kIGhleCB0byByZ2Jcblx0XHRcdFx0XHRcdHAuc3RhcnQgPSBjb2xvdXJVdGlsLnRvQ29tcG9uZW50KGN1cnJlbnRbMF0pO1xuXHRcdFx0XHRcdFx0cC5lbmQgPSBjb2xvdXJVdGlsLnRvQ29tcG9uZW50KGVuZFswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIFVzZSB0aGUgY3VycmVudCB1bml0IGlmIG5vbmUgc3BlY2lmaWVkXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwLnVuaXQgPSBjdXJyZW50WzFdO1xuXHRcdFx0XHRwLmVuZCA9IHZhbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVXNlIGNzcyB0cmFuc2l0aW9ucyBpZiBhdmFpbGFibGVcblx0XHRcdGlmIChzdHlsZS5oYXNUcmFuc2l0aW9ucykge1xuXHRcdFx0XHQvLyBGaXJzdCBzZXQgdXAgdHJhbnNpdGlvblxuXHRcdFx0XHRpZiAoIXRoaXMudXNpbmdDc3NUcmFuc2l0aW9ucykge1xuXHRcdFx0XHRcdHRTdHlsZSA9ICdhbGwgJyArIHRoaXMuZHVyYXRpb24gKyAnbXMnO1xuXHRcdFx0XHRcdGlmIChlYXNlKSB0U3R5bGUgKz0gJyAnICsgKHRoaXMuZWFzZS5jc3MgfHwgREVGQVVMVF9FQVNJTkcuY3NzKTtcblx0XHRcdFx0XHRpZiAodGhpcy5kZWxheUJlZm9yZSkgdFN0eWxlICs9ICcgJyArIHRoaXMuZGVsYXlCZWZvcmUgKyAnbXMnO1xuXHRcdFx0XHRcdHN0eWxlLnNldFN0eWxlKHRoaXMudGFyZ2V0LCB7dHJhbnNpdGlvbjogdFN0eWxlfSk7XG5cdFx0XHRcdFx0dGhpcy51c2luZ0Nzc1RyYW5zaXRpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwLnR5cGUgPSA0O1xuXHRcdFx0XHRzdHlsZS5zZXRTdHlsZSh0aGlzLnRhcmdldCwgcHJvcCwgcC5lbmQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cC50eXBlID0gMztcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5wcm9wZXJ0aWVzW3Byb3BdID0gcDtcblx0fVxuXG5cdGFkZCh0aGlzKTtcblxuXHQvLyBDaGFpblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGVsYXkgdGhlIHN0YXJ0IG9yIGNvbXBsZXRpb24gb2YgYW4gYW5pbWF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb25cbiAqL1xuQW5pbS5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcblx0aWYgKGR1cmF0aW9uICE9IG51bGwpIHtcblx0XHRpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XG5cdFx0XHR0aGlzLmR1cmF0aW9uICs9IGR1cmF0aW9uO1xuXHRcdFx0dGhpcy5kZWxheUJlZm9yZSA9IGR1cmF0aW9uO1xuXHRcdFx0YWRkKHRoaXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlbGF5QWZ0ZXIgPSBkdXJhdGlvbjtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGFpblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHZhbHVlIGZvciAncHJvcGVydHknXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbkFuaW0ucHJvdG90eXBlLmdldFByb3BlcnR5ID0gZnVuY3Rpb24gKHByb3BlcnR5KSB7XG5cdGlmICh0aGlzLmlzUnVubmluZykge1xuXHRcdHZhciBwcm9wID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5XTtcblx0XHRyZXR1cm4gcHJvcCAhPSBudWxsID8gcHJvcC5jdXJyZW50IDogbnVsbDtcblx0fVxufTtcblxuLyoqXG4gKiBTZXQgdGhlICd2YWx1ZScgZm9yICdwcm9wZXJ0eSdcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKi9cbkFuaW0ucHJvdG90eXBlLnNldFByb3BlcnR5ID0gZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xuXHRpZiAodGhpcy5pc1J1bm5pbmcpIHtcblx0XHR2YXIgcHJvcCA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eV07XG5cdFx0aWYgKHByb3AgIT0gbnVsbCkgcHJvcC5lbmQgPSB2YWx1ZTtcblx0XHQvLyBTZXQgbmV3IGVuZCB0YXJnZXQgZm9yIGNzcyB0cmFuc2l0aW9uc1xuXHRcdGlmIChwcm9wLnR5cGUgPT0gNCkgc3R5bGUuc2V0U3R5bGUodGhpcy50YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSk7XG5cdH1cbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGljayBjYWxsYmFjayBoYW5kbGVyIHdpdGggb3B0aW9uYWwgYXJndW1lbnRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHsuLi59XG4gKiBAcmV0dXJucyB7QW5pbX1cbiAqL1xuQW5pbS5wcm90b3R5cGUub25UaWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdHZhciBhcmdzID0gKDIgPD0gYXJndW1lbnRzLmxlbmd0aClcblx0XHQ/IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblx0XHQ6IG51bGw7XG5cdHRoaXMudGlja0NhbGxiYWNrcy5wdXNoKHtcblx0XHRmdW5jOiBjYWxsYmFjayxcblx0XHRhcmdzOiBhcmdzXG5cdH0pO1xuXG5cdC8vIENoYWluXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBjb21wbGV0ZSBjYWxsYmFjayBoYW5kbGVyIHdpdGggb3B0aW9uYWwgYXJndW1lbnRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHsuLi59XG4gKiBAcmV0dXJucyB7QW5pbX1cbiAqL1xuQW5pbS5wcm90b3R5cGUub25Db21wbGV0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHR2YXIgYXJncyA9ICgyIDw9IGFyZ3VtZW50cy5sZW5ndGgpXG5cdFx0PyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cdFx0OiBudWxsO1xuXHR0aGlzLmNvbXBsZXRlQ2FsbGJhY2tzLnB1c2goe1xuXHRcdGZ1bmM6IGNhbGxiYWNrLFxuXHRcdGFyZ3M6IGFyZ3Ncblx0fSk7XG5cblx0Ly8gQ2hhaW5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN0b3AgcnVubmluZyBBbmltXG4gKi9cbkFuaW0ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLmtlZXApIHtcblx0XHRyZW1vdmUodGhpcylcblx0XHRyZXR1cm4gdGhpcztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZGVzdHJveSh0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBEZXN0cm95IEFuaW1cbiAqL1xuQW5pbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcblx0ZGVzdHJveSh0aGlzKTtcblx0cmV0dXJuIG51bGw7XG59O1xuIiwidmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddXG5cdCwgbGFzdEZyYW1lVGltZSA9IG51bGw7XG5cbmZvciAodmFyIGkgPSAwLCBuID0gdmVuZG9ycy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0dmVuZG9yID0gdmVuZG9yc1tpXTtcblx0aWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3IgKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvciArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IHdpbmRvd1t2ZW5kb3IgKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdH1cbn1cblxuaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuXHRcdHZhciBjdXJyRnJhbWVUaW1lID0gKyhuZXcgRGF0ZSgpKVxuXHRcdFx0LCBpZCwgaW50ZXJ2YWwsIGxhc3RUaW1lO1xuXHRcdGlmIChsYXN0RnJhbWVUaW1lID09IG51bGwpIHtcblx0XHRcdGxhc3RGcmFtZVRpbWUgPSBjdXJyRnJhbWVUaW1lO1xuXHRcdH1cblx0XHRpbnRlcnZhbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJGcmFtZVRpbWUgLSBsYXN0RnJhbWVUaW1lKSk7XG5cdFx0aWQgPSB3aW5kb3cuc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBDYWxsIHdpdGggZWxhcHNlZCBmcmFtZSB0aW1lXG5cdFx0XHRjYWxsYmFjayhjdXJyRnJhbWVUaW1lICsgaW50ZXJ2YWwpO1xuXHRcdH0pLCBpbnRlcnZhbCk7XG5cdFx0bGFzdFRpbWUgPSBjdXJyRnJhbWVUaW1lICsgaW50ZXJ2YWw7XG5cdFx0cmV0dXJuIGlkO1xuXHR9O1xufVxuXG5pZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuXHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuXHRcdGNsZWFyVGltZW91dChpZCk7XG5cdH07XG59XG4iLCIvKipcbiAqIEV4dHJhY3QgY29sb3VyIGNoYW5uZWxzIGZyb20gYSBjb2xvdXIgc3RyaW5nIChyZ2IocixnLGIpLCBycmdnYmIsIHJnYilcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvdXJcbiAqL1xuZXhwb3J0cy50b0NvbXBvbmVudCA9IGZ1bmN0aW9uKGNvbG91cikge1xuXHQvLyBSZW1vdmUgaGFzaCBhbmQgc3BhY2VzXG5cdGNvbG91ciA9IGNvbG91ci5yZXBsYWNlKC9bI1xcc10vZywgJycpO1xuXG5cdC8vIHJnYihyLCBnLCBiKVxuXHRpZiAoL15yZ2IvLnRlc3QoY29sb3VyKSkge1xuXHRcdHZhciByZSA9IC9ecmdiXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KVxcKSQvO1xuXHRcdHZhciBjaGFubmVscyA9IHJlLmV4ZWMoY29sb3VyKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cjogcGFyc2VJbnQoY2hhbm5lbHNbMV0sIDEwKSxcblx0XHRcdGc6IHBhcnNlSW50KGNoYW5uZWxzWzJdLCAxMCksXG5cdFx0XHRiOiBwYXJzZUludChjaGFubmVsc1szXSwgMTApXG5cdFx0fTtcblx0Ly8gI3JyZ2diYlxuXHR9IGVsc2UgaWYgKGNvbG91ci5sZW5ndGggPT09IDYpIHtcblx0XHRyZSA9IC9eKFxcd3syfSkoXFx3ezJ9KShcXHd7Mn0pJC87XG5cdFx0Y2hhbm5lbHMgPSByZS5leGVjKGNvbG91cik7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHI6IHBhcnNlSW50KGNoYW5uZWxzWzFdLCAxNiksXG5cdFx0XHRnOiBwYXJzZUludChjaGFubmVsc1syXSwgMTYpLFxuXHRcdFx0YjogcGFyc2VJbnQoY2hhbm5lbHNbM10sIDE2KVxuXHRcdH07XG5cdC8vICNyZ2Jcblx0fSBlbHNlIGlmIChjb2xvdXIubGVuZ3RoID09PSAzKSB7XG5cdFx0cmUgPSAvXihcXHd7MX0pKFxcd3sxfSkoXFx3ezF9KSQvO1xuXHRcdGNoYW5uZWxzID0gcmUuZXhlYyhjb2xvdXIpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRyOiBwYXJzZUludChjaGFubmVsc1sxXSArIGNoYW5uZWxzWzFdLCAxNiksXG5cdFx0XHRnOiBwYXJzZUludChjaGFubmVsc1syXSArIGNoYW5uZWxzWzJdLCAxNiksXG5cdFx0XHRiOiBwYXJzZUludChjaGFubmVsc1szXSArIGNoYW5uZWxzWzNdLCAxNilcblx0XHR9O1xuXHR9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHJnYmEocixnLGIsYSkgY29sb3VyIHN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IGNvbG91clxuICogQHBhcmFtIHtOdW1iZXJ9IGFscGhhXG4gKi9cbmV4cG9ydHMucmdiYSA9IGZ1bmN0aW9uKGNvbG91ciwgYWxwaGEpIHtcblx0dmFyIGM7XG5cdGMgPSBleHBvcnRzLnRvQ29tcG9uZW50KGNvbG91cik7XG5cdHJldHVybiBcInJnYmEoXCIgKyBjLnIgKyBcIixcIiArIGMuZyArIFwiLFwiICsgYy5iICsgXCIsXCIgKyBhbHBoYSArIFwiKVwiO1xufTtcbiIsIi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnaW5uaW5nIHZhbHVlLCBjOiBjaGFuZ2UgaW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5cbmV4cG9ydHMuaW5DdWJpYyA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKSdcbn07XG5cbmV4cG9ydHMub3V0Q3ViaWMgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApJ1xufTtcblxuZXhwb3J0cy5pbk91dEN1YmljID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0aWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICsgYjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICsgMikgKyBiO1xuXHRcdH1cbn07XG4iLCJleHBvcnRzLlRXT19QSSA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIE1hdGguUEkgKiAyO1xufSkoKTtcblxuZXhwb3J0cy5IQUxGX1BJID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gTWF0aC5QSSAqIDAuNTtcbn0pKCk7XG5cbi8qKlxuICogQ29udmVydHMgYSBnaXZlbiB2YWx1ZSBpbiBkZWdyZWVzIHRvIHJhZGlhbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWdcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uKGRlZykge1xuXHRyZXR1cm4gKGRlZyAqIE1hdGguUEkpIC8gMTgwO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGdpdmVuIHZhbHVlIGluIHJhZGlhbnMgdG8gZGVncmVlc1xuICogQHBhcmFtIHtOdW1iZXJ9IHJhZFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24ocmFkKSB7XG5cdHJldHVybiAoMTgwICogcmFkKSAvIE1hdGguUEk7XG59O1xuXG4vKipcbiAqIFRha2VzIGEgJ3ZhbHVlJyB3aXRoaW4gYSBnaXZlbiByYW5nZSBhbmQgY29udmVydHMgaXQgdG8gYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLlxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge051bWJlcn0gbWluaW11bVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heGltdW1cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbnZhciBub3JtYWxpemUgPSBleHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCl7XG5cdGlmKG1pbiA9PT0gbWF4IHx8IHZhbHVlID49IG1heCl7XG5cdFx0cmV0dXJuIDFcblx0fWVsc2UgaWYgKHZhbHVlIDw9IG1pbil7XG5cdFx0cmV0dXJuIDBcblx0fWVsc2V7XG5cdFx0cmV0dXJuICh2YWx1ZS1taW4pIC8gKG1heC1taW4pXG5cdH1cdFxufVxuXG4vKipcbiAqIFRha2VzIGEgbm9ybWFsaXplZCB2YWx1ZSBhbmQgYSByYW5nZSBhbmQgcmV0dXJucyB0aGUgYWN0dWFsIHZhbHVlIGluIHRoYXQgcmFuZ2UuXG4gKiBAcGFyYW0ge051bWJlcn0gbm9ybVZhbHVlXG4gKiBAcGFyYW0ge051bWJlcn0gbWluaW11bVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heGltdW1cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbnZhciBpbnRlcnBsYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKG5vcm1WYWx1ZSwgbWluLCBtYXgpIHtcblx0cmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogbm9ybVZhbHVlO1xufTtcblxuLyoqXG4gKiBUYWtlcyBhIHZhbHVlIGluIGEgZ2l2ZW4gcmFuZ2UgKG1pbjEsIG1heDEpIGFuZCBmaW5kcyB0aGUgY29ycmVzb25kaW5nIHZhbHVlIGluIHRoZSBuZXh0IHJhbmdlIChtaW4yLCBtYXgyKS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbjFcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXgxXG4gKiBAcGFyYW0ge051bWJlcn0gbWluMlxuICogQHBhcmFtIHtOdW1iZXJ9IG1heDJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbnZhciBtYXAgPSBleHBvcnRzLm1hcCA9IGZ1bmN0aW9uKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG5cdHJldHVybiBpbnRlcnBsYXRlKG5vcm1hbGl6ZSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpO1xufTtcblxuLyoqXG4gKiBUYWtlcyBhIHZhbHVlIGFuZCBsaW1pdHMgaXQgdG8gZmFsbCB3aXRoaW4gYSBnaXZlbiByYW5nZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbmltdW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhpbXVtXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG52YXIgbGltaXQgPSBleHBvcnRzLmxpbWl0ID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIHZhbHVlKSwgbWF4KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGEgZ2l2ZW4gcmFuZ2UuXG4gKiBAcGFyYW0ge051bWJlcn0gbG93XG4gKiBAcGFyYW0ge051bWJlcn0gaGlnaFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xudmFyIHJhbmdlZFJhbmRvbSA9IGV4cG9ydHMucmFuZ2VkUmFuZG9tID0gZnVuY3Rpb24obG93LCBoaWdoKSB7XG5cdHJldHVybiBtYXAoTWF0aC5yYW5kb20oKSwgMCwgMSwgbG93LCBoaWdoKTtcbn07XG5cbi8qKlxuICogUm91bmRzIGEgdmFsdWUgdG8gdGhlIG51bWJlciBvZiBzcGVjaWZpZWQgZGVjaW1hbCBwbGFjZXNcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxQbGFjZXNcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydHMucm91bmQgPSBmdW5jdGlvbiAodmFsdWUsIGRlY2ltYWxQbGFjZXMpIHtcblx0dmFyIHBhcnRzID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpXG5cdFx0LCBwcmUgPSBwYXJ0c1swXSArIHBhcnRzWzFdLnN1YnN0cigwLCBkZWNpbWFsUGxhY2VzKVxuXHRcdCwgcG9zdCA9IHBhcnRzWzFdLnNsaWNlKGRlY2ltYWxQbGFjZXMpXG5cdFx0LCBwb3N0Um91bmQgPSBNYXRoLnJvdW5kKHBvc3QvTWF0aC5wb3coMTAsIChwb3N0Lmxlbmd0aCkpKVxuXHRcdCwgcGxhY2VzID0gTWF0aC5wb3coMTAsIChkZWNpbWFsUGxhY2VzIHx8IDApKTtcblxuXHRyZXR1cm4gKHBhcnRzWzFdLmxlbmd0aCA8PSBkZWNpbWFsUGxhY2VzKSA/IHZhbHVlIDogKCtwcmUgKyBwb3N0Um91bmQpIC8gcGxhY2VzO1xufTtcbiIsIi8qXG4gKiBSZWdpc3RlciBmb3IgRE9NIHJlYWR5IGV2ZW50c1xuICovXG52YXIgd2luID0gd2luZG93XG5cdCwgZG9jID0gd2luLmRvY3VtZW50XG5cdCwgc2Nyb2xsSGFja1RpbWVyID0gbnVsbFxuXHQsIGlzUmVhZHkgPSBmYWxzZVxuXHQsIGluaXRpYWxpemVkID0gZmFsc2Vcblx0LCByZWFkeUNhbGxiYWNrcyA9IFtdO1xuXG5mdW5jdGlvbiB3aGVuUmVhZHkoKSB7XG5cdGlmICghaXNSZWFkeSkge1xuXHRcdGlzUmVhZHkgPSB0cnVlO1xuXHRcdC8vIEV4ZWN1dGUgY2FsbGJhY2tzXG5cdFx0Zm9yICh2YXIgaSA9IDAsIG4gPSByZWFkeUNhbGxiYWNrcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdHJlYWR5Q2FsbGJhY2tzW2ldKCk7XG5cdFx0fVxuXHRcdHJlYWR5Q2FsbGJhY2tzID0gbnVsbDtcblx0XHRpZiAoc2Nyb2xsSGFja1RpbWVyKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoc2Nyb2xsSGFja1RpbWVyKTtcblx0XHR9XG5cdFx0Ly8gUmVtb3ZlIGxpc3RlbmVyc1xuXHRcdGlmIChkb2MuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0ZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB3aGVuUmVhZHksIGZhbHNlKTtcblx0XHRcdHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgd2hlblJlYWR5LCBmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvYy5kZXRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgd2hlblJlYWR5KTtcblx0XHRcdHdpbi5kZXRhY2hFdmVudCgnb25sb2FkJywgd2hlblJlYWR5KTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIElFIHNjcm9sbCBoYWNrXG5mdW5jdGlvbiBzY3JvbGxDaGVjaygpIHtcblx0aWYgKGlzUmVhZHkpIHJldHVybjtcblx0dHJ5IHtcblx0XHRkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKCdsZWZ0Jyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0c2Nyb2xsSGFja1RpbWVyID0gc2V0VGltZW91dChzY3JvbGxDaGVjaywgMTEpO1xuXHRcdHJldHVybjtcblx0fVxuXHR3aGVuUmVhZHkoKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgRE9NIGlzIHJlYWR5XG4gKiBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0cmVhZHlDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cblx0Ly8gSW5pdGlhbGl6ZVxuXHRpZiAoIWluaXRpYWxpemVkKSB7XG5cdFx0Ly8gQWxyZWFkeSBsb2FkZWRcblx0XHRpZiAoZG9jLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jLnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnKSB7XG5cdFx0XHR3aGVuUmVhZHkoKTtcblx0XHQvLyBJbml0aWFsaXplIHdhdGNoZXJzXG5cdFx0fSBlbHNlIGlmIChkb2MuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0ZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB3aGVuUmVhZHksIGZhbHNlKTtcblx0XHRcdC8vIEp1c3QgaW4gY2FzZSBwcmV2aW9pdXMgZG9lc24ndCBmaXJlXG5cdFx0XHR3aW4uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHdoZW5SZWFkeSwgZmFsc2UpO1xuXHRcdC8vIElFIGZhbGxiYWNrc1xuXHRcdH0gZWxzZSBpZiAoZG9jLmF0dGFjaEV2ZW50KSB7XG5cdFx0XHRkb2MuYXR0YWNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIHdoZW5SZWFkeSk7XG5cdFx0XHR3aW4uYXR0YWNoRXZlbnQoJ29ubG9hZCcsIHdoZW5SZWFkeSk7XG5cdFx0XHQvLyBUZXN0IGlmIGFscmVhZHkgbG9hZGVkXG5cdFx0XHRpZiAoZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCkge1xuXHRcdFx0XHRzY3JvbGxDaGVjaygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpbml0aWFsaXplZCA9IHRydWU7XG5cdH1cbn07XG4iLCJ2YXIgd2luID0gd2luZG93XG5cdCwgZG9jID0gd2luLmRvY3VtZW50XG5cdCwgbmF2ID0gbmF2aWdhdG9yO1xuXG4vKipcbiAqIERvZXMgcGxhdGZvcm0gc3VwcG9ydCBuYXRpdmUgdmlkZW9cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmhhc1ZpZGVvID0gZnVuY3Rpb24oKSB7XG5cdHZhciBoYXNWaWRlbyA9ICEhZG9jLmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJykuY2FuUGxheVR5cGU7XG5cdGV4cG9ydHMuaGFzVmlkZW8gPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhhc1ZpZGVvOyB9O1xuXHRyZXR1cm4gaGFzVmlkZW87XG59O1xuXG4vKipcbiAqIERvZXMgcGxhdGZvcm0gc3VwcG9ydCBGbGFzaCBwbHVnaW5cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmhhc0ZsYXNoID0gZnVuY3Rpb24oKSB7XG5cdHZhciBkZXNjLCB0ZXN0T2JqZWN0LCB2ZXJzaW9uO1xuXHRpZiAobmF2LnBsdWdpbnMgIT0gbnVsbCAmJiBuYXYucGx1Z2luc1snU2hvY2t3YXZlIEZsYXNoJ10gPT09ICdvYmplY3QnKSB7XG5cdFx0ZGVzYyA9IG5hdi5wbHVnaW5zWydTaG9ja3dhdmUgRmxhc2gnXS5kZXNjcmlwdGlvbjtcblx0XHRpZiAoZGVzYyAmJiAhKChuYXYubWltZVR5cGVzICE9IG51bGwgJiYgbmF2Lm1pbWVUeXBlc1snYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXSkgJiYgIW5hdi5taW1lVHlwZXNbJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10uZW5hYmxlZFBsdWdpbikpIHtcblx0XHRcdHZlcnNpb24gPSBwYXJzZUludChkZXNjLm1hdGNoKC9eLipcXHMrKFteXFxzXSspXFwuW15cXHNdK1xccytbXlxcc10rJC8pWzFdLCAxMCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHdpbi5BY3RpdmVYT2JqZWN0ICE9IG51bGwpIHtcblx0XHR0cnkge1xuXHRcdFx0dGVzdE9iamVjdCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaCcpO1xuXHRcdFx0aWYgKHRlc3RPYmplY3QpIHtcblx0XHRcdFx0dmVyc2lvbiA9IHBhcnNlSW50KHRlc3RPYmplY3QuR2V0VmFyaWFibGUoJyR2ZXJzaW9uJykubWF0Y2goL15bXlxcc10rXFxzKFxcZCspLylbMV0sIDEwKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7IH1cblx0fVxuXG5cdGV4cG9ydHMuZmxhc2hWZXJzaW9uID0gdmVyc2lvbjtcblx0ZXhwb3J0cy5oYXNGbGFzaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZXhwb3J0cy5mbGFzaFZlcnNpb24gPiAwOyB9O1xuXHRyZXR1cm4gdmVyc2lvbiA+IDA7XG59O1xuXG4vKipcbiAqIEZsYXNoIHBsdWdpbiB2ZXJzaW9uIG51bWJlclxuICovXG5leHBvcnRzLmZsYXNoVmVyc2lvbiA9IDA7XG5cbi8qKlxuICogRG9lcyBwbGF0Zm9ybSBzdXBwb3J0IG5hdGl2ZSBmdWxsIHNjcmVlblxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaGFzTmF0aXZlRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgaGFzTmF0aXZlRnVsbHNjcmVlbiA9IHR5cGVvZiBkb2MuY3JlYXRlRWxlbWVudCgndmlkZW8nKS53ZWJraXRFbnRlckZ1bGxTY3JlZW4gPT09ICdmdW5jdGlvbic7XG5cdGV4cG9ydHMuaGFzTmF0aXZlRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaGFzTmF0aXZlRnVsbHNjcmVlbjsgfTtcblx0cmV0dXJuIGhhc05hdGl2ZUZ1bGxzY3JlZW47XG59O1xuXG4vKipcbiAqIERvZXMgcGxhdGZvcm0gc3VwcG9ydCBDYW52YXMgZWxlbWVudFxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaGFzQ2FudmFzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBlbGVtID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG5cdFx0LCBoYXNDYW52YXMgPSAhIShlbGVtLmdldENvbnRleHQgJiYgZWxlbS5nZXRDb250ZXh0KCcyZCcpKTtcblx0ZXhwb3J0cy5oYXNDYW52YXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhhc0NhbnZhczsgfTtcblx0cmV0dXJuIGhhc0NhbnZhcztcbn07XG5cbi8qKlxuICogRG9lcyBwbGF0Zm9ybSBzdXBwb3J0IFRvdWNoIGV2ZW50c1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaGFzVG91Y2ggPSBmdW5jdGlvbigpIHtcblx0dmFyIGhhc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luIHx8ICh3aW4uRG9jdW1lbnRUb3VjaCAmJiBkb2MgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKTtcblx0ZXhwb3J0cy5oYXNUb3VjaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaGFzVG91Y2g7IH07XG5cdHJldHVybiBoYXNUb3VjaDtcbn07XG5cbi8qKlxuICogRG9lcyBwbGF0Zm9ybSBzdXBwb3J0IGlubGluZSBzdmdcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmhhc1NWRyA9IGZ1bmN0aW9uKCl7XG5cdHZhciB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRlc3QuaW5uZXJIVE1MID0gJzxzdmcvPic7XG5cdHZhciBoYXNTVkcgPSAodGVzdC5maXJzdENoaWxkICYmIHRlc3QuZmlyc3RDaGlsZC5uYW1lc3BhY2VVUkkpID09ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cdGV4cG9ydHMuaGFzU1ZHID0gZnVuY3Rpb24oKXsgcmV0dXJuIGhhc1NWRzsgfTtcblx0cmV0dXJuIGhhc1NWRztcbn1cbiIsInZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbi8qKlxuICogSXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAqL1xuZXhwb3J0cy5pc0lFID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gIStcIlxcdjFcIjtcbn0pKCk7XG5cbi8qKlxuICogSXMgaVBhZFxuICovXG5leHBvcnRzLmlzSVBhZCA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIC9pcGFkL2kudGVzdCh1YSk7XG59KSgpO1xuXG4vKipcbiAqIElzIGlQaG9uZVxuICovXG5leHBvcnRzLmlzSVBob25lID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gL2lwaG9uZS9pLnRlc3QodWEpO1xufSkoKTtcblxuLyoqXG4gKiBJcyBpT1NcbiAqL1xuZXhwb3J0cy5pc0lPUyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIGV4cG9ydHMuaXNJUGhvbmUgfHwgZXhwb3J0cy5pc0lQYWQgfHwgZmFsc2U7XG59KSgpO1xuXG4vKipcbiAqIElzIGlQaG9uZSBNb2JpbGVTYWZhcmlcbiAqL1xuZXhwb3J0cy5pc01vYmlsZVNhZmFyaSA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIGV4cG9ydHMuaXNJUGhvbmUgJiYgL3NhZmFyaS9pLnRlc3QodWEpO1xufSkoKTtcblxuLyoqXG4gKiBpT1MgdmVyc2lvbiBudW1iZXJcbiAqL1xuZXhwb3J0cy5pT1NWZXJzaW9uID0gKGZ1bmN0aW9uKCkge1xuXHR2YXIgbWF0Y2g7XG5cdG1hdGNoID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvb3MgKFxcZCspXy9pKTtcblx0aWYgKG1hdGNoICE9IG51bGwgPyBtYXRjaFsxXSA6IHZvaWQgMCkge1xuXHRcdHJldHVybiBtYXRjaFsxXTtcblx0fVxufSkoKTtcblxuLyoqXG4gKiBJcyBBbmRyb2lkXG4gKi9cbmV4cG9ydHMuaXNBbmRyb2lkID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gL2FuZHJvaWQvaS50ZXN0KHVhKTtcbn0pKCk7XG5cbi8qKlxuICogQW5kcm9pZCB2ZXJzaW9uIG51bWJlclxuICovXG5leHBvcnRzLmFuZHJvaWRWZXJzaW9uID0gKGZ1bmN0aW9uKCkge1xuXHR2YXIgbWF0Y2g7XG5cdG1hdGNoID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvYW5kcm9pZCAoXFxkKylcXC4vaSk7XG5cdGlmIChtYXRjaCAhPSBudWxsID8gbWF0Y2hbMV0gOiB2b2lkIDApIHtcblx0XHRyZXR1cm4gbWF0Y2hbMV07XG5cdH1cbn0pKCk7XG5cbi8qKlxuICogSXMgbW9iaWxlXG4gKi9cbmV4cG9ydHMuaXNNb2JpbGUgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiAvbW9iaWxlL2kudGVzdCh1YSkgJiYgIWV4cG9ydHMuaXNJUGFkO1xufSkoKTtcbiIsIi8qKlxuICogUmV0cmlldmUgdGhlIHZpZXdwb3J0IHdpZHRoXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5leHBvcnRzLmdldFdpZHRoID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSB2aWV3cG9ydCBoZWlnaHRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydHMuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufTtcbiIsIi8vIEJhc2VkIG9uIHRoZSBpbmZhbW91cyBQZW5uZXIgZWFzaW5nIGVxdWF0aW9ucywgd2l0aCBjc3MgZXF1aXZhbGVudHMgd2hlcmUgcG9zc2libGVcbmV4cG9ydHMubGluZWFyID0gcmVxdWlyZSgnLi9saWIvbGluZWFyJyk7XG5leHBvcnRzLmJhY2sgPSByZXF1aXJlKCcuL2xpYi9iYWNrJyk7XG5leHBvcnRzLmJvdW5jZSA9IHJlcXVpcmUoJy4vbGliL2JvdW5jZScpO1xuZXhwb3J0cy5jaXJjID0gcmVxdWlyZSgnLi9saWIvY2lyYycpO1xuZXhwb3J0cy5jdWJpYyA9IHJlcXVpcmUoJy4vbGliL2N1YmljJyk7XG5leHBvcnRzLmVsYXN0aWMgPSByZXF1aXJlKCcuL2xpYi9lbGFzdGljJyk7XG5leHBvcnRzLmV4cG8gPSByZXF1aXJlKCcuL2xpYi9leHBvJyk7XG5leHBvcnRzLnF1YWQgPSByZXF1aXJlKCcuL2xpYi9xdWFkJyk7XG5leHBvcnRzLnF1YXJ0ID0gcmVxdWlyZSgnLi9saWIvcXVhcnQnKTtcbmV4cG9ydHMucXVpbnQgPSByZXF1aXJlKCcuL2xpYi9xdWludCcpO1xuZXhwb3J0cy5zaW5lID0gcmVxdWlyZSgnLi9saWIvc2luZScpOyIsIi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnaW5uaW5nIHZhbHVlLCBjOiBjaGFuZ2UgaW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5cbmV4cG9ydHMuaW5CYWNrID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0aWYgKHMgIT0gbnVsbCkge1xuXHRcdFx0XHRzID0gMS43MDE1ODtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogKChzICsgMSkgKiB0IC0gcykgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpJ1xufTtcblxuZXhwb3J0cy5vdXRCYWNrID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0aWYgKHMgIT0gbnVsbCkge1xuXHRcdFx0XHRzID0gMS43MDE1ODtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4yNzUpJ1xufTtcblxuZXhwb3J0cy5pbk91dEJhY2sgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRpZiAocyAhPSBudWxsKSB7XG5cdFx0XHRcdHMgPSAxLjcwMTU4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIGMgLyAyICogKHQgKiB0ICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHQgLSBzKSkgKyBiO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0ICsgcykgKyAyKSArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuNjgwLCAtMC41NTAsIDAuMjY1LCAxLjU1MCknXG59O1xuIiwiLy8gdDogY3VycmVudCB0aW1lLCBiOiBiZWdpbm5pbmcgdmFsdWUsIGM6IGNoYW5nZSBpbiB2YWx1ZSwgZDogZHVyYXRpb25cblxuZXhwb3J0cy5pbkJvdW5jZSA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHJldHVybiBjIC0gZXhwb3J0cy5vdXRCb3VuY2UoeCwgZCAtIHQsIDAsIGMsIGQpICsgYjtcblx0XHR9XG59O1xuXG5leHBvcnRzLm91dEJvdW5jZSA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmICgodCAvPSBkKSA8ICgxIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIGMgKiAoNy41NjI1ICogdCAqIHQpICsgYjtcblx0XHRcdH0gZWxzZSBpZiAodCA8ICgyIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMS41IC8gMi43NSkgKiB0ICsgMC43NSkgKyBiO1xuXHRcdFx0fSBlbHNlIGlmICh0IDwgKDIuNSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiBjICogKDcuNTYyNSAqICh0IC09IDIuMjUgLyAyLjc1KSAqIHQgKyAwLjkzNzUpICsgYjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjICogKDcuNTYyNSAqICh0IC09IDIuNjI1IC8gMi43NSkgKiB0ICsgMC45ODQzNzUpICsgYjtcblx0XHRcdH1cblx0XHR9XG59O1xuXG5leHBvcnRzLmluT3V0Qm91bmNlID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0aWYgKHQgPCBkIC8gMikge1xuXHRcdFx0XHRyZXR1cm4gZXhwb3J0cy5pbkJvdW5jZSh4LCB0ICogMiwgMCwgYywgZCkgKiAwLjUgKyBiO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV4cG9ydHMub3V0Qm91bmNlKHgsIHQgKiAyIC0gZCwgMCwgYywgZCkgKiAwLjUgKyBjICogMC41ICsgYjtcblx0XHR9XG59O1xuIiwiLy8gdDogY3VycmVudCB0aW1lLCBiOiBiZWdpbm5pbmcgdmFsdWUsIGM6IGNoYW5nZSBpbiB2YWx1ZSwgZDogZHVyYXRpb25cblxuZXhwb3J0cy5pbkNpcmMgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gLWMgKiAoTWF0aC5zcXJ0KDEgLSAodCAvPSBkKSAqIHQpIC0gMSkgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjYwMCwgMC4wNDAsIDAuOTgwLCAwLjMzNSknXG59O1xuXG5leHBvcnRzLm91dENpcmMgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gYyAqIE1hdGguc3FydCgxIC0gKHQgPSB0IC8gZCAtIDEpICogdCkgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjA3NSwgMC44MjAsIDAuMTY1LCAxLjAwMCknXG59O1xuXG5leHBvcnRzLmluT3V0Q2lyYyA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSArIGI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYyAvIDIgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUwLCAwLjg2MCknXG59O1xuIiwiLy8gdDogY3VycmVudCB0aW1lLCBiOiBiZWdpbm5pbmcgdmFsdWUsIGM6IGNoYW5nZSBpbiB2YWx1ZSwgZDogZHVyYXRpb25cblxuZXhwb3J0cy5pbkVsYXN0aWMgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHR2YXIgYSwgcCwgcztcblx0XHRcdGlmICh0ID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCh0IC89IGQpID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiBiICsgYztcblx0XHRcdH1cblx0XHRcdGlmICghcCkge1xuXHRcdFx0XHRwID0gZCAqIDAuMztcblx0XHRcdH1cblx0XHRcdGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcblx0XHRcdFx0YSA9IGM7XG5cdFx0XHRcdHMgPSBwIC8gNDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gLShhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xuXHRcdH1cbn07XG5cbmV4cG9ydHMub3V0RWxhc3RpYyA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHZhciBhLCBwLCBzO1xuXHRcdFx0aWYgKHQgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIGI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKHQgLz0gZCkgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIGIgKyBjO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFwKSB7XG5cdFx0XHRcdHAgPSBkICogMC4zO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xuXHRcdFx0XHRhID0gYztcblx0XHRcdFx0cyA9IHAgLyA0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSArIGMgKyBiO1xuXHRcdH1cbn07XG5cbmV4cG9ydHMuaW5PdXRFbGFzdGljID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0dmFyIGEsIHAsIHM7XG5cdFx0XHRpZiAodCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gYjtcblx0XHRcdH1cblx0XHRcdGlmICgodCAvPSBkIC8gMikgPT09IDIpIHtcblx0XHRcdFx0cmV0dXJuIGIgKyBjO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFwKSB7XG5cdFx0XHRcdHAgPSBkICogKDAuMyAqIDEuNSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7XG5cdFx0XHRcdGEgPSBjO1xuXHRcdFx0XHRzID0gcCAvIDQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHQgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtMC41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKSArIGI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICogMC41ICsgYyArIGI7XG5cdFx0fVxufTtcbiIsIi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnaW5uaW5nIHZhbHVlLCBjOiBjaGFuZ2UgaW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5cbmV4cG9ydHMuaW5FeHBvID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0aWYgKHQgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIGI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gYyAqIE1hdGgucG93KDIsIDEwICogKHQgLyBkIC0gMSkpICsgYjtcblx0XHRcdH1cblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC45NTAsIDAuMDUwLCAwLjc5NSwgMC4wMzUpJ1xufTtcblxuZXhwb3J0cy5vdXRFeHBvID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0aWYgKHQgPT09IGQpIHtcblx0XHRcdFx0cmV0dXJuIGIgKyBjO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGMgKiAoLU1hdGgucG93KDIsIC0xMCAqIHQgLyBkKSArIDEpICsgYjtcblx0XHRcdH1cblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC4xOTAsIDEuMDAwLCAwLjIyMCwgMS4wMDApJ1xufTtcblxuZXhwb3J0cy5pbk91dEV4cG8gPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRpZiAodCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gYjtcblx0XHRcdH1cblx0XHRcdGlmICh0ID09PSBkKSB7XG5cdFx0XHRcdHJldHVybiBiICsgYztcblx0XHRcdH1cblx0XHRcdGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBjIC8gMiAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGMgLyAyICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXQpICsgMikgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigxLjAwMCwgMC4wMDAsIDAuMDAwLCAxLjAwMCknXG59O1xuIiwiLy8gdDogY3VycmVudCB0aW1lLCBiOiBiZWdpbm5pbmcgdmFsdWUsIGM6IGNoYW5nZSBpbiB2YWx1ZSwgZDogZHVyYXRpb25cblxuZXhwb3J0cy5saW5lYXIgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gYyAqIHQgLyBkICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTApJ1xufSIsIi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnaW5uaW5nIHZhbHVlLCBjOiBjaGFuZ2UgaW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5cbmV4cG9ydHMuaW5RdWFkID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMCknXG59O1xuXG5leHBvcnRzLm91dFF1YWQgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknXG59O1xuXG5leHBvcnRzLmluT3V0UXVhZCA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcblx0XHRcdH1cblx0XHRcdHJldHVybiAtYyAvIDIgKiAoKC0tdCkgKiAodCAtIDIpIC0gMSkgKyBiO1xuXHRcdH1cbn07XG4iLCIvLyB0OiBjdXJyZW50IHRpbWUsIGI6IGJlZ2lubmluZyB2YWx1ZSwgYzogY2hhbmdlIGluIHZhbHVlLCBkOiBkdXJhdGlvblxuXG5leHBvcnRzLmluUXVhcnQgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC44OTUsIDAuMDMwLCAwLjY4NSwgMC4yMjApJ1xufTtcblxuZXhwb3J0cy5vdXRRdWFydCA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHJldHVybiAtYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgLSAxKSArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSdcbn07XG5cbmV4cG9ydHMuaW5PdXRRdWFydCA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKyBiO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIC1jIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAtIDIpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC43NzAsIDAuMDAwLCAwLjE3NSwgMS4wMDApJ1xufTtcbiIsIi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnaW5uaW5nIHZhbHVlLCBjOiBjaGFuZ2UgaW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5cbmV4cG9ydHMuaW5RdWludCA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApJ1xufTtcblxuZXhwb3J0cy5vdXRRdWludCA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuMjMwLCAxLjAwMCwgMC4zMjAsIDEuMDAwKSdcbn07XG5cbmV4cG9ydHMuaW5PdXRRdWludCA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAqIHQgKyAyKSArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuODYwLCAwLjAwMCwgMC4wNzAsIDEuMDAwKSdcbn07XG4iLCIvLyB0OiBjdXJyZW50IHRpbWUsIGI6IGJlZ2lubmluZyB2YWx1ZSwgYzogY2hhbmdlIGluIHZhbHVlLCBkOiBkdXJhdGlvblxuXG5leHBvcnRzLmluU2luZSA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHJldHVybiAtYyAqIE1hdGguY29zKHQgLyBkICogKE1hdGguUEkgLyAyKSkgKyBjICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC40NzAsIDAuMDAwLCAwLjc0NSwgMC43MTUpJ1xufTtcblxuZXhwb3J0cy5vdXRTaW5lID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIGMgKiBNYXRoLnNpbih0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApJ1xufTtcblxuZXhwb3J0cy5pbk91dFNpbmUgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gLWMgLyAyICogKE1hdGguY29zKE1hdGguUEkgKiB0IC8gZCkgLSAxKSArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1MCwgMC41NTAsIDAuOTUwKSdcbn07XG4iLCIvKipcbiAqIFNldHMgZGVidWcgZW52aXJvbm1lbnQgYW5kIGVuYWJsZXMgY29uc29sZS5sb2cgd2hlbiB0cnVlXG4gKi9cbnZhciBpbml0aWFsaXplZCA9IGZhbHNlXG5cdCwgdGltZXN0YW1wID0gdHJ1ZVxuXHQsIGxvY2F0aW9ucyA9ICdeaHR0cCh8cyk6XFwvXFwvZGV2fF5odHRwKHxzKTpcXC9cXC9sb2NhbGhvc3QnO1xuXG4vKipcbiAqIENvbmZpZ3VyZSBsb2cgYmVoYXZpb3VyXG4gKiBBZGQgd2hpdGVsaXN0IGxvY2F0aW9ucywgZW5hYmxlL2Rpc2FibGUgdGltZXN0YW1wXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gKi9cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRpZiAoY29uZmlnICE9IG51bGwpIHtcblx0XHR0aW1lc3RhbXAgPSBjb25maWcudGltZXN0YW1wIHx8IHRpbWVzdGFtcDtcblx0XHRsb2NhdGlvbnMgPSBjb25maWcubG9jYXRpb25zICYmIG5ldyBSZWdFeHAobG9jYXRpb25zICsgJ3wnICsgY29uZmlnLmxvY2F0aW9ucy5qb2luKCd8JyksICdpJyk7XG5cdFx0d2luZG93LmRlYnVnID0gISEoZG9jdW1lbnQubG9jYXRpb24uaHJlZi5tYXRjaChsb2NhdGlvbnMpKSB8fCAhIShkb2N1bWVudC5sb2NhdGlvbi5oYXNoLm1hdGNoKC9kZWJ1Zy8pKTtcblx0XHR3aW5kb3cubG9nID0gd2luZG93LmRlYnVnID8gZXhwb3J0cy5sb2cgOiAoZnVuY3Rpb24oKSB7fSk7XG5cdH1cblx0cmV0dXJuIGluaXRpYWxpemVkID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogTG9nIG1lc3NhZ2VzIHRvIHRoZSBjb25zb2xlXG4gKiBAcGFyYW0geyp9IGFyZ3VtZW50cy4uLlxuICovXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgYXJncyA9ICgxIDw9IGFyZ3VtZW50cy5sZW5ndGgpID8gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuXHRpZiAoIWluaXRpYWxpemVkKSB7XG5cdFx0ZXhwb3J0cy5pbml0KCk7XG5cdH1cblx0aWYgKHdpbmRvdy5kZWJ1Zykge1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdFx0XHR2YXIgdCA9IHRpbWVzdGFtcCA/IFwiXCIgKyAoZC5nZXRIb3VycygpKSArIFwiOlwiICsgKGQuZ2V0TWludXRlcygpKSArIFwiOlwiICsgKGQuZ2V0U2Vjb25kcygpKSArIFwiOlwiICsgKGQuZ2V0TWlsbGlzZWNvbmRzKCkpIDogJyc7XG5cdFx0XHRpZiAod2luZG93LmNvbnNvbGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2codCwgYXJncyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHsgfVxuXHR9XG59O1xuIiwiLyoqXG4gKiBBbGxvdyAnQ2hpbGQnIENvbnN0cnVjdG9yIHRvIGluaGVyaXQgZnJvbSAnUGFyZW50JywgaW5jbHVkaW5nICdvd24nIHByb3BlcnRpZXNcbiAqIC0tZnJvbSBDb2ZmZWVTY3JpcHQgYm9pbGVycGxhdGUtLVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ2hpbGRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFBhcmVudFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnRzLmluaGVyaXQgPSBmdW5jdGlvbiAoQ2hpbGQsIFBhcmVudCkge1xuXHQvLyBDb3B5ICdvd24nIHByb3BlcnRpZXMgZnJvbSBQYXJlbnQgdG8gQ2hpbGRcblx0Zm9yICh2YXIga2V5IGluIFBhcmVudCkge1xuXHRcdGlmIChQYXJlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0Q2hpbGRba2V5XSA9IFBhcmVudFtrZXldO1xuXHRcdH1cblx0fVxuXHQvLyBQcm94eSBjb25zdHJ1Y3RvciBmdW5jdGlvblxuXHRmdW5jdGlvbiBDdG9yKCkge1xuXHRcdC8vIFNldCBjb25zdHJ1Y3RvciBwcm9wZXJ0eSB0byBwb2ludCB0byBDaGlsZFxuXHRcdHRoaXMuY29uc3RydWN0b3IgPSBDaGlsZDtcblx0XHQvLyBTdG9yZSByZWZlcmVuY2UgdG8gQ2hpbGQncyAnc3VwZXInXG5cdFx0dGhpcy5zdXBlciA9IFBhcmVudC5wcm90b3R5cGU7XG5cdH1cblx0Ly8gUHJveHkgaW5oZXJpdHMgZnJvbSBQYXJlbnQncyBwcm90b3R5cGUgKGF2b2lkIFBhcmVudCBpbnN0YW5jZSlcblx0Q3Rvci5wcm90b3R5cGUgPSBQYXJlbnQucHJvdG90eXBlO1xuXHQvLyBDaGlsZCBpbmhlcml0cyBmcm9tIHByb3h5IChyZXF1aXJlcyBhbiBvYmplY3QsIG5vdCBmdW5jdGlvbilcblx0Q2hpbGQucHJvdG90eXBlID0gbmV3IEN0b3IoKTtcblx0Ly8gU3RvcmUgcmVmZXJlbmNlIHRvIENoaWxkJ3MgJ3N1cGVyJ1xuXHRDaGlsZC5zdXBlciA9IFBhcmVudC5wcm90b3R5cGU7XG5cdC8vIFJldHVybiBleHRlbmRlZCBjb25zdHJ1Y3RvciBmdW5jdGlvblxuXHRyZXR1cm4gQ2hpbGQ7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiAnQ2hpbGQnIENvbnN0cnVjdG9yIGluaGVyaXRzIGZyb20gJ1BhcmVudCdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENoaWxkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBQYXJlbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmluaGVyaXRzRnJvbSA9IGZ1bmN0aW9uIChDaGlsZCwgUGFyZW50KSB7XG5cdGlmICh0eXBlb2YgQ2hpbGQgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgUGFyZW50ID09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoQ2hpbGQgPT09IFBhcmVudCkgcmV0dXJuIHRydWU7XG5cdFx0dmFyIGRlc2NlbmRhbnQgPSBDaGlsZC5zdXBlcjtcblx0XHR3aGlsZSAoZGVzY2VuZGFudCkge1xuXHRcdFx0aWYgKGRlc2NlbmRhbnQuY29uc3RydWN0b3IpIHtcblx0XHRcdFx0aWYgKGRlc2NlbmRhbnQuY29uc3RydWN0b3IgPT09IFBhcmVudCkgcmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRkZXNjZW5kYW50ID0gZGVzY2VuZGFudC5jb25zdHJ1Y3Rvci5zdXBlcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBCaW5kIGEgZnVuY3Rpb24gJ2ZuJyB0byBhIHNwZWNpZmljICdjb250ZXh0J1xuICogLS1mcm9tIENvZmZlZVNjcmlwdCBib2lsZXJwbGF0ZS0tXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAqL1xuZXhwb3J0cy5iaW5kID0gZnVuY3Rpb24gKGZuLCBjb250ZXh0KSB7XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcblx0fTtcbn07IiwidmFyIGNhcGFiaWxpdGllcyA9IHJlcXVpcmUoJ2Vudi5jYXBhYmlsaXRpZXMnKTtcblxuZXhwb3J0cy5OUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnRzLkxJTksgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG5cbi8qKlxuICogSW5qZWN0IHN2ZyBzeW1ib2wgZGVmaW5pdGlvbnMgaW50byB0aGUgRE9NXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZWZzXG4gKi9cbmV4cG9ydHMuaW5qZWN0RGVmcyA9IGZ1bmN0aW9uIChpZCwgZGVmcykge1xuXHRpZiAoY2FwYWJpbGl0aWVzLmhhc1NWRygpICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcblx0XHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0LCBzdmcgPSAnPHN2ZyBpZD1cIidcblx0XHRcdFx0XHQrIGlkXG5cdFx0XHRcdFx0KyAnXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+J1xuXHRcdFx0XHRcdCsgZGVmc1xuXHRcdFx0XHRcdCsgJzwvc3ZnPic7XG5cblx0XHRlbC5pbm5lckhUTUwgPSBzdmc7XG5cdFx0ZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZWwuZmlyc3RDaGlsZCwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcblx0fVxufTtcblxuLyoqXG4gKiBBcHBlbmQgc3ZnIGVsZW1lbnQgb2YgJ3R5cGUnIHRvICdwYXJlbnQnLCBzZXR0aW5nICdhdHRycydcbiAqIEBwYXJhbWEge0RPTUVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtYSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW1hIHtPYmplY3R9IGF0dHJzXG4gKi9cbmV4cG9ydHMuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAocGFyZW50LCB0eXBlLCBhdHRycykge1xuXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZXhwb3J0cy5OUywgdHlwZSk7XG5cblx0aWYgKGF0dHJzKSB7XG5cdFx0Zm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuXHRcdFx0aWYgKGF0dHIuaW5kZXhPZigneGxpbms6JykgPT0gMCkge1xuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGVOUyhleHBvcnRzLkxJTkssIGF0dHIuc3Vic3RyaW5nKDYpLCBhdHRyc1thdHRyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cnNbYXR0cl0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHBhcmVudC5hcHBlbmRDaGlsZChlbCk7XG59OyJdfQ==
