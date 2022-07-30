class Champion {
    constructor(name) {
        // Load in champ based on name from file
        this.abilities = [];
    }

    getAllAbilities() {
        return this.abilities;
    }

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
}