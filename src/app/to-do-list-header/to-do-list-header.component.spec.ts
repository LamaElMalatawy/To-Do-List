import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListHeaderComponent } from './to-do-list-header.component';

describe('ToDoListHeaderComponent', () => {
  let component: ToDoListHeaderComponent;
  let fixture: ComponentFixture<ToDoListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListHeaderComponent]
    });
    fixture = TestBed.createComponent(ToDoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
