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
  
  
<div className="w-full bg-gray-900 p-10 text-white mt-40">
  <div className="flex flex-wrap">
    {/* Conteúdo do retângulo azul */}
    <div className="text-left mt-8 ml-40">
      <h2 className="text-white text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">Todos os Seguros </h2>
      <h2 className="text-white text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">que oferecemos</h2>
      <h2 className="text-yellow-300 text-5xl font-bold mb-4 custom-text-shadow tracking-tigh">para você</h2>

      {/* Botão arredondado amarelo "Simule Online" */}
      <button className="bg-yellow-300 rounded-full px-6 py-3 mt-4 text-gray-900 font-bold">
        Simule Online
      </button>
    </div>


    {/* Mosaico de imagens na parte direita */}
    <div className="w-1/2 grid grid-cols-3 gap-4 ml-20">

      {/* Imagem 1 */}
      <div className="relative col-span-2">
    <img src="/assets/viagem.jpg" alt="Imagem 1" className="w-full h-64 object-cover filter brightness-75" />
    <div className="absolute inset-0 flex items-left justify-right p-8 text-2xl text-white text-center font-bold custom-text-shadow mt-40">
      <p>Seguro Viagem</p>
    </div>
  </div>
       

      {/* Imagem 2 */}
      <div className="relative text-left">
    <img src="/assets/financeiro.jpg" alt="Imagem 2" className="w-full h-64 object-cover filter brightness-75" />
    <div className="absolute inset-0 flex items-center justify-right p-8 text-2xl text-white text-left font-bold custom-text-shadow mt-40">
      <p>Consórcio e Financiamento</p>
    </div>
    
  </div>

      {/* Imagem 3 */}
      <div className="relative text-left">
    <img src="/assets/odontologico.jpg" alt="Imagem 3" className="w-full h-60 object-cover filter brightness-75" />
    <div className="absolute inset-0 flex items-center justify-right p-8 text-2xl text-white text-left font-bold custom-text-shadow mt-40">
      <p>Plano Odontológico</p>
    </div>
  </div>

      {/* Imagem 4 */}
      <div className="relative">
    <img src="/assets/residencial.jpg" alt="Imagem 4" className="w-full h-60 object-cover filter brightness-75" />
    <div className="absolute inset-0 flex items-center justify-right p-8 text-2xl text-white text-left font-bold custom-text-shadow mt-40">
      <p>Plano Residencial</p>
    </div>
  </div>

      {/* Imagem 5 */}
      <div className="relative">
    <img src="/assets/portateis.jpg" alt="Imagem 5" className="w-full h-60 object-cover filter brightness-75" />
    <div className="absolute inset-0 flex items-center justify-right p-8 text-2xl text-white text-left font-bold custom-text-shadow mt-40">
      <p>Equipamentos Portáteis</p>
    </div>
  </div>
    </div>
  </div>
  </div>

  

  </div>



<div className="w-full bg-gray-900 p-10 text-white mt-40">
  <div className="flex flex-wrap items-center">
    {/* Conteúdo do retângulo azul */}
    <div className="text-left mt-8 ml-40">
      <h2 className="text-white text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">Conheça nossos</h2>
      <h2 className="text-white text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">serviços</h2>
      <h2 className="text-white text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">corporativos!</h2>
    </div>
    <p className="text-white text-lg ml-20 mt-10">
    Descubra como podemos proteger o seu negócio com serviços corporativos
    <br />
     para garantir a tranquilidade de serviços corporativos para  garantir  a 
    <br />
  tranquilidade de sua empresa.
  </p>  
  </div>


</div>

  {/* Quatro imagens abaixo do contêiner azul */}
<div className="flex justify-centergrid gap-8 ml-60 ">
  {/* Imagem 1 */}
  <div className="relative">
    <img src="/assets/seguroSaude.jpg" alt="Imagem 1" className="w-64 h-64 object-cover rounded-lg filter brightness-75" />
    <p className="absolute bottom-20 left-3 text-white text-left font-bold text-3xl p-2">Seguro Saúde</p>
  </div>

  {/* Imagem 2 */}
  <div className="relative">
    <img src="/assets/Segurovida.jpg" alt="Imagem 2" className="w-64 h-64 object-cover rounded-lg filter brightness-75" />
    <p className="absolute bottom-20 left-3 text-white text-left font-bold text-3xl p-2">Seguro de Vida</p>
  </div>

  {/* Imagem 3 */}
  <div className="relative">
    <img src="/assets/seguroEmpresa.jpg" alt="Imagem 3" className="w-64 h-64 object-cover rounded-lg filter brightness-75" />
    <p className="absolute bottom-11 left-3 text-white text-left font-bold text-3xl p-2">Seguro para Empresas</p>
  </div>

  {/* Imagem 4 */}
  <div className="relative">
    <img src="/assets/Responsabilidade.jpg" alt="Imagem 4" className="w-64 h-64 object-cover rounded-lg filter brightness-75" />
    <p className="absolute bottom-2 left-3 text-white text-left font-bold text-3xl p-2">Seguro Responsabilidade Civil</p>
  </div>
</div>



  {/* Espaço em branco */}
  <div className="my-60"></div>


  <div className="flex flex-wrap mt-40">
  {/* Imagem à esquerda */}
  <img src="/assets/Quemsomos.jpg" alt="Imagem" className="w-1/3 h-auto object-cover ml-60" />

  {/* Conteúdo à direita */}
  <div className="w-1/2 p-10">
    {/* Título "Por que fazer seu seguro na Acelerados?" */}
    <h2 className="text-5xl text-gray-900 font-extrabold mb-1 text-right">
      Por que fazer
    </h2>
    <h2 className="text-5xl text-gray-900 font-extrabold mb-1 text-right">
      seguro na
    </h2>
    <h2 className="text-5xl text-yellow-300 font-extrabold mb-6 text-right">
     Acelerados?
    </h2>

    {/* Texto */}
    <div className="text-lg text-gray-900 text-right font-semibold">
      <p className="mb-1">Fazer seu seguro na Acelerados é a escolha inteligente para</p>
      <p className="mb-1">proteger o que realmente importa. Oferecemos soluções confiáveis,</p>
      <p className="mb-1">atendimento personalizado e preços competitivos. Sua segurança está</p>
      <p className="mb-1">em boas mãos conosco. Temos o compromisso de atender nossos</p>
      <p className="mb-1">clientes de forma ágil e humanizada. Assim, conquistamos</p>
      <p className="mb-1">a cada dia a confiança e preferência das pessoas.</p>
    </div>

    {/* Botão "Simule Online" */}
    <button className="bg-yellow-300 rounded-full px-6 py-3 mt-4 text-gray-900 font-bold ">
      Simule Online
    </button>
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