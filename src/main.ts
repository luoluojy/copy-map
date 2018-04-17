import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';
if (environment.production) {
  enableProdMode();
}

window['CESIUM_BASE_URL'] = environment.cesium_base_href;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
