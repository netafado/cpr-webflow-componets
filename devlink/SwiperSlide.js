"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SwiperSlide.module.css";

export function SwiperSlide({
  as: _Component = _Builtin.DOM,
  visibility = true,
  slot,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "swiper-slide")}
      tag="div"
      slot=""
    >
      <_Builtin.NotSupported _atom="Slot" />
    </_Component>
  ) : null;
}
