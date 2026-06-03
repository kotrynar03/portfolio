// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Flip } from "gsap/Flip";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(Draggable, ScrollTrigger, Flip, SplitText);

// export default function PageEffects() {
//   useEffect(() => {
  

//     // GSAP Animations
//     const skills = document.querySelector(".skill_container");
//     if (skills) {
//       skills.addEventListener("mouseover", () => {
//         const width = window.innerWidth;

//         const animationValues = {
//           xl: [
//             [230, 250, 20],
//             [-540, -160, 40],
//             [-300, 240, -20],
//             [500, -150, -30],
//             [-40, -150, -20],
//           ],
//           lg: [
//             [200, 210, 20],
//             [-370, -170, 30],
//             [-180, 200, -20],
//             [360, -150, 20],
//             [0, -170, -20],
//           ],
//           md: [
//             [120, 120, 40],
//             [-240, -170, 20],
//             [-140, 120, -40],
//             [220, -150, 20],
//             [0, -170, -20],
//           ],
//           sm: [
//             [160, 230, 30],
//             [-200, -100, 30],
//             [-160, 230, -30],
//             [200, -100, -30],
//             [0, 40, 0],
//           ],
//         };

//         const values =
//           width > 1280
//             ? animationValues.xl
//             : width > 1024
//             ? animationValues.lg
//             : width > 768
//             ? animationValues.md
//             : animationValues.sm;

//         ["#front", "#illustration", "#web", "#branding", "#motion"].forEach(
//           (id, i) =>
//             gsap.to(id, {
//               x: values[i][0],
//               y: values[i][1],
//               rotation: values[i][2],
//               ease: "power1.out",
//             })
//         );
//       });

//       if (window.innerWidth > 640) {
//         skills.addEventListener("mouseleave", () => {
//           gsap.to("#front", { x: 0, y: 0, rotation: -10 });
//           gsap.to("#illustration", { x: 0, y: 0, rotation: -40 });
//           gsap.to("#web", { x: 0, y: 0, rotation: -20 });
//           gsap.to("#branding", { x: 0, y: 0, rotation: -40 });
//           gsap.to("#motion", { x: 0, y: 0, rotation: 40 });
//         });
//       }
//     }

//     // Scroll project fade-ins
//     gsap.utils.toArray(".project").forEach((project) => {
//       gsap.from(project, {
//         scrollTrigger: {
//           trigger: project,
//           start: "-700 top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//         opacity: 0,
//         y: 50,
//         duration: 1,
//       });
//     });

//     // About section
//     const aboutTrigger = document.querySelector(".about");
//     if (aboutTrigger) {
//       const number = Math.floor(Math.random() * 5 + 1);

//       gsap.from(".about_1", {
//         scrollTrigger: {
//           trigger: ".about",
//           start: window.innerWidth > 768 ? "-200 top" : "-400 top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//         opacity: 0,
//         y: 20,
//         duration: 2,
//         stagger: 1,
//       });

//       gsap.to(`.my_photo_${number}`, {
//         scrollTrigger: {
//           trigger: ".about",
//           pin: true,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//         opacity: 1,
//         duration: 3,
//       });
//     }

//     // Mobile cards fly-in animation
//     if (window.innerWidth < 640 && navigator.maxTouchPoints > 0) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".skill_container",
//           start: "top top",
//           end: "+=2000",
//           scrub: true,
//           pin: true,
//         },
//       });

//       ["#motion", "#branding", "#illustration", "#web", "#front"].forEach(
//         (id, i) => {
//           tl.from(id, {
//             y: i % 2 === 0 ? "-30vw" : "30vw",
//             x: i % 2 === 0 ? "-100vw" : "100vw",
//             rotation: 60,
//           }, i * 0.4);
//         }
//       );
//     }

//     // Hero animation
//     const split = SplitText.create(".cover_subtitle", {
//       type: "words, chars",
//     });

//     gsap.from(".cover_title", {
//       duration: 1,
//       y: 20,
//       opacity: 0,
//     });

//     gsap.from(split.words, {
//       duration: 1.5,
//       y: 20,
//       opacity: 0,
//       stagger: 0.1,
//     });

