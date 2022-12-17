console.log("Hello world")


// jquery
// $(document).ready(function(){
//     $(window).scroll(function(){
//         let position = $(this).scrollTop();
//         if(position > 0){
//             $("nav").addClass("navmenus");
//         }else if(position < 200) {
//             $("nav").removeClass("navmenus");
//         }
//     })
// })


//  js
let getNav = document.querySelector(".navbar");
console.log(getNav);
window.addEventListener("scroll",function(){
    getNav.classList.toggle("navmenus" , window.scrollY > 0);
})
