import {
  BackToTop,
  Button,
  Container,
  ProgressBar,
  SectionTitle,
} from "@/components/ui";
import { EnvelopeSection } from "@/components/sections/EnvelopeSection";
import { weddingConfig } from "@/config/wedding";
import { messages } from "@/content/messages";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <main className="w-full min-h-screen">
        <EnvelopeSection />

        {/* Timeline Section */}
        <section
          id="timeline"
          className="w-full py-20 bg-surface"
        >
          <Container>
            <SectionTitle level="h2">
              {messages.timeline.title}
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-text">
                  Nossa História
                </h3>
                <p className="text-base text-muted font-body">
                  Confira os momentos mais especiais que nos trouxeram até aqui.
                </p>
                <Button variant="primary">Ver Timeline</Button>
              </div>
              <div className="bg-background rounded-lg p-6 text-center">
                <p className="text-sm text-muted">
                  Timeline interativa com fotos e descrições
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery"
          className="w-full py-20"
        >
          <Container>
            <SectionTitle level="h2">Galeria de Fotos</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-surface rounded-lg p-6 text-center">
                <p className="text-sm text-muted">
                  Carrossel de fotos com swipe
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-text">
                  Nossas Memórias
                </h3>
                <p className="text-base text-muted font-body">
                  Deslize para visualizar momentos especiais do casal.
                </p>
                <Button variant="primary">Ver Galeria</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Flipbook Section */}
        <section
          id="flipbook"
          className="w-full py-20 bg-surface"
        >
          <Container>
            <SectionTitle level="h2">Livro de Memórias</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-text">
                  Uma Jornada Especial
                </h3>
                <p className="text-base text-muted font-body">
                  Vire as páginas e descubra a história do nosso amor em um álbum
                  interativo.
                </p>
                <Button variant="primary">Abrir Álbum</Button>
              </div>
              <div className="bg-background rounded-lg p-6 text-center">
                <p className="text-sm text-muted">
                  Livro interativo com efeito de virada de página
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Event Info Section */}
        <section
          id="event-info"
          className="w-full py-20"
        >
          <Container>
            <SectionTitle level="h2">Informações do Evento</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-surface rounded-lg p-6 space-y-4">
                <h3 className="font-serif text-xl font-medium text-text">
                  Cerimônia
                </h3>
                <p className="text-sm text-muted">
                  <strong>Local:</strong> {weddingConfig.ceremonyLocation}
                </p>
                <p className="text-sm text-muted">
                  <strong>Horário:</strong> {weddingConfig.ceremonyTime}
                </p>
                <Button variant="outline" size="sm">
                  Como Chegar
                </Button>
              </div>

              <div className="bg-surface rounded-lg p-6 space-y-4">
                <h3 className="font-serif text-xl font-medium text-text">
                  Recepção
                </h3>
                <p className="text-sm text-muted">
                  <strong>Local:</strong> {weddingConfig.receptionLocation}
                </p>
                <p className="text-sm text-muted">
                  <strong>Horário:</strong> {weddingConfig.receptionTime}
                </p>
                <Button variant="outline" size="sm">
                  Como Chegar
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Countdown Section */}
        <section
          id="countdown"
          className="w-full py-20 bg-surface"
        >
          <Container>
            <SectionTitle level="h2">Contagem Regressiva</SectionTitle>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {["Dias", "Horas", "Minutos", "Segundos"].map((unit) => (
                <div
                  key={unit}
                  className="bg-background rounded-lg p-6 text-center"
                >
                  <div className="font-serif text-3xl font-semibold text-text mb-2">
                    00
                  </div>
                  <p className="text-sm text-muted">{unit}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Confirmation Section */}
        <section
          id="confirmation"
          className="w-full py-20"
        >
          <Container>
            <SectionTitle level="h2">Confirmação de Participação</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-text">
                  Confirme sua Presença
                </h3>
                <p className="text-base text-muted font-body">
                  Contribua para o buffet através de PIX e nos avise pelo WhatsApp.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">
                    Valor por Pessoa: R$ {weddingConfig.guestContribution}
                  </p>
                  <p className="text-xs text-muted">
                    Data limite:{" "}
                    {new Date(
                      weddingConfig.contributionDeadline
                    ).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <Button variant="primary">Ver Chave PIX</Button>
              </div>
              <div className="bg-surface rounded-lg p-6 text-center">
                <p className="text-sm text-muted mb-4">QR Code PIX</p>
                <div className="bg-background rounded-lg p-8">
                  <p className="text-xs text-muted">
                    [QR Code será exibido aqui]
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Gift List Section */}
        <section
          id="gift-list"
          className="w-full py-20 bg-surface"
        >
          <Container>
            <SectionTitle level="h2">Lista de Presentes</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {weddingConfig.giftListLinks.map((link) => (
                <div
                  key={link.name}
                  className="bg-background rounded-lg p-6 text-center space-y-4"
                >
                  <h3 className="font-serif text-lg font-medium text-text">
                    {link.name}
                  </h3>
                  <Button variant="primary" size="sm">
                    Abrir Lista
                  </Button>
                </div>
              ))}
              <div className="bg-background rounded-lg p-6 text-center space-y-4">
                <h3 className="font-serif text-lg font-medium text-text">
                  Outras Opções
                </h3>
                <Button variant="primary" size="sm">
                  Consulte os Noivos
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Footer Section */}
        <section
          id="footer"
          className="w-full py-16 bg-surface border-t"
        >
          <Container>
            <div className="text-center space-y-4">
              <p className="font-serif text-xl text-text">
                Estamos ansiosos para celebrar esse momento especial com você!
              </p>
              <p className="text-sm text-muted">
                {weddingConfig.brideName} & {weddingConfig.groomName}
              </p>
            </div>
          </Container>
        </section>
      </main>
      <BackToTop />
    </>
  );
}
