document.addEventListener("DOMContentLoaded", () => {

    const html = document.documentElement;
    let theme = html.getAttribute("data-bs-theme");

    const toggleButton = document.getElementById("themeToggler");
    const themeIcons = document.querySelectorAll(".themeIcon");
    const navBar = document.querySelector(".navbar");
    const footer = document.getElementById("site-footer")

    // Toggle theme on button click
    toggleButton.addEventListener("click", () => {
        if (theme === "dark") {
            theme = "light";

            html.setAttribute("data-bs-theme", theme);

            document.body.classList.remove("body-dark");
            document.body.classList.add("body-light");

            navBar.classList.remove("navi-dark");
            navBar.classList.add("navi-light");

            themeIcons.forEach((icon) => {
                icon.classList.remove("bi-brightness-high-fill");
                icon.classList.add("bi-moon-stars-fill");
            });

            footer.classList.add("text-dark");
            footer.classList.remove("footer-dark");
            footer.classList.add("footer-light");

        } else {
            theme = "dark";

            html.setAttribute("data-bs-theme", theme);

            document.body.classList.remove("body-light");
            document.body.classList.add("body-dark");

            navBar.classList.remove("navi-light");
            navBar.classList.add("navi-dark");

            themeIcons.forEach((icon) => {
                icon.classList.remove("bi-moon-stars-fill");
                icon.classList.add("bi-brightness-high-fill");
            });

            footer.classList.remove("text-dark");
            footer.classList.remove("footer-light");
            footer.classList.add("footer-dark");
        };
    });
});
