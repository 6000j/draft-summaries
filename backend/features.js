class Feature {
    
    // Both exist just to make shorthand possible in the future. Mainly use CC.
    static CrowdControl = new Feature("crowdControl");
    static CC = new Feature("crowdcCntrol");

    static PointClickCrowdControl = new Feature("pointClickCrowdControl")

    static Engage = new Feature("engage");
    
    static Poke = new Feature("poke");

    constructor(name) {
        this.name = name;
    }
}