import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface question {
    question: string;
    answer: string;
}

const Querys: React.FC = () => {
    const [open, setOpen] = React.useState(0);
    const [alwaysOpen, setAlwaysOpen] = React.useState(true);
    
    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    const questions: question[] = [
        {
            question: "Posso comprar agora e usar depois?",
            answer: "Sim, não tem validade."
        },
        {
            question: "Como agendo um treino presencial?",
            answer: "Adquira um plano presencial e agende dia, horário e local do treino. Válido apenas para Brasília."
        },
        {
            question: "No plano vem dieta?",
            answer: "No plano específico de treino + consulta sim, a consulta nutricional é realizada por um profissional de nutrição da minha equipe, apenas em Brasília."
        },
        {
            question: "Em quanto tempo devo mudar o treino?",
            answer: "A cada 4 semanas."
        },
        {
            question: "Como vou saber meu percentual de gordura?",
            answer: "Não é possível realizar avaliação física pela consultoria online, a evolução do físico é mensurada através de fotos anexadas na anamnese. Caso escolha a consultoria online com consulta nutricional, ela será realizada na sua consulta pelo protocolo adequado de acordo com a sua individualidade."
        },
        {
            question: "Quanto tempo dura um treino diário?",
            answer: "Em média 45 minutos a 1 hora."
        }
    ]
    return (
        <div className="max-w-6xl py-6 px-4 mx-auto mt-12">
            <h3 className="font-light text-lg">DÚVIDAS</h3>
            <h1 className="font-bold text-3xl mb-4">FREQUENTES</h1>
            <Accordion open={alwaysOpen} placeholder="">
                <AccordionHeader onClick={handleAlwaysOpen} placeholder="" className="text-black  font-normal text-md">Qual a forma de pagamento?</AccordionHeader>
                <AccordionBody className="text-black">
                    Depósito, transferência bancária, boleto bancário e cartão de crédito e débito.
                </AccordionBody>
            </Accordion>
            {questions.map((question, index) => (
                <Accordion open={open === index + 1} placeholder="">
                    <AccordionHeader onClick={() => handleOpen(index + 1)} placeholder="" className="text-black font-normal text-md">
                        {question.question}
                    </AccordionHeader>
                    <AccordionBody className="text-black">
                        {question.answer}
                    </AccordionBody>
                </Accordion>))}
        </div>
    );
};

export default Querys;