import { asyncComponent } from "../framework/asyncComponent";

const Hello = asyncComponent(() => import(/* webpackChunkName: "hello" */"../routes/Hello"));
const List = asyncComponent(() => import(/* webpackChunkName: "list" */"../routes/List"));

export const routes = [
  {
    path: "/",
    exact: true,
    component: Hello
  },
  {
    path: "/list",
    component: List
  }
];
