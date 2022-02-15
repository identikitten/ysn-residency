const tags = document.querySelectorAll(".cls-n, .cls-tableau, .st1, .apply-now, img, .cls-pain ")

// fade out on load
tags.forEach(tag => {
 tag.style.opacity = 0

})

const fadeIn = function () {
  let delay = 0.05

	tags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`
      delay = delay + 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }
  })
}


// fades faster
const fastags = document.querySelectorAll(".spr-1a, .spr-2a, .spr-1b, .spr-2b, .spr-1c, .spr-2c, .spr-1d, .spr-2d ")

// fade out on load
fastags.forEach(fastag => {
 fastag.style.opacity = 1

})

const quickFadeIn = function () {
  let delay = 1

	fastags.forEach(fastag => {
    const fastagTop = fastag.getBoundingClientRect().top
    const fastagBottom = fastag.getBoundingClientRect().bottom

    if (fastagTop < window.innerHeight && fastagBottom > 0) {
      fastag.style.animation = `quickfadein 0.5s ${delay}s both`
    delay = 1
    } else {
      fastag.style.opacity = 0
      fastag.style.animation = ""
    }
  })
}

// on load, run fade in
fadeIn()
quickFadeIn()

// on scroll, run fade in
document.addEventListener("scroll", function () {
  fadeIn()
  quickFadeIn()
})

// on browser resize, run fadeIn
window.addEventListener("resize", function (){
  fadeIn()
  quickFadeIn()
})
