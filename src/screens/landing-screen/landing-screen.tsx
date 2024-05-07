import PageTemplate from '@/template/page-template'
import { useState } from 'react'
import StepTracker from './@components/step-tracker'
import Step1 from './@components/step1'
import Step2 from './@components/step2'
import Step3 from './@components/step3'
import Step4 from './@components/step4'

const LandingScreen = () => {
  const [step, setStep] = useState(1) // 1,2,3,4
  const [errorInStep, setErrorInStep] = useState<number | null>(2)

  const onSubmitChessUsername = () => {
    if (errorInStep) {
      setErrorInStep(null)
    }

    // if invalid username setErrorInStep(1) and return

    // if valid user name
    setStep(2)
  }

  const onVerifyChesscom = () => {
    if (errorInStep) {
      setErrorInStep(null)
    }

    // if verification fails setErrorInStep(2) and return

    // after verification successful

    setStep(3)
  }

  const onLinkYoutube = () => {
    if (errorInStep) {
      setErrorInStep(null)
    }

    // if yt link fails setErrorInStep(3) and return
    // on

    setStep(4)
  }

  return (
    <PageTemplate>
      <div className="flex flex-col items-center">
        <StepTracker currentStep={step} />

        {step === 1 && <Step1 errorInStep={errorInStep} onNextStepClick={onSubmitChessUsername} />}

        {step === 2 && <Step2 errorInStep={errorInStep} onNextStepClick={onVerifyChesscom} />}

        {step === 3 && <Step3 errorInStep={errorInStep} onNextStepClick={onLinkYoutube} />}

        {step === 4 && <Step4 />}
      </div>
    </PageTemplate>
  )
}

export default LandingScreen
