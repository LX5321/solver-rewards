/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 514YzBAQZrtv69cYBsEZ81brxeNYqdIlBsLo85+9IH+006AOnbqyiydVDFBhu7TcaqUB6Fg5ydDv5nF330ADlA==
 */

/* eslint-disable */
// tslint:disable

interface SettlementSimulations {
  complete: any;
  reduced: any;
  tx_hash: Buffer & { readonly __brand?: "settlement_simulations_tx_hash" };
  winning_settlement: any;
}
export default SettlementSimulations;

interface SettlementSimulations_InsertParameters {
  complete: any;
  reduced: any;
  tx_hash: Buffer & { readonly __brand?: "settlement_simulations_tx_hash" };
  winning_settlement: any;
}
export type { SettlementSimulations_InsertParameters };
