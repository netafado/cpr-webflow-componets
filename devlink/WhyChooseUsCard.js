"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WhyChooseUsCard.module.css";

export function WhyChooseUsCard({
  as: _Component = _Builtin.Block,
  heading = "Life Warranty",
  subHeading = "Coverage on replacement parts and workmanship for lasting peace of mind.",
  image = "https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/690145bdfc7e9c09ca405933_sameday.png",
}) {
  return (
    <_Component className={_utils.cx(_styles, "choose_us_card")} tag="div">
      <_Builtin.Heading className={_utils.cx(_styles, "heading-12")} tag="h4">
        {heading}
      </_Builtin.Heading>
      <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-9")}>
        {subHeading}
      </_Builtin.Paragraph>
      <_Builtin.Image
        className={_utils.cx(_styles, "image-6")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
    </_Component>
  );
}
