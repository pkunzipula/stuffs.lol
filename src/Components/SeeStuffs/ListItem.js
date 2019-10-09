/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import moment from "moment";

const ListItem = ({
  stuff,
  index,
  setShowStuffs,
  currentStuffs,
  setCurrentStuffs
}) => {
  let month = moment(stuff.datetime).format("MMM");
  let day = moment(stuff.datetime).format("D");
  return (
    <li
      key={index}
      css={css`
        display: flex;
        font-family: Fresca, sans-serif;
        border-bottom: 1px solid silver;
        cursor: pointer;
        &:hover {
          color: #febd69;
          background-color: #131a22;
        }
      `}
      onClick={() => {
        setCurrentStuffs(stuff);
        setShowStuffs(false);
      }}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          font-family: Fresca, sans-serif;
          flex: 0 60px;
          justify-content: center;
          align-items: center;
          padding: 0.5em;
          line-height: 0.9;
          border-right: 1px solid silver;
        `}
      >
        <span
          css={css`
            font-size: 2.4em;
          `}
        >
          {day}
        </span>
        <span
          css={css`
            font-size: 1.4em;
          `}
        >
          {month}
        </span>
      </div>
      <div
        css={css`
          font-family: Fresca, sans-serif;
          font-size: 1.4em;
          flex: 1;
          padding: 0.5em;
        `}
      >
        {stuff.title}
      </div>
    </li>
  );
};

export default ListItem;
