export const HEADER_TABLE_MENU = [
  "No",
  "Name",
  "Category",
  "Price",
  "Available",
  "Action",
];

export const CATEGORY_LIST = [
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

export const INITIAL_MENU = {
  name: "",
  description: "",
  price: "",
  discount: "",
  category: "",
  image_url: "",
  is_available: "",
};

export const INITIAL_STATE_MENU = {
  status: "idle",
  errors: {
    id: [],
    name: [],
    description: [],
    price: [],
    discount: [],
    category: [],
    image_url: [],
    is_available: [],
    _form: [],
  },
};
