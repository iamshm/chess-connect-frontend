import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Step4 = () => {
  const navigate = useNavigate()

  const onViewDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <span className="text-2xl text-center md:text-5xl font-bold">
        Hooray! Your youtube has been linked with chess.com successfully 🎉
      </span>

      <Button
        onClick={onViewDashboard}
        className="text-white text-lg bg-[#18191A] hover:text-slate-300 hover:bg-black p-8 mt-5"
      >
        View Dashboard
      </Button>
    </div>
  )
}

export default Step4
