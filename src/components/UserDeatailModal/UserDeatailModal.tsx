import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { Modal, ModalOverlay } from './userDeatailModalStyles';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserDeatailModal({ isOpen, setIsOpen }: Props) {
  const { selectedUser } = useGlobalContext();
  const { avatar_url, html_url, email, login, public_repos, name, location } = selectedUser;

  const handleOverlayClose = e => {
    if (e.target.id === 'userModal') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay id="userModal" data-testid="userModal" onClick={handleOverlayClose}>
          <Modal>
            <div className="modalHeader">
              <div className="image">
                <img src={avatar_url} alt="Profile picture" />
              </div>
              <h2>{login}</h2>
            </div>

            <hr />

            <div className="modalBody">
              <div className="bodyField">
                <div>Repo URL:</div>
                <span
                  id="userProfileUrl"
                  className="isLink"
                  onClick={() => {
                    window.open(html_url);
                  }}>
                  {html_url.split('//')[1]}
                </span>
              </div>

              <div className="bodyField">
                <div>Name:</div>
                <span id="userName">{name || 'Name not informed'}</span>
              </div>

              <div className="bodyField">
                <div>Location:</div>
                <span id="userLocation">{location || 'Location not informed'}</span>
              </div>

              <div className="bodyField">
                <div>Email:</div>
                <span id="userEmail">{email || 'Email not informed'}</span>
              </div>

              <div className="bodyField">
                <div>Public repositories:</div>
                <span id="publicRepositories">{public_repos}</span>
              </div>
            </div>

            <div className="modalFooter">
              <div onClick={() => setIsOpen(false)} className="closeBtn">
                Close
              </div>
            </div>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
