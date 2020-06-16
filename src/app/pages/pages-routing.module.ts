import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'main-page', component: MainPageComponent },
  {
    path: 'auth',
    loadChildren: () => import(`./auth/auth.module`).then((m) => m.AuthModule),
  },
  {
    path: 'test-mode',
    loadChildren: () =>
      import(`./crud-test/crud-test.module`).then((m) => m.CrudTestModule),
  },
  {
    path: 'doc',
    loadChildren: () =>
      import(`./angular-doc/angular-doc.module`).then(
        (m) => m.AngularDocModule
      ),
  },
  { path: '**', component: SigninComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// // Use RouterModule, Routes for activating routing in angular
// import { RouterModule, Routes } from '@angular/router';

// // Include components for in which router service to be used
// import { AddStudentComponent } from './shared/add-student/add-student.component';
// import { StudentListComponent } from './shared/student-list/student-list.component';
// import { EditStudentComponent } from './shared/edit-student/edit-student.component';

// // Routes array define component along with the path name for url
// const routes: Routes = [
//   { path: '', redirectTo: '/register-student', pathMatch: 'full' },
//   { path: 'register-student', component: AddStudentComponent },
//   { path: 'view-students', component: StudentListComponent },
//   { path: 'edit-student/:id', component: EditStudentComponent },
// ];

// // Import RouterModule and inject routes array in it and dont forget to export the RouterModule
// @NgModule({
//   imports: [CommonModule, RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   declarations: [],
// })
// export class AppRoutingModule {}
