import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
    constructor(){
      this.createToastContainer();
    }

    private createToastContainer(){
      if(!document.getElementById('toast-container')){
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast toast-bottom toast-end'
        document.body.appendChild(container)
      }
    }
    private CreateToastelement(message: string, alertClass: string, duration = 7000){
      const toastContainer = document.getElementById('toast-container');
      if(!toastContainer) return;

      const toast = document.createElement('div');
      toast.classList.add('allert', alertClass, 'shadow-lg','text-rose-950');
      toast.innerHTML = `
          <span>${message}</span>
          <button class="ml-3 btn btn-md btn-ghost">x</button>
          `
      toast?.querySelector('button')?.addEventListener('click',()=>{
        toastContainer.removeChild(toast);
      })  
      toastContainer.append(toast);
      
      setTimeout(()=>{
        if(toastContainer.contains(toast)){
          toastContainer.removeChild(toast);
        }
      },duration)
    }

    success(message:string, duration?:number){
      this.CreateToastelement(message, 'alert-success', duration);
    }

    error(message:string, duration?:number){
      this.CreateToastelement(message, 'alert-error', duration);
    }

    warning(message:string, duration?:number){
      this.CreateToastelement(message, 'alert-warning', duration);
    }

    info(message:string, duration?:number){
      this.CreateToastelement(message, 'alert-info', duration);
    }
}
