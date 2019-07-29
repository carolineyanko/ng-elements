import { Component, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SimpleComponent {
  @Input() icon = 'arrow';

  @ViewChild('el', { read: ElementRef }) el: ElementRef;

  toggleHelper() {
    this.el.nativeElement.classList.toggle('active');
    const panel = this.el.nativeElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  }
}


// VERSION 1
// import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ElementRef,   HostBinding, HostListener  } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//
// @Component({
//   selector: 'app-simple',
//   templateUrl: './simple.component.html',
//   styleUrls: ['./simple.component.css'],
//   encapsulation: ViewEncapsulation.ShadowDom
// })
// export class SimpleComponent implements OnInit {
//   loginForm: FormGroup;
//
//   @Input('email') emailDefaultValue = '';
//
//   @Output() sendLoginFormValue: EventEmitter<any> = new EventEmitter<any>();
//
//   @HostBinding('attr.selected') isSelected = true;
//
//   @HostListener('click', ['$event'])
//   onHostClick(event) {
//     console.log(
//       'Click on Host Element. IsSelected (attr.selected): ',
//       this.isSelected
//     );
//     console.log('Click on Host Element. $event: ', event);
//   }
//
//
//   constructor(private fb: FormBuilder, private el: ElementRef) {
//     console.log(this.el.nativeElement);
//   }
//
//   ngOnInit() {
//     this.buildLoginForm();
//   }
//
//   onLogin() {
//     console.log(this.loginForm.value);
//     this.sendLoginFormValue.emit(this.loginForm.value);
//   }
//
//   private buildLoginForm() {
//     this.loginForm = this.fb.group({
//       email: [this.emailDefaultValue, Validators.required],
//       password: ['', Validators.required],
//       checkMe: false
//     });
//   }
// }
