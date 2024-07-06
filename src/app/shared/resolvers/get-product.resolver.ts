import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProductsService } from "../services/products.service";
import { inject } from "@angular/core";

export const getProduct =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const productService = inject(ProductsService);

        return productService.get(route.paramMap.get('id') as String);
    }
