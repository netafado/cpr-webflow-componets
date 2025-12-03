"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({
  as: _Component = _Builtin.Section,
  colorMode = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    Invert: "w-variant-03470b75-1c46-84c5-1d69-d2bb1e4cbe42",
  };

  const _activeStyleVariant = _styleVariantMap[colorMode];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "crp_benefit_section",
        "cc-footer",
        _activeStyleVariant
      )}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "row", _activeStyleVariant)}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "col",
              "col-sm-12",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "footer-logo_link",
                _activeStyleVariant
              )}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "u-w-100", _activeStyleVariant)}
                value="%3Csvg%20viewBox%3D%220%200%20101%2027%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.9187%2026.6316H16.4157L23.1435%209.59964V26.6316H28.03V1.2076H21.5855L14.1849%2020.0454L6.81977%201.2076H0.375244V26.6316H5.26175V9.74128L11.9187%2026.6316Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M50.2224%2026.6316H55.9941L46.5044%201.2076H40.6264L31.0658%2026.6316H36.4835L38.431%2021.1785H48.3102L50.2224%2026.6316ZM43.4237%207.08557L46.823%2016.894H39.9536L43.4237%207.08557Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M77.9103%2018.7353C77.9103%2014.9819%2075.5025%2012.9281%2071.0409%2012.0429L66.6855%2011.1577C64.8442%2010.8036%2063.2508%2010.06%2063.2508%208.3249C63.2508%206.55443%2064.738%205.06723%2067.3583%205.06723C70.0494%205.06723%2071.8907%206.87312%2072.0678%209.52883H77.5208C77.1667%204.21741%2072.9884%200.888916%2067.2875%200.888916C61.799%200.888916%2057.7978%204.14659%2057.7978%208.679C57.7978%2012.8927%2060.7722%2014.9819%2064.6318%2015.7255L68.8101%2016.5399C70.9701%2016.9648%2072.2094%2017.9209%2072.2094%2019.5143C72.2094%2021.568%2070.2619%2022.772%2067.5354%2022.772C64.2423%2022.772%2062.4364%2020.9661%2062.2948%2018.1687H56.8417C57.2312%2023.551%2061.2325%2026.9857%2067.6416%2026.9857C74.0153%2026.9857%2077.9103%2023.5864%2077.9103%2018.7353Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M92.4503%2026.6316V6.0587H100.488V1.2076H79.0656V6.0587H87.0681V26.6316H92.4503Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "col",
              "col-lg-9",
              "col-sm-12",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "row", _activeStyleVariant)}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "col",
                  "col-lg-3",
                  "col-md-6",
                  "col-xs-12",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <_Builtin.List
                  className={_utils.cx(_styles, "u-mb-0", _activeStyleVariant)}
                  tag="ul"
                  unstyled={true}
                >
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "col",
                  "col-lg-3",
                  "col-md-6",
                  "col-xs-12",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <_Builtin.List
                  className={_utils.cx(_styles, "u-mb-0", _activeStyleVariant)}
                  tag="ul"
                  unstyled={true}
                >
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "col",
                  "col-lg-3",
                  "col-md-6",
                  "col-xs-12",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <_Builtin.List
                  className={_utils.cx(_styles, "u-mb-0", _activeStyleVariant)}
                  tag="ul"
                  unstyled={true}
                >
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "col",
                  "col-lg-3",
                  "col-md-6",
                  "col-xs-12",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <_Builtin.List
                  className={_utils.cx(_styles, "u-mb-0", _activeStyleVariant)}
                  tag="ul"
                  unstyled={true}
                >
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer-link",
                        _activeStyleVariant
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Footer link"}
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "u-border",
            "u-mt-md",
            "u-mb-md",
            _activeStyleVariant
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "row",
            "row-justify-between",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "col",
              "col-shrink",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Block tag="div">
              {"© "}
              <_Builtin.Span data-footer-year="">{"2025"}</_Builtin.Span>
              {" Company"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "col",
              "col-shrink",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.List
              className={_utils.cx(
                _styles,
                "footer-social_list",
                _activeStyleVariant
              )}
              tag="ul"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(_styles, "u-mb-0", _activeStyleVariant)}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "footer-social_link",
                    _activeStyleVariant
                  )}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "u-w-100",
                      _activeStyleVariant
                    )}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <_Builtin.DOM tag="title" slot="">
                      {"YouTube"}
                    </_Builtin.DOM>
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M22.0632 7.20301C21.9493 6.78041 21.7267 6.39501 21.4176 6.08518C21.1084 5.77534 20.7235 5.55187 20.3012 5.43701C18.7352 5.00701 12.4702 5.00001 12.4702 5.00001C12.4702 5.00001 6.20621 4.99301 4.63921 5.40401C4.21713 5.52415 3.83303 5.75078 3.52377 6.06214C3.21452 6.3735 2.99049 6.75913 2.87321 7.18201C2.46021 8.74801 2.45621 11.996 2.45621 11.996C2.45621 11.996 2.45221 15.26 2.86221 16.81C3.09221 17.667 3.76721 18.344 4.62521 18.575C6.20721 19.005 12.4552 19.012 12.4552 19.012C12.4552 19.012 18.7202 19.019 20.2862 18.609C20.7087 18.4943 21.094 18.2714 21.4039 17.9622C21.7138 17.653 21.9376 17.2682 22.0532 16.846C22.4672 15.281 22.4702 12.034 22.4702 12.034C22.4702 12.034 22.4902 8.76901 22.0632 7.20301ZM10.4662 15.005L10.4712 9.00501L15.6782 12.01L10.4662 15.005Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "u-mb-0", _activeStyleVariant)}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "footer-social_link",
                    _activeStyleVariant
                  )}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "u-w-100",
                      _activeStyleVariant
                    )}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <_Builtin.DOM tag="title" slot="">
                      {"LinkedIn"}
                    </_Builtin.DOM>
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M20.4702 3H4.47021C4.205 3 3.95064 3.10536 3.76311 3.29289C3.57557 3.48043 3.47021 3.73478 3.47021 4V20C3.47021 20.2652 3.57557 20.5196 3.76311 20.7071C3.95064 20.8946 4.205 21 4.47021 21H20.4702C20.7354 21 20.9898 20.8946 21.1773 20.7071C21.3649 20.5196 21.4702 20.2652 21.4702 20V4C21.4702 3.73478 21.3649 3.48043 21.1773 3.29289C20.9898 3.10536 20.7354 3 20.4702 3ZM8.80921 18.337H6.13721V9.747H8.80921V18.337ZM7.47321 8.574C7.06266 8.574 6.66892 8.41091 6.37861 8.1206C6.08831 7.8303 5.92521 7.43655 5.92521 7.026C5.92521 6.61544 6.08831 6.22171 6.37861 5.9314C6.66892 5.64109 7.06266 5.478 7.47321 5.478C7.88377 5.478 8.27751 5.64109 8.56782 5.9314C8.85812 6.22171 9.02121 6.61544 9.02121 7.026C9.02121 7.43655 8.85812 7.8303 8.56782 8.1206C8.27751 8.41091 7.88377 8.574 7.47321 8.574ZM18.8082 18.337H16.1392V14.16C16.1392 13.164 16.1212 11.883 14.7512 11.883C13.3612 11.883 13.1502 12.969 13.1502 14.09V18.338H10.4832V9.748H13.0432V10.922H13.0802C13.4352 10.247 14.3072 9.535 15.6042 9.535C18.3082 9.535 18.8072 11.313 18.8072 13.627L18.8082 18.337Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(_styles, "u-mb-0", _activeStyleVariant)}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "footer-social_link",
                    _activeStyleVariant
                  )}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "u-w-100",
                      _activeStyleVariant
                    )}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 25 24"
                    fill="currentColor"
                  >
                    <_Builtin.DOM tag="title" slot="">
                      {"X"}
                    </_Builtin.DOM>
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M16.9333 4.58008H19.315L14.1131 10.8213L20.2326 19.3154H15.4422L11.6875 14.1652L7.39648 19.3154H5.01143L10.5743 12.6385L4.70782 4.58008H9.6196L13.0099 9.28759L16.9333 4.58008ZM16.0967 17.8206H17.4157L8.90105 5.99694H7.48419L16.0967 17.8206Z"
                    />
                  </_Builtin.DOM>
                </_Builtin.Link>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
