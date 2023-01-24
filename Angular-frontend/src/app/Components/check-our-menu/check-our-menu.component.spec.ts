import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOurMenuComponent } from './check-our-menu.component';

describe('CheckOurMenuComponent', () => {
  let component: CheckOurMenuComponent;
  let fixture: ComponentFixture<CheckOurMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOurMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOurMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
