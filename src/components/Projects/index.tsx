import CardsProjects from "./CardsProjects"
import projects from "../../projects.json"

export default function Projects () {

    

    return (
        <section className="w-full h-96 flex flex-col justify-end py-1 lg:flex lg:flex-row lg:items-center md:flex-row ">
            <h1 className="font-inter text-center text-primary font-bold text-6xl lg:-rotate-90 lg:relative lg:left-14 md:-rotate-90 md:relative md:left-56">Projetos</h1>

            <section className="w-96 h-full flex items-center bg-secundary rounded-tl-[3rem] rounded-bl-[3rem] pl-10 lg:w-[50rem] lg:pl-6 md:w-[40rem]">

                <div className="w-full h-72 overflow-x-scroll flex gap-3 items-center">
                    {projects.map((item, index) => (
                        <CardsProjects item={item} key={index} />    
                    ))}
                </div>
            </section>
        </section>
    )
}