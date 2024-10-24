import { NgModule } from '@angular/core';
import { CardinfoComponent } from '../cardinfo/cardinfo.component';
import { RouterModule, Routes } from '@angular/router';
import { BottomComponent } from '../bottom/bottom.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CharacterComponent } from '../character/character.component';
import { NavbarComponent } from '../navbar/navbar.component';

const routes: Routes = [
  { path: 'cardinfo', component: CardinfoComponent },
  { path: 'bottom', component: BottomComponent},
  {path: 'carousel', component:CarouselComponent},
  { path: 'character', component: CharacterComponent},
  { path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
