"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./Slider.module.css";

export function Slider({
  as: _Component = _Builtin.DOM,
  slidesSlidesPerBreakpoint = "--lg: 3; --md: 3; --sm: 2; --xs: 1;",
  slidesSlideGap = "--gap: var(--_layout---grid--gap-md)",
  slidesSlot,
  navigationNavPosition = "Bottom",
  navigationPreviousButtonStyle = "Bottom",
  navigationRightButtonStyle = "Bottom",
  optionsEffect = "slide",
  optionsSpeed = "300",
  optionsOverflow = "true",
  optionsGrabCursor = "true",
  optionsCentered = "false",
  optionsAutoplay = "false",
  optionsLoop = "false",
  optionsLoopAdditionalSlides = "1",
  advancedSliderVisibility = true,
  advancedId,
  advancedClass,
  navigationProgressVisibility = true,
  advancedStyle,
}) {
  const _styleVariantMap = {
    Bottom: "",
    Top: "w-variant-c311cdeb-ceb6-7bf6-f53b-d49174fa71b4",
    Center: "w-variant-f74aaf1a-c919-3c40-e951-d6794f67e0e1",
  };

  const _activeStyleVariant = _styleVariantMap[navigationNavPosition];

  return advancedSliderVisibility ? (
    <_Component
      className={_utils.cx(_styles, "slider-component", _activeStyleVariant)}
      tag="div"
      slot=""
      data-slider="component"
      id={advancedId}
      style={slidesSlidesPerBreakpoint}
      _class={advancedClass}
    >
      <_Builtin.DOM tag="div" slot="" style={slidesSlideGap}>
        <_Builtin.DOM
          className={_utils.cx(_styles, "swiper", _activeStyleVariant)}
          tag="div"
          slot=""
          data-slider="slider"
          data-loop={optionsLoop}
          data-autoplay={optionsAutoplay}
          data-centered={optionsCentered}
          data-effect={optionsEffect}
          data-speed={optionsSpeed}
          data-grab-cursor={optionsGrabCursor}
          data-slider-overflow={optionsOverflow}
          data-loop-additional-slides={optionsLoopAdditionalSlides}
          style={advancedStyle}
        >
          <_Builtin.NotSupported _atom="Slot" />
        </_Builtin.DOM>
      </_Builtin.DOM>
      <_Builtin.Block
        className={_utils.cx(_styles, "slider-nav", _activeStyleVariant)}
        tag="div"
      >
        <Button
          variant={navigationPreviousButtonStyle}
          advancedAttributeName="data-slider"
          advancedAttributeValue="previous"
          advancedTag="button"
          advancedTextAria="false"
          advancedTextVisibility={false}
          advancedLinkVisibility={false}
          buttonText="Next Slide"
          iconRightIcon={true}
          iconRightIconClass="ph ph-arrow-left"
        />
        {navigationProgressVisibility ? (
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "slider-pagination",
              _activeStyleVariant
            )}
            tag="div"
            data-slider="pagination"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "slider-pagination_button",
                "cc-active",
                _activeStyleVariant
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "slider-pagination_button",
                _activeStyleVariant
              )}
              tag="div"
            />
          </_Builtin.Block>
        ) : null}
        <Button
          variant={navigationRightButtonStyle}
          advancedAttributeName="data-slider"
          advancedAttributeValue="next"
          advancedTag="button"
          advancedTextAria="false"
          advancedTextVisibility={false}
          advancedLinkVisibility={false}
          buttonText="Next Slide"
          iconRightIcon={true}
          iconRightIconClass="ph ph-arrow-right"
        />
      </_Builtin.Block>
    </_Component>
  ) : null;
}
