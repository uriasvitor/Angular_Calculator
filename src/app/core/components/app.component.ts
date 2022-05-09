import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  
  prop = [0,1,2,3,4,5,6,7,8,9,"+","-","*","/","Calcular"];
  resultado = "";
}
