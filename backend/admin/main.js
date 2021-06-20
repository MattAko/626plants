(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!******************************************!*\
  !*** multi ./projects/admin/src/main.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Matt\Desktop\626plants\frontend\plants626\projects\admin\src\main.ts */"OW5t");


/***/ }),

/***/ "0ezW":
/*!******************************************************************!*\
  !*** ./projects/admin/src/app/manage/upload/upload.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _shared_upload_form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/upload-form.model */ "h2Ae");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../management.service */ "9Av2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["uploadForm"];
function UploadComponent_div_17_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const file_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", file_r4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function UploadComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UploadComponent_div_17_img_1_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.fileUrls);
} }
function UploadComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Upload Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UploadComponent {
    constructor(manage, router) {
        this.manage = manage;
        this.router = router;
        this.fileList = null;
        this.fileUrls = null;
        this.ready = false;
    }
    ngOnInit() { }
    onLoad(files) {
        this.fileUrls = [];
        this.ready = false;
        this.fileList = files;
        let i, len;
        for (i = 0; i < files.length; i++) {
            let reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onload = () => {
                this.fileUrls.push(reader.result);
            };
        }
        this.ready = true;
    }
    onSubmit() {
        const name = this.form.value['name'];
        const quantity = this.form.value['quantity'];
        const price = this.form.value['price'];
        const description = this.form.value['description'];
        const date = new Date();
        const uploadForm = new _shared_upload_form_model__WEBPACK_IMPORTED_MODULE_0__["UploadForm"](name, quantity, price, description, this.fileList, date);
        this.manage.upload(uploadForm).subscribe((repsonse) => {
            this.router.navigate(['/manage/view']);
        });
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_management_service__WEBPACK_IMPORTED_MODULE_2__["ManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], viewQuery: function UploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, decls: 22, vars: 2, consts: [[1, "md:px-8", "mx-auto"], [1, "text-5xl", "text-center"], [1, "flex", "flex-col", "justify-start", "text-sm", 3, "ngSubmit"], ["uploadForm", "ngForm"], ["placeholder", "Product Name", "type", "text", "id", "name", "name", "name", "ngModel", "", "required", "", 1, "block", "focus:outline-none", "focus:border-0"], ["placeholder", "Price", "type", "number", "id", "price", "name", "price", "ngModel", "", "required", "", 1, "block"], ["placeholder", "Quantity", "type", "number", "id", "quantity", "name", "quantity", "ngModel", "", "required", "", 1, "block"], ["placeholder", "Add a description", "type", "text", "name", "description", "required", "", "ngModel", "", 1, "block"], [1, "border-2", "border-gray-500", "rounded", "py-5"], [1, "relative", "imageHeader", "left-5", "bg-white", "z-20", "w-max", "px-1", "text-base"], ["class", "flex flex-wrap gap-1 max-w-full mb-5", 4, "ngIf"], ["for", "images", 1, "images"], ["placeholder", "Hello", "id", "images", "accept", "image/jpeg image/png", "multiple", "", "name", "images", "type", "file", "required", "", "ngModel", "", 1, "block", "hidden", 3, "change"], ["type", "submit", "class", "mt-5 bg-lightgreen px-5 py-4 rounded", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-1", "max-w-full", "mb-5"], ["class", "w-40 h-40 inline-block object-cover", 3, "src", 4, "ngFor", "ngForOf"], [1, "w-40", "h-40", "inline-block", "object-cover", 3, "src"], ["type", "submit", 1, "mt-5", "bg-lightgreen", "px-5", "py-4", "rounded"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UploadComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UploadComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Add Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_20_listener($event) { return ctx.onLoad($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, UploadComponent_button_21_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileUrls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ready);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["input[_ngcontent-%COMP%] {\n  border-width: 0.125rem;\n  border-color: #6b7280;\n  border-radius: 0.5rem;\n  color: #6b7280;\n  margin: 0.5rem 0 0.5rem 0;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #6b7280;\n  --tw-ring-color: transparent;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  border-width: 0.125rem;\n  border-color: #6b7280;\n  border-radius: 0.5rem;\n  color: #6b7280;\n  margin: 0.5rem 0 1.5rem 0;\n}\n\ntextarea[_ngcontent-%COMP%]:focus {\n  --tw-ring-color: transparent;\n}\n\n.images[_ngcontent-%COMP%]{\n  background-color: #90ee90;\n  padding: 1rem 1.25rem 1rem 1.25rem;\n  border-radius: 0.5rem;\n  margin: 0.75rem 0 0.75rem 1.5rem;\n}\n\n.imageHeader[_ngcontent-%COMP%]{\n  top: -2.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNJLGFBQWE7RUFDYixxQkFBcUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNJLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNoQzs7QUFFSjtFQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjEyNXJlbTtcclxuICBib3JkZXItY29sb3I6ICM2YjcyODA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG4gIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDA7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICM2YjcyODA7XHJcbiAgLS10dy1yaW5nLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIGJvcmRlci13aWR0aDogMC4xMjVyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiAjNmI3MjgwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBjb2xvcjogIzZiNzI4MDtcclxuICBtYXJnaW46IDAuNXJlbSAwIDEuNXJlbSAwO1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgLS10dy1yaW5nLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmltYWdlc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGVlOTA7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW0gMXJlbSAxLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgbWFyZ2luOiAwLjc1cmVtIDAgMC43NXJlbSAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4uaW1hZ2VIZWFkZXJ7XHJcbiAgICB0b3A6IC0yLjEyNXJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "5Ye7":
/*!*************************************************!*\
  !*** ./projects/admin/src/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "qhKG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "lVLu");
/* harmony import */ var _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-nav/mobile-nav.component */ "CGPs");






function AppComponent_div_0_app_navbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 4);
} }
function AppComponent_div_0_app_mobile_nav_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mobile-nav", 5);
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_0_app_navbar_1_Template, 1, 0, "app-navbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_0_app_mobile_nav_2_Template, 1, 0, "app-mobile-nav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.mobileNavEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mobileNavEnabled);
} }
const _c0 = function (a0) { return { "mt-28": a0 }; };
class AppComponent {
    constructor(authService, elRef) {
        this.authService = authService;
        this.elRef = elRef;
        this.md = 768;
        this.loggedIn = false;
    }
    onResize(event) {
        this.innerWidth = window.innerWidth;
        this.mobileNavEnabled = this.innerWidth <= this.md;
    }
    ngOnInit() {
        this.authService.autoLogin();
        this.loggedInSubscription = this.authService.user.subscribe((user) => {
            if (user) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        });
        this.innerWidth = window.innerWidth;
        this.mobileNavEnabled = this.innerWidth <= this.md;
    }
    ngOnDestroy() {
        this.loggedInSubscription.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 4, consts: [[4, "ngIf"], [1, "bg-gradient-to-r", "from-red-300", "to-blue-500", "h-full", "font", 3, "ngClass"], ["class", "z-10 fixed top-0 bg-gradient-to-r from-red-300 to-blue-500 w-full font", 4, "ngIf"], ["class", "z-10 mb-16 fixed top-0 bg-gradient-to-r from-red-300 to-blue-500 w-full font", 4, "ngIf"], [1, "z-10", "fixed", "top-0", "bg-gradient-to-r", "from-red-300", "to-blue-500", "w-full", "font"], [1, "z-10", "mb-16", "fixed", "top-0", "bg-gradient-to-r", "from-red-300", "to-blue-500", "w-full", "font"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.loggedIn));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_5__["MobileNavComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');\n\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400;1,600&display=swap');\n\n.font[_ngcontent-%COMP%] {\n  \n  font-family: 'Source Sans Pro', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9HQUFvRzs7QUFDcEcsd0lBQXdJOztBQUV4STtFQUNFLDJDQUEyQztFQUMzQywwQ0FBMEM7QUFDNUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNjAwOzAsNzAwOzAsOTAwOzEsNDAwOzEsNjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmZvbnQge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9Av2":
/*!*************************************************************!*\
  !*** ./projects/admin/src/app/manage/management.service.ts ***!
  \*************************************************************/
/*! exports provided: ManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementService", function() { return ManagementService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "qhKG");





class ManagementService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.shopChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.shop = [];
    }
    upload(form) {
        console.log(form);
        let formData = new FormData();
        let i = 0, len = form.imageFiles.length;
        for (i = 0; i < len; i++) {
            formData.append(`images`, form.imageFiles[i], form.imageFiles[i].name);
        }
        formData.append('name', form.name);
        formData.append('price', form.price.toString());
        formData.append('description', form.description);
        formData.append('quantity', form.quantity.toString());
        formData.append('date', form.postedDate.toString());
        return this.http
            .post('/api/admin/upload', formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Accept', 'application/json'),
        });
    }
    getShop(visible) {
        this.http
            .get('/api/admin/shop', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('visible', `${visible}`),
        })
            .subscribe((newShop) => {
            this.shopChanged.next(newShop);
            this.shop = newShop;
            console.log(newShop);
        });
    }
    getOrders() {
        return this.http.get('/api/admin/orders');
    }
    getProduct(id) {
        return this.shop.find((item) => {
            return item.id === id;
        });
    }
    /*
     * Http PUT request, data sent as formData.
     * @body: Changes made to the product
     * @params: Product ID
     */
    editProduct(changes, id) {
        console.log('Editing product...');
        let formData = new FormData();
        for (let change in changes) {
            if (change === 'images') {
                let images = changes[change];
                let len = changes[change].length;
                let i = 0;
                for (i = 0; i < len; i++) {
                    formData.append(`images`, images[i], images[i].name);
                }
            }
            else {
                formData.append(change, changes[change]);
            }
        }
        return this.http.put('/api/admin/edit', formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Accept', 'application/json'),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('id', id.toString()),
        });
    }
    deleteProduct(id) {
        this.http
            .post('/api/admin/delete', {
            id: id,
        })
            .subscribe((res) => {
            console.log(res);
        });
    }
    updateStatus(status, id) {
        return this.http.post('/api/admin/orders/update', {
            id: id,
            status: status,
        });
    }
}
ManagementService.ɵfac = function ManagementService_Factory(t) { return new (t || ManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ManagementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ManagementService, factory: ManagementService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "CGPs":
/*!*******************************************************************!*\
  !*** ./projects/admin/src/app/mobile-nav/mobile-nav.component.ts ***!
  \*******************************************************************/
/*! exports provided: MobileNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavComponent", function() { return MobileNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "qhKG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/manage/view"]; };
const _c1 = function () { return ["/manage/receipts"]; };
const _c2 = function () { return ["/manage/upload"]; };
const _c3 = function () { return ["/manage/orders"]; };
function MobileNavComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Receipts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileNavComponent_div_5_Template_li_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
} }
class MobileNavComponent {
    constructor(authService, elRef) {
        this.authService = authService;
        this.elRef = elRef;
        this.dropdownVisible = false;
    }
    toggleOpen(event) {
        this.dropdownVisible = this.elRef.nativeElement.contains(event.target)
            ? !this.dropdownVisible
            : false;
    }
    ngOnInit() { }
    onLogout() {
        this.authService.logout();
    }
}
MobileNavComponent.ɵfac = function MobileNavComponent_Factory(t) { return new (t || MobileNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MobileNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileNavComponent, selectors: [["app-mobile-nav"]], hostBindings: function MobileNavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileNavComponent_click_HostBindingHandler($event) { return ctx.toggleOpen($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 6, vars: 1, consts: [[1, "w-full", "py-3", "flex", "justify-end", "px-10"], [1, "p-2", "cursor-pointer"], [1, "h-0.5", "w-5", "border-2", "my-1", "rounded"], [4, "ngIf"], ["routerLinkActive", "text-white", 1, "text-center", "mx-10", "py-4", "cursor-pointer", 3, "routerLink"], [1, "bg-red-500", "text-center", "px-5", "py-4", "cursor-pointer", 3, "click"]], template: function MobileNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MobileNavComponent_div_5_Template, 12, 8, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdownVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtbmF2LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "DSib":
/*!**************************************************************!*\
  !*** ./projects/admin/src/app/manage/view/view.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../management.service */ "9Av2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/toggle-button/toggle-button.component */ "KRhy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_item_view_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-item/view-item.component */ "EsXk");






function ViewComponent_app_view_item_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-item", 5);
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", prod_r1);
} }
class ViewComponent {
    constructor(manage) {
        this.manage = manage;
    }
    ngOnInit() {
        this.manage.getShop(true);
        this.shopSub = this.manage.shopChanged.subscribe((shop) => {
            this.shop = shop;
        });
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 11, vars: 1, consts: [[1, "flex", "flex-col", "justify-center", "lg:w-4/5", "w-full", "lg:mx-auto"], [1, "text-center", "text-5xl", "mb-5", "font-semibold"], [1, "italic", "text-center"], [1, "inline"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Here are all the items in the shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-toggle-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewComponent_app_view_item_10_Template, 1, 1, "app-view-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shop);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_3__["ToggleButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _view_item_view_item_component__WEBPACK_IMPORTED_MODULE_5__["ViewItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "EpnX":
/*!******************************************************!*\
  !*** ./projects/admin/src/app/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ "YigA");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "qQdB");
/* harmony import */ var _manage_edit_edit_start_edit_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage/edit/edit-start/edit-start.component */ "SRP3");
/* harmony import */ var _manage_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage/edit/edit.component */ "cpF7");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage/manage.component */ "Xd0K");
/* harmony import */ var _manage_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage/orders/orders.component */ "gH/j");
/* harmony import */ var _manage_receipts_receipts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage/receipts/receipts.component */ "R7Kw");
/* harmony import */ var _manage_upload_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage/upload/upload.component */ "0ezW");
/* harmony import */ var _manage_view_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage/view/view.component */ "DSib");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const appRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'manage',
        component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManageComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'view'
            },
            {
                path: 'upload',
                component: _manage_upload_upload_component__WEBPACK_IMPORTED_MODULE_8__["UploadComponent"]
            },
            {
                path: 'orders',
                component: _manage_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]
            },
            {
                path: 'receipts',
                component: _manage_receipts_receipts_component__WEBPACK_IMPORTED_MODULE_7__["ReceiptsComponent"]
            },
            {
                path: 'view',
                component: _manage_view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"],
                children: [
                    {
                        path: '',
                        component: _manage_edit_edit_start_edit_start_component__WEBPACK_IMPORTED_MODULE_3__["EditStartComponent"],
                        pathMatch: 'full',
                    },
                    {
                        path: ':id/edit',
                        component: _manage_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
                    }
                ]
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "EsXk":
/*!*****************************************************************************!*\
  !*** ./projects/admin/src/app/manage/view/view-item/view-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewItemComponent", function() { return ViewItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1) { return { "bg-gray-700 text-white": a0, "bg-lightgreen border-2 border-green": a1 }; };
const _c1 = function (a0, a1) { return { "bg-red-400 border-red-700": a0, "bg-lightgreen border-green": a1 }; };
class ViewItemComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onEdit() {
        window.scroll(0, 0);
        this.router.navigate(['/manage/view', this.item.id, 'edit']);
    }
}
ViewItemComponent.ɵfac = function ViewItemComponent_Factory(t) { return new (t || ViewItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ViewItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewItemComponent, selectors: [["app-view-item"]], inputs: { item: "item" }, decls: 20, vars: 17, consts: [[1, "grid", "grid-cols-1", "lg:grid-cols-3", "flex-wrap", "lg:gap-10", "mt-10"], [1, "lg:w-72", "lg:h-72", "w-full", "h-80", "mb-5", "rounded", "object-cover", "cursor-pointer", "mx-auto", 3, "src"], [1, "text-left", "text-sm", "lg:w-72", "mx-10"], [1, "text-lg", "font-semibold"], [1, "px-5", "text-center", "py-2", "mb-2", 3, "ngClass"], [1, "px-5", "text-center", "py-2", "mb-5", "border-2", 3, "ngClass"], [1, "my-2"], [1, "text-center"], ["type", "button", 1, "mx-auto", "bg-lightgreen", "px-5", "py-3", "rounded", "my-5", 3, "click"]], template: function ViewItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewItemComponent_Template_button_click_17_listener() { return ctx.onEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.item.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, !ctx.item.visible, ctx.item.visible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.visible ? "Public" : "Hidden", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, ctx.item.sold, !ctx.item.sold));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.sold ? "Sold" : "In stock", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID#: ", ctx.item.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, ctx.item.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "IaTx":
/*!********************************************************!*\
  !*** ./projects/admin/src/app/shared/DateTime.pipe.ts ***!
  \********************************************************/
/*! exports provided: DateTimeAdminPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeAdminPipe", function() { return DateTimeAdminPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/**
 *  Converts rfc3339 Internet Date-Time Format to a more readable date-time.
 *  Documentation for rfc3339 Internet Date/Time format can be found here:
 *  https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
 */
class DateTimeAdminPipe {
    transform(value) {
        if (value.length === 0) {
            return value;
        }
        // Get date 
        const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const year = value.slice(0, 4);
        const month = months[parseInt(value.slice(5, 7))];
        const day = value.slice(8, 10);
        const time = value.slice(11, 16);
        const newDate = `${day} ${month} ${year} ${time} GMT`;
        return newDate;
    }
}
DateTimeAdminPipe.ɵfac = function DateTimeAdminPipe_Factory(t) { return new (t || DateTimeAdminPipe)(); };
DateTimeAdminPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "datetime", type: DateTimeAdminPipe, pure: true });


