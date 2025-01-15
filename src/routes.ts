import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("lib/pages/home/index.tsx"),
  route("*", "lib/pages/404/index.tsx"),
  route("dashboard", "lib/pages/dashboard/index.tsx"),
  route("wallet", "lib/pages/wallet/index.tsx"),
  route("transaction-history", "lib/pages/transaction-history/index.tsx"),
] satisfies RouteConfig;
