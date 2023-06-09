export default function AboutMe () {
    return (
        <section className="w-full min-h-96 py-5 px-5 flex flex-col items-center justify-center">

            <div className="flex gap-3">
                <div className="lg:w-72 lg:h-72 lg:rounded-full lg:bg-slate-400 lg:border-black lg:border-[1px] shadow-[0px_5px_5px_rgba(0,0,0,0.5)]"></div>

                <div className="flex flex-col gap-2">
                    <article className="font-Inter mb-2 lg:w-96">
                        <h1 className="text-3xl font-bold">Olá!</h1>
                        <h2 className="text-xl font-semibold mb-3">Um pouco sobre mim</h2>

                        <p>Meu nome é Thiago Varallo, tenho 17 anos e sou um entusiasta da programação desde que me entendo por gente. Ainda não tenho experiência profissional, mas estou sempre buscando aprender mais e me aprimorar.</p>
                    </article>
                    
                    <div className="flex gap-3 font-Inter justify-center lg:justify-start">
                        <a href="" className="w-20 h-20 flex justify-center items-center bg-primary rounded-full text-secundary border-black border-[1px] shadow-[0px_5px_5px_rgba(0,0,0,0.5)] lg:w-20 lg:h-20">
                            Curriculo
                        </a>
                        <a href="https://www.linkedin.com/in/thiago-varallo" className="w-20 h-20 flex justify-center items-center bg-secundary rounded-full text-primary border-black border-[1px] shadow-[0px_5px_5px_rgba(0,0,0,0.5)] lg:w-20 lg:h-20">
                            Linkdin
                        </a>
                        <a href="" className="w-20 h-20 flex justify-center items-center bg-primary rounded-full text-secundary border-black border-[1px] shadow-[0px_5px_5px_rgba(0,0,0,0.5)] lg:w-20 lg:h-20">
                            Github
                        </a>
                    </div>

                </div>
                
            </div>

            <div className="w-64 h-64 bg-slate-400 mt-4 rounded-full border-black border-[1px] shadow-[0px_5px_5px_rgba(0,0,0,0.5)] lg:hidden"></div>
        
        </section>
    )
}