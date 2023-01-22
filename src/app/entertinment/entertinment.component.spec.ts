import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertinmentComponent } from './entertinment.component';

describe('EntertinmentComponent', () => {
  let component: EntertinmentComponent;
  let fixture: ComponentFixture<EntertinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertinmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
