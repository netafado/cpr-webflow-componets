"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Icon } from "./Icon";
import * as _utils from "./utils";
import _styles from "./CprMainBanner.module.css";

export function CprMainBanner({
  as: _Component = _Builtin.Block,
  headerBadge = "The Global Leader in",
  headerTitle = "Quick and budget-friendly repairs for your tablet, computer, game console, and smartphone",
  headerLocationCtaText = "Start a Repair",
  headerLocationText = "Use my current location instead",
  headerBannerImage = "https://cdn.prod.website-files.com/68f62d1c547c12e49e27549e/68f90b94ef329d37b9b39c4c_banner-devices%202.png",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "cell_phone_banner", "row")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "banner_content",
          "flex-box",
          "col",
          "col-lg-6",
          "col-sm-12",
          "col-md-12"
        )}
        id={_utils.cx(
          _styles,
          "w-node-_3a112b27-da97-92c4-7801-71f6c152d465-c152d464"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "banner_header")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "badge")} tag="div">
            {headerBadge}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "cell_phone_banner_heading")}
            tag="h1"
          >
            {headerTitle}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "banner_geolocation")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "banner_form")}
            tag="div"
          >
            <_Builtin.FormWrapper className={_utils.cx(_styles, "form-block")}>
              <_Builtin.FormForm
                className={_utils.cx(_styles, "form-2")}
                name="email-form"
                data-name="Email Form"
                method="get"
                id="email-form"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field")}
                  autoFocus={false}
                  maxLength={256}
                  name="Text"
                  data-name="Text"
                  placeholder="Find a CPR near yoy. Enter city or Zip..."
                  type="text"
                  disabled={false}
                  required={true}
                  id="Text"
                />
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "submit-button")}
                  type="submit"
                  data-wait="Please wait..."
                />
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "code-embed-2")}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M19.3013%2018.2401L14.6073%2013.547C15.9678%2011.9136%2016.6462%209.81853%2016.5014%207.69766C16.3566%205.5768%2015.3998%203.5934%2013.8299%202.16007C12.26%200.726741%2010.1979%20-0.0461652%208.07263%200.0021347C5.94738%200.0504346%203.92256%200.916222%202.41939%202.41939C0.916222%203.92256%200.0504346%205.94738%200.0021347%208.07263C-0.0461652%2010.1979%200.726741%2012.26%202.16007%2013.8299C3.5934%2015.3998%205.5768%2016.3566%207.69766%2016.5014C9.81853%2016.6462%2011.9136%2015.9678%2013.547%2014.6073L18.2401%2019.3013C18.3098%2019.371%2018.3925%2019.4263%2018.4836%2019.464C18.5746%2019.5017%2018.6722%2019.5211%2018.7707%2019.5211C18.8693%2019.5211%2018.9669%2019.5017%2019.0579%2019.464C19.1489%2019.4263%2019.2317%2019.371%2019.3013%2019.3013C19.371%2019.2317%2019.4263%2019.1489%2019.464%2019.0579C19.5017%2018.9669%2019.5211%2018.8693%2019.5211%2018.7707C19.5211%2018.6722%2019.5017%2018.5746%2019.464%2018.4836C19.4263%2018.3925%2019.371%2018.3098%2019.3013%2018.2401ZM1.52072%208.27072C1.52072%206.9357%201.9166%205.63065%202.6583%204.52062C3.4%203.41059%204.45421%202.54543%205.68761%202.03454C6.92101%201.52364%208.27821%201.38997%209.58758%201.65042C10.897%201.91087%2012.0997%202.55375%2013.0437%203.49775C13.9877%204.44176%2014.6306%205.64449%2014.891%206.95386C15.1515%208.26323%2015.0178%209.62043%2014.5069%2010.8538C13.996%2012.0872%2013.1309%2013.1414%2012.0208%2013.8831C10.9108%2014.6248%209.60575%2015.0207%208.27072%2015.0207C6.48112%2015.0187%204.76538%2014.3069%203.49994%2013.0415C2.2345%2011.7761%201.52271%2010.0603%201.52072%208.27072Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage>
                <_Builtin.Block tag="div">
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
            <_Builtin.DOM
              className={_utils.cx(_styles, "button")}
              tag="div"
              slot=""
              _class=""
              id=""
              style=""
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "btn-text")}
                tag="div"
                aria-hidden="true"
              >
                {headerLocationCtaText}
              </_Builtin.Block>
              <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%2212%22%20viewBox%3D%220%200%209%2012%22%20fill%3D%22none%22%3E%0A%20%20%3Cg%20clip-path%3D%22url(%23clip0_7408_2042)%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.97702%208.80538L3.02266%2011.9267L0.476979%209.23678L3.43089%206.11544L0.476074%202.9936L3.02266%200.303192L5.97748%203.42503L8.52318%206.11498L5.97702%208.80538Z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3CclipPath%20id%3D%22clip0_7408_2042%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%229%22%20height%3D%2212%22%20fill%3D%22white%22%2F%3E%0A%20%20%20%20%3C%2FclipPath%3E%0A%20%20%3C%2Fdefs%3E%0A%3C%2Fsvg%3E" />
              <_Builtin.Link
                className={_utils.cx(_styles, "u-link-cover")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "u-sr-only")}
                  tag="div"
                >
                  {"Start a Repair "}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.DOM>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "location")} tag="div">
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "code-embed-3")}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20d%3D%22M8.75%206.25C8.75%206.00277%208.82331%205.7611%208.96066%205.55554C9.09801%205.34998%209.29324%205.18976%209.52165%205.09515C9.75005%205.00054%2010.0014%204.97579%2010.2439%205.02402C10.4863%205.07225%2010.7091%205.1913%2010.8839%205.36612C11.0587%205.54093%2011.1778%205.76366%2011.226%206.00614C11.2742%206.24861%2011.2495%206.49995%2011.1549%206.72835C11.0602%206.95676%2010.9%207.15199%2010.6945%207.28934C10.4889%207.42669%2010.2472%207.5%2010%207.5C9.66848%207.5%209.35054%207.3683%209.11612%207.13388C8.8817%206.89946%208.75%206.58152%208.75%206.25ZM5%206.25C5%204.92392%205.52678%203.65215%206.46447%202.71447C7.40215%201.77678%208.67392%201.25%2010%201.25C11.3261%201.25%2012.5979%201.77678%2013.5355%202.71447C14.4732%203.65215%2015%204.92392%2015%206.25C15%2010.9336%2010.5016%2013.5578%2010.3125%2013.668C10.218%2013.722%2010.1111%2013.7504%2010.0023%2013.7504C9.89355%2013.7504%209.78664%2013.722%209.69219%2013.668C9.49844%2013.5578%205%2010.9375%205%206.25ZM6.25%206.25C6.25%209.54688%209.05%2011.7352%2010%2012.3828C10.9492%2011.7359%2013.75%209.54688%2013.75%206.25C13.75%205.25544%2013.3549%204.30161%2012.6517%203.59835C11.9484%202.89509%2010.9946%202.5%2010%202.5C9.00544%202.5%208.05161%202.89509%207.34835%203.59835C6.64509%204.30161%206.25%205.25544%206.25%206.25ZM15.8414%2011.5336C15.6876%2011.4828%2015.52%2011.4937%2015.3741%2011.564C15.2281%2011.6343%2015.1152%2011.7585%2015.0591%2011.9105C15.0029%2012.0625%2015.008%2012.2303%2015.0732%2012.3786C15.1384%2012.5269%2015.2587%2012.6441%2015.4086%2012.7055C16.6984%2013.1828%2017.5%2013.8219%2017.5%2014.375C17.5%2015.4187%2014.6469%2016.875%2010%2016.875C5.35313%2016.875%202.5%2015.4187%202.5%2014.375C2.5%2013.8219%203.30156%2013.1828%204.59141%2012.7063C4.74134%2012.6449%204.86158%2012.5277%204.92679%2012.3794C4.99199%2012.2311%204.99707%2012.0633%204.94094%2011.9113C4.88481%2011.7593%204.77187%2011.6351%204.62592%2011.5648C4.47997%2011.4945%204.31242%2011.4836%204.15859%2011.5344C2.28281%2012.2258%201.25%2013.2352%201.25%2014.375C1.25%2016.8109%205.75859%2018.125%2010%2018.125C14.2414%2018.125%2018.75%2016.8109%2018.75%2014.375C18.75%2013.2352%2017.7172%2012.2258%2015.8414%2011.5336Z%22%20fill%3D%22%232E2F33%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Link
              className={_utils.cx(_styles, "button-2")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {headerLocationText}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "banner_image_container",
          "col",
          "col-lg-6",
          "col-sm-12",
          "col-md-12"
        )}
        id={_utils.cx(
          _styles,
          "w-node-_3a112b27-da97-92c4-7801-71f6c152d487-c152d464"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "banner_image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={headerBannerImage}
        />
      </_Builtin.Block>
    </_Component>
  );
}
