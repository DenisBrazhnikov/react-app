import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { DiscoverOptions } from './dto/discover-options';
import { Genre } from './entities/genre.entity';
import {Country} from "./entities/country.entity";

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
  async discover(
    @Args('options', { type: () => DiscoverOptions }) options: DiscoverOptions,
  ) {
    return await this.moviesService.discover(options);
  }

  @Query(() => Movie, { name: 'movie' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.moviesService.findOne(id);
  }

  @Query(() => [Genre], { name: 'getGenres' })
  async getGenres() {
    return await this.moviesService.getGenres();
  }

  @Query(() => [Country], { name: 'getCountries' })
  async getCountries() {
    return await this.moviesService.getCountries();
  }
}
