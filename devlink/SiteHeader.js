"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { HeaderNavigator } from "./HeaderNavigator";
import * as _utils from "./utils";
import _styles from "./SiteHeader.module.css";

export function SiteHeader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-16")} tag="div">
      <HeaderNavigator
        link2ItemPosition={<CprLink label="Find a CPR" />}
        link3ItemPosition={<CprLink label="Certified Devices" />}
        link4ItemPosition={<CprLink label="Partnerships" variant="dropdown" />}
        link5ItemPosition={<CprLink variant="button" label="Book Repair" />}
      />
      <_Builtin.Section
        grid={{
          type: "section",
        }}
        tag="section"
      />
    </_Component>
  );
}
