import React from 'react';
import { motion } from 'framer-motion';

function Achievements() {
  const achievements = [
    {
      title: "Provincial-level Scientific Research",
      year: "2020-2021",
      award: "First Prize",
      description: "Scientific and technical research competition"
    },
    {
      title: "National-level Scientific Research",
      year: "2020-2021",
      award: "Third Prize",
      description: "Scientific and technical research competition"
    },
    {
      title: "Provincial-level Children's Youth Creativity Contest",
      year: "2019-2020",
      award: "Third Prize",
      description: "Youth creativity and innovation competition"
    },
    {
      title: "Creative Contest for People with Disabilities",
      year: "2021-2022",
      award: "Third Prize",
      description: "Innovation and creativity competition"
    }
  ];

  const activities = [
    {
      title: "Deputy Manager",
      organization: "PCS Science and Technology Research Club",
      location: "BR-VT province",
      period: "July 2018 - May 2022",
      description: "Support club members to participate in competitions related to creativity and technology",
      link: "https://www.facebook.com/profile.php?id=100032740065842"
    },
    {
      title: "Project Support | Git/Github Mentor",
      organization: "Summer Code Camp 2024",
      location: "HCMUTE",
      period: "June 2024 - Present",
      description: "Host program teaching student about Object-Oriented Programming and Version Control System with 100+ students online",
      link: "https://www.facebook.com/share/p/NiLnFRuwL5NhuFBm/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#593E67] to-[#84495F] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Achievements & Activities
        </motion.h1>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-[#FEA837] mb-8">Awards & Honors</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FEA837]" />
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-12"
              >
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-0 pr-8 text-right' : 'right-0 pl-8'
                } w-1/2 text-[#FEA837] text-sm`}>
                  {achievement.year}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FEA837] rounded-full" />
                <div className={`relative ${
                  index % 2 === 0 ? 'ml-[50%] pl-8' : 'mr-[50%] pr-8'
                }`}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <div className="inline-block px-3 py-1 bg-[#FEA837] text-white rounded-full text-sm mb-2">
                      {achievement.award}
                    </div>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#FEA837] mb-8">Social Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                  <span className="text-sm text-[#FEA837]">{activity.period}</span>
                </div>
                <a 
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#FEA837] hover:text-[#DE741C] transition-colors mb-2 inline-block"
                >
                  {activity.organization}
                </a>
                <p className="text-gray-400 text-sm mb-2">{activity.location}</p>
                <p className="text-gray-300">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Achievements; 