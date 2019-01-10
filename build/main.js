webpackJsonp([13],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_info_user_info__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LangPage = /** @class */ (function () {
    function LangPage(navCtrl, navParams, viewCtrl, alertCtrl, __userInfo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.__userInfo = __userInfo;
        this.Langs = [{ name: "English", id: "Eng" }, { name: "Spanish", id: "Esp" }, { name: "Chinese", id: "Chin" }, { name: "German", id: "Ger" }, { name: "French", id: "Fre" }, { name: "Portuguese", id: "Port" }, { name: "Japanese", id: "Jap" }];
        this.LangSelected = null;
    }
    LangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LangPage');
    };
    LangPage.prototype.selectLanguage = function (index) {
        this.LangSelected = this.Langs[index];
    };
    LangPage.prototype.closeModal = function () {
        var _this = this;
        if (this.LangSelected.id != "Eng" && this.LangSelected.id != "Esp") {
            var alert_1 = this.alertCtrl.create({
                title: 'Hi!',
                message: 'We are really so sorry, but right now we only have spanish or english as language, it is corrert if we put english as your language? ',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function (data) {
                            _this.LangSelected = _this.Langs[0];
                            var user = new __WEBPACK_IMPORTED_MODULE_3__classes_user__["a" /* default */]();
                            _this.__userInfo.setUser(user);
                            console.log('Saved clicked');
                            _this.viewCtrl.dismiss({ lang: _this.LangSelected });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var user = new __WEBPACK_IMPORTED_MODULE_3__classes_user__["a" /* default */](this.LangSelected);
            this.__userInfo.setUser(user);
            this.viewCtrl.dismiss({ lang: this.LangSelected });
        }
    };
    LangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lang',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\lang\lang.html"*/'<ion-content class="contentlang" style="position: relative;">\n  <ion-row style="height:50px; padding:1rem; font-size: 18px; text-transform: uppercase; display: flex; align-items: center;margin-top: 30px">\n    <ion-col>\n      Language\n    </ion-col>\n  </ion-row>\n  <ion-row *ngFor="let lang of Langs; let i= index" style="height:50px; padding:1.5rem;border-bottom: 1px solid #CFCAC6;">\n    <ion-col class="radiobutton" style="height: 100%; display: flex; align-items: center;;">\n      <input [id]="lang.name" type="radio" (click)="selectLanguage(i);" name="lang" [value]="lang.id" />\n      <label [for]="lang.name">{{lang.name}}</label>\n    </ion-col>\n  </ion-row>\n      <button *ngIf="LangSelected!=null" class="btn-lang" color="primary" ion-button  class="animate-gu btn-lang" (click)="closeModal()">\n        Next\n</button>\n</ion-content>'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\lang\lang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_info_user_info__["a" /* UserInfoProvider */]])
    ], LangPage);
    return LangPage;
}());

//# sourceMappingURL=lang.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalLoginPage = /** @class */ (function () {
    function ModalLoginPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalLoginPage');
    };
    ModalLoginPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-login',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\modal-login\modal-login.html"*/'<ion-content  class="bg-ctn" >\n\n    <div class="form-content">\n\n        <div class="label-form"> \n\n          Registráte\n\n          </div>\n\n    <div class="boxsing">Nombre</div>\n\n    <ion-item class="inp-form">\n\n  <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <div class="boxsing">Apellido</div>\n\n    <ion-item class="inp-form">\n\n  <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <div class="boxsing">Correo Electrónico</div>\n\n    <ion-item class="inp-form">\n\n  <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <div class="boxsing">Teléfono</div>\n\n    <ion-item class="inp-form">\n\n  <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <div class="boxsing">País</div>\n\n    <ion-item class="inp-form">\n\n      <ion-select [(ngModel)]="Sexo" interface="popover" style="width: 100%">\n\n        <ion-option value="M">Mexico</ion-option>\n\n        <ion-option value="F">Estados Unidos</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    \n\n\n\n    <div class="boxsing">Categoría</div>\n\n    <ion-item class="inp-form">\n\n      <ion-select [(ngModel)]="Sexo" interface="popover" style="width: 100%">\n\n        <ion-option value="Pasajero">Pasajero</ion-option>\n\n        <ion-option value="Turista">Turista</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <div class="boxsing">Contraseña</div>\n\n    <ion-item class="inp-form">\n\n  <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <div class="boxsing">Repita Contraseña</div>\n\n    <ion-item class="inp-form">\n\n  <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <div style="margin-top:10px; display: flex; flex-direction:column;align-items: center;">\n\n        <button ion-button block color="menu" (click)="closeModal()">CREAR CUENTA</button>\n\n        <span style="margin-top:10px;">Cancelar</span>\n\n      </div>\n\n\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\modal-login\modal-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalLoginPage);
    return ModalLoginPage;
}());

