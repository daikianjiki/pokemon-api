import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeApiService } from './poke-api.service.component';

describe('PokeApiServiceComponent', () => {
  let component: PokeApiService;
  let fixture: ComponentFixture<PokeApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeApiService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
