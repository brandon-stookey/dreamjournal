'use strict';

var db = require('./config.js');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
  },
  date: { type: Date, default: Date.now },   
  post: {
    type: [{
      postTitle: String,
      postDate: String,
      post: String,
      name: String,
      email: String,
      dreamType: String, //0 === noDream , 1 === Dream, 2 === Nightmare
      date: { type: Date, default: Date.now }
    }]
  },
});

var User = mongoose.model('User', userSchema);


module.exports.User = User;


// var userSchema = mongoose.Schema({
//   email: {
//     type: String,
//     unique: true,
//     required: true
//   },
//   name: {
//     type: String,
//   },
//   date: { type: Date, default: Date.now },   
//   post: {
//     type: [{
//       postTitle: String,
//       postDate: String,
//       post: String,
//       name: String,
//       email: String,
//       dreamType: String, //0 === noDream , 1 === Dream, 2 === Nightmare
//       date: { type: Date, default: Date.now },
//       comment: { 
//         type: [{
//         userEmail: String,
//         comment:String
//       }]},
//       like: { 
//         type: [{
//           userEmail: String,
//           like: Boolean
//       }]},
//     }],
//   friendList:{ 
//     type: [{
//       userEmail: String
//     }]},
//   }
// });




