import React from "react";

const Trainer = () => {
  return (
    <div className="pt-3">
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section className="overflow-hidden   sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Personalized Trainer
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Experience personalized one-on-one training sessions tailored to
              your dog's unique needs and your busy schedule. Our expert
              trainer, Dev Sharma, will work closely with you to address
              specific behavioral challenges and achieve your training goals
              effectively. Get started today and see the difference
              individualized attention can make!
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get the Trainer Now
              </a>
            </div>
          </div>
        </div>

        <img alt="" src="src/assets/trainer.jpg" className="" width={500} />
      </section>
    </div>
  );
};

export default Trainer;
