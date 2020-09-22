(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in-page/sign-in-page.component */ "./src/app/sign-in-page/sign-in-page.component.ts");
/* harmony import */ var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games-list/games-list.component */ "./src/app/games-list/games-list.component.ts");
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "./src/app/profile-page/profile-page.component.ts");
/* harmony import */ var _wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-page/wallet-page.component */ "./src/app/wallet-page/wallet-page.component.ts");
/* harmony import */ var _redeem_page_redeem_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redeem-page/redeem-page.component */ "./src/app/redeem-page/redeem-page.component.ts");
/* harmony import */ var _refer_and_earn_page_refer_and_earn_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./refer-and-earn-page/refer-and-earn-page.component */ "./src/app/refer-and-earn-page/refer-and-earn-page.component.ts");
/* harmony import */ var _spinner_page_spinner_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spinner-page/spinner-page.component */ "./src/app/spinner-page/spinner-page.component.ts");
/* harmony import */ var _spinner_not_available_page_spinner_not_available_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spinner-not-available-page/spinner-not-available-page.component */ "./src/app/spinner-not-available-page/spinner-not-available-page.component.ts");
/* harmony import */ var _lucky_draw_dashboard_lucky_draw_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lucky-draw-dashboard/lucky-draw-dashboard.component */ "./src/app/lucky-draw-dashboard/lucky-draw-dashboard.component.ts");
/* harmony import */ var _lucky_draw_results_lucky_draw_results_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lucky-draw-results/lucky-draw-results.component */ "./src/app/lucky-draw-results/lucky-draw-results.component.ts");















const routes = [
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: 'sign-in', component: _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__["SignInPageComponent"] },
    { path: 'games-list', component: _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_4__["GamesListComponent"] },
    { path: 'my-profile', component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_5__["ProfilePageComponent"] },
    { path: 'wallet', component: _wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_6__["WalletPageComponent"] },
    { path: 'redeem', component: _redeem_page_redeem_page_component__WEBPACK_IMPORTED_MODULE_7__["RedeemPageComponent"] },
    { path: 'share', component: _refer_and_earn_page_refer_and_earn_page_component__WEBPACK_IMPORTED_MODULE_8__["ReferAndEarnPageComponent"] },
    { path: 'spinner', component: _spinner_page_spinner_page_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerPageComponent"] },
    { path: 'spinner-not-available', component: _spinner_not_available_page_spinner_not_available_page_component__WEBPACK_IMPORTED_MODULE_10__["SpinnerNotAvailablePageComponent"] },
    { path: 'lucky-draw-dashboard', component: _lucky_draw_dashboard_lucky_draw_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["LuckyDrawDashboardComponent"] },
    { path: 'lucky-draw-results', component: _lucky_draw_results_lucky_draw_results_component__WEBPACK_IMPORTED_MODULE_12__["LuckyDrawResultsComponent"] },
    /* For other paths */
    { path: '**', redirectTo: '/sign-in' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'spinnerApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-page/sign-in-page.component */ "./src/app/sign-in-page/sign-in-page.component.ts");
/* harmony import */ var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games-list/games-list.component */ "./src/app/games-list/games-list.component.ts");
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "./src/app/profile-page/profile-page.component.ts");
/* harmony import */ var _wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wallet-page/wallet-page.component */ "./src/app/wallet-page/wallet-page.component.ts");
/* harmony import */ var _sub_components_home_boxes_home_boxes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sub-components/home-boxes/home-boxes.component */ "./src/app/sub-components/home-boxes/home-boxes.component.ts");
/* harmony import */ var _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sub-components/advertisement/advertisement.component */ "./src/app/sub-components/advertisement/advertisement.component.ts");
/* harmony import */ var _sub_components_current_balance_current_balance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub-components/current-balance/current-balance.component */ "./src/app/sub-components/current-balance/current-balance.component.ts");
/* harmony import */ var _redeem_page_redeem_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./redeem-page/redeem-page.component */ "./src/app/redeem-page/redeem-page.component.ts");
/* harmony import */ var _sub_components_redeem_request_modal_redeem_request_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub-components/redeem-request-modal/redeem-request-modal.component */ "./src/app/sub-components/redeem-request-modal/redeem-request-modal.component.ts");
/* harmony import */ var _refer_and_earn_page_refer_and_earn_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refer-and-earn-page/refer-and-earn-page.component */ "./src/app/refer-and-earn-page/refer-and-earn-page.component.ts");
/* harmony import */ var _spinner_page_spinner_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./spinner-page/spinner-page.component */ "./src/app/spinner-page/spinner-page.component.ts");
/* harmony import */ var _spinner_not_available_page_spinner_not_available_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./spinner-not-available-page/spinner-not-available-page.component */ "./src/app/spinner-not-available-page/spinner-not-available-page.component.ts");
/* harmony import */ var _lucky_draw_dashboard_lucky_draw_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lucky-draw-dashboard/lucky-draw-dashboard.component */ "./src/app/lucky-draw-dashboard/lucky-draw-dashboard.component.ts");
/* harmony import */ var _lucky_draw_results_lucky_draw_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lucky-draw-results/lucky-draw-results.component */ "./src/app/lucky-draw-results/lucky-draw-results.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _games_list_game_core_2048_core_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./games-list/game-core-2048/core.module */ "./src/app/games-list/game-core-2048/core.module.ts");
/* harmony import */ var _sub_components_game_outlet_game_outlet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sub-components/game-outlet/game-outlet.component */ "./src/app/sub-components/game-outlet/game-outlet.component.ts");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _games_list_game_core_2048_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
        _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_5__["SignInPageComponent"],
        _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_6__["GamesListComponent"],
        _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePageComponent"],
        _wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_8__["WalletPageComponent"],
        _sub_components_home_boxes_home_boxes_component__WEBPACK_IMPORTED_MODULE_9__["HomeBoxesComponent"],
        _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_10__["AdvertisementComponent"],
        _sub_components_current_balance_current_balance_component__WEBPACK_IMPORTED_MODULE_11__["CurrentBalanceComponent"],
        _redeem_page_redeem_page_component__WEBPACK_IMPORTED_MODULE_12__["RedeemPageComponent"],
        _sub_components_redeem_request_modal_redeem_request_modal_component__WEBPACK_IMPORTED_MODULE_13__["RedeemRequestModalComponent"],
        _refer_and_earn_page_refer_and_earn_page_component__WEBPACK_IMPORTED_MODULE_14__["ReferAndEarnPageComponent"],
        _spinner_page_spinner_page_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerPageComponent"],
        _spinner_not_available_page_spinner_not_available_page_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerNotAvailablePageComponent"],
        _lucky_draw_dashboard_lucky_draw_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["LuckyDrawDashboardComponent"],
        _lucky_draw_results_lucky_draw_results_component__WEBPACK_IMPORTED_MODULE_18__["LuckyDrawResultsComponent"],
        _sub_components_game_outlet_game_outlet_component__WEBPACK_IMPORTED_MODULE_21__["GameOutletComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        _games_list_game_core_2048_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                    _sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_5__["SignInPageComponent"],
                    _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_6__["GamesListComponent"],
                    _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_7__["ProfilePageComponent"],
                    _wallet_page_wallet_page_component__WEBPACK_IMPORTED_MODULE_8__["WalletPageComponent"],
                    _sub_components_home_boxes_home_boxes_component__WEBPACK_IMPORTED_MODULE_9__["HomeBoxesComponent"],
                    _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_10__["AdvertisementComponent"],
                    _sub_components_current_balance_current_balance_component__WEBPACK_IMPORTED_MODULE_11__["CurrentBalanceComponent"],
                    _redeem_page_redeem_page_component__WEBPACK_IMPORTED_MODULE_12__["RedeemPageComponent"],
                    _sub_components_redeem_request_modal_redeem_request_modal_component__WEBPACK_IMPORTED_MODULE_13__["RedeemRequestModalComponent"],
                    _refer_and_earn_page_refer_and_earn_page_component__WEBPACK_IMPORTED_MODULE_14__["ReferAndEarnPageComponent"],
                    _spinner_page_spinner_page_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerPageComponent"],
                    _spinner_not_available_page_spinner_not_available_page_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerNotAvailablePageComponent"],
                    _lucky_draw_dashboard_lucky_draw_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["LuckyDrawDashboardComponent"],
                    _lucky_draw_results_lucky_draw_results_component__WEBPACK_IMPORTED_MODULE_18__["LuckyDrawResultsComponent"],
                    _sub_components_game_outlet_game_outlet_component__WEBPACK_IMPORTED_MODULE_21__["GameOutletComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                    _games_list_game_core_2048_core_module__WEBPACK_IMPORTED_MODULE_20__["CoreModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/games-list/game-core-2048/action-handler.ts":
/*!*************************************************************!*\
  !*** ./src/app/games-list/game-core-2048/action-handler.ts ***!
  \*************************************************************/
/*! exports provided: ACTION_HANDLER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_HANDLER", function() { return ACTION_HANDLER; });
/* harmony import */ var _enums_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums/direction */ "./src/app/games-list/game-core-2048/enums/direction.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/from */ "./node_modules/rxjs-compat/_esm2015/add/observable/from.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm2015/add/operator/delay.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_pairwise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/pairwise */ "./node_modules/rxjs-compat/_esm2015/add/operator/pairwise.js");








function operation(entry1, entry2) {
    let mergeScore = 0;
    if (entry1[0].merge(entry2[0]))
        mergeScore += entry1[0].value;
    if (entry1[1].merge(entry2[1]))
        mergeScore += entry1[1].value;
    if (entry1[2].merge(entry2[2]))
        mergeScore += entry1[2].value;
    if (entry1[3].merge(entry2[3]))
        mergeScore += entry1[3].value;
    return mergeScore;
}
function merge(operands) {
    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].from(operands)
        .mergeMap(operand => {
        let delayTime = 0;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].from(operand).pairwise().mergeMap(pair => {
            delayTime += 50;
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(pair).delay(delayTime);
        });
    })
        .map(([op1, op2]) => operation(op2, op1));
}
function resetMerge(entites) {
    entites.forEach(cells => cells.forEach(cell => cell.resetMerged()));
}
const ACTION_HANDLER = {
    [_enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Up]: (rows) => {
        resetMerge(rows);
        const operands = [[rows[1], rows[0]], [rows[2], rows[1], rows[0]], [rows[3], rows[2], rows[1], rows[0]]];
        return merge(operands);
    },
    [_enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Down]: (rows) => {
        resetMerge(rows);
        const operands = [[rows[2], rows[3]], [rows[1], rows[2], rows[3]], [rows[0], rows[1], rows[2], rows[3]]];
        return merge(operands);
    },
    [_enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Left]: (columns) => {
        resetMerge(columns);
        const operands = [[columns[1], columns[0]], [columns[2], columns[1], columns[0]], [columns[3], columns[2], columns[1], columns[0]]];
        return merge(operands);
    },
    [_enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Right]: (columns) => {
        resetMerge(columns);
        const operands = [[columns[2], columns[3]], [columns[1], columns[2], columns[3]], [columns[0], columns[1], columns[2], columns[3]]];
        return merge(operands);
    }
};


/***/ }),

