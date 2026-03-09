import { CardRenderer } from "./components/cards/CardRenderer";
import { CardsContainer } from "./components/CardsContainer";
import { ProfileInfo } from "./components/ProfileInfo";
import { TextSeparator } from "./components/TextSeparator";
import { defaultUserId, usersContent } from "./data/appContent";

function App() {
  const content = usersContent[defaultUserId];

  return (
    <main className="mx-auto grid min-h-dvh w-full max-w-[1680px] grid-cols-1 gap-y-10 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:grid-cols-[500px_minmax(0,1fr)] xl:gap-x-8 xl:gap-y-0 xl:px-10 2xl:px-12">
      <div className="xl:px-10 2xl:px-12">
        <ProfileInfo profile={content.profile} />
      </div>
      <div
        className="pb-14 sm:pb-20 lg:pb-24 xl:pb-28"
        role="region"
        aria-label="Portfolio content"
      >
        {content.sections.map((section) => (
          <section key={section.id}>
            <TextSeparator>{section.label}</TextSeparator>
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
        ))}
      </div>
    </main>
  );
}

export default App;
