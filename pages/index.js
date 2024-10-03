import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
            <header className="">
                ini header
            </header>
            <section className="flex h-[20rem] w-full">
                <div className="bg-black h-[20rem] w-[20rem] rounded-md"></div>
                <div className="h-[20rem] w-full">
                  <div className="bg-[#f8a800] h-[5rem] w-full py-6 px-2">
                    <p>Postingan Berakhir Dalam</p>
                  </div>
                </div>
            </section>
            <footer>
                ini footer
            </footer>
    </div>
  );
}
