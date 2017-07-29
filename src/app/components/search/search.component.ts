import { Component } from '@angular/core';
@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    searchStr:string;
    searchMusic():void 
    {
        console.log(this.searchStr);
    }
}
