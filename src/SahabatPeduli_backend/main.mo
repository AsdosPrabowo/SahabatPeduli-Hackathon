import Nat "mo:base/Nat";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";

actor {

    // Simulated balance storage for demonstration using HashMap
    var balances = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);

    // Function to display balance for a given account
    public func getBalance(account: Text): async ?Nat {
        return balances.get(account);
    };

    // Function to send balance from one account to another
    public func sendBalance(from: Text, to: Text, amount: Nat): async Text {
        let fromBalanceOpt = balances.get(from);
        switch (fromBalanceOpt) {
            case (null) { return "Account not found"; };
            case (?fromBalance) {
                if (fromBalance >= amount) {
                    balances.put(from, fromBalance - amount);
                    let toBalanceOpt = balances.get(to);
                    switch (toBalanceOpt) {
                        case (null) { balances.put(to, amount); };
                        case (?toBalance) { balances.put(to, toBalance + amount); };
                    };
                    return "Transfer successful";
                } else {
                    return "Insufficient funds";
                }
            };
        }
    };

    // Function to request balance to be added to an account
    public func requestBalance(account: Text, amount: Nat): async Nat {
        let currentBalanceOpt = balances.get(account);
        switch (currentBalanceOpt) {
            case (null) {
                balances.put(account, amount);
                return amount;
            };
            case (?currentBalance) {
                balances.put(account, currentBalance + amount);
                return currentBalance + amount;
            };
        }
    }
}
