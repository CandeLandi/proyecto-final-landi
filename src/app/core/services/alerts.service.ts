import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import Swal, { SweetAlertOptions } from "sweetalert2";

@Injectable({ providedIn: 'root'})
export class AlertsService {
    private notification$ = new Subject<SweetAlertOptions>();
    
    constructor() {
        this.notification$.subscribe({
            next: (options) => {
                Swal.fire(options);
            },
        });
    }

    showAlert(options: SweetAlertOptions) : void {
        this.notification$.next(options);
    }

    /// Funcion OPTIMIZADA 
    showSucces(title: string, message: string): void {
        this.notification$.next({
            icon: 'success', 
            title,
            text: message,
        });        //Luego los unicos parametros que deberiamos pasar  van a a ser solo el icon y el mensaje que queremos mostrar
    }
    showError(message?: string): void {
        this.notification$.next({
            icon: 'error',
            title: 'Error!',
            text: message,
        });   
    }

}