// Type.mo
module {
    public type Report = {
        title: Text;
        content: Text;
        timestamp: Int;
    };

    public type Ministry = {
        name: Text;
        budget: Nat;
    };

    public type Region = {
        name: Text;
        population: Nat;
    };

    public type City = {
        name: Text;
        population: Nat;
    };

    public type District = {
        name: Text;
        population: Nat;
    };
}
