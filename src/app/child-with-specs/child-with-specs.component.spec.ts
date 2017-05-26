import { TestBed, async } from '@angular/core/testing';

import { ChildWithSpecsComponent } from './child-with-specs.component';

describe('ChildWithSpecsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChildWithSpecsComponent
      ],
    }).compileComponents();
  }));

  it('should create the ChildWithSpecsComponent', async(() => {
    const fixture = TestBed.createComponent(ChildWithSpecsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'ChildWithSpecsComponent works!'`, async(() => {
    const fixture = TestBed.createComponent(ChildWithSpecsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ChildWithSpecsComponent works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ChildWithSpecsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('ChildWithSpecsComponent works!');
  }));
});
