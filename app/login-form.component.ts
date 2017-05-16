import { Component } from '@angular/core';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login.html'
})
export class LoginComponent {
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
}
