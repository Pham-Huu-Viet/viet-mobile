import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { allProductsMock } from "./dataCategoryPage.js";

for (const category in allProductsMock) {
  allProductsMock[category] = allProductsMock[category].map((product) => ({
    ...product,
    id: uuidv4(),
  }));
}

const content = `export const allProductsMock = ${JSON.stringify(allProductsMock, null, 2)};`;

fs.writeFileSync("./allProductsWithUUID.js", content, "utf-8");
console.log("✅ Done adding UUIDs!");
