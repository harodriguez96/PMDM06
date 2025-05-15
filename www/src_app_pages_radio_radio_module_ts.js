"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_radio_radio_module_ts"],{

/***/ 6453:
/*!******************************************************!*\
  !*** ./src/app/components/mis-componentes.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisComponentesModule": () => (/* binding */ MisComponentesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.component */ 4831);





let MisComponentesModule = class MisComponentesModule {
};
MisComponentesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ],
        exports: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent]
    })
], MisComponentesModule);



/***/ }),

/***/ 4831:
/*!*****************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component.html?ngResource */ 6256);
/* harmony import */ var _page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.component.scss?ngResource */ 343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let PageHeaderComponent = class PageHeaderComponent {
    constructor() {
        this.titulo = "";
    }
    ngOnInit() { }
};
PageHeaderComponent.ctorParameters = () => [];
PageHeaderComponent.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PageHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-page-header',
        template: _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageHeaderComponent);



/***/ }),

/***/ 9950:
/*!*****************************************************!*\
  !*** ./src/app/pages/radio/radio-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioPageRoutingModule": () => (/* binding */ RadioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _radio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.page */ 444);




const routes = [
    {
        path: '',
        component: _radio_page__WEBPACK_IMPORTED_MODULE_0__.RadioPage
    }
];
let RadioPageRoutingModule = class RadioPageRoutingModule {
};
RadioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RadioPageRoutingModule);



/***/ }),

/***/ 7183:
/*!*********************************************!*\
  !*** ./src/app/pages/radio/radio.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioPageModule": () => (/* binding */ RadioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _radio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-routing.module */ 9950);
/* harmony import */ var _radio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio.page */ 444);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/mis-componentes.module */ 6453);









let RadioPageModule = class RadioPageModule {
};
RadioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _radio_routing_module__WEBPACK_IMPORTED_MODULE_0__.RadioPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            src_app_components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_2__.MisComponentesModule
        ],
        declarations: [_radio_page__WEBPACK_IMPORTED_MODULE_1__.RadioPage]
    })
], RadioPageModule);



/***/ }),

/***/ 444:
/*!*******************************************!*\
  !*** ./src/app/pages/radio/radio.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioPage": () => (/* binding */ RadioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _radio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.page.html?ngResource */ 3051);
/* harmony import */ var _radio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio.page.scss?ngResource */ 7222);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_servicios_radio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/radio.service */ 5553);






let RadioPage = class RadioPage {
    constructor(http, radio) {
        this.http = http;
        this.radio = radio;
        this.stations = [];
        this.countries = [];
        this.country = null;
    }
    ngOnInit() {
        this.loadCountries();
    }
    loadCountries() {
        this.radio.getCountries().subscribe({
            next: (data) => {
                this.countries = data.map(c => c.name);
            },
            error: err => {
                console.error('Error al cargar países', err);
            }
        });
    }
    selectCountry(name) {
        this.country = name;
        console.log(this.country);
        this.radio.loadStations(name).subscribe({
            next: stations => {
                this.stations = stations.slice(0, 10); // Limit to 10 stations here
            },
            error: err => {
                console.error('Error al cargar estaciones', err);
            }
        });
    }
    play(station) {
        this.radio.play(station.url_resolved);
    }
    stop() {
        this.radio.stop();
    }
};
RadioPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: src_app_servicios_radio_service__WEBPACK_IMPORTED_MODULE_2__.RadioService }
];
RadioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-radio',
        template: _radio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_radio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RadioPage);



/***/ }),

/***/ 5553:
/*!********************************************!*\
  !*** ./src/app/servicios/radio.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioService": () => (/* binding */ RadioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);



let RadioService = class RadioService {
    constructor(http) {
        this.http = http;
        this.audio = new Audio();
        this.apiUrl = 'https://de1.api.radio-browser.info/json/countries';
    }
    play(url) {
        this.audio.src = url;
        this.audio.load();
        this.audio.play().catch(err => {
            console.error('Error al reproducir:', err);
        });
    }
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }
    getCountries() {
        return this.http.get(this.apiUrl);
    }
    loadStations(country) {
        const url = `https://de1.api.radio-browser.info/json/stations/bycountry/${country}`;
        return this.http.get(url);
    }
};
RadioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RadioService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RadioService);



/***/ }),

/***/ 343:
/*!******************************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7222:
/*!********************************************************!*\
  !*** ./src/app/pages/radio/radio.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6256:
/*!******************************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"\\\" mode=\"ios\" text=\"Atrás\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-uppercase\">{{titulo}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n";

/***/ }),

/***/ 3051:
/*!********************************************************!*\
  !*** ./src/app/pages/radio/radio.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<app-page-header titulo=\"radio\"></app-page-header>\n\n<ion-content>\n  <ion-list *ngIf=\"!country\">\n    <ion-item *ngFor=\"let country of countries\" (click)=\"selectCountry(country)\">\n      <ion-label>{{country}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf=\"country\">\n    <ion-item *ngFor=\"let station of stations\">\n      <ion-label>\n        <h2>{{ station.name }}</h2>\n      </ion-label>\n\n      <!-- Play Button with icon -->\n      <ion-button (click)=\"play(station)\" fill=\"clear\">\n        <ion-icon size=\"large\" slot=\"start\" name=\"play\" color=\"success\"></ion-icon>\n      </ion-button>\n\n      <!-- Stop Button with icon -->\n      <ion-button (click)=\"stop()\" fill=\"clear\">\n        <ion-icon size=\"large\" slot=\"start\" name=\"stop\" color=\"tertiary\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_radio_radio_module_ts.js.map