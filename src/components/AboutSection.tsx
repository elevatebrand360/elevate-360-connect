import { Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import MeshBackground from './MeshBackground';

const teamMembers = [
  {
    id: 1,
    name: 'Anas Lari',
    role: 'Founder & CEO',
    initials: 'AL',
    image: '/images/team/anas.jpg',
  },
  {
    id: 2,
    name: 'Piyush Singh',
    role: 'Founder & CEO',
    initials: 'PS',
    image: '/images/team/piyush.jpg',
  },
  {
    id: 3,
    name: 'Shifa Parveen',
    role: 'Founder & CEO',
    initials: 'SP',
    image: '/images/team/shifa.jpg',
  },
  {
    id: 4,
    name: 'Riya Shaw',
    role: 'Founder & CEO',
    initials: 'RS',
    image: '/images/team/riya.jpg',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 relative overflow-hidden">
      <MeshBackground opacity={0.15} />
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 text-brand-orange text-sm font-medium inline-flex items-center gap-2 border border-white/20 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                <Users className="h-4 w-4" />
                <span>Our Team</span>
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Meet The Team Behind Elevate Brand 360</h2>
            <p className="text-gray-600 md:text-lg">
              We're a team of passionate digital marketers, designers, and developers committed to elevating your brand to new heights. With our combined expertise, we deliver exceptional results across all digital platforms.
            </p>
            <div className="pt-4">
              <p className="font-medium text-brand-navy">What sets us apart:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "Creative thinking that pushes boundaries",
                  "Data-driven strategies for measurable results",
                  "Personalized approach to every client",
                  "Commitment to excellence and innovation"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="h-2 w-2 mt-2 rounded-full bg-brand-orange"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/30 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <Avatar className="h-24 w-24 mb-4 bg-brand-navy/10">
                        <AvatarImage 
                          src={member.image} 
                          alt={member.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-brand-navy bg-brand-orange/10">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <h3 className="font-semibold text-lg text-brand-navy">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
