import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  @Input() account: object;
  @Input() balance: string;
  depositAmount: number;
  withdrawAmount: number;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  handleDeposit() {
    this.accountService.deposit(this.account._id, this.depositAmount).subscribe(() => {
      this.depositAmount = undefined;
      this.accountService.fetchBalance(this.account._id).subscribe(balance => this.balance = balance);
    });
  }

  handleWithdraw() {
    this.accountService.withdraw(this.account._id, this.withdrawAmount).subscribe(() => {
      this.withdrawAmount = undefined;
      this.accountService.fetchBalance(this.account._id).subscribe(balance => this.balance = balance);
    });
  }
}
