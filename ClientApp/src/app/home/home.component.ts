import { Component, NgModule } from '@angular/core';
import { DataTableModule, DataTable } from 'angular-6-datatable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

@NgModule({
  imports: [ DataTableModule ]
})

export class HomeComponent {

  public seoItems : any;

  Model = {
    seoTextValue : ''
  }

  onKeyUpAnalyse($event){
    let element = $event.target || $event.srcElement;
    let stopWords = [' a ', ' or ', ' and ', ' the '];
    let result = [];
    //this.Model.seoTextValue
    stopWords.forEach((item, ix)=>{
      let count = (this.Model.seoTextValue.match(new RegExp(item, 'g')) || []).length;
      if(count > 0){
        result.push({
          textorTag : "text",
          word: item.trim(),
          count: (this.Model.seoTextValue.match(new RegExp(item, 'g')) || []).length
        });
        this.seoItems = result;
      } 
    })
  }
}

interface SeoItems{
  textOrTag : string;
  word : string;
  count : number;
}
