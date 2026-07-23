import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SlideUp } from "@/animations";
import { Stethoscope, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import doutor1 from "@/assets/Doutor1.png";
import doutor2 from "@/assets/Doutor2.png";
import doutor3 from "@/assets/Doutor3.png";
import doutor4 from "@/assets/Doutor4.png";

const whatsappNumber = "45999999999";

const teamMembers = [
  {
    id: 1,

    name: "Dr. Cícero Fernando Bertoli",

    crm: "CRM 9528-PR",

    image: doutor1,

    about:
      "Formado em Medicina pela Faculdade Evangélica de Curitiba em 1984, o Dr. Cícero Fernando Bertoli possui mais de quatro décadas de experiência dedicadas ao diagnóstico e tratamento das doenças do aparelho digestivo.",

    specialties: [
      "Gastroenterologia",
      "Clínica e Cirurgia",
      "Endoscopia Digestiva",
      "Motilidade Digestiva",
    ],

    education: [
      "Medicina – Faculdade Evangélica de Curitiba (1984)",
      "Residência Médica em Cirurgia Geral (1986)",
      "Mestre em Cirurgia – UFPR",
      "Doutor em Cirurgia – UFPR",
    ],

    whatsapp:
      "Olá, gostaria de agendar uma consulta com o Dr. Cícero Fernando Bertoli.",
  },

  {
    id: 2,

    name: "Dr. Lyrio Cesar Bertoli",

    crm: "CRM 8522-PR",

    image: doutor2,

    about:
      "Formado em Medicina pela Faculdade Evangélica do Paraná em 1982, o Dr. Lyrio Cesar Bertoli possui mais de quatro décadas de experiência dedicadas à Cirurgia Geral, Cirurgia do Aparelho Digestivo e procedimentos minimamente invasivos, oferecendo atendimento preciso, seguro e baseado nas melhores práticas médicas.",

    specialties: [
      "Cirurgia do Aparelho Digestivo",
      "Cirurgia Geral",
      "Videolaparoscopia",
      "Motilidade Digestiva",
      "Endoscopia e Colonoscopia",
    ],

    education: [
      "Medicina – Faculdade Evangélica do Paraná (1982)",
      "Residência Médica em Cirurgia Geral – Hospital FEPAR (1982–1984)",
      "Mestre em Cirurgia – UFPR",
      "Doutor em Cirurgia – UFPR",
    ],

    whatsapp:
      "Olá, gostaria de agendar uma consulta com o Dr. Lyrio Cesar Bertoli.",
  },

  {
    id: 3,

    name: "Dr. Mohamad Walid Omairi",

    crm: "CRM 2916-PR",

    image: doutor3,

    about:
      "Formado em Medicina pela Universidade do Oeste Paulista, o Dr. Mohamad Walid Omairi é especialista em Cirurgia Geral, Cirurgia do Aparelho Digestivo e Cirurgia Bariátrica, com ampla experiência em procedimentos minimamente invasivos e robóticos, oferecendo atendimento seguro, humanizado e baseado nas mais modernas técnicas cirúrgicas.",

    specialties: [
      "Cirurgia Bariátrica",
      "Cirurgia do Aparelho Digestivo",
      "Cirurgia Geral",
      "Cirurgia Robótica",
      "Cirurgia Minimamente Invasiva",
    ],

    education: [
      "Medicina – Universidade do Oeste Paulista",
      "Residência/Especialização em Cirurgia Geral – Hospital da Real e Benemérita Sociedade Portuguesa de Beneficência de São Paulo",
      "Especialização em Cirurgia do Aparelho Digestivo – Hospital da Real e Benemérita Sociedade Portuguesa de Beneficência de São Paulo",
      "Especialização em Cirurgia Bariátrica – Prof. Garrido",
    ],

    whatsapp:
      "Olá, gostaria de agendar uma consulta com o Dr. Mohamad Walid Omairi.",
  },

  {
    id: 4,

    name: "Dr. Wilson Marcelo Bertoli",

    crm: "CRM 11371-PR",

    image: doutor4,

    about:
      "Formado em Medicina pela Universidade Federal do Paraná em 1988, o Dr. Wilson Marcelo Bertoli possui mais de três décadas de experiência dedicadas à Ginecologia, Obstetrícia e Diagnóstico por Imagem, com atuação especializada em Ultrassonografia Geral, oferecendo atendimento preciso, humanizado e apoiado por tecnologia de ponta.",

    specialties: [
      "Ginecologia",
      "Obstetrícia",
      "Ultrassonografia Geral",
      "Ultrassonografia Obstétrica",
      "Ultrassonografia Ginecológica",
      "Ultrassonografia Abdominal",
      "Ultrassonografia de Tireoide",
    ],

    education: [
      "Medicina – Universidade Federal do Paraná (1988)",
      "Especialista em Ginecologia e Obstetrícia (RQE 9734)",
      "Especialista em Diagnóstico por Imagem – Ultrassonografia Geral (RQE 13847)",
    ],

    whatsapp:
      "Olá, gostaria de agendar uma consulta com o Dr. Wilson Marcelo Bertoli.",
  },
];

const Team = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<
    (typeof teamMembers)[0] | null
  >(null);

  return (
    <section id="team" className="relative overflow-hidden py-28 bg-[#FCFCFB]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.span
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-(--gray-dark)"
          >
            Profissionais
          </motion.span>

          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-4 mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-(--gray-medium)"
          >
            Médicos altamente <br /> qualificados
          </motion.h2>

          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="hairline mt-9 mx-auto w-32"
          ></motion.div>
        </div>

        {/* ========================= */}
        {/* MÉDICOS */}
        {/* ========================= */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => {
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              member.whatsapp,
            )}`;

            return (
              <motion.div
                key={member.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Card
                  className="
                  group
                  flex
                  h-full
                  min-h-[640px]
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-(--border)
                  bg-white
                  shadow-[0 12px 30px rgba(0,0,0,.06)]
                  transition-all
                  duration-300
                  hover:shadow-[0_15px_40px_rgba(13,178,107,.14)]
                  "
                >
                  {/* FOTO */}

                  <div className="relative overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="
                      aspect-4/5
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                      "
                    />

                    {/* Overlay */}

                    <div
                      className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/45
                      via-transparent
                      to-transparent
                      "
                    />

                    {/* CRM */}

                    <div
                      className="
                      absolute
                      top-2
                      right-1
                      rounded-full
                      border
                      border-white/15
                      bg-black/25
                      text-white
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      shadow-lg                      
                      "
                    >
                      {member.crm}
                    </div>
                  </div>

                  {/* CONTEÚDO */}

                  <CardContent className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl font-medium leading-snug">
                      {member.name}
                    </h3>

                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-full border
                              bg-(--secondary-light)
                            border-[#B7E9D2]
                            text-[#0B8F57]
                              px-4
                              py-2
                              text-xs
                              font-medium
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* BOTÕES */}

                    <div className="mt-auto pt-10 space-y-3">
                      <Button
                        onClick={() => setSelectedDoctor(member)}
                        variant="outline"
                        className="
                          group
                          cursor-pointer
                          w-full
                          rounded-full
                          border-(--primary)
                        bg-white
                          text-(--primary)
                          transition-all
                          duration-300
                          hover:bg-(--secondary-light)
                          hover:border-(--primary-dark)
                          hover:text-(--primary-dark-medium)
                      "
                      >
                        <Stethoscope size={18} className="mr-2" />
                        Conheça o médico
                      </Button>

                      <Button
                        asChild
                        className="
                        w-full   
                        p-6   
                        cursor-pointer                 
                        rounded-full
                        text-white
                        bg-(--primary)
                        hover:bg-(--primary-dark-medium)
                        "
                      >
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Agendar consulta
                          <FaWhatsapp className="ml-2 size-6" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* ========================= */}
        {/* MODAL MÉDICO */}
        {/* ========================= */}

        <Dialog
          open={!!selectedDoctor}
          onOpenChange={() => setSelectedDoctor(null)}
        >
          <DialogContent className="flex max-w-6xl w-[95vw] h-[88vh] overflow-hidden rounded-[42px] bg-white p-0 z-100">
            {selectedDoctor && (
              <div className="grid h-full lg:grid-cols-[38%_62%]">
                {/* FOTO */}

                <div className="relative h-full overflow-hidden">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="
                    h-full
                    w-full
                    object-cover                    
                    "
                  />

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/35
                    via-transparent
                    to-transparent
                    "
                  />
                </div>

                <div className="flex h-full min-h-0 flex-col">
                  {/* HEADER FIXO */}

                  <div className="border-b border-(--border) px-10 py-6 mb-6">
                    <DialogHeader>
                      <DialogTitle className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                        {selectedDoctor.name}
                      </DialogTitle>

                      <DialogDescription className="font-semibold text-(--primary)">
                        {selectedDoctor.crm}
                      </DialogDescription>
                    </DialogHeader>
                  </div>

                  {/* CONTEÚDO COM SCROLL */}
                  <div
                    className="
                        min-h-0
                        flex-1
                        overflow-y-auto
                        px-10
                        
                        [&::-webkit-scrollbar]:hidden
                        scrollbar-width-none
                      "
                  >
                    <span className="text-lg leading-9 text-(--gray-medium)">
                      {selectedDoctor.about}
                    </span>

                    <div className="mt-10">
                      <h3 className="text-xl font-semibold">Especialidades</h3>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {selectedDoctor.specialties.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-full border
                              bg-(--secondary-light)
                            border-[#B7E9D2]
                            text-[#0B8F57]
                              px-4
                              py-2
                              text-sm
                              font-medium
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-xl font-semibold">
                        Formação Acadêmica
                      </h3>

                      <div className="mt-5 space-y-3">
                        {selectedDoctor.education.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <GraduationCap className="min-w-6 min-h-6 mt-1 text-(--primary)" />

                            <span className="leading-7 text-(--gray-medium)">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className=" bg-white p-6">
                    <Button
                      asChild
                      className="                   
                        h-12
                        w-full
                        rounded-full
                        bg-(--primary)
                        text-white
                        text-lg
                        hover:bg-(--primary-dark-medium)
                      "
                    >
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          selectedDoctor.whatsapp,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar consulta
                        <FaWhatsapp className="ml-2 size-8" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Team;
