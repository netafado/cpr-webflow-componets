"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavBanner.module.css";

export function NavBanner({
  as: _Component = _Builtin.Link,
  visibility = true,
  text = "Mast —a CSS framework for Webflow",

  link = {
    href: "#",
  },
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "nav-banner")}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "u-text-center")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "eyebrow", "u-mb-0")}
          tag="div"
        >
          {text}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
