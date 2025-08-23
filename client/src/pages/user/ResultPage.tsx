import SkyCruiser from "../../features/result/components/SkyCruiser";
import ClaimYourReward from "../../features/result/components/ClaimYourReward";
import { Box } from "@mui/material";
import Buttons from "../../features/result/components/Buttons";
import { useEffect, useState } from "react";
import {
  getRewardQuestionsData,
  getSubmissionData,
} from "../../utility/sessionStorage";

function ResultPage() {
  const [hasCompletedRewardFlow, setHasCompletedRewardFlow] = useState(false);

  useEffect(() => {
    // We no longer need to track userAction, just check completion status
    // Check if user has completed both reward questions and submission
    const rewardQuestionsData = getRewardQuestionsData();
    const submissionData = getSubmissionData();

    // More flexible validation for reward questions data
    const hasRewardQuestions =
      rewardQuestionsData &&
      rewardQuestionsData.answers &&
      rewardQuestionsData.answers.length > 0;

    // More flexible validation for submission data
    const hasSubmissionData =
      submissionData &&
      submissionData.address &&
      Object.keys(submissionData.address).length > 0 &&
      (submissionData.address.houseNumber ||
        submissionData.address.areaLocality ||
        submissionData.address.cityState ||
        submissionData.address.pincode); // At least one field filled

    setHasCompletedRewardFlow(Boolean(hasRewardQuestions && hasSubmissionData));
  }, []);

  return (
    <Box
      sx={{
        // minHeight: "50vh",
        background: "linear-gradient(180deg, #110200 18.86%, #730206 100%)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <SkyCruiser />

      {/* 
        Conditionally render ClaimYourReward based on user flow:
        - If user has completed the reward flow (both questions + submission) → Don't show (they've already claimed)
        - If user clicked "skip" and hasn't completed reward flow → Show claim option
        - If user clicked "claim" but hasn't completed both reward questions and submission → Show claim option
      */}
      {!hasCompletedRewardFlow && <ClaimYourReward />}

      {/* Pass completion status to Buttons component */}
      <Buttons hasCompletedRewardFlow={hasCompletedRewardFlow} />
    </Box>
  );
}

export default ResultPage;
