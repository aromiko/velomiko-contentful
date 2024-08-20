import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getPageData } from "../lib/contentful";
import Head from "next/head";
import Header from "@/components/header/header";
import { BlockRenderer } from "@/components/block-renderer/block-renderer";

interface PageProps {
  pageData: any; // Replace with the appropriate type
}

const Page: React.FC<PageProps> = ({ pageData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Header />
        <main className="container">
          <div>Loading</div>
        </main>
      </>
    );
  }

  if (!pageData) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <Header />
      <main className="container">
        <div>
          <Head>
            <title>{pageData.fields.title} | VeloMiko</title>
            <meta name="description" content={pageData.fields.description} />
          </Head>
          <BlockRenderer block={pageData.fields.content} />
        </div>
      </main>
    </>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // No paths are pre-rendered
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug ? (params.slug as string[]).join("/") : "/";
  const pageData = await getPageData(slug);

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData,
    },
    revalidate: 10,
  };
};