//# sourceMappingURL=modal-login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePasajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePasajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePasajePage = /** @class */ (function () {
    function HomePasajePage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.redondo = false;
        this.DatosUser = false;
        this.DatosViaje = true;
        this.DatosCompra = false;
        this.AcceptedData = false;
        this.escalas = [];
        this.DatosUser = false;
        this.DatosCompra = false;
    }
    HomePasajePage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true, 'Pasajero');
        this.menuCtrl.enable(false, 'Turista');
        console.log('ionViewDidLoad HomePasajePage');
    };
    HomePasajePage.prototype.fillUserData = function () {
        this.DatosViaje = false;
        this.DatosUser = true;
    };
    HomePasajePage.prototype.fillCompra = function () {
        this.DatosUser = false;
        this.DatosViaje = false;
        this.DatosCompra = true;
    };
    HomePasajePage.prototype.AcceptData = function () {
        this.AcceptedData = true;
    };
    HomePasajePage.prototype.back = function (opc) {
        switch (opc) {
            case 1:
                this.DatosViaje = false;
                this.DatosCompra = false;
                this.DatosUser = true;
                break;
            case 2:
                this.DatosUser = false;
                this.DatosCompra = false;
                this.DatosViaje = true;
                break;
        }
    };
    HomePasajePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-pasaje',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-pasaje\home-pasaje\home-pasaje.html"*/'\n  <ion-content  class="HomePasaje animate-top" style=" background: #F1EFED;" >\n      <div class="arrow-back" *ngIf="DatosUser">\n          <ion-icon name="md-arrow-back" style="font-size:24px; margin-right: 10px;" (click)="back(2)">\n    \n          </ion-icon>\n          REGRESAR\n        </div>\n\n        <div class="arrow-back" *ngIf="DatosCompra">\n            <ion-icon name="md-arrow-back" style="font-size:24px; margin-right: 10px;" (click)="back(1)"></ion-icon>\n          REGRESAR\n          </div> \n\n\n    <div style="width:100%; display: flex; justify-content: center;margin-top: 43px">\n      <img src="./assets/imgs/logo-login.svg" width="163px" alt="">\n    </div>\n\n\n    <div class="form-content" *ngIf="DatosViaje">\n      \n\n    <div class="label-form"> \n      Datos de viaje\n    </div>\n<div class="boxsing">Origen</div>\n<ion-item class="inp-form">\n  <ion-select [(ngModel)]="Origen" interface="popover" style="width: 100%">\n    <ion-option value="Palenque">Palenque</ion-option>\n    <ion-option value="Tabasco">Tabasco</ion-option>\n  </ion-select>\n</ion-item>\n\n<div class="boxsing">Destino</div>\n<ion-item class="inp-form">\n  <ion-select [(ngModel)]="Destino" interface="action-sheet" style="width: 100%">\n    <ion-option value="Palenque">Palenque $70.00 MXN</ion-option>\n    <ion-option value="Tabasco">Tabasco $120.00 MXN</ion-option>\n  </ion-select>\n</ion-item>\n<div class="multiline">\n  <div class="inpcol">\n\n      <div class="boxsing">Personas</div>\n      <ion-item class="inp-form">\n        <ion-select [(ngModel)]="personas" interface="popover" style="width: 100%">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n          <ion-option value="6">6</ion-option>\n        </ion-select>\n      </ion-item>\n  </div>\n\n  <div class="inpcol">\n\n      <div class="boxsing">Horario</div>\n      <ion-item class="inp-form">\n        <ion-select [(ngModel)]="Horario" interface="action-sheet" style="width: 100%">\n          <ion-option value="1">10: 00 hrs</ion-option>\n          <ion-option value="2">11: 00 hrs</ion-option>\n          <ion-option value="3">12: 00 hrs</ion-option>\n          <ion-option value="4">13: 00 hrs</ion-option>\n        </ion-select>\n      </ion-item>\n  </div>\n</div>\n<div class="boxsing">Salida</div>\n<ion-item class="inp-form date-f">\n \n  <ion-datetime displayFormat="MMM DD, YYYY " [(ngModel)]="Salida"></ion-datetime>\n</ion-item>\n\n<div *ngIf="!soloida" class="boxsing">Regreso</div>\n<ion-item  *ngIf="!soloida" class="inp-form date-f">\n \n  <ion-datetime displayFormat="MMM DD, YYYY " [(ngModel)]="Regreso"></ion-datetime>\n</ion-item>\n\n<ion-item class="toggle-form">\n  <ion-label>Solo Ida</ion-label>\n  <ion-toggle [(ngModel)]="soloida"></ion-toggle>\n</ion-item>\n\n<ion-item class="toggle-form">\n  <ion-label>Varios Destinos</ion-label>\n  <ion-toggle [(ngModel)]="Escalas"></ion-toggle>\n</ion-item>\n\n<div style="margin-top:10px">\n  <button ion-button block color="menu" (click)="fillUserData()">SIGUIENTE</button>\n</div>\n    </div>\n\n\n\n    <div class="datosUser animate-right" *ngIf="DatosUser">\n        <div class="form-content">\n            <div class="label-form"> \n                Datos de Usuario\n              </div>\n        \n          <div class="boxsing">Nombre</div>\n                <ion-item class="inp-form">\n              <ion-input type="text"></ion-input>\n                </ion-item>\n        \n                <div class="boxsing">Apellido</div>\n                <ion-item class="inp-form">\n              <ion-input type="text"></ion-input>\n                </ion-item>\n        \n                <div class="boxsing">Genero</div>\n                <ion-item class="inp-form">\n                  <ion-select [(ngModel)]="Sexo" interface="popover" style="width: 100%">\n                    <ion-option value="M">Masculino</ion-option>\n                    <ion-option value="F">Femenino</ion-option>\n                  </ion-select>\n                </ion-item>\n\n                <div class="boxsing">Fecha de Nacimientp</div>\n                <ion-item class="inp-form date-f">\n                 \n                  <ion-datetime displayFormat="MMM DD, YYYY " [(ngModel)]="Salida"></ion-datetime>\n                </ion-item>\n        \n                <div class="boxsing">Correo Electrónico</div>\n                <ion-item class="inp-form">\n              <ion-input type="mail"></ion-input>\n                </ion-item>\n        \n                <div class="boxsing">Repite Correo Electrónico</div>\n                <ion-item class="inp-form">\n              <ion-input type="mail"></ion-input>\n                </ion-item>\n        \n        \n                <div class="boxsing">Teléfono </div>\n                <ion-item class="inp-form">\n              <ion-input type="mail"></ion-input>\n                </ion-item>\n        \n                <div class="boxsing"> Repite Teléfono </div>\n                <ion-item class="inp-form">\n              <ion-input type="mail"></ion-input>\n                </ion-item>\n          \n                <div style="margin-top:10px">\n                    <button ion-button block color="menu" (click)="fillCompra()" >SIGUIENTE</button>\n                  </div>\n         \n              </div>\n\n\n          \n                                      \n        </div>\n\n\n\n        <div class="datosUser animate-right" *ngIf="DatosCompra">\n          \n          <div class="form-content-info">\n              <div class="label-form"> \n                  Datos de Pedido\n                </div>\n            <div class="row-info"> \n              <div class="col-info ">\n                  <div class="label">\n                      Nombre Cliente\n                    </div>\n                    <div class="name">Cliente Cliente</div>\n              </div>\n\n              <div class="col-info final">\n                  <div class="label">Fecha</div>\n                  <div class="name">24/12/19</div>\n                </div>\n           \n            </div>\n\n            <div class="row-info">\n            <div class="col-info">\n              <div class="label">Origen</div>\n             \n             <div class="name">Ciudad Origen</div> \n            </div>\n            <div class="col-info final" style="justify-content: flex-end;">\n              <div class="label">Destino</div>\n              <div class="name">Ciudad Destino</div>\n\n            </div>\n          </div>\n            <div class="row-info">\n              <div class="col-info">\n                <div class="label">Número de personas</div>\n                <div class="name">4</div>\n              </div>\n              <div class="col-info final">\n                <div class="label">Hora</div>\n                <div class="name">10:00 hrs </div>\n              </div>\n\n            </div>\n            <div class="row-info">\n                <div class="col-info">\n                  <div class="label">Correo</div>\n                  <div class="name">correo@correo.com</div>\n                </div>\n                <div class="col-info final">\n                  <div class="label">Télefono</div>\n                  <div class="name">7771231231 </div>\n                </div>\n  \n              </div>\n\n              <div style="margin-top:20px" *ngIf="!AcceptedData">\n                  <button ion-button block color="menu" (click)="AcceptData()" >CONTINUAR</button>\n                </div>\n          </div>\n\n\n          \n          <div *ngIf="AcceptedData" class="form-content-tarjeta animate-bottom">\n                <div class="label-form"> \n                    Datos de Pago\n                  </div>\n\n                  <div class="boxsing">Número de tarjeta</div>\n                  <ion-item class="inp-form">\n                <ion-input type="number"></ion-input>\n                  </ion-item>\n          \n                  <div class="multiline">\n                      <div class="inpcol">\n                    \n                          <div class="boxsing">Fecha de Vencimiento</div>\n                          <ion-item class="inp-form1 date-f">\n \n                              <ion-datetime displayFormat="MM YY " [(ngModel)]="FVencimiento"></ion-datetime>\n                            </ion-item>\n                      </div>\n                    \n                      <div class="inpcol">\n                    \n                          <div class="boxsing">CCV</div>\n                          <ion-item class="inp-form2">\n                              <ion-input type="number"></ion-input>\n                          </ion-item>\n                      </div>\n                    </div>\n\n                    <div style="margin-top:10px">\n                        <button ion-button block color="menu" >COMPRAR</button>\n                      </div>\n\n\n                </div>\n         \n              </div>\n\n  </ion-content>\n\n\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-pasaje\home-pasaje\home-pasaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], HomePasajePage);
    return HomePasajePage;
}());

