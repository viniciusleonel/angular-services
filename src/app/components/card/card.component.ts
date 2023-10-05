import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  pokemon?:PokemonData
  name:string = "Charmander"
  attributesTypes:string[] = ['Fire', 'Flying']

  constructor (
    private service:PokemonService
  ){}

  ngOnInit(): void {
    this.service.getPokemon("pikachu").subscribe(
      {
        next: (resp) => {
          console.log(resp.id)
          console.log(resp.name)
          console.log(resp.sprites.other.dream_world.front_default)
          console.log(resp.types)
        },
        error: (err) => console.log(err)
        
      }
    )
  }

}
