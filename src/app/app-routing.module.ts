import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInformationComponent } from './form-information/form-information.component';
import { InstructionComponent } from './instruction/instruction.component';

const routes: Routes = [
  { path: "instruction", component: InstructionComponent },
  { path: "form", component: FormInformationComponent },
  { path: "", redirectTo: "instruction", pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
