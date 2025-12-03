"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Border.module.css";

export function Border({
  as: _Component = _Builtin.DOM,
  advancedVisibility = true,
  advancedClass,
  advancedId,
  advancedStyle,
  spacing = "Main",
}) {
  const _styleVariantMap = {
    Main: "",
    Small: "w-variant-de012ed6-68b0-ab2a-8394-658c9285fd3e",
    Medium: "w-variant-01d73485-2abe-e5e2-5fe7-5ea51439087f",
    Large: "w-variant-9f72d7b7-da9f-6e9f-4454-a075364a66cd",
    None: "w-variant-2f580e02-ee22-1381-8236-8dfeeb77485b",
  };

  const _activeStyleVariant = _styleVariantMap[spacing];

  return advancedVisibility ? (
    <_Component
      className={_utils.cx(_styles, "u-border", _activeStyleVariant)}
      tag="hr"
      slot=""
      _class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    />
  ) : null;
}
