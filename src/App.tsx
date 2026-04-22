import { CardRenderer } from "./components/cards/CardRenderer";
import { CardsContainer } from "./components/CardsContainer";
import { ProfileInfo } from "./components/ProfileInfo";
import { SkipLink } from "./components/skip-link";
import { TextSeparator } from "./components/TextSeparator";
import { ThemeToggle } from "./components/theme-toggle";
import { defaultUserId, usersContent } from "./data/appContent";

function App() {
  const content = usersContent[defaultUserId];

  return (
    <>
      <SkipLink />
      <div className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto grid min-h-dvh w-full max-w-[1680px] grid-cols-1 gap-y-10 px-4 py-6 focus:outline-none sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:grid-cols-[500px_minmax(0,1fr)] xl:gap-x-8 xl:gap-y-0 xl:px-10 2xl:px-12"
      >
        <div className="xl:px-10 2xl:px-12">
          <ProfileInfo profile={content.profile} />
        </div>
        <div
          className="pb-14 sm:pb-20 lg:pb-24 xl:pb-28"
          role="region"
          aria-label="Portfolio content"
        >
          {content.sections.map((section) => {
            const headingId = `section-${section.id}`;
            return (
              <section key={section.id} aria-labelledby={headingId}>
                <TextSeparator id={headingId}>{section.label}</TextSeparator>
                {section.rows.map((row, rowIndex) => (
                  <CardsContainer key={`${section.id}-row-${rowIndex}`}>
                    {row.map((card, cardIndex) => (
                      <CardRenderer
                        key={card.id}
                        card={card}
                        entryDelay={rowIndex * 0.05 + cardIndex * 0.04}
                      />
                    ))}
                  </CardsContainer>
                ))}
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
