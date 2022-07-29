






$(window).on("load",function(){
 
  $(".load").hide()
  $(".content").show()
  
})

// end loading page

// start button up to home

var up = document.querySelector(".up-to-home");

up.addEventListener("click",function() {
  $(window).scrollTop(0);
})


$(window).on("load",function() {
   $(".title-home").animate({left: "0px"},2600);
   $(".btn-tow ").animate({left:"0px"},2600);
})

$(window).scroll(function() {

if($(this).scrollTop() >= 700) {
  $(".up-to-home").fadeIn(1500);
} else {
  $(".up-to-home").fadeOut(500);
}


   if($(this).scrollTop() >= 700) {
  $(".home_one").animate({top: "0px"},1600)
  $(".home_tow ").animate({top: "0px"}, 1600)
   }

       if ($(this).scrollTop() >= 1200) {
         $(".shop-0").animate({left: "0px"},1400);
         $(".shop-1").animate({top: "0px"},1800);
         $(".shop-2").animate({top: "0px"},1400);
       }


       if ($(this).scrollTop() >= 1600) {
         $(".shop-3").animate({top: "0px"},1400);
         $(".shop-4").animate({left: "0px"},1800);
         $(".shop-5").animate({top: "0px"},1400);
       }


       if ($(this).scrollTop() >= 2000) {
         $(".shop-6").animate({left: "0px"},1400);
         $(".shop-7").animate({top: "0px"},1800);
         $(".shop-8").animate({top: "0px"},1400);
       }
       if ($(this).scrollTop() >= 2700) {
         $(".shop-9").animate({left: "0px"},1400);
         $(".shop-10").animate({top: "0px"},1800);
         $(".shop-11").animate({left: "0px"},1400);
       }


       if ($(this).scrollTop() >= 3300) {
         $(".other-sh-0").animate({top: "0px"},1400);
         $(".other-sh-1").animate({top: "0px"},1800);
         $(".other-sh-2").animate({left: "0px"},1800);
       }

       if ($(this).scrollTop() >= 3900) {
         $(".other-sh-3").animate({top: "0px"},1400);
         $(".other-sh-4").animate({top: "0px"},1800);
         $(".other-sh-5").animate({left: "0px"},1400);
       }

       if ($(this).scrollTop() >= 4300) {
         $(".other-sh-6").animate({top: "0px"},1400);
         $(".other-sh-7").animate({top: "0px"},1800);
         $(".other-sh-8").animate({left: "0px"},1400);
       }


       if ($(this).scrollTop() >= 4600) {
         $(".blog-0").animate({left: "0px"},1400);
         $(".blog-1").animate({top: "0px"},1800);
         $(".blog-2").animate({top: "0px"},1400);
       }

       if ($(this).scrollTop() >= 5000) {
         $(".blog-3").animate({top: "0px"},1400);
         $(".blog-4").animate({left: "0px"},1800);
         $(".blog-5").animate({top: "0px"},1400);
       }

       if ($(this).scrollTop() >= 6600) {
         $(".also-0").animate({left: "0px"},1400);
         $(".also-1").animate({top: "0px"},1800);
         $(".also-2").animate({left: "0px"},1400);
       }

       if ($(this).scrollTop() >= 7000) {
         $(".xml-press-0").animate({left: "0px"},1400);
         $(".xml-press-1").animate({top: "0px"},1800);
         $(".xml-press-2").animate({left: "0px"},1400);
       }
})



// start hover element image



var img = document.querySelectorAll(".over img");



var title = document.querySelectorAll(".title");

var imgs = Array.from(img);
var titls = Array.from(title);



titls.forEach((el)=> {

   el.addEventListener("mouseover", function() {
      imgs[titls.indexOf(el)].classList.add("dem");

   })
   el.addEventListener("mouseout", function() {
      img[titls.indexOf(el)].classList.remove("dem");
 $(".up-to-home").animate({right: "30px", bottom: "10px"});


   })
   })

// end hover element image






//start scroll change navbar


var navbar = document.querySelector("#navig");

window.onscroll= function () {
   if (this.scrollY > 220) {
      navbar.classList.remove("none")
      navbar.setAttribute("On", "2");
      navbar.getAttribute("On");
   }
   
   else {
     navbar.classList.add("none");
      navbar.setAttribute("on", "1");
   }

}
//end scroll change navbar
