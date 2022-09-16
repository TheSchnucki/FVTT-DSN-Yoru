
export class DieCise extends Die {
    constructor(termData) {
        termData.faces=6;
        super(termData);
    }

    /* -------------------------------------------- */

    /** @override */
    static DENOMINATION = "s";

    /** @override */
    get total(){
        return this.results.length;
    }

    /* -------------------------------------------- */

    /** @override */
    getResultLabel(result) {
        return {
			       "1": '<img src="modules/fvtt-dsn-yoru/artwork/S1_inCHAT.png" />',
             "2": '<img src="modules/fvtt-dsn-yoru/artwork/S2_inCHAT.png" />',
             "3": '<img src="modules/fvtt-dsn-yoru/artwork/S3_inCHAT.png" />',
             "4": '<img src="modules/fvtt-dsn-yoru/artwork/S4_inCHAT.png" />',
			       "5": '<img src="modules/fvtt-dsn-yoru/artwork/S5_inCHAT.png" />',
             "6": '<img src="modules/fvtt-dsn-yoru/artwork/S6_inCHAT.png" />'
        }[result.result];
    }
}
