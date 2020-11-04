function SearchEntriesCompactor() {
    AbstractSearchProcessor.call(this);

    function entriesSortFunction(a, b) {
        return a[0]-b[0];
    }
    function positionsSortFunction(a, b) {
        return Math.abs(a) - Math.abs(b);
    }

    function joinEntries(first, second) {
        first[1]+=second[1];
        first[2] = first[2].concat(second[2]);
        first[2].sort(positionsSortFunction);
    }

    function compactQueryEntries(queryEntries) {
        var results = [];
        for (var word in queryEntries) {
            results.push.apply(results, queryEntries[word]);
        }
        results.sort(entriesSortFunction);
        var index = 0;
        while (index < (results.length - 1)) {
            var firstEntry = results[index];
            var secondEntry = results[index+1];
            if (firstEntry[0] == secondEntry[0]) {
                joinEntries(firstEntry, secondEntry);
                results.splice(index+1, 1);
            } else {
                index++;
            }
        }
        return results;
    }

    function compactEntries(wordsData) {
        for (var bookName in wordsData) {
            for (var queryName in wordsData[bookName]) {
                wordsData[bookName][queryName] = compactQueryEntries(wordsData[bookName][queryName]);
            }
        }
    }

    this.processSearchResults= function(searchResult, progressListener) {
        var wordsData = searchResult.getWordsData();
        compactEntries(wordsData);
        searchResult.setWordsData(wordsData);
        this.callNextProcessor(searchResult, progressListener);
    }
}