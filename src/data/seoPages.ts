export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  ctaSource: string;
  sections: {
    title: string;
    body: string;
  }[];
  bullets: string[];
};

export const solutionPages: SeoPage[] = [
  {
    slug: "retail-accounting-software",
    title: "Retail Accounting Software India | Fastbooks",
    description: "Fastbooks helps Indian retail businesses prepare sales, purchase, expense and bank entries from daily bills, receipts, voice notes and bank transactions.",
    eyebrow: "Retail accounts",
    h1: "Retail accounting software for daily sales, expenses and bank entries.",
    intro: "Retail businesses need fast accounts capture because transactions happen continuously. Fastbooks helps convert daily inputs into review-ready accounting entries.",
    ctaSource: "Retail Accounting Software",
    sections: [
      { title: "Daily sales and receipts", body: "Prepare sales entries and receipt drafts from customer payments, bill photos and quick notes." },
      { title: "Purchase and supplier bills", body: "Capture supplier invoices before the paper trail gets lost and keep them ready for accountant review." },
      { title: "Cash, UPI and bank movement", body: "Record cash and bank activity with clearer narration and party context." }
    ],
    bullets: ["Sales entries", "Expense entries", "Supplier bills", "Bank receipts", "Outstanding follow-up", "Accountant review"]
  },
  {
    slug: "wholesale-accounting-software",
    title: "Wholesale Accounting Software India | Fastbooks",
    description: "Fastbooks helps wholesalers prepare sales, purchase, payment and receipt entries from bills, voice notes and bank statement rows.",
    eyebrow: "Wholesale accounts",
    h1: "Accounting software for wholesalers who handle frequent sales and collections.",
    intro: "Wholesale businesses deal with credit sales, collections, purchase bills and bank receipts. Fastbooks focuses on faster capture and review-ready accounts preparation.",
    ctaSource: "Wholesale Accounting Software",
    sections: [
      { title: "Credit sales and outstanding", body: "Prepare sales and receipt drafts with party and invoice context for follow-up." },
      { title: "Purchase entries", body: "Capture supplier bills and purchase context without waiting for month-end data entry." },
      { title: "Bank receipt matching", body: "Use bank narration and transaction text to suggest customer receipt entries." }
    ],
    bullets: ["Customer collections", "Supplier bills", "Sundry debtor hints", "Bank reconciliation", "Purchase entries", "GST review"]
  },
  {
    slug: "manufacturing-accounting-software",
    title: "Manufacturing Accounting Software India | Fastbooks",
    description: "Fastbooks helps manufacturers capture vendor bills, expenses, bank payments and GST-aware accounting entries for review.",
    eyebrow: "Manufacturing accounts",
    h1: "Manufacturing accounting software for vendor bills, expenses and bank payments.",
    intro: "Manufacturers often lose time collecting bills, recording expenses and matching bank payments. Fastbooks helps prepare the accounting entry draft earlier.",
    ctaSource: "Manufacturing Accounting Software",
    sections: [
      { title: "Vendor bill capture", body: "Capture purchase bills and raw material expense context before paperwork piles up." },
      { title: "Operational expenses", body: "Record maintenance, freight, labour-related and daily factory costs from voice notes or bill photos." },
      { title: "Review before posting", body: "Keep ledger and GST treatment under accountant control before final posting." }
    ],
    bullets: ["Vendor bills", "Factory expenses", "Bank payments", "GST hints", "Ledger review", "Accountant approval"]
  },
  {
    slug: "service-business-accounting-software",
    title: "Service Business Accounting Software India | Fastbooks",
    description: "Fastbooks helps service businesses prepare invoice, expense and receipt entries from daily business inputs for accountant review.",
    eyebrow: "Service business accounts",
    h1: "Accounting software for Indian service businesses that want faster accounts entry.",
    intro: "Service businesses need simple invoicing, expense tracking, payment receipt capture and GST review without spending time on repetitive data entry.",
    ctaSource: "Service Business Accounting Software",
    sections: [
      { title: "Client invoices and receipts", body: "Prepare sales and receipt entries from client payment context." },
      { title: "Expense capture", body: "Convert travel, software, office and project expenses into draft accounting entries." },
      { title: "Cleaner review", body: "Give accountants better transaction context instead of scattered screenshots and late memory." }
    ],
    bullets: ["Client receipts", "Project expenses", "GST review", "Bank entries", "Narration hints", "Accountant-ready drafts"]
  },
  {
    slug: "restaurant-accounting-software",
    title: "Restaurant Accounting Software India | Fastbooks",
    description: "Fastbooks helps restaurants capture expense bills, vendor payments, daily receipts and bank entries for accountant review.",
    eyebrow: "Restaurant accounts",
    h1: "Restaurant accounting software for daily expenses, vendor bills and receipts.",
    intro: "Restaurants generate many daily transactions across vendors, utilities, cash, UPI and bank receipts. Fastbooks helps capture context as it happens.",
    ctaSource: "Restaurant Accounting Software",
    sections: [
      { title: "Vendor and grocery bills", body: "Capture purchase bills from suppliers before they are missed or mixed with other paperwork." },
      { title: "Daily expense entries", body: "Prepare kitchen, delivery, packaging and utility expense drafts quickly." },
      { title: "Cash and bank receipts", body: "Convert daily settlement and bank movement into clearer receipt entries." }
    ],
    bullets: ["Vendor bills", "Daily expenses", "Cash entries", "Bank receipts", "GST hints", "Review inbox"]
  },
  {
    slug: "pharmacy-accounting-software",
    title: "Pharmacy Accounting Software India | Fastbooks",
    description: "Fastbooks helps pharmacies capture supplier bills, daily expenses, bank entries and GST-aware records for accountant review.",
    eyebrow: "Pharmacy accounts",
    h1: "Pharmacy accounting software for supplier bills and daily accounts capture.",
    intro: "Pharmacy businesses handle frequent purchase bills, sales, returns, expenses and bank entries. Fastbooks focuses on faster accounts capture and review.",
    ctaSource: "Pharmacy Accounting Software",
    sections: [
      { title: "Supplier bill capture", body: "Capture medicine supplier bills and related GST clues for review." },
      { title: "Daily expenses", body: "Prepare recurring shop expense entries without opening a full accounting screen." },
      { title: "Bank and payment entries", body: "Use bank transaction text to prepare payments and receipts for accountant approval." }
    ],
    bullets: ["Supplier bills", "GST hints", "Expense entries", "Bank entries", "Payment records", "Accountant review"]
  },
  {
    slug: "fmcg-accounting-software",
    title: "FMCG Accounting Software India | Fastbooks",
    description: "Fastbooks helps FMCG businesses prepare purchase, sales, expense and bank entries from bills, receipts and transaction text.",
    eyebrow: "FMCG accounts",
    h1: "FMCG accounting software for high-frequency purchase and sales activity.",
    intro: "FMCG businesses need fast handling of vendor bills, distributor receipts, stock-linked purchases and bank entries. Fastbooks prepares draft entries for review.",
    ctaSource: "FMCG Accounting Software",
    sections: [
      { title: "High transaction volume", body: "Capture daily transaction context before it becomes a backlog." },
      { title: "Supplier and distributor flow", body: "Prepare purchase and receipt drafts with party information." },
      { title: "Bank and outstanding", body: "Reduce manual entry around collections and payment follow-up." }
    ],
    bullets: ["Purchase entries", "Sales receipts", "Distributor collections", "Bank matching", "GST hints", "Outstanding follow-up"]
  },
  {
    slug: "textile-accounting-software",
    title: "Textile Accounting Software India | Fastbooks",
    description: "Fastbooks helps textile businesses prepare sales, purchase, expense and bank entries from daily business inputs.",
    eyebrow: "Textile accounts",
    h1: "Textile accounting software for traders, wholesalers and manufacturers.",
    intro: "Textile businesses handle purchase bills, sales invoices, transport costs, collections and payments. Fastbooks helps prepare entries faster for accountant review.",
    ctaSource: "Textile Accounting Software",
    sections: [
      { title: "Sales and purchases", body: "Prepare sales and purchase entries from bills, voice notes and receipt context." },
      { title: "Transport and expense capture", body: "Record freight, packing and operating expenses quickly." },
      { title: "Collections and outstanding", body: "Use bank text to prepare receipt drafts and follow-up hints." }
    ],
    bullets: ["Sales entries", "Purchase entries", "Freight expenses", "Bank receipts", "Outstanding", "Review layer"]
  },
  {
    slug: "jewellery-accounting-software",
    title: "Jewellery Accounting Software India | Fastbooks",
    description: "Fastbooks helps jewellery businesses capture bills, expenses and bank entries for accountant review.",
    eyebrow: "Jewellery accounts",
    h1: "Jewellery accounting software for careful bill and payment capture.",
    intro: "Jewellery accounting needs accuracy and review. Fastbooks can help capture transaction context while keeping final approval under accountant control.",
    ctaSource: "Jewellery Accounting Software",
    sections: [
      { title: "Bill and receipt context", body: "Capture purchase, sale and expense details as soon as they happen." },
      { title: "Review-first workflow", body: "Keep high-value transaction treatment under human review." },
      { title: "Bank entries", body: "Prepare receipt and payment drafts from transaction text." }
    ],
    bullets: ["Bill capture", "Expense entries", "Bank payment records", "Receipt drafts", "GST hints", "Human review"]
  }
];

