import { Component, NgModule } from '@angular/core';
import { DataTableModule } from 'angular-6-datatable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

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
    seoTextValue : '',
    seoUrlValue: ''
  }

  onKeyUpAnalyse($event){
    let element = $event.target || $event.srcElement;
    if(element.classList.contains('urlSEO'))
      this.getURL();
    this.populateAnalyseData(this.Model.seoTextValue);
  }

  onPaste(e: any){
    console.log(e.clipboardData.getData('text/plain'));
    this.populateAnalyseData(e.clipboardData.getData('text/plain'));
  }

  populateAnalyseData($data){
    let stopWords = [' a ', ' or ', ' and ', ' the '];
    let result = [];
    stopWords.forEach((item, ix)=>{
      let count = ($data.match(new RegExp(item, 'g')) || []).length;
      if(count > 0){
        result.push({
          textorTag : "text",
          word: item.trim(),
          count: ($data.match(new RegExp(item, 'g')) || []).length
        });
        this.seoItems = result;
      } 
    });
  }

  getURL(){
    fetch(this.Model.seoUrlValue, { 
      mode: "no-cors",
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    }).then(function(response) {
      // When the page is loaded convert it to text
      console.log(response);
      return response.text();
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

        console.log(doc);
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
  }
}

