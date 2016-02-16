$(document).ready(function() {
    
    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // Error messages go here.
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behavior.
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            
            // Get email values from form.
            var name = $("input#name").val(),
                email = $("input#email").val(),
                phone = $("input#phone").val(),
                message = $("textarea#message").val();
                firstName = name; // For Success/Failure Message.
            
            // Check for white space in name for Success/Fail message.
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Enable button and show succes message.
                    $("#btnSubmit").attr("disabled", false);
                    $("#success").html("<div class='alert alert-succes'>");
                    $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $("#success > .alert-succes").append("<strong>Your message has been sent. </strong>");
                    $("#success > .alert-success").append("</div>");
                        
                    // Clear all fields
                    $("#contactForm").trigger("reset");
                },
                error: function() {
                    //Fail Message
                    $('#success').html('<div class="alert alert-danger">');
                    $('#success > .alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&timer;').append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that the server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    
                    // Clear all fields.
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });
    
    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on the Full hide fail/success boxes.
$('#name').focus(function() {
    $('#success').html('');
});
