import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';

export const routes: Routes = [{
    path: '',
    component: ListComponent
}, {
    path: 'create-product',
    loadComponent: () =>
        import('./features/create/create.component').then(
            (m) => m.CreateComponent
        ),
},{
    path: 'edit-product',
    loadComponent: () =>
        import('./features/edit/edit.component').then(
            (m) => m.EditComponent
        ),
}
];
