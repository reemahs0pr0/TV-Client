import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../tvshow.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent implements OnInit {
  genres: string[] = [];

  constructor(private tvshowSvc: TvShowService) {}

  ngOnInit(): void {
    // call getGenres and assign it to this.genres
    this.tvshowSvc.getGenres().then((result) => (this.genres = result));
  }
}
