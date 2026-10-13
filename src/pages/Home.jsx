import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/layout/PageShell.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import AdBanner from "../components/common/AdBanner.jsx";
import GameCard from "../components/common/GameCard.jsx";
import SmartLink from "../components/common/SmartLink.jsx";
import OopsPopup from "../components/feature/OopsPopup.jsx";
import useCoins from "../hooks/useCoins.js";
import usePageTitle from "../hooks/usePageTitle.js";
import { showAdWithLogic, getAdLoading } from "../services/analytics.js";
import { showToast, showErrorToast } from "../components/common/toast.js";

const REWARD_CARDS = [
    { img: "/assets/robux/Budget.png", href: "/budget-challenge", alt: "Budget Challenge" },
    { img: "/assets/robux/spinner.webp", href: "/spin_to_win", alt: "Spin to Win" },
    { img: "/assets/robux/scrapper_main.webp", href: "/scratch-win", alt: "Scratch Win" },
    { img: "/assets/robux/quiz_main.webp", href: "/quiz", alt: "Finance Quiz" },
    { img: "/assets/robux/meme.webp", href: "/meme", alt: "Finance Memes" },
];

export default function Home() {
    usePageTitle("Finzoria Finance");
    const navigate = useNavigate();
    const { coins, addCoins, setCoinsValue } = useCoins();

    const [earnLoading, setEarnLoading] = useState(false);
    const [oopsOpen, setOopsOpen] = useState(false);
    const [pendingGame, setPendingGame] = useState(null);

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

    function handleCardClick(e, href) {
        e.preventDefault();
        e.stopPropagation();
        const required = 10;
        if (coins < required) {
            setPendingGame(href);
            setOopsOpen(true);
        } else {
            setCoinsValue(coins - required);
            navigate(href);
        }
    }

    return (
        <PageShell>
            <PageHeader title="Finzoria Finance & Cloud" backClassName="home-back-button" />

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
                <SmartLink href="/sip-calculator">
                    <img src="/assets/robux/sip_banner.svg" className="homeimage" alt="SIP Calculator" />
                </SmartLink>
            </div>

            <AdBanner bannerId="gpt-banner-home-middle" placement="home_middle" containerId="adsense-container-2" />

            <div className="game_section" style={{ height: "auto" }}>
                <div className="game_section1">
                    {REWARD_CARDS.map((card) => (
                        <div className="game_section2 rewards earnCoin_section2" key={card.href} onClick={(e) => handleCardClick(e, card.href)}>
                            <a href={card.href} className="game_section3">
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
                    <SmartLink href="/cloud-cost">
                        <img src="/assets/robux/cloud_cost_banner.svg" className="homeimage" alt="Cloud Cost Calculator" />
                    </SmartLink>
                </div>
                <div className="rewards">
                    <SmartLink href="/emi-calculator">
                        <img src="/assets/robux/emi_banner.svg" className="homeimage" alt="EMI Calculator" />
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
