"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Icon } from "./Icon";
import * as _utils from "./utils";
import _styles from "./OutlineBtn.module.css";

export function OutlineBtn({
  as: _Component = _Builtin.DOM,
  text = "Start a Repair",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "services-btn")}
      tag="div"
      slot=""
      _class=""
      id=""
      style=""
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "btn-text")}
        tag="div"
        aria-hidden="true"
      >
        {text}
      </_Builtin.Block>
      <_Builtin.Link
        className={_utils.cx(_styles, "u-link-cover")}
        button={false}
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Block className={_utils.cx(_styles, "u-sr-only")} tag="div">
          {"Button"}
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
