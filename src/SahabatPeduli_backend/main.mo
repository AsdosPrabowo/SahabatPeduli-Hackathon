import Reports "reports/Reports";
import Balance "balance/Balance";
import CentralGovernment "data/CentralGovernment";
import RegionalGovernment "data/RegionalGovernment";
import CityGovernment "data/CityGovernment";
import DistrictGovernment "data/DistrictGovernment";

actor Main {
    // Authentication
    public func login(user: Principal): async Text {
        return Login.login(user).await;
    };

    public query func isLoggedIn(user: Principal): async Bool {
        return Login.isLoggedIn(user).await;
    };

    // Reports
    public func submitReport(title: Text, content: Text, timestamp: Int): async Text {
        return Reports.submitReport(title, content, timestamp).await;
    };

    public query func getAllReports(): async [Reports.Report] {
        return Reports.getAllReports().await;
    };

    public query func getTokens(): async [Text] {
        return Reports.getTokens().await;
    };

    // Balance
    public func addBalance(amount: Nat): async Nat {
        return Balance.addBalance(amount).await;
    };

    public query func getBalance(): async Nat {
        return Balance.getBalance().await;
    };

    // Central Government
    public func addMinistry(name: Text, budget: Nat): async Text {
        return CentralGovernment.addMinistry(name, budget).await;
    };

    public query func getAllMinistries(): async [CentralGovernment.Ministry] {
        return CentralGovernment.getAllMinistries().await;
    };

    // Regional Government
    public func addRegion(name: Text, population: Nat): async Text {
        return RegionalGovernment.addRegion(name, population).await;
    };

    public query func getAllRegions(): async [RegionalGovernment.Region] {
        return RegionalGovernment.getAllRegions().await;
    };

    // City Government
    public func addCity(name: Text, population: Nat): async Text {
        return CityGovernment.addCity(name, population).await;
    };

    public query func getAllCities(): async [CityGovernment.City] {
        return CityGovernment.getAllCities().await;
    };

    // District Government
    public func addDistrict(name: Text, population: Nat): async Text {
        return DistrictGovernment.addDistrict(name, population).await;
    };

    public query func getAllDistricts(): async [DistrictGovernment.District] {
        return DistrictGovernment.getAllDistricts().await;
    };
}
