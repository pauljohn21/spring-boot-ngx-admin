import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
    // .. here goes our components routes
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent, // <---
            },
            {
                path: 'logout',
                component: LogoutComponent, // <---
            },
            {
                path: 'register',
                component: RegisterComponent, // <---
            },
            {
                path: 'request-password',
                component: RequestPasswordComponent, // <---
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent, // <---
            },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