//# sourceMappingURL=home-pasaje.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorarosTarifasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HorarosTarifasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HorarosTarifasPage = /** @class */ (function () {
    function HorarosTarifasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HorarosTarifasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorarosTarifasPage');
    };
    HorarosTarifasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-horaros-tarifas',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-pasaje\horaros-tarifas\horaros-tarifas.html"*/'<!--\n  Generated template for the HorarosTarifasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="menu">\n    <ion-title>Horarios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" animate-top" style=" background: #F1EFED;" >\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-pasaje\horaros-tarifas\horaros-tarifas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HorarosTarifasPage);
    return HorarosTarifasPage;
}());

//# sourceMappingURL=horaros-tarifas.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiBoletoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MiBoletoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MiBoletoPage = /** @class */ (function () {
    function MiBoletoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MiBoletoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MiBoletoPage');
    };
    MiBoletoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mi-boleto',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-pasaje\mi-boleto\mi-boleto.html"*/'\n\n<ion-content  style=" background: #F1EFED;" class="animate-top"   >\n\n  <div class="header padding">\n    <div class="logo">\n        <img src="assets/imgs/logo-login.svg"height="58px" alt="">\n    </div>\n    <div class="info">\n      <div class="fecha">\n        20-07-19\n      </div>\n      <div class="claveViaje">\n        TA3312\n      </div>\n    </div>\n  </div>\n  <div class="padding" style="padding-top: 1px ; padding-bottom: 1px"> \n      <div class="line"></div>\n  </div>\n\n  <div class="origen-destino padding">\n    <div class="info">\n      <div class="label">Origen</div>\n      <div class="name">Tabasco</div>\n    </div>\n    <div class="spacetor">\n\n    </div>\n\n    <div class="info">\n        <div class="label">Destino</div>\n        <div class="name">Cancún</div>\n      </div>\n  </div>\n  <div class="padding" style="padding-top: 1px ; padding-bottom: 1px"> \n      <div class="line"></div>\n  </div>\n\n  <div class="data-complement padding">\n    <div class="info">\n      <div class="label">Salida</div>\n      <div class="name">10:00 hrs</div>\n    </div>\n\n    <div class="info">\n        <div class="label">Sala</div>\n        <div class="name">A</div>\n      </div>\n\n      <div class="info">\n          <div class="label">Zona</div>\n          <div class="name">2</div>\n        </div>\n\n        <div class="info">\n            <div class="label">Asiento</div>\n            <div class="name">18</div>\n          </div>\n\n  </div>\n  <div class="padding" style="padding-top: 1px ; padding-bottom: 1px"> \n      <div class="line"></div>\n  </div>\n\n  <div class="username padding">\n    <div class="info">\n\n        <div class="label"> Pasajero   </div>\n        <div class="name">Josephat Reyes</div>\n    </div>\n  \n  </div>\n\n\n<div class="boleto-box" style="position: relative;">\n    <ion-fab right middle style="position: absolute; top:30px">\n        <button ion-fab color="light" ><ion-icon name="custom-share"></ion-icon></button>\n        <ion-fab-list side="bottom">\n          <button ion-fab><ion-icon name="logo-whatsapp"></ion-icon></button>\n          <button ion-fab><ion-icon name="logo-google"></ion-icon></button>\n          <button ion-fab><ion-icon name="md-download"></ion-icon></button>\n     \n        </ion-fab-list>\n      </ion-fab>\n\n<img src="./assets/imgs/qr.png" height="280px" alt="">\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-pasaje\mi-boleto\mi-boleto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MiBoletoPage);
    return MiBoletoPage;
}());

