// // Token.mo
// import Nat "mo:base/Nat";
// import Map "mo:base/Map";

// actor Token {
//     private var totalSupply: Nat = 0;
//     private var balances: Map.Map<Principal, Nat> = Map.empty<Principal, Nat>();

//     public func mint(to: Principal, amount: Nat): async Text {
//         let currentBalance = Map.get(balances, to).unwrapOr(0);
//         balances := Map.put(balances, to, currentBalance + amount);
//         totalSupply += amount;
//         return "Minted successfully";
//     };

//     public func transfer(from: Principal, to: Principal, amount: Nat): async Text {
//         let senderBalance = Map.get(balances, from).unwrapOr(0);

//         if (senderBalance < amount) {
//             return "Insufficient balance";
//         };

//         let receiverBalance = Map.get(balances, to).unwrapOr(0);

//         balances := Map.put(balances, from, senderBalance - amount);
//         balances := Map.put(balances, to, receiverBalance + amount);

//         return "Transfer successful";
//     };

//     public query func balanceOf(owner: Principal): async Nat {
//         return Map.get(balances, owner).unwrapOr(0);
//     };

//     public query func getTotalSupply(): async Nat {
//         return totalSupply;
//     };
// }
