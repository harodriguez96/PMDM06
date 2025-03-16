import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.page.html',
  styleUrls: ['./leaflet.page.scss'],
})
export class LeafletPage implements OnInit {
  private map!: L.Map;
  private cityName: string = 'Madrid';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCoordinates(this.cityName);
  }

  private getCoordinates(city: string) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${city}`;

    this.http.get<any[]>(url).subscribe((data) => {
      if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;
        this.initMap(lat, lon);
      } else {
        console.error('City not found');
      }
    });
  }

  private initMap(lat: number, lon: number): void {
    this.map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([lat, lon]).addTo(this.map)
      .bindPopup(`${this.cityName}`)
      .openPopup();
  }
}
