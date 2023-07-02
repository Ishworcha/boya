$(window).scroll(function () {
  var sticky = $("#navbar"),
    scroll = $(window).scrollTop();

  if (scroll >= 100)
    sticky.addClass("navbar-solid");
  else sticky.removeClass("navbar-solid");
});

// dropdown

// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach((dropdown) => {
//   const dropdownItems = dropdown.querySelectorAll('.dropdown-menu li');
//   const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

//   dropdownItems.forEach((item) => {
//     item.addEventListener('click', (event) => {
//       event.preventDefault();
//       const selectedItem = event.currentTarget.getAttribute('data-item');
//       dropdownToggle.innerText = selectedItem;
//     });
//   });
// });

// increment and decrement

function handleCount(element, increment) {
  const countElement = element.parentNode.querySelector('.num') || element.parentNode.querySelector('.no');
  let count = parseInt(countElement.innerText);
  count += increment ? 1 : -1;

  count = Math.max(1, Math.min(99, count));

  countElement.innerText = count.toString().padStart(2, '0');
}

const increaseButtons = document.querySelectorAll('.increase-count');
increaseButtons.forEach((button) => {
  button.addEventListener('click', () => handleCount(button, true));
});

const decreaseButtons = document.querySelectorAll('.decrease-count');
decreaseButtons.forEach((button) => {
  button.addEventListener('click', () => handleCount(button, false));
});

// button

function shortArrow() {
  const iconsShortArrow = document.querySelectorAll('#shortArrow');

  iconsShortArrow.forEach(iconshortArrow => {
    const pathshortArrow = iconshortArrow.querySelector('svg path#shortArrowPath');
    const shortArrowRect = iconshortArrow.querySelector('svg rect#shortArrowRect');

    iconshortArrow.addEventListener('mouseover', () => {
      pathshortArrow.style.transition = 'all 0.3s ease-out';
      pathshortArrow.style.transform = 'translateX(5px)';
      pathshortArrow.style.opacity = '1';
      shortArrowRect.setAttribute('width', '20');
      shortArrowRect.style.transform = 'translateX(-6px)';
      shortArrowRect.style.transition = 'all 0.3s ease-out';
    });

    iconshortArrow.addEventListener('mouseout', () => {
      pathshortArrow.style.transition = 'all 0.3s ease-out';
      pathshortArrow.style.transform = 'translateX(0px)';
      shortArrowRect.setAttribute('width', '8');
      shortArrowRect.style.transform = 'translateX(0px)';
      shortArrowRect.style.transition = 'all 0.3s ease-out';
    });
  });
}

shortArrow();

