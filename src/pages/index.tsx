import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from 'src/styles/globals.css';
//import Link from 'next/link';
//<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap">


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Acelerados</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      </head>

      {/* Barra de Menu no Topo */}
 
      <div className="top-menu flex items-right justify-end ">
  <p className="mr-5 text-lg p-2">Home</p>
  <p className="mr-5 text-lg p-2">Seguros</p>
  <p className="mr-5 text-lg p-2">Contatos</p>
  <p className="mr-5 text-lg p-2">Sobre Nós</p>
  <p className="mr-5 text-lg p-2">Para Empresas</p>
  <p className="mr-5 text-lg rounded-md border border-yellow-300 p-2 font-semibold">Cote seu seguro</p>
  
</div>
      
      <div className="relative h-screen">
      <img src="/assets/home.jpg" alt="Imagem da Página Inicial" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-4 flex flex-col items-left justify-end text-left p-20 ml-20">
        <div className="mb-4">
          <h1 className="text-white text-5xl font-extrabold  mb-1 custom-text-shadow tracking-tight">Assegure seu futuro</h1>
          <h1 className="text-white text-5xl font-extrabold mb-1 custom-text-shadow tracking-tight">com apenas alguns</h1>
          <h1 className="text-white text-5xl font-extrabold mb-4 custom-text-shadow tracking-tight">cliques</h1>
          <h1 className="text-white text-2xl font-bold mb-6 custom-text-shadow">Obtenha resultados na hora</h1>
        </div>
        <div>
        <a href="#" className="simule-button text-2xl">Simule Agora</a>

          
        </div>
      </div>
    </div>

    <div className="flex flex-wrap">
  {/* Metade da tela azul */}
  <div className="flex-1 bg-gray-900 text-white p-20 flex items-right">
    {/* Conteúdo à esquerda (imagem) */}
    <img src="/assets/car.jpg" alt="Imagem" className="w-1/2 h-2/1  object-cover ml-40 " />

    {/* Conteúdo à direita (frases em fontes diferentes) */}
    <div className="text-left ml-20 ">
      <h2 className="text-white text-5xl font-bold  mb-1 custom-text-shadow tracking-tight ">Confira o que nosso</h2>
      <h2 className="text-white text-5xl font-bold mb-1 custom-text-shadow tracking-tight">
  <span className="text-yellow-300">Seguro Auto</span> tem a
</h2>
      <h2 className="text-white text-5xl font-bold  mb-4 custom-text-shadow tracking-tigh">oferecer</h2>
      <p className="text-lg">
        O pacote de coberturas e assistência é apresentado na 
      </p>
      <p className="text-lg">
      hora. São pré-definidas quais são as proteções que
      <p className="text-lg mb-8">
      o segurado tem direito dentro do seguro.
      </p>
      </p>
      <div className="flex space-x-4">
      <div className="w-24 h-24 bg-white rounded flex items-center justify-center text-gray-900 font-bold">
        <p className="mt-8">Roubo<br />e furto</p>
        </div>
        <div className="w-24 h-24 bg-white rounded flex items-center justify-center text-gray-900 font-bold">
        <p className="mt-8">Colisões</p>
        </div>
        <div className="w-24 h-24 bg-white rounded flex items-center justify-center text-gray-900 font-bold">
        <p className="mt-8">Incêncio</p>
        </div>
        <div className="w-24 h-24 bg-white rounded flex items-center justify-center text-gray-900 font-bold">
        <p className="mt-8">Assistência<br />24 horas</p>
        </div>
      </div>   
    </div>
  </div>
  
  
</div>
<div className="w-full bg-gray-900 p-10 text-white mt-40  ">
<div className="flex flex-wrap">
    {/* Conteúdo do retângulo azul */}
    <div className="text-left mt-8 ml-40">
    <h2 className="text-white text-5xl font-bold  mb-2 custom-text-shadow tracking-tigh">Todos os Seguros </h2>
    <h2 className="text-white text-5xl font-bold  mb-2 custom-text-shadow tracking-tigh">que oferecemos</h2>
    <h2 className="text-yellow-300 text-5xl font-bold  mb-4 custom-text-shadow tracking-tigh">para você</h2>

 {/* Botão arredondado amarelo "Simule Online" */}
 <button className="bg-yellow-300 rounded-full px-6 py-3 mt-4 text-gray-900 font-bold">
 Simule Online
  </button>

    {/* Mosaico de imagens na parte direita */}
    <div className="w-1/2 grid grid-cols-2 gap-4">
      {/* Imagem 1 */}
      <img src="/assets/odontologico.jpg" alt="Imagem 1" className="w-full h-auto" />

      {/* Imagem 2 */}
      <img src="/assets/financeiro.jpg" alt="Imagem 2" className="w-full h-auto" />

      {/* Imagem 3 */}
      <img src="/assets/viagem.jpg" alt="Imagem 3" className="w-full h-auto" />

      {/* Imagem 4 */}
      <img src="/assets/residencial.jpg" alt="Imagem 4" className="w-full h-auto" />

      {/* Imagem 5 */}
      <img src="/assets/portateis.jpg" alt="Imagem 5" className="w-full h-auto" />
    </div>
  </div>

  </div>



  </div>

















 {/* Menu Lateral Fixo */}
    <div class="side-menu">
  <div class="square"><a href="# font-bold">logo</a></div>
  <div class="square"><a href="#">Simule Online</a></div>
  <div class="square"><a href="#">Nós te Ligamos</a></div>
  <div class="square"><a href="#">Whatsapp</a></div>
  <div class="square"><a href="#">Central de Ajuda</a></div>
</div>

    </div>


    
  );
}