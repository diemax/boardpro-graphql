import { Resolver, ResolveField, Args, Query} from '@nestjs/graphql';
import { Hello } from './app.model';

export class AppResolver {
  @Query(returns => Hello)
  hello() {
    return {
      hello: 'world'
    }
  }

}