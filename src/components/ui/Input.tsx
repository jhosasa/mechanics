import React from "react";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={`border px-3 py-2 outline-0 rounded-md focus:border-blue-500 text-gray-950 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