/***/ "./src/app/games-list/game-core-2048/board/board.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/games-list/game-core-2048/board/board.component.ts ***!
  \********************************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_key_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/key-map */ "./src/app/games-list/game-core-2048/constants/key-map.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/games-list/game-core-2048/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell/cell.component */ "./src/app/games-list/game-core-2048/cell/cell.component.ts");






function BoardComponent_div_6_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Game Over!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_6_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You win!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BoardComponent_div_6_h4_2_Template, 2, 0, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BoardComponent_div_6_h4_3_Template, 2, 0, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.restart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Restart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.completed);
} }
function BoardComponent_app_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cell", 10);
} if (rf & 2) {
    const cell_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cell", cell_r6);
} }
class BoardComponent {
    constructor(game) {
        this.game = game;
        this.gameOver = false;
        this.score = -1;
        this.completed = false;
        this.successHandler = () => {
            this.completed = true;
            this.gameOver = true;
        };
        this.initGame();
    }
    handleKeyboardEvent(event) {
        let moveSuccessful = false;
        const direction = _constants_key_map__WEBPACK_IMPORTED_MODULE_1__["KEY_MAP"][event.keyCode];
        if (this.gameOver || direction === undefined) {
            return;
        }
        this.game.move(direction).subscribe((mergeScore) => {
            moveSuccessful = moveSuccessful || this.score < mergeScore;
        }, console.error, () => {
            if (this.gameOver) {
                return;
            }
            if (moveSuccessful) {
                this.game.randomize();
            }
            this.score = this.game.score;
            this.gameOver = this.game.isGameOver;
        });
    }
    initGame() {
        this.cells = this.game.cells;
        this.gameOver = this.completed = false;
        this.game.randomize();
        this.game.randomize();
        this.cells.map(cell => cell.success.subscribe(this.successHandler));
    }
    restart() {
        this.score = 0;
        this.game.restart();
        this.initGame();
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-game-list-game-core-2048-board"]], hostBindings: function BoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BoardComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 3, consts: [["id", "header"], ["id", "score"], ["id", "new-game-btn", 3, "click"], ["id", "board"], ["id", "game-over", 4, "ngIf"], [3, "cell", 4, "ngFor", "ngForOf"], ["id", "game-over"], ["id", "game-over-body"], [4, "ngIf"], [3, "click"], [3, "cell"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_3_listener() { return ctx.restart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardComponent_div_6_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BoardComponent_app_cell_7_Template, 1, 1, "app-cell", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.score !== 0 - 1 ? ctx.score : 0, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameOver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cells);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__["CellComponent"]], styles: ["div#header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nbutton#new-game-btn[_ngcontent-%COMP%] {\n  height: 36px;\n  font-size: 17px;\n  background-color: #776e65;\n  color: #f9f6f2;\n  border-radius: 3px;\n  border: 0px;\n  padding: 8px 13px 10px 13px;\n  \n}\n\nbutton#new-game-btn[_ngcontent-%COMP%]:active {\n  background-color: #cdc1b4;\n}\n\ndiv#board[_ngcontent-%COMP%], div#score[_ngcontent-%COMP%], div#header[_ngcontent-%COMP%] {\n  width: 336px;\n  position: relative;\n  margin: auto;\n  text-align: left;\n}\n\n#game-over[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 999;\n  background-color: rgba(1,1,1,.4);\n  border-radius: 5px;\n  -webkit-animation: show 0.4s ease-out normal;\n  animation: show 0.4s ease-out normal;\n}\n\ndiv#game-over-body[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  transform: translate(0, -20%);\n  width: 100%;\n  text-align: center;\n}\n\n#game-over-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 50px;\n  text-align: center;\n  width: 100%;\n}\n\n#game-over-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 20px;\n  border: 0px;\n  background-color: white;\n  border-radius: 7px;\n  padding: 15px 20px 15px 20px;\n  cursor: pointer;\n  font-weight: bolder;\n}\n\n#score[_ngcontent-%COMP%] {\n  width: 224px;\n}\n\n@-webkit-keyframes show {\n  0% {\n    opacity: 0.1;\n  }\n\n  50% {\n    opacity: 0.5;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes show {\n  0% {\n    opacity: 0.1;\n  }\n\n  50% {\n    opacity: 0.5;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMtbGlzdC9nYW1lLWNvcmUtMjA0OC9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVpBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzLWxpc3QvZ2FtZS1jb3JlLTIwNDgvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNoZWFkZXIgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5idXR0b24jbmV3LWdhbWUtYnRuIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzZlNjU7XG4gIGNvbG9yOiAjZjlmNmYyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nOiA4cHggMTNweCAxMHB4IDEzcHg7XG4gIC8qbWFyZ2luLWxlZnQ6IDE1MHB4OyovXG59XG5cbmJ1dHRvbiNuZXctZ2FtZS1idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkYzFiNDtcbn1cblxuZGl2I2JvYXJkLCBkaXYjc2NvcmUsIGRpdiNoZWFkZXIge1xuICB3aWR0aDogMzM2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jZ2FtZS1vdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLDEsMSwuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNob3cgMC40cyBlYXNlLW91dCBub3JtYWw7XG4gIGFuaW1hdGlvbjogc2hvdyAwLjRzIGVhc2Utb3V0IG5vcm1hbDtcbn1cblxuZGl2I2dhbWUtb3Zlci1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNnYW1lLW92ZXItYm9keSBoNCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jZ2FtZS1vdmVyLWJvZHkgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4jc2NvcmUge1xuICB3aWR0aDogMjI0cHg7XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cblxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-list-game-core-2048-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, { handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/games-list/game-core-2048/cell.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/games-list/game-core-2048/cell.model.ts ***!
  \*********************************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

class Cell {
    constructor() {
        this.wasMerged = false;
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._value = null;
    }
    set value(val) {
        if (val === 2048)
            this.success.emit(true);
        this._value = val;
    }
    get value() {
        return this._value;
    }
    get isEmpty() {
        return this.value === null;
    }
    ;
    merge(cell) {
        const val = cell.value;
        if (!val || this.wasMerged || cell.wasMerged)
            return false;
        if (this.value && this.value !== val)
            return false;
        if (this.value) {
            this.value += val;
            this.wasMerged = true;
        }
        else {
            this.value = val;
        }
        cell.value = null;
        return true;
    }
    resetMerged() {
        this.wasMerged = false;
    }
}
;


/***/ }),

/***/ "./src/app/games-list/game-core-2048/cell/cell.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/games-list/game-core-2048/cell/cell.component.ts ***!
  \******************************************************************/
/*! exports provided: CellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellComponent", function() { return CellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CellComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cell.value);
} }
class CellComponent {
    constructor() { }
    get class() {
        const base = `color-${this.cell.value}`;
        if (this.cell.value === null)
            return 'empty';
        if (this.cell.wasMerged)
            return `${base} merged`;
        return base;
    }
}
CellComponent.ɵfac = function CellComponent_Factory(t) { return new (t || CellComponent)(); };
CellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CellComponent, selectors: [["app-cell"]], inputs: { cell: "cell" }, decls: 2, vars: 3, consts: [["id", "cell"], ["id", "cell-value", 4, "ngIf"], ["id", "cell-value"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CellComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cell.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["#cell[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background-color: rgb(205, 193, 180);\n  display: inline-block;\n  vertical-align: middle;\n  margin: 2px;\n  position: relative;\n  border-radius: 4px;\n  color: transparent;\n}\n\n#cell[_ngcontent-%COMP%]:not(.empty) {\n  transition: all 0.1s cubic-bezier(0.2, 0, 0.1, 1);\n}\n\ndiv#cell-value[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 20px;\n  line-height: 32px;\n  height: 30px;\n  margin: auto;\n  text-align: center;\n}\n\n#cell.merged[_ngcontent-%COMP%] {\n  -webkit-animation: merge 0.2s ease-out normal;\n  animation: merge 0.2s ease-out normal;\n  z-index: 99;\n}\n\n#cell.color-2[_ngcontent-%COMP%] {\n  background: #eee4da;\n  color: black;\n}\n\n#cell.color-4[_ngcontent-%COMP%] {\n  background: #ede0c8;\n  color: black;\n}\n\n#cell.color-8[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #f2b179; \n}\n\n#cell.color-16[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #f59563; \n}\n\n#cell.color-32[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #f67c5f; \n}\n\n#cell.color-64[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #f65e3b; \n}\n\n#cell.color-128[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #edcf72;\n}\n\n#cell.color-256[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #edcc61;\n}\n\n#cell.color-512[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #edc850;\n}\n\n#cell.color-1024[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #edc53f;\n}\n\n#cell.color-2048[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #edc22e;\n}\n\n#cell.color-super[_ngcontent-%COMP%] {\n  color: #f9f6f2;\n  background: #3c3a32;\n}\n\n@-webkit-keyframes merge {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes merge {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMtbGlzdC9nYW1lLWNvcmUtMjA0OC9jZWxsL2NlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLHFDQUFxQztFQUNyQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUdFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUdFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUdFLG1CQUFtQjtFQUNyQjtBQUNGOztBQWxCQTtFQUNFO0lBR0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBR0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBR0UsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nYW1lcy1saXN0L2dhbWUtY29yZS0yMDQ4L2NlbGwvY2VsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NlbGwge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAxOTMsIDE4MCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNjZWxsOm5vdCguZW1wdHkpIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgY3ViaWMtYmV6aWVyKDAuMiwgMCwgMC4xLCAxKTtcbn1cblxuZGl2I2NlbGwtdmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NlbGwubWVyZ2VkIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1lcmdlIDAuMnMgZWFzZS1vdXQgbm9ybWFsO1xuICBhbmltYXRpb246IG1lcmdlIDAuMnMgZWFzZS1vdXQgbm9ybWFsO1xuICB6LWluZGV4OiA5OTtcbn1cblxuI2NlbGwuY29sb3ItMiB7XG4gIGJhY2tncm91bmQ6ICNlZWU0ZGE7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2NlbGwuY29sb3ItNCB7XG4gIGJhY2tncm91bmQ6ICNlZGUwYzg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2NlbGwuY29sb3ItOCB7XG4gIGNvbG9yOiAjZjlmNmYyO1xuICBiYWNrZ3JvdW5kOiAjZjJiMTc5OyBcbn1cblxuI2NlbGwuY29sb3ItMTYge1xuICBjb2xvcjogI2Y5ZjZmMjtcbiAgYmFja2dyb3VuZDogI2Y1OTU2MzsgXG59XG5cbiNjZWxsLmNvbG9yLTMyIHtcbiAgY29sb3I6ICNmOWY2ZjI7XG4gIGJhY2tncm91bmQ6ICNmNjdjNWY7IFxufVxuXG4jY2VsbC5jb2xvci02NCB7XG4gIGNvbG9yOiAjZjlmNmYyO1xuICBiYWNrZ3JvdW5kOiAjZjY1ZTNiOyBcbn1cblxuI2NlbGwuY29sb3ItMTI4IHtcbiAgY29sb3I6ICNmOWY2ZjI7XG4gIGJhY2tncm91bmQ6ICNlZGNmNzI7XG59XG5cbiNjZWxsLmNvbG9yLTI1NiB7XG4gIGNvbG9yOiAjZjlmNmYyO1xuICBiYWNrZ3JvdW5kOiAjZWRjYzYxO1xufVxuXG4jY2VsbC5jb2xvci01MTIge1xuICBjb2xvcjogI2Y5ZjZmMjtcbiAgYmFja2dyb3VuZDogI2VkYzg1MDtcbn1cblxuI2NlbGwuY29sb3ItMTAyNCB7XG4gIGNvbG9yOiAjZjlmNmYyO1xuICBiYWNrZ3JvdW5kOiAjZWRjNTNmO1xufVxuXG4jY2VsbC5jb2xvci0yMDQ4IHtcbiAgY29sb3I6ICNmOWY2ZjI7XG4gIGJhY2tncm91bmQ6ICNlZGMyMmU7XG59XG5cbiNjZWxsLmNvbG9yLXN1cGVyIHtcbiAgY29sb3I6ICNmOWY2ZjI7XG4gIGJhY2tncm91bmQ6ICMzYzNhMzI7XG59XG5cbkBrZXlmcmFtZXMgbWVyZ2Uge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cell',
                templateUrl: './cell.component.html',
                styleUrls: ['./cell.component.css']
            }]
    }], function () { return []; }, { cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/games-list/game-core-2048/constants/key-map.ts":
/*!****************************************************************!*\
  !*** ./src/app/games-list/game-core-2048/constants/key-map.ts ***!
  \****************************************************************/
