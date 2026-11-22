import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col bg-repeat"
      style={{ backgroundImage: "url('/hero/bg-grid.jpg')" }}
    >
      <Header />

      <section className="flex flex-1 flex-col items-center gap-12 px-6 pb-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex max-w-xl flex-col items-start gap-8">
          <h1 className="font-display text-[42px] leading-[1.05] sm:text-[52px] lg:text-[60px]">
            I design mobile app interfaces, from initial user flows to
            screens ready for development.
          </h1>

          <p className="font-mono text-[22px] leading-[1.3] sm:text-[28px] lg:text-[32px]">
            For startups and products about books and studying
          </p>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[5px] border-foreground bg-accent px-10 py-4 font-display text-[26px] leading-none hover:opacity-90"
          >
            CONTACT ME
          </a>

          <a
            href="mailto:me@anastasi-design.gallery"
            className="font-mono text-[18px] leading-none hover:text-accent sm:text-[20px]"
          >
            me@anastasi-design.gallery
          </a>
        </div>

        <div className="relative flex w-full max-w-[584px] flex-col items-center gap-4">
          <Image
            src="/hero/cat-illustration.png"
            alt="Illustration of a sleeping cat curled up on a stack of books"
            width={584}
            height={427}
            className="h-auto w-full"
            priority
          />

          <div className="ml-auto flex flex-col items-center gap-2 pr-4">
            <Image
              src="/hero/arrow.svg"
              alt=""
              width={90}
              height={152}
              className="h-[110px] w-auto shrink-0 -scale-x-100 sm:h-[140px]"
            />
            <p className="max-w-[220px] text-center font-mono text-[24px] leading-[1.15] sm:max-w-[280px] sm:text-[32px]">
              I also draw illustrations
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
