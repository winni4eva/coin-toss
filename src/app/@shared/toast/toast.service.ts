import { Injectable } from '@angular/core';
import { Toaster, ToastType } from 'ngx-toast-notifications';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  duration: number = 4000;

  constructor(private toastr: Toaster) {}

  showInfo(message: any, title: string = 'Info') {
      this.toastr.open(
          {
              text: message,
              caption: title,
              duration: this.duration,
              type: 'info',
              position: 'top-center',
              preventDuplicates: true
          }
      );
  }

  showDanger(message: any, title: string = 'Error') {
      this.toastr.open(
          {
              text: message,
              caption: title,
              duration: this.duration,
              type: 'danger',
              position: 'top-center',
              preventDuplicates: true
          }
      );
  }

  showSuccess(message: any, title: string = 'Success') {
      this.toastr.open(
          {
              text: message,
              caption: title,
              duration: this.duration,
              type: 'success',
              position: 'top-center',
              preventDuplicates: true
          }
      );
  }

  showPrimary(message: any, title: string = 'Notice') {
      this.toastr.open(
          {
              text: message,
              caption: title,
              duration: this.duration,
              type: 'primary',
              position: 'top-center',
              preventDuplicates: true
          }
      );
  }

  showWarning(message: any, title: string = 'Notice') {
    this.toastr.open(
        {
            text: message,
            caption: title,
            duration: this.duration,
            type: 'warning',
            position: 'top-center',
            preventDuplicates: true
        }
    );
  }

  openFixedToast(message: string, type: ToastType = 'info', title: string = 'Info') {
    const toast = this.toastr.open(
      {
        text: message, 
        caption: title,
        autoClose: false,
        type,
        position: 'top-center',
        preventDuplicates: true
      }
    );
  }

  setToastDuration(ms: number) {
    this.duration = ms;
  }
}
