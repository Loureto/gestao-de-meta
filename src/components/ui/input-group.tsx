import { forwardRef, type ComponentProps, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface InputGroupProps extends ComponentProps<'input'> {
  children: ReactNode
}

interface InputIconProps extends ComponentProps<'div'> {
  children: ReactNode
  direction?: 'left' | 'right'
}

const InputContainer = forwardRef<HTMLInputElement, InputGroupProps>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('relative mt-1', className)} {...props}>
      {children}
    </div>
  )
})

InputContainer.displayName = 'InputContainer'

const InputIcon = forwardRef<HTMLDivElement, InputIconProps>(({ children, className, direction = 'left', ...props }, ref) => {
  const baseStyles = {
    default: 'absolute inset-y-0 flex items-center',
    left: 'left-0 pl-3',
    right: 'right-0 pr-3'
  }

  return (
    <div ref={ref} className={cn(baseStyles.default, baseStyles[direction], className)} {...props} >
      {children}
    </div>
  )
})

InputIcon.displayName = 'InputIcon'

export const InputGroup = {
  Root: InputContainer,
  Icon: InputIcon
}
