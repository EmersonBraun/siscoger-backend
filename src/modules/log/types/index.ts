/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
export type Log = {
  id?: number;
  module: string;
  action: string;
  user: any;
  data: any;
  old: any;
  changes: any;
};
