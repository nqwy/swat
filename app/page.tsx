"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Twitter, ExternalLink, Menu, X, Shield, Command, Bot, Lock, Server, Star } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [contentHeight, setContentHeight] = useState("auto")
  const featureContentRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null])

  const features = [
    {
      title: "Advanced Security",
      description: "Protect your server with state-of-the-art security features and automated moderation.",
      icon: <Shield className="h-5 w-5 text-slate-300" />,
    },
    {
      title: "AI Integration",
      description: "Coming soon: AI-powered security and moderation to keep your community safe.",
      icon: <Bot className="h-5 w-5 text-slate-300" />,
    },
    {
      title: "Server Management",
      description: "Streamline your server operations with powerful management tools.",
      icon: <Server className="h-5 w-5 text-slate-300" />,
    },
    {
      title: "Custom Commands",
      description: "Create and customize commands to fit your server's unique needs.",
      icon: <Command className="h-5 w-5 text-slate-300" />,
    },
  ]

  const handleFeatureChange = (index: number) => {
    setActiveFeature(index)

    // Use setTimeout to allow the DOM to update before measuring height
    setTimeout(() => {
      if (featureContentRefs.current[index]) {
        const height = featureContentRefs.current[index]?.scrollHeight || "auto"
        // Add a small buffer to ensure nothing gets cut off
        setContentHeight(`${height + 10}px`)
      }
    }, 50)
  }

  useEffect(() => {
    // Set initial height after component mounts
    if (featureContentRefs.current[activeFeature]) {
      const height = featureContentRefs.current[activeFeature]?.scrollHeight || "auto"
      // Add a small buffer to ensure nothing gets cut off
      setContentHeight(`${height + 10}px`)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a101f] text-slate-200">
      {/* Monochromatic Particle Background */}
      <ParticleBackground />

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-[#0a101f]/50 backdrop-blur-sm"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/766deaf4d28044a4bd09c9d8ef3f9406-McrWNnowXhBNhOxhcaOk0orfdjgcGq.webp"
            alt="SWAT Bot"
            width={40}
            height={40}
            className="rounded-full border-2 border-slate-700"
          />
          <span className="text-xl font-bold tracking-tight metallic-text-mono">SWAT</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">
            Commands
          </Link>
          <Link href="#" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">
            Status
          </Link>
          <Link href="#" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">
            Docs
          </Link>
          <Link href="#" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">
            Support
          </Link>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-200 hover:bg-slate-800/50"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="relative z-20 md:hidden bg-slate-900/90 backdrop-blur-md p-4 border-b border-slate-800">
          <div className="flex flex-col space-y-3">
            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors py-2">
              Commands
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors py-2">
              Status
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors py-2">
              Docs
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors py-2">
              Support
            </Link>
          </div>
        </div>
      )}

      {/* Main content - Split layout */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-180px)] px-4 py-8">
        {/* Left side - Login form */}
        <div className="w-full max-w-md md:w-1/2 md:pr-8 order-2 md:order-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Welcome to <span className="metallic-text-mono">SWAT</span>
            </h1>
            <p className="text-slate-400 max-w-sm">
              The <span className="font-bold text-slate-300">all-in-one</span> Discord bot for server management and
              moderation
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl border border-slate-800 p-6 shadow-2xl">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-slate-400">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 focus-visible:ring-slate-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-slate-400">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 focus-visible:ring-slate-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-slate-700 bg-slate-800/50 text-slate-600"
                  />
                  <Label htmlFor="remember" className="text-sm text-slate-400">
                    Remember me
                  </Label>
                </div>
                <Link href="#" className="text-sm text-slate-400 hover:text-slate-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 border-0">Login</Button>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative bg-slate-900/40 px-4 text-sm text-slate-500">or continue with</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:border-slate-600"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:border-slate-600"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-slate-200 flex items-center justify-center gap-2 border-0">
              Invite to Discord
              <ExternalLink size={16} />
            </Button>

            <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0">
              <div className="flex flex-col items-center justify-center rounded-lg bg-slate-800/50 backdrop-blur-sm p-3 border border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-lg font-bold text-slate-200">24/7</span>
                <span className="text-xs text-slate-400">Uptime</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-slate-800/50 backdrop-blur-sm p-3 border border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer">
                <span className="text-lg font-bold text-slate-200">100+</span>
                <span className="text-xs text-slate-400">Commands</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image and features */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative mb-8">
            {/* Subtle glow effect behind image */}
            <div className="absolute inset-0 bg-slate-700/20 blur-xl rounded-full"></div>

            {/* Image frame */}
            <div className="relative image-frame-mono">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/766deaf4d28044a4bd09c9d8ef3f9406-McrWNnowXhBNhOxhcaOk0orfdjgcGq.webp"
                alt="SWAT Bot"
                width={180}
                height={180}
                className="rounded-2xl object-cover z-10 relative"
              />
            </div>
          </div>

          {/* Feature showcase */}
          <div className="w-full max-w-md">
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl border border-slate-800 p-6 shadow-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Star className="mr-2 h-5 w-5 text-slate-400" />
                Featured Capabilities
              </h3>

              {/* Feature navigation */}
              <div className="flex mb-4 border-b border-slate-800">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                      activeFeature === index ? "text-slate-200" : "text-slate-500 hover:text-slate-400"
                    }`}
                    onClick={() => handleFeatureChange(index)}
                  >
                    {feature.title}
                    {activeFeature === index && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-600 transition-all duration-300"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* Feature content with fixed height container */}
              <div
                className="py-4 relative transition-all duration-500 ease-in-out overflow-hidden"
                style={{ height: contentHeight }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    ref={(el) => (featureContentRefs.current[index] = el)}
                    className={`absolute top-4 left-0 w-full transition-all duration-300 ease-in-out ${
                      activeFeature === index
                        ? "opacity-100 translate-x-0"
                        : index < activeFeature
                          ? "opacity-0 -translate-x-4 pointer-events-none"
                          : "opacity-0 translate-x-4 pointer-events-none"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-slate-800/70 border border-slate-700">{feature.icon}</div>
                      <div>
                        <h4 className="text-lg font-medium text-slate-200 mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-400">{feature.description}</p>
                      </div>
                    </div>

                    {/* Coming soon badge */}
                    {index === 1 && (
                      <div className="mt-4 mb-2 bg-slate-800/70 border border-slate-700 rounded-lg p-3 flex items-center gap-2">
                        <Lock className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-400">AI integration coming soon - Join the waitlist</span>
                      </div>
                    )}
                  </div>
                ))}

                {/* Feature indicators */}
                
              </div>
            </div>

            {/* Server count */}
            <div className="mt-4 bg-slate-900/40 backdrop-blur-sm rounded-lg border border-slate-800 p-3 text-center">
              <span className="text-sm text-slate-400">
                Trusted by <span className="font-bold text-slate-300">10,000+</span> Discord servers
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} SWAT Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

