import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  images$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAlbum().subscribe(
      data => this.images$ = data
    )
  }

}
