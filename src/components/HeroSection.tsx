import Image from 'next/image';
import Button, { ButtonBorder } from './elements/Button';
import { Boxes } from './ui/background-boxes';

export default function HeroSection() {
  return (
    <section className=" text-gray-800 md:min-h-screen pt-20">
      <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes className="z-10"/>
      <div className="z-20">
      <div className="container flex flex-col justify-center py-4 md:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center py-4 md:p-6 text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left ">
          <div className="space-y-6">
            <h1 className="text-5xl text-slate-300 font-medium leading-none sm:text-7xl uppercase">
              Hi im <span className="text-[var(--primary-color)]">Ahmad Akhnaful Khakim</span>
            </h1>
            <h2 className="text-5xl  font-medium leading-none sm:text-5xl uppercase text-[var(--primary-color)]">Web Developer</h2>
            <p className="!mt-3 mb-8 text-xl sm:mb-12 uppercase font-medium md:max-w-2xl text-slate-300">
              Pemecah masalah dan pembangun sesuatu melalui Kode
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-10 lg:justify-start">
              <Button link="/">Hire Me</Button>
              <ButtonBorder link="/">{`Let's talk`}</ButtonBorder>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-4 md:p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image width={'500'} height={'500'} src="/img/gambar.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-72 sm:w-80 lg:w-96 xl:w-112 2xl:w-128 rounded-full" />
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
