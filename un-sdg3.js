/**
 * Copyright 2024 AAfwan1
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `un-sdg3`
 * A reusable web component for SDG 3 goals, offering localization, slot usage, and customizable styles.
 *
 * @demo index.html
 * @element un-sdg3
 */
export class UnSdg3 extends DDDSuper(I18NMixin(LitElement)) {
  // Define the tag name for this custom element
  static get tag() {
    return "un-sdg3";
  }

  constructor() {
    super();
    // Initializes the title property and translation object
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Ensure healthy lives and promote well-being for all at all ages", // Updated SDG 3 title
    };

    // Register localization settings and paths for translations
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/un-sdg3.ar.json", import.meta.url).href + "/../",
      locales: ["ar", "es", "hi", "zh"], // Supported language options
    });
  }

  /**
   * Declare Lit reactive properties.
   * These properties trigger re-rendering when they are updated.
   */
  static get properties() {
    return {
      ...super.properties,
      title: { type: String }, // Represents the SDG 3 title
    };
  }

  /**
   * Styles scoped to this component.
   * Uses CSS custom properties for flexibility and theme support.
   */
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary); /* Primary color */
          background-color: var(--ddd-theme-accent); /* Accent background */
          font-family: var(--ddd-font-navigation); /* Navigation font style */
        }
        .wrapper {
          margin: var(--ddd-spacing-2); /* External spacing */
          padding: var(--ddd-spacing-4); /* Internal spacing */
        }
        h3 span {
          font-size: var(
            --un-sdg3-label-font-size,
            var(--ddd-font-size-s)
          ); /* Font size for the label */
        }
      `,
    ];
  }

  /**
   * Render the HTML template for this component.
   * Includes a title and slot for dynamic content insertion.
   */
  render() {
    return html`
      <div class="wrapper">
        <h3><span>${this.t.title}:</span> ${this.title}</h3>
        <slot></slot> <!-- Slot for user-provided content -->
      </div>
    `;
  }

  /**
   * Provide HAX properties via an external JSON file.
   * Facilitates easy integration with the HAX ecosystem.
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

// Register the custom element in the browser
globalThis.customElements.define(UnSdg3.tag, UnSdg3);
