import { Routes } from '@angular/router';
import {DebugBigComponent} from "./debug/debug-big.component";

export const routes: Routes = [
  {
    path: '',
    component: DebugBigComponent
  },
  {
    path: 'debug/:id',
    component: DebugBigComponent
  },
];
