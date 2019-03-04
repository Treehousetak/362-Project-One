var submit_form = document.querySelector('#signup');
var info_input1 = document.querySelector('#email');
var info_input2 = document.querySelector('#username');
var input2;
var input1;
var check2;
var check1;

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  document.getElementById('signup').disabled =true;
})

info_input2.addEventListener('keyup', function(){
  input2 = document.getElementById('username').value;
  var username_valid = /^(?=.{4,15}$)[a-zA-Z0-9._]$/g;
  check1 = username_valid.test(input2);
  console.log(check1);
  if (check2 === true & check1 === true) {
      document.getElementById('signup').disabled = false;
    }
    else {
      document.getElementById('signup').disabled = true;
    }
})
info_input1.addEventListener('keyup', function(){
  input1 = document.getElementById('email').value;
  var email_valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/g;
  check2 = email_valid.test(input1);
  console.log(check2);
  if (check2 === true & check1 === true) {
      document.getElementById('signup').disabled = false;
    }
    else {
      document.getElementById('signup').disabled = true;
    }
})


//submit_form.addEventListener('click', function() {
  //input1 = document.getElementById('input').value;
  //console.log(input1);
  //check = email_valid.test(input1);
  //console.log(input1);
  //if(check === true) {
    //document.getElementById('ltext').innerText = 'Email: Valid!';
    //document.getElementById('ltext').style.color = 'green';
  //  }
    //else {
    //document.getElementById('ltext').innerText = 'Email: Invalid!';
    //document.getElementById('ltext').style.color = 'red';
    //}

//})
