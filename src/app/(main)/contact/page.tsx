'use client'

import { useState } from 'react'
import { sendEmail } from '@/app/actions/sendEmail'
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    toast({
      title: "Sending...",
      description: "Your message is being sent.",
    })

    const result = await sendEmail(formData)

    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
        variant: "default",
      })
      setFormData({ name: '', email: '', message: '' })
    } else {
      toast({
        title: "Error!",
        description: result.message,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-8 p-8 md:pt-0">
      <div>
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
      </div>

      <div className="space-y-8">
        {/* Map */}
        <div className="w-full h-[300px] rounded-lg border border-[#383838] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11400000!2d-64.1888!3d-31.4201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzEyLjMiUyA2NMKwMTEnMTYuMCJX!5e0!3m2!1sen!2sar!4v1620000000000!5m2!1sen!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            className='map filter invert grayscale'
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full px-4 py-1.5 rounded-lg bg-white dark:bg-[#121212] border border-[#b0b0b0] dark:border-[#383838] focus:border-[#3C3C3C] dark:focus:border-[#ffdb70] focus:outline-none transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full px-4 py-1.5 rounded-lg bg-white dark:bg-[#121212] border border-[#b0b0b0] dark:border-[#383838] focus:border-[#3C3C3C] dark:focus:border-[#ffdb70] focus:outline-none transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              className="w-full px-4 py-1.5 rounded-lg bg-white dark:bg-[#121212] border border-[#b0b0b0] dark:border-[#383838] focus:border-[#3C3C3C] dark:focus:border-[#ffdb70] focus:outline-none transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-1.5 rounded-lg text-gray-200 dark:text-black font-medium dark:bg-gradient-to-r dark:from-[#f5ca48] dark:to-[#ffbb5c] bg-gradient-to-r from-[#7E7E7E] to-[#3C3C3C] filter hover:scale-105 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

