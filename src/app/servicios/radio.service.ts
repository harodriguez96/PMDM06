import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  private audio = new Audio();
  private apiUrl = 'https://de1.api.radio-browser.info/json/countries';

  constructor(private http: HttpClient) { }
  play(url: string) {
    this.audio.src = url;
    this.audio.load();
    this.audio.play().catch(err => {
      console.error('Error al reproducir:', err);
    });
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  getCountries(){
    return this.http.get(this.apiUrl);
  }

  loadStations(country: string) {
    const url = `https://de1.api.radio-browser.info/json/stations/bycountry/${country}`;
    return this.http.get<any[]>(url);
  }
}
