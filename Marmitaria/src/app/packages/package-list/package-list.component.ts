import { Component, OnInit } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [
    new Package('Churrasco', 'Carne de Picanha', 'https://frigorificoarvoredo.com.br/blog/wp-content/uploads/2018/09/picanha.jpg'),
    new Package('Churrasco', 'Carne de Picanha', 'https://frigorificoarvoredo.com.br/blog/wp-content/uploads/2018/09/picanha.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
