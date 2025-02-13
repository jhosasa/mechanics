import { Iclosex } from "@/components/icons/Iclosex";
import Button from "@/components/ui/Button";

interface ModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  children: React.ReactNode;
  classNameModal?: string;
}

export default function Modal({
  isVisible,
  setIsVisible,
  title,
  children,
  classNameModal
}: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 bg-gray-900 bg-opacity-80
        ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {isVisible && (
        <dialog
          open={isVisible}
          className={`absolute inset-0 z-50 rounded-xl text-black ${classNameModal} overflow-y-auto bg-white lg:p-6 p-3 max-w-lg w-auto`}
        >
          <div className="flex justify-end mb-3">
            <Button variant="normal" type="button" onClick={() => setIsVisible(false)}>
              <Iclosex />
            </Button>
          </div>

          <div>
            <h4 className="text-xl font-semibold">{title}</h4>
          </div>
          {children}
        </dialog>
      )}
    </div>
  );
}
