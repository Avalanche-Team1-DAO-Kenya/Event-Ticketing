import { useState } from "react";
import QrScanner from "react-qr-scanner";

const VerifyPage = () => {
    const [data, setData] = useState<string | null>(null);

    const handleScan = (result: any) => {
        if (result) {
            setData(result.text);
        }
    };

    const handleError = (error: unknown) => {
        if (error instanceof Error) {
            console.error(error.message);  // Log the error message
        } else {
            console.error("An unknown error occurred", error);  // Log if the error is not an instance of Error
        }
    };

    return (
        <div>
            <h1>Verify Tickets</h1>
            <QrScanner
                delay={300}
                onError={handleError}
                onScan={handleScan}
            />
            {data && <p>Scanned Data: {data}</p>}
        </div>
    );
};

export default VerifyPage;
