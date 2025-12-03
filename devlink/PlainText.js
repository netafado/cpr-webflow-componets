"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function PlainText({
  as: _Component = _Builtin.DOM,
  text = "This is some text inside of a div block.",
  advancedVisibility = true,
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  return advancedVisibility ? (
    <_Component
      tag="div"
      slot=""
      id={advancedId}
      _class={advancedClass}
      style={advancedStyle}
    >
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  ) : null;
}
