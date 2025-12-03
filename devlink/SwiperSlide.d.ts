import * as React from "react";
import * as Types from "./types";

declare function SwiperSlide(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
  slot?: Types.Slots.SlotContent;
}): React.JSX.Element;
