const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;
let rotateDegree = 0;

function update(cursosPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    const isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

    let zValue = (cursosPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
    el.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${
      rotateDegree * rotateSpeed
    }deg) translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) `;
  });
}

update(0);
window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;
  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
  update(e.clientX);
});

// GSAP animation

function animationText() {
  let timeline = gsap.timeline();
  const elements = [".text h2", ".hide", ".text h1"];
  setTimeout(() => {
    elements.forEach((el) => {
      el.style.transition = "0.45s ease-in";
    });
  }, timeline.endTime() * 1000);

  timeline
    .from(
      ".text h1",
      {
        y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 400,
        duration: 2,
        delay: 1,
      },
      "1"
    )
    .from(
      ".text h2",
      {
        y: -150,
        opacity: 0,
        duration: 1.5,
        delay: 1.5,
      },
      "2"
    )
    .from(
      ".hide",
      {
        opacity: 0,
        duration: 1.5,
        delay: 1.5,
      },
      "2"
    );
}

function animationElements(itemClass) {
  const item = document.querySelector(`.${itemClass}`);
  let timeline = gsap.timeline();

  timeline.from(item, {
    top: `${item.offsetHeight / 2 + Number(item.dataset.distance)}px`,
    duration: 3.5,
    ease: "power3.out",
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  animationText();
  animationElements("bg-img");
  animationElements("mountain-2");
  animationElements("mountain-1");
  animationElements("fog-2");
  animationElements("mountain-3");
  animationElements("mountain-4");
  animationElements("mountain-5");
  animationElements("fog-3");
  animationElements("fog-4");
  animationElements("mountain-6");
  animationElements("fog-5");
  animationElements("mountain-7");
  animationElements("mountain-8");
  animationElements("mountain-9");
  animationElements("fog-6");
  animationElements("mountain-10");
  animationElements("fog-7");
});

// mountain-1
// mountain-2
// mountain-3
// mountain-8
// mountain-9
// fog-6
// mountain-10
