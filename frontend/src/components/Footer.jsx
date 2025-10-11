function Footer(){
    return(
        <div className="bg-slate-900 flex flex-col justify-center items-center">
            <div id="footer" className="grid gap-10 p-10 lg:grid-cols-4 bg-slate-900 text-white items-center justify-center">
                <div id="p1" className="flex flex-col gap-2">
                    <h1 className="font-bold text-cyan-400 uppercase text-xl gap-2">INSIGHT</h1>
                    <p>Cuidando com amor e qualidade do seu melhor amigo. Tudo o que seu pet precisa em um só lugar!</p>
                    <div id="links" className="gap-2 flex">
                        <a href="">Facebook</a>
                        <a href="">Youtube</a>
                        <a href="">Instagram</a>
                    </div>
                </div>
                <div id="p2" className=" flex flex-col gap-1">
                    <h1 className="font-bold text-white">Produtos</h1>
                    <a href="">Rações e Petiscos</a>
                    <a href="">Brinquedos</a>
                    <a href="">Higiene e Cuidados</a>
                    <a href="">Acessórios</a>
                </div>
                <div id="p3" className="flex flex-col gap-1">
                    <h1 className="font-bold text-white">Suporte</h1>
                    <a href="">Dúvidas Frequentes</a>
                    <a href="">Trocas e Devoluções</a>
                    <a href="">Entregas e Frete</a>
                    <a href="">Contato</a>
                </div>
                <div id="p4" className="flex flex-col text-white gap-2">
                    <h1 className="font-bold text-white">Newsletter</h1>
                    <a href="">Receba dicas, promoções e novidades exclusivas sobre cuidados com seu pet.</a>
                    <div className="flex gap-2">
                        <input type="email" name="" id="" className="bg-white rounded-sm"/>
                        <button className="bg-cyan-600 p-1 rounded-sm cursor-pointer hover:bg-cyan-500 hover:text-black ease-in-out transition">Enviar</button>
                    </div>
                </div>
                
            </div>
            <p className="flex border-b-2 w-full mt-2 text-slate-200"></p>
            <p className="text-white m-5"> &copy; 2025 Todos os direitos reservados.</p>

        </div>
    )
}

export default Footer