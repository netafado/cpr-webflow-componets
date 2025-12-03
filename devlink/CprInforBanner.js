"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CprInforBanner.module.css";

export function CprInforBanner({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "cell_phone_infor")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "infor-left")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "infor-left-items")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "code-embed-4")}
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M6.855%200.0178808L6.83438%206.83226L0.0179509%206.85289L5.0254e-05%2012.7275L6.81702%2012.7074L6.79689%2019.5222L12.6699%2019.5049L12.6905%2012.6894L19.5044%2012.6694L19.5218%206.79431L12.7079%206.81541L12.7285%20-2.13295e-07L6.855%200.0178808Z%22%20fill%3D%22%23DC282E%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Paragraph>
            {"Do you have a device repairing with us right now?"}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "infor-right")} tag="div">
        <_Builtin.Paragraph className={_utils.cx(_styles, "")}>
          {"Check Repair Status"}
        </_Builtin.Paragraph>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "code-embed-5")}
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%2212%22%20viewBox%3D%220%200%209%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cg%20clip-path%3D%22url(%23clip0_8015_12589)%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.97702%208.80538L3.02266%2011.9267L0.476979%209.23678L3.43089%206.11544L0.476074%202.9936L3.02266%200.303192L5.97748%203.42503L8.52318%206.11498L5.97702%208.80538Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3CclipPath%20id%3D%22clip0_8015_12589%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%229%22%20height%3D%2212%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
