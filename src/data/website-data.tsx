// src/data/website-data.tsx

import { Metadata } from "next";
import { ReactNode } from "react";

export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();

export enum HeaderNavItems {
  Home = "home",
  Pricing = "purchase",
  Contact = "contact",
}
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Pricing,
  HeaderNavItems.Contact,
];

export const productImages = {
  PDFtoPNGConverter: {
    title: "PDF to PNG Converter",
    imgName: `/${headerCompanyName.toLowerCase()}/${"pdf-to-png-converter".toLowerCase()}`,
    width: 739,
    height: 469,
  },
};
export enum Categories {
  All = "All",
  WebApp = "Web App",
  DesktopApp = "Desktop App",
  Converter = "Converter",
  Splitter = "Splitter",
  Merger = "Merger",
}
export const categoryList: string[] = [
  Categories.All,
  Categories.WebApp,
  Categories.DesktopApp,
  Categories.Converter,
  Categories.Splitter,
  Categories.Merger,
];
export const licenseOptions = [
  {
    licenseType: "ONE Computer License",
    price: "$24.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/pdf-to-png-converter-one-computer-license",
  },
  {
    licenseType: "TWO Computers License",
    price: "$39.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/pdf-to-png-converter-two-computers-license",
  },
  {
    licenseType: "THREE Computers License",
    price: "$44.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/pdf-to-png-converter-three-computers-license",
  },
  {
    licenseType: "FIVE Computers License",
    price: "$64.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/pdf-to-png-converter-five-computers-license",
  },
  {
    licenseType: "TEN Computers License",
    price: "$109.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/pdf-to-png-converter-ten-computers-license",
  },
  {
    licenseType: "UNLIMITED Computers License",
    price: "$224.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/pdf-to-png-converter-unlimited-computers-license",
  },
];
export enum ProductIDs {
  PDFtoPNGConverter = "pdf-to-png-converter",
}
export const productTitles = {
  PDFtoPNGConverter: "PDF to PNG Converter",
} as const;
export type ProductTitles = (typeof productTitles)[keyof typeof productTitles];

export const productSubTitles = {
  PDFtoPNGConverter: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
} as const;
export type ProductSubTitles =
  (typeof productSubTitles)[keyof typeof productSubTitles];

export const productWebsites = {
  PDFtoPNGConverter: "https://www.pdf-to-png-converter.com",
} as const;
export type ProductWebsite =
  (typeof productWebsites)[keyof typeof productWebsites];

export const productDownloadLinks = {
  PDFtoPNGConverter:
    "https://pdf-to-png-converter.com/downloads/pdf-to-png-converter-setup.exe",
} as const;
export type ProductDownloadLinks =
  (typeof productDownloadLinks)[keyof typeof productDownloadLinks];
export interface portfolioItem {
  id: ProductIDs;
  title: ProductTitles;
  subtitle: ProductSubTitles;
  src: string;
  width: number;
  height: number;
  categories: Categories[];
  pageLink: string;
  productWebsite: ProductWebsite;
  downloadLink?: ProductDownloadLinks;
  features: string[];
  description?: ReactNode;
  metaData: Metadata;
}
