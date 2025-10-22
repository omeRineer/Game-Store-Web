import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadSpinnerService } from '../services/utils/load-spinner-service';
import { finalize, tap } from 'rxjs';
import { HotToastService } from '@ngxpert/hot-toast';

export const loadSpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const loadSpinnerService = inject(LoadSpinnerService);
  const toastService = inject(HotToastService)

  loadSpinnerService.show();

  return next(req).pipe(
    tap({
      error: (err:HttpErrorResponse)=>{
        toastService.error(err.error.message)
      },
      finalize: ()=>{
         loadSpinnerService.hide()
      }
    }));
};
