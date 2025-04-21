import Image from "next/image"
import { SocialLinks } from "@/components/social-links"
import { SectionTitle } from "@/components/section-title"
import { ChevronRight, ExternalLink, FileText, Mail } from "lucide-react"
import { Typewriter } from "@/components/typewriter"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div>
      {/* Home Section */}
      <section id="home" className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image src="/images/IMG_6405.jpeg" alt="Background" fill className="object-cover opacity-30" priority />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 md:pl-24 lg:pl-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">Tirth Chaudhary</h1>
          <div className="text-xl md:text-2xl text-gray-700 mb-8">
            I&apos;m a(n){" "}
            <span className="text-primary font-semibold">
              <Typewriter
                words={["Forever student", "Traveller", "Photographer", "Swimmer", "problem‑solver"]}
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
          <p className="text-gray-600 max-w-4xl mx-auto">
            Curious and enthusiastic computer science student with a passion for web development and software
            engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex justify-center">
            <Image
              src="/images/IMG_6405.jpeg"
              alt="Tirth Chaudhary"
              width={500}
              height={600}
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            />
          </div>

          <div>
            <p className="mb-6">
              I&apos;m currently a Computer Science student at the University of Manitoba. I&apos;ve got a passion for
              everything computer science related, with particular interests in web development, software engineering,
              and artificial intelligence. I&apos;m always excited to learn new skills and concepts wherever I can!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <ChevronRight className="text-primary w-5 h-5 mr-2 flex-shrink-0" />
                <span className="font-semibold mr-2">Degree:</span> Bachelor of Science
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

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-primary pb-6">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl text-primary font-semibold mb-1">DIGITAL COMMUNICATION & WEBSITE ASSISTANT</h4>
                <p className="text-gray-500 mb-2">Dec 2024 – Present</p>
                <p className="font-medium mb-2">Assessment, Communications and Outreach, University of Manitoba</p>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Maintain and update 20+ Student Affairs websites and SharePoint hubs</li>
                  <li>Build new pages, forms, and digital resources</li>
                  <li>Coordinate with Design team to publish graphics, videos, and PDFs</li>
                  <li>Execute the annual SEaS marketing plan</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-primary pb-6">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl text-primary font-semibold mb-1">STUDENT OFFICE ASSISTANT</h4>
                <p className="text-gray-500 mb-2">May 2022 – Present</p>
                <p className="font-medium mb-2">
                  First Year Centre (FYC) & Virtual Advising Help Centre (VAHC), University of Manitoba
                </p>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Developed Transit Eligibility Checker, reducing manual review time</li>
                  <li>Provide multi-channel support (chat, phone, email, video) to first-year and transfer students</li>
                  <li>Guide students through course selection and registration</li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl text-primary font-semibold mb-1">STUDENT ADMISSIONS ASSISTANT</h4>
                <p className="text-gray-500 mb-2">Oct 2023 – Dec 2024</p>
                <p className="font-medium mb-2">Admissions Office, University of Manitoba</p>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Conducted data entry for student applications and academic records with high accuracy</li>
                  <li>Processed and verified grade entries, ensuring the integrity of the official records</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 md:px-8 md:ml-16">
        <SectionTitle title="RESEARCH PAPERS" />

        <div className="max-w-5xl mx-auto space-y-12">
          <section>
            <h3 className="text-2xl font-semibold mb-4">Publications</h3>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-start">
                  <ChevronRight className="text-primary w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Transit Eligibility Checker: A Web Application for University Students
                    </h4>
                    <p className="text-gray-600 ml-1">Tirth Chaudhary, University of Manitoba</p>
                    <a href="#" className="inline-flex items-center text-primary hover:underline ml-1">
                      <FileText className="w-4 h-4 mr-1" />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4">Ongoing Projects</h3>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-start">
                  <ChevronRight className="text-primary w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Personal Portfolio Website
                    </h4>
                    <a href="#" className="inline-flex items-center text-primary hover:underline ml-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start">
                  <ChevronRight className="text-primary w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">E-commerce Platform</h4>
                    <a href="#" className="inline-flex items-center text-primary hover:underline ml-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4">Course Projects</h3>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-start">
                  <ChevronRight className="text-primary w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Data Structures and Algorithms: Implementing Efficient Sorting Algorithms
                    </h4>
                    <a href="#" className="inline-flex items-center text-primary hover:underline ml-1">
                      <FileText className="w-4 h-4 mr-1" />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start">
                  <ChevronRight className="text-primary w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      Web Development: Building a Responsive Dashboard
                    </h4>
                    <a href="#" className="inline-flex items-center text-primary hover:underline ml-1">
                      <FileText className="w-4 h-4 mr-1" />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Contact Section - Updated with form */}
      <section id="contact" className="py-20 px-4 md:px-8 md:ml-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-gray-700">CONTACT</h2>

          <div className="flex justify-center mb-12">
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left side - Contact info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="bg-white rounded-full p-6 shadow-md mr-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">University Email:</h3>
                  <p className="text-gray-600">tirth.chaudhary@umanitoba.ca</p>
                </div>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-8">Tirth Chaudhary</h2>

                <div className="flex justify-center md:justify-start mb-8">
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="relative">
              <div className="animate-pulse-slow absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full"></div>
              <div className="animate-pulse-slow absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full"></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
