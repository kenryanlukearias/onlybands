import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent,{
  providers: [
      provideRouter(
        routes,
        withInMemoryScrolling({ anchorScrolling: 'enabled' })
      )
    ]

})

  