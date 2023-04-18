import { Component } from '@angular/core';

@Component({
  selector: 'app-listform',
  templateUrl: './listform.component.html',
  styleUrls: ['./listform.component.scss']
})
export class ListformComponent {

imgParent='';

onLoaded(img: string){
  console.log('log padre',img);
}

}
