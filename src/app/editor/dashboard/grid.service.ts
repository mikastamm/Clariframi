import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  public spacing: number = 10;
  public onUpdateLines = new Subject();

  constructor() { }

  public getSpacing(): number {
    return this.spacing;
  }
}