/***/ }),

/***/ "KRhy":
/*!********************************************************************************!*\
  !*** ./projects/admin/src/app/shared/toggle-button/toggle-button.component.ts ***!
  \********************************************************************************/
/*! exports provided: ToggleButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return ToggleButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _manage_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manage/management.service */ "9Av2");


class ToggleButton {
    constructor(managementService) {
        this.managementService = managementService;
        this.toggle = true;
    }
    Toggle() {
        this.toggle = !this.toggle;
        this.managementService.getShop(this.toggle);
    }
}
ToggleButton.ɵfac = function ToggleButton_Factory(t) { return new (t || ToggleButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_manage_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"])); };
ToggleButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleButton, selectors: [["app-toggle-button"]], decls: 2, vars: 0, consts: [["type", "checkbox", "id", "switch", 3, "click"], ["for", "switch"]], template: function ToggleButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleButton_Template_input_click_0_listener() { return ctx.Toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 1);
    } }, styles: ["input[type=checkbox][_ngcontent-%COMP%]{\n  height: 0;\n  width: 0;\n  visibility: hidden;\n}\n\nlabel[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-indent: -9999px;\n  width: 40px;\n  height: 20px;\n  background: #90ee90;\n  display: block;\n  border-radius: 100px;\n  position: relative;\n}\n\nlabel[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  border-radius: 90px;\n  transition: 0.3s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background: lightgray;\n}\n\ninput[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  left: calc(100% - 5px);\n  transform: translateX(-100%);\n}\n\nlabel[_ngcontent-%COMP%]:active:after {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZS1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ25COztBQUVBO0VBQ0MsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNuQjs7QUFFQTtFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2pCOztBQUVBO0VBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0VBQ0Msc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM3Qjs7QUFFQTtFQUNDLFdBQVc7QUFDWiIsImZpbGUiOiJ0b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPWNoZWNrYm94XXtcclxuXHRoZWlnaHQ6IDA7XHJcblx0d2lkdGg6IDA7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRleHQtaW5kZW50OiAtOTk5OXB4O1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiAjOTBlZTkwO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxubGFiZWw6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDVweDtcclxuXHRsZWZ0OiA1cHg7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogOTBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgbGFiZWwge1xyXG5cdGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuXHRsZWZ0OiBjYWxjKDEwMCUgLSA1cHgpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbmxhYmVsOmFjdGl2ZTphZnRlciB7XHJcblx0d2lkdGg6IDIwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "KrAE":
/*!*********************************************************************************!*\
  !*** ./projects/admin/src/app/manage/orders/order-form/order-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../management.service */ "9Av2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function OrderFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function OrderFormComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Packaged");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderFormComponent_form_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.ToggleForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "CANCEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
} }
const _c0 = function (a0, a1, a2, a3) { return { "bg-red-600": a0, "bg-yellow-300": a1, "bg-lightgreen": a2, "bg-blue-600": a3 }; };
function OrderFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderFormComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.ToggleForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](2, _c0, ctx_r1.order.status === "processing", ctx_r1.order.status === "packaged", ctx_r1.order.status === "shipped", ctx_r1.order.status === "completed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.order.status, "\n");
} }
class OrderFormComponent {
    constructor(manage) {
        this.manage = manage;
        this.formEnabled = false;
    }
    ngOnInit() {
        this.initForm();
        console.log(this.order);
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.order.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    ToggleForm() {
        this.formEnabled = !this.formEnabled;
    }
    onSubmit() {
        console.log(this.order.receiptId);
        console.log(this.form);
        this.manage.updateStatus(this.form.value.status, this.order.receiptId).subscribe((response) => {
            if (response.status === 'OK') {
                this.order.status = this.form.controls.status.value;
                this.formEnabled = false;
            }
            else {
                alert(`There was an error updating status for order ${this.order.receiptId}.`);
            }
        });
    }
}
OrderFormComponent.ɵfac = function OrderFormComponent_Factory(t) { return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_management_service__WEBPACK_IMPORTED_MODULE_2__["ManagementService"])); };
OrderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderFormComponent, selectors: [["app-order-form"]], inputs: { order: "order" }, decls: 2, vars: 2, consts: [["class", "text-sm", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "text-sm bg-lightgreen px-5 py-3 rounded w-max cursor-pointer uppercase", 3, "ngClass", "click", 4, "ngIf"], [1, "text-sm", 3, "formGroup", "ngSubmit"], ["name", "status", "formControlName", "status", 1, "text-sm"], ["value", "processing"], ["value", "packaged"], ["value", "shipped"], ["value", "completed"], ["type", "submit", 1, "bg-lightgreen", "px-5", "py-3", "ml-5"], ["type", "button", 1, "bg-gray-300", "px-5", "py-3", "ml-5", 3, "click"], [1, "text-sm", "bg-lightgreen", "px-5", "py-3", "rounded", "w-max", "cursor-pointer", "uppercase", 3, "ngClass", "click"]], template: function OrderFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OrderFormComponent_form_0_Template, 14, 1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderFormComponent_div_1_Template, 2, 7, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.formEnabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "NfKN":
/*!********************************************************!*\
  !*** ./projects/admin/src/environments/environment.ts ***!
  \********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "O6je":
/*!*********************************************************************************!*\
  !*** ./projects/admin/src/app/manage/orders/order-item/order-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OrderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemComponent", function() { return OrderItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-form/order-form.component */ "KrAE");
