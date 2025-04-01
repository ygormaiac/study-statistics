import { ChangeEvent, ReactNode } from "react";

type SelectProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
};

export function Select({ value, onChange, children }: SelectProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border rounded-lg p-2 w-full bg-white"
    >
      {children}
    </select>
  );
}
