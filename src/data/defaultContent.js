const defaultContent = {
  home: {
    badgeText: 'Khalifa University Student Organization',
    heroTitle: 'Khalifa University Cybersecurity Club',
    heroDescription:
      'Building the next generation of cyber defenders through practical training, collaborative challenges, and industry exposure.',
    heroSideText:
      'Official student club dedicated to cybersecurity learning, leadership development, and technical excellence.',
    joinButtonText: 'Join the Club',
    eventsButtonText: 'Explore Events',
    introEyebrow: 'Welcome',
    introTitle: 'A student-led community for cybersecurity excellence',
    introDescription:
      'The club creates a professional environment for learning, competitions, and collaboration while preparing students for real-world security careers.',
    highlights: [
      { title: 'Hands-on Workshops', icon: 'shield' },
      { title: 'Capture the Flag Events', icon: 'trophy' },
      { title: 'Industry Expert Talks', icon: 'users' },
    ],
    upcomingEyebrow: 'Upcoming',
    upcomingTitle: 'Events coming soon',
    upcomingDescription:
      'A snapshot of our next activities. Visit the Events page for complete details and updates.',
  },
  about: {
    eyebrow: 'About',
    title: 'A mission-driven cybersecurity community at KU',
    description:
      'We help students grow as security professionals through structured learning, practical events, and a strong peer network.',
    missionTitle: 'Mission',
    missionText:
      'To equip students with real-world cybersecurity knowledge and leadership opportunities through workshops, competitions, and collaborative projects.',
    visionTitle: 'Vision',
    visionText:
      'To become a leading university cybersecurity community in the region, producing graduates ready to secure the digital future.',
    pillars: [
      {
        title: 'What We Do',
        text: 'Weekly workshops, technical study sessions, and challenge-based learning for practical cybersecurity skills.',
        icon: 'shield',
      },
      {
        title: 'Our Focus',
        text: 'Core domains include threat analysis, digital forensics, secure development, and incident response readiness.',
        icon: 'target',
      },
      {
        title: 'Why Join',
        text: 'Build technical confidence, connect with peers, and gain exposure to career pathways in cybersecurity.',
        icon: 'users',
      },
    ],
    leadershipEyebrow: 'Leadership',
    leadershipTitle: 'The team behind the club',
    leadershipDescription:
      'Our leadership team combines technical depth with a strong commitment to student development and community impact.',
    teamMembers: [
      {
        name: 'Fatima Al Marzooqi',
        role: 'Club President',
        bio: 'Leads club strategy, partnerships, and annual programming across KU cybersecurity initiatives.',
        image:
          'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Yousef Al Kaabi',
        role: 'Vice President',
        bio: 'Coordinates member operations and oversees workshop logistics and cross-team collaboration.',
        image:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Mariam Al Mazrouei',
        role: 'CTF Lead',
        bio: 'Designs CTF training tracks and mentors student teams for national and regional competitions.',
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  events: {
    eyebrow: 'Events',
    title: 'Workshops, CTFs, talks, and competitions',
    description:
      'A consistent lineup of practical and academic activities designed to strengthen technical depth and team collaboration.',
    currentTermId: 'spring-2026',
    terms: [
      {
        id: 'spring-2026',
        label: 'Spring 2026',
        subtitle: 'January - May',
      },
      {
        id: 'fall-2026',
        label: 'Fall 2026',
        subtitle: 'August - December',
      },
    ],
    allEvents: [
      {
        id: 'event-1',
        termId: 'spring-2026',
        title: 'SOC Fundamentals Bootcamp',
        date: 'May 02, 2026',
        time: '5:00 PM - 7:00 PM',
        location: 'Engineering Building, Room E2-102',
        description:
          'A practical workshop introducing Security Operations Center workflows, incident triage, and SIEM fundamentals.',
        tag: 'Workshop',
      },
      {
        id: 'event-2',
        termId: 'spring-2026',
        title: 'Inter-University CTF Qualifier',
        date: 'May 10, 2026',
        time: '4:00 PM - 9:00 PM',
        location: 'KU Innovation Hall',
        description:
          'Team-based CTF qualifiers focused on web exploitation, digital forensics, and cryptography challenge tracks.',
        tag: 'Competition',
      },
      {
        id: 'event-3',
        termId: 'spring-2026',
        title: 'Cybersecurity Career Panel',
        date: 'May 18, 2026',
        time: '1:30 PM - 3:00 PM',
        location: 'Auditorium B',
        description:
          'Panel discussion with alumni and security leaders covering internships, certifications, and career pathways.',
        tag: 'Talk',
      },
      {
        id: 'event-4',
        termId: 'fall-2026',
        title: 'Red Team Fundamentals Lab',
        date: 'Oct 12, 2026',
        time: '5:00 PM - 7:30 PM',
        location: 'Cyber Range Lab C1-213',
        description:
          'Practical red team lab focused on recon, privilege escalation, and reporting fundamentals.',
        tag: 'Lab',
      },
    ],
    scheduleEyebrow: 'Schedule Browser',
    scheduleTitle: 'Browse by academic term',
    scheduleDescription:
      'Use the arrows to move across terms and quickly review the club timeline. The selected term is highlighted for easy orientation.',
  },
  resources: {
    eyebrow: 'Resource Zone',
    title: 'Learning assets and cybersecurity references',
    description:
      'A central place for members to access practical guides, technical materials, and preparation resources.',
    resources: [
      {
        title: 'Starter Learning Paths',
        text: 'Curated beginner-to-advanced learning tracks in network security, digital forensics, and secure coding.',
        icon: 'book',
        link: '#',
      },
      {
        title: 'CTF Preparation Guides',
        text: 'Challenge strategies, walkthrough practices, and team preparation material for upcoming competitions.',
        icon: 'terminal',
        link: '#',
      },
    ],
    comingSoonTitle: 'Coming soon',
    comingSoonText:
      'Member-only resource links, workshop recordings, challenge archives, and downloadable checklists will be published here as the semester progresses.',
  },
  contact: {
    joinEyebrow: 'Join Us',
    joinTitle: "Become part of KU's cybersecurity network",
    joinDescription:
      'Whether you are new to cybersecurity or already experienced, the club provides structured growth and meaningful opportunities.',
    joinBullets: [
      'Access practical training sessions led by peers and mentors.',
      'Join project teams, challenge squads, and outreach initiatives.',
      'Represent Khalifa University in cybersecurity competitions and showcases.',
    ],
    joinButtonText: 'Open Membership Form',
    joinLink: 'https://forms.gle/',
    contactTitle: 'Contact Us',
    contactDescription: 'Send us a message and we will get back to you soon.',
    email: 'cybersecurity.club@ku.ac.ae',
    location: 'Khalifa University Main Campus, Abu Dhabi',
    officeHours: 'Office hours: Mon-Thu, 12:00 PM - 3:00 PM',
  },
  footer: {
    brandName: 'Khalifa University Cybersecurity Club',
    copyright: 'Copyright © 2026. All rights reserved.',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Events', to: '/events' },
      { label: 'Resource Zone', to: '/resources' },
      { label: 'Contact', to: '/contact' },
    ],
    socials: {
      email: 'cybersecurity.club@ku.ac.ae',
      linkedin: 'https://www.linkedin.com',
      instagram: 'https://www.instagram.com',
    },
  },
}

export default defaultContent
