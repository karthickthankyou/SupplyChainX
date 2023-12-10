import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type AuthProvider = {
  __typename?: 'AuthProvider'
  type: AuthProviderType
  uid: Scalars['String']['output']
}

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE',
}

export type CreateDistributorInput = {
  uid: Scalars['String']['input']
}

export type CreateInventoryInput = {
  productId: Scalars['Int']['input']
  quantity: Scalars['Int']['input']
  warehouseId: Scalars['Int']['input']
}

export type CreateLocationInput = {
  address: Scalars['String']['input']
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
  warehouseId: Scalars['Int']['input']
}

export type CreateLocationInputWithoutWarehouseId = {
  address: Scalars['String']['input']
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type CreateManufacturerInput = {
  uid: Scalars['String']['input']
}

export type CreateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  manufacturerId: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type CreateRetailerInput = {
  uid: Scalars['String']['input']
}

export type CreateTransactionInput = {
  fromWarehouseId: Scalars['Int']['input']
  productId: Scalars['Int']['input']
  quantity: Scalars['Int']['input']
  toWarehouseId: Scalars['Int']['input']
}

export type CreateUserWithCredentialsInput = {
  email: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type CreateUserWithProviderInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  type: AuthProviderType
  uid: Scalars['String']['input']
}

export type CreateWarehouseInput = {
  address: CreateLocationInputWithoutWarehouseId
  description?: InputMaybe<Scalars['String']['input']>
  distributorId?: InputMaybe<Scalars['String']['input']>
  manufacturerId?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  retailerId?: InputMaybe<Scalars['String']['input']>
}

export type Credential = {
  __typename?: 'Credential'
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  passwordHash: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type Distributor = {
  __typename?: 'Distributor'
  createdAt: Scalars['DateTime']['output']
  uid: Scalars['String']['output']
  user: User
  warehouses: Array<Warehouse>
}

export type DistributorOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  warehouses?: InputMaybe<WarehouseOrderByRelationAggregateInput>
}

export type DistributorRelationFilter = {
  is?: InputMaybe<DistributorWhereInput>
  isNot?: InputMaybe<DistributorWhereInput>
}

export enum DistributorScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
}

export type DistributorWhereInput = {
  AND?: InputMaybe<Array<DistributorWhereInput>>
  NOT?: InputMaybe<Array<DistributorWhereInput>>
  OR?: InputMaybe<Array<DistributorWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  user?: InputMaybe<UserRelationFilter>
  warehouses?: InputMaybe<WarehouseListRelationFilter>
}

export type DistributorWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<Scalars['Int']['input']>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
}

export type Inventory = {
  __typename?: 'Inventory'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  product: Product
  productId: Scalars['Int']['output']
  quantity: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
  warehouse: Warehouse
  warehouseId: Scalars['Int']['output']
}

export type InventoryListRelationFilter = {
  every?: InputMaybe<InventoryWhereInput>
  none?: InputMaybe<InventoryWhereInput>
  some?: InputMaybe<InventoryWhereInput>
}

export type InventoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type InventoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  productId?: InputMaybe<SortOrder>
  quantity?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  warehouse?: InputMaybe<WarehouseOrderByWithRelationInput>
  warehouseId?: InputMaybe<SortOrder>
}

export enum InventoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ProductId = 'productId',
  Quantity = 'quantity',
  UpdatedAt = 'updatedAt',
  WarehouseId = 'warehouseId',
}

export type InventoryWhereInput = {
  AND?: InputMaybe<Array<InventoryWhereInput>>
  NOT?: InputMaybe<Array<InventoryWhereInput>>
  OR?: InputMaybe<Array<InventoryWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  productId?: InputMaybe<IntFilter>
  quantity?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  warehouse?: InputMaybe<WarehouseRelationFilter>
  warehouseId?: InputMaybe<IntFilter>
}

export type InventoryWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Location = {
  __typename?: 'Location'
  address: Scalars['String']['output']
  id: Scalars['Int']['output']
  latitude: Scalars['Float']['output']
  longitude: Scalars['Float']['output']
  warehouse: Warehouse
  warehouseId: Scalars['Int']['output']
}

