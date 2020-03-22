import { Component, OnInit } from '@angular/core';
import {ServiceService}from '../../Service/service.service'
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/Modelo/Pelicula';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  peliculas:Pelicula[];
  
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getPeliculas()
    .subscribe(data=>{
      this.peliculas=data;
    })
  }
  Editar(pelicula:Pelicula):void{
    localStorage.setItem("id",pelicula.id.toString());
    this.router.navigate(["edit"]);
  }
}
