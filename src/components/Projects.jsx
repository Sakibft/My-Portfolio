import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-center font-bold text-4xl mt-10 mb-10 text-white">Projects</h1>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
          {/* 1 */}
          <div className=" bg-base-100 w-96 shadow-xl border ">
            <figure className="">
              <Image
                src={"/task.png"}
                alt="Shoes"
                width={700}
                height={100}
                className=""
              />
            </figure>
            <div className=" p-4 space-y-4">
              <h2>Tourism Management website </h2>

              <div className="card-actions">
                <a href="https://taskmania-85588.web.app" target="_blank">
                  <button className="border px-3 py-1 rounded-lg">
                    See now
                  </button>
                </a>
                <a href="https://github.com/Sakibft/Task-Mania" target="_blank">
                  <button className="border px-3 py-1 rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className=" bg-base-100 w-96 shadow-xl border ">
            <figure className="">
              <Image
                src={"/hom.png"}
                alt="Shoes"
                width={700}
                height={100}
                className=""
              />
            </figure>
            <div className=" p-4 space-y-4">
              <h2>Tourism Management website </h2>

              <div className="card-actions">
                <a href="https://b9a9-cc073.web.app" target="_blank">
                  <button className="border px-3 py-1 rounded-lg">
                    See now{" "}
                  </button>
                </a>
                <a
                  href="https://github.com/Sakibft/Sale-Home-.-com-"
                  target="_blank"
                >
                  <button className="border px-3 py-1 rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className=" bg-base-100 w-96 shadow-xl border ">
            <figure className="">
              <Image
                src={"/hero.png"}
                alt="Shoes"
                width={700}
                height={100}
                className=""
              />
            </figure>
            <div className=" p-4 space-y-4">
              <h2>The integrated testing features allow for a streamlined </h2>

              <div className="card-actions">
                <a
                  href="https://65e5cafe6165352482bb4b94--sage-cucurucho-b46207.netlify.app"
                  target="_blank"
                >
                  <button className="border px-3 py-1 rounded-lg">
                    See now{" "}
                  </button>
                </a>
                <a href="https://github.com/Sakibft/Hero" target="_blank">
                  <button className="border px-3 py-1 rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className=" bg-base-100 w-96 shadow-xl border ">
            <figure className="">
              <Image
                src={"/hokey.png"}
                alt="Shoes"
                width={700}
                height={100}
                className=""
              />
            </figure>
            <div className=" p-4 space-y-4">
              <h2>Tourism Management website </h2>

              <div className="card-actions">
                <a
                  href="https://sakibft.github.io/B9A3-Hockeys"
                  target="_blank"
                >
                  <button className="border px-3 py-1 rounded-lg">
                    See now{" "}
                  </button>
                </a>
                <a
                  href="https://github.com/Sakibft/B9A3-Hockeys"
                  target="_blank"
                >
                  <button className="border px-3 py-1 rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className=" bg-base-100 w-96 shadow-xl border ">
            <figure className="">
              <Image
                src={"/back.png"}
                alt="Shoes"
                width={700}
                height={100}
                className=""
              />
            </figure>
            <div className=" p-4 space-y-4">
              <h2>Backbancher traveler Group Management website </h2>

              <div className="card-actions">
                <a
                  href="https://sakibft.github.io/B9A2-Hero-Travel-main"
                  target="_blank"
                >
                  <button className="border px-3 py-1 rounded-lg">
                    See now{" "}
                  </button>
                </a>
                <a
                  href="https://github.com/Sakibft/B9A2-Hero-Travel-main"
                  target="_blank"
                >
                  <button className="border px-3 py-1 rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className=" bg-base-100 w-96 shadow-xl border ">
            <figure className="">
              <Image
                src={"/happy.png"}
                alt="Shoes"
                width={700}
                height={100}
                className=""
              />
            </figure>
            <div className=" p-4 space-y-4">
              <h2>Happy New Year Selibaration </h2>

              <div className="card-actions">
                <a
                  href="https://sakibft.github.io/B9A1-New-Year-New-Mission"
                  target="_blank"
                >
                  <button className="border px-3 py-1 rounded-lg">
                    See now{" "}
                  </button>
                </a>

                <a
                  href="https://github.com/Sakibft/Travel-Hub-server-site"
                  target="_blank"
                >
                  <button className="border px-3 py-1 rounded-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
