import { Component, Input, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoercePixel } from './coerce-pixel.decorator';

@Component({
  selector: 'sesame-coerce-pixel-test',
  template: '<p>test</p>',
})
class TestCoercePixelComponent {
  @CoercePixel @Input() test;
}

@Component({
  template: `
    <ng-container *ngIf="emptyTest; else testTpl">
      <sesame-coerce-pixel-test test></sesame-coerce-pixel-test>
    </ng-container>
    <ng-template #testTpl>
      <sesame-coerce-pixel-test [test]="testValue"></sesame-coerce-pixel-test>
    </ng-template>
  `,
})
class WrapperTestComponent {
  @ViewChild(TestCoercePixelComponent)
  testComponent: TestCoercePixelComponent;
  testValue;
  emptyTest = false;
}

describe(`CoercePixel`, () => {
  let component: WrapperTestComponent;
  let fixture: ComponentFixture<WrapperTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrapperTestComponent, TestCoercePixelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`Empty test`, () => {
    it(`should return an empty string `, () => {
      component.emptyTest = true;
      fixture.detectChanges();
      expect(component.testComponent.test).toEqual('');
    });
  });

  it(`should ignore string values`, () => {
    component.testValue = '16px';
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual('16px');

    component.testValue = '1rem';
    fixture.detectChanges();
    expect(component.testComponent.test).toEqual('1rem');
  });

  it(`should return an empty string for null`, () => {
    component.testValue = null;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual('');
  });

  it(`should return an empty string for undefined`, () => {
    component.testValue = undefined;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual('');
  });

  it(`should add pixel units to a number value`, () => {
    component.testValue = 16;
    fixture.detectChanges();

    expect(component.testComponent.test).toEqual('16px');
  });
});
