import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
  })],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
