import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../sub/contactfrom'

export default function ContactPage() {
  return (
    <div 
    className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-fixed z-[30] py-20" 
      style={{ 
        backgroundImage: "url('/placeholder.svg')",
      }}
      id='contact'
    >
      <div className="text-center mb-8">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Contact Us 
        </h2>
      </div>
      
      <div className="max-w-5xl w-full grid gap-8 md:grid-cols-2 bg-cover backdrop-blur-sm rounded-xl shadow-lg">
        {/* Left Side - Contact Info */}
        <div className="p-8  text-white flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-300 mb-8">
              We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-gray-300 mt-0.5" />
              <div>
                <h3 className="font-medium">Our Address</h3>
                <p className="text-gray-300">123 Business Avenue, Suite 100, San Francisco, CA 94107</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-gray-300 mt-0.5" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-gray-300 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-300">contact@yourcompany.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 bg-white/90">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}