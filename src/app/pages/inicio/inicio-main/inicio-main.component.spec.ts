import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMainComponent } from './inicio-main.component';

describe('InicioMainComponent', () => {
  let component: InicioMainComponent;
  let fixture: ComponentFixture<InicioMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
