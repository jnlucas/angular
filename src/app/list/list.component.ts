import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

// service
import { DespesaService }     from '../despesa.service';

// class
import { Despesa }            from '../despesa';

import { currencyRS } from './currency.ts';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  despesas: Despesa[] = new Array();

  constructor(private despesaService: DespesaService, private router: Router) {

  }

  ngOnInit() {
      this.despesas = this.despesaService.findAll();


  }

  add(): void {
    this.router.navigate(['/add'])
  }

  del(id: number): void {
    this.despesaService.delete(id)

    window.location = ""


  }

}
