import { Component } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public person : any;
  public inSesion : boolean;
  private formNameToShow : any;
  public personName : string;

  public color : string = '#235E3D';
  public hover : boolean = false;

  constructor() {
    this.inSesion = false;
    this.personName = '';
    this.person = {
      name : '',
      email : '',
      password : ''
    };
  }

  public goUp(): void {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }

  public onSubmit(form : any) : void {
    localStorage.setItem('person', JSON.stringify(this.person));
    form.reset();
    this.inSesion = true;
    this.formNameToShow = localStorage.getItem('person');
    this.personName = JSON.parse(this.formNameToShow).name;
  }

  public closeSesion() : void {
    localStorage.clear();
    location.reload();
  }
}
