import { YoutubeEmbedCard } from "./components/cards/base/YoutubeEmbedCard";
import { GithubCard } from "./components/cards/social/GithubCard";
import InstagramCard from "./components/cards/social/InstagramCard";
import { LinkedinCard } from "./components/cards/social/LinkedinCard";
import { SpotifyCard } from "./components/cards/social/SpotifyCard";
import { TwitchCard } from "./components/cards/social/TwitchCard";
import { TwitterCard } from "./components/cards/social/TwitterCard";
import { FigmaCard } from "./components/cards/work/FigmaCard";
import { LeetcodeCard } from "./components/cards/work/LeetcodeCard";
import { PortfolioCard } from "./components/cards/work/PortfolioCard";
import { CardsContainer } from "./components/CardsContainer";
import { ProfileInfo } from "./components/ProfileInfo";
import { TextSeparator } from "./components/TextSeparator";

function App() {
  return (
    <main className="grid lg:grid-cols-[500px_1fr] grid-cols-1 min-h-dvh p-4 sm:p-8 lg:p-16 lg:pr-0 lg:pt-0">
      <ProfileInfo />
      <div
        className="pb-16 sm:pb-24 lg:pb-32 lg:pr-16"
        role="region"
        aria-label="Portfolio content"
      >
        <TextSeparator>social</TextSeparator>
        <CardsContainer>
          <InstagramCard />
          <SpotifyCard />
          <TwitterCard />
          <GithubCard />
        </CardsContainer>
        <CardsContainer>
          <LinkedinCard />
          <TwitchCard />
        </CardsContainer>
        <TextSeparator>work</TextSeparator>
        <CardsContainer>
          <PortfolioCard />
          <FigmaCard />
          <LeetcodeCard />
          <YoutubeEmbedCard url="https://www.youtube.com/embed/rR4n-0KYeKQ?si=yj4HPuCgKZz3OKLr&amp;controls=0" />
        </CardsContainer>
      </div>
    </main>
  );
}

export default App;
