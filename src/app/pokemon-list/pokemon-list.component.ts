import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/pokemons/page/1`).subscribe(
      (data: { pokemons: any[]}) => {
        this.pokemons = [...data.pokemons];
      },
      (error) => console.log(error));
  }

  onPokemonClick(pokemon) {
    console.log(pokemon);
  }
}
