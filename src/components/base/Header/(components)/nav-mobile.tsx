"use client"

import { useEffect, useState } from "react"
import { List, X } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"
import { socialsConfig } from "@/config/socials.config"
import { ListNav } from "../../ListNav/list"
import { NavHeaderMobile } from "./nav-header-mobile"
import { ListItemLink } from "./list-item-link"
import { useParams } from "next/navigation"

export const NavMobile = () => {
  const [open, setOpen] = useState(false)
  const params = useParams()

  useEffect(() => {
    setOpen(false)
  }, [params])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const content = document.querySelector(".content")
      if (!content?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <>
      <div className="sm:hidden block">
        {!open ? (
          <List
            aria-label="button-open"
            size={24}
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          />
        ) : (
          <X size={16} className="text-secundary-gray" weight="bold" />
        )}
      </div>

      {open && (
        <div className="sm:hidden fixed inset-0 z-[1000] bg-black opacity-50"></div>
      )}
      <nav
        className={cn(
          "content absolute left-14 rounded-l-xl right-0 top-0 z-[9999] translate-x-[200%] bg-tertiary-black opacity-0 transition-all duration-500 border-l border-primary-gray",
          open && "translate-x-0 opacity-100"
        )}
      >
        {open && (
          <div className="p-4 flex sm:hidden flex-col gap-3 h-[100dvh]">
            <NavHeaderMobile onClick={() => setOpen(false)} />

            <p className="px-2 text-primary-white text-sm border-b pb-3 border-primary-gray">
              👽 Apenas, busquem conhecimento.
            </p>

            <ListItemLink />

            <ListNav variant="socials" config={socialsConfig} target="_blank" />

            <p className="text-center text-xs text-secundary-gray cursor-default">
              Frontend Developer
            </p>
          </div>
        )}
      </nav>
    </>
  )
}
