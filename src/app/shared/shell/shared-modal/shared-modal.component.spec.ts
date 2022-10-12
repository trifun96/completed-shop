import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModalComponent } from './shared-modal.component';

describe('SharedModalComponent', () => {
  let component: SharedModalComponent;
  let fixture: ComponentFixture<SharedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
