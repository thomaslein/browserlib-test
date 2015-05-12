lib = require('browser.lib')
ready = lib.dom.ready
elem = lib.dom.element
ease = lib.util.ease
config =
  locations: [''],
  timestamp: true

init = =>
  @h = elem('h1')
  @h.animate().to({'translate':[200,500], 'background-color':'rgb(123,200,44)'}, 1000, ease.sine.inOutSine).onComplete(onAnimComplete)
  @h.on('click', onClick)
  lib.util.log.init(config)

  log(@h, @h.parent(), 'hey')

onClick = =>
  console.log('click')

onAnimComplete = =>
  #@h.setStyle('translate', [0, 0])
  @h.clearStyle()
  div = document.createElement('div')
  a = document.createElement('a')
  p = document.createElement('p')
  wrapper = elem(div)
  wrapper.wrap(@h)
  wrapper.appendChild(p)
  wrapper.appendChild(a)
  #wrapper.insertBefore(p, @h)
  log(wrapper.lastChild())
  log(wrapper.firstChild())
  log(wrapper.children())
  log(wrapper.parent())
  # wrapper.replaceChild(p, @h)
  #wrapper.removeChild(p)
  #wrapper.remove()
  #console.log(@h.siblings())


ready(init)