export const featurePages: SeoPage[] = [
  {
    slug: "gst-billing-software",
    title: "GST Billing Software India | Fastbooks",
    description: "Fastbooks helps Indian businesses capture GST bill details and prepare accounting entries for review from invoices, receipts and voice notes.",
    eyebrow: "GST billing",
    h1: "GST billing software support for review-ready accounting entries.",
    intro: "Fastbooks focuses on capturing GST bill context and preparing sales or purchase entry drafts for accountant review.",
    ctaSource: "GST Billing Software",
    sections: [
      { title: "Bill details capture", body: "Capture party, amount, tax hint and narration from bills and quick notes." },
      { title: "Sales and purchase flow", body: "Prepare accounting entries around the bill, not just a standalone invoice image." },
      { title: "Review before final GST treatment", body: "Keep ledger, HSN/SAC and tax decisions under accountant control." }
    ],
    bullets: ["GST bill capture", "Sales entries", "Purchase entries", "Tax hints", "Review layer", "Accountant approval"]
  },
  {
    slug: "inventory-accounting-software",
    title: "Inventory Accounting Software India | Fastbooks",
    description: "Fastbooks helps businesses capture purchase, sales and expense context that supports inventory-linked accounting review.",
    eyebrow: "Inventory-linked accounts",
    h1: "Inventory accounting support for purchase and sales entry capture.",
    intro: "Inventory-heavy businesses need accurate purchase and sales records. Fastbooks helps prepare accounting entry drafts from bills, notes and transaction context.",
    ctaSource: "Inventory Accounting Software",
    sections: [
      { title: "Purchase bill capture", body: "Capture item and supplier context from bills before it becomes month-end backlog." },
      { title: "Sales and receipt context", body: "Prepare entries around stock-linked sales and payments." },
      { title: "Review-first workflow", body: "Accountants can review entries and stock-linked assumptions before final use." }
    ],
    bullets: ["Purchase bills", "Sales records", "Supplier context", "Expense capture", "Review-ready entries", "GST hints"]
  },
  {
    slug: "einvoicing-software",
    title: "e-Invoicing Software India | Fastbooks",
    description: "Fastbooks helps prepare sales and invoice-related accounting records for review. Final e-invoicing support should be verified based on product availability.",
    eyebrow: "e-Invoicing context",
    h1: "Prepare cleaner invoice-related accounts data before compliance review.",
    intro: "Fastbooks should not overclaim e-invoicing unless the end-to-end feature is live. This page positions invoice capture and review-ready accounting data safely.",
    ctaSource: "e-Invoicing Software",
    sections: [
      { title: "Invoice data capture", body: "Capture customer, amount, tax and narration data from sales invoices." },
      { title: "Accounts preparation", body: "Prepare the accounting entry draft around the invoice." },
      { title: "Compliance review", body: "Keep compliance-sensitive fields under accountant review." }
    ],
    bullets: ["Invoice capture", "Sales entries", "GST hints", "Customer data", "Review layer", "Compliance-safe positioning"]
  },
  {
    slug: "eway-bill-software",
    title: "e-Way Bill Software India | Fastbooks",
    description: "Fastbooks helps capture bill and transport-related accounting context for review. e-Way bill generation support should be added only when available.",
    eyebrow: "e-Way bill context",
    h1: "Capture bill and transport context for accounts review.",
    intro: "This is a future-facing SEO page. Keep claims focused on accounts capture unless Fastbooks supports direct e-way bill generation.",
    ctaSource: "e-Way Bill Software",
    sections: [
      { title: "Transport expense capture", body: "Record freight, dispatch and related expenses for review." },
      { title: "Bill context", body: "Capture invoice and purchase context around movement of goods." },
      { title: "Review before claims", body: "Use this page as a safe bridge to future compliance features." }
    ],
    bullets: ["Transport expenses", "Invoice context", "Purchase entries", "GST hints", "Review-ready records", "Future compliance"]
  },
  {
    slug: "mobile-accounting-app",
    title: "Mobile Accounting App India | Fastbooks",
    description: "Fastbooks helps Indian businesses capture accounts entries from phone-first inputs like voice notes, photos, receipts and bank text.",
    eyebrow: "Mobile accounting",
    h1: "Mobile accounting app for capturing accounts work on the go.",
    intro: "Fastbooks is built around the reality that Indian businesses often capture context on the phone first.",
    ctaSource: "Mobile Accounting App",
    sections: [
      { title: "Phone-first capture", body: "Send bills, receipts, bank text and voice notes without sitting at a desktop." },
      { title: "Draft entry preparation", body: "Fastbooks prepares review-ready accounting entries from those inputs." },
      { title: "Accountant control", body: "Final review remains with the business owner or accountant." }
    ],
    bullets: ["Voice notes", "Bill photos", "Receipts", "Bank text", "Draft entries", "Review inbox"]
  },
  {
    slug: "ledger-accounting-software",
    title: "Ledger Accounting Software India | Fastbooks",
    description: "Fastbooks prepares ledger and party hints from bills, receipts, bank entries and voice notes for accountant review.",
    eyebrow: "Ledger accounting",
    h1: "Ledger accounting software support for cleaner party and ledger mapping.",
    intro: "Most manual accounts work comes from choosing party, ledger, amount and narration correctly. Fastbooks prepares these hints for review.",
    ctaSource: "Ledger Accounting Software",
    sections: [
      { title: "Party matching", body: "Use names in bills, bank text and voice notes to suggest party context." },
      { title: "Ledger hints", body: "Prepare likely ledger mapping for accountant confirmation." },
      { title: "Human approval", body: "Avoid blind auto-posting by keeping mappings reviewable." }
    ],
    bullets: ["Party hints", "Ledger hints", "Narration", "Amount capture", "Review status", "Accountant approval"]
  }
];

