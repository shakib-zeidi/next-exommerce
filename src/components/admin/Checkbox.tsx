import { ChangeEvent } from "react";

interface CheckboxProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inpuClassName?: string;
  labelClassName?: String;
}

export default function Checkbox({
  label,
  name,
  value,
  type = "checkbox",
  checked,
  onChange,
  inpuClassName,
  labelClassName,
}: CheckboxProps) {
  return (
    <>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:outline-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
          inpuClassName ?? ""
        }`}
      />

      <label
        htmlFor={name}
        className={`ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
          labelClassName ?? ""
        }`}
      >
        {label}
      </label>
    </>
  );
}
