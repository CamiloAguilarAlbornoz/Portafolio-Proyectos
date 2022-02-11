import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('form input[name="lblBirthDate"]').datepicker({
      dateFormat: 'dd-mm-yy'
    });

    // ERRORES
    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true
    });
  }
}