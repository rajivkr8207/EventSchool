import React from "react";
import work from "../../assets/work.png";
import certificate from "../../assets/certificate.png";
const Certificate = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="border-b border-white text-center lg:text-4xl text-2xl  font-bold my-3 py-2">
          What we do
        </h1>

        <div className="flex justify-center lg:flex-row flex-col gap-3">
          <div className="lg:w-[30%] w-full">
            <img src={work} alt="" />
          </div>
          <div className="lg:w-1/2 w-full flex   items-center lg:text-2xl text-lg">
            <p className="font-['Kulim Park', sans-serif] text-center">
              We curate and deliver high-quality workshops tailored to meet your
              unique needs, providing practical knowledge and hands-on
              experience. Whether upskilling your team, introducing new
              technologies,
            </p>
          </div>
        </div>
        <h1 className="border-b border-white text-center lg:text-4xl text-2xl  font-bold my-3 py-2">
          Participation certificate
        </h1>

        <div className="flex justify-center lg:flex-row flex-col gap-3">
          <div className="lg:w-1/2 w-full flex   items-center lg:text-2xl text-lg">
            <p className="font-['Kulim Park', sans-serif] text-center">
              We curate and deliver high-quality workshops tailored to meet your
              unique needs, providing practical knowledge and hands-on
              experience. Whether upskilling your team, introducing new
              technologies, or exploring creative solutions, our workshops help
              you achieve your goals.
            </p>
          </div>
          <div className="lg:w-[30%] w-full">
            <img src={certificate} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
