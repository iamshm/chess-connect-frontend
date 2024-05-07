import { AlertDestructive } from '@/components/error-alert'
import { InputBoxWithLabel } from '@/components/input-box-with-label'

interface ElementProps {
  onNextStepClick: () => void
  errorInStep: number | null
}

const Step1 = ({ onNextStepClick, errorInStep }: ElementProps) => {
  return (
    <>
      <InputBoxWithLabel
        placeholder="Enter valid chess.com username"
        label="1. Chess.com username"
        onClick={onNextStepClick}
      />

      {errorInStep === 1 && (
        <AlertDestructive title="Invalid username" description="Please enter a valid chess.com username" />
      )}
    </>
  )
}

export default Step1
