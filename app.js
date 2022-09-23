window.addEventListener("DOMContentLoaded", function () {

  
    var form = document.getElementById("my-form");

    var status = document.getElementById("status");
  

  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Köszönjük a vissza jelzését.";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Valami probléma csuszhatott a gépezetbe.";
    }
  
 
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });