document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");
    // const spacers = document.querySelectorAll(".spacer");
    const spacers = document.querySelectorAll("section");

    const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
            spacers.forEach((spacer) => {
                // spacer.style.height = entry.contentRect.height + 'px';
                // spacer.style.top = entry.contentRect.width + 'px';
            });
        };
    });

    observer.observe(header);


});

