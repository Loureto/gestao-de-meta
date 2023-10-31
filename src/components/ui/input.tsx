import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.ComponentProps<'input'> {
  hasIconLeft?: boolean;
  isError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, hasIconLeft = false, isError = false, ...props },
    ref
  ) => {
    return (
      <input
        type={type}
        data-icon={hasIconLeft}
        data-error={isError}
        className={cn(
          'flex h-12 w-full rounded-md border-2 border-input bg-background data-[error=true]:border-2 data-[error=true]:border-rose-500 data-[icon=true]:pl-10 data-[icon=false]:pl-3 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
