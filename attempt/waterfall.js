//one function needs the other to run

//for an example without async, see pete's https://github.com/pjz987/async-workshop/blob/master/src/async.js

// In this problem you will need to write a program that first reads the  
// contents of a file.  
 
// The path will be provided as the first command-line argument to your  
// program (i.e. process.argv[2]).  
 
// The file will contain a single URL. Using http.get, create a GET request  
// to this URL and console.log the response body.  
var fs = require('fs')
  , http = require('http')
  , async = require('async');

async.waterfall([
  function(done){
    fs.readFile(process.argv[2], function(err, data){
      if (err) return done(err);
      done(null, data)
    });
  },

  function(data, done){
    var body = '';
    http.get(data.toString().trimRight(), function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });

      res.on('end', () =>{ //no reason to have chunk
  
        done(null, body);
      });
    }).on('error', function(e){
      done(e);
    });
  }
], function done(err, result){
  if (err) return console.error(err);
  console.log(result);
});

//ask Evan 'return cb' vs 'cb'

//What does null mean?
//if there was no error, it will become null so that when you get to the next function, the err will show up as falsy

//next function checks for errors

//done is used in place of cb aboves

//res.on('data', function(chunk){
    //what you're listening for
    //comma after
    //everything after is what we're doing