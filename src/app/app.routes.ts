import { Routes } from '@angular/router';
import {Homepage} from './components/homepage/homepage';
import {Products} from './components/products/products';
import {Team} from './components/team/team';
import {Contacts} from './components/contacts/contacts';

export const routes: Routes = [
  {path:"", component:Homepage},
  {path:"products", component:Products},
  {path:"team", component:Team},
  {path:"contacts", component:Contacts}
];
