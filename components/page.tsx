'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dumbbell, Bike, Footprints, CircleCheckBig } from 'lucide-react'

export function PersonalTrainerPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Dumbbell className="h-6 w-6" />
          <span className="sr-only">Diana's Personal Training</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#classes">
            Classes
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Diana's Personal Training
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Empowering runners and cyclists from beginners to advanced athletes.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contact">
                  <Button>Get Started</Button>
                </Link>
                <Link href="#classes">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="classes" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Classes</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6 flex items-center space-x-4">
                  <Footprints className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">Footprints Classes</h3>
                    <p className="text-muted-foreground">From couch to 5K to marathon training</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center space-x-4">
                  <Bike className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">Cycling Classes</h3>
                    <p className="text-muted-foreground">Road cycling and mountain biking for all levels</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Pricing</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Beginner</h3>
                  <p className="text-4xl font-bold mb-2">$50/month</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>2 group classes per week</li>
                    <li>Basic training plan</li>
                    <li>Email support</li>
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Intermediate</h3>
                  <p className="text-4xl font-bold mb-2">$100/month</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>3 group classes per week</li>
                    <li>Personalized training plan</li>
                    <li>Phone support</li>
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Advanced</h3>
                  <p className="text-4xl font-bold mb-2">$200/month</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>5 group classes per week</li>
                    <li>Personalized training plan</li>
                    <li>1-on-1 coaching sessions</li>
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Testimonials</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 italic">"Diana's training helped me achieve my first marathon. Her personalized approach made all the difference!"</p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-muted-foreground">Marathon Runner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 italic">"I've improved my cycling performance significantly under Diana's guidance. Highly recommended for all cyclists!"</p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">Competitive Cyclist</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Diana</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over 10 years of experience in personal training, Diana specializes in helping runners and cyclists achieve their fitness goals. Her personalized approach and deep understanding of sports-specific training have helped numerous athletes improve their performance and reach new heights.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4" />
                    <span>Certified Personal Trainer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4" />
                    <span>Marathon Runner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4" />
                    <span>Competitive Cyclist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Contact Diana</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Diana's Personal Training. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}