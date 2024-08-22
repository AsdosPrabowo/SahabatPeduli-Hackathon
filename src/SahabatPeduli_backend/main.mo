import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor {
  // Simulated balance storage using HashMap
  var balances : HashMap.HashMap<Text, Nat> = HashMap.HashMap<Text, Nat>(10, Text.equal, Text.hash);

  // Function to initialize an account with some balance
  public func initializeAccount(account : Text, initialBalance : Nat) : async Text {
    balances.put(account, initialBalance);
    return "Account initialized with balance " # Nat.toText(initialBalance);
  };

  // Function to get the balance of a single account
  public func getBalance(account : Text) : async ?Nat {
    return balances.get(account);
  };

  // Function to calculate the total balance of two accounts
  public func getTotalBalance(account1 : Text, account2 : Text) : async ?Nat {
    // Retrieve balances for both accounts
    let balance1Opt = balances.get(account1);
    let balance2Opt = balances.get(account2);

    // Ensure both accounts exist and handle different scenarios
    switch (balance1Opt, balance2Opt) {
      case (?b1, ?b2) {
        return ?(b1 + b2); // Return the sum of both balances
      };
      case (?b1, null) {
        return ?b1; // Return balance of account1, account2 does not exist
      };
      case (null, ?b2) {
        return ?b2; // Return balance of account2, account1 does not exist
      };
      case (null, null) {
        return null; // Both accounts do not exist
      };
    };
  };

  // Function to send balance from account1 to account2
  public func sendBalance(account1 : Text, account2 : Text, amount : Nat) : async ?Text {
    // Retrieve balances for both accounts
    let balance1Opt = balances.get(account1);
    let balance2Opt = balances.get(account2);

    // Check if account1 does not have a balance
    switch (balance1Opt) {
      case (null) {
        return ?("Account1 does not have a balance");
      };
      case (?balance1) {
        if (balance1 < amount) {
          return ?("Insufficient funds in Account1");
        } else {
          // Update balance of account1
          balances.put(account1, balance1 - amount);

          // Update balance of account2, even if it didn't exist before
          let newBalance2 = switch (balance2Opt) {
            case (null) { amount }; // If account2 doesn't exist, initialize with the amount
            case (?balance2) { balance2 + amount }; // If account2 exists, add to the current balance
          };
          balances.put(account2, newBalance2);

          return ?("Transfer successful");
        };
      };
    };
  };
};
