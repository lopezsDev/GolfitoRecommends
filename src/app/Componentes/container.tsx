import { cn } from '@/libs/utils';
import { ReactNode } from 'react';

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn('container mx-auto rigth: 50 px', className)}>{children}</div>;
};

export default Container;
