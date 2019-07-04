import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerElementComponent } from './container-element.component';

describe('ContainerElementComponent', () => {
  let component: ContainerElementComponent;
  let fixture: ComponentFixture<ContainerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
