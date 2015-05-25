module.exports = {
  listen: function(server, options, done) {
    if (!done && typeof options == 'function') {
      done = options
      options = {}
    }
    if (!options) options = {}

    var defaultPort = options.defaultPort || 6000,
        port = defaultPort,
        logger = options.logger || console

    server
      .on('error', function(err) {
        if(err.code == 'EADDRINUSE') {
          oldPort = port
          port = defaultPort + Math.floor(Math.random() * 1000)
          logger.log(oldPort+" is busy, trying "+port)
          setImmediate(function() { server.listen(port) })
        } else {
          done(err)
        }
      })
      .listen(defaultPort, function(err) {
        done(err, port)
      })
  }
}
