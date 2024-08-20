import Header from "@/components/header/header";

const NotFound = () => {
  return (
    <div className="container">
      <Header />
      <section className="flex flex-col items-center justify-center py-40">
        <h1 className="text-9xl">404</h1>
        <h2>Page not found.</h2>
      </section>
    </div>
  );
};

export default NotFound;
