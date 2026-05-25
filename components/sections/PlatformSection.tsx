'use client';

import { Zap, TrendingDown, Database } from 'lucide-react';

export default function PlatformSection() {
  const problems = [
    {
      number: '01',
      title: 'Quick access to international practices is limited',
      icon: '◎'
    },
    {
      number: '02',
      title: 'The process of drilling site operations is complex and data intensive',
      icon: '◎'
    },
    {
      number: '03',
      title: 'Sensor analysis in the required with precision is required',
      icon: '◎'
    },
    {
      number: '04',
      title: 'Need for smart asset platform and loss of data',
      icon: '◎'
    }
  ];

  const benefits = [
    {
      stat: '+XX%',
      description: 'Increasing drilling efficiency and reducing per unit cost of global production margins'
    },
    {
      stat: '-XX%',
      description: 'Reducing equipment maintenance costs and related cost communication for enabled more...'
    },
    {
      stat: '+XX%',
      description: 'Increase in production consistency and better overall data reliability'
    }
  ];

  return (
    <section className="relative bg-background text-foreground py-24 px-6 lg:px-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* First Section: Problems */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              The oil industry is facing
              <br />a number of problems
            </h2>
            <div className="hidden lg:block w-6 h-6 border-2 border-foreground/30 rounded-full" />
          </div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative bento-card p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background decorative element */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-primary to-secondary transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-foreground/40">{problem.number}</span>
                    <div className="w-12 h-12 rounded-full border-2 border-foreground/20 flex items-center justify-center text-2xl group-hover:border-primary/40 transition-colors">
                      {problem.icon}
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed">
                    {problem.title}
                  </p>
                </div>

                {/* Decorative circles at bottom */}
                <div className="absolute bottom-0 right-0 w-40 h-40 -m-8 opacity-0 group-hover:opacity-10 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Section: Benefits */}
        <div className="mt-32 pt-24 border-t border-foreground/10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl">
              The implementation will allow
              <br />you to achieve the following results
            </h2>
            <div className="hidden lg:block w-6 h-6 border-2 border-foreground/30 rounded-full" />
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bento-card p-10 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Background decorative element */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-primary to-secondary transition-opacity" />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="mb-8">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      {benefit.stat}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-foreground/70 font-medium leading-relaxed flex-1">
                    {benefit.description}
                  </p>

                  {/* Interactive element - appears on hover */}
                  <div className="mt-6 pt-6 border-t border-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold cursor-pointer">
                      <span>Learn More</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4-4m-4 4h12" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative circles at bottom right */}
                <div className="absolute -bottom-20 -right-20 w-48 h-48 opacity-0 group-hover:opacity-5 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
