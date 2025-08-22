import { Box, Typography } from "@mui/material";
import LogoHeader from "../../../components/ui/LogoHeader";
import SlideButton from "../../../components/ui/SlideButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  saveSubmissionData,
  getSubmissionData,
  type SubmissionData,
} from "../../../utility/sessionStorage";

const Submission = () => {
  const navigate = useNavigate();

  // Address form state
  const [addressData, setAddressData] = useState({
    houseNumber: "",
    areaLocality: "",
    cityState: "",
    pincode: "",
  });

  // Load existing submission data on component mount
  useEffect(() => {
    const existingData = getSubmissionData();
    if (existingData) {
      setAddressData(existingData.address);
    }
  }, []);

  const handleInputChange = (field: string, value: string) => {
    const updatedAddressData = {
      ...addressData,
      [field]: value,
    };
    setAddressData(updatedAddressData);

    // Save to session storage immediately on change
    const submissionData: SubmissionData = {
      address: updatedAddressData,
      completedAt: new Date().toISOString(),
    };
    saveSubmissionData(submissionData);
  };

  const handleNextPage = () => {
    // Save final data before navigation
    const finalData: SubmissionData = {
      address: addressData,
      completedAt: new Date().toISOString(),
    };
    saveSubmissionData(finalData);

    // Logic to navigate to the next page
    navigate("/user/game/result-page");
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
            fontFamily: "Inter",
            px: "20px", // Add horizontal padding
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "29px",
              textAlign: "center",
              mb: "32px",
              mt: "32px",
            }}
          >
            Thanks for playing!
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "29px",
              textAlign: "left",
              mb: "54px",
            }}
          >
            You are on the waitlist, we’ll notify you soon.
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "29px",
              textAlign: "left",
              // mb: "32px",
            }}
          >
            Drop your details so we can send the game to your way!
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #FFFFFF",
            borderRadius: "18px",
            p: "20px",
            mx: "60px",
            my: "40px",
            background: "transparent",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              {
                placeholder: "House/Flat Number, Street Name ",
                field: "houseNumber",
              },
              {
                placeholder: "Area/Locality, Landmark ",
                field: "areaLocality",
              },
              { placeholder: "City, State ", field: "cityState" },
              { placeholder: "Pincode", field: "pincode" },
            ].map((item, index) => (
              <Box key={index} sx={{ position: "relative" }}>
                <textarea
                  placeholder={item.placeholder}
                  value={addressData[item.field as keyof typeof addressData]}
                  onChange={(e) =>
                    handleInputChange(item.field, e.target.value)
                  }
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid #FFFFFF",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: 400,
                    padding: "0",
                    margin: "0",
                    resize: "none",
                    outline: "none",
                    fontFamily: "Inter",
                    // minHeight: "14px",
                    height: "24px",
                    overflow: "hidden",
                    opacity: "80%",
                    // lineHeight: "30px",
                    verticalAlign: "bottom",
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "24px";
                    target.style.height = target.scrollHeight + "px";
                  }}
                />
              </Box>
            ))}
          </Box>
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
          <SlideButton text="Submit" onSlideComplete={handleNextPage} />
        </Box>
      </Box>
    </>
  );
};

export default Submission;
