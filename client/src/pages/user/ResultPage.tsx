import SkyCruiser from "../../features/result /components/SkyCruiser";
import ClaimYourReward from "../../features/result /components/ClaimYourReward";
import { Box } from "@mui/material";
import Buttons from "../../features/result /components/Buttons";
import { useEffect, useState } from "react";
import { getAccessFullGameData } from "../../utility/sessionStorage";

function ResultPage() {
  const [userAction, setUserAction] = useState<"claim" | "skip" | null>(null);

  useEffect(() => {
    // Get the access full game data from session storage
    const accessData = getAccessFullGameData();
    if (accessData) {
      setUserAction(accessData.action);
    } else {
      // Default to 'skip' if no data found (fallback)
      setUserAction("skip");
    }
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

      {/* Conditionally render ClaimYourReward only if user clicked 'skip' */}
      {userAction === "skip" && <ClaimYourReward />}

      {/* Pass the user action to Buttons component for conditional button rendering */}
      <Buttons userAction={userAction} />
    </Box>
  );
}

export default ResultPage;
