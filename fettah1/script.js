$('form').validate({
    rules: {
        name: {
            minlength: 3,
            maxlength: 50,
            required: true,
        },
        lastname: {
            minlength: 2,
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
            error.insertAfter(element.parent());
        }
    }
  });

// Info Pop Up
function showInfoPopUp() {
    var info = document.getElementById("infoPopUp");
    info.style.display = "block";
}
function closeInfoPopUp() {
    var info = document.getElementById("infoPopUp");
    info.style.display = "none";
    var reg = document.getElementById("registerPopUp");
    reg.style.display = "none";
}

// Register Pop Up
function showRegisterPopUp() {
    var reg = document.getElementById("registerPopUp");
    reg.style.display = "block";

   function myFunction(x) {
    if (document.getElementById("registerPopUp").style.display == "block") {
        function blink() {
            window.alert("sometext");
        }
     }
        if (x.matches) { // If media query matches
            var closeButtonA = document.getElementById("closeButtonA");
            closeButtonA.style.display = "block";
            var closeButtonB = document.getElementById("closeButtonB");
            closeButtonB.style.display = "none";
        } else {
            var closeButtonA = document.getElementById("closeButtonA");
            closeButtonA.style.display = "none";
            var closeButtonB = document.getElementById("closeButtonB");
            closeButtonB.style.display = "block";
        }
      }
      
      var x = window.matchMedia("(max-width: 767px)")
      myFunction(x) // Call listener function at run time
    
}
function closeRegisterPopUp() {
    var info = document.getElementById("infoPopUp");
    info.style.display = "none";
}



// Pending Pop Up
function showPendingPopUp() {
    var info = document.getElementById("pending-pop-up");
    info.style.display = "block";
}
function closePendingPopUp() {
    var info = document.getElementById("pending-pop-up");
    info.style.display = "none";
}


// Pending Pop Up
function showTermsPopUp() {
    var info = document.getElementById("terms-pop-up");
    info.style.display = "block";
}
function closeTermsPopUp() {
    var info = document.getElementById("terms-pop-up");
    info.style.display = "none";
}
function acceptAndCloseTermsPopUp() {
    var info = document.getElementById("terms-pop-up");
    info.style.display = "none";
    var termsCheck = document.getElementById("terms-check");
    termsCheck.checked = true;
}
function rejectAndCloseTermsPopUp() {
    var info = document.getElementById("terms-pop-up");
    info.style.display = "none";
    var termsCheck = document.getElementById("terms-check");
    termsCheck.checked = false;
}