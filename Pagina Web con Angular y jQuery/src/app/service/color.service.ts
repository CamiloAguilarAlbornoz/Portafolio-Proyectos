import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public color : string = 'green';

  constructor() { }
}
