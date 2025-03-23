
import { CheckCircle, AlertCircle, Loader } from "lucide-react";

interface FormStatusMessageProps {
  status: "success" | "error" | "loading" | "idle";
  customError?: string;
}

const FormStatusMessage = ({ status, customError }: FormStatusMessageProps) => {
  if (status === "idle") return null;

  return (
    <>
      {status === "loading" && (
        <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 flex items-center">
          <Loader size={20} className="mr-2 flex-shrink-0 animate-spin" />
          <span>Sending your message, please wait...</span>
        </div>
      )}
      
      {status === "success" && (
        <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 flex items-center">
          <CheckCircle size={20} className="mr-2 flex-shrink-0" />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      )}
      
      {status === "error" && (
        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 flex items-center">
          <AlertCircle size={20} className="mr-2 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-semibold">Error sending message:</p>
            <p>{customError || "There was an error sending your message. Please try again later."}</p>
            <p className="mt-2 text-xs opacity-80">
              If this problem persists, please reach out directly via the contact information provided.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FormStatusMessage;
