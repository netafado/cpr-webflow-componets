"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./List.module.css";

export function List({
  as: _Component = _Builtin.DOM,
  slot,
  advancedVisibility = true,
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  return advancedVisibility ? (
    <_Component
      className={_utils.cx(_styles, "list-component")}
      tag="div"
      slot=""
      _class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    >
      <_Builtin.NotSupported _atom="Slot" />
    </_Component>
  ) : null;
}
