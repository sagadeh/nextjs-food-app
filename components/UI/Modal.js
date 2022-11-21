import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

//const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
