import axios from "axios";

export function pushPurchaseInfos(body) {
    const url = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
    const promise = axios.post(url, body);
    return promise;
}