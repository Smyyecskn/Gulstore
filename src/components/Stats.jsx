import React from "react";

const Stats = () => {
  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Downloads",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl text-center text-gray-600 gap-x-12 justify-between md:px-8 lg:flex">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          <h3 className=" text-gray-800 text-3xl font-semibold sm:text-4xl">
            We do our best to make customers always happy
          </h3>
          <p className="mt-3 max-w-xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis sollicitudin quam ut tincidunt.
          </p>
        </div>
        <div className="flex flex-col-reverse mt-16 lg:mt-4">
          <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
            {stats.map((item, idx) => (
              <li key={idx}>
                <h4 className="text-4xl text-red-400 font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;
