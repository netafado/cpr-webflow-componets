"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ImageFit } from "./ImageFit";
import * as _utils from "./utils";
import _styles from "./Image.module.css";

export function Image({
  as: _Component = _Builtin.DOM,
  aspectRatio = "4x3",
  imageFit = "4x3",
  image = "https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/68f62d21547c12e49e2755a9_Surreal%20Architectural%20Dreamscape.avif",
  altText = "__wf_reserved_inherit",
  advancedVisibility = true,
  advancedLoading = "lazy",
  advancedFetchPriority,
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  const _styleVariantMap = {
    "4x3": "",
    "3x4": "w-variant-c7b9829e-5860-6efa-0d93-1aa6a99a637f",
    "16x9": "w-variant-b5e7a2df-0aae-a75d-3cfa-d5f2e50ac839",
    "9x16": "w-variant-1ead5ba6-2a8f-9163-58f6-93b05efab34b",
    "1x1": "w-variant-9fbd509f-cdc1-3164-90ff-53a572e70fad",
    "Custom Aspect Ratio": "w-variant-0375267a-29ec-433a-03b2-8f111c99a60b",
    Background: "w-variant-bb15dbc4-816d-ba55-5a68-046b1d0e5917",
  };

  const _activeStyleVariant = _styleVariantMap[aspectRatio];

  return advancedVisibility ? (
    <_Component
      className={_utils.cx(_styles, "img-component", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    >
      <ImageFit
        imageFit={imageFit}
        altText={altText}
        image={image}
        loading={advancedLoading}
        fetchPriority={advancedFetchPriority}
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "img-component_bg-overlay",
          _activeStyleVariant
        )}
        tag="div"
      />
    </_Component>
  ) : null;
}
