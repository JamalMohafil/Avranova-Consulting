"use client"

import { CheckCircle, ArrowRight, Users, FileText, Cog, Rocket } from 'lucide-react'

const processSteps = [
  {
    icon: Users,
    title: "Discovery & Consultation",
    description: "We begin with a comprehensive analysis of your project requirements and objectives.",
    features: ["Stakeholder interviews", "Requirements gathering", "Feasibility assessment"]
  },
  {
    icon: FileText,
    title: "Strategic Planning",
    description: "Develop a detailed project roadmap with clear milestones and deliverables.",
    features: ["Project timeline", "Resource allocation", "Risk assessment"]
  },
  {
    icon: Cog,
    title: "Implementation",
    description: "Execute the plan with precision using industry-leading tools and methodologies.",
    features: ["Quality assurance", "Progress monitoring", "Regular updates"]
  },
  {
    icon: Rocket,
    title: "Delivery & Support",
    description: "Deliver exceptional results with ongoing support and optimization.",
    features: ["Final delivery", "Training & handover", "Ongoing support"]
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Our Process
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures successful project delivery from concept to completion
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary/20 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  )}
                  
                  <div className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border z-10">
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-xl bg-primary text-primary-foreground mb-4">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="text-sm font-semibold text-primary mb-2">Step {index + 1}</div>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-card-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
