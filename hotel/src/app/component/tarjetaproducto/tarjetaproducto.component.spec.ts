import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaproductoComponent } from './tarjetaproducto.component';

describe('TarjetaproductoComponent', () => {
  let component: TarjetaproductoComponent;
  let fixture: ComponentFixture<TarjetaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaproductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
