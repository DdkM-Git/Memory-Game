import { Box } from "@mui/material";
import PanelCard, { PanelCardInterface } from "./PanelCard";
import { useMemo, useState } from "react";
import panelImage1 from "../images/PanelImage1.jpg";
import panelImage2 from "../images/PanelImage2.jpg";
import panelImage3 from "../images/PanelImage3.jpg";
import panelImage4 from "../images/PanelImage4.jpg";
import panelImage5 from "../images/PanelImage5.jpg";
import panelImage6 from "../images/PanelImage6.jpg";
import panelImage7 from "../images/PanelImage7.jpg";
import panelImage8 from "../images/PanelImage8.jpg";
import panelBackgroundImage from "../images/PanelBackgroundImage.jpg";
import shuffleArray from "../utils/shuffleArray";

export type PanelStep = "no-ckecked" | "single-checked" | "double-checked";

function generatePanelCards(): PanelCardInterface[] {
  let newPanelCards: PanelCardInterface[] = [
    { image: panelImage1, order: 1 },
    { image: panelImage1, order: 1 },
    { image: panelImage2, order: 2 },
    { image: panelImage2, order: 2 },
    { image: panelImage3, order: 3 },
    { image: panelImage3, order: 3 },
    { image: panelImage4, order: 4 },
    { image: panelImage4, order: 4 },
    { image: panelImage5, order: 5 },
    { image: panelImage5, order: 5 },
    { image: panelImage6, order: 6 },
    { image: panelImage6, order: 6 },
    { image: panelImage7, order: 7 },
    { image: panelImage7, order: 7 },
    { image: panelImage8, order: 8 },
    { image: panelImage8, order: 8 },
  ];
  shuffleArray(newPanelCards);
  return newPanelCards;
}

function Panel() {
  const [step, setStep] = useState<PanelStep>();

  const panelCards: PanelCardInterface[] = useMemo(() => generatePanelCards(), []);

  return (
    <Box sx={{ width: "80%" }}>
      <Box
        sx={{
          width: "880px",
          height: "660px",
          background: "#A99",
          display: "grid",
          gridTemplate: "repeat(4, 200px) / repeat(4, 200px);",
          rowGap: "20px",
          columnGap: "20px",
          paddingTop: "20px",
          paddingLeft: "20px",
        }}
      >
        {panelCards.map((pC) => {
          return <PanelCard image={pC.image} order={pC.order} />;
        })}
      </Box>
    </Box>
  );
}

export default Panel;
