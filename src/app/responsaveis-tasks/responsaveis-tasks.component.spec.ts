import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsaveisTasksComponent } from './responsaveis-tasks.component';

describe('ResponsaveisTasksComponent', () => {
  let component: ResponsaveisTasksComponent;
  let fixture: ComponentFixture<ResponsaveisTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsaveisTasksComponent]
    });
    fixture = TestBed.createComponent(ResponsaveisTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
