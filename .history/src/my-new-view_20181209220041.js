import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyNewView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;
                    padding: 10px;
                }
            </style>

            <custom-card>
                <div class="circle"></div>
                <h1>New Views</h1>
                <p>New View!</p>
            </custom-card>
        `;
    }
}
window.customElements.define('my-new-views', MyNewViews)