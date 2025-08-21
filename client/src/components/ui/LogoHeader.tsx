import { Box } from '@mui/material'
import FirstWingLogo from "../../assets/Logos/FirstWing.webp";
import IDFCFirstBankLogo from "../../assets/Logos/IDFCFirstBank.webp";


const LogoHeader = () => {
  return (
    <Box sx={{
        height:"33px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginX: "24px",
    }}>
      <img src={FirstWingLogo} alt="First Wing Logo" style={{ height: "100%" }} />
      <img src={IDFCFirstBankLogo} alt="IDFC First Bank Logo" style={{ height: "100%" }} />
    </Box>
  )
}   
  

export default LogoHeader
