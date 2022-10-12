import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth-service';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/core/services/cart-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.css']
})
export class SharedHeaderComponent implements OnInit {
  isLoggedIn: boolean;
  totalItem$: Observable<number> = new Observable<number>();

  constructor(private auth: AuthService, public translate: TranslateService, private cart: CartService) {
    translate.addLangs(['en', 'sr']);
    translate.setDefaultLang('en')
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en | sr/) ? browserLang : 'en');
   }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  this.auth.userDetails?.asObservable().subscribe((userDetails) =>{
    this.isLoggedIn = localStorage.getItem('role') === 'admin'


    this.totalItem$ = this.cart.totalItem$;

  })
  }

    logout(){
      this.isLoggedIn = false;
      this.auth.logout()
    }
}