/* harmony import */ var _shared_DateTime_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/DateTime.pipe */ "IaTx");




function OrderItemComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemComponent_p_33_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const product_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openShop(product_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2);
} }
function OrderItemComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ADDITIONAL INFORMATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shipping Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Purchase Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Payer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx_r1.order.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, ctx_r1.order.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 9, ctx_r1.order.shipping.cost));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx_r1.order.purchase_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.order.payer.payer_id);
} }
class OrderItemComponent {
    constructor() {
        // Advanced Information toggle
        this.isVisible = false;
    }
    ngOnInit() {
        this.mobile = window.innerWidth < 768;
    }
    onResize(event) {
        this.mobile = window.innerWidth < 768;
    }
    onRedirect(prod) {
        window.open(`http://626plants.com/shop/${prod}`);
    }
    toggleAdvancedInfo() {
        this.isVisible = !this.isVisible;
    }
    openShop(id) {
        window.open(`https://626plants.com/shop/${id}`, "_blank");
    }
}
OrderItemComponent.ɵfac = function OrderItemComponent_Factory(t) { return new (t || OrderItemComponent)(); };
OrderItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderItemComponent, selectors: [["app-order-item"]], hostBindings: function OrderItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function OrderItemComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { order: ["item", "order"] }, decls: 39, vars: 13, consts: [[1, "border-gray-800", "border", "rounded-md", "flex", "flex-wrap", "p-4", "font-semibold", "w-80"], [1, "w-full"], [1, "flex", "my-2"], ["src", "assets/svg/user-solid.svg"], ["src", "assets/svg/location.svg"], ["src", "assets/svg/at-logo.svg"], [1, "break-all"], [1, "my-4", "mr-8"], [1, "uppercase"], ["class", "cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "w-full", "my-4", 3, "order"], ["class", "w-full flex flex-wrap", 4, "ngIf"], [3, "click"], [1, "cursor-pointer", 3, "click"], [1, "w-full", "flex", "flex-wrap"], [1, "my-2", "mr-8"]], template: function OrderItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Carrier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delivery Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OrderItemComponent_p_33_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-order-form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, OrderItemComponent_div_35_Template, 33, 13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderItemComponent_Template_button_click_37_listener() { return ctx.toggleAdvancedInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.shipping.name.full_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ctx.order.shipping.address.address_line_1, ", ", ctx.order.shipping.address.admin_area_2, ", ", ctx.order.shipping.address.admin_area_1, " ", ctx.order.shipping.address.postal_code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.payer.email_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.shipping.carrier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.shipping.method);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.shipping.signature ? "Required" : "Not Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isVisible ? "SHOW LESS" : "SHOW MORE", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__["OrderFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _shared_DateTime_pipe__WEBPACK_IMPORTED_MODULE_3__["DateTimeAdminPipe"]], styles: ["img[_ngcontent-%COMP%]{\n  height:20px;\n  width: 20px;\n  margin-right: 0.5rem;\n  margin-top: 0.25rem;\n}\n\nh2[_ngcontent-%COMP%]{\n  width: 100%;\n  color: #9CA3AF;\n}\n\nh3[_ngcontent-%COMP%]{\n  color: #9CA3AF;\n}\n\nhr[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 2px;\n  background-color: darkgray;\n  margin: 1rem 0;\n}\n\nbutton[_ngcontent-%COMP%]{\n  color: #9CA3AF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksY0FBYztBQUNsQjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGNBQWM7QUFDbEI7O0FBRUE7RUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6Im9yZGVyLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIGhlaWdodDoyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn1cclxuXHJcbmgye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzlDQTNBRjtcclxufVxyXG5cclxuaDN7XHJcbiAgICBjb2xvcjogIzlDQTNBRjtcclxufVxyXG5cclxuaHJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgY29sb3I6ICM5Q0EzQUY7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "OW5t":
/*!************************************!*\
  !*** ./projects/admin/src/main.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "Of/J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "NfKN");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "Of/J":
/*!**********************************************!*\
  !*** ./projects/admin/src/app/app.module.ts ***!
  \**********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "EpnX");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "5Ye7");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "qQdB");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "lVLu");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage/manage.component */ "Xd0K");
/* harmony import */ var _manage_upload_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage/upload/upload.component */ "0ezW");
/* harmony import */ var _manage_receipts_receipts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage/receipts/receipts.component */ "R7Kw");
/* harmony import */ var _manage_view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manage/view/view.component */ "DSib");
/* harmony import */ var _manage_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage/edit/edit.component */ "cpF7");
/* harmony import */ var _manage_edit_edit_start_edit_start_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage/edit/edit-start/edit-start.component */ "SRP3");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "UX4H");
/* harmony import */ var _manage_view_view_item_view_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manage/view/view-item/view-item.component */ "EsXk");
/* harmony import */ var _shared_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/close-button/close-button.component */ "ssfX");
/* harmony import */ var _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mobile-nav/mobile-nav.component */ "CGPs");
/* harmony import */ var _manage_orders_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manage/orders/orders.component */ "gH/j");
/* harmony import */ var _shared_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/toggle-button/toggle-button.component */ "KRhy");
/* harmony import */ var _manage_orders_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manage/orders/order-item/order-item.component */ "O6je");
/* harmony import */ var _manage_orders_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./manage/orders/order-form/order-form.component */ "KrAE");
/* harmony import */ var _shared_DateTime_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/DateTime.pipe */ "IaTx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptorService"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _manage_manage_component__WEBPACK_IMPORTED_MODULE_7__["ManageComponent"],
        _manage_upload_upload_component__WEBPACK_IMPORTED_MODULE_8__["UploadComponent"],
        _manage_receipts_receipts_component__WEBPACK_IMPORTED_MODULE_9__["ReceiptsComponent"],
        _manage_view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"],
        _manage_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
        _manage_edit_edit_start_edit_start_component__WEBPACK_IMPORTED_MODULE_12__["EditStartComponent"],
        _manage_view_view_item_view_item_component__WEBPACK_IMPORTED_MODULE_14__["ViewItemComponent"],
        _shared_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_15__["CloseButtonComponent"],
        _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_16__["MobileNavComponent"],
        _manage_orders_orders_component__WEBPACK_IMPORTED_MODULE_17__["OrdersComponent"],
        _shared_toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_18__["ToggleButton"],
        _manage_orders_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_19__["OrderItemComponent"],
        _manage_orders_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_20__["OrderFormComponent"],
        _shared_DateTime_pipe__WEBPACK_IMPORTED_MODULE_21__["DateTimeAdminPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "R7Kw":
/*!**********************************************************************!*\
  !*** ./projects/admin/src/app/manage/receipts/receipts.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReceiptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsComponent", function() { return ReceiptsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ReceiptsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReceiptsComponent.ɵfac = function ReceiptsComponent_Factory(t) { return new (t || ReceiptsComponent)(); };
ReceiptsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReceiptsComponent, selectors: [["app-receipts"]], decls: 2, vars: 0, template: function ReceiptsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "receipts works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlaXB0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "SRP3":
/*!*******************************************************************************!*\
  !*** ./projects/admin/src/app/manage/edit/edit-start/edit-start.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStartComponent", function() { return EditStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EditStartComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditStartComponent.ɵfac = function EditStartComponent_Factory(t) { return new (t || EditStartComponent)(); };
EditStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditStartComponent, selectors: [["app-edit-start"]], decls: 0, vars: 0, template: function EditStartComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXN0YXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "SopQ":
/*!***************************************************!*\
  !*** ./projects/admin/src/app/auth/user.model.ts ***!
  \***************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    /*
      Getter for token,
      Check if we have a valid token
    */
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        else
            return this._token;
    }
}


