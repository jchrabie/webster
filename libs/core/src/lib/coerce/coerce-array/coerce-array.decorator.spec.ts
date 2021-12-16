import { Component, Input, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoerceArray } from './coerce-array.decorator';

@Component({
  selector: 'sesame-coerce-array-test',
  template: '<p>test</p>',
})
class TestCoerceArrayComponent {
  @Input() @CoerceArray test;
}

@Component({
  template: `
    <ng-container *ngIf="emptyTest; else testTpl">
      <sesame-coerce-array-test test></sesame-coerce-array-test>
    </ng-container>
    <ng-template #testTpl>
      <sesame-coerce-array-test [test]="testValue"></sesame-coerce-array-test>
    </ng-template>
  `,
})
class WrapperTestComponent {
  @ViewChild(TestCoerceArrayComponent)
  testComponent: TestCoerceArrayComponent;
  testValue;
  emptyTest = false;
}

describe(`CoerceArray`, () => {
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
    it(`should wrap in an array with an empty string`, () => {
      component.emptyTest = true;
      fixture.detectChanges();
      expect(component.testComponent.test).toEqual(['']);
    });
  });

  it(`should not wrap an array in an array`, () => {
    component.testValue = ['test', 'array'];
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual(['test', 'array']);
  });

  it(`should wrap a string in an array`, () => {
    component.testValue = 'test';
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual(['test']);
  });

  it(`should wrap a number in an array`, () => {
    component.testValue = 0;
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual([0]);
  });

  it(`should wrap an object in an array`, () => {
    component.testValue = { testObj: 'test' };
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual([{ testObj: 'test' }]);
  });
  it(`should wrap an undefined value in an array`, () => {
    component.testValue = undefined;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual([undefined]);
  });
  it(`should wrap a null value in an array`, () => {
    component.testValue = null;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual([null]);
  });
});