export type LocationOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  latitude?: InputMaybe<SortOrder>
  longitude?: InputMaybe<SortOrder>
  warehouse?: InputMaybe<WarehouseOrderByWithRelationInput>
  warehouseId?: InputMaybe<SortOrder>
}

export type LocationRelationFilter = {
  is?: InputMaybe<LocationWhereInput>
  isNot?: InputMaybe<LocationWhereInput>
}

export enum LocationScalarFieldEnum {
  Address = 'address',
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude',
  WarehouseId = 'warehouseId',
}

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>
  NOT?: InputMaybe<Array<LocationWhereInput>>
  OR?: InputMaybe<Array<LocationWhereInput>>
  address?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  latitude?: InputMaybe<FloatFilter>
  longitude?: InputMaybe<FloatFilter>
  warehouse?: InputMaybe<WarehouseRelationFilter>
  warehouseId?: InputMaybe<IntFilter>
}

export type LocationWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Manufacturer = {
  __typename?: 'Manufacturer'
  createdAt: Scalars['DateTime']['output']
  products: Array<Product>
  uid: Scalars['String']['output']
  user: User
  warehouses: Array<Warehouse>
}

export type ManufacturerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  products?: InputMaybe<ProductOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  user?: InputMaybe<SortOrder>
  warehouses?: InputMaybe<WarehouseOrderByRelationAggregateInput>
}

export type ManufacturerRelationFilter = {
  is?: InputMaybe<ManufacturerWhereInput>
  isNot?: InputMaybe<ManufacturerWhereInput>
}

export enum ManufacturerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
}

export type ManufacturerWhereInput = {
  AND?: InputMaybe<Array<ManufacturerWhereInput>>
  NOT?: InputMaybe<Array<ManufacturerWhereInput>>
  OR?: InputMaybe<Array<ManufacturerWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  products?: InputMaybe<ProductListRelationFilter>
  uid?: InputMaybe<StringFilter>
  user?: InputMaybe<UserRelationFilter>
  warehouses?: InputMaybe<WarehouseListRelationFilter>
}

export type ManufacturerWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  createDistributor: Distributor
  createInventory: Inventory
  createLocation: Location
  createManufacturer: Manufacturer
  createProduct: Product
  createRetailer: Retailer
  createTransaction: Transaction
  createUserWithCredentials: User
  createUserWithProvider: User
  createWarehouse: Warehouse
  removeDistributor: Distributor
  removeInventory: Inventory
  removeLocation: Location
  removeManufacturer: Manufacturer
  removeProduct: Product
  removeRetailer: Retailer
  removeTransaction: Transaction
  removeUser: User
  removeWarehouse: Warehouse
  updateDistributor: Distributor
  updateInventory: Inventory
  updateLocation: Location
  updateManufacturer: Manufacturer
  updateProduct: Product
  updateRetailer: Retailer
  updateTransaction: Transaction
  updateUser: User
  updateWarehouse: Warehouse
}

export type MutationCreateDistributorArgs = {
  createDistributorInput: CreateDistributorInput
}

export type MutationCreateInventoryArgs = {
  createInventoryInput: CreateInventoryInput
}

export type MutationCreateLocationArgs = {
  createLocationInput: CreateLocationInput
}

export type MutationCreateManufacturerArgs = {
  createManufacturerInput: CreateManufacturerInput
}

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput
}

export type MutationCreateRetailerArgs = {
  createRetailerInput: CreateRetailerInput
}

export type MutationCreateTransactionArgs = {
  createTransactionInput: CreateTransactionInput
}

export type MutationCreateUserWithCredentialsArgs = {
  createUserWithCredentialsInput: CreateUserWithCredentialsInput
}

export type MutationCreateUserWithProviderArgs = {
  createUserWithProviderInput: CreateUserWithProviderInput
}

export type MutationCreateWarehouseArgs = {
  createWarehouseInput: CreateWarehouseInput
}

export type MutationRemoveDistributorArgs = {
  where: DistributorWhereUniqueInput
}

export type MutationRemoveInventoryArgs = {
  where: InventoryWhereUniqueInput
}

export type MutationRemoveLocationArgs = {
  where: LocationWhereUniqueInput
}

export type MutationRemoveManufacturerArgs = {
  where: ManufacturerWhereUniqueInput
}

