"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fotos_fotos_module_ts"],{

/***/ 4619:
/*!*****************************************************!*\
  !*** ./src/app/pages/fotos/fotos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosPageRoutingModule": () => (/* binding */ FotosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fotos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotos.page */ 9003);




const routes = [
    {
        path: '',
        component: _fotos_page__WEBPACK_IMPORTED_MODULE_0__.FotosPage
    }
];
let FotosPageRoutingModule = class FotosPageRoutingModule {
};
FotosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FotosPageRoutingModule);



/***/ }),

/***/ 2916:
/*!*********************************************!*\
  !*** ./src/app/pages/fotos/fotos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosPageModule": () => (/* binding */ FotosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/mis-componentes.module */ 6453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fotos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotos-routing.module */ 4619);
/* harmony import */ var _fotos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fotos.page */ 9003);








let FotosPageModule = class FotosPageModule {
};
FotosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _fotos_routing_module__WEBPACK_IMPORTED_MODULE_1__.FotosPageRoutingModule,
            _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__.MisComponentesModule
        ],
        declarations: [_fotos_page__WEBPACK_IMPORTED_MODULE_2__.FotosPage]
    })
], FotosPageModule);



/***/ }),

/***/ 9003:
/*!*******************************************!*\
  !*** ./src/app/pages/fotos/fotos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosPage": () => (/* binding */ FotosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _fotos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotos.page.html?ngResource */ 5272);
/* harmony import */ var _fotos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotos.page.scss?ngResource */ 4225);
/* harmony import */ var _servicios_fotos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../servicios/fotos.service */ 974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let FotosPage = class FotosPage {
    constructor(usarCamara) {
        this.usarCamara = usarCamara;
    }
    ngOnInit() {
    }
    takePicture() {
        this.usarCamara.sacarFoto();
    }
};
FotosPage.ctorParameters = () => [
    { type: _servicios_fotos_service__WEBPACK_IMPORTED_MODULE_2__.FotosService }
];
FotosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-fotos',
        template: _fotos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fotos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FotosPage);



/***/ }),

/***/ 974:
/*!********************************************!*\
  !*** ./src/app/servicios/fotos.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosService": () => (/* binding */ FotosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _gestion_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-storage.service */ 5831);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);






let FotosService = class FotosService {
    // Carga las imágenes que tenemos almacenadas
    constructor(usarStorage, plataforma) {
        this.usarStorage = usarStorage;
        this.plataforma = plataforma;
        // Array para almacenar las rutas de cada foto
        this.accesoFotos = [];
        this.loadSaved();
    }
    // Devuelve el array para poderlo utilizar en un componente
    getFotos() {
        return this.accesoFotos;
    }
    // Recupera las imágenes que hay almacenadas en el disco duro
    loadSaved() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Recupera los datos de Storage en formato string
            const photoList = yield this.usarStorage.getObject("fotos");
            // Lo parsea a un array de objetos IFoto y lo almacena en el atributo accesoFotos
            // Si no obtiene datos inicializará el array para poder empezar a almacenar fotos.
            this.accesoFotos = JSON.parse(photoList.value) || [];
            console.log(photoList);
            // En los navegadores debemos cargar las imágenes en formato base64 para que se visualicen correctamente
            if (!this.plataforma.is("hybrid")) {
                // Lee los datos de cada foto guardada en el sistema de archivos
                for (let photo of this.accesoFotos) {
                    const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                    });
                    // Plataforma web solamente: Guardar la foto en base64 para que se pueda visualizar
                    photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
                }
            }
        });
    }
    // Define las características de la foto y la saca
    sacarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Definir características de la foto
            let caracteristicasFoto = {
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera,
                quality: 100
            };
            const foto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto(caracteristicasFoto);
            console.log(foto);
            // Se obtiene la URL y se añade al principio del array
            // let UrlFoto: string = foto.webPath;
            // this.urlFotos.unshift(UrlFoto);
            // En los dispositivos móviles las fotos se guardan por defecto y tenemos el path físico y el webpath para visualizar
            // En el navegador hay que guardar la imagen en un fichero y se almacena su path y su URL en el array
            let imagenGuardada;
            if (!this.plataforma.is("hybrid")) {
                imagenGuardada = yield this.savePicture(foto);
            }
            else {
                // Guarda las rutas de acceso a la foto
                imagenGuardada = {
                    filepath: foto.path,
                    webviewPath: foto.webPath
                };
            }
            this.accesoFotos.unshift(imagenGuardada);
            console.log(imagenGuardada);
            // Almacenamos los datos de las fotos en Storage
            this.usarStorage.setObject("fotos", this.accesoFotos);
        });
    }
    // Se almacena la imagen en el sistema de ficheros
    // Solo para el navegador
    savePicture(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Convierte la foto al formato base64, exigido por la API del sistema de ficheros
            const base64Data = yield this.readAsBase64(cameraPhoto);
            // Guarda el fichero
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data // Los datos se borrarn al desinstalar la aplicación
            });
            console.log(savedFile);
            // Crea y devuelve un objeto IFoto
            return {
                filepath: fileName,
                webviewPath: cameraPhoto.webPath
            };
        });
    }
    // Devuelve la imagen en formato base64 para trabajar en los navegadores
    // Recupera la imagen como blob y la convierte a base64
    readAsBase64(foto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(foto.webPath);
            const blob = yield response.blob();
            const base64 = yield this.convertBlobToBase64(blob);
            return base64;
        });
    }
    // Conviete una imagen en formato blob a formato base 64
    convertBlobToBase64(blob) {
        let promesa = new Promise(function (resolve, reject) {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        return promesa;
    }
    // Here's an example of reading a file with a full file path. Use this to
    // read binary data (base64 encoded) from plugins that return File URIs, such as
    // the Camera.
    readFilePath() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                path: 'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
            });
            console.log('data:', contents);
        });
    }
    ;
};
FotosService.ctorParameters = () => [
    { type: _gestion_storage_service__WEBPACK_IMPORTED_MODULE_0__.GestionStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
FotosService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], FotosService);



/***/ }),

/***/ 4225:
/*!********************************************************!*\
  !*** ./src/app/pages/fotos/fotos.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Rvcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5272:
/*!********************************************************!*\
  !*** ./src/app/pages/fotos/fotos.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<app-page-header titulo=\"Fotos\"></app-page-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-button (click)=\"takePicture()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Sacar foto\r\n    </ion-button>\r\n\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n            <ion-col size=\"6\" *ngFor=\"let foto of usarCamara.getFotos()\">\r\n                <ion-img [src]=\"foto.webviewPath\"></ion-img>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fotos_fotos_module_ts.js.map