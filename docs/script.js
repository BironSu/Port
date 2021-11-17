window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const sections = document.querySelectorAll("p.anchor");
    const navBar = document.querySelectorAll(".container table tr td");
    window.onscroll = () => {
        var current = "";
      
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id"); }
        });
      
        navBar.forEach((td) => {
          td.classList.remove("active");
          if (td.classList.contains(current)) {
            td.classList.add("active");
          }
        });
      };
});