class Champion {
    constructor(name) {
        // Load in champ based on name from file
        this.abilities = [];
    }

    // Returns all abilities
    getAllAbilities() {
        return this.abilities;
    }

    // Returns the ability in a specified spot
    getAbilityBySlot(slot) {
        switch(slot) {
            case 'q':
                return this.abilities[0];
                break;
            case 'w':
                return this.abilities[1];
                break;
            case 'e':
                return this.abilities[2];
                break;
            case 'r':
                return this.abilities[3];
                break;
            default:
                return undefined;
                break;
        }
    }

    // Returns all the abilities the champ has with a specified feature (i.e engage, peel, poke, etc.)
    getAbilitiesByFeature(feature) {
        return this.abilities.filter(x => x.features.includes(feature));
    }

    // Returns a summary of the "stats" this champ has. 
    getSummary() {
        return this.stats;
    }
}