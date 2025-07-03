import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrnaComponent } from './urna.component';

describe('UrnaComponent', () => {
  let component: UrnaComponent;
  let fixture: ComponentFixture<UrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrnaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
