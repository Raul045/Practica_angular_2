import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePerComponent } from './componente-per.component';

describe('ComponentePerComponent', () => {
  let component: ComponentePerComponent;
  let fixture: ComponentFixture<ComponentePerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
