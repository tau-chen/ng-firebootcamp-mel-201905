import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Observable } from 'rxjs';

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

   companies$: Observable<Company[]>;

  ngOnInit() {

   this.companies$ = this.companySvc.getCompanies();
  }

  deleteCompany(company: Company){
    let a$: Observable<Company> = this.companySvc.deleteCompany(company);

    a$.subscribe(c => this.companies$ = this.getCompanies());
  }

  getCompanies() {
    return this.companySvc.getCompanies();
  }
}
