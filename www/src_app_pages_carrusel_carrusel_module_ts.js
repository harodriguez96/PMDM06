"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_carrusel_carrusel_module_ts"],{

/***/ 7668:
/*!***********************************************************!*\
  !*** ./src/app/pages/carrusel/carrusel-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarruselPageRoutingModule": () => (/* binding */ CarruselPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _carrusel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrusel.page */ 9448);




const routes = [
    {
        path: '',
        component: _carrusel_page__WEBPACK_IMPORTED_MODULE_0__.CarruselPage
    }
];
let CarruselPageRoutingModule = class CarruselPageRoutingModule {
};
CarruselPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarruselPageRoutingModule);



/***/ }),

/***/ 8553:
/*!***************************************************!*\
  !*** ./src/app/pages/carrusel/carrusel.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarruselPageModule": () => (/* binding */ CarruselPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/mis-componentes.module */ 6453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _carrusel_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrusel-routing.module */ 7668);
/* harmony import */ var _carrusel_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrusel.page */ 9448);








let CarruselPageModule = class CarruselPageModule {
};
CarruselPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _carrusel_routing_module__WEBPACK_IMPORTED_MODULE_1__.CarruselPageRoutingModule,
            _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__.MisComponentesModule
        ],
        declarations: [_carrusel_page__WEBPACK_IMPORTED_MODULE_2__.CarruselPage]
    })
], CarruselPageModule);



/***/ }),

/***/ 9448:
/*!*************************************************!*\
  !*** ./src/app/pages/carrusel/carrusel.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarruselPage": () => (/* binding */ CarruselPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _carrusel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrusel.page.html?ngResource */ 360);
/* harmony import */ var _carrusel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrusel.page.scss?ngResource */ 3017);
/* harmony import */ var _servicios_camara_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../servicios/camara.service */ 2532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let CarruselPage = class CarruselPage {
    constructor(usarCamara) {
        this.usarCamara = usarCamara;
        this.options = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
            speed: 400
        };
    }
    ngOnInit() {
    }
};
CarruselPage.ctorParameters = () => [
    { type: _servicios_camara_service__WEBPACK_IMPORTED_MODULE_2__.CamaraService }
];
CarruselPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-carrusel',
        template: _carrusel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_carrusel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarruselPage);



/***/ }),

/***/ 3017:
/*!**************************************************************!*\
  !*** ./src/app/pages/carrusel/carrusel.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJydXNlbC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 360:
/*!**************************************************************!*\
  !*** ./src/app/pages/carrusel/carrusel.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-page-header titulo=\"Carrusel\"></app-page-header>\r\n\r\n<ion-content>\r\n    <ion-slides [options]=\"options\">\r\n        <ion-slide *ngFor=\"let imagen of usarCamara.getListaUrl(); index as position\">\r\n          <ion-card>\r\n            <ion-img [src]=\"imagen\"></ion-img>\r\n            <ion-card-header>\r\n              <ion-card-title>Foto {{position}}</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>      \r\n        </ion-slide>\r\n      </ion-slides>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_carrusel_carrusel_module_ts.js.map