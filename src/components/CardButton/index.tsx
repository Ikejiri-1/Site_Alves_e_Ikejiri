interface CardButtonProps {
  className?: string;
  children: React.ReactNode;
}
export function CardButton({ className, children }: CardButtonProps) {
  return <button className={className}>{children}</button>;
}
