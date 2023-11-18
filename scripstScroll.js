// let sec = document.querySelectorAll('section');

// window.onscroll = () => {
//     sec.forEach(section => {
//         let tpo = window.scrollY;
//         let offset = section.offsetTop -150;
//         let height = section.offsetHeight;
//         console.log(`top: ${top} offet: ${offset} Height: ${height}`);

//         if(top >= offset && top < offset + height){
//             section.classList.add('Ocultar');
//         }else{
//             section.classList.remove('Ocultar');
//         }
//     });
// }

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   console.log(st);
   if (st > 2580){
       // downscroll code
       document.getElementById("code").style.display = "none"
   } else {
      // upscroll code
      document.getElementById("code").style.display = "inline"
   }
   lastScrollTop = st;
});