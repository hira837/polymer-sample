import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CustomButton extends PolymerElement {
    static get template() {
        return html`
        <style>
            :host {
                display: block;
            }
            button {
                font-weight: 400;
                line-height: 1.25;
                border: 1px solid transparent;
                padding: .5rem 1rem;
                font-size: 1rem;
                border-radius: .25rem;
                color: #fff;
                background-color: var(--app-primary-color, blue);
                transition: all .2s ease-in-out;
            }
        </style>
        <button type="button" name="button">Hello!!</button>
        `;
    } 
    constructor() {
        super();
    }  
}
customElements.define('custom-button', CustomButton);