export const alternativePages: SeoPage[] = [
  {
    slug: "busy-accounting-software",
    title: "Busy Accounting Software Alternative | Fastbooks",
    description: "Fastbooks is a phone-first accounts capture and entry preparation layer for businesses comparing Busy accounting software alternatives.",
    eyebrow: "Busy alternative",
    h1: "A Busy accounting alternative for faster front-office accounts capture.",
    intro: "Busy is used by many inventory and trading businesses. Fastbooks focuses on capturing transaction context quickly and preparing entries for review.",
    ctaSource: "Busy Alternative",
    sections: [
      { title: "Trade workflow", body: "Capture sales, purchase and bank movement faster." },
      { title: "Review-first records", body: "Keep final ledger and GST treatment under accountant control." },
      { title: "Fastbooks angle", body: "Reduce manual accounts-entry friction without claiming to replace every ERP feature." }
    ],
    bullets: ["Trade accounts", "Purchase bills", "Bank receipts", "GST hints", "Review inbox", "Manual entry reduction"]
  },
  {
    slug: "marg-erp",
    title: "Marg ERP Alternative for Indian Businesses | Fastbooks",
    description: "Fastbooks helps businesses comparing Marg ERP alternatives capture bills, expenses and bank entries for accountant review.",
    eyebrow: "Marg ERP alternative",
    h1: "A Marg ERP alternative for reducing daily accounts entry backlog.",
    intro: "Marg ERP is common in inventory-heavy sectors. Fastbooks is positioned as a faster capture layer for accounts entry preparation.",
    ctaSource: "Marg ERP Alternative",
    sections: [
      { title: "Inventory-heavy context", body: "Capture supplier bills, sales receipts and expense context while the details are fresh." },
      { title: "Entry preparation", body: "Prepare draft accounts entries for human review." },
      { title: "Safe positioning", body: "Do not overclaim ERP replacement. Focus on capture and review." }
    ],
    bullets: ["Supplier bills", "Sales context", "Expense entries", "Bank text", "GST review", "Accountant approval"]
  }
];

