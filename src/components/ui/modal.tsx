import { ReactNode } from 'react';
import { Button } from './button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {children}
        <Button variant="outline" onClick={onClose} className="mt-4 ml-4">Fechar</Button>
      </div>
    </div>
  )
}
