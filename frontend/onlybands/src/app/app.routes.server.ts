import { RenderMode, ServerRoute } from '@angular/ssr';
import { RegisterPageComponent } from './register/register-page/register-page.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },

];
  