/*! exports provided: KEY_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_MAP", function() { return KEY_MAP; });
/* harmony import */ var _enums_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/direction */ "./src/app/games-list/game-core-2048/enums/direction.ts");

const KEY_MAP = {
    38: _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Up,
    39: _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Right,
    40: _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Down,
    37: _enums_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].Left
};


/***/ }),

/***/ "./src/app/games-list/game-core-2048/core.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/games-list/game-core-2048/core.module.ts ***!
  \**********************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cell_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell/cell.component */ "./src/app/games-list/game-core-2048/cell/cell.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "./src/app/games-list/game-core-2048/board/board.component.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.service */ "./src/app/games-list/game-core-2048/game.service.ts");






class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_cell_cell_component__WEBPACK_IMPORTED_MODULE_2__["CellComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_cell_cell_component__WEBPACK_IMPORTED_MODULE_2__["CellComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_cell_cell_component__WEBPACK_IMPORTED_MODULE_2__["CellComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]],
                exports: [_cell_cell_component__WEBPACK_IMPORTED_MODULE_2__["CellComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]],
                providers: [_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/games-list/game-core-2048/enums/direction.ts":
/*!**************************************************************!*\
  !*** ./src/app/games-list/game-core-2048/enums/direction.ts ***!
  \**************************************************************/
/*! exports provided: Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;


/***/ }),

/***/ "./src/app/games-list/game-core-2048/game.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/games-list/game-core-2048/game.service.ts ***!
  \***********************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cell_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell.model */ "./src/app/games-list/game-core-2048/cell.model.ts");
/* harmony import */ var _enums_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/direction */ "./src/app/games-list/game-core-2048/enums/direction.ts");
/* harmony import */ var _action_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-handler */ "./src/app/games-list/game-core-2048/action-handler.ts");
/* harmony import */ var rxjs_add_observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/from */ "./node_modules/rxjs-compat/_esm2015/add/observable/from.js");
/* harmony import */ var rxjs_add_observable_zip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/zip */ "./node_modules/rxjs-compat/_esm2015/add/observable/zip.js");
/* harmony import */ var rxjs_add_operator_bufferCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/bufferCount */ "./node_modules/rxjs-compat/_esm2015/add/operator/bufferCount.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_pairwise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/pairwise */ "./node_modules/rxjs-compat/_esm2015/add/operator/pairwise.js");
/* harmony import */ var rxjs_add_operator_reduce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/reduce */ "./node_modules/rxjs-compat/_esm2015/add/operator/reduce.js");













const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const sameValueCells = (cell1, cell2) => cell1.value === cell2.value;
class GameService {
    constructor() {
        this.cells = Array(16).fill(null).map(_ => new _cell_model__WEBPACK_IMPORTED_MODULE_1__["Cell"]());
        this.rows = [];
        this.columns = [];
        this.score = 0;
        this.initializeGame();
    }
    hasMoves() {
        const column1 = this.columns[0];
        const column2 = this.columns[1];
        const column3 = this.columns[2];
        const column4 = this.columns[3];
        const hasColumnMoves = sameValueCells(column1[0], column1[1]) || sameValueCells(column1[1], column1[2]) || sameValueCells(column1[2], column1[3]) ||
            sameValueCells(column2[0], column2[1]) || sameValueCells(column2[1], column2[2]) || sameValueCells(column2[2], column2[3]) ||
            sameValueCells(column3[0], column3[1]) || sameValueCells(column3[1], column3[2]) || sameValueCells(column3[2], column3[3]) ||
            sameValueCells(column4[0], column4[1]) || sameValueCells(column4[1], column4[2]) || sameValueCells(column4[2], column4[3]);
        if (hasColumnMoves)
            return true;
        const row1 = this.rows[0];
        const row2 = this.rows[1];
        const row3 = this.rows[2];
        const row4 = this.rows[3];
        const hasRowMoves = sameValueCells(row1[0], row1[1]) || sameValueCells(row1[1], row1[2]) || sameValueCells(row1[2], row1[3]) ||
            sameValueCells(row2[0], row2[1]) || sameValueCells(row2[1], row2[2]) || sameValueCells(row2[2], row2[3]) ||
            sameValueCells(row3[0], row3[1]) || sameValueCells(row3[1], row3[2]) || sameValueCells(row3[2], row3[3]) ||
            sameValueCells(row4[0], row4[1]) || sameValueCells(row4[1], row4[2]) || sameValueCells(row4[2], row4[3]);
        return hasRowMoves;
    }
    getEmptyCells() {
        return this.cells.reduce((acc, cell) => {
            if (cell.isEmpty)
                acc.push(cell);
            return acc;
        }, []);
    }
    get isGameOver() {
        return !this.hasMoves() && this.getEmptyCells().length === 0;
    }
    restart() {
        this.cells = Array(16).fill(null).map(_ => new _cell_model__WEBPACK_IMPORTED_MODULE_1__["Cell"]());
        this.score = 0;
        this.initializeGame();
    }
    initializeGame() {
        //  Observable.from(this.cells)
        //   .bufferCount(4)
        //   .bufferCount(4)
        //   .do(rows => this.rows = rows)
        //   .map(rows => rows.map(row => Observable.from(row)))
        //   .switchMap(obsArray => Observable.zip(...obsArray))
        //   .bufferCount(4)
        //   .subscribe(columns => this.columns = columns);
        this.columns = [
            [this.cells[0], this.cells[4], this.cells[8], this.cells[12]],
            [this.cells[1], this.cells[5], this.cells[9], this.cells[13]],
            [this.cells[2], this.cells[6], this.cells[10], this.cells[14]],
            [this.cells[3], this.cells[7], this.cells[11], this.cells[15]],
        ];
        this.rows = [
            [this.cells[0], this.cells[1], this.cells[2], this.cells[3]],
            [this.cells[4], this.cells[5], this.cells[6], this.cells[7]],
            [this.cells[8], this.cells[9], this.cells[10], this.cells[11]],
            [this.cells[12], this.cells[13], this.cells[14], this.cells[15]],
        ];
    }
    move(direction) {
        return _action_handler__WEBPACK_IMPORTED_MODULE_3__["ACTION_HANDLER"][direction](direction === _enums_direction__WEBPACK_IMPORTED_MODULE_2__["Direction"].Left || direction === _enums_direction__WEBPACK_IMPORTED_MODULE_2__["Direction"].Right ? this.columns : this.rows)
            .map((mergeScore) => { this.score += mergeScore; return this.score; });
    }
    randomize() {
        const emptyCell = this.getEmptyCells();
        if (emptyCell.length === 0)
            return;
        const randIndex = rand(0, emptyCell.length - 1);
        const randValue = rand(1, 2) === 1 ? 2 : 4;
        emptyCell[randIndex].value = randValue;
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/games-list/games-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/games-list/games-list.component.ts ***!
  \****************************************************/
/*! exports provided: GamesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesListComponent", function() { return GamesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_core_2048_board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-core-2048/board/board.component */ "./src/app/games-list/game-core-2048/board/board.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-components/advertisement/advertisement.component */ "./src/app/sub-components/advertisement/advertisement.component.ts");
/* harmony import */ var _sub_components_game_outlet_game_outlet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sub-components/game-outlet/game-outlet.component */ "./src/app/sub-components/game-outlet/game-outlet.component.ts");







function GamesListComponent_ng_component_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-component");
} }
function GamesListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-sub-components-game-outlet", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GamesListComponent_div_14_Template_app_sub_components_game_outlet_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.startGame($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GamesListComponent {
    constructor() {
        this.gameStarted = false;
    }
    ngOnInit() {
    }
    startGame(gameName) {
        // if (gameName === '2048') {
        //   this.gameStarted = true;
        //   this.gameComponent = BoardComponent;
        // }
        switch (gameName.target.parentNode.id) {
            case '2048':
                this.gameStarted = true;
                this.gameComponent = _game_core_2048_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"];
                break;
            default:
                console.log('NO Game');
        }
    }
}
GamesListComponent.ɵfac = function GamesListComponent_Factory(t) { return new (t || GamesListComponent)(); };
GamesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesListComponent, selectors: [["app-games-list"]], decls: 16, vars: 3, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "grid", "p-15"], [1, "row"], [1, "sixteen", "wide", "column"], ["src", "assets/images/left-arrow.png", 1, "ui", "icon", 2, "width", "7vmin", 3, "routerLink"], [1, "row", 2, "padding-top", "5vmin"], [1, "bold-font-weight", "font-roboto", "text-white", "font-size-9vw"], [1, "font-rancho", "text-white", "pt-5", "line-height-normal", 2, "font-size", "5vw"], [4, "ngComponentOutlet"], ["class", "row", 4, "ngIf"], [1, "ui", "card", "add-scrolling", "hide-scrollbar", 2, "height", "80vh", "border-radius", "3vmin", "width", "100%", "padding-bottom", "25vmin"], [1, "content", 2, "padding-bottom", "0"], ["game-icon", "assets/images/2048_logo.png", "game-name", "Fun 2048", "game-id", "2048", 3, "click"]], template: function GamesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Play to earn coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "More games coming soon ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GamesListComponent_ng_component_13_Template, 1, 0, "ng-component", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GamesListComponent_div_14_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-sub-components-advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx.gameComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameStarted);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_4__["AdvertisementComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _sub_components_game_outlet_game_outlet_component__WEBPACK_IMPORTED_MODULE_5__["GameOutletComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzLWxpc3QvZ2FtZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-games-list',
                templateUrl: './games-list.component.html',
                styleUrls: ['./games-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub-components/advertisement/advertisement.component */ "./src/app/sub-components/advertisement/advertisement.component.ts");
/* harmony import */ var _sub_components_home_boxes_home_boxes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-components/home-boxes/home-boxes.component */ "./src/app/sub-components/home-boxes/home-boxes.component.ts");






function HomePageComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sub-components-home-boxes", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image-path", property_r1[0])("inside-text", property_r1[1])("bg-color", property_r1[2])("router-link", property_r1[3]);
} }
class HomePageComponent {
    constructor(router) {
        this.router = router;
        this.boxProperties = [
            ['assets/images/fidget-spinner.png', 'Daily Spinner', '#E67E22', '/spinner'],
            ['assets/images/dice-icon.png', 'Play Games', '#2ECC71', '/games-list'],
            ['assets/images/medal-icon.png', 'Hourly Winner', '#2196F3', '/lucky-draw-results'],
            ['assets/images/trophy-icon.png', 'Daily Winner', '#F1C40F', '/lucky-draw-results'],
            ['assets/images/gaming-icon.png', 'Lucky Draw', '#BA68C8', '/lucky-draw-dashboard'],
            ['assets/images/money-bag-icon.png', 'Lucky Jackpot', '#EF5350', '/lucky-draw-dashboard'],
            ['assets/images/wallet-icon.png', 'Wallet', '#F1C40F', '/wallet'],
            ['assets/images/decentralized-icon.svg', 'Refer & Earn', '#E67E22', '/share']
        ];
    }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 25, vars: 1, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], ["src", "assets/images/vector-background.png", 2, "position", "absolute", "left", "6.03%", "right", "6.03%", "top", "9.42%", "bottom", "0", "height", "100vh"], [1, "ui", "grid", "p-15"], [1, "row"], [1, "ui", "sixteen", "column", "right", "aligned", "padded", "grid"], [1, "sixteen", "wide", "column", 2, "padding", "0"], ["routerLink", "/my-profile"], ["src", "assets/images/user.svg", "alt", "user", 1, "ui", "icon", 2, "padding-right", "5vmin", "width", "11vmin"], ["routerLink", "/wallet"], ["src", "assets/images/wallet.svg", "alt", "wallet", 1, "ui", "icon", 2, "padding-right", "5vmin", "width", "11vmin"], ["src", "assets/images/previous.svg", "alt", "prev", "routerLink", "/share", 1, "ui", "icon", 2, "padding-right", "5vmin", "width", "11vmin"], [1, "row", 2, "padding", "0"], [1, "ui", "two", "column", "centered", "grid"], [1, "sixteen", "wide", "column"], [2, "font-family", "roboto", "color", "white", "font-size", "9vw"], [2, "font-family", "rancho", "color", "white", "font-size", "4.5vw"], [1, "row", "hide-scrollbar", "add-scrolling", 2, "padding", "0"], [1, "ui", "two", "column", "centered", "grid", 2, "margin-bottom", "15vh"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "column"], [3, "image-path", "inside-text", "bg-color", "router-link"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cartical Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Scroll down for more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomePageComponent_div_23_Template, 2, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-sub-components-advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boxProperties);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisementComponent"], _sub_components_home_boxes_home_boxes_component__WEBPACK_IMPORTED_MODULE_4__["HomeBoxesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/lucky-draw-dashboard/lucky-draw-dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/lucky-draw-dashboard/lucky-draw-dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: LuckyDrawDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuckyDrawDashboardComponent", function() { return LuckyDrawDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sub_components_redeem_request_modal_redeem_request_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sub-components/redeem-request-modal/redeem-request-modal.component */ "./src/app/sub-components/redeem-request-modal/redeem-request-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-components/advertisement/advertisement.component */ "./src/app/sub-components/advertisement/advertisement.component.ts");






function LuckyDrawDashboardComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You have already participated in this event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LuckyDrawDashboardComponent {
    constructor() {
        this.participationAccepted = false;
    }
    ngOnInit() {
    }
    changeHeader(event) {
        document.getElementsByClassName('active')[0].className = 'item font-size-3vw table-menu-not-active';
        event.target.className = 'item active font-size-5vw';
    }
    isParticipationAccepted() {
        if (!this.participationAccepted) {
            this.participationAccepted = true;
            // @ts-ignore
            $('.ui.modal').modal('show');
        }
    }
}
LuckyDrawDashboardComponent.ɵfac = function LuckyDrawDashboardComponent_Factory(t) { return new (t || LuckyDrawDashboardComponent)(); };
LuckyDrawDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LuckyDrawDashboardComponent, selectors: [["app-lucky-draw-dashboard"]], decls: 48, vars: 6, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "grid", "p-15"], [3, "image-src", "success-text"], [1, "row"], [1, "five", "wide", "column"], ["src", "assets/images/left-arrow.png", 1, "ui", "icon", 2, "width", "7vmin", 3, "routerLink"], [1, "eleven", "wide", "column", "font-size-5vw", 2, "color", "white"], [1, "row", 2, "padding-top", "5vmin"], [1, "sixteen", "wide", "column"], [1, "bold-font-weight", "font-roboto", "text-white", "font-size-9vw"], [1, "font-rancho", "text-white", "pt-5", "line-height-normal", 2, "font-size", "5vw"], [1, "ui", "top", "attached", "tabular", "menu"], ["id", "first", 1, "active", "item", "font-size-5vw", 3, "click"], ["id", "second", 1, "item", "font-size-3vw", "table-menu-not-active", 3, "click"], ["id", "third", 1, "item", "font-size-3vw", "table-menu-not-active", 3, "click"], [1, "ui", "bottom", "attached", "active", "tab", "segment", "add-scrolling", "hide-scrollbar", 2, "padding-bottom", "52%"], [1, "f-size-4", "bold-font-weight", "line-height-normal"], [1, "ui", "tiny", "progress"], [1, "bar", 2, "height", "1vmin"], [1, "label"], [1, "font-size-3vw", "font-roboto", "bold-font-weight", "line-height-normal", 2, "float", "left"], [1, "f-size-4", "font-rancho", "line-height-normal", 2, "float", "right", "color", "#48B1BF"], [1, "font-size-5vw", "font-roboto", "line-height-normal", "pt-10"], [1, "font-size-3vw", "font-roboto", "line-height-normal", "pt-5", 2, "margin-bottom", "7vmin"], ["class", "font-size-3vw line-height-normal", "style", "color: #EF5350;", 4, "ngIf"], [1, "ui", "fluid", "button", "line-height-normal", 2, "text-align", "left", "border-radius", "3vmin", "font-size", "4vmin", 3, "click"], [1, "ui", "fluid", "button", 2, "text-align", "left", "background", "#2196F3", "border-radius", "3vmin", "margin-top", "5vmin", "color", "white", "font-size", "4vmin"], [1, "font-size-3vw", "line-height-normal", 2, "color", "#EF5350"]], template: function LuckyDrawDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sub-components-redeem-request-modal", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lucky Draw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "One lucky winner, for every contest chose randomly by the editor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuckyDrawDashboardComponent_Template_div_click_17_listener($event) { return ctx.changeHeader($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "100 Coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuckyDrawDashboardComponent_Template_div_click_19_listener($event) { return ctx.changeHeader($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "500 Coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuckyDrawDashboardComponent_Template_div_click_21_listener($event) { return ctx.changeHeader($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1000 Coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contest #51");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Awaiting participants ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "42 / 100 Joined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Rules to Join ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 1. Lucky Draw open for 100 users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 2. One Lucky Winner will be decided randomly and get 100 coins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 3. You will get notification about the winner in Results page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LuckyDrawDashboardComponent_div_42_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuckyDrawDashboardComponent_Template_div_click_43_listener() { return ctx.isParticipationAccepted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Join Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " See Previous Results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-sub-components-advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image-src", "assets/images/success-tick-icon.png")("success-text", "Participation Accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.participationAccepted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bgBlue-text-white", !ctx.participationAccepted);
    } }, directives: [_sub_components_redeem_request_modal_redeem_request_modal_component__WEBPACK_IMPORTED_MODULE_1__["RedeemRequestModalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_4__["AdvertisementComponent"]], styles: [".table-menu-not-active[_ngcontent-%COMP%], .item.font-size-3vw.table-menu-not-active[_ngcontent-%COMP%] {\n  border: 0 solid black;\n  background: #EAEAEA;\n  padding: 0 10px 0 12px;\n  margin-top: 10px;\n  font-weight: bold;\n}\n\n#first.table-menu-not-active[_ngcontent-%COMP%] {\n  border: 0 solid black;\n  background: #EAEAEA;\n  padding: 0 10px 0 12px;\n  margin-top: 10px;\n  font-weight: bold;\n  border-radius: 10px 0 0 0;\n}\n\n#second.table-menu-not-active[_ngcontent-%COMP%] {\n  border: 0 solid black;\n  background: #EAEAEA;\n  padding: 0 10px 0 12px;\n  margin-top: 10px;\n  font-weight: bold;\n}\n\n#third.table-menu-not-active[_ngcontent-%COMP%] {\n  border: 0 solid black;\n  background: #EAEAEA;\n  padding: 0 10px 0 12px;\n  margin-top: 10px;\n  font-weight: bold;\n  border-radius: 0 10px 0 0;\n}\n\n#first.active[_ngcontent-%COMP%] {\n  border-radius: 10px 0 0 0;\n}\n\n.bgBlue-text-white[_ngcontent-%COMP%] {\n  background: #48B1BF;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbHVja3ktZHJhdy1kYXNoYm9hcmQvbHVja3ktZHJhdy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9sdWNreS1kcmF3LWRhc2hib2FyZC9sdWNreS1kcmF3LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLW1lbnUtbm90LWFjdGl2ZSwgLml0ZW0uZm9udC1zaXplLTN2dy50YWJsZS1tZW51LW5vdC1hY3RpdmUge1xuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6ICNFQUVBRUE7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jZmlyc3QudGFibGUtbWVudS1ub3QtYWN0aXZlIHtcbiAgYm9yZGVyOiAwIHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjRUFFQUVBO1xuICBwYWRkaW5nOiAwIDEwcHggMCAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMDtcbn1cblxuI3NlY29uZC50YWJsZS1tZW51LW5vdC1hY3RpdmUge1xuICBib3JkZXI6IDAgc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6ICNFQUVBRUE7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdGhpcmQudGFibGUtbWVudS1ub3QtYWN0aXZlIHtcbiAgYm9yZGVyOiAwIHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjRUFFQUVBO1xuICBwYWRkaW5nOiAwIDEwcHggMCAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMDtcbn1cblxuI2ZpcnN0LmFjdGl2ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG59XG5cbi5iZ0JsdWUtdGV4dC13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICM0OEIxQkY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LuckyDrawDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lucky-draw-dashboard',
                templateUrl: './lucky-draw-dashboard.component.html',
                styleUrls: ['./lucky-draw-dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/lucky-draw-results/lucky-draw-results.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/lucky-draw-results/lucky-draw-results.component.ts ***!
  \********************************************************************/
/*! exports provided: LuckyDrawResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuckyDrawResultsComponent", function() { return LuckyDrawResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-components/advertisement/advertisement.component */ "./src/app/sub-components/advertisement/advertisement.component.ts");




class LuckyDrawResultsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LuckyDrawResultsComponent.ɵfac = function LuckyDrawResultsComponent_Factory(t) { return new (t || LuckyDrawResultsComponent)(); };
LuckyDrawResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LuckyDrawResultsComponent, selectors: [["app-lucky-draw-results"]], decls: 64, vars: 1, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "grid", "p-15"], [1, "row"], [1, "five", "wide", "column"], ["src", "assets/images/left-arrow.png", 1, "ui", "icon", 2, "width", "7vmin", 3, "routerLink"], [1, "eleven", "wide", "column", "font-size-5vw", 2, "color", "white"], [1, "row", 2, "padding-top", "5vmin"], [1, "sixteen", "wide", "column"], [1, "bold-font-weight", "font-roboto", "text-white", "font-size-9vw"], [1, "font-rancho", "text-white", "pt-5", "line-height-normal", 2, "font-size", "5vw"], [1, "ui", "card", "add-scrolling", "hide-scrollbar", 2, "height", "80vh", "border-radius", "3vmin", "width", "100%", "padding-bottom", "40%"], [1, "content", "line-height-normal", 2, "padding-bottom", "0"], [1, "left", "floated", "ui", "image", 2, "width", "27.5%"], ["src", "assets/images/gray-rectangle.png", 2, "width", "100%"], ["src", "assets/images/human-icon-image.png", 2, "position", "absolute", "left", "21%", "top", "12%", "width", "60%"], [1, "header", "bolder-font-weight", 2, "font-size", "5.5vmin", "line-height", "2"], [1, "meta", 2, "font-size", "2.5vmin", "display", "block", "line-height", "1.5", "color", "black"], ["src", "assets/images/pile-of-coin-icon.png", 1, "ui", "image", 2, "width", "3%"], [1, "content", "line-height-normal", 2, "margin-bottom", "0.2em"], [1, "ui", "center", "aligned", "font-size-3vw", 2, "width", "100%", "background", "#EAEAEA", "height", "4em", "border-radius", "1em"]], template: function LuckyDrawResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ones a winner, will always be a winner. In our hall of fame.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contest #41");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Amaan Khan on Monday 10 March");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 100 coins ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contest #41");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Amaan Khan on Monday 10 March");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " 100 coins ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contest #41");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Amaan Khan on Monday 10 March");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 100 coins ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Native Ads ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Contest #41");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Amaan Khan on Monday 10 March");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " 100 coins ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-sub-components-advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_2__["AdvertisementComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1Y2t5LWRyYXctcmVzdWx0cy9sdWNreS1kcmF3LXJlc3VsdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LuckyDrawResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lucky-draw-results',
                templateUrl: './lucky-draw-results.component.html',
                styleUrls: ['./lucky-draw-results.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile-page/profile-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProfilePageComponent {
    constructor() { }
    ngOnInit() {
        const googleSignOutScript = document.createElement('script');
        googleSignOutScript.type = 'text/javascript';
        googleSignOutScript.innerText = `
      function googleSignOut() {
        gapi.load('auth2', () => {
            auth2 = gapi.auth2.init({
              client_id: '663356946726-ibs27ckiu8pnu9dhpoflmnuvs5bvjkb8.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin',
            });
          gapi.auth2.getAuthInstance().signOut().then(function () {
            console.log('User signed out.');
          });
        });
        localStorage.clear();
        window.location.replace('/sign-in');
      }
    `;
        document.getElementsByTagName('head')[0].appendChild(googleSignOutScript);
    }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], decls: 59, vars: 1, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "grid", "p-15"], [1, "row"], [1, "five", "wide", "column"], ["src", "assets/images/left-arrow.png", 1, "ui", "icon", 2, "width", "7vmin", 3, "routerLink"], [1, "eleven", "wide", "column", "font-size-5vw", 2, "color", "white", "padding-top", "1.5vmin"], [1, "row", 2, "padding-top", "5vmin"], [1, "sixteen", "wide", "column"], [1, "bold-font-weight", "font-roboto", "text-white", "font-size-9vw"], [1, "font-rancho", "text-white", "pt-5", "line-height-normal", 2, "font-size", "5vw"], [1, "row", "add-scrolling", "hide-scrollbar", 2, "padding-top", "5vmin"], [1, "ui", "vertical", "fluid", "buttons"], [1, "ui", "right", "labeled", "big", "icon", "button", 2, "background", "white", "border-radius", "3vmin 3vmin 0 0", "padding-bottom", "2vmin"], [2, "width", "20%", "height", "100%"], ["src", "assets/images/Rating-img.png", 1, "ui", "image", 2, "height", "100%", "width", "100%"], [1, "bold-font-weight", "font-roboto", "f-size-4", "text-black", 2, "position", "absolute", "top", "52%", "left", "30%", "transform", "translateY(-50%)"], [1, "ui", "icon", 2, "background", "white", "padding-top", "8%", "width", "20%"], ["src", "assets/images/small-go-next.png", 2, "width", "7vmin", "position", "absolute", "top", "27%", "left", "30%"], [1, "ui", "right", "labeled", "big", "icon", "button", 2, "background", "white", "padding-bottom", "2vmin"], ["src", "assets/images/update-icon.png", 1, "ui", "image", 2, "height", "100%", "width", "100%"], ["src", "assets/images/feedback-icon.png", 1, "ui", "image", 2, "height", "100%", "width", "100%"], ["src", "assets/images/terms-and-condition-icon.png", 1, "ui", "image", 2, "height", "100%", "width", "100%"], ["src", "assets/images/privacy-policy-icon.png", 1, "ui", "image", 2, "height", "100%", "width", "100%"], ["onclick", "googleSignOut()", 1, "ui", "right", "labeled", "big", "icon", "button", 2, "background", "white", "border-radius", "0 0 3vmin 3vmin", "padding-bottom", "4vmin"], ["src", "assets/images/logout-icon.png", 1, "left", "floated", "ui", "mini", "image", 2, "width", "100%", "height", "100%"], [1, "ui", "icon", "pt-10", 2, "background", "white", "padding-top", "8%", "width", "20%"]], template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Amaan Khan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email: amaan.khan@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Rate Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcGFnZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-page',
                templateUrl: './profile-page.component.html',
                styleUrls: ['./profile-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/redeem-page/redeem-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/redeem-page/redeem-page.component.ts ***!
  \******************************************************/
/*! exports provided: RedeemPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemPageComponent", function() { return RedeemPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sub_components_current_balance_current_balance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-components/current-balance/current-balance.component */ "./src/app/sub-components/current-balance/current-balance.component.ts");
/* harmony import */ var _sub_components_redeem_request_modal_redeem_request_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub-components/redeem-request-modal/redeem-request-modal.component */ "./src/app/sub-components/redeem-request-modal/redeem-request-modal.component.ts");
/* harmony import */ var _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-components/advertisement/advertisement.component */ "./src/app/sub-components/advertisement/advertisement.component.ts");






