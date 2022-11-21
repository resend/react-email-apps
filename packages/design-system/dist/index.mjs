var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/button/button.tsx
import * as React from "react";
import classnames from "classnames";

// src/utils/unreachable.ts
var unreachable = (condition, message = `Entered unreachable code. Received '${condition}'.`) => {
  throw new TypeError(message);
};

// src/button/button.tsx
import * as SlotPrimitive from "@radix-ui/react-slot";
import { jsx } from "react/jsx-runtime";
var Button = React.forwardRef(
  (_a, forwardedRef) => {
    var _b = _a, {
      asChild,
      appearance = "white",
      className,
      children,
      size = "2"
    } = _b, props = __objRest(_b, [
      "asChild",
      "appearance",
      "className",
      "children",
      "size"
    ]);
    const classNames = classnames(
      getSize(size),
      getAppearance(appearance),
      "inline-flex items-center justify-center border font-medium",
      className
    );
    return asChild ? /* @__PURE__ */ jsx(SlotPrimitive.Slot, __spreadProps(__spreadValues({
      ref: forwardedRef
    }, props), {
      className: classNames,
      children: /* @__PURE__ */ jsx(SlotPrimitive.Slottable, {
        children
      })
    })) : /* @__PURE__ */ jsx("button", __spreadProps(__spreadValues({
      ref: forwardedRef,
      className: classNames
    }, props), {
      children
    }));
  }
);
Button.displayName = "Button";
var getAppearance = (appearance) => {
  switch (appearance) {
    case void 0:
    case "white":
      return [
        "bg-white text-black",
        "hover:bg-white/90",
        "focus:ring-2 focus:ring-white/20 focus:outline-none focus:bg-white/90"
      ];
    case "gradient":
      return [
        "bg-gradient backdrop-blur-[20px] border-[#34343A]",
        "hover:bg-gradientHover",
        "focus:ring-2 focus:ring-white/20 focus:outline-none focus:bg-gradientHover"
      ];
    default:
      unreachable(appearance);
  }
};
var getSize = (size) => {
  switch (size) {
    case "1":
      return "";
    case void 0:
    case "2":
      return "text-[14px] h-8 px-3 rounded-md gap-2";
    case "3":
      return "text-[14px] h-10 px-4 rounded-md gap-2";
    case "4":
      return "text-base h-11 px-4 rounded-md gap-2";
    default:
      unreachable(size);
  }
};

// src/heading/heading.tsx
import * as SlotPrimitive2 from "@radix-ui/react-slot";
import classnames2 from "classnames";
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Heading = React2.forwardRef(
  (_a, forwardedRef) => {
    var _b = _a, {
      as: Tag = "h1",
      size = "3",
      className,
      color = "white",
      children,
      weight = "bold"
    } = _b, props = __objRest(_b, [
      "as",
      "size",
      "className",
      "color",
      "children",
      "weight"
    ]);
    return /* @__PURE__ */ jsx2(SlotPrimitive2.Slot, __spreadProps(__spreadValues({
      ref: forwardedRef,
      className: classnames2(
        className,
        getSizesClassNames(size),
        getColorClassNames(color),
        getWeightClassNames(weight)
      )
    }, props), {
      children: /* @__PURE__ */ jsx2(Tag, {
        children
      })
    }));
  }
);
var getSizesClassNames = (size) => {
  switch (size) {
    case "1":
      return "text-xs";
    case "2":
      return "text-sm";
    case void 0:
    case "3":
      return "text-base";
    case "4":
      return "text-lg";
    case "5":
      return "text-xl tracking-[-0.16px]";
    case "6":
      return "text-2xl tracking-[-0.288px]";
    case "7":
      return "text-[28px] leading-[34px] tracking-[-0.416px]";
    case "8":
      return "text-[35px] leading-[42px] tracking-[-0.64px]";
    case "9":
      return "text-6xl leading-[73px] tracking-[-0.896px]";
    case "10":
      return "text-[70px] leading-[85px] tracking-[-1.024px;]";
    default:
      return unreachable(size);
  }
};
var getColorClassNames = (color) => {
  switch (color) {
    case "gray":
      return "text-slate-11";
    case "white":
    case void 0:
      return "text-slate-12";
    default:
      return unreachable(color);
  }
};
var getWeightClassNames = (weight) => {
  switch (weight) {
    case "medium":
      return "font-medium";
    case "bold":
    case void 0:
      return "font-bold";
    default:
      return unreachable(weight);
  }
};
Heading.displayName = "Heading";

// src/icons/icon-arrow-right.tsx
import * as React4 from "react";

