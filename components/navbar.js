const template = document.createElement('template');
fetch('./components/navbar.html').then(response => {
    response.text().then(result => {
        template.innerHTML = result;
        createComponent();
    });
});
class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        const templateContent = template.content;
        this.getAttribute('data').split(",").map(value => {
            let li = document.createElement('li');
            li.innerHTML = value;
            li.setAttribute('class', 'ulbox-li');
            templateContent.getElementById('ulbox').innerHTML += li.outerHTML;
        });
        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
            templateContent.cloneNode(true)
        );
    }
}
const createComponent = () => customElements.define("navbar-component", NavbarComponent);
