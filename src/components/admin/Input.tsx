interface InputProps {
  label: string;
  name: string;
  type?: string;
  errorText?: string;
  defaultValue?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

export default function Input({
  label,
  name,
  type = "text",
  errorText,
  defaultValue,
  labelClassName,
  inputClassName,
  errorClassName,
}: InputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
          labelClassName ?? ""
        }`}
      >
        {label}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500 ${
          inputClassName ?? ""
        }`}
      />

      <p className={`text-sm text-red-500 mt-2 ${errorClassName ?? ""}`}>
        {errorText}
      </p>
    </>
  );
}
