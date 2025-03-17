import InfoCard from "./InfoCard";

const AboutSection = () => {
  return (
    <div className=" relative bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-center text-base/7 font-semibold text-[var(--call-to-action)]">
          Welcome to Monarky Concepts Limited
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Innovative Fertilizers for a Sustainable Future
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Eco-Friendly Solutions
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Our fertilizers are designed to minimize environmental impact
                  while maximizing crop yield. Perfect for sustainable farming
                  practices.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-3 top-10 bottom-3 overflow-hidden  bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  High-Performance Formulas
                </p>
                <p className="mt-2 mb-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Grow smarter with our innovative fertilizers, designed to
                  enrich your soil while protecting the environment.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center lg:pb-2">
                <img
                  className="w-full h-[min(152px,40cqw)] object-cover max-lg:max-w-xs"
                  src="https://images.unsplash.com/photo-1492496913980-501348b61469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Soil Health Experts
                </p>
                <p className="mt-2 mb-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We provide solutions that improve soil health, ensuring
                  long-term fertility and sustainability for your farm.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] w-full object-cover"
                  src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Customized Solutions
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Invest in the future of farming with fertilizers that support
                  both productivity and sustainability.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="@container relative h-full min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-3 top-10 bottom-3 overflow-hidden  bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 ">
        <InfoCard
          title="Mission"
          text="To contribute to a safe and sustainable ecosystem through provision of environment friendly Organic based agricultural inputs."
        />
        <InfoCard
          title="Vision"
          text="To be the leading provider of regenerative agriculture inputs in East Africa and the world."
        />
      </div>
    </div>
  );
};

export default AboutSection;
