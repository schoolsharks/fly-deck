import { Box, Typography } from "@mui/material";
import LogoHeader from "./LogoHeader";
import AlmostThereImage from "../../../assets/Game/AlmostThere.webp";
import SlideButton from "../../../components/ui/SlideButton";

// interface AlmostThereProps {
//   handleNextPage: () => void;

// }

const AlmostThere = () => {

    const handleNextPage = () => {
        // Logic to navigate to the next page
    };

  return (
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
          }}
        >
          You are Almost There...
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "100%",
          width: "100%",
          mx: "auto",
        }}
      >
        <img
          src={AlmostThereImage}
          alt="Almost There"
          style={{ width: "90%", height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: "30px",
          mb: "30px",
          px: "20px", // Add horizontal padding
        }}
      >
        <SlideButton text="Play" onSlideComplete={handleNextPage} />
      </Box>
    </Box>
  );
};

export default AlmostThere;
