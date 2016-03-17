import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'favourite',
  templateUrl: 'app/favourite.template.html'

})
export class FavouriteComponent{
  @Input() isFavourite = true;

  @Output() change = new EventEmitter();

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit({newValue:this.isFavourite});
  }
}
