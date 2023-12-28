import { Button, Paper } from "@mui/material";
import { ClickStepType, PanelCardPropsInterface } from "..";
import "./style.css";
import { Dispatch, useEffect, useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

export interface PanelCardInterface extends PanelCardPropsInterface {
  backImage: string;
  currentPanelCard: PanelCardPropsInterface | undefined;
  setCurrentPanelCard: Dispatch<PanelCardPropsInterface | undefined>;
  clickStep: ClickStepType;
  setClickStep: Dispatch<ClickStepType>;
}

type PanelCardTurnStepType = "none" | "turned-on" | "turned-off";

function PanelCard(props: PanelCardInterface) {
  /*function nextStep(currentStep: ClickStepType) {
    if (props.clickStep === "no-ckecked") {
      props.setClickStep("single-checked");
    } else if (props.clickStep === "single-checked") {
      props.setClickStep("no-ckecked");
    } else if (props.clickStep === "double-checked") {
      props.setClickStep("no-ckecked");
    }
  }*/

  const [turnStep, setTurnStep] = useState<PanelCardTurnStepType>("none");

  function nextStep(currentCard: PanelCardPropsInterface | undefined) {
    if (currentCard === undefined) {
      setTurnStep("turned-on");
      props.setCurrentPanelCard({
        order: props.order,
        pairId: props.pairId,
        frontImage: props.frontImage,
      });
    } else {
      setTurnStep("turned-on");
      props.setCurrentPanelCard(undefined);
    }
  }

  useEffect(() => {
    if (
      props.currentPanelCard !== undefined &&
      props.currentPanelCard.order !== props.order &&
      props.currentPanelCard.pairId !== props.pairId &&
      turnStep === "turned-on"
    ) {
      setTurnStep("turned-off");
    }
  }, [props.currentPanelCard]);

  return (
    <Button
      onClick={() => {
        nextStep(props.currentPanelCard);
      }}
      sx={{
        padding: "0px",
      }}
    >
      <style>
        {`@keyframes slidein${props.order} {
                from {
                    background: url(${props.backImage});
                    background-size: cover;
                    background-position: center;
                }

                25% {
                    transform: scale(1.1);
                    background: url(${props.backImage});
                    background-size: cover;
                    background-position: center;
                }

                50% {
                    transform: rotate3d(0, 0.5, 0.5, 3.142rad);
                }

                75% {
                    background: url(${props.frontImage});
                    transform: scale(1.1);
                    background-size: cover;
                    background-position: center;
                }

                to {
                    background: url(${props.frontImage});
                    background-size: cover;
                    background-position: center;
                }
            }`}
        {`@keyframes slideout${props.order} {
                from {
                    background: url(${props.frontImage});
                    background-size: cover;
                    background-position: center;
                }

                25% {
                    background: url(${props.frontImage});
                    transform: scale(1.1);
                    background-size: cover;
                    background-position: center;
                }

                50% {
                    transform: rotate3d(0, 0.5, 0.5, 3.142rad);
                }

                75% {
                    transform: scale(1.1);
                    background: url(${props.backImage});
                    background-size: cover;
                    background-position: center;
                }

                to {
                    background: url(${props.backImage});
                    background-size: cover;
                    background-position: center;
                }
            }`}
      </style>
      <Paper
        elevation={20}
        sx={{
          width: "100%",
          height: "100%",
          animation: turnStep === "none" ? "none" : turnStep === "turned-on" ? `3s 1 alternate slidein${props.order}` : `3s 1 alternate slideout${props.order}`,
          background: turnStep === "none" ? `url(${props.backImage})` : `url(${props.frontImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Paper>
    </Button>
  );
}

export default PanelCard;
