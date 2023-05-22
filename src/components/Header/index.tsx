export default function Header() {
    return (
        <header className="w-full h-[36rem] lg:flex lg:h-[38rem]">
            <section className="w-full h-2/3 bg-primary lg:w-8/12 lg:h-full">
                <div className="w-full h-full flex justify-center items-center ">
                    <article className="w-full min-h-0 pl-14 pr-12 lg:pl-32 lg:pr-80">
                        <h1 className="font-Montserrat font-bold text-secundary text-4xl lg:text-7xl text-left">Frontend<br/>Developer.</h1>
                    
                        <p className="font-Inter text-secundary text-[1rem] mt-3 lg:text-[1.1rem] lg:mt-5">Gosto de criar produtos frontend sólidos e escaláveis com ótimas experiências de usuário.</p>
                    </article>
                </div>
            </section>

            <section className="w-full h-1/3 bg-secundary flex justify-center items-center lg:w-4/12 lg:h-full">
                <div className="w-52 h-52 relative bg-white bottom-10 lg:right-52 lg:w-72 lg:h-72 lg:translate-y-10"></div>
            </section>
        </header>
    )
}