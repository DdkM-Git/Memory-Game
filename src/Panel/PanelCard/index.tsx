import { Button, Paper } from "@mui/material";
import { useState } from "react";
import "./style.css";
import { PanelStep } from "..";

export interface PanelCardInterface {
  order: number;
  image: string;
}

function PanelCard(props: PanelCardInterface) {
  const [isClicked, setClicked] = useState<boolean>(false);

  function nextStep(currentStep: PanelStep) {
    /*if (step === "no-ckecked") {
      setStep("single-checked");
    } else if (step === "single-checked") {
      setStep("double-checked");
    } else {
      setStep("no-ckecked");
    }*/
  }

  return (
    <Button
      onClick={() => {
        setClicked(true);
      }}
      sx={{
        padding: "0px",
      }}
    >
      <style>
        {`@keyframes slidein${props.order} {
                from {
                    background: url("https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_960_720.jpg");
                    background-size: cover;
                    background-position: center;
                }

                25% {
                    transform: scale(1.1);
                    background: url("https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_960_720.jpg");
                    background-size: cover;
                    background-position: center;
                }

                50% {
                    transform: rotate3d(0, 0.5, 0.5, 3.142rad);
                }

                75% {
                    background: url(${props.image});
                    transform: scale(1.1);
                    background-size: cover;
                    background-position: center;
                }

                to {
                    background: url(${props.image});
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
          animation: isClicked ? `3s 1 alternate slidein${props.order}` : "none",
          background: isClicked ? `url(${props.image})` : 'url("https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_960_720.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Paper>
    </Button>
  );
}

export default PanelCard;
