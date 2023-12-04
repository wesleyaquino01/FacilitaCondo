import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  hide = true;
  valorService: any;

  constructor(){
  //   this.getMoradores().subscribe({
  //     next: value => {
  //       this.valorService = value
  //       console.log(value)
  //     },
  //     error: err => console.error('Observable emitted an error: ' + err),
  //     complete: () => console.log('Observable emitted the complete notification')
  //   });
  //
}

}
