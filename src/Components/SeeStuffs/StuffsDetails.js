/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import moment from "moment";
import StuffsLocation from "./StuffsLocation";
import { Link, navigate } from "@reach/router";

const StuffsDetails = ({ showStuffs, currentStuffs }) => {
  let shortMonth = moment(currentStuffs.datetime).format("MMM");
  let month = moment(currentStuffs.datetime).format("MMMM");
  let shortDay = moment(currentStuffs.datetime).format("D");
  let day = moment(currentStuffs.datetime).format("dddd, MMMM Do @ h:mm a");
  let shortYear = moment(currentStuffs.datetime).format("YY");
  let year = moment(currentStuffs.datetime).format("YYYY");
  let time = moment(currentStuffs.datetime).format("h:mm a");
  return (
    <div
      css={css`
        width: 95%;
        max-width: 1400px;
        grid-area: StuffsDetails;
        font-family: Fresca, sans-serif;
        font-size: 1.4em;
        display: grid;
        margin: 0 auto 72px auto;
        padding: 0 15px;
        align-items: center;
        align-content: start;
        gap: 24px;
        grid-template-areas:
          "Buttons Buttons"
          "Title Date"
          "Mapperoo Mapperoo"
          "Details Details";
        grid-template-columns: 1fr 0.25fr;
        grid-template-rows: auto auto auto;
        @media (max-width: 1100px) {
          grid-template-areas:
            "Buttons"
            "Title"
            "Date"
            "Mapperoo"
            "Details";
          grid-template-columns: 1fr;
          text-align: center;
        }
        @media (max-width: 800px) {
          display: ${showStuffs ? "block" : "none"};
        }
      `}
    >
      <div
        css={css`
          grid-area: Buttons;
          display: flex;
          justify-content: space-between;
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
          Delete
        </Link>
        <button
          css={css`
            font-size: 2rem;
            background: limegreen;
            color: white;
            @media (max-width: 800px) {
              margin-bottom: 24px;
            }
          `}
          onClick={() => navigate("/")}
          className="buttonStyle"
        >
          Edit
        </button>
      </div>
      <div
        css={css`
          grid-area: Title;
        `}
      >
        <h1>{currentStuffs.title}</h1>
      </div>

      <div
        css={css`
          grid-area: Date;
          display: flex;
          flex-direction: column;
          font-family: Fresca, sans-serif;
          flex: 0 60px;
          justify-content: center;
          align-items: center;
          padding: 0.5em;
          line-height: 0.9;
          @media (max-width: 1100px) {
            display: none;
          }
        `}
      >
        <span
          css={css`
            font-size: 2.4em;
          `}
        >
          {shortDay}
        </span>
        <span
          css={css`
            font-size: 1.4em;
          `}
        >
          {shortMonth}'{shortYear}
        </span>
        <span>{time}</span>
      </div>
      <div
        css={css`
          display: none;
          grid-area: Date;
          @media (max-width: 1100px) {
            display: block;
          }
        `}
      >
        {day}
      </div>

      <div
        css={css`
          grid-area: Mapperoo;
        `}
      >
        <StuffsLocation location={currentStuffs.location} />
      </div>
      <div
        css={css`
          grid-area: Details;
          padding: 20px;
          border-left: 5px solid silver;

          p {
            line-height: 1.4;
          }
          @media (max-width: 1100px) {
            text-align: left;
          }
        `}
      >
        {currentStuffs.details}
      </div>
    </div>
  );
};

export default StuffsDetails;
