class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="header">
                <a class="header-button" id="home" href="index.html">Home</a>
                <a class="header-button" id="about" href="about.html">About</a>
                <a class="header-button" id="projects" href="projects.html">Projects</a>
                <a class="header-button" id="blog" href="blog.html">Blog</a>
                <a class="header-button" id="contact" href="contact.html">Contact Me</a>
            </div>
        `;
    }
}

customElements.define('header-component', Header);
