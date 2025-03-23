
import { CheckCircle, AlertCircle, Loader, XCircle } from "lucide-react";

interface FormStatusMessageProps {
  status: "success" | "error" | "loading" | "idle";
  customError?: string;
  onDismissError?: () => void;
}

const FormStatusMessage = ({ 
  status, 
  customError, 
  onDismissError 
}: FormStatusMessageProps) => {
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
        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 flex items-center relative">
          <AlertCircle size={20} className="mr-2 flex-shrink-0" />
          <div className="text-sm pr-8">
            <p className="font-semibold">Error sending message:</p>
            <p>{customError || "There was an error sending your message. Please try again later."}</p>
            <p className="mt-2 text-xs opacity-80">
              If this problem persists, please reach out directly via the contact information provided.
            </p>
          </div>
          {onDismissError && (
            <button 
              onClick={onDismissError}
              className="absolute top-2 right-2 text-red-400 hover:text-red-300 transition-colors focus:outline-none"
              aria-label="Close error message"
            >
              <XCircle size={20} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default FormStatusMessage;
