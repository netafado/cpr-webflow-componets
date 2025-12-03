"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Icon } from "./Icon";
import * as _utils from "./utils";
import _styles from "./RepairInformationCard.module.css";

export function RepairInformationCard({
  as: _Component = _Builtin.Block,
  title = "Find Tech Solutions for your Business",
  subtitle = "Your business depends on countless electronic gadgets and other devices to keep operations running smoothly. When one thing breaks down, so does your productivity.",
  ctaText = "Learn more",
  image = "https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/68f8e83d7798c6a2893c5b03_first_information_card.png",
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "repair_information_card",
        "hover-bg-white"
      )}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "image-2")}
        loading="lazy"
        width="Auto"
        height="177"
        alt=""
        src={image}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "cell_phone_tech_card")}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "heading-3")} tag="h4">
          {title}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-2")}>
          {subtitle}
        </_Builtin.Paragraph>
        <_Builtin.DOM
          className={_utils.cx(_styles, "button")}
          tag="div"
          slot=""
          _class=""
          id=""
          style=""
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "btn-text")}
            tag="div"
            aria-hidden="true"
          >
            {"Learn more"}
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "u-link-cover")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "u-sr-only")}
              tag="div"
            >
              {"Learn more"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.DOM>
      </_Builtin.Block>
    </_Component>
  );
}
