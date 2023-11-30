import Image from 'next/image';
import { FaCalculator, FaPhone, FaWhatsapp, FaHeadset, FaCarCrash, FaLock, FaFire } from 'react-icons/fa';
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
            <script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js " defer></script>
         </Head>

         <div className="top-menu flex items-right justify-end lg:flex lg:flex-row flex-col ">
        <p className={`mr-5 text-lg  p-2 ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleMenuClick('home')}>
          <a href="#home">Home</a>
        </p>

        <p className={`mr-5 text-lg p-2 ${activeSection === 'seguros' ? 'active' : ''}`} onClick={() => handleMenuClick('seguros')}>
          <a href="#seguros">Seguros</a>
        </p>
      
        
        <p className={`mr-5 text-lg p-2 ${activeSection === 'contato' ? 'active' : ''}`} onClick={() => handleMenuClick('contato')}>
          <a href="#contato">Contato</a>
        </p>
       
       
        <p className={`mr-5 text-lg p-2 ${activeSection === 'SobreNos' ? 'active' : ''}`} onClick={() => handleMenuClick('SobreNos')}>
          <a href="#SobreNos">Sobre Nós</a>
        </p>
         
        
        <p className={`mr-5 text-lg p-2 ${activeSection === 'empresas' ? 'active' : ''}`} onClick={() => handleMenuClick('empresas')}>
          <a href="#empresas">Para Empresas</a>
        </p>
        
       
        <p className={`mr-5 text-lg p-2 ${activeSection === 'cote' ? 'active' : ''}`} onClick={() => handleMenuClick('cote')}>
          <a href="#cote">Cote Agora</a> 
        </p>

      </div>




      <div id="home" ref={homeRef}>
      <div className="relative h-screen">
      <img src="/assets/home.jpg" alt="Imagem da Página Inicial" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-4 flex flex-col items-left justify-end text-left p-20 ml-20">
        <div className="mb-4">
          <h1 className="text-white text-6xl font-bold  mb-1 custom-text-shadow tracking-tight">Assegure seu futuro</h1>
          <h1 className="text-white text-6xl font-bold mb-1 custom-text-shadow tracking-tight">com apenas alguns</h1>
          <h1 className="text-white text-6xl font-bold mb-4 custom-text-shadow tracking-tight">cliques</h1>
          <h1 className="text-white text-2xl font-bold  custom-text-shadow">Obtenha resultados na hora</h1>
        </div>
        <div>
        <button className="bg-yellow-300 rounded-xl px-9 py-5 mt-1 text-indigo-950 font-bold text-2xl">
        Simule Online
      </button>

          
        </div>
      </div>
    </div>

    


</div>


 {/* SEGUROS AUTO  ............................................................................ */}

 <div id="seguros" ref={segurosRef}>

    <div className="flex flex-wrap">
  {/* Metade da tela azul */}
  <div className="flex-1 bg-indigo-950 text-white p-20 flex items-right">
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
  <div className="w-24 h-24 bg-white rounded flex flex-col items-center justify-center text-indigo-950 font-bold">
  <FaLock size={24}  />
    <p className="mt-2">Roubo<br />e furto</p>
  </div>
  <div className="w-24 h-24 bg-white rounded flex flex-col items-center justify-center text-indigo-950 font-bold">
    <FaCarCrash size={34} style={{ marginBottom: '0' }} />
    <p className="mt-2">Colisões</p>
  </div>
  <div className="w-24 h-24 bg-white rounded flex flex-col items-center justify-center text-indigo-950 font-bold">
    <FaFire size={24} />
    <p className="mt-2">Incêndio</p>
  </div>
  <div className="w-24 h-24 bg-white rounded flex flex-col items-center justify-center text-indigo-950 font-bold">
    <FaHeadset size={25} style={{ marginBottom: '0' }} />
    <p className="mt-2">Assistência<br />24 horas</p>
        </div>
      </div>   
    </div>
  </div>
</div>
  

 {/* SEGUROS PARA VOCE  ............................................................................ */}



<div className="w-full bg-indigo-950 p-10 text-white mt-40">
  <div className="flex flex-wrap">
    {/* Conteúdo do retângulo azul */}
    <div className="text-left mt-8 ml-40">
      <h2 className="text-white text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">Todos os Seguros </h2>
      <h2 className="text-white text-5xl font-bold mb-2 custom-text-shadow tracking-tigh">que oferecemos</h2>
      <h2 className="text-yellow-300 text-5xl font-bold mb-4 custom-text-shadow tracking-tigh">para você</h2>

      {/* Botão arredondado amarelo "Simule Online" */}
      <button className="bg-yellow-300 rounded-full px-6 py-3 mt-4 text-indigo-950 font-bold">
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


 {/* SERVIÇOS CORPORATIVOS  ............................................................................ */}

 
 <div id="empresas" ref={empresasRef}>

 

<div className="w-full bg-indigo-950 p-10 text-white mt-40">
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
</div>

  {/* Quatro imagens abaixo do contêiner azul */}
<div className="flex justify-centergrid gap-8 ml-60 ">
  {/* Imagem 1 */}
  <div className="relative w-64 h-64">
  <img src="/assets/seguroSaude.jpg" alt="Imagem 1" className="w-full h-full object-cover rounded-lg filter brightness-75" />
    <p className="absolute bottom-20 left-3 text-white text-left font-bold text-3xl p-2">Seguro Saúde</p>
  </div>

  {/* Imagem 2 */}
  <div className="relative w-64 h-64">
    <img src="/assets/Segurovida.jpg" alt="Imagem 2" className="w-full h-full object-cover rounded-lg filter brightness-75" />
    <p className="absolute bottom-20 left-3 text-white text-left font-bold text-3xl p-2">Seguro de Vida</p>
  </div>

  {/* Imagem 3 */}
  <div className="relative w-64 h-64">
    <img src="/assets/seguroEmpresa.jpg" alt="Imagem 3" className="w-full h-full object-cover rounded-lg filter brightness-75" />
    <p className="absolute bottom-11 left-3 text-white text-left font-bold text-3xl p-2">Seguro para Empresas</p>
  </div>

  {/* Imagem 4 */}
  <div className="relative w-64 h-64">
    <img src="/assets/Responsabilidade.jpg" alt="Imagem 4" className="w-full h-full object-cover rounded-lg filter brightness-75" />
    <p className="absolute bottom-2 left-3 text-white text-left font-bold text-3xl p-2">Seguro Responsabilidade Civil</p>
  </div>
</div>





 {/* QUEM SOMOS ............................................................................ */}

 <div id="SobreNos" ref={SobreNosRef}>
  {/* Espaço em branco */}
  <div className="my-60"></div>

  <div id="SobreNos" ref={SobreNosRef}>
  <div className="flex flex-wrap mt-40">
    {/* Imagem à esquerda */}
    <img src="/assets/Quemsomos.jpg" alt="Imagem" className="w-100 h-80 ml-60 mt-20" />

  {/* Conteúdo à direita */}
  <div className="w-1/2 p-10 ml-20">
      {/* Título "Por que fazer seu seguro na Acelerados?" */}
      <h2 className="text-5xl text-indigo-950 font-extrabold mb-1 text-right">
        Por que fazer
      </h2>
      <h2 className="text-5xl text-indigo-950 font-extrabold mb-1 text-right">
        seguro na
      </h2>
      <h2 className="text-5xl text-yellow-300 font-extrabold mb-6 text-right">
        Acelerados?
      </h2>


    {/* Texto */}
    <div className="text-lg text-indigo-950 text-right font-semibold">
        <p className="mb-0">Fazer seu seguro na Acelerados é a escolha inteligente para</p>
        <p className="mb-0">proteger o que realmente importa. Oferecemos soluções confiáveis,</p>
        <p className="mb-0">atendimento personalizado e preços competitivos. Sua segurança está</p>
        <p className="mb-0">em boas mãos conosco. Temos o compromisso de atender nossos</p>
        <p className="mb-0">clientes de forma ágil e humanizada. Assim, conquistamos</p>
        <p className="mb-10">a cada dia a confiança e preferência das pessoas.</p>
      </div>

    {/* Botão "Simule Online"
    <button className="bg-yellow-300 rounded-full px-6 py-3 mt-4 text-gray-900 font-bold mb-10">
      Simule Online
    </button> */}
  </div>
</div>
</div>


 {/* DEPOIMENTOS DE CLIENTES  ............................................................................ */}

 <div className="text-center mt-24">
  <h2 className="text-indigo-950 text-2xl font-normal mb-6 ml-40">
    Depoimentos de Clientes
  </h2>
 
  <div className="flex justify-center items-start mt-10 space-x-10">
    <div className="text-gray-900 text-center max-w-screen-lg w-full ml-40">
      <p className="mb-4">"A Equipe é muito prestativa, competente e sempre me auxilia nos momentos em que preciso tomar decisões importantes sobre proteção para o meu patrimônio e para minha família."</p>
      <p className="mb-4">- Lorena Cardoso</p>
    </div>


    <div className="bg-gray-500 h-20 w-1 my-2"></div>

<div className="text-gray-900 text-center max-w-screen-lg w-full">
  <p className="mb-4">"Sou cliente há alguns anos, e desde o início, o que mais me agradou é ter um atendimento humano de qualidade e tecnologia para contratar um seguro de maneira simples e rápida."</p>
  <p className="mb-4">- Emma Silva</p>
</div>

<div className="bg-gray-500 h-20 w-1 my-2"></div>

<div className="text-gray-900 text-centert max-w-screen-lg w-full mb-40">
  <p className="mb-4">"Explicam de uma forma clara e objetiva, me auxiliam nas dúvidas e estão dispostos a fazer sempre o melhor para nós consumidores. Amo e recomendo!"</p>
  <p className="mb-4">- Robson Souza</p>
</div>
  </div>
  </div>
   
{/*NEWSLETTER  ............................................................................ */}


<div className="bg-gray-200 h-auto p-8 mt-8 mx-auto max-w-2xl rounded-xl ">
  <h2 className="text-indigo-950 text-4xl font-semibold mb-8 text-center">Newsletter</h2>
  <p className="text-indigo-900 text-lg mb-10 text-center">Assine nosso newsletter e mantenha-se atualizado.</p>
  
  <form action="#" method="post">
    <div className="flex items-center mb-10">
      <input type="email" name="email" placeholder="Digite seu e-mail" className="border p-2 w-64 mr-2 ml-40 rounded-lg" />
      <button type="submit" className="bg-yellow-300 text-gray-900 px-4 py-2 rounded-md">Enviar</button>
    </div>
  </form>
</div>


<div className="my-60"></div>
</div>


 <div className="container mx-auto">

   
 </div>

{/* RODAPÉ  ............................................................................ */}

<div id="contato" ref={contatoRef}>
    <footer className="bg-indigo-950 text-white p-8 ml-40">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Acelerados Corretora de Seguros</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2 ">Contato</h3>
            <p>Telefone: (3332-0348-58)</p>
            <p>Email: contato@aceleradosseguros.com.br</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Endereço</h3>
            <p>Rua Portugal 583 Loja 01 Grã Duquesa</p>
            <p>Governador Valadares - MG, 35057-610</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Atendimento</h3>
            <p>Segunda a Sexta: 08h às 18h</p>
            <p>Não atendemos em feriados nacionais.</p>
          </div>
        </div>
      </div>
    </footer>

  </div>




 {/* MENU LATERAL  ............................................................................ */}
    
 <aside className="sidebar hidden lg:block">
 
        <nav className="side-menu non-style-list">
         <div className="logo-container">
        <img src="/assets/logo.jpg" alt="Logo" className="logo" />
      </div>
       <ul role="menubar">
            <li role="menuitem" className="calculadora">
              <a onClick={() => openModal('simuleModal')}>
                <FaCalculator />
                <span>Simule online</span>
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
