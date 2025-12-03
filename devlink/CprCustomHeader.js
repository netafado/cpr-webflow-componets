"use client";

import * as _Builtin from "./_Builtin";
import { HeaderNavigator } from "./HeaderNavigator";
import * as _utils from "./utils";
import _styles from "./CprCustomHeader.module.css";
import { CprLink } from "./CprLink";

export function CprCustomHeader({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-7")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <HeaderNavigator
      />
    </_Component>
  );
}
