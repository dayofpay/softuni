(function () {
    String.prototype.ensureStart = function (str) {
        if(!this.startsWith(str)){
            return str + this;
        }
        return this.toString();
    };
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (!this.includes(' ')) { 
            return this.slice(0, n - 3) + '...';
        }
        let truncatedString = this.slice(0, n - 3);
        let words = truncatedString.split(' ');
        words.pop();
        return words.join(' ') + '...';
    };
    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
          return this + str;
        }
        return this.toString();
      };
      String.prototype.isEmpty = function() {
        return this.length === 0;
      };
    
      String.format = function(string, ...params) {
        for (let i = 0; i < params.length; i++) {
          string = string.replace(`{${i}}`, params[i]);
        }
        return string;
      };
})()