
/*----------custom script here--------*/

//contact form
$("#contactsubmit-form").submit((e)=>{
      $(".loading").attr("style","display:block");
      e.preventDefault()
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbxeEOiDXrHEmOFQmqVmnZb-1Tw8Fe1dKqkIOFjF/exec",
          data:$("#contactsubmit-form").serialize(),
          method:"post",
          success:function (response){
            $("#contactsubmit-form")[0].reset()
            $(".loading").attr("style","display:none");
            $(".error-message").attr("style","display:none");
            $(".sent-message").attr("style","display:block");
            $(".sent-message").delay(2000).fadeOut(500);

          },
          error:function (err){
              $("#contactsubmit-form")[0].reset()
              $(".loading").attr("style","display:none");
              $(".sent-message").attr("style","display:none");
              $(".error-message").attr("style","display:block");
              $(".error-message").delay(2000).fadeOut(5000);

          }
      })
  })