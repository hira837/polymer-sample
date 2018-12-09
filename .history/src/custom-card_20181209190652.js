import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CustomCard extends PolymerElement {
    static get template() {
        return html``;
    }
    constructor() {
        super();
    }
}

customElements.define('custom-card', CustomCard);