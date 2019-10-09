/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import moment from "moment";
import ListItem from "./ListItem";

const StuffsList = ({
  stuffs,
  showStuffs,
  setShowStuffs,
  currentStuffs,
  setCurrentStuffs
}) => (
  <>
    <div
      css={css`
        grid-area: StuffsList;
        @media (max-width: 800px) {
          display: ${showStuffs ? "none" : "block"};
        }
      `}
    >
      <div
        css={css`
          position: fixed;
          left: 0%;
          top: 0%;
          right: auto;
          bottom: 0%;
          width: 320px;
          margin-bottom: 60px;
          border-right: 1px solid #c2c2c2;
          overflow-y: auto;
          @media (max-width: 800px) {
            width: 100%;
            position: static;
          }
        `}
      >
        <ul
          css={css`
            list-style: none;
            margin: 0;
            padding: 0;
          `}
        >
          {stuffs.map((stuff, index) => {
            return (
              <ListItem
                stuff={stuff}
                key={index}
                currentStuffs={currentStuffs}
                setCurrentStuffs={setCurrentStuffs}
                showStuffs={showStuffs}
                setShowStuffs={setShowStuffs}
              />
            );
          })}
        </ul>
      </div>
    </div>
    <div
      css={css`
        background: white;
        display: flex;
        height: 60px;
        font-family: Fresca, sans-serif;
        font-size: 2.4em;
        position: fixed;
        bottom: 0;
        right: auto;
        top: auto;
        left: 0;
        width: 320px;
        @media (max-width: 800px) {
          width: 100%;
        }
      `}
    >
      <button
        css={css`
          display: none;
          color: white;
          font-family: Fresca, sans-serif;
          font-size: 1.4em;
          flex: 0 60px;
          background-color: #0f2a42;
          padding: 0;
          @media (max-width: 800px) {
            display: initial;
          }
        `}
        onClick={() => setShowStuffs(!showStuffs)}
      >
        #
      </button>
      <button
        css={css`
          color: white;
          font-family: Fresca, sans-serif;
          font-size: 1.4em;
          flex: 1;
          background-color: limegreen;
          padding: 0;
        `}
      >
        +
      </button>
    </div>
  </>
);

export default StuffsList;
