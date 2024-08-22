// Reports.mo
import Tokens "tokens/Tokens";

module {
    public type Report = {
        title: Text;
        content: Text;
        timestamp: Int;
    };

    private var reportList: [Report] = [];
    private var tokenList: [Text] = [];

    public func submitReport(title: Text, content: Text, timestamp: Int): async Text {
        let report = {title = title; content = content; timestamp = timestamp};
        reportList := Array.append(reportList, [report]);
        let token = Tokens.generateToken(timestamp);
        tokenList := Array.append(tokenList, [token]);
        return token;
    };

    public query func getAllReports(): async [Report] {
        return reportList;
    };

    public query func getTokens(): async [Text] {
        return tokenList;
    };
}
