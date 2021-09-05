import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  title='Characters';

  characters:any=null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,7,361,366")
      .subscribe(
      result =>{
        this.characters = result;
        console.log(this.characters);
      },
      error =>{
        console.log("Problemas");
      }
      );

  }



}
