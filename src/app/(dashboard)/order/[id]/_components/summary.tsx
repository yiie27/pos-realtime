import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { usePricing } from "@/hooks/use-pricing";
import { convertIDR } from "@/lib/utils";
import { Menu } from "@/validations/menu-validation";

export default function Summary({
  order,
  orderMenu,
  id,
}: {
  order: {
    customer_name: string;
    tables: { name: string }[];
    status: string;
  };
  orderMenu:
    | { menus: Menu; quantity: number; status: string }[]
    | null
    | undefined;
  id: string;
}) {
  const { grandTotal, totalPrice, tax, service } = usePricing(orderMenu);
  return (
    <Card className="w-full shadow-sm">
      <CardContent className="space-y-4">
        <h3 className="text-lg font-semibold">Customer Information</h3>
        {order && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input value={order?.customer_name} disabled />
            </div>
            <div className="space-y-2">
              <Label>Table</Label>
              <Input
                value={(order?.tables as unknown as { name: string })?.name}
                disabled
              />
            </div>
          </div>
        )}
        <Separator />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Order Summary</h3>
          <div className="flex justify-between items-center">
            <p className="text-sm">Subtotal</p>
            <p className="text-sm">{convertIDR(totalPrice)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">Tax (12%)</p>
            <p className="text-sm">{convertIDR(tax)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm">Service (5%)</p>
            <p className="text-sm">{convertIDR(service)}</p>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">{convertIDR(grandTotal)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
