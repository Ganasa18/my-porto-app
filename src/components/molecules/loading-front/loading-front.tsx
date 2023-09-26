import "./loading-front.css";
const LoadingScreen = () => {
  return (
    <>
      <section className="relative flex h-screen items-center bg-black justify-center">
        <h2
          data-text="&nbsp; Loading... &nbsp;"
          className="light text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[12rem] cursor-default">
          &nbsp; Loading... &nbsp;
        </h2>
      </section>
    </>
  );
};
export default LoadingScreen;
