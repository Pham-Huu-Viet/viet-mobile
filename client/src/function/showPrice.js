export function showPrice(price) {
  if (price == null || isNaN(price)) return "-";
  return `${Number(price).toLocaleString("vi-VN")}₫`;
}
