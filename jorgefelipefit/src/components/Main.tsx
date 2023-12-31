import { Button } from "@material-tailwind/react";
export default function Main() {

    return (
        <div className="flex max-w-screen-2xl mx-auto px-2 h-96 bg-red-500">
            <div className="my-auto">
                <h1 className="font-bold uppercase text-6xl">Inspire-se</h1>
                <h3>A mudança que você quer está na decisão que você toma</h3>
                <Button placeholder="" className="mt-4">
                    Button
                </Button>
            </div>
        </div>
    );
}