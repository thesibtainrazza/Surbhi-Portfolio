import Link from "next/link"
import { ArrowRight, Github, GraduationCap, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { GrindSection } from "@/components/grind-section"
import { KnowledgeBrain } from "@/components/knowledge-brain"
import { Marquee } from "@/components/magicui/marquee"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-phthalo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-8">
            {/* 1. Name first */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                Surbhi Sharma
              </span>
            </h1>
            
            {/* 2. Profile image */}
            <div className="flex justify-center">
              <CreativeHero />
            </div>
            
            {/* 3. Software engineer badge */}
            <div className="flex justify-center">
              <div className="relative px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="relative z-10">Data Analyst | Power BI Developer | SQL Enthusiast</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 animate-pulse"></span>
              </div>
            </div>

            {/* 4. Description */}
            <p className="text-lg text-zinc-400 max-w-[600px]">
             I transform raw data into actionable insights through structured analysis, visualization, and data-driven storytelling.
            </p>
            
            {/* 5. Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
            
            {/* 6. Social icons */}
            <div className="flex gap-4 justify-center">
              <Link href="https://github.com/surbhisharmaa749" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/surbhi-sharma-3b50ba249" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:surbhisharmaa749@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="inline-block">
                <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                  <span className="relative z-10">Data Analyst | Power BI Developer | SQL Enthusiast</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 animate-pulse"></span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                  Surbhi Sharma
                </span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-[600px]">
                I transform raw data into actionable insights through structured analysis, visualization, and data-driven storytelling.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#projects">
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
                    <span className="relative z-10 flex items-center">
                      View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/surbhisharmaa749" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/surbhi-sharma-3b50ba249" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:surbhisharmaa749@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <CreativeHero />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/image.jpg"
                  alt="Surbhi Sharma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a Computer Science undergraduate specializing in data analysis, with a strong focus on transforming complex datasets into meaningful insights.
                  My experience lies in working with SQL, Excel, and Power BI to clean, structure, and analyze data at scale. During my internship at RegSurance, I handled large datasets of over 100,000 records, built SQL-based pipelines, and delivered analytical reports that uncovered key business insights.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I enjoy solving real-world problems through data—whether it’s identifying patterns in employee attrition or analyzing customer behavior in booking systems. My approach combines strong data cleaning practices, logical thinking, and effective visualization to support better decision-making.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                 Currently, I’m focused on building scalable data solutions and improving my expertise in analytics, visualization, and business intelligence.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Surbhi Shama</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium break-all">surbhisharmaa749@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Mohali, Punjab</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/SURBHIRESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md"
                  >
                    View Resume
                  </a>

                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          {/* Desktop: Two horizontal rows */}
          <div className="hidden md:block mt-16">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                <SkillBadge name="Python" level={100} />
                <SkillBadge name="R" level={95} />
                <SkillBadge name="SQL" level={100} />
                <SkillBadge name="Tableau" level={95} />
                <SkillBadge name="TensorFlow" level={90} />
                <SkillBadge name="PyTorch" level={90} />
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                <SkillBadge name="Scikit-learn" level={95} />
                <SkillBadge name="Excel/VBA" level={90} />
                <SkillBadge name="Power BI" level={85} />
                <SkillBadge name="Next.js" level={85} />
                <SkillBadge name="TypeScript" level={80} />
                <SkillBadge name="Git" level={90} />
                <SkillBadge name="Docker" level={75} />
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-900"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-900"></div>
            </div>
          </div>

          {/* Mobile: Two vertical columns */}
          <div className="md:hidden mt-16">
            <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
              <Marquee pauseOnHover vertical className="[--duration:20s]">
                <SkillBadge name="Python" level={100} />
                <SkillBadge name="R" level={95} />
                <SkillBadge name="SQL" level={100} />
                <SkillBadge name="Tableau" level={95} />
                <SkillBadge name="TensorFlow" level={90} />
                <SkillBadge name="PyTorch" level={90} />
              </Marquee>
              <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                <SkillBadge name="Scikit-learn" level={95} />
                <SkillBadge name="Excel/VBA" level={90} />
                <SkillBadge name="Power BI" level={85} />
                <SkillBadge name="Next.js" level={85} />
                <SkillBadge name="TypeScript" level={80} />
                <SkillBadge name="Git" level={90} />
              </Marquee>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-zinc-900"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-900"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="HR Attrition Analytics Dashboard"
              description="An end-to-end HR analytics solution designed to identify key drivers of employee attrition and workforce trends.
              The project analyzes 10,000+ employee records and provides actionable insights into factors affecting retention, including job roles, work-life balance, salary, and overtime."
              tags={["SQL Server", "Power BI", "DAX", "Data Modeling"]}
              image="/p4.jpg?height=400&width=600"
              repoUrl="https://github.com/surbhisharmaa749/HR-Attrition-Analytics"
            />


            <ProjectCard
              title="Hotel Booking Analysis Dashboard"
              description="An end-to-end data analysis project focused on understanding booking patterns, cancellations, and revenue trends in the hospitality industry. The dashboard provides insights into customer behavior, booking lead times, and loyalty segmentation. It helps identify key factors - cancellations and revenue."
              tags={["Power BI", "DAX", "Power Query", "Data Modeling"]}
              image="/2.jpg"
              repoUrl="https://github.com/surbhisharmaa749/Hotel-Booking-Analytics-Dashboard"
            />
            <ProjectCard
              title="Customer Churn Analysis Dashboard"
              description="A data-driven analysis project aimed at identifying customer churn patterns in the banking sector.The dashboard highlights key factors influencing customer retention, such as account balance, tenure, and customer demographics. It enables businesses to take proactive measures to reduce churn."
              tags={["Power BI", "DAX", "Data Visualization"]}
              image="/3.jpg"
              repoUrl="https://github.com/surbhisharmaa749/Customer-Churn-Analysis-PowerBI"
            />
            <ProjectCard
              title="Global Airbnb Performance Dashboard"
              description="An analytical dashboard that explores Airbnb listing data to understand pricing strategies, host performance, and seasonal demand trends.This project provides insights into how location, availability, and host activity impact listing performance and revenue."
              tags={["Power BI", "Data Visualization","Data Modeling"]}
              image="/4.jpg"
              repoUrl="https://github.com/surbhisharmaa749/Global-Airbnb-Performance-Dashboard"
            />

            <ProjectCard
              title="Weather Forecasting Dashboard"
              description="An interactive dashboard that visualizes weather patterns and forecasting data to provide meaningful insights into environmental conditions.The project focuses on presenting weather trends in a clear and interactive way, helping users understand patterns over time."
              tags={["Power BI", "Data Visualization"]}
              image="/5.jpg"
              repoUrl="https://github.com/surbhisharmaa749/weather_forecasting_powerbi"
            />
          </div>
        </div>
      </section>

      {/* Grind Section */}
      <section className="py-32 relative" id="grind">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <GrindSection />
        </div>
      </section>

      {/* {Knowledge Brain Section} */}
      {<section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <KnowledgeBrain />
        </div>
      </section>}

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">surbhisharmaa749@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">www.linkedin.com/in/surbhi-sharma-3b50ba249</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/surbhisharmaa749</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status </h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"> </div>
                  <span>Open to Data Analyst and Business Intelligence roles. Passionate about turning data into actionable insights.</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                Surbhi
              </span>
              <span className="text-white">Analytics</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Surbhi Sharma. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/surbhisharmaa749" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/surbhi-sharma-3b50ba249" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:surbhisharmaa749@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}