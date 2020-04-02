require 'rack'

rack_app = Proc.new do |env|
    req = Rack::Request.new(env)
    # ['200', {'Content-Type' => 'text/html'}, ['hello world']]
    res = Rack::Response.new
    res["Content-type"] = "text/html"
    res.write("Hello World!")
    res.finish
end

Rack::Server.start({app: rack_app, Port: 3001})