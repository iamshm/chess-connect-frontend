import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface ElementProps {
  title: string
  description: string
}

export function AlertDestructive({ title, description }: ElementProps) {
  return (
    <Alert className="max-w-[300px] md:max-w-[400px] my-3" variant="destructive">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