//# sourceMappingURL=mi-boleto.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTuristaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomeTuristaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeTuristaPage = /** @class */ (function () {
    function HomeTuristaPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.Paqs = [{ name: "Paquete todo en 1", url: 'paq1.png' }, { name: "Paquete básico", url: 'paq1.png' }, { name: "Paquete doble", url: 'paq1.png' }];
        this.Hotels = [{ name: 1 }, { name: 1 }, { name: 1 }];
    }
    HomeTuristaPage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(false, 'Pasajero');
        this.menuCtrl.enable(true, 'Turista');
        console.log('ionViewDidLoad HomeTuristaPage');
    };
    HomeTuristaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-turista',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-turista\home-turista\home-turista.html"*/'\n  <ion-content  class="fondoHome  animate-left">\n\n\n\n<ion-slides pager class="sliderpager">\n\n  <ion-slide class="slide-bg" >\n    <div class="rectangle">\n      LOREM IPSUM\n       </div>\n  </ion-slide>\n\n  <ion-slide class="slide-bg">\n    <div class="rectangle">\n      LOREM IPSUM\n       </div>\n  </ion-slide>\n\n\n\n</ion-slides>\n\n<ion-slides class="slidercards">\n  <ion-slide  class="slidepaq" textcenter *ngFor="let paq of Paqs; let i= index">\n\n      <ion-card class="card-paq">\n        <div class="header-element-card">\n            <div class="text-card">\n                <div class="Title-card">\n                {{paq.name}}\n                  </div>\n                  <div class="ShortDesc-card">Lorem ipsum dolor sit amet, si voluptatum velit.              </div>\n            </div>\n            <div class="like-card">\n              <ion-icon name="custom-like" style="font-size:20px"></ion-icon>\n            </div>\n          </div>\n          <div class="img-card">\n            <img src="./assets/imgs/paq1.png"  alt="">\n          </div>\n          <div class="footer-elements-card">\n            <div class="icons-card">\n              <div class="share">\n                <ion-icon name="custom-share"></ion-icon>\n              </div>\n           \n            </div>  \n            <div class="button-card">\n              <button ion-button color="primary" style="height:30px; width:90px; text-transform: uppercase"> Ver</button>\n            </div>\n          </div>\n        </ion-card>\n  </ion-slide>\n\n\n\n\n</ion-slides>\n\n<div class="list-box"> \n  <h3 >Hospedaje</h3>\n\n  <div *ngFor="let hotel of Hotels; let i= index" class="hotel">\n\n    <div class="image">\n      <img src="./assets/imgs/01.png" width="100%" alt="">\n    </div>\n    <div class="info">\n      <div class="nombre">Nombre del Hotel</div>\n<div class="start"></div>\n<div class="short-desc"> Lorem ipsum dolor sit amet consectetur.</div>\n<div class="foo">\n  <div class="circle">9.5</div>\n  <div class="text">Muy bueno</div>\n</div>\n    </div>\n\n    <div class="actions" style="padding-top: 8px; padding-bottom: 8px">\n        <img src="./assets/imgs/icon-map.svg" alt="">\n      <img src="./assets/imgs/icon-phone.svg" alt="">\n\n    </div>\n  </div>\n\n  <div style="width: 100%; display: flex; justify-content: center;">\n  <button ion-button color="primary" style="width: 127px; height: 35px;"> VER MAS</button>\n  </div>\n</div>\n\n<div class="listbox-rest">\n    <h3 >Restaurantes</h3>\n\n\n<div class="fila" >\n  <div class="rest">\n    <div class="image">\n      <img src="./assets/imgs/rest-01.png"   alt="">\n    </div>\n    <div class="nombre">Mombre del restaurante</div>\n    <div class="raiting">\n     <img src="./assets/imgs/star-on.svg" alt="">\n     <img src="./assets/imgs/star-on.svg" alt="">\n     <img src="./assets/imgs/star-on.svg" alt="">\n    </div>\n    <div class="desc">\n      Lorem ipsum dolor siamet consectetur.\n    </div>\n  </div>\n  <div class="rest">\n      <div class="image">\n        <img src="./assets/imgs/rest-02.png"   alt="">\n      </div>\n      <div class="nombre">Mombre del restaurante</div>\n      <div class="raiting">\n       <img src="./assets/imgs/star-on.svg" alt="">\n       <img src="./assets/imgs/star-on.svg" alt="">\n       <img src="./assets/imgs/star-on.svg" alt="">\n      </div>\n      <div class="desc">\n        Lorem ipsum dolor siamet consectetur.\n      </div>\n    </div>\n</div>\n\n<div class="fila" >\n    <div class="rest">\n      <div class="image">\n        <img src="./assets/imgs/rest-03.png"   alt="">\n      </div>\n      <div class="nombre">Mombre del restaurante</div>\n      <div class="raiting">\n       <img src="./assets/imgs/star-on.svg" alt="">\n       <img src="./assets/imgs/star-on.svg" alt="">\n       <img src="./assets/imgs/star-on.svg" alt="">\n      </div>\n      <div class="desc">\n        Lorem ipsum dolor siamet consectetur.\n      </div>\n    </div>\n    <div class="rest">\n        <div class="image">\n          <img src="./assets/imgs/rest-04.png"   alt="">\n        </div>\n        <div class="nombre">Nombre del restaurante</div>\n        <div class="raiting">\n         <img src="./assets/imgs/star-on.svg" alt="">\n         <img src="./assets/imgs/star-on.svg" alt="">\n         <img src="./assets/imgs/star-on.svg" alt="">\n        </div>\n        <div class="desc">\n          Lorem ipsum dolor siamet consectetur.\n        </div>\n      </div>\n  </div>\n  <div style="width: 100%; display: flex; justify-content: center;">\n      <button ion-button color="primary" style="width: 127px; height: 35px;"> VER MAS</button>\n      </div>\n</div>\n\n\n  \n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-turista\home-turista\home-turista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], HomeTuristaPage);
    return HomeTuristaPage;
}());

//# sourceMappingURL=home-turista.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestinosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DestinosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DestinosPage = /** @class */ (function () {
    function DestinosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DestinosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DestinosPage');
    };
    DestinosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-destinos',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-turista\destinos\destinos.html"*/'<!--\n  Generated template for the DestinosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Destinos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-turista\destinos\destinos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DestinosPage);
    return DestinosPage;
}());