export type MutationRemoveProductArgs = {
  where: ProductWhereUniqueInput
}

export type MutationRemoveRetailerArgs = {
  where: RetailerWhereUniqueInput
}

export type MutationRemoveTransactionArgs = {
  where: TransactionWhereUniqueInput
}

export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type MutationRemoveWarehouseArgs = {
  where: WarehouseWhereUniqueInput
}

export type MutationUpdateDistributorArgs = {
  updateDistributorInput: UpdateDistributorInput
}

export type MutationUpdateInventoryArgs = {
  updateInventoryInput: UpdateInventoryInput
}

export type MutationUpdateLocationArgs = {
  updateLocationInput: UpdateLocationInput
}

export type MutationUpdateManufacturerArgs = {
  updateManufacturerInput: UpdateManufacturerInput
}

export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput
}

export type MutationUpdateRetailerArgs = {
  updateRetailerInput: UpdateRetailerInput
}

export type MutationUpdateTransactionArgs = {
  updateTransactionInput: UpdateTransactionInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationUpdateWarehouseArgs = {
  updateWarehouseInput: UpdateWarehouseInput
}

export type Product = {
  __typename?: 'Product'
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  image?: Maybe<Scalars['String']['output']>
  inventories: Array<Inventory>
  manufacturer: Manufacturer
  manufacturerId: Scalars['String']['output']
  name: Scalars['String']['output']
  transactions: Array<Transaction>
  updatedAt: Scalars['DateTime']['output']
}

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>
  none?: InputMaybe<ProductWhereInput>
  some?: InputMaybe<ProductWhereInput>
}

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ProductOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  image?: InputMaybe<SortOrder>
  inventories?: InputMaybe<InventoryOrderByRelationAggregateInput>
  manufacturer?: InputMaybe<ManufacturerOrderByWithRelationInput>
  manufacturerId?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  transactions?: InputMaybe<TransactionOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
}

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>
  isNot?: InputMaybe<ProductWhereInput>
}

export enum ProductScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  ManufacturerId = 'manufacturerId',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>
  NOT?: InputMaybe<Array<ProductWhereInput>>
  OR?: InputMaybe<Array<ProductWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  image?: InputMaybe<StringFilter>
  inventories?: InputMaybe<InventoryListRelationFilter>
  manufacturer?: InputMaybe<ManufacturerRelationFilter>
  manufacturerId?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  transactions?: InputMaybe<TransactionListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ProductWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Query = {
  __typename?: 'Query'
  distributor: Distributor
  distributorMe?: Maybe<Distributor>
  distributors: Array<Distributor>
  getAuthProvider?: Maybe<AuthProvider>
  getCredentials?: Maybe<User>
  inventories: Array<Inventory>
  inventory: Inventory
  location: Location
  locations: Array<Location>
  manufacturer: Manufacturer
  manufacturerMe?: Maybe<Manufacturer>
  manufacturers: Array<Manufacturer>
  myInventory: Array<Inventory>
  myProducts: Array<Product>
  myWarehouses: Array<Warehouse>
  product: Product
  products: Array<Product>
  retailer: Retailer
  retailerMe?: Maybe<Distributor>
  retailers: Array<Retailer>
  transaction: Transaction
  transactions: Array<Transaction>
  user: User
  users: Array<User>
  warehouse: Warehouse
  warehouses: Array<Warehouse>
}

export type QueryDistributorArgs = {
  where: DistributorWhereUniqueInput
}

export type QueryDistributorsArgs = {
  cursor?: InputMaybe<DistributorWhereUniqueInput>
  distinct?: InputMaybe<Array<DistributorScalarFieldEnum>>
  orderBy?: InputMaybe<Array<DistributorOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<DistributorWhereInput>
}

export type QueryGetAuthProviderArgs = {
  uid: Scalars['String']['input']
}

export type QueryGetCredentialsArgs = {
  email: Scalars['String']['input']
}

export type QueryInventoriesArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<InventoryWhereInput>
}

export type QueryInventoryArgs = {
  where: InventoryWhereUniqueInput
}

export type QueryLocationArgs = {
  where: LocationWhereUniqueInput
}

