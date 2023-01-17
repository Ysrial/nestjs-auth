import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env['DB_HOST'],
    //   port: Number(process.env['DB_PORT']),
    //   username: process.env['DB_USER'],
    //   password: process.env['DB_PASSWORD'],
    //   database: process.env['DB_DATABASE'],
    //   entities: [__dirname + '/**/*.entity{.js,.ts}'],
    //   synchronize: true,
    // }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
