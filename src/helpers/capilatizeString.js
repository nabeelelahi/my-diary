export default function capitalizeString(string) {

    if (string && typeof string === 'string') {

        const isUpperCase = (string) => /^[A-Z]*$/.test(string)

        let words = string.replace(new RegExp("_", "g"), ' ')

        words = words.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].split(/(?=[A-Z])/)
            if (words[i].length > 1) {
                words[i] = words[i].toString()
                words[i] = words[i].replace(/,/g, " ")
            }
        }
        return words.join(" ")

    }

    else return string

}