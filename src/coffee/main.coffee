lib = require('browser.lib')
ready = lib.dom.ready
elem = lib.dom.element
ease = lib.util.ease

init = =>
  h = elem('h1')
  h.animate().to({translate:[200,800]}, 2000, ease.sine.inOutSine)

ready(init)