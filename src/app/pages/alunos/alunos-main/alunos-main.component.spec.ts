import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosMainComponent } from './alunos-main.component';

describe('AlunosMainComponent', () => {
  let component: AlunosMainComponent;
  let fixture: ComponentFixture<AlunosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunosMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