//# sourceMappingURL=destinos.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiaViajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GuiaViajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuiaViajePage = /** @class */ (function () {
    function GuiaViajePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GuiaViajePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuiaViajePage');
    };
    GuiaViajePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guia-viaje',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-turista\guia-viaje\guia-viaje.html"*/'<!--\n  Generated template for the GuiaViajePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>GuiaViaje</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-turista\guia-viaje\guia-viaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GuiaViajePage);
    return GuiaViajePage;
}());

//# sourceMappingURL=guia-viaje.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/lang/lang.module": [
		296,
		12
	],
	"../pages/login/login.module": [
		297,
		11
	],
	"../pages/modal-ini/modal-ini.module": [
		298,
		10
	],
	"../pages/modal-login/modal-login.module": [
		299,
		9
	],
	"../pages/rutas/rutas.module": [
		300,
		8
	],
	"../pages/tabs-pasaje/home-pasaje/home-pasaje.module": [
		301,
		7
	],
	"../pages/tabs-pasaje/horaros-tarifas/horaros-tarifas.module": [
		302,
		6
	],
	"../pages/tabs-pasaje/mi-boleto/mi-boleto.module": [
		303,
		5
	],
	"../pages/tabs-pasaje/tabs-pasaje.module": [
		304,
		4
	],
	"../pages/tabs-turista/destinos/destinos.module": [
		305,
		3
	],
	"../pages/tabs-turista/guia-viaje/guia-viaje.module": [
		306,
		2
	],
	"../pages/tabs-turista/home-turista/home-turista.module": [
		307,
		1
	],
	"../pages/tabs-turista/tabs-turista.module": [
		308,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalIniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_lang__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_info_user_info__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_turista_tabs_turista__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ModalIniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalIniPage = /** @class */ (function () {
    function ModalIniPage(navCtrl, navParams, modalCtrl, menuCtrl, __user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.__user = __user;
        this.Lang = null;
    }
    ModalIniPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menuCtrl.enable(true, 'Pasajero');
        this.menuCtrl.enable(false, 'Turista');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__lang_lang__["a" /* LangPage */]);
        this.__user.getUser().then(function (user) {
            console.log(user.lang);
            _this.Lang = user.lang;
            modal.onDidDismiss(function (data) {
                _this.__user.getUser().then(function (user) { console.log(user); _this.Lang = user.lang; }).catch(function (e) { console.log(e); });
            });
        }).catch(function (e) {
            if (_this.Lang) {
                console.log("Ther are information");
            }
            else {
                modal.present();
            }
        });
    };
    ModalIniPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_turista_tabs_turista__["a" /* TabsTuristaPage */]);
    };
    ModalIniPage.prototype.goToHomePasaje = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    ModalIniPage.prototype.goToHomeTurista = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    ModalIniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-ini',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\modal-ini\modal-ini.html"*/'<ion-content padding class="contentmodal">\n\n  <div class="close-cross" >\n    <ion-icon (click)="goToHome()" name="md-close" style="font-size: 35px;"></ion-icon>\n  </div>\n  <ion-slides pager>\n\n    <ion-slide class="Pasaje">\n     \n      <div class="text-normal"> \n          Modo Pasajero te permite comprar boletos eletrónicos del tren para utilizar el servicio como medio de transporte.\n      </div>\n     \n      <div class="text-gold">REGISTRARME</div>\n      <div class="text-bold">COMO</div>\n\n\n      <div style="width: 100%; display: flex; justify-content: center;">\n          <div class="line"></div>\n      </div>\n \n      <button ion-button color="primary" (click)="goToHomePasaje()" > PASAJERO </button>\n    </ion-slide>\n\n    <ion-slide class="Pasaje">\n      \n      <div class="text-normal">Modo Turista te permite comprar boletos y paquetes especiales para disfrutar de los diferentes destinos de la ruta del Tren Maya.</div>\n        <div class="text-gold">REGISTRARME</div>\n        <div class="text-bold">COMO</div>\n  \n   <div style="width: 100%; display: flex; justify-content: center;">\n     <div class="line"></div>\n   </div>\n      <button ion-button color="primary" (click)="goToHomeTurista()" > TURISTA </button>\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\modal-ini\modal-ini.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_info_user_info__["a" /* UserInfoProvider */]])
    ], ModalIniPage);
    return ModalIniPage;
}());

