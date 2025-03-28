import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.page.html',
  styleUrls: ['./leaflet.page.scss'],
})
export class LeafletPage implements OnInit {
  private map!: L.Map;
  private ciudadA: string = 'Madrid';
  private ciudadB: string = 'Toledo';

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    try {
        const coordinatesCityA = await this.getCoordinates(this.ciudadA);
        const coordinatesCityB = await this.getCoordinates(this.ciudadB);
        this.initMap(coordinatesCityA, coordinatesCityB);
    } catch (error) {
        console.error('Error:', error);
    }
}


    private getCoordinates(city: string): Promise<[number, number] | null> {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${city}`;

      return new Promise((resolve) => {
          this.http.get<any[]>(url).subscribe(
              (data) => {
                  if (data.length > 0) {
                      const lat = parseFloat(data[0].lat);
                      const lon = parseFloat(data[0].lon);
                      resolve([lat, lon]);
                  } else {
                      console.error('Ha habido un error');
                      resolve(null);
                  }
              }
          );
      });
  }


  private initMap(puntoA: [number, number], puntoB: [number, number]): void {
    this.map = L.map('map').setView(puntoA, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker(puntoB).addTo(this.map)
      .bindPopup(`${this.ciudadB}`)
      .openPopup();

    L.Routing.control({
        waypoints: [
            L.latLng(puntoA[0], puntoA[1] ),
            L.latLng(puntoB[0], puntoB[1])
        ],
        lineOptions: {
          styles: [{ color: 'blue', weight: 4 }],
          extendToWaypoints: true,  // Add this line
          missingRouteTolerance: 10 // Add this line (the value can be adjusted as needed)
        },
        routeWhileDragging: true,
        show: false // Hide the instructions
    }).addTo(this.map);
  }
}