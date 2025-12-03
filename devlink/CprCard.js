"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CprCard.module.css";

export function CprCard({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "cpr_card")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "crp_card_list_image")}
        tag="div"
      >
        <_Builtin.Image
          width="107"
          height="auto"
          loading="lazy"
          alt=""
          src="https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/6900e11c3f7c30aef805117d_851a5e0c-269f-4297-ac6c-f6b5cddf1071%201.png"
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "card_body")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "h4")} tag="h4">
          {"Iphone Repair Service"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-7")}>
          {"Start a Repair >"}
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
