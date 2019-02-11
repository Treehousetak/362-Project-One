var submit_form = document.querySelector('#signup');
var info_input1 = document.querySelector('#input');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  document.getElementById('signup').disabled =true;
})

info_input1.addEventListener('keyup', function(){
  var x = this.value.length;
  if (x > 5) {
      document.getElementById('signup').disabled = false;
    }
})

var input1;
var check;
submit_form.addEventListener('click', function() {
  input1 = document.getElementById('input').value;
  console.log(input1);
  var email_valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  check = email_valid.test(input1);
  console.log(input1);
  if(check === true) {
    document.getElementById('ltext').innerText = 'Email: Valid!';
    document.getElementById('ltext').style.color = 'green';
    }
    else {
    document.getElementById('ltext').innerText = 'Email: Invalid!';
    document.getElementById('ltext').style.color = 'red';
    }

})
