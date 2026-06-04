export type ProductProofAsset = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  pageTargets: string[];
};

export const productProofAssets: ProductProofAsset[] = [
  {
    id: "voice-note-to-expense-draft",
    title: "Voice note to expense draft",
    description: "A short business voice note becomes a review-ready expense entry with amount, narration and ledger hints.",
    imageSrc: "/product-proof/voice-note-to-expense-draft.svg",
    alt: "Fastbooks placeholder showing voice note converted into an expense draft for accountant review",
    pageTargets: ["homepage", "whatsapp-accounting", "mobile-accounting"]
  },
  {
    id: "bill-photo-to-purchase-draft",
    title: "Bill photo to purchase draft",
    description: "A supplier bill photo becomes a purchase draft with party, amount, GST and review status.",
    imageSrc: "/product-proof/bill-photo-to-purchase-draft.svg",
    alt: "Fastbooks placeholder showing supplier bill photo converted into purchase entry draft",
    pageTargets: ["homepage", "gst-accounting", "gst-billing", "tally-alternative"]
  },
  {
    id: "bank-row-to-receipt-payment-draft",
    title: "Bank row to receipt or payment draft",
    description: "A bank statement row is interpreted into a receipt or payment draft with party and narration hints.",
    imageSrc: "/product-proof/bank-row-to-receipt-payment-draft.svg",
    alt: "Fastbooks placeholder showing bank statement row converted into receipt or payment draft",
    pageTargets: ["homepage", "bank-reconciliation", "tally-alternative", "zoho-alternative"]
  },
  {
    id: "review-inbox-accountant-approval",
    title: "Review inbox for accountant approval",
    description: "Prepared entries wait in a review queue so accountants can approve, correct or reject before posting.",
    imageSrc: "/product-proof/review-inbox-accountant-approval.svg",
    alt: "Fastbooks placeholder showing accountant review inbox with draft accounting entries",
    pageTargets: ["homepage", "accountants", "tally-alternative", "vyapar-alternative"]
  },
  {
    id: "gst-ledger-hints-review",
    title: "GST and ledger hints stay reviewable",
    description: "GST, party and ledger suggestions are shown as hints, not final tax decisions.",
    imageSrc: "/product-proof/gst-ledger-hints-review.svg",
    alt: "Fastbooks placeholder showing GST and ledger hints requiring human review",
    pageTargets: ["homepage", "gst-accounting", "gst-billing"]
  },
  {
    id: "owner-staff-accountant-flow",
    title: "Owner, staff and accountant workflow",
    description: "Owners or staff capture transaction context early while accountants keep final review control.",
    imageSrc: "/product-proof/owner-staff-accountant-flow.svg",
    alt: "Fastbooks placeholder showing owner staff and accountant collaboration workflow",
    pageTargets: ["homepage", "accountants", "traders", "whatsapp-accounting"]
  }
];
