import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import "@material/mwc-button";
import "@material/mwc-checkbox";
import "@material/mwc-formfield";
import "@material/mwc-select";
import "@material/mwc-list/mwc-list-item";
import "@material/mwc-textfield";
import "@material/mwc-textarea";
import "@material/mwc-switch";
import "@material/mwc-radio";
import { initialFormValues, roomOptions } from "./constant";

export class ReservationForm extends LitElement {
  @property() onSubmit = (v: object) => {};
  @property() onDelete = (v: object) => {};
  @property() initValues = initialFormValues;
  @property() formValue = initialFormValues;

  @state() isFormValid: boolean = false;

  static styles = css`
    .form {
      display: grid;
      gap: 10px;
      padding-bottom: 10px;
    }
  `;

  override async firstUpdated() {
    // avoid unnecessary calls by waiting for any pending updated to complete.
    this.formValue = this.initValues;
    await this.updateComplete;
    // console.log("init2", this.initValues);
  }

  render() {
    // console.log("init1", this.formValue);
    // console.log("newsletter", typeof this.formValue.newsletter);
    return html`
      <form>
        <div>
          <div>
              <mwc-textfield
                id="arrivalDate"
                label="Date of Arrival"
                type="date"
                placeholder="arrival Date"
                value=${this.formValue.arrivalDate}
                required
                validationMessage="Invalid"
                @blur=${() => this.checkFormValidity()}>
              />
          </div>
          <div>
            <mwc-textfield
              id="departureDate"
              label="Date of Departure"
              required
              validationMessage="Invalid"
              type="date"
              value=${this.formValue.departureDate}
              placeholder="Departure Date"
            />
          </div>
        </div>
        <div>
          <mwc-select
          required 
          name="country" 
          id="roomSize"
          label="Room Size"
          validationMessage="Invalid"
          value=${this.formValue.roomSize}
          @blur=${() => this.checkFormValidity()}>
          ${roomOptions.map(
            (v) =>
              html`<mwc-list-item value=${v.value}>${v.label}</mwc-list-item>`
          )}
        </mwc-select>
        </div>
        <div>
          <mwc-textfield
            id="roomQuantity"
            label="Quantity"
            min="1"
            max="5"
            type="number"
            required
            validationMessage="1 - 5"
            value=${this.formValue.roomQuantity}
                @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <div>
          <mwc-textfield
            id="firstName"
            type="text"
            required
            label="First Name"
            placeholder="First Name"
            value=${this.formValue.firstName}
            pattern="^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$"
            validationMessage="Invalid"
                @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <div>
          <mwc-textfield
            id="lastName"
            required
            type="text"
            label="Last Name"
            placeholder="Last Name"
            validationMessage="Invalid"
            pattern="^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$"
            value=${this.formValue.lastName}
            @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <div>
          <mwc-textfield id="email" type="text" placeholder="Email" required  label="Email" 
          validationMessage="Invalid"
            value=${this.formValue.email}
            @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <div>
          <mwc-textfield id="phone" type="text" placeholder="Phone" required  label="Phone"
          validationMessage="Invalid"
          value=${this.formValue.phone}
              @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <div>
          <mwc-textfield
            id="streetName"
            type="text"
            required
            placeholder="Street Name"
            label="Street Name"
            validationMessage="Invalid"
            value=${this.formValue.streetName}
            @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <div>
          <mwc-textfield
            id="streetNumber"
            type="text"
            placeholder="Street Number"
            label="Street Number"
            validationMessage="Invalid"
            value=${this.formValue.streetNumber}
                @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <div>
          <mwc-textfield id="zipCode" type="text" placeholder="ZIP" required 
          label="ZIP"
          validationMessage="Invalid"
          value=${this.formValue.zipCode}
              @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <div>
          <mwc-textfield id="state" type="text" placeholder="State" required label="State"
          validationMessage="Invalid"
          value=${this.formValue.state}
              @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <div>
          <mwc-textfield id="city" type="text" placeholder="City" required 
          label="City"
          validationMessage="Invalid"
          value=${this.formValue.city}
              @blur=${() => this.checkFormValidity()}>
          />
        </div>
        <mwc-formfield label="Credit card">
        <mwc-radio ?checked=${
          this.formValue.payment === "cc"
        } id="payment" value="cc"></mwc-radio>
      </mwc-formfield>
      <mwc-formfield label="PayPal">
        <mwc-radio ?checked=${
          this.formValue.payment === "pp"
        } id="payment" value="pp"></mwc-radio>
        </mwc-formfield>
      <mwc-formfield label="Cash">
        <mwc-radio ?checked=${
          this.formValue.payment === "cash"
        } id="payment" value="cash"></mwc-radio>
      </mwc-formfield>
      <mwc-formfield label="Bitcoin">
        <mwc-radio ?checked=${
          this.formValue.payment === "bit"
        } id="payment" value="bit"></mwc-radio>
      </mwc-formfield>
        <div>
          <mwc-textarea id="note" type="text" placeholder="Note" label="Note"
          value=${this.formValue.note}
          />
        </div>
        <br/>
        <div>
          <mwc-formfield label="Send me a reminder">
            <mwc-switch ?checked=${
              this.formValue.reminder
            } id="reminder" name="reminder"
            ></mwc-switch>
          </mwc-formfield>
        </div>
        <br/>
        <div>
          <mwc-formfield label="Subscribe to newsletter"
          >
            <mwc-switch ?checked=${
              this.formValue.newsletter
            } id="newsletter" name="newsletter"></mwc-switch>
          </mwc-formfield>
        </div>
        <div>
          <mwc-formfield label="I confirm the information given above">
            <mwc-checkbox ?checked=${
              this.formValue.confirm
            } id="confirm" ></mwc-checkbox>
          </mwc-formfield>
        </div>
        <div ?hidden=${!this.formValue.key}>
          <mwc-button
          unelevated
          label="delete"
          class="custom"
          @click=${this.onDelete}>
        </mwc-button>
        </div>
        <br/>
        <div>
          <mwc-button
            unelevated
            ?disabled=${!this.isFormValid} 
            label="save"
            type="submit"
            class="custom"
            @click=${this._onSubmit}
          ></mwc-button>
        </div>
      </form>
    `;
  }