class RedeemPageComponent {
    constructor() { }
    ngOnInit() {
    }
    changeThePanel(offElement) {
        offElement.target.innerText = (offElement.target.innerText === 'Paytm') ? 'Poornima' : 'Paytm';
        document.getElementsByClassName('on-side')[0].innerHTML = (offElement.target.innerText === 'Paytm') ? 'Poornima' : 'Paytm';
    }
}
RedeemPageComponent.ɵfac = function RedeemPageComponent_Factory(t) { return new (t || RedeemPageComponent)(); };
RedeemPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedeemPageComponent, selectors: [["app-redeem-page"]], decls: 37, vars: 5, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "grid", "p-15"], [1, "row", 2, "height", "9vh"], [1, "five", "wide", "column"], ["src", "assets/images/left-arrow.png", 1, "ui", "icon", 2, "width", "7vmin", 3, "routerLink"], [1, "eleven", "wide", "column", "font-size-5vw", 2, "color", "white", "padding-top", "1.5vmin"], [1, "row"], [1, "sixteen", "wide", "column"], [1, "ui", "card", 2, "border-radius", "3vmin", "width", "100%", "padding-bottom", "5em", "height", "90vh"], [1, "content"], [2, "margin-bottom", "4em"], [3, "amount"], [1, "description", "font-size-5vw", "font-roboto", "bold-font-weight", "line-height-normal", 2, "color", "#48B1BF", "padding-bottom", "6vmin"], [1, "ui", "grid", "plr-10"], [1, "row", 2, "background", "#48B1BF", "padding", "0"], [1, "ten", "wide", "column", "text-white", "on-side", 2, "position", "absolute"], [1, "six", "wide", "column", "right", "floated", "ui", "button", "font-roboto", "bold-font-weight", "off-side", 2, "padding-left", "0", "padding-right", "0", 3, "click"], [1, "description", 2, "margin-top", "3vmin"], [1, "ui", "one", "column", "grid"], [1, "column", "pb-5"], [1, "ui", "fluid", "input"], ["type", "text", "placeholder", "Enter 10 digit mobile no.", 1, "font-roboto", "font-size-3vw", 2, "border-radius", "1em", "background", "#F8F8F8"], ["type", "text", "placeholder", "Enter coins to redeem", 1, "font-roboto", "font-size-3vw", 2, "border-radius", "1em", "font-size", "3vw", "background", "#F8F8F8"], [1, "column"], [1, "description", 2, "margin-bottom", "2em"], ["onclick", "$('.ui.modal').modal('show');", 1, "ui", "fluid", "button", 2, "background", "#48B1BF", "color", "white", "border-radius", "3vmin", "font-size", "4vw"], [3, "image-src", "success-text", "ticket-number"]], template: function RedeemPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Redeem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-sub-components-current-balance", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 100 Coins = 1/- INR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Paytm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RedeemPageComponent_Template_div_click_20_listener($event) { return ctx.changeThePanel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Poornima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Redeem Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-sub-components-redeem-request-modal", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-sub-components-advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("amount", "197.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image-src", "assets/images/success-tick-icon.png")("success-text", "Redeem Request Raised")("ticket-number", "#1032412");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _sub_components_current_balance_current_balance_component__WEBPACK_IMPORTED_MODULE_2__["CurrentBalanceComponent"], _sub_components_redeem_request_modal_redeem_request_modal_component__WEBPACK_IMPORTED_MODULE_3__["RedeemRequestModalComponent"], _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_4__["AdvertisementComponent"]], styles: [".on-side[_ngcontent-%COMP%] {\n  padding-left: 0.7em;top: 50%;\n  transform: translateY(-50%);\n  font-size: 3vw;\n  text-decoration: underline;\n}\n\n.off-side[_ngcontent-%COMP%] {\n  border: 0.1em solid #48B1BF;\n  border-radius: 0;\n  font-weight: bolder;\n  font-size: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkZWVtLXBhZ2UvcmVkZWVtLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixDQUFDLFFBQVE7RUFDNUIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVkZWVtLXBhZ2UvcmVkZWVtLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbi1zaWRlIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjdlbTt0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDN2dztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5vZmYtc2lkZSB7XG4gIGJvcmRlcjogMC4xZW0gc29saWQgIzQ4QjFCRjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzdnc7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedeemPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-redeem-page',
                templateUrl: './redeem-page.component.html',
                styleUrls: ['./redeem-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/refer-and-earn-page/refer-and-earn-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/refer-and-earn-page/refer-and-earn-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReferAndEarnPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAndEarnPageComponent", function() { return ReferAndEarnPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ReferAndEarnPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReferAndEarnPageComponent.ɵfac = function ReferAndEarnPageComponent_Factory(t) { return new (t || ReferAndEarnPageComponent)(); };
ReferAndEarnPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferAndEarnPageComponent, selectors: [["app-refer-and-earn-page"]], decls: 60, vars: 1, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "grid", "p-15"], [1, "row", 2, "height", "9vh"], [1, "five", "wide", "column"], ["src", "assets/images/left-arrow.png", 1, "ui", "icon", 2, "width", "7vmin", 3, "routerLink"], [1, "eleven", "wide", "column", "font-size-5vw"], [1, "row", 2, "padding-top", "1.5em"], [1, "sixteen", "wide", "column"], [1, "bold-font-weight", "font-roboto", "text-white", "font-size-9vw"], [1, "font-rancho", "text-white", "pt-5", "font-size-5vw", "line-height-normal"], [1, "row", 2, "margin-top", "6vmin"], [1, "ui", "card", "add-scrolling", "hide-scrollbar", 2, "border-radius", "3vmin", "width", "100%", "padding-bottom", "20vmin"], [1, "content", 2, "padding", "0"], ["src", "assets/images/share-the-app-img.png", 1, "ui", "image", 2, "width", "100%"], [2, "padding", "6vw 6vw 0 6vw"], [1, "font-size-5vw", "bolder-font-weight"], ["src", "assets/images/double-square-icon.png", 1, "ui", "right", "floated", "icon", 2, "width", "5vw"], [2, "padding", "3.5vw 4vw 0 4vw"], [1, "ui", "fluid", "input"], ["type", "text", "placeholder", "https://play.google.com/store/apps/det..", 2, "background", "rgba(248, 248, 248, 0.8)", "border-radius", "3vmin", "font-size", "3.5vw"], [2, "padding", "3.5vw 4vw 0 6vw"], [1, "ui", "grid"], [1, "ui", "left", "floated", "bold-font-weight", "font-size-5vw", 2, "position", "absolute", "top", "45%", "transform", "translateY(-50%)"], [1, "ui", "right", "floated", "image"], [1, "center", "aligned", "row"], ["src", "assets/images/more-icon.png", 1, "ui", "icon", 2, "width", "9vw"], [1, "center", "aligned", "row", "font-size-3vw", "line-height-normal"], ["src", "assets/images/facebook-icon.png", 1, "ui", "icon", 2, "width", "9vw"], ["src", "assets/images/whatsApp-icon.png", 1, "ui", "icon", 2, "width", "9vw"], [2, "padding", "3.5vw 6vw 0 7vw"], [1, "row"], [1, "font-size-5vw", "bolder-font-weight", "line-height-normal"], ["src", "assets/images/information-icon.png", 1, "ui", "right", "floated", "icon", 2, "width", "5vw"], [1, "sixteen", "wide", "column", "font-roboto", "font-size-3vw", "line-height-normal"]], template: function ReferAndEarnPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Refer & Earn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Invite your friends to earn money, use this link to get joining bonus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Your refer link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Share via:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " whatsapp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "The Power of Network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " - You refer to 5 friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " - They refer to 5 friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " - Total you have 3,125 referrals in your network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " - If every friend redeem every day then you get 31250 coins every day = Rs 312 every day just from network. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZmVyLWFuZC1lYXJuLXBhZ2UvcmVmZXItYW5kLWVhcm4tcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferAndEarnPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-refer-and-earn-page',
                templateUrl: './refer-and-earn-page.component.html',
                styleUrls: ['./refer-and-earn-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sign-in-page/sign-in-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sign-in-page/sign-in-page.component.ts ***!
  \********************************************************/
/*! exports provided: SignInPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageComponent", function() { return SignInPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SignInPageComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        const googleButtonScript = document.createElement('script');
        googleButtonScript.type = 'text/javascript';
        googleButtonScript.innerText = `
      (() => {
        if (localStorage.getItem('myUserEntity') != null) {
          var userEntity = JSON.parse(sessionStorage.getItem('myUserEntity'));
          window.location.replace('/home');
        } else {
          gapi.load('auth2', () => {
            auth2 = gapi.auth2.init({
              client_id: '663356946726-ibs27ckiu8pnu9dhpoflmnuvs5bvjkb8.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin',
            });
            auth2.attachClickHandler(
              document.getElementById('customBtn'), {},
              (googleUser) => {
                var profile = googleUser.getBasicProfile();
                var myUserEntity = {};
                myUserEntity.Id = profile.getId();
                myUserEntity.Name = profile.getName();
                localStorage.setItem('myUserEntity',JSON.stringify(myUserEntity));
                window.location.replace("/home");
              },
              (error) => console.log(JSON.stringify(error, undefined, 2))
            );
          });
        }
      })();
    `;
        document.getElementsByTagName('head')[0].appendChild(googleButtonScript);
    }
    onSignIn(googleUser) {
        const profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
}
SignInPageComponent.ɵfac = function SignInPageComponent_Factory(t) { return new (t || SignInPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignInPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInPageComponent, selectors: [["app-sign-in-page"]], decls: 31, vars: 1, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "modal"], [1, "scrolling", "content", 3, "innerHTML"], [1, "ui", "grid", 2, "position", "absolute", "top", "25vmax", "left", "18vmin"], [1, "row"], [1, "sixteen", "wide", "column"], ["src", "assets/images/lato-logo.png", 2, "width", "35vmin"], [1, "text-white", "font-size-17vw"], [1, "bold-font-weight", "letter-spacing-1", "line-height-normal"], [1, "font-rancho", 2, "line-height", "0.6"], [1, "ui", "grid", "centered", "container", 2, "position", "absolute", "bottom", "0", "left", "0"], ["id", "name"], [1, "sixteen", "wide", "column", "pb-5"], ["id", "customBtn", 1, "ui", "fluid", "large", "button", 2, "background-color", "#ffffff", "border-radius", "0.5rem"], ["src", "assets/images/google-logo.svg", 1, "ui", "icon", 2, "height", "4vw"], [1, "font-roboto", "text-black", "font-size-5vw", "light-font-weight"], [1, "sixteen", "wide", "column", "pb-10"], [1, "ui", "small", "label", 2, "background", "transparent"], [1, "text-white", "font-size-3vw"]], template: function SignInPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Cartical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Games ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign-in with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " By signing up I accept & agree to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.privacyPolicy, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4tcGFnZS9zaWduLWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in-page',
                templateUrl: './sign-in-page.component.html',
                styleUrls: ['./sign-in-page.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/spinner-not-available-page/spinner-not-available-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/spinner-not-available-page/spinner-not-available-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: SpinnerNotAvailablePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerNotAvailablePageComponent", function() { return SpinnerNotAvailablePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-components/advertisement/advertisement.component */ "./src/app/sub-components/advertisement/advertisement.component.ts");




class SpinnerNotAvailablePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerNotAvailablePageComponent.ɵfac = function SpinnerNotAvailablePageComponent_Factory(t) { return new (t || SpinnerNotAvailablePageComponent)(); };
SpinnerNotAvailablePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerNotAvailablePageComponent, selectors: [["app-spinner-not-available-page"]], decls: 32, vars: 1, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "grid", "p-15"], [1, "row"], [1, "five", "wide", "column"], ["src", "assets/images/left-arrow.png", 1, "ui", "icon", 2, "width", "7vmin", 3, "routerLink"], [1, "eleven", "wide", "column", "font-size-5vw", 2, "color", "white"], [1, "row", 2, "padding-top", "5vmin"], [1, "sixteen", "wide", "column"], [1, "bold-font-weight", "font-roboto", "text-white", "font-size-9vw"], [1, "font-rancho", "text-white", "pt-5", "line-height-normal", 2, "font-size", "5vw"], [1, "centered-thing"], ["src", "assets/images/spinner-circle-img.png", 2, "width", "60vmin", "height", "60vmin"], ["src", "assets/images/spinner-circle-arrow-img.png", 2, "width", "18vmin", "height", "21vmin"], [1, "centered-thing", "text-white", 2, "width", "100%", "background", "linear-gradient(180deg, rgba(6, 190, 182, 0.8) 0%, rgba(72, 177, 191, 0.8) 100%)"], [1, "ui", "grid"], [1, "ui", "sixteen", "wide", "center", "aligned", "column", "font-roboto", "bolder-font-weight", 2, "font-size", "6.5vmin", "line-height", "10vmin"], ["src", "assets/images/frown-face-icon.png", "alt", "frown-face", 1, "ui", "icon", 2, "width", "7vmin"], [1, "ui", "sixteen", "wide", "center", "aligned", "column", "font-roboto", "bold-font-weight", "f-size-4", 2, "line-height", "10vmin"], [1, "ui", "sixteen", "wide", "center", "aligned", "column", "font-roboto", "bold-font-weight", 2, "line-height", "10vmin"], [1, "f-size-10"], [1, "f-size-4"]], template: function SpinnerNotAvailablePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Spin the Wheel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You will earn, any no. of coins that comes for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Not Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " please, come back after ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "8:45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " p.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-sub-components-advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_2__["AdvertisementComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXItbm90LWF2YWlsYWJsZS1wYWdlL3NwaW5uZXItbm90LWF2YWlsYWJsZS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerNotAvailablePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner-not-available-page',
                templateUrl: './spinner-not-available-page.component.html',
                styleUrls: ['./spinner-not-available-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/spinner-page/spinner-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/spinner-page/spinner-page.component.ts ***!
  \********************************************************/
/*! exports provided: SpinnerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerPageComponent", function() { return SpinnerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub-components/advertisement/advertisement.component */ "./src/app/sub-components/advertisement/advertisement.component.ts");





function SpinnerPageComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} }
function SpinnerPageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You have received");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " coins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.prisePoints);
} }
class SpinnerPageComponent {
    constructor() {
        this.btnText = 'Spin Now';
        this.listOfPoints = [10, 1, 5, 9, 7, 4, 2, 8, 6, 3];
    }
    ngOnInit() {
    }
    spinTheWheel(spinnerWheel) {
        if (this.btnText === 'Spin Now') {
            this.randomNumber = Math.floor(Math.random() * 10);
            this.randomNumber *= 36;
            spinnerWheel.className = 'container-spin';
            setTimeout(() => {
                try {
                    document.getElementsByClassName('container-spin')[0].className = '';
                    spinnerWheel.className = 'rotate' + this.randomNumber;
                    setTimeout(() => this.chg(), 1000);
                }
                catch (e) {
                    console.log(e);
                }
            }, 510);
        }
    }
    chg() {
        document.getElementById('spinner-tick').style.width = '9vmin';
        document.getElementById('spinner-tick').style.height = '10.5vmin';
        document.getElementById('spinner-wheel').style.width = '30vmin';
        document.getElementById('spinner-wheel').style.height = '30vmin';
        document.getElementsByClassName('centered-thing')[0].className = 'centered-thing d1 top40';
        document.getElementsByClassName('centered-thing')[1].className = 'centered-thing d1 top40';
        this.prisePoints = this.listOfPoints[this.randomNumber / 36];
        setTimeout(() => {
            document.getElementsByClassName('title-text')[0].innerHTML = 'Congratulations !!!';
            document.getElementsByClassName('sub-title-text')[0].innerHTML = 'Click on claim below to add these coins to your wallet.';
            this.btnText = 'Claim Coins';
        }, 500);
        for (const i of [1, 2]) {
            // @ts-ignore
            $('.title-text').transition('horizontal flip');
            // @ts-ignore
            $('.sub-title-text').transition('horizontal flip');
            // @ts-ignore
            $('.button-with-text').transition('vertical flip');
        }
    }
}
SpinnerPageComponent.ɵfac = function SpinnerPageComponent_Factory(t) { return new (t || SpinnerPageComponent)(); };
SpinnerPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerPageComponent, selectors: [["app-spinner-page"]], decls: 26, vars: 4, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "grid", "p-15"], [1, "row"], [1, "five", "wide", "column"], ["src", "assets/images/left-arrow.png", 1, "ui", "icon", 2, "width", "7vmin", 3, "routerLink"], [1, "eleven", "wide", "right", "aligned", "column", "font-size-5vw", 2, "color", "white"], ["src", "assets/images/white-cross-icon.png", "style", "width: 7vmin;", "class", "ui icon fadeInTransition", 4, "ngIf"], [1, "row", 2, "padding-top", "5vmin"], [1, "sixteen", "wide", "column"], [1, "bold-font-weight", "font-roboto", "text-white", "font-size-9vw", "title-text"], [1, "font-rancho", "text-white", "pt-5", "line-height-normal", "sub-title-text", 2, "font-size", "5vw"], [1, "row", 2, "position", "absolute", "top", "75%", "left", "0"], [1, "ui", "sixteen", "wide", "column"], [1, "ui", "fluid", "large", "button", 2, "border-radius", "0.5em", "background", "white", 3, "click"], [1, "font-size-5vw", "line-height-normal", "text-black", "font-roboto", "bold-font-weight", "button-with-text"], [1, "centered-thing", "d1"], ["src", "assets/images/spinner-circle-img.png", "id", "spinner-wheel", 2, "width", "60vmin", "height", "60vmin", "transition", "all 1s linear"], ["spinnerWheelImage", ""], ["src", "assets/images/spinner-circle-arrow-img.png", "id", "spinner-tick", 1, "d1", 2, "width", "18vmin", "height", "21vmin"], ["class", "row fadeInTransition", "style", "position: absolute; top: 50%; left: 0;", 4, "ngIf"], ["src", "assets/images/white-cross-icon.png", 1, "ui", "icon", "fadeInTransition", 2, "width", "7vmin"], [1, "row", "fadeInTransition", 2, "position", "absolute", "top", "50%", "left", "0"], [1, "ui", "center", "aligned", "sixteen", "wide", "column"], [1, "font-size-7vw", "font-roboto", "text-white", "bolder-font-weight", "line-height-normal"], [2, "font-size", "12vmin"]], template: function SpinnerPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SpinnerPageComponent_img_7_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Spin the Wheel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You will earn, any no. of coins that comes for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerPageComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.spinTheWheel(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SpinnerPageComponent_div_24_Template, 8, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-sub-components-advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prisePoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.btnText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prisePoints);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisementComponent"]], styles: ["@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform-origin: 50% 52.5% }\n  10% { -webkit-transform: rotate(540deg); transform-origin: 50% 52.5% }\n  20% { -webkit-transform: rotate(720deg); transform-origin: 50% 52.5% }\n  40% { -webkit-transform: rotate(1080deg); transform-origin: 50% 52.5% }\n  70% { -webkit-transform: rotate(1440deg); transform-origin: 50% 52.5% }\n  100% { -webkit-transform: rotate(1800deg); transform-origin: 50% 52.5% }\n}\n\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform-origin: 50% 52.5% }\n  10% { -webkit-transform: rotate(540deg); transform-origin: 50% 52.5% }\n  20% { -webkit-transform: rotate(720deg); transform-origin: 50% 52.5% }\n  40% { -webkit-transform: rotate(1080deg); transform-origin: 50% 52.5% }\n  70% { -webkit-transform: rotate(1440deg); transform-origin: 50% 52.5% }\n  100% { -webkit-transform: rotate(1800deg); transform-origin: 50% 52.5% }\n}\n\n.container-spin[_ngcontent-%COMP%] {\n  -webkit-animation: spin 0.5s linear;\n          animation: spin 0.5s linear;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.fadeInTransition[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 1s linear;\n          animation: fadeIn 1s linear;\n}\n\n.d1[_ngcontent-%COMP%] {\n  transition: all 1s linear;\n}\n\n.top40[_ngcontent-%COMP%] {\n  top: 40%;\n}\n\n.rotate0[_ngcontent-%COMP%] {\n  transform: rotate(0);\n  transform-origin: 50% 52.5%;\n}\n\n.rotate36[_ngcontent-%COMP%] {\n  transform: rotate(36deg);\n  transform-origin: 50% 52.5%;\n}\n\n.rotate72[_ngcontent-%COMP%] {\n  transform: rotate(72deg);\n  transform-origin: 50% 52.5%;\n}\n\n.rotate108[_ngcontent-%COMP%] {\n  transform: rotate(108deg);\n  transform-origin: 50% 52.5%;\n}\n\n.rotate144[_ngcontent-%COMP%] {\n  transform: rotate(144deg);\n  transform-origin: 50% 52.5%;\n}\n\n.rotate180[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  transform-origin: 50% 52.5%;\n}\n\n.rotate216[_ngcontent-%COMP%] {\n  transform: rotate(216deg);\n  transform-origin: 50% 52.5%;\n}\n\n.rotate252[_ngcontent-%COMP%] {\n  transform: rotate(252deg);\n  transform-origin: 50% 52.5%;\n}\n\n.rotate288[_ngcontent-%COMP%] {\n  transform: rotate(288deg);\n  transform-origin: 50% 52.5%;\n}\n\n.rotate324[_ngcontent-%COMP%] {\n  transform: rotate(324deg);\n  transform-origin: 50% 52.5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci1wYWdlL3NwaW5uZXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsS0FBSywrQkFBK0IsRUFBRSw0QkFBNEI7RUFDbEUsTUFBTSxpQ0FBaUMsRUFBRSw0QkFBNEI7RUFDckUsTUFBTSxpQ0FBaUMsRUFBRSw0QkFBNEI7RUFDckUsTUFBTSxrQ0FBa0MsRUFBRSw0QkFBNEI7RUFDdEUsTUFBTSxrQ0FBa0MsRUFBRSw0QkFBNEI7RUFDdEUsT0FBTyxrQ0FBa0MsRUFBRSw0QkFBNEI7QUFDekU7O0FBUEE7RUFDRSxLQUFLLCtCQUErQixFQUFFLDRCQUE0QjtFQUNsRSxNQUFNLGlDQUFpQyxFQUFFLDRCQUE0QjtFQUNyRSxNQUFNLGlDQUFpQyxFQUFFLDRCQUE0QjtFQUNyRSxNQUFNLGtDQUFrQyxFQUFFLDRCQUE0QjtFQUN0RSxNQUFNLGtDQUFrQyxFQUFFLDRCQUE0QjtFQUN0RSxPQUFPLGtDQUFrQyxFQUFFLDRCQUE0QjtBQUN6RTs7QUFFQTtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXItcGFnZS9zcGlubmVyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUyLjUlIH1cbiAgMTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpOyB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTIuNSUgfVxuICAyMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7IHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1Mi41JSB9XG4gIDQwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZyk7IHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1Mi41JSB9XG4gIDcwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTQ0MGRlZyk7IHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1Mi41JSB9XG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MDBkZWcpOyB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTIuNSUgfVxufVxuXG4uY29udGFpbmVyLXNwaW4ge1xuICBhbmltYXRpb246IHNwaW4gMC41cyBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZmFkZUluVHJhbnNpdGlvbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzIGxpbmVhcjtcbn1cblxuLmQxIHtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcbn1cblxuLnRvcDQwIHtcbiAgdG9wOiA0MCU7XG59XG5cbi5yb3RhdGUwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1Mi41JTtcbn1cblxuLnJvdGF0ZTM2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTIuNSU7XG59XG5cbi5yb3RhdGU3MiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcyZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUyLjUlO1xufVxuXG4ucm90YXRlMTA4IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTA4ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUyLjUlO1xufVxuXG4ucm90YXRlMTQ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTQ0ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUyLjUlO1xufVxuXG4ucm90YXRlMTgwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUyLjUlO1xufVxuXG4ucm90YXRlMjE2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjE2ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUyLjUlO1xufVxuXG4ucm90YXRlMjUyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjUyZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUyLjUlO1xufVxuXG4ucm90YXRlMjg4IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjg4ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUyLjUlO1xufVxuXG4ucm90YXRlMzI0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzI0ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUyLjUlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner-page',
                templateUrl: './spinner-page.component.html',
                styleUrls: ['./spinner-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sub-components/advertisement/advertisement.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sub-components/advertisement/advertisement.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementComponent", function() { return AdvertisementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AdvertisementComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdvertisementComponent.ɵfac = function AdvertisementComponent_Factory(t) { return new (t || AdvertisementComponent)(); };
AdvertisementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvertisementComponent, selectors: [["app-sub-components-advertisement"]], decls: 4, vars: 0, consts: [[1, "ui", "centered", "grid", 2, "height", "20vmin", "background", "rgba(234,234,234,0.8)", "position", "absolute", "bottom", "0", "left", "1em", "width", "100vw", "padding", "0"], [1, "three", "wide", "column", 2, "padding", "0"], [1, "ui", "tiny", "button", 2, "font-size", "4vmin"]], template: function AdvertisementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1jb21wb25lbnRzL2FkdmVydGlzZW1lbnQvYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertisementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sub-components-advertisement',
                templateUrl: './advertisement.component.html',
                styleUrls: ['./advertisement.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sub-components/current-balance/current-balance.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sub-components/current-balance/current-balance.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CurrentBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentBalanceComponent", function() { return CurrentBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CurrentBalanceComponent {
    constructor() { }
    ngOnInit() {
        this.mainAmt = this.amount.slice(0, this.amount.indexOf('.'));
        this.subAmt = this.amount.slice(this.amount.indexOf('.'));
    }
}
CurrentBalanceComponent.ɵfac = function CurrentBalanceComponent_Factory(t) { return new (t || CurrentBalanceComponent)(); };
CurrentBalanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentBalanceComponent, selectors: [["app-sub-components-current-balance"]], inputs: { amount: "amount" }, decls: 10, vars: 2, consts: [["src", "assets/images/coins-icon.png", 1, "left", "floated", "tiny", "ui", "image", 2, "width", "30%"], [1, "pt-5", "font-size-5vw", "font-roboto", 2, "line-height", "1.3"], [1, "bold-font-weight", "font-size-7vw"], [2, "color", "#48B1BF"]], template: function CurrentBalanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Current balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mainAmt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subAmt);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1jb21wb25lbnRzL2N1cnJlbnQtYmFsYW5jZS9jdXJyZW50LWJhbGFuY2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentBalanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sub-components-current-balance',
                templateUrl: './current-balance.component.html',
                styleUrls: ['./current-balance.component.css']
            }]
    }], function () { return []; }, { amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['amount']
        }] }); })();


/***/ }),

/***/ "./src/app/sub-components/game-outlet/game-outlet.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sub-components/game-outlet/game-outlet.component.ts ***!
  \*********************************************************************/