export const toolPages: SeoPage[] = [
  {
    slug: "gst-invoice-template",
    title: "GST Invoice Template India | Fastbooks",
    description: "Use this GST invoice template guide for Indian businesses and learn how Fastbooks can help prepare invoice-related accounting entries.",
    eyebrow: "Free template",
    h1: "GST invoice template for Indian businesses.",
    intro: "A simple GST invoice format helps capture party, GSTIN, taxable value, tax amount and total. Fastbooks helps convert invoice context into accounting entry drafts.",
    ctaSource: "GST Invoice Template",
    sections: [
      { title: "What to include", body: "Business name, GSTIN, invoice number, customer details, item details, taxable value, GST and total." },
      { title: "Accounts impact", body: "Each invoice eventually becomes a sales or purchase accounting entry." },
      { title: "Fastbooks connection", body: "Instead of only storing templates, Fastbooks helps prepare review-ready accounting entries." }
    ],
    bullets: ["GSTIN", "Invoice number", "Taxable value", "CGST/SGST/IGST", "Total amount", "Accounting entry"]
  },
  {
    slug: "invoice-generator",
    title: "Invoice Generator for Indian Businesses | Fastbooks",
    description: "Invoice generator page for Indian businesses. Use it as a future tool page connected to Fastbooks accounting entry preparation.",
    eyebrow: "Free tool",
    h1: "Invoice generator for Indian businesses.",
    intro: "This page is a future utility target. It should evolve into an interactive invoice generator that leads into Fastbooks accounting entry preparation.",
    ctaSource: "Invoice Generator",
    sections: [
      { title: "Create invoice details", body: "Capture customer, amount, GST and narration details." },
      { title: "Prepare accounts entry", body: "Fastbooks can use invoice context to prepare draft sales entries." },
      { title: "Review-first flow", body: "Keep final accounting and tax treatment reviewable." }
    ],
    bullets: ["Invoice details", "GST fields", "Customer data", "Sales entry", "Review layer", "WhatsApp CTA"]
  },
  {
    slug: "purchase-order-format",
    title: "Purchase Order Format India | Fastbooks",
    description: "Purchase order format page for Indian businesses and how purchase context flows into accounting entry preparation.",
    eyebrow: "Business format",
    h1: "Purchase order format for Indian businesses.",
    intro: "Purchase orders and vendor bills are upstream of purchase accounting entries. Fastbooks focuses on capturing the context early.",
    ctaSource: "Purchase Order Format",
    sections: [
      { title: "Purchase context", body: "Record vendor, item, amount, expected delivery and GST details." },
      { title: "Accounting connection", body: "Purchase order and bill context can become a purchase entry draft." },
      { title: "Review layer", body: "Accountants verify the final entry before posting." }
    ],
    bullets: ["Vendor details", "Item details", "Amount", "GST", "Purchase entry", "Review"]
  },
  {
    slug: "debit-note-format",
    title: "Debit Note Format India | Fastbooks",
    description: "Debit note format guide for Indian businesses with context on accounting entry preparation.",
    eyebrow: "Business format",
    h1: "Debit note format for Indian businesses.",
    intro: "Debit notes affect accounts and tax treatment. Fastbooks can help preserve context for review-ready entries.",
    ctaSource: "Debit Note Format",
    sections: [
      { title: "What to capture", body: "Party, reason, amount, tax impact, invoice reference and narration." },
      { title: "Accounts impact", body: "A debit note should not be treated casually because it affects party and ledger balances." },
      { title: "Fastbooks angle", body: "Capture context first, let accountants review before final posting." }
    ],
    bullets: ["Party", "Reference invoice", "Amount", "GST impact", "Narration", "Review"]
  }
];
