import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
user='pratyush';
check=true;
fun(){
  if (this.check)
    this.check=false
  else
    this.check=true
}

}