$(".slick-slider").slick({
  arrows: false,
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1280,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1440,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

var $slider = $('#sportSlider');

$slider.slick({
  autoplay: false,
  dots: false,
  infinite: true,
  // variableWidth: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});


// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find('.number').text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find('.name').text();
    return name.match(/ium$/);
  }
};

// bind filter button click
$('#filters').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on('click', 'button', function () {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});


// price range

$(function () {
  $("#price-range").slider({
    step: 500,
    range: true,
    min: 0,
    max: 3000,
    values: [0, 20000],
    slide: function (event, ui) {
      $("#priceRange").val("AED " + ui.values[0] + " - AED " + ui.values[1] + "+");
    }
  });
  $("#priceRange").val("AED " + $("#price-range").slider("values", 0) + " - AED " + $("#price-range").slider("values", 1) + "+");
});

$(".drawer").drawer();

jQuery('#showWholeLightboxButton').click(function () {
  // Trigger the lightbox to show
  jQuery('.gallery_slider').find('img:first').trigger('click');
});

(function ($) {
  var allPanels = $('.panel').hide();
  var defaultAccordion = $('.accordion').first();
  var defaultPanel = defaultAccordion.next('.panel');

  defaultPanel.show();
  defaultAccordion.addClass("active");

  $('.accordion').click(function () {
    var panel = $(this).next('.panel');

    if (panel.is(":visible")) {
      panel.slideUp();
      $(this).removeClass("active");
    } else {
      allPanels.slideUp();
      $('.accordion').removeClass("active");
      panel.slideDown();
      $(this).addClass("active");
    }
  });
})(jQuery);

// datepicker

// $(function () {
//   $('#date').datepicker({
//     dateFormat: 'dd-M-yy',
//     minDate: 1
//   });

//   $('.date-icon').on('click', function () {
//     $('#date').focus();
//   })
// });


// $(function () {
//   $(".calendar").datepicker({
//     dateFormat: 'dd/mm/yy',
//     firstDay: 1
//   });

//   $(document).on('click', '.datepickerbtn', function (e) {
//     var $me = $(this),
//       $parent = $me.parents('.listingSelect');
//     $parent.toggleClass('datepickeropen');
//   });


//   $(".calendar").on("change", function () {
//     var $me = $(this),
//       $selected = $me.val(),
//       $parent = $me.parents('.listingSelect');
//     $parent.find('.result').children('span').html($selected);
//   });
// });

$(function () {
  $(".calendar").datepicker({
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    showOn: 'focus',
    showButtonPanel: true,
    closeText: 'Reset', // Text to show for "close" button
  });

  $(document).on('click', '.date-picker .dateinput', function (e) {
    var $me = $(this),
      $parent = $me.parents('.date-picker');
    $parent.toggleClass('open');
  });


  $(".calendar").on("change", function () {
    var $me = $(this),
      $selected = $me.val(),
      $parent = $me.parents('.date-picker');
    $parent.find('.dateresult').children('span').html($selected);
  });
});

document.addEventListener("click", function (event) {
  var dropdownMenu1 = document.getElementById("datepicker");
  var dropdownToggle1 = document.getElementById("calendar");

  if (
    !dropdownToggle1.contains(event.target) &&
    !dropdownMenu1.contains(event.target)
  ) {
    dropdownMenu1.classList.remove("open");
  }
});



$("#promobtn").click(function () {
  $(".promobox").css("display", "flex");;
});

// dropdown custom

document
  .getElementById("dropdownToggle1")
  .addEventListener("click", function () {
    var dropdownToggle1 = document.getElementById("dropdownToggle1");
    var dropdownMenu = document.getElementById("dropdownMenu1");
    dropdownToggle1.classList.toggle("dropdownactive");
    dropdownMenu.classList.toggle("active");
  });

function decreaseCount(countId) {
  var countElement = document.getElementById(countId);
  var count = parseInt(countElement.innerText);
  if (count > 0) {
    countElement.innerText = count - 1;
    updateTotalCount();
  }
}

function increaseCount(countId) {
  var countElement = document.getElementById(countId);
  var count = parseInt(countElement.innerText);
  countElement.innerText = count + 1;
  updateTotalCount();
}

function updateTotalCount() {
  var adultCount1 = parseInt(
    document.getElementById("adultCount1").innerText
  );
  var childCount1 = parseInt(
    document.getElementById("childCount1").innerText
  );
  var totalCount1 = adultCount1 + childCount1;
  document.getElementById("totalCount1").innerText = totalCount1;

  var adultCount2 = parseInt(
    document.getElementById("adultCount2").innerText
  );
  var childCount2 = parseInt(
    document.getElementById("childCount2").innerText
  );
  var totalCount2 = adultCount2 + childCount2;
  document.getElementById("totalCount2").innerText = totalCount2;
}

document.addEventListener("click", function (event) {
  var dropdownMenu1 = document.getElementById("dropdownMenu1");
  var dropdownToggle1 = document.getElementById("dropdownToggle1");

  if (
    !dropdownToggle1.contains(event.target) &&
    !dropdownMenu1.contains(event.target)
  ) {
    dropdownToggle1.classList.remove("dropdownactive");
    dropdownMenu1.classList.remove("active");
  }
});

$("select").niceSelect();

