import { Injectable } from '@nestjs/common';
import MovieDB from 'node-themoviedb';

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

  async discover() {
    const response = await this.client.discover.movie({
      query: {
        primary_release_year: 2010,
      },
    });

    return response.data.results;
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
