console.log("Hello world")


// jquery
$(document).ready(function(){


    // Start Nav Bar
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position > 0){
            $("nav").addClass("navmenus");
        }else {
            $("nav").removeClass("navmenus");
        }
    })

    $(".navbuttons").click(function(){
        $(".navbuttons").toggleClass("crossxs");
    })
    // End Nav Bar

})


//  js
// let getNav = document.querySelector(".navbar");
// console.log(getNav);
// window.addEventListener("scroll",function(){
//     getNav.classList.toggle("navmenus" , window.scrollY > 0);
// })
