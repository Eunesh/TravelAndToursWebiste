import { ReactNode } from "react";

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
}
export interface IModalContainer extends IModal {
  title: string;
  hasFooter?: boolean;
  children: ReactNode | Array<ReactNode>;
}
