
import { cn } from "@/lib/utils";

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  error?: string;
}

const FormInput = ({
  id,
  name,
  type,
  value,
  onChange,
  label,
  placeholder,
  error
}: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-300 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full px-4 py-3 bg-dark-bg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all",
          error ? "border-red-500" : "border-gray-700 focus:border-blue-accent"
        )}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;
