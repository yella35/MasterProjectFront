import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from '../../service/authentification.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    model: any = {};
    loading = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authService: AuthentificationService) {
    }


    /**
     * FIRST WE CHECK IF USER IS ALREADY LOGGED IN
     */
    ngOnInit() {
        const obs: Observable<boolean> = this.authService.activeSession();
        obs.subscribe(
            (res: boolean) => {
                if (res) {
                    this.router.navigate(['/welcome']);
                    return;
                } else {
                    this.router.navigate(['/login']);
                }
            },
            (err) =>  this.router.navigate(['/unavailable'])
        );
    }

    login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(
                response => {
                    console.log(response);
                    this.loading = false;
                    this.router.navigateByUrl('/myAdmin');
                },
                error => {
                    this.loading = false;
                    console.error(error);
                    const options = {
                        title: 'Erreur',
                        position: 'bottom center',
                        animation: 'animated fadeInUp',
                        outAnimation: 'animated fadeOutDown',
                        duration: '4',
                        custom_class: 'error',
                        content_text: 'Adresse email au mot de passe incorrect'
                    };
                    this.loading = false;
                });
    }
}
