import SmartLink from "../common/SmartLink.jsx";

// The "about / features / disclaimer" block repeated verbatim on several pages.
// Markup and copy are preserved exactly; the external reference link keeps the
// same ad-gated behavior through SmartLink.
export default function AboutSection() {
    return (
        <div className="resp_about_section">
            <div className="about_section">
                <h1>RBX Counter &amp; Fun Rewards – Your Ultimate Robux Calculator!</h1>

                <p>
                    Count your daily free robux with our easy-to-use and powerful free robux
                    counter, RBX calc and free robux converter.
                </p>

                <h1>Features</h1>
                <ul>
                    <li>RBX calculator</li>
                    <li>Convert BC, TBC, and OBX to RBX instantly</li>
                    <li>RBX to Dollar counter</li>
                    <li>Spin &amp; Win – Try your luck and win surprises!</li>
                    <li>Quiz Time – Test your RB knowledge and earn points</li>
                    <li>Lucky Scratch – Scratch &amp; reveal exciting rewards.</li>
                </ul>

                <h1>Important Information</h1>
                <p>
                    RBLX Calc : Robox Counters is an unofficial application and is not affiliated
                    with ROBLOX CORPORATION. It is designed to help players and fans discover free
                    items and is fully compliant with Roblox's community usage guidelines.
                </p>

                <h1>Refer to</h1>
                <p>
                    The name, logo and information provided by the application used in accordance
                    with the guidelines indicated in:
                </p>
                <p>
                    <SmartLink
                        href="https://en.help.roblox.com/hc/en-us/articles/115001708126-Roblox-Name-and-Logo-Community-Usage-Guidelines"
                        target="_blank"
                    >
                        https://en.help.roblox.com/hc/en-us/articles/115001708126-Roblox-Name-and-Logo-Community-Usage-Guidelines
                    </SmartLink>
                </p>
                <p>Thank you!</p>
            </div>
        </div>
    );
}
