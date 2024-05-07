import { InputHTMLAttributes } from 'react'
import { Button } from './ui/button'

interface ElementProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  onClick: () => void
}

export function InputBoxWithLabel({ label, onClick, ...props }: ElementProps) {
  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <label className="text-[#18191A] font-medium text-lg" htmlFor="input">
        {label}
      </label>

      <div className="flex items-center justify-center gap-4 bg-[#18191A] rounded-lg w-80 md:w-[30rem] ">
        <input
          {...props}
          className="bg-[#18191A] text-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:none text-lg md:text-xl text-center"
          id="input"
          type="text"
        />

        <Button onClick={onClick} className="bg-[#18191A] py-3 px-4 text-xl text-gray-300" type="submit">
          Submit
        </Button>
      </div>
    </div>
  )
}
