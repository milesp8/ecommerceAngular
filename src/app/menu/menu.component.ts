import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogManagerService } from '../catalog-manager.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private router: Router, public catManager: CatalogManagerService) { }

  ngOnInit(): void {
    document.getElementById('menu').style.display = 'none';
    this.catManager.getCatArr();
  }



}
