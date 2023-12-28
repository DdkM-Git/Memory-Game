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

export interface PanelCardPropsInterface {
  order: number;
  pairId: number;
  frontImage: string;
}

function generatePanelCards(): PanelCardPropsInterface[] {
  let newPanelCards: PanelCardPropsInterface[] = [
    { frontImage: panelImage1, pairId: 1, order: 1 },
    { frontImage: panelImage1, pairId: 1, order: 2 },
    { frontImage: panelImage2, pairId: 2, order: 3 },
    { frontImage: panelImage2, pairId: 2, order: 4 },
    { frontImage: panelImage3, pairId: 3, order: 5 },
    { frontImage: panelImage3, pairId: 3, order: 6 },
    { frontImage: panelImage4, pairId: 4, order: 7 },
    { frontImage: panelImage4, pairId: 4, order: 8 },
    { frontImage: panelImage5, pairId: 5, order: 9 },
    { frontImage: panelImage5, pairId: 5, order: 10 },
    { frontImage: panelImage6, pairId: 6, order: 11 },
    { frontImage: panelImage6, pairId: 6, order: 12 },
    { frontImage: panelImage7, pairId: 7, order: 13 },
    { frontImage: panelImage7, pairId: 7, order: 14 },
    { frontImage: panelImage8, pairId: 8, order: 15 },
    { frontImage: panelImage8, pairId: 8, order: 16 },
  ];
  shuffleArray(newPanelCards);
  return newPanelCards;
}

export type ClickStepType = "no-ckecked" | "single-checked" | "double-checked";

function Panel() {
  const [clickStep, setClickStep] = useState<ClickStepType>("no-ckecked");
  const [currentCard, setCurrentCard] = useState<PanelCardPropsInterface | undefined>(undefined);

  const panelCards: PanelCardPropsInterface[] = useMemo(() => generatePanelCards(), []);

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
          return (
            <PanelCard
              frontImage={pC.frontImage}
              backImage={panelBackgroundImage}
              pairId={pC.pairId}
              order={pC.order}
              currentPanelCard={currentCard}
              setCurrentPanelCard={setCurrentCard}
              clickStep={clickStep}
              setClickStep={setClickStep}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default Panel;
