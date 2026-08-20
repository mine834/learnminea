import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS, type CpMenusData, type MenuItem } from "@/graphql/cms/queries/menu";
import { CP_PAGES, type CpPagesData, type Page } from "@/graphql/cms/queries/page";
import { CP_POSTS, type CpPostsData, type Post } from "@/graphql/cms/queries/post";

const revalidateContext = {
  fetchOptions: { next: { revalidate: 60 } },
};

export async function getCmsMenus(locale: string, kind: "header" | "footer"): Promise<MenuItem[]> {
  try {
    const client = await getServerApolloClient();
    const { data } = await client.query<CpMenusData>({
      query: CP_MENUS,
      variables: { language: locale, kind },
      context: revalidateContext,
    });
    return data?.cpMenus ?? [];
  } catch {
    return [];
  }
}

export async function getCmsPages(locale: string): Promise<Page[]> {
  try {
    const client = await getServerApolloClient();
    const { data } = await client.query<CpPagesData>({
      query: CP_PAGES,
      variables: { language: locale },
      context: revalidateContext,
    });
    return data?.cpPages ?? [];
  } catch {
    return [];
  }
}

export async function getCmsPosts(locale: string): Promise<Post[]> {
  try {
    const client = await getServerApolloClient();
    const { data } = await client.query<CpPostsData>({
      query: CP_POSTS,
      variables: { language: locale, status: "published", limit: 20 },
      context: revalidateContext,
    });
    return data?.cpPosts ?? [];
  } catch {
    return [];
  }
}
