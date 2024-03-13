import { createContext } from 'react';

export interface IModalConfig {
  content: JSX.Element;
  onCloseAction?: () => void;
}
interface ModalContextType {
  isOpen: boolean;
  open: (props: IModalConfig) => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);
