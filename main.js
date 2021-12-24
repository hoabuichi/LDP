$(".teachers-container .items").slick({
    infinite: true,
    variableWidth: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }, {
        breakpoint: 300,
        settings: "unslick"
    }]
});

$('.teachers-container .prev').click(function(){
  $('.teachers-container .items').slick('slickPrev');
})

$('.teachers-container .next').click(function(){
  $('.teachers-container .items').slick('slickNext');
})

$('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 0);
        return false;
    }
  }
});


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


let isFormValid = function(){
  let isValid = true;
  if(!$("#fullname").val()) {
    isValid = false
    $("#fullname").css("border-color", "red");
  }

  if(!$("#birthday").val()) {
    isValid = false
    $("#birthday").css("border-color", "red");
  }

  if(!$("#school").val()) {
    isValid = false
    $("#school").css("border-color", "red");
  }

  console.log(validateEmail($("#email").val()))
  if(!$("#email").val() || !validateEmail($("#email").val())) {
    isValid = false
    $("#email").css("border-color", "red");
  }

  return isValid;
}
let isLoading = false
$(".register-submit-btn").click(function(){
  if(isFormValid() && !isLoading) {
    $(".lds-ring").show();
    isLoading = true;
    var form = new FormData();
    form.append("Ngày đăng ký", new Date().toLocaleDateString("vi-VN"));
    form.append("Họ và tên", $("#fullname").val());
    form.append("Ngày sinh", $("#birthday").val());
    form.append("Trường học", $("#school").val());
    form.append("Email", $("#email").val());
    form.append("Tên cuộc thi", document.querySelector('input[name="test-type"]:checked').value);
    var settings = {
      "url": "https://script.google.com/macros/s/AKfycbzLSJEHHUXFLCddP-kT6CLQm8ffQcLRTeixabXcMb52OJxI53uNOzot_xxKtYzG5nZ7/exec?fbclid=IwAR1E7ajFyEzGrAmAi7eCYQrwGuT_kW7tVVCb0OTsgYVpXRzU1ZGjE7YjRwo",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };
    $.ajax(settings).done(function (response) {
      $("#fullname").val("");
      $("#birthday").val("");
      $("#school").val("");
      $("#email").val("");
      isLoading = false;
      $(".lds-ring").hide();
    });
  }
})

$("#fullname").keyup(function() {
  if(!$("#fullname").val()) {
    $("#fullname").css("border-color", "red");
  } else {
    $("#fullname").css("border-color", "#75B2F0");
  }
});

$("#birthday").change(function() {
  if(!$("#birthday").val()) {
    $("#birthday").css("border-color", "red");
  } else {
    $("#birthday").css("border-color", "#75B2F0");
  }
});

$("#email").keyup(function() {
  if(!$("#email").val()) {
    $("#email").css("border-color", "red");
  } else {
    $("#email").css("border-color", "#75B2F0");
  }
});

$("#school").keyup(function() {
  if(!$("#school").val()) {
    $("#school").css("border-color", "red");
  } else {
    $("#school").css("border-color", "#75B2F0");
  }
});
