"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./CprPromoBanner.module.css";

export function CprPromoBanner({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "repair_certified_banner")}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "image")}
        loading="lazy"
        width="Auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/68f88b285ff233f309a19a87_cell-phone-repair-banner-img.png"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "certified_banner_content")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "content")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-2")}
            tag="h3"
          >
            {"Certified Pre-Owned Devices"}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
            {"Expert-tested. Warranty-backed. Budget-approved."}
          </_Builtin.Paragraph>
          <_Builtin.Paragraph className={_utils.cx(_styles, "")}>
            {
              "Upgrade without the price shock. CPR’s Certified Pre-Owned smartphones are carefully inspected and backed by our limited warranty — giving you confidence with every swipe, tap, and call."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <Button buttonText="Button Label" />
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "code-embed")}
        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2234%22%20height%3D%2234%22%20viewBox%3D%220%200%2037%2037%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M12.9149%200.000593045L12.9145%2012.9107L0.000505041%2012.9111L-8.71694e-05%2024.0407L12.9149%2024.0413L12.9154%2036.9523L24.0421%2036.9527L24.0425%2024.0407L36.9516%2024.0413L36.9513%2012.9108L24.0422%2012.9121L24.0425%203.2698e-05L12.9149%200.000593045Z%22%20fill%3D%22%23F58905%22%2F%3E%0A%3C%2Fsvg%3E"
      />
    </_Component>
  );
}
