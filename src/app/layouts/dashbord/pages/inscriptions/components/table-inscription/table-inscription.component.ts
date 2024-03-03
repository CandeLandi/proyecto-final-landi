import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../../../../core/services/loading.service copy';
import { Inscription } from '../../store/models';
import { InscriptionsService } from '../../inscriptions.service';

@Component({
  selector: 'app-table-inscription',
  templateUrl: './table-inscription.component.html',
  styleUrl: './table-inscription.component.scss'
})
export class TableInscriptionComponent implements OnInit {
  displayedColumns = ['userId', 'courseId']
  datasource: Inscription[] = [];
  isLoading: boolean = false;
  
  constructor( private inscriptionsService: InscriptionsService) { }

  ngOnInit(): void {
    this.getInscriptions()
 }

 getInscriptions() {
   this.isLoading = true;
   this.inscriptionsService.getInscriptions().subscribe(
     (response: any) => {
      console.log(response)
       this.datasource = response;
       this.isLoading = false;          
     }
   )
 }

}
