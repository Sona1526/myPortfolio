import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';
import { routes } from './app/app.routes';
import { ApplicationConfig } from '@angular/core';

const bootstrap = () => bootstrapApplication(AppComponent, config);
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withDisabledInitialNavigation()), // Ensures no prerender attempt at start
  ]
};
export default bootstrap;
