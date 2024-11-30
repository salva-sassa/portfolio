import { Mail, Phone, Calendar, MapPin, Twitter, Instagram, Github, FileDown, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';


function SkeletonLoader() {
  return (
    <div className="w-full h-full rounded-lg bg-zinc-700 animate-pulse"></div>
  );
}


export default function ProfileCard() {
  return (
    <div className="rounded-lg p-8">
      <div className="flex flex-col items-center">
        <div className="bg-zinc-800 rounded-lg mb-6">
          <Suspense fallback={<SkeletonLoader />}>
            <Image
              alt="Profile"
              className="w-full h-full object-cover rounded-lg dark:hidden"
              src="/soft.png"
              width={500}
              height={500}
              priority
            />
          </Suspense>
          <Suspense fallback={<SkeletonLoader />}>
            <Image
              alt="Profile"
              className="w-full h-full object-cover rounded-lg hidden dark:block"
              src="/serious.png"
              width={500}
              height={500}
              priority
            />
          </Suspense>
        </div>
        <h1 className="text-2xl text-center font-bold mb-2">Salvador Sassatelli</h1>
        <div className="bg-zinc-800/10 dark:bg-zinc-800 text-center px-4 py-1 rounded-full text-sm mb-8">
          Full-stack IA focused developer
        </div>

        <div className="w-full space-y-4">
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5" style={{ color: '#ffdb70' }} />
            <div>
              <p className="text-sm text-zinc-400">EMAIL</p>
              <p className="text-xs lg:text-sm">salvasassa3@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5" style={{ color: '#ffdb70' }} />
            <div>
              <p className="text-sm text-zinc-400">PHONE</p>
              <p className="text-xs lg:text-sm">+54 - 3584014476</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5" style={{ color: '#ffdb70' }} />
            <div>
              <p className="text-sm text-zinc-400">BIRTHDAY</p>
              <p className="text-xs lg:text-sm">April 15, 2003</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5" style={{ color: '#ffdb70' }} />
            <div>
              <p className="text-sm text-zinc-400">LOCATION</p>
              <p className="text-xs lg:text-sm">Córdoba, Argentina</p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full gap-4 mt-8">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-400 bg-zinc-800 rounded-md hover:bg-[#ffdb70] hover:text-zinc-900 transition-colors"
            aria-label="Download CV"
          >
            <span>CV</span>
            <FileDown className="w-5 h-5" />
          </Link>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/salvador-sassatelli/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-zinc-400 hover:text-[#ffdb70] transition-colors cursor-pointer" aria-label="Linkedin Profile" />
            </Link>
            <Link href="https://github.com/salva-sassa" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-zinc-400 hover:text-[#ffdb70] transition-colors cursor-pointer" aria-label="GitHub Profile" />
            </Link>
            <Link href="https://x.com/salvasassa3" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-zinc-400 hover:text-[#ffdb70] transition-colors cursor-pointer" aria-label="Twitter Profile" />
            </Link>
            <Link href="https://www.instagram.com/salva_sassa/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-zinc-400 hover:text-[#ffdb70] transition-colors cursor-pointer" aria-label="Instagram Profile" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
