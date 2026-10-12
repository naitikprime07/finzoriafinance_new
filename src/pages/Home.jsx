import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import AdBanner from "../components/common/AdBanner.jsx";
import SmartLink from "../components/common/SmartLink.jsx";
import OopsPopup from "../components/feature/OopsPopup.jsx";
import useCoins from "../hooks/useCoins.js";
import usePageTitle from "../hooks/usePageTitle.js";
import { showAdWithLogic, getAdLoading } from "../services/analytics.js";
import { showToast, showErrorToast } from "../components/common/toast.js";
import { toRoutePath } from "../utils/routes.js";

const REWARD_CARDS = [
    { img: "/assets/robux/todayclaim.webp", href: "clothes.html", alt: "Rbux Counter" },
    { img: "/assets/robux/spinner.webp", href: "spin_to_win.html", alt: "Rbux Counter" },
    { img: "/assets/robux/scrapper_main.webp", href: "scratch-win.html", alt: "Rbux Counter" },
    { img: "/assets/robux/quiz_main.webp", href: "quiz.html", alt: "Quiz" },
    { img: "/assets/robux/meme.webp", href: "meme.html", alt: "Rbux Counter" },
];

export default function Home() {
    usePageTitle("Rbux Counter");
    const navigate = useNavigate();
    const { coins, addCoins, setCoinsValue } = useCoins();

    const [earnLoading, setEarnLoading] = useState(false);
    const [oopsOpen, setOopsOpen] = useState(false);
    const [pendingGame, setPendingGame] = useState(null);

    // Earn Free Coins: a rewarded ad grants +10 coins (original earnCoinBtn handler).
    function handleEarn() {
        if (earnLoading || getAdLoading()) return;
        setEarnLoading(true);
        showAdWithLogic((result) => {
            if (result && result.breakStatus === "viewed") {
                addCoins(10);
                showToast();
            } else {
                showErrorToast();
            }
            setEarnLoading(false);
        });
    }

    // Coin-gated game cards (original .earnCoin_section2): 10 coins to enter, else Oops popup.
    function handleCardClick(e, href) {
        e.preventDefault();
        e.stopPropagation();
        const required = 10;
        const route = toRoutePath(href);
        if (coins < required) {
            setPendingGame(route);
            setOopsOpen(true);
        } else {
            setCoinsValue(coins - required);
            navigate(route);
        }
    }

    return (
        <PageShell>
            <PageHeader title="Get Rbux Counter" backClassName="home-back-button" />

            <AdBanner bannerId="gpt-banner-home-top" placement="home_top" containerId="adsense-container" />

            <div className="resp_choose_game">
                <div className="choose_game" style={{ marginTop: "5px" }}>
                    <div className="redeem-coin">
                        <img src="/assets/icons/coin-earn.png" alt="" />
                        <span id="coin">{coins}</span>
                    </div>
                    <div className="earn-coin-btn">
                        <button id="earnCoinBtn" disabled={earnLoading} onClick={handleEarn}>
                            {!earnLoading && <img src="/assets/icons/coin.png" alt="" />}
                            {earnLoading ? "Loading Ad... ⏳" : "Earn Free Coins"}
                        </button>
                        <span className="ad-tag-earn">Ad</span>
                    </div>
                </div>
            </div>

            <div>
                <SmartLink href="daily-r-converter.html">
                    <img src="/assets/robux/routinecal_main.webp" className="homeimage" alt="Rbux Counter" />
                </SmartLink>
            </div>

            <AdBanner bannerId="gpt-banner-home-middle" placement="home_middle" containerId="adsense-container-2" />

            <div className="game_section" style={{ height: "auto" }}>
                <div className="game_section1">
                    {REWARD_CARDS.map((card) => (
                        <div className="game_section2 rewards earnCoin_section2" key={card.href} onClick={(e) => handleCardClick(e, card.href)}>
                            <a href={toRoutePath(card.href)} className="game_section3">
                                <div className="game_section4">
                                    <picture>
                                        <img src={card.img} alt={card.alt} loading="eager" className="game_section_img" />
                                    </picture>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="game_section" style={{ height: "auto" }}>
                <div className="rewards">
                    <SmartLink href="rbx-dollar-cal.html">
                        <img src="/assets/robux/rd_main.webp" className="homeimage" alt="Rbux Counter" />
                    </SmartLink>
                </div>
                <div className="rewards">
                    <SmartLink href="dollar-rbx-cal.html">
                        <img src="/assets/robux/dr_main.webp" className="homeimage" alt="Rbux Counter" />
                    </SmartLink>
                </div>
            </div>

            <OopsPopup
                open={oopsOpen}
                gameUrl={pendingGame}
                navigate={navigate}
                onClose={() => setOopsOpen(false)}
            />
        </PageShell>
    );
}
