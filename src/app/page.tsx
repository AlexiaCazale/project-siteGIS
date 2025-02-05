import Pagina from "@/components/templates/Pagina";
import FirstFlower from "@/assets/firstFlower.png";
import GroupSTEM from "@/assets/groupStem.png";
import Fatec from "@/assets/fatec.png";
import Flower1 from "@/assets/flower.png";
import Flower2 from "@/assets/flower2.png";
import Image from "next/image";
import Link from "next/link";
import obterProjects from "@/data/service/obterProject";
import getMembers from "@/data/service/getMember";
// import ProjectItem from "@/components/projeto/ProjectItem";

const projects = await obterProjects();
const members = await getMembers();

export default function Home() {
  return (
    <Pagina>
      <div className="mt-[100px] flex justify-center" id="welcome">
        <div className="flower">
          <Image
            src={FirstFlower}
            alt="flor"
            width={350}
            className="mr-[80px]"
          />
        </div>

        <div className="text-left mr-[150px] mt=[70px]">
          <h1 className="text-[70px] font-bahianita mt-[20px]">
            Girls in <span className="font-comforter text-[#BF4E83]">STEM</span>
          </h1>
          <p>
            Um estudo para estimular e desenvolver competências em STEM
            (Ciência, Tecnologia, Engenharia e Matemática) nas diversas etapas
            do ensino!
          </p>

          <br />

          <button className="bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] px-6 py-2 text-white uppercase font-bold rounded-md">
            <Link href="#aboutUs">Saiba mais</Link>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image src={Flower1} alt="flor" width={150} />
      </div>

      <div id="stem">
        <h1 className="text-center text-[50px] font-bahianita">
          O que é STEM?
        </h1>
        <div className="text-center mr-[220px] ml-[220px]">
          <p>
            STEM é uma sigla em inglês que significa Science, Technology,
            Engineering, and Mathematics. Em português, traduzimos como Ciência,
            Tecnologia, Engenharia e Matemática. Mas o que isso significa?
          </p>{" "}
          <br />
          <p>
            Imagine construir uma casa. Você precisa de um arquiteto
            (engenharia) para projetar a casa, um engenheiro civil para
            construir a estrutura, um eletricista (tecnologia) para instalar a
            fiação e um bom entendimento de materiais (ciência) para escolher os
            melhores tijolos, madeira e outros materiais. STEM une todas essas
            áreas para resolver problemas e criar soluções.
          </p>{" "}
          <br />
        </div>
        <div className="text-start mr-[220px] ml-[220px]">
          <h4 className="font-bahianita text-[30px] text-center">
            Por que a{" "}
            <span className="font-comforter text-[#BF4E83]">STEM</span> existe?
          </h4>
          <li>
            <b>Mundo em constante mudança:</b> A tecnologia avança rapidamente e
            a STEM nos ajuda a entender e acompanhar essas mudanças.
          </li>
          <li>
            <b>Resolução de problemas:</b> Problemas complexos, como mudanças
            climáticas e doenças, exigem soluções criativas e interdisciplinares
            que a STEM pode oferecer.
          </li>
          <li>
            <b>Preparo para o futuro:</b> Profissionais com habilidades em STEM
            são muito procurados no mercado de trabalho.
          </li>
          <li>
            <b>Pensamento crítico:</b> A STEM incentiva o pensamento crítico, a
            resolução de problemas e a criatividade.
          </li>{" "}
          <br />
          <p className="text-center">
            Em resumo, a STEM é uma abordagem educacional que busca conectar as
            disciplinas de ciência, tecnologia, engenharia e matemática para
            preparar os estudantes para os desafios do século XXI.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image src={Flower2} alt="flor" width={150} />
      </div>

      <div id="aboutUs">
        <h1 className="text-center text-[50px] font-bahianita">Sobre Nós</h1>
        <p className="text-center mr-[220px] ml-[220px]">
          A educação em STEM tem sido chave para a transformação digital dos
          últimos tempos e prepara a galera para o mercado de trabalho, com
          carreiras que estão bombando. A Agenda 2030, que tem 17 Objetivos de
          Desenvolvimento Sustentável (ODS), fala sobre vários temas, incluindo
          educação (ODS 4) e <b>igualdade de gênero (ODS 5)</b>. Para alcançar
          esses objetivos, é essencial garantir mais igualdade nas oportunidades
          educacionais e no acesso das mulheres a carreiras em STEM.
        </p>
        <br />
        <p className="text-center mr-[220px] ml-[220px]">
          Este projeto tem como objetivo fortalecer as habilidades de mulheres
          em STEM e incentivá-las a entrar nesse mercado. Vamos investigar como
          estimular o desenvolvimento delas desde as primeiras fases da
          educação, começando com um grupo de estudo na Fatec Jahu e expandindo
          para escolas de ensino médio e básico. A ideia é motivar mais mulheres
          a seguir essa área e ajudar a diminuir a desigualdade de gênero tanto
          nas escolas quanto no mercado de trabalho.
        </p>
        <div className="flex">
          <div className="flex mt-[10px] ml-[200px]">
            <Image src={GroupSTEM} alt="STEM" width={210} />

            <div className="mt-[20px] ml-[20px] mr-[220px] list-inside upper-roman">
              <h2 className="font-bold">Nosso Objetivo: </h2>
              <li>
                Mostrar para as mulheres que elas podem, sim, seguir carreiras
                em STEM com a mesma confiança que os homens;
              </li>
              <li>
                Conscientizar os homens, especialmente os gestores, a contratar
                mulheres para cargos em STEM sem preconceitos de gênero;
              </li>
              <li>
                Apresentar mulheres inspiradoras de STEM, tanto do Brasil quanto
                do mundo, como referências;
              </li>
              <li>
                Garantir que as meninas tenham experiências positivas e
                envolventes em aulas de STEM desde cedo;
              </li>
              <li>
                Quebrar o estereótipo de que meninas devem brincar com bonecas e
                meninos com carros, incentivando todos a explorar o que
                quiserem!
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image src={Flower1} alt="flor" width={150} />
      </div>

      <div id="fatecJahu">
        <h1 className="text-center text-[50px] font-bahianita">Fatec Jahu</h1>
        <div className="flex justify-center mb-[20px]">
          <Image src={Fatec} alt="STEM" width={700} />
        </div>
        <div className="text-center mr-[220px] ml-[220px]">
          <p>
            A FATEC Jahu é uma instituição pública de ensino superior localizada
            na cidade de Jaú, interior de São Paulo, e oferece cursos de
            graduação tecnológica em áreas como Análise e Desenvolvimento de
            Sistemas, Gestão da Tecnologia da Informação, Logística e Processos
            Gerenciais. Seu objetivo é formar profissionais capacitados com
            habilidades práticas e teóricas voltadas para o mercado de trabalho.
          </p>{" "}
          <br />
          <p>
            A faculdade é parte do Sistema FATEC, vinculado ao Centro Paula
            Souza, e foca em uma formação que integra teoria e prática, com
            infraestrutura moderna, incluindo salas de aula e laboratórios
            especializados. Além disso, promove atividades extracurriculares
            como palestras, eventos e parcerias com empresas, proporcionando aos
            alunos uma experiência mais próxima do mercado profissional.
          </p>{" "}
          <br />
          <p>
            Com um corpo docente qualificado e uma abordagem pedagógica centrada
            no desenvolvimento de competências técnicas, a FATEC Jahu prepara os
            alunos para enfrentar os desafios do mercado de trabalho em setores
            tecnológicos e empresariais, oferecendo uma educação de qualidade em
            um ambiente de aprendizado dinâmico.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image src={Flower2} alt="flor" width={150} />
      </div>

      <div id="projects">
        <h1 className="text-center text-[50px] font-bahianita">Projetos</h1>
        <div className="flex justify-center">
          <div className="flex">
            {projects &&
              projects.map((project) => (
                <div className="w-[160px] h-[240px] rounded-[8px] mt-[10px] mr-[15px] text-center bg-[#ffb4b4]">
                  <h3
                    key={project.id}
                    className="font-arya text-[25px] text-white font-bold"
                  >
                    {project.name}
                  </h3>
                  {/* <Link to={`/projects/${project.id}`}>Detalhes</Link> */}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image src={Flower1} alt="flor" width={150} />
      </div>

      <div id="members">
        <h1 className="text-center text-[50px] font-bahianita">Membros</h1>
        <div className="flex justify-center">
          <div className="flex justify-center w-[200px]">
            {members.map((member) => (
              <div className="member">
                <div className="w-[180px] h-[180px] rounded-full mt-[10px] mr-[15px] text-center bg-[#ffb4b4]"></div>
                <h3 key={member.id} className="mt-[10px] mr-[15px] text-center text-black font-bold font-arya text-[22px]">{member.name}</h3>
                <h5 key={member.id} className="mt-[10px] mr-[15px] text-center text-black">{member.description}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>

    </Pagina>
  );
}
