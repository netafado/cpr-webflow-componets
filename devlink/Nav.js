"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

export function Nav({
  as: _Component = _Builtin.NavbarWrapper,
  colorMode = "Base",
  navMenuVisibility = true,
}) {
  const _styleVariantMap = {
    Base: "",
    Invert: "w-variant-b23b0bfb-3285-ab6f-754f-ce412db82d06",
  };

  const _activeStyleVariant = _styleVariantMap[colorMode];

  return (
    <_Component
      className={_utils.cx(_styles, "nav", _activeStyleVariant)}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: true,
        duration: 0,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "nav-custom-css", _activeStyleVariant)}
        value="%3Cstyle%3E%0A%09%2F*%20Mobile%20menu%20button%20animation%20*%2F%0A%20%20.nav-menu_btn.w--open%20.cc-top%20%7B%0A%20%20%20%20transform%3A%20translateY(9px)%20rotate(45deg)%3B%0A%20%20%7D%0A%20%20.nav-menu_btn.w--open%20.cc-middle%20%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20transform%3A%20translateY(0)%3B%0A%20%20%7D%0A%20%20.nav-menu_btn.w--open%20.cc-bottom%20%7B%0A%20%20%20%20transform%3A%20translateY(-9px)%20rotate(-45deg)%3B%0A%20%20%7D%0A%0A%20%20%2F*%20When%20a%20nav%20dropdown%20is%20open..%20*%2F%0A%20%20%2F*%20..Rotate%20narrow%20*%2F%0A%20%20.nav-link.w--open%20.nav-dropdown_arrow%20%7B%0A%20%20%20%20transform%3A%20rotate(180deg)%0A%20%20%7D%0A%20%20%2F*%20..Show%20overlay%20on%20desktop%20*%2F%0A%20%20%40media%20(min-width%3A%20992px)%20%7B%0A%20%20%20%20.nav-menu%3Ahas(.nav-link.w--open)%20.nav-dropdown_overlay%20%7B%0A%20%20%20%20%20%20display%3A%20block%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%2F*%20Lock%20body%20scroll%20when%20mobile%20nav%20is%20open%20*%2F%0A%20%20body%3Ahas(%20.w-nav-button.w--open)%20%7B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Nav%20CTA%20wrapper%20mode%20when%20nav%20menu%20hidden%20*%2F%0A%20%20%40media%20(min-width%3A%20992px)%20%7B%0A%20%20%20%20.nav-menu%20%2B%20.nav-cta-wrapper%20%7B%0A%20%20%20%20%20%20margin-left%3A%200%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "nav-custom-js", _activeStyleVariant)}
        value="%3Cscript%3E%0A%09%2F%2F----%20Skip%20to%20%3Cmain%3E%20functionality%20----%0A%20%20document.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20skipLinkEle%20%3D%20document.getElementById('skip-link')%3B%0A%20%20%20%20if%20(!skipLinkEle)%20return%3B%0A%0A%20%20%20%20skipLinkEle.addEventListener('click'%2C%20handleSkipLink)%3B%0A%20%20%20%20skipLinkEle.addEventListener('keydown'%2C%20handleSkipLink)%3B%0A%20%20%7D)%3B%0A%0A%20%20function%20handleSkipLink(e)%20%7B%0A%20%20%20%20if%20(e.type%20%3D%3D%3D%20'keydown'%20%26%26%20e.key%20!%3D%3D%20'Enter')%20return%3B%0A%0A%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20const%20target%20%3D%20document.querySelector('main')%3B%0A%20%20%20%20target.setAttribute('tabindex'%2C%20'-1')%3B%0A%20%20%20%20target.focus()%3B%0A%20%20%7D%0A%3C%2Fscript%3E"
      />
      <_Builtin.Link
        className={_utils.cx(_styles, "nav-skip-link", _activeStyleVariant)}
        button={false}
        id="skip-link"
        block=""
        options={{
          href: "#main",
        }}
      >
        {"Skip to Main Content"}
      </_Builtin.Link>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "cc-nav",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "nav-logo_link", _activeStyleVariant)}
          options={{
            href: "#",
          }}
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "u-w-100", _activeStyleVariant)}
            value="%3Csvg%20viewBox%3D%220%200%20101%2027%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.9187%2026.6316H16.4157L23.1435%209.59964V26.6316H28.03V1.2076H21.5855L14.1849%2020.0454L6.81977%201.2076H0.375244V26.6316H5.26175V9.74128L11.9187%2026.6316Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M50.2224%2026.6316H55.9941L46.5044%201.2076H40.6264L31.0658%2026.6316H36.4835L38.431%2021.1785H48.3102L50.2224%2026.6316ZM43.4237%207.08557L46.823%2016.894H39.9536L43.4237%207.08557Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M77.9103%2018.7353C77.9103%2014.9819%2075.5025%2012.9281%2071.0409%2012.0429L66.6855%2011.1577C64.8442%2010.8036%2063.2508%2010.06%2063.2508%208.3249C63.2508%206.55443%2064.738%205.06723%2067.3583%205.06723C70.0494%205.06723%2071.8907%206.87312%2072.0678%209.52883H77.5208C77.1667%204.21741%2072.9884%200.888916%2067.2875%200.888916C61.799%200.888916%2057.7978%204.14659%2057.7978%208.679C57.7978%2012.8927%2060.7722%2014.9819%2064.6318%2015.7255L68.8101%2016.5399C70.9701%2016.9648%2072.2094%2017.9209%2072.2094%2019.5143C72.2094%2021.568%2070.2619%2022.772%2067.5354%2022.772C64.2423%2022.772%2062.4364%2020.9661%2062.2948%2018.1687H56.8417C57.2312%2023.551%2061.2325%2026.9857%2067.6416%2026.9857C74.0153%2026.9857%2077.9103%2023.5864%2077.9103%2018.7353Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M92.4503%2026.6316V6.0587H100.488V1.2076H79.0656V6.0587H87.0681V26.6316H92.4503Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.NavbarBrand>
        {navMenuVisibility ? (
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "nav-menu_btn", _activeStyleVariant)}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-menu_btn-bar",
                "cc-top",
                _activeStyleVariant
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-menu_btn-bar",
                "cc-middle",
                _activeStyleVariant
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-menu_btn-bar",
                "cc-bottom",
                _activeStyleVariant
              )}
              tag="div"
            />
          </_Builtin.NavbarButton>
        ) : null}
        {navMenuVisibility ? (
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav-menu", _activeStyleVariant)}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-dropdown_overlay",
                _activeStyleVariant
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "nav-menu_container",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav-link", _activeStyleVariant)}
                options={{
                  href: "#",
                }}
              >
                {"Static Link"}
              </_Builtin.NavbarLink>
              <_Builtin.DropdownWrapper
                className={_utils.cx(
                  _styles,
                  "nav-dropdown",
                  _activeStyleVariant
                )}
                tag="div"
                delay={0}
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(
                    _styles,
                    "nav-link",
                    "cc-dropdown-btn",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Simple Drop"}</_Builtin.Block>
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "nav-dropdown_arrow",
                      _activeStyleVariant
                    )}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M16.293 9.29297L12 13.586L7.70697 9.29297L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29297Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(
                    _styles,
                    "nav-dropdown_content",
                    _activeStyleVariant
                  )}
                  tag="nav"
                >
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "cc-dropdown-link",
                      _activeStyleVariant
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Link 1"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "cc-dropdown-link",
                      _activeStyleVariant
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Link 2"}
                  </_Builtin.DropdownLink>
                  <_Builtin.DropdownLink
                    className={_utils.cx(
                      _styles,
                      "nav-link",
                      "cc-dropdown-link",
                      _activeStyleVariant
                    )}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Link 3"}
                  </_Builtin.DropdownLink>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                className={_utils.cx(
                  _styles,
                  "nav-dropdown",
                  "cc-mega",
                  _activeStyleVariant
                )}
                tag="div"
                delay={0}
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(
                    _styles,
                    "nav-link",
                    "cc-dropdown-btn",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  <_Builtin.Block tag="div">{"Mega Drop"}</_Builtin.Block>
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "nav-dropdown_arrow",
                      _activeStyleVariant
                    )}
                    tag="svg"
                    slot=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <_Builtin.DOM
                      tag="path"
                      slot=""
                      d="M16.293 9.29297L12 13.586L7.70697 9.29297L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29297Z"
                      fill="currentColor"
                    />
                  </_Builtin.DOM>
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(
                    _styles,
                    "nav-dropdown_content",
                    "cc-mega",
                    _activeStyleVariant
                  )}
                  tag="nav"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "container",
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
                          "col-sm-12",
                          _activeStyleVariant
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "eyebrow",
                            _activeStyleVariant
                          )}
                          tag="h2"
                        >
                          {"Category"}
                        </_Builtin.Heading>
                        <_Builtin.List
                          className={_utils.cx(
                            _styles,
                            "u-mb-0",
                            _activeStyleVariant
                          )}
                          tag="ul"
                          unstyled={true}
                        >
                          <_Builtin.ListItem>
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 1"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                          <_Builtin.ListItem>
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 2"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                          <_Builtin.ListItem
                            className={_utils.cx(
                              _styles,
                              "u-mb-0",
                              _activeStyleVariant
                            )}
                          >
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 3"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                        </_Builtin.List>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "col",
                          "col-lg-3",
                          "col-md-6",
                          "col-sm-12",
                          _activeStyleVariant
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "eyebrow",
                            _activeStyleVariant
                          )}
                          tag="h2"
                        >
                          {"Category"}
                        </_Builtin.Heading>
                        <_Builtin.List
                          className={_utils.cx(
                            _styles,
                            "u-mb-0",
                            _activeStyleVariant
                          )}
                          tag="ul"
                          unstyled={true}
                        >
                          <_Builtin.ListItem>
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 1"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                          <_Builtin.ListItem>
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 2"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                          <_Builtin.ListItem
                            className={_utils.cx(
                              _styles,
                              "u-mb-0",
                              _activeStyleVariant
                            )}
                          >
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 3"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                        </_Builtin.List>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "col",
                          "col-lg-3",
                          "col-md-6",
                          "col-sm-12",
                          _activeStyleVariant
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "eyebrow",
                            _activeStyleVariant
                          )}
                          tag="h2"
                        >
                          {"Category"}
                        </_Builtin.Heading>
                        <_Builtin.List
                          className={_utils.cx(
                            _styles,
                            "u-mb-0",
                            _activeStyleVariant
                          )}
                          tag="ul"
                          unstyled={true}
                        >
                          <_Builtin.ListItem>
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 1"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                          <_Builtin.ListItem>
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 2"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                          <_Builtin.ListItem
                            className={_utils.cx(
                              _styles,
                              "u-mb-0",
                              _activeStyleVariant
                            )}
                          >
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 3"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                        </_Builtin.List>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "col",
                          "col-lg-3",
                          "col-md-6",
                          "col-sm-12",
                          _activeStyleVariant
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(
                            _styles,
                            "eyebrow",
                            _activeStyleVariant
                          )}
                          tag="h2"
                        >
                          {"Category"}
                        </_Builtin.Heading>
                        <_Builtin.List
                          className={_utils.cx(
                            _styles,
                            "u-mb-0",
                            _activeStyleVariant
                          )}
                          tag="ul"
                          unstyled={true}
                        >
                          <_Builtin.ListItem>
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 1"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                          <_Builtin.ListItem>
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 2"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                          <_Builtin.ListItem
                            className={_utils.cx(
                              _styles,
                              "u-mb-0",
                              _activeStyleVariant
                            )}
                          >
                            <_Builtin.DropdownLink
                              className={_utils.cx(
                                _styles,
                                "nav-link",
                                "cc-dropdown-link",
                                _activeStyleVariant
                              )}
                              options={{
                                href: "#",
                              }}
                            >
                              {"Link 3"}
                            </_Builtin.DropdownLink>
                          </_Builtin.ListItem>
                        </_Builtin.List>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
        ) : null}
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-cta-wrapper", _activeStyleVariant)}
          tag="div"
        >
          <Button buttonText="Primary CTA" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
