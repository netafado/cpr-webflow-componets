import * as React from "react";
import * as Types from "./types";

declare function InlineVideo(props: {
  as?: React.ElementType;
  /** Enter the URL to the hosted video file*/
  videoSource?: Types.Builtin.Text;
  /** video/mp4, video/webm, etc*/
  videoType?: Types.Builtin.Text;
  posterImage?: Types.Asset.Image;
  posterAltText?: Types.Basic.AltText;
  playbackControlVisibility?: Types.Visibility.VisibilityConditions;
  playbackControlPosition?:
    | "Bottom Right"
    | "Bottom Left"
    | "Top Right"
    | "Top Left";
  /** true or false*/
  settingsPlayOnDesktopOnly?: Types.Builtin.Text;
  /** true or false*/
  settingsPlayOnScrollIntoView?: Types.Builtin.Text;
  /** true or false*/
  settingsPlayOnHover?: Types.Builtin.Text;
  advancedId?: Types.Builtin.Text;
  advancedClass?: Types.Builtin.Text;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
