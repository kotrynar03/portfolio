


import { useEffect } from "react";

export default function MenuController() {
  useEffect(() => {
    const openMenu = () => {
      document.querySelector(".menu")?.classList.add("open");
      document.querySelector(".menu")?.classList.remove("close");
    };

    const closeMenu = () => {
      document.querySelector(".menu")?.classList.add("close");
      document.querySelector(".menu")?.classList.remove("open");
    };

    const scrollToHashTarget = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Delay ensures DOM has rendered
      }
    };

    const openBtn = document.querySelector(".menu_open");
    const closeBtn = document.querySelector(".menu_close");
    const link1 = document.querySelector(".link_1");
    const link2 = document.querySelector(".link_2");
    const link3 = document.querySelector(".link_3");

    openBtn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);
    link1?.addEventListener("click", closeMenu);
    link2?.addEventListener("click", closeMenu);
    link3?.addEventListener("click", closeMenu);

    // Scroll on initial load (for homepage with hash)
    scrollToHashTarget();

    // Also scroll if user navigates with back/forward buttons or hash updates
    window.addEventListener("hashchange", scrollToHashTarget);

    return () => {
      openBtn?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
      link1?.removeEventListener("click", closeMenu);
      link2?.removeEventListener("click", closeMenu);
      link3?.removeEventListener("click", closeMenu);
      window.removeEventListener("hashchange", scrollToHashTarget);
    };
  }, []);

  return null;
}



