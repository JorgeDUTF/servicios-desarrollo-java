
package com.exam.prueba;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="https://localhost:4200", maxAge=3600)
@RestController
@RequestMapping({"/peliculas"})

public class Controlador {
    
    @Autowired
    PeliculaService service;
    
    @GetMapping
    public List<Pelicula>listar(){
        return service.listar();
    }
    @PostMapping
    public Pelicula agregar(@RequestBody Pelicula p){
        return service.add(p);
    }
    @GetMapping(path = {"/(id)"})
    public Pelicula listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    @PutMapping(path = {"/(id)"})
    public Pelicula editar(@RequestBody Pelicula p,@PathVariable("id")int id){
        p.setId(id);
        return service.edit(p);
    }
}
