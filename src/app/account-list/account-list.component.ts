import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @Input() accounts: any[];
  selectedAccount: object;
  selectedBalance: string;

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  onSelect(account: any) {
    this.selectedBalance = null;
    this.selectedAccount = account;
    this.accountService.fetchBalance(account._id).subscribe(balance => this.selectedBalance = balance);
  }

}
