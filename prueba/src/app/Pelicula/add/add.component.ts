import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pelicula } from 'src/app/Modelo/Pelicula';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  Guardar(pelicula:Pelicula){
    this.service.createPelicula(pelicula)
    .subscribe(data=>{
      alert("Se agrego con exito");
      this.router.navigate(["listar"]);
    })
  }

}
