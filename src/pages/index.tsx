import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/home',
      permanent: false, // Set to `true` if you want this to be a permanent redirect
    },
  };
};

const IndexPage = () => {
  // This component won't be rendered because of the redirect
  return null;
};

export default IndexPage;