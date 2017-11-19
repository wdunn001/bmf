import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuilderComponent } from "./builder/builder.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "builder"
  },
  { path: "builder", component: BuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
