import { Box } from "@mui/material";
import { useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { pageMapper } from "../../features/onboarding/pageMapper";

const OnboardingPage = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!page) {
      navigate("/user/onboarding/1");
    }
  }, [page, navigate]);

  return <Box>
    {
      pageMapper(Number(page))
    }

  </Box>;
};

export default OnboardingPage;
