import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompoment } from './home-compoment';

describe('HomeCompoment', () => {
  let component: HomeCompoment;
  let fixture: ComponentFixture<HomeCompoment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCompoment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompoment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
