import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyNewView extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">

            </style>
        `
    }
}