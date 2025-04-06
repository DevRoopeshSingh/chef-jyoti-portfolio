import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  ]

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="rounded-full bg-gray-800 p-2 text-gray-300 transition-colors hover:bg-amber-600 hover:text-white"
          aria-label={link.label}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