export type QueryLocationsArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>
  distinct?: InputMaybe<Array<LocationScalarFieldEnum>>
  orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LocationWhereInput>
}

export type QueryManufacturerArgs = {
  where: ManufacturerWhereUniqueInput
}

export type QueryManufacturersArgs = {
  cursor?: InputMaybe<ManufacturerWhereUniqueInput>
  distinct?: InputMaybe<Array<ManufacturerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ManufacturerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ManufacturerWhereInput>
}

export type QueryMyInventoryArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<InventoryWhereInput>
}

export type QueryMyProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProductWhereInput>
}

export type QueryMyWarehousesArgs = {
  cursor?: InputMaybe<WarehouseWhereUniqueInput>
  distinct?: InputMaybe<Array<WarehouseScalarFieldEnum>>
  orderBy?: InputMaybe<Array<WarehouseOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WarehouseWhereInput>
}

export type QueryProductArgs = {
  where: ProductWhereUniqueInput
}

export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProductWhereInput>
}

export type QueryRetailerArgs = {
  where: RetailerWhereUniqueInput
}

export type QueryRetailersArgs = {
  cursor?: InputMaybe<RetailerWhereUniqueInput>
  distinct?: InputMaybe<Array<RetailerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<RetailerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RetailerWhereInput>
}

export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput
}

export type QueryTransactionsArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>
  distinct?: InputMaybe<Array<TransactionScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TransactionWhereInput>
}

export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryWarehouseArgs = {
  where: WarehouseWhereUniqueInput
}

export type QueryWarehousesArgs = {
  cursor?: InputMaybe<WarehouseWhereUniqueInput>
  distinct?: InputMaybe<Array<WarehouseScalarFieldEnum>>
  orderBy?: InputMaybe<Array<WarehouseOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WarehouseWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Retailer = {
  __typename?: 'Retailer'
  createdAt: Scalars['DateTime']['output']
  uid: Scalars['String']['output']
  user: User
  warehouses: Array<Warehouse>
}

export type RetailerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
  warehouses?: InputMaybe<WarehouseOrderByRelationAggregateInput>
}

export type RetailerRelationFilter = {
  is?: InputMaybe<RetailerWhereInput>
  isNot?: InputMaybe<RetailerWhereInput>
}

export enum RetailerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
}

export type RetailerWhereInput = {
  AND?: InputMaybe<Array<RetailerWhereInput>>
  NOT?: InputMaybe<Array<RetailerWhereInput>>
  OR?: InputMaybe<Array<RetailerWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  user?: InputMaybe<UserRelationFilter>
  warehouses?: InputMaybe<WarehouseListRelationFilter>
}

