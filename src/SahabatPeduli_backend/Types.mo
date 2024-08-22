module Types {
    public module {
        // Define the user role types
        public type UserRole = {
            #Pemerintah;
            #OrangUmum;
        };

        // User Structure
        public type User = {
            id : Text; // The user's unique ID
            role : UserRole; // The user's role
            junoId : Text; // Juno identifier for the user
            name : Text;
            address : Text;
            receivedFunds : Nat;
        };

        // Report Structure
        public type Report = {
            title : Text;
            content : Text;
            timestamp : Int;
            reason : Text;
        };

        // Ministry Structure
        public type Ministry = {
            name : Text;
            budget : Nat;
            addBalance : Nat -> Nat;
            sentBalance : Nat -> Nat;
        };

        // Region Structure
        public type Region = {
            name : Text;
            population : Nat;
            requestBalance : Nat -> Nat;
        };

        // City Structure
        public type City = {
            name : Text;
            population : Nat;
            requestBalance : Nat -> Nat;
        };

        // District Structure
        public type District = {
            name : Text;
            population : Nat;
            requestBalance : Nat -> Nat;
        };
    };
};
