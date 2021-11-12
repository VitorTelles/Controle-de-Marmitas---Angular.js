import { Component, OnInit } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [
    new Package('Churrasco', 'Carne de Picanha', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Freceitas.globo.com%2Fpicanha-na-brasa-gnt.ghtml&psig=AOvVaw0BmN3tAq2CdCB2AIRXE3ap&ust=1636741560477000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDt0L73kPQCFQAAAAAdAAAAABAD')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
