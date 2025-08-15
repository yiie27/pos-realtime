import { table } from "console";
import z from "zod";

export const orderSchema = z.object({
  order_id: z.string(),
  customer_name: z.string(),
  table_id: z.string(),
  tables: z.array(
    z.object({
      name: z.string(),
      id: z.string(),
    })
  ),
  status: z.string(),
});
export const orderFormSchema = z.object({
  customer_name: z.string().min(1, "Customer name is required"),
  table_id: z.string().min(1, "Select a table"),
  status: z.string().min(1, "Select a status"),
});

export type Order = z.infer<typeof orderSchema>;
export type OrderForm = z.infer<typeof orderFormSchema>;
