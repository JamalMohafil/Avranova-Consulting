"use client"

import Image from "next/image"
import { Linkedin, Mail, Award, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Principal Consultant",
    expertise: "BIM Coordination & Project Management",
    image: "/placeholder.svg?key=cw9se",
    bio: "15+ years of experience in complex construction projects and BIM implementation.",
    achievements: ["PMP Certified", "Autodesk Expert", "LEED AP"]
  },
  {
    name: "Michael Chen",
    role: "Senior Visualization Specialist",
    expertise: "Architectural Visualization & VR",
    image: "/placeholder.svg?key=uiy89",
    bio: "Award-winning visualization expert with expertise in photorealistic rendering.",
    achievements: ["3D Artist of the Year", "VR Innovation Award", "Certified Trainer"]
  },
  {
    name: "Emily Rodriguez",
    role: "MEP Integration Lead",
    expertise: "Mechanical, Electrical & Plumbing Systems",
    image: "/placeholder.svg?key=qco3r",
    bio: "Specialized in sustainable building systems and energy-efficient design solutions.",
    achievements: ["PE License", "ASHRAE Member", "Green Building Expert"]
  },
  {
    name: "David Thompson",
    role: "Technology Director",
    expertise: "Digital Innovation & Process Optimization",
    image: "/placeholder.svg?key=nle17",
    bio: "Leading digital transformation initiatives in the construction industry.",
    achievements: ["Tech Innovation Leader", "Digital Twin Expert", "AI Implementation"]
  }
]

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Our Expert Team
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Meet the Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team of certified experts brings decades of combined experience to every project
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>

                <div className="space-y-2 mb-6">
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-xs text-muted-foreground">
                      <Award className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      {achievement}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-primary/10 rounded-2xl">
            <Users className="h-8 w-8 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">50+ Professionals</div>
              <div className="text-sm text-muted-foreground">Ready to serve your project needs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
