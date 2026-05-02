import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 mx-auto mt-4 bg-purple-500"></div>
        <p className="mt-4 text-lg font-semibold text-gray-400">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute top-0 hidden w-1 h-full transform -translate-x-1/2 bg-white sm:block left-1/2"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex flex-col items-center mb-20 sm:flex-row"
          >

            {/* 🔥 CENTER ICON FIX */}
            <div className="absolute z-10 transform -translate-x-1/2 left-1/2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-400 border-4 border-[#8245ec] flex items-center justify-center shadow-lg">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>

            {/* LEFT / RIGHT CARD */}
            <div
              className={`w-full sm:w-[45%] p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "sm:mr-auto sm:pl-16"
                  : "sm:ml-auto sm:pr-16"
              } mt-16 sm:mt-0`}
            >

              {/* Header */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 overflow-hidden bg-white rounded-md">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-xl">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {edu.school}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Details */}
              <p className="mt-4 font-bold text-gray-400">
                Grade: {edu.grade}
              </p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;