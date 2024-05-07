import { AlertDestructive } from '@/components/error-alert'
import { Button } from '@/components/ui/button'

interface ElementProps {
  onNextStepClick: () => void
  errorInStep: number | null
}

const Step3 = ({ onNextStepClick, errorInStep }: ElementProps) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="w-[300px] md:min-h-48 md:min-w-[600px] bg-white border-2 border-[#18191A] rounded-lg px-10 py-5 flex flex-col gap-4 items-center justify-center text-[#18191A] font-bold text-2xl">
          <span>Your chess com account has been verified!</span>

          <span className="font-light text-sm mt-[-4px]">
            The last step is to link your youtube account so that you can avail interactivity with the stream
          </span>

          <Button onClick={onNextStepClick} className="text-white bg-[#18191A] hover:text-slate-300 hover:bg-black">
            Link youtube
          </Button>
        </div>
      </div>

      {errorInStep === 3 && <AlertDestructive title="Youtube linking failed" description="Please try again later" />}
    </>
  )
}

export default Step3
