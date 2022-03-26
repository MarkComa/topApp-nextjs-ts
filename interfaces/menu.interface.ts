export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}
export interface MenuItem {
    map(arg0: (el: any) => JSX.Element): import("react").ReactNode;
    _id: {
        secondCategory: string;
    }
    pages: PageItem[];
}