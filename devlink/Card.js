"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Card.module.css";

export function Card({
  as: _Component = _Builtin.DOM,
  linkOverlayVisibility = false,

  linkOverlayLink = {
    href: "#",
  },

  linkOverlayScreenReaderText = "Learn more",
  hoverStyle = "None",
  slot,
  advancedVisibility = true,
  advancedClass,
  advancedId,
  advancedStyle,
  linkOverlayTarget,
}) {
  const _styleVariantMap = {
    None: "",
    Hoverable: "w-variant-7a49f1e4-82e5-f9b4-164d-70415eb8af86",
  };

  const _activeStyleVariant = _styleVariantMap[hoverStyle];

  return advancedVisibility ? (
    <_Component
      className={_utils.cx(_styles, "card", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    >
      <_Builtin.NotSupported _atom="Slot" />
      {linkOverlayVisibility ? (
        <_Builtin.Link
          className={_utils.cx(_styles, "u-link-cover", _activeStyleVariant)}
          button={false}
          target={linkOverlayTarget}
          block="inline"
          options={linkOverlayLink}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "u-sr-only", _activeStyleVariant)}
            tag="div"
          >
            {linkOverlayScreenReaderText}
          </_Builtin.Block>
        </_Builtin.Link>
      ) : null}
    </_Component>
  ) : null;
}
