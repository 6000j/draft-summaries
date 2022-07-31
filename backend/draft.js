import {ChampsData} from './champsListData.js'

class Draft {

    // Empty constructor
    constructor() {
        this.picks = [];
        this.bluePicks = [];
        this.redPicks = [];
        this.lastpicked = 0;
    }
    constructor(picks) {
        this.picks = picks;
        this.bluepicks = picks.slice(0, 5);
        this.redPicks = picks.slice(5);
    }

    constructor(picks, teams) {
        this.picks = picks;
        this.teams = teams;
        this.bluepicks = picks.slice(0, 5);
        this.redPicks = picks.slice(5);
    }

    // look i need a way to accept string input ok
    // please don't bully
    pickChampFromString(champName) {
        this.pickChamp(ChampsData.champName);
    }


    // Takes in the champ as an object
    pickChamp(champ) {
        switch(this.calculateLengthInProg()) {
            case 0:
                // B1
                this.bluePicks[0] = champ;
                break;
            case 1:
                // R1
                this.redPicks[0] = champ;
                break;
            case 2:
                // R2
                this.redPicks[1] = champ;
                break;
            case 3:
                // B2
                this.bluePicks[1] = champ;
                break;
            case 4:
                // B3
                this.bluePicks[2] = champ;
                break;
            case 5:
                // R3
                this.redPicks[2] = champ;
                break;
            case 6:
                // R4
                this.redPicks[3] = champ;
                break;
            case 7:
                // B4
                this.bluePicks[3] = champ;
                break;
            case 8:
                // B5
                this.bluePicks[4] = champ;
                break;
            case 9:
                // R5
                this.redPicks[4] = champ;
                // We've finished the draft, so now we create the full draft list!
                this.picks = this.bluePicks.concat(this.redPicks);

                // Also, run the "analysis" function soon probably?
                break;
            default:
                // do nothing
                break;
        }
    }

    calculateLengthInProg() {
        return this.bluePicks.length + this.redPicks.length;
    }

    getFeaturesForAllChamps() {
        let features = [];
        for (let i = 0; i < this.picks.length; i++) {
            features[i] = this.picks[i].features;
        }
        return features;
    }

    


    // Gets the list of champs with a given feature in a given list
    getChampsWithFeature(toCheck, feature) {
        return toCheck.filter(x => x.features.includes(feature));
    }

    // Returns an array with each element equal to the scores of a given type from the input array
    getScoresOfChamps(toCheck, score) {
        return toCheck.map(x => x.scores[score]);
    }


    // yes this is a sum of elements. yep
    sumOfElts(inp) {
        return inp.reduce((a,b) => a+b);
    }

    highestElt(inp) {
        return inp.reduce((a,b) => Math.max(a,b));
    }

    // Runs a basic heuristic test
    analyseBasicFeatures() {
        let complaints = [];

        // Damage
        let bDamage = this.getScoresOfChamps(this.bluePicks, "damage");
        let rDamage = this.getScoresOfChamps(this.redPicks, "damage");
        // Range
        let bRange = this.getScoresOfChamps(this.bluePicks, "range");
        let rRange = this.getScoresOfChamps(this.redPicks, "range");
        // Range
        let bFrontline = this.getScoresOfChamps(this.bluePicks, "frontline");
        let rFrontline = this.getScoresOfChamps(this.redPicks, "frontline");
        // Range
        let bPrio = this.getScoresOfChamps(this.bluePicks, "earlyGamePrio");
        let rPrio = this.getScoresOfChamps(this.redPicks, "earlyGamePrio");
        // Range
        let bScaling = this.getScoresOfChamps(this.bluePicks, "scaling");
        let rScaling = this.getScoresOfChamps(this.redPicks, "scaling");

        this.checkEngageValidity();

        this.checkScoreValidity("damage", )

    }

    // hmm
    checkEngageValidity() {
        let complaints = []

        // Engage
        let bEngage = this.getChampsWithFeature(this.bluePicks, "engage");
        let rEngage = this.getChampsWithFeature(this.redPicks, "engage");

        // Complaining about engage
        if (bEngage.length === 0) {
            complaints.push("Blue side does not have any engage!");
        }
        if (rEngage.length === 0) {
            complaints.push("Red side does not have any engage!");
        }
        
        return complaints;
    }

    checkScoreValidity(score, sumWanted, peakWanted, niceVersion) {
        let complaints = [];
        l
        // Scores
        let bScore = this.getScoresOfChamps(this.bluePicks, score);
        let rScore = this.getScoresOfChamps(this.redPicks, score);

        if (this.sumOfElts(bScore) < sumWanted) {
            complaints.push("Blue side is low on " + niceVersion + "!");
        }
        if (this.sumOfElts(rScore) < sumWanted) {
            complaints.push("Red side is low on " + niceVersion + "!");
        }
        if (this.highestElt(bScore) < peakWanted) {
            complaints.push("Blue side is all low at " + niceVersion + "!");
        }
        if (this.highestElt(rScore) < peakWanted) {
            complaints.push("Red side is all low at " + niceVersion + "!");
        }
    }
}