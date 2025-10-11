function Footer(){
    return(
        <>
            <div id="footer" className="grid gap-10 p-10 lg:grid-cols-4 bg-gray-500 text-white">
                <div id="p1" className="flex flex-col gap-2">
                    <h1 className="font-bold text-cyan-600 uppercase text-xl gap-2">Makita</h1>
                    <p>Ferramentas profissionais de qualidade superior para todos os seus projetos.</p>
                    <div id="links" className="gap-2 flex">
                        <a href="">Facebook</a>
                        <a href="">Youtube</a>
                        <a href="">Instagram</a>
                    </div>
                </div>
                <div id="p2" className=" flex flex-col gap-1">
                    <h1 className="font-bold text-white">Produtos</h1>
                    <a href="">Ferramentas Elétricas</a>
                    <a href="">Ferramentas a Bateria</a>
                    <a href="">Ferramentas Pneumáticas</a>
                    <a href="">Acessórios</a>
                </div>
                <div id="p3" className="flex flex-col gap-1">
                    <h1 className="font-bold text-white">Suporte</h1>
                    <a href="">Assitencia Técnica</a>
                    <a href="">Manuais</a>
                    <a href="">Garantias</a>
                    <a href="">Contato</a>
                </div>
                <div id="p4" className="flex flex-col text-white gap-2">
                    <h1 className="font-bold text-white">Newsletter</h1>
                    <a href="">Receba novidades e ofertas especiais</a>
                    <div className="flex gap-2">
                        <input type="email" name="" id="" className="bg-white rounded-sm"/>
                        <button className="bg-cyan-600 p-1 rounded-sm cursor-pointer hover:bg-cyan-500 hover:text-black ease-in-out transition">Enviar</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer