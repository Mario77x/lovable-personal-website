
import { CheckCircle, AlertCircle } from "lucide-react";

interface FormStatusMessageProps {
  status: "success" | "error" | "idle";
  customError?: string;
}

const FormStatusMessage = ({ status, customError }: FormStatusMessageProps) => {
  if (status === "idle") return null;

  return (
    <>
      {status === "success" && (
        <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 flex items-center">
          <CheckCircle size={20} className="mr-2 flex-shrink-0" />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      )}
      
      {status === "error" && (
        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 flex items-center">
          <AlertCircle size={20} className="mr-2 flex-shrink-0" />
          <span className="text-sm">{customError || "There was an error sending your message. Please try again later."}</span>
        </div>
      )}
    </>
  );
};

export default FormStatusMessage;
