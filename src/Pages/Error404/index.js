const Error404 = () => {
  return (
    <div className="text-white flex w-[80%] m-auto h-[100vh] items-center justify-center">
      <div className="w-[580px] text-center">
        <h3 className="text-[50px]">Oopps !</h3>
        <p>
          Page not found. It's possible we moved it during a redesign. Or maybe
          we axed it because it was nonsense from the start. Either way, this
          route isn't looking good for either of us
        </p>
        <a href="/">
          <button className="go-home-page-button text-[#333] bg-[#dedede] rounded-[10px] text-[20px] py-[10px] px-[20px] border-grey mt-[30px] hover:bg-[#fff] scale-[1.015] ">
            Go to Homepage
          </button>
        </a>
      </div>
    </div>
  );
};

export default Error404;
