import { Nav } from "@/types/nav.type"

import {
  Envelope,
  FilePdf,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"

export const socialsConfig: Nav[] = [
  {
    title: "Github",
    href: "https://github.com/mariquegonn-dev",
    Icon: GithubLogo,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/mariquegonn-dev/",
    Icon: LinkedinLogo,
  },
  {
    title: "Whatsapp",
    href: "https://wa.me/5579999199036?text=Ol%C3%A1+Henrique%21",
    Icon: WhatsappLogo,
  },
  {
    title: "Email",
    href: "mailto:mariquegonn@gmail.com",
    Icon: Envelope,
  },
  {
    title: "Currículo",
    href: "https://drive.google.com/file/d/1SfnViTGtCH6KigRyK6gYJgEpZ3tPlW5w/view",
    Icon: FilePdf,
  },
]
