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
    <div className="overflow-x-hidden bg-background text-foreground">
      <LandingHeader.Root
        size="lg"
        className="z-50 border-b border-primary-500/30 bg-[#111317] py-2"
      >
        <LandingHeader.Left className="gap-3">
          <Image
            src="/gym_logo.png"
            alt="Gym Logo"
            width={48}
            height={48}
            className="w-12 h-12 sm:w-16 sm:h-16"
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
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://instagram.com/bodyandhealth"
              aria-label="Instagram"
            >
              <InstagramLogoIcon
                size={24}
                className="text-primary-400 transition hover:text-primary-300"
              />
            </a>
            <a href="https://x.com" aria-label="X">
              <XLogoIcon
                size={24}
                className="text-primary-400 transition hover:text-primary-300"
              />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <YoutubeLogoIcon
                size={24}
                className="text-primary-400 transition hover:text-primary-300"
              />
            </a>
          </div>

          <LandingHeader.MobileMenuToggle
            open={mobileMenuOpen}
            onToggle={setMobileMenuOpen as never}
            className="text-primary-400"
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
        <HeroSection
          size="full"
          backgroundImageLocalPath={heroImageUrl}
          sectionClassName="relative min-h-[calc(100vh-5.5rem)] !items-stretch overflow-hidden px-4 py-0 sm:px-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/55" />
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
          <div className="absolute inset-y-0 right-0 hidden w-2/3 bg-gradient-to-l from-primary-500/18 via-primary-500/6 to-transparent md:block" />

          <div
            id="inicio"
            className="relative z-10 mx-auto flex w-full max-w-7xl items-center py-16 lg:py-20"
          >
            <RevealContainer once className="max-w-2xl space-y-5">
              <Subtitle
                content="PERSONAL TRAINER EM JOAO MONLEVADE -MG"
                className="!text-sm !font-semibold !tracking-[0.16em] !text-primary-400"
              />
              <Title
                content="Transforme sua vida com treino personalizado e acompanhamento profissional."
                className="!text-3xl !font-extrabold !leading-tight !text-white sm:!text-4xl lg:!text-5xl"
              />
              <Paragraph
                content="Alcance seus objetivos com treino personalizado, estratégia inteligente e acompanhamento próximo em cada etapa."
                className="max-w-xl !text-base !text-white/85 sm:!text-lg"
              />
              <Button
                label="QUERO MEU TREINO PERSONALIZADO"
                variant="filled"
                className="!mt-2 !rounded-full !bg-primary-500 !px-8 !py-4 !text-sm !font-bold !tracking-wide !text-[#101114] hover:!bg-primary-400 sm:!text-base"
              />
            </RevealContainer>
          </div>
        </HeroSection>

        <Section
          size="full"
          sectionClassName="bg-[#121418] px-4 py-16 sm:px-8 sm:py-20"
        >
          <div id="servicos" className="w-full max-w-7xl">
            <FadeContainer once className="text-center">
              <Title
                content="ESCOLHA A MELHOR OPÇÃO PARA O SEU OBJETIVO"
                className="!text-3xl !font-extrabold !tracking-wide !text-primary-400 sm:!text-4xl"
              />
              <Paragraph
                content="A Body and Health oferece soluções personalizadas para você evoluir com segurança, consistência e resultado."
                className="mx-auto mt-4 max-w-3xl !text-base !text-foreground/80 sm:!text-lg"
              />
            </FadeContainer>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <ZoomContainer
                  key={service.title}
                  once
                  delay={index + 1}
                  className="h-full"
                >
                  <article className="h-full overflow-hidden rounded-2xl border border-primary-500/25 bg-[#1b1f26]">
                    <div className="relative h-60">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover grayscale"
                        sizes="(max-width: 1280px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-primary-500/25" />
                      <Subtitle
                        content={service.title.toUpperCase()}
                        className="absolute bottom-4 left-4 !text-2xl !font-bold !tracking-wide !text-primary-300"
                      />
                    </div>
                    <div className="p-5">
                      <Paragraph
                        content={service.description}
                        className="!text-sm !text-foreground/85"
                      />
                    </div>
                  </article>
                </ZoomContainer>
              ))}
            </div>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="bg-[#ececec] px-4 py-16 sm:px-8 sm:py-20"
        >
          <div id="sobre" className="w-full max-w-7xl">
            <RevealContainer once className="text-center">
              <Title
                content="Conheça a Body and Health Personal Trainer"
                className="!text-3xl !font-extrabold !text-[#1b1d22] sm:!text-5xl"
              />
              <Paragraph
                content="Treinamento, saúde e performance integrados por uma equipe preparada para atender sua rotina com excelência."
                className="mx-auto mt-4 max-w-3xl !text-base !text-[#3d3f46] sm:!text-lg"
              />
            </RevealContainer>

            <div className="mt-10 grid items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)_280px]">
              <ZoomContainer once>
                <div className="relative h-[360px] overflow-hidden rounded-[2rem] border-2 border-primary-500/70">
                  <Image
                    src={teamImages.left}
                    alt="MSc. Jorge Lúcio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 280px"
                  />
                </div>
              </ZoomContainer>

              <div className="space-y-4">
                {differentials.map((item, index) => {
                  const Icon =
                    differentialIcons[index % differentialIcons.length];

                  return (
                    <FadeContainer key={item.title} once delay={index + 1}>
                      <article className="rounded-2xl border border-[#dadada] bg-white p-5 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500/20 text-[#272100]">
                            <Icon size={24} weight="fill" />
                          </div>
                          <div className="space-y-2">
                            <Subtitle
                              content={item.title}
                              className="!text-xl !font-bold !text-[#181b22]"
                            />
                            <Paragraph
                              content={item.description}
                              className="!text-[#4c4f57]"
                            />
                          </div>
                        </div>
                      </article>
                    </FadeContainer>
                  );
                })}
              </div>

              <ZoomContainer once>
                <div className="relative h-[360px] overflow-hidden rounded-[2rem] border-2 border-primary-500/70">
                  <Image
                    src={teamImages.right}
                    alt="Dr. Hugo Falqueto"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 280px"
                  />
                </div>
              </ZoomContainer>
            </div>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="bg-[#e2e2e2] px-4 py-16 sm:px-8 sm:py-20"
        >
          <div id="blog" className="w-full max-w-5xl">
            <RevealContainer once>
              <div className="rounded-[2rem] bg-[#f7f7f7] px-6 py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                <Title
                  content={blogSection.title}
                  className="!text-4xl !font-black !tracking-wide !text-[#3a3d44] sm:!text-6xl"
                />
                <Paragraph
                  content={blogSection.description}
                  className="mx-auto mt-4 max-w-3xl !text-base !text-[#45484f] sm:!text-lg"
                />
                <div className="mt-8 flex justify-center">
                  <Button
                    label={blogSection.buttonLabel}
                    variant="filled"
                    className="!rounded-full !bg-gradient-to-r !from-primary-300 !to-primary-500 !px-12 !py-4 !text-base !font-black !tracking-[0.08em] !text-[#121317] shadow-[0_10px_26px_rgba(0,0,0,0.25)] sm:!text-lg"
                  />
                </div>
              </div>
            </RevealContainer>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="bg-[radial-gradient(circle_at_80%_20%,rgba(244,196,0,0.18),rgba(16,17,21,1)_45%)] px-4 py-16 sm:px-8 sm:py-20"
        >
          <div id="contato" className="w-full max-w-7xl">
            <RevealContainer once className="max-w-3xl">
              <Title
                content="Fale Conosco"
                className="!text-4xl !font-extrabold !text-primary-400 sm:!text-5xl"
              />
              <Paragraph
                content="Tire suas dúvidas e solicite seu plano personalizado pelos nossos canais de atendimento."
                className="mt-4 !text-base !text-foreground/85 sm:!text-lg"
              />
            </RevealContainer>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <FadeContainer
                once
                className="rounded-2xl border border-primary-500/20 bg-[#13161c] p-6"
              >
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5531912341234"
                    className="flex items-center gap-3"
                  >
                    <WhatsappLogoIcon size={26} className="text-primary-400" />
                    <Subtitle
                      content={contacts.whatsapp}
                      className="!text-lg !font-semibold !text-primary-300"
                    />
                  </a>

                  <a
                    href="https://instagram.com/bodyandhealth"
                    className="flex items-center gap-3"
                  >
                    <InstagramLogoIcon size={26} className="text-primary-400" />
                    <Subtitle
                      content={contacts.instagram}
                      className="!text-lg !font-semibold !text-primary-300"
                    />
                  </a>

                  <a
                    href="mailto:contato@bodyandhealth.com.br"
                    className="flex items-center gap-3"
                  >
                    <EnvelopeSimpleIcon
                      size={26}
                      className="text-primary-400"
                    />
                    <Subtitle
                      content={contacts.email}
                      className="!text-lg !font-semibold !text-primary-300"
                    />
                  </a>

                  <div className="flex items-center gap-3">
                    <MapPinIcon size={26} className="text-primary-400" />
                    <Subtitle
                      content={contacts.location}
                      className="!text-lg !font-semibold !text-primary-300"
                    />
                  </div>
                </div>

                <Button
                  label="FALE CONOSCO PELO WHATSAPP"
                  variant="filled"
                  className="!mt-8 !w-full !justify-center !rounded-full !bg-primary-500 !px-6 !py-4 !text-sm !font-black !tracking-[0.06em] !text-[#121317] hover:!bg-primary-400 sm:!text-base"
                />
              </FadeContainer>

              <FadeContainer
                once
                delay={2}
                className="rounded-2xl border border-primary-500/20 bg-[#13161c] p-6"
              >
                <Subtitle
                  content="Atendimento rápido e humanizado"
                  className="!text-2xl !font-bold !text-white"
                />
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon
                      size={22}
                      weight="fill"
                      className="mt-0.5 text-primary-400"
                    />
                    <Paragraph
                      content="Retorno no WhatsApp com agilidade para alinhamento do seu objetivo."
                      className="!text-foreground/85"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon
                      size={22}
                      weight="fill"
                      className="mt-0.5 text-primary-400"
                    />
                    <Paragraph
                      content="Avaliação inicial personalizada para definir o melhor plano."
                      className="!text-foreground/85"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon
                      size={22}
                      weight="fill"
                      className="mt-0.5 text-primary-400"
                    />
                    <Paragraph
                      content="Acompanhamento próximo para garantir evolução e constância."
                      className="!text-foreground/85"
                    />
                  </div>
                </div>
              </FadeContainer>
            </div>
          </div>
        </Section>
      </main>

      <Footer.Root className="border-t border-primary-500/25 bg-[#0f1115]">
        <Footer.Top columns={4} bordered className="bg-transparent">
          <Footer.Column>
            <div className="flex flex-col gap-4">
              <Image
                src="/gym_logo.png"
                alt="Gym Logo"
                width={48}
                height={48}
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
              <Paragraph
                content="Treinamento e consultoria personalizada para atender sua condição física e sua rotina."
                className="!text-sm !text-foreground/75"
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
          className="bg-[#101317]"
          iconsClassName="text-primary-400 hover:text-primary-300"
          bordered
        />

        <Footer.Bottom bordered className="bg-[#0c0e12]">
          <Paragraph
            content={`© ${new Date().getFullYear()} Body and Health Personal Trainer. Todos os direitos reservados.`}
            className="!text-sm !text-foreground/70"
          />
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
