import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import "@material/mwc-button";
import "@material/mwc-checkbox";
import "@material/mwc-formfield";
import "@material/mwc-select";
import "@material/mwc-list";
import "@material/mwc-textfield";
import "@material/mwc-textarea";
import "@material/mwc-switch";

export class ReservationForm extends LitElement {
  @property() onSubmit = (v: any) => {};

  static styles = css``;

  render() {
    return html`
      <form>
        <p>arrival:</p>
        <div></div>
        <div>
          <div>
            <mwc-formfield label="Send me a reminder">
              <mwc-textfield
                id="arrivalDate"
                lable="Date of Arrival"
                type="date"
                placeholder="arrival Date"
                required
              />
            </mwc-formfield>
          </div>
          <div>
            <p>departure:</p>
            <mwc-textfield
              id="departureDate"
              type="date"
              placeholder="Departure Date"
              required
            />
          </div>
        </div>
        <div>
          <mwc-textfield
            id="roomSize"
            type="text"
            placeholder="Room Size"
            required
          />
        </div>
        <div>
          <mwc-textfield
            id="roomQuantity"
            min="1"
            max="5"
            type="number"
            required
          />
        </div>
        <div>
          <mwc-textfield
            id="firstName"
            type="text"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <mwc-textfield
            id="lastName"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <mwc-textfield id="email" type="text" placeholder="Email" required />
        </div>
        <div>
          <mwc-textfield id="phone" type="text" placeholder="Phone" required />
        </div>
        <div>
          <mwc-textfield
            id="streenName"
            type="text"
            placeholder="Street Name"
            required
          />
        </div>
        <div>
          <mwc-textfield
            id="streenNumber"
            type="text"
            placeholder="Streen Number"
            required
          />
        </div>
        <div>
          <mwc-textfield id="zip" type="text" placeholder="ZIP" required />
        </div>
        <div>
          <mwc-textfield id="state" type="text" placeholder="State" required />
        </div>
        <div>
          <mwc-textfield id="city" type="text" placeholder="City" required />
        </div>
        <div>
          <mwc-textarea id="note" type="text" placeholder="Note" />
        </div>
        <div>
          <mwc-formfield label="Send me a reminder">
            <mwc-switch selected id="reminder"></mwc-switch>
          </mwc-formfield>
        </div>
        <div>
          <mwc-formfield label="Subscribe to newsletter">
            <mwc-switch selected id="subscribe"></mwc-switch>
          </mwc-formfield>
        </div>
        <div>
          <mwc-formfield label="I confirm the information given above">
            <mwc-checkbox checked id="confirm"></mwc-checkbox>
          </mwc-formfield>
        </div>
        <mwc-button
          unelevated
          label="save"
          type="submit"
          class="custom"
          @click=${this._onSubmit}
        ></mwc-button>
      </form>
    `;
  }

  private _onSubmit = () => {
    const payload = {} as any;
    const fields = this.shadowRoot!.querySelectorAll(
      "mwc-textfield, mwc-select, mwc-checkbox, mwc-radio, mwc-switch, mwc-textarea, mwc-switch"
    );
    // console.log(fields);

    fields.forEach((field: any) => {
      // console.log(field.tagName, field.id, field.value);

      // if (field.tagName === "MWC-TEXTFIELD" || field.tagName === "MWC-SELECT") {
      // }

      if (
        field.tagName === "MWC-CHECKBOX" ||
        field.tagName === "MWC-RADIO" ||
        field.tagName === "MWC-SWITCH"
      ) {
        // console.log("check", field.checked);
        payload[field.id] = field.checked;
      } else {
        payload[field.id] = field.value;
      }
    });

    console.log(payload);
    // if (this.isFormValid) {
    //   console.log(payload);
    //   alert('Your submission logic goes here!');
    // }
    this.onSubmit(payload);
  };
}

customElements.define("reservation-form", ReservationForm);
