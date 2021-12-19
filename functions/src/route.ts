import { Application } from "express";
import { listMenu } from "./controllers/menu_controllers";

export function routeMenu(app: Application){
    app.get('/api/menu',listMenu);
}