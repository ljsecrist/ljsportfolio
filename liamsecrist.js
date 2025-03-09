document.querySelectorAll(".more-info-btn").forEach(button => {
    button.addEventListener("click", function() {
        let details = this.nextElementSibling;
        details.classList.toggle("show");
        this.textContent = details.classList.contains("show") ? "Hide Info" : "More Info";
    });
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        let targetId = this.getAttribute("href").substring(1);
        let targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.remove("highlight-section");
            setTimeout(() => {
                targetSection.classList.add("highlight-section");
            }, 10);
        }
    });
});

document.addEventListener("scroll", function () {
    let floatingName = document.getElementById("floating-name");
    if (window.scrollY > 50) {
        floatingName.classList.remove("hidden");
    } else {
        floatingName.classList.add("hidden");
    }
});

document.addEventListener("scroll", function () {
    let floatingName = document.getElementById("floating-name");
    if (window.scrollY > 50) {
        floatingName.classList.add("visible");
    } else {
        floatingName.classList.remove("visible");
    }
});

