"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var feature_component_1 = require('./feature/feature.component');
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'feature', component: feature_component_1.FeatureComponent }
];
exports.appRouting = {
    routes: router_1.RouterModule.forRoot(routes),
    components: [home_component_1.HomeComponent, feature_component_1.FeatureComponent]
};

//# sourceMappingURL=app.routing.js.map
