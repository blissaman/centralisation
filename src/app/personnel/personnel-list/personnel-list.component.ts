import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: "app-personnel-list",
  templateUrl: "./personnel-list.component.html",
  styleUrls: ["./personnel-list.component.scss"]
})



export class PersonnelListComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'nom', 'prenoms'];
  datasource = new MatTableDataSource<Personnes>(ELEMENT_DATA);

  constructor() {}

  ngOnInit() {}
}

export interface Personnes {
  numero: number;
  nom: string;
  prenoms: string;
}

const ELEMENT_DATA: Personnes[] = [
  {numero: 1, nom: 'BLEU', prenoms: 'Koty'},
  {numero: 2, nom: 'TIE-BI', prenoms: 'Audrey'},
  {numero: 3, nom: 'BLEU', prenoms: 'Juvenal'}
];
