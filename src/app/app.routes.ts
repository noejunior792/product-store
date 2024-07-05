import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { ProductsService } from './shared/services/products.service';
import { inject } from '@angular/core';

export const routes: Routes = [{
    path: '', 
    resolve:{
        products: () => {
            const productsService = inject(ProductsService)
            return productsService.getAll();
        }
    },
    component: ListComponent
    }, 
{
    path: 'create-product',
    loadComponent: () =>
        import('./features/create/create.component').then(
            (m) => m.CreateComponent
        ),
},{
    path: 'edit-product/:id',
    resolve:{
        product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
            const productService = inject(ProductsService);

            return productService.get(route.paramMap.get('id') as String);
        }
    },
    loadComponent: () =>
        import('./features/edit/edit.component').then(
            (m) => m.EditComponent
        ),
}
];
