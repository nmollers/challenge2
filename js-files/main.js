// Splash Screen JS Code
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})

// Nav Menu
function myFunction(x) {
    x.classList.toggle("change");
  }

// content menu 
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  var spotlight = document.getElementById("spotlight");
window.addEventListener('mousemove', e => {
spotlight.style.backgroundImage = "radial-gradient(circle at " + e.clientX + "px " + e.clientY + "px, transparent 1px, rgba(0, 0, 0, .8) 170px)";})

