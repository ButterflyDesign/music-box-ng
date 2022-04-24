import { Component, ElementRef, ViewChild } from '@angular/core';
import { MediaFile } from './domain/media-file';
import { MediaLibraryService } from './service/media-library.service';
import { AudioPlayerComponent, Track } from 'ngx-audio-player';
import { environment } from 'src/environments/environment';
import { VgMediaElement, VgPlayerComponent } from '@videogular/ngx-videogular/core';
import { CircularVisualizer , Player, VisulaizerConfig } from 'ng-audio-visualizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fire Air';
  cols!: any[];
  files!: MediaFile[];
  link!: string;
  displayModal: boolean = false;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = false;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [];

  @ViewChild('audio', { static: false }) audio!: AudioPlayerComponent;
  @ViewChild('video', { static: false }) video!: VgPlayerComponent;
  @ViewChild('media', { static: false }) media!: VgMediaElement;
  @ViewChild("visualCanvas") visualCanvasRef!: ElementRef<HTMLCanvasElement>;

  currentMediaLink: string = "";
  api!: any;

  playerObj!: Player;
  visulizerObj!: CircularVisualizer;


  constructor(private mediaLibraryService: MediaLibraryService) {
    this.cols = [{ field: 'fileName', header: 'Filename' }];
    this.getFiles();

  }

  ngOnInit() {
    const inputs = {"url": "", "title": "Some text"}
    this.playerObj = new Player(inputs);
    this.playerObj.init();
  }
  
  ngAfterViewInit(){
    var params: any={};
    params.player=this.playerObj;
    params.canvas=this.visualCanvasRef.nativeElement;
    params.minRadius=30;
    params.maxRadius=50;
    
    this.visulizerObj = new CircularVisualizer(params);
    
  }

  getFiles() {
    this.mediaLibraryService.getFiles().subscribe(data => { this.files = data; console.log(data.toString()); });
  }

  import() {
    this.mediaLibraryService.import(this.link).subscribe(_ => { this.getFiles(); this.displayModal = true; });
  }

  play(file: MediaFile) {
    this.msaapPlaylist = [{
      title: file.fileName,
      link: environment.server + '/api/MediaLibrary/' + file.fileName,
      artist: 'Audio One Artist'
    }]

    //this.currentMediaLink = this.msaapPlaylist[0].link;
    //this.visualizer.url=this.msaapPlaylist[0].link;
    //this.visualizer.title=this.msaapPlaylist[0].title;
    //this.audio.play();
    this.playerObj.changeUrl(this.msaapPlaylist[0].link);
    this.playerObj.play();
    //this.currentMediaLink = this.msaapPlaylist[0].link;

  }

  onPlayerReady(api: any) {
    console.log("onPlayerReady");
    this.api = api;
    api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
      this.playVideo.bind(this)
    );
  }

  playVideo() {
    this.api.play();
  }


}
