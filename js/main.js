//Add highlighted menu after scrolling
$(document).ready(function () {
    ifScrolled();
});

$(window).scroll(function () {
    ifScrolled();
});

function ifScrolled() {
    if ($(window).width() > 991) {
        if ($('.main-nav').outerHeight() < $(window).scrollTop()) {
            $('.main-nav').addClass('scrolled');
        } else {
            $('.main-nav').removeClass('scrolled');
        }
    }
}

// Add smooth scrolling to all links
$(".main-nav__list-item-link").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
        });
    } // End if
});

//Add scroll animation effects
$(window).on('scroll', function () {

    const scrollValue = $(this).scrollTop();
    const windowHeight = $(this).height();

    const $aboutMe = $('.about-me__description');
    const $abilities = $('.abilities__wrap');
    const $nowLearning = $('.now-learning__skill');
    const whenStartAboutMe = $aboutMe.offset().top;
    const whenStartAbilities = $abilities.offset().top;
    const whenStartNowLearning = $nowLearning.offset().top;
    const heightAboutMe = $aboutMe.outerHeight();
    const heightAbilities = $abilities.outerHeight();
    const heightNowLearning = $nowLearning.outerHeight();

    if (scrollValue > whenStartAboutMe + heightAboutMe / 2 - windowHeight) {
        $aboutMe.addClass('active');
    }

    if (scrollValue > whenStartAbilities + heightAbilities / 2 - windowHeight) {
        $abilities.addClass('active');
    }

    if (scrollValue > whenStartNowLearning + heightNowLearning / 2 - windowHeight) {
        $nowLearning.addClass('active');
    }

    //cleaner
    // if (scrollValue < 100) {
    //     $aboutMe.removeClass('active');
    //     $abilities.removeClass('active');
    //     $nowLearning.removeClass('active');
    // }

})


//Add marker in the menu and switches color depending on the background to stay visible
function changeDot() {
    const scrollValue = $(window).scrollTop();
    const heightSectionAboutMe = $('.page__sectionAboutMe').offset().top;
    const heightSectionAbilities = $('.page__sectionAbilities').offset().top;
    const heightSectionQuote = $('.page__sectionQuote').offset().top;
    const heightSectionContact = $('.page__sectionContact').offset().top;
    // const heightSectionContact = $('.page__sectionContact').offset().top;


    // console.log(scrollValue.toFixed(), heightSectionAboutMe.toFixed(), heightSectionAbilities.toFixed(), heightSectionContact.toFixed());
    // $('nav li').removeClass('naviActive');
    // $('.main-nav__list-item').removeClass('naviActive');
    if (scrollValue < heightSectionAboutMe) {
        $('.main-nav__list-item-link').css('color', '#ddd');
        $('.main-nav__list-item-link').not('.main-nav__home').removeClass('naviActive');
        $('.main-nav__home').addClass('naviActive');
    } else if (scrollValue < heightSectionAbilities) {
        $('.main-nav__list-item-link').css('color', '#222');
        $('.main-nav__list-item-link').not('.main-nav__aboutMe').removeClass('naviActive');
        $('.main-nav__aboutMe').addClass('naviActive');
    } else if (scrollValue < heightSectionQuote) {
        $('.main-nav__list-item-link').css('color', '#222');
    } else if (scrollValue < heightSectionContact) {
        $('.main-nav__list-item-link').css('color', '#ddd');
        $('.main-nav__list-item-link').not('.main-nav__skills').removeClass('naviActive');
        $('.main-nav__skills').addClass('naviActive');
    } else {
        $('.main-nav__list-item-link').css('color', '#222');
        $('.main-nav__list-item-link').not('.main-nav__contact').removeClass('naviActive');
        $('.main-nav__contact').addClass('naviActive');
    }
}

$(window).on("scroll", changeDot)