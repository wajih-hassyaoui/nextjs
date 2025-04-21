"use client"

import { useState } from "react";
import EnvelopeAnimation from "@/components/sub/envelope-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-[40px] font-semibold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div>
          <EnvelopeAnimation />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input 
              id="name" 
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your.email@example.com" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea 
              id="message" 
              placeholder="How can we help you?" 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}