/***/ }),

/***/ "UX4H":
/*!*****************************************************************!*\
  !*** ./projects/admin/src/app/auth/auth-interceptor.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "qhKG");



/*
 * Injects the user token to all http requests if the user is logged in.
 *
 */
class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["exhaustMap"])((user) => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: req.params.append('auth', user.token),
            });
            return next.handle(modifiedReq);
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });


/***/ }),

/***/ "Xd0K":
/*!***********************************************************!*\
  !*** ./projects/admin/src/app/manage/manage.component.ts ***!
  \***********************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./management.service */ "9Av2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ManageComponent {
    constructor(manageService) {
        this.manageService = manageService;
    }
    ngOnInit() {
    }
}
ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_management_service__WEBPACK_IMPORTED_MODULE_0__["ManagementService"])); };
ManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManageComponent, selectors: [["app-manage"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_management_service__WEBPACK_IMPORTED_MODULE_0__["ManagementService"]])], decls: 2, vars: 0, consts: [[1, "bg-white"]], template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "YigA":
/*!***************************************************!*\
  !*** ./projects/admin/src/app/auth/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "qhKG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, router) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((user) => {
            const isAuthenticated = !!user;
            if (user) {
                return true;
            }
            return this.router.createUrlTree(['/login']);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cpF7":
/*!**************************************************************!*\
  !*** ./projects/admin/src/app/manage/edit/edit.component.ts ***!
  \**************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../management.service */ "9Av2");
