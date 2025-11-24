import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDados } from './livro-dados';

describe('LivroDados', () => {
  let component: LivroDados;
  let fixture: ComponentFixture<LivroDados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroDados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroDados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
