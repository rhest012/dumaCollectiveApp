import {
  DashboardRouter,
  FrontEndRouter,
} from "../features/components/AnimatedRoutes";

export const APPS = [
  {
    subdomain: "www",
    app: FrontEndRouter,
    main: true,
  },
  {
    subdomain: "dashboard",
    app: DashboardRouter,
    main: false,
  },
];
