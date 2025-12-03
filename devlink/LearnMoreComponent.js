"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LearnMoreComponent.module.css";

export function LearnMoreComponent({
  as: _Component = _Builtin.Block,
  title = "Learn more about warranty",
}) {
  return (
    <_Component className={_utils.cx(_styles, "learn_more")} tag="div">
      <_Builtin.Paragraph className={_utils.cx(_styles, "learn_more_text")}>
        {title}
      </_Builtin.Paragraph>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "code-embed-8")}
        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%2212%22%20viewBox%3D%220%200%209%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cg%20clip-path%3D%22url(%23clip0_8094_7123)%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.97702%208.80541L3.02266%2011.9268L0.476979%209.23681L3.43089%206.11547L0.476074%202.99364L3.02266%200.303223L5.97748%203.42506L8.52318%206.11501L5.97702%208.80541Z%22%20fill%3D%22%232E2F33%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3CclipPath%20id%3D%22clip0_8094_7123%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%229%22%20height%3D%2212%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
