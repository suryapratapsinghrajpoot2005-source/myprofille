document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when a navigation item is clicked
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Lightbox Modal Functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  window.showLightbox = function (imageSrc, caption) {
    if (lightbox && lightboxImg && lightboxCaption) {
      lightboxImg.src = imageSrc;
      lightboxCaption.textContent = caption || "";
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    }
  };

  function hideLightbox() {
    if (lightbox) {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", hideLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        hideLightbox();
      }
    });
  }

  // Close modal via Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && lightbox.style.display === "flex") {
      hideLightbox();
    }
  });
});