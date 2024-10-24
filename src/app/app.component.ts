import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CardinfoComponent } from "./cardinfo/cardinfo.component";
import { CharacterComponent } from "./character/character.component";
import { BottomComponent } from "./bottom/bottom.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CarouselComponent, CardinfoComponent, CharacterComponent, BottomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Store';
}
