import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowChildComponent } from './shadow-child.component';

describe('ShadowChildComponent', () => {
  let component: ShadowChildComponent;
  let fixture: ComponentFixture<ShadowChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
