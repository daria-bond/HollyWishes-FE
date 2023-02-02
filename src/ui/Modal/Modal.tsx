import React, { FC } from "react";
import { Modal } from "@mui/material";

interface IProps {
  openModalBox: boolean;
  onClose: () => void;
  modalMessage: JSX.Element;
}

const ModalBox: FC<IProps> = ({ openModalBox, onClose, modalMessage }) => {
  return (
    <Modal open={openModalBox} onClose={onClose}>
      <div
        style={{
          background: "green",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          border: "2px solid #000",
        }}
      >
        {modalMessage}
      </div>
    </Modal>
  );
};

export default ModalBox;
