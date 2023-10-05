import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  pokemon:PokemonData | any
  attributesTypes:string[] = ['Fire', 'Flying']

  constructor (
    private service:PokemonService
  ){
    // this.pokemon = {
    //   id:0,
    //   name:'',
    //   sprites:{other:{dream_world:{front_default:''}}},
    //   types:[]
    // }
  }

  ngOnInit(): void {
    this.service.getPokemon("pikachu").subscribe(
      {
        next: (resp) => {
          
          this.pokemon = {
            id:resp.id,
            name:resp.name,
            sprites:resp.sprites.other.dream_world.front_default,
            types:resp.types
          }

          console.log(this.pokemon.sprites);
          
        },
        error: (err) => console.log(err)
        
      }
    )
  }

}
