function SearchEntriesLookupProcessor() {
    AbstractSearchProcessor.call(this);

    function initTopicData(bookData, topicPosition) {
        var topicData = bookData[topicPosition];
        if (!topicData) {
            bookData[topicPosition] = [0, 0, [], Infinity];
            topicData = bookData[topicPosition];
        }
        return topicData;
    }

    function addTopicData(bookData, topicPosition, topicRank, wordPositions) {
        var topicData = initTopicData(bookData, topicPosition);

        topicData[0] += topicRank;
        topicData[1] += 1;
        topicData[3] = getSmallestDifference(topicData[2], wordPositions, topicData[3]);
        topicData[2] = mergePositions(topicData[2], wordPositions);
    }

    function getPositionsDifference(firstEntry, secondEntry, smallestDif) {
        var difference = Math.abs(Math.abs(firstEntry) - Math.abs(secondEntry));

        if (Math.abs(smallestDif) > difference) {
            smallestDif = difference;
            if ((firstEntry < 0) || (Math.abs(secondEntry) > Math.abs(firstEntry))) {
                smallestDif = smallestDif * -1;
            }
        }
        return smallestDif;
    }

    function getSmallestDifference(positions1, positions2, previousValue) {
        var smallestDif = previousValue;
        for (var i = 0; i < positions1.length; i++) {
            for (var j = 0; j < positions2.length; j++) {
                smallestDif = getPositionsDifference(positions1[i], positions2[j], smallestDif);
            }
        }
        return smallestDif;
    }

    function mergePositions(positions1, positions2) {
        function sortFunction(a, b) {
            return Math.abs(a) - Math.abs(b);
        }
        var result = positions1.concat(positions2);
        result.sort(sortFunction);
        return result;
    }


    function addWordData(bookData, wordData) {
        for (var i = 0; i< wordData.length; i++) {
            var topicInfo = wordData[i];
            var topicPosition = topicInfo[0];
            var topicRank = topicInfo[1];
            var wordPositions = topicInfo[2];
            addTopicData(bookData, topicPosition, topicRank, wordPositions);
        }
    }

    function getTopicsData(wordsData) {
        var topicsData = {};
        for (var bookName in wordsData) {
            topicsData[bookName] = {};
            for (var word in wordsData[bookName]) {
                var wordData = wordsData[bookName][word];
                addWordData(topicsData[bookName], wordData);
            }
        }
        return topicsData;
    }

    this.processSearchResults = function(results, progressListener) {
        var wordsData = results.getWordsData();
        var topicData = getTopicsData(wordsData);
        results.setTopicsData(topicData);
        progressListener.onLookUpComplete();
        this.callNextProcessor(results, progressListener);
    }
}