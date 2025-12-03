"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./RepairCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761087420267},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761087420268},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761087683010},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761087683011}},"actionLists":{"a":{"id":"a","title":"repair-card-icon","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c833"},"value":0,"unit":""}},{"id":"a-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c833"},"value":0.1,"unit":""}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c833"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1761084973643},"a-2":{"id":"a-2","title":"repair-card-icon 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c833"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c833"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c833"},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1761084973643},"a-3":{"id":"a-3","title":"repair-card-wrapper","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831"},"globalSwatchId":"--colors--background","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1761087695759},"a-4":{"id":"a-4","title":"repair-card-wrapper 2","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":1000,"target":{"useEventTarget":true,"id":"a0c00b83-ca0d-7be0-eb72-fbfee076c831"},"globalSwatchId":"--_color---neutral--gray-100","rValue":237,"bValue":242,"gValue":239,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1761087695759}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function RepairCard({
  as: _Component = _Builtin.Block,
  title = "Laptops",
  image = "https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/68f7f65ca8bcdcb82dbf4808_laptop-repair-photo.png",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "repair-card")}
      data-w-id="a0c00b83-ca0d-7be0-eb72-fbfee076c831"
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "repair-icon")} tag="div">
        <_Builtin.HtmlEmbed
          data-w-id="a0c00b83-ca0d-7be0-eb72-fbfee076c833"
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2213.5%22%20height%3D%2213.5%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M13.7501%201V10.75C13.7501%2010.9489%2013.671%2011.1397%2013.5304%2011.2803C13.3897%2011.421%2013.199%2011.5%2013.0001%2011.5C12.8011%2011.5%2012.6104%2011.421%2012.4697%2011.2803C12.3291%2011.1397%2012.2501%2010.9489%2012.2501%2010.75V2.81031L1.53068%2013.5306C1.38995%2013.6714%201.19907%2013.7504%201.00005%2013.7504C0.801028%2013.7504%200.610156%2013.6714%200.469426%2013.5306C0.328695%2013.3899%200.249634%2013.199%200.249634%2013C0.249634%2012.801%200.328695%2012.6101%200.469426%2012.4694L11.1897%201.75H3.25005C3.05114%201.75%202.86037%201.67098%202.71972%201.53033C2.57907%201.38968%202.50005%201.19891%202.50005%201C2.50005%200.801088%202.57907%200.610322%202.71972%200.46967C2.86037%200.329018%203.05114%200.25%203.25005%200.25H13.0001C13.199%200.25%2013.3897%200.329018%2013.5304%200.46967C13.671%200.610322%2013.7501%200.801088%2013.7501%201Z%22%20fill%3D%22%232E2F33%22%2F%3E%0A%3C%2Fsvg%3E"
        />
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "repair-image")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <_Builtin.Paragraph className={_utils.cx(_styles, "repair-title")}>
        {title}
      </_Builtin.Paragraph>
    </_Component>
  );
}
