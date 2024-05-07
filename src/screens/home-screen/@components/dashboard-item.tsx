interface ElementProps {
  title: string
  count: number
}

const DashboardItem = ({ title, count }: ElementProps) => {
  return (
    <div className="h-[200px] md:h-[300px] border-2 border-[#18191A] rounded-lg p-4 flex flex-col items-center justify-center gap-4 shadow-[inset_0px_0px_67px_-30px_rgba(0,0,0,0.32)] hover:shadow-[inset_0px_0px_67px_-14px_rgba(0,0,0,0.32)] cursor-pointer">
      <span className="font-semibold text-3xl opacity-65">{title}</span>

      <span className="font-black text-8xl text-[#18191A]">{count}</span>
    </div>
  )
}

export default DashboardItem
