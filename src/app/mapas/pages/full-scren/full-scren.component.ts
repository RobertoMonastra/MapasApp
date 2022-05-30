import { Component, OnInit } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl';




@Component({
  selector: 'app-full-scren',
  templateUrl: './full-scren.component.html',
  styles: [
  `
  #mapa{
    height: 100%;
    width: 100%;
  }
  `
  ]
})
export class FullScrenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
        container: 'mapa',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-64.18797208643815, -31.422034027894554],
        zoom: 16
})
  }
  
}
