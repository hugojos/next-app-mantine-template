interface PageParams extends Record<string, string | string[] | undefined> {
  locale: string;
}

export default interface PageProps {
  params: PageParams;
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface LayoutProps {
  children: React.ReactNode;
  params: PageParams;
}
