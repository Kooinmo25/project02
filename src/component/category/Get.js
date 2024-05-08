import { useEffect } from "react";
function Get() {
    const clientId = "C88k7kKQEPtcbHOYYaRs";
    const clientSecret = "5XoMjg7Tdx";

    useEffect(() => {
        fetch(
            "/v1/search/shop?query=여성 옷&filter=used:false&sort=sim&display=10&start=11", {
            method: "GET",
            headers: {
                "X-Naver-Client-Id": clientId,
                "X-Naver-Client-Secret": clientSecret,
            },
        }
        )
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, []);
}

export default Get;