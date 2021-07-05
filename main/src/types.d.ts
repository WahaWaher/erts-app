type Nullable<T> = T | null;

declare module "*.json" {
  const value: any;
  export default value;
}

declare module 'electron-reload';
