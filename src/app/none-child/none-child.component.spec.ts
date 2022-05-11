import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneChildComponent } from './none-child.component';

describe('NoneChildComponent', () => {
  let component: NoneChildComponent;
  let fixture: ComponentFixture<NoneChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
