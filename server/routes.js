var app = require('./server');

var path = require('path');
var public = path.resolve('public') + '/';
var helpers = require(path.resolve('server/helpers'));
var url = require('url');
var jwt = require('express-jwt');

///////Below is the ClientID and ClientSecret in express-jwt's configuration so that it can validate and sign JWTs for you
var jwtCheck = jwt({
  secret: new Buffer('H8Ak4IV8GXTBGOwT-syXyq0veCOixjcNgHkBxm_nOKaMeQoXG11u0DK6lHr-9N2I', 'base64'),
  audience: '1lZ3sYfpkqI5yJkeFXYscvLsR7dnG7q2'
});

//Below are paths that require Authorization////
app.use(['/api/public/client/app/shared/home.view.html', '/api/public/client/app/shared/write.new.post.view.html', '/api/public/client/app/shared/view.post.view.html', '/api/public/client/app/shared/profile.view.html', '/api/public/client/app/shared/graph.view.html'],  jwtCheck);



app.post('/create/post', function(req, res) {
	console.log('createPost on route.js!');

	console.log('routs.js req.body.userName ', req.body.name);
	console.log('routs.js req.body.userEmail ', req.body.email);
	console.log('routs.js req.body.postTitle ', req.body.postTitle);    	    	
	console.log('routs.js req.body.post ', req.body.post);

	var userName = req.body.name;
	var userEmail = req.body.email;    	
	var postTitle = req.body.postTitle;    	
	var post = req.body.post;    	

  helpers.createPostDB(userName, userEmail, postTitle, post, 
  function(data) {
    res.send(data);
  });
});











