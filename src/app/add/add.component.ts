import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
// service
import { DespesaService }     from '../despesa.service';

// class
import { Despesa }            from '../despesa';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  despeas: Despesa;

  constructor(private despesaService: DespesaService, private router: Router) { }

  ngOnInit() {
    this.despesa = new Despesa();

  }

  save(): void {

    this.despesa.id = new Date().getTime();

    this.despesaService.save(this.despesa);

    this.router.navigate(['/list']);
  }

}
