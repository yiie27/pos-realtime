import { Value } from "@radix-ui/react-select";

export const INITIAL_LOGIN_FORM = {
  email: "",
  password: "",
};

export const INITIAL_STATE_LOGIN_FORM = {
  status: "idle",
  errors: {
    email: [],
    password: [],
    _form: [],
  },
};

export const INITIAL_STATE_PROFILE = {
  name: "",
  role: "",
  avatar_url: "",
};

export const INITIAL_CREATE_USER = {
  email: "",
  password: "",
  name: "",
  role: "",
  avatar_url: "",
};

export const INITIAL_STATE_CREATE_USER_FORM = {
  status: "idle",
  errors: {
    email: [],
    password: [],
    name: [],
    role: [],
    avatar_url: [],
    _form: [],
  },
};

export const ROLE_LIST = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "cashier",
    label: "Cashier",
  },
  {
    value: "kitchen",
    label: "Kitchen",
  },
  {
    value: "waiter",
    label: "Waiter",
  },
];
