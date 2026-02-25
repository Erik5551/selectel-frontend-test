import { Routes } from "@angular/router";
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { MenuComponent } from "./pages/menu/menu.component";

export const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "menu", component: MenuComponent },
];
