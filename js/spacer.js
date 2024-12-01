document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");
    const spacers = document.querySelectorAll(".spacer");

    const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
            spacers.forEach((spacer) => {
                spacer.style.height = entry.contentRect.height + 'px';
            });
        };
    });

    observer.observe(header);


});

