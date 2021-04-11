const { data: Quran } = require("./quran.json");

class SurahHandler {
    static getAllSurah() {
        const data = Quran.map(item => {
            const surah = { ...item }
            delete surah.verses
            delete surah.preBismillah
            return surah
        })
        return data;
    }

    static getSurah(surah) {
        const data = Quran[surah - 1]
        if (data) {
            return data
        }
        return `Surah "${surah}" is not found.`;
    }

    static getAyahFromSurah(surah, ayah) {
        const checkSurah = Quran[surah - 1]
        if (!checkSurah) {
            return `Surah "${surah}" is not found.`;
        }
        const checkAyah = checkSurah.verses[ayah - 1]
        if (!checkAyah) {
            return `Ayah "${ayah}" in surah "${surah}" is not found.`;
        }

        const dataSurah = { ...checkSurah }
        delete dataSurah.verses
        const data = { ...checkAyah, surah: dataSurah }
        return data;
    }
}

module.exports = SurahHandler