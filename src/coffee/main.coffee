lib = require('browser.lib')
ready = lib.dom.ready
elem = lib.dom.element
ease = lib.util.ease

init = =>
  @h = elem('h1')
  @h.animate().to({'translate':[200,500], 'background-color':'rgb(123,200,44)'}, 2000, ease.sine.inOutSine).onComplete(onAnimComplete)


onAnimComplete = =>
  @h.setStyle('translate', [0, 0])
  @h.clearStyle()

ready(init)