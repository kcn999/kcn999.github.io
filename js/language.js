document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll("[data-language]");
    const languageLinks = document.querySelectorAll("[data-lang]");

    function setLanguage(language) {
        contents.forEach((content) => {
            content.hidden = content.dataset.language !== language;
        });

        languageLinks.forEach((link) => {
            link.classList.toggle(
                "active",
                link.dataset.lang === language
            );
        });
    }

    function getLanguage() {
        return window.location.hash === "#zh" ? "zh" : "en";
    }

    function updateLanguage() {
        setLanguage(getLanguage());
    }

    updateLanguage();

    window.addEventListener("hashchange", updateLanguage);

    if (typeof renderMathInElement === "function") {
        renderMathInElement(document.body, {
            delimiters: [
                { left: "\\[", right: "\\]", display: true },
                { left: "\\(", right: "\\)", display: false }
            ],
            throwOnError: false
        });
    }
});
