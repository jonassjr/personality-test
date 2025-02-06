"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  {
    id: 1,
    name: 'Sobre',
    href: '/#about'
  }
]


export function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="w-full padding-x flex h-16 items-center justify-between sm:justify-normal sm:space-x-4">
      <Link href="/" className="whitespace-nowrap">
        <span className="text-lg text-gray-900 dark:text-gray-100 font-bold">Teste MBTI</span>
      </Link>

      {true ? (
        <>
          {/* Navegação mobile */}
          <div className={`fixed ${toggle ? "top-0" : "-top-full"}
          bg-background left-0 w-full py-12 px-20 text-center transition-top duration-500 
          shadow sm:hidden z-20`}>
            <ul className="flex flex-col items-center gap-y-4">
              {navLinks.map((link) => (
                <li key={link.id} className="text-base font-semibold text-gray-500 hover:text-gray-400">
                  <a href={link.href}
                    onClick={() => setToggle(false)}
                  >{link.name}</a>
                </li>
              ))}
            </ul>

            <Button
              size="icon"
              className=" absolute top-5 right-8 sm:hidden"
              onClick={() => setToggle(false)}
            >
              <X />
            </Button>
          </div>

          {/* Navegação desktop */}
          <div className="hidden sm:flex w-full justify-between items-center">
            <ul className="flex items-center gap-x-4">
              {navLinks.map((link) => (
                <li key={link.id} className="text-base font-semibold text-gray-500 hover:text-gray-400">
                  <a href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : ("")
      }

      <div className="sm:hidden flex items-center">
        <div className="flex items-center gap-2 ">
          <Button
            size="icon"
            onClick={() => setToggle(true)}
          >
            <Menu />
          </Button>

        </div>
      </div>
    </header >
  )
}