import { Component, Input, Output, EventEmitter } from '@angular/core';
import { hotelData } from '../../data/interfaz-datos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjetaproducto',
  imports: [CommonModule],
  templateUrl: './tarjetaproducto.component.html',
  styleUrl: './tarjetaproducto.component.css'
})
export class TarjetaproductoComponent {

@Input ({required:true}) hotel!: hotelData;
@Input() isFavorite: boolean = false;

@Output() addFavorite = new EventEmitter<hotelData>();

 onAddFavoriteClick(): void {
    this.addFavorite.emit(this.hotel); // Emite el objeto hotel completo
  }

  getImagen():string {
    const imagePath = `img/${this.hotel.img}`;
    console.log(`Intentando cargar imagen: ${imagePath}`); 
    return imagePath;
  }

  }