//# sourceMappingURL=modal-ini.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_login_modal_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modal_ini_modal_ini__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lang_lang__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_info_user_info__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_turista_tabs_turista__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_turista_home_turista_home_turista__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_rutas_rutas__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_turista_destinos_destinos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_turista_guia_viaje_guia_viaje__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_pasaje_home_pasaje_home_pasaje__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_pasaje_tabs_pasaje__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_pasaje_mi_boleto_mi_boleto__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_pasaje_horaros_tarifas_horaros_tarifas__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_8__pages_modal_login_modal_login__["a" /* ModalLoginPage */], __WEBPACK_IMPORTED_MODULE_9__pages_modal_ini_modal_ini__["a" /* ModalIniPage */], __WEBPACK_IMPORTED_MODULE_10__pages_lang_lang__["a" /* LangPage */], __WEBPACK_IMPORTED_MODULE_19__pages_tabs_pasaje_home_pasaje_home_pasaje__["a" /* HomePasajePage */], __WEBPACK_IMPORTED_MODULE_20__pages_tabs_pasaje_tabs_pasaje__["a" /* TabsPasajePage */], __WEBPACK_IMPORTED_MODULE_21__pages_tabs_pasaje_mi_boleto_mi_boleto__["a" /* MiBoletoPage */], __WEBPACK_IMPORTED_MODULE_22__pages_tabs_pasaje_horaros_tarifas_horaros_tarifas__["a" /* HorarosTarifasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_turista_home_turista_home_turista__["a" /* HomeTuristaPage */], __WEBPACK_IMPORTED_MODULE_14__pages_tabs_turista_tabs_turista__["a" /* TabsTuristaPage */], __WEBPACK_IMPORTED_MODULE_16__pages_rutas_rutas__["a" /* RutasPage */], __WEBPACK_IMPORTED_MODULE_17__pages_tabs_turista_destinos_destinos__["a" /* DestinosPage */], __WEBPACK_IMPORTED_MODULE_18__pages_tabs_turista_guia_viaje_guia_viaje__["a" /* GuiaViajePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    menuType: 'push',
                }, {
                    links: [
                        { loadChildren: '../pages/lang/lang.module#LangPageModule', name: 'LangPage', segment: 'lang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-ini/modal-ini.module#ModalIniPageModule', name: 'ModalIniPage', segment: 'modal-ini', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-login/modal-login.module#ModalLoginPageModule', name: 'ModalLoginPage', segment: 'modal-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rutas/rutas.module#RutasPageModule', name: 'RutasPage', segment: 'rutas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-pasaje/home-pasaje/home-pasaje.module#HomePasajePageModule', name: 'HomePasajePage', segment: 'home-pasaje', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-pasaje/horaros-tarifas/horaros-tarifas.module#HorarosTarifasPageModule', name: 'HorarosTarifasPage', segment: 'horaros-tarifas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-pasaje/mi-boleto/mi-boleto.module#MiBoletoPageModule', name: 'MiBoletoPage', segment: 'mi-boleto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-pasaje/tabs-pasaje.module#TabsPasajePageModule', name: 'TabsPasajePage', segment: 'tabs-pasaje', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-turista/destinos/destinos.module#DestinosPageModule', name: 'DestinosPage', segment: 'destinos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-turista/guia-viaje/guia-viaje.module#GuiaViajePageModule', name: 'GuiaViajePage', segment: 'guia-viaje', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-turista/home-turista/home-turista.module#HomeTuristaPageModule', name: 'HomeTuristaPage', segment: 'home-turista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-turista/tabs-turista.module#TabsTuristaPageModule', name: 'TabsTuristaPage', segment: 'tabs-turista', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_8__pages_modal_login_modal_login__["a" /* ModalLoginPage */], __WEBPACK_IMPORTED_MODULE_9__pages_modal_ini_modal_ini__["a" /* ModalIniPage */], __WEBPACK_IMPORTED_MODULE_10__pages_lang_lang__["a" /* LangPage */], __WEBPACK_IMPORTED_MODULE_19__pages_tabs_pasaje_home_pasaje_home_pasaje__["a" /* HomePasajePage */], __WEBPACK_IMPORTED_MODULE_20__pages_tabs_pasaje_tabs_pasaje__["a" /* TabsPasajePage */], __WEBPACK_IMPORTED_MODULE_21__pages_tabs_pasaje_mi_boleto_mi_boleto__["a" /* MiBoletoPage */], __WEBPACK_IMPORTED_MODULE_22__pages_tabs_pasaje_horaros_tarifas_horaros_tarifas__["a" /* HorarosTarifasPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_turista_home_turista_home_turista__["a" /* HomeTuristaPage */], __WEBPACK_IMPORTED_MODULE_14__pages_tabs_turista_tabs_turista__["a" /* TabsTuristaPage */], __WEBPACK_IMPORTED_MODULE_16__pages_rutas_rutas__["a" /* RutasPage */], __WEBPACK_IMPORTED_MODULE_17__pages_tabs_turista_destinos_destinos__["a" /* DestinosPage */], __WEBPACK_IMPORTED_MODULE_18__pages_tabs_turista_guia_viaje_guia_viaje__["a" /* GuiaViajePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_user_info_user_info__["a" /* UserInfoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var User = /** @class */ (function () {
    function User(lang, token) {
        if (lang === void 0) { lang = { name: "English", id: "ENG" }; }
        if (token === void 0) { token = "1234JASDFKNCan1234ASOLSDFN"; }
        this.lang = lang;
        this.token = token;
    }
    return User;
}());
/* harmony default export */ __webpack_exports__["a"] = (User);
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Lang_esp={
    //Login Page
    Login:
    {
        LOGIN_WITH:"Ingresa con",
        USER_NAME:"Nombre de usuario",
        PASSWORD: "Contraseña",
        CREATE_ACCOUNT:"Crear cuenta",
        LOG_IN: "Ingresar",
        OR:"Ó",
        FORGOT_YOUR_PASSWORD:"¿Olvidaste tu contraseña?",
    },
       //Register Page
    Register:{

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Lang_esp;


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Lang_eng={
    //Login Page
    Login:
    {
        LOGIN_WITH:"Login with",
        USER_NAME:"User name",
        PASSWORD: "Password",
        CREATE_ACCOUNT:"Create account",
        LOG_IN: "Log in",
        OR:"Or",
        FORGOT_YOUR_PASSWORD:"Forgot your password?",
    },
       //Register Page
    Register:{

    }

}
/* unused harmony export Lang_eng */


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map_theme; });
var map_theme = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#523735"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ae9e90"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#8b9259"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#93817c"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#8b8f59"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#447530"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdfcf8"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f8c967"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9bc62"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e98d58"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#db8555"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#806b63"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f7d77"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#6c7e8a"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#92998d"
            }
        ]
    }
];
//# sourceMappingURL=MapStyle.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Destinos; });
var Destinos = [
    { nombre: "Cancún",
        coords: { lat: 21.161908, lng: -86.851528 } },
    { nombre: "Yucatán",
        coords: { lat: 20.709879, lng: -89.094338 } },
    { nombre: "Puerto Morelos",
        coords: { lat: 20.847808, lng: -86.875534 } },
    { nombre: "Playa del Carmen",
        coords: { lat: 20.629559, lng: -87.073885 } },
    { nombre: "Tulum",
        coords: { lat: 20.211419, lng: -87.46535 } },
    { nombre: "F.C. Puerto",
        coords: { lat: 20.629559, lng: -87.073885 } },
    { nombre: "Bacalar",
        coords: { lat: 18.678292, lng: -88.392395 } },
    { nombre: "Calakmal",
        coords: { lat: 18.114527, lng: -89.808544 } },
    { nombre: "Escárcega",
        coords: { lat: 18.610183, lng: -90.739025 } },
    { nombre: "Ciudad Campeche",
        coords: { lat: 19.830125, lng: -90.534909 } },
    { nombre: "Merida",
        coords: { lat: 20.96737, lng: -89.592586 } },
    { nombre: "Izamal",
        coords: { lat: 20.93, lng: -89.022713 } },
    { nombre: "Chichenitza",
        coords: { lat: 20.709879, lng: -89.094338 } },
    { nombre: "Valladolid",
        coords: { lat: 20.68964, lng: -88.202249 } },
    { nombre: "Tenosique",
        coords: { lat: 17.472665, lng: -91.425051 } },
    { nombre: "Palenque",
        coords: { lat: 17.48477, lng: -92.045895 } },
];
//# sourceMappingURL=Destinos.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_turista_tabs_turista__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_pasaje_tabs_pasaje__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_rutas_rutas__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_rutas_rutas__["a" /* RutasPage */]; //HomePage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToLogin = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
    };
    MyApp.prototype.goToTurista = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_turista_tabs_turista__["a" /* TabsTuristaPage */];
    };
    MyApp.prototype.goToPasaje = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_pasaje_tabs_pasaje__["a" /* TabsPasajePage */];
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\app\app.html"*/'<ion-menu id="Pasajero" [content]="mycontent" side="right">\n\n    <ion-header color="primary">\n\n        <ion-toolbar class="tool-menu" color="menu">\n\n          <ion-title>Menu Pasaje</ion-title>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content  class="content-side-menu">\n\n        <ion-list>\n\n          <button ion-item menuToggle (click)="goToLogin()" >\n\n            Iniciar Sesión\n\n          </button>\n\n          <button ion-item menuToggle >\n\n            Rutas\n\n          </button>\n\n          <button ion-item menuToggle >\n\n            Events\n\n          </button>\n\n          <button ion-item menuToggle (click)="goToTurista()" >\n\n              Modo Turista\n\n            </button>\n\n          <button ion-item menuToggle >\n\n            Close Menu\n\n          </button>\n\n        </ion-list>\n\n      </ion-content>\n\n  </ion-menu>\n\n\n\n\n\n\n\n  <ion-menu id="Turista" [content]="mycontent" side="right">\n\n      <ion-header >\n\n          <ion-toolbar  class="tool-menu" color="menu">\n\n           <ion-row>\n\n             <ion-col style="display: flex; justify-content: flex-end; padding-right: 10px">\n\n              <img src="./assets/imgs/logoTrenMaya.png" width="120px" height="45px" alt="" style="display: flex">\n\n             </ion-col>\n\n           </ion-row>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n        <ion-content class="content-side-menu">\n\n          <ion-list>\n\n            <button ion-item menuToggle end (click)="goToLogin()" >\n\n              Iniciar Sesión\n\n            </button>\n\n            <button ion-item menuToggle end (click)="goToPasaje()" >\n\n              Comprar Pasajes\n\n            </button>\n\n            <button ion-item menuToggle end >\n\n              Contacto\n\n            </button>\n\n\n\n            <button ion-item menuToggle end   >\n\n                Embajadas\n\n              </button>\n\n            <button ion-item menuToggle end >\n\n              SOS\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n\n\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.menuCtrl.enable(true);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title left>\n\n     <img src="./assets/imgs/logoTrenMaya.png" width="101px" height="38" alt="" style="display: flex">\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only menuToggle >\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="fondoHome">\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_login_modal_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_Esp_js__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_Eng__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_pasaje_tabs_pasaje__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.Lang = true ? __WEBPACK_IMPORTED_MODULE_3__util_Esp_js__["a" /* Lang_esp */].Login : Lang_eng.Login;
        console.log(__WEBPACK_IMPORTED_MODULE_3__util_Esp_js__["a" /* Lang_esp */]);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.gotoHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_pasaje_tabs_pasaje__["a" /* TabsPasajePage */]);
    };
    LoginPage.prototype.createAccount = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_login_modal_login__["a" /* ModalLoginPage */]);
        modal.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\login\login.html"*/'<ion-content padding class="ctn animate-left">\n\n\n\n\n\n\n\n<ion-row style="margin-top:35px">\n\n\n\n\n\n  <!--Logo-->\n\n  <ion-col text-center>\n\n    <img src="assets/imgs/logo-login.svg" width="208px" height="78px" alt="">\n\n  </ion-col>\n\n</ion-row>\n\n\n\n<!--Iniciar sesion con Facebook o google--> \n\n<ion-row style="margin-top: 10px;height: 18px;">\n\n  <ion-col text-center >\n\n    {{Lang.LOGIN_WITH}}\n\n    </ion-col>\n\n  \n\n  </ion-row>\n\n\n\n<ion-row style="margin-right: 7px;">\n\n  <ion-col text-center class="flex row center">\n\n    <div class="logos " >\n\n        <img src="assets/imgs/f.svg" width="60px" alt="">\n\n    </div>\n\n   \n\n      <div class="logos" >\n\n          <img src="assets/imgs/google.svg" width="60px" alt="">\n\n      </div>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n<ion-row style="margin-top: 5px;height: 18px;">\n\n    <ion-col text-center >\n\n      {{Lang.OR}}\n\n      </ion-col>\n\n    \n\n    </ion-row>\n\n\n\n\n\n<ion-row style="margin-top: 10px">\n\n    <ion-col>\n\n\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-input type="text" [placeholder]="Lang.USER_NAME"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n      </ion-col></ion-row>\n\n\n\n<ion-row>\n\n    <ion-col>\n\n        <ion-list>\n\n            <ion-item>\n\n            <ion-input type="password" [placeholder]="Lang.PASSWORD"></ion-input>\n\n          </ion-item>\n\n    </ion-list>\n\n\n\n  </ion-col>\n\n\n\n</ion-row>\n\n\n\n<ion-row>\n\n<ion-col text-center>\n\n\n\n      <button ion-button color="primary" block (click)="gotoHome()">   \n\n          {{Lang.LOG_IN}}     </button>\n\n\n\n\n\n</ion-col>\n\n\n\n</ion-row>\n\n\n\n\n\n<ion-row style="margin-top: 5px;height: 18px; font-size: 10px">\n\n    <ion-col text-center >\n\n      {{Lang.FORGOT_YOUR_PASSWORD}}\n\n      </ion-col>\n\n    \n\n    </ion-row>\n\n\n\n\n\n\n\n    <ion-row>\n\n\n\n      <button style="position: absolute;bottom: 0px;left: 0px;; margin-bottom: 0px; height: 45px; z-index: 100;" ion-button  block color="primary" (click)="createAccount()"> \n\n        {{Lang.CREATE_ACCOUNT}}\n\n      </button>\n\n\n\n\n\n\n\n    </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPasajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_pasaje_home_pasaje__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__horaros_tarifas_horaros_tarifas__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mi_boleto_mi_boleto__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabsPasajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPasajePage = /** @class */ (function () {
    function TabsPasajePage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.tab1 = null;
        this.tab2 = null;
        this.tab3 = null;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__home_pasaje_home_pasaje__["a" /* HomePasajePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_4__mi_boleto_mi_boleto__["a" /* MiBoletoPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_3__horaros_tarifas_horaros_tarifas__["a" /* HorarosTarifasPage */];
    }
    TabsPasajePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPasajePage');
    };
    TabsPasajePage.prototype.menuToggle = function () {
        this.menuCtrl.open();
    };
    TabsPasajePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-pasaje',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-pasaje\tabs-pasaje.html"*/'<ion-tabs color="tabs" >\n\n  <ion-tab tabIcon="logo-usd"  tabTitle="COMPRA" [root]="tab1"></ion-tab>\n  <ion-tab tabIcon="custom-paquetes"  tabTitle="Mi BOLETO" [root]="tab2"></ion-tab>\n  <ion-tab tabIcon="custom-rutas"  tabTitle="HORARIOS" [root]="tab3"></ion-tab>\n  <ion-tab tabIcon="custom-mas"  tabTitle="MÁS" (ionSelect)="menuToggle()"></ion-tab>\n</ion-tabs>`\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-pasaje\tabs-pasaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], TabsPasajePage);
    return TabsPasajePage;
}());

//# sourceMappingURL=tabs-pasaje.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsTuristaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_turista_home_turista__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rutas_rutas__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__destinos_destinos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guia_viaje_guia_viaje__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabsTuristaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsTuristaPage = /** @class */ (function () {
    function TabsTuristaPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.tab1 = null;
        this.tab2 = null;
        this.tab3 = null;
        this.tab4 = null;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__home_turista_home_turista__["a" /* HomeTuristaPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__rutas_rutas__["a" /* RutasPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__destinos_destinos__["a" /* DestinosPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__guia_viaje_guia_viaje__["a" /* GuiaViajePage */];
    }
    TabsTuristaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsTuristaPage');
    };
    TabsTuristaPage.prototype.menuToggle = function () {
        this.menuCtrl.open();
    };
    TabsTuristaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-turista',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-turista\tabs-turista.html"*/'<ion-tabs color="tabs" >\n    <ion-tab tabIcon="custom-paquetes"  tabTitle="PAQUETES" [root]="tab1"></ion-tab>\n    <ion-tab tabIcon="custom-rutas"  tabTitle="RUTAS" [root]="tab2"></ion-tab>\n    <ion-tab tabIcon="custom-destinos"  tabTitle="DESTINOS" [root]="tab3"></ion-tab>\n    <ion-tab tabIcon="custom-guia"  tabTitle="GUÍA DE VIAJE" [root]="tab4"></ion-tab>\n    <ion-tab tabIcon="custom-mas"  tabTitle="MÁS" (ionSelect)="menuToggle()"></ion-tab>\n  </ion-tabs>`\n\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\tabs-turista\tabs-turista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], TabsTuristaPage);
    return TabsTuristaPage;
}());

