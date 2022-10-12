import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanCollectionComponent } from './woman-collection.component';

describe('WomanCollectionComponent', () => {
  let component: WomanCollectionComponent;
  let fixture: ComponentFixture<WomanCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomanCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
