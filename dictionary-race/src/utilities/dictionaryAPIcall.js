async function dictionaryAPIcall(word) {
    // calls the unofficial google dictionary API and returns definitions in and Array
    console.log("API CALL", word);
    let response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
    );
    let data = await response.json();
    let meanings = data[0].meanings;
    let definitions = meanings.map((defn) => {
        return defn.definitions[0].definition;
    });
    return definitions;
}

export default dictionaryAPIcall;
