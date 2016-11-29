module.exports = function(input){
    var words = input.replace(/[.]/g, '').split(/\s/);
    var expectedCounts = {};
    words.forEach(function(w) {
        if (!expectedCounts[w]) {
            expectedCounts[w] = 0;
        }
        expectedCounts[w] += 1;
    });

    return expectedCounts;
}

