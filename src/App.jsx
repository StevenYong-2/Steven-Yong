import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaServer, FaMobileAlt, FaGlobe } from "react-icons/fa";

export default function Portfolio() {
  const [lang, setLang] = useState('en');
  
  const content = {
    en: {
      about: 'About',
      overview: 'Overview',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact',
      experience: 'Experience',
      title: "Hi, I'm Steven!",
      p1: 'I am an Undergraduate Computer Science student at Bina Nusantara University with a strong interest in IT infrastructure, software development, and web technologies, ranging from front-end to back-end.',
      p2: 'I enjoy building and developing websites and applications, and I am always eager to explore new technologies that can help me improve my skills and grow as a developer.',
    },
    id: {
      about: 'Tentang Saya',
      overview: 'Ringkasan',
      projects: 'Proyek',
      certificates: 'Sertifikat',
      contact: 'Kontak',
      experience: 'Pengalaman',
      title: 'Hai, Saya Steven!',
      p1: 'Saya adalah mahasiswa S1 Ilmu Komputer di Universitas Bina Nusantara dengan minat besar pada IT infrastructure, pengembangan perangkat lunak, dan teknologi web.',
      p2: 'Saya senang membangun aplikasi dan terus belajar teknologi baru.',
    },
  };

  const greetings = ['こんにちは！','Hello!','Halo!','안녕하세요!','你好！','Bonjour!','Hola!','Ciao!'];

const interests = [
  {
    title: "Outsystems Developer",
    desc: "Building enterprise-grade apps.",
    icon: <FaServer />,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Web Developer",
    desc: "Modern responsive websites.",
    icon: <FaGlobe />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "App Developer",
    desc: "Mobile apps with great UX.",
    icon: <FaMobileAlt />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "IT Infrastructure",
    desc: "Reliable system management.",
    icon: <FaCode />,
    color: "from-purple-500 to-indigo-500",
  },
];

  const skills = [
    { name: 'React', img: '/React Logo.png' },
    { name: 'JavaScript', img: '/JavaScript Logo.png' },
    { name: 'Laravel', img: '/Laravel Logo.png' },
    { name: 'PHP', img: '/PHP Logo.png' },
    { name: 'Tailwind', img: '/Tailwind Logo.png' },
    { name: 'Three.js', img: '/ThreeJs Logo.png' },
    { name: 'MySQL', img: '/MySQL Logo.png' },
    { name: 'Python', img: '/Python Logo.png' },
    { name: 'HTML', img: '/HTML Logo.png' },
    { name: 'Outsystems', img: '/Outsystem Logo.jpeg' },
    { name: 'CSS', img: '/CSS Logo.png' },
    { name: 'Figma', img: '/Figma Logo.png' },
  ];

  const experiences = [
    {
      title: "Application Developer (Internship)",
      company: "PT Bank Central Asia (BCA)",
      date: "Feb 2025 ~ Mar 2026",
      points: [
        "Developed enterprise apps using Outsystems.",
        "Designed workflows with Draw.io.",
        "Created mockups in Figma.",
        "Performed testing scenarios.",
        "Mentored junior interns.",
      ],
    },
    {
      title: "Freshmen Partner (Volunteer)",
      company: "Bina Nusantara University",
      date: "Aug 2023 ~ Aug 2024",
      points: [
        "Mentored new students.",
        "Provided academic support.",
        "Encouraged campus involvement.",
      ],
    },
  ];

  const interestsData = {
  en: interests,
  id: [
    {
      title: "Outsystems Developer",
      desc: "Membangun aplikasi enterprise.",
      icon: <FaServer />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Web Developer",
      desc: "Website modern dan responsif.",
      icon: <FaGlobe />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "App Developer",
      desc: "Aplikasi mobile dengan UX baik.",
      icon: <FaMobileAlt />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "IT Infrastructure",
      desc: "Manajemen sistem yang handal.",
      icon: <FaCode />,
      color: "from-purple-500 to-indigo-500",
    },
  ],
};

const experiencesData = {
  en: experiences,
  id: [
    {
      title: "Application Developer (Magang)",
      company: "PT Bank Central Asia (BCA)",
      date: "Feb 2025 ~ Mar 2026",
      points: [
        "Mengembangkan aplikasi enterprise menggunakan Outsystems.",
        "Merancang workflow dengan Draw.io.",
        "Membuat mockup di Figma.",
        "Melakukan testing aplikasi.",
        "Membimbing junior intern.",
      ],
    },
    {
      title: "Freshmen Partner (Relawan)",
      company: "Universitas Bina Nusantara",
      date: "Aug 2023 ~ Aug 2024",
      points: [
        "Membimbing mahasiswa baru.",
        "Memberikan dukungan akademik.",
        "Mendorong keterlibatan kampus.",
      ],
    },
  ],
};

const projectsData = {
  en: [
    {
      title: "Decour",
      desc: "3D interactive web experience using React + Three.js.",
      img: "/Decour.png",
      tech: ["React", "Three.js"],
      link: "https://github.com/StevenYong-2/Decour",
    },
    {
      title: "Eco-Logical",
      desc: "Sustainable web application built with Laravel.",
      img: "/Eco-Logical.png",
      tech: ["Laravel", "PHP"],
      link: "https://github.com/StevenYong-2/Eco-Logical",
    },
    {
      title: "Perfumane",
      desc: "Elegant landing page for perfume brand.",
      img: "/Perfumane.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/StevenYong-2/Perfumane",
    },
    {
      title: "Solar Panel Simulation",
      desc: "3D visualization of solar energy system.",
      img: "/Solar Panel.png",
      tech: ["Three.js", "HTML"],
      link: null,
    },
  ],
  id: [
    {
      title: "Decour",
      desc: "Website interaktif 3D menggunakan React + Three.js.",
      img: "/Decour.png",
      tech: ["React", "Three.js"],
      link: "https://github.com/StevenYong-2/Decour",
    },
    {
      title: "Eco-Logical",
      desc: "Aplikasi web berkelanjutan menggunakan Laravel.",
      img: "/Eco-Logical.png",
      tech: ["Laravel", "PHP"],
      link: "https://github.com/StevenYong-2/Eco-Logical",
    },
    {
      title: "Perfumane",
      desc: "Landing page elegan untuk brand parfum.",
      img: "/Perfumane.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/StevenYong-2/Perfumane",
    },
    {
      title: "Simulasi Panel Surya",
      desc: "Visualisasi 3D sistem energi surya.",
      img: "/Solar Panel.png",
      tech: ["Three.js", "HTML"],
      link: null,
    },
  ],
};


  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.2 } },
  };

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = greetings[index];

    const typingSpeed = 150;
    const deletingSpeed = 80;
    const pauseTime = 1200;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pauseTime);
        }
      } else {
        setText(current.slice(0, text.length - 1));

        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % greetings.length);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <div className="min-h-screen bg-[#222] text-white px-5 md:px-8 lg:px-12 py-5 scroll-smooth">
      <div className="max-w-[1180px] mx-auto">

        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#1b1b1b]/70 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-white/10 transition-all duration-300">
          <div className="flex items-center gap-3">
            <img src="/Logo.png" className="w-10 h-10 rounded-full bg-white p-1" />
            <span className="text-2xl font-serif">Steven Yong</span>
          </div>

          <div className="hidden md:flex gap-8 font-semibold">
            {[
              { id: "about", label: content[lang].about },
              { id: "overview", label: content[lang].overview },
              { id: "experience", label: content[lang].experience },
              { id: "projects", label: content[lang].projects },
              { id: "certificates", label: content[lang].certificates },
              { id: "contact", label: content[lang].contact },
            ].map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="relative cursor-pointer"
              >
                {item.label}

                {/* UNDERLINE ANIMATION */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-full"
          >
            <motion.img
              src={lang === 'en' ? '/America Flag.png' : '/Indonesia Flag.png'}
              className="w-10 h-10 rounded-full border"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              key={lang} // penting biar animasi rerun pas ganti bahasa
            />
          </motion.button>
        </nav>

        {/* HERO */}
        <section id="about" className="grid lg:grid-cols-2 gap-16 items-center mt-10 min-h-[70vh]">
          <div>
            <p className="text-4xl text-blue-500 mb-6 min-h-[80px]">{text} |</p>
            <h1 className="text-5xl font-bold mb-5">{content[lang].title}</h1>
            <p className="text-gray-300 mb-5">{content[lang].p1}</p>
            <p className="text-gray-300 mb-8">{content[lang].p2}</p>

            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span key={s.name} className="px-4 py-2 border border-gray-600 rounded-lg flex items-center gap-2">
                  <img src={s.img} className="w-5 h-5" />
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] rounded-full p-[4px] bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl hover:scale-105 transition">
              <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-br from-blue-500 to-purple-500"></div>
              <img src="/FOTO.jpg" className="relative w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="mt-24">

  {/* Title */}
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">
      Overview<span className="text-blue-500">.</span>
    </h2>

    <p className="text-gray-400 mb-12">
      These are the main areas I am passionate about and continuously exploring in the field of technology.
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {interestsData[lang].map((item) => (
      <div key={item.title} className="relative group rounded-2xl p-[1px]">

        {/* Glow */}
        <div className={`absolute inset-0 blur-md opacity-0 group-hover:opacity-100 bg-gradient-to-br ${item.color}`}></div>

        {/* Card */}
        <div className="relative bg-[#1b1b1b] p-6 rounded-2xl border border-gray-700 text-center group-hover:-translate-y-2 transition">

          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition`}>
              <span className="text-3xl text-white">
                {item.icon}
              </span>
            </div>
          </div>

          <h3 className="font-semibold mb-2">
            {item.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {item.desc}
          </p>

        </div>
      </div>
    ))}
  </div>

</section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-32 relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            Work Experience<span className="text-blue-500">.</span>
          </h2>

          <div className="absolute left-1/2 top-28 w-[2px] h-[calc(100%-7rem)] bg-gray-700 -translate-x-1/2"></div>

          <div className="flex flex-col gap-20">
            {experiencesData[lang].map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="relative flex items-center justify-between">

                  <div className={`w-1/2 ${isLeft ? "pr-10" : "opacity-0"}`}>
                    {isLeft && (
                      <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="relative group rounded-2xl p-[1px]">
                        <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500 to-purple-500"></div>

                        <div className="relative bg-[#1b1b1b] p-6 rounded-2xl border border-gray-700 group-hover:-translate-y-2 transition">
                          <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                          <p className="text-gray-400 mb-2">{exp.company}</p>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {exp.points.map((p, idx) => <li key={idx}>• {p}</li>)}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* DOT */}
                  <div className="relative flex items-center justify-center w-12 h-12 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 120 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
                    >
                      💼
                    </motion.div>

                    <span className={`absolute text-xs text-gray-400 ${isLeft ? "left-16" : "right-16 text-right"}`}>
                      {exp.date}
                    </span>
                  </div>

                  <div className={`w-1/2 ${!isLeft ? "pl-10" : "opacity-0"}`}>
                    {!isLeft && (
                      <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="relative group rounded-2xl p-[1px]">
                        <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500 to-purple-500"></div>

                        <div className="relative bg-[#1b1b1b] p-6 rounded-2xl border border-gray-700 group-hover:-translate-y-2 transition">
                          <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                          <p className="text-gray-400 mb-2">{exp.company}</p>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {exp.points.map((p, idx) => <li key={idx}>• {p}</li>)}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </section>
        
        {/* PROJECTS (FINAL 4 ITEMS + ANIMATED FIXED) */}
        <section id="projects" className="mt-32">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects<span className="text-blue-500">.</span>
        </motion.h2>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          {/* CARD */}
          {projectsData[lang].map((p, i) => ((
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: `
                  0 0 5px rgba(59,130,246,0.6),
                  0 0 15px rgba(59,130,246,0.6),
                  0 0 30px rgba(59,130,246,0.5),
                  0 0 60px rgba(59,130,246,0.4),
                  0 0 100px rgba(59,130,246,0.25),
                  0 0 140px rgba(59,130,246,0.15)
                `
              }}
              className="relative bg-[#1b1b1b] rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 border border-gray-600 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.link ? (
                  <a className="text-sm text-blue-400 hover:underline" href={p.link} target="_blank">
                    View on GitHub →
                  </a>
                ) : (
                  <span className="text-xs text-gray-500">No GitHub available</span>
                )}
              </div>
            </motion.div>
          )))}
        </motion.div>
      </section>
        
        {/* CERTIFICATES */}
        <section id="certificates" className="mt-32">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Certificates<span className="text-blue-500">.</span>
        </motion.h2>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {[
            { title: "BCA Outsystems", img: "/Gambar Sertif BCA.png", pdf: "/Sertif BCA Outsystem.pdf" },
            { title: "Freshmen Partner", img: "/Gambar Sertif FP.png", pdf: "/FreshmenPartner.pdf" },
            { title: "Basic SQL", img: "/Gambar Sertif Basic SQL.png", pdf: "/Sertif Basic SQL.pdf" },
            { title: "Intermediate SQL", img: "/Gambar Sertif Inter SQL.png", pdf: "/Sertif Intermediate SQL.pdf" },
            { title: "Basic CSS", img: "/Gambar Sertif Basic CSS.png", pdf: "/Sertif Basic CSS.pdf" },
            { title: "Basic Problem Solving", img: "/Gambar Sertif Basic Problem Solving.png", pdf: "/Sertif Basic Problem Solving.pdf" },
            { title: "Intermediate Problem Solving", img: "/Gambar Sertif Intermediate Problem Solving.png", pdf: "/Sertif Intermediate Problem Solving.pdf" },
          ].map((c, i) => (
            <motion.a
              key={i}
              href={c.pdf}
              target="_blank"
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: `
                  0 0 5px rgba(168,85,247,0.7),
                  0 0 15px rgba(168,85,247,0.6),
                  0 0 30px rgba(168,85,247,0.5),
                  0 0 60px rgba(168,85,247,0.4),
                  0 0 100px rgba(168,85,247,0.25),
                  0 0 150px rgba(168,85,247,0.15)
                `
              }}
              className="bg-[#1b1b1b] rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300"
            >
              <img
                src={c.img}
                className="w-full h-52 object-cover hover:scale-110 transition duration-500"
              />
              <div className="p-5">
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-gray-400 text-sm">Click to view PDF</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* CONTACT / FOOTER */}
        <footer id="contact" className="w-full py-16 text-gray-300 mt-40">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">

            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="text-gray-400 text-center">
              Feel free to reach out or connect with me.
            </p>

            {/* Lokasi */}
            <p className="text-sm text-gray-500">
              Jakarta, Indonesia
            </p>

            {/* Social */}
            <div className="flex gap-16 mt-6">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/steven-yong-b39362235/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-white transition group"
            >
              <FaLinkedin size={40} className="group-hover:scale-110 transition" />
              <span className="text-base mt-2">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/StevenYong-2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-white transition group"
            >
              <FaGithub size={40} className="group-hover:scale-110 transition" />
              <span className="text-base mt-2">GitHub</span>
            </a>

            {/* Email */}
            <a
              href="mailto:stevenyong257@gmail.com"
              className="flex flex-col items-center hover:text-white transition group"
            >
              <FaEnvelope size={40} className="group-hover:scale-110 transition" />
              <span className="text-base mt-2">Email</span>
            </a>

          </div>
          </div>
        </footer>
      </div>
    </div>

    
  );
}