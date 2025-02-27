import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavBarComponent], // Importar o componente standalone
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the correct route when navigateTo is called', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const route = 'mfe1';
    component.navigateTo(route);
    expect(navigateSpy).toHaveBeenCalledWith([route]);
  });

  it('should render the navigation bar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
  });

  it('should have a link with text "MFE-1"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a.cursor-pointer');
    expect(link?.textContent).toContain('MFE-1');
  });

  it('should call navigateTo with "mfe1" when MFE-1 link is clicked', () => {
    const navigateSpy = spyOn(component, 'navigateTo');
    const link = fixture.debugElement.query(By.css('a.cursor-pointer'));
    link.triggerEventHandler('click', null);
    expect(navigateSpy).toHaveBeenCalledWith('mfe1');
  });
});