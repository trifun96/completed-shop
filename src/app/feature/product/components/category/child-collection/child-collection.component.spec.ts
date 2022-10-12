import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCollectionComponent } from './child-collection.component';

describe('ChildCollectionComponent', () => {
  let component: ChildCollectionComponent;
  let fixture: ComponentFixture<ChildCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
