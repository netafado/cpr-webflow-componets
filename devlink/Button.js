"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Icon } from "./Icon";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

export function Button({
  as: _Component = _Builtin.DOM,
  buttonText = "Button",

  buttonLink = {
    href: "#",
  },

  iconLeftIcon = false,
  iconLeftIconClass = "ph ph-play",
  iconRightIcon = false,
  iconRightIconClass = "ph ph-arrow-up-right",
  variant = "Primary",
  advancedButtonVisibility = true,
  advancedLinkVisibility = true,
  advancedTextVisibility = true,
  advancedTextAria = "true",
  advancedTag = "div",
  advancedClass,
  advancedId,
  advancedStyle,
  advancedAttributeName,
  advancedAttributeValue,
}) {
  const _styleVariantMap = {
    Primary: "",
    Secondary: "w-variant-052759b4-b398-e98d-c28c-099b380d4426",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return advancedButtonVisibility ? (
    <_Component
      className={_utils.cx(_styles, "button", _activeStyleVariant)}
      slot=""
      tag={advancedTag}
      _class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    >
      {iconLeftIcon ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "btn-icon", _activeStyleVariant)}
          tag="div"
        >
          <Icon iconClass={iconLeftIconClass} advancedParentClass="" />
        </_Builtin.Block>
      ) : null}
      {advancedTextVisibility ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "btn-text", _activeStyleVariant)}
          tag="div"
          aria-hidden={advancedTextAria}
        >
          {buttonText}
        </_Builtin.Block>
      ) : null}
      {iconRightIcon ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "btn-icon", _activeStyleVariant)}
          tag="div"
        >
          <Icon iconClass={iconRightIconClass} advancedParentClass="" />
        </_Builtin.Block>
      ) : null}
      {advancedLinkVisibility ? (
        <_Builtin.Link
          className={_utils.cx(_styles, "u-link-cover", _activeStyleVariant)}
          button={false}
          block="inline"
          options={buttonLink}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "u-sr-only", _activeStyleVariant)}
            tag="div"
          >
            {buttonText}
          </_Builtin.Block>
        </_Builtin.Link>
      ) : null}
    </_Component>
  ) : null;
}
