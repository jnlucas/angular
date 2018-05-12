import { Injectable } from '@angular/core';
import {Despesa} from './despesa';

// localStorage Service
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable({
  providedIn: 'root'
})
export class DespesaService {
    private despesas: Despesa[] = new Array();
  constructor(private lss: LocalStorageService) { }

  getDb(): void {
    this.despesas = [];
    if (this.lss.get("despesas") != null)
    {
      this.despesas = <Despesa[]> JSON.parse(<string>this.lss.get("despesas"));
    }

  }

  public findAll(): Despesa[] {
    this.getDb();
    return this.despesas

  }

  save( despesa: Despesa ): void {
     this.getDb();
     this.despesas.push(despesa);
     this.lss.set("despesas",JSON.stringify(this.despesas))

  }

  delete (id: number){
    this.getDb();
    for(let i = 0; i <= this.despesas.length; i ++ ){
      if(this.despesas[i].id == id){
        this.despesas.splice(i, 1);
      }
    }
    this.lss.set("despesas",JSON.stringify(this.despesas))

  }

}
