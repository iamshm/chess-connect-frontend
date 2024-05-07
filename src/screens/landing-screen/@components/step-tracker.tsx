interface ElementProps {
  currentStep: number
}

const StepTracker = ({ currentStep }: ElementProps) => {
  const getClassname = (step: number) => {
    const className = 'inline-flex gap-2 items-center text-sm lg:text-xl '
    if (currentStep === step) {
      return className + 'opacity-100 font-bold'
    }

    return className + 'opacity-50 text-sm'
  }
  return (
    <div className="m-[30px_0] lg:my-36 flex flex-col lg:flex-row gap-1 lg:gap-6 text-[#18191A]">
      <div className={getClassname(1)}>
        <span className="w-6 h-6 rounded-full flex justify-center items-center bg-black text-white font-light text-xs">
          1.
        </span>
        Submit chess.com username
      </div>

      <div className={getClassname(2)}>
        <span className="w-6 h-6 rounded-full flex justify-center items-center bg-black text-white font-light text-xs">
          2.
        </span>{' '}
        Add code in chess.com and verify
      </div>
      <div className={getClassname(3)}>
        <span className="w-6 h-6 rounded-full flex justify-center items-center bg-black text-white font-light text-xs">
          3.
        </span>{' '}
        Link youtube
      </div>
      <div className={getClassname(4)}>
        <span className="w-6 h-6 rounded-full flex justify-center items-center bg-black text-white font-light text-xs">
          4.
        </span>{' '}
        Ready to blunder
      </div>
    </div>
  )
}

export default StepTracker
