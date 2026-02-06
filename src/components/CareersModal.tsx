import React, { useState } from 'react';
import './CareersModal.css';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    proposal: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const message = '[Careers / Work proposal]\n\n' + formData.proposal;
    try {
      const res = await fetch('https://formspree.io/f/mgoovyle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'Careers / Work proposal – WiseWay Solutions',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', proposal: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="careers-modal-backdrop" onClick={handleBackdropClick}>
      <div className="careers-modal-box" onClick={e => e.stopPropagation()}>
        <button type="button" className="careers-modal-close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="careers-modal-title">Careers</h2>
        <p className="careers-modal-no-positions">There are no current open positions.</p>
        <p className="careers-modal-intro">Have a proposal or want to reach out about working with us? Send us your details and we will get back to you.</p>
        <form className="careers-form" onSubmit={handleSubmit}>
          <div className="careers-form-group">
            <label htmlFor="careers-name">Name</label>
            <input id="careers-name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your name" />
          </div>
          <div className="careers-form-group">
            <label htmlFor="careers-email">Email</label>
            <input id="careers-email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
          </div>
          <div className="careers-form-group">
            <label htmlFor="careers-phone">Phone (optional)</label>
            <input id="careers-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900" />
          </div>
          <div className="careers-form-group">
            <label htmlFor="careers-proposal">Your proposal / message</label>
            <textarea id="careers-proposal" name="proposal" value={formData.proposal} onChange={handleChange} required rows={5} placeholder="Tell us about your background and how you would like to work with us." />
          </div>
          {status === 'success' && <p className="careers-form-success">Thanks! We have received your message and will be in touch.</p>}
          {status === 'error' && <p className="careers-form-error">Something went wrong. Please try again or email us directly.</p>}
          <button type="submit" className="careers-form-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send proposal'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareersModal;
