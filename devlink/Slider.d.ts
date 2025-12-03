import * as React from "react";
import * as Types from "./types";

declare function Slider(props: {
  as?: React.ElementType;
  /** lg = Desktop
        md = Tablet
        sm = Mobile Landscape
        xs = Mobile Portrait*/
  slidesSlidesPerBreakpoint?: Types.Builtin.Text;
  /** Can be a variable (default) or any CSS number and units*/
  slidesSlideGap?: Types.Builtin.Text;
  slidesSlot?: Types.Slots.SlotContent;
  navigationNavPosition?: "Bottom" | "Top" | "Center";
  navigationPreviousButtonStyle?: "Primary" | "Secondary";
  navigationRightButtonStyle?: "Primary" | "Secondary";
  /** slide or fade*/
  optionsEffect?: Types.Builtin.Text;
  /** Number in milliseconds*/
  optionsSpeed?: Types.Builtin.Text;
  /** true or false*/
  optionsOverflow?: Types.Builtin.Text;
  /** true or false*/
  optionsGrabCursor?: Types.Builtin.Text;
  /** true or false*/
  optionsCentered?: Types.Builtin.Text;
  /** false (default) or a number that is the milliseconds of autoplay delay*/
  optionsAutoplay?: Types.Builtin.Text;
  /** true or false*/
  optionsLoop?: Types.Builtin.Text;
  /** Only used if Loop is set to 'true'.

        Defines number of extra slides to render past the end and into the loop.*/
  optionsLoopAdditionalSlides?: Types.Builtin.Text;
  advancedSliderVisibility?: Types.Visibility.VisibilityConditions;
  advancedId?: Types.Builtin.Text;
  advancedClass?: Types.Builtin.Text;
  navigationProgressVisibility?: Types.Visibility.VisibilityConditions;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
