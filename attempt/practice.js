
var http = require('http')
var async = require('async')

async.each(process.argv.slice(2), function(item, done){
    http.get(item, function(res){
        res.on('data', function(chunk))
    });

    res.on('end', function(){
        done(null);
    })
})

// function(res) is called when the connection is established
// on('data') is called when there's a chunk of data (this almost certainly will be more than once)
// on('close') is called when the connection closes.

//source: http://forum.espruino.com/conversations/1364/

//The "argv" array contains everything given on the command line. The first item (argv[0]) will be the path to node itself, and the second item (argv[1]) will be the path to your script code.

// So a slice starting at 2 will discard both of those and return everything else that was typed on the command line. These are the arguments that will be used to construct the API query string.

//generators are functions that mitigate callback hell

// calling a generator does not execute body immediately; the iterator for that function returns

//for more on http.get requests in node js https://blog.bearer.sh/node-http-request/

//callbacks

//promises

//async

//do a get request

// allback. The second function in the waterfall  
//   accepts the body as a parameter and JSON.parse's it to get to the port  
//   property then it does another GET request.  

// const fs = require('fs')
// const path = require('path')

