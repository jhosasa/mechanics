interface ListProps {
    className?: string;
    children: React.ReactNode;
}

export function List({ className,children }: ListProps) {
    return <ul className={`flex ${className}`}>{children}</ul>;
}

type ListItemType = "menu" | "option" | "service" | "normal";
interface ListItemProps {
    type: ListItemType;
    className?: string;
    children: React.ReactNode;
}

export function ListItem({ type, className="", children }: ListItemProps) {
    const as = {
        "menu": "flex gap-3 py-3 px-2 rounded-md cursor-pointer hover:bg-gray-200",
        "option": "flex gap-2",
        "service": "rounded-full text-sm font-semibold bg-gray-200 px-2 py-1",
        "normal": "text-sm",
    }

    return <li className={`${as[type]} ${className}`}>{children}</li>;
}