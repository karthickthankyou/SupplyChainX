import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './models/users/users.module'
import { PrismaModule } from './common/prisma/prisma.module'
import { AuthModule } from './common/auth/auth.module'
import { ManufacturersModule } from './models/manufacturers/manufacturers.module'
import { DiscoveryModule } from '@nestjs/core'
import { DistributorsModule } from './models/distributors/distributors.module'
import { RetailersModule } from './models/retailers/retailers.module'
import { ProductsModule } from './models/products/products.module'
import { WarehousesModule } from './models/warehouses/warehouses.module'
import { InventoriesModule } from './models/inventories/inventories.module'
import { TransactionsModule } from './models/transactions/transactions.module'
import { LocationsModule } from './models/locations/locations.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      introspection: true,
    }),
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,

    UsersModule,

    ManufacturersModule,
    DistributorsModule,
    RetailersModule,
    ProductsModule,
    WarehousesModule,
    InventoriesModule,
    TransactionsModule,
    LocationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
