import { Injectable } from '@nestjs/common';
import MovieDB from 'node-themoviedb';
import { DiscoverOptions } from './dto/discover-options';

@Injectable()
export class MoviesService {
  private client;

  constructor() {
    this.client = new MovieDB('11737ecc6f742f4c7cafe91f1fc06c4e');
  }

  async popular() {
    const response = await this.client.movie.getPopular({
      query: {
        sort_by: 'popularity.asc',
      },
    });

    return response.data.results;
  }

  async upcoming() {
    const response = await this.client.movie.getUpcoming({});

    return response.data.results;
  }

  async discover(options: DiscoverOptions) {
    const response = await this.client.discover.movie({
      query: {
        primary_release_year: options.year,
        with_genres: options.genre_id,
        with_original_language: options.lang_code,
      },
    });

    return response.data.results;
  }

  async getGenres() {
    const response = await this.client.genre.getMovieList();

    return response.data.genres;
  }

  async getCountries() {
    const response = await this.client.configuration.getLanguages();

    return response.data;
  }

  async findOne(id: number) {
    const args = {
      pathParameters: {
        movie_id: id,
      },
    };

    const response = await this.client.movie.getDetails(args);

    return response.data;
  }
}