/* harmony import */ var _shared_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/close-button/close-button.component */ "ssfX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function EditComponent_div_33_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", file_r3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function EditComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_div_33_img_1_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.fileUrls);
} }
function EditComponent_div_34_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const img_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function EditComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_div_34_img_1_Template, 1, 1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.product.images);
} }
const _c0 = function () { return ["/manage/view"]; };
class EditComponent {
    constructor(http, route, manage, router) {
        this.http = http;
        this.route = route;
        this.manage = manage;
        this.router = router;
        this.fileList = null;
        this.fileUrls = null;
        this.newImages = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (this.product != this.manage.getProduct(params['id'])) {
                this.product = this.manage.getProduct(params['id']);
                console.log(this.product);
                this.initForm();
            }
        });
    }
    /*
     * Create the form reactively, all inputs required except images.
     * Images not required here because we are editing the form,
     * afaik, I cannot preload the input with a fileUrl
     */
    initForm() {
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.product.description, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.product.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.product.quantity, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[1-9]+[0-9]*$/),
            ]),
            visible: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.product.visible, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            images: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
        });
    }
    /*
     * Check for any changes, if changes were made, http put request will be made.
     * Note: We cannot grab the FileList through Angular controls, so we manually had
     *    to do that.
     */
    onSubmit() {
        let changes = {};
        let edited = false;
        for (let control in this.editForm.controls) {
            if (!this.editForm.controls[control].pristine) {
                changes[control] = this.editForm.controls[control].value;
                edited = true;
            }
        }
        if (this.fileList) {
            edited = true;
            changes['images'] = this.fileList;
        }
        if (edited) {
            this.manage
                .editProduct(changes, this.product.id)
                .subscribe((res) => {
                if (res.message === "OK") {
                    this.manage.getShop(true);
                    this.router.navigate(['/manage/view']);
                }
            });
        }
        else {
            console.log('No changes were made');
        }
    }
    onLoad(files) {
        this.fileUrls = [];
        this.fileList = files;
        let i, len;
        for (i = 0; i < files.length; i++) {
            let reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onload = () => {
                this.fileUrls.push(reader.result);
            };
        }
        this.newImages = true;
    }
    onDelete() {
        if (confirm(`Are you sure you want to delete ${this.product.name}?\nID: ${this.product.id}`)) {
            this.manage.deleteProduct(this.product.id);
            this.router.navigate(['/manage/view']);
            this.manage.getShop(true);
        }
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_management_service__WEBPACK_IMPORTED_MODULE_4__["ManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 41, vars: 5, consts: [[1, "absolute", "right-3.5", "top-28", 3, "routerLink"], [1, "font-medium", "mt-2", "text-3xl", "text-center"], [1, "flex", "flex-col", "justify-center", "mt-5", 3, "formGroup", "ngSubmit"], [1, "mx-auto"], ["for", "name", 1, "text-left"], ["type", "text", "id", "name", "name", "name", "formControlName", "name", 1, "block", "md:w-96", "w-52"], ["for", "price", 1, "text-left"], ["type", "number", "id", "price", "name", "price", "formControlName", "price", 1, "block", "md:w-96", "w-52"], ["for", "quantity"], ["type", "number", "id", "quantity", "name", "quantity", "formControlName", "quantity", 1, "block", "md:w-96", "w-52"], ["for", "description"], ["type", "text", "name", "description", "formControlName", "description", 1, "block", "md:w-96", "w-52"], ["formControlName", "visible", 1, "block", "md:w-96", "w-52"], ["value", "true"], ["value", "false"], [1, "mt-2"], ["for", "images"], ["id", "images", "accept", "image/jpeg image/png", "multiple", "", "name", "images", "type", "file", 1, "block", "mx-auto", 3, "change"], ["class", "mx-auto flex justify-around flex-wrap", 4, "ngIf"], [1, "flex", "justify-between"], ["type", "button", 1, "mb-5", "bg-red-500", "w-28", "py-4", "rounded", 3, "click"], ["type", "submit", 1, "mb-5", "bg-lightgreen", "w-28", "py-4", "rounded"], [1, "mb-10"], [1, "mx-auto", "flex", "justify-around", "flex-wrap"], ["class", "lg:w-72 lg:h-72 w-40 h-40 px-5 py-5 object-cover", 3, "src", 4, "ngFor", "ngForOf"], [1, "lg:w-72", "lg:h-72", "w-40", "h-40", "px-5", "py-5", "object-cover", 3, "src"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-close-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Edit Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditComponent_Template_input_change_32_listener($event) { return ctx.onLoad($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, EditComponent_div_33_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, EditComponent_div_34_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditComponent_Template_button_click_36_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "hr", 22);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.newImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.newImages);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_close_button_close_button_component__WEBPACK_IMPORTED_MODULE_5__["CloseButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "gH/j":
/*!******************************************************************!*\
  !*** ./projects/admin/src/app/manage/orders/orders.component.ts ***!
  \******************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../management.service */ "9Av2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _order_item_order_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-item/order-item.component */ "O6je");




function OrdersComponent_app_order_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-order-item", 4);
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", order_r1);
} }
class OrdersComponent {
    constructor(manage) {
        this.manage = manage;
    }
    ngOnInit() {
        // Check for mobile display
        this.mobile = window.innerWidth < 768;
        this.ordersObs = this.manage.getOrders();
        this.ordersObs.subscribe((orders) => {
            console.log(orders);
            this.orders = orders;
        });
    }
    onResize(event) {
        console.log('resizing...');
        this.mobile = window.innerWidth < 1024;
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"])); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], hostBindings: function OrdersComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function OrdersComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 1, consts: [[1, "text-3xl", "font-bold", "text-center", "my-4"], [1, "flex", "justify-center"], [1, "flex", "flex-wrap", "justify-center", "md:justify-start", "max-w-screen-sm", "md:max-w-screen-md", "lg:max-w-screen-xl"], ["class", "mx-8 max-w-min my-4", 3, "item", 4, "ngFor", "ngForOf"], [1, "mx-8", "max-w-min", "my-4", 3, "item"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrdersComponent_app_order_item_4_Template, 1, 1, "app-order-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _order_item_order_item_component__WEBPACK_IMPORTED_MODULE_3__["OrderItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "h2Ae":
/*!************************************************************!*\
  !*** ./projects/admin/src/app/shared/upload-form.model.ts ***!
  \************************************************************/
/*! exports provided: UploadForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadForm", function() { return UploadForm; });
class UploadForm {
    constructor(name, quantity, price, description, imageFiles, postedDate) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.description = description;
        this.imageFiles = imageFiles;
        this.postedDate = postedDate;
    }
}


/***/ }),

/***/ "lVLu":
/*!***********************************************************!*\
  !*** ./projects/admin/src/app/navbar/navbar.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "qhKG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/manage/view"]; };
const _c1 = function () { return ["/manage/receipts"]; };
const _c2 = function () { return ["/manage/upload"]; };
const _c3 = function () { return ["/manage/orders"]; };
class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    onLogout() {
        this.authService.logout();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 8, consts: [[1, "w-full", "bg-gray-800", "text-white", "py-3", "flex"], [1, "flex", "justify-between", "items-center", "w-full", "md:mx-20"], [1, "py-4"], ["routerLinkActive", "border-b-2 border-red-600", 1, "inline", "px-5", "py-4", "cursor-pointer", 3, "routerLink"], [1, "bg-red-500", "px-5", "text-black", "py-4", "rounded-xl", "cursor-pointer", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Receipts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_12_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "qQdB":
/*!*********************************************************!*\
  !*** ./projects/admin/src/app/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "qhKG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["form"];
function LoginComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
} }
class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.errorSub = this.authService.errorChanged.subscribe((errorMessage) => {
            this.errorMessage = errorMessage;
        });
    }
    ngOnInit() { }
    onSubmit() {
        this.authService.login(this.loginForm.form.value['email'], this.loginForm.form.value['password']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loginForm = _t.first);
    } }, decls: 13, vars: 2, consts: [[1, "h-screen"], [1, "py-20", "flex", "justify-center", "min-w-max"], [1, "flex", "items-center", "flex-col", "bg-white", "md:w-2/3", "md:px-14", "px-5", "pb-32", "rounded-3xl", 3, "ngSubmit"], ["form", "ngForm"], [1, "mt-24", "mb-12"], ["placeholder", "Email", "type", "text", "id", "email", "name", "email", "ngModel", "", "required", "", 1, "mx-5", "block", "focus:ring-transparent", "my-2.5", "py-3", "max-w-screen-md", "lg:w-96", "rounded-md", "border-none", "bg-gray-400", "placeholder-gray-500"], ["placeholder", "Password", "type", "password", "id", "password", "name", "password", "ngModel", "", "required", "", 1, "focus:ring-transparent", "my-2.5", "py-3", "max-w-screen-sm", "rounded-md", "lg:w-96", "border-none", "bg-gray-400", "placeholder-gray-500"], ["type", "submit", 1, "rounded-2xl", "px-24", "max-w-screen-sm", "py-3", "my-2.5", "bg-lightgreen", "lg:w-96", 3, "disabled"], ["class", "text-red-500", 4, "ngIf"], ["href", "https://mattako.dev", 1, "mx-auto", "text-blue-600", "text-center", "pt-5"], [1, "text-red-500"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "626plants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_p_10_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Go to Main Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "qhKG":
/*!*****************************************************!*\
  !*** ./projects/admin/src/app/auth/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "SopQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.errorChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() { }
    /*
      @desc: Login user
          On success: Store the user info
          On error: notify user
    */
    login(email, password) {
        this.http
            .post('/api/admin/login', {
            email: email,
            password: password,
        })
            .subscribe((response) => {
            const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
            const user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](response.email, response.localId, response.idToken, expirationDate);
            this.user.next(user);
            localStorage.setItem('userData', JSON.stringify(user));
            this.autoLogout(+response.expiresIn * 1000);
            this.router.navigate(['/manage']);
        }, (error) => {
            this.errorChanged.next(error.error.message);
        });
    }
    /*
          @desc: Logout the user:
              Clear user subject, navigate to /login,
              clear setTimeout in autoLogout(), clear storage
      */
    logout() {
        this.user.next(null);
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
        localStorage.removeItem('userData');
        this.router.navigate(['/login']);
    }
    /*
          @desc: Check localStorage for userData, return if empty.
          If data found, check if token is still valid.
              If token INVALID, clear localStorage and return
              If token VALID, login the user, then redirect to /manage.
      */
    autoLogin() {
        if (!localStorage.getItem('userData')) {
            return;
        }
        const userData = JSON.parse(localStorage.getItem('userData'));
        const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDate = new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDate);
            this.router.navigate(['/manage']);
        }
    }
    autoLogout(tokenDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, tokenDuration);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ssfX":
/*!******************************************************************************!*\
  !*** ./projects/admin/src/app/shared/close-button/close-button.component.ts ***!
  \******************************************************************************/
/*! exports provided: CloseButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButtonComponent", function() { return CloseButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CloseButtonComponent {
    constructor() { }
}
CloseButtonComponent.ɵfac = function CloseButtonComponent_Factory(t) { return new (t || CloseButtonComponent)(); };
CloseButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloseButtonComponent, selectors: [["app-close-button"]], decls: 3, vars: 0, consts: [["id", "mdiv"], [1, "mdiv"], [1, "md"]], template: function CloseButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#mdiv[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-left: 1px;\n  cursor: pointer;\n}\n\n.mdiv[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 2px;\n  margin-left: 12px;\n  background-color: black;\n  transform: rotate(45deg);\n  Z-index: 1;\n}\n\n.md[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 2px;\n  background-color: black;\n  transform: rotate(90deg);\n  Z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3NlLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWiIsImZpbGUiOiJjbG9zZS1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZGl2IHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZGl2IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDJweDtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgWi1pbmRleDogMTtcclxufVxyXG5cclxuLm1kIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgWi1pbmRleDogMjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map