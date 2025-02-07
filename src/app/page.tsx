import Pagina from "@/components/templates/Pagina";
import FirstFlower from "@/assets/firstFlower.png";
import IACapa from "@/assets/projects/ia-capa.jpeg";
import GroupSTEM from "@/assets/groupStem.png";
import Fatec from "@/assets/fatec.png";
import Flower1 from "@/assets/flower.png";
import Flower2 from "@/assets/flower2.png";
import Image from "next/image";
import Link from "next/link";
import obterProjects from "@/data/service/obterProject";
import getMembers from "@/data/service/getMember";
import ScrollToTopButton from "./scrollBtn";

const projects = await obterProjects();
const members = await getMembers();

export default function Home() {
  return (
    <Pagina>
      <div
        className="mt-[120px] w-[80%] ml-auto mr-auto 2xl, xl, lg, md:flex justify-center items-center"
        id="welcome">
        <div className="flex justify-center">
          <Image
            src={FirstFlower}
            alt="flor"
            className="2xl:w-[360px] xl:w-[300px] lg:w-[250px] md:w-[220px] w-[150px]"
          />
        </div>

        <div className=" text-center 2xl, xl, lg, md:text-left 2xl, xl, lg, md:w-[50%] 2xl, xl, lg, md:ml-[2%]">
          <h1 className="text-[45px] 2xl:text-[75px] xl:text-[60px] lg:text-[50px] md:text-[35px] text[20px] font-bahianita">
            Girls in{" "}
            <span className="font-comforter text-[40px] 2xl:text-[75px] xl:text-[60px] lg:text-[45px] md:text-[30px] text-[#BF4E83]">
              STEM
            </span>
          </h1>
          <p className="2xl:text-[25px] lg:text-[18px] md:text-[14px]">
            Um estudo para estimular e desenvolver competências em STEM
            (Ciência, Tecnologia, Engenharia e Matemática) nas diversas etapas
            do ensino!
          </p>

          <br />

          <button className="bg-gradient-to-r from-[#bf4e83e1] to-[#000a90d4] px-6 py-2 text-white uppercase font-bold rounded-md">
            <Link href="#aboutUs" className="2xl:text-[25px] lg:text-[18px] md:text-[14px]">
              Saiba mais
            </Link>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image
          src={Flower1}
          alt="flor"
          className="w-[100px] 2xl:w-[200px] xl:w-[130px] lg:w-[120px] md:w-[110px]"
        />
      </div>

      <div id="stem">
        <h1 className="text-center text-[45px] 2xl:text-[75px] xl:text-[50px] lg:text-[40px] font-bahianita md:text-[30px]">
          O que é STEM?
        </h1>
        <div className="text-center">
          <p className="2xl:text-[25px] lg:text-[18px] md:text-[14px] ml-[10%] mr-[10%]">
            STEM é uma sigla em inglês que significa Science, Technology,
            Engineering, and Mathematics. Em português, traduzimos como Ciência,
            Tecnologia, Engenharia e Matemática. Mas o que isso significa?
          </p>
          <br />
          <p className="2xl:text-[25px] lg:text-[18px] md:text-[14px] ml-[10%] mr-[10%]">
            Imagine construir uma casa. Você precisa de um arquiteto
            (engenharia) para projetar a casa, um engenheiro civil para
            construir a estrutura, um eletricista (tecnologia) para instalar a
            fiação e um bom entendimento de materiais (ciência) para escolher os
            melhores tijolos, madeira e outros materiais. STEM une todas essas
            áreas para resolver problemas e criar soluções.
          </p>
          <br />
        </div>
        <div className="text-center 2xl, xl, lg, md:text-start">
          <h4 className="font-bahianita text-[45px] 2xl:text-[70px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-center">
            Por que a{" "}
            <span className="font-comforter text-[40px] 2xl:text-[65px] xl:text-[45px] lg:text-[35px] md:text-[25px] text-[#BF4E83]">
              STEM
            </span>{" "}
            existe?
          </h4>
          <li className="text-[16px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[14px] ml-[10%] mr-[10%]">
            <b>Mundo em constante mudança:</b> A tecnologia avança rapidamente e
            a STEM nos ajuda a entender e acompanhar essas mudanças.
          </li>
          <li className="text-[16px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[14px] ml-[10%] mr-[10%]">
            <b>Resolução de problemas:</b> Problemas complexos, como mudanças
            climáticas e doenças, exigem soluções criativas e interdisciplinares
            que a STEM pode oferecer.
          </li>
          <li className="text-[16px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[14px] ml-[10%] mr-[10%]">
            <b>Preparo para o futuro:</b> Profissionais com habilidades em STEM
            são muito procurados no mercado de trabalho.
          </li>
          <li className="text-[16px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[14px] ml-[10%] mr-[10%]">
            <b>Pensamento crítico:</b> A STEM incentiva o pensamento crítico, a
            resolução de problemas e a criatividade.
          </li>{" "}
          <br />
          <p className="text-[16px] text-center 2xl:text-[25px] lg:text-[18px] md:text-[14px] ml-[10%] mr-[10%]">
            Em resumo, a STEM é uma abordagem educacional que busca conectar as
            disciplinas de ciência, tecnologia, engenharia e matemática para
            preparar os estudantes para os desafios do século XXI.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image
          src={Flower2}
          alt="flor"
          className="w-[100px] 2xl:w-[200px] xl:w-[130px] lg:w-[120px]  md:w-[110px]"
        />
      </div>

      <div id="aboutUs">
        <h1 className="font-bahianita text-[45px] text-center 2xl:text-[70px] xl:text-[50px] lg:text-[40px] md:text-[30px]">
          Sobre Nós
        </h1>
        <p className="text-center 2xl:text-[25px] lg:text-[18px] md:text-[14px] ml-[10%] mr-[10%]">
          A educação em STEM tem sido chave para a transformação digital dos
          últimos tempos e prepara a galera para o mercado de trabalho, com
          carreiras que estão bombando. A Agenda 2030, que tem 17 Objetivos de
          Desenvolvimento Sustentável (ODS), fala sobre vários temas, incluindo
          educação (ODS 4) e <b>igualdade de gênero (ODS 5)</b>. Para alcançar
          esses objetivos, é essencial garantir mais igualdade nas oportunidades
          educacionais e no acesso das mulheres a carreiras em STEM.
        </p>
        <br />
        <p className="text-center 2xl:text-[25px] lg:text-[18px] md:text-[14px] ml-[10%] mr-[10%] mb-[15px]">
          Este projeto tem como objetivo fortalecer as habilidades de mulheres
          em STEM e incentivá-las a entrar nesse mercado. Vamos investigar como
          estimular o desenvolvimento delas desde as primeiras fases da
          educação, começando com um grupo de estudo na Fatec Jahu e expandindo
          para escolas de ensino médio e básico. A ideia é motivar mais mulheres
          a seguir essa área e ajudar a diminuir a desigualdade de gênero tanto
          nas escolas quanto no mercado de trabalho.
        </p>
        <div className="2xl, xl, lg, md:flex">
          <div className="ml-[10%] mr-[10%] 2xl, xl, lg, md:flex mt-[10px] 2xl, xl, lg, md:ml-[10%]">
            <Image
              src={GroupSTEM}
              alt="STEM"
              className="w-[200px] ml-auto mr-auto 2xl:w-[350px] xl:w-[220px] lg:w-[230px] lg:h-[300px]"
            />

            <div className="text-center 2xl, xl, lg, md:text-start  ml-[5%] mr-[10%] list-inside upper-roman">
              <h2 className="text-[20px] mt-[5px] 2xl:text-[30px] xl:text-[20px] lg:text-[20px] md:text-[13px] font-bold">Nosso Objetivo: </h2>

              <li className="text-[16px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[14px]">
                Mostrar para as mulheres que elas podem, sim, seguir carreiras
                em STEM com a mesma confiança que os homens;
              </li>
              <li className="text-[16px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[14px]">
                Conscientizar os homens, especialmente os gestores, a contratar
                mulheres para cargos em STEM sem preconceitos de gênero;
              </li>
              <li className="text-[16px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[14px]">
                Apresentar mulheres inspiradoras de STEM, tanto do Brasil quanto
                do mundo, como referências;
              </li>
              <li className="text-[16px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[14px]">
                Garantir que as meninas tenham experiências positivas e
                envolventes em aulas de STEM desde cedo;
              </li>
              <li className="text-[16px] 2xl:text-[25px] xl:text-[18px] lg:text-[18px] md:text-[14px]">
                Quebrar o estereótipo de que meninas devem brincar com bonecas e
                meninos com carros, incentivando todos a explorar o que
                quiserem!
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image
          src={Flower1}
          alt="flor"
          className="w-[100px] 2xl:w-[200px] xl:w-[130px] lg:w-[120px]  md:w-[110px]"
        />
      </div>

      <div id="fatecJahu">
        <h1 className="text-[45px] font-bahianita text-center 2xl:text-[70px] xl:text-[50px] lg:text-[40px] md:text-[30px]">
          Fatec Jahu
        </h1>
        <div className="flex justify-center mb-[20px]">
          <Image src={Fatec} alt="STEM" className="w-[300px] 2xl:w-[900px] xl:w-[700px] lg:w-[600px] md:w-[400px]"/>
        </div>
        <div className="text-center mr-[10%] ml-[10%]">
          <p className="2xl:text-[25px] lg:text-[18px] md:text-[14px]">
            A FATEC Jahu é uma instituição pública de ensino superior localizada
            na cidade de Jaú, interior de São Paulo, e oferece cursos de
            graduação tecnológica em áreas como Análise e Desenvolvimento de
            Sistemas, Gestão da Tecnologia da Informação, Logística e Processos
            Gerenciais. Seu objetivo é formar profissionais capacitados com
            habilidades práticas e teóricas voltadas para o mercado de trabalho.
          </p>{" "}
          <br />
          <p className="2xl:text-[25px] lg:text-[18px] md:text-[14px]">
            A faculdade é parte do Sistema FATEC, vinculado ao Centro Paula
            Souza, e foca em uma formação que integra teoria e prática, com
            infraestrutura moderna, incluindo salas de aula e laboratórios
            especializados. Além disso, promove atividades extracurriculares
            como palestras, eventos e parcerias com empresas, proporcionando aos
            alunos uma experiência mais próxima do mercado profissional.
          </p>{" "}
          <br />
          <p className="2xl:text-[25px] lg:text-[18px] md:text-[14px]">
            Com um corpo docente qualificado e uma abordagem pedagógica centrada
            no desenvolvimento de competências técnicas, a FATEC Jahu prepara os
            alunos para enfrentar os desafios do mercado de trabalho em setores
            tecnológicos e empresariais, oferecendo uma educação de qualidade em
            um ambiente de aprendizado dinâmico.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image
          src={Flower2}
          alt="flor"
          className="w-[100px] 2xl:w-[200px] xl:w-[130px] lg:w-[120px] md:w-[110px]"
        />
      </div>

      <div id="projects">
        <h1 className="text-[45px] text-center 2xl:text-[70px] xl:text-[50px] lg:text-[40px] md:text-[30px] font-bahianita">
          Projetos
        </h1>
        <div className="flex justify-center">
          <div className="flex z-0">
            {projects &&
              projects.map((project) => (
                <div className="2xl:w-[260px] 2xl:h-[340px] mt-[10px] mr-auto z-0 p-2">
                  <Link href={`/projects/${project.id}`}>
                    <div>
                      <div className="relative w-[160px] h-[210px] 2xl:w-[260px] h-[340px] rounded-[8px] mt-[10px] text-center bg-[#ffb4b4] hover:bg-[#BF4E83]/80 duration-200 ease-in-out">
                        <Image
                          src={project.image}
                          className="rounded-[8px] bg-[#BF4E83] object-cover opacity-35 z-0"
                          alt="capa"
                          width={160}
                          height={240}
                        />
                        <h3 className="absolute top-[50%] bottom-[50%] font-arya text-[25px] text-center text-black font-bold uppercase justify-center">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[50px] mb-[50px]">
        <Image
          src={Flower1}
          alt="flor"
          className="w-[100px] 2xl:w-[200px] xl:w-[130px] lg:w-[120px]  md:w-[110px]" 
        />
      </div>

      <div id="members">
        <h1 className="text-[45px] text-center 2xl:text-[70px] xl:text-[50px] lg:text-[40px] md:text-[30px] font-bahianita">
          Membros
        </h1>
        <div className="flex justify-center">
          <div className="flex justify-center w-min">
            {members.map((member) => (
              <div className="p-2">
                <div className="w-[150px] h-[150px] rounded-full mt-[10px]text-center bg-[#ffb4b4]"></div>
                <h3
                  key={member.id}
                  className="mt-[10px] text-center text-black font-bold font-arya text-[22px]"
                >
                  {member.name}
                </h3>
                <h5
                  key={member.id}
                  className="mt-[10px] text-center text-black"
                >
                  {member.description}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />

      <ScrollToTopButton />
    </Pagina>
  );
}
