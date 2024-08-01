
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Front-End Developer", "Back-End Developer", "Web Developer","I Love Coding!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
$(document).ready(function() {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
 
  
  // $(".aboutme").hide();
  // $(".myimg").hide();
  // $(".thisimg").hide()
  // $("#skillset").hide();
  // $(".skiii").hide();
  // $("#web").hide();
  // $("#Machine").hide()
  // $("#python").hide()
  // $("#tooliuse").hide()
  // $("#toool").hide()
  VanillaTilt.init(document.querySelector(".myimg img"), {
		max: 15,
		speed: 1000
	});
	$(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();
       var vh = $(window).height()
        if (scrollPosition > 0) {
            $(".navv").addClass("sticky");
        } else {
             $(".navv").removeClass("sticky");
       }
  })
	//It also supports NodeList

    // $(window).scroll(function() {
    //   var scrollPosition = $(this).scrollTop();
    //   var vh = $(window).height()
    //     if (scrollPosition > 0) {
    //         $(".navv").addClass("sticky");
    //     } else {
    //         $(".navv").removeClass("sticky");
    //     }
    //     if (scrollPosition > 0.4 *vh && scrollPosition<1.9*vh) {
    //       $(".aboutme").fadeIn();
    //       setTimeout(function(){
    //         $(".myimg").fadeIn();
    //         $(".thisimg").fadeIn()
    //         VanillaTilt.init(document.querySelectorAll(".myimg img"));
    //       },200)
    //     }
    //     else{
    //       $(".aboutme").hide();
    //       $(".myimg").hide();
    //       $(".thisimg").hide()
    //     }
    //     if(scrollPosition>1.1*vh && scrollPosition<3.3*vh){
    //      $("#skillset").fadeIn()
    //      setTimeout(function(){
    //       $("#web").fadeIn();
    //       setTimeout(function(){
    //         $(".skiii").fadeIn()
    //         setTimeout(function(){
    //           $("#Machine").fadeIn()
    //           setTimeout(function(){
    //             $("#python").fadeIn()
    //             setTimeout(function(){
    //               $("#tooliuse").fadeIn()
    //               setTimeout(function(){
    //                 $("#toool").fadeIn()
    //               },300);
    //             },300);
    //           },300);
    //         },300);
    //       },300);
    //     },300)
       
    //     }
    //     else{
        
    //     }
    // });
    $(".navbar-toggler").click(function(){
        $(".navv").toggleClass("sticky");
    })
   
  


});

