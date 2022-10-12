import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletCollectionComponent } from './outlet-collection.component';

describe('OutletCollectionComponent', () => {
  let component: OutletCollectionComponent;
  let fixture: ComponentFixture<OutletCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
