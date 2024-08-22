import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Principal "mo:base/Principal";

actor {
  var balances : HashMap.HashMap<Principal, Nat> = HashMap.HashMap<Principal, Nat>(10, Principal.equal, Principal.hash);

  public func initializeAccount(account : Text, initialBalance : Nat) : async Text {
    let principal = Principal.fromText(account);
    balances.put(principal, initialBalance);
    return "Account initialized for " # account # " with balance " # Nat.toText(initialBalance);
  };

  public func getBalance(account : Text) : async ?Nat {
    let principal = Principal.fromText(account);
    return balances.get(principal);
  };

  public func getTotalBalance(account1 : Text, account2 : Text) : async ?Nat {
    let principal1 = Principal.fromText(account1);
    let principal2 = Principal.fromText(account2);

    let balance1Opt = balances.get(principal1);
    let balance2Opt = balances.get(principal2);

    switch (balance1Opt, balance2Opt) {
      case (?b1, ?b2) {
        return ?(b1 + b2);
      };
      case (?b1, null) {
        return ?b1;
      };
      case (null, ?b2) {
        return ?b2;
      };
      case (null, null) {
        return null;
      };
    };
  };

  public func sendBalance(fromAccount : Text, toAccount : Text, amount : Nat) : async ?Text {
    let principal1 = Principal.fromText(fromAccount);
    let principal2 = Principal.fromText(toAccount);

    let balance1Opt = balances.get(principal1);
    let balance2Opt = balances.get(principal2);

    switch (balance1Opt) {
      case (null) {
        return ?("Account " # fromAccount # " does not have a balance");
      };
      case (?balance1) {
        if (balance1 < amount) {
          return ?("Insufficient funds in account " # fromAccount);
        } else {
          balances.put(principal1, balance1 - amount);
          let newBalance2 = switch (balance2Opt) {
            case (null) { amount };
            case (?balance2) { balance2 + amount };
          };
          balances.put(principal2, newBalance2);
          return ?("Transfer successful from " # fromAccount # " to " # toAccount);
        };
      };
    };
  };

  // Function to add balance to the specified account
  public func addBalance(account : Text, amount : Nat) : async Text {
    let principal = Principal.fromText(account);
    let currentBalanceOpt = balances.get(principal);
    let newBalance = switch (currentBalanceOpt) {
      case (null) { amount }; 
      case (?currentBalance) { currentBalance + amount };
    };
    balances.put(principal, newBalance);
    return "+ for " # account #  Nat.toText(newBalance);
  };
};
