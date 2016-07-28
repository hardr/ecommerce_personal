$( document ).ready(function() {
    console.log( "ready!" );

    var email;

    $('#signup-form').on('submit', function(e) {
      e.preventDefault();

      var userEmail = $('#signup-input').val();
      email = userEmail;

      if (userEmail === '' || userEmail === undefined) {
        wiggle('#signup-input', '40px', 40);
        $('#input-message').replaceWith('<div id="input-message" class="input-err">You didn\'t think we\'d check?</div>');
        $('.input-err').fadeIn(500).delay(2000).fadeOut(500);
      } else {
        $('#input-message').replaceWith('<div id="input-message" class="input-succ">Hang tight, we\'ll reach out!</div>');
        $('.input-succ').fadeIn(500).delay(2000).fadeOut(500);
      };
    });

    $('#emailForm').on('submit', function(e) {
      e.preventDefault();

      var userEmail = $('#header-email').val();
      email = userEmail;

      if (userEmail === '' || userEmail === undefined) {
        wiggle('#header-email', '30px', 40);
        $('#header-message').replaceWith('<div id="header-message" class="input-err">You didn\'t think we\'d check?</div>');
        $('.input-err').fadeIn(500).delay(2000).fadeOut(500);
      } else {
        $('#header-message').replaceWith('<div id="header-message" class="input-succ">Hang tight, we\'ll reach out!</div>');
        $('.input-succ').fadeIn(500).delay(2000).fadeOut(500);
      }
    })

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

    var imgDisplayTime = 4000;
    var transition_speed = 0;

    var carouselSlide = $('.carouselBox');
    var listItems = carouselSlide.children('li');
    var listLen = listItems.length;
    var i = 0;

    var changeList = function() {

      listItems.eq(i).fadeOut(transition_speed, function () {
        i += 1;
        if (i === listLen) {
          i = 0;
        };
        listItems.eq(i).fadeIn(transition_speed);
      });

    };

    var reverseList = function() {

      listItems.eq(i).fadeOut(transition_speed, function () {
        i -= 1;
        if (i === listLen) {
          i = 0;
        };
        listItems.eq(i).fadeIn(transition_speed);
      });

    };

    listItems.not(':first').hide();

    var newInterval = function(){
      clearInterval(interval);
      imgDisplayTime = 4000;
      interval = setInterval(changeList, imgDisplayTime);
    }

    var interval = setInterval(newInterval, imgDisplayTime);
    newInterval(changeList, imgDisplayTime);


    $('.next').on('click', function() {
      newInterval();
      changeList();
    });

    $('.prev').on('click', function() {
      newInterval();
      reverseList();
    });

    //This code works, but won't reset the timer or cycle images on it's own once clicked. Gonna start fresh.

    // var currentIndex = 0,
    // items = $('.carouselBox li'),
    // itemAmt = items.length;
    //
    // function cycleItems() {
    //   var item = $('.carouselBox li').eq(currentIndex);
    //   items.hide();
    //   item.css('display','inline-block');
    // }
    //
    // var autoSlide = setInterval(function() {
    //   currentIndex += 1;
    //   if (currentIndex > itemAmt - 1) {
    //     currentIndex = 0;
    //   }
    //   cycleItems();
    // }, 3000);
    //
    // $('.next').click(function() {
    //   clearInterval(autoSlide);
    //   currentIndex += 1;
    //   if (currentIndex > itemAmt - 1) {
    //     currentIndex = 0;
    //   }
    //   cycleItems();
    // });
    //
    // $('.prev').click(function() {
    //   clearInterval(autoSlide);
    //   currentIndex -= 1;
    //   if (currentIndex < 0) {
    //     currentIndex = itemAmt - 1;
    //   }
    //   cycleItems();
    // });

});

function wiggle(id, px, time) {
  $(id).animate({
    "margin-left": px
  },time);
  $(id).animate({
    "margin-left": '-'+px
  },time);
  $(id).animate({
    "margin-left": "0px"
  },time);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
