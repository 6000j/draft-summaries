class Feature {
    
    // Both exist just to make shorthand possible in the future. Mainly use CC.
    static CrowdControl = new Feature("crowdControl");
    static CC = new Feature("crowdControl");

    static PointClickCrowdControl = new Feature("pointClickCrowdControl")

    static Engage = new Feature("engage");
    static PrimaryEngage = new Feature("primaryEngage");

    
    static Poke = new Feature("poke");

    static SelfHealing = new Feature("selfHealing");

    

    constructor(name) {
        this.name = name;
    }
}