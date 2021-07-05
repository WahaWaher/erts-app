/**
 * Global types
 */
type Nullable<T> = T | null;
type EmptyObject = Record<any, never>;
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

/**
 * Declarations
 */
declare module '*.woff';
declare module '*.woff2';
