import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { CartManagerService } from '../cart-manager.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  catArr: {name: String}[] = [];
  constructor(private appservice: AppServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    document.getElementById('menu').style.display = 'none';
    console.log(this.activatedRoute.snapshot.data.catData);
    const catsObj: any = this.activatedRoute.snapshot.data.catData;

    for (const catInd in catsObj) {
      const item: {name: String} = {
        name: catsObj[catInd].name,
      }
      this.catArr.push(item);
    }
  }

  

}