//# sourceMappingURL=tabs-turista.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utils_MapStyle__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utils_Destinos__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RutasPage = /** @class */ (function () {
    function RutasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.markers = [];
    }
    RutasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RutasPage');
        this.loadMap().then(function (map) {
            _this.map = map;
            __WEBPACK_IMPORTED_MODULE_3__app_utils_Destinos__["a" /* Destinos */].forEach(function (destino) {
                console.log(destino);
                _this.markers.push(_this.drawMarker(destino));
            });
        });
    };
    RutasPage.prototype.loadMap = function () {
        var _this = this;
        var prom = new Promise(function (resolve, reject) {
            var estilo = __WEBPACK_IMPORTED_MODULE_2__app_utils_MapStyle__["a" /* map_theme */];
            var map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 6.8,
                center: { lat: 19.22683, lng: -89.168715 },
                styles: estilo,
                maxZoom: 6.9,
                minZoom: 6.7,
                mapTypeControl: false,
                scaleControl: true,
                zoomControl: true,
            });
            resolve(map);
        });
        return prom;
    };
    RutasPage.prototype.drawMarker = function (mark) {
        var _this = this;
        console.log("En draw", mark);
        var pin = './assets/imgs/pira.png';
        var marker = new google.maps.Marker({
            position: mark.coords,
            map: this.map,
            title: mark.name,
            icon: pin,
        });
        marker.addListener('click', function () {
            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                '<div id="bodyContent">' +
                '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                'sandstone rock formation in the southern part of the ' +
                'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
                'south west of the nearest large town, Alice Springs; 450&#160;km ' +
                '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
                'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
                'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
                'Aboriginal people of the area. It has many springs, waterholes, ' +
                'rock caves and ancient paintings. Uluru is listed as a World ' +
                'Heritage Site.</p>' +
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
                '(last visited June 22, 2009).</p>' +
                '</div>' +
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            infowindow.open(_this.map, marker);
        });
        return marker;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], RutasPage.prototype, "mapElement", void 0);
    RutasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rutas',template:/*ion-inline-start:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\rutas\rutas.html"*/'<!--\n  Generated template for the RutasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Rutas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div #map id="map">\n\n  </div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\josephat.reyes\Documents\Git\GITGITGIT\TM\src\pages\rutas\rutas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RutasPage);
    return RutasPage;
}());

//# sourceMappingURL=rutas.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserInfoProvider = /** @class */ (function () {
    function UserInfoProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello UserInfoProvider Provider');
    }
    UserInfoProvider.prototype.setUser = function (user) {
        var _this = this;
        this.storage.set('user_data', user);
        this.storage.get('user_data').then(function (user) {
            _this.User = user;
        });
    };
    UserInfoProvider.prototype.getUser = function () {
        var _this = this;
        var prom = new Promise(function (resolve, reject) {
            _this.storage.get('user_data').then(function (user) {
                _this.User = user;
                resolve(user);
            }).catch(function (e) {
                reject(e);
            });
        });
        return prom;
    };
    UserInfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserInfoProvider);
    return UserInfoProvider;
}());

//# sourceMappingURL=user-info.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map