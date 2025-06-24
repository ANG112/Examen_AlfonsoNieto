import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../component/nav/nav.component';
import { HeaderComponent } from '../../component/header/header.component';
import { TarjetaproductoComponent } from '../../component/tarjetaproducto/tarjetaproducto.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, NavComponent, HeaderComponent, TarjetaproductoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
