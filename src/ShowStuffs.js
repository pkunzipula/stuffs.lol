/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ShowStuffs = () => {
  return (
    <div
      css={css`
        display: grid;
        min-height: 100vh;
        grid-column-gap: 24px;
        grid-row-gap: 24px;
        grid-template-areas: "StuffsList StuffsDetails";
        grid-template-columns: 300px 1fr;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          border-right: 1px solid #c2c2c2;
        `}
      >
        <div
          css={css`
            display: flex;
            border-bottom: 1px solid #c2c2c2;
          `}
        >
          <div
            css={css`
              text-align: center;
              flex: 0 60px;
              background-color: rgba(0, 0, 0, 0.09);
              line-height: 0.85;
              padding: 0.5em 0;
            `}
          >
            <span
              css={css`
                display: block;
                font-size: 44px;
              `}
            >
              8
            </span>
            <span
              css={css`
                display: block;
                font-size: 20px;
              `}
            >
              Jun
            </span>
          </div>
          <div
            css={css`
              padding: 0.5em 0.75em;
              flex: 1;
              font-family: Fresca, sans-serif;
              font-size: 20px;
              line-height: 1.4em;
            `}
          >
            I'm some text in this here Div block
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowStuffs;
