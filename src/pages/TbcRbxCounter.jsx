import PageShell from "../components/layout/PageShell.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import SimpleCalculator from "../components/feature/SimpleCalculator.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { tbcCounter } from "../utils/calculations.js";

export default function TbcRbxCounter() {
    usePageTitle("TBC RBX Counter");
    return (
        <PageShell>
            <PageHeader title="TBC RBX Counter" />
            <SimpleCalculator
                placeholder="Enter Number of Days"
                alertMessage="Please enter a valid number of days"
                compute={tbcCounter}
                resultLabel={<span>If You are a Builder club member<br />You will get :</span>}
                bannerId="gpt-banner-tbc-rbx-counter"
                bannerPlacement="tbc_rbx_counter"
            />
        </PageShell>
    );
}
