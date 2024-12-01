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
                    section.classList.add("d-block");
                    section.classList.remove("d-none");
                } else {
                    section.classList.remove("d-block");
                    section.classList.add("d-none");
                }
            });

        });
    });

    sections.forEach((section) => {
        console.log(section.id)
    });



});