//     gsap.from(".cover_button", {
//       delay: 0.2,
//       duration: 1.5,
//       y: 20,
//       opacity: 0,
//       stagger: 0.1,
//     });
//   }, []);

//   return null; // No UI component needed

  
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Flip } from "gsap/Flip";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(Draggable, ScrollTrigger, Flip, SplitText);

// export default function PageEffects() {
//   useEffect(() => {
//     // GSAP Animations
//     const skills = document.querySelector(".skill_container");
//     if (skills) {
//       skills.addEventListener("mouseover", () => {
//         const width = window.innerWidth;

//         const animationValues = {
//           xl: [
//             [230, 250, 20],
//             [-540, -160, 40],
//             [-300, 240, -20],
//             [500, -150, -30],
//             [-40, -150, -20],
//           ],
//           lg: [
//             [200, 210, 20],
//             [-370, -170, 30],
//             [-180, 200, -20],
//             [360, -150, 20],
//             [0, -170, -20],
//           ],
//           md: [
//             [120, 120, 40],
//             [-240, -170, 20],
//             [-140, 120, -40],
//             [220, -150, 20],
//             [0, -170, -20],
//           ],
//           sm: [
//             [160, 230, 30],
//             [-200, -100, 30],
//             [-160, 230, -30],
//             [200, -100, -30],
//             [0, 40, 0],
//           ],
//         };

//         const values =
//           width > 1280
//             ? animationValues.xl
//             : width > 1024
//             ? animationValues.lg
//             : width > 768
//             ? animationValues.md
//             : animationValues.sm;

//         ["#front", "#illustration", "#web", "#branding", "#motion"].forEach(
//           (id, i) =>
//             gsap.to(id, {
//               x: values[i][0],
//               y: values[i][1],
//               rotation: values[i][2],
//               ease: "power1.out",
//             })
//         );
//       });

//       if (window.innerWidth > 640) {
//         skills.addEventListener("mouseleave", () => {
//           gsap.to("#front", { x: 0, y: 0, rotation: -10 });
//           gsap.to("#illustration", { x: 0, y: 0, rotation: -40 });
//           gsap.to("#web", { x: 0, y: 0, rotation: -20 });
//           gsap.to("#branding", { x: 0, y: 0, rotation: -40 });
//           gsap.to("#motion", { x: 0, y: 0, rotation: 40 });
//         });
//       }
//     }

//     // Scroll project fade-ins
//     gsap.utils.toArray(".project").forEach((project) => {
//       gsap.from(project, {
//         scrollTrigger: {
//           trigger: project,
//           start: "-700 top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//         opacity: 0,
//         y: 50,
//         duration: 1,
//       });
//     });

//     // About section
//     const aboutTrigger = document.querySelector(".about");
//     if (aboutTrigger) {
//       const number = Math.floor(Math.random() * 5 + 1);

//       gsap.from(".about_1", {
//         scrollTrigger: {
//           trigger: ".about",
//           start: window.innerWidth > 768 ? "-200 top" : "-400 top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//         opacity: 0,
//         y: 20,
//         duration: 2,
//         stagger: 1,
//       });

//       gsap.to(`.my_photo_${number}`, {
//         scrollTrigger: {
//           trigger: ".about",
//           pin: true,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//         opacity: 1,
//         duration: 3,
//       });
//     }

//     // Mobile cards fly-in animation
//     if (window.innerWidth < 640 && navigator.maxTouchPoints > 0) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".skill_container",
//           start: "top top",
//           end: "+=2000",
//           scrub: true,
//           pin: true,
//         },
//       });

//       ["#motion", "#branding", "#illustration", "#web", "#front"].forEach(
//         (id, i) => {
//           tl.from(
//             id,
//             {
//               y: i % 2 === 0 ? "-30vw" : "30vw",
//               x: i % 2 === 0 ? "-100vw" : "100vw",
//               rotation: 60,
//             },
//             i * 0.4
//           );
//         }
//       );
//     }

//     // Hero animation
//     const split = SplitText.create(".cover_subtitle", {
//       type: "words, chars",
//     });

//     gsap.from(".cover_title", {
//       duration: 1,
//       y: 20,
//       opacity: 0,
//     });

