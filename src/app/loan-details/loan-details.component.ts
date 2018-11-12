import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loandetail } from '../loandetail';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  title = '';
  fullName = '';
  amount = '';
  scheme = '';
  expectedDate = '';
  loanDetails = [];
  
  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.loanDetails = this.localStorageService.get('obj');
    this.title = 'loan details works!';
  }

}

