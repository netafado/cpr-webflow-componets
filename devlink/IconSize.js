"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./IconSize.module.css";

export function IconSize({
  as: _Component = _Builtin.DOM,
  variant = "1 EM",
  _class = "ph ph-cube",
}) {
  const _styleVariantMap = {
    "1 EM": "",
    SM: "w-variant-cdea1590-5e30-cc7c-cd65-a8b7cf1f5b9e",
    MD: "w-variant-073eca29-ad4a-37a9-ba36-9e6d4f264087",
    LG: "w-variant-3a6d74cd-d37c-fae6-8975-689219a7df3f",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "icon", _activeStyleVariant)}
      tag="span"
      slot=""
      _class={_class}
    >
      {""}
    </_Component>
  );
}
