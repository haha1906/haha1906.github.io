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


/* Turkish validation */

    jQuery.extend(jQuery.validator.messages, {
        required: "Bu alan gereklidir.",
        remote: "Lütfen bu alanı düzeltin.",
        email: "Lütfen geçerli bir e-posta adresi girin.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Lütfen geçerli bir sayı girin.",
        digits: "Lütfen sadece rakam girin.",
        creditcard: "Lütfen geçerli bir kredi kartı numarası girin",
        equalTo: "Yanlış parola",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Lütfen {0} karakterden daha kısa değer girin."),
        minlength: jQuery.validator.format("Lütfen en az {0} karakter girin."),
        rangelength: jQuery.validator.format("Lütfen {0} ile {1} karakter uzunluğunda bir değer girin."),
        range: jQuery.validator.format("{0} ile {1} arasında bir değer girin."),
        max: jQuery.validator.format("Lütfen {0} veya daha az değer girin."),
        min: jQuery.validator.format("Lütfen {0} veya daha çok değer girin..")
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