"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CprCard } from "./CprCard";
import * as _utils from "./utils";
import _styles from "./CprContainer.module.css";

export function CprContainer({
  as: _Component = _Builtin.BlockContainer,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    sm: "w-variant-5a57e8fe-f683-d12b-bd10-ad250accb6b0",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "container",
        "flex-box",
        "cpr_container",
        "container-3",
        "",
        "",
        _activeStyleVariant
      )}
      grid={{
        type: "container",
      }}
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(
          _styles,
          "heading-10-2",
          "tabs_heading",
          _activeStyleVariant
        )}
        id={_utils.cx(
          _styles,
          "w-node-_095e4e2d-362d-fea1-d614-e6b2102751ba-102751b8"
        )}
        tag="h3"
      >
        {"Types of Repair service"}
      </_Builtin.Heading>
      <_Builtin.TabsWrapper
        className={_utils.cx(_styles, "tabs", _activeStyleVariant)}
        current="Brands"
        easing="ease"
        fadeIn={300}
        fadeOut={100}
      >
        <_Builtin.TabsMenu
          className={_utils.cx(_styles, "tabs-menu", _activeStyleVariant)}
          id={_utils.cx(
            _styles,
            "w-node-_095e4e2d-362d-fea1-d614-e6b2102751bc-102751b8"
          )}
          tag="div"
        >
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "cpr_tab", _activeStyleVariant)}
            data-w-tab="Brands"
            block="inline"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "tab_text", _activeStyleVariant)}
              tag="div"
            >
              {"Brands"}
            </_Builtin.Block>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "cpr_tab", _activeStyleVariant)}
            data-w-tab="Popular Series"
            block="inline"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "tab_text", _activeStyleVariant)}
              tag="div"
            >
              {"Popular Series"}
            </_Builtin.Block>
          </_Builtin.TabsLink>
          <_Builtin.TabsLink
            className={_utils.cx(_styles, "cpr_tab", _activeStyleVariant)}
            data-w-tab="common repair"
            block="inline"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "tab_text", _activeStyleVariant)}
              tag="div"
            >
              {"Common Repairs"}
            </_Builtin.Block>
          </_Builtin.TabsLink>
        </_Builtin.TabsMenu>
        <_Builtin.TabsContent
          className={_utils.cx(_styles, "tabs-content", _activeStyleVariant)}
          id={_utils.cx(
            _styles,
            "w-node-_095e4e2d-362d-fea1-d614-e6b2102751c6-102751b8"
          )}
          tag="figure"
        >
          <_Builtin.TabsPane tag="div" data-w-tab="Brands">
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "cpr_card_list",
                _activeStyleVariant
              )}
              tag="div"
            >
              <CprCard />
              <CprCard />
              <CprCard />
              <CprCard />
              <CprCard
                id={_utils.cx(
                  _styles,
                  "w-node-_37ae9139-10cc-e9b9-4531-b429581593ac-102751b8"
                )}
              />
              <CprCard
                id={_utils.cx(
                  _styles,
                  "w-node-_96a131a3-0937-067f-4a74-69b047b7afb9-102751b8"
                )}
              />
              <CprCard
                id={_utils.cx(
                  _styles,
                  "w-node-d604aceb-a76f-42ca-b8ba-f9b609a8ed00-102751b8"
                )}
              />
              <CprCard
                id={_utils.cx(
                  _styles,
                  "w-node-_2dd9d0df-d942-7b32-3531-01162a8a3f7f-102751b8"
                )}
              />
              <CprCard
                id={_utils.cx(
                  _styles,
                  "w-node-_61600db2-acd3-83aa-127c-f6c71a75d124-102751b8"
                )}
              />
            </_Builtin.Block>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane tag="div" data-w-tab="Popular Series">
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-11", _activeStyleVariant)}
              tag="h3"
            >
              {"2"}
            </_Builtin.Heading>
          </_Builtin.TabsPane>
          <_Builtin.TabsPane tag="div" data-w-tab="common repair">
            <_Builtin.Heading tag="h1">{"4"}</_Builtin.Heading>
          </_Builtin.TabsPane>
        </_Builtin.TabsContent>
      </_Builtin.TabsWrapper>
    </_Component>
  );
}
