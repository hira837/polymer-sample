/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/custom-button.js';
import './custom-card.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <custom-card>
          <span slot="number">1</span>
          <span slot="title">Views One</span>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p slot="text">
          Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, 
          sit elit oportere ea.Lorem ipsum dolor sit amet, 
          per in nusquam nominavi periculis, sit elit oportere ea.
          Cu mei vide viris gloriatur, at populo eripuit sit.</p>
          <span slot="notShow">Lorem ipsum dolor</span>
        <custom-button 
          button-text="Click Me!" 
          button-type="button"></custom-button>
      </custom-card>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
import './components/custom-button.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <custom-card>
          <span slot="number">1</span>
          <span slot="title">Views One</span>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p slot="text">
          Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, 
          sit elit oportere ea.Lorem ipsum dolor sit amet, 
          per in nusquam nominavi periculis, sit elit oportere ea.
          Cu mei vide viris gloriatur, at populo eripuit sit.</p>
          <span slot="notShow">Lorem ipsum dolor</span>
        <custom-button 
          button-text="Click Me!" 
          button-type="button"></custom-button>
      </custom-card>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
