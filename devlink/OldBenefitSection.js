"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OldBenefitSection.module.css";

export function OldBenefitSection({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "crp_benefit_section")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-5", "row")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "div-block-6",
            "col",
            "col-lg-6",
            "col-md-12",
            "col-sm-12"
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-6")}
            tag="h3"
          >
            {"Benefits of Using CPR"}
          </_Builtin.Heading>
          <_Builtin.Block className={_utils.cx(_styles, "cpr-tabs")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "cpr_tab", "active")}
              tag="div"
            >
              {"Repair"}
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "cpr_tab")} tag="div">
              {"Warranty"}
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "cpr_tab")} tag="div">
              {"Same-Day Repairs"}
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "cpr_tab")} tag="div">
              {"Pricing"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "crp-content")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "rating-heading")}
              tag="h5"
              id="cpr_title"
            >
              {"Expert Repair Technitians"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "testimonial-paragraph")}
              id="cpr_desc"
            >
              {
                "Our certified repair experts have the skills and experience to handle everything from cell phone screen replacements to laptop repairs. Rest assured, your device will be restored to like-new condition with care and precision."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-8")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "u-h-38",
                "u-w-38",
                "u-br-20",
                "cpr_prev"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2015%22%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20d%3D%22M0.183401%207.91873L7.34556%2014.8232C7.46782%2014.9411%207.61262%2015%207.77993%2015C7.94723%2015%208.09203%2014.9411%208.21429%2014.8232L9.8166%2013.2785C9.93887%2013.1607%2010%2013.0211%2010%2012.8598C10%2012.6985%209.93887%2012.5589%209.8166%2012.4411L4.69112%207.5L9.8166%202.55893C9.93887%202.44107%2010%202.30148%2010%202.1402C10%201.97891%209.93887%201.83932%209.8166%201.72146L8.21429%200.176804C8.09203%200.058925%207.94723%203.47385e-07%207.77993%203.40072e-07C7.61262%203.32758e-07%207.46782%200.058925%207.34556%200.176804L0.183401%207.08127C0.0611394%207.19913%203.34886e-07%207.3387%203.27836e-07%207.5C3.20785e-07%207.66129%200.0611394%207.80086%200.183401%207.91873Z%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fill%3D%22%232E2F33%22%20%2F%3E%0A%3C%2Fsvg%3E" />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "u-h-38",
                "u-w-38",
                "u-br-20",
                "u-bg-orange-100",
                "active-arrow",
                "cpr_next"
              )}
              tag="div"
            >
              <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2015%22%20fill%3D%22none%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20d%3D%22M9.8166%207.91873L2.65444%2014.8232C2.53218%2014.9411%202.38739%2015%202.22007%2015C2.05277%2015%201.90798%2014.9411%201.78571%2014.8232L0.183398%2013.2785C0.0611324%2013.1607%205.6917e-07%2013.0211%205.6212e-07%2012.8598C5.5507e-07%2012.6985%200.0611324%2012.5589%200.183397%2012.4411L5.30888%207.5L0.183397%202.55893C0.0611319%202.44107%201.00601e-07%202.30148%209.35513e-08%202.1402C8.65009e-08%201.97891%200.0611319%201.83932%200.183397%201.72146L1.78571%200.176804C1.90797%200.058925%202.05277%203.47385e-07%202.22007%203.40072e-07C2.38738%203.32758e-07%202.53218%200.058925%202.65444%200.176804L9.8166%207.08127C9.93886%207.19913%2010%207.3387%2010%207.5C10%207.66129%209.93886%207.80086%209.8166%207.91873Z%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20fill%3D%22%232E2F33%22%20%2F%3E%0A%3C%2Fsvg%3E" />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "div-block-7",
            "col",
            "col-lg-6",
            "col-md-12",
            "col-sm-12"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-4")}
            loading="lazy"
            width="auto"
            height="auto"
            id="cpr_image"
            alt=""
            src="https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/68fc77d5f8e805d2f94b8938_cpr-tab-img.png"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
