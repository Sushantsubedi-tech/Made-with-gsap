function scrolltrigger(){
    // Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
}
scrolltrigger();
function page2anim(){
  
let tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top -10%",
    scrub:true,
    pin:true
  }
})
tl.to("#page2 video",{
  height:"30vh",
  y:"100%",
  width:"25%",
  duration:5
})
let textanim = document.querySelectorAll(".textpage3 h1")
  tl.from(textanim,{
    y:100,
    opacity:0,
    stagger:1
    }
  )
}
page2anim();
function page2buttonanim(){
  let btn = document.querySelector(".buttonpage2 button ")
  let mainanchor = document.querySelector(".mainanchor")
  let absoluteanchor = document.querySelector(".absoluteanchor")
  btn.addEventListener("mouseover",function(){
    gsap.to(mainanchor,{
      y:100,
      duration:0.2
    })
    gsap.to(absoluteanchor,{
      y:0,
      duration:0.2
    })
  })
  btn.addEventListener("mouseleave",function(){
    gsap.to(mainanchor,{
      y:0,
      duration:0.2
    })
    gsap.to(absoluteanchor,{
      y:-100,
      duration:0.2
    })
  })
}
page2buttonanim();
function page3animation(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page3 #animatingbackground",
      scroller:"body",
      start:"top bottom",
      end:"bottom ",
      scrub:true
    }
  })
  tl.to("#animatingbackground #leftanim span",{
    y:0,
    duration:1,
    stagger:0.5
  })
}
page3animation()