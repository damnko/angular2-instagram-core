import { NgModule, ModuleWithProviders } from '@angular/core';
import { FiltersActions } from './actions';
import { FiltersService } from './services';

@NgModule({})
export class Angular2InstagramCoreModule {
  /**
   * @description Use this method in your other (non root) modules to import the services
   * @returns {ModuleWithProviders}
   */
  static forChild(): ModuleWithProviders {
    return {
      ngModule: Angular2InstagramCoreModule,
      providers: [
        FiltersActions,
        FiltersService
      ]
    };
  }
}