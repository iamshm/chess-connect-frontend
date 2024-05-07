import { AppHeader } from '@/components/app-header'
import { ReactNode } from 'react'

interface ElementProps {
  children: ReactNode
}

const PageTemplate = ({ children }: ElementProps) => {
  return (
    <div className="h-screen mx-0 md:mx-6 flex flex-col px-0 md:px-6 lg:px-8">
      <AppHeader />

      <div className=" flex-1 px-4 md:px-0">{children}</div>
    </div>
  )
}

export default PageTemplate

// 18181b
