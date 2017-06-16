import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  @ViewChild('youtube') youtube;

  youtubeReady(event){
      console.log(event);
  }

  play(){
      this.youtube.nativeElement.play()
  }

  pause(){
      this.youtube.nativeElement.pause()
  }

}
