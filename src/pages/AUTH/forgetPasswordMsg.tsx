import React from "react";
import { CheckCircle } from "lucide-react";

const forgotPasswordsg:React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-[350px] h-[55%] bg-[#1A1A1A] rounded-2xl md:w-[400px] max-sm:bg-black p-8">
        <CheckCircle className="text-blue-600 mx-auto mb-4" size={48} />
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Forgot password mail sent!</h1>
        <p className="text-white mb-6">
 please kindly go to your email a link has been sent
          to you to reset your password.        </p>
        {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
          Go to Login
        </button> */}
      </div>
    </div>
  );
};

export default  forgotPasswordsg 
;
