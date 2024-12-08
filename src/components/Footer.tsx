import Byteflowlogo from "@/components/Bytflowlogo";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";



export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
        <Link href="/">
            <Byteflowlogo />
            <span className="sr-only">Byteflow Home Page</span>
        </Link>
        <nav aria-label="Footer">
            <ul className="flex gap-6">
                {settings.data.navigation.map((item)=>(
                    <li key={item.label}>
                        <PrismicNextLink field={item.link}
                        className="inline-flex min-h-11 items-center">
                            {item.label}
                        </PrismicNextLink>
                    </li>
                ))}
            </ul>
        </nav>
         {/* Trademark and Copyright */}
      <div className="text-center text-sm md:text-base mt-4 md:mt-0">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} BYTEFLOW, LLC. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
