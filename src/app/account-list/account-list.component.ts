import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';

import { FETCH_BALANCE_API } from '../../UrlApis';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @Input() accounts: object[];
  selectedAccount: object;
  selectedBalance: string;

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  onSelect(account: object) {
    this.selectedBalance = null;
    this.selectedAccount = account;
    this.accountService.fetchBalance(`${FETCH_BALANCE_API}/${account._id}`).subscribe(balance => this.selectedBalance = balance);
  }

}
