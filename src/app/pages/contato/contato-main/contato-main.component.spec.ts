import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoMainComponent } from './contato-main.component';

describe('ContatoMainComponent', () => {
  let component: ContatoMainComponent;
  let fixture: ComponentFixture<ContatoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
