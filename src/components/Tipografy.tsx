type Variants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";

interface TipografyProps {
    as: Variants;
    children: React.ReactNode;
    className?: string;
}

export default function Tipografy({ children, as, className }: TipografyProps) {
    const variant: Record<Variants, string> = {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-bold",
        h3: "text-2xl font-bold",
        h4: "text-xl font-bold",
        h5: "text-lg font-bold",
        h6: "text-base font-bold",
        p: "text-base",
        div: "text-base",
    };

    const combinedClassName = variant[as] || variant["div"];

    const ELEMETHTML = as || "div";

    return <ELEMETHTML className={`${combinedClassName} ${className}`}>{children}</ELEMETHTML>;
}
