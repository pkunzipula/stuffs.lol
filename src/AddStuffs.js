/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import map from "./map.png";
import { Link, navigate } from "@reach/router";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import DatePicker from "./Components/DatePicker";
import MapPicker from "./Components/MapPicker";

const AddStuffs = () => {
  const [location, setLocation] = useState({
    lat: 36.015964,
    lng: -115.176429
  });
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div
      css={css`
        display: grid;
        max-width: 1000px;
        min-height: 100vh;
        margin: 0 auto 72px auto;
        padding: 0 15px;
        align-items: center;
        align-content: start;
        gap: 24px;
        grid-template-areas:
          "Buttons Buttons"
          "Title-and-Date Mapperoo"
          "Details Details";
        grid-template-columns: 1fr 0.5fr;
        grid-template-rows: auto auto auto;
        @media (max-width: 800px) {
          grid-template-areas:
            "Buttons"
            "Title-and-Date"
            "Mapperoo"
            "Details";
          grid-template-columns: 1fr;
        }
      `}
    >
      <div
        css={css`
          grid-area: Buttons;
        `}
      >
        <Link
          to="/see-stuffs"
          css={css`
            font-size: 2rem;
            background: crimson;
            color: white;
          `}
          className="buttonStyle"
        >
          Go Back
        </Link>
        <button
          css={css`
            font-size: 2rem;
            background: limegreen;
            color: white;
            float: right;
          `}
          onClick={() => navigate("/")}
          className="buttonStyle"
        >
          Save and Go!
        </button>
      </div>
      <div
        css={css`
          grid-area: Title-and-Date;
          align-self: stretch;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <input
          css={css`
            padding: 0.2em 0.4em;
            border-style: solid;
            border-width: 1px;
            border-color: rgba(0, 0, 0, 0.28);
            border-radius: 0px;
            font-family: Fresca, sans-serif;
            font-size: 2.4em;
            @media (max-width: 800px) {
              margin-bottom: 30px;
            }
          `}
          placeholder="Give a Title for your Stuffs"
        />
        <DatePicker
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />
      </div>
      <div
        css={css`
          grid-area: Mapperoo;
          height: 250px;
          @media (max-width: 800px) {
            height: auto;
          }
        `}
      >
        <MapPicker location={location} setLocation={setLocation} />
      </div>
      <div
        css={css`
          grid-area: Details;
        `}
      >
        <textarea
          css={css`
            padding: 0.4em;
            width: 100%;
            min-height: 400px;
            border: 1px solid silver;
            font-family: Fresca, sans-serif;
            font-size: 1.6em;
          `}
          placeholder="Imma be some details someday."
        ></textarea>
      </div>
    </div>
  );
};

export default AddStuffs;
