import Script from "next/script";
import DetailOrder from "./_components/detail-order";
import { environment } from "@/config/environment";

export const metadata = {
  title: "WPU Cafe | Detail Order",
};

declare global {
  interface Window {
    snap: any;
  }
}

export default function DetailOrderPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <div className="w-full">
      <Script
        src={`${environment.MIDTRANS_API_URL}/snap/snap.js`}
        data-client-key={environment.MIDTRANS_CLIENT_KEY}
        strategy="lazyOnload"
      />
      <DetailOrder id={id} />
    </div>
  );
}
