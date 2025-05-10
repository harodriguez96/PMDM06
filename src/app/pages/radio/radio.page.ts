import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RadioService } from 'src/app/servicios/radio.service';



@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  stations: any[] = [];
  countries: string[] = [];

  country = null;

  constructor(private http: HttpClient, private radio: RadioService) {}

  ngOnInit() {
    this.loadCountries();

  }

  loadCountries() {
    this.radio.getCountries().subscribe({
      next: (data: any[]) => {
        this.countries = data.map(c => c.name);
      },
      error: err => {
        console.error('Error al cargar países', err);
      }
    });
  }
  

  selectCountry(name: string) {
    this.country = name;
    console.log(this.country);
  
    this.radio.loadStations(name).subscribe({
      next: stations => {
        this.stations = stations.slice(0, 10); // Limit to 10 stations here
      },
      error: err => {
        console.error('Error al cargar estaciones', err);
      }
    });
  }
  play(station: any) {
    this.radio.play(station.url_resolved);
  }

  stop() {
    this.radio.stop();
  }



}
