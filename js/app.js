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

    // start property section
    $(".propertylists").click(function(){
        console.log(this)
        // $(this).addClass("activeitems"); 
        $(this).addClass("activeitems").siblings().removeClass("activeitems") // this အား activeitems ထည့်ပြီး siblings() များအား activeitems ဖြုတ်မည်ဟုဆိုထားခြင်းဖြစ်သည် navbar တွင်အသုံးများသည် 

        let ftvalue = $(this).attr("data-filter") // this ၏ data-filter ဟူသော attribute ကို ယူမည်ဖြစ်သည်

        if(ftvalue === "all"){ // ftvalue ၏ value သည် all ဖြစ်ပါက အားလုံးကို ပြပေးမည်ဖြစ်သည်
            $(".filters").show(); // ပြသည် method
        } else { // သို့မဟုတ် အားလုံး ကို ဖျောက်ပေးထားမည်ဖြစ်သည် 
            $(".filters").hide(); // ပြသည် method
            $(".filters").not("."+ftvalue).hide(); // ftvalue မဟုတ်ခဲ့ပါက hide ပေးမည် 
            $(".filters").filter("."+ftvalue).show(); // ftvalue အား filter လုပ်ပြီး show လုပ်ပေးမည်ဖြစ်သည် 
        }
    })
    // end property section
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        "showImageNumberLabel" : false ,
        "wrapAround" : true
      })
})


//  js
// let getNav = document.querySelector(".navbar");
// console.log(getNav);
// window.addEventListener("scroll",function(){
//     getNav.classList.toggle("navmenus" , window.scrollY > 0);
// })


// 8BO