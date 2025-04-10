import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { PulseLoader } from "react-spinners";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2"; 
import Step3 from "../components/Step3";

const Onboarding = () => {
  const [loading, setLoading] = useState(true); // start as true
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    axiosInstance
      .get("/onboard/step")
      .then((response) => {
        setCurrentStep(response.data.step);
      })
      .catch((error) => {
        console.error("Error fetching onboarding step:", error);
      }).finally(() => {
        setLoading(false); // hide loader
      });
  }, []);

  const handleStepComplete = () => {
    setCurrentStep((prev) => prev + 1);
    // setCurrentStep(currentStep + 1);
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0D1D1E]">
        <PulseLoader size={60} color="#12EB8E" />
        {/* <ClipLoader size={60} color="#4f46e5" /> */}
      </div>
    );
  }

  return (
    <div>
      {currentStep === 1 && <Step1 onComplete={handleStepComplete} />}
      {currentStep === 2 && <Step2 onComplete={handleStepComplete} />}
      {currentStep === 3 && <Step3 onComplete={handleStepComplete} />}
    </div>
  );
};

export default Onboarding;
