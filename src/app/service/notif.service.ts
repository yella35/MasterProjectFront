import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotifService {

    public options: any;
    public isSmallNotifShown = false;
    private showNotif = new BehaviorSubject<boolean>(this.isSmallNotifShown);
    public shouldShowNotif = this.showNotif.asObservable();

    showHideSmallNotif(opts?) {
        this.showNotif.next(this.isSmallNotifShown = !this.isSmallNotifShown);
        this.options = opts;
    };

    closeNotif() {
        this.showNotif.next(this.isSmallNotifShown = false);
    }

}
