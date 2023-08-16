$(document).ready(function() {
    $("#attractive-form").submit(function(event) {
      event.preventDefault();
  
      var email = $("#email").val();
      var password = $("#password").val();
      var file = $("#file").val();
      
      // Clear previous error messages
      $(".text-danger").text("");
  
      if (email === "") {
        $("#email-error").text("Email is required.");
      }
  
      if (password === "") {
        $("#password-error").text("Password is required.");
      }
  
      if (file === "") {
        $("#file-error").text("Please select a file.");
      }
  
      // Perform further validation here, e.g., email format validation
  
      // If everything is valid, you can proceed with form submission
      if (email !== "" && password !== "" && file !== "") {
        // Here you can perform AJAX submission or other actions
        // For this example, we'll just show an alert
        alert("Form submitted successfully!");
      }
    });
  });
  