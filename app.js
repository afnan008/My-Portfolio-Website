window.addEventListener("load", () => {
  const loader = document.getElementById("intro-loader");
  const flash = document.getElementById("flash-light");

  setTimeout(() => {
    loader.style.opacity = "0";

    flash.classList.add("flash-active");

    setTimeout(() => {
      loader.remove();

      document.body.classList.remove("preload");

      document.querySelectorAll(
        ".autoBlur, .autoDisplay, .fadein-left, .gradient"
      ).forEach(el => {
        el.style.animation = "none";
        el.offsetHeight;
        el.style.animation = "";
      });

      AOS.init({
        once: true,
        duration: 1800,
        easing: "ease-out-cubic"
      });

      AOS.refreshHard();

      setTimeout(() => {
        flash.remove();
      }, 600);

    }, 300);
  }, 2000); 
});



const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const closeIcon = document.querySelector(".close-icon");

// open sidebar
menuIcon.addEventListener("click", () => {
  sidebar.classList.remove("close-sidebar");
  sidebar.classList.add("open-sidebar");
});

// close sidebar
closeIcon.addEventListener("click", () => {
  sidebar.classList.remove("open-sidebar");
  sidebar.classList.add("close-sidebar");
});
