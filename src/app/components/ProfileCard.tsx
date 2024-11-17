// app/components/ProfileCard.tsx
import { Mail, Phone, Calendar, MapPin, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="bg-[#1e1e1f] rounded-lg p-8">
      <div className="flex flex-col items-center">
        <div className=" bg-zinc-800 rounded-lg mb-6">
          <Image
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
            src="/sassa.webp"
            width={500}  
            height={500}
          />
        </div>
        <h1 className="text-2xl text-center font-bold mb-2">Salvador Sassatelli</h1>
        <div className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm mb-8">
          Full-stack IA focused developer
        </div>

        <div className="w-full space-y-4">
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5" style={{ color: '#ffdb70' }} />
            <div>
              <p className="text-sm text-zinc-400">EMAIL</p>
              <p className="text-sm">salvasassa3@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5" style={{ color: '#ffdb70' }} />
            <div>
              <p className="text-sm text-zinc-400">PHONE</p>
              <p className="text-sm">+54 - 3584014476</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5" style={{ color: '#ffdb70' }} />
            <div>
              <p className="text-sm text-zinc-400">BIRTHDAY</p>
              <p className="text-sm">April 15, 2003</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5" style={{ color: '#ffdb70' }} />
            <div>
              <p className="text-sm text-zinc-400">LOCATION</p>
              <p className="text-sm">Córdoba, Argentina</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <Twitter className="w-5 h-5 text-zinc-400 hover:text-[#ffdb70] transition-colors cursor-pointer" />
          <Instagram className="w-5 h-5 text-zinc-400 hover:text-[#ffdb70] transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  )
}