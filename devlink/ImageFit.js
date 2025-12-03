"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ImageFit.module.css";

export function ImageFit({
  as: _Component = _Builtin.Image,
  imageFit = "Cover - Center",
  altText = "__wf_reserved_inherit",
  image = "https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/68f62d21547c12e49e2755a9_Surreal%20Architectural%20Dreamscape.avif",
  loading = "lazy",
  fetchPriority,
}) {
  const _styleVariantMap = {
    "Cover - Center": "",
    "Cover - Center Left": "w-variant-95f10c6a-375e-6791-942f-befcfd098245",
    "Cover - Center Right": "w-variant-70209591-5532-2fc0-7d51-2b8b6dddb987",
    "Cover - Top Left": "w-variant-109354ec-e18b-6d34-fc97-2bd60ed75688",
    "Cover - Top Center": "w-variant-40e3e929-19ef-9b36-6290-dc5709682adc",
    "Cover - Top Right": "w-variant-0da5bd83-82c0-9ff7-a129-8f787e266277",
    "Cover - Bottom Left": "w-variant-a7ddd5b7-263c-c9cb-72d3-05c79a748253",
    "Cover - Bottom Center": "w-variant-1d20b8de-5e87-989b-a18d-586e4efc38e7",
    "Cover - Bottom Right": "w-variant-0230cd8b-7253-149b-4b7c-efe7ca05c971",
  };

  const _activeStyleVariant = _styleVariantMap[imageFit];

  return (
    <_Component
      className={_utils.cx(_styles, "u-img-cover", _activeStyleVariant)}
      loading={loading}
      width="Auto"
      height="auto"
      fetchpriority={fetchPriority}
      src={image}
    />
  );
}
