import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  providers: [{ provide: Window, useValue: window }],
})
export class HeaderComponent implements OnInit {
  @ViewChild('authForm') authForm?: ElementRef;
  @ViewChild('navbar') navbar?: ElementRef;

  constructor(private renderer2: Renderer2, private window: Window) {}

  ngOnInit(): void {
    this.changePostionNavbar();
  }

  openCloseAuthForm(): void {
    const auth = this.authForm?.nativeElement;
    if (!auth.classList.contains('active')) {
      this.renderer2.addClass(auth, 'active');
    } else {
      this.renderer2.removeClass(auth, 'active');
    }
  }

  @HostListener('window:scroll', ['$event']) onScroll(eventa: any) {
    this.changePostionNavbar();
  }

  changePostionNavbar(): void {
    const navbarScoll = this.navbar?.nativeElement;
    if (this.window.scrollY > 80) {
      this.renderer2.addClass(navbarScoll, 'activate');
    } else {
      this.renderer2.removeClass(navbarScoll, 'activate');
    }
  }
}
