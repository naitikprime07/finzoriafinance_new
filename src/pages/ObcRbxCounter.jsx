import PageShell from "../components/layout/PageShell.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import SimpleCalculator from "../components/feature/SimpleCalculator.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { obcCounter } from "../utils/calculations.js";

export default function ObcRbxCounter() {
    usePageTitle("OBC RBX Counter");
    return (
        <PageShell>
            <PageHeader title="OBC RBX Counter" />
            <SimpleCalculator
                placeholder="Enter Number of Days"
                alertMessage="Please enter a valid number of days"
                compute={obcCounter}
                resultLabel={<span>If You are a Builder club member<br />You will get :</span>}
                bannerId="gpt-banner-obc-rbx-counter"
                bannerPlacement="obc_rbx_counter"
            />
        </PageShell>
    );
}
