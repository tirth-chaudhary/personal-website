import Image from "next/image"
import { SocialLinks } from "@/components/social-links"
import { SectionTitle } from "@/components/section-title"
import {
  ChevronRight,
  ExternalLink,
  Mail,
  Github,
  Calendar,
  ArrowUpRight,
  FileText,
  Award,
  Users,
  Code,
} from "lucide-react"
import { Typewriter } from "@/components/typewriter"
import { ContactForm } from "@/components/contact-form"
import { DownloadButton } from "@/components/download-button"
import { ImageSlider } from "@/components/image-slider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tirth Chaudhary | Personal Website",
  description: "Personal website of Tirth Chaudhary, Computer Science Student at University of Manitoba",
}

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Home Section */}
      <section id="home" className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mountain-final.jpeg"
            alt="Mountain landscape background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 md:pl-24 lg:pl-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">Tirth Chaudhary</h1>
          <div className="text-xl md:text-2xl text-gray-700 mb-8">
            I&apos;m a(n){" "}
            <span className="text-primary font-semibold">
              <Typewriter
                words={["Undergraduate student", "Traveller", "Photographer", "Swimmer", "Learner", "problem‑solver"]}
                typingSpeed={100}
                deletingSpeed={50}
                delayBetweenWords={2000}
              />
            </span>
          </div>

          <SocialLinks />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 md:ml-16">
        <SectionTitle title="ABOUT" />

        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Computer Science Student - University of Manitoba.</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex justify-center">
            <Image
              src="/images/profile-portrait.jpeg"
              alt="Tirth Chaudhary portrait"
              width={400}
              height={500}
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            />
          </div>

          <div>
            <p className="mb-6">
              I&apos;m a Computer Science student at the University of Manitoba, specializing in web development, software engineering, and AI. I enjoy building practical apps, learning new technologies, and working on projects that improve people&apos;s experiences. I&apos;m always excited to learn new skills and concepts wherever I can!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <ChevronRight className="text-primary w-5 h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold mr-2">Degree:</span> Bachelor of Science (B.Sc.) - Computer Science
              </div>

              <div className="flex items-center">
                <ChevronRight className="text-primary w-5 h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold mr-2">Email:</span> tirth.chaudhary@umanitoba.ca
              </div>

              <div className="flex items-center">
                <ChevronRight className="text-primary w-5 h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold mr-2">City:</span> Winnipeg, MB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 md:px-8 md:ml-16 bg-gray-50">
        <SectionTitle title="RESUME" />

        {/* Download Resume Button - Added at the top of the Resume section */}
        <div className="flex justify-center mb-10">
          <DownloadButton
            href="/resume.pdf"
            label="Download Full Resume"
            className="shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Summary</h3>
            <div className="mb-8">
              <h4 className="text-xl text-primary font-semibold mb-2">TIRTH CHAUDHARY</h4>
              <p className="text-gray-600">
                Computer Science student with strong programming skills and a passion for web development.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-primary pb-6">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl text-primary font-semibold mb-1">BACHELOR OF SCIENCE - COMPUTER SCIENCE</h4>
                <p className="text-gray-500 mb-2">2022 - Present</p>
                <p className="font-medium mb-1">University of Manitoba, Winnipeg, MB</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold my-6">Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Programming & Mark-up:</h4>
                <p className="text-gray-600">Python, Java, C, C++, JavaScript, HTML, CSS, LC-3 Assembly, R</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Web / CMS:</h4>
                <p className="text-gray-600">
                  Drupal, WordPress, Microsoft SharePoint, UM Banner, website design & content updates
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tools:</h4>
                <p className="text-gray-600">
                  Git, GitHub, Unix, R Markdown, Microsoft 365, Figma, WaitWell, Slate, VSC, RStudio, LaTeX
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Soft Skills:</h4>
                <p className="text-gray-600">
                  Leadership, Communication, Problem-solving, Attention to detail, Self-motivation
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Updated Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-primary pb-6">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl text-primary font-semibold mb-1">DIGITAL COMMUNICATION & WEBSITE ASSISTANT</h4>
                <p className="text-gray-500 mb-2">Dec 2024 – Present</p>
                <p className="font-medium mb-2">Assessment, Communications and Outreach, University of Manitoba</p>
                <ul className="list-disc ml-5 text-gray-600 space-y-2">
                  <li>Maintain and update 20+ Student Affairs websites and SharePoint hubs</li>
                  <li>
                    Co-plan events for 29K+ students - managing logistics, timelines, and a 40+ person volunteer crew
                  </li>
                  <li>Report results: track web and event data and turn findings into clear summaries</li>
                  <li>Build new pages, forms, and digital resources</li>
                  <li>Coordinate with Design team to publish graphics, videos, and PDFs</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-primary pb-6">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl text-primary font-semibold mb-1">STUDENT OFFICE ASSISTANT</h4>
                <p className="text-gray-500 mb-2">May 2022 – Present</p>
                <p className="font-medium mb-2">
                  First Year Centre (FYC) & Virtual Advising Help Centre (VAHC), University of Manitoba
                </p>
                <ul className="list-disc ml-5 text-gray-600 space-y-2">
                  <li>Developed Transit Eligibility Checker, reducing manual review time</li>
                  <li>Provide multi-channel support (chat, phone, email, video) to students</li>
                  <li>Guide students through course selection and registration</li>
                  <li>Track and analyze inquiry data to identify service gaps and recommend improvements</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl text-primary font-semibold mb-1">STUDENT ADMISSIONS ASSISTANT</h4>
                <p className="text-gray-500 mb-2">Oct 2023 – Dec 2024</p>
                <p className="font-medium mb-2">Admissions Office, University of Manitoba</p>
                <ul className="list-disc ml-5 text-gray-600 space-y-2">
                  <li>Conducted data entry for student applications and academic records with high accuracy</li>
                  <li>Processed and verified grade entries, ensuring the integrity of the official records</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Download Button at the bottom of the Resume section */}
        <div className="flex justify-center mt-12">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <FileText className="w-5 h-5 mr-2" />
            <span>View and download complete resume</span>
          </a>
        </div>
      </section>

      {/* NEW Volunteer & Leadership Section */}
      <section id="volunteer" className="py-20 px-4 md:px-8 md:ml-16">
        <SectionTitle title="VOLUNTEER & LEADERSHIP" />

        <div className="max-w-5xl mx-auto">
          {/* Leadership Roles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Leadership Roles</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* SSA Role */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Science Students' Association</h4>
                    <p className="text-sm text-gray-500">May 2025 - May 2026</p>
                  </div>
                </div>
                <h5 className="font-semibold text-primary mb-2">International Student Representative</h5>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                  <li>Advocate for international science students at SSA Council and with the UMSU community rep</li>
                  <li>Plan and execute community-focused events, info sessions, and scholarship outreach</li>
                </ul>
              </div>

              {/* UMPPC Role */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Programming Projects Club</h4>
                    <p className="text-sm text-gray-500">May 2025 - May 2026</p>
                  </div>
                </div>
                <h5 className="font-semibold text-primary mb-2">Promotions Lead</h5>
                <p className="text-sm text-gray-600">
                  Plan and run promotions to boost club visibility and attendance, manage social media marketing, and
                  create engaging content with the team.
                </p>
              </div>

              {/* UMAI Role */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Artificial Intelligence Club</h4>
                    <p className="text-sm text-gray-500">May 2025 - May 2026</p>
                  </div>
                </div>
                <h5 className="font-semibold text-primary mb-2">Promotions Lead</h5>
                <p className="text-sm text-gray-600">
                  Lead marketing campaigns and promotional initiatives that grow club membership and boost event
                  attendance.
                </p>
              </div>
            </div>
          </div>

          {/* Media Appearances */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Media Appearances</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Global News */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/news-thumbnail.jpg"
                    alt="Global News Winnipeg TV segment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">September 2024</p>
                      <h3 className="text-lg font-bold">Global News Winnipeg</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">
                    Featured spokesperson in Global News Winnipeg's TV segment, where I highlighted the importance of
                    orientation resources, campus involvement, and community support for new and international students.
                  </p>
                  <a
                    href="https://globalnews.ca/news/10730294/university-manitoba-students-orientation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Watch Interview <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Radio Show */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image src="/images/radio-thumbnail.jpg" alt="UMFM Radio show" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">September 2024</p>
                      <h3 className="text-lg font-bold">UMFM 'The Learning Curve'</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">
                    Volunteered for the UMFM Radio show 'The Learning Curve' where I discuss my experiences navigating
                    the halls of U of M and my initial expectations and concerns.
                  </p>
                  <a
                    href="https://umfm.com/programming/broadcast/the-learning-curve-september-5-2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Listen to Episode <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* UM Video */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/youtube-thumbnail.jpg"
                    alt="UM International Student Experience video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">May 2023</p>
                      <h3 className="text-lg font-bold">UM International Student Experience</h3>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">
                    Featured in a University of Manitoba promotional video, sharing my international student journey and
                    highlighting campus involvement, leadership, and UM's inclusive community.
                  </p>
                  <a
                    href="https://youtu.be/_tWcJ2wWsTk?si=WpjZsCI6CPqg9liq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Watch Video <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Orientation Volunteer with Image Slider */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Orientation Volunteer</h4>
                      <p className="text-sm text-gray-500">2022 - 2025</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Volunteered at most University Orientation events throughout my academic journey, including Welcome
                  Day, International Student Orientation, Open House, and prep week activities.
                </p>
                <p className="text-gray-600">
                  As an orientation volunteer, I helped new students navigate campus, answered questions about
                  university life, and created a welcoming environment for incoming students. I also participated in
                  creating orientation materials and leading campus tours.
                </p>
              </div>

              <div className="md:w-1/2">
                <ImageSlider
                  images={[
                    { src: "/images/orientation-1.jpg", alt: "Orientation event with balloon animals" },
                    { src: "/images/orientation-2.jpg", alt: "Orientation booth with university colors" },
                    { src: "/images/orientation-3.jpg", alt: "With university mascot during orientation" },
                    { src: "/images/orientation-4.jpg", alt: "Orientation volunteer team" },
                    { src: "/images/orientation-5.jpg", alt: "Orientation volunteers at information booth" },
                    { src: "/images/orientation-6.jpg", alt: "Orientation team at campus information table" },
                  ]}
                  className="w-full h-64 md:h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 md:ml-16 bg-gray-50">
        <SectionTitle title="PROJECTS" />

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Transit Eligibility Checker Project */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Transit Eligibility Checker for University-1</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">Jan 2025 - March 2025</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React.js</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-medium">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                  lucide-react
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Next.js</span>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-gray-600">
                  Built a responsive React-based tool that checks transit eligibility using the implemented transit
                  rules and displaying progress via a dynamic Tailwind CSS progress bar.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>
                    Implemented AGPA logic for Fall 2021+ terms, showing real-time success or error messages based on
                    credit and grade thresholds.
                  </li>
                  <li>
                    Added a print-friendly output with the 'Print / Save PDF' feature and styled results for seamless
                    distribution to academic advisors.
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://u1-transit-checker.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/tirth-chaudhary"
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Peer-to-Peer Vote Application Project */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Peer-to-Peer Vote Application</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">Jan 2025 - March 2025</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React.js</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">MongoDB</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Jest</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                  Postman
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-gray-600">
                  A full-stack "Vote App" with the MERN stack that lets users create, share, and manage polls, while
                  guests can vote and view real-time results displayed with Chart.js.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>
                    Implemented secure JWT authentication, role-aware Express, MongoDB, REST APIs, and password hashing
                    with bcrypt to safeguard user data.
                  </li>
                  <li>
                    Designed a responsive React front end with Redux state management and environment-driven
                    configuration for seamless local development and cloud deployment.
                  </li>
                  <li>
                    Used a test-driven approach by writing unit and integration tests using Jest and debugged the
                    back-end API with Postman to build a robust and bug-free application.
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/tirth-chaudhary"
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Add more projects here */}
          <div className="text-center">
            <a
              href="https://github.com/tirth-chaudhary"
              className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors"
            >
              <span>View More Projects</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with minimalistic design */}
      <section id="contact" className="py-12 px-4 md:px-8 md:ml-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">CONTACT</h2>

          <div className="flex justify-center mb-6">
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left side - Contact info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="bg-white rounded-full p-3 shadow-sm mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">University Email:</h3>
                  <p className="text-gray-600 text-sm">tirth.chaudhary@umanitoba.ca</p>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4">Tirth Chaudhary</h2>

                <div className="flex justify-center md:justify-start mb-4">
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
