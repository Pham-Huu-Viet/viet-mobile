import {
  ArrowDown,
  ArrowDownAZ,
  ArrowDownZA,
  ArrowUp,
  List,
  ListOrdered,
  ListPlus,
  TrendingUp,
} from "lucide-react";

// Filter Price
export const optionPrices = [
  { label: "all Prices" },
  { label: "under 2 million" },
  { label: "from 2 to 7 million" },
  { label: "over 7 million" },
];

// Toolbar size Page
export const sizePageOption = [
  {
    label: "12 products",
    icon: <List />,
  },
  {
    label: "24 products",
    icon: <ListOrdered />,
  },
  {
    label: "36 products",
    icon: <ListPlus />,
  },
];

// Toolbar Sorting
export const sortOption = [
  {
    label: "popular",
    icon: <TrendingUp />,
  },
  {
    label: "ascending price",
    icon: <ArrowUp />,
  },
  {
    label: "descending price",
    icon: <ArrowDown />,
  },
  {
    label: "A-Z name",
    icon: <ArrowDownAZ />,
  },
  {
    label: "Z-A name",
    icon: <ArrowDownZA />,
  },
];
