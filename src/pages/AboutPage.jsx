import { ShieldCheck, Target, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import useContent from '../hooks/useContent'

function getPillarIcon(icon) {
  if (icon === 'shield') return <ShieldCheck className="h-6 w-6 text-ku-gold-light" />
  if (icon === 'target') return <Target className="h-6 w-6 text-ku-gold-light" />
  return <Users className="h-6 w-6 text-ku-gold-light" />
}

function AboutPage() {
  const { content } = useContent()
  const about = content.about

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 py-18 md:px-10">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="panel">
            <h3 className="text-xl font-semibold text-white">{about.missionTitle}</h3>
            <p className="mt-3 text-ku-cream/80">{about.missionText}</p>
          </article>
          <article className="panel">
            <h3 className="text-xl font-semibold text-white">{about.visionTitle}</h3>
            <p className="mt-3 text-ku-cream/80">{about.visionText}</p>
          </article>
        </div>
      </section>

      <section className="border-y border-ku-gold/20 bg-ku-navy-2/35">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 py-18 md:grid-cols-3 md:px-10">
          {about.pillars.map((pillar) => (
            <article key={pillar.title} className="panel">
              {getPillarIcon(pillar.icon)}
              <h3 className="mt-4 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-ku-cream/80">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-18 md:px-10">
        <SectionHeading
          eyebrow={about.leadershipEyebrow}
          title={about.leadershipTitle}
          description={about.leadershipDescription}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {about.teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </>
  )
}

export default AboutPage
