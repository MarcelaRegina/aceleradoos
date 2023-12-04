import Image from 'next/image';
import { FaCalculator, FaPhone, FaWhatsapp, FaHeadset, FaCarCrash, FaLock, FaFire, FaCreditCard, FaCogs, FaUserEdit } from 'react-icons/fa';
import React, { useState, useRef, useEffect} from 'react';
import Head from 'next/head';
import Chatbot from '../components/Chatbot.js';



 
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ( 
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" onClick={onClose} aria-hidden="true">
          <div className="absolute inset-0 bg-indigo-950 opacity-10"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md" >
          {children}
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 mt-4 rounded-md">Ok!</button>
        </div>
      </div>
    </div>
  );
};

<iframe src="https://api.robocote.com/bot.html?v=1701200464" allow="microphone" id="robocote-iframe" style="display: block; width: 385px; height: 115px; border: none; position: fixed; opacity: 1; bottom: 0px; right: 0px; transform: translateY(0px); z-index: 9000 !important;"></iframe>

      


const Home = () => {

  const homeRef = useRef(null);
  const segurosRef = useRef(null);
  const empresasRef = useRef(null);
  const contatoRef = useRef(null);
  const SobreNosRef = useRef(null);
  const coteRef = useRef(null);
  
  const [activeSection, setActiveSection] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState('');
  const [telefone, setTelefone] = useState(''); 
  

  const handleMenuClick = (section: string) => { 
    setActiveSection(section);

    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'seguros':
        segurosRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'empresas':
        empresasRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contato':
        contatoRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'SobreNos':
        SobreNosRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'cote':
        coteRef.current.scrollIntoView({ behavior: 'smooth' });
        break;

      default:
        break;
    }
    
  };
  const openModal = (modalName) => {
    setActiveModal(modalName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveModal('');
    setIsModalOpen(false);
  };

  const handleEnviarNumero = () => {
    // Aqui você pode realizar qualquer ação desejada com o número de telefone, como enviar para um servidor, armazenar no estado, etc.
    console.log(`Número de telefone: ${telefone}`);
    
    // Feche o modal após a ação
    closeModal();
  };

  return (
      <div>
          <Head>
         <title>Acelerados</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js " defer></script>
         </Head>

  <div className="top-menu flex items-right justify-end lg:flex lg:flex-row flex-col">
  <span className="text-3xl cursor-pointer mx-2 md:hidden block">
    <ion-icon name="menu" onClick={() => Menu(this)}></ion-icon>
  </span>
  <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full right-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
  <li class="mx-2 my-6 md:my-0">
    <a class={`mr-5 text-lg p-2 ${activeSection === 'home' ? 'active' : ''}`} href="#home" onClick={() => handleMenuClick('home')}>
      Home
    </a>
  </li>
  <li class="mx-2 my-6 md:my-0">
    <a class={`mr-5 text-lg p-2 ${activeSection === 'seguros' ? 'active' : ''}`} href="#seguros" onClick={() => handleMenuClick('seguros')}>
      Seguros
    </a>
  </li>
  <li class="mx-2 my-6 md:my-0">
    <a class={`mr-5 text-lg p-2 ${activeSection === 'contato' ? 'active' : ''}`} href="#contato" onClick={() => handleMenuClick('contato')}>
      Contato
    </a>
  </li>
  <li class="mx-2 my-6 md:my-0">
    <a class={`mr-5 text-lg p-2 ${activeSection === 'SobreNos' ? 'active' : ''}`} href="#SobreNos" onClick={() => handleMenuClick('SobreNos')}>
      Sobre Nós
    </a>
  </li>
  <li class="mx-2 my-6 md:my-0">
    <a class={`mr-5 text-lg p-2 ${activeSection === 'empresas' ? 'active' : ''}`} href="#empresas" onClick={() => handleMenuClick('empresas')}>
      Para Empresas
    </a>
  </li>
  <li class="mx-2 my-6 md:my-0">
    <button class="text-lg p-2 text-white duration-500 px-3 py-2 hover:bg-gray-500 rounded border border-yellow-300" onClick={() => handleMenuClick('cote')}>
      Cote Agora
    </button>
  </li>
</ul>
</div>


      <div id="home" ref={homeRef}>
      <div className="relative h-screen">
    <img src="/assets/home.jpg" alt="Imagem da Página Inicial" className=" md:block w-full h-full object-cover" />
    
    <div className="absolute inset-0 bg-black opacity-30"></div>
    <div className="absolute inset-4 flex flex-col items-left justify-end text-left p-4 md:p-20 ml-4 md:ml-20">
      <div className="mb-4">
        <h1 className="text-white  text-4xl md:text-6xl font-bold  mb-1 custom-text-shadow tracking-tight">Assegure seu futuro</h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-1 custom-text-shadow tracking-tight">com apenas alguns</h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 custom-text-shadow tracking-tight">cliques</h1>
        <h1 className="text-white text-xl md:text-2xl font-bold  custom-text-shadow">Obtenha resultados na hora</h1>
      </div>
      <div>
        <button className="bg-yellow-300 rounded-xl px-9 py-5 mt-1 text-indigo-950 font-bold text-xl text-2xl hover:bg-yellow-400">
          Simule Online
        </button>
 
          
        </div>
      </div>
    </div>

    


</div>
<div className="bg-white-950 text-indigo-950 py-12">
  <div className="text-center ml-4 sm:ml-10">
    <h1 className="text-2xl md:text-4xl font-bold mb-10 mt-8 mb-20">Seguro Auto por Assinatura</h1>
    <div className="flex flex-wrap justify-center space-x-4 md:space-x-10">
      <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-4 md:mb-0 w-full md:w-auto">
        <FaCreditCard className="text-5xl mb-3" />
        <p className="text-xl md:text-2xl font-semibold">Pagamento mensal</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-4 md:mb-0 w-full md:w-auto">
        <FaCogs className="text-5xl mb-3" />
        <p className="text-xl md:text-2xl font-semibold">Flexibilidade e adaptabilidade</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-4 md:mb-0 w-full md:w-auto">
        <FaUserEdit className="text-5xl mb-3" />
        <p className="text-xl md:text-2xl font-semibold">Personalizar o seguro</p>
      </div>
    </div>
    <button className="bg-indigo-950 bg-yellow-300 hover:bg-yellow-400 text-indigo-950 font-bold px-6 py-3 mt-8 rounded-full md:mt-20 md:ml-10">Simule Online</button>
  </div>
</div>


<div className="my-20"></div>





 {/* SEGUROS AUTO  ............................................................................ */}



 <div id="seguros" ref={segurosRef}>

 <div className="flex flex-wrap">
  {/* Metade da tela azul */}
  <div className="flex-1 bg-indigo-950 text-white p-6 sm:p-20 flex flex-col sm:flex-row items-center">
    {/* Conteúdo à esquerda (imagem) */}
    <img src="/assets/car.jpg" alt="Imagem" className="w-full h-auto mb-6 sm:w-1/2 sm:h-2/1 sm:object-cover" />

    {/* Conteúdo à direita (frases em fontes diferentes) */}
    <div className="text-center sm:text-left ml-0 sm:ml-20">
      <h2 className="text-white text-3xl sm:text-5xl font-bold mb-1 custom-text-shadow tracking-tight">Confira o que nosso</h2>
      <h2 className="text-white text-3xl sm:text-5xl font-bold mb-1 custom-text-shadow tracking-tight">
        <span className="text-yellow-300">Seguro Auto</span> tem a
      </h2>
      <h2 className="text-white text-3xl sm:text-5xl font-bold mb-4 custom-text-shadow tracking-tigh">oferecer</h2>
      <p className="text-sm sm:text-lg">
        O pacote de coberturas e assistência é apresentado na hora. São pré-definidas quais são as proteções que o segurado tem direito dentro do seguro.
      </p>
     <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded flex flex-col items-center justify-center text-indigo-950 font-bold">
    <FaLock size={24} />
    <p className="mt-2 text-xs sm:text-base">Roubo<br />e furto</p>
  </div>
  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded flex flex-col items-center justify-center text-indigo-950 font-bold">
    <FaCarCrash size={34} style={{ marginBottom: '0' }} />
    <p className="mt-2 text-xs sm:text-base">Colisões</p>
  </div>
  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded flex flex-col items-center justify-center text-indigo-950 font-bold">
    <FaFire size={24} />
    <p className="mt-2 text-xs sm:text-base">Incêndio</p>
  </div>
  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded flex flex-col items-center justify-center text-indigo-950 font-bold">
    <FaHeadset size={25} style={{ marginBottom: '0' }} />
    <p className="mt-2 text-xs sm:text-base">Assistência<br />24 horas</p>
  </div>
      </div>
    </div>
  </div>
</div>
  




 {/* SEGUROS PARA VOCE  ............................................................................ */}


 <div className="w-full bg-indigo-950 p-10 text-white mt-10 sm:mt-40">
  <div className="flex flex-wrap flex-col-reverse sm:flex-row">
    {/* Mosaico de imagens na parte direita */}
    <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-0">
      {/* Imagem 1 */}
      <div className="relative">
        <img src="/assets/viagem.jpg" alt="Imagem 1" className="w-full h-48 sm:h-64 object-cover filter brightness-75" />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-lg sm:text-2xl text-white font-bold custom-text-shadow">
          <p>Seguro Viagem</p>
        </div>
      </div>

      {/* Imagem 2 */}
      <div className="relative">
        <img src="/assets/financeiro.jpg" alt="Imagem 2" className="w-full h-48 sm:h-64 object-cover filter brightness-75" />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-lg sm:text-2xl text-white font-bold custom-text-shadow">
          <p>Consórcio e Financiamento</p>
        </div>
      </div>

      {/* Imagem 3 */}
      <div className="relative">
        <img src="/assets/odontologico.jpg" alt="Imagem 3" className="w-full h-48 sm:h-60 object-cover filter brightness-75" />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-lg sm:text-2xl text-white font-bold custom-text-shadow">
          <p>Plano Odontológico</p>
        </div>
      </div>

      {/* Imagem 4 */}
      <div className="relative">
        <img src="/assets/residencial.jpg" alt="Imagem 4" className="w-full h-48 sm:h-60 object-cover filter brightness-75" />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-lg sm:text-2xl text-white font-bold custom-text-shadow">
          <p>Plano Residencial</p>
        </div>
      </div>

      {/* Imagem 5 */}
      <div className="relative">
        <img src="/assets/portateis.jpg" alt="Imagem 5" className="w-full h-48 sm:h-60 object-cover filter brightness-75" />
        <div className="absolute inset-0 flex items-center justify-center p-4 text-lg sm:text-2xl text-white font-bold custom-text-shadow">
          <p>Equipamentos Portáteis</p>
        </div>
      </div>
    </div>

    {/* Conteúdo do retângulo azul */}
    <div className="text-center sm:text-left mt-4">
      <h2 className="text-white text-3xl sm:text-5xl font-bold mb-2 custom-text-shadow tracking-tight">Todos os Seguros </h2>
      <h2 className="text-white text-3xl sm:text-5xl font-bold mb-2 custom-text-shadow tracking-tight">que oferecemos</h2>
      <h2 className="text-yellow-300 text-3xl sm:text-5xl font-bold mb-4 custom-text-shadow tracking-tight">para você</h2>

      {/* Botão arredondado amarelo "Simule Online" */}
      <button className="bg-yellow-300 rounded-full px-6 py-3 mt-4 text-indigo-950 font-bold">
        Simule Online
      </button>
    </div>
  </div>
</div>
  

  </div>


 {/* SERVIÇOS CORPORATIVOS  ............................................................................ */}

 
 <div id="empresas" ref={empresasRef}>

 
 <div className="w-full bg-indigo-950 p-10 text-white mt-10">
  <div className="flex flex-col items-center">
    {/* Conteúdo do retângulo azul */}
    <div className="text-center mt-8">
      <h2 className="text-white text-3xl sm:text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">Conheça nossos</h2>
      <h2 className="text-white text-3xl sm:text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">serviços</h2>
      <h2 className="text-white text-3xl sm:text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">corporativos!</h2>
      <p className="text-white text-lg mt-4">
        Descubra como podemos proteger o seu negócio com serviços corporativos para garantir a tranquilidade de sua empresa.
      </p>
    </div>
  </div>

  {/* Quatro imagens abaixo do contêiner azul */}
  <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8">
    {/* Imagem 1 */}
    <div className="relative w-full sm:w-64 h-64">
      <img src="/assets/seguroSaude.jpg" alt="Imagem 1" className="w-full h-full object-cover rounded-lg filter brightness-75" />
      <p className="absolute bottom-2 left-3 text-white text-left font-bold text-2xl sm:text-3xl p-2">Seguro Saúde</p>
    </div>

    {/* Imagem 2 */}
    <div className="relative w-full sm:w-64 h-64 mt-4 sm:mt-0">
      <img src="/assets/Segurovida.jpg" alt="Imagem 2" className="w-full h-full object-cover rounded-lg filter brightness-75" />
      <p className="absolute bottom-2 left-3 text-white text-left font-bold text-2xl sm:text-3xl p-2">Seguro de Vida</p>
    </div>

    {/* Imagem 3 */}
    <div className="relative w-full sm:w-64 h-64 mt-4 sm:mt-0">
      <img src="/assets/seguroEmpresa.jpg" alt="Imagem 3" className="w-full h-full object-cover rounded-lg filter brightness-75" />
      <p className="absolute bottom-2 left-3 text-white text-left font-bold text-2xl sm:text-3xl p-2">Seguro para Empresas</p>
    </div>

    {/* Imagem 4 */}
    <div className="relative w-full sm:w-64 h-64 mt-4 sm:mt-0">
      <img src="/assets/Responsabilidade.jpg" alt="Imagem 4" className="w-full h-full object-cover rounded-lg filter brightness-75 hidden sm:block" />
      <p className="absolute bottom-2 left-3 text-white text-left font-bold text-2xl sm:text-3xl p-2 hidden sm:block">Seguro Responsabilidade Civil</p>
    </div>
  </div>
</div>
</div>


 {/* QUEM SOMOS ............................................................................ */}

 <div id="SobreNos" ref={SobreNosRef}>

  {/* Espaço em branco */}
  <div className="my-10 md:my-60"></div>


  <div className="flex flex-col mt-10 md:mt-40">
    {/* Imagem à esquerda */}
    <img
      src="/assets/Quemsomos.jpg"
      alt="Imagem"
      className="hidden md:block w-full md:w-100 h-80 ml-0 md:ml-60 mt-0 md:mt-20"
    />

  {/* Conteúdo à direita */}
  <div className="w-full p-4 md:p-10">
      {/* Título "Por que fazer seu seguro na Acelerados?" */}
      <h2 className="text-3xl md:text-5xl text-indigo-950 font-extrabold mb-1 text-center">
        Por que fazer
      </h2>
      <h2 className="text-3xl md:text-5xl text-indigo-950 font-extrabold mb-1 text-center">
        seguro na
      </h2>
      <h2 className="text-3xl md:text-5xl text-yellow-300 font-extrabold mb-6 text-center">
        Acelerados?
      </h2>


    {/* Texto */}
    <div className="text-sm md:text-lg text-indigo-950 font-semibold text-center">
        <p className="mb-1">Fazer seu seguro na Acelerados é a escolha inteligente para proteger o que realmente importa.</p>
        <p className="mb-1">Oferecemos soluções confiáveis, atendimento personalizado e preços competitivos.</p>
        <p className="mb-1">Sua segurança está em boas mãos conosco. Temos o compromisso de atender nossos</p>
        <p className="mb-1">clientes de forma ágil e humanizada. Assim, conquistamos a cada dia a confiança</p>
        <p className="mb-4">e preferência das pessoas.</p>
      </div>

 {/* Imagem abaixo (para telas pequenas) */}
 <img
      src="/assets/Quemsomos.jpg"
      alt="Imagem"
      className="block md:hidden w-full h-80 mt-4"
    />

    {/* Botão "Simule Online"
    <button className="bg-yellow-300 rounded-full px-6 py-3 mt-4 text-gray-900 font-bold mb-10">
      Simule Online
    </button> */}
  </div>
</div>



 {/* DEPOIMENTOS DE CLIENTES  ............................................................................ */}

 <div className="text-center mt-12 md:mt-24">
  <h2 className="text-indigo-950 text-2xl font-normal mb-6">
    Depoimentos de Clientes
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-4 space-y-4 md:space-y-0 md:space-x-8">
    <div className="text-gray-900 text-center max-w-screen-md w-full md:w-1/3">
      <p className="mb-2">"A Equipe é muito prestativa, competente e sempre me auxilia nos momentos em que preciso tomar decisões importantes sobre proteção para o meu patrimônio e para minha família."</p>
      <p className="mb-2">- Lorena Cardoso</p>
    </div>

    <div className="border-b border-gray-500 w-full md:w-1"></div>

    <div className="text-gray-900 text-center max-w-screen-md w-full md:w-1/3">
      <p className="mb-2">"Sou cliente há alguns anos, e desde o início, o que mais me agradou é ter um atendimento humano de qualidade e tecnologia para contratar um seguro de maneira simples e rápida."</p>
      <p className="mb-2">- Emma Silva</p>
    </div>

    <div className="border-b border-gray-500 w-full md:w-1"></div>

    <div className="text-gray-900 text-center max-w-screen-md w-full md:w-1/3">
      <p className="mb-2">"Explicam de uma forma clara e objetiva, me auxiliam nas dúvidas e estão dispostos a fazer sempre o melhor para nós consumidores. Amo e recomendo!"</p>
      <p className="mb-20">- Robson Souza</p>
    </div>
  </div>
</div>
   
{/*NEWSLETTER  ............................................................................ */}

<div className="bg-gray-200 h-auto p-8 mt-8 mx-auto max-w-2xl rounded-xl">
  <h2 className="text-indigo-950 text-4xl font-semibold mb-8 text-center">Newsletter</h2>
  <p className="text-indigo-900 text-lg mb-6 text-center">Assine nosso newsletter e mantenha-se atualizado.</p>
  
  <form action="#" method="post">
    <div className="flex flex-col items-center mb-10">
      <input
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        className="border p-2 w-full mb-4 rounded-lg"
      />
      <button
        type="submit"
        className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-md w-full"
      >
        Enviar
      </button>
    </div>
  </form>
</div>

<div className="my-8 md:my-60 mb-20"></div>
</div>

{/* RODAPÉ  ............................................................................ */}

<div id="contato" ref={contatoRef}>
  <footer className="bg-indigo-950 text-white p-8 md:ml-40">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Acelerados Corretora de Seguros</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Contato</h3>
          <p>Telefone: (3332-0348-58)</p>
          <p>Email: contato@aceleradosseguros.com.br</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-lg font-semibold mb-2 mt-4 md:mt-0">Endereço</h3>
          <p>Rua Portugal 583 Loja 01 Grã Duquesa</p>
          <p>Governador Valadares - MG, 35057-610</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-lg font-semibold mb-2 mt-4 md:mt-0">Atendimento</h3>
          <p>Segunda a Sexta: 08h às 18h</p>
          <p>Não atendemos em feriados nacionais.</p>
        </div>
      </div>
    </div>
  </footer>
</div>




 {/* MENU LATERAL  ............................................................................ */}
    
 <aside className="sidebar md:fixed md:bottom-0 md:left-0 md:right-0 bg-white p-4 md:block hidden">
  <nav className="side-menu non-style-list">
    <div className="logo-container">
      <img src="/assets/logo.jpg" alt="Logo" className="logo" />
    </div>
    <ul role="menubar" className="md:flex md:flex-col">
            <li role="menuitem" className="calculadora">
              <a onClick={() => openModal('simuleModal')}>
                <FaCalculator />
                <span >Simule online</span>
                
              </a>
            </li>
            <li role="menuitem" className="ligamos">
              <a onClick={() => openModal('ligamosModal')}>
                <FaPhone />
                <span>Nós te Ligamos</span>
              </a>
            </li>
            <li role="menuitem" className="whatsapp">
              <a onClick={() => openModal('whatsappModal')}>
                <FaWhatsapp />
                <span>Whatsapp</span>
              </a>
            </li>
            <li role="menuitem" className="ajuda">
              <a onClick={() => openModal('ajudaModal')}>
                <FaHeadset />
                <span>Central de Ajuda</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>



      <nav className="md:hidden">
  <div className="flex justify-center items-center p-6 bg-white fixed bottom-0 left-0 right-0">
    <div className="logo-container">

     </div>
    <div className="flex space-x-20">
      <a onClick={() => openModal('simuleModal')} className="flex flex-col items-center">
        <FaCalculator size={20} />
        <span className="text-indigo-950 font-semibold mt-2">Simule </span>
      </a>
      <a onClick={() => openModal('whatsappModal')} className="flex flex-col items-center">
        <FaWhatsapp size={23} />
        <span className="text-indigo-950 font-semibold mt-2">Whatsapp</span>
      </a>
      <a onClick={() => openModal('ajudaModal')} className="flex flex-col items-center">
        <FaHeadset size={23} />
        <span className="text-indigo-950 font-semibold mt-2">Central</span>
      </a>
    </div>
  </div>
</nav>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-4"></h2>
        {/* Conteúdo específico do modal com base no activeModal */}
        {activeModal === 'simuleModal' && <p>Conteúdo do modal de Simule online aqui...</p>}
        {activeModal === 'ligamosModal' && (
  <>
    <p className="text-center "> Deixe seu número de telefone e entraremos em contato:</p>
    
    <input
      type="tel"
      placeholder="Seu número de telefone"
      value={telefone}
      className="border p-2 w-64 mr-2 ml-40 rounded-lg "
      onChange={(e) => setTelefone(e.target.value)}
    />
    <button
    className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md"
     onClick={() => handleEnviarNumero()}>Enviar</button>
    
  </>
)}
        {activeModal === 'whatsappModal' && <p>Conteúdo do modal de Whatsapp aqui...</p>}
        {activeModal === 'ajudaModal' && <p>Telefone: (3332-0348-58)</p>}
      </Modal>
    </div>

  );
}

export default Home; 
