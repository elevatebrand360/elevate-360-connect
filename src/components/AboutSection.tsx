
import { Users } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const teamMembers = [
  {
    id: 1,
    name: 'Anas Lari',
    role: 'Founder & CEO',
    initials: 'AL',
  },
  {
    id: 2,
    name: 'Piyush Singh',
    role: 'Founder & CEO',
    initials: 'PS',
  },
  {
    id: 3,
    name: 'Shifa Parveen',
    role: 'Founder & CEO',
    initials: 'SP',
  },
  {
    id: 4,
    name: 'Riya Shaw',
    role: 'Founder & CEO',
    initials: 'RS',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-lg bg-brand-orange/10 px-3 py-1 text-sm text-brand-orange">
              <Users className="h-4 w-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Meet The Team Behind Elevate Brand 360</h2>
            <p className="text-gray-600 md:text-lg">
              We're a team of passionate digital marketers, designers, and developers committed to elevating your brand to new heights. With our combined expertise, we deliver exceptional results across all digital platforms.
            </p>
            <div className="pt-4">
              <p className="font-medium text-brand-navy">What sets us apart:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-2 w-2 mt-2 rounded-full bg-brand-orange" />
                  <span>Creative thinking that pushes boundaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-2 w-2 mt-2 rounded-full bg-brand-orange" />
                  <span>Data-driven strategies for measurable results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-2 w-2 mt-2 rounded-full bg-brand-orange" />
                  <span>Personalized approach to every client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-2 w-2 mt-2 rounded-full bg-brand-orange" />
                  <span>Commitment to excellence and innovation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4 bg-brand-navy/10">
                    <AvatarFallback className="text-brand-navy bg-brand-orange/10">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg text-brand-navy">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="text-sm mt-2 text-gray-500">
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
