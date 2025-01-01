import { Iclosex } from "@/components/icons/Iclosex";
import Button from "@/components/ui/Button";

interface ModalProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    children: React.ReactNode;
}

export default function Modal({
    isVisible,
    setIsVisible,
    title,
    children,
}: ModalProps) {
    return (
        <div
            className={`fixed overflow-y-none inset-0 z-50 bg-gray-900 bg-opacity-80 transition-opacity duration-300
    ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <dialog
                open={isVisible}
                className="absolute inset-0 z-50 rounded-xl bg-white p-6 max-w-lg w-screen"
            >
                <header>
                    <div className="flex justify-end mb-3">
                        <Button
                            variant="normal"
                            onClick={() => setIsVisible(false)}
                        >
                           <Iclosex />
                        </Button>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold">{title}</h4>
                    </div>
                </header>
                {children}
            </dialog>
        </div>
    );
}
