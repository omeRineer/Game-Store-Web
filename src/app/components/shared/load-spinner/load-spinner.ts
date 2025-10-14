import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadSpinnerService } from '../../../services/utils/load-spinner-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-load-spinner',
  imports: [AsyncPipe],
  templateUrl: './load-spinner.html',
  styleUrl: './load-spinner.css'
})
export class LoadSpinner {
  loading$:Observable<boolean>

  constructor(private loadSpinnerService:LoadSpinnerService) {
    this.loading$ = loadSpinnerService.$loading;
  }
}
