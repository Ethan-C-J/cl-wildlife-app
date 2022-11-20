import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideRouter, Routes } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

const routes = [
  {
    path: 'feedback-and-chat',
    loadComponent: () => import('./app/feedback-and-chat/feedback-and-chat.component').then(c => c.FeedbackAndChatComponent),
  }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));



