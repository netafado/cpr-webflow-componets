"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Icon } from "./Icon";
import * as _utils from "./utils";
import _styles from "./InlineVideo.module.css";

export function InlineVideo({
  as: _Component = _Builtin.DOM,
  videoSource = "https://dhygzobemt712.cloudfront.net/Web/home/09-2025/home-hero.mp4",
  videoType = "video/mp4",
  posterImage = "https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/68f62d21547c12e49e2755c8_webflow-video-placeholder.webp",
  posterAltText = "__wf_reserved_inherit",
  playbackControlVisibility = true,
  playbackControlPosition = "Bottom Right",
  settingsPlayOnDesktopOnly = "false",
  settingsPlayOnScrollIntoView = "true",
  settingsPlayOnHover = "false",
  advancedId,
  advancedClass,
  advancedStyle = "aspect-ratio: 16 / 9;",
}) {
  const _styleVariantMap = {
    "Bottom Right": "",
    "Bottom Left": "w-variant-bff7d6aa-4621-33b8-a026-e358aa412bf4",
    "Top Right": "w-variant-842374e0-903f-eecd-c997-9093dc594ae3",
    "Top Left": "w-variant-20bd0888-d42c-e5bf-c758-041b16325e6f",
  };

  const _activeStyleVariant = _styleVariantMap[playbackControlPosition];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "inline-video_component",
        _activeStyleVariant
      )}
      tag="div"
      slot=""
      id={advancedId}
      _class={advancedClass}
      style={advancedStyle}
      data-video="component"
    >
      <_Builtin.Image
        className={_utils.cx(
          _styles,
          "inline-video_poster",
          _activeStyleVariant
        )}
        width="auto"
        height="auto"
        loading="lazy"
        src={posterImage}
      />
      <_Builtin.DOM
        className={_utils.cx(
          _styles,
          "inline-video_video",
          _activeStyleVariant
        )}
        tag="video"
        slot=""
        muted="true"
        loop="true"
        playsinline="true"
        preload="none"
        _class=""
        data-video-desktop-only={settingsPlayOnDesktopOnly}
        data-video-scroll-in-play={settingsPlayOnScrollIntoView}
        data-video-hover={settingsPlayOnHover}
        data-video="video"
      >
        <_Builtin.DOM
          tag="source"
          slot=""
          data-src={videoSource}
          type={videoType}
        />
      </_Builtin.DOM>
      {playbackControlVisibility ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "inline-video_playback",
            _activeStyleVariant
          )}
          tag="div"
          data-video-playback="wrapper"
        >
          <_Builtin.DOM
            className={_utils.cx(
              _styles,
              "inline-video_playback-button",
              "cc-play",
              _activeStyleVariant
            )}
            tag="button"
            slot=""
            data-video-playback="play"
            aria-label="Play Video"
          >
            <Icon iconClass="ph ph-play" advancedParentClass="u-mb-0" />
          </_Builtin.DOM>
          <_Builtin.DOM
            className={_utils.cx(
              _styles,
              "inline-video_playback-button",
              "cc-pause",
              _activeStyleVariant
            )}
            tag="button"
            slot=""
            data-video-playback="pause"
            aria-label="Pause Video"
          >
            <Icon iconClass="ph ph-pause" advancedParentClass="u-mb-0" />
          </_Builtin.DOM>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
