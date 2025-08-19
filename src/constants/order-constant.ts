import { da } from "zod/v4/locales";

export const HEADER_TABLE_ORDER = [
  "No",
  "Order ID",
  "Customer Name",
  "Table",
  "Status",
  "Action",
];

export const INITIAL_ORDER = {
  customer_name: "",
  table_id: "",
  status: "",
};

export const INITIAL_STATE_ORDER = {
  status: "idle",
  errors: {
    customer_name: [],
    table_id: [],
    status: [],
    _form: [],
  },
};

export const STATUS_CREATE_ORDER = [
  {
    value: "reserved",
    label: "Reserved",
  },
  {
    value: "process",
    label: "Process",
  },
];

export const HEADER_TABLE_DETAIL_ORDER = [
  "No",
  "Menu",
  "Total",
  "Status",
  "Action",
];

export const FILTER_MENU = [
  {
    value: "",
    label: "All",
  },
  {
    value: "Minuman Kopi",
    label: "Minuman Kopi",
  },
  {
    value: "Makanan Ringan",
    label: "Makanan Ringan",
  },
  {
    value: "Makanan Berat",
    label: "Makanan Berat",
  },
  {
    value: "Minuman Non-Kopi",
    label: "Minuman Non-Kopi",
  },
];

// export const INITIAL_STATE_GENERATE_PAYMENT = {
//   ...INITIAL_STATE_ORDER,
//   data: {
//     payment_token: "",
//   }
// }