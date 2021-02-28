import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit  {
  constructor() {}

async ngAfterViewInit() {
  await this.loadScript('../assets/js/main.js');
}

private loadScript(scriptUrl: string) {
  return new Promise((resolve, reject) => {
  const scriptElement = document.createElement('script');
  scriptElement.src = scriptUrl;
  scriptElement.onload = resolve;
  document.body.appendChild(scriptElement);
 });
}
}
