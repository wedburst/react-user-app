import React, { useState, useEffect } from "react";
import IconClose from "../../assets/icon/IconClose";
import "./styles.scss";

const Modal = ({ open, setOpenModal, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    if (open) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [open]);

  return (
    <div
      className={
        "modal" +
        (isOpen ? " is-open" : "") +
        (className ? " " + className : "")
      }
    >
      <div className={"modal__box"}>
        <div className="modal__close" onClick={handleClose}>
          <IconClose />
        </div>
        <div className="modal__body">
          <div className="wrap">
            <div className="modal__inner">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
