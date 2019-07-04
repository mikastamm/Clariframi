import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinPropertyComponent } from './bin-property.component';

describe('BinPropertyComponent', () => {
  let component: BinPropertyComponent;
  let fixture: ComponentFixture<BinPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
