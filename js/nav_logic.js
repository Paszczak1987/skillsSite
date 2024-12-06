document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        document.getElementById("about"),
        document.getElementById("skills"),
        document.getElementById("learning")
    ]

    const links = [
        document.getElementById("about_lnk"),
        document.getElementById("skills_lnk"),
        document.getElementById("learning_lnk")
    ]

    links.forEach((link) => {
        link.addEventListener('click', function (e) {
            link_id = e.target.id.slice(0, -4);

            sections.forEach((section) => {
                if (link_id === section.id) {
                    section.classList.remove("hide");
                    setTimeout(() => {
                        section.classList.add("appear");
                    }, 500);
                } else {
                    section.classList.add("hide");
                    section.classList.remove("appear");
                }
            });

        });
    });

});
