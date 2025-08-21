import LogoHeader from "../../../components/ui/LogoHeader";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import SlideButton from "../../../components/ui/SlideButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  saveAnswerToUnlockData,
  getAnswerToUnlockData,
  type AnswerToUnlockData,
} from "../../../utility/sessionStorage";

const AnswerToUnlock = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    startupBrandName: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    termsAccepted: false,
  });

  // Load existing form data on component mount
  useEffect(() => {
    const existingData = getAnswerToUnlockData();
    if (existingData) {
      setFormData({
        startupBrandName: existingData.startupBrandName,
        field2: existingData.field2,
        field3: existingData.field3,
        field4: existingData.field4,
        field5: existingData.field5,
        termsAccepted: existingData.termsAccepted,
      });
    }
  }, []);

  // Dropdown options (you can customize these based on your requirements)
  const dropdownOptions = {
    field2: ["Option 1", "Option 2", "Option 3", "Option 4"],
    field3: ["Choice A", "Choice B", "Choice C", "Choice D"],
    field4: ["Type 1", "Type 2", "Type 3", "Type 4"],
    field5: ["Category 1", "Category 2", "Category 3", "Category 4"],
  };

  const handleInputChange = (field: string, value: any) => {
    const updatedFormData = {
      ...formData,
      [field]: value,
    };
    setFormData(updatedFormData);

    // Save to session storage immediately on change
    const answerToUnlockData: AnswerToUnlockData = {
      ...updatedFormData,
      completedAt: new Date().toISOString(),
    };
    saveAnswerToUnlockData(answerToUnlockData);
  };

  const handleNextPage = () => {
    // Save final data before navigation
    const finalData: AnswerToUnlockData = {
      ...formData,
      completedAt: new Date().toISOString(),
    };
    saveAnswerToUnlockData(finalData);

    // Logic to navigate to the next page
    navigate("/user/game/access-full-game");
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
            }}
          >
            Answer to Unlock
          </Typography>
        </Box>

        {/* registration form container */}
        <Box
          sx={{
            border: "2px solid #ffffff",
            borderRadius: "28px",
            width: "80%",
            minHeight: "490px",
            mx: "auto",
            p: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {/* Startup Brand Name - Text Input */}
          <TextField
            fullWidth
            value={formData.startupBrandName}
            onChange={(e) =>
              handleInputChange("startupBrandName", e.target.value)
            }
            placeholder="Startup Brand Name*"
            variant="standard"
            required
            sx={{
              "& .MuiInput-root": {
                backgroundColor: "transparent",
                "&:before": {
                  borderBottomColor: "#ffffff",
                  borderBottomWidth: "1px",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#ffffff",
                },
                "&:after": {
                  borderBottomColor: "#ffffff",
                },
              },
              "& .MuiInput-input": {
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                color: "#ffffff",
                marginTop: "16px",
                paddingBottom: "8px",
                "&::placeholder": {
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#ffffff",
                  opacity: 1,
                },
              },
            }}
          />

          {/* Field 2 - Dropdown */}
          <FormControl fullWidth variant="standard">
            <Select
              value={formData.field2}
              onChange={(e) => handleInputChange("field2", e.target.value)}
              displayEmpty
              sx={{
                backgroundColor: "transparent",
                "&:before": {
                  borderBottomColor: "#ffffff",
                  borderBottomWidth: "1px",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#ffffff",
                },
                "&:after": {
                  borderBottomColor: "#ffffff",
                },
                "& .MuiSelect-select": {
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#ffffff",
                  paddingBottom: "8px",
                },
                "& .MuiSvgIcon-root": {
                  color: "#ffffff",
                },
              }}
            >
              <MenuItem
                value=""
                disabled
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Startup sector*
              </MenuItem>
              {dropdownOptions.field2.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option}
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#000000",
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Field 3 - Dropdown */}
          <FormControl fullWidth variant="standard">
            <Select
              value={formData.field3}
              onChange={(e) => handleInputChange("field3", e.target.value)}
              displayEmpty
              sx={{
                backgroundColor: "transparent",
                "&:before": {
                  borderBottomColor: "#ffffff",
                  borderBottomWidth: "1px",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#ffffff",
                },
                "&:after": {
                  borderBottomColor: "#ffffff",
                },
                "& .MuiSelect-select": {
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#ffffff",
                  paddingBottom: "8px",
                },
                "& .MuiSvgIcon-root": {
                  color: "#ffffff",
                },
              }}
            >
              <MenuItem
                value=""
                disabled
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Latest funding stage*
              </MenuItem>
              {dropdownOptions.field3.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option}
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#000000",
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Field 4 - Dropdown */}
          <FormControl fullWidth variant="standard">
            <Select
              value={formData.field4}
              onChange={(e) => handleInputChange("field4", e.target.value)}
              displayEmpty
              sx={{
                backgroundColor: "transparent",
                "&:before": {
                  borderBottomColor: "#ffffff",
                  borderBottomWidth: "1px",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#ffffff",
                },
                "&:after": {
                  borderBottomColor: "#ffffff",
                },
                "& .MuiSelect-select": {
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#ffffff",
                  paddingBottom: "8px",
                },
                "& .MuiSvgIcon-root": {
                  color: "#ffffff",
                },
              }}
            >
              <MenuItem
                value=""
                disabled
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Revenue generated in <br />
                last 12 months(INR)*
              </MenuItem>
              {dropdownOptions.field4.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option}
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#000000",
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Field 5 - Dropdown */}
          <FormControl fullWidth variant="standard">
            <Select
              value={formData.field5}
              onChange={(e) => handleInputChange("field5", e.target.value)}
              displayEmpty
              sx={{
                backgroundColor: "transparent",
                "&:before": {
                  borderBottomColor: "#ffffff",
                  borderBottomWidth: "1px",
                },
                "&:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#ffffff",
                },
                "&:after": {
                  borderBottomColor: "#ffffff",
                },
                "& .MuiSelect-select": {
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  color: "#ffffff",
                  paddingBottom: "8px",
                },
                "& .MuiSvgIcon-root": {
                  color: "#ffffff",
                },
              }}
            >
              <MenuItem
                value=""
                disabled
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Number of employees*
              </MenuItem>
              {dropdownOptions.field5.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option}
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#000000",
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Terms and Conditions Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsAccepted}
                onChange={(e) =>
                  handleInputChange("termsAccepted", e.target.checked)
                }
                sx={{
                  color: "#ffffff",
                  "&.Mui-checked": {
                    color: "#ffffff",
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "100%",
                  color: "#ffffff",
                }}
              >
                I agree to the Terms and Conditions
              </Typography>
            }
            sx={{
              mt: "10px",
            }}
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
          <SlideButton text="Submit" onSlideComplete={handleNextPage} />
        </Box>
      </Box>
    </>
  );
};

export default AnswerToUnlock;
