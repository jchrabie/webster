import { Component, Input, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoerceNumber } from './coerce-number.decorator';

@Component({
  selector: 'sesame-coerce-number-test',
  template: '<p>test</p>',
})
class TestCoerceArrayComponent {
  @CoerceNumber @Input() test;
}

@Component({
  template: `
    <ng-container *ngIf="emptyTest; else testTpl">
      <sesame-coerce-number-test test></sesame-coerce-number-test>
    </ng-container>
    <ng-template #testTpl>
      <sesame-coerce-number-test [test]="testValue"></sesame-coerce-number-test>
    </ng-template>
  `,
})
class WrapperTestComponent {
  @ViewChild(TestCoerceArrayComponent)
  testComponent: TestCoerceArrayComponent;
  testValue;
  emptyTest = false;
}

describe(`CoerceNumber`, () => {
  let component: WrapperTestComponent;
  let fixture: ComponentFixture<WrapperTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrapperTestComponent, TestCoerceArrayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`Empty test`, () => {
    it(`should coerce to 0 `, () => {
      component.emptyTest = true;
      fixture.detectChanges();
      expect(component.testComponent.test).toEqual(0);
    });
  });

  it(`should coerce an array to 0`, () => {
    component.testValue = ['test', 'array'];
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual(0);
  });

  it(`should coerce a string to 0`, () => {
    component.testValue = 'test';
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual(0);
  });

  it(`should coerce an object to 0`, () => {
    component.testValue = { testObj: 'test' };
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(0);
  });

  it(`should coerce booleans to 0`, () => {
    component.testValue = true;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(0);

    component.testValue = false;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(0);
  });

  it(`should coerce an undefined value to 0`, () => {
    component.testValue = undefined;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(0);
  });
  it(`should coerce a null value to 0`, () => {
    component.testValue = null;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(0);
  });

  it(`should coerce coerce the number 10 to 10`, () => {
    component.testValue = 10;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(10);
  });

  it(`should coerce the string “123.456” to 123.456`, () => {
    component.testValue = '123.456';
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual(123.456);
  });
});
