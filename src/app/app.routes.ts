import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { EditorComponent } from './editor/editor.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "docs", component: DocsComponent },
    { path: "editor", component: EditorComponent }
];
