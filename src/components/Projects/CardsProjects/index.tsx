
export default function CardsProjects ({item } : {item : any}) {

    return (
        <section className="w-60 h-56 bg-primary flex-shrink-0 rounded-[1rem]">
            <img src={item.img} alt="" className="w-full h-32" />
            
            <div className="px-2">
                <h1 className="mt-2 font-Inter text-white">{item.nome}</h1>

                <div className="flex justify-between mt-5">
                    <a href={item.linkDeploy} className="flex items-center px-3 py-1 bg-lime-500 rounded-[1rem]">
                        <div className="w-6 h-6 bg-view bg-cover"></div>
                        <p className="font-inter">Deploy</p>
                    </a>

                    <a href={item.linkRepositorio} className="flex items-center px-3 py-1 bg-black rounded-[1rem]">
                        <div className="w-6 h-6 bg-github bg-cover bg-center"></div>
                        <p className="font-inter text-white">Github</p>
                    </a>
                </div>
            </div>
            
        </section>
    )
}