import PageShell from "../components/layout/PageShell.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import AdBanner from "../components/common/AdBanner.jsx";
import MemeCard from "../components/feature/MemeCard.jsx";
import usePageTitle from "../hooks/usePageTitle.js";

const GROUP_TOP = [
    { t: "OOF at Spawn", b: <>That moment when you join the game… and immediately fall off the map</> },
    { t: "Lag Got Me Like...", b: <>I jumped 5 seconds ago, why am I still in the air?</> },
];
const GROUP_2 = [
    { t: "Blind Trust 😵‍💫🤝", b: <>Follow me, I swear I know the way... dies instantly</> },
    { t: "Broken Dreams 💸💭", b: <>Me checking my balance: 0 Robux. Me in my imagination: Gucci on Roblox</> },
    { t: "Builderman Watching 👀🧱", b: <>That paranoid feeling when you think an admin is in your game 👀</> },
    { t: "1 Free Item Avatar 🤡🧢", b: <>Fashion disaster but make it Roblox</> },
];
const GROUP_3 = [
    { t: "Tried to Be Friendly…", b: <>I waved. They exploded me. Classic Roblox</> },
    { t: "99% Noobs in Server 🤯🍼", b: <>Chaos. Pure chaos. And I’m the king of it.</> },
    { t: "That Tryhard Player 🎯💪", b: <>Me: having fun.<br />Him: training like it’s an e-sport.</> },
    { t: "Finally Bought Robux 🤢🧍", b: <>Me: Time to flex.<br />Friends: Bro, you spent it all on a hat?</> },
];
const GROUP_4 = [
    { t: "Bacon Hair Saves All 🥓🕺", b: <>Don’t judge a noob by its hairstyle</> },
    { t: "Accidentally Hit Reset", b: <>Well, there goes my progress and my pride</> },
    { t: "VIP Pass, Still Lost 💳😵", b: <>Spent 400 Robux just to fall in the lava 10 seconds in</> },
    { t: "Mom Took the PC 💻🚫", b: <>Just reached level 99… and now I’m logged out</> },
];
const GROUP_5 = [
    { t: "Friendly Fire in Roblox 🤜😡", b: <>Bro we’re on the same team! gets shot anyway</> },
    { t: "Invisible Admin Pranks", b: <>Strange things are happening... I smell an admin prank.</> },
    { t: "Scammer Trade Fail 🧢📦", b: <>Trust me bro = last words before inventory wiped.</> },
    { t: "Obby Victory = Pain", b: <>My fingers hurt. My soul hurts. Worth it.</> },
];
const GROUP_6 = [
    { t: "Free Robux Scam Again 🧠❌", b: <>Fool me once, shame on you. Fool me twice, still no Robux.</> },
    { t: "Tycoon at 3AM 🏗🌙", b: <>One more upgrade. Just one more. It’s already morning?</> },
];

function renderGroup(items) {
    return items.map((m) => (
        <MemeCard key={m.t} title={m.t}>{m.b}</MemeCard>
    ));
}

// Memes page (meme.html). Cards grouped exactly as the original, banner between the first two groups.
export default function Meme() {
    usePageTitle("Memes For Fun");
    return (
        <PageShell>
            <PageHeader title="Memes For Fun" />

            <div className="game_section" style={{ height: "auto" }}>{renderGroup(GROUP_TOP)}</div>

            <AdBanner bannerId="gpt-banner-meme" placement="meme" containerId="adsense-container" />

            <div className="game_section" style={{ height: "auto" }}>{renderGroup(GROUP_2)}</div>
            <div className="game_section" style={{ height: "auto" }}>{renderGroup(GROUP_3)}</div>
            <div className="game_section" style={{ height: "auto" }}>{renderGroup(GROUP_4)}</div>
            <div className="game_section" style={{ height: "auto" }}>{renderGroup(GROUP_5)}</div>
            <div className="game_section" style={{ height: "auto" }}>{renderGroup(GROUP_6)}</div>
        </PageShell>
    );
}
