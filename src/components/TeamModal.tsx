import React, { useState } from 'react';
import { teamMembers } from '../data/teamData';
import './TeamModal.css';
import '../pages/OurTeam.css';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="team-modal-backdrop" onClick={handleBackdropClick}>
      <div className="team-modal-box" onClick={e => e.stopPropagation()}>
        <button type="button" className="team-modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="team-container team-modal-inner">
          <h1>Our Team</h1>
          <p className="team-subtitle">Meet the members of our team</p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="memberImage">
                  <div className="image-wrapper">
                    <img src={member.image} alt={member.name} />
                    <div className="shadow"></div>
                  </div>
                </div>
                <div>
                  <h2>{member.name}</h2>
                  <h3>{member.role}</h3>
                  {member.education && <p className="education">{member.education}</p>}
                  <button
                    type="button"
                    className="expand-btn"
                    onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                  >
                    {expandedId === member.id ? 'Show Less' : 'Read More'}
                  </button>
                  {expandedId === member.id && (
                    <div className="team-details">
                      <p>{member.bio}</p>
                      {member.expertise && (
                        <p><strong>Areas of Expertise:</strong> {member.expertise}</p>
                      )}
                      {member.innovationFocus && (
                        <p><strong>Innovation Focus:</strong> {member.innovationFocus}</p>
                      )}
                      {member.linkedin && (
                        <p>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
