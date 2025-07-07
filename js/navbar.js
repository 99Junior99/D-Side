document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let menuToggle = document.getElementById("menuToggle");
        let menuClose = document.getElementById("menuClose");
        let navMenu = document.getElementById("navMenu");

        if (!menuToggle || !menuClose || !navMenu) {
            console.warn("O menuToggle, menuClose ou navMenu não foi encontrado. Verifique os IDs.");
            return;
        }

        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            navMenu.classList.add("active");
            menuToggle.style.display = "none";  
            menuClose.style.display = "block";  
        });

        menuClose.addEventListener("click", function (event) {
            event.stopPropagation();
            navMenu.classList.remove("active");
            menuClose.style.display = "none";  
            menuToggle.style.display = "none";  
        });

        document.addEventListener("click", function (event) {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target) && !menuClose.contains(event.target)) {
                navMenu.classList.remove("active");
                menuClose.style.display = "none";  
                menuToggle.style.display = "fixed"; 
            }
        });
    }, 500); 
});
