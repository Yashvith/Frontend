import { cn } from '@/lib/utils'

const MaxWidthWrapper = ({children , className}) => {
  return (
    <div className={cn("m-auto w-screen w-screen-xl px-2.5 md:px-20",className )}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper