function Card({ imagem, title, description }) {
    return (
        <div className="bg-white rounded-lg w-90 shadow-cyan-700 shadow-lg overflow-hidden">
            {imagem && (
                <div className="w-full h-64  flex items-center justify-center overflow-hidden">
                    <img 
                        src={imagem} 
                        alt={title} 
                        className="w-full h-full object-contain p-4"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-center text-md font-bold mb-2 text-slate-700">{title}</h3>
                <p className="text-slate-700">Preço: R$:{description}</p>
                <div className="flex justify-center p-10">
                    <button className=" bg-sky-500 text-white shadow-sky-800 shadow-md p-3 px-6 rounded-lg cursor-pointer hover:bg-sky-700 ease-in-out transition hover:translate-y-0.5 hover:shadow-lg hover:shadow-blue-500">Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export default Card