// src/icons/icon-base.tsx
import * as React3 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var IconBase = React3.forwardRef(
  (_a, forwardedRef) => {
    var _b = _a, { size = 20 } = _b, props = __objRest(_b, ["size"]);
    return /* @__PURE__ */ jsx3("svg", __spreadValues({
      ref: forwardedRef,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, props));
  }
);
IconBase.displayName = "IconBase";

// src/icons/icon-arrow-right.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var IconArrowRight = React4.forwardRef((_a, forwardedRef) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxs(IconBase, __spreadProps(__spreadValues({
    ref: forwardedRef
  }, props), {
    children: [
      /* @__PURE__ */ jsx4("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M13.75 6.75L19.25 12L13.75 17.25"
      }),
      /* @__PURE__ */ jsx4("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M19 12H4.75"
      })
    ]
  }));
});
IconArrowRight.displayName = "IconArrowRight";

// src/icons/icon-clipboard.tsx
import * as React5 from "react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var IconClipboard = React5.forwardRef(
  (_a, forwardedRef) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ jsxs2(IconBase, __spreadProps(__spreadValues({
      ref: forwardedRef
    }, props), {
      children: [
        /* @__PURE__ */ jsx5("path", {
          d: "M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }),
        /* @__PURE__ */ jsx5("path", {
          d: "M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }),
        /* @__PURE__ */ jsx5("path", {
          d: "M9.75 12.25H14.25",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }),
        /* @__PURE__ */ jsx5("path", {
          d: "M9.75 15.25H14.25",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      ]
    }));
  }
);
IconClipboard.displayName = "IconClipboard";

// src/icon-button/icon-button.tsx
import classnames3 from "classnames";
import * as React6 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var IconButton = React6.forwardRef((_a, forwardedRef) => {
  var _b = _a, { children, className } = _b, props = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx6("button", __spreadProps(__spreadValues({}, props), {
    ref: forwardedRef,
    className: classnames3(
      "text-slate-11 focus:text-slate-12 focus:ring-slate-8 hover:text-slate-12 rounded transition duration-200 ease-in-out focus:outline-none focus:ring-2",
      className
    ),
    children
  }));
});
IconButton.displayName = "IconButton";

// src/logo/logo.tsx
import * as React7 from "react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Logo = React7.forwardRef(
  (_a, forwardedRef) => {
    var props = __objRest(_a, []);
    return /* @__PURE__ */ jsxs3("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxs3("g", {
          clipPath: "url(#clip0_337_924)",
          children: [
            /* @__PURE__ */ jsx7("rect", {
              width: "40",
              height: "40",
              rx: "8",
              fill: "black"
            }),
            /* @__PURE__ */ jsx7("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24.4558 24.4853C25.2339 23.7073 25.3805 22.6549 25.2947 21.746C25.2078 20.8254 24.8697 19.8258 24.3896 18.8287C23.957 17.9302 23.3802 16.9745 22.6821 16C23.3802 15.0255 23.957 14.0698 24.3896 13.1713C24.8697 12.1742 25.2078 11.1746 25.2947 10.254C25.3805 9.34508 25.2339 8.29273 24.4558 7.51472C23.6778 6.73671 22.6255 6.59004 21.7165 6.67584C20.796 6.76273 19.7964 7.10086 18.7993 7.58094C17.9007 8.01357 16.945 8.59036 15.9706 9.28842C14.9961 8.59036 14.0404 8.01357 13.1418 7.58094C12.1447 7.10086 11.1451 6.76273 10.2246 6.67584C9.31564 6.59004 8.26329 6.73671 7.48528 7.51472C6.70727 8.29273 6.5606 9.34508 6.6464 10.254C6.7333 11.1746 7.07142 12.1742 7.5515 13.1713C7.98414 14.0698 8.56092 15.0255 9.25898 16C8.56092 16.9745 7.98414 17.9302 7.5515 18.8287C7.07142 19.8258 6.7333 20.8254 6.6464 21.746C6.5606 22.6549 6.70727 23.7073 7.48528 24.4853C8.26329 25.2633 9.31564 25.41 10.2246 25.3242C11.1451 25.2373 12.1447 24.8991 13.1418 24.4191C14.0404 23.9864 14.9961 23.4096 15.9706 22.7116C16.945 23.4096 17.9007 23.9864 18.7993 24.4191C19.7964 24.8991 20.796 25.2373 21.7165 25.3242C22.6255 25.41 23.6778 25.2633 24.4558 24.4853ZM15.9706 20.948C16.8399 20.2684 17.724 19.4874 18.591 18.6205C19.458 17.7535 20.239 16.8693 20.9186 16C20.239 15.1307 19.458 14.2465 18.591 13.3795C17.724 12.5126 16.8399 11.7316 15.9706 11.052C15.1012 11.7316 14.2171 12.5126 13.3501 13.3795C12.4831 14.2465 11.7021 15.1307 11.0225 16C11.7021 16.8693 12.4831 17.7535 13.3501 18.6205C14.2171 19.4874 15.1012 20.2684 15.9706 20.948ZM17.1498 21.8145C17.968 21.1558 18.7885 20.4195 19.5893 19.6187C20.39 18.818 21.1264 17.9974 21.7851 17.1792C23.7187 19.9919 24.4627 22.4819 23.4576 23.487C22.4524 24.4922 19.9625 23.7482 17.1498 21.8145ZM10.156 17.1792C10.8148 17.9974 11.5511 18.818 12.3518 19.6187C13.1526 20.4195 13.9731 21.1558 14.7914 21.8145C11.9786 23.7482 9.48871 24.4922 8.48355 23.487C7.47839 22.4819 8.22238 19.9919 10.156 17.1792ZM10.156 14.8208C10.8148 14.0026 11.5511 13.182 12.3518 12.3813C13.1526 11.5805 13.9731 10.8442 14.7914 10.1855C11.9786 8.25182 9.48871 7.50783 8.48355 8.51299C7.47839 9.51815 8.22238 12.0081 10.156 14.8208ZM17.1498 10.1855C17.968 10.8442 18.7885 11.5805 19.5893 12.3813C20.39 13.182 21.1264 14.0026 21.7851 14.8208C23.7187 12.0081 24.4627 9.51815 23.4576 8.51299C22.4524 7.50783 19.9625 8.25182 17.1498 10.1855Z",
              fill: "white",
              stroke: "white",
              strokeWidth: "0.5"
            })
          ]
        }),
        /* @__PURE__ */ jsx7("defs", {
          children: /* @__PURE__ */ jsx7("clipPath", {
            id: "clip0_337_924",
            children: /* @__PURE__ */ jsx7("rect", {
              width: "40",
              height: "40",
              rx: "8",
              fill: "white"
            })
          })
        })
      ]
    });
  }
);
Logo.displayName = "Logo";

