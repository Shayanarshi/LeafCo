import React from 'react'

const About = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[var(--color-forest)] mb-4">About Leaf &amp; Co.</h1>
      <p className="text-gray-600 leading-relaxed">
        Leaf &amp; Co. is a demo plant shop built to practice explaining and modifying a small
        React project. We picked six low-maintenance indoor plants that survive apartment
        living, inconsistent light, and the occasional missed watering.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        This page, like the rest of the site, is intentionally simple — a good place to
        practice adding a new section or field without breaking anything else.
      </p>
    </div>
  )
}

export default About
