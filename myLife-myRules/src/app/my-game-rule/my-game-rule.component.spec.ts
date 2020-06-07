import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGameRuleComponent } from './my-game-rule.component';

describe('MyGameRuleComponent', () => {
  let component: MyGameRuleComponent;
  let fixture: ComponentFixture<MyGameRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGameRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGameRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
