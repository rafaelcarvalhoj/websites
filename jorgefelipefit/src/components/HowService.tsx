import { styled } from "styled-components";

const Section = styled.section`
    margin: 0px auto;
    padding: 5rem 0;
    max-width: 72rem;
    height: 100%;
`;


interface HowInfo {
    id: number;
    title: string;
    description: string;
}

interface ServiceItemProps {
    info: HowInfo;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ info }) => {
    return (
        <div className="flex flex-col justify-around items-center max-w-lg py-8 rounded-2xl px-8 text-center text-white bg-gray-900 my-5 lg:mx-5 lg:max-w-lg">
            <h2 className="font-bold text-5xl">{info.id}°</h2>
            <h2 className="my-2 font-semibold">{info.title}</h2>
            <p className="font-light text-sm">{info.description}</p>
        </div>
    );
};

const HowService:React.FC = () => {
    const infos: HowInfo[] = [
        {id: 1, title: "Escolha de plano", description: "Escolha o plano que melhor se adeque e realize o pagamento."},
        {id: 2, title: "Preenchimento de formulário", description: "Após o pagamento, você receberá uma anamnese para preencher com seus dados."},
        {id: 3, title: "Recebimento do treino", description: "Dentro de 5 dias uteis irei enviar a sua estratégia de treinamento;"}
    ];

    return (
        <Section className="h-full">
            <div className="my-auto">
                <div className="mx-4">
                    <h3 className="font-light text-lg">COMO FUNCIONA A</h3>
                    <h1 className="font-bold text-3xl mb-4">CONSULTORIA?</h1>
                </div>
                <div className="px-4 flex flex-col justify-around items-center lg:flex-row lg:justify-between">
                    {infos.map(info => (
                        <ServiceItem key={info.id} info={info} />
                        ))}
                </div>
            </div>
        </Section>
    );
}

export default HowService;