//     gsap.from(split.words, {
//       duration: 1.5,
//       y: 20,
//       opacity: 0,
//       stagger: 0.1,
//     });

//     gsap.from(".cover_button", {
//       delay: 0.2,
//       duration: 1.5,
//       y: 20,
//       opacity: 0,
//       stagger: 0.1,
//     });

//     // 🔽 Manual scroll to hash section after everything is ready
//     // const scrollToHashTarget = () => {
//     //   const hash = window.location.hash;
//     //   if (hash) {
//     //     setTimeout(() => {
//     //       const target = document.querySelector(hash);
//     //       if (target) {
//     //         target.scrollIntoView({ behavior: "smooth" });
//     //       }
//     //     }, 300); // Delayed scroll so DOM + animations settle first
//     //   }
//     // };

//     // scrollToHashTarget();
//     // window.addEventListener("hashchange", scrollToHashTarget);

//     // return () => {
//     //   window.removeEventListener("hashchange", scrollToHashTarget);
//     // };
//   }, []);

//   return null;
// }




import { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Draggable, ScrollTrigger, Flip, SplitText);

export default function GsapScripts() {
  useEffect(() => {
    // Menu open/close functions
    const closeMenu = () => {
      document.querySelector(".menu")?.classList.add("close");
      document.querySelector(".menu")?.classList.remove("open");
    };

    const openMenu = () => {
      document.querySelector(".menu")?.classList.add("open");
      document.querySelector(".menu")?.classList.remove("close");
    };

    // Event listeners for menu buttons and links
    const menuCloseEl = document.querySelector(".menu_close");
    const menuOpenEl = document.querySelector(".menu_open");
    const link1El = document.querySelector(".link_1");
    const link2El = document.querySelector(".link_2");
    const link3El = document.querySelector(".link_3");

    menuCloseEl?.addEventListener("click", closeMenu);
    link1El?.addEventListener("click", closeMenu);
    link2El?.addEventListener("click", closeMenu);
    link3El?.addEventListener("click", closeMenu);
    menuOpenEl?.addEventListener("click", openMenu);

    // Skill container mouseover animations
    const skillContainer = document.querySelector(".skill_container");

    const skillMouseOver = () => {
      if (window.innerWidth > 1280) {
        gsap.to("#front", { x: 230, y: 250, rotation: 20, ease: "power1.out" });
        gsap.to("#illustration", { x: -540, y: -160, rotation: 40, ease: "power1.out" });
        gsap.to("#web", { x: -300, y: 240, rotation: -20, ease: "power1.out" });
        gsap.to("#branding", { x: 500, y: -150, rotation: -30, ease: "power1.out" });
        gsap.to("#motion", { x: -40, y: -150, rotation: -20, ease: "power1.out" });
      } else if (window.innerWidth > 1024) {
        gsap.to("#front", { x: 200, y: 210, rotation: 20, ease: "power1.out" });
        gsap.to("#illustration", { x: -370, y: -170, rotation: 30, ease: "power1.out" });
        gsap.to("#web", { x: -180, y: 200, rotation: -20, ease: "power1.out" });
        gsap.to("#branding", { x: 360, y: -150, rotation: 20, ease: "power1.out" });
        gsap.to("#motion", { x: 0, y: -170, rotation: -20, ease: "power1.out" });
      } else if (window.innerWidth > 768) {
        gsap.to("#front", { x: 120, y: 120, rotation: 40, ease: "power1.out" });
        gsap.to("#illustration", { x: -240, y: -170, rotation: 20, ease: "power1.out" });
        gsap.to("#web", { x: -140, y: 120, rotation: -40, ease: "power1.out" });
        gsap.to("#branding", { x: 220, y: -150, rotation: 20, ease: "power1.out" });
        gsap.to("#motion", { x: 0, y: -170, rotation: -20, ease: "power1.out" });
      } else if (window.innerWidth < 768) {
        gsap.to("#front", { x: 160, y: 230, rotation: 30, ease: "power1.out" });
        gsap.to("#illustration", { x: -200, y: -100, rotation: 30, ease: "power1.out" });
        gsap.to("#web", { x: -160, y: 230, rotation: -30, ease: "power1.out" });
        gsap.to("#branding", { x: 200, y: -100, rotation: -30, ease: "power1.out" });
        gsap.to("#motion", { x: 0, y: 40, rotation: 0, ease: "power1.out" });
      }
    };

    const skillMouseLeave = () => {
      gsap.to("#front", { x: 0, y: 0, rotation: -10, ease: "power1.out" });
      gsap.to("#illustration", { x: 0, y: 0, rotation: -40, ease: "power1.out" });
      gsap.to("#web", { x: 0, y: 0, rotation: -20, ease: "power1.out" });
      gsap.to("#branding", { x: 0, y: 0, rotation: -40, ease: "power1.out" });
      gsap.to("#motion", { x: 0, y: 0, rotation: 40, ease: "power1.out" });
    };

    skillContainer?.addEventListener("mouseover", skillMouseOver);

    if ( navigator.maxTouchPoints == 0 ) {
      skillContainer?.addEventListener("mouseleave", skillMouseLeave);
    }

    // Animate projects
    const projects = gsap.utils.toArray(".project");
    projects.forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "-700 top",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power1.out",
      });
    });

    // About animations
    if (window.innerWidth > 768) {
      gsap.from(".about_1", {
        scrollTrigger: {
          trigger: ".about",
          start: "-200 top",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
        opacity: 0,
        y: 20,
        duration: 3,
        ease: "power1.out",
        stagger: 1,
      });

      let number = Math.floor(Math.random() * 5) + 1;
      if (window.location.href === "http://local.mysite.com:8080/") {
        number = Math.floor(Math.random() * 5) + 1;
      }

      gsap.to(`.my_photo_${number}`, {
        scrollTrigger: {
          trigger: ".about",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
        opacity: 1,
        duration: 3,
        ease: "power2.out",
      });
    }

    if (window.innerWidth < 640 && navigator.maxTouchPoints > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill_container",
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });

      const cards = ["#motion", "#branding", "#illustration", "#web", "#front"];
      cards.forEach((cardId, i) => {
        tl.from(
          cardId,
          {
            y: i % 2 === 0 ? "-30vw" : "30vw",
            x: i % 2 === 0 ? "-100vw" : "100vw",
            rotation: 60,
            ease: "power1.out",
          },
          i * 0.4
        );
      });
    }

    if (window.innerWidth < 768) {
      gsap.from(".about_1", {
        scrollTrigger: {
          trigger: ".about",
          start: "-400 top",
          end: "bottom+=200 bottom",
          scrub: true,
          // markers: true,
        },
        opacity: 0,
        y: 20,
        duration: 2,
        ease: "power1.out",
        stagger: 1,
      });

      let number = Math.floor(Math.random() * 5) + 1;
      if (window.location.href === "http://local.mysite.com:8080/") {
        number = Math.floor(Math.random() * 5) + 1;
      }

      gsap.to(`.my_photo_${number}`, {
        scrollTrigger: {
          pin: true,
          trigger: ".about",
          start: "80% 80%",
          end: "bottom 200",
          scrub: true,
          // markers: true,
        },
        opacity: 1,
        duration: 3,
        ease: "power2.out",
      });
    }

    // SplitText animations
    let split = SplitText.create(".cover_subtitle", { type: "words, chars" });

    gsap.from(".cover_title", {
      duration: 1,
      y: 20,
      opacity: 0,
    });
    gsap.from(split.words, {
      duration: 1.5,
      y: 20,
      opacity: 0,
      stagger: 0.1,
    });
    gsap.from(".cover_button", {
      delay: 0.2,
      duration: 1.5,
      y: 20,
      opacity: 0,
      stagger: 0.1,
    });

    // Cleanup on unmount
    return () => {
      menuCloseEl?.removeEventListener("click", closeMenu);
      link1El?.removeEventListener("click", closeMenu);
      link2El?.removeEventListener("click", closeMenu);
      link3El?.removeEventListener("click", closeMenu);
      menuOpenEl?.removeEventListener("click", openMenu);
      skillContainer?.removeEventListener("mouseover", skillMouseOver);
      if (window.innerWidth > 640) {
        skillContainer?.removeEventListener("mouseleave", skillMouseLeave);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return null; // No UI rendered by this component
}
