"use client";

import CountUp from "react-countup";

export default function StatsBoard() {
  return (
    <section className="py-16  text-purple-700">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={120} duration={5} />+
          </h2>
          <p className="text-gray-500 mt-2">Videos Edited</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={25} duration={5} />+
          </h2>
          <p className="text-gray-500 mt-2">Websites Built</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={60} duration={5} />+
          </h2>
          <p className="text-gray-500 mt-2">Presentation Slides Delivered</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">
            <CountUp end={3000} duration={5} separator="," />+
          </h2>
          <p className="text-gray-500 mt-2">Forex Market Analysis</p>
        </div>

      </div>
    </section>
  );
}