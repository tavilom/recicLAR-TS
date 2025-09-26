
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
 * Model humor
 * 
 */
export type humor = $Result.DefaultSelection<Prisma.$humorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Humors
 * const humors = await prisma.humor.findMany()
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
   * // Fetch zero or more Humors
   * const humors = await prisma.humor.findMany()
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
   * `prisma.humor`: Exposes CRUD operations for the **humor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Humors
    * const humors = await prisma.humor.findMany()
    * ```
    */
  get humor(): Prisma.humorDelegate<ExtArgs, ClientOptions>;
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
    humor: 'humor'
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
      modelProps: "humor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      humor: {
        payload: Prisma.$humorPayload<ExtArgs>
        fields: Prisma.humorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.humorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$humorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.humorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$humorPayload>
          }
          findFirst: {
            args: Prisma.humorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$humorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.humorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$humorPayload>
          }
          findMany: {
            args: Prisma.humorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$humorPayload>[]
          }
          create: {
            args: Prisma.humorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$humorPayload>
          }
          createMany: {
            args: Prisma.humorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.humorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$humorPayload>
          }
          update: {
            args: Prisma.humorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$humorPayload>
          }
          deleteMany: {
            args: Prisma.humorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.humorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.humorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$humorPayload>
          }
          aggregate: {
            args: Prisma.HumorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHumor>
          }
          groupBy: {
            args: Prisma.humorGroupByArgs<ExtArgs>
            result: $Utils.Optional<HumorGroupByOutputType>[]
          }
          count: {
            args: Prisma.humorCountArgs<ExtArgs>
            result: $Utils.Optional<HumorCountAggregateOutputType> | number
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
    humor?: humorOmit
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
   * Models
   */

  /**
   * Model humor
   */

  export type AggregateHumor = {
    _count: HumorCountAggregateOutputType | null
    _avg: HumorAvgAggregateOutputType | null
    _sum: HumorSumAggregateOutputType | null
    _min: HumorMinAggregateOutputType | null
    _max: HumorMaxAggregateOutputType | null
  }

  export type HumorAvgAggregateOutputType = {
    id: number | null
  }

  export type HumorSumAggregateOutputType = {
    id: number | null
  }

  export type HumorMinAggregateOutputType = {
    id: number | null
    humor: string | null
    comentario: string | null
    criado_em: Date | null
    id_ws: string | null
    ajuda: string | null
  }

  export type HumorMaxAggregateOutputType = {
    id: number | null
    humor: string | null
    comentario: string | null
    criado_em: Date | null
    id_ws: string | null
    ajuda: string | null
  }

  export type HumorCountAggregateOutputType = {
    id: number
    humor: number
    comentario: number
    criado_em: number
    id_ws: number
    ajuda: number
    _all: number
  }


  export type HumorAvgAggregateInputType = {
    id?: true
  }

  export type HumorSumAggregateInputType = {
    id?: true
  }

  export type HumorMinAggregateInputType = {
    id?: true
    humor?: true
    comentario?: true
    criado_em?: true
    id_ws?: true
    ajuda?: true
  }

  export type HumorMaxAggregateInputType = {
    id?: true
    humor?: true
    comentario?: true
    criado_em?: true
    id_ws?: true
    ajuda?: true
  }

  export type HumorCountAggregateInputType = {
    id?: true
    humor?: true
    comentario?: true
    criado_em?: true
    id_ws?: true
    ajuda?: true
    _all?: true
  }

  export type HumorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which humor to aggregate.
     */
    where?: humorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of humors to fetch.
     */
    orderBy?: humorOrderByWithRelationInput | humorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: humorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` humors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` humors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned humors
    **/
    _count?: true | HumorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HumorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HumorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HumorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HumorMaxAggregateInputType
  }

  export type GetHumorAggregateType<T extends HumorAggregateArgs> = {
        [P in keyof T & keyof AggregateHumor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHumor[P]>
      : GetScalarType<T[P], AggregateHumor[P]>
  }




  export type humorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: humorWhereInput
    orderBy?: humorOrderByWithAggregationInput | humorOrderByWithAggregationInput[]
    by: HumorScalarFieldEnum[] | HumorScalarFieldEnum
    having?: humorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HumorCountAggregateInputType | true
    _avg?: HumorAvgAggregateInputType
    _sum?: HumorSumAggregateInputType
    _min?: HumorMinAggregateInputType
    _max?: HumorMaxAggregateInputType
  }

  export type HumorGroupByOutputType = {
    id: number
    humor: string | null
    comentario: string | null
    criado_em: Date | null
    id_ws: string | null
    ajuda: string | null
    _count: HumorCountAggregateOutputType | null
    _avg: HumorAvgAggregateOutputType | null
    _sum: HumorSumAggregateOutputType | null
    _min: HumorMinAggregateOutputType | null
    _max: HumorMaxAggregateOutputType | null
  }

  type GetHumorGroupByPayload<T extends humorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HumorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HumorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HumorGroupByOutputType[P]>
            : GetScalarType<T[P], HumorGroupByOutputType[P]>
        }
      >
    >


  export type humorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    humor?: boolean
    comentario?: boolean
    criado_em?: boolean
    id_ws?: boolean
    ajuda?: boolean
  }, ExtArgs["result"]["humor"]>



  export type humorSelectScalar = {
    id?: boolean
    humor?: boolean
    comentario?: boolean
    criado_em?: boolean
    id_ws?: boolean
    ajuda?: boolean
  }

  export type humorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "humor" | "comentario" | "criado_em" | "id_ws" | "ajuda", ExtArgs["result"]["humor"]>

  export type $humorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "humor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      humor: string | null
      comentario: string | null
      criado_em: Date | null
      id_ws: string | null
      ajuda: string | null
    }, ExtArgs["result"]["humor"]>
    composites: {}
  }

  type humorGetPayload<S extends boolean | null | undefined | humorDefaultArgs> = $Result.GetResult<Prisma.$humorPayload, S>

  type humorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<humorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HumorCountAggregateInputType | true
    }

  export interface humorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['humor'], meta: { name: 'humor' } }
    /**
     * Find zero or one Humor that matches the filter.
     * @param {humorFindUniqueArgs} args - Arguments to find a Humor
     * @example
     * // Get one Humor
     * const humor = await prisma.humor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends humorFindUniqueArgs>(args: SelectSubset<T, humorFindUniqueArgs<ExtArgs>>): Prisma__humorClient<$Result.GetResult<Prisma.$humorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Humor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {humorFindUniqueOrThrowArgs} args - Arguments to find a Humor
     * @example
     * // Get one Humor
     * const humor = await prisma.humor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends humorFindUniqueOrThrowArgs>(args: SelectSubset<T, humorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__humorClient<$Result.GetResult<Prisma.$humorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Humor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {humorFindFirstArgs} args - Arguments to find a Humor
     * @example
     * // Get one Humor
     * const humor = await prisma.humor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends humorFindFirstArgs>(args?: SelectSubset<T, humorFindFirstArgs<ExtArgs>>): Prisma__humorClient<$Result.GetResult<Prisma.$humorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Humor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {humorFindFirstOrThrowArgs} args - Arguments to find a Humor
     * @example
     * // Get one Humor
     * const humor = await prisma.humor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends humorFindFirstOrThrowArgs>(args?: SelectSubset<T, humorFindFirstOrThrowArgs<ExtArgs>>): Prisma__humorClient<$Result.GetResult<Prisma.$humorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Humors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {humorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Humors
     * const humors = await prisma.humor.findMany()
     * 
     * // Get first 10 Humors
     * const humors = await prisma.humor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const humorWithIdOnly = await prisma.humor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends humorFindManyArgs>(args?: SelectSubset<T, humorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$humorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Humor.
     * @param {humorCreateArgs} args - Arguments to create a Humor.
     * @example
     * // Create one Humor
     * const Humor = await prisma.humor.create({
     *   data: {
     *     // ... data to create a Humor
     *   }
     * })
     * 
     */
    create<T extends humorCreateArgs>(args: SelectSubset<T, humorCreateArgs<ExtArgs>>): Prisma__humorClient<$Result.GetResult<Prisma.$humorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Humors.
     * @param {humorCreateManyArgs} args - Arguments to create many Humors.
     * @example
     * // Create many Humors
     * const humor = await prisma.humor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends humorCreateManyArgs>(args?: SelectSubset<T, humorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Humor.
     * @param {humorDeleteArgs} args - Arguments to delete one Humor.
     * @example
     * // Delete one Humor
     * const Humor = await prisma.humor.delete({
     *   where: {
     *     // ... filter to delete one Humor
     *   }
     * })
     * 
     */
    delete<T extends humorDeleteArgs>(args: SelectSubset<T, humorDeleteArgs<ExtArgs>>): Prisma__humorClient<$Result.GetResult<Prisma.$humorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Humor.
     * @param {humorUpdateArgs} args - Arguments to update one Humor.
     * @example
     * // Update one Humor
     * const humor = await prisma.humor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends humorUpdateArgs>(args: SelectSubset<T, humorUpdateArgs<ExtArgs>>): Prisma__humorClient<$Result.GetResult<Prisma.$humorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Humors.
     * @param {humorDeleteManyArgs} args - Arguments to filter Humors to delete.
     * @example
     * // Delete a few Humors
     * const { count } = await prisma.humor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends humorDeleteManyArgs>(args?: SelectSubset<T, humorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Humors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {humorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Humors
     * const humor = await prisma.humor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends humorUpdateManyArgs>(args: SelectSubset<T, humorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Humor.
     * @param {humorUpsertArgs} args - Arguments to update or create a Humor.
     * @example
     * // Update or create a Humor
     * const humor = await prisma.humor.upsert({
     *   create: {
     *     // ... data to create a Humor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Humor we want to update
     *   }
     * })
     */
    upsert<T extends humorUpsertArgs>(args: SelectSubset<T, humorUpsertArgs<ExtArgs>>): Prisma__humorClient<$Result.GetResult<Prisma.$humorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Humors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {humorCountArgs} args - Arguments to filter Humors to count.
     * @example
     * // Count the number of Humors
     * const count = await prisma.humor.count({
     *   where: {
     *     // ... the filter for the Humors we want to count
     *   }
     * })
    **/
    count<T extends humorCountArgs>(
      args?: Subset<T, humorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HumorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Humor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HumorAggregateArgs>(args: Subset<T, HumorAggregateArgs>): Prisma.PrismaPromise<GetHumorAggregateType<T>>

    /**
     * Group by Humor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {humorGroupByArgs} args - Group by arguments.
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
      T extends humorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: humorGroupByArgs['orderBy'] }
        : { orderBy?: humorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, humorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHumorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the humor model
   */
  readonly fields: humorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for humor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__humorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the humor model
   */
  interface humorFieldRefs {
    readonly id: FieldRef<"humor", 'Int'>
    readonly humor: FieldRef<"humor", 'String'>
    readonly comentario: FieldRef<"humor", 'String'>
    readonly criado_em: FieldRef<"humor", 'DateTime'>
    readonly id_ws: FieldRef<"humor", 'String'>
    readonly ajuda: FieldRef<"humor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * humor findUnique
   */
  export type humorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
    /**
     * Filter, which humor to fetch.
     */
    where: humorWhereUniqueInput
  }

  /**
   * humor findUniqueOrThrow
   */
  export type humorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
    /**
     * Filter, which humor to fetch.
     */
    where: humorWhereUniqueInput
  }

  /**
   * humor findFirst
   */
  export type humorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
    /**
     * Filter, which humor to fetch.
     */
    where?: humorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of humors to fetch.
     */
    orderBy?: humorOrderByWithRelationInput | humorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for humors.
     */
    cursor?: humorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` humors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` humors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of humors.
     */
    distinct?: HumorScalarFieldEnum | HumorScalarFieldEnum[]
  }

  /**
   * humor findFirstOrThrow
   */
  export type humorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
    /**
     * Filter, which humor to fetch.
     */
    where?: humorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of humors to fetch.
     */
    orderBy?: humorOrderByWithRelationInput | humorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for humors.
     */
    cursor?: humorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` humors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` humors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of humors.
     */
    distinct?: HumorScalarFieldEnum | HumorScalarFieldEnum[]
  }

  /**
   * humor findMany
   */
  export type humorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
    /**
     * Filter, which humors to fetch.
     */
    where?: humorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of humors to fetch.
     */
    orderBy?: humorOrderByWithRelationInput | humorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing humors.
     */
    cursor?: humorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` humors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` humors.
     */
    skip?: number
    distinct?: HumorScalarFieldEnum | HumorScalarFieldEnum[]
  }

  /**
   * humor create
   */
  export type humorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
    /**
     * The data needed to create a humor.
     */
    data?: XOR<humorCreateInput, humorUncheckedCreateInput>
  }

  /**
   * humor createMany
   */
  export type humorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many humors.
     */
    data: humorCreateManyInput | humorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * humor update
   */
  export type humorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
    /**
     * The data needed to update a humor.
     */
    data: XOR<humorUpdateInput, humorUncheckedUpdateInput>
    /**
     * Choose, which humor to update.
     */
    where: humorWhereUniqueInput
  }

  /**
   * humor updateMany
   */
  export type humorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update humors.
     */
    data: XOR<humorUpdateManyMutationInput, humorUncheckedUpdateManyInput>
    /**
     * Filter which humors to update
     */
    where?: humorWhereInput
    /**
     * Limit how many humors to update.
     */
    limit?: number
  }

  /**
   * humor upsert
   */
  export type humorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
    /**
     * The filter to search for the humor to update in case it exists.
     */
    where: humorWhereUniqueInput
    /**
     * In case the humor found by the `where` argument doesn't exist, create a new humor with this data.
     */
    create: XOR<humorCreateInput, humorUncheckedCreateInput>
    /**
     * In case the humor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<humorUpdateInput, humorUncheckedUpdateInput>
  }

  /**
   * humor delete
   */
  export type humorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
    /**
     * Filter which humor to delete.
     */
    where: humorWhereUniqueInput
  }

  /**
   * humor deleteMany
   */
  export type humorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which humors to delete
     */
    where?: humorWhereInput
    /**
     * Limit how many humors to delete.
     */
    limit?: number
  }

  /**
   * humor without action
   */
  export type humorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the humor
     */
    select?: humorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the humor
     */
    omit?: humorOmit<ExtArgs> | null
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


  export const HumorScalarFieldEnum: {
    id: 'id',
    humor: 'humor',
    comentario: 'comentario',
    criado_em: 'criado_em',
    id_ws: 'id_ws',
    ajuda: 'ajuda'
  };

  export type HumorScalarFieldEnum = (typeof HumorScalarFieldEnum)[keyof typeof HumorScalarFieldEnum]


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


  export const humorOrderByRelevanceFieldEnum: {
    humor: 'humor',
    comentario: 'comentario',
    id_ws: 'id_ws',
    ajuda: 'ajuda'
  };

  export type humorOrderByRelevanceFieldEnum = (typeof humorOrderByRelevanceFieldEnum)[keyof typeof humorOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type humorWhereInput = {
    AND?: humorWhereInput | humorWhereInput[]
    OR?: humorWhereInput[]
    NOT?: humorWhereInput | humorWhereInput[]
    id?: IntFilter<"humor"> | number
    humor?: StringNullableFilter<"humor"> | string | null
    comentario?: StringNullableFilter<"humor"> | string | null
    criado_em?: DateTimeNullableFilter<"humor"> | Date | string | null
    id_ws?: StringNullableFilter<"humor"> | string | null
    ajuda?: StringNullableFilter<"humor"> | string | null
  }

  export type humorOrderByWithRelationInput = {
    id?: SortOrder
    humor?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    id_ws?: SortOrderInput | SortOrder
    ajuda?: SortOrderInput | SortOrder
    _relevance?: humorOrderByRelevanceInput
  }

  export type humorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: humorWhereInput | humorWhereInput[]
    OR?: humorWhereInput[]
    NOT?: humorWhereInput | humorWhereInput[]
    humor?: StringNullableFilter<"humor"> | string | null
    comentario?: StringNullableFilter<"humor"> | string | null
    criado_em?: DateTimeNullableFilter<"humor"> | Date | string | null
    id_ws?: StringNullableFilter<"humor"> | string | null
    ajuda?: StringNullableFilter<"humor"> | string | null
  }, "id">

  export type humorOrderByWithAggregationInput = {
    id?: SortOrder
    humor?: SortOrderInput | SortOrder
    comentario?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    id_ws?: SortOrderInput | SortOrder
    ajuda?: SortOrderInput | SortOrder
    _count?: humorCountOrderByAggregateInput
    _avg?: humorAvgOrderByAggregateInput
    _max?: humorMaxOrderByAggregateInput
    _min?: humorMinOrderByAggregateInput
    _sum?: humorSumOrderByAggregateInput
  }

  export type humorScalarWhereWithAggregatesInput = {
    AND?: humorScalarWhereWithAggregatesInput | humorScalarWhereWithAggregatesInput[]
    OR?: humorScalarWhereWithAggregatesInput[]
    NOT?: humorScalarWhereWithAggregatesInput | humorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"humor"> | number
    humor?: StringNullableWithAggregatesFilter<"humor"> | string | null
    comentario?: StringNullableWithAggregatesFilter<"humor"> | string | null
    criado_em?: DateTimeNullableWithAggregatesFilter<"humor"> | Date | string | null
    id_ws?: StringNullableWithAggregatesFilter<"humor"> | string | null
    ajuda?: StringNullableWithAggregatesFilter<"humor"> | string | null
  }

  export type humorCreateInput = {
    humor?: string | null
    comentario?: string | null
    criado_em?: Date | string | null
    id_ws?: string | null
    ajuda?: string | null
  }

  export type humorUncheckedCreateInput = {
    id?: number
    humor?: string | null
    comentario?: string | null
    criado_em?: Date | string | null
    id_ws?: string | null
    ajuda?: string | null
  }

  export type humorUpdateInput = {
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
    ajuda?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type humorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
    ajuda?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type humorCreateManyInput = {
    id?: number
    humor?: string | null
    comentario?: string | null
    criado_em?: Date | string | null
    id_ws?: string | null
    ajuda?: string | null
  }

  export type humorUpdateManyMutationInput = {
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
    ajuda?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type humorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    humor?: NullableStringFieldUpdateOperationsInput | string | null
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
    ajuda?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type humorOrderByRelevanceInput = {
    fields: humorOrderByRelevanceFieldEnum | humorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type humorCountOrderByAggregateInput = {
    id?: SortOrder
    humor?: SortOrder
    comentario?: SortOrder
    criado_em?: SortOrder
    id_ws?: SortOrder
    ajuda?: SortOrder
  }

  export type humorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type humorMaxOrderByAggregateInput = {
    id?: SortOrder
    humor?: SortOrder
    comentario?: SortOrder
    criado_em?: SortOrder
    id_ws?: SortOrder
    ajuda?: SortOrder
  }

  export type humorMinOrderByAggregateInput = {
    id?: SortOrder
    humor?: SortOrder
    comentario?: SortOrder
    criado_em?: SortOrder
    id_ws?: SortOrder
    ajuda?: SortOrder
  }

  export type humorSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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