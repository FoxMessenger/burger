var homeSlides = $(".homeSlide");
var $slideContent = $(".hsContainer");
var slidesCount = $(homeSlides).length;
var activeSlide = 1;
         
// Build HTML for Nav
$("<div/>", {
    "id" : "slideNav"
}).append($("<ul>
<li class="slideNavPrev">
    <a class="disabled" href="#" title="Go to previous slide">
        <span class="ico ico-up">↑</span>
    </a>
</li>
<li>
    <span id="activeSlide">'+activeSlide+'</span>/<span id="maxSlides">'+slidesCount+'</span>
</li>
<li class="slideNavNext">
    <a href="#" title="Go to next slide">
        <span class="ico ico-down">↓</span>
    </a>
</li>
</ul>")).appendTo("body").delay(1200).fadeIn(duration);


// Navigation highligting
var $activeSlide = $('#activeSlide');
var $maxSlides = $('#maxSlides');
var $numberOfSlides = parseInt($maxSlides.text());
var $slideNavNext = $('.slideNavNext');
var $slideNavPrev = $('.slideNavPrev');
var $slideNavNextA = $('.slideNavNext a');
var $slideNavPrevA = $('.slideNavPrev a'); 
 
// Highlight current section while scrolling DOWN
homeSlides.waypoint(function(direction) {
    if (direction === 'down') {
        var index = $(this).index();
        var index = index+1;
    $activeSlide.text(index);
    showHideNavItems();
    }
}, { offset: '50%' });
 
// Highlight current section while scrolling UP
homeSlides.waypoint(function(direction) {
    if (direction === 'up') {
    var index = $(this).index();
    var index = index+1;
    $activeSlide.text(index);
    showHideNavItems();
    }
}, {
    offset: function() {
        // This is the calculation that would give you
        // "bottom of element hits middle of window"
        return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
    }
});