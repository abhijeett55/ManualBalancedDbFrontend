import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partition } from './partition';

describe('Partition', () => {
  let component: Partition;
  let fixture: ComponentFixture<Partition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Partition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Partition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
