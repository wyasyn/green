import Link from "next/link";

export default function Map() {
    return (
        <div id="location">
            <div className="imap">
                <iframe
                    title="location"
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kyaliwajjala,%20Wakiso+(Primates%20Code)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                    <Link href="https://www.maps.ie/population/">
                        Population mapping
                    </Link>
                </iframe>
            </div>
        </div>
    );
}
