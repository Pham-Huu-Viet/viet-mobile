import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Ticket,
  MessageSquare,
  FileText,
  Settings,
  BarChart3,
} from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    page: "dashboard",
  },
  {
    title: "Quản lý sản phẩm",
    icon: Package,
    items: [
      { title: "Danh sách sản phẩm", page: "products" },
      { title: "Thêm sản phẩm", page: "products-add" },
      { title: "Danh mục", page: "categories" },
      { title: "Thương hiệu", page: "brands" },
      { title: "Quản lý tồn kho", page: "inventory" },
    ],
  },
  {
    title: "Quản lý đơn hàng",
    icon: ShoppingCart,
    items: [
      { title: "Danh sách đơn hàng", page: "orders" },
      { title: "Đơn hàng chờ xử lý", page: "orders-pending" },
      { title: "Đơn hàng đã giao", page: "orders-delivered" },
      { title: "Đơn hàng hủy", page: "orders-cancelled" },
    ],
  },
  {
    title: "Quản lý người dùng",
    icon: Users,
    items: [
      { title: "Danh sách người dùng", page: "users" },
      { title: "Phân quyền", page: "users-roles" },
      { title: "Lịch sử mua hàng", page: "users-history" },
    ],
  },
  {
    title: "Mã giảm giá",
    icon: Ticket,
    items: [
      { title: "Danh sách coupon", page: "coupons" },
      { title: "Tạo coupon mới", page: "coupons-add" },
    ],
  },
  {
    title: "Quản lý đánh giá",
    icon: MessageSquare,
    items: [
      { title: "Đánh giá chờ duyệt", page: "reviews-pending" },
      { title: "Tất cả đánh giá", page: "reviews" },
    ],
  },
  {
    title: "Quản lý nội dung",
    icon: FileText,
    items: [
      { title: "Banner", page: "content-banners" },
      { title: "Trang giới thiệu", page: "content-about" },
      { title: "Blog", page: "content-blog" },
      { title: "Chính sách", page: "content-policies" },
    ],
  },
  {
    title: "Thống kê & Báo cáo",
    icon: BarChart3,
    items: [
      { title: "Doanh thu", page: "analytics" },
      { title: "Sản phẩm bán chạy", page: "analytics-products" },
      { title: "Báo cáo tổng hợp", page: "analytics-reports" },
    ],
  },
  {
    title: "Cài đặt hệ thống",
    icon: Settings,
    items: [
      { title: "Thông tin cửa hàng", page: "settings" },
      { title: "Cấu hình email", page: "settings-email" },
      { title: "Phân quyền admin", page: "settings-permissions" },
      { title: "Audit Log", page: "settings-audit" },
    ],
  },
];
