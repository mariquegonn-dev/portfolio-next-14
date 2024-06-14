import { Nav } from "./(components)/nav"
import { LeftNav } from "./(components)/left-nav"
import { NavMobile } from "./(components)/nav-mobile"

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 border-b border-primary-gray bg-primary-black">
      <div className="relative z-[1000] mx-auto flex items-center justify-between p-4 text-white">
        <LeftNav />
        <Nav />
        <NavMobile />
      </div>
    </header>
  )
}
