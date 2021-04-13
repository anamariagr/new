exports.ids = [1];
exports.modules = {

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "social-time",
  components: {
    UserCard: _components_UserCard__WEBPACK_IMPORTED_MODULE_2__["default"],
    footer: _components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },

  data() {
    return {
      users: [],
      populars: [],
      near: [],
      private: [],
      tapCount: 1,
      tabGenral: null,
      taps: ["Top 10 los más vistos ahora", "Famosos", "Últimos lives creados", "Cerca de ti", "One on one", "Eventos", "En vivo ahora"],
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ2ODIwODEsIm5iZiI6MTYwNDY4MjA4MSwiZXhwIjoxNjA0Njg1NjgxLCJkYXRhIjp7InVpZCI6ImR4RVVGaXNEaG4zbUF5UjhQMWc2MktiYkxSR3hrMExsc3VVSUhvemh3dk09In19.FcNLwPdCNrBcZbCfGJihaBADgr-uCI74CyFc5ithAhI",
      urlUsers: process.env.api + "/users/getUsers",
      urlPopulars: process.env.api + "/videoChat/getTop"
    };
  },

  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["red", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    },

    clouseFilter() {
      const open = document.getElementById("filter");
      open.classList.add("cont-off");
    }

  },

  created() {
    let urlencoded = new URLSearchParams();
    urlencoded.append("uid", "871f870388af7fb06aee939096834777");
    urlencoded.append("ageRange", "18-26");
    urlencoded.append("citieId", "9609540");
    let requestOptions = {
      method: "POST",
      headers: {
        "X-ST-Auth-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ2ODIwODEsIm5iZiI6MTYwNDY4MjA4MSwiZXhwIjoxNjA0Njg1NjgxLCJkYXRhIjp7InVpZCI6ImR4RVVGaXNEaG4zbUF5UjhQMWc2MktiYkxSR3hrMExsc3VVSUhvemh3dk09In19.FcNLwPdCNrBcZbCfGJihaBADgr-uCI74CyFc5ithAhI",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: urlencoded
    }; //http://api.develop.socialtimeapp.com

    fetch(`${_config_env__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enpoint}/videoChat/getHome`, requestOptions).then(response => response.json()).then(result => {
      this.users = result;
    }).catch(error => {
      alert(error);
    });
    fetch(`${_config_env__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enpoint}/videoChat/getTop`, requestOptions).then(response => response.json()).then(result => {
      this.populars = result.result.data;
    }).catch(error => {
      alert(error);
    });
    fetch(`${_config_env__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enpoint}/videoChat/getNear`, requestOptions).then(response => response.json()).then(result => {
      this.near = result.result.data;
    }).catch(error => {
      alert(error);
    });
    fetch(`${_config_env__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enpoint}/videoChat/getPrivates`, requestOptions).then(response => response.json()).then(result => {
      this.private = result.result.data;
    }).catch(error => {
      alert(error);
    });
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(74)["URLSearchParams"]))

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("10ff7fb9", content, true, context)
};

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  enpoint: 'http://api.develop.socialtimeapp.com'
});

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_scopod_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_scopod_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_scopod_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_scopod_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_scopod_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#near>.card.img-user,#vivo>.card.img-user{height:187px;width:158px}.input{border-radius:20px;padding:5px 0;margin-top:0;box-shadow:0 0 6px 1px hsl(0deg 0% 50%/22%);top:-15px!important;position:relative}.nav-tabs,.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{border-bottom:0 solid}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#fff}.tabs{margin:auto;width:100%}.tabs li a{color:#4d4d4d;padding-left:40px;padding-right:30px;width:200px;text-align:center}.text-info{color:#797979!important}ul{margin:auto;justify-content:center;padding-top:10px}a.text-info:focus,a.text-info:hover{color:#fff!important}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active,a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#00c5e0!important;border-radius:22px;padding-right:35px;width:200px;text-align:center}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#fff!important}.nav-tabs .nav-link{margin-bottom:-1px;border-right:1px solid rgba(74,61,61,.3098);border-top-left-radius:0;border-top-right-radius:0}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#fff}.bg-light{background-color:#fff!important}.card.img-user{padding:10px;cursor:pointer;background-size:cover;background-repeat:no-repeat;height:150px;border-radius:15px;margin:10px}.showMore{width:100px;color:#00c5e0;display:flex;margin:auto;font-size:11px;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1a131d38&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_vm._ssrNode("<div class=\"row\">","</div>",[_c('Navbar'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_c('v-tabs',{model:{value:(_vm.tabGenral),callback:function ($$v) {_vm.tabGenral=$$v},expression:"tabGenral"}},_vm._l((_vm.taps),function(tap){return _c('v-tab',{key:tap,attrs:{"grow":""}})}),1),_vm._ssrNode(" "),_c('b-tabs',[_c('b-tab',{attrs:{"title":"Ahora","active":"","title-link-class":_vm.linkClass(0)}},[_c('div',{staticClass:"pt-3 col-12"},[_c('section',{staticClass:"live"},[_c('p',{staticClass:"pt-3"},[_c('b',[_vm._v(_vm._s(_vm.taps[0]))])]),_vm._v(" "),_c('div',{staticClass:"row pl-4 pr-4"},_vm._l((_vm.users.top),function(item,id){return _c('UserCard',{key:id,attrs:{"user":item}})}),1),_vm._v(" "),_c('div',{staticClass:"showMore mt-2"},[_vm._v("\n                    Ver más\n                  ")]),_vm._v(" "),_c('hr',{staticClass:"mt-2"})]),_vm._v(" "),_c('section',[_c('p',{staticClass:"pt-3"},[_c('b',[_vm._v(_vm._s(_vm.taps[1]))])]),_vm._v(" "),_c('div',{staticClass:"row pl-4 pr-4"},_vm._l((_vm.users.populars),function(item,id){return _c('UserCard',{key:id,attrs:{"user":item}})}),1),_vm._v(" "),_c('div',{staticClass:"showMore mt-2"},[_vm._v("\n                    Ver más\n                  ")]),_vm._v(" "),_c('hr',{staticClass:"mt-2"})]),_vm._v(" "),_c('section',[_c('p',{staticClass:"pt-3"},[_c('b',[_vm._v(_vm._s(_vm.taps[2]))])]),_vm._v(" "),_c('div',{staticClass:"row pl-4 pr-4"},_vm._l((_vm.users.latest),function(item,id){return _c('UserCard',{key:id,attrs:{"user":item}})}),1),_vm._v(" "),_c('div',{staticClass:"showMore mt-2"},[_vm._v("\n                    Ver más\n                  ")]),_vm._v(" "),_c('hr',{staticClass:"mt-2"})]),_vm._v(" "),_c('section',[_c('p',{staticClass:"pt-3"},[_c('b',[_vm._v(_vm._s(_vm.taps[3]))])]),_vm._v(" "),_c('div',{staticClass:"row pl-4 pr-4"},_vm._l((_vm.users.near),function(item,id){return _c('UserCard',{key:id,staticClass:"near mr-4",attrs:{"id":"near","user":item}})}),1),_vm._v(" "),_c('div',{staticClass:"showMore mt-2"},[_vm._v("\n                    Ver más\n                  ")]),_vm._v(" "),_c('hr',{staticClass:"mt-2"})]),_vm._v(" "),_c('section',[_c('p',{staticClass:"pt-3"},[_c('b',[_vm._v(_vm._s(_vm.taps[5]))])]),_vm._v(" "),_c('div',{staticClass:"row pl-4 pr-4"},_vm._l((_vm.users.latest),function(item,id){return _c('UserCard',{key:id,staticClass:"col-lg-3",attrs:{"user":item}})}),1),_vm._v(" "),_c('div',{staticClass:"showMore mt-2"},[_vm._v("\n                    Ver más\n                  ")]),_vm._v(" "),_c('hr',{staticClass:"mt-2"})]),_vm._v(" "),_c('section',[_c('p',{staticClass:"pt-3"},[_c('b',[_vm._v(_vm._s(_vm.taps[6]))])]),_vm._v(" "),_c('div',{staticClass:"row pl-4 pr-4"},_vm._l((_vm.users.latest),function(item,id){return _c('UserCard',{key:id,staticClass:"vivo mr-4",attrs:{"id":"vivo","user":item}})}),1),_vm._v(" "),_c('div',{staticClass:"showMore mt-2"},[_vm._v("\n                    Ver más\n                  ")]),_vm._v(" "),_c('hr',{staticClass:"mt-2"})])])]),_vm._v(" "),_c('b-tab',{attrs:{"title":"Populares","title-link-class":_vm.linkClass(1)}},[_c('div',{staticClass:"pt-3 col-12"},[_c('section',[_c('p',{staticClass:"pt-3"},[_c('b',[_vm._v(_vm._s(_vm.taps[1]))])]),_vm._v(" "),(_vm.populars)?_c('div',{staticClass:"row pl-4 pr-4"},_vm._l((_vm.populars),function(item,id){return _c('UserCard',{key:id,attrs:{"user":item}})}),1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"showMore mt-2"},[_vm._v("\n                    Ver más\n                  ")]),_vm._v(" "),_c('hr',{staticClass:"mt-2"})])])]),_vm._v(" "),_c('b-tab',{attrs:{"title":"Cerca","title-link-class":_vm.linkClass(3)}},[_c('div',{staticClass:"pt-3 col-12"},[_c('section',[_c('p',{staticClass:"pt-3"},[_c('b',[_vm._v(_vm._s(_vm.taps[3]))])]),_vm._v(" "),(_vm.near)?_c('div',{staticClass:"row pl-4 pr-4"},_vm._l((_vm.near),function(item,id){return _c('UserCard',{key:id,attrs:{"user":item}})}),1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"showMore mt-2"},[_vm._v("\n                    Ver más\n                  ")]),_vm._v(" "),_c('hr',{staticClass:"mt-2"})])])]),_vm._v(" "),_c('b-tab',{attrs:{"title":"One on One","title-link-class":_vm.linkClass(4)}},[_c('div',{staticClass:"pt-3 col-12"},[_c('section',[_c('p',{staticClass:"pt-3"},[_c('b',[_vm._v(_vm._s(_vm.taps[4]))])]),_vm._v(" "),(_vm.private)?_c('div',{staticClass:"row pl-4 pr-4"},_vm._l((_vm.private),function(item,id){return _c('UserCard',{key:id,attrs:{"user":item}})}),1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"showMore mt-2"},[_vm._v("\n                    Ver más\n                  ")]),_vm._v(" "),_c('hr',{staticClass:"mt-2"})])])])],1)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer col-12\">","</div>",[_c('Footer')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1a131d38&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
var lib_vue_loader_options_pagesvue_type_script_lang_js_ = __webpack_require__(76);

// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1b71b56e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(9).default,UserCard: __webpack_require__(10).default,Footer: __webpack_require__(8).default})


/***/ })

};;
//# sourceMappingURL=index.js.map