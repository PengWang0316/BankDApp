import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-add-account-form',
  templateUrl: './add-account-form.component.html',
  styleUrls: ['./add-account-form.component.css']
})
export class AddAccountFormComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  firstName: string;
  lastName: string;
  initailAmount: number;

  constructor(private accountService: AccountService) { }

  ngOnInit() {}

  handleSubmit() {
    this.accountService.addUser(this.firstName, this.lastName, this.initailAmount).subscribe(id => {
      this.valueChange.emit({ _id: id, firstName: this.firstName, lastName: this.lastName });
      this.firstName = '';
      this.lastName = '';
      this.initailAmount = undefined;
    });
  }

}
