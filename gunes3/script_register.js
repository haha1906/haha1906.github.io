$('form').validate({
        rules: {
            name: {
                minlength: 2,
                maxlength: 40,
                required: true,
            },
            lastname: {
                minlength: 3,
                maxlength: 15,
                required: true,
                alphanumeric: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 15
            },
            password_confirmation: {
                required: true,
                equalTo: '#password'
            },
            terms: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.input-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.input-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });


    

// Get the button that opens the modal
var modal = document.getElementById("pop-up");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("pop-up-close")[0];

// When the user clicks on the button, open the modal
function showPopUp() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}