function Card({ imagem, title, description }) {
    return (
        <div className="bg-white rounded-lg shadow-cyan-200 shadow-lg overflow-hidden">
            {imagem && (
                <div className="w-full h-64 bg-white flex items-center justify-center overflow-hidden">
                    <img 
                        src={imagem} 
                        alt={title} 
                        className="w-full h-full object-contain p-4"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-center text-md font-bold mb-2">{title}</h3>
                <p className="text-gray-600">Preço: R$:{description}</p>
                <div className="flex justify-center p-10">
                    <button className=" bg-sky-500 text-white shadow-sky-200 shadow-md p-3 px-6 rounded-lg cursor-pointer hover:bg-sky-700 ease-in-out transition hover:translate-y-0.5 hover:shadow-lg hover:shadow-blue-500">Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export default Card