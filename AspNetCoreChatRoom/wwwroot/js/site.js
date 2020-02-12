// Write your Javascript code.
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



  $(function(){
    $("#addClass").click(function () {
              $('#qnimate').addClass('popup-box-on');
                });
              
                $("#removeClass").click(function () {
              $('#qnimate').removeClass('popup-box-on');
                });
      })