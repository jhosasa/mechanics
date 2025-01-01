interface AsideProps {
    children: React.ReactNode;
    className?: string;
}
export default function Aside({ children, className }: AsideProps) {
    return (
        <aside 
        className={
            `${className} text-slate-900 h-screen w-full xl:block bg-white lg:shadow-2xl overflow-y-auto overflow-x-hidden`}>
            {children}
        </aside>
    );
}
