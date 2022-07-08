import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbountUsComponent } from './abount-us.component';

describe('AbountUsComponent', () => {
  let component: AbountUsComponent;
  let fixture: ComponentFixture<AbountUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbountUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbountUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
