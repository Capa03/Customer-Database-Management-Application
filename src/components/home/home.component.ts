import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerState } from '../../state/home/reducer';
import { clearDb, loadDb, queryDb } from '../../state/home/action';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('logPanel') logPanel!: ElementRef;
  customers$: Observable<CustomerState>;

  constructor(private store: Store<{ customers: CustomerState }>, private snackBar: MatSnackBar) {
    this.customers$ = this.store.select('customers');
  }

  ngOnInit(): void { }

  loadDB() {
    this.store.dispatch(loadDb());
    this.snackBar.open('Loading Database...', 'Close', { duration: 2000 });
  }

  queryDB() {
    this.store.dispatch(queryDb());
    this.snackBar.open('Querying Database...', 'Close', { duration: 2000 });
  }

  clearDB() {
    this.store.dispatch(clearDb());
    this.snackBar.open('Clearing Database...', 'Close', { duration: 2000 });
  }
}
