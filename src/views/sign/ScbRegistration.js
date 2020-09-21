import React from "react";
import { setup } from "../../utils/setup";

const ScbRegistration = ({ actions }) => {
  return (
    <div className="scb-welcome-container">
      <h2>Register to my.scb.ch</h2>
      <div className="flex-column">
        <label>Anrede*</label>
        <div className="flex">
          <div className="flex">
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              // checked={true}
              onChange={actions.registration.handleChange}
              required
            />
            <label htmlFor="female">Frau</label>
          </div>
          <div className="flex">
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              // checked={true}
              onChange={actions.registration.handleChange}
              required
            />
            <label htmlFor="male">Herr</label>
          </div>
        </div>
        <div className="flex">
          <div className="flex-column">
            <label htmlFor="name">Vorname*</label>
            <input
              type="text"
              id="name"
              name="firstName"
              onChange={actions.registration.handleChange}
            />
          </div>
          <div className="flex-column">
            <label htmlFor="lastName">Nachname*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={actions.registration.handleChange}
              required
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex-column">
            <label htmlFor="street">Strasse*</label>
            <input
              type="text"
              id="street"
              name="street"
              onChange={actions.registration.handleChange}
            />
          </div>
          <div className="flex-column">
            <label htmlFor="number">Nummer*</label>
            <input
              type="text"
              id="number"
              name="number"
              onChange={actions.registration.handleChange}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex-column">
            <label htmlFor="plz">PLZ*</label>
            <input
              type="text"
              id="plz"
              name="plz"
              onChange={actions.registration.handleChange}
            />
          </div>
          <div className="flex-column">
            <label htmlFor="plzStreet">Strasse*</label>
            <input
              type="text"
              id="plzStreet"
              name="plzStreet"
              onChange={actions.registration.handleChange}
            />
          </div>
        </div>
        <div className="flex-column">
          <label>Geburtsdatum*</label>
          <input type="text" />
        </div>
        <div className="flex">
          <div className="flex-column">
            <label>Handynummer*</label>

            <input type="text" />
          </div>
          <div className="flex-column">
            <label htmlFor="email">Email-Adresse*</label>
            <input
              type="email"
              name="email"
              onChange={actions.registration.handleChange}
              required
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex-column">
            <label htmlFor="password">Passwort*</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={actions.registration.handleChange}
            />
          </div>
          <div className="flex-column">
            <label>Passwort bestatigen*</label>
            <input
              type="password"
              id="password"
              name="passwordRepeat"
              onChange={actions.registration.handleChange}
            />
          </div>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <span>
            Ich stimme der Verarbeitung meinter Daten gemass den
            SCB-Datenschutzbestimmungen zu
          </span>
        </div>
      </div>
    </div>
  );
};

export default setup(ScbRegistration);
