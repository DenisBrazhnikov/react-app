import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Resolver()
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => [Movie], { name: 'popularMovies' })
  async popular() {
    return await this.moviesService.popular();
  }

  @Query(() => [Movie], { name: 'upcomingMovies' })
  async upcoming() {
    return await this.moviesService.upcoming();
  }

  @Query(() => [Movie], { name: 'discoverMovies' })
  async discover() {
    return await this.moviesService.discover();
  }

  @Query(() => Movie, { name: 'movie' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.moviesService.findOne(id);
  }
}
