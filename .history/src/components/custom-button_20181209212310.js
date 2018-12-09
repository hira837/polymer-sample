import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js';

class CustomButton extends PolymerElement {
    static get template() {
        return html`
        <style>
            :host {
                display: block;
            }
            :host([clicked]) button {
                background-color: #666;
            }
            :host([clicked]) button:hover {
                background-color: #666;
                color: #fff;
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
            button:hover {
                background-color: #fff;
                color: var(--app-primary-color, blue);
                border-color: var(--app-primary-color, blue);
            }
        </style>
        <button 
            type$="[[buttonType]]" 
            name="button"
            on-click="toggle">[[buttonText]]</button>
            <paper-checkbox>Unchecked</paper-checkbox>
            <paper-checkbox checked>Checked</paper-checkbox>
            <paper-checkbox disabled>Disabled</paper-checkbox>
        `;
    } 
    static get properties() {
        return {
            clicked: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true
            },
            buttonText: {
                type: String
            },
            buttonType: {
                type: String
            },
        };
    }
    constructor() {
        super();
        this.addEventListener('click', this.toggle.bind(this));
    }
    toggle() {
        this.clicked = !this.clicked;
    }  
}
customElements.define('custom-button', CustomButton);