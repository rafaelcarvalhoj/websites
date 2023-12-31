import { Button } from "@material-tailwind/react";
import { styled } from "styled-components";

const Section = styled.section`
    display: flex;
    max-width: 1152px;
    margin: 0px auto;
    height: 85vh;
    padding: 0px 20px;
    
    @media only screen and (max-width: 768px) {
        height: 60vh;
    }
`;

export default function Main() {

    return (
        <Section>
            <div className="lg:mt-64 mt-44 mx-auto lg:mx-10">
                <h1 className="font-bold uppercase lg:text-left text-6xl text-center">Inspire-se</h1>
                <h3 className="text-center lg:text-left">A mudança que você quer está na decisão que você toma</h3>
                <Button placeholder="" className="block mt-4 mx-auto lg:mx-2 text-normal text-gray-200 transition duration-300 transform hover:-translate-y-1">
                    SAIBA MAIS
                </Button>
            </div>
        </Section>
    );
}