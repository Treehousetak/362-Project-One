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

function vtest(info_input1){
  var email_valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

}

function valid() {
  var output = ('');

}
