(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/coffee/main":[function(require,module,exports){
var ease, elem, init, lib, ready;

lib = require('browser.lib');

ready = lib.dom.ready;

elem = lib.dom.element;

ease = lib.util.ease;

init = (function(_this) {
  return function() {
    var h;
    h = elem('h1');
    return h.animate().to({
      translate: [200, 800]
    }, 2000, ease.sine.inOutSine);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGhvbWFzbC9TaXRlcy9naXRodWIvYnJvd3NlcmxpYi10ZXN0L3NyYy9jb2ZmZWUvbWFpbi5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5jbGFzc2xpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5jbGFzc2xpc3Qvbm9kZV9tb2R1bGVzL3V0aWwucG9seWZpbGwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5lbGVtZW50L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy9kb20uZWxlbWVudC9ub2RlX21vZHVsZXMvZG9tLnNlbGVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL2RvbS5zZWxlY3Qvbm9kZV9tb2R1bGVzL3V0aWwuaWRlbnRpZnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5lbGVtZW50L25vZGVfbW9kdWxlcy9kb20uc3R5bGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2RvbS5lbGVtZW50L25vZGVfbW9kdWxlcy9kb20udGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL2V2ZW50cy5ldmVudC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL3V0aWwuYW5pbWF0ZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL3V0aWwuYW5pbWF0ZS9ub2RlX21vZHVsZXMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy9kb20uZWxlbWVudC9ub2RlX21vZHVsZXMvdXRpbC5hbmltYXRlL25vZGVfbW9kdWxlcy91dGlsLmNvbG91ci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL3V0aWwuYW5pbWF0ZS9ub2RlX21vZHVsZXMvdXRpbC5lYXNlL2xpYi9jdWJpYy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZG9tLmVsZW1lbnQvbm9kZV9tb2R1bGVzL3V0aWwubnVtYmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy9kb20ucmVhZHkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2Vudi5jYXBhYmlsaXRpZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL2Vudi5wbGF0Zm9ybS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvZW52LnZpZXdwb3J0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy91dGlsLmVhc2UvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvYmFjay5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvdXRpbC5lYXNlL2xpYi9ib3VuY2UuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvY2lyYy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvdXRpbC5lYXNlL2xpYi9lbGFzdGljLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy91dGlsLmVhc2UvbGliL2V4cG8uanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy91dGlsLmVhc2UvbGliL3F1YWQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvcXVhcnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvcXVpbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwuZWFzZS9saWIvc2luZS5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLmxpYi9ub2RlX21vZHVsZXMvdXRpbC5sb2cvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci5saWIvbm9kZV9tb2R1bGVzL3V0aWwub2JqZWN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXIubGliL25vZGVfbW9kdWxlcy91dGlsLnN2Zy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUEsNEJBQUE7O0FBQUEsR0FBQSxHQUFNLE9BQUEsQ0FBUSxhQUFSLENBQU4sQ0FBQTs7QUFBQSxLQUNBLEdBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQURoQixDQUFBOztBQUFBLElBRUEsR0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BRmYsQ0FBQTs7QUFBQSxJQUdBLEdBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUhoQixDQUFBOztBQUFBLElBS0EsR0FBTyxDQUFBLFNBQUEsS0FBQSxHQUFBO1NBQUEsU0FBQSxHQUFBO0FBQ0wsUUFBQSxDQUFBO0FBQUEsSUFBQSxDQUFBLEdBQUksSUFBQSxDQUFLLElBQUwsQ0FBSixDQUFBO1dBQ0EsQ0FBQyxDQUFDLE9BQUYsQ0FBQSxDQUFXLENBQUMsRUFBWixDQUFlO0FBQUEsTUFBQyxTQUFBLEVBQVUsQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFYO0tBQWYsRUFBc0MsSUFBdEMsRUFBNEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUF0RCxFQUZLO0VBQUEsRUFBQTtBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FMUCxDQUFBOztBQUFBLEtBU0EsQ0FBTSxJQUFOLENBVEEsQ0FBQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4ckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGliID0gcmVxdWlyZSgnYnJvd3Nlci5saWInKVxucmVhZHkgPSBsaWIuZG9tLnJlYWR5XG5lbGVtID0gbGliLmRvbS5lbGVtZW50XG5lYXNlID0gbGliLnV0aWwuZWFzZVxuXG5pbml0ID0gPT5cbiAgaCA9IGVsZW0oJ2gxJylcbiAgaC5hbmltYXRlKCkudG8oe3RyYW5zbGF0ZTpbMjAwLDgwMF19LCAyMDAwLCBlYXNlLnNpbmUuaW5PdXRTaW5lKVxuXG5yZWFkeShpbml0KSIsImV4cG9ydHMuZG9tID0ge1xuXHRjbGFzc2xpc3Q6IHJlcXVpcmUoJ2RvbS5jbGFzc2xpc3QnKSxcblx0c3R5bGU6IHJlcXVpcmUoJ2RvbS5zdHlsZScpLFxuXHRlbGVtZW50OiByZXF1aXJlKCdkb20uZWxlbWVudCcpLFxuXHRyZWFkeTogcmVxdWlyZSgnZG9tLnJlYWR5JyksXG5cdHNlbGVjdDogcmVxdWlyZSgnZG9tLnNlbGVjdCcpLFxuXHR0ZXh0OiByZXF1aXJlKCdkb20udGV4dCcpXG59O1xuXG5leHBvcnRzLmVudiA9IHtcblx0Y2FwYWJpbGl0aWVzOiByZXF1aXJlKCdlbnYuY2FwYWJpbGl0aWVzJyksXG5cdHBsYXRmb3JtOiByZXF1aXJlKCdlbnYucGxhdGZvcm0nKSxcblx0dmlld3BvcnQ6IHJlcXVpcmUoJ2Vudi52aWV3cG9ydCcpXG59O1xuXG5leHBvcnRzLmV2ZW50cyA9IHtcblx0ZXZlbnQ6IHJlcXVpcmUoJ2V2ZW50cy5ldmVudCcpXG59O1xuXG5leHBvcnRzLnV0aWwgPSB7XG5cdHBvbHlmaWxsOiByZXF1aXJlKCd1dGlsLnBvbHlmaWxsJyksXG5cdGFuaW1hdGU6IHJlcXVpcmUoJ3V0aWwuYW5pbWF0ZScpLFxuXHRjb2xvdXI6IHJlcXVpcmUoJ3V0aWwuY29sb3VyJyksXG5cdGVhc2U6IHJlcXVpcmUoJ3V0aWwuZWFzZScpLFxuXHRsb2c6IHJlcXVpcmUoJ3V0aWwubG9nJyksXG5cdG51bWJlcjogcmVxdWlyZSgndXRpbC5udW1iZXInKSxcblx0aWRlbnRpZnk6IHJlcXVpcmUoJ3V0aWwuaWRlbnRpZnknKSxcblx0b2JqZWN0OiByZXF1aXJlKCd1dGlsLm9iamVjdCcpLFxuXHRzdmc6IHJlcXVpcmUoJ3V0aWwuc3ZnJylcbn07XG4iLCJyZXF1aXJlKCd1dGlsLnBvbHlmaWxsJyk7XG5cbnZhciBSRV9UUklNID0gL15cXHMrfFxccyskL2c7XG5cbi8qKlxuICogQ2hlY2sgaWYgJ2VsZW1lbnQnIGhhcyBjbGFzcyAnY2xhcydcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzKSB7XG5cdGlmIChlbGVtZW50LmNsYXNzTGlzdCAhPSBudWxsKSB7XG5cdFx0cmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXMpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShSRV9UUklNLCAnJykuc3BsaXQoJyAnKTtcblx0XHRyZXR1cm4gY2xhc3Nlcy5pbmRleE9mKGNsYXMpID49IDA7XG5cdH1cbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgJ2VsZW1lbnQnIGhhcyBhIGNsYXNzIG1hdGNoaW5nICdwYXR0ZXJuJ1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVyblxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLm1hdGNoQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBwYXR0ZXJuKSB7XG5cdHZhciBjbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShSRV9UUklNLCAnJykuc3BsaXQoJyAnKVxuXHRcdCwgY2xhcztcblx0Zm9yICh2YXIgaSA9IDAsIG4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdGNsYXMgPSBjbGFzc2VzW2ldO1xuXHRcdGlmIChjbGFzLmluZGV4T2YocGF0dGVybikgIT09IC0xKSB7XG5cdFx0XHRyZXR1cm4gY2xhcztcblx0XHR9XG5cdH1cblx0cmV0dXJuICcnO1xufTtcblxuLyoqXG4gKiBBZGQgY2xhc3MgJ2NsYXMnIHRvICdlbGVtZW50J1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc1xuICovXG5leHBvcnRzLmFkZENsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhcykge1xuXHRpZiAoZWxlbWVudC5jbGFzc0xpc3QgIT0gbnVsbCkge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzKTtcblx0fSBlbHNlIHtcblx0XHRlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzO1xuXHR9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyAnY2xhcycgZnJvbSAnZWxlbWVudCdcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNcbiAqL1xuZXhwb3J0cy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXMpIHtcblx0dmFyIGMsIGNsYXNzZXM7XG5cdGlmIChjbGFzKSB7XG5cdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0ICE9IG51bGwpIHtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFJFX1RSSU0sICcnKS5zcGxpdCgnICcpXG5cdFx0XHRcdCwgcmVzdWx0cyA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIG4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRpZiAoY2xhc3Nlc1tpXSAhPT0gY2xhcykgcmVzdWx0cy5wdXNoKGNsYXNzZXNbaV0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC5jbGFzc05hbWUgPSByZXN1bHRzLmpvaW4oJyAnKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogVG9nZ2xlIGNsYXNzICdjbGFzJyBvbiAnZWxlbWVudCdcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNcbiAqL1xuZXhwb3J0cy50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXMpIHtcblx0aWYgKGV4cG9ydHMuaGFzQ2xhc3MoZWxlbWVudCwgY2xhcykpIHtcblx0XHRleHBvcnRzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXMpO1xuXHR9IGVsc2Uge1xuXHRcdGV4cG9ydHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xhcyk7XG5cdH1cbn07XG5cbi8qKlxuICogUmVwbGFjZSBjbGFzcyAnY2xhc09sZCcgd2l0aCAnY2xhc05ldycgb24gJ2VsZW1lbnQnXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzXG4gKi9cbmV4cG9ydHMucmVwbGFjZUNsYXNzID0gZnVuY3Rpb24oZWxlbWVudCwgY2xhc09sZCwgY2xhc05ldykge1xuXHRpZiAoY2xhc09sZCkge1xuXHRcdGlmIChjbGFzTmV3KSB7XG5cdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoY2xhc09sZCwgY2xhc05ldyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc09sZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGNsYXNOZXcpIHtcblx0XHRleHBvcnRzLmFkZENsYXNzKGVsZW1lbnQsIGNsYXNOZXcpO1xuXHR9XG59O1xuXG4vKipcbiAqIEFkZCBjbGFzcyAnY2xhcycgdG8gJ2VsZW1lbnQnLCBhbmQgcmVtb3ZlIGFmdGVyICdkdXJhdGlvbicgbWlsbGlzZWNvbmRzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzXG4gKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb25cbiAqL1xuZXhwb3J0cy5hZGRUZW1wb3JhcnlDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXMsIGR1cmF0aW9uKSB7XG5cdGV4cG9ydHMuYWRkQ2xhc3MoZWxlbWVudCwgY2xhcyk7XG5cdHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuXHRcdGV4cG9ydHMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhcyk7XG5cdH0pLCBkdXJhdGlvbik7XG59O1xuIiwiLyoqXG4gKiBBcnJheS5pbmRleE9mKClcbiAqL1xuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuXHRBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRmb3IgKHZhciBpID0gaSA9IDAsIG4gPSB0aGlzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0aWYgKGl0ZW0gPT09IHRoaXNbaV0pIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcbn1cblxuLyoqXG4gKiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKClcbiAqL1xudmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddXG5cdCwgbGFzdEZyYW1lVGltZSA9IG51bGw7XG5cbmZvciAodmFyIGkgPSAwLCBuID0gdmVuZG9ycy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0dmVuZG9yID0gdmVuZG9yc1tpXTtcblx0aWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3IgKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvciArICdDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8IHdpbmRvd1t2ZW5kb3IgKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdH1cbn1cblxuaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xuXHRcdHZhciBjdXJyRnJhbWVUaW1lID0gKyhuZXcgRGF0ZSgpKVxuXHRcdFx0LCBpZCwgaW50ZXJ2YWwsIGxhc3RUaW1lO1xuXHRcdGlmIChsYXN0RnJhbWVUaW1lID09IG51bGwpIHtcblx0XHRcdGxhc3RGcmFtZVRpbWUgPSBjdXJyRnJhbWVUaW1lO1xuXHRcdH1cblx0XHRpbnRlcnZhbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJGcmFtZVRpbWUgLSBsYXN0RnJhbWVUaW1lKSk7XG5cdFx0aWQgPSB3aW5kb3cuc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBDYWxsIHdpdGggZWxhcHNlZCBmcmFtZSB0aW1lXG5cdFx0XHRjYWxsYmFjayhjdXJyRnJhbWVUaW1lICsgaW50ZXJ2YWwpO1xuXHRcdH0pLCBpbnRlcnZhbCk7XG5cdFx0bGFzdFRpbWUgPSBjdXJyRnJhbWVUaW1lICsgaW50ZXJ2YWw7XG5cdFx0cmV0dXJuIGlkO1xuXHR9O1xufVxuXG5pZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuXHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuXHRcdGNsZWFyVGltZW91dChpZCk7XG5cdH07XG59XG5cblxuLyoqXG4gKiBGdW5jdGlvbi5iaW5kKClcbiAqIC0taHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9iaW5kLS1cbiAqL1xuaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuXHRGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbi5wcm90b3R5cGUuYmluZCAtIHdoYXQgaXMgdHJ5aW5nIHRvIGJlIGJvdW5kIGlzIG5vdCBjYWxsYWJsZVwiKTtcblx0XHR9XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cdFx0XHQsIHRvQmluZCA9IHRoaXNcblx0XHRcdCwgbm9vcCA9IGZ1bmN0aW9uKCkge31cblx0XHRcdCwgYm91bmQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRvQmluZC5hcHBseSh0aGlzIGluc3RhbmNlb2Ygbm9vcCA/IHRoaXMgOiBjb250ZXh0IHx8IHdpbmRvdyxcblx0XHRcdFx0XHRhcmdzLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG5cdFx0XHR9O1xuXHRcdG5vb3AucHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG5cdFx0Ym91bmQucHJvdG90eXBlID0gbmV3IG5vb3AoKTtcblx0XHRyZXR1cm4gYm91bmQ7XG5cdH1cbn1cbiIsInZhciBjbGFzc0xpc3QgPSByZXF1aXJlKCdkb20uY2xhc3NsaXN0Jylcblx0LCBzZWxlY3QgPSByZXF1aXJlKCdkb20uc2VsZWN0Jylcblx0LCB0ZXh0ID0gcmVxdWlyZSgnZG9tLnRleHQnKVxuXHQsIGNzcyA9IHJlcXVpcmUoJ2RvbS5zdHlsZScpXG5cdCwgZXZlbnQgPSByZXF1aXJlKCdldmVudHMuZXZlbnQnKVxuXHQsIGlkZW50aWZ5ID0gcmVxdWlyZSgndXRpbC5pZGVudGlmeScpXG5cdCwgbnVtYmVyVXRpbHMgPSByZXF1aXJlKCd1dGlsLm51bWJlcicpXG5cdCwgYW5pbWF0ZSA9IHJlcXVpcmUoJ3V0aWwuYW5pbWF0ZScpXG5cdCwgd2luID0gd2luZG93XG5cdCwgZG9jID0gd2luLmRvY3VtZW50XG5cdCwgZWxlbWVudHMgPSBbXVxuXHQsIGlkID0gMDtcblxuLyoqXG4gKiBFbGVtZW50IGluc3RhbmNlIGZhY3RvcnlcbiAqIEBwYXJhbSB7RE9NRWxlbWVudH0gZG9tRWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGVsZW1lbnRGYWN0b3J5KGRvbUVsZW1lbnQpIHtcblx0dmFyIGVsLCBpdGVtO1xuXHQvLyBSZXRyaWV2ZSBmcm9tIGNhY2hlXG5cdGZvciAodmFyIGkgPSAwLCBuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0aXRlbSA9IGVsZW1lbnRzW2ldO1xuXHRcdGlmIChpdGVtLmRvbUVsZW1lbnQgPT09IGRvbUVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBpdGVtO1xuXHRcdH1cblx0fVxuXHRlbCA9IG5ldyBFbGVtZW50KGRvbUVsZW1lbnQpO1xuXHRlbGVtZW50cy5wdXNoKGVsKTtcblx0cmV0dXJuIGVsO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgbmV3IEVsZW1lbnQgaW5zdGFuY2VzIGJhc2VkIG9uICdzZWxlY3RvcidcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWxlY3RvciwgY29udGV4dCwgdGFnKSB7XG5cdHZhciBlbGVtZW50LCByZXN1bHRzO1xuXHRpZiAoY29udGV4dCA9PSBudWxsKSBjb250ZXh0ID0gZG9jO1xuXHQvLyBSZXRyaWV2ZSBkb20gZWxlbWVudChzKSBpZiBwYXNzZWQgYSBzZWxlY3RvciBzdHJpbmdcblx0aWYgKGlkZW50aWZ5LmlzU3RyaW5nKHNlbGVjdG9yKSkge1xuXHRcdHNlbGVjdG9yID0gc2VsZWN0KHNlbGVjdG9yLCBjb250ZXh0LCB0YWcpO1xuXHQvLyBFcnJvciBpZiBub3QgcGFzc2VkIGRvbSBlbGVtZW50IG9yIGFycmF5XG5cdH0gZWxzZSBpZiAoIShpZGVudGlmeS5pc0VsZW1lbnQoc2VsZWN0b3IpIHx8IGlkZW50aWZ5LmlzQXJyYXkoc2VsZWN0b3IpKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gUmV0dXJuIGFycmF5IG9mIEVsZW1lbnRzXG5cdGlmIChpZGVudGlmeS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdHJlc3VsdHMgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMCwgbiA9IHNlbGVjdG9yLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0ZWxlbWVudCA9IHNlbGVjdG9yW2ldO1xuXHRcdFx0aWYgKGlkZW50aWZ5LmlzRWxlbWVudChlbGVtZW50KSkge1xuXHRcdFx0XHRyZXN1bHRzLnB1c2goZWxlbWVudEZhY3RvcnkoZWxlbWVudCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0Ly8gUmV0dXJuIGEgc2luZ2xlIEVsZW1lbnQgaWYgcGFzc2VkIGEgRE9NIEVsZW1lbnRcblx0fSBlbHNlIGlmIChzZWxlY3RvciAhPSBudWxsKSB7XG5cdFx0cmV0dXJuIGVsZW1lbnRGYWN0b3J5KHNlbGVjdG9yKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuLyoqXG4gKiBFbGVtZW50IGNsYXNzXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IGRvbUVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gRWxlbWVudChkb21FbGVtZW50KSB7XG5cdHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cdHRoaXMuYW5pbSA9IG51bGw7XG5cdHRoaXMuaWQgPSB0aGlzLmRvbUVsZW1lbnQuaWQ7XG5cdHRoaXMuX2lkID0gaWQrKztcblx0dGhpcy50YWdOYW1lID0gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7XG59XG5cbi8qKlxuICogUmV0cmlldmUgd2lkdGhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGg7XG59O1xuXG4vKipcbiAqIFNldCB3aWR0aFxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24odmFsdWUpIHtcblx0aWYgKHZhbHVlICE9IG51bGwpIHtcblx0XHR0aGlzLnNldFN0eWxlKCd3aWR0aCcsIHZhbHVlKTtcblx0XHRpZiAodGhpcy5kb21FbGVtZW50LndpZHRoICE9IG51bGwpIHtcblx0XHRcdHRoaXMuZG9tRWxlbWVudC53aWR0aCA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXHQvLyBDaGFpblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0cmlldmUgaGVpZ2h0XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG59O1xuXG4vKipcbiAqIFNldCBoZWlnaHRcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRpZiAodmFsdWUgIT0gbnVsbCkge1xuXHRcdHRoaXMuc2V0U3R5bGUoJ2hlaWdodCcsIHZhbHVlKTtcblx0XHRpZiAodGhpcy5kb21FbGVtZW50LmhlaWdodCAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0ID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBvcGFjaXR5XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5nZXRPcGFjaXR5ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFN0eWxlKCdvcGFjaXR5Jyk7XG59O1xuXG4vKipcbiAqIFNldCBvcGFjaXR5XG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuc2V0T3BhY2l0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0dGhpcy5zZXRTdHlsZSgnb3BhY2l0eScsIG51bWJlclV0aWxzLmxpbWl0KHBhcnNlRmxvYXQodmFsdWUpLCAwLCAxKSk7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIG9mZnNldCBmcm9tIHBhcmVudFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuZ2V0T2Zmc2V0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB7XG5cdFx0dG9wOiB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLFxuXHRcdGxlZnQ6IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0XG5cdH07XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIGdsb2JhbCBwb3NpdGlvblxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblx0dmFyIHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3Bcblx0XHQsIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdFxuXHRcdCwgZWw7XG5cdGlmICgoZWwgPSB0aGlzLmRvbUVsZW1lbnQpLm9mZnNldFBhcmVudCkge1xuXHRcdHdoaWxlICgoZWwgPSBlbC5vZmZzZXRQYXJlbnQpKSB7XG5cdFx0XHR0b3AgKz0gZWwub2Zmc2V0VG9wO1xuXHRcdFx0bGVmdCArPSBlbC5vZmZzZXRMZWZ0O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4ge1xuXHRcdHRvcDogdG9wLFxuXHRcdGxlZnQ6IGxlZnRcblx0fTtcbn07XG5cbi8qKlxuICogQHNlZSBjbGFzc0xpc3QuaGFzQ2xhc3NcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuaGFzQ2xhc3MgPSBmdW5jdGlvbihjbGFzKSB7XG5cdHJldHVybiBjbGFzc0xpc3QuaGFzQ2xhc3ModGhpcy5kb21FbGVtZW50LCBjbGFzKTtcbn07XG5cbi8qKlxuICogQHNlZSBjbGFzc0xpc3QubWF0Y2hDbGFzc1xuICovXG5FbGVtZW50LnByb3RvdHlwZS5tYXRjaENsYXNzID0gZnVuY3Rpb24oY2xhcykge1xuXHRyZXR1cm4gY2xhc3NMaXN0Lm1hdGNoQ2xhc3ModGhpcy5kb21FbGVtZW50LCBjbGFzKTtcbn07XG5cbi8qKlxuICogQHNlZSBjbGFzc0xpc3QuYWRkQ2xhc3NcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbihjbGFzKSB7XG5cdGNsYXNzTGlzdC5hZGRDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIGNsYXMpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQHNlZSBjbGFzc0xpc3QucmVtb3ZlQ2xhc3NcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihjbGFzKSB7XG5cdGNsYXNzTGlzdC5yZW1vdmVDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIGNsYXMpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQHNlZSBjbGFzc0xpc3QudG9nZ2xlQ2xhc3NcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbihjbGFzKSB7XG5cdGNsYXNzTGlzdC50b2dnbGVDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIGNsYXMpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQHNlZSBjbGFzc0xpc3QucmVwbGFjZUNsYXNzXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VDbGFzcyA9IGZ1bmN0aW9uKGNsYXNPbGQsIGNsYXNOZXcpIHtcblx0Y2xhc3NMaXN0LnJlcGxhY2VDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIGNsYXNPbGQsIGNsYXNOZXcpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQHNlZSBjbGFzc0xpc3QuYWRkVGVtcG9yYXJ5Q2xhc3NcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuYWRkVGVtcG9yYXJ5Q2xhc3MgPSBmdW5jdGlvbihjbGFzLCBkdXJhdGlvbikge1xuXHRjbGFzc0xpc3QuYWRkVGVtcG9yYXJ5Q2xhc3ModGhpcy5kb21FbGVtZW50LCBjbGFzLCBkdXJhdGlvbik7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIHRleHQuZ2V0VGV4dFxuICovXG5FbGVtZW50LnByb3RvdHlwZS5nZXRUZXh0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0ZXh0LmdldFRleHQodGhpcy5kb21FbGVtZW50KTtcbn07XG5cbi8qKlxuICogQHNlZSB0ZXh0LnNldFRleHRcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuc2V0VGV4dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHRleHQuc2V0VGV4dCh0aGlzLmRvbUVsZW1lbnQsIHZhbHVlKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIGlubmVySFRNTFxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuZ2V0SFRNTCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogU2V0IGlubmVySFRNTFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnNldEhUTUwgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHR0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBAc2VlIGNzcy5nZXRTdHlsZVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5nZXRTdHlsZSA9IGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cdHJldHVybiBjc3MuZ2V0U3R5bGUodGhpcy5kb21FbGVtZW50LCBwcm9wZXJ0eSk7XG59O1xuXG4vKipcbiAqIEBzZWUgY3NzLmdldE51bWVyaWNTdHlsZVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5nZXROdW1lcmljU3R5bGUgPSBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXHRyZXR1cm4gY3NzLmdldE51bWVyaWNTdHlsZSh0aGlzLmRvbUVsZW1lbnQsIHByb3BlcnR5KTtcbn07XG5cbi8qKlxuICogQHNlZSBjc3Muc2V0U3R5bGVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcblx0Y3NzLnNldFN0eWxlKHRoaXMuZG9tRWxlbWVudCwgcHJvcGVydHksIHZhbHVlKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEBzZWUgY3NzLmNsZWFyU3R5bGVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuY2xlYXJTdHlsZSA9IGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cdGNzcy5jbGVhclN0eWxlKHRoaXMuZG9tRWxlbWVudCwgcHJvcGVydHkpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQHNlZSBldmVudC5vblxuICovXG5FbGVtZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKHR5cGUsIGNhbGxiYWNrLCBkYXRhKSB7XG5cdGV2ZW50Lm9uKHRoaXMuZG9tRWxlbWVudCwgdHlwZSwgY2FsbGJhY2ssIGRhdGEpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQHNlZSBldmVudC5vZmZcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcblx0ZXZlbnQub2ZmKHRoaXMuZG9tRWxlbWVudCwgdHlwZSwgY2FsbGJhY2spO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQHNlZSBldmVudC5vbmVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUub25lID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2ssIGRhdGEpIHtcblx0ZXZlbnQub25lKHRoaXMuZG9tRWxlbWVudCwgdHlwZSwgY2FsbGJhY2ssIGRhdGEpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQHNlZSBhbmltYXRlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbigpIHtcblx0aWYgKCF0aGlzLmFuaW0pIHRoaXMuYW5pbSA9IGFuaW1hdGUodGhpcy5kb21FbGVtZW50LCB0cnVlKTtcblx0cmV0dXJuIHRoaXMuYW5pbVxufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbih0eXBlKSB7XG5cdHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKHR5cGUpO1xufTtcblxuLyoqXG4gKiBTZXQgYXR0cmlidXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gb3Ige09iamVjdH0gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uKHR5cGUsIHZhbHVlKSB7XG5cdGlmKGlkZW50aWZ5LmlzT2JqZWN0KHR5cGUpKXtcblx0XHRmb3IodmFyIGtleSBpbiB0eXBlKSB7XG4gICAgXHR0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdHlwZVtrZXldKTtcbiAgXHR9XG5cdH1lbHNlIGlmKGlkZW50aWZ5LmlzU3RyaW5nKHR5cGUpKXtcblx0XHR0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKHR5cGUsIHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0cmlldmUgY2hpbGQgZWxlbWVudHMgbWF0Y2hpbmcgJ3NlbGVjdG9yJ1xuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHMoc2VsZWN0b3IsIHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBwYXJlbnQgZWxlbWVudFxuICogQHBhcmFtIHtCb29sZWFufSBhc0VsZW1lbnRcbiAqIEByZXR1cm5zIHtET01FbGVtZW50IG9yIEVsZW1lbnR9XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnBhcmVudCA9IGZ1bmN0aW9uKGFzRWxlbWVudCkge1xuXHRpZiAoYXNFbGVtZW50ID09IG51bGwpIGFzRWxlbWVudCA9IHRydWU7XG5cdHJldHVybiBhc0VsZW1lbnQgPyBuZXcgRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQucGFyZW50Tm9kZSkgOiB0aGlzLmRvbUVsZW1lbnQucGFyZW50Tm9kZTtcbn07XG5cbi8qKlxuICogUmV0cmlldmUgY2hpbGRyZW5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYXNFbGVtZW50XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmNoaWxkcmVuID0gZnVuY3Rpb24oYXNFbGVtZW50KSB7XG5cdHZhciBub2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzXG5cdFx0LCByZXN1bHRzID0gW11cblx0XHQsIGNoaWxkO1xuXHRpZiAoYXNFbGVtZW50ID09IG51bGwpIGFzRWxlbWVudCA9IHRydWU7XG5cdGZvciAodmFyIGkgPSAwLCBuID0gbm9kZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0Y2hpbGQgPSBub2Rlc1tpXTtcblx0XHRpZiAoY2hpbGQgJiYgY2hpbGQubm9kZVR5cGUgPT09IDEpIHtcblx0XHRcdHJlc3VsdHMucHVzaChhc0VsZW1lbnQgPyBuZXcgRWxlbWVudChjaGlsZCkgOiBjaGlsZCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBmaXJzdCBjaGlsZFxuICogQHBhcmFtIHtCb29sZWFufSBhc0VsZW1lbnRcbiAqIEByZXR1cm5zIHtET01FbGVtZW50IG9yIEVsZW1lbnR9XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmZpcnN0Q2hpbGQgPSBmdW5jdGlvbihhc0VsZW1lbnQpIHtcblx0aWYgKGFzRWxlbWVudCA9PSBudWxsKSBhc0VsZW1lbnQgPSB0cnVlO1xuXHRyZXR1cm4gYXNFbGVtZW50ID8gbmV3IEVsZW1lbnQodGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQpIDogdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIGxhc3QgY2hpbGRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYXNFbGVtZW50XG4gKiBAcmV0dXJucyB7RE9NRWxlbWVudCBvciBFbGVtZW50fVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5sYXN0Q2hpbGQgPSBmdW5jdGlvbihhc0VsZW1lbnQpIHtcblx0aWYgKGFzRWxlbWVudCA9PSBudWxsKSBhc0VsZW1lbnQgPSB0cnVlO1xuXHRyZXR1cm4gYXNFbGVtZW50ID8gbmV3IEVsZW1lbnQodGhpcy5kb21FbGVtZW50Lmxhc3RDaGlsZCkgOiB0aGlzLmRvbUVsZW1lbnQubGFzdENoaWxkO1xufTtcblxuLyoqXG4gKiBBcHBlbmQgY2hpbGRcbiAqIEBwYXJhbSB7RE9NRWxlbWVudCBvciBFbGVtZW50fSBlbGVtZW50XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZENoaWxkID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXHRyZXR1cm4gdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tRWxlbWVudCB8fCBlbGVtZW50KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGNoaWxkXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnQgb3IgRWxlbWVudH0gZWxlbWVudFxuICovXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0cmV0dXJuIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmRvbUVsZW1lbnQgfHwgZWxlbWVudCk7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgY2hpbGRcbiAqIEBwYXJhbSB7RE9NRWxlbWVudCBvciBFbGVtZW50fSBuZXdFbGVtZW50XG4gKiBAcGFyYW0ge0RPTUVsZW1lbnQgb3IgRWxlbWVudH0gb2xkRWxlbWVudFxuICovXG5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQgPSBmdW5jdGlvbihuZXdFbGVtZW50LCBvbGRFbGVtZW50KSB7XG5cdHRoaXMuZG9tRWxlbWVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudC5kb21FbGVtZW50IHx8IG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQuZG9tRWxlbWVudCB8fCBvbGRFbGVtZW50KTtcblx0cmV0dXJuIG9sZEVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBmcm9tIHBhcmVudFxuICovXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucGFyZW50KCkucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbn07XG5cbi8qKlxuICogSW5zZXJ0ICdlbGVtZW50JyBiZWZvcmUgJ3JlZmVyZW5jZUVsZW1lbnQnXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnQgb3IgRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtET01FbGVtZW50IG9yIEVsZW1lbnR9IHJlZmVyZW5jZUVsZW1lbnRcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24oZWxlbWVudCwgcmVmZXJlbmNlRWxlbWVudCkge1xuXHRyZXR1cm4gdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShlbGVtZW50LmRvbUVsZW1lbnQgfHwgZWxlbWVudCwgcmVmZXJlbmNlRWxlbWVudC5kb21FbGVtZW50IHx8IHJlZmVyZW5jZUVsZW1lbnQpO1xufTtcblxuLyoqXG4gKiBDbG9uZSBlbGVtZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRlZXBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYXNFbGVtZW50XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oZGVlcCwgYXNFbGVtZW50KSB7XG5cdGlmIChhc0VsZW1lbnQgPT0gbnVsbCkgYXNFbGVtZW50ID0gdHJ1ZTtcblx0cmV0dXJuIGFzRWxlbWVudCA/IG5ldyBFbGVtZW50KHRoaXMuZG9tRWxlbWVudC5jbG9uZShkZWVwKSkgOiB0aGlzLmRvbUVsZW1lbnQuY2xvbmUoZGVlcCk7XG59O1xuXG4vKipcbiAqIEluc2VydCBIVE1MIGJlZm9yZSB0aGUgZWxlbWVudCBpdHNlbGZcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICovXG5FbGVtZW50LnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gdGhpcy5kb21FbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCB2YWx1ZSk7XG59O1xuXG4vKipcbiAqIEluc2VydCBIVE1MIGFmdGVyIHRoZSBlbGVtZW50IGl0c2VsZlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgdmFsdWUpO1xufTtcblxuLyoqXG4gKiBJbnNlcnQgSFRNTCBqdXN0IGluc2lkZSB0aGUgZWxlbWVudCwgYmVmb3JlIGl0cyBmaXJzdCBjaGlsZFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gdGhpcy5kb21FbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHZhbHVlKTtcbn07XG5cbi8qKlxuICogSW5zZXJ0IEhUTUwganVzdCBpbnNpZGUgdGhlIGVsZW1lbnQsIGFmdGVyIGl0cyBsYXN0IGNoaWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHZhbHVlKTtcbn07XG5cbi8qKlxuICogV3JhcCAnZWxlbWVudCdcbiAqIEBwYXJhbSB7RE9NRWxlbWVudCBvciBFbGVtZW50fSBlbGVtZW50XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudC5sZW5ndGgpIGVsZW1lbnQgPSBbZWxlbWVudF07XG4gIGZvciAodmFyIGkgPSBlbGVtZW50Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGNoaWxkID0gKGkgPiAwKSA/IHRoaXMuZG9tRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgOiB0aGlzLmRvbUVsZW1lbnQ7XG4gICAgdmFyIGVsID0gZWxlbWVudFtpXTtcbiAgICB2YXIgcGFyZW50ICA9IChlbC5kb21FbGVtZW50KSA/IGVsLmRvbUVsZW1lbnQucGFyZW50Tm9kZSA6IGVsLnBhcmVudE5vZGVcbiAgICB2YXIgc2libGluZyA9IChlbC5kb21FbGVtZW50KSA/IGVsLmRvbUVsZW1lbnQubmV4dFNpYmxpbmcgOiBlbC5uZXh0U2libGluZ1xuXG4gICAgY2hpbGQuYXBwZW5kQ2hpbGQoZWwuZG9tRWxlbWVudCB8fCBlbCk7XG5cbiAgICBpZihzaWJsaW5nKSB7XG4gICAgXHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBzaWJsaW5nKTtcbiAgICB9ZWxzZXtcbiAgICBcdHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFdyYXAgYWxsICdlbGVtZW50cydcbiAqIEBwYXJhbSB7RE9NRWxlbWVudCBvciBFbGVtZW50fSBlbGVtZW50XG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLndyYXBBbGwgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIHZhciBlbCA9IGVsZW1lbnQubGVuZ3RoID8gZWxlbWVudFswXSA6IGVsZW1lbnQ7XG4gIHZhciBwYXJlbnQgID0gKGVsLmRvbUVsZW1lbnQpID8gZWwuZG9tRWxlbWVudC5wYXJlbnROb2RlIDogZWwucGFyZW50Tm9kZVxuICB2YXIgc2libGluZyA9IChlbC5kb21FbGVtZW50KSA/IGVsLmRvbUVsZW1lbnQubmV4dFNpYmxpbmcgOiBlbC5uZXh0U2libGluZ1xuICB0aGlzLmFwcGVuZENoaWxkKGVsLmRvbUVsZW1lbnQgfHwgZWwpO1xuXG4gIHdoaWxlIChlbGVtZW50Lmxlbmd0aCkge1xuICBcdHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChlbG1zWzBdKTtcbiAgfVxuXG4gIGlmKHNpYmxpbmcpIHtcbiAgXHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZyk7XG4gIH1lbHNle1xuICBcdHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICB9XG59O1xuXG4vKipcbiAqIERlc3Ryb3kgZWxlbWVudCBhbmQgb3B0aW9uYWxseSByZW1vdmUgZnJvbSBwYXJlbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVtb3ZlXG4gKi9cbkVsZW1lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZW1vdmUpIHtcblx0aWYgKHJlbW92ZSA9PSBudWxsKSByZW1vdmUgPSBmYWxzZTtcblx0ZXZlbnQub2ZmQWxsKHRoaXMpO1xuXHQvLyBTZXR0aW5nIGtlZXAgdG8gZmFsc2Ugd2lsbCB0cmlnZ2VyIGRlc3Ryb3kgYXV0b21hdGljYWxseVxuXHRpZiAodGhpcy5hbmltICE9IG51bGwpIHtcblx0XHRpZiAodGhpcy5hbmltLmlzUnVubmluZykge1xuXHRcdFx0dGhpcy5hbmltLmtlZXAgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hbmltLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0dGhpcy5hbmltID0gbnVsbDtcblx0fVxuXHRpZiAocmVtb3ZlKSB7XG5cdFx0dGhpcy5kb21FbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblx0fVxuXHQvLyBSZW1vdmUgZnJvbSBET01cblx0dGhpcy5kb21FbGVtZW50ID0gbnVsbDtcblx0Ly8gUmVtb3ZlIGZyb20gY2FjaGVcblx0Zm9yICh2YXIgaSA9IDAsIG4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRpZiAoZWxlbWVudHNbaWR4XSA9PT0gdGhpcykge1xuXHRcdFx0ZWxlbWVudHMuc3BsaWNlKGksIDEpO1xuXHRcdH1cblx0XHRicmVhaztcblx0fVxufTtcbiIsIi8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBsaXZlIGxpc3RzP1xuLy8gVE9ETzogYWRkIHN1cHBvcnQgZm9yIG11bHRpcGxlIHNlbGVjdG9ycz9cblxudmFyIGlkID0gcmVxdWlyZSgndXRpbC5pZGVudGlmeScpXG5cdCwgd2luID0gd2luZG93XG5cdCwgZG9jID0gd2luLmRvY3VtZW50O1xuXG4vKipcbiAqIGdldEVsZW1lbnRzQnlDbGFzc05hbWUoKSBwb2x5ZmlsbFxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuaWYgKCFkb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkge1xuXHRkb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IGZ1bmN0aW9uKGNsYXMsIHRhZykge1xuXHRcdHZhciBlbGVtZW50cyA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcgfHwgJyonKVxuXHRcdFx0LCByZSA9IG5ldyBSZWdFeHAoXCIoPzpefFxcXFxzKVwiICsgY2xhcyArIFwiKD86XFxcXHN8JClcIilcblx0XHRcdCwgcmVzdWx0cyA9IFtdXG5cdFx0XHQsIGVsZW1lbnQ7XG5cblx0XHQvLyBBYm9ydCBpZiBubyBtYXRjaGVzXG5cdFx0aWYgKCFlbGVtZW50cy5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm9yICh2YXIgaSA9IDAsIG4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcblx0XHRcdGlmIChlbGVtZW50LmNsYXNzTmFtZS5tYXRjaChyZSkpIHtcblx0XHRcdFx0cmVzdWx0cy5wdXNoKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxufVxuXG4vKipcbiAqIFJldHJpZXZlIGFsbCBlbGVtZW50cyBtYXRjaGluZyAnc2VsZWN0b3InXG4gKiBAcGFyYW1zIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW1zIHtFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW1zIHtTdHJpbmd9IHRhZ1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0LCB0YWcpIHtcblx0dmFyIGVsZW1lbnRzLCBpdGVtLCBzZWw7XG5cdGlmICghaWQuaXNFbGVtZW50KGNvbnRleHQpKSB7XG5cdFx0Ly8gUmV0cmlldmUgZG9tRWxlbWVudCBpZiBwYXNzZWQgRWxlbWVudCBpbnN0YW5jZSwgb3RoZXJ3aXNlIGRvY3VtZW50XG5cdFx0Y29udGV4dCA9IChjb250ZXh0ICE9IG51bGwgPyBjb250ZXh0LmRvbUVsZW1lbnQgOiBudWxsKSB8fCBkb2M7XG5cdH1cblxuXHRpZiAoY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsICE9IG51bGwpIHtcblx0XHRlbGVtZW50cyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cdH0gZWxzZSB7XG5cdFx0c3dpdGNoIChzZWxlY3Rvci5jaGFyQXQoMCkpIHtcblx0XHRcdC8vIElEXG5cdFx0XHRjYXNlICcjJzpcblx0XHRcdFx0ZWxlbWVudHMgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc2xpY2UoMSkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vIENsYXNzXG5cdFx0XHRjYXNlICcuJzpcblx0XHRcdFx0ZWxlbWVudHMgPSBkb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3Rvci5zbGljZSgxKSwgdGFnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHQvLyBUYWcgd2l0aCBjbGFzcyAoZWcuIGRldi5mb28pXG5cdFx0XHRcdGlmIChzZWxlY3Rvci5pbmRleE9mKCcuJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0c2VsID0gc2VsZWN0b3Iuc3BsaXQoJy4nKTtcblx0XHRcdFx0XHRlbGVtZW50cyA9IGRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbFsxXSwgc2VsWzBdKTtcblx0XHRcdFx0Ly8gVGFnXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudHMgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9yKTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChlbGVtZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gZWxlbWVudHNbMF1cblx0fWVsc2UgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHR2YXIgcmVzdWx0cyA9IFtdO1xuXHRcdC8vIENvbnZlcnQgTm9kZUxpc3QgdG8gQXJyYXlcblx0XHRmb3IgKHZhciBpID0gMCwgbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGVsZW1lbnRzW2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG4iLCIvKipcbiAqIFRlc3QgaWYgJ29iaicgaXMgYW4gQXJyYXlcbiAqIC0tIGZyb20gdW5kZXJzY29yZS5qcyAtLVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuXHRpZiAoQXJyYXkuaXNBcnJheSkge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9XG59O1xuXG4vKipcbiAqIFRlc3QgaWYgJ29iaicgaXMgYW4gT2JqZWN0XG4gKiAtLSBmcm9tIHVuZGVyc2NvcmUuanMgLS1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmlzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG5cdHJldHVybiBvYmogPT09IE9iamVjdChvYmopICYmIG9iai5ub2RlVHlwZSA9PSB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIFRlc3QgaWYgJ29iaicgaXMgYSBTdHJpbmdcbiAqIC0tIGZyb20gdW5kZXJzY29yZS5qcyAtLVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbihvYmopIHtcblx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbi8qKlxuICogVGVzdCBpZiAnb2JqJyBpcyBhIE51bWJlclxuICogLS0gZnJvbSB1bmRlcnNjb3JlLmpzIC0tXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc051bWJlciA9IGZ1bmN0aW9uKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufTtcblxuLyoqXG4gKiBUZXN0IGlmICdvYmonIGlzIGEgRnVuY3Rpb25cbiAqIC0tIGZyb20gdW5kZXJzY29yZS5qcyAtLVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuXHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG4vKipcbiAqIFRlc3QgaWYgJ29iaicgaXMgTmFOXG4gKiAtLSBmcm9tIHVuZGVyc2NvcmUuanMgLS1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmlzTmFOID0gZnVuY3Rpb24ob2JqKSB7XG5cdHJldHVybiBvYmogIT09IG9iajtcbn07XG5cbi8qKlxuICogVGVzdCBpZiAnb2JqJyBpcyBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcblx0cmV0dXJuICEhKChvYmogIT0gbnVsbCA/IG9iai5ub2RlVHlwZSA6IG51bGwpID09PSAxKTtcbn07XG5cbi8qKlxuICogVGVzdCBpZiAnb2JqJyBpcyBhIEJvb2xlYW5cbiAqIC0tIGZyb20gdW5kZXJzY29yZS5qcyAtLVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG5cdHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xufTtcbiIsIi8vIFRPRE86IGhhbmRsZSBzZXR0aW5nIHNwZWNpYWwgc2hvcnRjdXQgdHJhbnNmb3JtIHByb3BlcnRpZXMgd2l0aCBhcnJheXMgKHRyYW5zbGF0ZSwgc2NhbGUpP1xuLy8gVE9ETzogYnVsayB0cmFuc2Zvcm0gcHJvcGVydGllc1xuXG52YXIgaWRlbnRpZnkgPSByZXF1aXJlKCd1dGlsLmlkZW50aWZ5Jylcblx0LCB3aW4gPSB3aW5kb3dcblx0LCBkb2MgPSB3aW5kb3cuZG9jdW1lbnRcblx0LCBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5cdFx0Ly8gSGFzaCBvZiB1bml0IHZhbHVlc1xuXHQsIG51bWVyaWMgPSB7XG5cdFx0XHQndG9wJzogJ3B4Jyxcblx0XHRcdCdib3R0b20nOiAncHgnLFxuXHRcdFx0J2xlZnQnOiAncHgnLFxuXHRcdFx0J3JpZ2h0JzogJ3B4Jyxcblx0XHRcdCd3aWR0aCc6ICdweCcsXG5cdFx0XHQnaGVpZ2h0JzogJ3B4Jyxcblx0XHRcdCdtYXJnaW4tdG9wJzogJ3B4Jyxcblx0XHRcdCdtYXJnaW4tYm90dG9tJzogJ3B4Jyxcblx0XHRcdCdtYXJnaW4tbGVmdCc6ICdweCcsXG5cdFx0XHQnbWFyZ2luLXJpZ2h0JzogJ3B4Jyxcblx0XHRcdCdwYWRkaW5nLXRvcCc6ICdweCcsXG5cdFx0XHQncGFkZGluZy1ib3R0b20nOiAncHgnLFxuXHRcdFx0J3BhZGRpbmctbGVmdCc6ICdweCcsXG5cdFx0XHQncGFkZGluZy1yaWdodCc6ICdweCcsXG5cdFx0XHQnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyc6ICdweCcsXG5cdFx0XHQnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnOiAncHgnLFxuXHRcdFx0J2JvcmRlci10b3AtbGVmdC1yYWRpdXMnOiAncHgnLFxuXHRcdFx0J2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJzogJ3B4JyxcbiBcdFx0XHQndHJhbnNpdGlvbi1kdXJhdGlvbic6ICdtcycsXG4gXHRcdFx0J29wYWNpdHknOiAnJyxcblx0XHRcdCdmb250LXNpemUnOiAncHgnLFxuXHRcdFx0J3RyYW5zbGF0ZVgnOiAncHgnLFxuXHRcdFx0J3RyYW5zbGF0ZVknOiAncHgnLFxuXHRcdFx0J3RyYW5zbGF0ZVonOiAncHgnLFxuXHRcdFx0J3NjYWxlWCc6ICcnLFxuXHRcdFx0J3NjYWxlWSc6ICcnLFxuXHRcdFx0J3NjYWxlWic6ICcnLFxuXHRcdFx0J3JvdGF0ZSc6ICdkZWcnLFxuXHRcdFx0J3JvdGF0ZVgnOiAnZGVnJyxcblx0XHRcdCdyb3RhdGVZJzogJ2RlZycsXG5cdFx0XHQncm90YXRlWic6ICdkZWcnLFxuXHRcdFx0J3NrZXdYJzogJ2RlZycsXG5cdFx0XHQnc2tld1knOiAnZGVnJ1xuXHRcdH1cblx0LCBjb2xvdXIgPSB7XG5cdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6IHRydWUsXG5cdFx0XHQnY29sb3InOiB0cnVlLFxuXHRcdFx0J2JvcmRlci1jb2xvcic6IHRydWVcblx0XHR9XG5cdFx0Ly8gSGFzaCBvZiBzaG9ydGhhbmQgcHJvcGVydGllc1xuXHQsIHNob3J0aGFuZCA9IHtcblx0XHRcdCdib3JkZXItcmFkaXVzJzogWydib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJywgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJywgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLCAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnXSxcblx0XHRcdCdib3JkZXItY29sb3InOiBbJ2JvcmRlci1ib3R0b20tY29sb3InLCAnYm9yZGVyLWxlZnQtY29sb3InLCAnYm9yZGVyLXRvcC1jb2xvcicsICdib3JkZXItcmlnaHQtY29sb3InXSxcblx0XHRcdCdtYXJnaW4nOiBbJ21hcmdpbi10b3AnLCAnbWFyZ2luLXJpZ2h0JywgJ21hcmdpbi1sZWZ0JywgJ21hcmdpbi1ib3R0b20nXSxcblx0XHRcdCdwYWRkaW5nJzogWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLXJpZ2h0JywgJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLWJvdHRvbSddXG5cdFx0fVxuXHRcdC8vIEhhc2ggb2YgdHJhbnNmb3JtIHByb3BlcnRpZXNcblx0LCB0cmFuc2Zvcm0gPSB7XG5cdFx0XHQndHJhbnNmb3JtJzogdHJ1ZSxcblx0XHRcdCd0cmFuc2xhdGUnOiB0cnVlLFxuXHRcdFx0J3RyYW5zbGF0ZVgnOiB0cnVlLFxuXHRcdFx0J3RyYW5zbGF0ZVknOiB0cnVlLFxuXHRcdFx0J3RyYW5zbGF0ZTNkJzogdHJ1ZSxcblx0XHRcdCd0cmFuc2xhdGVaJzogdHJ1ZSxcblx0XHRcdCdyb3RhdGUnOiB0cnVlLFxuXHRcdFx0J3JvdGF0ZTNkJzogdHJ1ZSxcblx0XHRcdCdyb3RhdGVYJzogdHJ1ZSxcblx0XHRcdCdyb3RhdGVZJzogdHJ1ZSxcblx0XHRcdCdyb3RhdGVaJzogdHJ1ZSxcblx0XHRcdCdzY2FsZSc6IHRydWUsXG5cdFx0XHQnc2NhbGVYJzogdHJ1ZSxcblx0XHRcdCdzY2FsZVknOiB0cnVlLFxuXHRcdFx0J3NjYWxlM2QnOiB0cnVlLFxuXHRcdFx0J3NjYWxlWic6IHRydWUsXG5cdFx0XHQnc2tldyc6IHRydWUsXG5cdFx0XHQnc2tld1gnOiB0cnVlLFxuXHRcdFx0J3NrZXdZJzogdHJ1ZSxcblx0XHRcdCdwZXJzcGVjdGl2ZSc6IHRydWUsXG5cdFx0XHQnbWF0cml4JzogdHJ1ZSxcblx0XHRcdCdtYXRyaXgzZCc6IHRydWVcblx0XHR9XG5cblx0LCBwbGF0Zm9ybVN0eWxlcyA9IHt9XG5cdCwgcGxhdGZvcm1QcmVmaXggPSAnJ1xuXG5cdCwgUkVfVU5JVFMgPSAvKHB4fCV8ZW18bXN8c3xkZWcpJC9cblx0LCBSRV9JRV9PUEFDSVRZID0gL29wYWNpdHk9KFxcZCspL2lcblx0LCBSRV9SR0IgPSAvcmdiXFwoKFxcZCspLFxccz8oXFxkKyksXFxzPyhcXGQrKVxcKS9cblx0LCBSRV9NQVRSSVggPSAvXm1hdHJpeCg/OjNkKT9cXCgoW15cXCldKykvXG5cdCwgVkVORE9SX1BSRUZJWEVTID0gWyctd2Via2l0LScsICctbW96LScsICctbXMtJywgJy1vLSddXG5cdCwgTUFUUklYX0lERU5USVRZID0gW1sxLCAwLCAwLCAxLCAwLCAwXSwgWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDFdXVxuXHQsIE1BVFJJWF9QUk9QRVJUWV9JTkRFWCA9IHtcblx0XHR0cmFuc2xhdGVYOiBbNCwxMl0sXG5cdFx0dHJhbnNsYXRlWTogWzUsMTNdLFxuXHRcdHRyYW5zbGF0ZVo6IFtudWxsLDE0XSxcblx0XHRzY2FsZVg6IFswLDBdLFxuXHRcdHNjYWxlWTogWzMsNV0sXG5cdFx0c2NhbGVaOiBbbnVsbCwxMF0sXG5cdFx0cm90YXRlOiBbMCwwXSxcblx0XHRyb3RhdGVYOiBbbnVsbCw1XSxcblx0XHRyb3RhdGVZOiBbbnVsbCwwXSxcblx0XHRyb3RhdGVaOiBbbnVsbCwwXSxcblx0XHRza2V3WTogWzEsMV0sXG5cdFx0c2tld1g6IFsyLDJdXG5cdH07XG5cbi8vIFN0b3JlIGFsbCBwb3NzaWJsZSBzdHlsZXMgdGhpcyBwbGF0Zm9ybSBzdXBwb3J0c1xudmFyIHMgPSBjdXJyZW50KGRvYy5kb2N1bWVudEVsZW1lbnQpXG5cdCwgYWRkID0gZnVuY3Rpb24gKHByb3ApIHtcblx0XHRcdHBsYXRmb3JtU3R5bGVzW3Byb3BdID0gdHJ1ZTtcblx0XHRcdC8vIEdyYWIgdGhlIHByZWZpeCBzdHlsZVxuXHRcdFx0aWYgKCFwbGF0Zm9ybVByZWZpeCAmJiBwcm9wLmNoYXJBdCgwKSA9PSAnLScpIHtcblx0XHRcdFx0cGxhdGZvcm1QcmVmaXggPSAvXi1cXHcrLS8uZXhlYyhwcm9wKVswXTtcblx0XHRcdH1cblx0XHR9O1xuXG5pZiAocy5sZW5ndGgpIHtcblx0Zm9yICh2YXIgaSA9IDAsIG4gPSBzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdGFkZChzW2ldKTtcblx0fVxufSBlbHNlIHtcblx0Zm9yICh2YXIgcHJvcCBpbiBzKSB7XG5cdFx0YWRkKHByb3ApO1xuXHR9XG59XG5cbi8vIFN0b3JlIG9wYWNpdHkgcHJvcGVydHkgbmFtZSAobm9ybWFsaXplIElFIG9wYWNpdHkvZmlsdGVyKVxudmFyIG9wYWNpdHkgPSAhcGxhdGZvcm1TdHlsZXNbJ29wYWNpdHknXSAmJiBwbGF0Zm9ybVN0eWxlc1snZmlsdGVyJ10gPyAnZmlsdGVyJyA6ICdvcGFjaXR5JztcblxuLy8gQVBJXG5leHBvcnRzLmlzU3VwcG9ydGVkID0gaXNTdXBwb3J0ZWQ7XG5leHBvcnRzLmdldFByZWZpeGVkID0gZ2V0UHJlZml4ZWQ7XG5leHBvcnRzLmdldFNob3J0aGFuZCA9IGdldFNob3J0aGFuZDtcbmV4cG9ydHMuZ2V0QWxsID0gZ2V0QWxsO1xuZXhwb3J0cy5leHBhbmRTaG9ydGhhbmQgPSBleHBhbmRTaG9ydGhhbmQ7XG5leHBvcnRzLnBhcnNlT3BhY2l0eSA9IHBhcnNlT3BhY2l0eTtcbmV4cG9ydHMuZ2V0T3BhY2l0eVZhbHVlID0gZ2V0T3BhY2l0eVZhbHVlO1xuZXhwb3J0cy5wYXJzZU51bWJlciA9IHBhcnNlTnVtYmVyO1xuZXhwb3J0cy5wYXJzZVRyYW5zZm9ybSA9IHBhcnNlVHJhbnNmb3JtO1xuZXhwb3J0cy5nZXRTdHlsZSA9IGdldFN0eWxlO1xuZXhwb3J0cy5nZXROdW1lcmljU3R5bGUgPSBnZXROdW1lcmljU3R5bGU7XG5leHBvcnRzLmdldERvY3VtZW50U3R5bGUgPSBnZXREb2N1bWVudFN0eWxlO1xuZXhwb3J0cy5zZXRTdHlsZSA9IHNldFN0eWxlO1xuZXhwb3J0cy5jbGVhclN0eWxlID0gY2xlYXJTdHlsZTtcbmV4cG9ydHMucGxhdGZvcm1TdHlsZXMgPSBwbGF0Zm9ybVN0eWxlcztcbmV4cG9ydHMucGxhdGZvcm1QcmVmaXggPSBwbGF0Zm9ybVByZWZpeDtcbi8vIENTUzMgZmVhdHVyZSB0ZXN0cyAoYWxzbyBmb3JjZXMgY2FjaGUgaW5jbHVzaW9uKVxuZXhwb3J0cy5oYXNUcmFuc2l0aW9ucyA9IGlzU3VwcG9ydGVkKCd0cmFuc2l0aW9uJyk7XG5leHBvcnRzLmhhc1RyYW5zZm9ybXMgPSBpc1N1cHBvcnRlZCgndHJhbnNmb3JtJyk7XG5leHBvcnRzLmhhczNEVHJhbnNmb3JtcyA9IChmdW5jdGlvbiAoKSB7XG5cdGlmIChleHBvcnRzLmhhc1RyYW5zZm9ybXMpIHtcblx0XHR2YXIgcHJvcCA9IGNhbWVsQ2FzZShnZXRQcmVmaXhlZCgndHJhbnNmb3JtJykpO1xuXHRcdGVsLnN0eWxlW3Byb3BdID0gJ3RyYW5zbGF0ZVooMTBweCknO1xuXHRcdHJldHVybiBlbC5zdHlsZVtwcm9wXSAhPSAnJztcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59KSgpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiAncHJvcGVydHknIGlzIHN1cHBvcnRlZCBvbiB0aGlzIHBsYXRmb3JtXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTdXBwb3J0ZWQgKHByb3BlcnR5KSB7XG5cdHZhciBwcm9wcyA9IFtwcm9wZXJ0eSwgcGxhdGZvcm1QcmVmaXggKyBwcm9wZXJ0eV1cblx0XHQsIHN1cHBvcnQgPSBmYWxzZVxuXHRcdCwgcHJvcDtcblxuXHRmb3IgKHZhciBpID0gMCwgbiA9IHByb3BzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdHByb3AgPSBwcm9wc1tpXTtcblx0XHQvLyBVc2UgY2FjaGVkXG5cdFx0aWYgKGV4cG9ydHMucGxhdGZvcm1TdHlsZXNbcHJvcF0pIHJldHVybiB0cnVlO1xuXHRcdGlmICh0eXBlb2YgZWwuc3R5bGVbcHJvcF0gPT09ICdzdHJpbmcnXG5cdFx0XHR8fCB0eXBlb2YgZWwuc3R5bGVbY2FtZWxDYXNlKHByb3ApXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0c3VwcG9ydCA9IHRydWU7XG5cdFx0XHRcdGV4cG9ydHMucGxhdGZvcm1TdHlsZXNbcHJvcF0gPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3VwcG9ydDtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgdmVuZG9yIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFByZWZpeGVkIChwcm9wZXJ0eSkge1xuXHRpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuXHRcdC8vIEhhbmRsZSB0cmFuc2Zvcm0gcHNldWRvLXByb3BlcnRpZXNcblx0XHRpZiAodHJhbnNmb3JtW3Byb3BlcnR5XSkge1xuXHRcdFx0cHJvcGVydHkgPSAndHJhbnNmb3JtJztcblx0XHR9XG5cblx0XHRpZiAoZXhwb3J0cy5wbGF0Zm9ybVN0eWxlc1twcm9wZXJ0eV0pIHJldHVybiBwcm9wZXJ0eTtcblxuXHRcdGlmIChpc1N1cHBvcnRlZChwcm9wZXJ0eSkpIHtcblx0XHRcdGlmIChleHBvcnRzLnBsYXRmb3JtU3R5bGVzW3BsYXRmb3JtUHJlZml4ICsgcHJvcGVydHldKSB7XG5cdFx0XHRcdHByb3BlcnR5ID0gcGxhdGZvcm1QcmVmaXggKyBwcm9wZXJ0eTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcHJvcGVydHk7XG59XG5cbi8qKlxuICogUmV0cmlldmUgYSBwcm94eSBwcm9wZXJ0eSB0byB1c2UgZm9yIHNob3J0aGFuZCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFNob3J0aGFuZCAocHJvcGVydHkpIHtcblx0aWYgKHNob3J0aGFuZFtwcm9wZXJ0eV0gIT0gbnVsbCkge1xuXHRcdHJldHVybiBzaG9ydGhhbmRbcHJvcGVydHldWzBdO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBwcm9wZXJ0eTtcblx0fVxufVxuXG4vKipcbiAqIFJldHJpZXZlIGFsbCBwb3NzaWJsZSB2YXJpYXRpb25zIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGdldEFsbCAocHJvcGVydHkpIHtcblx0dmFyIGFsbCA9IFtdO1xuXG5cdC8vIEhhbmRsZSB0cmFuc2Zvcm0gcHNldWRvLXByb3BlcnRpZXNcblx0aWYgKHRyYW5zZm9ybVtwcm9wZXJ0eV0pIHtcblx0XHRwcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nO1xuXHR9XG5cblx0YWxsLnB1c2gocHJvcGVydHkpO1xuXHQvLyBIYW5kbGUgc2hvcnRoYW5kc1xuXHRpZiAoc2hvcnRoYW5kW3Byb3BlcnR5XSkge1xuXHRcdGFsbCA9IGFsbC5jb25jYXQoc2hvcnRoYW5kW3Byb3BlcnR5XSk7XG5cdH1cblx0Ly8gQXV0b21hdGljYWxseSBhZGQgdmVuZG9yIHByZWZpeFxuXHRmb3IgKHZhciBpID0gMCwgbiA9IGFsbC5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRhbGwucHVzaChwbGF0Zm9ybVByZWZpeCArIGFsbFtpXSk7XG5cdH1cblxuXHRyZXR1cm4gYWxsO1xufVxuXG4vKipcbiAqIEV4cGFuZCBzaG9ydGhhbmQgcHJvcGVydGllc1xuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm5zIHtPYmplY3R8U3RyaW5nfVxuICovXG5mdW5jdGlvbiBleHBhbmRTaG9ydGhhbmQgKHByb3BlcnR5LCB2YWx1ZSkge1xuXHRpZiAoc2hvcnRoYW5kW3Byb3BlcnR5XSAhPSBudWxsKSB7XG5cdFx0dmFyIHByb3BzID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDAsIG4gPSBzaG9ydGhhbmRbcHJvcGVydHldLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0cHJvcHNbc2hvcnRoYW5kW3Byb3BlcnR5XVtpXV0gPSB2YWx1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIHByb3BzO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBwcm9wZXJ0eTtcblx0fVxufVxuXG4vKipcbiAqIFBhcnNlIGN1cnJlbnQgb3BhY2l0eSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBwYXJzZU9wYWNpdHkgKHZhbHVlKSB7XG5cdHZhciBtYXRjaDtcblx0aWYgKHZhbHVlID09PSAnJykge1xuXHRcdHJldHVybiBudWxsO1xuXHQvLyBJRSBjYXNlXG5cdH0gZWxzZSBpZiAob3BhY2l0eSA9PT0gJ2ZpbHRlcicpIHtcblx0XHRtYXRjaCA9IHZhbHVlLm1hdGNoKFJFX0lFX09QQUNJVFkpO1xuXHRcdGlmIChtYXRjaCAhPSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuXHR9XG59XG5cbi8qKlxuICogQ29udmVydCBvcGFjaXR5IHRvIElFIGZpbHRlciBzeW50YXhcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0T3BhY2l0eVZhbHVlICh2YWx1ZSkge1xuXHR2YXIgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cdGlmIChvcGFjaXR5ID09PSAnZmlsdGVyJykge1xuXHRcdHZhbCA9IFwiYWxwaGEob3BhY2l0eT1cIiArICh2YWwgKiAxMDApICsgXCIpXCI7XG5cdH1cblx0cmV0dXJuIHZhbDtcbn1cblxuLyoqXG4gKiBTcGxpdCBhIHZhbHVlIGludG8gYSBudW1iZXIgYW5kIHVuaXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlTnVtYmVyICh2YWx1ZSwgcHJvcGVydHkpIHtcblx0dmFyIGNoYW5uZWxzLCBudW0sIHVuaXQsIHVuaXRUZXN0O1xuXG5cdGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09ICdub25lJykge1xuXHRcdHZhbHVlID0gMDtcblx0fVxuXG5cdC8vIEhhbmRsZSBhcnJheXMgb2YgdmFsdWVzICh0cmFuc2xhdGUsIHNjYWxlKVxuXHRpZiAoaWRlbnRpZnkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHJldHVybiBwYXJzZU51bWJlcih2YWwsIHByb3BlcnR5KTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIEhhbmRsZSBjb2xvdXJzXG5cdGlmIChjb2xvdXJbcHJvcGVydHldKSB7XG5cdFx0Ly8gcmdiKClcblx0XHRpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS5jaGFyQXQoMCkgIT09ICcjJykge1xuXHRcdFx0Y2hhbm5lbHMgPSBSRV9SR0IuZXhlYyh2YWx1ZSk7XG5cdFx0XHRpZiAoY2hhbm5lbHMpIHtcblx0XHRcdFx0cmV0dXJuIFtcIiNcIiArICgoMSA8PCAyNCkgfCAoY2hhbm5lbHNbMV0gPDwgMTYpIHwgKGNoYW5uZWxzWzJdIDw8IDgpIHwgY2hhbm5lbHNbM10pLnRvU3RyaW5nKDE2KS5zbGljZSgxKSwgJ2hleCddO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIFsnI2ZmZmZmZicsICdoZXgnXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFt2YWx1ZSB8fCAnI2ZmZmZmZicsICdoZXgnXTtcblx0XHR9XG5cblx0Ly8gSGFuZGxlIG51bWJlcnNcblx0fSBlbHNlIHtcblx0XHRudW0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcblx0XHRpZiAoaWRlbnRpZnkuaXNOYU4obnVtKSkge1xuXHRcdFx0cmV0dXJuIFt2YWx1ZSwgJyddO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR1bml0VGVzdCA9IFJFX1VOSVRTLmV4ZWModmFsdWUpO1xuXHRcdFx0Ly8gU2V0IHVuaXQgb3IgZGVmYXVsdFxuXHRcdFx0dW5pdCA9ICh1bml0VGVzdCAhPSBudWxsKVxuXHRcdFx0XHQ/IHVuaXRUZXN0WzFdXG5cdFx0XHRcdDogKChudW1lcmljW3Byb3BlcnR5XSAhPSBudWxsKVxuXHRcdFx0XHRcdFx0PyBudW1lcmljW3Byb3BlcnR5XVxuXHRcdFx0XHRcdFx0OiAncHgnKTtcblx0XHRcdHJldHVybiBbbnVtLCB1bml0XTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSBhICdwcm9wZXJ0eScgZnJvbSBhIHRyYW5zZm9ybSAyZCBvciAzZCAnbWF0cml4J1xuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IG1hdHJpeFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7U3RyaW5nfE51bWJlcnxBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm0gKG1hdHJpeCwgcHJvcGVydHkpIHtcblx0dmFyIG0gPSBtYXRyaXhTdHJpbmdUb0FycmF5KG1hdHJpeClcblx0XHQsIGlzM0QgPSAobSAmJiBtLmxlbmd0aCA+IDYpID8gMSA6IDA7XG5cblx0aWYgKG0pIHtcblx0XHRzd2l0Y2ggKHByb3BlcnR5KSB7XG5cdFx0XHRjYXNlICdtYXRyaXgnOlxuXHRcdFx0Y2FzZSAnbWF0cml4M2QnOlxuXHRcdFx0XHRyZXR1cm4gbTtcblx0XHRcdGNhc2UgJ3RyYW5zbGF0ZVgnOlxuXHRcdFx0Y2FzZSAndHJhbnNsYXRlWSc6XG5cdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdCsgbVtNQVRSSVhfUFJPUEVSVFlfSU5ERVhbcHJvcGVydHldW2lzM0RdXVxuXHRcdFx0XHRcdCsgJ3B4Jztcblx0XHRcdGNhc2UgJ3RyYW5zbGF0ZVonOlxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHRcdFx0XHQrIChpczNEID8gbVtNQVRSSVhfUFJPUEVSVFlfSU5ERVhbcHJvcGVydHldW2lzM0RdXSA6ICcwJylcblx0XHRcdFx0XHQrICdweCc7XG5cdFx0XHRjYXNlICd0cmFuc2xhdGUnOlxuXHRcdFx0XHRyZXR1cm4gW3BhcnNlVHJhbnNmb3JtKG1hdHJpeCwgJ3RyYW5zbGF0ZVgnKSwgcGFyc2VUcmFuc2Zvcm0obWF0cml4LCAndHJhbnNsYXRlWScpXTtcblx0XHRcdGNhc2UgJ3RyYW5zbGF0ZTNkJzpcblx0XHRcdFx0cmV0dXJuIFtwYXJzZVRyYW5zZm9ybShtYXRyaXgsICd0cmFuc2xhdGVYJyksIHBhcnNlVHJhbnNmb3JtKG1hdHJpeCwgJ3RyYW5zbGF0ZVknKSwgcGFyc2VUcmFuc2Zvcm0obWF0cml4LCAndHJhbnNsYXRlWicpXTtcblx0XHRcdGNhc2UgJ3NjYWxlWCc6XG5cdFx0XHRjYXNlICdzY2FsZVknOlxuXHRcdFx0XHRyZXR1cm4gbVtNQVRSSVhfUFJPUEVSVFlfSU5ERVhbcHJvcGVydHldW2lzM0RdXTtcblx0XHRcdGNhc2UgJ3NjYWxlWic6XG5cdFx0XHRcdHJldHVybiBpczNEID8gbVsxMF0gOiAxO1xuXHRcdFx0Y2FzZSAnc2NhbGUnOlxuXHRcdFx0XHRyZXR1cm4gW3BhcnNlVHJhbnNmb3JtKG1hdHJpeCwgJ3NjYWxlWCcpLCBwYXJzZVRyYW5zZm9ybShtYXRyaXgsICdzY2FsZVknKV07XG5cdFx0XHRjYXNlICdzY2FsZTNkJzpcblx0XHRcdFx0cmV0dXJuIFtwYXJzZVRyYW5zZm9ybShtYXRyaXgsICdzY2FsZVgnKSwgcGFyc2VUcmFuc2Zvcm0obWF0cml4LCAnc2NhbGVZJyksIHBhcnNlVHJhbnNmb3JtKG1hdHJpeCwgJ3NjYWxlWicpXTtcblx0XHRcdGNhc2UgJ3JvdGF0ZSc6XG5cdFx0XHRjYXNlICdyb3RhdGVZJzpcblx0XHRcdGNhc2UgJ3JvdGF0ZVonOlxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHRcdFx0XHQrIChNYXRoLmFjb3MobVswXSkgKiAxODApIC8gTWF0aC5QSVxuXHRcdFx0XHRcdCsgJ2RlZyc7XG5cdFx0XHRjYXNlICdyb3RhdGVYJzpcblx0XHRcdFx0cmV0dXJuICcnXG5cdFx0XHRcdFx0KyAoTWF0aC5hY29zKG1bNV0pICogMTgwKSAvIE1hdGguUElcblx0XHRcdFx0XHQrICdkZWcnO1xuXHRcdFx0Y2FzZSAnc2tld1gnOlxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHRcdFx0XHQrIChNYXRoLmF0YW4obVsyXSkgKiAxODApIC8gTWF0aC5QSVxuXHRcdFx0XHRcdCsgJ2RlZyc7XG5cdFx0XHRjYXNlICdza2V3WSc6XG5cdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdCsgKE1hdGguYXRhbihtWzFdKSAqIDE4MCkgLyBNYXRoLlBJXG5cdFx0XHRcdFx0KyAnZGVnJztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWF0cml4O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBtYXRyaXggcHJvcGVydHkgdG8gYSB0cmFuc2Zvcm0gc3R5bGUgc3RyaW5nXG4gKiBIYW5kbGVzIGV4aXN0aW5nIHRyYW5zZm9ybXMgYW5kIHNwZWNpYWwgZ3JvdXBlZCBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHZhbHVlXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZVRyYW5zZm9ybSAoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG5cdHZhciBtYXRyaXggPSBjdXJyZW50KGVsZW1lbnQsIGdldFByZWZpeGVkKHByb3BlcnR5KSlcblx0XHQsIG0sIG0xLCBpczNELCBpZHgsIGxlbjtcblxuXHRpZiAobWF0cml4ID09ICdub25lJykgbWF0cml4ID0gJyc7XG5cblx0Ly8gUmVzZXQgZXhpc3RpbmcgbWF0cml4LCBwcmVzZXJ2aW5nIHRyYW5zbGF0aW9uc1xuXHRpZiAobWF0cml4KSB7XG5cdFx0aWYgKG0gPSBtYXRyaXhTdHJpbmdUb0FycmF5KG1hdHJpeCkpIHtcblx0XHRcdGlzM0QgPSBtLmxlbmd0aCA+IDYgPyAxIDogMDtcblx0XHRcdGxlbiA9IGlzM0QgPyAzIDogMjtcblx0XHRcdGlkeCA9IGlzM0QgPyAxMiA6IDQ7XG5cdFx0XHQvLyBQcmVzZXJ2ZSB0cmFuc2xhdGlvbnNcblx0XHRcdGlmICghKH5wcm9wZXJ0eS5pbmRleE9mKCd0cmFuc2xhdGUnKSkpIHtcblx0XHRcdFx0bTEgPSBNQVRSSVhfSURFTlRJVFlbaXMzRF0uc2xpY2UoMCwgaWR4KVxuXHRcdFx0XHRcdC5jb25jYXQobS5zbGljZShpZHgsIGlkeCArIGxlbikpO1xuXHRcdFx0XHRpZiAoaXMzRCkgbTEucHVzaChNQVRSSVhfSURFTlRJVFlbaXMzRF0uc2xpY2UoLTEpKTtcblx0XHRcdFx0bSA9IG0xO1xuXHRcdFx0Ly8gUHJlc2VydmUgdHJhbnNsYXRpb25zIGFuZCBudWxsaWZ5IGNoYW5nZWRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChwcm9wZXJ0eSA9PSAndHJhbnNsYXRlJyB8fCBwcm9wZXJ0eSA9PSAndHJhbnNsYXRlM2QnKSB7XG5cdFx0XHRcdFx0bTEgPSBtLnNsaWNlKDAsIGlkeClcblx0XHRcdFx0XHRcdC5jb25jYXQoTUFUUklYX0lERU5USVRZW2lzM0RdLnNsaWNlKGlkeCwgaWR4ICsgbGVuKSk7XG5cdFx0XHRcdFx0aWYgKGlzM0QpIG0xLnB1c2gobS5zbGljZSgtMSkpO1xuXHRcdFx0XHRcdG0gPSBtMTtcblx0XHRcdFx0fSBlbHNlIGlmIChwcm9wZXJ0eSA9PSAndHJhbnNsYXRlWCcgfHwgcHJvcGVydHkgPT0gJ3RyYW5zbGF0ZVknIHx8IHByb3BlcnR5ID09ICd0cmFuc2xhdGVaJykge1xuXHRcdFx0XHRcdGlkeCA9IE1BVFJJWF9QUk9QRVJUWV9JTkRFWFtwcm9wZXJ0eV1baXMzRF07XG5cdFx0XHRcdFx0aWYgKGlkeCkgbVtpZHhdID0gTUFUUklYX0lERU5USVRZW2lzM0RdW2lkeF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWF0cml4ID0gaXMzRCA/ICdtYXRyaXgzZCcgOiAnbWF0cml4J1xuXHRcdFx0XHQrICcoJ1xuXHRcdFx0XHQrIG0uam9pbignLCAnKVxuXHRcdFx0XHQrICcpICc7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG51bWVyaWNbcHJvcGVydHldICE9IG51bGwpIHtcblx0XHRyZXR1cm4gJydcblx0XHRcdCsgbWF0cml4XG5cdFx0XHQrIHByb3BlcnR5XG5cdFx0XHQrICcoJ1xuXHRcdFx0KyB2YWx1ZVxuXHRcdFx0KyAnKSc7XG5cdC8vIEdyb3VwZWQgcHJvcGVydGllc1xuXHR9IGVsc2Uge1xuXHRcdHN3aXRjaCAocHJvcGVydHkpIHtcblx0XHRcdGNhc2UgJ3RyYW5zZm9ybSc6XG5cdFx0XHRjYXNlICd0cmFuc2Zvcm0zZCc6XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdGNhc2UgJ21hdHJpeCc6XG5cdFx0XHRjYXNlICdtYXRyaXgzZCc6XG5cdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdCsgcHJvcGVydHlcblx0XHRcdFx0XHQrICcoJ1xuXHRcdFx0XHRcdCsgdmFsdWVcblx0XHRcdFx0XHQrICcpJztcblx0XHRcdGNhc2UgJ3RyYW5zbGF0ZSc6XG5cdFx0XHRjYXNlICd0cmFuc2xhdGUzZCc6XG5cdFx0XHRcdGlmIChpZGVudGlmeS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0XHRcdC8vIEFkZCBkZWZhdWx0IHVuaXRcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gIWlkZW50aWZ5LmlzU3RyaW5nKGl0ZW0pID8gaXRlbSArICdweCc6IGl0ZW07XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuam9pbignLCAnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJydcblx0XHRcdFx0XHQrIG1hdHJpeFxuXHRcdFx0XHRcdCsgcHJvcGVydHlcblx0XHRcdFx0XHQrICcoJ1xuXHRcdFx0XHRcdCsgdmFsdWVcblx0XHRcdFx0XHQrICcpJztcblx0XHRcdGNhc2UgJ3NjYWxlJzpcblx0XHRcdGNhc2UgJ3NjYWxlM2QnOlxuXHRcdFx0XHRpZiAoaWRlbnRpZnkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLmpvaW4oJywgJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICcnXG5cdFx0XHRcdFx0KyBtYXRyaXhcblx0XHRcdFx0XHQrIHByb3BlcnR5XG5cdFx0XHRcdFx0KyAnKCdcblx0XHRcdFx0XHQrIHZhbHVlXG5cdFx0XHRcdFx0KyAnKSc7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHN0eWxlIGZvciAncHJvcGVydHknXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUgKGVsZW1lbnQsIHByb3BlcnR5KSB7XG5cdHZhciBwcm9wLCB2YWx1ZTtcblxuXHQvLyBTcGVjaWFsIGNhc2UgZm9yIG9wYWNpdHlcblx0aWYgKHByb3BlcnR5ID09PSAnb3BhY2l0eScpIHtcblx0XHRyZXR1cm4gcGFyc2VPcGFjaXR5KGN1cnJlbnQoZWxlbWVudCwgb3BhY2l0eSkpO1xuXHR9XG5cblx0Ly8gUmV0cmlldmUgbG9uZ2hhbmQgYW5kIHByZWZpeGVkIHZlcnNpb25cblx0cHJvcCA9IGdldFByZWZpeGVkKGdldFNob3J0aGFuZChwcm9wZXJ0eSkpO1xuXHR2YWx1ZSA9IGN1cnJlbnQoZWxlbWVudCwgcHJvcCk7XG5cblx0Ly8gU3BlY2lhbCBjYXNlIGZvciB0cmFuc2Zvcm1cblx0aWYgKHRyYW5zZm9ybVtwcm9wZXJ0eV0pIHtcblx0XHRyZXR1cm4gcGFyc2VUcmFuc2Zvcm0odmFsdWUsIHByb3BlcnR5KTtcblx0fVxuXG5cdHN3aXRjaCAodmFsdWUpIHtcblx0XHRjYXNlICcnOlxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0Y2FzZSAnYXV0byc6XG5cdFx0XHRyZXR1cm4gMDtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG59XG5cbi8qKlxuICogUmV0cmlldmUgdGhlIG51bWVyaWMgdmFsdWUgZm9yICdwcm9wZXJ0eSdcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXROdW1lcmljU3R5bGUgKGVsZW1lbnQsIHByb3BlcnR5KSB7XG5cdHJldHVybiBwYXJzZU51bWJlcihnZXRTdHlsZShlbGVtZW50LCBwcm9wZXJ0eSksIHByb3BlcnR5KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgJ3Byb3BlcnR5JyBmb3IgbWF0Y2hpbmcgJ3NlbGVjdG9yJyBydWxlIGluIGFsbCBkb2N1bWVudCBzdHlsZXNoZWV0c1xuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldERvY3VtZW50U3R5bGUgKHNlbGVjdG9yLCBwcm9wZXJ0eSkge1xuXHR2YXIgc3R5bGVTaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1xuXHRcdCwgc2hlZXQsIHJ1bGVzLCBydWxlO1xuXG5cdGlmIChzdHlsZVNoZWV0cykge1xuXHRcdGZvciAodmFyIGkgPSAwLCBuID0gc3R5bGVTaGVldHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRzaGVldCA9IHN0eWxlU2hlZXRzW2ldO1xuXHRcdFx0aWYgKHJ1bGVzID0gc2hlZXQucnVsZXMgfHwgc2hlZXQuY3NzUnVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDAsIG0gPSBydWxlcy5sZW5ndGg7IGogPCBtOyBqKyspIHtcblx0XHRcdFx0XHRydWxlID0gcnVsZXNbal07XG5cdFx0XHRcdFx0aWYgKHNlbGVjdG9yID09PSBydWxlLnNlbGVjdG9yVGV4dCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFNldCB0aGUgc3R5bGUgZm9yICdwcm9wZXJ0eSdcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBwcm9wZXJ0eVxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlIChlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcblx0dmFyIHByb3AsIG1hdHJpeDtcblxuXHQvLyBFeHBhbmQgc2hvcnRoYW5kc1xuXHRwcm9wID0gZXhwYW5kU2hvcnRoYW5kKHByb3BlcnR5LCB2YWx1ZSk7XG5cdFxuXHQvLyBIYW5kbGUgcHJvcGVydHkgaGFzaCByZXR1cm5lZCBmcm9tIGV4cGFuZFNob3J0aGFuZFxuXHRpZiAoaWRlbnRpZnkuaXNPYmplY3QocHJvcCkpIHtcblx0XHRmb3IgKHZhciBwIGluIHByb3ApIHtcblx0XHRcdHNldFN0eWxlKGVsZW1lbnQsIHAsIHByb3BbcF0pO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBIYW5kbGUgb3BhY2l0eVxuXHRpZiAocHJvcCA9PT0gJ29wYWNpdHknKSB7XG5cdFx0cHJvcCA9IG9wYWNpdHk7XG5cdFx0dmFsdWUgPSBnZXRPcGFjaXR5VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0Ly8gTG9vayB1cCBkZWZhdWx0IG51bWVyaWMgdW5pdCBpZiBub25lIHByb3ZpZGVkXG5cdGlmICh2YWx1ZSAhPT0gJ2F1dG8nXG5cdFx0JiYgdmFsdWUgIT09ICdpbmhlcml0J1xuXHRcdCYmIG51bWVyaWNbcHJvcF1cblx0XHQmJiAhUkVfVU5JVFMudGVzdCh2YWx1ZSkpIHtcblx0XHRcdHZhbHVlICs9IG51bWVyaWNbcHJvcF07XG5cdH1cblxuXHQvLyBMb29rIHVwIHByZWZpeGVkIHByb3BlcnR5XG5cdHByb3AgPSBnZXRQcmVmaXhlZChwcm9wKTtcblxuXHQvLyBIYW5kbGUgc3BlY2lhbCB0cmFuc2Zvcm0gcHJvcGVydGllc1xuXHRpZiAodHJhbnNmb3JtW3Byb3BlcnR5XSkge1xuXHRcdHZhbHVlID0gZ2VuZXJhdGVUcmFuc2Zvcm0oZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKTtcblx0fVxuXHRlbGVtZW50LnN0eWxlW2NhbWVsQ2FzZShwcm9wKV0gPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHN0eWxlIGZvciAncHJvcGVydHknXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBjbGVhclN0eWxlIChlbGVtZW50LCBwcm9wZXJ0eSkge1xuXHR2YXIgc3R5bGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJ1xuXHRcdCwgcmU7XG5cblx0aWYgKHN0eWxlKSB7XG5cdFx0cHJvcGVydHkgPSBnZXRBbGwocHJvcGVydHkpLmpvaW4oJ1tcXFxcdy1dKnwnKSArICdbXFxcXHctXSonO1xuXG5cdFx0cmUgPSBuZXcgUmVnRXhwKCcoPzpefFxcXFxzKSg/OicgKyBwcm9wZXJ0eSArICcpOlxcXFxzP1teO10rOycsICdpZycpO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlLnJlcGxhY2UocmUsICcnKSk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSBjdXJyZW50IGNvbXB1dGVkIHN0eWxlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY3VycmVudCAoZWxlbWVudCwgcHJvcGVydHkpIHtcblx0dmFyIHZhbHVlO1xuXG5cdGlmICh3aW4uZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdGlmIChwcm9wZXJ0eSkge1xuXHRcdFx0dmFsdWUgPSB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtcblx0XHRcdC8vIFRyeSB3aXRoIGNhbWVsIGNhc2luZ1xuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpIHdpbi5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY2FtZWxDYXNlKHByb3BlcnR5KSk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblx0XHR9XG5cdC8vIElFXG5cdH0gZWxzZSB7XG5cdFx0aWYgKHByb3BlcnR5KSB7XG5cdFx0XHR2YWx1ZSA9IGVsZW1lbnQuY3VycmVudFN0eWxlW3Byb3BlcnR5XTtcblx0XHRcdC8vIFRyeSB3aXRoIGNhbWVsIGNhc2luZ1xuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpIGVsZW1lbnQuY3VycmVudFN0eWxlW2NhbWVsQ2FzZShwcm9wZXJ0eSldO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5jdXJyZW50U3R5bGU7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ2FtZWxDYXNlICdzdHIsIHJlbW92aW5nICctJ1xuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxDYXNlIChzdHIpIHtcblx0Ly8gSUUgcmVxdWlyZXMgdmVuZG9yIHByZWZpeGVkIHZhbHVlcyB0byBzdGFydCB3aXRoIGxvd2VyY2FzZVxuXHRpZiAoc3RyLmluZGV4T2YoJy1tcy0nKSA9PSAwKSBzdHIgPSBzdHIuc2xpY2UoMSk7XG5cdHJldHVybiBzdHIucmVwbGFjZSgvLShbYS16XXxbMC05XSkvaWcsIGZ1bmN0aW9uKGFsbCwgbGV0dGVyKSB7XG5cdFx0cmV0dXJuIChsZXR0ZXIgKyAnJykudG9VcHBlckNhc2UoKTtcblx0fSk7XG59XG5cbi8qKlxuICogQ29udmVydCAnbWF0cml4JyB0byBBcnJheVxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IG1hdHJpeFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5mdW5jdGlvbiBtYXRyaXhTdHJpbmdUb0FycmF5IChtYXRyaXgpIHtcblx0aWYgKGlkZW50aWZ5LmlzQXJyYXkobWF0cml4KSkge1xuXHRcdHJldHVybiBtYXRyaXg7XG5cdH0gZWxzZSBpZiAocmUgPSBtYXRyaXgubWF0Y2goUkVfTUFUUklYKSkge1xuXHRcdC8vIENvbnZlcnQgc3RyaW5nIHRvIGFycmF5XG5cdFx0cmV0dXJuIHJlWzFdLnNwbGl0KCcsICcpXG5cdFx0XHQubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KGl0ZW0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiIsInZhciB0ZXh0UHJvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC50ZXh0Q29udGVudFxuXHQ/ICd0ZXh0Q29udGVudCdcblx0OiAnaW5uZXJUZXh0JztcblxuZXhwb3J0cy5nZXRUZXh0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0cmV0dXJuIGVsZW1lbnRbdGV4dFByb3BdO1xufTtcblxuZXhwb3J0cy5zZXRUZXh0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHRleHQpIHtcblx0ZWxlbWVudFt0ZXh0UHJvcF0gPSB0ZXh0O1xufTsiLCJ2YXIgSFRNTF9FVkVOVFMgPSAnY2xpY2sgZGJsY2xpY2sgbW91c2V1cCBtb3VzZWRvd24gY29udGV4dG1lbnUgbW91c2V3aGVlbCBtb3VzZW11bHRpd2hlZWwgRE9NTW91c2VTY3JvbGwgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlbW92ZSBzZWxlY3RzdGFydCBzZWxlY3RlbmQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBvcmllbnRhdGlvbmNoYW5nZSBmb2N1cyBibHVyIGNoYW5nZSByZXNldCBzZWxlY3Qgc3VibWl0IGxvYWQgdW5sb2FkIGJlZm9yZXVubG9hZCByZXNpemUgbW92ZSBET01Db250ZW50TG9hZGVkIHJlYWR5c3RhdGVjaGFuZ2UgbWVzc2FnZSBlcnJvciBhYm9ydCBzY3JvbGwgc2hvdyBpbnB1dCBpbnZhbGlkIHRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsIGdlc3R1cmVzdGFydCBnZXN0dXJlY2hhbmdlIGdlc3R1cmVlbmQgdGV4dGlucHV0IHJlYWR5c3RhdGVjaGFuZ2UgcGFnZXNob3cgcGFnZWhpZGUgcG9wc3RhdGUgaGFzaGNoYW5nZSBvZmZsaW5lIG9ubGluZSBhZnRlcnByaW50IGJlZm9yZXByaW50IGRyYWdzdGFydCBkcmFnZW50ZXIgZHJhZ292ZXIgZHJhZ2xlYXZlIGRyYWcgZHJvcCBkcmFnZW5kIGxvYWRzdGFydCBwcm9ncmVzcyBzdXNwZW5kIGVtcHRpZWQgc3RhbGxlZCBsb2FkbWV0YWRhdGEgbG9hZGVkZGF0YSBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIHBsYXlpbmcgd2FpdGluZyBzZWVraW5nIHNlZWtlZCBlbmRlZCBkdXJhdGlvbmNoYW5nZSB0aW1ldXBkYXRlIHBsYXkgcGF1c2UgcmF0ZWNoYW5nZSB2b2x1bWVjaGFuZ2UgY3VlY2hhbmdlIGNoZWNraW5nIG5vdXBkYXRlIGRvd25sb2FkaW5nIGNhY2hlZCB1cGRhdGVyZWFkeSBvYnNvbGV0ZSdcblx0LCBFVkVOVF9QUk9QUyA9ICdhbHRLZXkgYXR0ckNoYW5nZSBhdHRyTmFtZSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGRldGFpbCBldmVudFBoYXNlIGdldE1vZGlmaWVyU3RhdGUgaXNUcnVzdGVkIG1ldGFLZXkgcmVsYXRlZE5vZGUgcmVsYXRlZFRhcmdldCBzaGlmdEtleSBzcmNFbGVtZW50IHRpbWVTdGFtcCB2aWV3IHdoaWNoIHByb3BlcnR5TmFtZSBidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZGF0YVRyYW5zZmVyIGZyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50IHdoZWVsRGVsdGEgd2hlZWxEZWx0YVggd2hlZWxEZWx0YVkgd2hlZWxEZWx0YVogY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZSBrZXlJZGVudGlmaWVyIGtleUxvY2F0aW9uIGxvY2F0aW9uIHRvdWNoZXMgdGFyZ2V0VG91Y2hlcyBjaGFuZ2VkVG91Y2hlcyBzY2FsZSByb3RhdGlvbiBkYXRhIG9yaWdpbiBzb3VyY2Ugc3RhdGUnXG5cblx0LCBkb21IYW5kbGVycyA9IHt9XG5cdCwgdWlkID0gMVxuXHQsIGh0bWxFdmVudHMgPSB7fVxuXHQsIGV2ZW50UHJvcHMgPSB7fTtcblxuLy8gQ29udmVydCB0byBoYXNoXG5mb3IgKHZhciBpID0gMCwgZXZlbnRzID0gSFRNTF9FVkVOVFMuc3BsaXQoJyAnKSwgbiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0aHRtbEV2ZW50c1tldmVudHNbaV1dID0gdHJ1ZTtcbn1cbmZvciAoaSA9IDAsIGV2ZW50cyA9IEVWRU5UX1BST1BTLnNwbGl0KCcgJyksIG4gPSBldmVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdGV2ZW50UHJvcHNbZXZlbnRzW2ldXSA9IHRydWU7XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgZm9yIGV2ZW50IG5vdGlmaWNhdGlvblxuICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRdXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMub24gPSBmdW5jdGlvbiAodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuXHRpZiAodHlwZW9mIHRhcmdldCA9PSAnc3RyaW5nJykge1xuXHRcdGNhbGxiYWNrID0gdHlwZTtcblx0XHR0eXBlID0gdGFyZ2V0O1xuXHRcdC8vIEFzc2lnbiAndGFyZ2V0JyB0byB0aGlzXG5cdFx0Ly8gaWYgbm90IG1peGVkIGludG8gYW4gb2JqZWN0IHRoZSB0YXJnZXQgYmVjb21lcyB0aGlzIG1vZHVsZVxuXHRcdHRhcmdldCA9IHRoaXM7XG5cdH1cblxuXHRpZiAoIXRhcmdldCB8fCAhY2FsbGJhY2spIHJldHVybiB0YXJnZXQ7XG5cblx0aWYgKGlzRWxlbWVudCh0YXJnZXQpKSB7XG5cdFx0dmFyIGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1ldmVudC1pZCcpXG5cdFx0XHQsIGNiID0gY3JlYXRlRE9NSGFuZGxlcihjYWxsYmFjayk7XG5cblx0XHQvLyBTdG9yZSBpZCBvbiB0YXJnZXQgYW5kIGNyZWF0ZSBoYXNoXG5cdFx0aWYgKCFpZCkge1xuXHRcdFx0aWQgPSB1aWQrKztcblx0XHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtaWQnLCBpZCk7XG5cdFx0XHRkb21IYW5kbGVyc1tpZF0gPSB7fTtcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGNhY2hlIGJ5IGV2ZW50IHR5cGVcblx0XHRpZiAoISh0eXBlIGluIGRvbUhhbmRsZXJzW2lkXSkpIGRvbUhhbmRsZXJzW2lkXVt0eXBlXSA9IFtdO1xuXHRcdC8vIFNraXAgaWYgYWxyZWFkeSByZWdpc3RlcmVkXG5cdFx0aWYgKCFmaW5kSW5TdG9yZShkb21IYW5kbGVyc1tpZF1bdHlwZV0sIGNhbGxiYWNrKSkge1xuXHRcdFx0ZG9tSGFuZGxlcnNbaWRdW3R5cGVdLnB1c2goe1xuXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0XHRcdGNiOiBjYlxuXHRcdFx0fSk7XG5cdFx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYiwgZmFsc2UpO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXHRcdC8vIFN0b3JlIGFuZCByZWdpc3RlclxuXHRcdGlmICh0YXJnZXQuX2hhbmRsZXJzID09IG51bGwpIHRhcmdldC5faGFuZGxlcnMgPSB7fTtcblx0XHRpZiAoISh0eXBlIGluIHRhcmdldC5faGFuZGxlcnMpKSB0YXJnZXQuX2hhbmRsZXJzW3R5cGVdID0gW107XG5cdFx0Ly8gU2tpcCBpZiBhbHJlYWR5IHJlZ2lzdGVyZWRcblx0XHRpZiAoIWZpbmRJblN0b3JlKHRhcmdldC5faGFuZGxlcnNbdHlwZV0sIGNhbGxiYWNrKSkge1xuXHRcdFx0dGFyZ2V0Ll9oYW5kbGVyc1t0eXBlXS5wdXNoKHtjYWxsYmFjazogY2FsbGJhY2t9KTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGFpblxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBmb3Igb25lIHRpbWUgZXZlbnQgbm90aWZpY2F0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldF1cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0cy5vbmNlID0gZnVuY3Rpb24gKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcblx0aWYgKHR5cGVvZiB0YXJnZXQgPT0gJ3N0cmluZycpIHtcblx0XHRjYWxsYmFjayA9IHR5cGU7XG5cdFx0dHlwZSA9IHRhcmdldDtcblx0XHQvLyBBc3NpZ24gJ3RhcmdldCcgdG8gdGhpc1xuXHRcdC8vIGlmIG5vdCBtaXhlZCBpbnRvIGFuIG9iamVjdCB0aGUgdGFyZ2V0IGJlY29tZXMgdGhpcyBtb2R1bGVcblx0XHR0YXJnZXQgPSB0aGlzO1xuXHR9XG5cblx0aWYgKCF0YXJnZXQgfHwgIWNhbGxiYWNrKSByZXR1cm4gdGFyZ2V0O1xuXG5cdHZhciBjYjtcblxuXHQvLyBXcmFwIGNhbGxiYWNrXG5cdGV4cG9ydHMub24odGFyZ2V0LCB0eXBlLCBjYiA9IGZ1bmN0aW9uKCkge1xuXHRcdGV4cG9ydHMub2ZmKHRhcmdldCwgdHlwZSwgY2IpO1xuXHRcdGNhbGxiYWNrLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKTtcblx0fSk7XG5cblx0Ly8gQ2hhaW5cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciBmb3IgZXZlbnQgbm90aWZpY2F0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gW3RhcmdldF1cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0cy5vZmYgPSBmdW5jdGlvbiAodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuXHQvLyBUT0RPOiByZW1vdmUgYWxsIGhhbmRsZXJzIGJ5IHR5cGUgaWYgbm8gY2FsbGJhY2s/XG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09ICdzdHJpbmcnKSB7XG5cdFx0Y2FsbGJhY2sgPSB0eXBlO1xuXHRcdHR5cGUgPSB0YXJnZXQ7XG5cdFx0Ly8gQXNzaWduICd0YXJnZXQnIHRvIHRoaXNcblx0XHQvLyBpZiBub3QgbWl4ZWQgaW50byBhbiBvYmplY3QgdGhlIHRhcmdldCBiZWNvbWVzIHRoaXMgbW9kdWxlXG5cdFx0dGFyZ2V0ID0gdGhpcztcblx0fVxuXG5cdGlmICghdGFyZ2V0IHx8ICFjYWxsYmFjaykgcmV0dXJuIHRhcmdldDtcblxuXHRpZiAoaXNFbGVtZW50KHRhcmdldCkpIHtcblx0XHR2YXIgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWV2ZW50LWlkJylcblx0XHRcdCwgaXRlbTtcblxuXHRcdC8vIFJldHJpZXZlIGZyb20gY2FjaGVcblx0XHRpZiAoaWQgJiYgZG9tSGFuZGxlcnNbaWRdICYmIGRvbUhhbmRsZXJzW2lkXVt0eXBlXSkge1xuXHRcdFx0Ly8gUmVtb3ZlXG5cdFx0XHRpZiAoaXRlbSA9IGZpbmRJblN0b3JlKGRvbUhhbmRsZXJzW2lkXVt0eXBlXSwgY2FsbGJhY2ssIHRydWUpKSB7XG5cdFx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGl0ZW0uY2IsIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fSBlbHNlIHtcblx0XHRpZiAodGFyZ2V0Ll9oYW5kbGVycyAmJiB0YXJnZXQuX2hhbmRsZXJzW3R5cGVdKSB7XG5cdFx0XHQvLyBSZW1vdmVcblx0XHRcdGZpbmRJblN0b3JlKHRhcmdldC5faGFuZGxlcnNbdHlwZV0sIGNhbGxiYWNrLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGFpblxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIGFsbCBldmVudHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGFyZ2V0XVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0cy5vZmZBbGwgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0Ly8gQXNzaWduICd0YXJnZXQnIHRvIHRoaXNcblx0XHQvLyBpZiBub3QgbWl4ZWQgaW50byBhbiBvYmplY3QgdGhlIHRhcmdldCBiZWNvbWVzIHRoaXMgbW9kdWxlXG5cdFx0dGFyZ2V0ID0gdGhpcztcblx0fVxuXG5cdGlmIChpc0VsZW1lbnQodGFyZ2V0KSkge1xuXHRcdHZhciBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlbnQtaWQnKTtcblxuXHRcdGlmIChpZCAmJiBkb21IYW5kbGVyc1tpZF0pIHtcblx0XHRcdC8vIFVucmVnaXN0ZXIgYWxsIGV2ZW50c1xuXHRcdFx0Zm9yICh2YXIgdHlwZSBpbiBkb21IYW5kbGVyc1tpZF0pIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG4gPSBkb21IYW5kbGVyc1tpZF1bdHlwZV0ubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZG9tSGFuZGxlcnNbaWRdW3R5cGVdW2ldLmNiLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIENsZWFyIGNhY2hlXG5cdFx0XHRkb21IYW5kbGVyc1tpZF0gPSB7fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQ2xlYXIgY2FjaGVcblx0XHR0YXJnZXQuX2hhbmRsZXJzID0ge307XG5cdH1cblxuXHQvLyBDaGFpblxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBEaXNwYXRjaCBhbiBldmVudCB0byByZWdpc3RlcmVkIGxpc3RlbmVyc1xuICogQHBhcmFtIHtPYmplY3R9IFt0YXJnZXRdXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMudHJpZ2dlciA9IGZ1bmN0aW9uICh0YXJnZXQsIHR5cGUsIGRhdGEpIHtcblx0aWYgKHR5cGVvZiB0YXJnZXQgPT0gJ3N0cmluZycpIHtcblx0XHRkYXRhID0gdHlwZTtcblx0XHR0eXBlID0gdGFyZ2V0O1xuXHRcdC8vIEFzc2lnbiAndGFyZ2V0JyB0byB0aGlzXG5cdFx0Ly8gaWYgbm90IG1peGVkIGludG8gYW4gb2JqZWN0IHRoZSB0YXJnZXQgYmVjb21lcyB0aGlzIG1vZHVsZVxuXHRcdHRhcmdldCA9IHRoaXM7XG5cdH1cblxuXHRpZiAoIXRhcmdldCkgcmV0dXJuIG51bGw7XG5cblx0dmFyIGV2dCwgbGlzdDtcblxuXHRpZiAoaXNFbGVtZW50KHRhcmdldCkpIHtcblx0XHQvLyBDcmVhdGUgRE9NIGV2ZW50IGJhc2VkIG9uIHR5cGVcblx0XHR2YXIgaXNIdG1sRXZlbnQgPSB0eXBlIGluIGh0bWxFdmVudHM7XG5cdFx0ZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoaXNIdG1sRXZlbnQgPyAnSFRNTEV2ZW50cycgOiAnVUlFdmVudHMnKTtcblx0XHRldnRbaXNIdG1sRXZlbnQgPyAnaW5pdEV2ZW50JyA6ICdpbml0VUlFdmVudCddKHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMSk7XG5cdFx0ZXZ0LmRhdGEgPSBkYXRhO1xuXHRcdHJldHVybiB0YXJnZXQuZGlzcGF0Y2hFdmVudChldnQpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFJlLXRyaWdnZXI6IGhhbmRsZSBwYXNzZWQgaW4gZXZlbnQgb2JqZWN0XG5cdFx0aWYgKCdvYmplY3QnID09IHR5cGVvZiB0eXBlKSB7XG5cdFx0XHRcdGV2dCA9IHR5cGU7XG5cdFx0XHRcdGV2dC5yZWxhdGVkVGFyZ2V0ID0gZXZ0LnRhcmdldDtcblx0XHRcdFx0ZXZ0LnRhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0dHlwZSA9IGV2dC50eXBlO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQuX2hhbmRsZXJzICYmIHR5cGUgaW4gdGFyZ2V0Ll9oYW5kbGVycykge1xuXHRcdFx0ZXZ0ID0gZXZ0IHx8IG5ldyBFdmVudCh7dGFyZ2V0OnRhcmdldCwgdHlwZTp0eXBlLCBkYXRhOmRhdGF9KTtcblx0XHRcdC8vIGNvcHkgdGhlIGNhbGxiYWNrIGhhc2ggdG8gYXZvaWQgbXV0YXRpb24gZXJyb3JzXG5cdFx0XHRsaXN0ID0gdGFyZ2V0Ll9oYW5kbGVyc1t0eXBlXS5zbGljZSgpO1xuXHRcdFx0Ly8gc2tpcCBsb29wIGlmIG9ubHkgYSBzaW5nbGUgbGlzdGVuZXJcblx0XHRcdGlmIChsaXN0Lmxlbmd0aCA9PSAxKSB7XG5cdFx0XHRcdGxpc3RbMF0uY2FsbGJhY2suY2FsbCh0YXJnZXQsIGV2dCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbiA9IGxpc3QubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdFx0Ly8gRXhpdCBpZiBldmVudCBoYXMgYmVlbiBzdG9wcGVkXG5cdFx0XHRcdFx0aWYgKGV2dC5pc1N0b3BwZWQpIGJyZWFrO1xuXHRcdFx0XHRcdGxpc3RbaV0uY2FsbGJhY2suY2FsbCh0YXJnZXQsIGV2dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnRzLl9oYW5kbGVycyA9IG51bGw7XG5cbi8qKlxuICogRmluZCAnY2FsbGJhY2snIGluICdzdG9yZScgYW5kIG9wdGlvbmFsbHkgJ3JlbW92ZSdcbiAqIEBwYXJhbSB7QXJyYXl9IHN0b3JlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSBbcmVtb3ZlXVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZmluZEluU3RvcmUgKHN0b3JlLCBjYWxsYmFjaywgcmVtb3ZlKSB7XG5cdHZhciBpdGVtO1xuXG5cdGZvciAodmFyIGkgPSAwLCBuID0gc3RvcmUubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0aXRlbSA9IHN0b3JlW2ldO1xuXHRcdGlmIChpdGVtLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xuXHRcdFx0aWYgKHJlbW92ZSkgc3RvcmUuc3BsaWNlKGksIDEpO1xuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogV3JhcCAnY2FsbGJhY2snIGhhbmRsZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURPTUhhbmRsZXIgKGNhbGxiYWNrKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0Y2FsbGJhY2sobmV3IEV2ZW50KGV2dCkpO1xuXHR9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmICdlbGVtZW50JyBpcyBhIERPTUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50IChlbGVtZW50KSB7XG5cdHJldHVybiAhIShlbGVtZW50XG5cdFx0JiYgKGVsZW1lbnQgPT09IHdpbmRvd1xuXHRcdHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDlcblx0XHR8fCBlbGVtZW50Lm5vZGVUeXBlID09PSAxKSk7XG59XG5cbi8qKlxuICogQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICovXG5mdW5jdGlvbiBFdmVudCAoZXZlbnQpIHtcblx0dmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xuXG5cdHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG5cdHRoaXMub3JpZ2luYWxFdmVudCA9IGV2ZW50O1xuXHR0aGlzLnR5cGUgPSBldmVudC50eXBlO1xuXHR0aGlzLnRhcmdldCA9IHRhcmdldDtcblxuXHQvLyBGaXggdGFyZ2V0c1xuXHRpZiAodGFyZ2V0KSB7XG5cdFx0Ly8gQXZvaWQgdGV4dCBub2Rlc1xuXHRcdGlmICh0YXJnZXQubm9kZVR5cGUgPT09IDMpIHRoaXMudGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0Ly8gU1ZHIGVsZW1lbnRcblx0XHRpZiAodGFyZ2V0LmNvcnJlc3BvbmRpbmdVc2VFbGVtZW50IHx8IHRhcmdldC5jb3JyZXNwb25kaW5nRWxlbWVudCkgdGhpcy50YXJnZXQgPSB0YXJnZXQuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQgfHwgdGFyZ2V0LmNvcnJlc3BvbmRpbmdFbGVtZW50O1xuXHR9XG5cblx0Ly8gQ29weSBwcm9wZXJ0aWVzXG5cdGZvciAodmFyIHByb3AgaW4gZXZlbnRQcm9wcykge1xuXHRcdGlmIChldmVudFByb3BzLmhhc093blByb3BlcnR5KHByb3ApKSB0aGlzW3Byb3BdID0gZXZlbnRbcHJvcF07XG5cdH1cblxuXHQvLyBGaXggcHJvcGVydGllc1xuXHR0aGlzLmtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuXHR0aGlzLnJpZ2h0Q2xpY2sgPSBldmVudC53aGljaCA9PT0gMyB8fCBldmVudC5idXR0b24gPT09IDI7XG5cdGlmIChldmVudC5wYWdlWCB8fCBldmVudC5wYWdlWSkge1xuXHRcdHRoaXMuY2xpZW50WCA9IGV2ZW50LnBhZ2VYO1xuXHRcdHRoaXMuY2xpZW50WSA9IGV2ZW50LnBhZ2VZO1xuXHR9IGVsc2UgaWYgKGV2ZW50LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WSkge1xuXHRcdHRoaXMuY2xpZW50WCA9IGV2ZW50LmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgKyBkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0dGhpcy5jbGllbnRZID0gZXZlbnQuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cdH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KSB0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuXG5FdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHR0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG59O1xuXG5FdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xuXHR0aGlzLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuIiwicmVxdWlyZSgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJylcbnZhciBzdHlsZSA9IHJlcXVpcmUoJ2RvbS5zdHlsZScpXG5cdCwgaWRlbnRpZnkgPSByZXF1aXJlKCd1dGlsLmlkZW50aWZ5Jylcblx0LCBpc0Z1bmN0aW9uID0gaWRlbnRpZnkuaXNGdW5jdGlvblxuXHQsIGlzU3RyaW5nID0gaWRlbnRpZnkuaXNTdHJpbmdcblx0LCBpc0FycmF5ID0gaWRlbnRpZnkuaXNBcnJheVxuXHQsIGlzT2JqZWN0ID0gaWRlbnRpZnkuaXNPYmplY3Rcblx0LCBjb2xvdXJVdGlsID0gcmVxdWlyZSgndXRpbC5jb2xvdXInKVxuXHQsIHdpbiA9IHdpbmRvd1xuXHQsIGRvYyA9IHdpbmRvdy5kb2N1bWVudFxuXG5cdCwgYW5pbXMgPSB7fVxuXHQsIGxlbmd0aCA9IDBcblx0LCBwb29sID0gW11cblx0LCB1aWQgPSAxXG5cdCwgbGFzdCA9IDBcblx0LCBydW5uaW5nID0gZmFsc2VcblxuXHQsIEZSQU1FX1JBVEUgPSA2MFxuXHQsIERFRkFVTFRfRFVSQVRJT04gPSA1MDBcblx0LCBERUZBVUxUX0VBU0lORyA9IHJlcXVpcmUoJ3V0aWwuZWFzZS9saWIvY3ViaWMnKS5vdXRDdWJpY1xuXHQsIFBPT0xfU0laRSA9IDEwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1hdGU7XG5cbi8vIFBvcHVsYXRlIG9iamVjdCBwb29sXG5mb3IgKHZhciBpID0gMCwgbiA9IFBPT0xfU0laRTsgaSA8IG47IGkrKykge1xuXHRwb29sLnB1c2gobmV3IEFuaW0oKSk7XG59XG5cbi8qKlxuICogUmV0cmlldmUgYW4gQW5pbSBpbnN0YW5jZSBib3VuZCB0byAndGFyZ2V0J1xuICogU2V0ICdrZWVwJyB0byB0cnVlIHRvIHByZXZlbnQgY2xlYW51cFxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtCb29sZWFufSBba2VlcF1cbiAqIEByZXR1cm5zIHtBbmltfVxuICovXG5mdW5jdGlvbiBhbmltYXRlICh0YXJnZXQsIGtlZXApIHtcblx0aWYgKCF0YXJnZXQpIHJldHVybjtcblxuXHQvLyByZXVzZSBmcm9tIHRoZSBvYmplY3QgcG9vbFxuXHR2YXIgYW5pbSA9IHBvb2wubGVuZ3RoID8gcG9vbC5wb3AoKSA6IG5ldyBBbmltKCk7XG5cdGFuaW0uaWQgPSB1aWQrKztcblx0YW5pbS50YXJnZXQgPSB0YXJnZXQ7XG5cdGFuaW0ua2VlcCA9IChrZWVwICE9IG51bGwpID8ga2VlcCA6IGZhbHNlO1xuXHRyZXR1cm4gYW5pbTtcbn1cblxuLyoqXG4gKiBBZGQgJ2FuaW0nIHRvIHJlbmRlciBsb29wXG4gKiBAcGFyYW0ge0FuaW19IGFuaW1cbiAqL1xuZnVuY3Rpb24gYWRkIChhbmltKSB7XG5cdGlmICghYW5pbXNbYW5pbS5pZF0pIHtcblx0XHRhbmltc1thbmltLmlkXSA9IGFuaW07XG5cdFx0YW5pbS5pc1J1bm5pbmcgPSB0cnVlO1xuXHRcdGxlbmd0aCsrO1xuXHRcdC8vIFN0YXJ0IGlmIG5vdCBydW5uaW5nXG5cdFx0aWYgKCFydW5uaW5nKSB7XG5cdFx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRcdGxhc3QgPSBEYXRlLm5vdygpO1xuXHRcdFx0b25UaWNrKCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUmVtb3ZlICdhbmltJyBmcm9tIHJlbmRlciBsb29wXG4gKiBAcGFyYW0ge0FuaW19IGFuaW1cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlIChhbmltKSB7XG5cdGlmIChhbmltLmlzUnVubmluZykge1xuXHRcdGFuaW0uaXNSdW5uaW5nID0gZmFsc2U7XG5cdFx0YW5pbS5pc0NvbXBsZXRlID0gZmFsc2U7XG5cdFx0YW5pbS5kdXJhdGlvbiA9IDA7XG5cdFx0YW5pbS5lbGFwc2VkID0gMDtcblx0XHRhbmltLmRlbGF5QmVmb3JlID0gMDtcblx0XHRhbmltLmRlbGF5QWZ0ZXIgPSAwO1xuXHRcdGFuaW0udGlja0NhbGxiYWNrcyA9IFtdO1xuXHRcdGFuaW0uY29tcGxldGVDYWxsYmFja3MgPSBbXTtcblx0XHRhbmltLnByb3BlcnRpZXMgPSB7fTtcblx0XHRhbmltLmVhc2UgPSBERUZBVUxUX0VBU0lORztcblx0XHRhbmltLnVzaW5nQ3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcblx0XHRkZWxldGUgYW5pbXNbYW5pbS5pZF07XG5cdFx0bGVuZ3RoLS07XG5cdFx0Ly8gU3RvcCBpZiBub25lIGFjdGl2ZVxuXHRcdGlmICghbGVuZ3RoKSBydW5uaW5nID0gZmFsc2U7XG5cdH1cbn1cblxuLyoqXG4gKiBEZXN0cm95ICdhbmltJ1xuICogQHBhcmFtIHtBbmltfSBhbmltXG4gKi9cbmZ1bmN0aW9uIGRlc3Ryb3kgKGFuaW0pIHtcblx0Ly8gQ2hlY2sgdGhhdCB0aGlzIGlzIGVsaWdpYmxlIGZvciBkZXN0cnVjdGlvblxuXHRpZiAoYW5pbS5pZCkge1xuXHRcdHJlbW92ZShhbmltKTtcblx0XHQvLyBSZXNldFxuXHRcdGFuaW0uaWQgPSBudWxsO1xuXHRcdGFuaW0udGFyZ2V0ID0gbnVsbDtcblx0XHRhbmltLmtlZXAgPSBmYWxzZTtcblx0XHRwb29sLnB1c2goYW5pbSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaWNrIGhhbmRsZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lXG4gKi9cbmZ1bmN0aW9uIG9uVGljayAodGltZSkge1xuXHR2YXIgbm93ID0gRGF0ZS5ub3coKVxuXHRcdCwgdGljayA9IG5vdyAtIGxhc3Q7XG5cblx0Ly8gU3RvcmVcblx0bGFzdCA9IG5vdztcblx0Zm9yICh2YXIgaWQgaW4gYW5pbXMpIHtcblx0XHRyZW5kZXIoYW5pbXNbaWRdLCB0aWNrKTtcblx0fVxuXHQvLyBMb29wXG5cdGlmIChydW5uaW5nKSB3aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uVGljayk7XG59XG5cblxuLyoqXG4gKiBSZW5kZXJcbiAqIEBwYXJhbSB7QW5pbX0gYW5pbVxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVcbiAqL1xuZnVuY3Rpb24gcmVuZGVyIChhbmltLCB0aW1lKSB7XG5cdHZhciBwcm9wcyA9IGFuaW0ucHJvcGVydGllc1xuXHRcdCwgcywgZSwgY2FsbGJhY2ssIGNhbGxiYWNrcywgZHVyLCBwcm9wT2JqLCB2YWx1ZTtcblxuXHRhbmltLmVsYXBzZWQgKz0gdGltZTtcblx0Ly8gTWFrZSBzdXJlIHRvdGFsIHRpbWUgZG9lcyBub3QgZXhjZWVkIGR1cmF0aW9uXG5cdGR1ciA9IChhbmltLmVsYXBzZWQgPCBhbmltLmR1cmF0aW9uKVxuXHRcdD8gYW5pbS5lbGFwc2VkXG5cdFx0OiBhbmltLmR1cmF0aW9uO1xuXG5cdC8vIEhhbmRsZSBkZWxheSBiZWZvcmVcblx0aWYgKGFuaW0uZGVsYXlCZWZvcmUgPiAwKSB7XG5cdFx0YW5pbS5kZWxheUJlZm9yZSAtPSB0aW1lO1xuXHRcdC8vIFJvdW5kIGRvd24gaWYgdW5kZXIgMSBmcmFtZVxuXHRcdGlmIChhbmltLmRlbGF5QmVmb3JlIDwgMTYpIHtcblx0XHRcdGFuaW0uZGVsYXlCZWZvcmUgPSAwO1xuXHRcdH1cblx0fVxuXG5cdC8vIFVwZGF0ZSBwcm9wZXJ0aWVzXG5cdGlmICghYW5pbS5pc0NvbXBsZXRlICYmIGFuaW0uZGVsYXlCZWZvcmUgPD0gMCkge1xuXHRcdGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcblx0XHRcdHByb3BPYmogPSBwcm9wc1twcm9wXTtcblx0XHRcdC8vIEFsbCB0eXBlcyBleGNlcHQgY3NzIHRyYW5zaXRpb25zXG5cdFx0XHRpZiAocHJvcE9iai50eXBlIDwgNCkge1xuXHRcdFx0XHRzID0gcHJvcE9iai5zdGFydDtcblx0XHRcdFx0Ly9IYW5kbGUgYXJyYXlzIGZvciB0cmFuc2Zvcm1zIGxpa2UgdHJhbnNsYXRlIGFuZCBzY2FsZVxuXHRcdFx0XHRpZiAoaXNBcnJheShwcm9wT2JqLmVuZCkpe1xuXHRcdFx0XHRcdHZhciB2YWx1ZXMgPSBbXTtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BPYmouZW5kLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRlID0gcHJvcE9iai5lbmRbaV0gLSBzO1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBwcm9wT2JqLmN1cnJlbnQgPSBhbmltLmVhc2UuanMoZHVyLCBzLCBlLCBhbmltLmR1cmF0aW9uKTtcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8vSGFuZGxlIG9iamVjdHMgZm9yIHJnYiBjb2xvdXJzXG5cdFx0XHRcdH1lbHNlIGlmKGlzT2JqZWN0KHByb3BPYmouZW5kKSl7XG5cdFx0XHRcdFx0dmFyIHIsZyxiO1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBwcm9wT2JqLmVuZCl7XG5cdFx0XHRcdFx0XHRpZiAocHJvcE9iai5lbmQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgXHRcdFx0cyA9IHByb3BPYmouc3RhcnRba2V5XTtcbiAgICAgICAgIFx0XHRcdGUgPSBNYXRoLmFicyhwcm9wT2JqLmVuZFtrZXldIC0gcyk7XG4gICAgICAgICBcdFx0XHRpZiAoa2V5ID09PSAncicpe1xuICAgICAgICAgXHRcdFx0XHRyID0gcHJvcE9iai5jdXJyZW50ID0gYW5pbS5lYXNlLmpzKGR1ciwgcywgZSwgYW5pbS5kdXJhdGlvbik7XG4gICAgICAgICBcdFx0XHR9ZWxzZSBpZigga2V5ID09PSAnZycpe1xuICAgICAgICAgXHRcdFx0XHRnID0gcHJvcE9iai5jdXJyZW50ID0gYW5pbS5lYXNlLmpzKGR1ciwgcywgZSwgYW5pbS5kdXJhdGlvbik7XG4gICAgICAgICBcdFx0XHR9ZWxzZSBpZiAoa2V5ID09ICdiJyl7XG4gICAgICAgICBcdFx0XHRcdGIgPSBwcm9wT2JqLmN1cnJlbnQgPSBhbmltLmVhc2UuanMoZHVyLCBzLCBlLCBhbmltLmR1cmF0aW9uKTtcbiAgICAgICAgIFx0XHRcdH1cbiAgICBcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGUgPSBwcm9wT2JqLmVuZCAtIHM7XG5cdFx0XHRcdFx0dmFsdWUgPSBwcm9wT2JqLmN1cnJlbnQgPSBhbmltLmVhc2UuanMoZHVyLCBzLCBlLCBhbmltLmR1cmF0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKHByb3BPYmoudHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdGFuaW0udGFyZ2V0W3Byb3BdKHZhbHVlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdGFuaW0udGFyZ2V0W3Byb3BdID0gdmFsdWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0XHQvL0hhbmRsZSBhcnJheXMgZm9yIHRyYW5zZm9ybXMgbGlrZSB0cmFuc2xhdGUgYW5kIHNjYWxlXG5cdFx0XHRcdFx0XHRpZiAoaXNBcnJheShwcm9wT2JqLmVuZCkpe1xuXHRcdFx0XHRcdFx0XHRzdHlsZS5zZXRTdHlsZShhbmltLnRhcmdldCwgcHJvcCwgdmFsdWVzKTtcblx0XHRcdFx0XHRcdC8vSGFuZGxlIHJnYiBjb2xvcnNcblx0XHRcdFx0XHRcdH1lbHNlIGlmKGlzT2JqZWN0KHByb3BPYmouZW5kKSl7XG5cdFx0XHRcdFx0XHRcdHN0eWxlLnNldFN0eWxlKGFuaW0udGFyZ2V0LCBwcm9wLCAncmdiKCcrTWF0aC5jZWlsKHIpKycsJytNYXRoLmNlaWwoZykrJywnK01hdGguY2VpbChiKSsnKScpO1xuXHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdHN0eWxlLnNldFN0eWxlKGFuaW0udGFyZ2V0LCBwcm9wLCBcIlwiICsgdmFsdWUgKyBwcm9wT2JqLnVuaXQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2FsbCB0aWNrIGNhbGxiYWNrc1xuXHRleGVjdXRlQ2FsbGJhY2tzKGFuaW0udGlja0NhbGxiYWNrcyk7XG5cblx0Ly8gT24gY29tcGxldGUuLi5cblx0aWYgKGFuaW0uZWxhcHNlZCA+PSBhbmltLmR1cmF0aW9uKSB7XG5cdFx0YW5pbS5pc0NvbXBsZXRlID0gdHJ1ZTtcblxuXHRcdC8vIEhhbmRsZSBkZWxheSBhZnRlclxuXHRcdGlmIChhbmltLmRlbGF5QWZ0ZXIpIHtcblx0XHRcdGFuaW0uZHVyYXRpb24gKz0gYW5pbS5kZWxheUFmdGVyO1xuXHRcdFx0YW5pbS5kZWxheUFmdGVyID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gUmVtb3ZlIGNzcyB0cmFuc2l0aW9uIHN5bnRheFxuXHRcdFx0aWYgKGFuaW0udXNpbmdDc3NUcmFuc2l0aW9ucykge1xuXHRcdFx0XHRzdHlsZS5jbGVhclN0eWxlKGFuaW0udGFyZ2V0LCAndHJhbnNpdGlvbicpO1xuXHRcdFx0XHRhbmltLnVzaW5nQ3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVzZXRcblx0XHRcdGNhbGxiYWNrcyA9IGFuaW0uY29tcGxldGVDYWxsYmFja3Muc2xpY2UoKTtcblx0XHRcdChhbmltLmtlZXApID8gcmVtb3ZlKGFuaW0pIDogZGVzdHJveShhbmltKTtcblxuXHRcdFx0Ly8gVHJpZ2dlciBjYWxsYmFja3Ncblx0XHRcdC8vIERlbGF5IHRvIGFsbG93IGZvciBHQyBhbmQgY2xlYW51cFxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0ZXhlY3V0ZUNhbGxiYWNrcyhjYWxsYmFja3MpO1xuXHRcdFx0XHRjYWxsYmFja3MgPSBudWxsO1xuXHRcdFx0fSwgMCk7XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIEV4ZWN1dGUgb25lIG9yIG1vcmUgJ2NhbGxiYWNrcydcbiAqIEBwYXJhbSB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFja3MgKGNhbGxiYWNrcykge1xuXHRpZiAoY2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdC8vIERvbid0IGxvb3AgaWYgb25seSAxXG5cdFx0aWYgKGNhbGxiYWNrcy5sZW5ndGggPT0gMSkge1xuXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFja3NbMF07XG5cdFx0XHRjYWxsYmFjay5hcmdzXG5cdFx0XHRcdD9cdGNhbGxiYWNrLmZ1bmMuYXBwbHkobnVsbCwgY2FsbGJhY2suYXJncylcblx0XHRcdFx0OiBjYWxsYmFjay5mdW5jKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRjYWxsYmFjayA9IGNhbGxiYWNrc1tpXTtcblx0XHRcdFx0Y2FsbGJhY2suYXJnc1xuXHRcdFx0XHRcdD8gY2FsbGJhY2suZnVuYy5hcHBseShudWxsLCBjYWxsYmFjay5hcmdzKVxuXHRcdFx0XHRcdDogY2FsbGJhY2suZnVuYygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBBbmltIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIEFuaW0gKCkge1xuXHR0aGlzLmlkID0gbnVsbDtcblx0dGhpcy50YXJnZXQgPSBudWxsO1xuXHR0aGlzLmR1cmF0aW9uID0gMDtcblx0dGhpcy5kZWxheUJlZm9yZSA9IDA7XG5cdHRoaXMuZGVsYXlBZnRlciA9IDA7XG5cdHRoaXMuZWxhcHNlZCA9IDA7XG5cdHRoaXMucHJvcGVydGllcyA9IHt9O1xuXHR0aGlzLmVhc2UgPSBERUZBVUxUX0VBU0lORztcblx0dGhpcy50aWNrQ2FsbGJhY2tzID0gW107XG5cdHRoaXMuY29tcGxldGVDYWxsYmFja3MgPSBbXTtcblx0dGhpcy5rZWVwID0gZmFsc2U7XG5cdHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG5cdHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXHR0aGlzLnVzaW5nQ3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBBbmltYXRlIGZyb20gZXhpc3RpbmcgdmFsdWVzIHRvIHRhcmdldCB2YWx1ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge051bWJlcn0gW2R1cmF0aW9uXSAobWlsaXNlY29uZHMpXG4gKiBAcGFyYW0ge09iamVjdH0gW2Vhc2VdXG4gKiBAcmV0dXJucyB7QW5pbX1cbiAqL1xuQW5pbS5wcm90b3R5cGUudG8gPSBmdW5jdGlvbiAocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2UpIHtcblx0dmFyIGN1cnJlbnQsIGVuZCwgcCwgdmFsLCB0U3R5bGU7XG5cblx0aWYgKGVhc2UpIHRoaXMuZWFzZSA9IGVhc2U7XG5cdGlmIChkdXJhdGlvbiA9PSBudWxsKSBkdXJhdGlvbiA9IERFRkFVTFRfRFVSQVRJT047XG5cdHRoaXMuZHVyYXRpb24gKz0gZHVyYXRpb247XG5cdHRoaXMuZWxhcHNlZCA9IDA7XG5cdHRoaXMucHJvcGVydGllcyA9IHt9O1xuXHR0aGlzLnVzaW5nQ3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcblxuXHRmb3IgKHZhciBwcm9wIGluIHByb3BlcnRpZXMpIHtcblx0XHR2YWwgPSBwcm9wZXJ0aWVzW3Byb3BdO1xuXHRcdHAgPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRlbmQ6IHZhbCxcblx0XHRcdHR5cGU6IDBcblx0XHR9O1xuXG5cdFx0Ly8gUHJvcGVydHkgaXMgYSBGdW5jdGlvblxuXHRcdGlmIChpc0Z1bmN0aW9uKHRoaXMudGFyZ2V0W3Byb3BdKSkge1xuXHRcdFx0cC5zdGFydCA9IHRoaXMudGFyZ2V0W3Byb3BdKCk7XG5cdFx0XHRwLnR5cGUgPSAxO1xuXG5cdFx0Ly9Qcm9wZXJ0eSBpcyBhIHByb3BlcnR5XG5cdFx0fSBlbHNlIGlmIChwcm9wIGluIHRoaXMudGFyZ2V0ICYmICFpc0FycmF5KHAuZW5kKSkge1xuXHRcdFx0cC5zdGFydCA9IHRoaXMudGFyZ2V0W3Byb3BdO1xuXHRcdFx0cC50eXBlID0gMjtcblxuXHRcdC8vIFByb3BlcnR5IGlzIGNzc1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50ID0gc3R5bGUuZ2V0TnVtZXJpY1N0eWxlKHRoaXMudGFyZ2V0LCBwcm9wKTtcblx0XHRcdHAuc3RhcnQgPSBjdXJyZW50WzBdO1xuXHRcdFx0Ly8gVXNlIGVuZGluZyB1bml0IGlmIGEgc3RyaW5nIGlzIHBhc3NlZFxuXHRcdFx0aWYgKGlzU3RyaW5nKHZhbCkpIHtcblx0XHRcdFx0ZW5kID0gc3R5bGUucGFyc2VOdW1iZXIodmFsLCBwcm9wKTtcblx0XHRcdFx0cC51bml0ID0gZW5kWzFdO1xuXHRcdFx0XHRwLmVuZCA9IGVuZFswXTtcblx0XHRcdFx0aWYgKCFzdHlsZS5oYXNUcmFuc2l0aW9ucyl7XG5cdFx0XHRcdFx0Ly8gTmVlZCB0byBoYW5kbGUgY29sb3VycyBkaWZmcmVudGx5IHdpdGggbm8gdHJhbnNpdGlvbnNcblx0XHRcdFx0XHQvLyBUT0RPOiBIYW5kbGUgcmdiYSBjb2xvdXJzXG5cdFx0XHRcdFx0aWYgKGVuZFsxXSA9PT0gJ2hleCcgfHwgZW5kWzFdID09PSAgJ3JnYicpe1xuXHRcdFx0XHRcdFx0Ly9Db252ZXJ0IGNvbG91cnMgdG8gY29tcG9uZW50IGFuZCBoZXggdG8gcmdiXG5cdFx0XHRcdFx0XHRwLnN0YXJ0ID0gY29sb3VyVXRpbC50b0NvbXBvbmVudChjdXJyZW50WzBdKTtcblx0XHRcdFx0XHRcdHAuZW5kID0gY29sb3VyVXRpbC50b0NvbXBvbmVudChlbmRbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBVc2UgdGhlIGN1cnJlbnQgdW5pdCBpZiBub25lIHNwZWNpZmllZFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cC51bml0ID0gY3VycmVudFsxXTtcblx0XHRcdFx0cC5lbmQgPSB2YWw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVzZSBjc3MgdHJhbnNpdGlvbnMgaWYgYXZhaWxhYmxlXG5cdFx0XHRpZiAoc3R5bGUuaGFzVHJhbnNpdGlvbnMpIHtcblx0XHRcdFx0Ly8gRmlyc3Qgc2V0IHVwIHRyYW5zaXRpb25cblx0XHRcdFx0aWYgKCF0aGlzLnVzaW5nQ3NzVHJhbnNpdGlvbnMpIHtcblx0XHRcdFx0XHR0U3R5bGUgPSAnYWxsICcgKyB0aGlzLmR1cmF0aW9uICsgJ21zJztcblx0XHRcdFx0XHRpZiAoZWFzZSkgdFN0eWxlICs9ICcgJyArICh0aGlzLmVhc2UuY3NzIHx8IERFRkFVTFRfRUFTSU5HLmNzcyk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZGVsYXlCZWZvcmUpIHRTdHlsZSArPSAnICcgKyB0aGlzLmRlbGF5QmVmb3JlICsgJ21zJztcblx0XHRcdFx0XHRzdHlsZS5zZXRTdHlsZSh0aGlzLnRhcmdldCwge3RyYW5zaXRpb246IHRTdHlsZX0pO1xuXHRcdFx0XHRcdHRoaXMudXNpbmdDc3NUcmFuc2l0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cC50eXBlID0gNDtcblx0XHRcdFx0c3R5bGUuc2V0U3R5bGUodGhpcy50YXJnZXQsIHByb3AsIHAuZW5kKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHAudHlwZSA9IDM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMucHJvcGVydGllc1twcm9wXSA9IHA7XG5cdH1cblxuXHRhZGQodGhpcyk7XG5cblx0Ly8gQ2hhaW5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERlbGF5IHRoZSBzdGFydCBvciBjb21wbGV0aW9uIG9mIGFuIGFuaW1hdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uXG4gKi9cbkFuaW0ucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG5cdGlmIChkdXJhdGlvbiAhPSBudWxsKSB7XG5cdFx0aWYgKCF0aGlzLmlzUnVubmluZykge1xuXHRcdFx0dGhpcy5kdXJhdGlvbiArPSBkdXJhdGlvbjtcblx0XHRcdHRoaXMuZGVsYXlCZWZvcmUgPSBkdXJhdGlvbjtcblx0XHRcdGFkZCh0aGlzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZWxheUFmdGVyID0gZHVyYXRpb247XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hhaW5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSB2YWx1ZSBmb3IgJ3Byb3BlcnR5J1xuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5BbmltLnByb3RvdHlwZS5nZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuXHRpZiAodGhpcy5pc1J1bm5pbmcpIHtcblx0XHR2YXIgcHJvcCA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eV07XG5cdFx0cmV0dXJuIHByb3AgIT0gbnVsbCA/IHByb3AuY3VycmVudCA6IG51bGw7XG5cdH1cbn07XG5cbi8qKlxuICogU2V0IHRoZSAndmFsdWUnIGZvciAncHJvcGVydHknXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICovXG5BbmltLnByb3RvdHlwZS5zZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcblx0aWYgKHRoaXMuaXNSdW5uaW5nKSB7XG5cdFx0dmFyIHByb3AgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHldO1xuXHRcdGlmIChwcm9wICE9IG51bGwpIHByb3AuZW5kID0gdmFsdWU7XG5cdFx0Ly8gU2V0IG5ldyBlbmQgdGFyZ2V0IGZvciBjc3MgdHJhbnNpdGlvbnNcblx0XHRpZiAocHJvcC50eXBlID09IDQpIHN0eWxlLnNldFN0eWxlKHRoaXMudGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpO1xuXHR9XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRpY2sgY2FsbGJhY2sgaGFuZGxlciB3aXRoIG9wdGlvbmFsIGFyZ3VtZW50c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Li4ufVxuICogQHJldHVybnMge0FuaW19XG4gKi9cbkFuaW0ucHJvdG90eXBlLm9uVGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHR2YXIgYXJncyA9ICgyIDw9IGFyZ3VtZW50cy5sZW5ndGgpXG5cdFx0PyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cdFx0OiBudWxsO1xuXHR0aGlzLnRpY2tDYWxsYmFja3MucHVzaCh7XG5cdFx0ZnVuYzogY2FsbGJhY2ssXG5cdFx0YXJnczogYXJnc1xuXHR9KTtcblxuXHQvLyBDaGFpblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgY29tcGxldGUgY2FsbGJhY2sgaGFuZGxlciB3aXRoIG9wdGlvbmFsIGFyZ3VtZW50c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Li4ufVxuICogQHJldHVybnMge0FuaW19XG4gKi9cbkFuaW0ucHJvdG90eXBlLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0dmFyIGFyZ3MgPSAoMiA8PSBhcmd1bWVudHMubGVuZ3RoKVxuXHRcdD8gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXHRcdDogbnVsbDtcblx0dGhpcy5jb21wbGV0ZUNhbGxiYWNrcy5wdXNoKHtcblx0XHRmdW5jOiBjYWxsYmFjayxcblx0XHRhcmdzOiBhcmdzXG5cdH0pO1xuXG5cdC8vIENoYWluXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdG9wIHJ1bm5pbmcgQW5pbVxuICovXG5BbmltLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodGhpcy5rZWVwKSB7XG5cdFx0cmVtb3ZlKHRoaXMpXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGRlc3Ryb3kodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogRGVzdHJveSBBbmltXG4gKi9cbkFuaW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG5cdGRlc3Ryb3kodGhpcyk7XG5cdHJldHVybiBudWxsO1xufTtcbiIsInZhciB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXVxuXHQsIGxhc3RGcmFtZVRpbWUgPSBudWxsO1xuXG5mb3IgKHZhciBpID0gMCwgbiA9IHZlbmRvcnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdHZlbmRvciA9IHZlbmRvcnNbaV07XG5cdGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3IgKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdmVuZG9yICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuXHR9XG59XG5cbmlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcblx0XHR2YXIgY3VyckZyYW1lVGltZSA9ICsobmV3IERhdGUoKSlcblx0XHRcdCwgaWQsIGludGVydmFsLCBsYXN0VGltZTtcblx0XHRpZiAobGFzdEZyYW1lVGltZSA9PSBudWxsKSB7XG5cdFx0XHRsYXN0RnJhbWVUaW1lID0gY3VyckZyYW1lVGltZTtcblx0XHR9XG5cdFx0aW50ZXJ2YWwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyRnJhbWVUaW1lIC0gbGFzdEZyYW1lVGltZSkpO1xuXHRcdGlkID0gd2luZG93LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gQ2FsbCB3aXRoIGVsYXBzZWQgZnJhbWUgdGltZVxuXHRcdFx0Y2FsbGJhY2soY3VyckZyYW1lVGltZSArIGludGVydmFsKTtcblx0XHR9KSwgaW50ZXJ2YWwpO1xuXHRcdGxhc3RUaW1lID0gY3VyckZyYW1lVGltZSArIGludGVydmFsO1xuXHRcdHJldHVybiBpZDtcblx0fTtcbn1cblxuaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcblx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcblx0XHRjbGVhclRpbWVvdXQoaWQpO1xuXHR9O1xufVxuIiwiLyoqXG4gKiBFeHRyYWN0IGNvbG91ciBjaGFubmVscyBmcm9tIGEgY29sb3VyIHN0cmluZyAocmdiKHIsZyxiKSwgcnJnZ2JiLCByZ2IpXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sb3VyXG4gKi9cbmV4cG9ydHMudG9Db21wb25lbnQgPSBmdW5jdGlvbihjb2xvdXIpIHtcblx0Ly8gUmVtb3ZlIGhhc2ggYW5kIHNwYWNlc1xuXHRjb2xvdXIgPSBjb2xvdXIucmVwbGFjZSgvWyNcXHNdL2csICcnKTtcblxuXHQvLyByZ2IociwgZywgYilcblx0aWYgKC9ecmdiLy50ZXN0KGNvbG91cikpIHtcblx0XHR2YXIgcmUgPSAvXnJnYlxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSlcXCkkLztcblx0XHR2YXIgY2hhbm5lbHMgPSByZS5leGVjKGNvbG91cik7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHI6IHBhcnNlSW50KGNoYW5uZWxzWzFdLCAxMCksXG5cdFx0XHRnOiBwYXJzZUludChjaGFubmVsc1syXSwgMTApLFxuXHRcdFx0YjogcGFyc2VJbnQoY2hhbm5lbHNbM10sIDEwKVxuXHRcdH07XG5cdC8vICNycmdnYmJcblx0fSBlbHNlIGlmIChjb2xvdXIubGVuZ3RoID09PSA2KSB7XG5cdFx0cmUgPSAvXihcXHd7Mn0pKFxcd3syfSkoXFx3ezJ9KSQvO1xuXHRcdGNoYW5uZWxzID0gcmUuZXhlYyhjb2xvdXIpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRyOiBwYXJzZUludChjaGFubmVsc1sxXSwgMTYpLFxuXHRcdFx0ZzogcGFyc2VJbnQoY2hhbm5lbHNbMl0sIDE2KSxcblx0XHRcdGI6IHBhcnNlSW50KGNoYW5uZWxzWzNdLCAxNilcblx0XHR9O1xuXHQvLyAjcmdiXG5cdH0gZWxzZSBpZiAoY29sb3VyLmxlbmd0aCA9PT0gMykge1xuXHRcdHJlID0gL14oXFx3ezF9KShcXHd7MX0pKFxcd3sxfSkkLztcblx0XHRjaGFubmVscyA9IHJlLmV4ZWMoY29sb3VyKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cjogcGFyc2VJbnQoY2hhbm5lbHNbMV0gKyBjaGFubmVsc1sxXSwgMTYpLFxuXHRcdFx0ZzogcGFyc2VJbnQoY2hhbm5lbHNbMl0gKyBjaGFubmVsc1syXSwgMTYpLFxuXHRcdFx0YjogcGFyc2VJbnQoY2hhbm5lbHNbM10gKyBjaGFubmVsc1szXSwgMTYpXG5cdFx0fTtcblx0fVxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSByZ2JhKHIsZyxiLGEpIGNvbG91ciBzdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvdXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbHBoYVxuICovXG5leHBvcnRzLnJnYmEgPSBmdW5jdGlvbihjb2xvdXIsIGFscGhhKSB7XG5cdHZhciBjO1xuXHRjID0gZXhwb3J0cy50b0NvbXBvbmVudChjb2xvdXIpO1xuXHRyZXR1cm4gXCJyZ2JhKFwiICsgYy5yICsgXCIsXCIgKyBjLmcgKyBcIixcIiArIGMuYiArIFwiLFwiICsgYWxwaGEgKyBcIilcIjtcbn07XG4iLCIvLyB0OiBjdXJyZW50IHRpbWUsIGI6IGJlZ2lubmluZyB2YWx1ZSwgYzogY2hhbmdlIGluIHZhbHVlLCBkOiBkdXJhdGlvblxuXG5leHBvcnRzLmluQ3ViaWMgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCknXG59O1xuXG5leHBvcnRzLm91dEN1YmljID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKSdcbn07XG5cbmV4cG9ydHMuaW5PdXRDdWJpYyA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcblx0XHR9XG59O1xuIiwiZXhwb3J0cy5UV09fUEkgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiBNYXRoLlBJICogMjtcbn0pKCk7XG5cbmV4cG9ydHMuSEFMRl9QSSA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIE1hdGguUEkgKiAwLjU7XG59KSgpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgZ2l2ZW4gdmFsdWUgaW4gZGVncmVlcyB0byByYWRpYW5zXG4gKiBAcGFyYW0ge051bWJlcn0gZGVnXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5leHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbihkZWcpIHtcblx0cmV0dXJuIChkZWcgKiBNYXRoLlBJKSAvIDE4MDtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBnaXZlbiB2YWx1ZSBpbiByYWRpYW5zIHRvIGRlZ3JlZXNcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uKHJhZCkge1xuXHRyZXR1cm4gKDE4MCAqIHJhZCkgLyBNYXRoLlBJO1xufTtcblxuLyoqXG4gKiBUYWtlcyBhICd2YWx1ZScgd2l0aGluIGEgZ2l2ZW4gcmFuZ2UgYW5kIGNvbnZlcnRzIGl0IHRvIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbmltdW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhpbXVtXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG52YXIgbm9ybWFsaXplID0gZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpe1xuXHRpZihtaW4gPT09IG1heCB8fCB2YWx1ZSA+PSBtYXgpe1xuXHRcdHJldHVybiAxXG5cdH1lbHNlIGlmICh2YWx1ZSA8PSBtaW4pe1xuXHRcdHJldHVybiAwXG5cdH1lbHNle1xuXHRcdHJldHVybiAodmFsdWUtbWluKSAvIChtYXgtbWluKVxuXHR9XHRcbn1cblxuLyoqXG4gKiBUYWtlcyBhIG5vcm1hbGl6ZWQgdmFsdWUgYW5kIGEgcmFuZ2UgYW5kIHJldHVybnMgdGhlIGFjdHVhbCB2YWx1ZSBpbiB0aGF0IHJhbmdlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG5vcm1WYWx1ZVxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbmltdW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhpbXVtXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG52YXIgaW50ZXJwbGF0ZSA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihub3JtVmFsdWUsIG1pbiwgbWF4KSB7XG5cdHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIG5vcm1WYWx1ZTtcbn07XG5cbi8qKlxuICogVGFrZXMgYSB2YWx1ZSBpbiBhIGdpdmVuIHJhbmdlIChtaW4xLCBtYXgxKSBhbmQgZmluZHMgdGhlIGNvcnJlc29uZGluZyB2YWx1ZSBpbiB0aGUgbmV4dCByYW5nZSAobWluMiwgbWF4MikuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW4xXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4MVxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbjJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXgyXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG52YXIgbWFwID0gZXhwb3J0cy5tYXAgPSBmdW5jdGlvbih2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuXHRyZXR1cm4gaW50ZXJwbGF0ZShub3JtYWxpemUodmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKTtcbn07XG5cbi8qKlxuICogVGFrZXMgYSB2YWx1ZSBhbmQgbGltaXRzIGl0IHRvIGZhbGwgd2l0aGluIGEgZ2l2ZW4gcmFuZ2UuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW5pbXVtXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4aW11bVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xudmFyIGxpbWl0ID0gZXhwb3J0cy5saW1pdCA9IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCB2YWx1ZSksIG1heCk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBhIGdpdmVuIHJhbmdlLlxuICogQHBhcmFtIHtOdW1iZXJ9IGxvd1xuICogQHBhcmFtIHtOdW1iZXJ9IGhpZ2hcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbnZhciByYW5nZWRSYW5kb20gPSBleHBvcnRzLnJhbmdlZFJhbmRvbSA9IGZ1bmN0aW9uKGxvdywgaGlnaCkge1xuXHRyZXR1cm4gbWFwKE1hdGgucmFuZG9tKCksIDAsIDEsIGxvdywgaGlnaCk7XG59O1xuXG4vKipcbiAqIFJvdW5kcyBhIHZhbHVlIHRvIHRoZSBudW1iZXIgb2Ygc3BlY2lmaWVkIGRlY2ltYWwgcGxhY2VzXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWNpbWFsUGxhY2VzXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5leHBvcnRzLnJvdW5kID0gZnVuY3Rpb24gKHZhbHVlLCBkZWNpbWFsUGxhY2VzKSB7XG5cdHZhciBwYXJ0cyA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVxuXHRcdCwgcHJlID0gcGFydHNbMF0gKyBwYXJ0c1sxXS5zdWJzdHIoMCwgZGVjaW1hbFBsYWNlcylcblx0XHQsIHBvc3QgPSBwYXJ0c1sxXS5zbGljZShkZWNpbWFsUGxhY2VzKVxuXHRcdCwgcG9zdFJvdW5kID0gTWF0aC5yb3VuZChwb3N0L01hdGgucG93KDEwLCAocG9zdC5sZW5ndGgpKSlcblx0XHQsIHBsYWNlcyA9IE1hdGgucG93KDEwLCAoZGVjaW1hbFBsYWNlcyB8fCAwKSk7XG5cblx0cmV0dXJuIChwYXJ0c1sxXS5sZW5ndGggPD0gZGVjaW1hbFBsYWNlcykgPyB2YWx1ZSA6ICgrcHJlICsgcG9zdFJvdW5kKSAvIHBsYWNlcztcbn07XG4iLCIvKlxuICogUmVnaXN0ZXIgZm9yIERPTSByZWFkeSBldmVudHNcbiAqL1xudmFyIHdpbiA9IHdpbmRvd1xuXHQsIGRvYyA9IHdpbi5kb2N1bWVudFxuXHQsIHNjcm9sbEhhY2tUaW1lciA9IG51bGxcblx0LCBpc1JlYWR5ID0gZmFsc2Vcblx0LCBpbml0aWFsaXplZCA9IGZhbHNlXG5cdCwgcmVhZHlDYWxsYmFja3MgPSBbXTtcblxuZnVuY3Rpb24gd2hlblJlYWR5KCkge1xuXHRpZiAoIWlzUmVhZHkpIHtcblx0XHRpc1JlYWR5ID0gdHJ1ZTtcblx0XHQvLyBFeGVjdXRlIGNhbGxiYWNrc1xuXHRcdGZvciAodmFyIGkgPSAwLCBuID0gcmVhZHlDYWxsYmFja3MubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRyZWFkeUNhbGxiYWNrc1tpXSgpO1xuXHRcdH1cblx0XHRyZWFkeUNhbGxiYWNrcyA9IG51bGw7XG5cdFx0aWYgKHNjcm9sbEhhY2tUaW1lcikge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHNjcm9sbEhhY2tUaW1lcik7XG5cdFx0fVxuXHRcdC8vIFJlbW92ZSBsaXN0ZW5lcnNcblx0XHRpZiAoZG9jLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgd2hlblJlYWR5LCBmYWxzZSk7XG5cdFx0XHR3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHdoZW5SZWFkeSwgZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2MuZGV0YWNoRXZlbnQoJ29ucmVhZHlzdGF0ZWNoYW5nZScsIHdoZW5SZWFkeSk7XG5cdFx0XHR3aW4uZGV0YWNoRXZlbnQoJ29ubG9hZCcsIHdoZW5SZWFkeSk7XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBJRSBzY3JvbGwgaGFja1xuZnVuY3Rpb24gc2Nyb2xsQ2hlY2soKSB7XG5cdGlmIChpc1JlYWR5KSByZXR1cm47XG5cdHRyeSB7XG5cdFx0ZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCgnbGVmdCcpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHNjcm9sbEhhY2tUaW1lciA9IHNldFRpbWVvdXQoc2Nyb2xsQ2hlY2ssIDExKTtcblx0XHRyZXR1cm47XG5cdH1cblx0d2hlblJlYWR5KCk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIERPTSBpcyByZWFkeVxuICogcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdHJlYWR5Q2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXG5cdC8vIEluaXRpYWxpemVcblx0aWYgKCFpbml0aWFsaXplZCkge1xuXHRcdC8vIEFscmVhZHkgbG9hZGVkXG5cdFx0aWYgKGRvYy5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvYy5yZWFkeVN0YXRlID09PSAnbG9hZGVkJykge1xuXHRcdFx0d2hlblJlYWR5KCk7XG5cdFx0Ly8gSW5pdGlhbGl6ZSB3YXRjaGVyc1xuXHRcdH0gZWxzZSBpZiAoZG9jLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgd2hlblJlYWR5LCBmYWxzZSk7XG5cdFx0XHQvLyBKdXN0IGluIGNhc2UgcHJldmlvaXVzIGRvZXNuJ3QgZmlyZVxuXHRcdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB3aGVuUmVhZHksIGZhbHNlKTtcblx0XHQvLyBJRSBmYWxsYmFja3Ncblx0XHR9IGVsc2UgaWYgKGRvYy5hdHRhY2hFdmVudCkge1xuXHRcdFx0ZG9jLmF0dGFjaEV2ZW50KCdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB3aGVuUmVhZHkpO1xuXHRcdFx0d2luLmF0dGFjaEV2ZW50KCdvbmxvYWQnLCB3aGVuUmVhZHkpO1xuXHRcdFx0Ly8gVGVzdCBpZiBhbHJlYWR5IGxvYWRlZFxuXHRcdFx0aWYgKGRvYy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpIHtcblx0XHRcdFx0c2Nyb2xsQ2hlY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHR9XG59O1xuIiwidmFyIHdpbiA9IHdpbmRvd1xuXHQsIGRvYyA9IHdpbi5kb2N1bWVudFxuXHQsIG5hdiA9IG5hdmlnYXRvcjtcblxuLyoqXG4gKiBEb2VzIHBsYXRmb3JtIHN1cHBvcnQgbmF0aXZlIHZpZGVvXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5oYXNWaWRlbyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgaGFzVmlkZW8gPSAhIWRvYy5jcmVhdGVFbGVtZW50KCd2aWRlbycpLmNhblBsYXlUeXBlO1xuXHRleHBvcnRzLmhhc1ZpZGVvID0gZnVuY3Rpb24oKSB7IHJldHVybiBoYXNWaWRlbzsgfTtcblx0cmV0dXJuIGhhc1ZpZGVvO1xufTtcblxuLyoqXG4gKiBEb2VzIHBsYXRmb3JtIHN1cHBvcnQgRmxhc2ggcGx1Z2luXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5oYXNGbGFzaCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZGVzYywgdGVzdE9iamVjdCwgdmVyc2lvbjtcblx0aWYgKG5hdi5wbHVnaW5zICE9IG51bGwgJiYgbmF2LnBsdWdpbnNbJ1Nob2Nrd2F2ZSBGbGFzaCddID09PSAnb2JqZWN0Jykge1xuXHRcdGRlc2MgPSBuYXYucGx1Z2luc1snU2hvY2t3YXZlIEZsYXNoJ10uZGVzY3JpcHRpb247XG5cdFx0aWYgKGRlc2MgJiYgISgobmF2Lm1pbWVUeXBlcyAhPSBudWxsICYmIG5hdi5taW1lVHlwZXNbJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10pICYmICFuYXYubWltZVR5cGVzWydhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddLmVuYWJsZWRQbHVnaW4pKSB7XG5cdFx0XHR2ZXJzaW9uID0gcGFyc2VJbnQoZGVzYy5tYXRjaCgvXi4qXFxzKyhbXlxcc10rKVxcLlteXFxzXStcXHMrW15cXHNdKyQvKVsxXSwgMTApO1xuXHRcdH1cblx0fSBlbHNlIGlmICh3aW4uQWN0aXZlWE9iamVjdCAhPSBudWxsKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHRlc3RPYmplY3QgPSBuZXcgQWN0aXZlWE9iamVjdCgnU2hvY2t3YXZlRmxhc2guU2hvY2t3YXZlRmxhc2gnKTtcblx0XHRcdGlmICh0ZXN0T2JqZWN0KSB7XG5cdFx0XHRcdHZlcnNpb24gPSBwYXJzZUludCh0ZXN0T2JqZWN0LkdldFZhcmlhYmxlKCckdmVyc2lvbicpLm1hdGNoKC9eW15cXHNdK1xccyhcXGQrKS8pWzFdLCAxMCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkgeyB9XG5cdH1cblxuXHRleHBvcnRzLmZsYXNoVmVyc2lvbiA9IHZlcnNpb247XG5cdGV4cG9ydHMuaGFzRmxhc2ggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGV4cG9ydHMuZmxhc2hWZXJzaW9uID4gMDsgfTtcblx0cmV0dXJuIHZlcnNpb24gPiAwO1xufTtcblxuLyoqXG4gKiBGbGFzaCBwbHVnaW4gdmVyc2lvbiBudW1iZXJcbiAqL1xuZXhwb3J0cy5mbGFzaFZlcnNpb24gPSAwO1xuXG4vKipcbiAqIERvZXMgcGxhdGZvcm0gc3VwcG9ydCBuYXRpdmUgZnVsbCBzY3JlZW5cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmhhc05hdGl2ZUZ1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHtcblx0dmFyIGhhc05hdGl2ZUZ1bGxzY3JlZW4gPSB0eXBlb2YgZG9jLmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJykud2Via2l0RW50ZXJGdWxsU2NyZWVuID09PSAnZnVuY3Rpb24nO1xuXHRleHBvcnRzLmhhc05hdGl2ZUZ1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhhc05hdGl2ZUZ1bGxzY3JlZW47IH07XG5cdHJldHVybiBoYXNOYXRpdmVGdWxsc2NyZWVuO1xufTtcblxuLyoqXG4gKiBEb2VzIHBsYXRmb3JtIHN1cHBvcnQgQ2FudmFzIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmhhc0NhbnZhcyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZWxlbSA9IGRvYy5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuXHRcdCwgaGFzQ2FudmFzID0gISEoZWxlbS5nZXRDb250ZXh0ICYmIGVsZW0uZ2V0Q29udGV4dCgnMmQnKSk7XG5cdGV4cG9ydHMuaGFzQ2FudmFzID0gZnVuY3Rpb24oKSB7IHJldHVybiBoYXNDYW52YXM7IH07XG5cdHJldHVybiBoYXNDYW52YXM7XG59O1xuXG4vKipcbiAqIERvZXMgcGxhdGZvcm0gc3VwcG9ydCBUb3VjaCBldmVudHNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmhhc1RvdWNoID0gZnVuY3Rpb24oKSB7XG5cdHZhciBoYXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbiB8fCAod2luLkRvY3VtZW50VG91Y2ggJiYgZG9jIGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCk7XG5cdGV4cG9ydHMuaGFzVG91Y2ggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhhc1RvdWNoOyB9O1xuXHRyZXR1cm4gaGFzVG91Y2g7XG59O1xuXG4vKipcbiAqIERvZXMgcGxhdGZvcm0gc3VwcG9ydCBpbmxpbmUgc3ZnXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5oYXNTVkcgPSBmdW5jdGlvbigpe1xuXHR2YXIgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0ZXN0LmlubmVySFRNTCA9ICc8c3ZnLz4nO1xuXHR2YXIgaGFzU1ZHID0gKHRlc3QuZmlyc3RDaGlsZCAmJiB0ZXN0LmZpcnN0Q2hpbGQubmFtZXNwYWNlVVJJKSA9PSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXHRleHBvcnRzLmhhc1NWRyA9IGZ1bmN0aW9uKCl7IHJldHVybiBoYXNTVkc7IH07XG5cdHJldHVybiBoYXNTVkc7XG59XG4iLCJ2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4vKipcbiAqIElzIEludGVybmV0IEV4cGxvcmVyXG4gKi9cbmV4cG9ydHMuaXNJRSA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuICErXCJcXHYxXCI7XG59KSgpO1xuXG4vKipcbiAqIElzIGlQYWRcbiAqL1xuZXhwb3J0cy5pc0lQYWQgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiAvaXBhZC9pLnRlc3QodWEpO1xufSkoKTtcblxuLyoqXG4gKiBJcyBpUGhvbmVcbiAqL1xuZXhwb3J0cy5pc0lQaG9uZSA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIC9pcGhvbmUvaS50ZXN0KHVhKTtcbn0pKCk7XG5cbi8qKlxuICogSXMgaU9TXG4gKi9cbmV4cG9ydHMuaXNJT1MgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiBleHBvcnRzLmlzSVBob25lIHx8IGV4cG9ydHMuaXNJUGFkIHx8IGZhbHNlO1xufSkoKTtcblxuLyoqXG4gKiBJcyBpUGhvbmUgTW9iaWxlU2FmYXJpXG4gKi9cbmV4cG9ydHMuaXNNb2JpbGVTYWZhcmkgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiBleHBvcnRzLmlzSVBob25lICYmIC9zYWZhcmkvaS50ZXN0KHVhKTtcbn0pKCk7XG5cbi8qKlxuICogaU9TIHZlcnNpb24gbnVtYmVyXG4gKi9cbmV4cG9ydHMuaU9TVmVyc2lvbiA9IChmdW5jdGlvbigpIHtcblx0dmFyIG1hdGNoO1xuXHRtYXRjaCA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL29zIChcXGQrKV8vaSk7XG5cdGlmIChtYXRjaCAhPSBudWxsID8gbWF0Y2hbMV0gOiB2b2lkIDApIHtcblx0XHRyZXR1cm4gbWF0Y2hbMV07XG5cdH1cbn0pKCk7XG5cbi8qKlxuICogSXMgQW5kcm9pZFxuICovXG5leHBvcnRzLmlzQW5kcm9pZCA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIC9hbmRyb2lkL2kudGVzdCh1YSk7XG59KSgpO1xuXG4vKipcbiAqIEFuZHJvaWQgdmVyc2lvbiBudW1iZXJcbiAqL1xuZXhwb3J0cy5hbmRyb2lkVmVyc2lvbiA9IChmdW5jdGlvbigpIHtcblx0dmFyIG1hdGNoO1xuXHRtYXRjaCA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2FuZHJvaWQgKFxcZCspXFwuL2kpO1xuXHRpZiAobWF0Y2ggIT0gbnVsbCA/IG1hdGNoWzFdIDogdm9pZCAwKSB7XG5cdFx0cmV0dXJuIG1hdGNoWzFdO1xuXHR9XG59KSgpO1xuXG4vKipcbiAqIElzIG1vYmlsZVxuICovXG5leHBvcnRzLmlzTW9iaWxlID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gL21vYmlsZS9pLnRlc3QodWEpICYmICFleHBvcnRzLmlzSVBhZDtcbn0pKCk7XG4iLCIvKipcbiAqIFJldHJpZXZlIHRoZSB2aWV3cG9ydCB3aWR0aFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZXhwb3J0cy5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgdmlld3BvcnQgaGVpZ2h0XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5leHBvcnRzLmdldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbn07XG4iLCIvLyBCYXNlZCBvbiB0aGUgaW5mYW1vdXMgUGVubmVyIGVhc2luZyBlcXVhdGlvbnMsIHdpdGggY3NzIGVxdWl2YWxlbnRzIHdoZXJlIHBvc3NpYmxlXG5leHBvcnRzLmxpbmVhciA9IHJlcXVpcmUoJy4vbGliL2xpbmVhcicpO1xuZXhwb3J0cy5iYWNrID0gcmVxdWlyZSgnLi9saWIvYmFjaycpO1xuZXhwb3J0cy5ib3VuY2UgPSByZXF1aXJlKCcuL2xpYi9ib3VuY2UnKTtcbmV4cG9ydHMuY2lyYyA9IHJlcXVpcmUoJy4vbGliL2NpcmMnKTtcbmV4cG9ydHMuY3ViaWMgPSByZXF1aXJlKCcuL2xpYi9jdWJpYycpO1xuZXhwb3J0cy5lbGFzdGljID0gcmVxdWlyZSgnLi9saWIvZWxhc3RpYycpO1xuZXhwb3J0cy5leHBvID0gcmVxdWlyZSgnLi9saWIvZXhwbycpO1xuZXhwb3J0cy5xdWFkID0gcmVxdWlyZSgnLi9saWIvcXVhZCcpO1xuZXhwb3J0cy5xdWFydCA9IHJlcXVpcmUoJy4vbGliL3F1YXJ0Jyk7XG5leHBvcnRzLnF1aW50ID0gcmVxdWlyZSgnLi9saWIvcXVpbnQnKTtcbmV4cG9ydHMuc2luZSA9IHJlcXVpcmUoJy4vbGliL3NpbmUnKTsiLCIvLyB0OiBjdXJyZW50IHRpbWUsIGI6IGJlZ2lubmluZyB2YWx1ZSwgYzogY2hhbmdlIGluIHZhbHVlLCBkOiBkdXJhdGlvblxuXG5leHBvcnRzLmluQmFjayA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmIChzICE9IG51bGwpIHtcblx0XHRcdFx0cyA9IDEuNzAxNTg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KSdcbn07XG5cbmV4cG9ydHMub3V0QmFjayA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmIChzICE9IG51bGwpIHtcblx0XHRcdFx0cyA9IDEuNzAxNTg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxKSArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMjc1KSdcbn07XG5cbmV4cG9ydHMuaW5PdXRCYWNrID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0aWYgKHMgIT0gbnVsbCkge1xuXHRcdFx0XHRzID0gMS43MDE1ODtcblx0XHRcdH1cblx0XHRcdGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBjIC8gMiAqICh0ICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0IC0gcykpICsgYjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjIC8gMiAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9IDEuNTI1KSArIDEpICogdCArIHMpICsgMikgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjY4MCwgLTAuNTUwLCAwLjI2NSwgMS41NTApJ1xufTtcbiIsIi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnaW5uaW5nIHZhbHVlLCBjOiBjaGFuZ2UgaW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5cbmV4cG9ydHMuaW5Cb3VuY2UgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gYyAtIGV4cG9ydHMub3V0Qm91bmNlKHgsIGQgLSB0LCAwLCBjLCBkKSArIGI7XG5cdFx0fVxufTtcblxuZXhwb3J0cy5vdXRCb3VuY2UgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRpZiAoKHQgLz0gZCkgPCAoMSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiBjICogKDcuNTYyNSAqIHQgKiB0KSArIGI7XG5cdFx0XHR9IGVsc2UgaWYgKHQgPCAoMiAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiBjICogKDcuNTYyNSAqICh0IC09IDEuNSAvIDIuNzUpICogdCArIDAuNzUpICsgYjtcblx0XHRcdH0gZWxzZSBpZiAodCA8ICgyLjUgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAyLjI1IC8gMi43NSkgKiB0ICsgMC45Mzc1KSArIGI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAyLjYyNSAvIDIuNzUpICogdCArIDAuOTg0Mzc1KSArIGI7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuZXhwb3J0cy5pbk91dEJvdW5jZSA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmICh0IDwgZCAvIDIpIHtcblx0XHRcdFx0cmV0dXJuIGV4cG9ydHMuaW5Cb3VuY2UoeCwgdCAqIDIsIDAsIGMsIGQpICogMC41ICsgYjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBleHBvcnRzLm91dEJvdW5jZSh4LCB0ICogMiAtIGQsIDAsIGMsIGQpICogMC41ICsgYyAqIDAuNSArIGI7XG5cdFx0fVxufTtcbiIsIi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnaW5uaW5nIHZhbHVlLCBjOiBjaGFuZ2UgaW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5cbmV4cG9ydHMuaW5DaXJjID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIC1jICogKE1hdGguc3FydCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC42MDAsIDAuMDQwLCAwLjk4MCwgMC4zMzUpJ1xufTtcblxuZXhwb3J0cy5vdXRDaXJjID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIwLCAwLjE2NSwgMS4wMDApJ1xufTtcblxuZXhwb3J0cy5pbk91dENpcmMgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLWMgLyAyICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGMgLyAyICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1MCwgMC44NjApJ1xufTtcbiIsIi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnaW5uaW5nIHZhbHVlLCBjOiBjaGFuZ2UgaW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5cbmV4cG9ydHMuaW5FbGFzdGljID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0dmFyIGEsIHAsIHM7XG5cdFx0XHRpZiAodCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gYjtcblx0XHRcdH1cblx0XHRcdGlmICgodCAvPSBkKSA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gYiArIGM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXApIHtcblx0XHRcdFx0cCA9IGQgKiAwLjM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7XG5cdFx0XHRcdGEgPSBjO1xuXHRcdFx0XHRzID0gcCAvIDQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIC0oYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICsgYjtcblx0XHR9XG59O1xuXG5leHBvcnRzLm91dEVsYXN0aWMgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHR2YXIgYSwgcCwgcztcblx0XHRcdGlmICh0ID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBiO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCh0IC89IGQpID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiBiICsgYztcblx0XHRcdH1cblx0XHRcdGlmICghcCkge1xuXHRcdFx0XHRwID0gZCAqIDAuMztcblx0XHRcdH1cblx0XHRcdGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcblx0XHRcdFx0YSA9IGM7XG5cdFx0XHRcdHMgPSBwIC8gNDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbihjIC8gYSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyBjICsgYjtcblx0XHR9XG59O1xuXG5leHBvcnRzLmluT3V0RWxhc3RpYyA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHZhciBhLCBwLCBzO1xuXHRcdFx0aWYgKHQgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIGI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKHQgLz0gZCAvIDIpID09PSAyKSB7XG5cdFx0XHRcdHJldHVybiBiICsgYztcblx0XHRcdH1cblx0XHRcdGlmICghcCkge1xuXHRcdFx0XHRwID0gZCAqICgwLjMgKiAxLjUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xuXHRcdFx0XHRhID0gYztcblx0XHRcdFx0cyA9IHAgLyA0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcblx0XHRcdH1cblx0XHRcdGlmICh0IDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLTAuNSAqIChhICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIDAuNSArIGMgKyBiO1xuXHRcdH1cbn07XG4iLCIvLyB0OiBjdXJyZW50IHRpbWUsIGI6IGJlZ2lubmluZyB2YWx1ZSwgYzogY2hhbmdlIGluIHZhbHVlLCBkOiBkdXJhdGlvblxuXG5leHBvcnRzLmluRXhwbyA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmICh0ID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGMgKiBNYXRoLnBvdygyLCAxMCAqICh0IC8gZCAtIDEpKSArIGI7XG5cdFx0XHR9XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuOTUwLCAwLjA1MCwgMC43OTUsIDAuMDM1KSdcbn07XG5cbmV4cG9ydHMub3V0RXhwbyA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdGlmICh0ID09PSBkKSB7XG5cdFx0XHRcdHJldHVybiBiICsgYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjICogKC1NYXRoLnBvdygyLCAtMTAgKiB0IC8gZCkgKyAxKSArIGI7XG5cdFx0XHR9XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuMTkwLCAxLjAwMCwgMC4yMjAsIDEuMDAwKSdcbn07XG5cbmV4cG9ydHMuaW5PdXRFeHBvID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0aWYgKHQgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIGI7XG5cdFx0XHR9XG5cdFx0XHRpZiAodCA9PT0gZCkge1xuXHRcdFx0XHRyZXR1cm4gYiArIGM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gYyAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICsgYjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjIC8gMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMS4wMDAsIDAuMDAwLCAwLjAwMCwgMS4wMDApJ1xufTtcbiIsIi8vIHQ6IGN1cnJlbnQgdGltZSwgYjogYmVnaW5uaW5nIHZhbHVlLCBjOiBjaGFuZ2UgaW4gdmFsdWUsIGQ6IGR1cmF0aW9uXG5cbmV4cG9ydHMubGluZWFyID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIGMgKiB0IC8gZCArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjI1MCwgMC43NTAsIDAuNzUwKSdcbn0iLCIvLyB0OiBjdXJyZW50IHRpbWUsIGI6IGJlZ2lubmluZyB2YWx1ZSwgYzogY2hhbmdlIGluIHZhbHVlLCBkOiBkdXJhdGlvblxuXG5leHBvcnRzLmluUXVhZCA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApJ1xufTtcblxuZXhwb3J0cy5vdXRRdWFkID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIC1jICogKHQgLz0gZCkgKiAodCAtIDIpICsgYjtcblx0XHR9LFxuXHRjc3M6ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJ1xufTtcblxuZXhwb3J0cy5pbk91dFF1YWQgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gLWMgLyAyICogKCgtLXQpICogKHQgLSAyKSAtIDEpICsgYjtcblx0XHR9XG59O1xuIiwiLy8gdDogY3VycmVudCB0aW1lLCBiOiBiZWdpbm5pbmcgdmFsdWUsIGM6IGNoYW5nZSBpbiB2YWx1ZSwgZDogZHVyYXRpb25cblxuZXhwb3J0cy5pblF1YXJ0ID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzMCwgMC42ODUsIDAuMjIwKSdcbn07XG5cbmV4cG9ydHMub3V0UXVhcnQgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCknXG59O1xuXG5leHBvcnRzLmluT3V0UXVhcnQgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0XHRcdH1cblx0XHRcdHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuNzcwLCAwLjAwMCwgMC4xNzUsIDEuMDAwKSdcbn07XG4iLCIvLyB0OiBjdXJyZW50IHRpbWUsIGI6IGJlZ2lubmluZyB2YWx1ZSwgYzogY2hhbmdlIGluIHZhbHVlLCBkOiBkdXJhdGlvblxuXG5leHBvcnRzLmluUXVpbnQgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKSdcbn07XG5cbmV4cG9ydHMub3V0UXVpbnQgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgKiB0ICsgMSkgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjIzMCwgMS4wMDAsIDAuMzIwLCAxLjAwMCknXG59O1xuXG5leHBvcnRzLmluT3V0UXVpbnQgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgKiB0ICsgMikgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjg2MCwgMC4wMDAsIDAuMDcwLCAxLjAwMCknXG59O1xuIiwiLy8gdDogY3VycmVudCB0aW1lLCBiOiBiZWdpbm5pbmcgdmFsdWUsIGM6IGNoYW5nZSBpbiB2YWx1ZSwgZDogZHVyYXRpb25cblxuZXhwb3J0cy5pblNpbmUgPSB7XG5cdGpzOiBmdW5jdGlvbih0LCBiLCBjLCBkKSB7XG5cdFx0XHRyZXR1cm4gLWMgKiBNYXRoLmNvcyh0IC8gZCAqIChNYXRoLlBJIC8gMikpICsgYyArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSdcbn07XG5cbmV4cG9ydHMub3V0U2luZSA9IHtcblx0anM6IGZ1bmN0aW9uKHQsIGIsIGMsIGQpIHtcblx0XHRcdHJldHVybiBjICogTWF0aC5zaW4odCAvIGQgKiAoTWF0aC5QSSAvIDIpKSArIGI7XG5cdFx0fSxcblx0Y3NzOiAnY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSdcbn07XG5cbmV4cG9ydHMuaW5PdXRTaW5lID0ge1xuXHRqczogZnVuY3Rpb24odCwgYiwgYywgZCkge1xuXHRcdFx0cmV0dXJuIC1jIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCAvIGQpIC0gMSkgKyBiO1xuXHRcdH0sXG5cdGNzczogJ2N1YmljLWJlemllcigwLjQ0NSwgMC4wNTAsIDAuNTUwLCAwLjk1MCknXG59O1xuIiwiLyoqXG4gKiBTZXRzIGRlYnVnIGVudmlyb25tZW50IGFuZCBlbmFibGVzIGNvbnNvbGUubG9nIHdoZW4gdHJ1ZVxuICovXG52YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXHQsIHRpbWVzdGFtcCA9IHRydWVcblx0LCBsb2NhdGlvbnMgPSAnXmh0dHAofHMpOlxcL1xcL2RldnxeaHR0cCh8cyk6XFwvXFwvbG9jYWxob3N0JztcblxuLyoqXG4gKiBDb25maWd1cmUgbG9nIGJlaGF2aW91clxuICogQWRkIHdoaXRlbGlzdCBsb2NhdGlvbnMsIGVuYWJsZS9kaXNhYmxlIHRpbWVzdGFtcFxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICovXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbihjb25maWcpIHtcblx0aWYgKGNvbmZpZyAhPSBudWxsKSB7XG5cdFx0dGltZXN0YW1wID0gY29uZmlnLnRpbWVzdGFtcCB8fCB0aW1lc3RhbXA7XG5cdFx0bG9jYXRpb25zID0gY29uZmlnLmxvY2F0aW9ucyAmJiBuZXcgUmVnRXhwKGxvY2F0aW9ucyArICd8JyArIGNvbmZpZy5sb2NhdGlvbnMuam9pbignfCcpLCAnaScpO1xuXHRcdHdpbmRvdy5kZWJ1ZyA9ICEhKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYubWF0Y2gobG9jYXRpb25zKSkgfHwgISEoZG9jdW1lbnQubG9jYXRpb24uaGFzaC5tYXRjaCgvZGVidWcvKSk7XG5cdFx0d2luZG93LmxvZyA9IHdpbmRvdy5kZWJ1ZyA/IGV4cG9ydHMubG9nIDogKGZ1bmN0aW9uKCkge30pO1xuXHR9XG5cdHJldHVybiBpbml0aWFsaXplZCA9IHRydWU7XG59O1xuXG4vKipcbiAqIExvZyBtZXNzYWdlcyB0byB0aGUgY29uc29sZVxuICogQHBhcmFtIHsqfSBhcmd1bWVudHMuLi5cbiAqL1xuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcblx0dmFyIGFyZ3MgPSAoMSA8PSBhcmd1bWVudHMubGVuZ3RoKSA/IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcblx0aWYgKCFpbml0aWFsaXplZCkge1xuXHRcdGV4cG9ydHMuaW5pdCgpO1xuXHR9XG5cdGlmICh3aW5kb3cuZGVidWcpIHtcblx0XHR0cnkge1xuXHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0dmFyIHQgPSB0aW1lc3RhbXAgPyBcIlwiICsgKGQuZ2V0SG91cnMoKSkgKyBcIjpcIiArIChkLmdldE1pbnV0ZXMoKSkgKyBcIjpcIiArIChkLmdldFNlY29uZHMoKSkgKyBcIjpcIiArIChkLmdldE1pbGxpc2Vjb25kcygpKSA6ICcnO1xuXHRcdFx0aWYgKHdpbmRvdy5jb25zb2xlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHQsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7IH1cblx0fVxufTtcbiIsIi8qKlxuICogQWxsb3cgJ0NoaWxkJyBDb25zdHJ1Y3RvciB0byBpbmhlcml0IGZyb20gJ1BhcmVudCcsIGluY2x1ZGluZyAnb3duJyBwcm9wZXJ0aWVzXG4gKiAtLWZyb20gQ29mZmVlU2NyaXB0IGJvaWxlcnBsYXRlLS1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IENoaWxkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBQYXJlbnRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0cy5pbmhlcml0ID0gZnVuY3Rpb24gKENoaWxkLCBQYXJlbnQpIHtcblx0Ly8gQ29weSAnb3duJyBwcm9wZXJ0aWVzIGZyb20gUGFyZW50IHRvIENoaWxkXG5cdGZvciAodmFyIGtleSBpbiBQYXJlbnQpIHtcblx0XHRpZiAoUGFyZW50Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdENoaWxkW2tleV0gPSBQYXJlbnRba2V5XTtcblx0XHR9XG5cdH1cblx0Ly8gUHJveHkgY29uc3RydWN0b3IgZnVuY3Rpb25cblx0ZnVuY3Rpb24gQ3RvcigpIHtcblx0XHQvLyBTZXQgY29uc3RydWN0b3IgcHJvcGVydHkgdG8gcG9pbnQgdG8gQ2hpbGRcblx0XHR0aGlzLmNvbnN0cnVjdG9yID0gQ2hpbGQ7XG5cdFx0Ly8gU3RvcmUgcmVmZXJlbmNlIHRvIENoaWxkJ3MgJ3N1cGVyJ1xuXHRcdHRoaXMuc3VwZXIgPSBQYXJlbnQucHJvdG90eXBlO1xuXHR9XG5cdC8vIFByb3h5IGluaGVyaXRzIGZyb20gUGFyZW50J3MgcHJvdG90eXBlIChhdm9pZCBQYXJlbnQgaW5zdGFuY2UpXG5cdEN0b3IucHJvdG90eXBlID0gUGFyZW50LnByb3RvdHlwZTtcblx0Ly8gQ2hpbGQgaW5oZXJpdHMgZnJvbSBwcm94eSAocmVxdWlyZXMgYW4gb2JqZWN0LCBub3QgZnVuY3Rpb24pXG5cdENoaWxkLnByb3RvdHlwZSA9IG5ldyBDdG9yKCk7XG5cdC8vIFN0b3JlIHJlZmVyZW5jZSB0byBDaGlsZCdzICdzdXBlcidcblx0Q2hpbGQuc3VwZXIgPSBQYXJlbnQucHJvdG90eXBlO1xuXHQvLyBSZXR1cm4gZXh0ZW5kZWQgY29uc3RydWN0b3IgZnVuY3Rpb25cblx0cmV0dXJuIENoaWxkO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgJ0NoaWxkJyBDb25zdHJ1Y3RvciBpbmhlcml0cyBmcm9tICdQYXJlbnQnXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDaGlsZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gUGFyZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pbmhlcml0c0Zyb20gPSBmdW5jdGlvbiAoQ2hpbGQsIFBhcmVudCkge1xuXHRpZiAodHlwZW9mIENoaWxkID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFBhcmVudCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKENoaWxkID09PSBQYXJlbnQpIHJldHVybiB0cnVlO1xuXHRcdHZhciBkZXNjZW5kYW50ID0gQ2hpbGQuc3VwZXI7XG5cdFx0d2hpbGUgKGRlc2NlbmRhbnQpIHtcblx0XHRcdGlmIChkZXNjZW5kYW50LmNvbnN0cnVjdG9yKSB7XG5cdFx0XHRcdGlmIChkZXNjZW5kYW50LmNvbnN0cnVjdG9yID09PSBQYXJlbnQpIHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZGVzY2VuZGFudCA9IGRlc2NlbmRhbnQuY29uc3RydWN0b3Iuc3VwZXI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQmluZCBhIGZ1bmN0aW9uICdmbicgdG8gYSBzcGVjaWZpYyAnY29udGV4dCdcbiAqIC0tZnJvbSBDb2ZmZWVTY3JpcHQgYm9pbGVycGxhdGUtLVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKi9cbmV4cG9ydHMuYmluZCA9IGZ1bmN0aW9uIChmbiwgY29udGV4dCkge1xuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG5cdH07XG59OyIsInZhciBjYXBhYmlsaXRpZXMgPSByZXF1aXJlKCdlbnYuY2FwYWJpbGl0aWVzJyk7XG5cbmV4cG9ydHMuTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuZXhwb3J0cy5MSU5LID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuXG4vKipcbiAqIEluamVjdCBzdmcgc3ltYm9sIGRlZmluaXRpb25zIGludG8gdGhlIERPTVxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmc1xuICovXG5leHBvcnRzLmluamVjdERlZnMgPSBmdW5jdGlvbiAoaWQsIGRlZnMpIHtcblx0aWYgKGNhcGFiaWxpdGllcy5oYXNTVkcoKSAmJiAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRcdCwgc3ZnID0gJzxzdmcgaWQ9XCInXG5cdFx0XHRcdFx0KyBpZFxuXHRcdFx0XHRcdCsgJ1wiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPidcblx0XHRcdFx0XHQrIGRlZnNcblx0XHRcdFx0XHQrICc8L3N2Zz4nO1xuXG5cdFx0ZWwuaW5uZXJIVE1MID0gc3ZnO1xuXHRcdGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLmZpcnN0Q2hpbGQsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG5cdH1cbn07XG5cbi8qKlxuICogQXBwZW5kIHN2ZyBlbGVtZW50IG9mICd0eXBlJyB0byAncGFyZW50Jywgc2V0dGluZyAnYXR0cnMnXG4gKiBAcGFyYW1hIHtET01FbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbWEge1N0cmluZ30gdHlwZVxuICogQHBhcmFtYSB7T2JqZWN0fSBhdHRyc1xuICovXG5leHBvcnRzLmFwcGVuZENoaWxkID0gZnVuY3Rpb24gKHBhcmVudCwgdHlwZSwgYXR0cnMpIHtcblx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGV4cG9ydHMuTlMsIHR5cGUpO1xuXG5cdGlmIChhdHRycykge1xuXHRcdGZvciAodmFyIGF0dHIgaW4gYXR0cnMpIHtcblx0XHRcdGlmIChhdHRyLmluZGV4T2YoJ3hsaW5rOicpID09IDApIHtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlTlMoZXhwb3J0cy5MSU5LLCBhdHRyLnN1YnN0cmluZyg2KSwgYXR0cnNbYXR0cl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJzW2F0dHJdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xufTsiXX0=
