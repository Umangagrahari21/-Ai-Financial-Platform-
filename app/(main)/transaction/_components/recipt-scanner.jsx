"use client";

import { useRef, useEffect } from "react";
import { Camera, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";
import { scanReceipt } from "@/actions/transaction";

export function ReceiptScanner({ onScanComplete }) {
  const fileInputRef = useRef(null);

  const {
    loading: scanReceiptLoading,
    fn: scanReceiptFn,
    data: scannedData,
  } = useFetch(scanReceipt);

  const handleReceiptScan = async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }

    await scanReceiptFn(file);
  };

  useEffect(() => {
    if (scannedData && !scanReceiptLoading) {
      onScanComplete(scannedData);
      toast.success("Receipt scanned successfully");
    }
  }, [scanReceiptLoading, scannedData]);

  return (
    <div className="flex items-center gap-4">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleReceiptScan(file);
        }}
      />
    <Button
  type="button"
  variant="outline"
  className="w-full h-12 bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 hover:from-indigo-700 hover:via-blue-700 hover:to-sky-600 transition-all duration-300 text-white hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105"
  onClick={() => fileInputRef.current?.click()}
  disabled={scanReceiptLoading}
>
  {scanReceiptLoading ? (
    <>
      <Loader2 className="mr-3 h-5 w-5 animate-spin" />
      <span className="font-semibold">Scanning Receipt...</span>
    </>
  ) : (
    <>
      <Camera className="mr-3 h-5 w-5 drop-shadow-md" />
      <span className="font-semibold tracking-wide">Scan Receipt with AI</span>
    </>
  )}
</Button>
    </div>
  );
}
