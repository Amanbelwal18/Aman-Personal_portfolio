import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-24 pb-4 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 mx-auto mt-4 bg-purple-500"></div>
        <p className="mt-4 text-lg font-semibold text-gray-400">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        
        {/* Vertical Line */}
        <div className="absolute top-0 hidden w-1 h-full transform -translate-x-1/2 bg-white sm:block left-1/2"></div>

        {/* Experience Items */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative flex flex-col items-center mb-20 sm:flex-row"
          >
            
            {/* 🔥 CENTER ICON (FIXED) */}
            <div className="absolute z-10 transform -translate-x-1/2 left-1/2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-400 border-4 border-[#8245ec] flex items-center justify-center shadow-lg">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>

            {/* LEFT / RIGHT CARD */}
            <div
              className={`w-full sm:w-[45%] p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "sm:ml-auto sm:pr-16"
                  : "sm:mr-auto sm:pl-16"
              } mt-16 sm:mt-0`}
            >
              
              {/* Header */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 overflow-hidden bg-white rounded-md">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;