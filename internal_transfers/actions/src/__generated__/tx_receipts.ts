/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: VGY2xFmaGU1wNr+CMBKKseWW8+VKJAQoSkc8OiXqcKqiq5zhkoQ6jTFotyYBzbHxj0R+wAlAiaMYe0O+mU9fvg==
 */

/* eslint-disable */
// tslint:disable

interface TxReceipts {
  block_number: number;
  data: any;
  hash: Buffer;
  /**
   * @default false
   */
  processed: boolean;
}
export default TxReceipts;

interface TxReceipts_InsertParameters {
  block_number: number;
  data: any;
  hash: Buffer;
  /**
   * @default false
   */
  processed?: boolean;
}
export type { TxReceipts_InsertParameters };