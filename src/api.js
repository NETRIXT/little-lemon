const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  
  export const fetchAPI = function (date) {
    return new Promise((resolve, reject) => {
      let result = [];
      let random = seededRandom(date);
  
      for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
          result.push(i + ':00');
        }
        if (random() < 0.5) {
          result.push(i + ':30');
        }
      }
  
    
      setTimeout(() => {
        resolve(result); 
      }, 500); 
    });
  };
  
  
  export function submitAPI(formData) {
    return true;
  }