  private checkFormValidity = () => {
    const requiredFields = this.shadowRoot!.querySelectorAll("[required]");
    const validFields: Boolean[] = []; // stores the validity of all required fields

    requiredFields.forEach((field, k) => {
      // validFields.push(field.validity.valid);
      const {
        value,
        validity: { valid },
      } = field as any;
      // field.id === "firstName" && console.log(valid);
      validFields.push(valid);
      this.isFormValid = !validFields.includes(false);
    });
  };

  private _onSubmit = () => {
    const payload = {} as any;
    const fields = this.shadowRoot!.querySelectorAll(
      "mwc-textfield, mwc-select, mwc-checkbox, mwc-radio, mwc-switch, mwc-textarea, mwc-switch, mwc-list"
    );
    // console.log(fields);

    fields.forEach((field: any) => {
      // console.log(field.tagName, field.id, field.value);
      // if (field.id === "test") {
      //   console.log(field);
      //   console.log("list");
      // }
      // console.log(field);
      if (
        field.tagName === "MWC-CHECKBOX" ||
        field.tagName === "MWC-RADIO" ||
        field.tagName === "MWC-SWITCH"
      ) {
        if (field.id === "payment") {
          if (field.checked) {
            //only set value of checked payment method
            payload[field.id] = field.value;
          }
        } else {
          payload[field.id] = field.checked;
        }
      } else {
        payload[field.id] = field.value;
      }
    });

    console.log({ payload });
    this.isFormValid && this.onSubmit(payload);
  };
}

customElements.define("reservation-form", ReservationForm);

/**
 *     
     <div>
        <mwc-select
        required 
        name="test" 
        id="test"

        <mwc-list activatable multi value=${
          initialFormValues.extras
        } id="muiti">
          <mwc-list-item>Item 0</mwc-list-item>
          <mwc-list-item selected activated>Item 1</mwc-list-item>
          <mwc-list-item>Item 2</mwc-list-item>
          <mwc-list-item selected activated>Item 3</mwc-list-item>
        </mwc-list>
        </mwc-select>
        </div>
 */
