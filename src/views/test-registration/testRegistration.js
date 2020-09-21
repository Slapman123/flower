import React from "react";
import { setup } from "../../utils/setup";

const LandingPage = ({ actions, helpers }) => {
  return (
    <div className="registration-container">
      <h1>Registrieren & profitieren</h1>
      <p>
        Registriere dich jetzt als SCB-Abo-Besitzer und profitiere von
        exklusiven Aktionen.
      </p>
      <form onSubmit={actions.registration.handleSubmit}>
        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space">Abonummer *</label>
          </div>
          <div className="input-text-wrapper">
            <input
              type="text"
              name="subscriptionNumber"
              defaultValue={helpers.registration.subscriptionNumber}
              onChange={actions.registration.handleChange}
              required
            />
          </div>
        </div>

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space">Anrede *</label>
          </div>
          <div className="input-radio-wrapper">
            <input
              type="radio"
              name="gender"
              value="female"
              // checked={true}
              onChange={actions.registration.handleChange}
              required
            />
            <label>Frau</label>
          </div>
          <div className="input-radio-wrapper">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={actions.registration.handleChange}
              required
            />
            <label>Herr</label>
          </div>
        </div>

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space">Vorname *</label>
          </div>
          <div className="input-text-wrapper">
            <input
              type="text"
              name="firstName"
              defaultValue={helpers.registration.firstName}
              onChange={actions.registration.handleChange}
              required
            />
          </div>
        </div>

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space">Nachname *</label>
          </div>
          <div className="input-text-wrapper">
            <input
              type="text"
              name="lastName"
              defaultValue={helpers.registration.lastName}
              onChange={actions.registration.handleChange}
              required
            />
          </div>
        </div>

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label htmlFor="dateOfBirth" className="label-space">
              Geburtstag *
            </label>
          </div>
          <div className="input-text-wrapper">
            <input type="date" name="dateOfBirth" id="dateOfBirth" required />
          </div>
        </div>

        <label style={{ fontWeight: "bold" }} className="label-space">
          Bestelladresse
        </label>
        <br />
        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space">Strasse /Nr *</label>
          </div>
          <div className="inputs-wrapper">
            <div className="input-text-wrapper medium-input">
              <input
                type="text"
                name="street"
                defaultValue={helpers.registration.street}
              onChange={actions.registration.handleChange}
                required
              />
            </div>
            <div className="input-text-wrapper small-input">
              <input
                type="text"
                name="houseNumber"
                defaultValue={helpers.registration.houseNumber}
              onChange={actions.registration.handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space">PLZ /Ort *</label>
          </div>
          <div className="inputs-wrapper">
            <div
              className="input-text-wrapper small-input"
              style={{ paddingRight: "50px" }}
            >
              <input
                type="text"
                name="postcode"
                defaultValue={helpers.registration.postCode}
              onChange={actions.registration.handleChange}
                required
              />
            </div>
            <div
              className="input-text-wrapper medium-input"
              style={{ paddingRight: "0px" }}
            >
              <input type="text" name="city" 
              defaultValue={helpers.registration.city}
              onChange={actions.registration.handleChange}
              required />
            </div>
          </div>
        </div>

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space"></label>
          </div>
          <div className="input-checkbox-wrapper">
            <input
              type="checkbox"
              name="isBillingAddress"
              defaultValue={helpers.registration.isBillingAddress}
              onChange={actions.registration.handleCheckbox}
            />
            <span>
              Die Rechnungsadresse meines Abos ist nicht identisch mit der
              Bestelladresse
            </span>
          </div>
        </div>

        {helpers.registration.isBillingAddress ? (
          <div className="billing-address">
            <div className="label-wrapper">
              <label
                style={{ fontWeight: "bold", marginBottom: "10px" }}
                className="label-space"
              >
                Rechnungsadresse
              </label>
            </div>
            <div className="flex form_group_wrapper">
              <div className="label-wrapper">
                <label className="label-space">Vorname *</label>
              </div>
              <div className="input-text-wrapper">
                <input type="text" name="billing-name" required />
              </div>
            </div>
            <div className="flex form_group_wrapper">
              <div className="label-wrapper">
                <label className="label-space">Nachname *</label>
              </div>
              <div className="input-text-wrapper">
                <input type="text" name="billing-lastName" required />
              </div>
            </div>
            <div className="flex form_group_wrapper">
              <div className="label-wrapper">
                <label className="label-space">Strasse /Nr *</label>
              </div>
              <div className="inputs-wrapper">
                <div className="input-text-wrapper medium-input">
                  <input type="text" name="street" required />
                </div>
                <div className="input-text-wrapper small-input">
                  <input type="text" name="houseNumber" />
                </div>
              </div>
            </div>
            <div className="flex form_group_wrapper">
              <div className="label-wrapper">
                <label className="label-space">PLZ /Ort *</label>
              </div>
              <div className="inputs-wrapper">
                <div
                  className="input-text-wrapper small-input"
                  style={{ paddingRight: "50px" }}
                >
                  <input type="text" name="postcode" required />
                </div>
                <div
                  className="input-text-wrapper medium-input"
                  style={{ paddingRight: "0px" }}
                >
                  <input type="text" name="city" required />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space">Mobiltelefon</label>
          </div>
          <div className="input-text-wrapper">
            <input type="text" name="mobile" 
            defaultValue={helpers.registration.mobile}
            onChange={actions.registration.handleChange}
            />
          </div>
        </div>

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space">E-Mail *</label>
          </div>
          <div className="input-text-wrapper">
            <input
              type="email"
              name="email"
              defaultValue={helpers.registration.email}
              onChange={actions.registration.handleChange}
              required
            />
          </div>
        </div>

        <label className="label-space"></label>
        <input type="checkbox" />
        <span>Ich habe weder ein Mobiltelefon noch eine E-Mail-Adresse</span>
        <br />

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space">Mein Lieblingsspieler:</label>
          </div>
          <div className="input-text-wrapper">
            <select name="favoritePlayer" id="players">
              <option value="">
                -- Meinen Lieblingsspieler vom SCB wählen --
              </option>
              <option value="Calle Andersson">Calle Andersson</option>
              <option value="Mark Arcobello">Mark Arcobello</option>
              <option value="Alain Berger">Alain Berger</option>
            </select>
          </div>
        </div>

        <div className="flex form_group_wrapper">
          <div className="label-wrapper">
            <label className="label-space"></label>
          </div>
          <div className="input-checkbox-wrapper">
            <input
              type="checkbox"
              name="consent"
              checked={helpers.registration.consent}
              onChange={actions.registration.handleCheckbox}
            />
            <span>
              Ich stimme der Verarbeitung meiner Daten gemäss den
              SCB-Datenschutzbestimmungen zu
            </span>
          </div>
        </div>

        <div className="flex form_group_wrapper">
          <div className="align-center label-wrapper">
            <label className="label-space">* Pflichtfelder</label>
          </div>
          <div className="input-text-wrapper">
            <button>Jetzt registrieren</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default setup(LandingPage);
