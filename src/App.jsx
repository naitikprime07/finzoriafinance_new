import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Anime from "./pages/Anime.jsx";
import Clothes from "./pages/Clothes.jsx";
import Meme from "./pages/Meme.jsx";
import Quiz from "./pages/Quiz.jsx";
import Skin from "./pages/Skin.jsx";
import SkinActive from "./pages/SkinActive.jsx";
import ScratchWin from "./pages/ScratchWin.jsx";
import SpinToWin from "./pages/SpinToWin.jsx";
import DailyRConverter from "./pages/DailyRConverter.jsx";
import DailyFreeRbxCalculator from "./pages/DailyFreeRbxCalculator.jsx";
import DollarRbxCalculator from "./pages/DollarRbxCalculator.jsx";
import RbxDollarCalculator from "./pages/RbxDollarCalculator.jsx";
import BcRbxCounter from "./pages/BcRbxCounter.jsx";
import TbcRbxCounter from "./pages/TbcRbxCounter.jsx";
import ObcRbxCounter from "./pages/ObcRbxCounter.jsx";
import Ads from "./services/ads.js";

// Clean path + matching ".html" alias for every page (preserves original URLs).
const PAGES = [
    ["/home", Home],
    ["/anime", Anime],
    ["/clothes", Clothes],
    ["/meme", Meme],
    ["/quiz", Quiz],
    ["/skin", Skin],
    ["/skinactive", SkinActive],
    ["/scratch-win", ScratchWin],
    ["/spin_to_win", SpinToWin],
    ["/daily-r-converter", DailyRConverter],
    ["/daily-free-rbx-cal", DailyFreeRbxCalculator],
    ["/dollar-rbx-cal", DollarRbxCalculator],
    ["/rbx-dollar-cal", RbxDollarCalculator],
    ["/bc-rbx-counter", BcRbxCounter],
    ["/tbc-rbx-counter", TbcRbxCounter],
    ["/obc-rbx-counter", ObcRbxCounter],
];

export default function App() {
    // App-open rewarded ad: same UX as  — GAM's out-of-page rewarded
    // overlay (with its native "Please wait N seconds" countdown) fires automatically once
    // when the React app mounts. Uses the Google public test unit configured in
    // config/ads-config.js -> rewarded: "/22639388115/rewarded_web_example".
    // Also supports Google's official testing hash: adding #goog_rewarded to the URL
    // re-triggers the same flow (useful when the first attempt was blocked by the browser
    // for lack of a user gesture — the hash lets QA force a fresh attempt).
    const startupFiredRef = useRef(false);
    useEffect(() => {
        const SESSION_KEY = "startup_rewarded_shown";
        function fireStartupRewarded() {
            if (startupFiredRef.current) return;
            if (sessionStorage.getItem(SESSION_KEY) === "1") return;
            startupFiredRef.current = true;
            sessionStorage.setItem(SESSION_KEY, "1");
            Ads.showRewarded((result) => {
                console.log("[Startup Rewarded] result:", result && result.breakStatus);
            });
        }
        // Small delay so GPT's enableServices() and slot registration settle first.
        const t = setTimeout(fireStartupRewarded, 300);
        // #goog_rewarded hash: allow re-triggering by clearing the once-per-session flag.
        if (window.location.hash === "#goog_rewarded") {
            sessionStorage.removeItem(SESSION_KEY);
            fireStartupRewarded();
        }
        return () => clearTimeout(t);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/index.html" element={<Index />} />
            {PAGES.map(([path, El]) => (
                <Route key={path} path={path} element={<El />} />
            ))}
            {PAGES.map(([path, El]) => (
                <Route key={`${path}.html`} path={`${path}.html`} element={<El />} />
            ))}
            {/* Unknown URL -> landing, mirroring a static host without the page. */}
            <Route path="*" element={<Index />} />
        </Routes>
    );
}
