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

  estiloType:string = ""

  constructor (
    private service:PokemonService
  ){
    this.pokemon = {
      id:0,
      name:'',
      sprites: {
        other: {
            dream_world: {
                front_default: ''
            }
        }
    },
      types:[]
    }
  }

  ngOnInit(): void {
    this.getPokemon('charizard')
  }

  chooseClass(){
    return this.estiloType

  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe({
      next: (resp) => {
        this.pokemon = {
          id: resp.id,
          name: resp.name,
          sprites: resp.sprites,
          types: resp.types
        };

        // Verifique se há pelo menos um tipo
        if (this.pokemon.types.length > 0) {
          // Extrair o nome do primeiro tipo
          this.estiloType = this.pokemon.types[0].type.name;
          console.log('O primeiro tipo é:', this.estiloType);
        } else {
          this.estiloType = "normal";
        }
      },
      error: () => console.log("not found"),
    });
  }

  getPokemonTypeClasses(): string[] {
    return this.pokemon.types.map((type) => type.type.name.toLowerCase());
  }
  

}
