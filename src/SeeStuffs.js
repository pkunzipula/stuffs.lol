/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { Link, navigate } from "@reach/router";
import StuffsList from "./Components/SeeStuffs/StuffsList";
import StuffsDetails from "./Components/SeeStuffs/StuffsDetails";

const SeeStuffs = ({ stuffs }) => {
  const [showStuffs, setShowStuffs] = useState(false);
  const [currentStuffs, setCurrentStuffs] = useState([]);
  const [location, setLocation] = useState({
    lat: 36.015964,
    lng: -115.176429
  });
  return (
    <div
      css={css`
        display: grid;
        min-height: 100vh;
        grid-template-columns: 320px 1fr;
        grid-template-areas: "StuffsList StuffsDetails";
        @media (max-width: 800px) {
          display: block;
        }
      `}
    >
      <StuffsList
        stuffs={stuffs}
        showStuffs={showStuffs}
        setShowStuffs={setShowStuffs}
        currentStuffs={currentStuffs}
        setCurrentStuffs={setCurrentStuffs}
      />
      <StuffsDetails showStuffs={showStuffs} currentStuffs={currentStuffs} />
    </div>
  );
};

export default SeeStuffs;
