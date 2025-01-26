type ButtonVariant = "border" | "primary" | "normal" | "indicator";

type CustomButtonProps = {
    variant?: ButtonVariant;
    className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    CustomButtonProps;


export default function Button({
    className = "", variant = "primary", children, ...props
}: ButtonProps) {

    const variantClass = {
        border: "text-slate-950 border bg-white px-3 py-2 rounded-md cursor-pointer",
        primary: "bg-gray-950 w-full text-white px-3 py-2 rounded-md hover:opacity-75 cursor-pointer",
        normal: "text-slate-950 cursor-pointer",
        indicator: "rounded-full bg-white h-max p-1 shadow-md cursor-pointer"
    };

    return (
        <button className={`${variantClass[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
