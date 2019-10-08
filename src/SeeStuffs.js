/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ShowStuffs = () => {
  return (
    <div
      css={css`
        display: grid;
        min-height: 100vh;
        gap: 24px;
        grid-template-columns: 300px 1fr;
      `}
    >
      <div
        css={css`
          position: fixed;
          left: 0%;
          top: 0%;
          right: auto;
          bottom: 0%;
          display: grid;
          width: 300px;
          grid-template-rows: auto 60px;
          border-right: 1px solid #c2c2c2;
        `}
      >
        <div
          css={css`
            overflow-y: auto;
          `}
        >
          <ul
            css={css`
              list-style: none;
              margin: 0;
              padding: 0;
            `}
          >
            <li
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
                  8
                </span>
                <span
                  css={css`
                    font-size: 1.4em;
                  `}
                >
                  Jun
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
                Here's what I did. Lemme tell you bout it.
              </div>
            </li>
          </ul>
        </div>
        <div
          css={css`
            display: flex;
            height: 60px;
            font-family: Fresca, sans-serif;
            font-size: 2.4em;
          `}
        >
          <button
            css={css`
              color: white;
              font-family: Fresca, sans-serif;
              font-size: 1.4em;
              flex: 0 60px;
              background-color: #0f2a42;
              padding: 0;
            `}
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
      </div>
    </div>
  );
};

export default ShowStuffs;
