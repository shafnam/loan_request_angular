import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loandetail } from '../loandetail';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  constructor(private router: Router, private localStorageService: LocalStorageService, private fb: FormBuilder) {
    this.loanForm.controls['loanType'].setValue(this.loanTypes[0], { onlySelf: true });
    this.loanForm.controls['scheme'].setValue(this.schemes[0], { onlySelf: true });
  }

  loanTypes: string[] = ['Housing Loan', 'Personal Loan'];
  schemes: string[] = ['6 Months', '12 Months'];
  submitted: boolean = false;

  loanForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(6)]],
    amount: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    scheme: [''],
    expectedDate: [''],
    loanType: [''],
    remarks: ['']
  });
  loandetailObj: loandetail = null;

  ngOnInit() { }

  get f() { return this.loanForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loanForm.invalid) {
      return;
    }
    console.warn(this.loanForm.value);
    this.loandetailObj = this.loanForm.value;
    this.loandetailObj.status = 'pending';
    let dataArr: loandetail[] = this.localStorageService.get('obj');
    if (dataArr == null) {
       dataArr = [];
     }
     dataArr.push(this.loandetailObj);
    this.localStorageService.set('obj', dataArr);
    this.router.navigate(['loan-details']);
  }

}

