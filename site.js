//Set variables needed
var submit_form = document.querySelector('#signup');
var info_input1 = document.querySelector('#email');
var info_input2 = document.querySelector('#username');
var input2;
var input1;
var check2;
var check1;

//Listen for DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  document.getElementById('signup').disabled =true;
})

//Check for username validation with the use of regular expressions
info_input2.addEventListener('keyup', function(){
  input2 = document.getElementById('username').value;
  var username_valid = /^[a-zA-Z0-9_-]{4,15}$/g;
  check1 = username_valid.test(input2);
  console.log(check1);
  //if username and email are valid then enable the submit button
  if (check2 === true & check1 === true) {
      document.getElementById('signup').disabled = false;
    }
    else {
      document.getElementById('signup').disabled = true;
    }
})

//Check for email validation with the use of regular expressions
info_input1.addEventListener('keyup', function(){
  input1 = document.getElementById('email').value;
  var email_valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/g;
  check2 = email_valid.test(input1);
  console.log(check2);
  //if username and email are valid then enable the submit button
  if (check2 === true & check1 === true) {
      document.getElementById('signup').disabled = false;
    }
    else {
      document.getElementById('signup').disabled = true;
    }
})
