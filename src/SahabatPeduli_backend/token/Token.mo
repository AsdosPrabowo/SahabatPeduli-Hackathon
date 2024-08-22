module {
    private var tokenList: [Text] = [];

    public func generateToken(timestamp: Int): Text {
        let token = "Token-" # Int.toText(timestamp);
        tokenList := Array.append(tokenList, [token]);
        return token;
    };

    public query func getAllTokens(): async [Text] {
        return tokenList;
    };
}
