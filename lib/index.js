

var TextAbbrev = function (list) {
    if (list === null) {
        throw new Error("list required");
    }
    if (Object.prototype.toString.call(list) !== '[object Array]') {
        throw new Error("Must pass a list");
    }
    this.words = list;
    this.result = this._abbrev();
};

TextAbbrev.prototype._abbrev = function() {

    var words = this.words;
    // ported from perl's Text::Abbrev 
    var table = { };
    var result = { };
    
    for (var i=0;i<words.length;i++) {
        
        for (var len = words[i].length -1; len > 0; --len) {
            
            var abbrev = words[i].substr(0,len);
            
            var seen = ( table[abbrev] === undefined) ? (table[abbrev] = 1) : ++table[abbrev];
            if (seen === 1) {
                result[abbrev] = words[i];
   
            } else if (seen === 2) {
                    delete result[abbrev];
            } else {
                continue;
            }

        }
        
    }
    for (var i=0; i<words.length;i++) {
        result[words[i]] = words[i];
    }
    //this.result = result;
    return result;
}
TextAbbrev.prototype.dump = function() {
    return this.result;
}

TextAbbrev.prototype.find = function(term) {
    if (typeof(term) !== 'string') {
        throw new Error("find requires a string");
    } else {
        if (this.result[term] !== undefined) {
            return this.result[term];
        } else {
            return null;
        }
        
    }
    
}




module.exports = TextAbbrev;
