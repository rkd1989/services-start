import { Component} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers : [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // @ts-ignore
  constructor(private  logService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string
      ) => alert("New status is --> " + status));
  }
  onCreateAccount(accountName: string, accountStatus: string) {
   /* this.accountAdded.emit({
      name: accountName,
      status: accountStatus

    });*/
    this.accountsService.addAccount(accountName, accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    //this.logService.logStatusChange(accountStatus);
  }
}
