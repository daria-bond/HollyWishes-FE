import React, { FC } from "react";
import { Modal } from "@mui/material";
import "../Modal/Modal.scss";

interface IProps {
  openModalBox: boolean;
  onClose: () => void;
  modalMessage: JSX.Element;
}

const ModalBox: FC<IProps> = ({ openModalBox, onClose, modalMessage }) => {
  return (
    <Modal open={openModalBox} onClose={onClose}>
      <div className="modal-content-container">{modalMessage}</div>
    </Modal>
  );
};

export default ModalBox;
