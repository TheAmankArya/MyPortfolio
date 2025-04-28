import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  image: string;
  certificateLink: string;
}

const achievements: Achievement[] = [
  {
    title: "Hackathon Participation",
    description: "Secured 4th place at Infenion Hackathon 2025 among 300+ participants.",
    image: "https://i.imgur.com/7eQZ6V5.png", // direct JPG
    certificateLink: "https://imgur.com/undefined",
  },
  {
    title: "MERN_STACK Certification",
    description: "Completed MERN-Stack Developer Certification from Cipher-School.",
    image: "https://i.imgur.com/4vjJIyz.png", // direct JPG
    certificateLink: "https://www.cipherschools.com/certificate/preview?id=66d33c88febc00f799f504ec",
  },
//   {
//     title: "Open Source Contribution",
//     description: "Contributed to major open-source projects on GitHub.",
//     image: "https://images.unsplash.com/photo-1581093588401-800c1fc58b40?auto=format&fit=crop&w=600&q=80", // direct JPG
//     certificateLink: "https://github.com/",
//   },
  {
    title: "Data Structure and ALgorithim Certification",
    description: "Completed My Data Structure and Algorithim Certification in Java from Cipher School.",
    image: "https://i.imgur.com/4vjJIyz.png", // direct JPG
    certificateLink: "https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/TC_amankarya59%40gmail.com_CS2024-10729",
  },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, index) => {
            const isOpenSource = item.title.includes("Open Source");

            return (
              <div
                key={index}
                className="glass bg-white/5 rounded-3xl overflow-hidden p-4 shadow-xl hover:scale-105 transition-transform duration-500 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  </div>

                  <a
                    href={item.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-purple text-white py-1.5 px-3 text-sm rounded-md hover:bg-purple/80 transition duration-300 self-start"
                  >
                    {isOpenSource ? (
                      <>
                        View Contribution
                        <Github size={16} />
                      </>
                    ) : (
                      <>
                        View Certificate
                        <ArrowUpRight size={16} />
                      </>
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
