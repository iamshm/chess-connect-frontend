import { AlertDestructive } from '@/components/error-alert'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface ElementProps {
  onNextStepClick: () => void
  errorInStep: number | null
}

const Step2 = ({ onNextStepClick, errorInStep }: ElementProps) => {
  const [codeCopied, setCodeCopied] = useState(false)

  const onCopyVerificationCode = () => {
    navigator.clipboard.writeText('69e3200')

    alert('Paste the copied code in chess.com location field and then click on verify')

    setTimeout(() => {
      setCodeCopied(true)
    }, 3000)
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4 justify-center">
        <div className="h-40 w-[300px] md:min-h-48 md:min-w-[600px] bg-[#18191A] rounded-lg md:px-10 md:py-5 flex flex-col gap-3 items-center justify-center text-white font-bold text-4xl md:text-8xl">
          <span>69e3200</span>

          <Button
            onClick={onCopyVerificationCode}
            className="bg-white text-[#18191A] hover:bg-slate-300 hover:text-black"
          >
            Copy to clipboard
          </Button>
        </div>

        <Button
          disabled={!codeCopied}
          onClick={onNextStepClick}
          className="text-white bg-[#18191A] hover:text-slate-300 hover:bg-black w-[300px] md:min-w-[600px] py-6 text-lg"
        >
          Verify now
        </Button>
      </div>

      {errorInStep === 2 && (
        <AlertDestructive
          title="Account verification failed"
          description="Please add the provided code in location field of chess.com and then later click on verify now"
        />
      )}
    </>
  )
}

export default Step2
