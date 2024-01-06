export default function About() {
  return (
    <div className="container mx-auto px-3 min-h-[80vh]">
      <h1 className="text-gray-800 text-4xl font-semibold mb-6">
        Quem é <br/>
        <span className="text-5xl font-black">
            Amanda Monteiro?
          </span>
      </h1>
      <div className="flex flex-col items-center lg:flex-row justify-center md:justify-between">
        <p className="text-justify leading-relaxed text-gray-800 text-xl font-normal lg:max-w-[40rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lorem at velit pulvinar malesuada at a mi. Sed aliquam non nibh non porttitor. Nullam quis ullamcorper ligula, non mollis libero. Suspendisse potenti. Sed a aliquet est, id venenatis nunc. Curabitur dictum metus sit amet lorem convallis consectetur. Vestibulum lacinia enim condimentum scelerisque tristique. Mauris sed urna et ligula iaculis lobortis eu ut lectus. Aliquam a faucibus tortor.
        </p>
        <div className={"min-w-[500px] hidden lg:block"}>
          <img
            src={"https://amandamonteironutri.com.br/wp-content/uploads/2023/10/IMG-8692-scaled.jpg"}
            className={"w-[500px] h-[500px] rounded-full w-fit h-full shadow"}
          />
        </div>
      </div>
    </div>
  )
}