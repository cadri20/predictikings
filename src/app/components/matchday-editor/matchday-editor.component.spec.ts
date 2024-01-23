import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchdayEditorComponent } from './matchday-editor.component';

describe('MatchdayEditorComponent', () => {
  let component: MatchdayEditorComponent;
  let fixture: ComponentFixture<MatchdayEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchdayEditorComponent]
    });
    fixture = TestBed.createComponent(MatchdayEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
