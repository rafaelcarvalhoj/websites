import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }


const Pricing: React.FC = () => {
    return (
        <>
            <div className="max-w-6xl py-6 px-4 mx-auto">
                <h3 className="font-light text-lg">PLANOS DE</h3>
                <h1 className="font-bold text-3xl mb-4">TREINO</h1>
                <div className="flex flex-col items-center gap-6 lg:flex-row justify-center">
                    <Card placeholder="" color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                        <CardHeader
                            placeholder=""
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                            >
                            <Typography
                                placeholder=""
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                                >
                                Mensal
                            </Typography>
                            <Typography
                                placeholder=""
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                                >
                            <span className="mt-2 text-4xl">R$</span>225{" "}
                            <span className="self-end text-4xl">/me</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0" placeholder="">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">1 Programa de treino</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">4 Semanas de acompanhamento</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">Contato exclusivo via Whatsapp</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0" placeholder="">
                            <Button
                                placeholder=""
                                size="lg"
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                                >
                                Assinar agora
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card placeholder="" color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                        <CardHeader
                            placeholder=""
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                            >
                            <Typography
                                placeholder=""
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                                >
                                Mensal
                            </Typography>
                            <Typography
                                placeholder=""
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                                >
                            <span className="mt-2 text-4xl">R$</span>225{" "}
                            <span className="self-end text-4xl">/me</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0" placeholder="">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">1 Programa de treino</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">4 Semanas de acompanhamento</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">Contato exclusivo via Whatsapp</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0" placeholder="">
                            <Button
                                placeholder=""
                                size="lg"
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                                >
                                Assinar agora
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card placeholder="" color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                        <CardHeader
                            placeholder=""
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                            >
                            <Typography
                                placeholder=""
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                                >
                                Mensal
                            </Typography>
                            <Typography
                                placeholder=""
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                                >
                            <span className="mt-2 text-4xl">R$</span>225{" "}
                            <span className="self-end text-4xl">/me</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0" placeholder="">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">1 Programa de treino</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">4 Semanas de acompanhamento</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">Contato exclusivo via Whatsapp</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0" placeholder="">
                            <Button
                                placeholder=""
                                size="lg"
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Assinar agora
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="max-w-6xl py-6 px-4 mx-auto">
                <h3 className="font-light text-lg">OUTROS</h3>
                <h1 className="font-bold text-3xl mb-4">PLANOS</h1>
                <div className="flex flex-col items-center gap-6 lg:flex-row justify-center">
                    <Card placeholder="" color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                        <CardHeader
                            placeholder=""
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                            >
                            <Typography
                                placeholder=""
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                                >
                                Mensal
                            </Typography>
                            <Typography
                                placeholder=""
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                                >
                            <span className="mt-2 text-4xl">R$</span>225{" "}
                            <span className="self-end text-4xl">/me</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0" placeholder="">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">1 Programa de treino</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">4 Semanas de acompanhamento</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">Contato exclusivo via Whatsapp</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0" placeholder="">
                            <Button
                                placeholder=""
                                size="lg"
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                                >
                                Assinar agora
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card placeholder="" color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                        <CardHeader
                            placeholder=""
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                            >
                            <Typography
                                placeholder=""
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                                >
                                Mensal
                            </Typography>
                            <Typography
                                placeholder=""
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                                >
                            <span className="mt-2 text-4xl">R$</span>225{" "}
                            <span className="self-end text-4xl">/me</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0" placeholder="">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">1 Programa de treino</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">4 Semanas de acompanhamento</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">Contato exclusivo via Whatsapp</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0" placeholder="">
                            <Button
                                placeholder=""
                                size="lg"
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                                >
                                Assinar agora
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card placeholder="" color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                        <CardHeader
                            placeholder=""
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                            >
                            <Typography
                                placeholder=""
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                                >
                                Mensal
                            </Typography>
                            <Typography
                                placeholder=""
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                                >
                            <span className="mt-2 text-4xl">R$</span>225{" "}
                            <span className="self-end text-4xl">/me</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0" placeholder="">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">1 Programa de treino</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">4 Semanas de acompanhamento</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                    <CheckIcon />
                                    </span>
                                    <Typography className="font-normal" placeholder="">Contato exclusivo via Whatsapp</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0" placeholder="">
                            <Button
                                placeholder=""
                                size="lg"
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Assinar agora
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Pricing;