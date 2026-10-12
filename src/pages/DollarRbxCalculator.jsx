import PageShell from "../components/layout/PageShell.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import SimpleCalculator from "../components/feature/SimpleCalculator.jsx";
import usePageTitle from "../hooks/usePageTitle.js";
import { dollarToRbx } from "../utils/calculations.js";

export default function DollarRbxCalculator() {
    usePageTitle("Dollar to RBX Calculator");
    return (
        <PageShell>
            <PageHeader title="Dollar to RBX Calculator" />
            <SimpleCalculator
                placeholder="Enter Dollar Amount"
                alertMessage="Please enter the dollar amount"
                compute={dollarToRbx}
                resultLabel="Getting this much of Dollars will cost :"
                bannerId="gpt-banner-dollar-rbx-cal"
                bannerPlacement="dollar_rbx_cal"
            />
        </PageShell>
    );
}
