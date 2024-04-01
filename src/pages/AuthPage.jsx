import { useState } from "react";
import CheckOtpForm from "../components/templates/CheckOtpForm";
import SendOtpForm from "../components/templates/SendOtpForm";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtpForm mobile={mobile} setMobile={setMobile} setStep={setStep} />
      )}
      {step === 2 && <CheckOtpForm />}
    </div>
  );
}

export default AuthPage;
