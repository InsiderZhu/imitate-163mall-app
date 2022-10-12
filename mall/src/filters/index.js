    export function priceFormat(price) {
        var f = parseFloat(price); 
        if (isNaN(price)) { 
            return null; 
        } 
        var f = Math.round(price*100)/100; 
        var s = f.toString(); 
        var rs = s.indexOf('.'); 
        if (rs < 0) { 
            rs = s.length; 
            s += '.'; 
        } 
        while (s.length <= rs + 2) { 
            s += '0'; 
        } 
        return s; 
    }