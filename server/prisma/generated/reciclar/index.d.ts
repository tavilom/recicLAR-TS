
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Dinheiro
 * 
 */
export type Dinheiro = $Result.DefaultSelection<Prisma.$DinheiroPayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Vale
 * 
 */
export type Vale = $Result.DefaultSelection<Prisma.$ValePayload>
/**
 * Model Mercadoria
 * 
 */
export type Mercadoria = $Result.DefaultSelection<Prisma.$MercadoriaPayload>
/**
 * Model Peso
 * 
 */
export type Peso = $Result.DefaultSelection<Prisma.$PesoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoMovimentacao: {
  ENTRADA: 'ENTRADA',
  SAIDA: 'SAIDA'
};

export type TipoMovimentacao = (typeof TipoMovimentacao)[keyof typeof TipoMovimentacao]

}

export type TipoMovimentacao = $Enums.TipoMovimentacao

export const TipoMovimentacao: typeof $Enums.TipoMovimentacao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dinheiros
 * const dinheiros = await prisma.dinheiro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dinheiros
   * const dinheiros = await prisma.dinheiro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dinheiro`: Exposes CRUD operations for the **Dinheiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dinheiros
    * const dinheiros = await prisma.dinheiro.findMany()
    * ```
    */
  get dinheiro(): Prisma.DinheiroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vale`: Exposes CRUD operations for the **Vale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vales
    * const vales = await prisma.vale.findMany()
    * ```
    */
  get vale(): Prisma.ValeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mercadoria`: Exposes CRUD operations for the **Mercadoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mercadorias
    * const mercadorias = await prisma.mercadoria.findMany()
    * ```
    */
  get mercadoria(): Prisma.MercadoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peso`: Exposes CRUD operations for the **Peso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesos
    * const pesos = await prisma.peso.findMany()
    * ```
    */
  get peso(): Prisma.PesoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Dinheiro: 'Dinheiro',
    Funcionario: 'Funcionario',
    Vale: 'Vale',
    Mercadoria: 'Mercadoria',
    Peso: 'Peso'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dinheiro" | "funcionario" | "vale" | "mercadoria" | "peso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dinheiro: {
        payload: Prisma.$DinheiroPayload<ExtArgs>
        fields: Prisma.DinheiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DinheiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DinheiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DinheiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DinheiroPayload>
          }
          findFirst: {
            args: Prisma.DinheiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DinheiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DinheiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DinheiroPayload>
          }
          findMany: {
            args: Prisma.DinheiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DinheiroPayload>[]
          }
          create: {
            args: Prisma.DinheiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DinheiroPayload>
          }
          createMany: {
            args: Prisma.DinheiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DinheiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DinheiroPayload>
          }
          update: {
            args: Prisma.DinheiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DinheiroPayload>
          }
          deleteMany: {
            args: Prisma.DinheiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DinheiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DinheiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DinheiroPayload>
          }
          aggregate: {
            args: Prisma.DinheiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDinheiro>
          }
          groupBy: {
            args: Prisma.DinheiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<DinheiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.DinheiroCountArgs<ExtArgs>
            result: $Utils.Optional<DinheiroCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Vale: {
        payload: Prisma.$ValePayload<ExtArgs>
        fields: Prisma.ValeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValePayload>
          }
          findFirst: {
            args: Prisma.ValeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValePayload>
          }
          findMany: {
            args: Prisma.ValeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValePayload>[]
          }
          create: {
            args: Prisma.ValeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValePayload>
          }
          createMany: {
            args: Prisma.ValeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ValeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValePayload>
          }
          update: {
            args: Prisma.ValeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValePayload>
          }
          deleteMany: {
            args: Prisma.ValeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ValeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValePayload>
          }
          aggregate: {
            args: Prisma.ValeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVale>
          }
          groupBy: {
            args: Prisma.ValeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValeCountArgs<ExtArgs>
            result: $Utils.Optional<ValeCountAggregateOutputType> | number
          }
        }
      }
      Mercadoria: {
        payload: Prisma.$MercadoriaPayload<ExtArgs>
        fields: Prisma.MercadoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MercadoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercadoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MercadoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercadoriaPayload>
          }
          findFirst: {
            args: Prisma.MercadoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercadoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MercadoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercadoriaPayload>
          }
          findMany: {
            args: Prisma.MercadoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercadoriaPayload>[]
          }
          create: {
            args: Prisma.MercadoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercadoriaPayload>
          }
          createMany: {
            args: Prisma.MercadoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MercadoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercadoriaPayload>
          }
          update: {
            args: Prisma.MercadoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercadoriaPayload>
          }
          deleteMany: {
            args: Prisma.MercadoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MercadoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MercadoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MercadoriaPayload>
          }
          aggregate: {
            args: Prisma.MercadoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMercadoria>
          }
          groupBy: {
            args: Prisma.MercadoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MercadoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MercadoriaCountArgs<ExtArgs>
            result: $Utils.Optional<MercadoriaCountAggregateOutputType> | number
          }
        }
      }
      Peso: {
        payload: Prisma.$PesoPayload<ExtArgs>
        fields: Prisma.PesoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PesoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesoPayload>
          }
          findFirst: {
            args: Prisma.PesoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesoPayload>
          }
          findMany: {
            args: Prisma.PesoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesoPayload>[]
          }
          create: {
            args: Prisma.PesoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesoPayload>
          }
          createMany: {
            args: Prisma.PesoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PesoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesoPayload>
          }
          update: {
            args: Prisma.PesoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesoPayload>
          }
          deleteMany: {
            args: Prisma.PesoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PesoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PesoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesoPayload>
          }
          aggregate: {
            args: Prisma.PesoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeso>
          }
          groupBy: {
            args: Prisma.PesoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesoCountArgs<ExtArgs>
            result: $Utils.Optional<PesoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    dinheiro?: DinheiroOmit
    funcionario?: FuncionarioOmit
    vale?: ValeOmit
    mercadoria?: MercadoriaOmit
    peso?: PesoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DinheiroCountOutputType
   */

  export type DinheiroCountOutputType = {
    funcionarios: number
    vales: number
  }

  export type DinheiroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | DinheiroCountOutputTypeCountFuncionariosArgs
    vales?: boolean | DinheiroCountOutputTypeCountValesArgs
  }

  // Custom InputTypes
  /**
   * DinheiroCountOutputType without action
   */
  export type DinheiroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DinheiroCountOutputType
     */
    select?: DinheiroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DinheiroCountOutputType without action
   */
  export type DinheiroCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
  }

  /**
   * DinheiroCountOutputType without action
   */
  export type DinheiroCountOutputTypeCountValesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Dinheiro
   */

  export type AggregateDinheiro = {
    _count: DinheiroCountAggregateOutputType | null
    _avg: DinheiroAvgAggregateOutputType | null
    _sum: DinheiroSumAggregateOutputType | null
    _min: DinheiroMinAggregateOutputType | null
    _max: DinheiroMaxAggregateOutputType | null
  }

  export type DinheiroAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    mercadoriaId: number | null
  }

  export type DinheiroSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    mercadoriaId: number | null
  }

  export type DinheiroMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    valor: Decimal | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    dataMovimentacao: Date | null
    movimentacao: $Enums.TipoMovimentacao | null
    mercadoriaId: number | null
  }

  export type DinheiroMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    valor: Decimal | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    dataMovimentacao: Date | null
    movimentacao: $Enums.TipoMovimentacao | null
    mercadoriaId: number | null
  }

  export type DinheiroCountAggregateOutputType = {
    id: number
    tipo: number
    valor: number
    criadoEm: number
    atualizadoEm: number
    dataMovimentacao: number
    movimentacao: number
    mercadoriaId: number
    _all: number
  }


  export type DinheiroAvgAggregateInputType = {
    id?: true
    valor?: true
    mercadoriaId?: true
  }

  export type DinheiroSumAggregateInputType = {
    id?: true
    valor?: true
    mercadoriaId?: true
  }

  export type DinheiroMinAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    criadoEm?: true
    atualizadoEm?: true
    dataMovimentacao?: true
    movimentacao?: true
    mercadoriaId?: true
  }

  export type DinheiroMaxAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    criadoEm?: true
    atualizadoEm?: true
    dataMovimentacao?: true
    movimentacao?: true
    mercadoriaId?: true
  }

  export type DinheiroCountAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    criadoEm?: true
    atualizadoEm?: true
    dataMovimentacao?: true
    movimentacao?: true
    mercadoriaId?: true
    _all?: true
  }

  export type DinheiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dinheiro to aggregate.
     */
    where?: DinheiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinheiros to fetch.
     */
    orderBy?: DinheiroOrderByWithRelationInput | DinheiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DinheiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinheiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinheiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dinheiros
    **/
    _count?: true | DinheiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DinheiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DinheiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DinheiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DinheiroMaxAggregateInputType
  }

  export type GetDinheiroAggregateType<T extends DinheiroAggregateArgs> = {
        [P in keyof T & keyof AggregateDinheiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDinheiro[P]>
      : GetScalarType<T[P], AggregateDinheiro[P]>
  }




  export type DinheiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DinheiroWhereInput
    orderBy?: DinheiroOrderByWithAggregationInput | DinheiroOrderByWithAggregationInput[]
    by: DinheiroScalarFieldEnum[] | DinheiroScalarFieldEnum
    having?: DinheiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DinheiroCountAggregateInputType | true
    _avg?: DinheiroAvgAggregateInputType
    _sum?: DinheiroSumAggregateInputType
    _min?: DinheiroMinAggregateInputType
    _max?: DinheiroMaxAggregateInputType
  }

  export type DinheiroGroupByOutputType = {
    id: number
    tipo: string
    valor: Decimal
    criadoEm: Date
    atualizadoEm: Date
    dataMovimentacao: Date
    movimentacao: $Enums.TipoMovimentacao
    mercadoriaId: number | null
    _count: DinheiroCountAggregateOutputType | null
    _avg: DinheiroAvgAggregateOutputType | null
    _sum: DinheiroSumAggregateOutputType | null
    _min: DinheiroMinAggregateOutputType | null
    _max: DinheiroMaxAggregateOutputType | null
  }

  type GetDinheiroGroupByPayload<T extends DinheiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DinheiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DinheiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DinheiroGroupByOutputType[P]>
            : GetScalarType<T[P], DinheiroGroupByOutputType[P]>
        }
      >
    >


  export type DinheiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    dataMovimentacao?: boolean
    movimentacao?: boolean
    mercadoriaId?: boolean
    funcionarios?: boolean | Dinheiro$funcionariosArgs<ExtArgs>
    vales?: boolean | Dinheiro$valesArgs<ExtArgs>
    mercadoria?: boolean | Dinheiro$mercadoriaArgs<ExtArgs>
    _count?: boolean | DinheiroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dinheiro"]>



  export type DinheiroSelectScalar = {
    id?: boolean
    tipo?: boolean
    valor?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    dataMovimentacao?: boolean
    movimentacao?: boolean
    mercadoriaId?: boolean
  }

  export type DinheiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "valor" | "criadoEm" | "atualizadoEm" | "dataMovimentacao" | "movimentacao" | "mercadoriaId", ExtArgs["result"]["dinheiro"]>
  export type DinheiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | Dinheiro$funcionariosArgs<ExtArgs>
    vales?: boolean | Dinheiro$valesArgs<ExtArgs>
    mercadoria?: boolean | Dinheiro$mercadoriaArgs<ExtArgs>
    _count?: boolean | DinheiroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DinheiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dinheiro"
    objects: {
      funcionarios: Prisma.$FuncionarioPayload<ExtArgs>[]
      vales: Prisma.$ValePayload<ExtArgs>[]
      mercadoria: Prisma.$MercadoriaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      valor: Prisma.Decimal
      criadoEm: Date
      atualizadoEm: Date
      dataMovimentacao: Date
      movimentacao: $Enums.TipoMovimentacao
      mercadoriaId: number | null
    }, ExtArgs["result"]["dinheiro"]>
    composites: {}
  }

  type DinheiroGetPayload<S extends boolean | null | undefined | DinheiroDefaultArgs> = $Result.GetResult<Prisma.$DinheiroPayload, S>

  type DinheiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DinheiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DinheiroCountAggregateInputType | true
    }

  export interface DinheiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dinheiro'], meta: { name: 'Dinheiro' } }
    /**
     * Find zero or one Dinheiro that matches the filter.
     * @param {DinheiroFindUniqueArgs} args - Arguments to find a Dinheiro
     * @example
     * // Get one Dinheiro
     * const dinheiro = await prisma.dinheiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DinheiroFindUniqueArgs>(args: SelectSubset<T, DinheiroFindUniqueArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dinheiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DinheiroFindUniqueOrThrowArgs} args - Arguments to find a Dinheiro
     * @example
     * // Get one Dinheiro
     * const dinheiro = await prisma.dinheiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DinheiroFindUniqueOrThrowArgs>(args: SelectSubset<T, DinheiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dinheiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinheiroFindFirstArgs} args - Arguments to find a Dinheiro
     * @example
     * // Get one Dinheiro
     * const dinheiro = await prisma.dinheiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DinheiroFindFirstArgs>(args?: SelectSubset<T, DinheiroFindFirstArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dinheiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinheiroFindFirstOrThrowArgs} args - Arguments to find a Dinheiro
     * @example
     * // Get one Dinheiro
     * const dinheiro = await prisma.dinheiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DinheiroFindFirstOrThrowArgs>(args?: SelectSubset<T, DinheiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dinheiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinheiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dinheiros
     * const dinheiros = await prisma.dinheiro.findMany()
     * 
     * // Get first 10 Dinheiros
     * const dinheiros = await prisma.dinheiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dinheiroWithIdOnly = await prisma.dinheiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DinheiroFindManyArgs>(args?: SelectSubset<T, DinheiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dinheiro.
     * @param {DinheiroCreateArgs} args - Arguments to create a Dinheiro.
     * @example
     * // Create one Dinheiro
     * const Dinheiro = await prisma.dinheiro.create({
     *   data: {
     *     // ... data to create a Dinheiro
     *   }
     * })
     * 
     */
    create<T extends DinheiroCreateArgs>(args: SelectSubset<T, DinheiroCreateArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dinheiros.
     * @param {DinheiroCreateManyArgs} args - Arguments to create many Dinheiros.
     * @example
     * // Create many Dinheiros
     * const dinheiro = await prisma.dinheiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DinheiroCreateManyArgs>(args?: SelectSubset<T, DinheiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dinheiro.
     * @param {DinheiroDeleteArgs} args - Arguments to delete one Dinheiro.
     * @example
     * // Delete one Dinheiro
     * const Dinheiro = await prisma.dinheiro.delete({
     *   where: {
     *     // ... filter to delete one Dinheiro
     *   }
     * })
     * 
     */
    delete<T extends DinheiroDeleteArgs>(args: SelectSubset<T, DinheiroDeleteArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dinheiro.
     * @param {DinheiroUpdateArgs} args - Arguments to update one Dinheiro.
     * @example
     * // Update one Dinheiro
     * const dinheiro = await prisma.dinheiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DinheiroUpdateArgs>(args: SelectSubset<T, DinheiroUpdateArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dinheiros.
     * @param {DinheiroDeleteManyArgs} args - Arguments to filter Dinheiros to delete.
     * @example
     * // Delete a few Dinheiros
     * const { count } = await prisma.dinheiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DinheiroDeleteManyArgs>(args?: SelectSubset<T, DinheiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dinheiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinheiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dinheiros
     * const dinheiro = await prisma.dinheiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DinheiroUpdateManyArgs>(args: SelectSubset<T, DinheiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dinheiro.
     * @param {DinheiroUpsertArgs} args - Arguments to update or create a Dinheiro.
     * @example
     * // Update or create a Dinheiro
     * const dinheiro = await prisma.dinheiro.upsert({
     *   create: {
     *     // ... data to create a Dinheiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dinheiro we want to update
     *   }
     * })
     */
    upsert<T extends DinheiroUpsertArgs>(args: SelectSubset<T, DinheiroUpsertArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dinheiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinheiroCountArgs} args - Arguments to filter Dinheiros to count.
     * @example
     * // Count the number of Dinheiros
     * const count = await prisma.dinheiro.count({
     *   where: {
     *     // ... the filter for the Dinheiros we want to count
     *   }
     * })
    **/
    count<T extends DinheiroCountArgs>(
      args?: Subset<T, DinheiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DinheiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dinheiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinheiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DinheiroAggregateArgs>(args: Subset<T, DinheiroAggregateArgs>): Prisma.PrismaPromise<GetDinheiroAggregateType<T>>

    /**
     * Group by Dinheiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinheiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DinheiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DinheiroGroupByArgs['orderBy'] }
        : { orderBy?: DinheiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DinheiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDinheiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dinheiro model
   */
  readonly fields: DinheiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dinheiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DinheiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionarios<T extends Dinheiro$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, Dinheiro$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vales<T extends Dinheiro$valesArgs<ExtArgs> = {}>(args?: Subset<T, Dinheiro$valesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mercadoria<T extends Dinheiro$mercadoriaArgs<ExtArgs> = {}>(args?: Subset<T, Dinheiro$mercadoriaArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dinheiro model
   */
  interface DinheiroFieldRefs {
    readonly id: FieldRef<"Dinheiro", 'Int'>
    readonly tipo: FieldRef<"Dinheiro", 'String'>
    readonly valor: FieldRef<"Dinheiro", 'Decimal'>
    readonly criadoEm: FieldRef<"Dinheiro", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Dinheiro", 'DateTime'>
    readonly dataMovimentacao: FieldRef<"Dinheiro", 'DateTime'>
    readonly movimentacao: FieldRef<"Dinheiro", 'TipoMovimentacao'>
    readonly mercadoriaId: FieldRef<"Dinheiro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dinheiro findUnique
   */
  export type DinheiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    /**
     * Filter, which Dinheiro to fetch.
     */
    where: DinheiroWhereUniqueInput
  }

  /**
   * Dinheiro findUniqueOrThrow
   */
  export type DinheiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    /**
     * Filter, which Dinheiro to fetch.
     */
    where: DinheiroWhereUniqueInput
  }

  /**
   * Dinheiro findFirst
   */
  export type DinheiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    /**
     * Filter, which Dinheiro to fetch.
     */
    where?: DinheiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinheiros to fetch.
     */
    orderBy?: DinheiroOrderByWithRelationInput | DinheiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dinheiros.
     */
    cursor?: DinheiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinheiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinheiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dinheiros.
     */
    distinct?: DinheiroScalarFieldEnum | DinheiroScalarFieldEnum[]
  }

  /**
   * Dinheiro findFirstOrThrow
   */
  export type DinheiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    /**
     * Filter, which Dinheiro to fetch.
     */
    where?: DinheiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinheiros to fetch.
     */
    orderBy?: DinheiroOrderByWithRelationInput | DinheiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dinheiros.
     */
    cursor?: DinheiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinheiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinheiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dinheiros.
     */
    distinct?: DinheiroScalarFieldEnum | DinheiroScalarFieldEnum[]
  }

  /**
   * Dinheiro findMany
   */
  export type DinheiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    /**
     * Filter, which Dinheiros to fetch.
     */
    where?: DinheiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinheiros to fetch.
     */
    orderBy?: DinheiroOrderByWithRelationInput | DinheiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dinheiros.
     */
    cursor?: DinheiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinheiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinheiros.
     */
    skip?: number
    distinct?: DinheiroScalarFieldEnum | DinheiroScalarFieldEnum[]
  }

  /**
   * Dinheiro create
   */
  export type DinheiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    /**
     * The data needed to create a Dinheiro.
     */
    data: XOR<DinheiroCreateInput, DinheiroUncheckedCreateInput>
  }

  /**
   * Dinheiro createMany
   */
  export type DinheiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dinheiros.
     */
    data: DinheiroCreateManyInput | DinheiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dinheiro update
   */
  export type DinheiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    /**
     * The data needed to update a Dinheiro.
     */
    data: XOR<DinheiroUpdateInput, DinheiroUncheckedUpdateInput>
    /**
     * Choose, which Dinheiro to update.
     */
    where: DinheiroWhereUniqueInput
  }

  /**
   * Dinheiro updateMany
   */
  export type DinheiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dinheiros.
     */
    data: XOR<DinheiroUpdateManyMutationInput, DinheiroUncheckedUpdateManyInput>
    /**
     * Filter which Dinheiros to update
     */
    where?: DinheiroWhereInput
    /**
     * Limit how many Dinheiros to update.
     */
    limit?: number
  }

  /**
   * Dinheiro upsert
   */
  export type DinheiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    /**
     * The filter to search for the Dinheiro to update in case it exists.
     */
    where: DinheiroWhereUniqueInput
    /**
     * In case the Dinheiro found by the `where` argument doesn't exist, create a new Dinheiro with this data.
     */
    create: XOR<DinheiroCreateInput, DinheiroUncheckedCreateInput>
    /**
     * In case the Dinheiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DinheiroUpdateInput, DinheiroUncheckedUpdateInput>
  }

  /**
   * Dinheiro delete
   */
  export type DinheiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    /**
     * Filter which Dinheiro to delete.
     */
    where: DinheiroWhereUniqueInput
  }

  /**
   * Dinheiro deleteMany
   */
  export type DinheiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dinheiros to delete
     */
    where?: DinheiroWhereInput
    /**
     * Limit how many Dinheiros to delete.
     */
    limit?: number
  }

  /**
   * Dinheiro.funcionarios
   */
  export type Dinheiro$funcionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    cursor?: FuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Dinheiro.vales
   */
  export type Dinheiro$valesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    where?: ValeWhereInput
    orderBy?: ValeOrderByWithRelationInput | ValeOrderByWithRelationInput[]
    cursor?: ValeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValeScalarFieldEnum | ValeScalarFieldEnum[]
  }

  /**
   * Dinheiro.mercadoria
   */
  export type Dinheiro$mercadoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    where?: MercadoriaWhereInput
  }

  /**
   * Dinheiro without action
   */
  export type DinheiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    id: number | null
    salario: Decimal | null
    dinheiroId: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    id: number | null
    salario: Decimal | null
    dinheiroId: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    funcao: string | null
    salario: Decimal | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    dinheiroId: number | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    funcao: string | null
    salario: Decimal | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    dinheiroId: number | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    nome: number
    funcao: number
    salario: number
    criadoEm: number
    atualizadoEm: number
    dinheiroId: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    id?: true
    salario?: true
    dinheiroId?: true
  }

  export type FuncionarioSumAggregateInputType = {
    id?: true
    salario?: true
    dinheiroId?: true
  }

  export type FuncionarioMinAggregateInputType = {
    id?: true
    nome?: true
    funcao?: true
    salario?: true
    criadoEm?: true
    atualizadoEm?: true
    dinheiroId?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    nome?: true
    funcao?: true
    salario?: true
    criadoEm?: true
    atualizadoEm?: true
    dinheiroId?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    nome?: true
    funcao?: true
    salario?: true
    criadoEm?: true
    atualizadoEm?: true
    dinheiroId?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: number
    nome: string
    funcao: string
    salario: Decimal
    criadoEm: Date
    atualizadoEm: Date
    dinheiroId: number
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    funcao?: boolean
    salario?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    dinheiroId?: boolean
    dinheiro?: boolean | DinheiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>



  export type FuncionarioSelectScalar = {
    id?: boolean
    nome?: boolean
    funcao?: boolean
    salario?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    dinheiroId?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "funcao" | "salario" | "criadoEm" | "atualizadoEm" | "dinheiroId", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dinheiro?: boolean | DinheiroDefaultArgs<ExtArgs>
  }

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      dinheiro: Prisma.$DinheiroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      funcao: string
      salario: Prisma.Decimal
      criadoEm: Date
      atualizadoEm: Date
      dinheiroId: number
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dinheiro<T extends DinheiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DinheiroDefaultArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'Int'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly funcao: FieldRef<"Funcionario", 'String'>
    readonly salario: FieldRef<"Funcionario", 'Decimal'>
    readonly criadoEm: FieldRef<"Funcionario", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Funcionario", 'DateTime'>
    readonly dinheiroId: FieldRef<"Funcionario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model Vale
   */

  export type AggregateVale = {
    _count: ValeCountAggregateOutputType | null
    _avg: ValeAvgAggregateOutputType | null
    _sum: ValeSumAggregateOutputType | null
    _min: ValeMinAggregateOutputType | null
    _max: ValeMaxAggregateOutputType | null
  }

  export type ValeAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    dinheiroId: number | null
  }

  export type ValeSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    dinheiroId: number | null
  }

  export type ValeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    valor: Decimal | null
    dataEmprestimo: Date | null
    dinheiroId: number | null
  }

  export type ValeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    valor: Decimal | null
    dataEmprestimo: Date | null
    dinheiroId: number | null
  }

  export type ValeCountAggregateOutputType = {
    id: number
    nome: number
    valor: number
    dataEmprestimo: number
    dinheiroId: number
    _all: number
  }


  export type ValeAvgAggregateInputType = {
    id?: true
    valor?: true
    dinheiroId?: true
  }

  export type ValeSumAggregateInputType = {
    id?: true
    valor?: true
    dinheiroId?: true
  }

  export type ValeMinAggregateInputType = {
    id?: true
    nome?: true
    valor?: true
    dataEmprestimo?: true
    dinheiroId?: true
  }

  export type ValeMaxAggregateInputType = {
    id?: true
    nome?: true
    valor?: true
    dataEmprestimo?: true
    dinheiroId?: true
  }

  export type ValeCountAggregateInputType = {
    id?: true
    nome?: true
    valor?: true
    dataEmprestimo?: true
    dinheiroId?: true
    _all?: true
  }

  export type ValeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vale to aggregate.
     */
    where?: ValeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vales to fetch.
     */
    orderBy?: ValeOrderByWithRelationInput | ValeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vales
    **/
    _count?: true | ValeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValeMaxAggregateInputType
  }

  export type GetValeAggregateType<T extends ValeAggregateArgs> = {
        [P in keyof T & keyof AggregateVale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVale[P]>
      : GetScalarType<T[P], AggregateVale[P]>
  }




  export type ValeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValeWhereInput
    orderBy?: ValeOrderByWithAggregationInput | ValeOrderByWithAggregationInput[]
    by: ValeScalarFieldEnum[] | ValeScalarFieldEnum
    having?: ValeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValeCountAggregateInputType | true
    _avg?: ValeAvgAggregateInputType
    _sum?: ValeSumAggregateInputType
    _min?: ValeMinAggregateInputType
    _max?: ValeMaxAggregateInputType
  }

  export type ValeGroupByOutputType = {
    id: number
    nome: string
    valor: Decimal
    dataEmprestimo: Date
    dinheiroId: number
    _count: ValeCountAggregateOutputType | null
    _avg: ValeAvgAggregateOutputType | null
    _sum: ValeSumAggregateOutputType | null
    _min: ValeMinAggregateOutputType | null
    _max: ValeMaxAggregateOutputType | null
  }

  type GetValeGroupByPayload<T extends ValeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValeGroupByOutputType[P]>
            : GetScalarType<T[P], ValeGroupByOutputType[P]>
        }
      >
    >


  export type ValeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    valor?: boolean
    dataEmprestimo?: boolean
    dinheiroId?: boolean
    dinheiro?: boolean | DinheiroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vale"]>



  export type ValeSelectScalar = {
    id?: boolean
    nome?: boolean
    valor?: boolean
    dataEmprestimo?: boolean
    dinheiroId?: boolean
  }

  export type ValeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "valor" | "dataEmprestimo" | "dinheiroId", ExtArgs["result"]["vale"]>
  export type ValeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dinheiro?: boolean | DinheiroDefaultArgs<ExtArgs>
  }

  export type $ValePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vale"
    objects: {
      dinheiro: Prisma.$DinheiroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      valor: Prisma.Decimal
      dataEmprestimo: Date
      dinheiroId: number
    }, ExtArgs["result"]["vale"]>
    composites: {}
  }

  type ValeGetPayload<S extends boolean | null | undefined | ValeDefaultArgs> = $Result.GetResult<Prisma.$ValePayload, S>

  type ValeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValeCountAggregateInputType | true
    }

  export interface ValeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vale'], meta: { name: 'Vale' } }
    /**
     * Find zero or one Vale that matches the filter.
     * @param {ValeFindUniqueArgs} args - Arguments to find a Vale
     * @example
     * // Get one Vale
     * const vale = await prisma.vale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValeFindUniqueArgs>(args: SelectSubset<T, ValeFindUniqueArgs<ExtArgs>>): Prisma__ValeClient<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValeFindUniqueOrThrowArgs} args - Arguments to find a Vale
     * @example
     * // Get one Vale
     * const vale = await prisma.vale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValeFindUniqueOrThrowArgs>(args: SelectSubset<T, ValeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValeClient<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValeFindFirstArgs} args - Arguments to find a Vale
     * @example
     * // Get one Vale
     * const vale = await prisma.vale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValeFindFirstArgs>(args?: SelectSubset<T, ValeFindFirstArgs<ExtArgs>>): Prisma__ValeClient<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValeFindFirstOrThrowArgs} args - Arguments to find a Vale
     * @example
     * // Get one Vale
     * const vale = await prisma.vale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValeFindFirstOrThrowArgs>(args?: SelectSubset<T, ValeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValeClient<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vales
     * const vales = await prisma.vale.findMany()
     * 
     * // Get first 10 Vales
     * const vales = await prisma.vale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valeWithIdOnly = await prisma.vale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValeFindManyArgs>(args?: SelectSubset<T, ValeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vale.
     * @param {ValeCreateArgs} args - Arguments to create a Vale.
     * @example
     * // Create one Vale
     * const Vale = await prisma.vale.create({
     *   data: {
     *     // ... data to create a Vale
     *   }
     * })
     * 
     */
    create<T extends ValeCreateArgs>(args: SelectSubset<T, ValeCreateArgs<ExtArgs>>): Prisma__ValeClient<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vales.
     * @param {ValeCreateManyArgs} args - Arguments to create many Vales.
     * @example
     * // Create many Vales
     * const vale = await prisma.vale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValeCreateManyArgs>(args?: SelectSubset<T, ValeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vale.
     * @param {ValeDeleteArgs} args - Arguments to delete one Vale.
     * @example
     * // Delete one Vale
     * const Vale = await prisma.vale.delete({
     *   where: {
     *     // ... filter to delete one Vale
     *   }
     * })
     * 
     */
    delete<T extends ValeDeleteArgs>(args: SelectSubset<T, ValeDeleteArgs<ExtArgs>>): Prisma__ValeClient<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vale.
     * @param {ValeUpdateArgs} args - Arguments to update one Vale.
     * @example
     * // Update one Vale
     * const vale = await prisma.vale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValeUpdateArgs>(args: SelectSubset<T, ValeUpdateArgs<ExtArgs>>): Prisma__ValeClient<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vales.
     * @param {ValeDeleteManyArgs} args - Arguments to filter Vales to delete.
     * @example
     * // Delete a few Vales
     * const { count } = await prisma.vale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValeDeleteManyArgs>(args?: SelectSubset<T, ValeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vales
     * const vale = await prisma.vale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValeUpdateManyArgs>(args: SelectSubset<T, ValeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vale.
     * @param {ValeUpsertArgs} args - Arguments to update or create a Vale.
     * @example
     * // Update or create a Vale
     * const vale = await prisma.vale.upsert({
     *   create: {
     *     // ... data to create a Vale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vale we want to update
     *   }
     * })
     */
    upsert<T extends ValeUpsertArgs>(args: SelectSubset<T, ValeUpsertArgs<ExtArgs>>): Prisma__ValeClient<$Result.GetResult<Prisma.$ValePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValeCountArgs} args - Arguments to filter Vales to count.
     * @example
     * // Count the number of Vales
     * const count = await prisma.vale.count({
     *   where: {
     *     // ... the filter for the Vales we want to count
     *   }
     * })
    **/
    count<T extends ValeCountArgs>(
      args?: Subset<T, ValeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValeAggregateArgs>(args: Subset<T, ValeAggregateArgs>): Prisma.PrismaPromise<GetValeAggregateType<T>>

    /**
     * Group by Vale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ValeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValeGroupByArgs['orderBy'] }
        : { orderBy?: ValeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ValeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vale model
   */
  readonly fields: ValeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dinheiro<T extends DinheiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DinheiroDefaultArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vale model
   */
  interface ValeFieldRefs {
    readonly id: FieldRef<"Vale", 'Int'>
    readonly nome: FieldRef<"Vale", 'String'>
    readonly valor: FieldRef<"Vale", 'Decimal'>
    readonly dataEmprestimo: FieldRef<"Vale", 'DateTime'>
    readonly dinheiroId: FieldRef<"Vale", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vale findUnique
   */
  export type ValeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    /**
     * Filter, which Vale to fetch.
     */
    where: ValeWhereUniqueInput
  }

  /**
   * Vale findUniqueOrThrow
   */
  export type ValeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    /**
     * Filter, which Vale to fetch.
     */
    where: ValeWhereUniqueInput
  }

  /**
   * Vale findFirst
   */
  export type ValeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    /**
     * Filter, which Vale to fetch.
     */
    where?: ValeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vales to fetch.
     */
    orderBy?: ValeOrderByWithRelationInput | ValeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vales.
     */
    cursor?: ValeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vales.
     */
    distinct?: ValeScalarFieldEnum | ValeScalarFieldEnum[]
  }

  /**
   * Vale findFirstOrThrow
   */
  export type ValeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    /**
     * Filter, which Vale to fetch.
     */
    where?: ValeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vales to fetch.
     */
    orderBy?: ValeOrderByWithRelationInput | ValeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vales.
     */
    cursor?: ValeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vales.
     */
    distinct?: ValeScalarFieldEnum | ValeScalarFieldEnum[]
  }

  /**
   * Vale findMany
   */
  export type ValeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    /**
     * Filter, which Vales to fetch.
     */
    where?: ValeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vales to fetch.
     */
    orderBy?: ValeOrderByWithRelationInput | ValeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vales.
     */
    cursor?: ValeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vales.
     */
    skip?: number
    distinct?: ValeScalarFieldEnum | ValeScalarFieldEnum[]
  }

  /**
   * Vale create
   */
  export type ValeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    /**
     * The data needed to create a Vale.
     */
    data: XOR<ValeCreateInput, ValeUncheckedCreateInput>
  }

  /**
   * Vale createMany
   */
  export type ValeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vales.
     */
    data: ValeCreateManyInput | ValeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vale update
   */
  export type ValeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    /**
     * The data needed to update a Vale.
     */
    data: XOR<ValeUpdateInput, ValeUncheckedUpdateInput>
    /**
     * Choose, which Vale to update.
     */
    where: ValeWhereUniqueInput
  }

  /**
   * Vale updateMany
   */
  export type ValeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vales.
     */
    data: XOR<ValeUpdateManyMutationInput, ValeUncheckedUpdateManyInput>
    /**
     * Filter which Vales to update
     */
    where?: ValeWhereInput
    /**
     * Limit how many Vales to update.
     */
    limit?: number
  }

  /**
   * Vale upsert
   */
  export type ValeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    /**
     * The filter to search for the Vale to update in case it exists.
     */
    where: ValeWhereUniqueInput
    /**
     * In case the Vale found by the `where` argument doesn't exist, create a new Vale with this data.
     */
    create: XOR<ValeCreateInput, ValeUncheckedCreateInput>
    /**
     * In case the Vale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValeUpdateInput, ValeUncheckedUpdateInput>
  }

  /**
   * Vale delete
   */
  export type ValeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
    /**
     * Filter which Vale to delete.
     */
    where: ValeWhereUniqueInput
  }

  /**
   * Vale deleteMany
   */
  export type ValeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vales to delete
     */
    where?: ValeWhereInput
    /**
     * Limit how many Vales to delete.
     */
    limit?: number
  }

  /**
   * Vale without action
   */
  export type ValeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vale
     */
    select?: ValeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vale
     */
    omit?: ValeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValeInclude<ExtArgs> | null
  }


  /**
   * Model Mercadoria
   */

  export type AggregateMercadoria = {
    _count: MercadoriaCountAggregateOutputType | null
    _avg: MercadoriaAvgAggregateOutputType | null
    _sum: MercadoriaSumAggregateOutputType | null
    _min: MercadoriaMinAggregateOutputType | null
    _max: MercadoriaMaxAggregateOutputType | null
  }

  export type MercadoriaAvgAggregateOutputType = {
    id: number | null
    precoCompra: Decimal | null
    pesoId: number | null
  }

  export type MercadoriaSumAggregateOutputType = {
    id: number | null
    precoCompra: Decimal | null
    pesoId: number | null
  }

  export type MercadoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    precoCompra: Decimal | null
    codigoProduto: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    pesoId: number | null
  }

  export type MercadoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    precoCompra: Decimal | null
    codigoProduto: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    pesoId: number | null
  }

  export type MercadoriaCountAggregateOutputType = {
    id: number
    nome: number
    precoCompra: number
    codigoProduto: number
    criadoEm: number
    atualizadoEm: number
    pesoId: number
    _all: number
  }


  export type MercadoriaAvgAggregateInputType = {
    id?: true
    precoCompra?: true
    pesoId?: true
  }

  export type MercadoriaSumAggregateInputType = {
    id?: true
    precoCompra?: true
    pesoId?: true
  }

  export type MercadoriaMinAggregateInputType = {
    id?: true
    nome?: true
    precoCompra?: true
    codigoProduto?: true
    criadoEm?: true
    atualizadoEm?: true
    pesoId?: true
  }

  export type MercadoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    precoCompra?: true
    codigoProduto?: true
    criadoEm?: true
    atualizadoEm?: true
    pesoId?: true
  }

  export type MercadoriaCountAggregateInputType = {
    id?: true
    nome?: true
    precoCompra?: true
    codigoProduto?: true
    criadoEm?: true
    atualizadoEm?: true
    pesoId?: true
    _all?: true
  }

  export type MercadoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mercadoria to aggregate.
     */
    where?: MercadoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mercadorias to fetch.
     */
    orderBy?: MercadoriaOrderByWithRelationInput | MercadoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MercadoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mercadorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mercadorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mercadorias
    **/
    _count?: true | MercadoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MercadoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MercadoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MercadoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MercadoriaMaxAggregateInputType
  }

  export type GetMercadoriaAggregateType<T extends MercadoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMercadoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMercadoria[P]>
      : GetScalarType<T[P], AggregateMercadoria[P]>
  }




  export type MercadoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MercadoriaWhereInput
    orderBy?: MercadoriaOrderByWithAggregationInput | MercadoriaOrderByWithAggregationInput[]
    by: MercadoriaScalarFieldEnum[] | MercadoriaScalarFieldEnum
    having?: MercadoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MercadoriaCountAggregateInputType | true
    _avg?: MercadoriaAvgAggregateInputType
    _sum?: MercadoriaSumAggregateInputType
    _min?: MercadoriaMinAggregateInputType
    _max?: MercadoriaMaxAggregateInputType
  }

  export type MercadoriaGroupByOutputType = {
    id: number
    nome: string
    precoCompra: Decimal
    codigoProduto: string
    criadoEm: Date
    atualizadoEm: Date
    pesoId: number | null
    _count: MercadoriaCountAggregateOutputType | null
    _avg: MercadoriaAvgAggregateOutputType | null
    _sum: MercadoriaSumAggregateOutputType | null
    _min: MercadoriaMinAggregateOutputType | null
    _max: MercadoriaMaxAggregateOutputType | null
  }

  type GetMercadoriaGroupByPayload<T extends MercadoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MercadoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MercadoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MercadoriaGroupByOutputType[P]>
            : GetScalarType<T[P], MercadoriaGroupByOutputType[P]>
        }
      >
    >


  export type MercadoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    precoCompra?: boolean
    codigoProduto?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    pesoId?: boolean
    peso?: boolean | Mercadoria$pesoArgs<ExtArgs>
    dinheiro?: boolean | Mercadoria$dinheiroArgs<ExtArgs>
  }, ExtArgs["result"]["mercadoria"]>



  export type MercadoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    precoCompra?: boolean
    codigoProduto?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    pesoId?: boolean
  }

  export type MercadoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "precoCompra" | "codigoProduto" | "criadoEm" | "atualizadoEm" | "pesoId", ExtArgs["result"]["mercadoria"]>
  export type MercadoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peso?: boolean | Mercadoria$pesoArgs<ExtArgs>
    dinheiro?: boolean | Mercadoria$dinheiroArgs<ExtArgs>
  }

  export type $MercadoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mercadoria"
    objects: {
      peso: Prisma.$PesoPayload<ExtArgs> | null
      dinheiro: Prisma.$DinheiroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      precoCompra: Prisma.Decimal
      codigoProduto: string
      criadoEm: Date
      atualizadoEm: Date
      pesoId: number | null
    }, ExtArgs["result"]["mercadoria"]>
    composites: {}
  }

  type MercadoriaGetPayload<S extends boolean | null | undefined | MercadoriaDefaultArgs> = $Result.GetResult<Prisma.$MercadoriaPayload, S>

  type MercadoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MercadoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MercadoriaCountAggregateInputType | true
    }

  export interface MercadoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mercadoria'], meta: { name: 'Mercadoria' } }
    /**
     * Find zero or one Mercadoria that matches the filter.
     * @param {MercadoriaFindUniqueArgs} args - Arguments to find a Mercadoria
     * @example
     * // Get one Mercadoria
     * const mercadoria = await prisma.mercadoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MercadoriaFindUniqueArgs>(args: SelectSubset<T, MercadoriaFindUniqueArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mercadoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MercadoriaFindUniqueOrThrowArgs} args - Arguments to find a Mercadoria
     * @example
     * // Get one Mercadoria
     * const mercadoria = await prisma.mercadoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MercadoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MercadoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mercadoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercadoriaFindFirstArgs} args - Arguments to find a Mercadoria
     * @example
     * // Get one Mercadoria
     * const mercadoria = await prisma.mercadoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MercadoriaFindFirstArgs>(args?: SelectSubset<T, MercadoriaFindFirstArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mercadoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercadoriaFindFirstOrThrowArgs} args - Arguments to find a Mercadoria
     * @example
     * // Get one Mercadoria
     * const mercadoria = await prisma.mercadoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MercadoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MercadoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mercadorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercadoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mercadorias
     * const mercadorias = await prisma.mercadoria.findMany()
     * 
     * // Get first 10 Mercadorias
     * const mercadorias = await prisma.mercadoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mercadoriaWithIdOnly = await prisma.mercadoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MercadoriaFindManyArgs>(args?: SelectSubset<T, MercadoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mercadoria.
     * @param {MercadoriaCreateArgs} args - Arguments to create a Mercadoria.
     * @example
     * // Create one Mercadoria
     * const Mercadoria = await prisma.mercadoria.create({
     *   data: {
     *     // ... data to create a Mercadoria
     *   }
     * })
     * 
     */
    create<T extends MercadoriaCreateArgs>(args: SelectSubset<T, MercadoriaCreateArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mercadorias.
     * @param {MercadoriaCreateManyArgs} args - Arguments to create many Mercadorias.
     * @example
     * // Create many Mercadorias
     * const mercadoria = await prisma.mercadoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MercadoriaCreateManyArgs>(args?: SelectSubset<T, MercadoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mercadoria.
     * @param {MercadoriaDeleteArgs} args - Arguments to delete one Mercadoria.
     * @example
     * // Delete one Mercadoria
     * const Mercadoria = await prisma.mercadoria.delete({
     *   where: {
     *     // ... filter to delete one Mercadoria
     *   }
     * })
     * 
     */
    delete<T extends MercadoriaDeleteArgs>(args: SelectSubset<T, MercadoriaDeleteArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mercadoria.
     * @param {MercadoriaUpdateArgs} args - Arguments to update one Mercadoria.
     * @example
     * // Update one Mercadoria
     * const mercadoria = await prisma.mercadoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MercadoriaUpdateArgs>(args: SelectSubset<T, MercadoriaUpdateArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mercadorias.
     * @param {MercadoriaDeleteManyArgs} args - Arguments to filter Mercadorias to delete.
     * @example
     * // Delete a few Mercadorias
     * const { count } = await prisma.mercadoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MercadoriaDeleteManyArgs>(args?: SelectSubset<T, MercadoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mercadorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercadoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mercadorias
     * const mercadoria = await prisma.mercadoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MercadoriaUpdateManyArgs>(args: SelectSubset<T, MercadoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mercadoria.
     * @param {MercadoriaUpsertArgs} args - Arguments to update or create a Mercadoria.
     * @example
     * // Update or create a Mercadoria
     * const mercadoria = await prisma.mercadoria.upsert({
     *   create: {
     *     // ... data to create a Mercadoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mercadoria we want to update
     *   }
     * })
     */
    upsert<T extends MercadoriaUpsertArgs>(args: SelectSubset<T, MercadoriaUpsertArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mercadorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercadoriaCountArgs} args - Arguments to filter Mercadorias to count.
     * @example
     * // Count the number of Mercadorias
     * const count = await prisma.mercadoria.count({
     *   where: {
     *     // ... the filter for the Mercadorias we want to count
     *   }
     * })
    **/
    count<T extends MercadoriaCountArgs>(
      args?: Subset<T, MercadoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MercadoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mercadoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercadoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MercadoriaAggregateArgs>(args: Subset<T, MercadoriaAggregateArgs>): Prisma.PrismaPromise<GetMercadoriaAggregateType<T>>

    /**
     * Group by Mercadoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MercadoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MercadoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MercadoriaGroupByArgs['orderBy'] }
        : { orderBy?: MercadoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MercadoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMercadoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mercadoria model
   */
  readonly fields: MercadoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mercadoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MercadoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peso<T extends Mercadoria$pesoArgs<ExtArgs> = {}>(args?: Subset<T, Mercadoria$pesoArgs<ExtArgs>>): Prisma__PesoClient<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dinheiro<T extends Mercadoria$dinheiroArgs<ExtArgs> = {}>(args?: Subset<T, Mercadoria$dinheiroArgs<ExtArgs>>): Prisma__DinheiroClient<$Result.GetResult<Prisma.$DinheiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mercadoria model
   */
  interface MercadoriaFieldRefs {
    readonly id: FieldRef<"Mercadoria", 'Int'>
    readonly nome: FieldRef<"Mercadoria", 'String'>
    readonly precoCompra: FieldRef<"Mercadoria", 'Decimal'>
    readonly codigoProduto: FieldRef<"Mercadoria", 'String'>
    readonly criadoEm: FieldRef<"Mercadoria", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Mercadoria", 'DateTime'>
    readonly pesoId: FieldRef<"Mercadoria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mercadoria findUnique
   */
  export type MercadoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    /**
     * Filter, which Mercadoria to fetch.
     */
    where: MercadoriaWhereUniqueInput
  }

  /**
   * Mercadoria findUniqueOrThrow
   */
  export type MercadoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    /**
     * Filter, which Mercadoria to fetch.
     */
    where: MercadoriaWhereUniqueInput
  }

  /**
   * Mercadoria findFirst
   */
  export type MercadoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    /**
     * Filter, which Mercadoria to fetch.
     */
    where?: MercadoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mercadorias to fetch.
     */
    orderBy?: MercadoriaOrderByWithRelationInput | MercadoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mercadorias.
     */
    cursor?: MercadoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mercadorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mercadorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mercadorias.
     */
    distinct?: MercadoriaScalarFieldEnum | MercadoriaScalarFieldEnum[]
  }

  /**
   * Mercadoria findFirstOrThrow
   */
  export type MercadoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    /**
     * Filter, which Mercadoria to fetch.
     */
    where?: MercadoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mercadorias to fetch.
     */
    orderBy?: MercadoriaOrderByWithRelationInput | MercadoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mercadorias.
     */
    cursor?: MercadoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mercadorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mercadorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mercadorias.
     */
    distinct?: MercadoriaScalarFieldEnum | MercadoriaScalarFieldEnum[]
  }

  /**
   * Mercadoria findMany
   */
  export type MercadoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    /**
     * Filter, which Mercadorias to fetch.
     */
    where?: MercadoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mercadorias to fetch.
     */
    orderBy?: MercadoriaOrderByWithRelationInput | MercadoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mercadorias.
     */
    cursor?: MercadoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mercadorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mercadorias.
     */
    skip?: number
    distinct?: MercadoriaScalarFieldEnum | MercadoriaScalarFieldEnum[]
  }

  /**
   * Mercadoria create
   */
  export type MercadoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mercadoria.
     */
    data: XOR<MercadoriaCreateInput, MercadoriaUncheckedCreateInput>
  }

  /**
   * Mercadoria createMany
   */
  export type MercadoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mercadorias.
     */
    data: MercadoriaCreateManyInput | MercadoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mercadoria update
   */
  export type MercadoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mercadoria.
     */
    data: XOR<MercadoriaUpdateInput, MercadoriaUncheckedUpdateInput>
    /**
     * Choose, which Mercadoria to update.
     */
    where: MercadoriaWhereUniqueInput
  }

  /**
   * Mercadoria updateMany
   */
  export type MercadoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mercadorias.
     */
    data: XOR<MercadoriaUpdateManyMutationInput, MercadoriaUncheckedUpdateManyInput>
    /**
     * Filter which Mercadorias to update
     */
    where?: MercadoriaWhereInput
    /**
     * Limit how many Mercadorias to update.
     */
    limit?: number
  }

  /**
   * Mercadoria upsert
   */
  export type MercadoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mercadoria to update in case it exists.
     */
    where: MercadoriaWhereUniqueInput
    /**
     * In case the Mercadoria found by the `where` argument doesn't exist, create a new Mercadoria with this data.
     */
    create: XOR<MercadoriaCreateInput, MercadoriaUncheckedCreateInput>
    /**
     * In case the Mercadoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MercadoriaUpdateInput, MercadoriaUncheckedUpdateInput>
  }

  /**
   * Mercadoria delete
   */
  export type MercadoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    /**
     * Filter which Mercadoria to delete.
     */
    where: MercadoriaWhereUniqueInput
  }

  /**
   * Mercadoria deleteMany
   */
  export type MercadoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mercadorias to delete
     */
    where?: MercadoriaWhereInput
    /**
     * Limit how many Mercadorias to delete.
     */
    limit?: number
  }

  /**
   * Mercadoria.peso
   */
  export type Mercadoria$pesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    where?: PesoWhereInput
  }

  /**
   * Mercadoria.dinheiro
   */
  export type Mercadoria$dinheiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dinheiro
     */
    select?: DinheiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dinheiro
     */
    omit?: DinheiroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DinheiroInclude<ExtArgs> | null
    where?: DinheiroWhereInput
  }

  /**
   * Mercadoria without action
   */
  export type MercadoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
  }


  /**
   * Model Peso
   */

  export type AggregatePeso = {
    _count: PesoCountAggregateOutputType | null
    _avg: PesoAvgAggregateOutputType | null
    _sum: PesoSumAggregateOutputType | null
    _min: PesoMinAggregateOutputType | null
    _max: PesoMaxAggregateOutputType | null
  }

  export type PesoAvgAggregateOutputType = {
    id: number | null
    pesoKg: Decimal | null
  }

  export type PesoSumAggregateOutputType = {
    id: number | null
    pesoKg: Decimal | null
  }

  export type PesoMinAggregateOutputType = {
    id: number | null
    pesoKg: Decimal | null
    dataCadastro: Date | null
  }

  export type PesoMaxAggregateOutputType = {
    id: number | null
    pesoKg: Decimal | null
    dataCadastro: Date | null
  }

  export type PesoCountAggregateOutputType = {
    id: number
    pesoKg: number
    dataCadastro: number
    _all: number
  }


  export type PesoAvgAggregateInputType = {
    id?: true
    pesoKg?: true
  }

  export type PesoSumAggregateInputType = {
    id?: true
    pesoKg?: true
  }

  export type PesoMinAggregateInputType = {
    id?: true
    pesoKg?: true
    dataCadastro?: true
  }

  export type PesoMaxAggregateInputType = {
    id?: true
    pesoKg?: true
    dataCadastro?: true
  }

  export type PesoCountAggregateInputType = {
    id?: true
    pesoKg?: true
    dataCadastro?: true
    _all?: true
  }

  export type PesoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peso to aggregate.
     */
    where?: PesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesos to fetch.
     */
    orderBy?: PesoOrderByWithRelationInput | PesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pesos
    **/
    _count?: true | PesoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesoMaxAggregateInputType
  }

  export type GetPesoAggregateType<T extends PesoAggregateArgs> = {
        [P in keyof T & keyof AggregatePeso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeso[P]>
      : GetScalarType<T[P], AggregatePeso[P]>
  }




  export type PesoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesoWhereInput
    orderBy?: PesoOrderByWithAggregationInput | PesoOrderByWithAggregationInput[]
    by: PesoScalarFieldEnum[] | PesoScalarFieldEnum
    having?: PesoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesoCountAggregateInputType | true
    _avg?: PesoAvgAggregateInputType
    _sum?: PesoSumAggregateInputType
    _min?: PesoMinAggregateInputType
    _max?: PesoMaxAggregateInputType
  }

  export type PesoGroupByOutputType = {
    id: number
    pesoKg: Decimal
    dataCadastro: Date
    _count: PesoCountAggregateOutputType | null
    _avg: PesoAvgAggregateOutputType | null
    _sum: PesoSumAggregateOutputType | null
    _min: PesoMinAggregateOutputType | null
    _max: PesoMaxAggregateOutputType | null
  }

  type GetPesoGroupByPayload<T extends PesoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesoGroupByOutputType[P]>
            : GetScalarType<T[P], PesoGroupByOutputType[P]>
        }
      >
    >


  export type PesoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pesoKg?: boolean
    dataCadastro?: boolean
    mercadoria?: boolean | Peso$mercadoriaArgs<ExtArgs>
  }, ExtArgs["result"]["peso"]>



  export type PesoSelectScalar = {
    id?: boolean
    pesoKg?: boolean
    dataCadastro?: boolean
  }

  export type PesoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pesoKg" | "dataCadastro", ExtArgs["result"]["peso"]>
  export type PesoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mercadoria?: boolean | Peso$mercadoriaArgs<ExtArgs>
  }

  export type $PesoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peso"
    objects: {
      mercadoria: Prisma.$MercadoriaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pesoKg: Prisma.Decimal
      dataCadastro: Date
    }, ExtArgs["result"]["peso"]>
    composites: {}
  }

  type PesoGetPayload<S extends boolean | null | undefined | PesoDefaultArgs> = $Result.GetResult<Prisma.$PesoPayload, S>

  type PesoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PesoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesoCountAggregateInputType | true
    }

  export interface PesoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peso'], meta: { name: 'Peso' } }
    /**
     * Find zero or one Peso that matches the filter.
     * @param {PesoFindUniqueArgs} args - Arguments to find a Peso
     * @example
     * // Get one Peso
     * const peso = await prisma.peso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesoFindUniqueArgs>(args: SelectSubset<T, PesoFindUniqueArgs<ExtArgs>>): Prisma__PesoClient<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesoFindUniqueOrThrowArgs} args - Arguments to find a Peso
     * @example
     * // Get one Peso
     * const peso = await prisma.peso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesoFindUniqueOrThrowArgs>(args: SelectSubset<T, PesoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PesoClient<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesoFindFirstArgs} args - Arguments to find a Peso
     * @example
     * // Get one Peso
     * const peso = await prisma.peso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesoFindFirstArgs>(args?: SelectSubset<T, PesoFindFirstArgs<ExtArgs>>): Prisma__PesoClient<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesoFindFirstOrThrowArgs} args - Arguments to find a Peso
     * @example
     * // Get one Peso
     * const peso = await prisma.peso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesoFindFirstOrThrowArgs>(args?: SelectSubset<T, PesoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PesoClient<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pesos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesos
     * const pesos = await prisma.peso.findMany()
     * 
     * // Get first 10 Pesos
     * const pesos = await prisma.peso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesoWithIdOnly = await prisma.peso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PesoFindManyArgs>(args?: SelectSubset<T, PesoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peso.
     * @param {PesoCreateArgs} args - Arguments to create a Peso.
     * @example
     * // Create one Peso
     * const Peso = await prisma.peso.create({
     *   data: {
     *     // ... data to create a Peso
     *   }
     * })
     * 
     */
    create<T extends PesoCreateArgs>(args: SelectSubset<T, PesoCreateArgs<ExtArgs>>): Prisma__PesoClient<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pesos.
     * @param {PesoCreateManyArgs} args - Arguments to create many Pesos.
     * @example
     * // Create many Pesos
     * const peso = await prisma.peso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PesoCreateManyArgs>(args?: SelectSubset<T, PesoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peso.
     * @param {PesoDeleteArgs} args - Arguments to delete one Peso.
     * @example
     * // Delete one Peso
     * const Peso = await prisma.peso.delete({
     *   where: {
     *     // ... filter to delete one Peso
     *   }
     * })
     * 
     */
    delete<T extends PesoDeleteArgs>(args: SelectSubset<T, PesoDeleteArgs<ExtArgs>>): Prisma__PesoClient<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peso.
     * @param {PesoUpdateArgs} args - Arguments to update one Peso.
     * @example
     * // Update one Peso
     * const peso = await prisma.peso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PesoUpdateArgs>(args: SelectSubset<T, PesoUpdateArgs<ExtArgs>>): Prisma__PesoClient<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pesos.
     * @param {PesoDeleteManyArgs} args - Arguments to filter Pesos to delete.
     * @example
     * // Delete a few Pesos
     * const { count } = await prisma.peso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PesoDeleteManyArgs>(args?: SelectSubset<T, PesoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesos
     * const peso = await prisma.peso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PesoUpdateManyArgs>(args: SelectSubset<T, PesoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peso.
     * @param {PesoUpsertArgs} args - Arguments to update or create a Peso.
     * @example
     * // Update or create a Peso
     * const peso = await prisma.peso.upsert({
     *   create: {
     *     // ... data to create a Peso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peso we want to update
     *   }
     * })
     */
    upsert<T extends PesoUpsertArgs>(args: SelectSubset<T, PesoUpsertArgs<ExtArgs>>): Prisma__PesoClient<$Result.GetResult<Prisma.$PesoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesoCountArgs} args - Arguments to filter Pesos to count.
     * @example
     * // Count the number of Pesos
     * const count = await prisma.peso.count({
     *   where: {
     *     // ... the filter for the Pesos we want to count
     *   }
     * })
    **/
    count<T extends PesoCountArgs>(
      args?: Subset<T, PesoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PesoAggregateArgs>(args: Subset<T, PesoAggregateArgs>): Prisma.PrismaPromise<GetPesoAggregateType<T>>

    /**
     * Group by Peso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PesoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesoGroupByArgs['orderBy'] }
        : { orderBy?: PesoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PesoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peso model
   */
  readonly fields: PesoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PesoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mercadoria<T extends Peso$mercadoriaArgs<ExtArgs> = {}>(args?: Subset<T, Peso$mercadoriaArgs<ExtArgs>>): Prisma__MercadoriaClient<$Result.GetResult<Prisma.$MercadoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Peso model
   */
  interface PesoFieldRefs {
    readonly id: FieldRef<"Peso", 'Int'>
    readonly pesoKg: FieldRef<"Peso", 'Decimal'>
    readonly dataCadastro: FieldRef<"Peso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Peso findUnique
   */
  export type PesoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    /**
     * Filter, which Peso to fetch.
     */
    where: PesoWhereUniqueInput
  }

  /**
   * Peso findUniqueOrThrow
   */
  export type PesoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    /**
     * Filter, which Peso to fetch.
     */
    where: PesoWhereUniqueInput
  }

  /**
   * Peso findFirst
   */
  export type PesoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    /**
     * Filter, which Peso to fetch.
     */
    where?: PesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesos to fetch.
     */
    orderBy?: PesoOrderByWithRelationInput | PesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesos.
     */
    cursor?: PesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesos.
     */
    distinct?: PesoScalarFieldEnum | PesoScalarFieldEnum[]
  }

  /**
   * Peso findFirstOrThrow
   */
  export type PesoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    /**
     * Filter, which Peso to fetch.
     */
    where?: PesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesos to fetch.
     */
    orderBy?: PesoOrderByWithRelationInput | PesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesos.
     */
    cursor?: PesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesos.
     */
    distinct?: PesoScalarFieldEnum | PesoScalarFieldEnum[]
  }

  /**
   * Peso findMany
   */
  export type PesoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    /**
     * Filter, which Pesos to fetch.
     */
    where?: PesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesos to fetch.
     */
    orderBy?: PesoOrderByWithRelationInput | PesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pesos.
     */
    cursor?: PesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesos.
     */
    skip?: number
    distinct?: PesoScalarFieldEnum | PesoScalarFieldEnum[]
  }

  /**
   * Peso create
   */
  export type PesoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    /**
     * The data needed to create a Peso.
     */
    data: XOR<PesoCreateInput, PesoUncheckedCreateInput>
  }

  /**
   * Peso createMany
   */
  export type PesoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pesos.
     */
    data: PesoCreateManyInput | PesoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peso update
   */
  export type PesoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    /**
     * The data needed to update a Peso.
     */
    data: XOR<PesoUpdateInput, PesoUncheckedUpdateInput>
    /**
     * Choose, which Peso to update.
     */
    where: PesoWhereUniqueInput
  }

  /**
   * Peso updateMany
   */
  export type PesoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pesos.
     */
    data: XOR<PesoUpdateManyMutationInput, PesoUncheckedUpdateManyInput>
    /**
     * Filter which Pesos to update
     */
    where?: PesoWhereInput
    /**
     * Limit how many Pesos to update.
     */
    limit?: number
  }

  /**
   * Peso upsert
   */
  export type PesoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    /**
     * The filter to search for the Peso to update in case it exists.
     */
    where: PesoWhereUniqueInput
    /**
     * In case the Peso found by the `where` argument doesn't exist, create a new Peso with this data.
     */
    create: XOR<PesoCreateInput, PesoUncheckedCreateInput>
    /**
     * In case the Peso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesoUpdateInput, PesoUncheckedUpdateInput>
  }

  /**
   * Peso delete
   */
  export type PesoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
    /**
     * Filter which Peso to delete.
     */
    where: PesoWhereUniqueInput
  }

  /**
   * Peso deleteMany
   */
  export type PesoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesos to delete
     */
    where?: PesoWhereInput
    /**
     * Limit how many Pesos to delete.
     */
    limit?: number
  }

  /**
   * Peso.mercadoria
   */
  export type Peso$mercadoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mercadoria
     */
    select?: MercadoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mercadoria
     */
    omit?: MercadoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MercadoriaInclude<ExtArgs> | null
    where?: MercadoriaWhereInput
  }

  /**
   * Peso without action
   */
  export type PesoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peso
     */
    select?: PesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peso
     */
    omit?: PesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DinheiroScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    valor: 'valor',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    dataMovimentacao: 'dataMovimentacao',
    movimentacao: 'movimentacao',
    mercadoriaId: 'mercadoriaId'
  };

  export type DinheiroScalarFieldEnum = (typeof DinheiroScalarFieldEnum)[keyof typeof DinheiroScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    funcao: 'funcao',
    salario: 'salario',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    dinheiroId: 'dinheiroId'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const ValeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    valor: 'valor',
    dataEmprestimo: 'dataEmprestimo',
    dinheiroId: 'dinheiroId'
  };

  export type ValeScalarFieldEnum = (typeof ValeScalarFieldEnum)[keyof typeof ValeScalarFieldEnum]


  export const MercadoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    precoCompra: 'precoCompra',
    codigoProduto: 'codigoProduto',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    pesoId: 'pesoId'
  };

  export type MercadoriaScalarFieldEnum = (typeof MercadoriaScalarFieldEnum)[keyof typeof MercadoriaScalarFieldEnum]


  export const PesoScalarFieldEnum: {
    id: 'id',
    pesoKg: 'pesoKg',
    dataCadastro: 'dataCadastro'
  };

  export type PesoScalarFieldEnum = (typeof PesoScalarFieldEnum)[keyof typeof PesoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DinheiroOrderByRelevanceFieldEnum: {
    tipo: 'tipo'
  };

  export type DinheiroOrderByRelevanceFieldEnum = (typeof DinheiroOrderByRelevanceFieldEnum)[keyof typeof DinheiroOrderByRelevanceFieldEnum]


  export const FuncionarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    funcao: 'funcao'
  };

  export type FuncionarioOrderByRelevanceFieldEnum = (typeof FuncionarioOrderByRelevanceFieldEnum)[keyof typeof FuncionarioOrderByRelevanceFieldEnum]


  export const ValeOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type ValeOrderByRelevanceFieldEnum = (typeof ValeOrderByRelevanceFieldEnum)[keyof typeof ValeOrderByRelevanceFieldEnum]


  export const MercadoriaOrderByRelevanceFieldEnum: {
    nome: 'nome',
    codigoProduto: 'codigoProduto'
  };

  export type MercadoriaOrderByRelevanceFieldEnum = (typeof MercadoriaOrderByRelevanceFieldEnum)[keyof typeof MercadoriaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TipoMovimentacao'
   */
  export type EnumTipoMovimentacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimentacao'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DinheiroWhereInput = {
    AND?: DinheiroWhereInput | DinheiroWhereInput[]
    OR?: DinheiroWhereInput[]
    NOT?: DinheiroWhereInput | DinheiroWhereInput[]
    id?: IntFilter<"Dinheiro"> | number
    tipo?: StringFilter<"Dinheiro"> | string
    valor?: DecimalFilter<"Dinheiro"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"Dinheiro"> | Date | string
    atualizadoEm?: DateTimeFilter<"Dinheiro"> | Date | string
    dataMovimentacao?: DateTimeFilter<"Dinheiro"> | Date | string
    movimentacao?: EnumTipoMovimentacaoFilter<"Dinheiro"> | $Enums.TipoMovimentacao
    mercadoriaId?: IntNullableFilter<"Dinheiro"> | number | null
    funcionarios?: FuncionarioListRelationFilter
    vales?: ValeListRelationFilter
    mercadoria?: XOR<MercadoriaNullableScalarRelationFilter, MercadoriaWhereInput> | null
  }

  export type DinheiroOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dataMovimentacao?: SortOrder
    movimentacao?: SortOrder
    mercadoriaId?: SortOrderInput | SortOrder
    funcionarios?: FuncionarioOrderByRelationAggregateInput
    vales?: ValeOrderByRelationAggregateInput
    mercadoria?: MercadoriaOrderByWithRelationInput
    _relevance?: DinheiroOrderByRelevanceInput
  }

  export type DinheiroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mercadoriaId?: number
    AND?: DinheiroWhereInput | DinheiroWhereInput[]
    OR?: DinheiroWhereInput[]
    NOT?: DinheiroWhereInput | DinheiroWhereInput[]
    tipo?: StringFilter<"Dinheiro"> | string
    valor?: DecimalFilter<"Dinheiro"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"Dinheiro"> | Date | string
    atualizadoEm?: DateTimeFilter<"Dinheiro"> | Date | string
    dataMovimentacao?: DateTimeFilter<"Dinheiro"> | Date | string
    movimentacao?: EnumTipoMovimentacaoFilter<"Dinheiro"> | $Enums.TipoMovimentacao
    funcionarios?: FuncionarioListRelationFilter
    vales?: ValeListRelationFilter
    mercadoria?: XOR<MercadoriaNullableScalarRelationFilter, MercadoriaWhereInput> | null
  }, "id" | "mercadoriaId">

  export type DinheiroOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dataMovimentacao?: SortOrder
    movimentacao?: SortOrder
    mercadoriaId?: SortOrderInput | SortOrder
    _count?: DinheiroCountOrderByAggregateInput
    _avg?: DinheiroAvgOrderByAggregateInput
    _max?: DinheiroMaxOrderByAggregateInput
    _min?: DinheiroMinOrderByAggregateInput
    _sum?: DinheiroSumOrderByAggregateInput
  }

  export type DinheiroScalarWhereWithAggregatesInput = {
    AND?: DinheiroScalarWhereWithAggregatesInput | DinheiroScalarWhereWithAggregatesInput[]
    OR?: DinheiroScalarWhereWithAggregatesInput[]
    NOT?: DinheiroScalarWhereWithAggregatesInput | DinheiroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dinheiro"> | number
    tipo?: StringWithAggregatesFilter<"Dinheiro"> | string
    valor?: DecimalWithAggregatesFilter<"Dinheiro"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeWithAggregatesFilter<"Dinheiro"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Dinheiro"> | Date | string
    dataMovimentacao?: DateTimeWithAggregatesFilter<"Dinheiro"> | Date | string
    movimentacao?: EnumTipoMovimentacaoWithAggregatesFilter<"Dinheiro"> | $Enums.TipoMovimentacao
    mercadoriaId?: IntNullableWithAggregatesFilter<"Dinheiro"> | number | null
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: IntFilter<"Funcionario"> | number
    nome?: StringFilter<"Funcionario"> | string
    funcao?: StringFilter<"Funcionario"> | string
    salario?: DecimalFilter<"Funcionario"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"Funcionario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Funcionario"> | Date | string
    dinheiroId?: IntFilter<"Funcionario"> | number
    dinheiro?: XOR<DinheiroScalarRelationFilter, DinheiroWhereInput>
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    funcao?: SortOrder
    salario?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dinheiroId?: SortOrder
    dinheiro?: DinheiroOrderByWithRelationInput
    _relevance?: FuncionarioOrderByRelevanceInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    nome?: StringFilter<"Funcionario"> | string
    funcao?: StringFilter<"Funcionario"> | string
    salario?: DecimalFilter<"Funcionario"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"Funcionario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Funcionario"> | Date | string
    dinheiroId?: IntFilter<"Funcionario"> | number
    dinheiro?: XOR<DinheiroScalarRelationFilter, DinheiroWhereInput>
  }, "id">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    funcao?: SortOrder
    salario?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dinheiroId?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcionario"> | number
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    funcao?: StringWithAggregatesFilter<"Funcionario"> | string
    salario?: DecimalWithAggregatesFilter<"Funcionario"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
    dinheiroId?: IntWithAggregatesFilter<"Funcionario"> | number
  }

  export type ValeWhereInput = {
    AND?: ValeWhereInput | ValeWhereInput[]
    OR?: ValeWhereInput[]
    NOT?: ValeWhereInput | ValeWhereInput[]
    id?: IntFilter<"Vale"> | number
    nome?: StringFilter<"Vale"> | string
    valor?: DecimalFilter<"Vale"> | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFilter<"Vale"> | Date | string
    dinheiroId?: IntFilter<"Vale"> | number
    dinheiro?: XOR<DinheiroScalarRelationFilter, DinheiroWhereInput>
  }

  export type ValeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    dataEmprestimo?: SortOrder
    dinheiroId?: SortOrder
    dinheiro?: DinheiroOrderByWithRelationInput
    _relevance?: ValeOrderByRelevanceInput
  }

  export type ValeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ValeWhereInput | ValeWhereInput[]
    OR?: ValeWhereInput[]
    NOT?: ValeWhereInput | ValeWhereInput[]
    nome?: StringFilter<"Vale"> | string
    valor?: DecimalFilter<"Vale"> | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFilter<"Vale"> | Date | string
    dinheiroId?: IntFilter<"Vale"> | number
    dinheiro?: XOR<DinheiroScalarRelationFilter, DinheiroWhereInput>
  }, "id">

  export type ValeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    dataEmprestimo?: SortOrder
    dinheiroId?: SortOrder
    _count?: ValeCountOrderByAggregateInput
    _avg?: ValeAvgOrderByAggregateInput
    _max?: ValeMaxOrderByAggregateInput
    _min?: ValeMinOrderByAggregateInput
    _sum?: ValeSumOrderByAggregateInput
  }

  export type ValeScalarWhereWithAggregatesInput = {
    AND?: ValeScalarWhereWithAggregatesInput | ValeScalarWhereWithAggregatesInput[]
    OR?: ValeScalarWhereWithAggregatesInput[]
    NOT?: ValeScalarWhereWithAggregatesInput | ValeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vale"> | number
    nome?: StringWithAggregatesFilter<"Vale"> | string
    valor?: DecimalWithAggregatesFilter<"Vale"> | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeWithAggregatesFilter<"Vale"> | Date | string
    dinheiroId?: IntWithAggregatesFilter<"Vale"> | number
  }

  export type MercadoriaWhereInput = {
    AND?: MercadoriaWhereInput | MercadoriaWhereInput[]
    OR?: MercadoriaWhereInput[]
    NOT?: MercadoriaWhereInput | MercadoriaWhereInput[]
    id?: IntFilter<"Mercadoria"> | number
    nome?: StringFilter<"Mercadoria"> | string
    precoCompra?: DecimalFilter<"Mercadoria"> | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringFilter<"Mercadoria"> | string
    criadoEm?: DateTimeFilter<"Mercadoria"> | Date | string
    atualizadoEm?: DateTimeFilter<"Mercadoria"> | Date | string
    pesoId?: IntNullableFilter<"Mercadoria"> | number | null
    peso?: XOR<PesoNullableScalarRelationFilter, PesoWhereInput> | null
    dinheiro?: XOR<DinheiroNullableScalarRelationFilter, DinheiroWhereInput> | null
  }

  export type MercadoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    precoCompra?: SortOrder
    codigoProduto?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    pesoId?: SortOrderInput | SortOrder
    peso?: PesoOrderByWithRelationInput
    dinheiro?: DinheiroOrderByWithRelationInput
    _relevance?: MercadoriaOrderByRelevanceInput
  }

  export type MercadoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigoProduto?: string
    pesoId?: number
    AND?: MercadoriaWhereInput | MercadoriaWhereInput[]
    OR?: MercadoriaWhereInput[]
    NOT?: MercadoriaWhereInput | MercadoriaWhereInput[]
    nome?: StringFilter<"Mercadoria"> | string
    precoCompra?: DecimalFilter<"Mercadoria"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"Mercadoria"> | Date | string
    atualizadoEm?: DateTimeFilter<"Mercadoria"> | Date | string
    peso?: XOR<PesoNullableScalarRelationFilter, PesoWhereInput> | null
    dinheiro?: XOR<DinheiroNullableScalarRelationFilter, DinheiroWhereInput> | null
  }, "id" | "codigoProduto" | "pesoId">

  export type MercadoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    precoCompra?: SortOrder
    codigoProduto?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    pesoId?: SortOrderInput | SortOrder
    _count?: MercadoriaCountOrderByAggregateInput
    _avg?: MercadoriaAvgOrderByAggregateInput
    _max?: MercadoriaMaxOrderByAggregateInput
    _min?: MercadoriaMinOrderByAggregateInput
    _sum?: MercadoriaSumOrderByAggregateInput
  }

  export type MercadoriaScalarWhereWithAggregatesInput = {
    AND?: MercadoriaScalarWhereWithAggregatesInput | MercadoriaScalarWhereWithAggregatesInput[]
    OR?: MercadoriaScalarWhereWithAggregatesInput[]
    NOT?: MercadoriaScalarWhereWithAggregatesInput | MercadoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mercadoria"> | number
    nome?: StringWithAggregatesFilter<"Mercadoria"> | string
    precoCompra?: DecimalWithAggregatesFilter<"Mercadoria"> | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringWithAggregatesFilter<"Mercadoria"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Mercadoria"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Mercadoria"> | Date | string
    pesoId?: IntNullableWithAggregatesFilter<"Mercadoria"> | number | null
  }

  export type PesoWhereInput = {
    AND?: PesoWhereInput | PesoWhereInput[]
    OR?: PesoWhereInput[]
    NOT?: PesoWhereInput | PesoWhereInput[]
    id?: IntFilter<"Peso"> | number
    pesoKg?: DecimalFilter<"Peso"> | Decimal | DecimalJsLike | number | string
    dataCadastro?: DateTimeFilter<"Peso"> | Date | string
    mercadoria?: XOR<MercadoriaNullableScalarRelationFilter, MercadoriaWhereInput> | null
  }

  export type PesoOrderByWithRelationInput = {
    id?: SortOrder
    pesoKg?: SortOrder
    dataCadastro?: SortOrder
    mercadoria?: MercadoriaOrderByWithRelationInput
  }

  export type PesoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PesoWhereInput | PesoWhereInput[]
    OR?: PesoWhereInput[]
    NOT?: PesoWhereInput | PesoWhereInput[]
    pesoKg?: DecimalFilter<"Peso"> | Decimal | DecimalJsLike | number | string
    dataCadastro?: DateTimeFilter<"Peso"> | Date | string
    mercadoria?: XOR<MercadoriaNullableScalarRelationFilter, MercadoriaWhereInput> | null
  }, "id">

  export type PesoOrderByWithAggregationInput = {
    id?: SortOrder
    pesoKg?: SortOrder
    dataCadastro?: SortOrder
    _count?: PesoCountOrderByAggregateInput
    _avg?: PesoAvgOrderByAggregateInput
    _max?: PesoMaxOrderByAggregateInput
    _min?: PesoMinOrderByAggregateInput
    _sum?: PesoSumOrderByAggregateInput
  }

  export type PesoScalarWhereWithAggregatesInput = {
    AND?: PesoScalarWhereWithAggregatesInput | PesoScalarWhereWithAggregatesInput[]
    OR?: PesoScalarWhereWithAggregatesInput[]
    NOT?: PesoScalarWhereWithAggregatesInput | PesoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Peso"> | number
    pesoKg?: DecimalWithAggregatesFilter<"Peso"> | Decimal | DecimalJsLike | number | string
    dataCadastro?: DateTimeWithAggregatesFilter<"Peso"> | Date | string
  }

  export type DinheiroCreateInput = {
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dataMovimentacao: Date | string
    movimentacao: $Enums.TipoMovimentacao
    funcionarios?: FuncionarioCreateNestedManyWithoutDinheiroInput
    vales?: ValeCreateNestedManyWithoutDinheiroInput
    mercadoria?: MercadoriaCreateNestedOneWithoutDinheiroInput
  }

  export type DinheiroUncheckedCreateInput = {
    id?: number
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dataMovimentacao: Date | string
    movimentacao: $Enums.TipoMovimentacao
    mercadoriaId?: number | null
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutDinheiroInput
    vales?: ValeUncheckedCreateNestedManyWithoutDinheiroInput
  }

  export type DinheiroUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    funcionarios?: FuncionarioUpdateManyWithoutDinheiroNestedInput
    vales?: ValeUpdateManyWithoutDinheiroNestedInput
    mercadoria?: MercadoriaUpdateOneWithoutDinheiroNestedInput
  }

  export type DinheiroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    mercadoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutDinheiroNestedInput
    vales?: ValeUncheckedUpdateManyWithoutDinheiroNestedInput
  }

  export type DinheiroCreateManyInput = {
    id?: number
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dataMovimentacao: Date | string
    movimentacao: $Enums.TipoMovimentacao
    mercadoriaId?: number | null
  }

  export type DinheiroUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
  }

  export type DinheiroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    mercadoriaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FuncionarioCreateInput = {
    nome: string
    funcao: string
    salario: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dinheiro: DinheiroCreateNestedOneWithoutFuncionariosInput
  }

  export type FuncionarioUncheckedCreateInput = {
    id?: number
    nome: string
    funcao: string
    salario: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dinheiroId: number
  }

  export type FuncionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dinheiro?: DinheiroUpdateOneRequiredWithoutFuncionariosNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dinheiroId?: IntFieldUpdateOperationsInput | number
  }

  export type FuncionarioCreateManyInput = {
    id?: number
    nome: string
    funcao: string
    salario: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dinheiroId: number
  }

  export type FuncionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dinheiroId?: IntFieldUpdateOperationsInput | number
  }

  export type ValeCreateInput = {
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dinheiro: DinheiroCreateNestedOneWithoutValesInput
  }

  export type ValeUncheckedCreateInput = {
    id?: number
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dinheiroId: number
  }

  export type ValeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dinheiro?: DinheiroUpdateOneRequiredWithoutValesNestedInput
  }

  export type ValeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dinheiroId?: IntFieldUpdateOperationsInput | number
  }

  export type ValeCreateManyInput = {
    id?: number
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dinheiroId: number
  }

  export type ValeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dinheiroId?: IntFieldUpdateOperationsInput | number
  }

  export type MercadoriaCreateInput = {
    nome: string
    precoCompra: Decimal | DecimalJsLike | number | string
    codigoProduto: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    peso?: PesoCreateNestedOneWithoutMercadoriaInput
    dinheiro?: DinheiroCreateNestedOneWithoutMercadoriaInput
  }

  export type MercadoriaUncheckedCreateInput = {
    id?: number
    nome: string
    precoCompra: Decimal | DecimalJsLike | number | string
    codigoProduto: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    pesoId?: number | null
    dinheiro?: DinheiroUncheckedCreateNestedOneWithoutMercadoriaInput
  }

  export type MercadoriaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    precoCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: PesoUpdateOneWithoutMercadoriaNestedInput
    dinheiro?: DinheiroUpdateOneWithoutMercadoriaNestedInput
  }

  export type MercadoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    precoCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoId?: NullableIntFieldUpdateOperationsInput | number | null
    dinheiro?: DinheiroUncheckedUpdateOneWithoutMercadoriaNestedInput
  }

  export type MercadoriaCreateManyInput = {
    id?: number
    nome: string
    precoCompra: Decimal | DecimalJsLike | number | string
    codigoProduto: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    pesoId?: number | null
  }

  export type MercadoriaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    precoCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MercadoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    precoCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PesoCreateInput = {
    pesoKg: Decimal | DecimalJsLike | number | string
    dataCadastro?: Date | string
    mercadoria?: MercadoriaCreateNestedOneWithoutPesoInput
  }

  export type PesoUncheckedCreateInput = {
    id?: number
    pesoKg: Decimal | DecimalJsLike | number | string
    dataCadastro?: Date | string
    mercadoria?: MercadoriaUncheckedCreateNestedOneWithoutPesoInput
  }

  export type PesoUpdateInput = {
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: MercadoriaUpdateOneWithoutPesoNestedInput
  }

  export type PesoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    mercadoria?: MercadoriaUncheckedUpdateOneWithoutPesoNestedInput
  }

  export type PesoCreateManyInput = {
    id?: number
    pesoKg: Decimal | DecimalJsLike | number | string
    dataCadastro?: Date | string
  }

  export type PesoUpdateManyMutationInput = {
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[]
    notIn?: $Enums.TipoMovimentacao[]
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FuncionarioListRelationFilter = {
    every?: FuncionarioWhereInput
    some?: FuncionarioWhereInput
    none?: FuncionarioWhereInput
  }

  export type ValeListRelationFilter = {
    every?: ValeWhereInput
    some?: ValeWhereInput
    none?: ValeWhereInput
  }

  export type MercadoriaNullableScalarRelationFilter = {
    is?: MercadoriaWhereInput | null
    isNot?: MercadoriaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FuncionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DinheiroOrderByRelevanceInput = {
    fields: DinheiroOrderByRelevanceFieldEnum | DinheiroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DinheiroCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dataMovimentacao?: SortOrder
    movimentacao?: SortOrder
    mercadoriaId?: SortOrder
  }

  export type DinheiroAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    mercadoriaId?: SortOrder
  }

  export type DinheiroMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dataMovimentacao?: SortOrder
    movimentacao?: SortOrder
    mercadoriaId?: SortOrder
  }

  export type DinheiroMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dataMovimentacao?: SortOrder
    movimentacao?: SortOrder
    mercadoriaId?: SortOrder
  }

  export type DinheiroSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    mercadoriaId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[]
    notIn?: $Enums.TipoMovimentacao[]
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DinheiroScalarRelationFilter = {
    is?: DinheiroWhereInput
    isNot?: DinheiroWhereInput
  }

  export type FuncionarioOrderByRelevanceInput = {
    fields: FuncionarioOrderByRelevanceFieldEnum | FuncionarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    funcao?: SortOrder
    salario?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dinheiroId?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    id?: SortOrder
    salario?: SortOrder
    dinheiroId?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    funcao?: SortOrder
    salario?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dinheiroId?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    funcao?: SortOrder
    salario?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    dinheiroId?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
    id?: SortOrder
    salario?: SortOrder
    dinheiroId?: SortOrder
  }

  export type ValeOrderByRelevanceInput = {
    fields: ValeOrderByRelevanceFieldEnum | ValeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ValeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    dataEmprestimo?: SortOrder
    dinheiroId?: SortOrder
  }

  export type ValeAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    dinheiroId?: SortOrder
  }

  export type ValeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    dataEmprestimo?: SortOrder
    dinheiroId?: SortOrder
  }

  export type ValeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    dataEmprestimo?: SortOrder
    dinheiroId?: SortOrder
  }

  export type ValeSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    dinheiroId?: SortOrder
  }

  export type PesoNullableScalarRelationFilter = {
    is?: PesoWhereInput | null
    isNot?: PesoWhereInput | null
  }

  export type DinheiroNullableScalarRelationFilter = {
    is?: DinheiroWhereInput | null
    isNot?: DinheiroWhereInput | null
  }

  export type MercadoriaOrderByRelevanceInput = {
    fields: MercadoriaOrderByRelevanceFieldEnum | MercadoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MercadoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    precoCompra?: SortOrder
    codigoProduto?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    pesoId?: SortOrder
  }

  export type MercadoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    precoCompra?: SortOrder
    pesoId?: SortOrder
  }

  export type MercadoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    precoCompra?: SortOrder
    codigoProduto?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    pesoId?: SortOrder
  }

  export type MercadoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    precoCompra?: SortOrder
    codigoProduto?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    pesoId?: SortOrder
  }

  export type MercadoriaSumOrderByAggregateInput = {
    id?: SortOrder
    precoCompra?: SortOrder
    pesoId?: SortOrder
  }

  export type PesoCountOrderByAggregateInput = {
    id?: SortOrder
    pesoKg?: SortOrder
    dataCadastro?: SortOrder
  }

  export type PesoAvgOrderByAggregateInput = {
    id?: SortOrder
    pesoKg?: SortOrder
  }

  export type PesoMaxOrderByAggregateInput = {
    id?: SortOrder
    pesoKg?: SortOrder
    dataCadastro?: SortOrder
  }

  export type PesoMinOrderByAggregateInput = {
    id?: SortOrder
    pesoKg?: SortOrder
    dataCadastro?: SortOrder
  }

  export type PesoSumOrderByAggregateInput = {
    id?: SortOrder
    pesoKg?: SortOrder
  }

  export type FuncionarioCreateNestedManyWithoutDinheiroInput = {
    create?: XOR<FuncionarioCreateWithoutDinheiroInput, FuncionarioUncheckedCreateWithoutDinheiroInput> | FuncionarioCreateWithoutDinheiroInput[] | FuncionarioUncheckedCreateWithoutDinheiroInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutDinheiroInput | FuncionarioCreateOrConnectWithoutDinheiroInput[]
    createMany?: FuncionarioCreateManyDinheiroInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type ValeCreateNestedManyWithoutDinheiroInput = {
    create?: XOR<ValeCreateWithoutDinheiroInput, ValeUncheckedCreateWithoutDinheiroInput> | ValeCreateWithoutDinheiroInput[] | ValeUncheckedCreateWithoutDinheiroInput[]
    connectOrCreate?: ValeCreateOrConnectWithoutDinheiroInput | ValeCreateOrConnectWithoutDinheiroInput[]
    createMany?: ValeCreateManyDinheiroInputEnvelope
    connect?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
  }

  export type MercadoriaCreateNestedOneWithoutDinheiroInput = {
    create?: XOR<MercadoriaCreateWithoutDinheiroInput, MercadoriaUncheckedCreateWithoutDinheiroInput>
    connectOrCreate?: MercadoriaCreateOrConnectWithoutDinheiroInput
    connect?: MercadoriaWhereUniqueInput
  }

  export type FuncionarioUncheckedCreateNestedManyWithoutDinheiroInput = {
    create?: XOR<FuncionarioCreateWithoutDinheiroInput, FuncionarioUncheckedCreateWithoutDinheiroInput> | FuncionarioCreateWithoutDinheiroInput[] | FuncionarioUncheckedCreateWithoutDinheiroInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutDinheiroInput | FuncionarioCreateOrConnectWithoutDinheiroInput[]
    createMany?: FuncionarioCreateManyDinheiroInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type ValeUncheckedCreateNestedManyWithoutDinheiroInput = {
    create?: XOR<ValeCreateWithoutDinheiroInput, ValeUncheckedCreateWithoutDinheiroInput> | ValeCreateWithoutDinheiroInput[] | ValeUncheckedCreateWithoutDinheiroInput[]
    connectOrCreate?: ValeCreateOrConnectWithoutDinheiroInput | ValeCreateOrConnectWithoutDinheiroInput[]
    createMany?: ValeCreateManyDinheiroInputEnvelope
    connect?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumTipoMovimentacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimentacao
  }

  export type FuncionarioUpdateManyWithoutDinheiroNestedInput = {
    create?: XOR<FuncionarioCreateWithoutDinheiroInput, FuncionarioUncheckedCreateWithoutDinheiroInput> | FuncionarioCreateWithoutDinheiroInput[] | FuncionarioUncheckedCreateWithoutDinheiroInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutDinheiroInput | FuncionarioCreateOrConnectWithoutDinheiroInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutDinheiroInput | FuncionarioUpsertWithWhereUniqueWithoutDinheiroInput[]
    createMany?: FuncionarioCreateManyDinheiroInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutDinheiroInput | FuncionarioUpdateWithWhereUniqueWithoutDinheiroInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutDinheiroInput | FuncionarioUpdateManyWithWhereWithoutDinheiroInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type ValeUpdateManyWithoutDinheiroNestedInput = {
    create?: XOR<ValeCreateWithoutDinheiroInput, ValeUncheckedCreateWithoutDinheiroInput> | ValeCreateWithoutDinheiroInput[] | ValeUncheckedCreateWithoutDinheiroInput[]
    connectOrCreate?: ValeCreateOrConnectWithoutDinheiroInput | ValeCreateOrConnectWithoutDinheiroInput[]
    upsert?: ValeUpsertWithWhereUniqueWithoutDinheiroInput | ValeUpsertWithWhereUniqueWithoutDinheiroInput[]
    createMany?: ValeCreateManyDinheiroInputEnvelope
    set?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
    disconnect?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
    delete?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
    connect?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
    update?: ValeUpdateWithWhereUniqueWithoutDinheiroInput | ValeUpdateWithWhereUniqueWithoutDinheiroInput[]
    updateMany?: ValeUpdateManyWithWhereWithoutDinheiroInput | ValeUpdateManyWithWhereWithoutDinheiroInput[]
    deleteMany?: ValeScalarWhereInput | ValeScalarWhereInput[]
  }

  export type MercadoriaUpdateOneWithoutDinheiroNestedInput = {
    create?: XOR<MercadoriaCreateWithoutDinheiroInput, MercadoriaUncheckedCreateWithoutDinheiroInput>
    connectOrCreate?: MercadoriaCreateOrConnectWithoutDinheiroInput
    upsert?: MercadoriaUpsertWithoutDinheiroInput
    disconnect?: MercadoriaWhereInput | boolean
    delete?: MercadoriaWhereInput | boolean
    connect?: MercadoriaWhereUniqueInput
    update?: XOR<XOR<MercadoriaUpdateToOneWithWhereWithoutDinheiroInput, MercadoriaUpdateWithoutDinheiroInput>, MercadoriaUncheckedUpdateWithoutDinheiroInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FuncionarioUncheckedUpdateManyWithoutDinheiroNestedInput = {
    create?: XOR<FuncionarioCreateWithoutDinheiroInput, FuncionarioUncheckedCreateWithoutDinheiroInput> | FuncionarioCreateWithoutDinheiroInput[] | FuncionarioUncheckedCreateWithoutDinheiroInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutDinheiroInput | FuncionarioCreateOrConnectWithoutDinheiroInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutDinheiroInput | FuncionarioUpsertWithWhereUniqueWithoutDinheiroInput[]
    createMany?: FuncionarioCreateManyDinheiroInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutDinheiroInput | FuncionarioUpdateWithWhereUniqueWithoutDinheiroInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutDinheiroInput | FuncionarioUpdateManyWithWhereWithoutDinheiroInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type ValeUncheckedUpdateManyWithoutDinheiroNestedInput = {
    create?: XOR<ValeCreateWithoutDinheiroInput, ValeUncheckedCreateWithoutDinheiroInput> | ValeCreateWithoutDinheiroInput[] | ValeUncheckedCreateWithoutDinheiroInput[]
    connectOrCreate?: ValeCreateOrConnectWithoutDinheiroInput | ValeCreateOrConnectWithoutDinheiroInput[]
    upsert?: ValeUpsertWithWhereUniqueWithoutDinheiroInput | ValeUpsertWithWhereUniqueWithoutDinheiroInput[]
    createMany?: ValeCreateManyDinheiroInputEnvelope
    set?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
    disconnect?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
    delete?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
    connect?: ValeWhereUniqueInput | ValeWhereUniqueInput[]
    update?: ValeUpdateWithWhereUniqueWithoutDinheiroInput | ValeUpdateWithWhereUniqueWithoutDinheiroInput[]
    updateMany?: ValeUpdateManyWithWhereWithoutDinheiroInput | ValeUpdateManyWithWhereWithoutDinheiroInput[]
    deleteMany?: ValeScalarWhereInput | ValeScalarWhereInput[]
  }

  export type DinheiroCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<DinheiroCreateWithoutFuncionariosInput, DinheiroUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: DinheiroCreateOrConnectWithoutFuncionariosInput
    connect?: DinheiroWhereUniqueInput
  }

  export type DinheiroUpdateOneRequiredWithoutFuncionariosNestedInput = {
    create?: XOR<DinheiroCreateWithoutFuncionariosInput, DinheiroUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: DinheiroCreateOrConnectWithoutFuncionariosInput
    upsert?: DinheiroUpsertWithoutFuncionariosInput
    connect?: DinheiroWhereUniqueInput
    update?: XOR<XOR<DinheiroUpdateToOneWithWhereWithoutFuncionariosInput, DinheiroUpdateWithoutFuncionariosInput>, DinheiroUncheckedUpdateWithoutFuncionariosInput>
  }

  export type DinheiroCreateNestedOneWithoutValesInput = {
    create?: XOR<DinheiroCreateWithoutValesInput, DinheiroUncheckedCreateWithoutValesInput>
    connectOrCreate?: DinheiroCreateOrConnectWithoutValesInput
    connect?: DinheiroWhereUniqueInput
  }

  export type DinheiroUpdateOneRequiredWithoutValesNestedInput = {
    create?: XOR<DinheiroCreateWithoutValesInput, DinheiroUncheckedCreateWithoutValesInput>
    connectOrCreate?: DinheiroCreateOrConnectWithoutValesInput
    upsert?: DinheiroUpsertWithoutValesInput
    connect?: DinheiroWhereUniqueInput
    update?: XOR<XOR<DinheiroUpdateToOneWithWhereWithoutValesInput, DinheiroUpdateWithoutValesInput>, DinheiroUncheckedUpdateWithoutValesInput>
  }

  export type PesoCreateNestedOneWithoutMercadoriaInput = {
    create?: XOR<PesoCreateWithoutMercadoriaInput, PesoUncheckedCreateWithoutMercadoriaInput>
    connectOrCreate?: PesoCreateOrConnectWithoutMercadoriaInput
    connect?: PesoWhereUniqueInput
  }

  export type DinheiroCreateNestedOneWithoutMercadoriaInput = {
    create?: XOR<DinheiroCreateWithoutMercadoriaInput, DinheiroUncheckedCreateWithoutMercadoriaInput>
    connectOrCreate?: DinheiroCreateOrConnectWithoutMercadoriaInput
    connect?: DinheiroWhereUniqueInput
  }

  export type DinheiroUncheckedCreateNestedOneWithoutMercadoriaInput = {
    create?: XOR<DinheiroCreateWithoutMercadoriaInput, DinheiroUncheckedCreateWithoutMercadoriaInput>
    connectOrCreate?: DinheiroCreateOrConnectWithoutMercadoriaInput
    connect?: DinheiroWhereUniqueInput
  }

  export type PesoUpdateOneWithoutMercadoriaNestedInput = {
    create?: XOR<PesoCreateWithoutMercadoriaInput, PesoUncheckedCreateWithoutMercadoriaInput>
    connectOrCreate?: PesoCreateOrConnectWithoutMercadoriaInput
    upsert?: PesoUpsertWithoutMercadoriaInput
    disconnect?: PesoWhereInput | boolean
    delete?: PesoWhereInput | boolean
    connect?: PesoWhereUniqueInput
    update?: XOR<XOR<PesoUpdateToOneWithWhereWithoutMercadoriaInput, PesoUpdateWithoutMercadoriaInput>, PesoUncheckedUpdateWithoutMercadoriaInput>
  }

  export type DinheiroUpdateOneWithoutMercadoriaNestedInput = {
    create?: XOR<DinheiroCreateWithoutMercadoriaInput, DinheiroUncheckedCreateWithoutMercadoriaInput>
    connectOrCreate?: DinheiroCreateOrConnectWithoutMercadoriaInput
    upsert?: DinheiroUpsertWithoutMercadoriaInput
    disconnect?: DinheiroWhereInput | boolean
    delete?: DinheiroWhereInput | boolean
    connect?: DinheiroWhereUniqueInput
    update?: XOR<XOR<DinheiroUpdateToOneWithWhereWithoutMercadoriaInput, DinheiroUpdateWithoutMercadoriaInput>, DinheiroUncheckedUpdateWithoutMercadoriaInput>
  }

  export type DinheiroUncheckedUpdateOneWithoutMercadoriaNestedInput = {
    create?: XOR<DinheiroCreateWithoutMercadoriaInput, DinheiroUncheckedCreateWithoutMercadoriaInput>
    connectOrCreate?: DinheiroCreateOrConnectWithoutMercadoriaInput
    upsert?: DinheiroUpsertWithoutMercadoriaInput
    disconnect?: DinheiroWhereInput | boolean
    delete?: DinheiroWhereInput | boolean
    connect?: DinheiroWhereUniqueInput
    update?: XOR<XOR<DinheiroUpdateToOneWithWhereWithoutMercadoriaInput, DinheiroUpdateWithoutMercadoriaInput>, DinheiroUncheckedUpdateWithoutMercadoriaInput>
  }

  export type MercadoriaCreateNestedOneWithoutPesoInput = {
    create?: XOR<MercadoriaCreateWithoutPesoInput, MercadoriaUncheckedCreateWithoutPesoInput>
    connectOrCreate?: MercadoriaCreateOrConnectWithoutPesoInput
    connect?: MercadoriaWhereUniqueInput
  }

  export type MercadoriaUncheckedCreateNestedOneWithoutPesoInput = {
    create?: XOR<MercadoriaCreateWithoutPesoInput, MercadoriaUncheckedCreateWithoutPesoInput>
    connectOrCreate?: MercadoriaCreateOrConnectWithoutPesoInput
    connect?: MercadoriaWhereUniqueInput
  }

  export type MercadoriaUpdateOneWithoutPesoNestedInput = {
    create?: XOR<MercadoriaCreateWithoutPesoInput, MercadoriaUncheckedCreateWithoutPesoInput>
    connectOrCreate?: MercadoriaCreateOrConnectWithoutPesoInput
    upsert?: MercadoriaUpsertWithoutPesoInput
    disconnect?: MercadoriaWhereInput | boolean
    delete?: MercadoriaWhereInput | boolean
    connect?: MercadoriaWhereUniqueInput
    update?: XOR<XOR<MercadoriaUpdateToOneWithWhereWithoutPesoInput, MercadoriaUpdateWithoutPesoInput>, MercadoriaUncheckedUpdateWithoutPesoInput>
  }

  export type MercadoriaUncheckedUpdateOneWithoutPesoNestedInput = {
    create?: XOR<MercadoriaCreateWithoutPesoInput, MercadoriaUncheckedCreateWithoutPesoInput>
    connectOrCreate?: MercadoriaCreateOrConnectWithoutPesoInput
    upsert?: MercadoriaUpsertWithoutPesoInput
    disconnect?: MercadoriaWhereInput | boolean
    delete?: MercadoriaWhereInput | boolean
    connect?: MercadoriaWhereUniqueInput
    update?: XOR<XOR<MercadoriaUpdateToOneWithWhereWithoutPesoInput, MercadoriaUpdateWithoutPesoInput>, MercadoriaUncheckedUpdateWithoutPesoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[]
    notIn?: $Enums.TipoMovimentacao[]
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[]
    notIn?: $Enums.TipoMovimentacao[]
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FuncionarioCreateWithoutDinheiroInput = {
    nome: string
    funcao: string
    salario: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type FuncionarioUncheckedCreateWithoutDinheiroInput = {
    id?: number
    nome: string
    funcao: string
    salario: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type FuncionarioCreateOrConnectWithoutDinheiroInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutDinheiroInput, FuncionarioUncheckedCreateWithoutDinheiroInput>
  }

  export type FuncionarioCreateManyDinheiroInputEnvelope = {
    data: FuncionarioCreateManyDinheiroInput | FuncionarioCreateManyDinheiroInput[]
    skipDuplicates?: boolean
  }

  export type ValeCreateWithoutDinheiroInput = {
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
  }

  export type ValeUncheckedCreateWithoutDinheiroInput = {
    id?: number
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
  }

  export type ValeCreateOrConnectWithoutDinheiroInput = {
    where: ValeWhereUniqueInput
    create: XOR<ValeCreateWithoutDinheiroInput, ValeUncheckedCreateWithoutDinheiroInput>
  }

  export type ValeCreateManyDinheiroInputEnvelope = {
    data: ValeCreateManyDinheiroInput | ValeCreateManyDinheiroInput[]
    skipDuplicates?: boolean
  }

  export type MercadoriaCreateWithoutDinheiroInput = {
    nome: string
    precoCompra: Decimal | DecimalJsLike | number | string
    codigoProduto: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    peso?: PesoCreateNestedOneWithoutMercadoriaInput
  }

  export type MercadoriaUncheckedCreateWithoutDinheiroInput = {
    id?: number
    nome: string
    precoCompra: Decimal | DecimalJsLike | number | string
    codigoProduto: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    pesoId?: number | null
  }

  export type MercadoriaCreateOrConnectWithoutDinheiroInput = {
    where: MercadoriaWhereUniqueInput
    create: XOR<MercadoriaCreateWithoutDinheiroInput, MercadoriaUncheckedCreateWithoutDinheiroInput>
  }

  export type FuncionarioUpsertWithWhereUniqueWithoutDinheiroInput = {
    where: FuncionarioWhereUniqueInput
    update: XOR<FuncionarioUpdateWithoutDinheiroInput, FuncionarioUncheckedUpdateWithoutDinheiroInput>
    create: XOR<FuncionarioCreateWithoutDinheiroInput, FuncionarioUncheckedCreateWithoutDinheiroInput>
  }

  export type FuncionarioUpdateWithWhereUniqueWithoutDinheiroInput = {
    where: FuncionarioWhereUniqueInput
    data: XOR<FuncionarioUpdateWithoutDinheiroInput, FuncionarioUncheckedUpdateWithoutDinheiroInput>
  }

  export type FuncionarioUpdateManyWithWhereWithoutDinheiroInput = {
    where: FuncionarioScalarWhereInput
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyWithoutDinheiroInput>
  }

  export type FuncionarioScalarWhereInput = {
    AND?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
    OR?: FuncionarioScalarWhereInput[]
    NOT?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
    id?: IntFilter<"Funcionario"> | number
    nome?: StringFilter<"Funcionario"> | string
    funcao?: StringFilter<"Funcionario"> | string
    salario?: DecimalFilter<"Funcionario"> | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFilter<"Funcionario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Funcionario"> | Date | string
    dinheiroId?: IntFilter<"Funcionario"> | number
  }

  export type ValeUpsertWithWhereUniqueWithoutDinheiroInput = {
    where: ValeWhereUniqueInput
    update: XOR<ValeUpdateWithoutDinheiroInput, ValeUncheckedUpdateWithoutDinheiroInput>
    create: XOR<ValeCreateWithoutDinheiroInput, ValeUncheckedCreateWithoutDinheiroInput>
  }

  export type ValeUpdateWithWhereUniqueWithoutDinheiroInput = {
    where: ValeWhereUniqueInput
    data: XOR<ValeUpdateWithoutDinheiroInput, ValeUncheckedUpdateWithoutDinheiroInput>
  }

  export type ValeUpdateManyWithWhereWithoutDinheiroInput = {
    where: ValeScalarWhereInput
    data: XOR<ValeUpdateManyMutationInput, ValeUncheckedUpdateManyWithoutDinheiroInput>
  }

  export type ValeScalarWhereInput = {
    AND?: ValeScalarWhereInput | ValeScalarWhereInput[]
    OR?: ValeScalarWhereInput[]
    NOT?: ValeScalarWhereInput | ValeScalarWhereInput[]
    id?: IntFilter<"Vale"> | number
    nome?: StringFilter<"Vale"> | string
    valor?: DecimalFilter<"Vale"> | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFilter<"Vale"> | Date | string
    dinheiroId?: IntFilter<"Vale"> | number
  }

  export type MercadoriaUpsertWithoutDinheiroInput = {
    update: XOR<MercadoriaUpdateWithoutDinheiroInput, MercadoriaUncheckedUpdateWithoutDinheiroInput>
    create: XOR<MercadoriaCreateWithoutDinheiroInput, MercadoriaUncheckedCreateWithoutDinheiroInput>
    where?: MercadoriaWhereInput
  }

  export type MercadoriaUpdateToOneWithWhereWithoutDinheiroInput = {
    where?: MercadoriaWhereInput
    data: XOR<MercadoriaUpdateWithoutDinheiroInput, MercadoriaUncheckedUpdateWithoutDinheiroInput>
  }

  export type MercadoriaUpdateWithoutDinheiroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    precoCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: PesoUpdateOneWithoutMercadoriaNestedInput
  }

  export type MercadoriaUncheckedUpdateWithoutDinheiroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    precoCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DinheiroCreateWithoutFuncionariosInput = {
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dataMovimentacao: Date | string
    movimentacao: $Enums.TipoMovimentacao
    vales?: ValeCreateNestedManyWithoutDinheiroInput
    mercadoria?: MercadoriaCreateNestedOneWithoutDinheiroInput
  }

  export type DinheiroUncheckedCreateWithoutFuncionariosInput = {
    id?: number
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dataMovimentacao: Date | string
    movimentacao: $Enums.TipoMovimentacao
    mercadoriaId?: number | null
    vales?: ValeUncheckedCreateNestedManyWithoutDinheiroInput
  }

  export type DinheiroCreateOrConnectWithoutFuncionariosInput = {
    where: DinheiroWhereUniqueInput
    create: XOR<DinheiroCreateWithoutFuncionariosInput, DinheiroUncheckedCreateWithoutFuncionariosInput>
  }

  export type DinheiroUpsertWithoutFuncionariosInput = {
    update: XOR<DinheiroUpdateWithoutFuncionariosInput, DinheiroUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<DinheiroCreateWithoutFuncionariosInput, DinheiroUncheckedCreateWithoutFuncionariosInput>
    where?: DinheiroWhereInput
  }

  export type DinheiroUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: DinheiroWhereInput
    data: XOR<DinheiroUpdateWithoutFuncionariosInput, DinheiroUncheckedUpdateWithoutFuncionariosInput>
  }

  export type DinheiroUpdateWithoutFuncionariosInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    vales?: ValeUpdateManyWithoutDinheiroNestedInput
    mercadoria?: MercadoriaUpdateOneWithoutDinheiroNestedInput
  }

  export type DinheiroUncheckedUpdateWithoutFuncionariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    mercadoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    vales?: ValeUncheckedUpdateManyWithoutDinheiroNestedInput
  }

  export type DinheiroCreateWithoutValesInput = {
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dataMovimentacao: Date | string
    movimentacao: $Enums.TipoMovimentacao
    funcionarios?: FuncionarioCreateNestedManyWithoutDinheiroInput
    mercadoria?: MercadoriaCreateNestedOneWithoutDinheiroInput
  }

  export type DinheiroUncheckedCreateWithoutValesInput = {
    id?: number
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dataMovimentacao: Date | string
    movimentacao: $Enums.TipoMovimentacao
    mercadoriaId?: number | null
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutDinheiroInput
  }

  export type DinheiroCreateOrConnectWithoutValesInput = {
    where: DinheiroWhereUniqueInput
    create: XOR<DinheiroCreateWithoutValesInput, DinheiroUncheckedCreateWithoutValesInput>
  }

  export type DinheiroUpsertWithoutValesInput = {
    update: XOR<DinheiroUpdateWithoutValesInput, DinheiroUncheckedUpdateWithoutValesInput>
    create: XOR<DinheiroCreateWithoutValesInput, DinheiroUncheckedCreateWithoutValesInput>
    where?: DinheiroWhereInput
  }

  export type DinheiroUpdateToOneWithWhereWithoutValesInput = {
    where?: DinheiroWhereInput
    data: XOR<DinheiroUpdateWithoutValesInput, DinheiroUncheckedUpdateWithoutValesInput>
  }

  export type DinheiroUpdateWithoutValesInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    funcionarios?: FuncionarioUpdateManyWithoutDinheiroNestedInput
    mercadoria?: MercadoriaUpdateOneWithoutDinheiroNestedInput
  }

  export type DinheiroUncheckedUpdateWithoutValesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    mercadoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutDinheiroNestedInput
  }

  export type PesoCreateWithoutMercadoriaInput = {
    pesoKg: Decimal | DecimalJsLike | number | string
    dataCadastro?: Date | string
  }

  export type PesoUncheckedCreateWithoutMercadoriaInput = {
    id?: number
    pesoKg: Decimal | DecimalJsLike | number | string
    dataCadastro?: Date | string
  }

  export type PesoCreateOrConnectWithoutMercadoriaInput = {
    where: PesoWhereUniqueInput
    create: XOR<PesoCreateWithoutMercadoriaInput, PesoUncheckedCreateWithoutMercadoriaInput>
  }

  export type DinheiroCreateWithoutMercadoriaInput = {
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dataMovimentacao: Date | string
    movimentacao: $Enums.TipoMovimentacao
    funcionarios?: FuncionarioCreateNestedManyWithoutDinheiroInput
    vales?: ValeCreateNestedManyWithoutDinheiroInput
  }

  export type DinheiroUncheckedCreateWithoutMercadoriaInput = {
    id?: number
    tipo: string
    valor: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dataMovimentacao: Date | string
    movimentacao: $Enums.TipoMovimentacao
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutDinheiroInput
    vales?: ValeUncheckedCreateNestedManyWithoutDinheiroInput
  }

  export type DinheiroCreateOrConnectWithoutMercadoriaInput = {
    where: DinheiroWhereUniqueInput
    create: XOR<DinheiroCreateWithoutMercadoriaInput, DinheiroUncheckedCreateWithoutMercadoriaInput>
  }

  export type PesoUpsertWithoutMercadoriaInput = {
    update: XOR<PesoUpdateWithoutMercadoriaInput, PesoUncheckedUpdateWithoutMercadoriaInput>
    create: XOR<PesoCreateWithoutMercadoriaInput, PesoUncheckedCreateWithoutMercadoriaInput>
    where?: PesoWhereInput
  }

  export type PesoUpdateToOneWithWhereWithoutMercadoriaInput = {
    where?: PesoWhereInput
    data: XOR<PesoUpdateWithoutMercadoriaInput, PesoUncheckedUpdateWithoutMercadoriaInput>
  }

  export type PesoUpdateWithoutMercadoriaInput = {
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesoUncheckedUpdateWithoutMercadoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DinheiroUpsertWithoutMercadoriaInput = {
    update: XOR<DinheiroUpdateWithoutMercadoriaInput, DinheiroUncheckedUpdateWithoutMercadoriaInput>
    create: XOR<DinheiroCreateWithoutMercadoriaInput, DinheiroUncheckedCreateWithoutMercadoriaInput>
    where?: DinheiroWhereInput
  }

  export type DinheiroUpdateToOneWithWhereWithoutMercadoriaInput = {
    where?: DinheiroWhereInput
    data: XOR<DinheiroUpdateWithoutMercadoriaInput, DinheiroUncheckedUpdateWithoutMercadoriaInput>
  }

  export type DinheiroUpdateWithoutMercadoriaInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    funcionarios?: FuncionarioUpdateManyWithoutDinheiroNestedInput
    vales?: ValeUpdateManyWithoutDinheiroNestedInput
  }

  export type DinheiroUncheckedUpdateWithoutMercadoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacao?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutDinheiroNestedInput
    vales?: ValeUncheckedUpdateManyWithoutDinheiroNestedInput
  }

  export type MercadoriaCreateWithoutPesoInput = {
    nome: string
    precoCompra: Decimal | DecimalJsLike | number | string
    codigoProduto: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dinheiro?: DinheiroCreateNestedOneWithoutMercadoriaInput
  }

  export type MercadoriaUncheckedCreateWithoutPesoInput = {
    id?: number
    nome: string
    precoCompra: Decimal | DecimalJsLike | number | string
    codigoProduto: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    dinheiro?: DinheiroUncheckedCreateNestedOneWithoutMercadoriaInput
  }

  export type MercadoriaCreateOrConnectWithoutPesoInput = {
    where: MercadoriaWhereUniqueInput
    create: XOR<MercadoriaCreateWithoutPesoInput, MercadoriaUncheckedCreateWithoutPesoInput>
  }

  export type MercadoriaUpsertWithoutPesoInput = {
    update: XOR<MercadoriaUpdateWithoutPesoInput, MercadoriaUncheckedUpdateWithoutPesoInput>
    create: XOR<MercadoriaCreateWithoutPesoInput, MercadoriaUncheckedCreateWithoutPesoInput>
    where?: MercadoriaWhereInput
  }

  export type MercadoriaUpdateToOneWithWhereWithoutPesoInput = {
    where?: MercadoriaWhereInput
    data: XOR<MercadoriaUpdateWithoutPesoInput, MercadoriaUncheckedUpdateWithoutPesoInput>
  }

  export type MercadoriaUpdateWithoutPesoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    precoCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dinheiro?: DinheiroUpdateOneWithoutMercadoriaNestedInput
  }

  export type MercadoriaUncheckedUpdateWithoutPesoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    precoCompra?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigoProduto?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    dinheiro?: DinheiroUncheckedUpdateOneWithoutMercadoriaNestedInput
  }

  export type FuncionarioCreateManyDinheiroInput = {
    id?: number
    nome: string
    funcao: string
    salario: Decimal | DecimalJsLike | number | string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ValeCreateManyDinheiroInput = {
    id?: number
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
  }

  export type FuncionarioUpdateWithoutDinheiroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateWithoutDinheiroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateManyWithoutDinheiroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    funcao?: StringFieldUpdateOperationsInput | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValeUpdateWithoutDinheiroInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValeUncheckedUpdateWithoutDinheiroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValeUncheckedUpdateManyWithoutDinheiroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}