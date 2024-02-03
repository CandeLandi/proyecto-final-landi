import { Component } from '@angular/core';
import { LoadingService } from './core/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proyecto-final-landi';

  isLoading = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.isLoading$.subscribe({
      next: (v) => {
        setTimeout(() => {
          this.isLoading = v;
        });
      },
    });
  }
}