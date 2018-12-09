import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CustomButton extends PolymerElement {
    static get template() {
        return html `
        <style>
            :host {
                display: block;
            }
            button {
                color: blue;
            }
        `;
    }   
}