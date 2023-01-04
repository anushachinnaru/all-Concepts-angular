import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
interface Movie {
  title: string;
  director: string;
  cast: string;
  releaseDate: string;
}

interface Item {
  name: string;
  value: string;
}

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent implements OnInit {
  valueEntered: number = 0;
  movies: Movie[] = [
    {
      title: 'Zootopia',
      director: 'Byron Howard, Rich Moore',
      cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman',
      releaseDate: 'March 4, 2016',
    },
    {
      title: 'Batman v Superman: Dawn of Justice',

      director: 'Zack Snyder',
      cast: 'Ben Affleck, Henry Cavill, Amy Adams',
      releaseDate: 'March 25, 2016',
    },
    {
      title: 'Captain American: Civil War',
      director: 'Anthony Russo, Joe Russo',
      cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans',
      releaseDate: 'May 6, 2016',
    },
    {
      title: 'X-Men: Apocalypse',
      director: 'Bryan Singer',
      cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac',
      releaseDate: 'May 27, 2016',
    },
    {
      title: 'Warcraft',
      director: 'Duncan Jones',
      cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster',
      releaseDate: 'June 10, 2016',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addMovie(form: NgForm) {
    console.log(form.value, 'userform');
    this.movies.push(form.value);

    console.log(this.movies, 'new movie added -after hmrr');
  }

  trackByFn(index: any, item: any) {
    return item.title;
  }
}
