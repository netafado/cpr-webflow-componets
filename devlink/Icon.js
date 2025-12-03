"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { IconSize } from "./IconSize";
import * as _utils from "./utils";
import _styles from "./Icon.module.css";

export function Icon({
  as: _Component = _Builtin.DOM,
  size = "Inherit",
  color = "Inherit",
  iconClass = "ph ph-cube",
  advancedVisibility = true,
  advancedParentClass = "u-mb-sm",
  advancedId,
  advancedStyle,
}) {
  const _styleVariantMap = {
    Inherit: "",
    Primary: "w-variant-51d5d8fc-9046-c299-32a4-4c984147d74e",
    Yellow: "w-variant-82f5bd89-f137-ad7f-6f6c-6469a84a7586",
    Blue: "w-variant-f1de003c-5ca1-0b0c-954e-47163fd96102",
  };

  const _activeStyleVariant = _styleVariantMap[color];

  return advancedVisibility ? (
    <_Component
      className={_utils.cx(_styles, "icon-color", _activeStyleVariant)}
      tag="div"
      slot=""
      id={advancedId}
      style={advancedStyle}
      _class={advancedParentClass}
    >
      <IconSize variant={size} _class={iconClass} />
    </_Component>
  ) : null;
}