export type RetailerWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type Transaction = {
  __typename?: 'Transaction'
  createdAt: Scalars['DateTime']['output']
  fromWarehouse: Warehouse
  fromWarehouseId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  product: Product
  productId: Scalars['Int']['output']
  quantity: Scalars['Int']['output']
  toWarehouse: Warehouse
  toWarehouseId: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type TransactionListRelationFilter = {
  every?: InputMaybe<TransactionWhereInput>
  none?: InputMaybe<TransactionWhereInput>
  some?: InputMaybe<TransactionWhereInput>
}

export type TransactionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type TransactionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  fromWarehouse?: InputMaybe<WarehouseOrderByWithRelationInput>
  fromWarehouseId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  productId?: InputMaybe<SortOrder>
  quantity?: InputMaybe<SortOrder>
  toWarehouse?: InputMaybe<WarehouseOrderByWithRelationInput>
  toWarehouseId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum TransactionScalarFieldEnum {
  CreatedAt = 'createdAt',
  FromWarehouseId = 'fromWarehouseId',
  Id = 'id',
  ProductId = 'productId',
  Quantity = 'quantity',
  ToWarehouseId = 'toWarehouseId',
  UpdatedAt = 'updatedAt',
}

export type TransactionWhereInput = {
  AND?: InputMaybe<Array<TransactionWhereInput>>
  NOT?: InputMaybe<Array<TransactionWhereInput>>
  OR?: InputMaybe<Array<TransactionWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  fromWarehouse?: InputMaybe<WarehouseRelationFilter>
  fromWarehouseId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  productId?: InputMaybe<IntFilter>
  quantity?: InputMaybe<IntFilter>
  toWarehouse?: InputMaybe<WarehouseRelationFilter>
  toWarehouseId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type TransactionWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type UpdateDistributorInput = {
  uid: Scalars['String']['input']
}

export type UpdateInventoryInput = {
  id: Scalars['Int']['input']
  productId?: InputMaybe<Scalars['Int']['input']>
  quantity?: InputMaybe<Scalars['Int']['input']>
  warehouseId?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateLocationInput = {
  address?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  latitude?: InputMaybe<Scalars['Float']['input']>
  longitude?: InputMaybe<Scalars['Float']['input']>
  warehouseId?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateManufacturerInput = {
  uid: Scalars['String']['input']
}

export type UpdateProductInput = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  image?: InputMaybe<Scalars['String']['input']>
  manufacturerId?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type UpdateRetailerInput = {
  uid: Scalars['String']['input']
}

export type UpdateTransactionInput = {
  fromWarehouseId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  productId?: InputMaybe<Scalars['Int']['input']>
  quantity?: InputMaybe<Scalars['Int']['input']>
  toWarehouseId?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateUserInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type UpdateWarehouseInput = {
  address?: InputMaybe<CreateLocationInputWithoutWarehouseId>
  description?: InputMaybe<Scalars['String']['input']>
  distributorId?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  manufacturerId?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  retailerId?: InputMaybe<Scalars['String']['input']>
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']['output']
  credentials: Credential
  image?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  distributor?: InputMaybe<DistributorOrderByWithRelationInput>
  image?: InputMaybe<SortOrder>
  manufacturer?: InputMaybe<ManufacturerOrderByWithRelationInput>
  name?: InputMaybe<SortOrder>
  retailer?: InputMaybe<RetailerOrderByWithRelationInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  distributor?: InputMaybe<DistributorRelationFilter>
  image?: InputMaybe<StringFilter>
  manufacturer?: InputMaybe<ManufacturerRelationFilter>
  name?: InputMaybe<StringFilter>
  retailer?: InputMaybe<RetailerRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Warehouse = {
  __typename?: 'Warehouse'
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  distributor?: Maybe<Distributor>
  distributorId?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  ins: Array<Transaction>
  inventories: Array<Inventory>
  location?: Maybe<Location>
  manufacturer?: Maybe<Manufacturer>
  manufacturerId?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  outs: Array<Transaction>
  retailer?: Maybe<Retailer>
  retailerId?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
}

export type WarehouseListRelationFilter = {
  every?: InputMaybe<WarehouseWhereInput>
  none?: InputMaybe<WarehouseWhereInput>
  some?: InputMaybe<WarehouseWhereInput>
}

export type WarehouseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type WarehouseOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  distributor?: InputMaybe<DistributorOrderByWithRelationInput>
  distributorId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  ins?: InputMaybe<TransactionOrderByRelationAggregateInput>
  inventories?: InputMaybe<InventoryOrderByRelationAggregateInput>
  location?: InputMaybe<LocationOrderByWithRelationInput>
  manufacturer?: InputMaybe<ManufacturerOrderByWithRelationInput>
  manufacturerId?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  outs?: InputMaybe<TransactionOrderByRelationAggregateInput>
  retailer?: InputMaybe<RetailerOrderByWithRelationInput>
  retailerId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type WarehouseRelationFilter = {
  is?: InputMaybe<WarehouseWhereInput>
  isNot?: InputMaybe<WarehouseWhereInput>
}

export enum WarehouseScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  DistributorId = 'distributorId',
  Id = 'id',
  ManufacturerId = 'manufacturerId',
  Name = 'name',
  RetailerId = 'retailerId',
  UpdatedAt = 'updatedAt',
}

export type WarehouseWhereInput = {
  AND?: InputMaybe<Array<WarehouseWhereInput>>
  NOT?: InputMaybe<Array<WarehouseWhereInput>>
  OR?: InputMaybe<Array<WarehouseWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  distributor?: InputMaybe<DistributorRelationFilter>
  distributorId?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  ins?: InputMaybe<TransactionListRelationFilter>
  inventories?: InputMaybe<InventoryListRelationFilter>
  location?: InputMaybe<LocationRelationFilter>
  manufacturer?: InputMaybe<ManufacturerRelationFilter>
  manufacturerId?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  outs?: InputMaybe<TransactionListRelationFilter>
  retailer?: InputMaybe<RetailerRelationFilter>
  retailerId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type WarehouseWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type CreateUserWithCredentialsMutationVariables = Exact<{
  createUserWithCredentialsInput: CreateUserWithCredentialsInput
}>

export type CreateUserWithCredentialsMutation = {
  __typename?: 'Mutation'
  createUserWithCredentials: { __typename?: 'User'; uid: string }
}

export type CreateUserWithProviderMutationVariables = Exact<{
  createUserWithProviderInput: CreateUserWithProviderInput
}>

export type CreateUserWithProviderMutation = {
  __typename?: 'Mutation'
  createUserWithProvider: { __typename?: 'User'; uid: string }
}

export type GetCredentialsQueryVariables = Exact<{
  email: Scalars['String']['input']
}>

export type GetCredentialsQuery = {
  __typename?: 'Query'
  getCredentials?: {
    __typename?: 'User'
    uid: string
    name: string
    image?: string | null
    credentials: {
      __typename?: 'Credential'
      email: string
      passwordHash: string
    }
  } | null
}

export type GetAuthProviderQueryVariables = Exact<{
  uid: Scalars['String']['input']
}>

export type GetAuthProviderQuery = {
  __typename?: 'Query'
  getAuthProvider?: {
    __typename?: 'AuthProvider'
    uid: string
    type: AuthProviderType
  } | null
}

export type DistributorMeQueryVariables = Exact<{ [key: string]: never }>

export type DistributorMeQuery = {
  __typename?: 'Query'
  distributorMe?: {
    __typename?: 'Distributor'
    uid: string
    createdAt: any
    user: { __typename?: 'User'; image?: string | null; name: string }
  } | null
}

export type RetailerMeQueryVariables = Exact<{ [key: string]: never }>

export type RetailerMeQuery = {
  __typename?: 'Query'
  retailerMe?: {
    __typename?: 'Distributor'
    uid: string
    createdAt: any
    user: { __typename?: 'User'; image?: string | null; name: string }
  } | null
}

export type ManufacturerMeQueryVariables = Exact<{ [key: string]: never }>

export type ManufacturerMeQuery = {
  __typename?: 'Query'
  manufacturerMe?: {
    __typename?: 'Manufacturer'
    uid: string
    createdAt: any
    user: { __typename?: 'User'; image?: string | null; name: string }
  } | null
}

export type CreateManufacturerMutationVariables = Exact<{
  createManufacturerInput: CreateManufacturerInput
}>

export type CreateManufacturerMutation = {
  __typename?: 'Mutation'
  createManufacturer: { __typename?: 'Manufacturer'; uid: string }
}

export type MyWarehousesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<WarehouseOrderByWithRelationInput> | WarehouseOrderByWithRelationInput
  >
  where?: InputMaybe<WarehouseWhereInput>
}>

export type MyWarehousesQuery = {
  __typename?: 'Query'
  myWarehouses: Array<{
    __typename?: 'Warehouse'
    id: number
    name: string
    description?: string | null
    createdAt: any
    inventories: Array<{
      __typename?: 'Inventory'
      quantity: number
      product: { __typename?: 'Product'; name: string; image?: string | null }
    }>
  }>
}

export type MyProductsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput
  >
  where?: InputMaybe<ProductWhereInput>
}>

export type MyProductsQuery = {
  __typename?: 'Query'
  myProducts: Array<{
    __typename?: 'Product'
    id: number
    name: string
    image?: string | null
    createdAt: any
    description?: string | null
  }>
}

export type CreateWarehouseMutationVariables = Exact<{
  createWarehouseInput: CreateWarehouseInput
}>

export type CreateWarehouseMutation = {
  __typename?: 'Mutation'
  createWarehouse: { __typename?: 'Warehouse'; id: number }
}

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput
}>

export type CreateProductMutation = {
  __typename?: 'Mutation'
  createProduct: { __typename?: 'Product'; id: number }
}

export type CreateInventoryMutationVariables = Exact<{
  createInventoryInput: CreateInventoryInput
}>

export type CreateInventoryMutation = {
  __typename?: 'Mutation'
  createInventory: { __typename?: 'Inventory'; id: number }
}

export type CreateDistributorMutationVariables = Exact<{
  createDistributorInput: CreateDistributorInput
}>

export type CreateDistributorMutation = {
  __typename?: 'Mutation'
  createDistributor: { __typename?: 'Distributor'; uid: string }
}

export type CreateRetailerMutationVariables = Exact<{
  createRetailerInput: CreateRetailerInput
}>

export type CreateRetailerMutation = {
  __typename?: 'Mutation'
  createRetailer: { __typename?: 'Retailer'; uid: string }
}

export const namedOperations = {
  Query: {
    getCredentials: 'getCredentials',
    GetAuthProvider: 'GetAuthProvider',
    distributorMe: 'distributorMe',
    retailerMe: 'retailerMe',
    manufacturerMe: 'manufacturerMe',
    myWarehouses: 'myWarehouses',
    myProducts: 'myProducts',
  },
  Mutation: {
    createUserWithCredentials: 'createUserWithCredentials',
    CreateUserWithProvider: 'CreateUserWithProvider',
    createManufacturer: 'createManufacturer',
    createWarehouse: 'createWarehouse',
    createProduct: 'createProduct',
    createInventory: 'createInventory',
    createDistributor: 'createDistributor',
    createRetailer: 'createRetailer',
  },
}

export const CreateUserWithCredentialsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createUserWithCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserWithCredentialsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserWithCredentialsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUserWithCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserWithCredentialsInput' },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'createUserWithCredentialsInput',
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUserWithCredentialsMutation,
  CreateUserWithCredentialsMutationVariables
>
export const CreateUserWithProviderDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUserWithProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserWithProviderInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserWithProviderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUserWithProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserWithProviderInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createUserWithProviderInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUserWithProviderMutation,
  CreateUserWithProviderMutationVariables
>
export const GetCredentialsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'credentials' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'passwordHash' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCredentialsQuery, GetCredentialsQueryVariables>
export const GetAuthProviderDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAuthProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uid' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'uid' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAuthProviderQuery,
  GetAuthProviderQueryVariables
>
export const DistributorMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'distributorMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'distributorMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DistributorMeQuery, DistributorMeQueryVariables>
export const RetailerMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'retailerMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'retailerMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RetailerMeQuery, RetailerMeQueryVariables>
export const ManufacturerMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'manufacturerMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'manufacturerMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ManufacturerMeQuery, ManufacturerMeQueryVariables>
export const CreateManufacturerDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createManufacturer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createManufacturerInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateManufacturerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createManufacturer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createManufacturerInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createManufacturerInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateManufacturerMutation,
  CreateManufacturerMutationVariables
>
export const MyWarehousesDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myWarehouses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'WarehouseOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'WarehouseWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myWarehouses' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'inventories' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'quantity' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'product' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyWarehousesQuery, MyWarehousesQueryVariables>
export const MyProductsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myProducts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ProductOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ProductWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myProducts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyProductsQuery, MyProductsQueryVariables>
export const CreateWarehouseDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createWarehouse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createWarehouseInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateWarehouseInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createWarehouse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createWarehouseInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createWarehouseInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateWarehouseMutation,
  CreateWarehouseMutationVariables
>
export const CreateProductDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createProduct' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createProductInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateProductInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createProduct' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createProductInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createProductInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateProductMutation,
  CreateProductMutationVariables
>
export const CreateInventoryDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createInventory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createInventoryInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateInventoryInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createInventory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createInventoryInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createInventoryInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateInventoryMutation,
  CreateInventoryMutationVariables
>
export const CreateDistributorDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createDistributor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createDistributorInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateDistributorInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createDistributor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createDistributorInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createDistributorInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateDistributorMutation,
  CreateDistributorMutationVariables
>
export const CreateRetailerDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createRetailer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createRetailerInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateRetailerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createRetailer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createRetailerInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createRetailerInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateRetailerMutation,
  CreateRetailerMutationVariables
>
