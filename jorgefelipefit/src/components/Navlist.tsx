import { Typography } from "@material-tailwind/react";

interface link {
    name: string;
    href: string;
}

export default function NavList() {
    const links: link[] = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Consultoring", href: "#" },
    ];
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {links.map((l: link) => {
            return (
              <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal text-gray-900 uppercase font-normal text-lg transition duration-300 transform hover:-translate-y-1"
                  placeholder=""
              >
                <a href={l.href} className="flex items-center">
                  {l.name}
                </a>
              </Typography>
            );
        })}
      </ul>
  );
}