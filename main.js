var app = require('app')
var BrowserWindow = require('browser-window')

require('crash-reporter').start()

var main_window = null

app.on('window-all-closed', function() {
  app.quit()
})

app.on('ready', function() {
  main_window = new BrowserWindow({ width: 500, height: 500 })
  main_window.loadUrl('file://' + __dirname + '/index.html')

  main_window.on('closed', function() {
    main_window = null
  })
})
