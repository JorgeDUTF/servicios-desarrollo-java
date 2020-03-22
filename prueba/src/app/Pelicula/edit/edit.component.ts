import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pelicula } from 'src/app/Modelo/Pelicula';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pelicula:Pelicula=new Pelicula();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonasId(+id)
    .subscribe(data=>{
      this.pelicula=data;
    })
  }
  Actualizar(pelicula:Pelicula){
    this.service.updatePelicula(pelicula)
    .subscribe(data=>{
      this.pelicula=data;
      alert("Se actualizo con exito");
      this.router.navigate(["listar"]);
    })
  }
}
