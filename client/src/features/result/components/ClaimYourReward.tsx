import { Box, Typography } from "@mui/material";
import AccessFullGameImg from "../../../assets/Registration/AccessFullGame.webp";

const ClaimYourReward = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#981922",
        //   minHeight: "100px",
          borderTopLeftRadius: "18px",
          borderTopRightRadius: "18px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "28px",
            textAlign: "left",
            color: "#FFFFFF",
            padding: "20px 40px",
          }}
        >
          Claim your reward and explore the full experience of the game!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={AccessFullGameImg}
          alt="Access Full Game"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </>
  );
};

export default ClaimYourReward;
