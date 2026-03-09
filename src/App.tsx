import { CardsContainer } from "./components/CardsContainer";
import { CardRenderer } from "./components/cards/CardRenderer";
import { ProfileInfo } from "./components/ProfileInfo";
import { TextSeparator } from "./components/TextSeparator";
import { defaultUserId, usersContent } from "./data/appContent";

function App() {
  const content = usersContent[defaultUserId];

  return (
    <main className="grid lg:grid-cols-[500px_1fr] grid-cols-1 min-h-dvh p-4 sm:p-8 lg:p-16 lg:pr-0 lg:pt-0 container mx-auto">
      <ProfileInfo profile={content.profile} />
      <div
        className="pb-16 sm:pb-24 lg:pb-32 lg:pr-16"
        role="region"
        aria-label="Portfolio content"
      >
        {content.sections.map((section) => (
          <section key={section.id}>
            <TextSeparator>{section.label}</TextSeparator>
            {section.rows.map((row, rowIndex) => (
              <CardsContainer key={`${section.id}-row-${rowIndex}`}>
                {row.map((card) => (
                  <CardRenderer key={card.id} card={card} />
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
