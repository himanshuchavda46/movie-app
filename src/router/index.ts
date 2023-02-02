import DiscoverPage from "../components/DiscoverPage";

export interface IAppRoute {
    path: string;
    component: any;
    children?: IAppRoute[];
}
export const routes: IAppRoute[] = [
    {
        path: "/discover",
        component: DiscoverPage,
        children: []
    }
];
