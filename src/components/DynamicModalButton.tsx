import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from '@/components/ui/Button';

interface DynamicModalButtonProps {
  icon: React.ReactNode;
  titleModal: string;
  children: React.ReactNode;
}

export default function DynamicModalButton({
  icon,
  titleModal,
  children,
  ...props
}: DynamicModalButtonProps) {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const handleToggleModal = () => setIsVisibleModal((prev) => !prev);

  return (
    <>
      <Button
        variant="border"
        type="button"
        onClick={() => handleToggleModal()}
      >
        {icon}
      </Button>

      <Modal
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        title={titleModal}
        {...props}
      >
        {children}
      </Modal>
    </>
  );
}
