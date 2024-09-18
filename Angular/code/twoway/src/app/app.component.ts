import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
name=''  

fun1(e:any)
{
  console.log(e.target.value);
  this.name=e.target.value
}
twoWayInp=''
}
