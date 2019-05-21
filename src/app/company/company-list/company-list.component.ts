import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { tap } from 'rxjs/operators' ;

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  //private companyService: CompanyService;

  constructor(private companySvc: CompanyService) {
    //this.companyService = companySvc;
   }

   companies: Company[];

  ngOnInit() {

   this.companySvc.getCompanies()
   .pipe(
     tap(c => console.log('Tap got ' + c.length + ' companies'))
   )
   .subscribe(
     next => this.companies = next,
    error => console.error('ERROR', error),
    () => console.log('Complete')
    );
  }
}