/*! exports provided: GameOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOutletComponent", function() { return GameOutletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GameOutletComponent {
    constructor() { }
    ngOnInit() {
    }
}
GameOutletComponent.ɵfac = function GameOutletComponent_Factory(t) { return new (t || GameOutletComponent)(); };
GameOutletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameOutletComponent, selectors: [["app-sub-components-game-outlet"]], inputs: { gameName: ["game-name", "gameName"], gameIcon: ["game-icon", "gameIcon"], gameId: ["game-id", "gameId"] }, decls: 7, vars: 3, consts: [[3, "id"], [1, "left", "floated", "ui", "image", 2, "width", "20%", 3, "src"], [1, "header", "bolder-font-weight", 2, "font-size", "5vmin", "line-height", "1.5"], ["src", "assets/images/go-next.png", 1, "ui", "right", "floated", "mini", "icon", 2, "padding-top", "4vmin", "width", "8%"], [1, "meta", 2, "font-size", "3vmin", "display", "block", "line-height", "1", "color", "black"]], template: function GameOutletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Play and earn regular coins through- out the gameplay. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.gameId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.gameIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gameName);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1jb21wb25lbnRzL2dhbWUtb3V0bGV0L2dhbWUtb3V0bGV0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameOutletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sub-components-game-outlet',
                templateUrl: './game-outlet.component.html',
                styleUrls: ['./game-outlet.component.css']
            }]
    }], function () { return []; }, { gameName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['game-name']
        }], gameIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['game-icon']
        }], gameId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['game-id']
        }] }); })();


/***/ }),

/***/ "./src/app/sub-components/home-boxes/home-boxes.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sub-components/home-boxes/home-boxes.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeBoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBoxesComponent", function() { return HomeBoxesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeBoxesComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeBoxesComponent.ɵfac = function HomeBoxesComponent_Factory(t) { return new (t || HomeBoxesComponent)(); };
HomeBoxesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeBoxesComponent, selectors: [["app-sub-components-home-boxes"]], inputs: { imagePath: ["image-path", "imagePath"], bgColor: ["bg-color", "bgColor"], insideText: ["inside-text", "insideText"], routedTo: ["router-link", "routedTo"] }, decls: 6, vars: 5, consts: [[1, "square-box", 3, "routerLink"], [1, "content-in-box"], [2, "padding-top", "15%"], [2, "width", "45%", "height", "45%", 3, "src"], [1, "f-size-4", "font-roboto", "bold-font-weight", "text-white", 2, "padding-top", "15%"]], template: function HomeBoxesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bgColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.routedTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.insideText, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1jb21wb25lbnRzL2hvbWUtYm94ZXMvaG9tZS1ib3hlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeBoxesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sub-components-home-boxes',
                templateUrl: './home-boxes.component.html',
                styleUrls: ['./home-boxes.component.css']
            }]
    }], function () { return []; }, { imagePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['image-path']
        }], bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['bg-color']
        }], insideText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['inside-text']
        }], routedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['router-link']
        }] }); })();


/***/ }),

/***/ "./src/app/sub-components/redeem-request-modal/redeem-request-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/sub-components/redeem-request-modal/redeem-request-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RedeemRequestModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemRequestModalComponent", function() { return RedeemRequestModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function RedeemRequestModalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ticket ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ticketNo);
} }
class RedeemRequestModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
RedeemRequestModalComponent.ɵfac = function RedeemRequestModalComponent_Factory(t) { return new (t || RedeemRequestModalComponent)(); };
RedeemRequestModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedeemRequestModalComponent, selectors: [["app-sub-components-redeem-request-modal"]], inputs: { imagePath: ["image-src", "imagePath"], successText: ["success-text", "successText"], ticketNo: ["ticket-number", "ticketNo"] }, decls: 6, vars: 3, consts: [[1, "ui", "modal", "square-box", 2, "width", "60%", "border-radius", "5vmin", "background", "rgba(255, 255, 255, 0.86)"], [1, "content-in-box", 2, "border-radius", "5vmin", "text-align", "left", "padding", "5vw", "border", "0.5vmin solid #06BEB6", "box-shadow", "0 0.4vmin 0.4vmin rgba(0, 0, 0, 0.25)"], [1, "ui", "image", 2, "width", "50%", 3, "src"], [1, "bold-font-weight", "f-size-6", "line-height-normal", "font-roboto", 2, "color", "#48B1BF"], ["class", "line-height-normal f-size-4", 4, "ngIf"], [1, "line-height-normal", "f-size-4"]], template: function RedeemRequestModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RedeemRequestModalComponent_div_5_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.successText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ticketNo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".ui.dimmer[_ngcontent-%COMP%] {\n  background-color: rgba(0,0,0,.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLWNvbXBvbmVudHMvcmVkZWVtLXJlcXVlc3QtbW9kYWwvcmVkZWVtLXJlcXVlc3QtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztBQUNuQyIsImZpbGUiOiJzcmMvYXBwL3N1Yi1jb21wb25lbnRzL3JlZGVlbS1yZXF1ZXN0LW1vZGFsL3JlZGVlbS1yZXF1ZXN0LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuZGltbWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDUpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RedeemRequestModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sub-components-redeem-request-modal',
                templateUrl: './redeem-request-modal.component.html',
                styleUrls: ['./redeem-request-modal.component.css']
            }]
    }], function () { return []; }, { imagePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['image-src']
        }], successText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['success-text']
        }], ticketNo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ticket-number']
        }] }); })();


/***/ }),

/***/ "./src/app/wallet-page/wallet-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/wallet-page/wallet-page.component.ts ***!
  \******************************************************/
/*! exports provided: WalletPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageComponent", function() { return WalletPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sub_components_current_balance_current_balance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-components/current-balance/current-balance.component */ "./src/app/sub-components/current-balance/current-balance.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-components/advertisement/advertisement.component */ "./src/app/sub-components/advertisement/advertisement.component.ts");






function WalletPageComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletPageComponent_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeThePanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletPageComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Redeem History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletPageComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transaction History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WalletPageComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletPageComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeThePanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Redeem History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WalletPageComponent {
    constructor() {
        this.transactionSideOn = true;
    }
    ngOnInit() {
    }
    changeThePanel() {
        this.transactionSideOn = !this.transactionSideOn;
    }
}
WalletPageComponent.ɵfac = function WalletPageComponent_Factory(t) { return new (t || WalletPageComponent)(); };
WalletPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletPageComponent, selectors: [["app-wallet-page"]], decls: 128, vars: 6, consts: [[1, "light-to-dark-teal", "go-full-screen-box"], [1, "ui", "container"], [1, "ui", "grid", "p-15"], [1, "row", 2, "height", "9vh"], [1, "five", "wide", "column"], ["src", "assets/images/left-arrow.png", 1, "ui", "icon", 2, "width", "7vmin", 3, "routerLink"], [1, "eleven", "wide", "column", "font-size-5vw", 2, "color", "white", "padding-top", "1.5vmin"], [1, "row"], [1, "sixteen", "wide", "column"], [1, "ui", "card", 2, "border-radius", "3vmin", "width", "100%", "padding-bottom", "40%", "height", "90vh"], [1, "content"], [3, "amount"], [1, "description", 2, "margin-bottom", "8vmin"], ["routerLink", "/redeem", 1, "ui", "fluid", "button", 2, "background", "#48B1BF", "color", "white", "border-radius", "3vmin", "font-size", "4vw"], [1, "description"], [1, "ui", "grid", "plr-10"], [1, "row", 2, "background", "#48B1BF", "padding", "0"], ["class", "seven wide column left floated ui button bold-font-weight off-side", "style", "padding-left: 0; padding-right: 0;", 3, "click", 4, "ngIf"], ["class", "nine wide column text-white on-side", "style", "position: absolute; left: 60%;", 4, "ngIf"], ["class", "ten wide column text-white on-side", "style", "position: absolute;", 4, "ngIf"], ["class", "six wide column right floated ui button font-roboto bold-font-weight off-side", "style", "padding-left: 0; padding-right: 0", 3, "click", 4, "ngIf"], [1, "row", "add-scrolling", "hide-scrollbar", 2, "height", "60vh", "padding-bottom", "30vmin", "border", "solid #C4C4C4", "border-width", "0 0.1em 0.1em 0.1em", "background", "#F8F8F8"], [1, "sixteen", "wide", "column", 2, "padding", "0.5em 0.3em 0 0.3em"], [1, "ui", "grid", 2, "padding", "0 0.2em"], [1, "eleven", "wide", "column", 2, "padding", "0.1em 0 0.1em 1em"], [1, "row", "font-roboto", "f-size-4", "bold-font-weight", 2, "line-height", "1.4"], [1, "row", "font-size-3vw", "font-roboto"], [1, "five", "wide", "right", "aligned", "column", 2, "padding", "1em 1em 1em 0"], [1, "f-size-4", "bolder-font-weight", "font-roboto"], [1, "font-size-3vw", "font-roboto", "bold-font-weight", "pr-5"], ["src", "assets/images/pile-of-coin-icon.png", 1, "ui", "icon", 2, "width", "25%"], [1, "ui", "divider"], [1, "sixteen", "wide", "center", "aligned", "column", "font-size-3vw", 2, "padding", "1em 0"], [1, "seven", "wide", "column", "left", "floated", "ui", "button", "bold-font-weight", "off-side", 2, "padding-left", "0", "padding-right", "0", 3, "click"], [1, "nine", "wide", "column", "text-white", "on-side", 2, "position", "absolute", "left", "60%"], [1, "ten", "wide", "column", "text-white", "on-side", 2, "position", "absolute"], [1, "six", "wide", "column", "right", "floated", "ui", "button", "font-roboto", "bold-font-weight", "off-side", 2, "padding-left", "0", "padding-right", "0", 3, "click"]], template: function WalletPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your Wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-sub-components-current-balance", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Redeem Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WalletPageComponent_div_19_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WalletPageComponent_div_20_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WalletPageComponent_div_21_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WalletPageComponent_div_22_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Daily Spin Bonus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 10 March, 2020 02:45 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ".0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Hourly Spin Bonus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 10 March, 2020 02:45 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "205");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " test ad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Lucky Draw Win ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 10 March, 2020 02:45 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "205");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, ".0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Lucky Jackpot win ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " 10 March, 2020 02:45 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "205");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, ".0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Task Completion Bonus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " 10 March, 2020 02:45 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "205");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ".0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Task Completion Bonus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " 10 March, 2020 02:45 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "205");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, ".0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Task Completion Bonus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " 10 March, 2020 02:45 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "205");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, ".0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "app-sub-components-advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("amount", "197.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.transactionSideOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.transactionSideOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transactionSideOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transactionSideOn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _sub_components_current_balance_current_balance_component__WEBPACK_IMPORTED_MODULE_2__["CurrentBalanceComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sub_components_advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_4__["AdvertisementComponent"]], styles: [".on-side[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 3vw;\n  text-decoration: underline;\n}\n\n.off-side[_ngcontent-%COMP%] {\n  border: 0.1em solid #48B1BF;\n  border-radius: 0;\n  font-weight: bolder;\n  font-size: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0LXBhZ2Uvd2FsbGV0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93YWxsZXQtcGFnZS93YWxsZXQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9uLXNpZGUge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDN2dztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5vZmYtc2lkZSB7XG4gIGJvcmRlcjogMC4xZW0gc29saWQgIzQ4QjFCRjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzdnc7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wallet-page',
                templateUrl: './wallet-page.component.html',
                styleUrls: ['./wallet-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/akrocks/AKRocks/works/#angular/ownWork/website-for-mobile/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map