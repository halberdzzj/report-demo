import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModuleLoginPage } from './module-login';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ModuleLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ModuleLoginPage),
    // ComponentsModule
  ],
})
export class ModuleLoginPageModule {}
