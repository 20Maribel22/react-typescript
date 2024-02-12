import React from "react";

interface ErrorMessageProps {
    error: string;
    
}

function ErrorMessages({error}: ErrorMessageProps) {
return (
 <div> 
    <p className="text-center bg-red-600">{error}</p>
 </div>
)
}

export default ErrorMessages;