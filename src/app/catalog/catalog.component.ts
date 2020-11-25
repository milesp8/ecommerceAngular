import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, AfterViewInit {
  @ViewChild('grid') grid;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    let catalogHtml = '';
    for(let i = 0; i < 20; i++){
      catalogHtml += '<div class="grid-item"><a href="/home"><h3>Product ' + (i + 1) + '</h3><img class=images src=assets/img/new.png alt=Product Image width=200 height=200></a></div>';
    }
    this.renderer.setProperty(this.grid.nativeElement, 'innerHTML', catalogHtml);
  }

}
