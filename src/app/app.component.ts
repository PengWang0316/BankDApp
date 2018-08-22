import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankDApp';
  accounts: object[];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.fetchAllAcount().subscribe(accounts => this.accounts = accounts);
  }

  handleAddUser(newUser) {
    this.accounts.push(newUser);
  }
}
