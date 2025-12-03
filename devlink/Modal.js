"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./Modal.module.css";

export function Modal({
  as: _Component = _Builtin.DOM,
  buttonVariant = null,
  buttonText = "Open modal",
  modalShowModal,
  advancedClass,
  advancedId,
  advancedStyle,
  slot,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "modal-component")}
      tag="div"
      slot=""
      _class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "modal")}
        tag="dialog"
        slot=""
        open={modalShowModal}
      >
        <_Builtin.NotSupported _atom="Slot" />
        <_Builtin.DOM
          className={_utils.cx(_styles, "modal_close-button")}
          tag="button"
          slot=""
        >
          <_Builtin.DOM
            className={_utils.cx(_styles, "modal_close-button_icon")}
            tag="svg"
            slot=""
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 14 14"
            fill="none"
          >
            <_Builtin.DOM tag="title" slot="">
              {"Close Modal"}
            </_Builtin.DOM>
            <_Builtin.DOM
              tag="path"
              slot=""
              d="M12.673 0.67334L0.67319 12.6731"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <_Builtin.DOM
              tag="path"
              slot=""
              d="M0.673462 0.67334L12.6732 12.6731"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </_Builtin.DOM>
        </_Builtin.DOM>
      </_Builtin.DOM>
      <Button
        buttonText={buttonText}
        variant={buttonVariant}
        iconLeftIcon={false}
        advancedTag="button"
        advancedLinkVisibility={false}
        advancedTextAria="false"
      />
    </_Component>
  );
}
