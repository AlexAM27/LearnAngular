import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  forbiddenProjectName = 'Test';

  dataForm: FormGroup;

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)]),
      'email': new FormControl(null, [Validators.email], this.emailIsNotEmpty),
      'status': new FormControl('stable'),
    })
  }

  forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenProjectName === control.value) {
      return {'nameisForbidden': true};
    }
    return null;
  }

  emailIsNotEmpty(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {       
        if (!control.value) {          
          resolve({'emailsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmitProject() {
    console.log(this.dataForm);
  }

}
