import USP from "@pages/LandingPage/USP"
import HowTo from "@pages/LandingPage/HowTo"
import ForWhom from "@pages/LandingPage/ForWhom"
import CallToAction from "./CallToAction"
import FormLoginRegistration from "@components/FormLoginRegistration/FormLoginRegistration"

export default function LandingPage() {
    return (
        <main>
            <FormLoginRegistration />
            {/* <USP />
            <HowTo />
            <ForWhom />
            <CallToAction /> */}
        </main>
    )
}