import { enableProdMode } from '@angular/core';
// ブラウザーでアプリを起動するためのAngularの標準関数
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// ルートモジュール
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
