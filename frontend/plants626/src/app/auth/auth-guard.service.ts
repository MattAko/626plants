import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { CartService } from "../CartService.service";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | UrlTree | Promise<boolean> | Observable<boolean | UrlTree> {
    return this.cartService.authorized.pipe(
        take(1),
        map((auth) => {
            console.log(auth)
            if(auth){
                return true;
            }
            return this.router.createUrlTree(['/cart']);
        })
    )   
  }
}
