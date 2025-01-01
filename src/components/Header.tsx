interface HeaderProps {
    className?: string;
    children: React.ReactNode;
}


export default function Header({ className, children }: HeaderProps) {
    return (
        <header
            className={`${className} flex items-center`}
        >
            {children}
        </header>
    );
}
