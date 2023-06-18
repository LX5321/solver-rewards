/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: /1vc9MIUeiqemAs/y83Z4Au8FsEWZiaqCnNE8ZI22e7QJgWX5wevKh8UrupohKHYF5vbMzfegV1/agHqfr8FNA==
 */

/* eslint-disable */
// tslint:disable

import FlywaySchemaHistory, {
  FlywaySchemaHistory_InsertParameters,
} from "./flyway_schema_history";
import InternalizedImbalances, {
  InternalizedImbalances_InsertParameters,
} from "./internalized_imbalances";
import SettlementSimulations, {
  SettlementSimulations_InsertParameters,
} from "./settlement_simulations";
import Settlements, { Settlements_InsertParameters } from "./settlements";
import TxReceipts, { TxReceipts_InsertParameters } from "./tx_receipts";

interface DatabaseSchema {
  flyway_schema_history: {
    record: FlywaySchemaHistory;
    insert: FlywaySchemaHistory_InsertParameters;
  };
  internalized_imbalances: {
    record: InternalizedImbalances;
    insert: InternalizedImbalances_InsertParameters;
  };
  settlement_simulations: {
    record: SettlementSimulations;
    insert: SettlementSimulations_InsertParameters;
  };
  settlements: { record: Settlements; insert: Settlements_InsertParameters };
  tx_receipts: { record: TxReceipts; insert: TxReceipts_InsertParameters };
}
export default DatabaseSchema;

/**
 * JSON serialize values (v) if the table name (t) and column name (c)
 * is a JSON or JSONB column.
 * This is necessary if you want to store values that are not plain objects
 * in a JSON or JSONB column.
 */
function serializeValue(t: string, c: string, v: unknown): unknown {
  if (
    (t === "settlement_simulations" &&
      (c === "complete" || c === "reduced" || c === "winning_settlement")) ||
    (t === "tx_receipts" && c === "data")
  ) {
    return JSON.stringify(v);
  }
  return v;
}
export { serializeValue };

export type {
  FlywaySchemaHistory,
  FlywaySchemaHistory_InsertParameters,
  InternalizedImbalances,
  InternalizedImbalances_InsertParameters,
  SettlementSimulations,
  SettlementSimulations_InsertParameters,
  Settlements,
  Settlements_InsertParameters,
  TxReceipts,
  TxReceipts_InsertParameters,
};