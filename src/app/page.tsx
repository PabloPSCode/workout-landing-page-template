"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import Footer from "@/components/elements/Footer";
import { HeroSection } from "@/components/elements/HeroSection";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import {
  blogSection,
  contacts,
  differentials,
  footerColumns,
  footerSocialItems,
  heroImageUrl,
  heroTrainerImageUrl,
  navigationItems,
  services,
  teamImages,
} from "@/mocks/personalTrainerLanding";
import {
  BarbellIcon,
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  HeartbeatIcon,
  InstagramLogoIcon,
  LightningIcon,
  MapPinIcon,
  WhatsappLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const differentialIcons = [BarbellIcon, HeartbeatIcon, LightningIcon];

  return (
    <div className="overflow-x-hidden bg-black text-white">
      <LandingHeader.Root size="lg" className="z-50 bg-black py-2">
        <LandingHeader.Left className="gap-3">
          <Image
            src="/gym_logo.png"
            alt="Gym Logo"
            width={48}
            height={48}
            className="h-12 w-12 sm:h-16 sm:w-16"
          />
        </LandingHeader.Left>

        <LandingHeader.Center>
          <LandingHeader.Nav className="justify-center gap-8">
            {navigationItems.map((item) => (
              <LandingHeader.Nav.Item key={item.label} href={item.href}>
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>

        <LandingHeader.Right className="gap-3">
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="https://instagram.com/bodyandhealth"
              aria-label="Instagram"
            >
              <InstagramLogoIcon
                size={22}
                className="text-white transition hover:text-primary-500"
              />
            </a>
            <a href="https://x.com" aria-label="X">
              <XLogoIcon
                size={22}
                className="text-white transition hover:text-primary-500"
              />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <YoutubeLogoIcon
                size={22}
                className="text-white transition hover:text-primary-500"
              />
            </a>
          </div>

          <LandingHeader.MobileMenuToggle
            open={mobileMenuOpen}
            onToggle={setMobileMenuOpen as never}
            className="text-white"
          />
          <LandingHeader.MobileMenuPanel open={mobileMenuOpen}>
            {navigationItems.map((item) => (
              <LandingHeader.Nav.Item key={item.label} href={item.href}>
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.MobileMenuPanel>
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex flex-col">
        {/* ============================= HERO ============================= */}
        <HeroSection
          size="full"
          backgroundImageLocalPath={heroImageUrl}
          sectionClassName="relative min-h-[calc(100vh-5.5rem)] !items-stretch overflow-hidden bg-black px-4 py-0 sm:px-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute inset-y-0 right-0 hidden w-full md:block">
            <div
              className="relative h-full w-full"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to left, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to left, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
              }}
            >
              <Image
                src={heroTrainerImageUrl}
                alt="Personal trainer integrado ao background"
                fill
                className="object-contain object-right-bottom opacity-90 mix-blend-lighten"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <div
            id="inicio"
            className="relative z-10 mx-auto flex w-full max-w-7xl items-center py-16 lg:py-20"
          >
            <RevealContainer once className="max-w-3xl space-y-6">
              <Subtitle
                content="PERSONAL TRAINER EM JOÃO MONLEVADE — MG"
                className="!text-xs !font-semibold !uppercase !tracking-[0.3em] !text-primary-500 sm:!text-sm"
              />
              <Title
                content="TREINO PERSONALIZADO. RESULTADO REAL."
                className="!text-4xl !font-bold !uppercase !leading-[0.92] !tracking-tight !text-white sm:!text-6xl lg:!text-7xl"
              />
              <Paragraph
                content="Alcance seus objetivos com estratégia inteligente e acompanhamento próximo em cada etapa da sua evolução."
                className="max-w-xl !text-base !leading-relaxed !text-white/70 sm:!text-lg"
              />
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <a href="#contato">
                  <Button
                    label="Quero meu treino"
                    variant="filled"
                    className="!w-full !justify-center sm:!w-auto"
                  />
                </a>
                <a href="#servicos">
                  <Button
                    label="Conheça os serviços"
                    variant="outlined"
                    className="!w-full !justify-center sm:!w-auto"
                  />
                </a>
              </div>
            </RevealContainer>
          </div>
        </HeroSection>

        {/* ============================ SERVICES ============================ */}
        <Section size="full" sectionClassName="bg-black px-4 py-20 sm:px-8 sm:py-24">
          <div id="servicos" className="w-full max-w-7xl">
            <FadeContainer once className="max-w-3xl">
              <Subtitle
                content="NOSSOS SERVIÇOS"
                className="!text-xs !font-semibold !uppercase !tracking-[0.3em] !text-primary-500 sm:!text-sm"
              />
              <Title
                content="ESCOLHA A MELHOR OPÇÃO PARA O SEU OBJETIVO"
                className="!mt-3 !text-3xl !font-bold !uppercase !leading-[1.05] !text-white sm:!text-5xl"
              />
              <Paragraph
                content="A Body and Health oferece soluções personalizadas para você evoluir com segurança, consistência e resultado."
                className="mt-4 max-w-2xl !text-base !text-white/60 sm:!text-lg"
              />
            </FadeContainer>

            <div className="mt-12 grid gap-px bg-[#202020] md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <ZoomContainer
                  key={service.title}
                  once
                  delay={index + 1}
                  className="h-full"
                >
                  <article className="group relative h-full overflow-hidden bg-black">
                    <div className="relative h-72">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                        sizes="(max-width: 1280px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <span className="absolute left-4 top-4 bg-[#969696] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                        0{index + 1}
                      </span>
                      <Subtitle
                        content={service.title.toUpperCase()}
                        className="absolute bottom-4 left-4 right-4 !text-xl !font-bold !uppercase !tracking-wide !text-white"
                      />
                    </div>
                    <div className="border-t border-primary-500/60 p-6">
                      <Paragraph
                        content={service.description}
                        className="!text-sm !text-white/60"
                      />
                    </div>
                  </article>
                </ZoomContainer>
              ))}
            </div>
          </div>
        </Section>

        {/* ============================= ABOUT ============================= */}
        <Section
          size="full"
          sectionClassName="bg-[#0a0a0a] px-4 py-20 sm:px-8 sm:py-24"
        >
          <div id="sobre" className="w-full max-w-7xl">
            <RevealContainer once className="max-w-3xl">
              <Subtitle
                content="QUEM SOMOS"
                className="!text-xs !font-semibold !uppercase !tracking-[0.3em] !text-primary-500 sm:!text-sm"
              />
              <Title
                content="CONHEÇA A BODY AND HEALTH"
                className="!mt-3 !text-3xl !font-bold !uppercase !leading-[1.05] !text-white sm:!text-5xl"
              />
              <Paragraph
                content="Treinamento, saúde e performance integrados por uma equipe preparada para atender sua rotina com excelência."
                className="mt-4 max-w-2xl !text-base !text-white/60 sm:!text-lg"
              />
            </RevealContainer>

            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[300px_minmax(0,1fr)_300px]">
              <ZoomContainer once className="h-full">
                <div className="relative h-full min-h-[380px] overflow-hidden border border-primary-500/60">
                  <Image
                    src={teamImages.left}
                    alt="MSc. Jorge Lúcio"
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </div>
              </ZoomContainer>

              <div className="space-y-6">
                {differentials.map((item, index) => {
                  const Icon =
                    differentialIcons[index % differentialIcons.length];

                  return (
                    <FadeContainer key={item.title} once delay={index + 1}>
                      <article className="border border-[#202020] bg-[#141414] p-6 transition-colors hover:border-primary-500/50">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary-500 text-black">
                            <Icon size={24} weight="fill" />
                          </div>
                          <div className="space-y-2">
                            <Subtitle
                              content={item.title}
                              className="!text-lg !font-bold !text-white"
                            />
                            <Paragraph
                              content={item.description}
                              className="!text-white/60"
                            />
                          </div>
                        </div>
                      </article>
                    </FadeContainer>
                  );
                })}
              </div>

              <ZoomContainer once className="h-full">
                <div className="relative h-full min-h-[380px] overflow-hidden border border-primary-500/60">
                  <Image
                    src={teamImages.right}
                    alt="Dr. Hugo Falqueto"
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </div>
              </ZoomContainer>
            </div>
          </div>
        </Section>

        {/* ============================== BLOG ============================== */}
        <Section size="full" sectionClassName="bg-black px-4 py-20 sm:px-8 sm:py-24">
          <div id="blog" className="w-full max-w-5xl">
            <RevealContainer once>
              <div className="border border-[#202020] bg-[#181818] px-6 py-16 text-center sm:px-12">
                <Subtitle
                  content="CONTEÚDO"
                  className="!text-xs !font-semibold !uppercase !tracking-[0.3em] !text-primary-500 sm:!text-sm"
                />
                <Title
                  content={blogSection.title}
                  className="!mt-3 !text-4xl !font-bold !uppercase !tracking-tight !text-white sm:!text-6xl"
                />
                <Paragraph
                  content={blogSection.description}
                  className="mx-auto mt-4 max-w-2xl !text-base !text-white/60 sm:!text-lg"
                />
                <div className="mt-10 flex justify-center">
                  <Button label={blogSection.buttonLabel} variant="filled" />
                </div>
              </div>
            </RevealContainer>
          </div>
        </Section>

        {/* ============================= CONTACT ============================= */}
        <Section size="full" sectionClassName="bg-[#0a0a0a] px-4 py-20 sm:px-8 sm:py-24">
          <div id="contato" className="w-full max-w-7xl">
            <RevealContainer once className="max-w-3xl">
              <Subtitle
                content="ATENDIMENTO"
                className="!text-xs !font-semibold !uppercase !tracking-[0.3em] !text-primary-500 sm:!text-sm"
              />
              <Title
                content="FALE CONOSCO"
                className="!mt-3 !text-4xl !font-bold !uppercase !leading-[1.05] !text-white sm:!text-6xl"
              />
              <Paragraph
                content="Tire suas dúvidas e solicite seu plano personalizado pelos nossos canais de atendimento."
                className="mt-4 !text-base !text-white/60 sm:!text-lg"
              />
            </RevealContainer>

            <div className="mt-10 grid gap-px bg-[#202020] md:grid-cols-2">
              <FadeContainer once className="bg-black p-8">
                <div className="space-y-5">
                  <a
                    href="https://wa.me/5531912341234"
                    className="group flex items-center gap-3"
                  >
                    <WhatsappLogoIcon size={26} className="text-primary-500" />
                    <Subtitle
                      content={contacts.whatsapp}
                      className="!text-lg !font-semibold !text-white transition-colors group-hover:!text-primary-500"
                    />
                  </a>

                  <a
                    href="https://instagram.com/bodyandhealth"
                    className="group flex items-center gap-3"
                  >
                    <InstagramLogoIcon size={26} className="text-primary-500" />
                    <Subtitle
                      content={contacts.instagram}
                      className="!text-lg !font-semibold !text-white transition-colors group-hover:!text-primary-500"
                    />
                  </a>

                  <a
                    href="mailto:contato@bodyandhealth.com.br"
                    className="group flex items-center gap-3"
                  >
                    <EnvelopeSimpleIcon size={26} className="text-primary-500" />
                    <Subtitle
                      content={contacts.email}
                      className="!text-lg !font-semibold !text-white transition-colors group-hover:!text-primary-500"
                    />
                  </a>

                  <div className="flex items-center gap-3">
                    <MapPinIcon size={26} className="text-primary-500" />
                    <Subtitle
                      content={contacts.location}
                      className="!text-lg !font-semibold !text-white"
                    />
                  </div>
                </div>

                <a href="https://wa.me/5531912341234" className="mt-8 block">
                  <Button
                    label="Fale conosco pelo WhatsApp"
                    variant="filled"
                    className="!w-full !justify-center"
                  />
                </a>
              </FadeContainer>

              <FadeContainer once delay={2} className="bg-black p-8">
                <Subtitle
                  content="ATENDIMENTO RÁPIDO E HUMANIZADO"
                  className="!text-xl !font-bold !uppercase !tracking-wide !text-white"
                />
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon
                      size={22}
                      weight="fill"
                      className="mt-0.5 text-primary-500"
                    />
                    <Paragraph
                      content="Retorno no WhatsApp com agilidade para alinhamento do seu objetivo."
                      className="!text-white/70"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon
                      size={22}
                      weight="fill"
                      className="mt-0.5 text-primary-500"
                    />
                    <Paragraph
                      content="Avaliação inicial personalizada para definir o melhor plano."
                      className="!text-white/70"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon
                      size={22}
                      weight="fill"
                      className="mt-0.5 text-primary-500"
                    />
                    <Paragraph
                      content="Acompanhamento próximo para garantir evolução e constância."
                      className="!text-white/70"
                    />
                  </div>
                </div>
              </FadeContainer>
            </div>
          </div>
        </Section>
      </main>

      {/* ============================= FOOTER ============================= */}
      <Footer.Root className="border-t border-[#202020] bg-black">
        <Footer.Top columns={4} bordered className="border-[#202020] bg-transparent">
          <Footer.Column>
            <div className="flex flex-col gap-4">
              <Image
                src="/gym_logo.png"
                alt="Gym Logo"
                width={48}
                height={48}
                className="h-12 w-12 sm:h-16 sm:w-16"
              />
              <Paragraph
                content="Treinamento e consultoria personalizada para atender sua condição física e sua rotina."
                className="!text-sm !text-white/50"
              />
            </div>
          </Footer.Column>

          {footerColumns.map((column) => (
            <Footer.Column
              key={column.title}
              title={column.title}
              items={column.items}
            />
          ))}
        </Footer.Top>

        <Footer.SocialRow
          items={footerSocialItems as never}
          className="border-[#202020] bg-[#0a0a0a]"
          iconsClassName="text-white hover:text-primary-500"
          bordered
        />

        <Footer.Bottom bordered className="border-[#202020] bg-black">
          <Paragraph
            content={`© ${new Date().getFullYear()} Body and Health Personal Trainer. Todos os direitos reservados.`}
            className="!text-sm !text-white/50"
          />
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
