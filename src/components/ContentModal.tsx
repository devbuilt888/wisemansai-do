import React from 'react';
import './ContentModal.css';

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: string;
  children: React.ReactNode;
}

const ContentModal: React.FC<ContentModalProps> = ({ isOpen, onClose, title, icon, children }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="content-modal-backdrop" onClick={handleBackdropClick}>
      <div className="content-modal-box" onClick={e => e.stopPropagation()}>
        <button type="button" className="content-modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="content-modal-header">
          {icon && <span className="content-modal-icon">{icon}</span>}
          <h2 className="content-modal-title">{title}</h2>
        </div>
        <div className="content-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
