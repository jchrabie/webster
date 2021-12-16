import { Component, Input, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoerceBoolean } from './coerce-boolean.decorator';

@Component({
  selector: 'sesame-coerce-boolean-test',
  template: '<p>test</p>',
})
class TestCoerceBooleanComponent {
  @Input() @CoerceBoolean test;
}

@Component({
  template: `
    <ng-container *ngIf="emptyTest; else testTpl">
      <sesame-coerce-boolean-test test></sesame-coerce-boolean-test>
    </ng-container>
    <ng-template #testTpl>
      <sesame-coerce-boolean-test
        [test]="testValue"
      ></sesame-coerce-boolean-test>
    </ng-template>
  `,
})
class WrapperTestComponent {
  @ViewChild(TestCoerceBooleanComponent)
  testComponent: TestCoerceBooleanComponent;
  testValue;
  emptyTest = false;
}

describe(`CoerceBoolean`, () => {
  let component: WrapperTestComponent;
  let fixture: ComponentFixture<WrapperTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrapperTestComponent, TestCoerceBooleanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`Empty test`, () => {
    it(`should coerce to true`, () => {
      component.emptyTest = true;
      fixture.detectChanges();
      expect(component.testComponent.test).toEqual(true);
    });
  });

  it(`should coerce the empty string to true`, () => {
    component.testValue = '';
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual(true);
  });

  it(`should coerce zero, object, array to true`, () => {
    component.testValue = 0;
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual(true);

    component.testValue = { testObj: 'test' };
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual(true);

    component.testValue = ['test', 'array'];
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual(true);
  });

  it(`should coerce null to false`, () => {
    component.testValue = null;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(false);
  });

  it(`should coerce undefined to false`, () => {
    component.testValue = undefined;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(false);
  });

  it(`should coerce the string "false" to false`, () => {
    component.testValue = 'false';
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(false);
  });
});
