import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  customInputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customInputForm = this.formBuilder.group(
      {
        email: [''],
        fullname: ['Bill Gates'],
        phone: [{
          value: '0497 88 88 88',
          disabled: true
        }]
      },
      // Uncomment to test `registerOnTouched`
      // { validator: { updateOn: 'blur' } }
    );
  }
}
