import {
  DemoModule,
  BankAccountComponent,
  BankAccountParentComponent,
  LightswitchComponent,
  Child1Component,
  Child2Component,
  Child3Component,
  MasterService,
  ValueService,
  ExternalTemplateComponent,
  InputComponent,
  IoComponent,
  IoParentComponent,
  MyIfComponent,
  MyIfChildComponent,
  MyIfParentComponent,
  NeedsContentComponent,
  ParentComponent,
  TestProvidersComponent,
  TestViewProvidersComponent,
  ReversePipeComponent,
  ShellComponent,
} from './demo';

import { By } from '@angular/platform-browser';
import { Component, DebugElement, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Forms symbols imported only for a specific test below
import { NgModel, NgControl } from '@angular/forms';

import {
  async,
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
  tick,
} from '@angular/core/testing';

import { addMatchers, newEvent, click } from '../testing';

export class NotProvided extends ValueService {
  /* example below */
}
beforeEach(addMatchers);

describe('demo (with TestBed):', () => {
  ////////  Service Tests  /////////////

  describe('ValueService', () => {
    let service: ValueService;

    beforeEach(() => {
      TestBed.configureTestingModule({ providers: [ValueService] });
      service = TestBed.inject(ValueService);
    });

    it('should use ValueService', () => {
      service = TestBed.inject(ValueService);
      expect(service.getValue()).toBe('real value');
    });

    it('can inject a default value when service is not provided', () => {
      service = TestBed.inject(NotProvided, null); // service is null
    });

    it('test should wait for ValueService.getPromiseValue', async(() => {
      service
        .getPromiseValue()
        .then((value) => expect(value).toBe('promise value'));
    }));

    it('test should wait for ValueService.getObservableValue', async(() => {
      service
        .getObservableValue()
        .subscribe((value) => expect(value).toBe('observable value'));
    }));

    // Must use done. See https://github.com/angular/angular/issues/10127
    it('test should wait for ValueService.getObservableDelayValue', (done: DoneFn) => {
      service.getObservableDelayValue().subscribe((value) => {
        expect(value).toBe('observable delay value');
        done();
      });
    });

    it('should allow the use of fakeAsync', fakeAsync(() => {
      let value: any;
      service.getPromiseValue().then((val: any) => (value = val));
      tick(); // Trigger JS engine cycle until all promises resolve.
      expect(value).toBe('promise value');
    }));
  });

  describe('MasterService', () => {
    let masterService: MasterService;
    let valueServiceSpy: jasmine.SpyObj<ValueService>;

    beforeEach(() => {
      const spy = jasmine.createSpyObj('ValueService', ['getValue']);

      TestBed.configureTestingModule({
        // Provide both the service-to-test and its (spy) dependency
        providers: [MasterService, { provide: ValueService, useValue: spy }],
      });
      // Inject both the service-to-test and its (spy) dependency
      masterService = TestBed.inject(MasterService);
      valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<
        ValueService
      >;
    });

    it('#getValue should return stubbed value from a spy', () => {
      const stubValue = 'stub value';
      valueServiceSpy.getValue.and.returnValue(stubValue);

      expect(masterService.getValue()).toBe(
        stubValue,
        'service returned stub value'
      );
      expect(valueServiceSpy.getValue.calls.count()).toBe(
        1,
        'spy method was called once'
      );
      expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(
        stubValue
      );
    });
  });

  describe('use inject within `it`', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ providers: [ValueService] });
    });

    it('should use modified providers', inject(
      [ValueService],
      (service: ValueService) => {
        service.setValue('value modified in beforeEach');
        expect(service.getValue()).toBe('value modified in beforeEach');
      }
    ));
  });

  describe('using async(inject) within beforeEach', () => {
    let serviceValue: string;

    beforeEach(() => {
      TestBed.configureTestingModule({ providers: [ValueService] });
    });

    beforeEach(async(
      inject([ValueService], (service: ValueService) => {
        service.getPromiseValue().then((value) => (serviceValue = value));
      })
    ));

    it('should use asynchronously modified value ... in synchronous test', () => {
      expect(serviceValue).toBe('promise value');
    });
  });

  /////////// Component Tests //////////////////

  describe('TestBed component tests', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [DemoModule],
      })
        // Compile everything in DemoModule
        .compileComponents();
    }));

    it('should create a component with inline template', () => {
      const fixture = TestBed.createComponent(Child1Component);
      fixture.detectChanges();

      expect(fixture).toHaveText('Child');
    });

    it('should create a component with external template', () => {
      const fixture = TestBed.createComponent(ExternalTemplateComponent);
      fixture.detectChanges();

      expect(fixture).toHaveText('from external template');
    });

    it('should allow changing members of the component', () => {
      const fixture = TestBed.createComponent(MyIfComponent);

      fixture.detectChanges();
      expect(fixture).toHaveText('MyIf()');

      fixture.componentInstance.showMore = true;
      fixture.detectChanges();
      expect(fixture).toHaveText('MyIf(More)');
    });

    it('should create a nested component bound to inputs/outputs', () => {
      const fixture = TestBed.createComponent(IoParentComponent);

      fixture.detectChanges();
      const heroes = fixture.debugElement.queryAll(By.css('.hero'));
      expect(heroes.length).toBeGreaterThan(0, 'has heroes');

      const comp = fixture.componentInstance;
      const hero = comp.heroes[0];

      click(heroes[0]);
      fixture.detectChanges();

      const selected = fixture.debugElement.query(By.css('p'));
      expect(selected).toHaveText(hero.name);
    });

    it('can access the instance variable of an `*ngFor` row component', () => {
      const fixture = TestBed.createComponent(IoParentComponent);
      const comp = fixture.componentInstance;
      const heroName = comp.heroes[0].name; // first hero's name

      fixture.detectChanges();
      const ngForRow = fixture.debugElement.query(By.directive(IoComponent)); // first hero ngForRow

      const hero = ngForRow.context.hero; // the hero object passed into the row
      expect(hero.name).toBe(heroName, 'ngRow.context.hero');

      const rowComp = ngForRow.componentInstance;
      // jasmine.any is an "instance-of-type" test.
      expect(rowComp).toEqual(jasmine.any(IoComponent), 'component is IoComp');
      expect(rowComp.hero.name).toBe(heroName, 'component.hero');
    });

    it('should support clicking a button', () => {
      const fixture = TestBed.createComponent(LightswitchComponent);
      const btn = fixture.debugElement.query(By.css('button'));
      const span = fixture.debugElement.query(By.css('span')).nativeElement;

      fixture.detectChanges();
      expect(span.textContent).toMatch(/is off/i, 'before click');

      click(btn);
      fixture.detectChanges();
      expect(span.textContent).toMatch(/is on/i, 'after click');
    });

    // ngModel is async so we must wait for it with promise-based `whenStable`
    it('should support entering text in input box (ngModel)', async(() => {
      const expectedOrigName = 'John';
      const expectedNewName = 'Sally';

      const fixture = TestBed.createComponent(InputComponent);
      fixture.detectChanges();

      const comp = fixture.componentInstance;
      const input = fixture.debugElement.query(By.css('input'))
        .nativeElement as HTMLInputElement;

      expect(comp.name).toBe(
        expectedOrigName,
        `At start name should be ${expectedOrigName} `
      );

      // wait until ngModel binds comp.name to input box
      fixture
        .whenStable()
        .then(() => {
          expect(input.value).toBe(
            expectedOrigName,
            `After ngModel updates input box, input.value should be ${expectedOrigName} `
          );

          // simulate user entering new name in input
          input.value = expectedNewName;

          // that change doesn't flow to the component immediately
          expect(comp.name).toBe(
            expectedOrigName,
            `comp.name should still be ${expectedOrigName} after value change, before binding happens`
          );

          // dispatch a DOM event so that Angular learns of input value change.
          // then wait while ngModel pushes input.box value to comp.name
          input.dispatchEvent(newEvent('input'));
          return fixture.whenStable();
        })
        .then(() => {
          expect(comp.name).toBe(
            expectedNewName,
            `After ngModel updates the model, comp.name should be ${expectedNewName} `
          );
        });
    }));

    // fakeAsync version of ngModel input test enables sync test style
    // synchronous `tick` replaces asynchronous promise-base `whenStable`
    it('should support entering text in input box (ngModel) - fakeAsync', fakeAsync(() => {
      const expectedOrigName = 'John';
      const expectedNewName = 'Sally';

      const fixture = TestBed.createComponent(InputComponent);
      fixture.detectChanges();

      const comp = fixture.componentInstance;
      const input = fixture.debugElement.query(By.css('input'))
        .nativeElement as HTMLInputElement;

      expect(comp.name).toBe(
        expectedOrigName,
        `At start name should be ${expectedOrigName} `
      );

      // wait until ngModel binds comp.name to input box
      tick();
      expect(input.value).toBe(
        expectedOrigName,
        `After ngModel updates input box, input.value should be ${expectedOrigName} `
      );

      // simulate user entering new name in input
      input.value = expectedNewName;

      // that change doesn't flow to the component immediately
      expect(comp.name).toBe(
        expectedOrigName,
        `comp.name should still be ${expectedOrigName} after value change, before binding happens`
      );

      // dispatch a DOM event so that Angular learns of input value change.
      // then wait a tick while ngModel pushes input.box value to comp.name
      input.dispatchEvent(newEvent('input'));
      tick();
      expect(comp.name).toBe(
        expectedNewName,
        `After ngModel updates the model, comp.name should be ${expectedNewName} `
      );
    }));

    it('ReversePipeComp should reverse the input text', fakeAsync(() => {
      const inputText = 'the quick brown fox.';
      const expectedText = '.xof nworb kciuq eht';

      const fixture = TestBed.createComponent(ReversePipeComponent);
      fixture.detectChanges();

      const comp = fixture.componentInstance;
      const input = fixture.debugElement.query(By.css('input'))
        .nativeElement as HTMLInputElement;
      const span = fixture.debugElement.query(By.css('span'))
        .nativeElement as HTMLElement;

      // simulate user entering new name in input
      input.value = inputText;

      // dispatch a DOM event so that Angular learns of input value change.
      // then wait a tick while ngModel pushes input.box value to comp.text
      // and Angular updates the output span
      input.dispatchEvent(newEvent('input'));
      tick();
      fixture.detectChanges();
      expect(span.textContent).toBe(expectedText, 'output span');
      expect(comp.text).toBe(inputText, 'component.text');
    }));

    // Use this technique to find attached directives of any kind
    it('can examine attached directives and listeners', () => {
      const fixture = TestBed.createComponent(InputComponent);
      fixture.detectChanges();

      const inputEl = fixture.debugElement.query(By.css('input'));

      expect(inputEl.providerTokens).toContain(NgModel, 'NgModel directive');

      const ngControl = inputEl.injector.get(NgControl);
      expect(ngControl).toEqual(jasmine.any(NgControl), 'NgControl directive');

      expect(inputEl.listeners.length).toBeGreaterThan(
        2,
        'several listeners attached'
      );
    });

    it('BankAccountComponent should set attributes, styles, classes, and properties', () => {
      const fixture = TestBed.createComponent(BankAccountParentComponent);
      fixture.detectChanges();
      const comp = fixture.componentInstance;

      // the only child is debugElement of the BankAccount component
      const el = fixture.debugElement.children[0];
      const childComp = el.componentInstance as BankAccountComponent;
      expect(childComp).toEqual(jasmine.any(BankAccountComponent));

      expect(el.context).toBe(childComp, 'context is the child component');

      expect(el.attributes.account).toBe(childComp.id, 'account attribute');
      expect(el.attributes.bank).toBe(childComp.bank, 'bank attribute');

      expect(el.classes.closed).toBe(true, 'closed class');
      expect(el.classes.open).toBeFalsy('open class');

      expect(el.styles.color).toBe(comp.color, 'color style');
      expect(el.styles.width).toBe(comp.width + 'px', 'width style');

      // Removed on 12/02/2016 when ceased public discussion of the `Renderer`. Revive in future?
      // expect(el.properties['customProperty']).toBe(true, 'customProperty');
    });
  });

  describe('TestBed component overrides:', () => {
    it("should override ChildComp's template", () => {
      const fixture = TestBed.configureTestingModule({
        declarations: [Child1Component],
      })
        .overrideComponent(Child1Component, {
          set: { template: '<span>Fake</span>' },
        })
        .createComponent(Child1Component);

      fixture.detectChanges();
      expect(fixture).toHaveText('Fake');
    });

    it("should override TestProvidersComp's ValueService provider", () => {
      const fixture = TestBed.configureTestingModule({
        declarations: [TestProvidersComponent],
      })
        .overrideComponent(TestProvidersComponent, {
          remove: { providers: [ValueService] },
          add: {
            providers: [{ provide: ValueService, useClass: FakeValueService }],
          },

          // Or replace them all (this component has only one provider)
          // set:    { providers: [{ provide: ValueService, useClass: FakeValueService }] },
        })
        .createComponent(TestProvidersComponent);

      fixture.detectChanges();
      expect(fixture).toHaveText('injected value: faked value', 'text');

      // Explore the providerTokens
      const tokens = fixture.debugElement.providerTokens;
      expect(tokens).toContain(
        fixture.componentInstance.constructor,
        'component ctor'
      );
      expect(tokens).toContain(TestProvidersComponent, 'TestProvidersComp');
      expect(tokens).toContain(ValueService, 'ValueService');
    });

    it("should override TestViewProvidersComp's ValueService viewProvider", () => {
      const fixture = TestBed.configureTestingModule({
        declarations: [TestViewProvidersComponent],
      })
        .overrideComponent(TestViewProvidersComponent, {
          // remove: { viewProviders: [ValueService]},
          // add:    { viewProviders: [{ provide: ValueService, useClass: FakeValueService }] },

          // Or replace them all (this component has only one viewProvider)
          set: {
            viewProviders: [
              { provide: ValueService, useClass: FakeValueService },
            ],
          },
        })
        .createComponent(TestViewProvidersComponent);

      fixture.detectChanges();
      expect(fixture).toHaveText('injected value: faked value');
    });

    it("injected provider should not be same as component's provider", () => {
      // TestComponent is parent of TestProvidersComponent
      @Component({ template: '<my-service-comp></my-service-comp>' })
      class TestComponent {}

      // 3 levels of ValueService provider: module, TestCompomponent, TestProvidersComponent
      const fixture = TestBed.configureTestingModule({
        declarations: [TestComponent, TestProvidersComponent],
        providers: [ValueService],
      })
        .overrideComponent(TestComponent, {
          set: { providers: [{ provide: ValueService, useValue: {} }] },
        })
        .overrideComponent(TestProvidersComponent, {
          set: {
            providers: [{ provide: ValueService, useClass: FakeValueService }],
          },
        })
        .createComponent(TestComponent);

      let testBedProvider: ValueService;
      let tcProvider: ValueService;
      let tpcProvider: FakeValueService;

      // `inject` uses TestBed's injector
      inject([ValueService], (s: ValueService) => (testBedProvider = s))();
      tcProvider = fixture.debugElement.injector.get(
        ValueService
      ) as ValueService;
      tpcProvider = fixture.debugElement.children[0].injector.get(
        ValueService
      ) as FakeValueService;

      expect(testBedProvider).not.toBe(
        tcProvider,
        'testBed/tc not same providers'
      );
      expect(testBedProvider).not.toBe(
        tpcProvider,
        'testBed/tpc not same providers'
      );

      expect(testBedProvider instanceof ValueService).toBe(
        true,
        'testBedProvider is ValueService'
      );
      expect(tcProvider).toEqual({} as ValueService, 'tcProvider is {}');
      expect(tpcProvider instanceof FakeValueService).toBe(
        true,
        'tpcProvider is FakeValueService'
      );
    });

    it('can access template local variables as references', () => {
      const fixture = TestBed.configureTestingModule({
        declarations: [
          ShellComponent,
          NeedsContentComponent,
          Child1Component,
          Child2Component,
          Child3Component,
        ],
      })
        .overrideComponent(ShellComponent, {
          set: {
            selector: 'test-shell',
            template: `
          <needs-content #nc>
            <child-1 #content text="My"></child-1>
            <child-2 #content text="dog"></child-2>
            <child-2 text="has"></child-2>
            <child-3 #content text="fleas"></child-3>
            <div #content>!</div>
          </needs-content>
          `,
          },
        })
        .createComponent(ShellComponent);

      fixture.detectChanges();

      // NeedsContentComp is the child of ShellComp
      const el = fixture.debugElement.children[0];
      const comp = el.componentInstance;

      expect(comp.children.toArray().length).toBe(
        4,
        'three different child components and an ElementRef with #content'
      );

      expect(el.references.nc).toBe(comp, '#nc reference to component');

      // Filter for DebugElements with a #content reference
      const contentRefs = el.queryAll((de) => de.references.content);
      expect(contentRefs.length).toBe(4, 'elements w/ a #content reference');
    });
  });

  describe('nested (one-deep) component override', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ParentComponent, FakeChildComponent],
      });
    });

    it('ParentComp should use Fake Child component', () => {
      const fixture = TestBed.createComponent(ParentComponent);
      fixture.detectChanges();
      expect(fixture).toHaveText('Parent(Fake Child)');
    });
  });

  describe('nested (two-deep) component override', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          ParentComponent,
          FakeChildWithGrandchildComponent,
          FakeGrandchildComponent,
        ],
      });
    });

    it('should use Fake Grandchild component', () => {
      const fixture = TestBed.createComponent(ParentComponent);
      fixture.detectChanges();
      expect(fixture).toHaveText('Parent(Fake Child(Fake Grandchild))');
    });
  });

  describe('lifecycle hooks w/ MyIfParentComp', () => {
    let fixture: ComponentFixture<MyIfParentComponent>;
    let parent: MyIfParentComponent;
    let child: MyIfChildComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [MyIfChildComponent, MyIfParentComponent],
      });

      fixture = TestBed.createComponent(MyIfParentComponent);
      parent = fixture.componentInstance;
    });

    it('should instantiate parent component', () => {
      expect(parent).not.toBeNull('parent component should exist');
    });

    it('parent component OnInit should NOT be called before first detectChanges()', () => {
      expect(parent.ngOnInitCalled).toBe(false);
    });

    it('parent component OnInit should be called after first detectChanges()', () => {
      fixture.detectChanges();
      expect(parent.ngOnInitCalled).toBe(true);
    });

    it('child component should exist after OnInit', () => {
      fixture.detectChanges();
      getChild();
      expect(child instanceof MyIfChildComponent).toBe(
        true,
        'should create child'
      );
    });

    it("should have called child component's OnInit ", () => {
      fixture.detectChanges();
      getChild();
      expect(child.ngOnInitCalled).toBe(true);
    });

    it('child component called OnChanges once', () => {
      fixture.detectChanges();
      getChild();
      expect(child.ngOnChangesCounter).toBe(1);
    });

    it('changed parent value flows to child', () => {
      fixture.detectChanges();
      getChild();

      parent.parentValue = 'foo';
      fixture.detectChanges();

      expect(child.ngOnChangesCounter).toBe(
        2,
        'expected 2 changes: initial value and changed value'
      );
      expect(child.childValue).toBe(
        'foo',
        'childValue should eq changed parent value'
      );
    });

    // must be async test to see child flow to parent
    it('changed child value flows to parent', async(() => {
      fixture.detectChanges();
      getChild();

      child.childValue = 'bar';

      return new Promise((resolve) => {
        // Wait one JS engine turn!
        setTimeout(() => resolve(), 0);
      }).then(() => {
        fixture.detectChanges();

        expect(child.ngOnChangesCounter).toBe(
          2,
          'expected 2 changes: initial value and changed value'
        );
        expect(parent.parentValue).toBe(
          'bar',
          'parentValue should eq changed parent value'
        );
      });
    }));

    it('clicking "Close Child" triggers child OnDestroy', () => {
      fixture.detectChanges();
      getChild();

      const btn = fixture.debugElement.query(By.css('button'));
      click(btn);

      fixture.detectChanges();
      expect(child.ngOnDestroyCalled).toBe(true);
    });

    ////// helpers ///
    /**
     * Get the MyIfChildComp from parent; fail w/ good message if cannot.
     */
    function getChild() {
      let childDe: DebugElement; // DebugElement that should hold the MyIfChildComp

      // The Hard Way: requires detailed knowledge of the parent template
      try {
        childDe = fixture.debugElement.children[4].children[0];
      } catch (err) {
        /* we'll report the error */
      }

      // DebugElement.queryAll: if we wanted all of many instances:
      childDe = fixture.debugElement.queryAll(
        (de) => de.componentInstance instanceof MyIfChildComponent
      )[0];

      // WE'LL USE THIS APPROACH !
      // DebugElement.query: find first instance (if any)
      childDe = fixture.debugElement.query(
        (de) => de.componentInstance instanceof MyIfChildComponent
      );

      if (childDe && childDe.componentInstance) {
        child = childDe.componentInstance;
      } else {
        fail('Unable to find MyIfChildComp within MyIfParentComp');
      }

      return child;
    }
  });
});
////////// Fakes ///////////

@Component({
  selector: 'child-1',
  template: `Fake Child`,
})
class FakeChildComponent {}

@Component({
  selector: 'child-1',
  template: `Fake Child(<grandchild-1></grandchild-1>)`,
})
class FakeChildWithGrandchildComponent {}

@Component({
  selector: 'grandchild-1',
  template: `Fake Grandchild`,
})
class FakeGrandchildComponent {}

@Injectable()
class FakeValueService extends ValueService {
  value = 'faked value';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
