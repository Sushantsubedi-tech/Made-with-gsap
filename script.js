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
    stagger:1,
    duration:2
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
      end:"top 10%",
      scrub:true
    }
  })
  tl.to("#animatingbackground #leftanim span",{
    y:0,
    duration:1,
    stagger:0.5
  })
}
page3animation();
function page3contentanimation(){

}
page3contentanimation()
function h1tospanconverter() {
  gsap.to(".text", {
      x: "0%",  
      duration: 1,
      scrollTrigger: {
          trigger: "#page4",
          scroller: "body",
          start: "top 50%",
          scrub: true
      }
  });

  gsap.from("#page4 span", {
      opacity: 0,
      x: 100,   
      y:0, 
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
          trigger: "#page4",
          scroller: "body",
          start: "top 50%",
          scrub: true,
          pin:true
      }
  });
}
h1tospanconverter();
function page5cardanim(){
let tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5",
    scroller:"body",
    start:"top top",
    end:"bottom 15%",
    scrub:2,
    pin:true
  }
})
tl.to("#card3",{
  y:0,
  duration:1,
  opacity:1,
})
tl.to("#card2",{
  y:0,
  duration:1,
  opacity:1,
})
tl.to("#card1",{
  y:0,
  duration:1,
  opacity:1,
})
}
page5cardanim();
function movingtextanimationpage6(){
  let move1 = document.querySelector("#movex")
let move2 = document.querySelector("#movex-")
let page6 = document.querySelector("#page6")
document.addEventListener("wheel", function(dets){
if(dets.deltaY < 0){
gsap.to(move2,{
  transform:"translateY(100%)",
  duration:2
})
gsap.to(move1,{
  transform:"translateY(100%)",
  duration:2
})
}
else if(dets.deltaY > 0){
gsap.to(move2,{
  transform:"translateY(-100%)",
  duration:2
})
gsap.to(move1,{
  transform:"translateY(0%)",
  duration:2
})
}
})
}
movingtextanimationpage6()
function svganim(){
  let container = document.querySelector("#stringanim")
  let initialpath = "M 100 80 Q 600 80 1290 80"
  let finalpath = "M 100 80 Q 600 80 1290 80"
  container.addEventListener("mousemove",function(dets){
    let newpath = `M 100 80 Q ${dets.clientX} ${dets.clientY} 1290 80`
   gsap.to("#stringanim svg path",{
    attr:{d:newpath},
    duration:0.5,
    
   })
  })
  container.addEventListener("mouseleave",function(){
    gsap.to("#stringanim svg path",{
      attr:{d:finalpath},
      duration:0.5,
      ease:"elastic.out(1,0.1)"
    })
  })
}
svganim();
function navbaranim(){
let anchor = document.querySelectorAll("#titles a")
let tl = gsap.timeline()
tl.to(anchor,{
  y:0,
  stagger:1,
  duration:0.5
})
}
navbaranim()
function navright(){
  let  a = document.querySelector("#righttitles>a")
  let text = a.textContent
 let arr = text.split("")
  let textwrapper = ""
  for(let i=0;i<arr.length;i++){
    textwrapper += `<span>${arr[i]}</span>`
  }
  a.innerHTML = textwrapper
  let sus = document.querySelectorAll("#righttitles>a span")
gsap.from(sus,{
  y:-100,
  opacity:0,
  duration:0.2,
  stagger:0.5
})

}
navright();
function navbutton(){
  let btn = document.querySelector("#righttitles button")
  let anchor = document.querySelector("#righttitles button a")
  let text = anchor.textContent
  let arr = text.split("")
   let textwrapper = ""
   for(let i=0;i<arr.length;i++){
     textwrapper += `<span>${arr[i]}</span>`
   }
   anchor.innerHTML = textwrapper
   let sus = document.querySelectorAll("#righttitles button a span")
btn.addEventListener("mouseenter",function(){
  gsap.from(sus,{
    opacity:0,
    duration:0.5,
    stagger:0.05
  })
})
  btn.addEventListener("mouseleave",function(){
    gsap.to(sus,{
      opacity:1,
      duration:0.5,
      stagger:0.05
    })
  })
}
navbutton()
function page3text(){
let text = document.querySelectorAll("#page3 #rectangle h1")
gsap.from(text,{
  y:100,
  opacity:0,
  stagger:1,
  duration:2,
  scrollTrigger:{
trigger:"#page3 #rectangle h1",
scroller:"body",
start:"top 80%",
end:"top 10%"
  }
})
}
page3text();
function landingpage(){
  let tl =gsap.timeline()
  let firstline = document.querySelectorAll("#leftsidetext #firstline h1 span")
gsap.from(firstline,{
  y:150,
  duration:0.5,
  stagger:0.05
})
let secondsline = document.querySelectorAll("#leftsidetext #secondline h1 span")
  gsap.from(secondsline,{
    y:150,
    duration:0.5,
    stagger:0.05
  })
}
landingpage();
function landingpagebutton(){
  let btn = document.querySelector("#rightsidetext button")
  let anchor = document.querySelector("#rightsidetext button ")
  let text = anchor.textContent
  let arr = text.split("")
   let textwrapper = ""
   for(let i=0;i<arr.length;i++){
     textwrapper += `<span>${arr[i]}</span>`
   }
   anchor.innerHTML = textwrapper
   let sus = document.querySelectorAll("#rightsidetext button span")
btn.addEventListener("mouseenter",function(){
  gsap.from(sus,{
    opacity:0,
    duration:0.5,
    stagger:0.05
  })
})
  btn.addEventListener("mouseleave",function(){
    gsap.to(sus,{
      opacity:1,
      duration:0.5,
      stagger:0.05
    })
  })
}
landingpagebutton()