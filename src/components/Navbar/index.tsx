import { useState } from "react"

export default function Navbar() {
      
    const [scrollUser, setScrollUser] = useState<Number>(0)
   
    window.addEventListener('scroll', () => {
        setScrollUser(window.scrollY)
    })

    console.log(scrollUser)

    return (
        <section className="w-11 h-screen right-0 py-3 fixed flex items-end">
            <nav className="w-full h-48">
                <section className="w-full h-full flex flex-col gap-4 items-center justify-center">
                    <div className="w-5 h-5 bg-primary rotate-45"></div>
                    <div className="w-5 h-5 bg-primary rotate-45"></div>
                    <div className="w-5 h-5 bg-primary rotate-45"></div>
                    <div className="w-5 h-5 bg-primary rotate-45"></div>
                </section>
            </nav>
        </section>
    )
}