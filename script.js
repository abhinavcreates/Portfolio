document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

  // Theme 
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    const isLightTheme = body.classList.contains("light-theme");
    toggleBtn.textContent = isLightTheme ? "Dark Theme" : "Light Theme";
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
  });

  // Check for saved theme 
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-theme");
    toggleBtn.textContent = "Dark Theme";
  } else {
    toggleBtn.textContent = "Light Theme";
  }

  //   hero section
  var typed = new Typed("#typed-text-target", {
    strings: ["Creative Coder", "Web Developer", "Designer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    cursorChar: '_'
  });

  // Update current year in the footer
  const currentYearSpan = document.getElementById("currentYear");
  currentYearSpan.textContent = new Date().getFullYear();
});
