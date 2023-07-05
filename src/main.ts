import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomeModule } from './HomeApp/HomeApp.module';



platformBrowserDynamic().bootstrapModule(HomeModule)
  .catch(err => console.error(err));
