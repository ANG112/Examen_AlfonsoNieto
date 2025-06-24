import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../component/nav/nav.component';
import { HeaderComponent } from '../../component/header/header.component';
import { TarjetaproductoComponent } from '../../component/tarjetaproducto/tarjetaproducto.component';
import { hotelData } from '../../data/interfaz-datos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet, NavComponent, HeaderComponent, TarjetaproductoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  hotels: hotelData[] = [];
  favoriteHotelIds: Set<string> = new Set(); // Usamos un Set para búsquedas rápidas

  ngOnInit(): void {
    // Cargar hoteles (ejemplo con datos mock)
    this.hotels = [
      { id: '1', img: 'hotel1.jpg', nombre: 'Hotel Central', descripcion: 'Descripción del hotel 1', ubicacion: 'Centro Ciudad', precionoche: 100 },
      { id: '2', img: 'hotel2.jpg', nombre: 'Hotel Vista Mar', descripcion: 'Descripción del hotel 2', ubicacion: 'Frente al Mar', precionoche: 150 },
      { id: '3', img: 'hotel3.jpg', nombre: 'Hotel Montaña', descripcion: 'Descripción del hotel 3', ubicacion: 'Zona Rural', precionoche: 80 },
      { id: '4', img: 'hotel4.jpg', nombre: 'Hotel Sol y Arena', descripcion: 'Un lugar perfecto para relajarse.', ubicacion: 'Playa del Carmen', precionoche: 220 },
    ];

    // Cargar favoritos desde localStorage al iniciar
    this.loadFavoritesFromLocalStorage();
  }

  private loadFavoritesFromLocalStorage(): void {
    const favorites = localStorage.getItem('favoriteHotels');
    if (favorites) {
      const parsedFavorites: hotelData[] = JSON.parse(favorites);
      this.favoriteHotelIds = new Set(parsedFavorites.map(hotel => hotel.id));
    }
  }

  private saveFavoritesToLocalStorage(favorites: hotelData[]): void {
    localStorage.setItem('favoriteHotels', JSON.stringify(favorites));
  }

  onHotelAddedToFavorites(hotel: hotelData): void {
    let currentFavorites: hotelData[] = [];
    const storedFavorites = localStorage.getItem('favoriteHotels');

    if (storedFavorites) {
      currentFavorites = JSON.parse(storedFavorites);
    }

    // Asegurarse de que no se añadan duplicados
    if (!currentFavorites.some(fav => fav.id === hotel.id)) {
      currentFavorites.push(hotel);
      this.saveFavoritesToLocalStorage(currentFavorites);
      this.favoriteHotelIds.add(hotel.id); // Actualizar el Set para la UI
      console.log('Hotel añadido a favoritos:', hotel.nombre);
    } else {
      console.log('El hotel ya está en favoritos:', hotel.nombre);
    }
  }

  checkIfFavorite(hotelId: string): boolean {
    return this.favoriteHotelIds.has(hotelId);
  }
}
