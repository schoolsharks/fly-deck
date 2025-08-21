import { Box, Typography } from "@mui/material";
import LogoHeader from "../../../components/ui/LogoHeader";
import SkyCruiserImg from "../../../assets/Result/SkyCruiser.webp"

const SkyCruiser = () => {
  return (
    <>
      <Box
        sx={{
        //   minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          marginBottom:"50px"
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
            Congratulations! <br/>You Are...
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: "25px",
          }}
        >
          <img
            src={SkyCruiserImg}
            alt="Sky Cruiser"
            style={{ maxWidth: "90%", maxHeight: "484px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default SkyCruiser;
