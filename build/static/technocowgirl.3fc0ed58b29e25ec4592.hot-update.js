webpackHotUpdate("technocowgirl",{

/***/ "./packages/techno-chakra/src/components/page.js":
/*!*******************************************************!*\
  !*** ./packages/techno-chakra/src/components/page.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./packages/techno-chakra/src/components/loading.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Page=({state,libraries})=>{const data=state.source.get(state.router.link);const page=state.source[data.type][data.id];const Html2React=libraries.html2react.Component;if(data.isFetching){return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{});}if(!data.isFetching){return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__[\"Flex\"],{direction:\"column\",align:\"center\",mb:5,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(frontity__WEBPACK_IMPORTED_MODULE_2__[\"Head\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"title\",{children:page.title.rendered}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"meta\",{name:\"description\",content:page.excerpt.rendered})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(PageContent,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(PageTitle,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__[\"Heading\"],{size:\"lg\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Html2React,{html:page.title.rendered})})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Html2React,{html:page.content.rendered})]})]});}};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Page));const PageContent=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(\"div\", false?undefined:{target:\"e1qatlba1\",label:\"PageContent\"})( false?undefined:{name:\"1tiex3q\",styles:\"display:flex;flex-direction:column;width:800px;background-color:#FFFFFF;border-radius:50px 50px 50px 50px;padding:20px;margin-top:60px\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWNoZWxtb29yZS9EZXNrdG9wL1dlYnNpdGVzL3RlY2hub2Nvd2dpcmwvcGFja2FnZXMvdGVjaG5vLWNoYWtyYS9zcmMvY29tcG9uZW50cy9wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDOEIiLCJmaWxlIjoiL1VzZXJzL3JhY2hlbG1vb3JlL0Rlc2t0b3AvV2Vic2l0ZXMvdGVjaG5vY293Z2lybC9wYWNrYWdlcy90ZWNobm8tY2hha3JhL3NyYy9jb21wb25lbnRzL3BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gIEZsZXgsXG4gIEhlYWRpbmdcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIlxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vbG9hZGluZ1wiXG5cbmNvbnN0IFBhZ2UgPSAoeyBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXG4gIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxuICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50XG5cbiAgaWYgKGRhdGEuaXNGZXRjaGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPlxuICB9XG5cbiAgaWYgKCFkYXRhLmlzRmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ249XCJjZW50ZXJcIiBtYj17NX0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57cGFnZS50aXRsZS5yZW5kZXJlZH08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UGFnZUNvbnRlbnQ+XG4gICAgICAgICAgPFBhZ2VUaXRsZT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS50aXRsZS5yZW5kZXJlZH0gLz5cbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDwvUGFnZVRpdGxlPlxuICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgICAgICAgPC9QYWdlQ29udGVudD5cbiAgICAgIDwvRmxleD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQYWdlKVxuXG5jb25zdCBQYWdlQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDUwcHggNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgYFxuXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuZGl2YFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjb2xvcmNoYW5nZSAyMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBjb2xvcmNoYW5nZSAyMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbjogY29sb3JjaGFuZ2UgMjBzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICBcbiAgICBAa2V5ZnJhbWVzIGNvbG9yY2hhbmdlIHtcbiAgICAgIDAlIHtcbiAgICAgICAgY29sb3I6ICMzQUFFQzI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIDEwJSB7XG4gICAgICAgIGNvbG9yOiAjRkQwNUU5O1xuICAgICAgfVxuICAgICAgXG4gICAgICAyNSUge1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgfVxuICAgICAgXG4gICAgICA1MCUge1xuICAgICAgICBjb2xvcjogI0VFMDMwMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICA3NSUge1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgfVxuICAgICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgY29sb3I6ICNGRDA1RTk7XG4gICAgICB9XG4gICAgfVxuICAgIGAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const PageTitle=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(\"div\", false?undefined:{target:\"e1qatlba0\",label:\"PageTitle\"})( false?undefined:{name:\"sckmhi\",styles:\"-webkit-animation:colorchange 20s infinite alternate;-moz-animation:colorchange 20s infinite alternate;animation:colorchange 20s infinite alternate;@keyframes colorchange{0%{color:#3AAEC2;}10%{color:#FD05E9;}25%{color:yellow;}50%{color:#EE0300;}75%{color:yellow;}100%{color:#FD05E9;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWNoZWxtb29yZS9EZXNrdG9wL1dlYnNpdGVzL3RlY2hub2Nvd2dpcmwvcGFja2FnZXMvdGVjaG5vLWNoYWtyYS9zcmMvY29tcG9uZW50cy9wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtENEIiLCJmaWxlIjoiL1VzZXJzL3JhY2hlbG1vb3JlL0Rlc2t0b3AvV2Vic2l0ZXMvdGVjaG5vY293Z2lybC9wYWNrYWdlcy90ZWNobm8tY2hha3JhL3NyYy9jb21wb25lbnRzL3BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gIEZsZXgsXG4gIEhlYWRpbmdcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIlxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vbG9hZGluZ1wiXG5cbmNvbnN0IFBhZ2UgPSAoeyBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXG4gIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxuICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50XG5cbiAgaWYgKGRhdGEuaXNGZXRjaGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPlxuICB9XG5cbiAgaWYgKCFkYXRhLmlzRmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ249XCJjZW50ZXJcIiBtYj17NX0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57cGFnZS50aXRsZS5yZW5kZXJlZH08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UGFnZUNvbnRlbnQ+XG4gICAgICAgICAgPFBhZ2VUaXRsZT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS50aXRsZS5yZW5kZXJlZH0gLz5cbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDwvUGFnZVRpdGxlPlxuICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgICAgICAgPC9QYWdlQ29udGVudD5cbiAgICAgIDwvRmxleD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQYWdlKVxuXG5jb25zdCBQYWdlQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDUwcHggNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgYFxuXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuZGl2YFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjb2xvcmNoYW5nZSAyMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBjb2xvcmNoYW5nZSAyMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbjogY29sb3JjaGFuZ2UgMjBzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICBcbiAgICBAa2V5ZnJhbWVzIGNvbG9yY2hhbmdlIHtcbiAgICAgIDAlIHtcbiAgICAgICAgY29sb3I6ICMzQUFFQzI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIDEwJSB7XG4gICAgICAgIGNvbG9yOiAjRkQwNUU5O1xuICAgICAgfVxuICAgICAgXG4gICAgICAyNSUge1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgfVxuICAgICAgXG4gICAgICA1MCUge1xuICAgICAgICBjb2xvcjogI0VFMDMwMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICA3NSUge1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgfVxuICAgICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgY29sb3I6ICNGRDA1RTk7XG4gICAgICB9XG4gICAgfVxuICAgIGAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90ZWNobm8tY2hha3JhL3NyYy9jb21wb25lbnRzL3BhZ2UuanM/MDQ1NyJdLCJuYW1lcyI6WyJQYWdlIiwic3RhdGUiLCJsaWJyYXJpZXMiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwibGluayIsInBhZ2UiLCJ0eXBlIiwiaWQiLCJIdG1sMlJlYWN0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsImlzRmV0Y2hpbmciLCJ0aXRsZSIsInJlbmRlcmVkIiwiZXhjZXJwdCIsImNvbnRlbnQiLCJjb25uZWN0IiwiUGFnZUNvbnRlbnQiLCJzdHlsZWQiLCJQYWdlVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQVNBLEtBQU1BLEtBQUksQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBU0MsU0FBVCxDQUFELEdBQTBCLENBQ3JDLEtBQU1DLEtBQUksQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsS0FBSSxDQUFHUCxLQUFLLENBQUNHLE1BQU4sQ0FBYUQsSUFBSSxDQUFDTSxJQUFsQixFQUF3Qk4sSUFBSSxDQUFDTyxFQUE3QixDQUFiLENBQ0EsS0FBTUMsV0FBVSxDQUFHVCxTQUFTLENBQUNVLFVBQVYsQ0FBcUJDLFNBQXhDLENBRUEsR0FBSVYsSUFBSSxDQUFDVyxVQUFULENBQXFCLENBQ25CLE1BQU8sd0VBQUMsZ0RBQUQsSUFBUCxDQUNELENBRUQsR0FBSSxDQUFDWCxJQUFJLENBQUNXLFVBQVYsQ0FBc0IsQ0FDcEIsTUFDRSx5RUFBQyxxREFBRCxFQUFNLFNBQVMsQ0FBQyxRQUFoQixDQUF5QixLQUFLLENBQUMsUUFBL0IsQ0FBd0MsRUFBRSxDQUFFLENBQTVDLFdBQ0Usd0VBQUMsNkNBQUQsWUFDRSx5RkFBUU4sSUFBSSxDQUFDTyxLQUFMLENBQVdDLFFBQW5CLEVBREYsQ0FFRSwrRUFBTSxJQUFJLENBQUMsYUFBWCxDQUF5QixPQUFPLENBQUVSLElBQUksQ0FBQ1MsT0FBTCxDQUFhRCxRQUEvQyxFQUZGLEdBREYsQ0FLRSx3RUFBQyxXQUFELFlBQ0UsdUVBQUMsU0FBRCxXQUNJLHVFQUFDLHdEQUFELEVBQVMsSUFBSSxDQUFDLElBQWQsVUFDRSx1RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFUixJQUFJLENBQUNPLEtBQUwsQ0FBV0MsUUFBN0IsRUFERixFQURKLEVBREYsQ0FNRSx1RUFBQyxVQUFELEVBQVksSUFBSSxDQUFFUixJQUFJLENBQUNVLE9BQUwsQ0FBYUYsUUFBL0IsRUFORixHQUxGLEdBREYsQ0FnQkQsQ0FDRixDQTNCRCxDQTZCZUcsdUhBQU8sQ0FBQ25CLElBQUQsQ0FBdEIsRUFFQSxLQUFNb0IsWUFBVyxDQUFHQyx1REFBSCw0a0dBQWpCLENBVUEsS0FBTUMsVUFBUyxDQUFHRCx1REFBSCwrdEdBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy90ZWNobm8tY2hha3JhL3NyYy9jb21wb25lbnRzL3BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gIEZsZXgsXG4gIEhlYWRpbmdcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIEhlYWQgfSBmcm9tIFwiZnJvbnRpdHlcIlxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vbG9hZGluZ1wiXG5cbmNvbnN0IFBhZ2UgPSAoeyBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspXG4gIGNvbnN0IHBhZ2UgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXVxuICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50XG5cbiAgaWYgKGRhdGEuaXNGZXRjaGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPlxuICB9XG5cbiAgaWYgKCFkYXRhLmlzRmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ249XCJjZW50ZXJcIiBtYj17NX0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57cGFnZS50aXRsZS5yZW5kZXJlZH08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2UuZXhjZXJwdC5yZW5kZXJlZH0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UGFnZUNvbnRlbnQ+XG4gICAgICAgICAgPFBhZ2VUaXRsZT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAgPEh0bWwyUmVhY3QgaHRtbD17cGFnZS50aXRsZS5yZW5kZXJlZH0gLz5cbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDwvUGFnZVRpdGxlPlxuICAgICAgICAgIDxIdG1sMlJlYWN0IGh0bWw9e3BhZ2UuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgICAgICAgPC9QYWdlQ29udGVudD5cbiAgICAgIDwvRmxleD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQYWdlKVxuXG5jb25zdCBQYWdlQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDUwcHggNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgYFxuXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuZGl2YFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjb2xvcmNoYW5nZSAyMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBjb2xvcmNoYW5nZSAyMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbjogY29sb3JjaGFuZ2UgMjBzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICBcbiAgICBAa2V5ZnJhbWVzIGNvbG9yY2hhbmdlIHtcbiAgICAgIDAlIHtcbiAgICAgICAgY29sb3I6ICMzQUFFQzI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIDEwJSB7XG4gICAgICAgIGNvbG9yOiAjRkQwNUU5O1xuICAgICAgfVxuICAgICAgXG4gICAgICAyNSUge1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgfVxuICAgICAgXG4gICAgICA1MCUge1xuICAgICAgICBjb2xvcjogI0VFMDMwMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICA3NSUge1xuICAgICAgICBjb2xvcjogeWVsbG93O1xuICAgICAgfVxuICAgICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgY29sb3I6ICNGRDA1RTk7XG4gICAgICB9XG4gICAgfVxuICAgIGAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/techno-chakra/src/components/page.js\n");

/***/ })

})