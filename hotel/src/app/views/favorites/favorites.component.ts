import { Component, OnInit } from '@angular/core';
import { hotelData } from '../../data/interfaz-datos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})


  export class FavoritesComponent implements OnInit {
  favoriteHotels: hotelData[] = [];

  constructor() { } // No se inyectan servicios, se accede directamente a localStorage

  ngOnInit(): void {
    // Al iniciar el componente, carga los favoritos del localStorage
    this.loadFavorites();
  }

  // Carga los hoteles favoritos desde localStorage
  loadFavorites(): void {
    const favorites = localStorage.getItem('favoriteHotels');
    if (favorites) {
      // Si hay datos, los parsea de JSON a un array de hotelData
      this.favoriteHotels = JSON.parse(favorites);
    } else {
      // Si no hay datos, inicializa el array vacío
      this.favoriteHotels = [];
    }
  }

  // Elimina un hotel de la lista de favoritos
  removeFavorite(hotelId: string): void {
    // Filtra la lista para quitar el hotel con el ID dado
    this.favoriteHotels = this.favoriteHotels.filter(hotel => hotel.id !== hotelId);
    // Guarda la lista actualizada de vuelta en localStorage
    localStorage.setItem('favoriteHotels', JSON.stringify(this.favoriteHotels));
    console.log('Hotel eliminado de favoritos:', hotelId);
  }

  // Método para obtener la ruta de la imagen (igual que en TarjetaproductoComponent)
  getImagen(imgName: string): string {
    // Ajusta esta ruta si tus imágenes están en otro lugar (ej: 'assets/images/')
    return `public/${imgName}`;
  }

}
