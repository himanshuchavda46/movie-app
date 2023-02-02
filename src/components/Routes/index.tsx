import React from "react";
import { Route, Routes } from "react-router-dom";
import {IAppRoute} from "../../router";
import {routes} from "../../router";

function renderRoutes(routes: IAppRoute[]) {
    return routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />}>
            {route.children && renderRoutes(route.children)}
        </Route>
    ));
}
function RenderRoutes(){
    console.log("hellp")
    return <Routes>{renderRoutes(routes)}</Routes>
}

export default RenderRoutes;
