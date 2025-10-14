import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadSpinnerService } from '../services/utils/load-spinner-service';
import { finalize } from 'rxjs';

export const loadSpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const loadSpinnerService = inject(LoadSpinnerService);

  loadSpinnerService.show();

  return next(req).pipe(finalize(()=> loadSpinnerService.hide()));
};
