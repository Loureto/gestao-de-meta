import { ComponentProps, forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface LabelProps extends ComponentProps<'label'> {
  text: string;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ text, className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn('text-sm text-gray-900 font-medium', className)}
        {...props}
      >
        {text}
      </label>
    );
  }
);

Label.displayName = 'Label';

export { Label };