// src/text/text.tsx
import * as SlotPrimitive3 from "@radix-ui/react-slot";
import classnames4 from "classnames";
import * as React8 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var Text = React8.forwardRef(
  (_a, forwardedRef) => {
    var _b = _a, {
      as: Tag = "span",
      size = "2",
      color = "gray",
      transform,
      weight = "normal",
      className,
      children
    } = _b, props = __objRest(_b, [
      "as",
      "size",
      "color",
      "transform",
      "weight",
      "className",
      "children"
    ]);
    return /* @__PURE__ */ jsx8(SlotPrimitive3.Slot, __spreadProps(__spreadValues({
      ref: forwardedRef,
      className: classnames4(
        className,
        transform,
        getSizesClassNames2(size),
        getColorClassNames2(color),
        getWeightClassNames2(weight)
      )
    }, props), {
      children: /* @__PURE__ */ jsx8(Tag, {
        children
      })
    }));
  }
);
var getSizesClassNames2 = (size) => {
  switch (size) {
    case "1":
      return "text-xs";
    case void 0:
    case "2":
      return "text-sm";
    case "3":
      return "text-base";
    case "4":
      return "text-lg";
    case "5":
      return "text-xl tracking-[-0.16px]";
    case "6":
      return "text-2xl tracking-[-0.288px]";
    case "7":
      return "text-[28px] leading-[34px] tracking-[-0.416px]";
    case "8":
      return "text-[35px] leading-[42px] tracking-[-0.64px]";
    case "9":
      return "text-6xl leading-[73px] tracking-[-0.896px]";
    default:
      return unreachable(size);
  }
};
var getColorClassNames2 = (color) => {
  switch (color) {
    case "white":
      return "text-slate-12";
    case void 0:
    case "gray":
      return "text-slate-11";
    default:
      return unreachable(color);
  }
};
var getWeightClassNames2 = (weight) => {
  switch (weight) {
    case void 0:
    case "normal":
      return "font-normal";
    case "medium":
      return "font-medium";
    default:
      return unreachable(weight);
  }
};
Text.displayName = "Text";
export {
  Button,
  Heading,
  IconArrowRight,
  IconButton,
  IconClipboard,
  Logo,
  Text
};
