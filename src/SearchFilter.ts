import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import "@material/mwc-button";
import "@material/mwc-textfield";
import "@material/mwc-checkbox";
import "@material/mwc-formfield";

export class SearchFilter extends LitElement {
  @property() onSubmit = (v: any) => {};

  static styles = css``;

  render() {
    return html`
      <p>arrival:</p>
      <p>
        <mwc-textfield
          id="arrivalDate"
          type="date"
          placeholder="arrival Date"
        />
      </p>
      <p>departure:</p>
      <p>
        <mwc-textfield
          id="departureDate"
          type="date"
          placeholder="Departure Date"
        />
      </p>
      <p>
        <mwc-textfield id="firstName" type="text" placeholder="First Name" />
      </p>
      <p>
        <mwc-textfield id="lastName" type="text" placeholder="Last Name" />
      </p>
      <p>
        <mwc-textfield id="phone" type="text" placeholder="Phone" />
      </p>
      <p>
        <mwc-textfield id="email" type="text" placeholder="Email" />
      </p>
      <mwc-button
        unelevated
        label="submit"
        type="submit"
        class="custom"
        @click=${this._onSubmit}
      ></mwc-button>
    `;
  }

  private _onSubmit = () => {
    const payload = {} as any;
    const fields = this.shadowRoot!.querySelectorAll(
      "mwc-textfield, mwc-select, mwc-checkbox, mwc-radio"
    );
    // console.log(fields);

    fields.forEach((field: any) => {
      if (field.tagName === "MWC-TEXTFIELD" || field.tagName === "MWC-SELECT") {
        payload[field.id] = field.value;
      }

      if (field.tagName === "MWC-CHECKBOX") {
        payload[field.id] = field.checked;
      }

      if (field.tagName === "MWC-RADIO" && field.checked) {
        payload[field.id] = field.value;
      }
    });

    // console.log(payload);
    // if (this.isFormValid) {
    //   console.log(payload);
    //   alert('Your submission logic goes here!');
    // }
    this.onSubmit(payload);
  };
}

customElements.define("search-filter", SearchFilter);
