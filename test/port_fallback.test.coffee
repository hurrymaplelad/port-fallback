portFallback = require '..'
http = require 'http'
assert = require 'assert'

describe 'port-fallback', ->
  beforeEach ->
    @defaultPort = 6000
    @server = http.createServer()

  afterEach (done) ->
    @server.close done

  describe 'when the default port is in use', ->
    beforeEach (done) ->
      @conflictingServer = http.createServer()
      @conflictingServer.listen @defaultPort, done

    afterEach (done) ->
      @conflictingServer.close done

    it 'listens on an available higher port', (done) ->
      portFallback.listen @server, {@defaultPort}, (err, port) =>
        assert.ifError err
        assert.ok port
        assert.ok port > @defaultPort
        done()
