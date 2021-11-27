class HttpReponse {
    uri: string;
    method: string;
    data: any;
    constructor(uri: string, method: string, data: any) {
        this.uri = uri;
        this.method = method;
        this.data = data;
    }
}

export { HttpReponse };