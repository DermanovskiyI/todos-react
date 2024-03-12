import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import {
  IModalConfig,
  ModalContext,
} from '@/shared/context/modal/ModalContext';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false);
  const [component, setComponent] = useState<null | JSX.Element>(null);

  const handleClickOpen = ({ content }: IModalConfig) => {
    setComponent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open: (props: IModalConfig) => handleClickOpen(props),
        close: handleClose,
      }}
    >
      {children}
      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        {component}
      </Dialog>
    </ModalContext.Provider>
  );
};

export default Modal;
