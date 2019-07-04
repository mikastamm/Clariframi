import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GridService } from './grid.service';


@Injectable({
  providedIn: 'root'
})
export class AspectRatioService {

  public onWidthChange = new Subject();
  public onHeightChange = new Subject();


  private _width: number = 3;
  public get width(): number {
    return this._width;
  }
  public set width(v: number) {
    this._width = v;
    this.onWidthChange.next(v);
    setTimeout(() => {
      this.gridService.onUpdateLines.next();
    }, 1);
  }


  private _height: number = 5;
  public get height(): number {
    return this._height;
  }
  public set height(v: number) {
    this._height = v;
    this.onHeightChange.next(v);
    setTimeout(() => {
      this.gridService.onUpdateLines.next();
    }, 1);
  }

  public actualHeightPx = 0;
  public actualWidthPx = 0;

  constructor(private gridService: GridService) { }
}
