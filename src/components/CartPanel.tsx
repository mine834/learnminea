"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function CartPanel({ title, labels }: { title: string; labels: { continue: string; workbook: string; decrease: string; increase: string } }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="cart-panel">
      <div className="book-mini"><span>PDF</span><div><strong>{title}</strong><small>{labels.workbook}</small></div></div>
      <div className="quantity"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label={labels.decrease}><Minus /></button><span>{quantity}</span><button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label={labels.increase}><Plus /></button></div>
      <strong>{(29900 * quantity).toLocaleString()}₮</strong>
      <Link className="pill-button" href="/checkout">{labels.continue}</Link>
    </div>
  );
}
