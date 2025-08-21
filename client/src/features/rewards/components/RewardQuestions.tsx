import { Box, Typography } from "@mui/material";
import { useState } from "react";
import LogoHeader from "../../../components/ui/LogoHeader";
import RewardQuestionsCard from "./RewardQuestionsCard";
import SlideButton from "../../../components/ui/SlideButton";
import { useNavigate } from "react-router-dom";
import {
  saveRewardQuestionsData,
  type RewardQuestionsData,
} from "../../../utility/sessionStorage";

const RewardQuestions = () => {
  const [isOnFinalCard, setIsOnFinalCard] = useState(false);

  const handleQuestionsComplete = (answers: any[]) => {
    console.log("All questions completed with answers:", answers);

    // Save reward questions data to session storage
    const rewardData: RewardQuestionsData = {
      answers,
      completedAt: new Date().toISOString(),
    };
    saveRewardQuestionsData(rewardData);

    // Handle completion logic here - navigate to next page, save answers, etc.
  };

  const handleFinalCardChange = (isFinalCard: boolean) => {
    setIsOnFinalCard(isFinalCard);
  };

  const navigate = useNavigate();
  const handleNextPage = () => {
    // Logic to navigate to the next page
    navigate("/user/game/submission");
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #110200 48.86%, #730206 100%)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box sx={{ paddingTop: "40px" }}>
          <LogoHeader />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "34px",
            maxWidth: "80%",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "30px",
              lineHeight: "35px",
              textAlign: "center",
              mb: "32px",
              color: "#FFFFFF",
            }}
          >
            {isOnFinalCard
              ? "Your ask from IDFC FIRST Bank"
              : "Let us know more about you"}
          </Typography>
        </Box>

        {/* Card Carousel */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: isOnFinalCard ? "20px" : "40px",
          }}
        >
          <RewardQuestionsCard
            onComplete={handleQuestionsComplete}
            onFinalCard={handleFinalCardChange}
          />
        </Box>

        {/* Show SlideButton only when on final card */}
        {isOnFinalCard && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mb: "30px",
              px: "20px",
            }}
          >
            <SlideButton text="Continue" onSlideComplete={handleNextPage} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default RewardQuestions;
