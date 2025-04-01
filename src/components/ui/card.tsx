import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">{children}</div>
  )
}

export function CardContent({ children }: CardProps) {
  return <div className="mt-2">{children}</div>
}
