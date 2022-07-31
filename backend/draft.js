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

}