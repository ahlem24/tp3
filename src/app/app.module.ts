import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';
import { TableauComponent } from './ex1/tableau/tableau.component';
import { NombreComponent } from './ex1/nombre/nombre.component';
import { MaterielComponent } from './ex2/materiel/materiel.component';
import { MaterielListComponent } from './ex2/materiel-list/materiel-list.component';
import { NotesComponent } from './notes/notes.component';
import { PersonneComponent } from './partie1/personne/personne.component';
import { PersonneListComponent } from './partie1/personne-list/personne-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EnfantComponent,
    TableauComponent,
    NombreComponent,
    MaterielComponent,
    MaterielListComponent,
    NotesComponent,
    PersonneComponent,
    PersonneListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
