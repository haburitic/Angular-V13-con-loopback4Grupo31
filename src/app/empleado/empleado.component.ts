import { Component, OnInit } from '@angular/core';
import { Empleado } from '../model/empleado';
import { EmpleadoService } from '../service/empleado.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  constructor(
    private empleadoService:EmpleadoService,
    private tokenService:TokenService
  ) { }

  ngOnInit(): void {
    this.consultarTodo();
  }

  listaEmpleados: Empleado[]=[];

  consultarTodo():void{
    this.empleadoService.consultarTodo().subscribe({
      next:(data:Empleado[])=>{
        this.listaEmpleados=data;
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("complete");

      }
    });
  }

  eliminar(id:any):void{
    this.empleadoService.eliminar(id).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("complete");
        this.consultarTodo();
      }
    });
  }

  calcular(){
    console.log(this.metodoQueHaceAlgo(5))

  }

  metodoQueHaceAlgo(num: number):number{
    if(num<3){
      return num;
    }
    const val1=this.metodoQueHaceAlgo(num-1);
    console.log("val1 -->"+val1 )
    const val2=this.metodoQueHaceAlgo(num-2);
    console.log("val2 -->"+val2 )
    const m=val1*val2;
    console.log("m -->"+m )

    return m;
  }

  dividir( ):void{
    for (let i = 0; i < 28; i++) {
      let suma = 0;
      for(let j = 1;j < i;j++){    // j son los divisores. Se divide desde 1 hasta i-1
           if(i % j==0){
              suma = suma + j; // si es divisor se suma
              console.log(suma);
           }
    }
    console.log(suma);

  }


}
}

