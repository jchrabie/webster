import { Component, Input, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { coerce } from './coerce';

// eslint-disable-next-line @typescript-eslint/naming-convention
const CoerceTest = coerce((val) =>
  typeof val === 'number' ? val * 2 : 'Not a number'
);

@Component({
  selector: 'sesame-coerce-test',
  template: '<p>test</p>',
})
class TestCoerceComponent {
  @Input() @CoerceTest test;
}

@Component({
  template: ` <sesame-coerce-test [test]="testValue"></sesame-coerce-test> `,
})
class WrapperTestComponent {
  @ViewChild(TestCoerceComponent)
  testComponent: TestCoerceComponent;
  testValue;
  emptyTest = false;
}

describe(`Coerce`, () => {
  let component: WrapperTestComponent;
  let fixture: ComponentFixture<WrapperTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrapperTestComponent, TestCoerceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should coerce a number input value`, () => {
    component.testValue = 10;
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual(20);
  });

  it(`should not coerce other types`, () => {
    component.testValue = 'test';
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual('Not a number');

    component.testValue = true;
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual('Not a number');

    component.testValue = ['test'];
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual('Not a number');

    component.testValue = { val: 'test' };
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual('Not a number');

    component.testValue = null;
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual('Not a number');

    component.testValue = undefined;
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual('Not a number');
  });
});
