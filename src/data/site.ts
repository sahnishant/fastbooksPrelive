export const whatsappConfig = {
  phoneNumber: "919472612333",
  message: "Hi, I want early access to FastBooks for my business. Please contact me."
};

export const site = {
  name: "Fastbooks",
  url: "https://fastbooks.in",
  tagline: "Accounting without daily entry",
  ownerWhatsAppNumber: whatsappConfig.phoneNumber,
  googleSiteVerification: "",
  defaultOgImage: "/og/fastbooks-og.svg",
  defaultTitle: "Fastbooks | Accounting Software for Indian Businesses",
    defaultDescription: "Fastbooks turns bills, receipts, bank transactions, and voice notes into accountant-ready entries for Indian businesses.",
  nav: [
    { label: "Best Software", href: "/resources/best-accounting-software-india/" },
    { label: "Tally Alternative", href: "/alternatives/tally-prime/" },
    { label: "GST Accounting", href: "/features/gst-accounting-software/" },
    { label: "Traders", href: "/solutions/accounting-software-for-traders/" },
    { label: "GST Calculator", href: "/tools/free-gst-calculator/" }
  ]
};

export const footerLinks = {
  capabilities: [
    { label: "GST accounting software", href: "/features/gst-accounting-software/" },
    { label: "GST billing software", href: "/features/gst-billing-software/" },
    { label: "Bank reconciliation software", href: "/features/bank-reconciliation-software/" },
    { label: "WhatsApp accounting", href: "/features/whatsapp-accounting/" },
    { label: "Inventory accounting software", href: "/features/inventory-accounting-software/" },
    { label: "Mobile accounting app", href: "/features/mobile-accounting-app/" }
  ],
  solutions: [
    { label: "Small business accounting software", href: "/solutions/accounting-software-for-small-business/" },
    { label: "Accounting software for traders", href: "/solutions/accounting-software-for-traders/" },
    { label: "Wholesale accounting software", href: "/solutions/wholesale-accounting-software/" },
    { label: "Manufacturing accounting software", href: "/solutions/manufacturing-accounting-software/" },
    { label: "Retail accounting software", href: "/solutions/retail-accounting-software/" },
    { label: "Accounting software for accountants", href: "/solutions/accounting-software-for-accountants/" }
  ],
  resources: [
    { label: "Best accounting software India", href: "/resources/best-accounting-software-india/" },
    { label: "Most used accounting software India", href: "/resources/most-used-accounting-software-india/" },
    { label: "TallyPrime alternative", href: "/alternatives/tally-prime/" },
    { label: "Zoho Books alternative", href: "/alternatives/zoho-books/" },
    { label: "Vyapar alternative", href: "/alternatives/vyapar/" },
    { label: "Refrens alternative", href: "/alternatives/refrens/" },
    { label: "myBillBook alternative", href: "/alternatives/mybillbook/" },
    { label: "Free GST calculator", href: "/tools/free-gst-calculator/" },
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Use", href: "/terms/" }
  ]
};

export function buildWhatsAppUrl(_source?: string) {
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.message)}`;
}
