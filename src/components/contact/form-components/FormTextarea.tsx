
import { cn } from "@/lib/utils";

interface FormTextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  placeholder: string;
  error?: string;
  required?: boolean;
}

const FormTextarea = ({
  id,
  name,
  value,
  onChange,
  label,
  placeholder,
  error,
  required = false
}: FormTextareaProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full px-4 py-3 bg-dark-bg border rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-accent/50 transition-all",
          error ? "border-red-500" : "border-gray-700 focus:border-blue-accent"
        )}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <p id={`${id}-error`} className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormTextarea;
