/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import logo from "./logo.svg";
import screenshot from "./screenshot.png";
import { Link } from "@reach/router";

const Homepage = () => (
  <div
    css={css`
      display: grid;
      height: 100vh;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 15px;
      align-content: center;
      gap: 24px;
      grid-template-areas:
        "Logo Logo"
        "Screenshot Proposal";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
    `}
  >
    <div
      css={css`
        grid-area: Logo;
        justify-self: center;
      `}
    >
      <img src={logo} alt="logo" />
    </div>
    <div
      css={css`
        grid-area: Screenshot;
        max-width: 400px;
      `}
    >
      <img
        css={css`
          max-width: 100%;
        `}
        src={screenshot}
        alt="screenshot"
      />
    </div>
    <div>
      <h2
        css={css`
          font-size: 2.4rem;
          @media (max-width: 600px) {
            font-size: 1.6rem;
          }
        `}
      >
        Keep track of your daily activities in this fun(ish)-to-use app!
      </h2>
      <Link
        css={css`
          background: limegreen;
          color: white;
          font-size: 3.4rem;
          width: 100%;
        `}
        className="buttonStyle"
        to="add-stuffs"
      >
        Start!
      </Link>
    </div>
  </div>
);

export default Homepage;
