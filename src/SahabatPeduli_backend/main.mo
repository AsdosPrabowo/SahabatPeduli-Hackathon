import Text "mo:base/Text";   
import Nat "mo:base/Nat";     
import Int "mo:base/Int";  
import Array "mo:base/Array";  

import Type "Types"; 

actor Main {
    // Authentication
    private var loggedInUsers: [Principal] = [];

    public func login(user: Principal): async Text {
        if (isUserLoggedIn(user)) {
            loggedInUsers := Array.append(loggedInUsers, [user]);
        };
        return "Login successful";
    };

    public query func isLoggedIn(user: Principal): async Bool {
        return isUserLoggedIn(user);
    };

    private func isUserLoggedIn(user: Principal): Bool {
        return Array.any<Principal>(loggedInUsers, func(u) { u == user });
    };

    // Reports Management
    private var reportList: [Type.Report] = [];
    private var tokenList: [Text] = [];

    public func submitReport(title: Text, content: Text, timestamp: Int): async Text {
        let report = {title = title; content = content; timestamp = timestamp};
        reportList := Array.append(reportList, [report]);
        let token = "Token-" # Int.toText(timestamp);
        tokenList := Array.append(tokenList, [token]);
        return token;
    };

    public query func getAllReports(): async [Type.Report] {
        return reportList;
    };

    public query func getTokens(): async [Text] {
        return tokenList;
    };

    // Balance Management
    private var balance: Nat = 0;

    public func addBalance(amount: Nat): async Nat {
        balance += amount;
        return balance;
    };

    public query func getBalance(): async Nat {
        return balance;
    };

    // Central Government Management
    private var ministries: [Type.Ministry] = [];

    public func addMinistry(name: Text, budget: Nat): async Text {
        let ministry = {name = name; budget = budget};
        ministries := Array.append(ministries, [ministry]);
        return "Ministry added successfully";
    };

    public query func getAllMinistries(): async [Type.Ministry] {
        return ministries;
    };

    // Regional Government Management
    private var regions: [Type.Region] = [];

    public func addRegion(name: Text, population: Nat): async Text {
        let region = {name = name; population = population};
        regions := Array.append(regions, [region]);
        return "Region added successfully";
    };

    public query func getAllRegions(): async [Type.Region] {
        return regions;
    };

    // City Government Management
    private var cities: [Type.City] = [];

    public func addCity(name: Text, population: Nat): async Text {
        let city = {name = name; population = population};
        cities := Array.append(cities, [city]);
        return "City added successfully";
    };

    public query func getAllCities(): async [Type.City] {
        return cities;
    };

    // District Government Management
    private var districts: [Type.District] = [];

    public func addDistrict(name: Text, population: Nat): async Text {
        let district = {name = name; population = population};
        districts := Array.append(districts, [district]);
        return "District added successfully";
    };

    public query func getAllDistricts(): async [Type.District] {
        return districts;
    };
}
