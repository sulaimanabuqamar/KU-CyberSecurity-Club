function TeamCard({ member }) {
  return (
    <article className="panel overflow-hidden p-0">
      <img
        src={member.image}
        alt={member.name}
        className="h-56 w-full object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-ku-gold-light">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-ku-cream/80">{member.bio}</p>
      </div>
    </article>
  )
}

export default TeamCard
