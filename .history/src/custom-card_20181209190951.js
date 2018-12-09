import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CustomCard extends PolymerElement {
    static get template() {
        return html`
        <style>
            :host {
                display: block;
            },
            .card {
                margin: 24px;
                padding: 16px;
                color: #757575;
                border-radius: 5px;
                background-color: #fff;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
            }
            
        `;
    }
    constructor() {
        super();
    }
}

customElements.define('custom-card', CustomCard);