
export default function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input 
            className={`border px-3 py-2 outline-0 rounded-md focus:border-blue-500 text-gray-950 ${className}`} {...props}/>
    );
}