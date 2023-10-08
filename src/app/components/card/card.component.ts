import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  pokemon:PokemonData

  estilo:string = ""
  estiloType:string = ""

  constructor (
    private service:PokemonService
  ){
    this.pokemon = {
      id:0,
      name:'',
      sprites:{front_default:''},
      types:[]
    }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  chooseClass(){
    if (this.estiloType === 'fire' ){
      this.estilo = 'fire'
    } else { 
      this.estilo = 'normal'
    }

    return this.estilo

  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (resp) => {
          
          this.pokemon = {
            id:resp.id,
            name:resp.name,
            sprites: resp.sprites,
            types:resp.types,
          }
          
        },
        error: (err) => console.log("not found"),
        

      }
    )
    
  }

  pickClass(){
    // this.service.getPokemon("charizard").subscribe(
    //   this.estiloType = this.pokemon.types.map((type:{name}))

    // )
    
  }



}
