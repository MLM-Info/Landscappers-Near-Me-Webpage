document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("closeBtn");
    const backdrop = document.getElementById("sidebarBackdrop");
    const sidebarLinks = document.querySelectorAll(".sidebar-links a");
  
    function openSidebar() {
      sidebar.classList.add("active");
      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  
    function closeSidebar() {
      sidebar.classList.remove("active");
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  
    hamburger.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    backdrop.addEventListener("click", closeSidebar);
    sidebarLinks.forEach(link => link.addEventListener("click", closeSidebar));
  });
  