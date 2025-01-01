import { useState } from "react";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

interface DynamicModalButtonProps {
    icon: React.ReactNode;
    titleModal: string;
    children: React.ReactNode;
}

export default function DynamicModalButton({
    icon,
    titleModal,
    children
}: DynamicModalButtonProps) {
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

    const handleToggleModal = () => setIsVisibleModal((prev) => !prev);

    return (
        <>
         <Button variant="border" onClick={handleToggleModal} type="button">
            {icon}
        </Button>

        <Modal isVisible={isVisibleModal} setIsVisible={setIsVisibleModal} title={titleModal}>
            {children}
        </Modal>
        </>
    );
}